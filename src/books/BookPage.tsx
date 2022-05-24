interface BookPage {
  resources: string;
}

export default function BookPage(props: BookPage) {
  const file = props.resources;

  return (
    <iframe
      src={file}
      className="absolute w-full h-full left-0 border-0 m-0 p-0"
    ></iframe>
  );
}
