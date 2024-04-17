import { Link } from 'react-router-dom';
import isMobileDevice from '../utils/isMobileDevice.js';

import codeIcon from '/icons/code.svg';

function Header() {
    return (
        <>
            <header
                className="bg-black bg-opacity-50 backdrop-blur-[8px] fixed top-0 inset-x-0 z-50 flex justify-start items-center border-b border-b-gray-800 sm:h-12 md:h-14"
            >
                
                <Link 
                    to="/" 
                    className={`w-fit h-full sm:p-3.5 md:p-4 active:bg-gray-800 ${isMobileDevice ? "" : "hover:bg-gray-900"}`}
                >
                    <img 
                        src="/logos/sastayt.png" 
                        alt="Sasta YouTube logo" 
                        className="h-full"
                    />
                </Link>
                
                <a 
                    href="https://github.com/dhruv-dhaduk/sastayt-react"
                    target="_blank"
                    className={`w-fit h-full ml-auto sm:p-3.5 md:p-4 active:bg-gray-800 ${isMobileDevice ? "" : "hover:bg-gray-900"}`}
                >
                    <img 
                        src={codeIcon}
                        alt="Source Code"
                        className="h-full"
                    />
                </a>

            </header>
        </>
    );
}

export default Header;