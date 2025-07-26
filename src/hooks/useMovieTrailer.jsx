import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMovieTrailer } from "../redux/moviesSlice";

const useMovieTrailer = (moviesId) => {
  const dispatch = useDispatch();
  const getMovieTrailerById = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}/videos`,
      API_OPTIONS
    );
    const jsonData = await response.json();
    const filterData = jsonData?.results?.filter(
      (movie) => movie?.type === "Trailer"
    );
    const updatedData = filterData.length
      ? filterData[0]
      : jsonData?.results[0];
    dispatch(addMovieTrailer(updatedData));
  };

  useEffect(() => {
    getMovieTrailerById();
  }, []);
};

export default useMovieTrailer;
