import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute top-0 w-screen left-0 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-1/12"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex p-2 gap-2">
          <img
            className="w-12 h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95gUb5ESW97Bw9C7SL5Kbr1lufVqp5OGMVQ&s"
            alt="p-logo"
          />
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
