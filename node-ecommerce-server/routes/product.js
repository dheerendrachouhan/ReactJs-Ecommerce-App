const express = require('express');
const router = express.Router();
const productController = require('./../controllers/product');

router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.get('/category/:id', productController.getCatProduct);
router.get('/page/:page', productController.getProducts);
router.get('/search/:query', productController.getSearchProducts);
router.post('/', productController.createProduct);

module.exports = router;
