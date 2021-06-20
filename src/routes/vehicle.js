const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');


router.get('/', vehicleController.list);
router.post('/add', vehicleController.save);
router.get('/delete/:id', vehicleController.delete);

router.get('/update/:id', vehicleController.edit);
router.post('/update/:id', vehicleController.update);


module.exports = router;
