import { IComment } from "@/interfaces";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { formatDate } from "date-fns";
import { Link } from "react-router-dom";

interface ICommentCardProps {
  comment: IComment;
}

const CommentCard: React.FC<ICommentCardProps> = ({ comment }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Avatar>
            {comment?.user?.photoURL && (
              <AvatarImage src={comment?.user?.photoURL} />
            )}
            <AvatarFallback>
              {comment?.user?.displayName
                ?.split(" ")
                .map((word) => word.charAt(0))
                .join("")}
            </AvatarFallback>
          </Avatar>
          <Link to={`/user/${comment?.user?.uid}`} className="hover:underline">
            {comment?.user?.displayName}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{comment.comment}</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs">
          Commented at {formatDate(comment.createdAt.seconds, "Pp")}
        </p>
      </CardFooter>
    </Card>
  );
};

export default CommentCard;
