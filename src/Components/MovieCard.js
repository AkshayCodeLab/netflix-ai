import { POSTER_CDN_URL } from "../Utils/constants";

const MovieCard = ({ data }) => {
  const { poster_path } = data;
  return (
    <div className="w-32 mr-4">
      <img alt="movie card" src={POSTER_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
