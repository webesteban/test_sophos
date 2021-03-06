const user_middleware = require('./../middleware/user');
const product_middleware = require('./../middleware/product');
const CartController 	= require('./../controllers/cart.controller');


var express = require('express');
var router = express.Router();


// middleware default
router.use(user_middleware.user_exist);


router.post('/',product_middleware.product_exist, CartController.create);
router.post('/delete_by_product', CartController.delete_by_product);


module.exports = router;
