import React, {FC, useState} from "react"
import { createContext } from "react"
import { IChildrenProps } from '../types/types'

interface IAuthContext {
  isAuth: boolean
  logOut: () => void
}

const userData = {
  login: 'admin',
  password: 'admin'
}

localStorage.setItem('user', JSON.stringify(userData))

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider: FC<IChildrenProps> = ({children}) => {

  const [isAuth, setIsAuth] = useState(true)

  const logOut = () => setIsAuth(false)
  const authContext: IAuthContext = {
    isAuth: isAuth,
    logOut,
  }

  return <AuthContext.Provider value={authContext}>
     {children}
  </AuthContext.Provider>
}