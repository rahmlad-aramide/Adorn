import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { UserContext } from "../contexts/UserContext";

const Account = ({ user }) => {
  // const {user} = useContext(UserContext);
  const createdAtDate = new Date(parseInt(user.createdAt));
  const lastLoginAtDate = new Date(parseInt(user.lastLoginAt));

  const formattedCreatedAt = createdAtDate.toDateString(); // e.g., "Fri Jan 01 2021"
  const formattedLastLoginAt =
    lastLoginAtDate.toDateString() +
    " at " +
    lastLoginAtDate.toLocaleTimeString(); // e.g., "1/1/2021, 12:00:00 AM"

  return (
    <>
      <section className="h-screen bg-black/50 bg-footer bg-cover bg-center">
        <ToastContainer />
        <div className="flex h-screen w-full flex-col items-center justify-center md:flex-row md:justify-center">
          <div className="order-1 flex h-fit w-full items-center justify-center pt-16 md:order-2 md:h-full md:w-[45%]">
            <div className="my-auto w-[90%] rounded-xl bg-white/50 py-10 backdrop-blur-lg">
              <div className="h-full w-full overflow-y-auto">
                <div className="mb-4 flex items-center justify-center">
                  <img
                    className="h-24 w-24 rounded-full object-cover"
                    src={user.photoURL}
                    alt="User profile"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-semibold">{user.displayName}</h2>
                  <p className="text-lg text-gray-900">{user.email}</p>
                  <div className="mt-4">
                    <div className="mb-1 text-lg text-gray-900">
                      Account Details:
                    </div>
                    <ul className="text-md pl-5 text-gray-800">
                      <li>
                        Email Verified: {user.emailVerified ? "Yes" : "No"}
                      </li>
                      <li>User ID: {user.uid}</li>
                      <li>Account Created: {formattedCreatedAt}</li>
                      <li>Last Login: {formattedLastLoginAt}</li>
                    </ul>
                  </div>
                </div>
                <div className={`mt-5 flex items-center justify-center`}>
                  <button className="flex items-center justify-center border border-primary px-5 py-2 transition duration-200 hover:bg-primary hover:text-white">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
