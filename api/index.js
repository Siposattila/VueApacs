const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const provider = require("./database/database");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const corsOptions = {
    origin: "http://localhost:8080"
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/:id", (request, response) => {
    provider.db.get(`SELECT id, email, activated, created_at FROM users WHERE id='${request.params.id}'`, function(err, row) {
        if (!row) response.status(404).json({"error": "Not found!"});
        else response.json({"user": row});
    });
});

app.post("/register", (request, response) => {
    provider.db.get(`SELECT * FROM users WHERE email='${request.body.email}'`, function(err, row) {
        if (row) response.status(409).json({"error": "An account already exist with this email!"});
        else {
            bcrypt.hash(request.body.password, saltRounds, (err, hash) => {
                if (err) response.status(500).json({"error": "Something went wrong! :c"});
                else {
                    var stmt = provider.db.prepare(`INSERT INTO users (id, email, password) VALUES (?, ?, ?)`);
                    const uuid = uuidv4();
                    if (!stmt.run(uuid, request.body.email, hash)) response.status(500).json({"error": "Something went wrong when inserting a new user! :c"});
                    else {
                        stmt.finalize();
                        response.status(201).json({"response": `Succesfully registered! _${uuid}`});
                    }
                }
            });
        }
    });
});

app.post("/login", (request, response) => {
    provider.db.get(`SELECT * FROM users WHERE email='${request.body.email}'`, function(err, row) {
        if (err) response.status(404).json({"error": "Wrong email or password!"});
        else {
            bcrypt.compare(request.body.password, row.password, function(err, res) {
                if (err) response.status(404).json({"error": "Wrong email or password!"});
                else {
                    response.json({"response": `Logged in as _${row.id}`});
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});