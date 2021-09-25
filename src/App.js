import React from "react";
import { VideoListing } from "./components/VideoLisitng";
import { VideoPage } from "./components/VideoPage";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
