import VideoItem from "./VideoItem";

function Feed({ videos, isMoreVideos }) {
    return (
        <>
            <div
                className="grid sm:grid-cols-1 md:grid-cols-feed md:p-6 sm:gap-y-2 md:gap-x-6 md:gap-y-12"
            >
                {videos.map(video => <VideoItem key={video.id} video={video} />)}
            </div>

            <div className="flex justify-center items-center border-t border-stone-700">
                <p
                    className="p-4 text-stone-300"
                >
                    {isMoreVideos ? "Loading . . ." : "No more videos"}
                </p> 
            </div>
        </>
    );
}

export default Feed;