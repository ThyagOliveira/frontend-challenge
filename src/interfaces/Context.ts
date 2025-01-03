export interface AuthContextType {
  isAdmin: boolean
  authenticate: (username: string, password: string) => Promise<void>
  logout: () => void
}
