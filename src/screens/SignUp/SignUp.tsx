import React from "react";
import './SignUp.css'
import { AuthHeader } from "../AuthHeader";
import { InputPassword, InputText } from "../../components/inputs/inputs";
import { Button } from "../../components/buttons/buttons";


export const SignUp = () => {

  return (
    <div className="sign">
      <AuthHeader 
      title={'Sign Up'}
      description={'Create a new account'}
      />
      <form className="sign__form">
        <InputText label={'email'} type={'email'} name={'email'}/>
        <InputText label={'first name'} name={"First Name"} type={'text'}/>
        <InputText label={'last name'} name={"Last Name"} type={'text'}/>
        <InputPassword label={'password'}/>
        <InputPassword label={'confirm password'}/>
        <Button body={"Register"}/>
      </form>
      
    </div>
  )
}