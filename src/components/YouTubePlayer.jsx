import { useState, useEffect, useRef } from "react";

function YouTubePlayer({ videoId }) {
    const [isApiLoaded, setIsApiLoaded] = useState(window.YT.loaded);
    const playerRef = useRef(null);

    useEffect(() => {
        if (window.YT.loaded)
            return;

        const itvID = setInterval(() => {
            if (window.YT.loaded) {
                clearInterval(itvID);
                setIsApiLoaded(true);
            }
        }, 100);

        return () => {
            clearInterval(itvID);
        }
    });

    useEffect(() => {
        if (!isApiLoaded) return;
        
        playerRef.current = new window.YT.Player("player-iframe", {
            videoId: videoId,

            playerVars: {
                'start': 0
            },

            events: {
                'onReady': () => { playerRef.current.playVideo(); }
            }

        });
        
        return () => {
            if (playerRef.current)
                playerRef.current.destroy();
        }
    }, [isApiLoaded, videoId]);

    if (!isApiLoaded) {
        return <div>Video Player is Loading . . .</div>
    }

    return (
        <div 
            id="player-iframe" 
            className="w-full h-full md:rounded-xl" 
        />
    );
}

export default YouTubePlayer;