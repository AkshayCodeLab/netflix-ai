import { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../Utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { LOGIN_BG } from "../Utils/constants";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    if (signIn) {
      setSignIn(false);
    } else {
      setSignIn(true);
    }
  };

  const handleClickSubmit = async () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    // Sign In/Sign Up logic
    if (!signIn) {
      //Sign Up the User
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              navigate("/error");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign In the user.
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG} alt="background-img" />
      </div>
      <div className="flex justify-center h-screen items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black relative px-10 py-12 w-96 text-white rounded-lg shadow-md bg-opacity-80"
        >
          <h1 className="font-bold text-3xl mb-4">
            {signIn === true ? "Sign In" : "Sign Up"}
          </h1>
          {signIn === false && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-900"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-4 my-4 w-full bg-gray-900"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-900"
          />
          {errorMsg && <p className="text-red-600 text-md">{errorMsg}</p>}
          <button
            onClick={handleClickSubmit}
            className="bg-red-700 rounded-md p-2 my-4 w-full hover:bg-red-600 transition duration-300 ease-in-out"
          >
            {signIn === true ? "Sign In" : "Sign Up"}
          </button>
          {signIn ? (
            <div className="my-2 flex gap-1">
              New to Netflix?
              <p
                className="text-blue-400 cursor-pointer hover:text-blue-300"
                onClick={toggleSignInForm}
              >
                Sign Up
              </p>
              now
            </div>
          ) : (
            <div className="my-2 flex gap-1">
              Already have an account?
              <p
                className="text-blue-400 cursor-pointer hover:text-blue-300"
                onClick={toggleSignInForm}
              >
                Sign In
              </p>
              now
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
