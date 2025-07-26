import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO, LOGO_IMG } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute top-0 w-screen left-0 bg-gradient-to-b from-black flex justify-between">
      <img className="w-1/12 z-9" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 gap-2">
          <img className="w-12 h-12" src={LOGO_IMG} alt="p-logo" />
          <button
            className="text-white font-bold bg-red-700 p-2 cursor-pointer"
            onClick={handleLogOut}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
