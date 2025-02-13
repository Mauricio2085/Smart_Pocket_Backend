require('dotenv').config();
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }, // Necesario para Railway
});

const testQuery = async () => {
  try {
    console.log('📌 Probando conexión con:', connectionString);
    const result = await pool.query('SELECT * FROM productos;');
    console.log('📌 Datos obtenidos:', result.rows);
  } catch (err) {
    console.error('❌ Error en la consulta:', err);
  } finally {
    pool.end();
  }
};

testQuery();
