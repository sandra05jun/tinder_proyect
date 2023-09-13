import { DataTypes } from "sequelize";

const User = ( sequelize) => 
{
    sequelize.define('User', 
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        location:{
            type: DataTypes.STRING,
            allowNull: false
        },
        profile:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        service_value:{
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        },
        scoring:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        status_user:{
            type: DataTypes.ENUM('activo', 'inactivo'),
            defaultValue: 'activo'
        }
    }, 
     { tableName: 'users'}
)}

export default User;
