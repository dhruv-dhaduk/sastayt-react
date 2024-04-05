import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import { paggedDataProvider } from './dataManager';
const getNextVideos = paggedDataProvider();

function App() {

    async function handleClick() {
        const data = await getNextVideos(5);
        console.log(data);
    }

    return (
        <>
            <Header />

            <main className="p-2 sm:mt-12 md:mt-14 sm:mb-12 md:mb-0 md:ml-16" >
                <Outlet />
                <button 
                    onClick={handleClick}
                    className="bg-white text-black m-4 p-4 font-bold rounded-xl border-2 border-white active:bg-black active:text-white"
                >
                    Fetch Next Videos
                </button>
            </main>

            <NavBar />
        </>
    );
}

export default App;