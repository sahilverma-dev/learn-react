import { Skeleton } from "@/components/ui/skeleton";
const BlogLoadingSkeleton = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[325px]  rounded-xl" />
        <div className="space-y-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-[70%]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLoadingSkeleton;
