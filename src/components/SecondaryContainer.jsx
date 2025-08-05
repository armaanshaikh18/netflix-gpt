import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="md:-mt-116  mt-70 relative z-20 overflow-x-scroll pl-6">
        <MoviesList title={"Now Playing Movies"} movies={movies?.moviesData} />
        <MoviesList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MoviesList
          title={"Top Rated Movies"}
          movies={movies?.topRatedMovies}
        />
        <MoviesList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
