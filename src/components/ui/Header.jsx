import { Link, NavLink } from "react-router-dom";

const data = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-black"}  mr-4`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </ul>
      <Link to={"/login"}>login</Link>
    </div>
  );
};

export default Header;
