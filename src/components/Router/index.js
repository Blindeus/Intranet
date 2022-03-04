import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { useAuthentication } from "../../hooks/auth/useAuthentication";
import RequireAuth from "./RequireAuth/RequireAuth";
import { routes } from "./routes";

const Router = () => {
  const authContext = useAuthentication();
  return (
    <BrowserRouter>
      <AuthContext.Provider value={authContext}>
        <Routes>
          {routes.map(({ path, isPrivate, Element }) =>
            isPrivate ? (
              <Route
                key={path}
                path={path}
                element={
                  <RequireAuth>
                    <Element />
                  </RequireAuth>
                }
              />
            ) : (
              <Route key={path} path={path} element={<Element />} />
            )
          )}
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
