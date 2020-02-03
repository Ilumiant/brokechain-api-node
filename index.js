const app = require('./app');
const http = require('http');
const port = process.env.PORT || 4000;
const httpServer = http.createServer(app);

httpServer.listen(port, ()=>{
    console.log('Servidor Node y Express está corriendo en el puerto' + port);
})

