import { useFetchBlogCommentsQuery } from "../hooks/useFetchBlogCommentsQuery";
import CommentCard from "./CommentCard";

interface ICommentsListProps {
  id: string;
}
const CommentsList: React.FC<ICommentsListProps> = ({ id }) => {
  const { data: comments, isLoading } = useFetchBlogCommentsQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="space-y-2 py-4">
      {comments?.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
