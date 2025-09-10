🧩 Integración Frontend + Backend - Proyecto "Fullstack Butterflies"

Este repositorio contiene la integración de dos proyectos previamente desarrollados por separado:

Frontend: Aplicación React para mostrar y consumir datos de mariposas.
del repositorio: https://github.com/irinatiron/polinizadores-america-mariposas.git

Backend: API REST construida con Node.js y Express.
del repositorio: https://github.com/MetamorphosisTeam/american-butterflies-api.git

📁 Estructura del proyecto
fullstack-butterflies/
├── american-butterflies-api/        # Backend (Node + Express)
├── butterflies-frontend/            # Frontend (React + Vite)
├── README.md

⚙️ Integración paso a paso
1. Clonar este repositorio
git clone https://github.com/MetamorphosisTeam/fullstack-butterflies.git
cd fullstack-butterflies

2. Instalar dependencias
Backend:
cd american-butterflies-api
npm install

Frontend:
cd ../butterflies-frontend
npm install

3. Configurar variables de entorno
Backend (american-butterflies-api/.env):
PORT=8000
# (Más variables si usas MongoDB u otras)

Frontend (butterflies-frontend/.env):
VITE_API_URL=http://localhost:8000/butterflies


⚠️ Esto reemplaza las URLs directas en el código y permite cambiar de entorno fácilmente (desarrollo/producción).

4. Verificar conexión

Asegúrate de que en el frontend, los servicios consuman la variable de entorno:

const URL_API = import.meta.env.VITE_API_URL;

5. Ejecutar la aplicación localmente
Backend:
cd american-butterflies-api
npm start
# o node app.js

Frontend:
cd ../butterflies-frontend
npm run dev

🧪 Resultado esperado

El backend estará corriendo en http://localhost:8000. (o en el especificado en el punto.env)

El frontend se iniciará en http://localhost:5173 y consumirá datos desde el backend.

Las mariposas se mostrarán en pantalla a partir de los datos de la API.
