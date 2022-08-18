const express = require('express');
const router = express.Router();
const categoryController = require('./../controllers/category');

router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);
router.post('/', categoryController.createCategory);

module.exports = router;
