import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Book from "./books/Book";
import { db } from "./firebase/firebase";

export default function Profile() {
  const [favbooks, setFavbooks] = useState<any>([]);
  const booksCollectionRef = collection(db, "favbooks");

  useEffect(() => {
    const getFavBooks = async () => {
      const data = await getDocs(booksCollectionRef);
      setFavbooks(data.docs.map((doc) => ({ ...doc.data()})));
    };

    getFavBooks();
  }, []);

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
      >
        {favbooks.map((book: favBook, index: number) => {
          return (
            <div key={index}>
              <Book
                title={book.title}
                description={book.description}
                languages={book.languages}
                downloads={book.downloads}
                id={book.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
