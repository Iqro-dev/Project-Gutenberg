import { useState, ChangeEvent } from "react";
import Book from "./Book";
import { useSearch } from "./BookSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InfiniteScroll from "react-infinite-scroll-component";

export interface Results {
  title: string;
  description: string;
  languages: string;
  downloads: number;
}

export default function Books() {
  const [results, setResults] = useState<Results[]>([]);
  const [count, setCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [state, setState] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const [setQuery] = useSearch(
    setResults,
    results,
    pageNumber,
    setCount,
    count
  );

  return (
    <div className="flex justify-center flex-col p-12 gap-12">
      <div className="flex flex-col gap-2">
        <div>
          <span className="text-4xl font-['Poppins'] font-normal text-center">
            Books: {count}
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <span>Search:</span>
          <input
            type="text"
            onChange={handleChange}
            onBlur={() => setQuery(state)}
            className="outline"
          />
          <button onClick={() => setQuery(state)}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={`grid ${
            results.length > 0 ? "grid-cols-4 medium:grid-cols-1" : ""
          } justify-center gap-8`}
        >
          {results.length > 0 ? (
            results.map((r, index) => (
              <div key={index}>
                <Book
                  title={r.title}
                  description={r.description}
                  languages={r.languages}
                  downloads={r.downloads}
                />
              </div>
            ))
          ) : (
            <div className="flex flex-row gap-4">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
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
        </div>
      </div>
    </div>
  );
}
