import NavItem from "./NavItem";

function NavBar() {
    return (
        <nav
            className="bg-black fixed border-gray-800 sm:border-t md:border-t-0 sm:flex md:block md:border-r sm:bottom-0 sm:inset-x-0 sm:w-full sm:h-12 md:left-0 md:top-14 md:w-16 md:h-full"
        >
            <NavItem iconSrc="https://dhruv-dhaduk.github.io/assets/logos/white/home_filled_white.png" label="Home" />
            <NavItem iconSrc="https://dhruv-dhaduk.github.io/assets/logos/white/refresh_white.png" label="Refresh" />
            <NavItem iconSrc="https://dhruv-dhaduk.github.io/assets/logos/white/shuffle_white.png" label="Shuffle" />
            <NavItem iconSrc="https://dhruv-dhaduk.github.io/assets/logos/white/back_to_top_white.png" label="Back To Top" />
        </nav>
    );
}

export default NavBar;