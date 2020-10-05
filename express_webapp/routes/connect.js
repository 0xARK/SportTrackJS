const express = require('express');
const router = express.Router();
const user_dao = require("../sport-track-db/sport-track-db.js").user_dao;

router.get('/', function (req, res, next) {
    user_dao.findAll(function (err, rows) {
        if (err != null) {
            console.log("ERROR= " + err);
        } else {
            res.render('connect');
        }
    });
});

router.post('/', function (req, res, next) {
    if (req.body.page === 'user_add' && req.body.email !== "") {
        user_dao.insert(req.body)
    }

    user_dao.findAll(function (err, rows) {
        if (err != null) {
            console.log("ERROR= " + err);
        } else {
            res.render('connect');
        }
    });
});

module.exports = router;
