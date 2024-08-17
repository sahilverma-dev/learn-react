import { useState, useEffect } from "react";
import axios from "axios";

import { useSearchParams } from "react-router-dom";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// // npm i react-router-dom

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [params, setParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

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

  const home = params.get("home") || "";

  return (
    <div>
      {home}
      home
      <button
        onClick={() => {
          setParams((prevParams) => {
            prevParams.set("home", "hello");
            return prevParams;
          });
        }}
      >
        Set home data
      </button>
      <button
        onClick={() => {
          setParams((prevParams) => {
            prevParams.set("new", "world");
            return prevParams;
          });
        }}
      >
        Set new data
      </button>
      {/* {isLoading
        ? "loading"
        : todos.map((todo) => (
            <Link to={`/todo/${todo?.id}`} key={todo?.id}>
              {todo?.title}
            </Link>
          ))} */}
    </div>
  );
};

export default Home;
