import { IBlog } from "@/interfaces";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { formatDate } from "date-fns";

interface IBlogCardProps {
  blog: IBlog;
}

const BlogCard: React.FC<IBlogCardProps> = ({ blog }) => {
  return (
    <Link to={`/blog/${blog?.id}`} className="block group">
      <Card className="group-hover:border-blue-500 transition-all">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Avatar>
              {blog?.user?.photoURL && (
                <AvatarImage src={blog?.user?.photoURL} />
              )}
              <AvatarFallback>
                {blog?.user?.displayName
                  ?.split(" ")
                  .map((word) => word.charAt(0))
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <Link to={`/user/${blog?.user?.uid}`} className="hover:underline">
              {blog?.user?.displayName}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{blog.description}</p>
        </CardContent>
        <CardFooter>
          <p className="text-xs">
            Created at {formatDate(blog.createdAt.seconds, "Pp")}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
