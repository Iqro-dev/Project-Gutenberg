import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookFiles from "./components/BookFiles";

export interface Results {
  title: string;
  description: string;
  subjects: string[];
  bookshelves: string[];
  agents: [{ person: string; type: string }];
  resources: [{ id: number; uri: string; type: string }];
  languages: string;
}

export default function BookRoute() {
  const API_LINK = "https://gnikdroy.pythonanywhere.com/api/";

  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Results | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(API_LINK + `book/${params.id}`)
      .then((r) => r.json())
      .then((r: Results) => {
        setResults(r);
        setLoading(false);
      });
  }, [params]);

  return (
    <div className="flex flex-col justify-center items-center pt-24 gap-2 px-24">
      {loading ? (
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
      ) : (
        <div>
          {results &&
            results.resources.map(
              (resources, index) =>
                resources.type === "text/html; charset=utf-8" &&
                resources.uri.slice(-3) !== "zip" && (
                  <div key={index}>
                    <BookFiles resources={resources.uri} />
                  </div>
                )
            )}
        </div>
      )}
    </div>
  );
}
