import { firestore } from "@/firebase/config";
import { IBlog } from "@/interfaces";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
  serverTimestamp,
} from "firebase/firestore";

export const useCreateBlogMutation = (
  options?: UseMutationOptions<
    DocumentReference<IBlog, DocumentData>,
    Error,
    {
      user: {
        uid: string;
        email: string;
        displayName: string;
        photoURL: string;
      };
      title: string;
      description: string;
      content: string;
    }
  >
) =>
  useMutation({
    mutationFn: async ({ user, title, description, content }) => {
      const blogColRef = collection(firestore, `/blogs`);
      const blogDoc = await addDoc(blogColRef, {
        title,
        description,
        content,
        user,
        createdAt: serverTimestamp(),
      });
      return blogDoc as DocumentReference<IBlog, DocumentData>;
    },
    ...options,
  });
