import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext.js";
import Feed from "../components/Feed.jsx";

function HomePage() {
    const videos = useContext(VideoContext);
    
    return (
        <div>
            <Feed videos={videos} />
        </div>
    );
}

export default HomePage;