interface BookFiles {
  resources: string;
}

export default function BookFiles(props: BookFiles) {
  let file = props.resources;

  return (
    <iframe
      src={file}
      className="absolute top-0 bottom-0 right-0 w-full border-0 m-0 p-0 overflow-hidden z-[9999] h-full"
    ></iframe>
  );
}
