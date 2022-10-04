import React from "react";
import './Login.scss'
import { InputText } from "../../components/Inputs/InputText/InputText";
import { InputPassword } from "../../components/Inputs/InputPassword/InputPassword";
import { Button } from "../../components/Buttons/buttons";
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { AuthFooter } from "../../components/AuthFooter/AuthFooter";
 

export const Login = () => {

  return (
    <div className="login">
        <AuthHeader 
        title={'Log In to Dashboard Kit'}
        description={'Enter your email and password'}
        />

        <form className="login__form">
          <InputText label={'email'} type={'emeil'} name={"emeil"}/>
          <InputPassword label={"password"}/>
          <div className="login__btn">
            <Button body={"Log In"}/>
          </div>
        </form>
        <AuthFooter/> 
    </div>
  )
}
