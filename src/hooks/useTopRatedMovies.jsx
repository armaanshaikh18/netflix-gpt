import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topMovies = useSelector((store) => store?.movies?.topRatedMovies);

  const handleTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTopRatedMovies(data?.results));
  };

  useEffect(() => {
    !topMovies && handleTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
