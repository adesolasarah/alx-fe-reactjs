import { Navigate } from "react-router-dom";

function useAuth(isAuthenticated) {
  return { isAuthenticated };
}

function ProtectedRoute({ isAuthenticated, children }) {
  const auth = useAuth(isAuthenticated);
  if (!auth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
