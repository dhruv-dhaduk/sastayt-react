import NavItem from "./NavItem";
import homeIcon from "/icons/home.svg";
import refreshIcon from "/icons/refresh.svg";
import shuffleIcon from "/icons/shuffle.svg";
import backToTopIcon from "/icons/backToTop.svg"

import { useNavigate } from 'react-router-dom';

function NavBar({ shuffleFeed }) {

    const navigate = useNavigate();
    
    return (
        <nav
            className="bg-black fixed z-40 border-gray-800 sm:border-t md:border-t-0 sm:flex md:block md:border-r sm:bottom-0 sm:inset-x-0 sm:w-full sm:h-12 md:left-0 md:top-14 md:w-16 md:h-full"
        >
            <NavItem iconSrc={homeIcon} label="Home" onClick={() => navigate("/")} />
            <NavItem iconSrc={refreshIcon} label="Refresh" onClick={() => window.location.reload()} />
            <NavItem iconSrc={shuffleIcon} label="Shuffle" onClick={shuffleFeed} />
            <NavItem iconSrc={backToTopIcon} label="Back To Top" onClick={() => window.scrollTo(0, 0)} />
        </nav>
    );
}

export default NavBar;