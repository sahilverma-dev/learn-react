import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// npm i react-router-dom

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await api("/todos");

        setTodos(data);
      } catch (error) {
        alert("error hai");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {isLoading
        ? "loading"
        : todos.map((todo) => (
            <Link to={`/todo/${todo?.id}`} key={todo?.id}>
              {todo?.title}
            </Link>
          ))}
    </div>
  );
};

export default Home;
