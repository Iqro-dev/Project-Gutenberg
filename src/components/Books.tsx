import { useState, useEffect } from "react";
import Book from "./Book";
import { useSearch } from "./BookSearch";

export interface Results {
  title: string;
  description: string;
}

export default function Books() {
  const [results, setResults] = useState<Results[]>([]);
  const [count, setCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  let value = "";

  const [setQuery] = useSearch(
    setResults,
    results,
    pageNumber,
    setCount,
    count
  );
  useEffect(() => setQuery(""));

  return (
    <div className="flex justify-center flex-col p-12 gap-12">
      <div className="flex flex-col">
        <div>
          <span className="text-4xl font-['Poppins'] font-normal text-center">
            Books: {count}
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <span>Search</span>
          <input
            type="text"
            onChange={(e) => (value = e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? setQuery(value) : null)}
            className="outline"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 justify-center gap-8">
          {results.map((r, index) => (
            <div key={index}>
              <Book title={r.title} description={r.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
