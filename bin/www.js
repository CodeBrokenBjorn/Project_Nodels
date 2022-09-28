const app = require('../Project-Nodejs-Programming');
const http = require('http');
const { listen } = require('../Project-Nodejs-Programming');

const port = process.env.PORT || '8900';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);