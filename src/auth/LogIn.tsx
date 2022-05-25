import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LogIn() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  interface Input {
    label: string;
    inputType: string;
  }

  const inputs: Input[] = [
    {
      label: "Email",
      inputType: "email",
    },
    {
      label: "Password",
      inputType: "password",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-12 gap-6 pb-96">
      <span className="text-4xl font-['Poppins'] font-normal">Log In</span>

      <form className="flex flex-col xl:w-1/5 p-4 gap-8">
        {inputs.map(({ label, inputType }, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="text-sm font-['Poppins'] font-normal">
              {label}
            </label>

            <input type={inputType} className="outline rounded-md p-2" />
          </div>
        ))}

        <button type="submit">
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
        </button>
      </form>

      <button onClick={() => signInWithGoogle()} disabled={authing}>
        Sign in with google
      </button>

      <span className="text-md font-['Poppins'] font-normal">
        Want to sign up?
      </span>

      <div className="flex flex-row gap-4">
        <button className="text-xl font-['Poppins'] font-semibold outline px-4 py-2 rounded-md">
          <Link to="/signup">Sign Up</Link>
        </button>

        <button className="text-xl font-['Poppins'] font-semibold outline px-4 py-2 rounded-md">
          <Link to="/">Go Back</Link>
        </button>
      </div>
    </div>
  );
}
