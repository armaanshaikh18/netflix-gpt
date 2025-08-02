import React from "react";
import { lang } from "../utils/langConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langChange = useSelector((store) => store.config.lang);
  return (
    <div className="pt-15 flex justify-center">
      <form className="w-1/2 bg-black">
        <input
          type="text"
          placeholder={lang[langChange].placeHolderName}
          className="p-2 m-4 bg-gray-300 w-9/12 rounded-sm"
        />
        <button className="p-2 m-4 bg-red-700 font-bold text-white rounded-lg cursor-pointer w-1/6">
          {lang[langChange].name}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
