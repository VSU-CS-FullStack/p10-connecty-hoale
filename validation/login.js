const validator = require("validator");
const _ = require("lodash");

module.exports = function validateLoginInput(data) {
    let errors = {};
    // validate email is present and not empty
    data.email = _.isEmpty(data.email) ? "" : data.email;
    
    // validate email is valid
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // validate password is present and not empty
    data.password = _.isEmpty(data.password) ? "" : data.password;
    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    } else if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    return {
        errors,
        isValid: _.isEmpty(errors)
    };
};