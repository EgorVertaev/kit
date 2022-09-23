import React, { FC } from 'react'
import { createContext } from 'react'
import { IChildrenProps } from '../types/types'

interface IUserState {
  firstName?: string
  lastName?: string
  email?: string
  adress?: string
}

export const contextUser = createContext<IUserState | null>(null)

const userState: IUserState ={
  firstName: "Egor",
  lastName: "Vertaev",
  email: "example@test.com",
  adress: "ivanova 25, flat 22"
}


export const UserProvider: FC<IChildrenProps> = ({children}) => {
  return ( <contextUser.Provider value={userState}>
      {children}
  </contextUser.Provider>
  )
}
