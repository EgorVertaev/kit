import React from "react";
import './SignUp.scss'
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { InputPassword } from "../../components/Inputs/InputPassword/InputPassword";
import {InputText } from '../../components/Inputs/InputText/InputText'
import { Button } from "../../components/Buttons/buttons";


export const SignUp = () => {

  return (
    <div className="sign">
      <AuthHeader 
      title={'Sign Up'}
      description={'Create a new account'}
      />
      <form className="sign__form">
        <InputText label={'email'} type={'email'} name={'email'} observer={() => null}/>
        <InputText label={'first name'} name={"First Name"} type={'text'} observer={() => null}/>
        <InputText label={'last name'} name={"Last Name"} type={'text'} observer={() => null}/>
        <InputPassword label={'password'} observer={() => null}/>
        <InputPassword label={'confirm password'} observer={() => null}/>
        <Button body={"Register"}/>
      </form>
      
    </div>
  )
}