import React from "react";
import ReactPlayer from "react-player";

interface VideoProps {
  link: string;
}

function Video({ link }: VideoProps) {
  return (
    <div className="card">
      <ReactPlayer
        url={link}
        width="100%"
        height="80vh"
        muted
        loop
        playing={true}
      />
    </div>
  );
}

export default Video;
