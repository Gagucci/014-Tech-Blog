const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');

router.use('/comments', commentRoutes);
router.use('/blog-posts', blogRoutes);
router.use('/users', userRoutes);

module.exports = router;