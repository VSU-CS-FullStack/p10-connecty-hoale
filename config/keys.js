// if (process.env.NODE_ENV === 'production') {
//     module.exports = require('./keys_prod');
// } else {
//     module.exports = require('./keys_dev');
// }

module.exports = {
    mongoURI:"mongodb+srv://hoa:5923@cluster0.sr1ay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ,secretOrKey: "secret" // For creating JWT token. You can put whatever you want.
}
