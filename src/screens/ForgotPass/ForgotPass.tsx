import React from "react";
import { AuthHeader } from "../AuthHeader";
import { AuthFooter } from "../AuthFooter";
import { InputText } from "../../components/inputs/inputs";
import { Button } from "../../components/buttons/buttons";
import './ForgotPass.css'

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