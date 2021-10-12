import express from 'express';
import Container from 'typedi';
import NasaController from '../controllers/nasa';
const router = express.Router();

const nasaController = Container.get(NasaController);

router.get('/nasa/:date', (req, res) => nasaController.getPhotos(req, res));

export = router;