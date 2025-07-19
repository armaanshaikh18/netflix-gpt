import React from "react";

export const ValidateForm = (email, password, name) => {
  const nameValidate = /^[A-Za-zs]{1,}[.]{0,1}[A-Za-zs]{0,}$/.test(name);
  const emailValidate = /^\S+@\S+\.\S+$/.test(email);
  const passwordValidate =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!emailValidate) {
    return "Email is not valid";
  }
  if (!nameValidate) {
    return "UserName is not valid";
  }

  if (!passwordValidate) {
    return "Password is not valid";
  }

  return null;
};
