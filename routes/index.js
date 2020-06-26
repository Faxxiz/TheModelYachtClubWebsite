const express = require('express');
const mysql = require('mysql');
const { Connection, Request } = require("tedious");

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'The Model Yacht Club' });

});

module.exports = router;


/*
    // Create connection to database
    const config = {
        authentication: {
            options: {
                userName: "dws_admin", // update me
                password: "HYgçèuvà!ygç889gbç" // update me
            },
            type: "default"
        },
        server: "dynawingsail.database.windows.net", // update me
        options: {
            database: "user", //update me
            encrypt: true
        }
    };

    const connection = new Connection(config);

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.code);
        } else {
            console.log("OUI");
        }
    });  */