import React from 'react'
import { Header } from '../../components/Header/Header'
import { Contacts } from './Contacts'


export const ContactsContainer = () =>  {
  
  return (
    <div className='contacts-container'>
      <Header title={"Contacts"}/>
      <Contacts/>
    </div>
  )
}
