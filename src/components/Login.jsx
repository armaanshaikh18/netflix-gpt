import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
  };
  return (
    <>
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_medium.jpg"
          alt="logo"
        />
      </div>

      <form className="absolute right-0 left-0 w-3/12 mx-auto my-36 p-12 bg-black text-white rounded-2xl opacity-90">
        <h1 className="text-3xl font-bold p-2 my-2">
          {showSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {!showSignUp && (
          <input
            type="text"
            placeholder="Enter Name"
            className="p-2 my-4 bg-gray-700 w-full"
          />
        )}
        <input
          type="email"
          placeholder="Enter Email"
          className="p-2 my-4 bg-gray-700 w-full"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-2 my-4 bg-gray-700 w-full"
        />
        <button className="bg-red-800 p-4 my-4 w-full rounded-2xl">
          {showSignUp ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm p-2 my-4 cursor-pointer" onClick={handleSignUp}>
          {showSignUp
            ? "New to Netflix? Sign up now."
            : "Already Registered? Please Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
