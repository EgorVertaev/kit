import { useContext } from 'react'
import { contextUser } from '../Hoc/UserProvider'

export const UserState = () => {
  return useContext(contextUser)
}