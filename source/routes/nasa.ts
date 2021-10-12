import express from 'express';
import controller from '../controllers/nasa';
const router = express.Router();

router.get('/nasa/:date', controller.getPhotos);

export = router;