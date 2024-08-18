import { Skeleton } from "@/components/ui/skeleton";
const BlogLoadingsSkeleton = () => {
  return (
    <div className="p-4 space-y-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="w-full h-40  rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogLoadingsSkeleton;
