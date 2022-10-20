import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { IChildrenProps } from '../types/types'


export const RequireAuth: FC<IChildrenProps> = ({ children} ) => {
  const authToken = localStorage.getItem('token')
  if(authToken === null) {
    return <Navigate to={'/login'}/>
  }

  return (
    <>
      {children}
    </>
  )
}
