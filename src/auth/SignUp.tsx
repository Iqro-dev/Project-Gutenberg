import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faG } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

export default function SignUp() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        navigate("/");
        localStorage.setItem("authorized", "true");
        localStorage.setItem("user", response.user.uid);
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  const register = () => {
    setAuthing(true);

    if (password === confirmPassword)
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          navigate("/");
          localStorage.setItem("authorized", "true");
          localStorage.setItem("user", response.user.uid);
        })
        .catch((error) => {
          console.log(error);
          setAuthing(false);
        });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-12 gap-6 pb-96">
      <span className="text-4xl font-['Poppins'] font-normal">Sign Up</span>

      <form className="flex flex-col xl:w-1/5 p-4 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-['Poppins'] font-normal">Email</label>

          <input
            type="email"
            className="outline rounded-md p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-['Poppins'] font-normal">
            Password
          </label>

          <input
            type="password"
            className="outline rounded-md p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-['Poppins'] font-normal">
            Confirm Password
          </label>

          <input
            type="password"
            className="outline rounded-md p-2"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            register();
          }}
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
        </button>

        <button
          onClick={() => signInWithGoogle()}
          disabled={authing}
          className="flex flex-col items-center border rounded-lg border-black text-sm capitalize px-4 py-2 cursor-pointer hover:text-white bg-gradient-to-r bg-no-repeat duration-300 from-black to-black bg-[length:0px] hover:bg-[length:100%]"
        >
          <FontAwesomeIcon icon={faG} size="3x" />
        </button>
      </form>

      <span className="text-md font-['Poppins'] font-normal">
        Already have an account?
      </span>

      <div className="flex flex-row gap-4">
        <button className="text-xl font-['Poppins'] font-semibold outline px-4 py-2 rounded-md">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
}
