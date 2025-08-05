import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingmovies = useSelector((store) => store?.movies?.moviesData);

  const handleNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data?.results));
  };

  useEffect(() => {
    !nowPlayingmovies && handleNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
