import React from "react";
import { data } from "../data";

console.log(data);

export function VideoListing() {
  return (
    <div>
      <div className="videoListing-page">
        <div className="video-listing-side-nav">
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
            <div class="video-card">
              <div class="video-card-other-option">
                <button class="watch-later">
                  <span class="material-icons"> watch_later </span>
                </button>
                <button class="add-to-playlist">
                  <span class="material-icons"> playlist_add </span>
                </button>
              </div>
              <img
                class="video-card-thumbnail"
                src="https://via.placeholder.com/1280x720"
                alt=""
              />
              <div class="video-card-details">
                <div class="video-card-channel-image">
                  <img
                    src="https://via.placeholder.com/250x250"
                    alt="avatar"
                    class="custom-avatar-small"
                  />
                </div>
                <div class="video-card-details-text">
                  <p class="vcd-p vcd-title">
                    The Animals of Chernobyl | The New York Times
                  </p>
                  <p class="vcd-p vcd-channel-name">The New York Times</p>
                  <p class="vcd-p vcd-view-details">10M views | 7 years ago</p>
                </div>
                <div class="video-card-more-option">
                  <button class="three-dots">
                    <span class="material-icons"> more_vert </span>
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
