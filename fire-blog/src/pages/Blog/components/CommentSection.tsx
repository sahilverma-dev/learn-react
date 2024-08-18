import { useState } from "react";
import CommentForm from "./CommentForm";
import { Button } from "@/components/ui/button";
import CommentsList from "./CommentsList";

interface CommentSectionProps {
  id: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ id }) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const hideCommentForm = () => setShowCommentForm(false);
  return (
    <>
      {showCommentForm ? (
        <CommentForm id={id} onCancel={hideCommentForm} />
      ) : (
        <div className="flex border rounded-md p-4 w-full items-center justify-between">
          <p>Comments</p>
          <Button onClick={() => setShowCommentForm(true)}>
            Leave a comment
          </Button>
        </div>
      )}
      <CommentsList id={id} />
    </>
  );
};

export default CommentSection;
