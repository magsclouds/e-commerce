const express = require('express');
    router = express.Router(),
    controller = require('../controllers/UsersController');
    // isLoggedin = require('../middlewares/isLoggedin');


    
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/secret', controller.secret);

module.exports = router;