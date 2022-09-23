import React from 'react'
import { Header } from '../Header/Header'
import { Settings } from './Settings'
import './SettingsContainer.css'
export const SettingsContainer = () => {
  return (
    <div className='settings-container'>
     <Header title={'Settings'}/>
     <Settings />
    </div>
  )
}
