function Loading({ count = 4 }) {
    return (
        <div className="animate-pulse grid sm:grid-cols-1 md:grid-cols-feed md:p-6 sm:gap-y-2 md:gap-x-6 md:gap-y-12">
            { Array(count).fill(0).map((e, i) => <LoadingItem key={i} />) }
        </div>
    );
}

function LoadingItem() {
    return (
        <div className="w-fulsm:mb-2 md:mb-0">
            <div className="w-full aspect-video bg-loading-card md:rounded-2xl"></div>
            <div className="p-2 flex justify-around align-top">

                <div className="w-10 h-10 md:w-12 md:h-12 flex-none rounded-full mt-2 mr-2 bg-loading-card"></div>

                <div className="flex-1">
                    <div className="w-full my-2 h-4 rounded bg-loading-card"></div>
                    <div className="w-full my-2 h-4 rounded bg-loading-card"></div>
                    <div className="w-[40%] my-2 h-4 rounded bg-loading-card"></div>

                </div>

            </div>
        </div>
    )
}

export default Loading;