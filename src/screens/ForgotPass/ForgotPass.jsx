import React from "react";
import { AuthHeader } from "../AuthHeader";
import { AuthFooter } from "../AuthFooter";
import { InputText } from "../../components/inputs";
import { Button } from "../../components/buttons";
import './ForgotPass.css'

export const ForgotPass = () => {

  return (
    <div className="forgot-pass">
      <AuthHeader 
      title={'Forgot password?'}
      description={'Enter your email from registered account'}
      />
      <form className="forgot-pass__form">
        <InputText label={'email'} type={"emeil"}/>
        <div className="forgot-pass__btn">
          <Button body={"Send"}/>
        </div>
      </form>
      <AuthFooter />
    </div>
  )
}