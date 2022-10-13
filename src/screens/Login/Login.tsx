import React, { useState } from "react";
import "./Login.scss";
import { InputText } from "../../components/Inputs/InputText/InputText";
import { InputPassword } from "../../components/Inputs/InputPassword/InputPassword";
import { Button } from "../../components/Buttons/buttons";
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { AuthFooter } from "../../components/AuthFooter/AuthFooter";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logIn } from "../../redux/actionCreators";

import { myToken } from "../../constants/constans";

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const { password, login } = useSelector((state: any) => state.auth);

  const [userEnterLogin, setUserEnterLogin] = useState("");
  const [userEnterPassword, setUserEnterPassword] = useState("");

  const loginCompare = () => {
    if (password === userEnterPassword && login === userEnterLogin) {
      dispatch(logIn());
      localStorage.setItem("token", myToken);
    }
    if (password !== userEnterPassword && login !== userEnterLogin) {
      localStorage.clear();
    }
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
        <div className="login__btn" onClick={loginCompare}>
          <Button body={"Log In"} />
        </div>
      </form>
      <AuthFooter />
    </div>
  );
};
