import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
export const Navbar = (props) => {

  const isActive = navData => navData.isActive ? "navbar__link--active" : "navbar__link"

  return (
    <ul className="navbar">
      <li className="navbar__item">
        <NavLink className={isActive} to={"/login"}>Login</NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className={isActive} to={"/SignUp"}>Sign Up</NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className={isActive} to={"/ForgotPass"}>Forgot Password</NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className={isActive} to={"/ResetPass"}>Reset Password</NavLink>
      </li>
    </ul>
  )

}