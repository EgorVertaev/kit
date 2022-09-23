import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { IChildrenProps } from '../types/types'
import { useAuth } from '../hook/useAuth'

export const RequireAuth: FC<IChildrenProps> = ({ children} ) => {
  const context = useAuth();
  console.log(context)
  if(!context?.isAuth) {
    return <Navigate to="/login"/>
  }

  return (
    <div>
      {children}
    </div>
  )
}
