import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { AuthProvider } from "./hooks/useAuth.tsx";
// import { StoreProvider } from "./hooks/useStore.tsx";
import Providers from "./providers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
