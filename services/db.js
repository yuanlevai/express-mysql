const mysql = require("mysql2/promise");
const config = require("../config/db");

// koneksi ke database
async function db(query) {
const connection = await mysql.createConnection(config);

// query database
const [rows] = await connection.execute(query);
return rows;
}

module.exports = db;


