import React, {useState} from "react";
import './inputs.css'
import eye from '../assets/eye.svg'
import eyeHide from '../assets/eyeHide.svg'


export const InputPassword = ({ label, ...props }) => {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(eyeHide)

  return (
    <div className="input">
      <label className="input__lebel">{label}</label>
        <input 
          className="input__password" 
          type={type} 
          name="password" 
          placeholder="Password"/>
      <img 
      className="input__eye" 
      src={icon} 
      onClick={() => {
        if(type === "password") {
          setIcon(eye)
          setType('text')
        } else {
          setIcon(eyeHide)
          setType('password')
        }
      }} 

      alt="eye"/>    
    </div>
  )
}

export const InputText = ({ label, name, type, ...props }) => {

  return (
    <div>
      <label className="input__lebel">{label}</label>
        <input 
          className="input__text" 
          name={name} 
          type={type} 
          placeholder="Email address"/>
    </div>
  )
}