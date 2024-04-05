import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header
                className="fixed top-0 inset-x-0 border-b border-b-gray-800 sm:h-12 md:h-14"
            >
                
                <Link to="/" >
                    <div
                        className="w-fit h-full active:bg-gray-800 sm:p-3.5 md:p-4"
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