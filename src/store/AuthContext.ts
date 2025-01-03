import { createContext } from 'react'
import { AuthContextType } from '../interfaces/Context'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
