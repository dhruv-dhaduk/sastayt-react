let db;

const request = window.indexedDB.open("SastaYT", 1);

request.onerror = (event) => {
    console.log(`Error while connecting IndexedDB : ${request.error}`);
}

request.onupgradeneeded = (event) => {
    db = event.target.result;

    const videoStore = db.createObjectStore("videos", { keyPath: "id" });
    videoStore.createIndex("id", "id", { unique: true });
}

request.onsuccess = (event) => {
    db = event.target.result;

    db.onversionchange = () => {
        db?.close();
        alert("IndexDB is outdated, please refresh the page");
    }
}

const getVideosFromIndexedDB = (IDs) => {
    return new Promise((resolve, reject) => {
        if (!db)
            reject("IndexedDB is not connected");
        
        const transaction = db.transaction("videos", "readonly");

        const successAndFail = {
            success: [],
            fail: []
        }
        
        transaction.oncomplete = (event) => {
            resolve(successAndFail);
        }

        transaction.onerror = (event) => {
            reject("Transaction failed");
        }
        
        const videoStore = transaction.objectStore("videos");
        
        for (const id of IDs) {
            const addItemRequest = videoStore.get(id);
            
            addItemRequest.onsuccess = (event) => {
                event.preventDefault();
                event.stopPropagation();
                if (addItemRequest.result)
                    successAndFail.success.push(addItemRequest.result);
                else
                    successAndFail.fail.push(id);
            }
            
            addItemRequest.onerror = (event) => {
                event.preventDefault();
                event.stopPropagation();
                successAndFail.fail.push(id);
            }
        }
    });
}

const addVideosToIndexedDB = (list) => {
    return new Promise((resolve, reject) => {
        if (!db)
            reject("IndexedDB is not connected");
        
        const transaction = db.transaction("videos", "readwrite");

        const successAndFail = {
            success: [],
            fail: []
        }
        
        transaction.oncomplete = (event) => {
            resolve(successAndFail);
        }

        transaction.onerror = (event) => {
            reject("Transaction failed");
        }

        const videoStore = transaction.objectStore("videos");

        for (const item of list) {
            const addItemRequest = videoStore.add(item);

            addItemRequest.onsuccess = (event) => {
                event.preventDefault();
                event.stopPropagation();
                successAndFail.success.push(item);
            }

            addItemRequest.onerror = (event) => {
                event.preventDefault();
                event.stopPropagation();
                successAndFail.fail.push(item);
            }
        }
    });
}

export { getVideosFromIndexedDB, addVideosToIndexedDB };