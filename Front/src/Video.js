import React, { useRef, useState } from "react";
import "./Video.css";
// import myvideo from './video/WhatsApp Video 2022-04-21 at 11.05.56 AM.mp4'
// import myvideo2 from "./video/WhatsApp Video 2022-04-28 at 1.10.55 AM.mp4";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
export const Video = ({ url, channel,description,song,likes,messages,shares }) => {
  const [playing, setPlaying] = useState(false);
  // eslint-disable-next-line
  const handleVideoPRess = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //if video is playing
    //stop it

    //otherwise play it
  };
  const videoRef = useRef(null);
  return (
    <div className="video">
      {/* <video onClick={handleVideoPRess} className="video__player" loop ref={videoRef} src={myvideo}></video> */}
      <video
        onClick={handleVideoPRess}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter
        channel={channel}
        description={description}
        song={song}

      />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};
