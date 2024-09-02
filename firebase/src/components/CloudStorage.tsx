import { useState } from "react";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

const CloudStorage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  return (
    <div>
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt=""
          style={{
            height: 200,
            width: 200,
          }}
        />
      )}
      Progress:{progress}
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          console.log("uploading file");
          if (file) {
            try {
              const id = crypto.randomUUID().toString()?.replaceAll("-", "");
              const path = `photos/${file.name}-${id}.png`;
              const fileRef = ref(storage, path);
              //   const uploadTask = uploadBytesResumable(fileRef, file);
              const snap = await uploadBytes(fileRef, file);

              // Monitoring upload progress
              //   uploadTask.on("state_changed", async (snapshot) => {
              //     console.log(snapshot);
              //     setProgress(
              //       Math.floor(
              //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              //       )
              //     );

              //     // const url = await getDownloadURL(snapshot.ref);
              //     // console.log(url);
              //     // re
              //   });

              const url = await getDownloadURL(snap.ref);
              console.log(snap);
              const docRef = doc(db, `files/${id}`);
              setDoc(docRef, {
                // metadata: snap.metadata.ref,
                id: snap.metadata.fullPath,
                url,
                path,
              });
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        <input
          type="file"
          multiple={false}
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <button>Upload</button>
        <button type="reset">Reset</button>
      </form>
      <button
        onClick={() => {
          try {
            const fileRef = ref(
              storage,
              `photos/Screenshot 2024-06-19 110436.png-9b20fc94167b428ca427b6455bb77667.png`
            );
            console.log("delete file");

            deleteObject(fileRef);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        Delete file
      </button>
    </div>
  );
};

export default CloudStorage;
