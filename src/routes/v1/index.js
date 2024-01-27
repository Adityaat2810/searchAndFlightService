const express =require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller')

const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update)
router.get('/city/:id',CityController.get);


// Flight routes
router.post('/flights',FlightController.create);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);

module.exports = router;
