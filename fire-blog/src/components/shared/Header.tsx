import { useAuth } from "@/hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="sticky top-0 w-full p-4 bg-background/60 backdrop-blur border-primary/20 border-b z-50">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <Link to={"/"}>Blog App</Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <NavLink
            to={"/new"}
            className={({ isActive }) =>
              buttonVariants({
                variant: isActive ? "default" : "secondary",
                size: "icon",
                className: "aspect-square",
              })
            }
          >
            <PlusIcon />
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                {user?.photoURL && <AvatarImage src={user?.photoURL} />}
                <AvatarFallback>
                  {user?.displayName
                    ?.split(" ")
                    .map((word) => word.charAt(0))
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <DropdownMenuLabel>Hello {user?.displayName}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  to={"/profile"}
                  className={buttonVariants({
                    variant: "link",
                    className: "w-full text-left",
                  })}
                >
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button
                  variant={"destructive"}
                  className="w-full"
                  onClick={() => logout()}
                >
                  Sign Out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
