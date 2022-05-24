import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SignUp() {
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
    {
      label: "Password Confirm",
      inputType: "password",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full h-96 gap-6 pt-96">
      <span className="text-4xl font-['Poppins'] font-normal">Sign Up</span>

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

      <span className="text-md font-['Poppins'] font-normal">
        Already have an account?
      </span>

      <div className="flex flex-row gap-4">
        <button className="text-xl font-['Poppins'] font-semibold outline px-4 py-2 rounded-md">
          <Link to="/login">Login</Link>
        </button>

        <button className="text-xl font-['Poppins'] font-semibold outline px-4 py-2 rounded-md">
          <Link to="/">Go Back</Link>
        </button>
      </div>
    </div>
  );
}
