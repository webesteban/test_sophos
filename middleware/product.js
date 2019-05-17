const Response = require('../utils/response');
const axios = require('axios');
const CONFIG = require('../config/config');

const product_exist = async function (req, res, next) {

    let product_id, cant;
    product_id = req.body.product_id;
    cant = req.body.cant;

    //verify the params product_id
    if(!product_id) return res.json(Response.get_error("params product_id is missing",{}));
    if(!cant) return res.json(Response.get_error("params cant is missing",{}));

    // call api info product
    axios.get(CONFIG.product_api+product_id).then(response => {
        let product = response.data;

        if(!product.idProducto) return res.json(Response.get_error("product no found ",{}));

        if(cant > product.cantidadDisponible)
            return res.json(Response.get_error("the quantity exceeds the available products",{}));

        // call next function produc exist and cant is good
        next();
    }).catch(error => {
        return res.json(Response.get_error(error.toString(),{}));
    });

}

module.exports.product_exist = product_exist;