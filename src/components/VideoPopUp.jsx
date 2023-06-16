/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import ReactPlayer from "react-player/youtube";

const VideoPopUp = ({ setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <>
      <section
        className={`w-full h-full flex justify-center items-center fixed top-0 left-0 z-50`}
      >
        <main className="relative w-[600px] lg:w-[800px] aspect-video bg-black">
          <span
            className="absolute top-0 right-0 text-white cursor-pointer"
            onClick={hidePopup}
          >
            <AiOutlineClose className="text-xl m-1" />
          </span>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            //    playing={true}
          />
        </main>
      </section>
    </>
  );
};

export default VideoPopUp;
