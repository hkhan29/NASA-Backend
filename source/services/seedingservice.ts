import axios from 'axios';
import { Service } from 'typedi';
import * as fs from 'fs';
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
        for await (const date of rl) {
            axios.get(`http://localhost:6060/nasa/${date}`)
            .catch(error => {
                console.log(error);
            });
        }
    }
}

export default SeedingService;
