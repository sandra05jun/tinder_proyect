import { DataTypes } from "sequelize";

const Company = ( sequelize) => 
{
    sequelize.define ('Company', 
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nit:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        scoring:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        status_company:{
            type: DataTypes.ENUM('activo', 'inactivo'),
            defaultValue: 'activo'
        }, 
    }, {
        tableName: 'companies' }
)}


export default Company;
