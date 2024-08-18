import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

import { FcGoogle as GoogleIcon } from "react-icons/fc";

const Login = () => {
  const { login } = useAuth();
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <Button onClick={login} className="gap-2">
        <GoogleIcon />
        Login with Google
      </Button>
    </div>
  );
};

export default Login;
