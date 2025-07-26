import React from "react";
import { IMG_CARD_URL } from "../utils/constant";

const MoviesCards = ({ posterCard }) => {
  return (
    <div>
      <div className="w-48 pr-4">
        <img src={IMG_CARD_URL + posterCard} alt="poster" />
      </div>
    </div>
  );
};

export default MoviesCards;
