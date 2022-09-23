import React, { FC } from 'react'
import { UserState } from '../../hook/userState'
import './Header.css'

interface IHeaderProps {
  title: string
}


export const Header: FC<IHeaderProps> = ({title}) => {
  const userInfo = UserState()

  return (
    <div className='component-header'>
      <div className="component-header__title">
        {title}
      </div>
      <div className="component-header__user">
        <span className="component-header__name">{userInfo?.firstName} {userInfo?.lastName}</span>
        <img className='component-header__photo' src="https://via.placeholder.com/40" alt="user" />
      </div>
    </div>
  )
}
