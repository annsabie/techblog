const router = require('express').Router();

const postRoutes = require('./postroutes');
const userRoutes = require('./userroutes');
const commentRoutes = require('./commentroutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;