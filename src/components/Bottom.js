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
    <footer className="bg-custom-color h-14 flex items-center justify-between fixed bottom-0 z-10 w-full">
      {/* Plus-mark aligned to the left */}

      <div className="flex items-center justify-between">
      <img src={plus} alt="Plus" className="h-14" />

      <p className="font-custom text-[1.6rem] images-bottom vc-bottom">
      VC</p>

      <p className="font-custom text-[1.6rem] images-bottom city_state-bottom">
      Park City, UT</p>

      <p className="font-custom text-[1.6rem] images-bottom city_state-bottom">
      @indie.vc</p>

      {/* <a className="hover:underline">
        <img
        src={city_state}
        alt="cs Logo"
        className="h-14 city_state-bottom images-bottom"
        />
      </a> */}

      </div>

      {/* <p className="font-custom text-[1.8rem] vc-bottom images-bottom">
      VC</p> */}

      {/* <a className="hover:underline">
        <img
        src={vc_logo}
        alt="vc Logo"
        className="h-14 vc-bottom images-bottom"
        />
        </a> */}

      <div className="flex-grow flex justify-center newsletter-paragraph">
      <a className="hover:underline cursor-pointer">

        <img
          src={contact}
          alt="contact Logo"
          className="h-14 "
          onClick={scrollToBottom}
        />

      </a>
    </div>

      {/* Plus-mark aligned to the right */}

      <div className="flex items-center justify-between">
      <p className="font-custom text-[1.6rem] images-bottom newsletter-bottom">
      Sign up for our NEWSLETTER</p>

      <img src={plus} alt="Plus" className="h-14" />

      </div>
    </footer>
  );
}

export default Bottom;
