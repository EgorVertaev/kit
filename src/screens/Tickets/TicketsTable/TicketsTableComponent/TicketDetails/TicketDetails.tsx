import React from 'react'
import './TicketDetails.scss'


interface ICastomerNameProps {
  image: string
  description: string
  descData: string
}

export const TicketDetails: React.FC<ICastomerNameProps> = ({
  image, description, descData
}) => {
  
  
  return (
    <div className='ticket-detail'>
      <div className="ticket-detail__img">
        <img
          src={image}
          alt="user-profile-img"
          width={44}
          height={44}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="ticket-detail__inner">
        <div className="ticket-detail__description">
          {description}
        </div>
        <div className="ticket-detail__date">
          {descData}
        </div>
      </div>
    </div>
  )
}