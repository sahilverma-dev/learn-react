import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// npm i react-router-dom

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await api("/todos");

        setPosts(data);
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
        : posts.map((post) => <div key={post?.id}>{post?.title}</div>)}
    </div>
  );
};

export default App;
