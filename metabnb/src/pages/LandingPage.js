import React from "react";
import './LandingPage.css'
import Navbar from "../components/Navbar/Navbar";
import TopPage from "../components/TopPage/TopPage";
import MiniFooter from "../components/MiniFooter/MiniFooter";
import CardHolder from "../components/CardHolder/CardHolder";
import AboutPage from "../components/AboutPage/AboutPage";
import Footer from "../components/Footer/Footer";

function LandingPage() {
  return (
    <div>
      <div className="first-page">
        <Navbar />
        <TopPage />
        <MiniFooter />
        <CardHolder />
        <AboutPage />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
