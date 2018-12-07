const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.post('/add', controller.addProduct);
router.post('/delete', controller.deleteProduct);
// router.post('/update',controller.updateProduct);

router.get('/', controller.getProducts);
router.get('/:productID', controller.getProduct);



module.exports = router;
