import { firestore } from "@/firebase/config";
import { IBlog } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const useFetchBlogsQuery = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const blogColRef = collection(firestore, `/blogs`);
      const q = query(blogColRef, orderBy("createdAt", "desc"));
      const blogDocs = await getDocs(q);
      return blogDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IBlog[];
    },
  });
