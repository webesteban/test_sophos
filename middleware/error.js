
const log_errors  =  function(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

module.exports.log_errors = log_errors;
