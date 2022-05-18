import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import clsx from "clsx";

interface BookProps {
  title: string;
  description: string;
}

export default function Book(props: BookProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="w-[20vw] h-[25vw] shadow-xl rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
      <div className="flex justify-end p-4">
        <button
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            color={clsx(isFavorite === true ? "#e1ad01" : "")}
          />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center px-12">
          <span className="text-xl font-['Poppins'] font-normal">
            {props.title.length > 80
              ? `${props.title.slice(0, 80)}...`
              : props.title}
          </span>
        </div>
        <div className="flex justify-center px-12">
          {props.description || props.description === ""
            ? props.description
            : "no Description"}
        </div>
      </div>
    </div>
  );
}
