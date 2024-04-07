import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext.js";
import Feed from "../components/Feed.jsx";

function HomePage() {
    const videoContext = useContext(VideoContext);
    
    return (
        <div>
            <Feed videos={videoContext.videos} isMoreVideos={videoContext.isMoreVideos} />
        </div>
    );
}

export default HomePage;