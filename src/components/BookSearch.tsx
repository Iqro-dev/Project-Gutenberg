import { useEffect, useState } from "react";
import { Results } from "./Books";

export function useSearch(
  setResults: React.Dispatch<React.SetStateAction<Results[]>>,
  results: Results[],
  pageNumber: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  count: number,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  loading: boolean
) {
  const API_LINK = "https://gnikdroy.pythonanywhere.com/api/";
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(API_LINK + `book?&title_contains=${query}&page=${pageNumber}`)
      .then((r) => r.json())
      .then((r: { results: Results[]; count: number }) => {
        setResults([...r.results]);
        setCount(r.count);
        setLoading(false);
      });
  }, [query]);

  useEffect(() => {
    setLoading(true);
    fetch(API_LINK + `book?&title_contains=${query}&page=${pageNumber}`)
      .then((r) => r.json())
      .then((r: { results: Results[]; count: number }) => {
        setCount(count + r.count);
        setResults([...results, ...r.results]);
        setLoading(false);
      });
  }, [pageNumber]);

  return [setQuery];
}
