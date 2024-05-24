import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js'

class Manga extends Model {}

Manga.init(
    {
        ID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Code:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Publisher: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ReleaseDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        StockQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ImageURL: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "mangas",
        tableName: "mangas",
        timestamps: false,
        primaryKey: true
    }
);

export default Manga;