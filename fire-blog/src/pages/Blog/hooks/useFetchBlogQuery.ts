import { firestore } from "@/firebase/config";
import { IBlog } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";

export const useFetchBlogQuery = (id: string) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const blogDocRef = doc(firestore, `/blogs/${id}`);
      const blogDocs = await getDoc(blogDocRef);

      if (blogDocs.exists()) {
        return {
          id,
          ...blogDocs.data(),
        } as IBlog;
      } else {
        return null;
      }
    },
  });
