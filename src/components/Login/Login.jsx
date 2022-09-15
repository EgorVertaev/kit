import React from "react";
import './Login.css'
import { Header } from "../Header/Header";
import { InputPassword, InputEmail } from "../commons/inputs";
import { Button } from '../commons/buttons.jsx'
import { Footer } from "../Footer/Footer";



export const Login = () => {

  return (
    <div className="login">
      <Header 
      title={'Log In to Dashboard Kit'}
      description={'Enter your email and password'}
      />

      <form className="login__form">
        <InputEmail label={'email'}/>
        <InputPassword label={'password'}/>
        <div className="login__btn">
          <Button body={"Log In"}/>
        </div>
      </form>
      <Footer/>

    </div>
  )
}
