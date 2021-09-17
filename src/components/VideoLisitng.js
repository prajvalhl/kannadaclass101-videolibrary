import React from "react";
import { data } from "../data";
import { useNav } from "../nav-context";

export function VideoListing() {
  const { menu } = useNav();

  return (
    <div>
      <div className="videoListing-page">
        <div
          className={`video-listing-side-nav ${
            menu ? "side-nav-display-true" : "side-nav-display-false"
          }`}
        >
          <div>Home</div>
          <div>Explore</div>
          <div>Subscriptions</div>
          <div>Originals</div>
          <div>Library</div>
          <div>History</div>
          <div>Your videos</div>
          <div>Watch later</div>
          <div>Liked videos</div>
        </div>
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
              <img
                className="video-card-thumbnail"
                src={video.videoThumbnail}
                alt=""
              />
              <div className="video-card-details">
                <div className="video-card-channel-image">
                  <img
                    src={video.channelThumbnail}
                    alt="avatar"
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
