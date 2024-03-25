// interface Breadcrumb {
//     label: string;
//     href: string;
//     active?: boolean;
//   }

import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Breadcrumbs({ breadcrumbs }) {
  const navigate = useNavigate();

  return (
    <nav aria-label="Breadcrumb" className="my-6">
      <ol className={`hidden font-workSans text-lg md:flex md:text-xl`}>
        <li>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g opacity="0.4">
                <path
                  d="M13.4896 2.19754C13.3476 2.06984 13.1728 2.00049 12.9928 2.00049C12.8128 2.00049 12.638 2.06984 12.496 2.19754L1 12.5408L1.9944 13.9919L3.4 12.7273V24.1543C3.40085 24.6436 3.56969 25.1127 3.86956 25.4587C4.16944 25.8047 4.57591 25.9995 5 26.0005H21C21.4241 25.9995 21.8306 25.8047 22.1304 25.4587C22.4303 25.1127 22.5992 24.6436 22.6 24.1543V12.7356L24.0056 14.0002L25 12.5491L13.4896 2.19754ZM14.6 24.1543H11.4V16.7695H14.6V24.1543ZM16.2 24.1543V16.7695C16.1996 16.28 16.0309 15.8107 15.7309 15.4646C15.4309 15.1185 15.0242 14.9238 14.6 14.9233H11.4C10.9758 14.9238 10.5691 15.1185 10.2691 15.4646C9.96913 15.8107 9.80042 16.28 9.8 16.7695V24.1543H5V11.2882L13 4.09727L21 11.2974V24.1543H16.2Z"
                  fill="#111111"
                />
              </g>
            </svg>
          </Link>
        </li>
        <span className="mr-2 inline-block text-gray-500">/</span>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={breadcrumb.active ? "text-gray-900" : "text-gray-500"}
          >
            <HashLink to={breadcrumb.href}>{breadcrumb.label}</HashLink>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-2 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
      <div
        onClick={() => navigate(-1)}
        className="flex cursor-pointer items-center font-workSans font-semibold md:hidden"
      >
        <svg
          height="16px"
          width="16px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185.343 185.343"
          xmlSpace="preserve"
          className="mr-1 rotate-180"
        >
          <path
            d="M51.707 185.343a10.692 10.692 0 01-7.593-3.149 10.724 10.724 0 010-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 01-7.587 3.15z"
            fill="#010002"
          />
        </svg>
        Go Back
      </div>
    </nav>
  );
}
