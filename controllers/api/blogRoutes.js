const express = require('express');
const router = express.Router();
const { User, BlogPost } = require('../../models');

// Get all posts
router.get('/blog-posts', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get posts by id
router.get('/blog-posts/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new blog post
router.post('/blog-posts', async (req, res) => {
    try {
        const blogPost = await BlogPost.create(req.body);
        res.status(200).json(blogPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a blog post
router.delete('/blog-posts/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(blogPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
