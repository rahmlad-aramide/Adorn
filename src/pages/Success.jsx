import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="mx-auto flex w-[90%] max-w-[1140px] flex-col items-center rounded bg-white py-10 px-5 text-center shadow">
        <h1 className="mb-8 text-5xl font-extrabold text-secondary">
          {" "}
          Success{" "}
        </h1>
        <p className="mb-8 max-w-[52ch] px-4 text-gray-600">
          You have successfully subscribed to our newsletter, you now stand a
          chance to be among the top people that will be receiving all our
          updates firsthand.
        </p>
        <Link to="/">
          <button className="rounded-lg bg-secondary py-3 px-6 font-bold uppercase text-white transition duration-300 hover:scale-90 active:scale-100">
            Continue to site
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
