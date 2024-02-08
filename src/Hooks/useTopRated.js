import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTopRated } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRated(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
