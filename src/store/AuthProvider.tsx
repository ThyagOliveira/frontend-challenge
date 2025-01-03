import React, { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from './AuthContext'
import { login } from '../services/api'

export const AuthProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children
}) => {
  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  const authenticate = async (username: string, password: string) => {
    try {
      const response = await login(username, password)

      if (response && response.data.user.is_superuser) {
        setIsAdmin(true)
        response.data.user.password = password
        localStorage.setItem('isAdmin', JSON.stringify(response.data.user))
        navigate('/admin')
      } else if (response && response.status === 200) {
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
