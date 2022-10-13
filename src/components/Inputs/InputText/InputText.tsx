import React, {FC} from "react";
import './InputText.scss'


interface IinputTextProps {
  label: string
  name: string
  type: string
  observer: (e: string) => void
}

export const InputText: FC<IinputTextProps> = ({ label, name, type, observer }) => {

  return (
    <div>
      <label className="input__lebel">{label}</label>
        <input 
          className="input__text" 
          name={name} 
          type={type} 
          placeholder="Email address"
          onChange={(e) => observer(e.currentTarget.value)}
          />
    </div>
  )
}