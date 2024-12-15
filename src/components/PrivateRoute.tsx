import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectTo?: string;
  children?: JSX.Element;
}

export default function PrivateRoute({ isAllowed, redirectTo = '/', children }: ProtectedRouteProps) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
}
