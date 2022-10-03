import express from "express";
import morgan from "morgan";
import router from "./routes/productos.routes";

const app = express();

// settigs
app.set("port",4000);

// middlewares
app.use(morgan("dev")); // esto me sirve para ver en consola las cosas que van pasando en mi api

// routes
app.use(router);



export default app;