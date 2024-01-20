const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 py-5">{overview}</p>
      <div>
        <button className="bg-white hover:bg-gray-200 text-black py-3 px-12 rounded-md font-bold text-xl">
          Play
        </button>
        <button className="bg-slate-500 hover:bg-gray-400 text-white py-3 px-10 rounded-md font-bold text-xl bg-opacity-50 ml-3">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
