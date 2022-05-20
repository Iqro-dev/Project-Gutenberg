import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between w-full p-4 bg-black gap-12 text-white">
      <span className="text-4xl font-['Poppins'] font-semibold">
        Project Gutenberg
      </span>
      <div className="flex pr-8 items-center text-white">
        <Link className="text-xl font-['Poppins'] font-normal" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}
