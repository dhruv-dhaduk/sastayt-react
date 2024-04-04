import { Client, Databases, Query } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

const getPagedFetcher = () => {
    let lastFetchedID;

    const fetchNextVideos = async (count, resetPaging) => {

        const queryList = [
            Query.select(['$id', 'id']),
            Query.limit(count)
        ];

        if (resetPaging)
            lastFetchedID = undefined;

        if (lastFetchedID)
            queryList.push(Query.cursorAfter(lastFetchedID));

        const response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_VIDEOS_COLLECTION_ID,
            queryList
        );

        if (!response.documents.length)
            return null;

        lastFetchedID = response.documents[response.documents.length - 1].$id;

        for (const item of response.documents) {
            delete item.$id;
        }

        return response.documents;
    }

    return fetchNextVideos;
}

const fetchVideoDetails = async (IDs) => {
    const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DB_ID,
        import.meta.env.VITE_APPWRITE_VIDEOS_COLLECTION_ID,
        [
            Query.select(['id', 'title', 'thumbnail', 'duration', 'uploadTime', 'channelTitle', 'channelLink', 'channelLogo']),
            Query.equal('id', IDs)
        ]
    );

    return response.documents;
}

export { getPagedFetcher, fetchVideoDetails };
