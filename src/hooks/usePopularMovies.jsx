import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);

  const handlePopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addPopularMovies(data?.results));
  };

  useEffect(() => {
    !popularMovies && handlePopularMovies();
  }, []);
};

export default usePopularMovies;
