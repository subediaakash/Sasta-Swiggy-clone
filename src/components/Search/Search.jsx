import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex items-center align-middle justify-center p-6">
      <div className="flex  align-middle items-center border-2 border-gray-400">
        <form
          action="
    "
        >
          <input
            type="text"
            name=""
            id=""
            className="md:w-[445px] lg:w-[556px] h-11 border border-none pointer-events-auto hover:border-orange-300  "
            placeholder=" Enter the restaurant you want to search"
          />
        </form>
        <button>
          {" "}
          <CiSearch size={25} />
        </button>
      </div>
    </div>
  );
};

export default Search;
