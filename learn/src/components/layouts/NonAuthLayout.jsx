import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const NonAuthLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={"/"} replace />;
  } else
    return (
      <div>
        <Outlet />
      </div>
    );
};

export default NonAuthLayout;
