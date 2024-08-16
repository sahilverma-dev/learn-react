import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./components/layouts/RootLayout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Todo from "./pages/Todo";
import AuthLayout from "./components/layouts/AuthLayout";

const router = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="todo/:id" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
          {/* 
          /contact
          /about
          /blog
          */}
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

export default router;
