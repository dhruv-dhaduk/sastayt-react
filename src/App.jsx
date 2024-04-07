import { useState, useEffect } from "react";
import { VideoContext } from "./contexts/VideoContext.js";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import { shuffle } from "./utils/shuffle.js";

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

    const handleScrollToEnd = async () => {
        const scrollRemaining = document.body.offsetHeight - window.scrollY - window.innerHeight;

        if (scrollRemaining <= 0) {
            const scrollY = window.scrollY;
            window.removeEventListener("scrollend", handleScrollToEnd);
            console.log(`FETCHING . . . . `);
            console.log(videos);
            addMoreVideos(5);
            console.log(`FECHING DONE ..`);
            window.scrollTo(0, scrollY);
        }
    }

    useEffect(() => {
        if (!videos.length)
            addMoreVideos(5, true);
    }, []);

    useEffect(() => {
        if (videos.length)
            window.addEventListener("scrollend", handleScrollToEnd);
    }, [videos])

    const shuffleFeed = () => {
        setVideos(shuffle(videos));
        window.scrollTo(0, 0);
    }

    return (
        <>
            <VideoContext.Provider value={{ videos, addMoreVideos, isMoreVideos }} >

                <Header />

                <main className="sm:mt-12 md:mt-14 sm:mb-12 md:mb-0 md:ml-16" >
                    <Outlet />
                </main>

                <NavBar shuffleFeed={shuffleFeed} />

            </VideoContext.Provider>
        </>
    );
}

export default App;