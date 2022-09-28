import { useContext } from 'react'
import { contextUser } from '../hoc/UserProvider'

export const UserState = () => {
  return useContext(contextUser)
}