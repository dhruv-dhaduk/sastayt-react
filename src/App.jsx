import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";

import { paggedDataProvider } from './dataManager';
const getNextVideos = paggedDataProvider();

function App() {

    const [videos, setVideos] = useState([]);
    const [isMoreVideos, setIsMoreVideos] = useState(true);

    const addMoreVideos = async () => {
        if (!isMoreVideos)
            return;

        try {
            const data = await getNextVideos(5);
            if (data.length === 0)
                setIsMoreVideos(false);
            else 
                setVideos(videos.concat(data));
        } catch (err) {
            console.error(err);
            alert("Error while Fetching the Data.");
        }
    }

    useEffect(() => {
        // addMoreVideos();
    }, []);

    return (
        <>
            <Header />

            <main className="p-2 sm:mt-12 md:mt-14 sm:mb-12 md:mb-0 md:ml-16" >
                <Outlet />
                <hr />

                <Feed videos={videos} />

                <button 
                    onClick={addMoreVideos}
                    className="bg-white text-black m-4 p-4 font-bold rounded-xl border-2 border-white active:bg-black active:text-white"
                >
                    {isMoreVideos ? "Fetch Next Videos" : "No more videos"}
                </button> 
            </main>

            <NavBar />
        </>
    );
}

export default App;