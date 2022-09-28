import React from 'react'
import './SettingsContainer.scss'
import { Header } from '../../components/Header/Header'
import { Settings } from './Settings'


export const SettingsContainer = () => {
  return (
    <div className='settings-container'>
     <Header title={'Settings'}/>
     <Settings />
    </div>
  )
}
