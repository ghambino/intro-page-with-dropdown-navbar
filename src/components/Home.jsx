import React from "react";
import "./home.css";
import deskImg from "../images/image-hero-desktop.png";
import mobileImg from "../images/image-hero-mobile.png";
import { images } from "./helper";

function Home() {

  const toggleImg = () => {
    if (window.innerWidth < 385) {
      return mobileImg;
    } else {
      return deskImg;
    }
  };

  console.log(toggleImg());

  return (
    <section className="holder">
      <div className="intro-text">
        <h1 className="title">Make remote work</h1>
        <p className="note">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="learn">Learn more</button>
        <div className="sponsors">
          {images.map((unit, index) => (
            <>
              <img src={unit} alt="sponsor logo" className="sponlogo"/>
            </>
          ))}
        </div>
      </div>
      <img src={window.innerWidth <= 385  ? mobileImg : deskImg } alt="desl" className="intro-image" />
    </section>
  );
}

export default Home;
