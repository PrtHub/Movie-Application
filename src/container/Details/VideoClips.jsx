/* eslint-disable react/prop-types */

import { BsPlayCircle } from "react-icons/bs";
import ContentWrapper from "../../Hoc/SectionWrapper";
import { LazyImg } from "../../components";
import VideoPopUp from "../../components/VideoPopUp";
import { useState } from "react";

const VideoClips = ({ videos, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  return (
    <ContentWrapper>
      {!loading ? (
        <section className="w-full h-full flex flex-col items-start gap-10 relative">
          <h1 className="textheader">
            Official Videos
          </h1>
          <main className="w-full h-full flex flex-row gap-10 overflow-x-scroll">
            {videos?.results?.map((video) => (
              <div
                key={video.id}
                className="w-full h-full flex flex-col items-center justify-center gap-2"
              >
                <section
                  className="w-80 h-full overflow-hidden relative"
                  onClick={() => {
                    setVideoId(video.key);
                    setShow(true);
                  }}
                >
                  <LazyImg
                    src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
                    <BsPlayCircle className="text-4xl cursor-pointer" />
                  </div>
                </section>
                <section>
                  <p className="text-lg font-medium">{video.name}</p>
                </section>
              </div>
            ))}
          </main>
          {show && (
            <VideoPopUp
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
            />
          )}
        </section>
      ) : (
        <>
          <div className="w-full h-full overflow-hidden">Loading....</div>
        </>
      )}
    </ContentWrapper>
  );
};

export default VideoClips;
