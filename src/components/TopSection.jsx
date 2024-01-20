import "../styles/TopSection.css";
import { logo, gif, svg } from "../assets";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TopSection = () => {
  const text = ["Build.", "Operate.", "Train.", "Transfer."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % text.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-section">
      <div className="particle-canvas">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="top-section-left">
        <div className="top-section-left-logo" >
          <img src={logo} alt="" className="top-section-left-image" />
        </div>
        <h1 className="top-section-left-heading">The Venture guys !</h1>
        <div className="top-section-left-subheading">
          We
          <motion.h2
            className="top-section-left-subheading"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 1 }}
            key={index}
          >
            {text[index]}
          </motion.h2>
        </div>
        <p className="top-section-left-text">
          We offer modern solutions for growing your business.
        </p>
        <div>
          <button className="top-section-left-button">Know More</button>
        </div>
        <img src={svg} alt="svg" />
      </div>
      <div className="top-section-right">
        <img src={gif} alt="gif" className="top-section-right-gif" />
      </div>
    </div>
  );
};

export default TopSection;
