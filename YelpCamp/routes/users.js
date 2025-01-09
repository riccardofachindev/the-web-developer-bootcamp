const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const passport = require('passport');
const { storeReturnTo } = require('../middleware')
const users = require('../controllers/users')

router.route('/register')
    .get(users.renderRegistrationForm)
    .post(catchAsync(users.createRegistration))

router.route('/login')
    .get(users.renderLoginForm)
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.doLogin)

router.get('/logout', users.doLogout);

module.exports = router;