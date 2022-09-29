import React from 'react'
import './CastomerName.scss'

interface ICastomerNameProps {
  name: string
  nameData: string
}

export const CastomerName: React.FC<ICastomerNameProps> = ({
  name, nameData
}) => {
  return (
    <div className='castomer-name'>
      <div className="castomer-name__text">
        {name}
      </div>
      <div className="castomer-name__date">
        {nameData}
      </div>
    </div>
  )
}

