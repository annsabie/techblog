const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes.js');
const dashboardRoutes = require('./dashboardroutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;
