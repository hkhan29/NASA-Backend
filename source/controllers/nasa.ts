
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import CachedMemoryService from '../services/cachememoryservice';
import { Service } from 'typedi';

@Service() 
    class NasaController {
        private _cachedMemoryService: CachedMemoryService;
        constructor(){
            this._cachedMemoryService = new CachedMemoryService();
        }

        async getPhotos(req: Request, res: Response) {
            let date: string = req.params.date;
            let cachedPhotos = await this._cachedMemoryService.getPhotos(date);
            if(cachedPhotos?.photos?.length > 0)
            {
                return res.status(200).json({
                    message: cachedPhotos
                });
            }
            const apiKey = 'iAY2jFfKqXL3gDaO4InP9DqgKUBKFa8JxBdswPCW';
            await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`)
            .then(result => {
                this._cachedMemoryService.setPhotos(date, result.data);
                return res.status(200).json({
                    message: result.data
                });
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({
                    message: []
                });
            });
        };
    }

export default NasaController;

