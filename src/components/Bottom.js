import React from "react";
import plus from "../assets/Indie_plus-mark_02.png";
import headerLogo from "../assets/Indie_Primary-Wordmark.png";
import newsletter from "../assets/Indie_Website_102423-13.png";
import indievc from "../assets/Indie_Website_102423-11.png";
import city_state from "../assets/Indie_Website_102423-10.png";
import vc_logo from "../assets/Indie_Website_102423_02.png";
import contact from "../assets/Indie_Website_102423_03.png"

function Bottom() {

  const scrollToBottom = () => {

    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    window.scrollTo({
        top: documentHeight - viewportHeight, // Scrolls to the bottom
        behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-custom-color text-white h-14 flex items-center justify-between fixed bottom-0 z-10 w-full">
      {/* Plus-mark aligned to the left */}
      <img src={plus} alt="Plus" className="h-14" />

      <div className="flex-grow flex justify-center">
      <a className="hover:underline">

        <img
          src={contact}
          alt="contact Logo"
          className="h-14"
          onClick={scrollToBottom}
        />

      </a>
    </div>

      {/* Plus-mark aligned to the right */}
      <img src={plus} alt="Plus" className="h-14" />
    </footer>
  );
}

export default Bottom;
