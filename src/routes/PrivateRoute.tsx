import { Navigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

interface PrivateRouteProps {
  children: JSX.Element
}

export const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  children
}) => {
  const { isAdmin } = useAuth()

  if (!isAdmin) return <Navigate to="/" replace />

  return children
}
