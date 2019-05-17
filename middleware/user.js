const User = require('./../models').User;
const Response = require('./../utils/response')

const user_exist = async function (req, res, next) {

    let user_id;
    console.log(req.body);
    user_id = req.body.user_id;

    //verify the params user_id exist
    if(!user_id) return res.json(Response.get_error("params user_id is missing",{}));

    User.findByPk(user_id).then((user) => {

        if(!user) return res.json(Response.get_error("user no found in database",{}));

        // verify if the user is active
        if(!user.is_active) return res.json(Response.get_error("user no active",{}));

        // call next function user exist and active
        next();

    }).catch(user_search_error => {
        console.log("Error while checking if the user exists " + user_id + " " + user_search_error);
        if(err) return res.json(Response.get_error(user_search_error.toString(),{}));
    });

}

module.exports.user_exist = user_exist;