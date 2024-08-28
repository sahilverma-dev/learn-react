import ReactQueryProvider from "./ReactQueryProvider";

const Providers = ({ children }: React.PropsWithChildren) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
