import React, { FC } from "react";
import './AuthHeader.scss'

interface IAuthFooterProps {
  title: string
  description: string
}

export const AuthHeader: FC<IAuthFooterProps> = ({ title, description }) => {

  return (
    <div className="auth-header">
      <h1 className="auth-header__title">
        {title}
      </h1>
      <p className="auth-header__description">
        {description}
      </p>
    </div>
  )
}