import { useEffect } from "react";
import { Results } from "./Books";

export function useSearch(
  query: string,
  setResults: React.Dispatch<React.SetStateAction<Results[]>>,
  results: Results[],
  pageNumber: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  lang: string
) {
  const API_LINK = "https://gnikdroy.pythonanywhere.com/api/";

  useEffect(() => {
    setResults([]);
    fetch(
      API_LINK +
        `book?&title_contains=${query}&page=${pageNumber}&languages=${lang}`
    )
      .then((r) => r.json())
      .then((r: { results: Results[]; count: number }) => {
        setResults([...r.results]);
        setCount(r.count);
        console.log(r.results);
      });
  }, [query, lang]);

  useEffect(() => {
    fetch(API_LINK + `book?&title_contains=${query}&page=${pageNumber}`)
      .then((r) => r.json())
      .then((r: { results: Results[]; count: number }) => {
        setResults([...results, ...r.results]);
      });
  }, [pageNumber]);
}
