import { DocumentReference, Timestamp } from "firebase/firestore";

export interface IBlog extends DocumentReference {
  id: string;
  title: string;
  content: string;
  description: string;
  createdAt: Timestamp;
  user: {
    uid: string;
    displayName: string;
    photoURL: string;
    email: string;
  };
}

export interface IComment extends DocumentReference {
  id: string;
  comment: string;
  createdAt: Timestamp;
  user: {
    uid: string;
    displayName: string;
    photoURL: string;
    email: string;
  };
}
