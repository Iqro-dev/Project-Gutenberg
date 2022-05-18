import { useEffect, useState } from "react";
import { Results } from "./Books";

export function useSearch(
  setResults: React.Dispatch<React.SetStateAction<Results[]>>,
  results: Results[],
  pageNumber: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  count: number
) {
  const API_LINK = "https://gnikdroy.pythonanywhere.com/api/";
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_LINK + `book?&title_contains=${query}&page=${pageNumber}`)
      .then((r) => r.json())
      .then((r: { results: Results[]; count: number }) => {
        setResults([...r.results]);
        setCount(r.count);
      });
  }, [query]);

  useEffect(() => {
    fetch(API_LINK + `book?&title_contains=${query}&page=${pageNumber}`)
      .then((r) => r.json())
      .then((r: { results: Results[]; count: number }) => {
        setCount(count + r.count);
        setResults([...results, ...r.results]);
      });
  }, [pageNumber]);

  return [setQuery];
}
