import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

interface IPost {
  id: string;
  title: string;
}

const Firestore = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const postColRef = collection(db, "post");

    onSnapshot(postColRef, (span) => {
      const data = span.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      //   console.log(span.());
      setPosts(data as IPost[]);
    });
  }, []);
  const getPosts = async () => {
    const postColRef = collection(db, "post");
    const { docs } = await getDocs(postColRef);
    const data = docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    console.log(data);
    setPosts(data as IPost[]);
  };

  const readDocument = async () => {
    console.log("read document");
    const docRef = doc(db, `/post/6qh7glmwzwR3Br8soGYc`);
    const docData = await getDoc(docRef);
    console.log(docData.exists());
  };

  const createDocument = async () => {
    console.log("create document");
    const colRef = collection(db, "post");
    // jb apko pta ho collection k bare me or doc id pta na
    const newDoc = await addDoc(colRef, {
      title: `post ${posts.length + 1}`,
    });
    console.log(newDoc);
  };

  const setDocument = async () => {
    console.log("set document");
    const docRef = doc(
      db,
      "asdfasdfsad/asdfasdfasd/asfasdfasd/asfasdfasdfsad/asdfasdfasdf/asdfasdfasdf"
    );
    // jb apke pas pura path ho
    const newDoc = await setDoc(
      docRef,
      {
        title: "new title",
        data: "new data",
      },
      //   will not overwrite the and will merge it
      {
        merge: true,
      }
    );
    console.log(newDoc);
  };

  const updateDocument = async () => {
    console.log("update document");
    const docRef = doc(db, "/post/6qh7glmwzwR3Br8asoGYc");
    const newDoc = await updateDoc(docRef, {
      title: "new title",
      data: "new data",
    });
    console.log(newDoc);
  };

  const deleteDocument = async (id: string) => {
    console.log("delete document");
    const docRef = doc(db, `/post/${id}`);
    await deleteDoc(docRef);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post?.title} {post.id}{" "}
          <button onClick={() => deleteDocument(post.id)}>Delete Doc</button>
        </div>
      ))}
      {/* <button onClick={readDocument}>Read Doc</button> */}
      <button onClick={createDocument}>Create Doc</button>
      {/* <button onClick={setDocument}>Set Doc</button> */}
      {/* <button onClick={updateDocument}>Update Doc</button> */}
      {/* <button onClick={deleteDocument}>Delete Doc</button> */}
    </div>
  );
};

export default Firestore;
