import React, {FC} from "react"
import { createContext } from "react"
import { IChildrenProps } from '../types/types'

interface IAuthContext {
  isAuth: boolean
}

const authContext: IAuthContext = {
  isAuth: true
}

const userData = {
  login: 'admin',
  password: 'admin'
}

localStorage.setItem('user', JSON.stringify(userData))

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider: FC<IChildrenProps> = ({children}) => {

  return <AuthContext.Provider value={authContext}>
     {children}
  </AuthContext.Provider>
}