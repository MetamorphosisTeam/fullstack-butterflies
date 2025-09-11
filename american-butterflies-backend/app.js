import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import helmet from "helmet";

import butterfliesRouter from "./routes/ButterfliesRoutes.js";
import adminRouter from "./routes/AdminRoutes.js"; // nuevo router de admin
import db_connection from "./database/db_connection.js";

// Cargar variables de entorno
dotenv.config();

// Inicializar app una sola vez, sin export
export const app = express();

//Middlewares de seguridad
app.use(helmet());

//CORS configurado
app.use(cors({
  origin: 'http://localhost:5173', // Supuesto puerto de frontend por usar vite
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("🦋 American Butterflies API - v1.0.0");
});

// Rutas de la API
app.use("/butterflies", butterfliesRouter);
app.use("/admin", adminRouter); // el router de admin con el prefijo /admin

/* Conexión a la base de datos
try {
  await db_connection.authenticate();
  console.log('✅ Connected to database 🐱🚀');
  await ButterfliesModel.sync({}); // Añadido para dar permiso a Squelize a modificar la tabla
  console.log('✅ Models synchronized ✔');
} catch (error) {
  console.error(`❌ Database connection error: ${error}`);
}

//Levantar servidor
const PORT = process.env.PORT || 8000;
export const server = app.listen(PORT, () => {
  console.log(`🚀 Server up at http://localhost:${PORT}/`);
}); */


// Función para iniciar el servidor
const startServer = async () => {
  try {
    // 1. Autenticar conexión con la BD
    await db_connection.authenticate();
    console.log('✅ Connected to database 🐱🚀');
    
    // 2. Sincronizar modelos (SOLO en desarrollo, cuidado en producción)
    // Usar { force: false } para no borrar datos. { alter: true } es útil pero puede ser arriesgado.
    await db_connection.sync({ force: false }); 
    console.log('✅ Models synchronized ✔');

    // 3. Levantar el servidor Express
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`🚀 Server up at http://localhost:${PORT}/`);
    });

  } catch (error) {
    // Si algo falla, lo mostramos y terminamos el proceso
    console.error('❌ Unable to connect to the database or start the server:', error);
    process.exit(1); // Termina el proceso con un código de error
  }
};

// Llamamos a la función para que todo se inicie
startServer();




