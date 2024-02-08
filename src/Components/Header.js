import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, USER_ICON } from "../Utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe to the onOathChange Event Listener everytime our component unmounts from the DOM other wise it will attach repeated event listeners everytime our header component mounts due to useEffect()
    return () => unsubscribe();
  }, []);

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between items-center absolute z-10 w-screen bg-gradient-to-b from-black">
      <img className="w-52 px-8 py-2" src={LOGO} alt="logo" />

      {user && (
        <div className="flex items-center gap-4 m-4 mr-8">
          <button className="text-white bg-blue-600 p-2 m-2 rounded-md hover:opacity-75">
            GPT Search
          </button>
          <div className="relative">
            <img
              className="w-10 h-10 rounded-sm object-cover"
              src={USER_ICON}
              alt="user-icon"
            />
          </div>

          <button
            className="text-white hover:text-gray-300 text-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
