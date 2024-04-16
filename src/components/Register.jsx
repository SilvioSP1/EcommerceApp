import { FormRegister } from "./Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/user/UserSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthService from "../api/services/AuthService"

import React from "react";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password, name, lastname, phone, birthDate) => {
    const auth = getAuth();
    const user = {
      user_name: name,
      user_lastname: lastname,
      user_email: email,
      user_phone_number: phone,
      user_password_hash: password,
      user_date_of_birth: birthDate
    }
    AuthService.signUp(user)
      .then(() => {
        AuthService.signIn(email,password)
          .then((data) => {
            dispatch(
              setUser({
                email: email,
                token: data.accessToken,
                refreshToken: data.refreshToken,
                id: data.user_id
              })
            )
            navigate("/");
          })
          .catch(() => alert("User not found"))
      })
      .catch(() => alert("Incorrect Data Entered!"));
  };

  return (
    <>
      <FormRegister title="SIGN UP" handleClick={handleRegister} />
    </>
  );
};

export default Register;
