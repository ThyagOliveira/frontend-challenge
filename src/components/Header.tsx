import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import '../styles/components/Header.scss'

export const Header: React.FunctionComponent = () => {
  const { isAdmin, logout } = useAuth()

  return (
    <header className="header">
      <div className="logo">
        <Link to={`${isAdmin ? '/admin' : '/'}`}>Good Reads Books</Link>
      </div>
      <nav className="nav">
        <ul>
          {isAdmin && (
            <>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li onClick={logout} className="logout">
                Logout
              </li>
            </>
          )}
          {!isAdmin && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
