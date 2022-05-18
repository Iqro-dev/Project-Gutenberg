import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import clsx from "clsx";

export default function Book() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="w-[300px] h-max shadow-xl rounded-xl">
      <div className="flex justify-center">
        <span className="text-xl font-['Poppins'] font-normal">Title</span>
      </div>
      <div className="flex justify-center px-12">Image</div>
      <div className="flex justify-end p-4">
        <button
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            color={clsx(isFavorite === true ? "yellow" : "")}
          />
        </button>
      </div>
    </div>
  );
}
