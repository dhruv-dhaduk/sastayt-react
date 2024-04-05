function NavItem() {
    return (
        <div className="w-full h-full cursor-pointer flex flex-col justify-center items-center active:bg-gray-900 sm:flex-1 md:h-20">
            <img 
                src="https://dhruv-dhaduk.github.io/assets/logos/white/home_filled_white.png"
                alt="Home"
                draggable="false"
                onContextMenu={e => e.preventDefault()}
                className="select-none sm:w-5 md:w-6"
            />

            <p className="text-vsm select-none">
                Home
            </p>
        </div>
    );
}

export default NavItem;