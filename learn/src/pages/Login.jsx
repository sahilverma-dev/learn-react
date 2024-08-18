import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <button
        onClick={() => {
          loginUser("sahil");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
