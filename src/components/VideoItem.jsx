function VideoItem({ video }) {
    return (
        <div>
            <div
                className="aspect-video"    
            >
                <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover md:rounded-2xl"
                />
            </div>
        </div>
    );
}

export default VideoItem;