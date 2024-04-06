import VideoItem from "./VideoItem";

function Feed({ videos }) {
    return (
        <div
            className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:p-6 sm:gap-y-2 md:gap-x-6 md:gap-y-12"
        >
            {videos.map(video => <VideoItem key={video.id} video={video} />)}
        </div>
    );
}

export default Feed;