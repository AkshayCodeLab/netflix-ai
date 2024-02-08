import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  // Fetch trailer

  const trailerKey = useSelector((store) => store.movies?.trailerVideo?.key);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey +
          "?si=j5sjeL0SQI-6gvF7&autoplay=1&mute=1&autoplay=1&playlist=" +
          trailerKey
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
