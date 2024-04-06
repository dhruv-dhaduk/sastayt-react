import { Link } from 'react-router-dom';
import isMobileDevice from '../utils/isMobileDevice.js';

function Header() {
    return (
        <>
            <header
                className="bg-black fixed top-0 inset-x-0 z-50 border-b border-b-gray-800 sm:h-12 md:h-14"
            >
                
                <Link to="/" >
                    <div
                        className={`w-fit h-full sm:p-3.5 md:p-4 active:bg-gray-800 ${isMobileDevice ? "" : "hover:bg-gray-900"}`}
                    >
                        <img 
                            src="/logos/sastayt.png" 
                            alt="Sasta YouTube logo" 
                            className="h-full"
                        />
                    </div>
                </Link>
                

            </header>
        </>
    );
}

export default Header;