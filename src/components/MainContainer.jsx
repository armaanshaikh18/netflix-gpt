import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.moviesData);
  if (!movies) return;
  const videoMovie = movies[0];

  const { original_title, overview, id } = videoMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer moviesId={id} />
    </div>
  );
};

export default MainContainer;
