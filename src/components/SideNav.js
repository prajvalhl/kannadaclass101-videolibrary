import React from "react";
import { useNav } from "../nav-context";

export function SideNav() {
  const { menu } = useNav();
  return (
    <div>
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
    </div>
  );
}
