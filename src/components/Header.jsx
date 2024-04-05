function Header() {
    return (
        <>
            <header
                className="bg-slate-800 fixed top-0 inset-x-0 sm:h-12 md:h-14"
            >

                <div
                    className="h-full sm:p-3.5 md:p-4"
                >
                    <img 
                        src="/logos/sastayt.png" 
                        alt="Sasta YouTube logo" 
                        className="h-full"
                    />
                </div>
                

            </header>
        </>
    );
}

export default Header;