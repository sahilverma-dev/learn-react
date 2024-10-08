import { Navigate, Outlet } from "react-router-dom";
import Header from "../ui/Header";
import { useAuth } from "../../hooks/useAuth";

const AuthLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={"/login"} replace />;
  } else
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
};

export default AuthLayout;
