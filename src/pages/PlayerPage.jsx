import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { retriveVideosData } from '../dataManager';

import Feed from '../components/Feed';
import VideoInfo from '../components/VideoInfo.jsx';
import YouTubePlayer from '../components/YouTubePlayer.jsx';

import { VideoContext } from '../contexts/VideoContext.js';

function PlayerPage() {
    const { id } = useParams();
    const videoContext = useContext(VideoContext);

    const [video, setVideo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        retriveVideosData([id])
        .then((response) => {
            const data = response.find((item) => item.id === id);
            if (data) {
                setVideo(data);
                document.title = data.title;
            }
            setIsLoading(false);
        })
    }, [id]);
    
    return (
        <div
            className="flex md:items-stretch lg:items-start sm:flex-col lg:flex-row"
        >
            <div
                className="z-30 overflow-hidden flex-1 lg:sticky sm:top-12 md:top-14 lg:p-6"
            >
                <div className="z-30 bg-black overflow-hidden aspect-video sm:fixed lg:static sm:w-full md:w-iframe-w-md lg:w-full md:left-iframe-left-md">
                    { video.id ? <YouTubePlayer videoId={video.id} /> : ""}
                </div>

                <div className="sm:mt-player-info-margin-sm md:mt-player-info-margin-md lg:mt-0 md:mx-6 lg:mx-0">
                    { isLoading ? "Loading" : (video.id) ? <VideoInfo video={video} /> : "Video Not Found" }
                </div>
            </div>

            <div
                className="flex-none lg:w-[25rem]"
            >
                <Feed videos={videoContext.videos} isMoreVideos={videoContext.isMoreVideos} />
            </div>

        </div>
    );
}

export default PlayerPage;