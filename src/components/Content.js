import React from "react";
import logoMark from "../assets/Indie_Logomark.png";

const Content = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div id="home-anchor" style={{ height: "10px" }}></div>

      <div style={{ height: "170px" }}></div>

      <img src={logoMark} alt="logomark" />

      <div style={{ height: "265px" }}></div>

      <div className="space-y-14 sm:space-y-8 md:space-y-12 lg:space-y-28 mx-12 sm:mx-4 md:mx-32 lg:mx-40">
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[8.25rem] text-center mb-0 leading-[.875]">
          WE BELIEVE THE NEXT WAVE OF GENERATIONAL COMPANIES WILL BE BUILT BY
          FIERCELY INDEPENDENT FOUNDERS.
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[rem] md:text-[3rem] lg:text-[8.25rem] text-center mb-0 leading-[.875]">
          WE'RE ABOUT TO SEE THE BIGGEST WAVE OF SILICON VALLEY EDUCATED
          FOUNDERS IN HISTORY.
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[8.25rem] text-center mb-0 leading-[.875]">
          THEY'VE BEEN TRAINED TO THINK BIG AND TACKLE THE MOST AMBITIOUS
          PROBLEMS.
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[8.25rem] text-center mb-0 leading-[.875]">
          THE FOUNDERS WILL BUILD INDEPENDENT, INNOVATIVE COMPANIES THAT WILL
          CHANGE THE WORLD.
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[8.25rem] text-center mb-0 leading-[.875]">
          THEY WILL LOOK FOR FLEXIBLE AND SUSTAINABLE FUNDING MODELS TO MAXIMIZE
          CONTROL, OPTIONALITY, AND UPSIDE.
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[8.25rem] text-center mb-0 leading-[.875]">
          INDIE IS BUILT WITH THESE FOUNDERS IN MIND.
        </p>
        <div style={{ height: "63px" }}></div>

        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[8.25rem] text-center mb-0 leading-[.875]">
          CALL:<br></br>
          <a id="contact-anchor" href="tel:4158285779" class="hover:underline">
            415.828.5779
          </a>
        </p>

        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[8.25rem] text-center mb-0 leading-[.875]">
          EMAIL:<br></br>
          <a href="mailto:bryce@indie.vc" class="hover:underline">
            bryce@indie.vc
          </a>
        </p>

        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[8.25rem] text-center mb-0 leading-[.875]">
          FOLLOW:<br></br>
          <a href="https://instagram.com/INDIEVC" class="hover:underline">
            @INDIE.VC
          </a>
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[8.25rem] text-center mb-0 leading-[.875]">
          SIGN UP FOR OUR<br></br>
          <a href="" className="hover:underline custom-underline">
            NEWSLETTER
          </a>
        </p>
      </div>

      <div style={{ height: "123px" }}></div>
    </div>
  );
};

export default Content;
