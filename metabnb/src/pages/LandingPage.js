import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TopPage from "../components/TopPage/TopPage";
import MiniFooter from "../components/MiniFooter/MiniFooter";

function LandingPage() {
  return (
    <div>
      <div className="first-page">
        <Navbar />
        <TopPage />
        <MiniFooter />
      </div>
    </div>
  );
}

export default LandingPage;
