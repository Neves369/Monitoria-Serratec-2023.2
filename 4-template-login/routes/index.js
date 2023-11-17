import React, { useContext } from "react";
import AuthContext from "../context/auth";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  
  const { signedUser } = useContext(AuthContext);

  return (
    signedUser? <AppRoutes/> : <AuthRoutes/>
  );
};

export default Routes;


