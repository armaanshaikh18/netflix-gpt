import React, { useRef } from "react";
import { lang } from "../utils/langConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langChange = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const handleGPTSearch = async (e) => {
    e.preventDefault();
    const gptQuery = searchText.current.value;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
  };
  return (
    <div className="md:pt-15  flex justify-center pt-60">
      <form className="md:w-1/2 w-full mx-5  bg-black">
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langChange].placeHolderName}
          className="p-2 m-4 bg-gray-300 md:w-9/12 w-8/12  rounded-sm"
        />
        <button
          className="p-2 m-4 bg-red-700 font-bold text-white rounded-lg cursor-pointer w-1/6"
          onClick={handleGPTSearch}
        >
          {lang[langChange].name}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
