import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouterProps {
  children: ReactNode;
}

const PrivateRouter = ({ children }: PrivateRouterProps): ReactNode => {
  const token = localStorage.getItem("Token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRouter;
