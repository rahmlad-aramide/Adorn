import { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../lib/firebase/firebase.utils";

import crossedEye from "./../assets/icons/crossed-eye.svg";
import eye from "./../assets/icons/eye.svg";
import { ToastContainer } from "react-toastify";
import { warn, notify } from "../App";

const defaultFormFields = {
  username: "",
  password: "",
};
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      notify("Signed in successfully");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          warn("Incorrect password, try again!");
          break;
        case "auth/user-not-found":
          warn("User not found, check your email address!");
          break;
        case "auth/network-request-failed":
          warn("Connection problem, check your network and try again!");
          break;
        case "auth/internal-error":
          warn("An error has occured, try again!");
          break;
        case "auth/email-already-in-use":
          warn("This email is already in use!");
          break;
        default:
          warn("An error has occured", error);
      }
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUserWithEmailAndPassword(username, password);
      notify("Signed in successfully");
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          warn("Incorrect password, try again!");
          break;
        case "auth/user-not-found":
          warn("User not found, check your email address!");
          break;
        case "auth/network-request-failed":
          warn("Connection problem, check your network and try again!");
          break;
        case "auth/internal-error":
          warn("An error has occured, try again!");
          break;
        case "auth/email-already-in-use":
          warn("This email is already in use!");
          break;
        default:
          warn("An error has occured", error);
      }
      console.log(error);
    }
  };
  return (
    <>
      <section className="h-screen bg-black/50 bg-footer bg-cover bg-center">
        <ToastContainer />
        <div className="flex h-screen w-full flex-col items-center justify-start md:flex-row md:justify-center">
          <div className="order-1 flex h-fit w-full items-center justify-center pt-16 md:order-2 md:h-full md:w-[45%]">
            <div className="my-auto w-[90%] rounded-xl bg-white/50 py-10 backdrop-blur-lg">
              <div className="h-full w-full overflow-y-auto">
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto w-[90%] max-w-[600px]"
                >
                  <div>
                    <h1 className="font-Inter mb-5 text-[24px]">
                      Sign In to Adorn
                    </h1>
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label htmlFor="username" className="mb-2 text-lg">
                      Username
                    </label>
                    <div className="rounded-full border border-gray-800">
                      <input
                        className="w-full rounded-full border-none bg-transparent py-1 px-2 outline-none placeholder:text-gray-600"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col">
                    <label htmlFor="password" className="mb-2 text-lg">
                      Password
                    </label>
                    <div className="flex rounded-full border border-gray-800 pr-2">
                      <input
                        className="w-full rounded-full border-none bg-transparent py-1 px-2 outline-none placeholder:text-gray-600"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handleChange}
                        required
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="flex cursor-pointer items-center justify-center"
                      >
                        <img
                          className="h-6"
                          src={showPassword ? crossedEye : eye}
                          alt="Show Password"
                        />
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 mb-2 flex w-full justify-center rounded-full border border-gray-800 bg-black py-1 text-white transition duration-200 hover:bg-transparent hover:text-black active:bg-black"
                  >
                    Sign In
                  </button>
                </form>
                <div className="mx-4 max-w-[600px] md:mx-8">
                  <div className="flex justify-center text-tertiary">
                    I don&apos;t have an account?{" "}
                    <Link className="pl-1.5 underline" to="/sign-up">
                      {" "}
                      Sign Up
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="h-[1px] w-full bg-black"></div>
                    <div className="mx-2 mb-1 mt-0.5 flex justify-center">
                      or
                    </div>
                    <div className="h-[1px] w-full bg-black"></div>
                  </div>
                  <button
                    onClick={signInWithGoogle}
                    className="mt-3 flex w-full justify-center rounded-full border border-gray-800 bg-black py-1 text-white transition duration-200 hover:bg-transparent hover:text-black active:bg-black"
                  >
                    Sign In with Google
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
export default SignIn;
