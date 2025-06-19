# 🏡 Home — Panel de gestión con Astro + Express + MongoDB

Este proyecto es una aplicación web **fullstack** creada con **Astro (frontend)** y **Express (backend)**. Permite gestionar usuarios y tareas, integrando autenticación con JWT, validación con Zod, base de datos con Mongoose y estilos modernos con TailwindCSS.

---

## 🚀 Tecnologías principales

- ⚙️ **Astro** `v5.x` (modo middleware)
- ⚛️ **React** (integrado con Astro)
- 🖌️ **TailwindCSS**
- 🧠 **Express.js** para API REST
- 🔐 **JWT** para autenticación
- 🧾 **Zod** para validaciones
- 🛢️ **MongoDB + Mongoose**

---

## 📁 Estructura del proyecto

src/
├── backend/ # Servidor Express (API REST)
│ ├── index.mjs # Punto de entrada del backend
│ ├── app.mjs # Configuración de middlewares y rutas
│ ├── db.mjs # Conexión a MongoDB
│ ├── config.mjs # Variables de entorno (puerto, etc.)
│ ├── routes/ # Rutas de autenticación y tareas
│ ├── controllers/ # Lógica de autenticación y tareas
│ ├── models/ # Esquemas de mongoose
│ ├── schemas/ # Validaciones Zod
│ └── middlewares/ # Validación y autorización
├── pages/ # Rutas Astro (frontend)
│ └── index.astro # Página de login
├── componentsA/ # Componentes Astro (ej: <Button />)
├── layouts/ # Layout principal con Header/Footer
├── styles/ # Archivos globales de estilo

---

## ⚙️ Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/home.git
cd home
```

### 2. Instala las dependencias

```bash
pnpm install
```

### 3. Configurar variables de entorno

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/tu_basedatos
JWT_SECRET=clave_secreta_super_segura
```

### 4. Ejecutar el proyecto

```bash
pnpm run dev
```
