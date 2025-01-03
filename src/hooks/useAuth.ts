import { useContext } from 'react'
import { AuthContext } from '../store/AuthContext'

export const useAuth = () => {
  const contextLogin = useContext(AuthContext)

  if (!contextLogin) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return contextLogin
}
