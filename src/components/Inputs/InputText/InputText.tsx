import React, {FC} from "react";
import './InputText.scss'


interface IinputTextProps {
  label: string
  name: string
  type: string
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