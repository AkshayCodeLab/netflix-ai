import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();

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
    <div className="flex justify-between absolute z-10 w-screen bg-gradient-to-b from-black">
      <img
        className="w-52 px-8 py-2"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="logo"
      />
      {user && (
        <div className="flex gap-2 m-4">
          <img
            className="w-7"
            src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg"
            alt="user-icon"
          />
          <button className="text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
