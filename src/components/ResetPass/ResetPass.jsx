import React from "react";
import { Header } from "../Header/Header";
import { InputPassword } from "../commons/inputs";
import { Button } from "../commons/buttons";
import { Footer } from "../Footer/Footer";
import './ResetPass.css'

export const ResetPass = () => {

  return (
    <div className="reset-pass">
      <Header 
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
      <Footer />
    </div>
  )
}