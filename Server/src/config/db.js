import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false,              
    trustServerCertificate: true, 
    enableArithAbort: true
  }
};

// This function handles the connection
export const connectDB = async () => {
  try {
    const pool = await sql.connect(sqlConfig);
    console.log("✅ SQL Server Connected");
    return pool;
  } catch (err) {
    console.error("❌ Database Connection Failed! ", err.message);
    throw err;
  }
};

export { sql };