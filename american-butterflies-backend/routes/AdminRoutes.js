import express from "express";
import { getAllButterfliesForAdmin, getDeletedButterfly, getDeletedButterflies } from '../controllers/ButterfliesController.js';

const adminRouter = express.Router();

// Define la ruta para obtener todos los registros, incluyendo los borrados (soft deletes).
// La URL final será /admin/butterflies/all porque en app.js ya le pusimos "/admin".
adminRouter.get("/butterflies/all", getAllButterfliesForAdmin);
adminRouter.get("/butterflies/deleted", getDeletedButterflies); // '/deleted' es una ruta específica así que se pone delante
adminRouter.get("/butterflies/:id", getDeletedButterfly); // '/:id' es una ruta genérica así que se pone al final para que se ejecute de última

export default adminRouter;
