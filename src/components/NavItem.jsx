import isMobileDevice from "../utils/isMobileDevice.js";

function NavItem({label, iconSrc, onClick}) {
    return (
        <div 
            className={`w-full h-full cursor-pointer flex flex-col justify-center items-center sm:flex-1 md:h-20 active:bg-gray-800 ${isMobileDevice ? "" : "hover:bg-gray-900"}`}
            onClick={onClick}
        >
            <img 
                src={iconSrc}
                alt={label}
                draggable="false"
                onContextMenu={e => e.preventDefault()}
                className="select-none sm:w-5 md:w-6"
            />

            <p className="text-vsm select-none max-w-12ch text-nowrap overflow-x-hidden ">
                {label}
            </p>
        </div>
    );
}

export default NavItem;