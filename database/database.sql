CREATE TABLE productos (
    id_producto SERIAL PRIMARY KEY,
    nombre_producto VARCHAR(150) NOT NULL,
    imagen_producto TEXT,
    descripcion TEXT,
    categoria_id INT NOT NULL,
    cantidad INT,
    costo_unitario NUMERIC(10, 0),
    costo_total NUMERIC(10, 0) GENERATED ALWAYS AS (cantidad * costo_unitario) STORED,
    porcentaje_utilidad NUMERIC(10, 2) NOT NULL,
    precio_venta NUMERIC(10, 0),
    venta_total NUMERIC(10, 0),
    ganancia_unitaria NUMERIC(10, 0),
    ganancia_total NUMERIC(10, 0),
    CONSTRAINT fk_categoria FOREIGN KEY (categoria_id) REFERENCES categorias(id_categoria)
);

CREATE TABLE categorias (
    id_categoria SERIAL PRIMARY KEY,
    nombre_categoria VARCHAR(100) NOT NULL,
    imagen_categoria TEXT
);

CREATE OR REPLACE FUNCTION calcular_precios_y_costos()
RETURNS TRIGGER AS $$
BEGIN
    -- Calcular precio_venta:
    IF NEW.porcentaje_utilidad > 0 THEN
        NEW.precio_venta := ROUND(((NEW.costo_unitario / NEW.porcentaje_utilidad) / 100)) * 100;
        ELSE NEW.precio_venta := 0;
    END IF;

    -- Calcular la venta total
    NEW.venta_total := NEW.cantidad * NEW.precio_venta;

    -- Calcular la ganancia unitaria
    NEW.ganancia_unitaria := ROUND((NEW.precio_venta - NEW.costo_unitario) / 100) * 100;

    -- Calcular la ganancia total
    NEW.ganancia_total := ROUND((NEW.cantidad * NEW.ganancia_unitaria) / 100) * 100;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_calcular_precios_y_costos
BEFORE INSERT OR UPDATE ON productos
FOR EACH ROW
EXECUTE FUNCTION calcular_precios_y_costos();

--DROP TRIGGER IF EXISTS trigger_calcular_venta_total ON productos;

--DROP TRIGGER IF EXISTS trigger_calcular_ganancia_unitaria ON productos;


-- INSERT INTO productos (
--     nombre_producto,
--     descripcion,
--     categoria_id,
--     cantidad,
--     costo_unitario,
--     porcentaje_utilidad

--     )
--         VALUES (
--             'Triciclo Mickey Mouse',
--             'Triciclo para niños con peso límite de 32 kg',
--             3,
--             1,
--             87500,
--             0.38
--         );

INSERT INTO categorias ( nombre_categoria ) 
    VALUES
        ('Aseo'),
        ('Ferretería'),
        ('Juguetería'),
        ('Mascotas'),
        ('Hogar'),
        ('Electrodomésticos');

UPDATE categorias
SET imagen_categoria = 'https://res.cloudinary.com/dzmtakw9n/image/upload/v1727581700/smart_pocket/electro.jpg'
WHERE id_categoria = 6;


