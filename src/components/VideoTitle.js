
const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="py-4 w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12  rounded-lg hover:bg-opacity-50">
         ▶️ Play</button>
        <button className="bg-gray-500 text-white mx-4 p-4 px-12 bg-opacity-50 rounded-lg">
          ℹ️ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
