import React from 'react'
import './Bage.scss' 


interface BageProps {
  color: string;
  bgColor: string;
  text: string;
}

export const Bage = ({color, bgColor, text}: BageProps) => {
  return (
    <div className='bage' style={{color: color, backgroundColor: bgColor}}>
        {text}
    </div>
  )
}
