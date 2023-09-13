import { Sequelize } from "sequelize";
import userModel from '../models/User.js';
import companyModel from '../models/Company.js';
import skillModel from '../models/Skill.js';
import serviceModel from '../models/Service.js';


const sequelize = new Sequelize(
    process.env.POSTGRES_URL
)

userModel(sequelize);
companyModel(sequelize);
skillModel(sequelize);
serviceModel(sequelize);

const {User, Company, Skill, Service} = sequelize.models;


export { sequelize}