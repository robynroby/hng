import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TopPage from "../components/TopPage/TopPage";
import MiniFooter from "../components/MiniFooter/MiniFooter";
import CardHolder from "../components/CardHolder/CardHolder";

function LandingPage() {
  return (
    <div>
      <div className="first-page">
        <Navbar />
        <TopPage />
        <MiniFooter />
        <CardHolder />
      </div>
    </div>
  );
}

export default LandingPage;
