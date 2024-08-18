import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const NonAuthLayout = () => {
  const { user } = useAuth();

  if (user) return <Navigate to={"/"} />;
  else
    return (
      <>
        <Outlet />
      </>
    );
};

export default NonAuthLayout;
