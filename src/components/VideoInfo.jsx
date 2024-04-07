import { convertUploadTimeFormat } from '../utils/converters.js';
import likeIcon from '/icons/like.svg';
import dislikeIcon from '/icons/dislike.svg';
import shareIcon from '/icons/share.svg';
import playlistIcon from '/icons/playlist.svg';
import reportIcon from '/icons/report.svg';

function VideoInfo({ video }) {
    const shareVideo = () => {
        navigator.share({
            title: video.title,
            url: `${window.location.origin}/videos/${video.id}`
        });
    }
    
    return (
        <div className="select-none">
            <p className="line-clamp-3 sm:font-semibold md:font-bold sm:text-[17px] md:text-lg sm:px-4 md:px-0">
                { video.title }
            </p>
            <p className="line-clamp-1 sm:text-[12px] md:text-sm text-stone-300 sm:px-4 md:px-0">
                { convertUploadTimeFormat(video.uploadTime)}
            </p>

            <div className="flex justify-between md:justify-start flex-wrap items-center py-3">

                <div className="flex justify-start items-center sm:px-4 md:px-0">
                    <img 
                        src={video.channelLogo}
                        alt={video.channelTitle}
                        draggable="false"
                        onContextMenu={e => e.preventDefault()}
                        onClick={e => { e.stopPropagation(); window.open(video.channelLink, "_blank") }}
                        className="sm:w-10 sm:h-10 md:w-12 md:h-12 flex-none rounded-full"
                    />

                    <p className="mx-4 font-semibold sm:max-w-[16ch] md:max-w-max line-clamp-1">
                        { video.channelTitle }
                    </p>
                </div>

                <button className="bg-white text-black font-semibold rounded-full px-4 py-[6px] sm:mr-4 md:mr-2 active:bg-slate-200">
                    Subscribe
                </button>

                <div className="overflow-x-scroll py-4 no-scrollbar ml-auto sm:px-4 md:px-0">
                    <div className="flex">
                        <Btn label="Like" icon={likeIcon} className="rounded-e-none sm:mx-0 relative after:content-[''] after:border after:border-stone-500 after:h-[60%] after:absolute after:right-0"></Btn>
                        <Btn label="" icon={dislikeIcon} className="rounded-s-none ml-0"></Btn>
                        <Btn label="Share" icon={shareIcon} className="" onClick={shareVideo}></Btn>
                        <Btn label="Save" icon={playlistIcon} className=""></Btn>
                        <Btn label="Report" icon={reportIcon} className=""></Btn>
                    </div>
                </div>

            </div>

            <div className="border-t border-stone-700 px-4 py-3 text-sm md:hidden">
                Up Next
            </div>
        </div>
    );
}

function Btn({ label, icon, className, onClick }) {
    return (
        <button
            className={`bg-stone-800 active:bg-stone-700 text-white rounded-full px-4 py-[6px] mx-1 flex-none flex items-center ${className}`}
            onClick={onClick}
        >
            <img 
                src={icon}
                draggable="false"
                onContextMenu={e => e.preventDefault()}
                onClick={e => { e.stopPropagation(); window.open(video.channelLink, "_blank") }}
                className="w-6 aspect-square mr-1"
            />

            <span className="text-sm font-semibold">
                {label}
            </span>
        </button>
    );
}

export default VideoInfo;