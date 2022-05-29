import { addDoc, collection, deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'

export function likeBook(
  title: string,
  description: string,
  languages: string,
  downloads: number,
  id: number,
) {
  const booksCollectionRef = collection(db, "favbooks");

  addDoc(booksCollectionRef, {title, description, languages, downloads, id})
}
