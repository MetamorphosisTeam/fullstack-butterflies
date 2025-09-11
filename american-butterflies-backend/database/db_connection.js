import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || "development";

// Elegir base de datos según el entorno
const DB_NAME = NODE_ENV === "test" ? process.env.DB_TEST_NAME : process.env.DB_DEV_NAME;

// Crear conexión
const db_connection = new Sequelize(
    DB_NAME,                          // database
    process.env.DB_USERNAME,          // username
    process.env.DB_PASSWORD,          // password
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: NODE_ENV === "development" ? console.log : false, // logging solo en dev
        define: {
            timestamps: true,
            underscored: true,
        },
    }
);

export default db_connection;
