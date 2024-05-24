import User from '../models/user.model.js';

export const getUsuer = async (req, res) =>{
    try {
        const usuarios = await User.findAll({
            attributes: { exclude: ['id'] }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            body: usuarios,
        });
    } catch (error) {
        console.error("Error al buscar las mangas:", error);
        res.status(500).json({
            ok: false,
            status: 500,
            message: "Error al buscar mangas en la base de datos",
        });
    }
}