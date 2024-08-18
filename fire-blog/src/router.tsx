import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

//   layouts
import RootLayout from "./components/layouts/RootLayout";
import NonAuthLayout from "./components/layouts/NonAuthLayout";
import AuthLayout from "./components/layouts/AuthLayout";

// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import New from "./pages/New";
import Blog from "./pages/Blog";
import User from "./pages/User";
import Profile from "./pages/Profile";

const router = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<NonAuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Route>
    )
  );

export default router;
