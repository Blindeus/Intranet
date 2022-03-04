import { useCallback, useContext, useReducer } from "react";
import { AuthContext } from "../../auth/authContext";
import { authReducer, initialState } from "../../reducers/authReducer";
import { authTypes } from "../../types/types";

export const useAuthContext = () => useContext(AuthContext);

export const useAuthentication = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const login = useCallback((token) => {
    dispatch({ type: authTypes.login, token: token });
  }, []);
  const logout = useCallback(() => {
    dispatch({ type: authTypes.logout });
  }, []);

  return { state, login, logout };
};
