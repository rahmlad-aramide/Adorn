import React from "react";
import star from "./../assets/icons/star.svg";
import starFilled from "./../assets/icons/star-filled.svg";

const FilledStar = () => {
  return (
    <div>
      <img src={starFilled} alt="Starred" />
    </div>
  );
};
const EmptyStar = () => {
  return (
    <div>
      <img src={star} alt="Star" />
    </div>
  );
};

const Star = ({ stars }) => {
  return (
    <div>
      {stars === 4 ? (
        <div className="flex">
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <EmptyStar />
        </div>
      ) : stars === 5 ? (
        <div className="flex">
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
        </div>
      ) : (
        <div className="flex">
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
        </div>
      )}
    </div>
  );
};

export default Star;
