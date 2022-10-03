import {Router} from "express";
import {methods as productosController} from "./../controllers/productos.controllers";

const router=Router();

router.get("/", productosController.getProductos);

export default router;