import { useContext, useEffect } from "react";
import { VideoContext } from "../contexts/VideoContext.js";
import Feed from "../components/Feed.jsx";

function HomePage() {
    const videoContext = useContext(VideoContext);

    useEffect(() => {
        document.title = 'सस्ता YouTube';
    }, []);
    
    return (
        <div>
            <Feed videos={videoContext.videos} isMoreVideos={videoContext.isMoreVideos} />
        </div>
    );
}

export default HomePage;