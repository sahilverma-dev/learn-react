// import { PropsWithChildren, ReactNode, useRef, useState } from "react";

import { useEffect, useState } from "react";
import { useStore } from "./hooks/useStore";
import { Video, VideoResponse } from "./interfaces";
import axios from "axios";
import { useCounterStore } from "./stores/useCounterStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
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

// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from "./hooks/useAuth";
// const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });

// export type Todos = Todo[];

// export interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const App = () => {
//   const [todos, setTodos] = useState<Todos>([]);

//   const { login } = useAuth();

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await api<Todos>({
//         url: "/todos",
//       });
//       setTodos(data);

//       console.log(data);
//     };

//     getData();
//   }, []);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           login({
//             email: "asdf",
//             name: "asfasd",
//           });
//         }}
//       >
//         login
//       </button>
//       {todos.map((item) => (
//         <div key={item.id}>{item.title}</div>
//       ))}
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const { state, dispatch } = useStore();

//   const [videos, setVideos] = useState<Video[]>([]);
//   const { user, theme, watchLater } = state;

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await axios<VideoResponse>(
//         "https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest"
//       );
//       setVideos(data.data.data);
//     };

//     getData();
//   }, []);

//   return (
//     <div>
//       {user ? user.name : "No user"}
//       {user ? (
//         <button
//           onClick={() => {
//             dispatch({
//               type: "LOGOUT",
//             });
//           }}
//         >
//           Logout
//         </button>
//       ) : (
//         <button
//           onClick={() => {
//             dispatch({
//               type: "LOGIN",
//               payload: {
//                 user: {
//                   name: "Sahil",
//                 },
//               },
//             });
//           }}
//         >
//           Login
//         </button>
//       )}

//       {theme}

//       <button
//         onClick={() => {
//           dispatch({
//             type: "TOGGLE_THEME",
//           });
//         }}
//       >
//         Toggle Theme
//       </button>

//       {videos.map((video) => (
//         <div key={video.items.id}>
//           <button
//             onClick={() => {
//               dispatch({
//                 type: "ADD_TO_WATCH_LATER",
//                 payload: {
//                   video,
//                 },
//               });
//             }}
//           >
//             Add To Watch Later
//           </button>
//           <img src={video.items.snippet.thumbnails.default.url} alt="" />
//         </div>
//       ))}

//       <h1>Watch Later</h1>

//       {watchLater.length === 0
//         ? "no videos"
//         : watchLater.map((video) => (
//             <div key={video.items.id}>
//               <img src={video.items.snippet.thumbnails.default.url} alt="" />
//             </div>
//           ))}
//     </div>
//   );
// };

// export default App;

// const getData = () => {
//   const data = useCounterStore.getState();
//   return data;
// };

// const setData = () => {
//   const data = useCounterStore.setState({ count: 10 });
//   return data;
// };

// const App = () => {
//   const count = useCounterStore((state) => state.count);
//   const decrease = useCounterStore((state) => state.decrease);
//   const increase = useCounterStore((state) => state.increase);

//   return (
//     <div>
//       <button onClick={decrease}>increase</button>
//       {count}
//       <button onClick={increase}>increase</button>
//       <button
//         onClick={() => {
//           console.log(getData());
//         }}
//       >
//         get DATa
//       </button>
//       <button
//         onClick={() => {
//           console.log(setData());
//         }}
//       >
//         Set Data
//       </button>
//     </div>
//   );
// };

// export default App;

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const queryClient = useQueryClient();
  // const postsQuery = useQuery({
  //   queryKey: ["post"],
  //   queryFn: async () => {
  //     const { data } = await api<Post[]>("/posts");
  //     return data;
  //   },
  // });

  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(5);
  const {
    isLoading,
    refetch,
    data: posts,
    isError,
  } = useQuery({
    queryKey: ["post", start, limit],
    queryFn: async () => {
      const { data } = await api<Post[]>({
        url: "/posts",
        params: {
          _start: start,
          _limit: limit,
        },
        // ?_start=0&_limit=5%20
      });
      return data;
    },
  });

  const postMutation = useMutation({
    mutationKey: ["add-post"],
    mutationFn: async () => {
      const { data } = await api<Post>({
        url: "/posts",
        method: "POST",
        data: {
          title: "new_title",
          body: "new_body",
          userId: "userid",
        },
      });

      return data;
    },
    onSuccess: (post) => {
      // add to our posts
      queryClient.invalidateQueries({
        queryKey: ["post", start, limit],
      });
      // queryClient.setQueryData(
      //   post,
      //   (state) => {
      //     console.log(state);
      //   },
      //   {}
      // );
    },
  });

  return (
    <div>
      {isLoading && "loading"}
      {isError && (
        <div>
          <button onClick={() => refetch()}>Refetch</button>
        </div>
      )}
      {posts && posts.map((post) => <p key={post.id}>{post.title}</p>)}
      limit
      {[5, 20, 50].map((i) => (
        <button
          key={i}
          onClick={() => {
            setLimit(i);
          }}
        >
          {i}
        </button>
      ))}
      page
      {Array.from({ length: 10 }).map((_, i) => (
        <button
          key={i}
          onClick={() => {
            setStart(i);
          }}
        >
          {i}
        </button>
      ))}
      <button
        disabled={postMutation.isPending}
        onClick={() => {
          postMutation.mutateAsync();
        }}
      >
        {postMutation.isPending ? "Pending" : "Mutate"}
      </button>
    </div>
  );
};

export default App;
