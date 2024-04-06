import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { retriveVideosData } from '../dataManager';

import Feed from '../components/Feed';
import { VideoContext } from '../contexts/VideoContext.js';

function PlayerPage() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

    const { id } = useParams();
    const videoContext = useContext(VideoContext);

    const [video, setVideo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

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
            className="flex md:items-stretch lg:items-start sm:flex-col lg:flex-row"
        >
            <div
                className="bg-slate-900 z-30 overflow-hidden h-96 flex-1 sticky sm:top-12 md:top-14"
            >
                { isLoading ? "Loading" : (video.id) ? JSON.stringify(video) : "Video Not Found" }
            </div>

            <div
                className="flex-none lg:w-[25rem]"
            >
                <Feed videos={videoContext.videos} />
            </div>

        </div>
    );
}

export default PlayerPage;