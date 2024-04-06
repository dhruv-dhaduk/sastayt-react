import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext.js";
import Feed from "../components/Feed.jsx";

function HomePage() {
    const videoContext = useContext(VideoContext);
    
    return (
        <div>
            <Feed videos={videoContext.videos} />

            <div className="flex justify-center items-center">
                <button 
                    onClick={() => videoContext.addMoreVideos(5)}
                    className="bg-white text-black m-4 p-4 font-bold rounded-xl border-2 border-white active:bg-black active:text-white"
                >
                    {videoContext.isMoreVideos ? "Fetch More Videos" : "No more videos"}
                </button> 
            </div>
        </div>
    );
}

export default HomePage;