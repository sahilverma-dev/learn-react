import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
