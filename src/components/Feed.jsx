import VideoItem from "./VideoItem";

function Feed({ videos }) {
    return (
        <div>
            {videos.map(video => <VideoItem key={video.id} video={video} />)}
        </div>
    );
}

export default Feed;