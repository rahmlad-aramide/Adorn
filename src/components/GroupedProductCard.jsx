import React from "react";
import { Link } from "react-router-dom";
import arrowRight from "./../assets/icons/arrow-right.svg";

const GroupedProductCard = ({ imgUrl, name, url, id, ...others }) => {
  return (
    <div className="relative flex flex-col justify-between border border-tertiary p-5">
      <div className="flex min-h-[250px] justify-center">
        <img src={imgUrl} alt={name} />
      </div>
      <div className={`flex ${others.others}`}>
        <Link
          to={url}
          className={`group flex items-center justify-center ${others.mt}`}
        >
          <div className="mr-2 flex items-center justify-center text-primary group-hover:mr-4">
            {name}
          </div>
          <div className="flex items-center justify-center">
            <img src={arrowRight} alt="Arrow right" className="h-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GroupedProductCard;
