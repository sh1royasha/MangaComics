import { Router } from 'express';
import {
    getMangas,
    getManga,
    createManga,
    updateManga,
    deleteManga,
    getRandonMangas
} from '../controllers/manga.controllers.js'

import multerUploads from '../config/multer.js'

const router = Router();

// Obteneter todos los productos
router.get("/mangas", getMangas);

// Obtener un producto
router.get("/mangas/:id", getManga);

// Crear un producto
router.post("/mangas", multerUploads, createManga);

// Actualiza un producto
router.put("/mangas/:id", updateManga);

// Elimina un producto
router.delete("/mangas/:id", deleteManga);

// Obtener mangas randon para carrusel
router.get("/randonMangas",getRandonMangas);

export default router;