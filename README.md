# Smart Pocket Backend (API REST)

![Node.js](https://img.shields.io/badge/Node.js-20.0-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-✔-lightgrey?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%230077AC.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Token%20Security-blue?style=for-the-badge&logo=jsonwebtokens)
![Boom](https://img.shields.io/badge/Boom-Error%20Handling-red?style=for-the-badge)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image%20Hosting-blue?style=for-the-badge&logo=cloudinary)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&logo=License)
![Status](https://img.shields.io/badge/Status-En%20Producción-success?style=for-the-badge)
![Client](https://img.shields.io/badge/Cliente-Activo-blue?style=for-the-badge)

Smart Pocket Backend es la API REST que impulsa la gestión de productos y autenticación de usuarios en Smart Pocket, una aplicación web diseñada para facilitar el control de inventario y ventas. Construido con Node.js, Express y PostgreSQL, este backend implementa buenas prácticas de seguridad, autenticación con JWT y manejo estructurado de errores con Boom.

## 🚀 Demo en Vivo

Puedes explorar la aplicación desplegada en modo público:

- **Frontend Demo**: [https://smart-pocket-v1.vercel.app/](https://smart-pocket-v1.vercel.app/)
- **Backend API**: Desplegado en Render (conectado al frontend)

**Funcionalidades públicas disponibles:**

- ✅ Explorar catálogo de productos
- ✅ Ver detalles de productos
- ✅ Filtrar por categorías
- ✅ Búsqueda de productos
- ✅ Contacto vía WhatsApp

> **Nota:** El panel de administración está en uso por un cliente real y no está disponible para pruebas públicas. Para probar las funcionalidades completas del CRUD, sigue las instrucciones de instalación local más abajo.

## 📸 Vista Previa

### 🎛️ Panel de Administración

![Dashboard Admin](./screenshots/dashboard.png)
_Panel de gestión de productos con operaciones CRUD completas_

### 📦 Detalle de Producto

![Detalle Producto admin](./screenshots/product_detail.png)
_Vista detallada con integración de Cloudinary para imágenes en vista privada_

### 🔌 API - Crear Producto

![API JSON](./screenshots/api_response_create_product.png)
_Respuesta estructurada de la API REST con datos de creación de producto_

### 🔌 API - Resumen de Productos

![API JSON](./screenshots/api_response_product_summary.png)
_Respuesta estructurada de la API REST con datos de resumen de productos_

## Características

- **Autenticación Segura:** Implementación de JWT para proteger los endpoints.

- **CRUD Completo:** Administración de productos con operaciones Crear, Leer, Actualizar y Eliminar.

- **Manejo de Errores Estructurado:** Uso de Boom para respuestas consistentes.

- **Optimizado para PostgreSQL:** Consultas parametrizadas para mejorar rendimiento y seguridad.

**Modularidad y Buenas Prácticas:** Separación clara de responsabilidades en el código.

## Tecnologías Utilizadas

- **Node.js & Express.js:** Framework para el backend.
- **PostgreSQL:** Base de datos relacional.
- **JWT:** Autenticación segura con JSON Web Tokens.
- **Dotenv:** Manejo de variables de entorno.
- **Cors:** Control de acceso a la API desde el frontend.
- **Boom:** Manejo de errores estructurado.

## 🏗️ Arquitectura

```sh
Smart_Pocket_Backend/
│
├── config/
│   └── config.js           # Configuración de variables de entorno
│
├── controllers/             # Lógica de negocio
│   ├── auth.controller.js
│   ├── categories.controller.js
│   ├── cloudinary.controller.js
│   ├── products.controller.js
│   ├── search.controller.js
│   └── whatsapp.controller.js
│
├── database/                # Scripts de base de datos
│   └── database.sql         # Schema, tablas, triggers y relaciones
│
├── libs/                    # Librerías y configuraciones externas
│   └── postgres.pool.js     # Pool de conexiones a PostgreSQL
│
├── middleware/              # Middlewares personalizados
│   ├── authMiddleware.js    # Verificación y validación JWT
│   └── errorHandler.js      # Manejo centralizado de errores (Boom)
│
├── routes/                  # Definición de endpoints API
│   ├── index.js             # Enrutador principal
│   ├── auth.router.js       # Rutas de autenticación
│   ├── categories.router.js # Rutas de categorías
│   ├── cloudinary.router.js # Rutas para Cloudinary
│   ├── products.router.js   # Rutas de productos
│   ├── search.router.js     # Rutas de búsqueda
│   └── whatsapp.router.js   # Rutas de WhatsApp
│
├── services/                # Capa de acceso a datos
│   ├── auth.service.js
│   ├── categories.service.js
│   ├── products.service.js
│   ├── search.service.js
│   └── whatsapp.service.js
│
├── utils/                   # Funciones auxiliares
│   └── hashPassword.js      # Utilidad para hashear contraseñas
│
├── .env.example             # Plantilla de variables de entorno
├── .gitignore               # Archivos ignorados por Git
├── index.js                 # Punto de entrada de la aplicación
├── package.json             # Dependencias y scripts
└── package-lock.json        # Lockfile de dependencias
```

### 🔄 Flujo de una Petición

Cliente → Routes → Auth Middleware → Controller → Service → PostgreSQL
↑ ↓
└────────────── Response ← Error Handler ← ────────────────────┘

**Patrón arquitectónico:** MVC (Model-View-Controller) adaptado para APIs REST con separación clara de responsabilidades.

### 📌 Responsabilidades por Capa

| Capa            | Responsabilidad                                           |
| --------------- | --------------------------------------------------------- |
| **Routes**      | Define endpoints, métodos HTTP y mapea a controladores    |
| **Middleware**  | Autenticación JWT, validación de datos, manejo de errores |
| **Controllers** | Orquesta la lógica de negocio y coordina servicios        |
| **Services**    | Ejecuta queries SQL y gestiona acceso a PostgreSQL        |
| **Utils**       | Provee funciones reutilizables para toda la aplicación    |
| **Config/Libs** | Centraliza configuraciones y conexiones externas          |

## 📋 Requisitos Previos

- **Node.js:** Se recomienda la versión 20
- **PostgreSQL:** base de datos

## ⚙️ Instalación y Configuración

### Backend

1. Clonar el repositorio:

```sh
git clone https://github.com/Mauricio2085/Smart_Pocket_Backend.git
cd Smart_Pocket_Backend
```

2. Instalar dependencias:

```sh
npm install
```

3. Configurar variables de entorno:

Crea un archivo .env.development.local en la raíz del proyecto:

```sh
NODE_ENV=development
# Tu número de whatsapp para pruebas
WHATSAPP_NUMBER=571111111111
# URL de la base de datos que crearás en local
DATABASE_URL=postgres://user:password@localhost:5432/yourdatabase
JWT_SECRET=your_secret_key
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

4. Configurar la base de datos:

```sh
# Verifica que Postgresql esté corriendo.
sudo service postgresql status

# Conectarse a PostgreSQL y crear la base de datos
psql -U tu_usuario_postgres

# Dentro de psql, ejecutar:
CREATE DATABASE smart_pocket_db

# Ejecutar el script SQL para crear tablas
psql -U tu_usuario_postgres -d smart_pocket_db -f ./database/database.sql
```

5. Crea un correo y contraseña para las credenciales de la app:

- Ejecuta el script para generar hash de contraseñas:

```sh
npm run hash tu_contraseña_segura
```

La utilidad te dará un hash de tu contraseña (guardalo para más adelante).

- Ejecuta la siguiente consulta en la terminal para guardar el correo y contraseña de inicio de sesión:

```sh
psql -U tu_usuario_postgres -d smart_pocket_db -c "INSERT INTO usuarios (nombre, correo, contraseña, rol_id)
VALUES ('tu_usuario', 'tu_correo@tu_dominio.com', 'hash_de_tu_contraseña', 1);"
```

6. Iniciar el servidor:

```sh
npm run dev
```

El backend se ejecutará en http://localhost:5000

## Frontend

1. Clonar el repositorio del frontend

```sh
git clone https://github.com/Mauricio2085/smart-pocket-v1.git
cd smart-pocket-v1
```

2. Crear archivo .env.development y agregar variable:

```sh
REACT_APP_API_URL=http://localhost:5000/api/v1
```

3. Instalar y ejecutar:

```sh
npm install
npm run dev
```

4. Acceder a http://localhost:3000 e iniciar sesión con las credenciales que creaste en la db en local.

## 🔒 Seguridad

- Autenticación JWT con tokens de corta duración
- Passwords hasheados con bcrypt
- Validación de datos en todos los endpoints
- Consultas parametrizadas para prevenir SQL injection
- CORS configurado para dominios específicos
- Variables sensibles en variables de entorno

## 📚 Endpoints Principales

### Endpoints Públicos

### Autenticación

- POST /api/v1/login - Iniciar sesión.
- GET /api/v1/profile - Obtener información del usuario autenticado.

### Productos

- GET /api/v1/productos - Obtener todos los productos.
- GET /api/v1/productos/product-detail/:productId - Obtener detalles de un producto en vista pública.

### Categorias

- GET /api/v1/categorias - Obtener todas las categorias.
- GET /api/v1/categorias/:categoryName/:categoryId - Obtener todos los productos de determinada categoria.

### Whatsapp

- GET /api/v1/whatsapp-number - Obtener número de whatsapp del propietario.

### Search

- GET /api/v1/search - Obtener producto por el nombre requerido.

### Cloudinary

- GET /api/v1/get-signature - Obtener firma de parámetros para autenticación y consumo seguro de la api de Cloudinary.

## Endpoints privados

### Panel de administración y Productos

- GET /api/v1/admin/dashboard/summary - Obtener lista de productos con información resumida en vista privada.
- GET /api/v1/admin/detail/:productId - Obtener información completa de un producto en vista privada.
- POST /api/v1/admin/productos - Crear un nuevo producto.
- PATCH /api/v1/admin/productos - Actualizar un producto.
- DELETE /api/v1/admin/productos - Eliminar un producto.

## ⚠️ Manejo de Errores

- La API devuelve respuestas de error estructuradas en JSON con Boom.

- Ejemplo de error 404:

```json
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "Producto no encontrado"
}
```

## 💡 Sobre este Proyecto

Desarrollé Smart Pocket Backend para demostrar mis habilidades en:

- **Diseño de APIs RESTful** escalables y bien documentadas
- **Seguridad** implementando autenticación JWT y buenas prácticas
- **Bases de datos relacionales** con PostgreSQL optimizado
- **Arquitectura limpia** siguiendo principios SOLID

**Problema que resuelve:** Pequeños negocios que necesitan gestionar inventario sin sistemas complejos o pasarelas de pago, permitiéndoles vender vía WhatsApp de forma organizada.

## 🎓 Aprendizajes Clave

Durante el desarrollo de este proyecto, reforcé mis conocimientos en:

- Autenticación con JWT y protección de rutas.

- Manejo de errores estructurado con Boom.

- Consultas SQL optimizadas con PostgreSQL.

- Modularización del backend con Express.js.

- Buenas prácticas de seguridad y middleware en APIs.

## 🔮 Roadmap

### ✅ Completado

- [x] API REST con arquitectura MVC
- [x] Autenticación JWT
- [x] CRUD de productos con PostgreSQL
- [x] Integración con Cloudinary
- [x] Deploy en producción (Render)

### 🚧 En Desarrollo

- [ ] Documentación interactiva con Swagger
- [ ] Tests unitarios con Jest
- [ ] Sistema de roles mejorado

### 📋 Próximas Mejoras

**Funcionalidades:**

- [ ] Paginación y filtros avanzados
- [ ] Sistema de inventario con alertas de stock bajo

**Técnico:**

- [ ] Tests de integración
- [ ] Rate limiting
- [ ] Logging estructurado con Winston
- [ ] Migración gradual a TypeScript

**DevOps:**

- [ ] CI/CD con GitHub Actions
- [ ] Monitoreo de errores con Sentry

### 💭 Futuro

- [ ] Integración con pasarelas de pago
- [ ] Versión mobile de la API
- [ ] Sistema de notificaciones push

## 🚀 Despliegue

- Para desplegar el backend, puedes usar plataformas como Railway, Render, Neon o VPS.

Ejemplo de variables de entorno en producción desplegado en Render y Neon:

```sh
# Ejemplo de número de Whatsapp
WHATSAPP_NUMBER=571111111111
# Ejemplo de base de datos en Neon Serverless Postgres
DATABASE_URL='postgresql://neondb_owner:neonPassword@ep-damp-hall-acx5b9sd-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
JWT_SECRET=your_secret_key
# Datos de tu usuario de Cloudinary
CLOUDINARY_API_KEY=claudinary_api_key
CLOUDINARY_API_SECRET=claudinary_api_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del repositorio.

```sh
# Realizar un fork manualmente en GitHub y luego clonar el repositorio forkeado
git clone https://github.com/TU_USUARIO/Smart_Pocket_Backend.git
cd Smart_Pocket_Backend
```

2. Crea una nueva rama:

```sh
git checkout -b feature/nueva-funcionalidad
```

3. Realiza los cambios y haz commit:

```sh
git commit -m 'Añadir nueva funcionalidad'
```

4. Sube los cambios:

```sh
git push origin feature/nueva-funcionalidad
```

5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## 👨‍💻 Autor

**Mauricio Ocampo**

- 📎 [LinkedIn](https://www.linkedin.com/in/jose-mauricio-ocampo-marulanda-92380a81)
- 📂 [GitHub](https://github.com/Mauricio2085)
- 📧 Email: maoca2085@gmail.com
- 🌐 Portfolio: [MyWebSite](https://mywebsite-iota-navy.vercel.app/)
