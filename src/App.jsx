import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import { paggedDataProvider } from './dataManager';
const getNextVideos = paggedDataProvider();

function App() {

    const [videos, setVideos] = useState([]);
    const [isMoreVideos, setIsMoreVideos] = useState(true);

    useEffect(() => {
        getNextVideos(5, true)
        .then(data => {
            if (data.length === 0) {
                setIsMoreVideos(false);
            }
            else {
                setVideos(videos.concat(data));
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error while Fetching the Data.");
        });

    }, []);

    async function handleClick() {
        const data = await getNextVideos(5);
        if (data.length === 0) {
            setIsMoreVideos(false);
        }
        else {
            setVideos(videos.concat(data));
        }
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

                <div>
                    { videos.map(video => <p key={video.id}>{video.title}</p>) }
                </div>
            </main>

            <NavBar />
        </>
    );
}

export default App;