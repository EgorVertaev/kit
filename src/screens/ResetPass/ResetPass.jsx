import React from "react";
import { AuthHeader } from "../AuthHeader";
import { AuthFooter } from "../AuthFooter";
import { InputPassword } from "../../components/inputs";
import { Button } from "../../components/buttons";
import './ResetPass.css'

export const ResetPass = () => {

  return (
    <div className="reset-pass">
      <AuthHeader 
      title={'Reset Password'}
      description={'Enter new password'}
      />
      <form className="reset-pass__form">
        <InputPassword label={'new password'}/>
        <InputPassword label={'confirm new password'}/>
        <div className="reset-pass__btn">
          <Button body={"Send"}/>
        </div> 
      </form>
      <AuthFooter />
    </div>
  )
}