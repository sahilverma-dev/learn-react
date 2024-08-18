import { Link, useParams } from "react-router-dom";
import CommentSection from "./components/CommentSection";

import parse from "html-react-parser";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// hooks
import { useFetchBlogQuery } from "./hooks/useFetchBlogQuery";
import { useAuth } from "@/hooks/useAuth";
import { buttonVariants } from "@/components/ui/button";
import { formatDate } from "date-fns";
import BlogLoadingSkeleton from "./components/BlogLoadingSkeleton";

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { data: blog, isLoading } = useFetchBlogQuery(id || "");

  if (isLoading) {
    return <BlogLoadingSkeleton />;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="pace-y-6">
      <Breadcrumb className="p-4 ">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/user/${blog.user.uid}`}>
              {blog.user.displayName}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{blog.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {blog?.title}
          </h1>
          {user?.uid === blog?.user.uid && (
            <Link
              to={`/post/${id}/edit`}
              className={buttonVariants({
                size: "sm",
                variant: "secondary",
              })}
            >
              Edit
            </Link>
          )}
        </div>
        <p className="">Posted by {blog?.user.displayName}</p>
        <p className="text-xs">{formatDate(blog?.createdAt.seconds, "Pp")}</p>
        <p className="text-sm">{blog?.description}</p>
        {parse(blog?.content)}
      </div>
      <CommentSection id={id as string} />
    </div>
  );
};

export default Blog;
