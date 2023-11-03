import React, { useState, useEffect } from "react";
import logoMark from "../assets/Indie_Logomark.png";
import wordMark from "../assets/Indie_Primary-Wordmark.png";

const Content = () => {
  const [currentLogo, setCurrentLogo] = useState(wordMark); // Initialize with the first image
  const [switchCount, setSwitchCount] = useState(0)



  useEffect(() => {
    // Only set up the interval if we haven't switched three times yet
    if (switchCount < 6) {
      const timer = setTimeout(() => {
        // Switch the logo
        setCurrentLogo(currentLogo === logoMark ? wordMark : logoMark);
        // Increment the switch counter
        setSwitchCount(switchCount + 1);
      }, 1000); // Switch every 2 seconds

      // Clear the timeout if the component unmounts or the switch count changes
      return () => clearTimeout(timer);
    }
    // The dependencies array contains currentLogo and switchCount, so the effect will re-run when these change
  }, [currentLogo, switchCount]);




  return (
    <div className="flex-1 overflow-y-auto">


      <div className="flex justify-center items-center h-screen">
        <div className="mt-[-56%] sm:mt-[-15%] md:mt-[-12%] lg:mt-[-9%] xl:mt-[-6.75%]"> {/* Adjust this percentage as needed */}
        <img src={currentLogo} alt="logomark" className="max-h-full mx-auto" />
       </div>
      </div>

      <div className="space-y-14 sm:space-y-8 md:space-y-12 lg:space-y-28 mx-12 sm:mx-24 md:mx-32 lg:mx-40">
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[5.5rem] xl:text-[8.25rem] text-center mb-0 leading-[.875]">
          WE BELIEVE THE NEXT WAVE OF GENERATIONAL COMPANIES WILL BE BUILT BY
          FIERCELY INDEPENDENT FOUNDERS.
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[rem] md:text-[5.5rem] xl:text-[8.25rem] text-center mb-0 leading-[.875]">
          WE'RE ABOUT TO SEE THE BIGGEST WAVE OF SILICON VALLEY EDUCATED
          FOUNDERS IN HISTORY.
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[5.5rem] xl:text-[8.25rem] text-center mb-0 leading-[.875]">
          THEY'VE BEEN TRAINED TO THINK BIG AND TACKLE THE MOST AMBITIOUS
          PROBLEMS.
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[5.5rem] xl:text-[8.25rem] text-center mb-0 leading-[.875]">
          THE FOUNDERS WILL BUILD INDEPENDENT, INNOVATIVE COMPANIES THAT WILL
          CHANGE THE WORLD.
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[5.5rem] xl:text-[8.25rem] text-center mb-0 leading-[.875]">
          THEY WILL LOOK FOR FLEXIBLE AND SUSTAINABLE FUNDING MODELS TO MAXIMIZE
          CONTROL, OPTIONALITY, AND UPSIDE.
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[5.5rem] xl:text-[8.25rem] text-center mb-0 leading-[.875]">
          INDIE IS BUILT WITH THESE FOUNDERS IN MIND.
        </p>
        <div style={{ height: "63px" }}></div>

        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[5.5rem] xl:text-[8.25rem] text-center mb-0 leading-[.875]">
          <a >CALL</a>

          <br></br>

          <a href="tel:4158285779" class="hover:underline">
            415.828.5779
          </a>
        </p>

        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[5.5rem] xl:text-[8.25rem] text-center mb-0 leading-[.875]">
          EMAIL<br></br>
          <a href="mailto:bryce@indie.vc" class="hover:underline">
            bryce@indie.vc
          </a>
        </p>

        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[5.5rem] xl:text-[8.25rem] text-center mb-0 leading-[.875]">
          FOLLOW<br></br>
          <a href="https://instagram.com/INDIEVC" class="hover:underline">
            @INDIE.VC
          </a>
        </p>
        <p className="font-custom text-[1.8rem] sm:text-[2rem] md:text-[5.5rem] xl:text-[8.25rem] text-center mb-0 leading-[.875] newsletter-paragraph">
          SIGN UP FOR OUR<br></br>
          <a href="" class="hover:underline">
            NEWSLETTER
          </a>
        </p>
      </div>

      <div id="contact-anchor" style={{ height: "147px" }}></div>
    </div>
  );
};

export default Content;
