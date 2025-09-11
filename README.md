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
Copiar en bash:
- cd american-butterflies-backend
- npm install

Frontend:
Copiar en bash
cd ../polinizadores-america-frontend
npm install

Configurar variables de entorno:
Desde la raiz del proyecto crear un archivo .env 
copiar el contenido del .env example

Backend (american-butterflies-backend/.env):
npm init
Copy code
PORT=8000
# (Cambiar la variable si usas MongoDB u otro puerto)

Frontend (polinizadores-america-frontend/.env):
copiar en bash
npm init

Verificar que el frontend use la variable de entorno (puerto) 

en el archivo ButterflyServices.jsx cambiar la constante por esta:
const URL_API = import.meta.env.VITE_API_URL;
para poder utilizar el puerto local que corresponda.

## Ejecutar localmente:

Backend:

copiar en bash:
cd american-butterflies-backend
node app.js


Frontend:
copiar en bash:
cd ../polinizadores-america-frontend
npm run dev


## 🧪 Resultado esperado
El backend estará corriendo en http://localhost:8000 (o el puerto que hayas configurado).

El frontend se iniciará en http://localhost:5173 y consumirá datos desde el backend.

Las mariposas se mostrarán en pantalla usando los datos que proporciona la API.

