import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function likeBook(id: number) {
  const booksCollectionRef = collection(db, "favbooks");

  const bookQuery = query(booksCollectionRef, where("id", "==", id));
  const docs = await getDocs(bookQuery);
  if (!docs.empty) {
    docs.forEach((d) => {
      deleteDoc(doc(booksCollectionRef, d.id));
      alert("Book has been removed from likes");
      setTimeout(() => {
        location.reload();
      }, 1000);
    });
    return;
  }
  addDoc(booksCollectionRef, { id });
  alert("Book has been added to likes");
}
