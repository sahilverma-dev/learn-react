import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "./Home";

const Post = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api(`/todos/${id}`);
        setTodo(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
      {todo?.title}
    </div>
  );
};

export default Post;
