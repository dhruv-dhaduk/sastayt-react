import { AppwriteService } from '../appwrite';
import { sastaytIDB } from './indexedDB.js';

const paggedDataProvider = () => {
    const service = new AppwriteService();

    const getNextVideos = async (count, resetPaging) => {
        let ids = await service.fetchNextPageIDs(count, resetPaging);
        if (!ids)
            return [];
        ids = ids.map((item) => item.id);

        let dataFromIDB = {};
        try {
            dataFromIDB = await sastaytIDB.getVideosFromIndexedDB(ids);
        } catch (err) {
            console.log(`Error : ${err}`);
            dataFromIDB.success = [];
            dataFromIDB.fail = ids;
        }

        let dataFromMainDB = [];

        try {
            if (dataFromIDB.fail.length)
                dataFromMainDB = await service.fetchVideoDetails(dataFromIDB.fail);
        }
        catch(err) {
            console.log(`Error : ${err}`);
        }

        sastaytIDB.addVideosToIndexedDB(dataFromMainDB);

        return dataFromIDB.success.concat(dataFromMainDB);
    }

    return getNextVideos;
}

export { paggedDataProvider };