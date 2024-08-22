// import { PropsWithChildren, ReactNode, useRef, useState } from "react";

import Button from "./componetns/Button";

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

const App = () => {
  return (
    <div>
      <Button className="asfasd" variant="secondary">
        asfasdf
      </Button>
    </div>
  );
};

export default App;
