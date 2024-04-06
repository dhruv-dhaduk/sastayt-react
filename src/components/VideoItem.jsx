function VideoItem({ video }) {
    return (
        <div>
            <div
                className="aspect-video relative"
            >
                <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover md:rounded-2xl"
                />

                <p className="bg-black text-white sm:text-[13px]/[16px] md:text-[14px]/[18px] font-bold bg-opacity-70 absolute right-0 bottom-0 m-2 px-2 rounded-md">
                    { video.duration }
                </p>
            </div>

            <div 
                className="flex align-top m-2"
            >
                <img 
                    src={video.channelLogo}
                    alt={video.channelTitle}
                    className="w-12 h-12 flex-none rounded-full"
                />

                <div
                    className="w-full flex-1 mx-2"
                >
                    <p className="line-clamp-2 mb-1 sm:text-[14px]/[18px] md:text-base/[22px] md:font-semibold">
                        { video.title }
                    </p>

                    <p className="line-clamp-1 sm:text-[12px] md:text-sm text-stone-400">
                        { video.channelTitle } 
                        <span className="text-base/2 font-bold px-1"> · </span>
                        { video.uploadTime }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;