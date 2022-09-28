import React, { FC } from "react";
import './buttons.scss'


interface IButtonProps {
  body: string,
}

export const Button: FC<IButtonProps> = ({ body }) => {
  
  return (
    <button 
    className="btn" 
    >
      {body}</button>  
  )
}