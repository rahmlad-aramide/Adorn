import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="max-w-lg text-center">
        <h1 className="mb-8 text-9xl font-extrabold text-secondary">404</h1>
        <p className="mb-8 px-4 text-gray-600">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link to="/">
          <button className="rounded-lg bg-secondary py-3 px-6 font-bold uppercase text-white transition duration-300 hover:scale-90 active:scale-100">
            Go back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
