/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

const getPhotos = async (req: Request, res: Response, next: NextFunction) => {
    const apiKey = 'iAY2jFfKqXL3gDaO4InP9DqgKUBKFa8JxBdswPCW';
    let date: string = req.params.date;
    await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`)
    .then(result => {
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

export default { getPhotos };