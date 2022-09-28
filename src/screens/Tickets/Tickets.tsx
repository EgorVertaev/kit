import React from 'react'
import { TicketsTable } from './TicketsTable/TicketsTable'
import './Tickets.scss'


export const Tickets = () => {

  return (
    <div className='tickets'>
      <TicketsTable/>
    </div>
  )
}
