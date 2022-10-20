import React, { useState } from "react";
import "./Login.scss";
import { InputText } from "../../components/Inputs/InputText/InputText";
import { InputPassword } from "../../components/Inputs/InputPassword/InputPassword";
import { Button } from "../../components/Buttons/buttons";
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { AuthFooter } from "../../components/AuthFooter/AuthFooter";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginRequested } from "../../redux/Auth/authActions";

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const errorMessage = useSelector((state: any) => state.auth.error);

  const [userEnterLogin, setUserEnterLogin] = useState("");
  const [userEnterPassword, setUserEnterPassword] = useState("");

  const loginCompare = () => {
    dispatch(loginRequested(userEnterLogin, userEnterPassword))
  };

  if (isAuth) {
    return <Navigate to={"/overview"} />;
  }

  return (
    <div className="login">
      <AuthHeader
        title={"Log In to Dashboard Kit"}
        description={"Enter your email and password"}
      />

      <form className="login__form" onSubmit={(e) => e.preventDefault()}>
        <InputText
          label={"email"}
          type={"emeil"}
          name={"emeil"}
          observer={setUserEnterLogin}
        />
        <InputPassword label={"password"} observer={setUserEnterPassword} />
        <div className="login__error">
          {errorMessage}
        </div>
        <div className="login__btn" onClick={loginCompare}>
          <Button body={"Log In"} />
        </div>
      </form>
      <AuthFooter />
    </div>
  );
};
