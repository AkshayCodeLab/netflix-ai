const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[15%] px-8 text-white bg-gradient-to-r from-black w-screen aspect-video">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-300 max-w-[30rem]">
          {overview}
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="bg-white hover:bg-opacity-70 text-black py-3 px-12 rounded-md font-bold text-xl">
            Play
          </button>
          <button className="bg-gray-800 hover:bg-opacity-70 text-white py-3 px-10 rounded-md font-bold text-xl">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
