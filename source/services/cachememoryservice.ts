import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'
import { Service } from 'typedi';
import { Photos } from '../interfaces/nasa';

const myCache = new CacheContainer(new MemoryStorage())

@Service()
class CachedMemoryService {
    constructor() {
    }
    public async getPhotos(date: string): Promise<Photos> {

        const cachedPhotos = await myCache.getItem<Photos>(date);

        if (cachedPhotos) {
            return cachedPhotos
        }
        else{
            return { photos: []}
        }
    }

    public async setPhotos(date: string, photos: Photos): Promise<void> {
       await myCache.setItem(date, photos, { isCachedForever: true});
    }
}

export default CachedMemoryService;