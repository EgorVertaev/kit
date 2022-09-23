import React from 'react'
import { UserState } from '../../hook/userState'
import './Settings.css'
export const Settings = () => {
  const myData = UserState()

  return (
    <div className='settings'>
      <div className="settings__body">
        <div>First name: {myData?.firstName}</div>
        <div>Last name: {myData?.lastName}</div>
        <div>Email: {myData?.email}</div>
        <div>Adress: {myData?.adress}</div>
      </div>
    </div>
  )
}
