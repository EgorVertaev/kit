import React from 'react'
import { Header } from '../../components/Header/Header'
import { Tickets } from './Tickets'

export const TicketsConteiner = () => {
  
  return (
    <div>
      <Header title={"Tickets"}/>
      <Tickets/>
    </div>
  )
}