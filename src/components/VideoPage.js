import React from "react";
import { data } from "../data";
import { useParams } from "react-router-dom";
import "../styles/videoStyles.css";
import { SideNav } from "./SideNav";

export function VideoPage() {
  const { videoId } = useParams();
  const video = data.find((video) => video.id === videoId);

  return (
    <div className="video-container">
      <div className="someref">
        <SideNav />
      </div>
      <div className="view-container">
        <img src={video.videoThumbnail} alt="" />
      </div>
      <p>{video.videoName}</p>
      <p>{video.channelName}</p>
      <p>
        {video.views}
        {video.viewsValue} views | {video.year} years ago
      </p>
    </div>
  );
}
