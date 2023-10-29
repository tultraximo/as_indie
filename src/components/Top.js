import React from 'react'
import plus from '../assets/Indie_plus-mark_02.png'
import headerLogo from '../assets/Indie_Primary-Wordmark.png'
import contactLogo from '../assets/Indie_Website_102423_03.png'

const Top = () => {
    // Function to handle the click and scroll smoothly to 100px from the top
    const scrollToOffsetTop = () => {
        window.scrollTo({
            top: - 100,      // 100 pixels from the top
            behavior: 'smooth'  // Smooth scrolling
        });
    };

    return (
        <header className="bg-custom-color text-black h-14 flex items-center justify-between sticky top-0 z-10 w-full">
            {/* Plus-mark aligned to the left */}
            <img src={plus} alt="Plus" className="h-14" />


            <p className="font-custom text-[1.8rem] contact-top">
            Contact
            </p>


            {/* Header logo aligned to the center */}
            <div className="flex-grow flex justify-center">
                <a className="hover:underline">
                    <img

                    src={headerLogo}
                    alt="Header Logo"
                    className="h-14 logo_top"
                    onClick={scrollToOffsetTop}
                    />
                </a>
            </div>

            {/* Plus-mark aligned to the right */}
            <img src={plus} alt="Plus" className="h-14" />
        </header>
      );
    }
export default Top




            {/* <div className="h-14 flex items-center">
            <p className="font-custom text-[1.8rem] text-center">Contact</p>

            </div> */}
