import { Sequelize } from 'sequelize';
import Manga from '../models/manga.model.js';
import cloudinary from '../config/cloudinaryConfig.js';

export const getMangas = async (req, res) => {
    try {
        const mangas = await Manga.findAll({
            attributes: { exclude: ['id'] }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            body: mangas,
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

export const getRandonMangas = async (req, res) => {
    try {
        const mangas = await Manga.findAll({
            attributes: ['ID','Title', 'ImageURL'],
            order: Sequelize.literal('NEWID()'), // Orden aleatorio
            limit: 12 
        });
        res.status(200).json({
            ok: true,
            status: 200,
            body: mangas,
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

export const getManga = async (req, res) =>{
    try {
        const id = req.params.id;
        const mangas = await Manga.findByPk(id);
        if (!mangas) {
            return res.status(404).json({
                success: false,
                message: "Manga not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Manga retrieved successfully",
            data: mangas,
        });
    } catch (error) {
        console.error("Error al buscar el manga:", error);
        res.status(500).json({
            success: false,
            message: "Error al buscar manga en la base de datos",
            error: error.message
        });
    }
}

export const createManga = async  (req,res) =>{
    try {

        // Obtener datos del cuerpo de la solicitud
        const data = req.body;

        // console.log(req.body.imagen)

        // Codificar el buffer de la imagen en base64
        const base64Image = req.body.imagen;

        // Construir la URL de la imagen en formato de datos URI
        // const dataUri = `data:${req.file.mimetype};base64,${base64Image}`;

        // Subir la imagen a Cloudinary
        const result = await cloudinary.uploader.upload(base64Image,{ folder: 'uploads' });

        // Crear un nuevo manga en la base de datos
        const newManga = await Manga.create({
            Code: data.codigo,
            Title: data.titulo,
            Author: data.autor,
            Genre: data.genero,
            Publisher: data.editorial,
            ReleaseDate: data.publicacion,
            Price: data.precio,
            StockQuantity: data.stock,
            ImageURL: result.secure_url
        });

        res.status(201).json({
            success: true,
            message: "Manga created successfully",
            data: newManga
        });
    } catch (error) {
        console.error("Error al crear manga:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create manga",
            error: error.message
        });
    }
}

export const updateManga = async (req,res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const [updatedRows] = await Manga.update({
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            stock: data.stock,
        }, {
            where: { id: id }
        });
        if (updatedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Manga not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Manga updated successfully",
        });
    } catch (error) {
        console.error("Error al actualizar manga:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update Manga",
            error: error.message
        });
    }
}

export const deleteManga = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedRows = await Manga.destroy({
            where: { id: id }
        });
        if (deletedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Manga not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Manga deleted successfully",
        });
    } catch (error) {
        console.error("Error al eliminar Manga:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete Manga",
            error: error.message
        });
    }
}

