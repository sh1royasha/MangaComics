import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js'

class User extends Model {}

User.init(
    {
        NombreUsuario:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Contraseña:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "usuarios",
        tableName: "usuarios",
        timestamps: false,
        primaryKey: true
    }
)

export default User;