import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Book from "./books/Book";
import { db } from "./firebase/firebase";

export default function Profile() {
  const [favbooks, setFavbooks] = useState<any>([]);
  const API_LINK = "https://gnikdroy.pythonanywhere.com/api/";
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const currentUser = localStorage.getItem("user");

  const getFavBooks = async () => {
    if (currentUser) {
      const booksCollectionRef = collection(db, currentUser);
      const data = await getDocs(booksCollectionRef);
      setFavbooks(data.docs.map((doc) => ({ ...doc.data() })));
    }
  };

  useEffect(() => {
    getFavBooks();
  }, []);

  useEffect(() => {
    let temporaryBooks: any[] = [];
    favbooks.map(({ id }: favBook, index: number) => {
      fetch(`${API_LINK}book/${id}`)
        .then((response) => response.json())
        .then((book) => {
          temporaryBooks = [...temporaryBooks, book];
          if (index === favbooks.length - 1) {
            setBooks(temporaryBooks);
            setLoading(false);
          }
        });
    });
  }, [favbooks]);

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

      <span className="text-lg font-['Poppins'] font-normal">
        Books: {favbooks.length}
      </span>

      {favbooks.length === 0 ? (
        <span className="text-sm font-['Poppins'] font-normal">
          No favorite books found. Go like some
        </span>
      ) : (
        ""
      )}

      {loading && (
        <div className="flex flex-row gap-4 pt-12">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>

            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </div>
      )}

      <div
        className={`lg:px-24 px-4 py-12 grid ${
          books.length > 0 ? "grid-cols-4 medium:grid-cols-1 medium:w-full" : ""
        } justify-center gap-8`}
      >
        {books.map((book, index) => (
          <div key={index}>
            <Book
              title={book.title}
              description={book.description}
              languages={book.languages}
              downloads={book.downloads}
              id={book.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
