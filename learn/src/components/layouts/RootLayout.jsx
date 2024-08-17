import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../hooks/useAuth";

const RootLayout = () => {
  return (
    <main>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </main>
  );
};

export default RootLayout;
