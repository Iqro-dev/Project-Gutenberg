import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Book from "./books/Book";
import { db } from "./firebase/firebase";

export default function Profile() {
  const booksCollectionRef = collection(db, "favbooks");
  const [favbooks, setFavbooks] = useState<any>([]);
  const API_LINK = "https://gnikdroy.pythonanywhere.com/api/";
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const getFavBooks = async () => {
      const data = await getDocs(booksCollectionRef);
      setFavbooks(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getFavBooks();
    let tmpBooks: any[] = [];

    favbooks.map((book: favBook, idx: number) => {
      fetch(API_LINK + "book/" + book.id)
        .then((r) => r.json())
        .then((b) => {
          tmpBooks = [...tmpBooks, b];
          if (idx === favbooks.length - 1) {
            setBooks(tmpBooks);
          }
        });
    });
  });


  interface favBook {
    title: string;
    description: string;
    languages: string;
    downloads: number;
    id: number;
  }

  return (
    <div className="flex flex-col justify-center items-center pt-24">
      <span className="text-4xl font-['Poppins'] font-normal">
        Your favorite books
      </span>

      {favbooks.length === 0 ? (
        <span className="text-sm font-['Poppins'] font-normal">
          No favorite books found. Go like some
        </span>
      ) : (
        ""
      )}
      <div
        className={`lg:px-24 px-4 py-12 grid ${
          favbooks.length > 0
            ? "grid-cols-4 medium:grid-cols-1 medium:w-full"
            : ""
        } justify-center gap-8`}
      >{books.map((book, index) => (
        <div key={index}>
          <Book 
            title={book.title}
            description={book.description}
            languages={book.languages}
            downloads={book.downloads}
            id={book.id}
          />
        </div>
      ))}</div>
    </div>
  );
}
