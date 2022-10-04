import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { IChildrenProps } from '../types/types'
import { useAuth } from '../hooks/useAuth'

export const RequireAuth: FC<IChildrenProps> = ({ children} ) => {
  const context = useAuth();
   
  if(!context?.isAuth) {
    return <Navigate to={'/login'}/>
  }

  return (
    <>
      {children}
    </>
  )
}
