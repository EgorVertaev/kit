import React from "react";
import './Login.css'
import { InputPassword, InputText } from "../../components/inputs";
import { Button } from "../../components/buttons";
import { AuthHeader } from "../AuthHeader";
import { AuthFooter } from "../AuthFooter";
// import  Wrapper  from "../../components/Wrapper"
 

export const Login = () => {

  return (
    <div className="login">
        <AuthHeader 
        title={'Log In to Dashboard Kit'}
        description={'Enter your email and password'}
        />

        <form className="login__form">
          <InputText label={'email'} type={'emeil'} name={"emeil"}/>
          <InputPassword label={'password'}/>
          <div className="login__btn">
            <Button body={"Log In"}/>
          </div>
        </form>
        <AuthFooter/> 
    </div>
  )
}
