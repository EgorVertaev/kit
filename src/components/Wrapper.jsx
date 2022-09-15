import React from "react";
import logo from "./../assets/logo.svg"
import './Wrapper.css'

const LoginWrapper = ({ component }) => {

  return (
    <div className='wrapper'>
      <div className='wrapper__header'> 
        <img className="wrapper__logo" src={logo} alt="logo"/>
        <h1 className="wrapper__title">Dashboard Kit</h1>
      </div>
      {component}
    </div>
  )
}

export default LoginWrapper