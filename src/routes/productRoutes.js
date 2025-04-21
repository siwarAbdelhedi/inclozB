import express from 'express';
const router = express.Router();
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.route('/').get(getProducts).post(createProduct);

export default router;
