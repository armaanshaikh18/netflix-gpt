import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovies from "./GptMovies";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed  -z-10">
        <img
          className="h-screen object-cover md:h-auto"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovies />
    </div>
  );
};

export default GptSearch;
