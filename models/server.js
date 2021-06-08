import express from "express";
import cors from "cors"
import * as io from "socket.io"
import http from "http"
import {socketController } from '../sockets/controllers.js'; 

class Server {
  constructor() {
    //puerto
    this.port = process.env.PORT;
    // crear servidor
    this.app = express();
    this.server=http.createServer(this.app)
    //funcionalidad sockets
    this.io= new io.Server(this.server)
    // reconozca todos los middlewares
    this.middleware();
    // conocer a node todas las routes- rutas
    this.routes();
    this.sockets();
  }

  sockets(){

    this.io.on('connection',socketController)
  }

  middleware() {
    this.app.use(cors()); 
    this.app.use(express.static('public'));
  }
  routes() { 
  }
// desde qui va a escuchar nuestro servidor 
  listen() {
    this.server.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}
//modules.exports=Server;
export {Server}