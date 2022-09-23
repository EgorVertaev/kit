import React, { FC } from "react";
import './AuthHeader.css'

interface IAuthFooterProps {
  title: string
  description: string
}

export const AuthHeader: FC<IAuthFooterProps> = ({ title, description }) => {

  return (
    <div className="header">
      <h1 className="header__title">
        {title}
      </h1>
      <p className="header__description">
        {description}
      </p>
    </div>
  )
}