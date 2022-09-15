import React from "react";
import './buttons.css'


export const Button = ({ body, ...props }) => {

  return (
    <button className="btn">{body}</button>  
  )
}