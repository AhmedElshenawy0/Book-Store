import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ rate }) => {
  return (
    <div className="rating-container">
      {rate >= 1 ? (
        <FaStar className="fill" />
      ) : rate >= 0.5 ? (
        <FaStarHalfAlt className="half" />
      ) : (
        <FaRegStar className="empty" />
      )}
      {rate >= 2 ? (
        <FaStar className="fill" />
      ) : rate >= 1.5 ? (
        <FaStarHalfAlt className="half" />
      ) : (
        <FaRegStar className="empty" />
      )}
      {rate >= 3 ? (
        <FaStar className="fill" />
      ) : rate >= 2.5 ? (
        <FaStarHalfAlt className="half" />
      ) : (
        <FaRegStar className="empty" />
      )}
      {rate >= 4 ? (
        <FaStar className="fill" />
      ) : rate >= 3.5 ? (
        <FaStarHalfAlt className="half" />
      ) : (
        <FaRegStar className="empty" />
      )}
      {rate >= 5 ? (
        <FaStar className="fill" />
      ) : rate >= 4.5 ? (
        <FaStarHalfAlt className="half" />
      ) : (
        <FaRegStar className="empty" />
      )}
    </div>
  );
};

export default Rating;
