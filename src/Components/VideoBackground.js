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
          "https://www.youtube.com/embed/" + trailerKey + "?si=j5sjeL0SQI-6gvF7"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
