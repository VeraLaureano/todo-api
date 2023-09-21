const express = require('express');
const router = express.Router();
const { login, dashboad } = require('../controllers/user.controller');
const { authenticationMiddleware } = require('../middlewares/auth');

router.route('/dashboard').get(authenticationMiddleware, dashboad);
router.route('/login').post(login);

module.exports = router;