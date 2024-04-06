import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { VideoContext } from '../contexts/VideoContext.js';

function PlayerPage() {
    const { id } = useParams();
    
    return (
        <div>
            {/* { video ? JSON.stringify(video) : "Video Not Available" }  */}
        </div>
    );
}

export default PlayerPage;