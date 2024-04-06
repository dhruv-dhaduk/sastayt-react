import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { retriveVideosData } from '../dataManager';

function PlayerPage() {
    const { id } = useParams();
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
        <div>
            { isLoading ? "Loading" : (video && video.id) ? JSON.stringify(video) : "Video Not Found" }
        </div>
    );
}

export default PlayerPage;