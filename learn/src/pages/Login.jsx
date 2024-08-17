import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
  return (
    <div>
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
