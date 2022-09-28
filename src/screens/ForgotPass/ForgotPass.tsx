import React from "react";
import './ForgotPass.scss'
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { AuthFooter } from "../../components/AuthFooter/AuthFooter";
import { InputText } from "../../components/Inputs/InputText/InputText";
import { Button } from "../../components/Buttons/buttons";

export const ForgotPass = () => {

  return (
    <div className="forgot-pass">
      <AuthHeader 
      title={'Forgot password?'}
      description={'Enter your email from registered account'}
      />
      <form className="forgot-pass__form">
        <InputText label={'email'} type={"email"} name={"email"}/>
        <div className="forgot-pass__btn">
          <Button body={"Send"}/>
        </div>
      </form>
      <AuthFooter />
    </div>
  )
}