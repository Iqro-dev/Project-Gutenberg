import Book from "./Book";

export default function Books() {
  return (
    <div className="flex justify-center flex-col w-full p-12">
      <span className="text-4xl font-['Poppins'] font-normal  text-center">
        Books
      </span>
      <div className="flex justify-start">
        <Book />
      </div>
    </div>
  );
}
