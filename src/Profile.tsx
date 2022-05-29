import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { firebaseConfig } from "./firebase/firebase";

initializeApp(firebaseConfig);

export default function Profile() {
  const db = getFirestore();
  const colRef = collection(db, "favbooks");

  let favbooks: any = [];

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          favbooks.push({ ...doc.data(), id: doc.id });
        });
        console.log(favbooks);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="flex justify-center items-center pt-24">
      <span className="text-4xl font-['Poppins'] font-normal">
        Your favorite books
      </span>
    </div>
  );
}
