import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { IChildrenProps } from '../types/types'
import { useSelector } from 'react-redux'

export const RequireAuth: FC<IChildrenProps> = ({ children} ) => {
  const isAuth = useSelector((state: any) => state.auth.isAuth)
  
  if(!isAuth) {
    return <Navigate to={'/login'}/>
  }

  return (
    <>
      {children}
    </>
  )
}
