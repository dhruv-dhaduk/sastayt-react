import { Client, Databases, Query } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

class AppwriteService {
    #databases;
    #lastFetchedID;
    constructor() {
        this.#databases = new Databases(client);
    }

    async fetchNextPageIDs(count, resetPaging) {

        const queryList = [
            Query.select(['$id', 'id']),
            Query.limit(count)
        ];

        if (resetPaging)
            this.#lastFetchedID = undefined;

        if (this.#lastFetchedID)
            queryList.push(Query.cursorAfter(this.#lastFetchedID));

        const response = await this.#databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_VIDEOS_COLLECTION_ID,
            queryList
        );

        if (!response.documents.length)
            return null;

        this.#lastFetchedID = response.documents[response.documents.length - 1].$id;

        for (const item of response.documents) {
            delete item.$id;
        }

        return response.documents;
    }

    async fetchVideoDetails(IDs) {
        const response = await this.#databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_VIDEOS_COLLECTION_ID,
            [
                Query.select(['id', 'title', 'thumbnail', 'duration', 'uploadTime', 'channelTitle', 'channelLink', 'channelLogo']),
                Query.equal('id', IDs)
            ]
        );
    
        return response.documents;
    }

}

export { AppwriteService };
