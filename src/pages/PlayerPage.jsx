import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { retriveVideosData } from '../dataManager';

import Feed from '../components/Feed';
import { VideoContext } from '../contexts/VideoContext.js';

function PlayerPage() {
    const { id } = useParams();
    const videoContext = useContext(VideoContext);

    const [video, setVideo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        retriveVideosData([id])
        .then((response) => {
            const data = response.find((item) => item.id === id);
            if (data) {
                setVideo(data);
            }
            setIsLoading(false);
        })
    }, [id]);
    
    return (
        <div
            className=""
        >
            <div>
                { isLoading ? "Loading" : (video && video.id) ? JSON.stringify(video) : "Video Not Found" }
            </div>

            <div>
                <Feed videos={videoContext.videos} />
            </div>

        </div>
    );
}

export default PlayerPage;