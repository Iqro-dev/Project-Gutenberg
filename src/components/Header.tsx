import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Header() {
  const auth = getAuth();

  const navigate = useNavigate();

  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    setIsAuthorized(auth.currentUser ? true : false);
  }, [auth.currentUser]);

  interface Button {
    path: string;
    label: string;
    styles: string;
  }

  const nonAuthenticatedButtons: Button[] = [
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

  const authenticatedButtons: Button[] = [
    {
      path: "/profile",
      label: "Your Profile",
      styles: "",
    },
  ];
  return (
    <div className="relative flex flex-wrap justify-between w-full p-4 bg-black gap-12 text-white z-[9999]">
      <span className="text-4xl font-['Poppins'] font-semibold">
        <Link to="/">Project Gutenberg</Link>
      </span>

      <div className="flex pr-8 items-center text-white gap-6">
        {isAuthorized && (
          <button
            onClick={() => {
              signOut(auth).then(() => {
                navigate("/");
              });
            }}
          >
            Sign out
          </button>
        )}

        {!isAuthorized &&
          nonAuthenticatedButtons.map(({ path, label, styles }, index) => (
            <div key={index} className={styles}>
              <Link to={path}>{label}</Link>
            </div>
          ))}

        {isAuthorized &&
          authenticatedButtons.map(({ path, label, styles }, index) => (
            <div key={index} className={styles}>
              <Link to={path}>{label}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}
