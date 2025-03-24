# Smart Pocket Backend (API REST)

![Node.js](https://img.shields.io/badge/Node.js-20.0-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-✔-lightgrey?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%230077AC.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Token%20Security-blue?style=for-the-badge&logo=jsonwebtokens)
![Boom](https://img.shields.io/badge/Boom-Error%20Handling-red?style=for-the-badge)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image%20Hosting-blue?style=for-the-badge&logo=cloudinary)
![Railway](https://img.shields.io/badge/Deployed%20on-Railway-purple?style=for-the-badge&logo=railway)

Smart Pocket Backend es la API REST que impulsa la gestión de productos y autenticación de usuarios en Smart Pocket, una aplicación web diseñada para facilitar el control de inventario y ventas. Construido con Node.js, Express y PostgreSQL, este backend implementa buenas prácticas de seguridad, autenticación con JWT y manejo estructurado de errores con Boom.

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

## Motivación del Proyecto

Este backend fue desarrollado como parte de mi aprendizaje en desarrollo backend con Node.js, Express y PostgreSQL. Mi objetivo era crear una API segura, eficiente y escalable que pudiera ser utilizada en un entorno real de comercio electrónico y gestión de inventario para clientes pequeños que no cuentan con pasarelas de pago.

## Requisitos Previos

- Node.js (se recomienda la versión 20)
- PostgreSQL (base de datos)

## Instalación y Configuración

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

Crea un archivo .env en la raíz del proyecto y agrega:

```sh
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=smart_pocket
DB_PORT=5432
WHATSAPP_NUMBER=573122222222
DATABASE_URL=postgres://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME
DATABASE_PUBLIC_URL=url_pública_para_base_de_datos_en_produccion
JWT_SECRET=clave_secreta
CLOUDINARY_API_KEY=cloudinary_api_key
CLOUDINARY_API_SECRET=cloudinary_api_secret
```

4. Configurar la base de datos:

Ejecuta el siguiente comando para crear la base de datos con las tablas, triggers y relaciones necesarias, asegurándose de estar en la raiz del proyecto:

```sh
# Asegúrate de estar en la raíz del proyecto antes de ejecutar el siguiente comando:
psql -U tu_usuario -d smart_pocket -f ./database/database.sql
```

5. Generar un hash para la contraseña del usuario administrador:

```sh
echo -n "Tu_Contraseña_Segura" | sha256sum
```

- Copia el hash generado y reemplázalo en la siguiente consulta:

```sql
INSERT INTO roles (nombre_rol) VALUES ('admin'), ('usuario'), ('vendedor');
INSERT INTO usuarios (nombre, correo, contraseña, rol_id)
VALUES ('Nombre usuario', 'user@example.com', '$2b$10$hash_aquí', 1);
```

6. Iniciar el servidor:

```sh
npm run dev
```

El backend se ejecutará en http://localhost:5000 por defecto.

## Endpoints Principales

### Endpoints Públicos

### Autenticación

POST /api/v1/login - Iniciar sesión.
GET /api/v1/profile - Obtener información del usuario autenticado.

### Productos

GET /api/v1/productos - Obtener todos los productos.
GET /api/v1/productos/product-detail/:productId - Obtener detalles de un producto en vista pública.

### Categorias

GET /api/v1/categorias - Obtener todas las categorias.
GET /api/v1/categorias/:categoryName/:categoryId - Obtener todos los productos de determinada categoria.

### Whatsapp

GET /api/v1/whatsapp-number - Obtener número de whatsapp del propietario.

### Search

GET /api/v1/search - Obtener producto por el nombre requerido.

### Cloudinary

GET /api/v1/get-signature - Obtener firma de parámetros para autenticación y consumo seguro de la api de Cloudinary.

## Endpoints privados

### Panel de administración y Productos

GET /api/v1/admin/dashboard/summary - Obtener lista de productos con información resumida en vista privada.
GET /api/v1/admin/detail/:productId - Obtener información completa de un producto en vista privada.
POST /api/v1/admin/productos - Crear un nuevo producto.
PATCH /api/v1/admin/productos - Actualizar un producto.
DELETE /api/v1/admin/productos - Eliminar un producto.

## Manejo de Errores

- La API devuelve respuestas de error estructuradas en JSON con Boom.

- Ejemplo de error 404:

```json
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "Producto no encontrado"
}
```

## Aprendizajes Clave

Durante el desarrollo de este proyecto, reforcé mis conocimientos en:

- Autenticación con JWT y protección de rutas.

- Manejo de errores estructurado con Boom.

- Consultas SQL optimizadas con PostgreSQL.

- Modularización del backend con Express.js.

- Buenas prácticas de seguridad y middleware en APIs.

## Despliegue

- Para desplegar el backend, puedes usar plataformas como Railway, Render, Heroku o VPS.

Ejemplo de variable de entorno en producción:

```sh
WHATSAPP_NUMBER=573122222222
DATABASE_URL=postgres://user:password@db_host:port/database_name
JWT_SECRET=clave_secreta
CLOUDINARY_API_KEY=claudinary_api_key
CLOUDINARY_API_SECRET=claudinary_api_secret
```

## Estado del Proyecto

- En desarrollo: Mejoras en seguridad, refactorización de código, optimización de consultas y nuevas funcionalidades.

## Contribuciones

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
