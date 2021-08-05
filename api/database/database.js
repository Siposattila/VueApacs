const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

db.serialize(function() {
    db.run(
        `CREATE TABLE IF NOT EXISTS users (
            id INT PRIMARY KEY NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            two_factor VARCHAR(255) NULL,
            activated VARCHAR(1) NOT NULL DEFAULT 0,
            created_at DATETIME NOT NULL DEFAULT current_timestamp
        )`
    );
});

exports.db = db;
