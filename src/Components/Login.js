import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const toggleSignInForm = () => {
    if (signIn) {
      setSignIn(false);
    } else {
      setSignIn(true);
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <div className="flex justify-center h-screen items-center">
        <form className="bg-black relative px-10 py-12 w-96 text-white rounded-lg shadow-md bg-opacity-80">
          <h1 className="font-bold text-3xl mb-4">
            {signIn === true ? "Sign In" : "Sign Up"}
          </h1>
          {signIn === false && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-900"
            />
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-4 my-4 w-full bg-gray-900"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-900"
          />
          <button className="bg-red-700 rounded-md p-2 my-4 w-full hover:bg-red-600 transition duration-300 ease-in-out">
            {signIn === true ? "Sign In" : "Sign Up"}
          </button>
          {signIn === false ? (
            <p className="my-2 flex gap-1">
              New to Netflix?
              <p
                className="text-blue-400 cursor-pointer hover:text-blue-300"
                onClick={toggleSignInForm}
              >
                Sign Up
              </p>
              now
            </p>
          ) : (
            <p className="my-2 flex gap-1">
              Already have an account?
              <p
                className="text-blue-400 cursor-pointer hover:text-blue-300"
                onClick={toggleSignInForm}
              >
                Sign In
              </p>
              now
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
