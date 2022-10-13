import React, {useState, FC} from "react";
import './InputPassword.scss'
import {Eye, EyeHide} from "../../Icons/Icon"

interface IInputPasswordProps {
  label: string
  observer: (e: string) => void
}

export const InputPassword: FC<IInputPasswordProps> = ({ label, observer }) => {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(false)

  return (
    <div className="input">
      <label className="input__lebel">{label}</label>
        <input 
          className="input__password" 
          type={type} 
          onChange={e => observer(e.currentTarget.value)}
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
