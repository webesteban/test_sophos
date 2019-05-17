const CartService  = require('../services/cart.service');

const create = async function(req, res){

    let user_id, product_id, cant;

    user_id = req.body.user_id;
    product_id = req.body.product_id;
    cant = req.body.cant;

    // call service create cart item
    CartService.create(user_id, product_id, cant).then((result) => {
        res.json(result);
    }, (err) => {
        res.json(err);
    });
}
module.exports.create = create;


const delete_by_product = async function(req, res){

    let user_id, product_id;

    user_id = req.body.user_id;
    product_id = req.body.product_id;

    // call service delete cart item
    CartService.delete_by_product_id(user_id, product_id).then((result) => {
        res.json(result);
    }, (err) => {
        res.json(err);
    });
}
module.exports.delete_by_product = delete_by_product;
