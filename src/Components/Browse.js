import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* Planning
      -Main Component
        -Trailer
        -Name, info about that trailer movie
      -Secondary Component
        - Array of comps
      */}
    </div>
  );
};

export default Browse;
