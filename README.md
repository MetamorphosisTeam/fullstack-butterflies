# 🧩 Proyecto Fullstack Butterflies - Integración Frontend + Backend (en MySQL y MongoDB)

Este proyecto combina **frontend y backend** para ofrecer una experiencia completa en la gestión de Mariposas de America.  
La idea es que puedas **clonar el frontend** y luego elegir **qué backend quieres usar**, según el stack que prefieras.

En este repositorio podras encontrar la forma de integrar los proyectos desarrollados:

- **Frontend:** Aplicación React para mostrar y consumir datos de mariposas.  
  Repositorio original: https://github.com/irinatiron/polinizadores-america-mariposas.git

- **Backend MySQL:** API REST construida con Node.js y Express con Sequalize.  
  Repositorio original: https://github.com/MetamorphosisTeam/american-butterflies-api.git

- **Backend MongoDB:** API REST construida con Node.js y Express con Mongoose.  
  Repositorio original: https://github.com/MetamorphosisTeam/american-butterflies-mongodb.git  

---

## ⚙️ Integración 

Si deseas unir el frontend y el backend en un solo repositorio para tener la versión **fullstack**, debes asegurarte de:

- Clonar los proyectos dentro de un mismo repositorio vacío (sin submódulos).  
- Eliminar cualquier carpeta `.git` interna dentro de **frontend** o **backend**, para que Git reconozca todo como un único proyecto.  
- Renombrar las carpetas si es necesario, para mantener una organización clara (por ejemplo: `frontend/` y `backend/`).  
- Añadir todos los archivos y cambios con:
  
  ```bash
  git add -A
  git commit -m "Integración frontend + backend"
  ```

---

## 📁 Estructura del proyecto

- **Frontend** → React + Vite, con validaciones, subida de imágenes a Cloudinary y un diseño intuitivo.  
- **Backend (opcional, elige uno o prueba ambos si deseas):**
  
  - 🐘 **API con MySQL + Sequelize** → Ideal para trabajar con bases de datos relacionales.  
  - 🍃 **API con MongoDB + Mongoose** → Perfecta para explorar un enfoque documental y flexible.  

---

## ⚙️ Cómo usar este proyecto

Puedes organizar el proyecto de dos maneras:

- **Opción recomendada**: clonar los repositorios del frontend y el backend dentro de una misma carpeta para tener todo a mano.  
- **Opción alternativa**: clonar los repositorios por separado y gestionarlos de forma independiente.

### 1. Clonar los repositorios

**Frontend:**
```bash
git clone https://github.com/MetamorphosisTeam/FRONT-polinizadores-america-mariposas.git
```

**Backend MySQL:**
```bash
git clone https://github.com/MetamorphosisTeam/american-butterflies-api.git
```
o 

**Backend MongoDB:**
```bash
git clone https://github.com/MetamorphosisTeam/american-butterflies-mongodb.git
```

### 2. Instalar dependencias de cada repositorio

 - Si usaste la opcion recomendada y clonaste los repositorios dentro de una misma carpeta debes entrar en cada uno e instalar por separado, ayudate de diferentes terminales para facilitar el trabajo.
 - Si usaste carpetas individuales, solo debes instalar en la terminal estando en la base del proyecto.

Para el Backend:
```bash
- cd american-butterflies-backend (o el nombre que le hayas dado/ tenga la carpeta del Backend)
- npm install
```

Para el Frontend:
```bash
cd polinizadores-america-frontend (o el nombre que le hayas dado/ tenga la carpeta del Frontend)
npm install
```

### 3. Configurar las variables de entorno (.env)

 - Para la opción recomendada (una misma carpeta)
```bash
Desde la raiz del proyecto crear un archivo .env
copia el contenido del .env.example del backend
ajusta la variable del puerto:

PORT=8000
# (Cambiar la variable si usas MongoDB u otro puerto)
```

 - Para la opción alternativa (una carpeta por repositorio)
```bash
crear un archivo .env en tu carpeta del BackEnd
copia el contenido del .env.example
ajusta la variable del puerto:

PORT=8000
# (Cambiar la variable si usas MongoDB u otro puerto)
```

## 4. Conecta ambos proyectos 

Verificar que el frontend use la variable de entorno (puerto) correcto, en el archivo **src/services/ButterflyServices.jsx (FrontEnd)** cambiar la constante por esta:
```bash
const URL_API = http://localhost:8000/butterflies
#PORT=8000 (o el que use tu servidor local)
``` 

# Ejecutar localmente:

Backend:
```bash
#En caso de la opcion recomendada
cd american-butterflies-backend (o el nombre que le hayas dado/ tenga la carpeta del Backend)

node app.js

```

Frontend:
```bash
#En caso de la opcion recomendada
cd polinizadores-america-frontend (o el nombre que le hayas dado/ tenga la carpeta del Frontend)

npm run dev

```

---


## 🧪 Resultado esperado: y disfruta explorando y gestionando mariposas.

El backend estará corriendo en http://localhost:8000 (o el puerto que hayas configurado).

El frontend se iniciará en http://localhost:5173 y consumirá datos desde el backend.

Las mariposas se mostrarán en pantalla usando los datos que proporciona la API.

---

