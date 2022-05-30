import { useState, useEffect } from "react";
import Book from "./Book";
import { useSearch } from "./BookSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InfiniteScroll from "react-infinite-scroll-component";
import getFavBooks from "../Profile";

export interface Results {
  title: string;
  description: string;
  languages: string;
  downloads: number;
  id: number;
}

export interface Langs {
  name: string;
  next: string;
}

export default function Books() {
  const API_LINK = "https://gnikdroy.pythonanywhere.com/api/";
  const [results, setResults] = useState<Results[]>([]);
  const [count, setCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [state, setState] = useState("");
  const [query, setQuery] = useState("");
  const [langs, setLangs] = useState<Langs[]>([]);
  const [next, setNext] = useState<string | null>("");
  const [lang, setLang] = useState("");
  const [downloadsMin, setDownloadsMin] = useState("");
  const [downloadsMax, setDownloadsMax] = useState("");

  useSearch(
    query,
    setResults,
    results,
    pageNumber,
    setCount,
    lang,
    downloadsMin,
    downloadsMax
  );

  useEffect(() => {
    fetch(API_LINK + "language")
      .then((r) => r.json())
      .then((r: { results: Langs[]; next: string }) => {
        setLangs([...r.results]);
      });
  }, []);

  useEffect(() => {
    if (next != null)
      fetch(next ? next : API_LINK + "language")
        .then((r) => r.json())
        .then((r: { results: Langs[]; next: string }) => {
          setLangs([...langs, ...r.results]);
          if (r.next != null) setNext(r.next);
        });
  }, [next]);

  return (
    <div className="flex justify-center flex-col p-12 overflow-hidden gap-12">
      <div className="flex flex-col gap-2">
        <div>
          <span className="flex text-4xl font-['Poppins'] font-normal text-center">
            Books:{" "}
            {count === 0 ? (
              <svg
                className="m-2 mt-3 animate-spin h-5 w-5"
                viewBox="0 0 24 24"
              >
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
            ) : (
              count
            )}
          </span>
        </div>

        <div className="flex lg:flex-row flex-col gap-2">
          <div className="flex flex-row gap-2">
            <span>Search:</span>

            <input
              type="text"
              onBlur={(e) => {
                setQuery(e.target.value);
                setState(e.target.value);
              }}
              className="outline"
            />

            <button onClick={() => setQuery(state)}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div>
            <span>Language:</span>

            <select
              onChange={(e) =>
                setLang(e.target.value === "all" ? "" : e.target.value)
              }
            >
              <option>all</option>
              {langs &&
                langs.map((lang, index) => (
                  <option key={index}>{lang.name}</option>
                ))}
            </select>
          </div>

          <div className="flex flex-row flex-wrap gap-2">
            <span>Downloads:</span>

            <div className="flex flex-row flex-wrap gap-2">
              <input
                type="number"
                onBlur={(e) => {
                  setDownloadsMin(e.target.value);
                }}
                className="outline"
                placeholder="from"
              />
              -
              <input
                type="number"
                onBlur={(e) => {
                  setDownloadsMax(e.target.value);
                }}
                className="outline"
                placeholder="to"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full h-full">
        <InfiniteScroll
          className="!overflow-hidden"
          dataLength={results.length}
          next={() => setPageNumber(pageNumber + 1)}
          hasMore={results.length < count}
          loader={
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
          }
        >
          {count === 0 ? <span>No books found</span> : ""}
          <div
            className={`lg:px-24 px-4 py-12 grid ${
              results.length > 0
                ? "grid-cols-4 medium:grid-cols-1 medium:w-full"
                : ""
            } justify-center gap-8`}
          >
            {results.map((r, index) => (
              <div key={index}>
                <Book
                  title={r.title}
                  description={r.description}
                  languages={r.languages}
                  downloads={r.downloads}
                  id={r.id}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
