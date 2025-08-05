import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { BG_URL, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [validateMessage, setValidateMessage] = useState("");

  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleValidateForm = (e) => {
    e.preventDefault();
    const message = ValidateForm(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setValidateMessage(message);
    if (message) return;

    if (!showSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.user, {
            displayName: name?.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setValidateMessage(error?.message);
            });
        })
        .catch((error) => {
          const errorCode = error?.code;
          const errorMessage = error?.message;
          setValidateMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential?.user;
        })
        .catch((error) => {
          const errorCode = error?.code;
          const errorMessage = error?.message;
          setValidateMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <div>
        <Header />
        <div className="fixed">
          <img
            src={BG_URL}
            alt="logo"
            className="h-screen object-cover md:h-auto"
          />
        </div>
      </div>

      <form className="absolute right-0 left-0 top-60  md:top-0  md:w-3/12 mx-auto my-36 p-12 bg-black text-white rounded-2xl opacity-90">
        <h1 className="text-3xl font-bold p-2 my-2">
          {showSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {!showSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-2 my-4 bg-gray-700 w-full"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-2 my-4 bg-gray-700 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-2 my-4 bg-gray-700 w-full"
        />
        <p className="text-red-500 font-normal p-2 my-4">{validateMessage}</p>
        <button
          className="bg-red-800 p-4 my-4 w-full rounded-2xl cursor-pointer"
          onClick={handleValidateForm}
        >
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
