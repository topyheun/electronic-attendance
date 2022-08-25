const route = require('express').Router();
const auth = require('./auth');
route.use('/auth', auth);

module.exports = route;
