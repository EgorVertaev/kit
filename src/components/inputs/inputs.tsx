import React, {useState, FC} from "react";
import './inputs.css'
import {Eye, EyeHide} from "../../icons/icon"
// import eyeHide from '../assets/eyeHide.svg'

interface IInputPasswordProps {
  label: string
}

interface IinputTextProps {
  label: string
  name: string
  type: string
}

export const InputPassword: FC<IInputPasswordProps> = ({ label }) => {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(false)

  return (
    <div className="input">
      <label className="input__lebel">{label}</label>
        <input 
          className="input__password" 
          type={type} 
          name="password" 
          placeholder="Password"/>
      <div className="input__eye"  onClick={() => {
        if(type === "password") {
          setIcon(true)
          setType('text')
        } else {
          setIcon(false)
          setType('password')
        }
      }} >
        {icon ? <Eye /> : <EyeHide />}  
      </div> 
    </div>
  )
}

export const InputText: FC<IinputTextProps> = ({ label, name, type }) => {

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