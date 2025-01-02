import React, { ReactNode, useState } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router'
import { login } from '../services/api'

export const AuthProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children
}) => {
  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  const authenticate = async (username: string, password: string) => {
    try {
      const response = await login(username, password)

      if (response.data.user.is_superuser) {
        setIsAdmin(true)
        localStorage.setItem('isAdmin', response.data.user.is_superuser)
        navigate('/admin')
      } else if (response.status === 200) {
        navigate('/')
      }
    } catch (error) {
      console.error(error)
      throw new Error(
        'Login failed. Please check your credentials and try again.'
      )
    }
  }

  const logout = () => {
    setIsAdmin(false)
    localStorage.removeItem('isAdmin')
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ isAdmin, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
