// import { PropsWithChildren, ReactNode, useRef, useState } from "react";

import { useEffect } from "react";
// import Button from "./componetns/Button";

// type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

// const App = () => {
//   const divRef = useRef<HTMLDivElement>(null);
//   const [firstName, setFirstName] = useState("");

//   const handleClick = (e: ClickEvent) => {
//     console.log(e);
//   };

//   return (
//     <div ref={divRef}>
//       {firstName}

//       <button
//         onClick={() => {
//           setFirstName("asdfasdfsad");
//         }}
//       >
//         Set Name
//       </button>
//       <button
//         onClick={() => {
//           divRef?.current?.remove();
//         }}
//       >
//         clear dom
//       </button>
//       <Child
//         data={{
//           asdfasdf: "asdf",
//           asdfasf: 0,
//         }}
//       >
//         <div>asfasf</div>
//       </Child>
//       <Wrapper>
//         <p>asfasdfasdfs</p>
//       </Wrapper>
//       <button onClick={handleClick}>click</button>
//     </div>
//   );
// };

// export default App;

// interface Test {
//   asdfasdf: string;
//   asdfasf: number;
// }

// interface ChildProp {
//   data: Test;
//   children: ReactNode;
// }

// const Child: React.FC<ChildProp> = ({ data, children }) => {
//   return (
//     <div>
//       {data.asdfasdf}
//       {children}
//     </div>
//   );
// };

// // interface WrapperProps extends PropsWithChildren{

// // }

// const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
//   return <div>{children}</div>;
// };

import { useState } from "react";
import axios from "axios";
import { useAuth } from "./hooks/useAuth";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export type Todos = Todo[];

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todos>([]);

  const { login } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const { data } = await api<Todos>({
        url: "/todos",
      });
      setTodos(data);

      console.log(data);
    };

    getData();
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          login({
            email: "asdf",
            name: "asfasd",
          });
        }}
      >
        login
      </button>
      {todos.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default App;
