import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import '../styles/pages/Login.scss'

export const Login: React.FunctionComponent = () => {
  const { authenticate } = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = async () => {
    try {
      await authenticate(username, password)
    } catch (error) {
      console.error(
        'Login failed. Please check your credentials and try again.',
        error
      )
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login Admin</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
