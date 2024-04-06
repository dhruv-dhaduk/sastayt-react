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

    const addMoreVideos = async (count, resetPaging) => {
        if (!isMoreVideos)
            return;

        try {
            const data = await getNextVideos(count ? count : 5, resetPaging);
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
        if (!videos.length)
            addMoreVideos(5, true);
    }, []);

    return (
        <>
            <Header />

            <main className="sm:mt-12 md:mt-14 sm:mb-12 md:mb-0 md:ml-16" >
                <Outlet />
                <hr />

                <Feed videos={videos} />

                <button 
                    onClick={() => addMoreVideos(5)}
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