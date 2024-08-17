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
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NonAuthLayout from "./components/layouts/NonAuthLayout";

const router = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route element={<NonAuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Route>
    )
  );

export default router;
