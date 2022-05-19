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
            <div>
              <svg
                className="bg-black animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
