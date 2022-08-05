let serverPort = 3000
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    serverPort = process.env.PORT;
}
module.exports = {
    serverPort:serverPort
}