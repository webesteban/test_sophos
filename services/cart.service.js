const Cart = require('./../models').Cart;
const Response = require('./../utils/response');
const axios = require('axios');
const CONFIG = require('../config/config');




const create = async function(user_id, product_id, cant){

    return new Promise(function(resolve, reject) {
        Cart.destroy({
            where: {
                user_id: user_id,
                product_id: product_id
            }
        }).then(function(rowDeleted){

            // verify price product
            axios.get(CONFIG.product_api+product_id).then(response => {

                let product = response.data;

                const cart = Cart.build({
                    user_id: user_id,
                    product_id: product_id,
                    count: cant,
                    price: product.precio
                });

                cart.save().then(cart => {
                    total_cart(user_id, product_id, "Add product succesfully").then((result) => {
                        resolve(result);
                    }, (err) => {
                        reject(err);
                    });

                }).catch(error => {
                    reject(Response.get_error(error.toString(),{}));
                });
            }).catch(error => {
                    reject(Response.get_error(error.toString(),{}));
            });

        });
    })
}


module.exports.create = create;

// function delete item cart by user_id and produc_id
const delete_by_product_id = async function(user_id, product_id){

    return new Promise(function(resolve, reject) {
        Cart.destroy({
            where: {
                user_id: user_id,
                product_id: product_id
            }
        }).then((row_delete) => {

            total_cart(user_id, product_id, "Delete product succesfully").then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            });

        }).catch(error => {
                reject(Response.get_error(error.toString(),{}));
        });
    })
}


module.exports.delete_by_product_id = delete_by_product_id;

// function return response total producs and sum price
const total_cart = async function(user_id, product_id, msg){

    return new Promise(function(resolve, reject) {
        Cart.findAll({
            where: {
                user_id: user_id
            }
        }).then((cart_items) => {

            let sum_price =  cart_items.map(cart_item => cart_item.price).reduce((prev, cur) => prev + cur, 0);
        let total_products = cart_items.map(cart_item => cart_item.count).reduce((prev, cur) => prev + cur, 0);

        let total_cart = {total_products: total_products, total_price: sum_price }
        resolve(Response.get_success(msg,total_cart));

    }).catch(error => {
            reject(Response.get_error(error.toString(),{}));
    });
    })
}


module.exports.total_cart = total_cart;
