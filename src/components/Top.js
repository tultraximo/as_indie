import React, { useState, useEffect } from "react";
import plus from "../assets/Indie_plus-mark_02.png";
import headerWordmark from "../assets/Indie_Primary-Wordmark.png";
import headerLogomark from "../assets/Indie_Logomark.png"
import contact from "../assets/Indie_Website_102423_03.png";

const Top = () => {

  const [currentLogo, setCurrentLogo] = useState(headerLogomark); // Initialize with the first image
  const [switchCount, setSwitchCount] = useState(0)

  useEffect(() => {
    // Only set up the interval if we haven't switched three times yet
    if (switchCount < 6) {
      const timer = setTimeout(() => {
        // Switch the logo
        setCurrentLogo(currentLogo === headerLogomark ? headerWordmark : headerLogomark);
        // Increment the switch counter
        setSwitchCount(switchCount + 1);
      }, 1000); // Switch every 2 seconds

      // Clear the timeout if the component unmounts or the switch count changes
      return () => clearTimeout(timer);
    }
    // The dependencies array contains currentLogo and switchCount, so the effect will re-run when these change
  }, [currentLogo, switchCount]);

  const scrollToOffsetTop = () => {
    window.scrollTo({
      top: -100, // 100 pixels from the top
      behavior: "smooth", // Smooth scrolling
    });
  };

  const scrollToBottom = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    window.scrollTo({
      top: documentHeight - viewportHeight, // Scrolls to the bottom
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-custom-color text-black h-14 flex items-center justify-between sticky top-0 z-10 w-full">
      {/* Plus-mark aligned to the left */}
      <img src={plus} alt="Plus" className="h-14" />

      <div className="font-custom text-[1.76rem] contact-top">
        <a href="#contact-anchor">Contact</a>
      </div>

      {/* Header logo aligned to the center */}
      <div className="flex-grow flex justify-center logo-top cursor-pointer">
        <a className="hover:underline">
          <img
            src={currentLogo}
            alt="Header Logo"
            className="h-14"
            onClick={scrollToOffsetTop}
          />
        </a>
      </div>

      {/* Plus-mark aligned to the right */}
      <img src={plus} alt="Plus" className="h-14" />
    </header>
  );
};
export default Top;
