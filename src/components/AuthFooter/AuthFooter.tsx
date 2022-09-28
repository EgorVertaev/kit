import React from "react";
import { NavLink } from "react-router-dom";
import './AuthFooter.scss'

export const AuthFooter = () => {

  return (
    <div className="auth-footer">
      <span className="auth-footer__text">
          Don’t have an account?   
        </span>
        <NavLink className="auth-footer__link" to={'/SignUp'}>Sign up</NavLink>        
    </div>
  )
}