const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  options: {
    encrypt: process.env.SQL_ENCRYPT === "true",
    trustServerCertificate: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("✅ Kết nối SQL Server thành công");
    return pool;
  })
  .catch((err) => {
    console.error("❌ Lỗi kết nối SQL Server", err);
  });

module.exports = {
  sql,
  poolPromise,
};