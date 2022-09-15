import React from "react";
import './SignUp.css'
import { Header } from "../Header/Header";
import { InputPassword, InputEmail, InputText } from "../commons/inputs";
import { Button } from '../commons/buttons.jsx'



export const SignUp = () => {

  return (
    <div className="sign">
      <Header 
      title={'Sign Up'}
      description={'Create a new account'}
      />
      <form className="sign__form">
        <InputEmail label={'email'}/>
        <InputText label={'first name'} name={"First Name"}/>
        <InputText label={'last name'} name={"Last Name"}/>
        <InputPassword label={'password'}/>
        <InputPassword label={'confirm password'}/>
        <Button body={"Register"}/>
      </form>
      
    </div>
  )
}