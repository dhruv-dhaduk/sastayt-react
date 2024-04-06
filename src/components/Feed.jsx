function Feed({ videos }) {
    return (
        <div>
            { videos.map(video => <p key={video.id}>{video.title}</p>) }
        </div>
    );
}

export default Feed;