import axios from 'axios';
import { Service } from 'typedi';
import * as fs from 'fs';
import moment from 'moment';
const readline = require('readline');

@Service()
class SeedingService {
    constructor() {
    }
    public async seedPhotosFromFile(): Promise<void> {
        const fileStream = fs.createReadStream('data/date.txt');

        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity
        });
        for await (const line of rl) {
            let date = new Date(`${line}`);
            axios.get(`/nasa/${moment(date).format('YYYY-MM-DD')}`)
            .catch(error => {
                console.log(error);
            });
        }
    }
}

export default SeedingService;
