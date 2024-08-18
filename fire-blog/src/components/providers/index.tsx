import { Toaster } from "sonner";
import { AuthProvider } from "./AuthProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import { ThemeProvider } from "./ThemeProvider";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <ReactQueryProvider>
        <AuthProvider>
          {children}

          <Toaster richColors />
        </AuthProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
};

export default Providers;
