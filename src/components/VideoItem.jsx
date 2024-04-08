import { convertDurationFormat, convertUploadTimeFormat } from '../utils/converters.js';
import { useNavigate, useParams } from 'react-router-dom';

function VideoItem({ video }) {
    const { id } = useParams();
    const navigate = useNavigate();

    if (video.id === id)
        return <></>

    return (
        <div 
            className="select-none cursor-pointer active:bg-stone-800"
            onClick={e => { e.stopPropagation(); navigate(`/videos/${video.id}`) }}
        >
            <div
                className="aspect-video relative"
            >
                <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    draggable="false"
                    onContextMenu={e => e.preventDefault()}
                    className="w-full h-full object-cover md:rounded-2xl"
                />

                <p className="bg-black text-white sm:text-[13px]/[16px] md:text-[14px]/[18px] font-bold bg-opacity-70 absolute right-0 bottom-0 m-2 px-[6px] rounded-md">
                    { convertDurationFormat(video.duration) }
                </p>
            </div>

            <div 
                className="flex align-top m-2"
            >
                <img 
                    src={video.channelLogo}
                    alt={video.channelTitle}
                    draggable="false"
                    onContextMenu={e => e.preventDefault()}
                    onClick={e => { e.stopPropagation(); if(window.confirm("Open channel in YouTube ?")) window.open(video.channelLink, "_blank") }}
                    className="sm:w-10 sm:h-10 md:w-12 md:h-12 flex-none rounded-full"
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
                        { convertUploadTimeFormat(video.uploadTime) }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;