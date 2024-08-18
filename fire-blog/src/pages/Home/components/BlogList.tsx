import { useFetchBlogsQuery } from "../hooks/useFetchBlogsQuery";
import BlogCard from "./BlogCard";
import BlogLoadingsSkeleton from "./BlogsLoadingSkeleton";

const BlogList = () => {
  const { data: blogs, isLoading } = useFetchBlogsQuery();
  if (isLoading) {
    return <BlogLoadingsSkeleton />;
  }
  return (
    <div className="space-y-2 p-4">
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
