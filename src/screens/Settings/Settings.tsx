import React from 'react'
import { UserState } from '../../hooks/userState'
import './Settings.scss'
import { Image } from "antd"

export const Settings = () => {
  const myData = UserState()

  
  return (
    <div className='settings'>
      <div className="settings__body">
        <Image src={myData?.image} alt={"user-picture"}/>
        <div>First name: {myData?.firstName}</div>
        <div>Last name: {myData?.lastName}</div>
        <div>Email: {myData?.email}</div>
        <div>Adress: {myData?.adress}</div>
      </div>
    </div>
  )
}
