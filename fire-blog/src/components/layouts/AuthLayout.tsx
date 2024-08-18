import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../shared/Header";

const AuthLayout = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to={"/login"} />;
  else
    return (
      <>
        <Header />
        <main className="w-full max-w-6xl mx-auto">
          <Outlet />
        </main>
      </>
    );
};

export default AuthLayout;
