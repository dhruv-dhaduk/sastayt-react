import { convertUploadTimeFormat } from '../utils/converters.js'

function VideoInfo({ video }) {
    return (
        <div>

            <div className="sm:px-4 md:px-0">
                <p className="line-clamp-3 sm:font-semibold md:font-bold sm:text-[17px] md:text-lg">
                    { video.title }
                </p>
                <p className="line-clamp-1 sm:text-[12px] md:text-sm text-stone-300">
                    { convertUploadTimeFormat(video.uploadTime)}
                </p>

                <div className="flex justify-between md:justify-start items-center py-3">
                    <div className="flex justify-start items-center">
                        <img 
                            src={video.channelLogo}
                            alt={video.channelTitle}
                            draggable="false"
                            onContextMenu={e => e.preventDefault()}
                            onClick={e => { e.stopPropagation(); window.open(video.channelLink, "_blank") }}
                            className="sm:w-10 sm:h-10 md:w-12 md:h-12 flex-none rounded-full"
                        />

                        <p className="mx-4 font-semibold">
                            { video.channelTitle }
                        </p>
                    </div>

                    <button className="bg-white text-black font-bold rounded-full px-4 py-[6px]">
                        Subscribe
                    </button>

                </div>
            </div>

            <div className="border-t border-stone-700 px-4 py-3 text-sm md:hidden">
                Up Next
            </div>
        </div>
    );
}

export default VideoInfo;