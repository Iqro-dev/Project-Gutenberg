import { useEffect } from "react";
import { Results } from "./Books";

export function useSearch(
  query: string,
  setResults: React.Dispatch<React.SetStateAction<Results[]>>,
  results: Results[],
  pageNumber: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  lang: string,
  downloadsMin: string,
  downloadsMax: string
) {
  const API_LINK = "https://gnikdroy.pythonanywhere.com/api/";

  useEffect(() => {
    setResults([]);

    fetch(
      API_LINK +
        `book?&title_contains=${query}&page=${pageNumber}&languages=${lang}&downloads_range_min=${downloadsMin}&downloads_range_max=${downloadsMax}`
    )
      .then((r) => r.json())
      .then((r: { results: Results[]; count: number }) => {
        setResults(r.results);
        setCount(r.count);
      });
  }, [query, lang, downloadsMin, downloadsMax]);

  useEffect(() => {
    fetch(
      API_LINK +
        `book?&title_contains=${query}&page=${pageNumber}&downloads_range_min=${downloadsMin}&downloads_range_max=${downloadsMax}`
    )
      .then((r) => r.json())
      .then((r: { results: Results[]; count: number }) => {
        setResults([...results, ...r.results]);
      });
  }, [pageNumber]);
}
