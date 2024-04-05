class IDBservice {
    #db;

    constructor(version) {
        const request = window.indexedDB.open("SastaYT", version);

        request.onerror = () => {
            console.log(`Error while connecting IndexedDB : ${request.error}`);
        }

        request.onupgradeneeded = (event) => {
            this.#db = event.target.result;

            const videoStore = this.#db.createObjectStore("videos", { keyPath: "id" });
            videoStore.createIndex("id", "id", { unique: true });
        }

        request.onsuccess = (event) => {
            this.#db = event.target.result;

            this.#db.onversionchange = () => {
                this.#db?.close();
                alert("IndexDB is outdated, please refresh the page");
            }
        }
    }

    getVideosFromIndexedDB(IDs) {
        return new Promise((resolve, reject) => {
            if (!this.#db)
                reject("IndexedDB is not connected");
            
            const transaction = this.#db.transaction("videos", "readonly");
    
            const successAndFail = {
                success: [],
                fail: []
            }
            
            transaction.oncomplete = () => {
                resolve(successAndFail);
            }
    
            transaction.onerror = () => {
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

    addVideosToIndexedDB(list) {
        return new Promise((resolve, reject) => {
            if (!this.#db)
                reject("IndexedDB is not connected");
            
            const transaction = this.#db.transaction("videos", "readwrite");
    
            const successAndFail = {
                success: [],
                fail: []
            }
            
            transaction.oncomplete = () => {
                resolve(successAndFail);
            }
    
            transaction.onerror = () => {
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
}

const sastaytIDB = new IDBservice(1);
export { sastaytIDB };