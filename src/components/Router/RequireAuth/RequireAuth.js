import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../../hooks/auth/useAuthentication";

function RequireAuth({ children }) {
  let auth = useAuthContext();
  let location = useLocation();
  console.log("state auth", auth.state);
  if (!auth.state.logged) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
