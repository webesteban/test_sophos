//instatiate environment variables
require('dotenv').config();
let CONFIG = {}

// variables Server
CONFIG.port         = process.env.PORT  || '3000';
CONFIG.host         = process.env.HOST || 'localhost';


// variables Database
CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || 'test_sophos';
CONFIG.db_user      = process.env.DB_USER       || 'root';
CONFIG.db_password  = process.env.DB_PASSWORD   || '123';

//variables api external

CONFIG.product_api = 'https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos/'


module.exports = CONFIG;
