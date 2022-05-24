import { Link } from "react-router-dom";

export default function Header() {
  interface Button {
    path: string;
    label: string;
    styles: string;
  }

  const buttons: Button[] = [
    {
      path: "/login",
      label: "Log In",
      styles:
        "bg-white text-black rounded-md px-4 py-2 transition ease-in-out hover:scale-110 hover:cursor-pointer",
    },
    {
      path: "/signup",
      label: "Sign Up",
      styles:
        "border border-white rounded-md px-4 py-2 transition ease-in-out hover:scale-110 hover:cursor-pointer",
    },
    {
      path: "/about",
      label: "About",
      styles: "transition ease-in-out hover:scale-110 hover:cursor-pointer",
    },
  ];
  return (
    <div className="relative flex flex-wrap justify-between w-full p-4 bg-black gap-12 text-white z-[9999]">
      <span className="text-4xl font-['Poppins'] font-semibold">
        <Link to="/">Project Gutenberg</Link>
      </span>

      <div className="flex pr-8 items-center text-white gap-6">
        {buttons.map(({ path, label, styles }, index) => (
          <div key={index} className={styles}>
            <Link to={path}>{label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
