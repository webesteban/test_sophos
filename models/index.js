var Sequelize = require('sequelize');
const CONFIG = require('../config/config');

// initialize database connection
var sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
    host: CONFIG.db_host,
    dialect: CONFIG.db_dialect,
})

// load models
var models = [
    'Cart',
    'User'
];
models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
(function(m) {
    //m.Cart.belongsTo(m.User);
    //m.User.hasMany(m.Cart);
})(module.exports);

// export connection
module.exports.sequelize = sequelize;