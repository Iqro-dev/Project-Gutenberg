import { useEffect, useRef } from "react";

interface BookFiles {
  resources: string;
}

export default function BookFiles(props: BookFiles) {
  let file = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(props.resources);
    fetch(`${props.resources}`)
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        console.log(html);
      });
  });

  return <div ref={file}></div>;
}
