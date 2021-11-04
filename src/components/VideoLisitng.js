import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";
import { SideNav } from "./SideNav";

export function VideoListing() {
  return (
    <div>
      <div className="videoListing-page">
        {<SideNav />}
        <div className="video-listing">
          {data.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-card-other-option">
                <button className="watch-later">
                  <span className="material-icons"> watch_later </span>
                </button>
                <button className="add-to-playlist">
                  <span className="material-icons"> playlist_add </span>
                </button>
              </div>
              <Link to={`/video/${video.id}`}>
                <img
                  className="video-card-thumbnail"
                  src={video.videoThumbnail}
                  alt="video thumbnail"
                />
              </Link>
              <div className="video-card-details">
                <div className="video-card-channel-image">
                  <img
                    src={video.channelThumbnail}
                    alt="channel thumbnail"
                    className="custom-avatar-small"
                  />
                </div>
                <div className="video-card-details-text">
                  <p className="vcd-p vcd-title">{video.videoName}</p>
                  <p className="vcd-p vcd-channel-name">{video.channelName}</p>
                  <p className="vcd-p vcd-view-details">
                    {video.views}
                    {video.viewsValue} views | {video.year} years ago
                  </p>
                </div>
                <div className="video-card-more-option">
                  <button className="three-dots">
                    <span className="material-icons"> more_vert </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
