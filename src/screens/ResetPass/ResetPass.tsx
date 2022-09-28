import React from "react";
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { AuthFooter } from "../../components/AuthFooter/AuthFooter";
import { InputPassword } from "../../components/Inputs/InputPassword/InputPassword";
import { Button } from "../../components/Buttons/buttons";
import './ResetPass.scss'

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