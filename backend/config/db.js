const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',  // Replace with your MySQL username
    password: 'your_password',  // Replace with your MySQL password
    database: 'pos_system',  // Replace with your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
