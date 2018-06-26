const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const customer_controller = require('../controllers/customerController');
router.get('/list', customer_controller.list);
router.post('/add', customer_controller.create);
router.get('/findByGuid/:guid', customer_controller.findByGuid);
router.put('/update/:guid', customer_controller.update);
router.delete('/delete/:guid', customer_controller.deleteByGuid);
module.exports = router;