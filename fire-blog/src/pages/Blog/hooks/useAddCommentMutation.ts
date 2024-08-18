import { firestore } from "@/firebase/config";
import { IComment } from "@/interfaces";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
  serverTimestamp,
} from "firebase/firestore";

export const useAddCommentMutation = (
  options?: UseMutationOptions<
    DocumentReference<IComment, DocumentData>,
    Error,
    {
      user: {
        uid: string;
        email: string;
        displayName: string;
        photoURL: string;
      };
      id: string;
      comment: string;
    }
  >
) =>
  useMutation({
    mutationFn: async ({ id, user, comment }) => {
      const blogColRef = collection(firestore, `/blogs/${id}/comments`);
      const blogDoc = await addDoc(blogColRef, {
        comment,
        user,
        createdAt: serverTimestamp(),
      });
      return blogDoc as DocumentReference<IComment, DocumentData>;
    },
    ...options,
  });
