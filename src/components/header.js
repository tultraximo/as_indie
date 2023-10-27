import React from 'react'
import plus from '../assets/Indie_plus-mark_02.png'
import headerLogo from '../assets/Indie_Primary-Wordmark.png'
import contactLogo from '../assets/Indie_Website_102423_03.png'

const Header = () => {
    return (
        <header className="bg-custom-color text-black h-14 flex items-center justify-between sticky top-0 z-10 px-4">
            {/* Plus-mark aligned to the left */}

            <img src={plus} alt="Plus" className="h-14" />

            {/* <div className="h-14 flex items-center">
            <p className="font-custom text-[1.8rem] text-center">Contact</p>

            </div> */}

            {/* Header logo aligned to the center */}
            <div className="flex-grow flex justify-center">
                <a href="#home-anchor" class="hover:underline"><img src={headerLogo} alt="Header Logo" className="h-14" /></a>
            </div>

            {/* Plus-mark aligned to the right */}
            <img src={plus} alt="Plus" className="h-14 object-fit: cover" />
        </header>
      );
    }
export default Header
