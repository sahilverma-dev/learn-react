import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams<{ id: string }>();
  return <div>{id}</div>;
};

export default User;
