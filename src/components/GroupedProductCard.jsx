import React from "react";
import { Link } from "react-router-dom";
import arrowRight from "./../assets/icons/arrow-right.svg";

const GroupedProductCard = ({ imgUrl, name, url, id, ...others }) => {
  return (
    <div className="relative flex flex-col justify-between border border-tertiary p-5">
      {/* <div className="flex min-h-[250px] justify-center">
        <Link to={url}>
          <img src={imgUrl} alt={name} />
        </Link>
      </div> */}
      <div className="group relative flex min-h-[250px] justify-center">
        <Link to={url} className="flex items-center justify-center">
          <img src={imgUrl} alt={name} className="max-h-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 backdrop-blur transition-opacity duration-300 ease-in group-hover:opacity-100">
            <svg
              fill="#fff"
              height="64px"
              width="64px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 488.85 488.85"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
                      s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
                      c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
                      C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
                      c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"
                />
              </g>
            </svg>
          </div>
        </Link>
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
