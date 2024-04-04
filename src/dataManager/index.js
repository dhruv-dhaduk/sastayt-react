import { fetchVideoDetails, getPagedFetcher } from '../appwrite';
import { getVideosFromIndexedDB, addVideosToIndexedDB } from './indexedDB.js';

const paggedDataProvider = () => {
    const fetchNextIDs = getPagedFetcher();

    const getNextVideos = async (count, resetPaging) => {
        let ids = await fetchNextIDs(count, resetPaging);
        if (!ids)
            return [];
        ids = ids.map((item) => item.id);

        let dataFromIDB = {};
        try {
            dataFromIDB = await getVideosFromIndexedDB(ids);
        } catch (err) {
            console.log(`Error : ${err}`);
            dataFromIDB.success = [];
            dataFromIDB.fail = ids;
        }

        let dataFromMainDB = [];

        try {
            if (dataFromIDB.fail.length)
                dataFromMainDB = await fetchVideoDetails(dataFromIDB.fail);
        }
        catch(err) {
            console.log(`Error : ${err}`);
        }

        addVideosToIndexedDB(dataFromMainDB);

        return dataFromIDB.success.concat(dataFromMainDB);
    }

    return getNextVideos;
}

export { paggedDataProvider };