# 🧩 Integración Frontend + Backend - Proyecto "Fullstack Butterflies"

Este repositorio contiene la integración de dos proyectos previamente desarrollados por separado:

- **Frontend:** Aplicación React para mostrar y consumir datos de mariposas.  
  Repositorio original: https://github.com/irinatiron/polinizadores-america-mariposas.git

- **Backend:** API REST construida con Node.js y Express.  
  Repositorio original: https://github.com/MetamorphosisTeam/american-butterflies-api.git

---

## 📁 Estructura del proyecto

fullstack-butterflies/
├── american-butterflies-backend/ # Backend (Node + Express)
├── polinizadores-america-frontend/ # Frontend (React + Vite)
├── README.md

yaml
Copy code

---

## ⚙️ Integración y estado actual

Para esta integración, se unieron ambos proyectos en un solo repositorio, asegurando que:

- No existan submódulos ni `.git` internos en las carpetas, para que Git reconozca todo como un solo repositorio.
- Se renombraron las carpetas para una mejor organización y claridad.
- Se añadieron todos los archivos y cambios con `git add -A` para que el repositorio padre detecte correctamente el contenido.
- Esto permite que las carpetas frontend y backend se puedan navegar correctamente en GitHub y VSCode, además de poder gestionarlas desde un único repositorio.

---

## ⚙️ Cómo usar el repositorio

1. Clonar este repositorio:

```bash
git clone https://github.com/MetamorphosisTeam/fullstack-butterflies.git
cd fullstack-butterflies
Instalar dependencias:

Backend:

bash
Copy code
cd american-butterflies-backend
npm install
Frontend:

bash
Copy code
cd ../polinizadores-america-frontend
npm install
Configurar variables de entorno:

Backend (american-butterflies-backend/.env):

ini
Copy code
PORT=8000
# (Más variables si usas MongoDB u otras)
Frontend (polinizadores-america-frontend/.env):

bash
Copy code
VITE_API_URL=http://localhost:8000/butterflies
Verificar que el frontend use la variable de entorno:

js
Copy code
const URL_API = import.meta.env.VITE_API_URL;
Ejecutar localmente:

Backend:

bash
Copy code
cd american-butterflies-backend
npm start
# o node app.js
Frontend:

bash
Copy code
cd ../polinizadores-america-frontend
npm run dev
🧪 Resultado esperado
El backend estará corriendo en http://localhost:8000 (o el puerto que hayas configurado).

El frontend se iniciará en http://localhost:5173 y consumirá datos desde el backend.

Las mariposas se mostrarán en pantalla usando los datos que proporciona la API.

