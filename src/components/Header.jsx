import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO, LOGO_IMG, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleSearchview } from "../redux/gptSlice";
import { lang } from "../utils/langConstant";
import { langChange } from "../redux/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const searchGptview = useSelector((store) => store.gpt.showSearchView);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe;
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleSearchview());
  };

  const handleLangChange = (e) => {
    dispatch(langChange(e.target.value));
  };

  return (
    <div className="absolute z-10 top-0 w-screen left-0 bg-gradient-to-b from-black flex md:flex-row flex-col justify-between">
      <img className="w-3/12 md:w-1/12 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 justify-evenly md:gap-2">
          {searchGptview && (
            <select
              className="bg-red-700 text-white font-bold rounded-lg p-2 border-none"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang?.identifier} value={lang?.identifier}>
                  {lang?.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="p-2 text-white bg-red-700 font-bold cursor-pointer rounded-lg"
            onClick={handleGPTSearch}
          >
            {searchGptview ? "Home" : " GPT Search"}
          </button>
          <button
            className="text-white font-bold bg-red-700 p-2 cursor-pointer rounded-lg"
            onClick={handleLogOut}
          >
            Log out
          </button>
          <img className="w-12 h-12" src={LOGO_IMG} alt="p-logo" />
        </div>
      )}
    </div>
  );
};

export default Header;
