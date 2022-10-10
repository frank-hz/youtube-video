const { render } = require('ejs');
const { Router } = require('express');
const path = require('path');
const router = Router();

router.get('/', (req, res) => {
    res.render('template');
})

module.exports = router;