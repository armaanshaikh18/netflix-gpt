import React from "react";
import MoviesCards from "./MoviesCards";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="py-5 text-2xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies?.map((movie) => (
          <MoviesCards key={movie.id} posterCard={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
