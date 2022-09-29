import React from 'react'
import './TicketLabel.scss'

interface ITicketLabelProps {
  color: string;
  priority: string;
}

export const TicketLabel = ({priority, color}: ITicketLabelProps) => {
  return (
    <div className='ticket-label' style={{backgroundColor: `${color}`}}>
      {priority}
    </div>
  )
}
