import React from "react";

import { Navigate,} from "react-router-dom";

export const PrivateRoute = ({children})= ({
}) => {
 const {user} = useContext(AuthContext)
  return user.logged
  ? <Navigate to="/dashboard" />
  : children
};

