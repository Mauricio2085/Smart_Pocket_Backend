CREATE TABLE categorias (
    id_categoria SERIAL PRIMARY KEY,
    nombre_categoria VARCHAR(100) NOT NULL,
    imagen_categoria TEXT
);

CREATE TABLE productos (
    id_producto SERIAL PRIMARY KEY,
    nombre_producto VARCHAR(100) NOT NULL,
    imagen_producto TEXT,
    descripcion TEXT,
    especificaciones TEXT,
    categoria_id INT NOT NULL,
    cantidad INT NOT NULL CHECK (cantidad >= 0),
    costo_unitario NUMERIC(10, 2) NOT NULL CHECK (costo_unitario >= 0),
    porcentaje_utilidad NUMERIC(10, 2) NOT NULL CHECK (porcentaje_utilidad >= 0),
    precio_venta NUMERIC(10, 2) NOT NULL,
    disponible BOOLEAN NOT NULL DEFAULT TRUE,
    destacado BOOLEAN NOT NULL DEFAULT FALSE,
    propietario VARCHAR(10),
    nombre_comercial VARCHAR(50),
    precio_comercial NUMERIC(10, 2) NOT NULL,
    CONSTRAINT fk_categoria FOREIGN KEY (categoria_id) REFERENCES categorias(id_categoria)
);

CREATE OR REPLACE FUNCTION calcular_precio_venta()
RETURNS TRIGGER AS $$
BEGIN
    -- Calcular precio de venta asegurando que el porcentaje de utilidad se use correctamente
    IF NEW.porcentaje_utilidad >= 100 THEN
        NEW.precio_venta := NULL; -- Evitar divisiones por cero o valores negativos
    ELSIF NEW.porcentaje_utilidad > 0 THEN
        NEW.precio_venta := CEIL(NEW.costo_unitario / (1 - (NEW.porcentaje_utilidad / 100)) / 100) * 100;
    ELSE
        NEW.precio_venta := CEIL(NEW.costo_unitario / 100) * 100; -- Si porcentaje es 0, redondea el costo a la centena superior
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_calcular_precio_venta
BEFORE INSERT OR UPDATE ON productos
FOR EACH ROW
EXECUTE FUNCTION calcular_precio_venta();

CREATE TABLE roles (
    id_rol SERIAL PRIMARY KEY,
    nombre_rol VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) UNIQUE NOT NULL,
    contraseña TEXT NOT NULL,
    rol_id INT NOT NULL,
    CONSTRAINT fk_rol FOREIGN KEY (rol_id) REFERENCES roles(id_rol)
);

INSERT INTO categorias ( nombre_categoria ) 
VALUES ('Aseo'), ('Ferretería'), ('Juguetería'), ('Mascotas'), ('Hogar'), ('Electrodomésticos'), ('Accesorios');

-- INSERT INTO roles (nombre_rol) VALUES ('admin'), ('usuario'), ('vendedor');

-- INSERT INTO usuarios (nombre, correo, contraseña, rol_id) 
-- VALUES ('Admin Smart', 'smart@example.com', '$2b$10$9BmVjGGF71Re.b2jqKnRD.eHqS93wcacSMgrhKZYkfVprIqhD3ALG', 1); SmartPocket2025*



-- INSERT INTO productos (
--     nombre_producto,
--     imagen_producto,
--     descripcion,
--     especificaciones,
--     categoria_id,
--     cantidad,
--     costo_unitario,
--     porcentaje_utilidad,
--     disponible,
--     destacado,
--     propietario,
--     nombre_comercial,
--     precio_comercial
--     )
--         VALUES (
--             'Prueba id 3',
--             'https://res.cloudinary.com/dzmtakw9n/image/upload/v1739764085/smart_pocket/triciclo_1.jpg',
--             'Juego de ollas que incluye:'|| chr(10) ||'• Olla de 24 cm' || chr(10) || '• Olla de 20 cm' || chr(10) || '• Olla de 18 cm' || chr(10) || '• Sartén de 24 cm',
--             '• Colección Daysi' || chr(10) || '• Aluminio Antiadherente' || chr(10) || '• Asas de baquelita con acabado de tacto suave' || chr(10) || '• No apto para cocinas de inducción' || chr(10) || '• Apto para cocinas de gas, eléctricas, halógenas y vitrocerámicas' || chr(10) || '• Incluye tapa de vidrio' || chr(10) || '•  Color: Verde agua' || chr(10) || '• Marca: Behome',
--             5,
--             1,
--             75000,
--             50,
--             TRUE,
--             TRUE,
--             'Gloria',
--             'Juego de ollas Behome Daysi',
--             200000
--         );


-- UPDATE categorias
-- SET imagen_categoria = 'https://res.cloudinary.com/dzmtakw9n/image/upload/v1727581700/smart_pocket/electro.jpg'
-- WHERE id_categoria = 1;

-- UPDATE productos
-- SET descripcion = 'Juego de ollas que incluye:'|| chr(10) ||'• Olla de 24 cm' || chr(10) || '• Olla de 20 cm' || chr(10) || '• Olla de 18 cm' || chr(10) || '• Sartén de 24 cm'
-- WHERE id_producto = 2;

