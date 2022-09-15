import React from "react";
import { Header } from "../Header/Header";
import { InputEmail } from "../commons/inputs";
import { Button } from "../commons/buttons";
import { Footer } from "../Footer/Footer";
import './ForgotPass.css'

export const ForgotPass = () => {

  return (
    <div className="forgot-pass">
      <Header 
      title={'Forgot password?'}
      description={'Enter your email from registered account'}
      />
      <form className="forgot-pass__form">
        <InputEmail label={'email'}/>
        <div className="forgot-pass__btn">
          <Button body={"Send"}/>
        </div>
      </form>
      <Footer />
    </div>
  )
}