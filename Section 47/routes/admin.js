const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('NOT ADMIN');
})

router.get('/topsecret', (req, res) => {
    res.send('TOP SECRET');
})

router.get('/deleteeverything', (req, res) => {
    res.send('Ok delete all');
})

module.exports = router;