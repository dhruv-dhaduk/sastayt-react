import NavItem from "./NavItem";

function NavBar() {
    return (
        <nav
            className="bg-black fixed border-gray-800 sm:border-t md:border-t-0 sm:flex md:block md:border-r sm:bottom-0 sm:inset-x-0 sm:w-full sm:h-12 md:left-0 md:top-14 md:w-16 md:h-full"
        >
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
        </nav>
    );
}

export default NavBar;