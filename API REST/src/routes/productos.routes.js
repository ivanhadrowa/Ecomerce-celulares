import {Router} from "express";
import {methods as productosController} from "./../controllers/productos.controllers";

const router=Router();

router.get("/", productosController.getProductos);
router.get("/:id", productosController.getProductosPorId);
router.post("/", productosController.registrarProducto);
router.delete("/:id", productosController.eliminarProducto);
router.put("/:id", productosController.actualizarProducto);



export default router;