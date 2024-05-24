import { Router } from 'express';
import {
    getUsuer
} from '../controllers/user.controllers.js'

const router = Router();

//Obtener el usuario
router.get("/user", getUsuer);

export default router;