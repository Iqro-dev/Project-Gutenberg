import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
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
        <div className="flex flex-col justify-center items-center gap-8">
          <span className="text-4xl font-['Poppins'] font-normal text-center">
            {results && results.title}
          </span>

          <span className="text-2xl font-['Poppins'] font-normal text-center">
            {results && results.description}
          </span>

          <div className="flex flex-col">
            {results &&
              results.bookshelves.map((bookshelves, index) => (
                <div className="flex flex-row gap-2" key={index}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span className="text-2xl font-['Poppins'] font-normal">
                    {bookshelves}
                  </span>
                </div>
              ))}
          </div>

          <div>
            {results &&
              results.agents.map((agent, index) => (
                <div key={index}>
                  <span className="text-md font-['Poppins'] font-normal">
                    {agent.person} - {agent.type}
                  </span>
                </div>
              ))}
          </div>

          <div>
            <span className="text-md font-['Poppins'] font-normal">
              Languages:{" "}
              <span className="text-red-500">
                {results && results.languages}
              </span>
            </span>
          </div>

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
        </div>
      )}
    </div>
  );
}
