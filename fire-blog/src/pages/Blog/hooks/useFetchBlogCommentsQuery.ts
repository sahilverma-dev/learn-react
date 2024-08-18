import { firestore } from "@/firebase/config";
import { IComment } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const useFetchBlogCommentsQuery = (id: string) =>
  useQuery({
    queryKey: ["comments", id],
    queryFn: async () => {
      const commentsColRef = collection(firestore, `/blogs/${id}/comments`);
      const q = query(commentsColRef, orderBy("createdAt", "desc"));

      const commentDocs = await getDocs(q);

      return commentDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IComment[];
    },
  });
