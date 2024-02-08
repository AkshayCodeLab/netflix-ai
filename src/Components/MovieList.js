import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="text-white px-6">
      <h1 className="text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
