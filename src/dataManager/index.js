import { AppwriteService } from '../appwriteService';
import { sastaytIDB } from './indexedDB.js';

const appwriteService = new AppwriteService();

const paggedDataProvider = () => {
    const service = new AppwriteService();

    const getNextVideos = async (count, resetPaging) => {
        let ids = await service.fetchNextPageIDs(count, resetPaging);
        if (!ids)
            return [];
        ids = ids.map((item) => item.id);

        return await retriveVideosData(ids);
    }

    return getNextVideos;
}

const retriveVideosData = async (IDs) => {
    let dataFromIDB = {};
    try {
        dataFromIDB = await sastaytIDB.getVideosFromIndexedDB(IDs);
    } catch (err) {
        console.log(`Error : ${err}`);
        dataFromIDB.success = [];
        dataFromIDB.fail = IDs;
    }
    
    let dataFromMainDB = [];

    try {
        if (dataFromIDB.fail.length)
            dataFromMainDB = await appwriteService.fetchVideoDetails(dataFromIDB.fail);
    }
    catch(err) {
        console.log(`Error : ${err}`);
    }

    sastaytIDB.addVideosToIndexedDB(dataFromMainDB);

    return dataFromIDB.success.concat(dataFromMainDB);
    
}

export { paggedDataProvider, retriveVideosData };