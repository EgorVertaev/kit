import React from 'react'
import './TicketDate.scss'

interface ITicketDateProps {
  date: string
  dateTime: string
}

export const TicketDate: React.FC<ITicketDateProps> = ({ date, dateTime}) => {
  return (
    <div className='ticket-date'>
      <div className='ticket-date__date'>{date}</div>
      <div className='ticket-date__time'>{dateTime}</div>
    </div>
  )
}
