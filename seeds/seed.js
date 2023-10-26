const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models');

const commentData = require('./commentData.json');
const postData = require('./postData.json');
const userData = require('./userData.json');

const seedDb = async () => {
    await sequelize.sync({ force: true });
    try {
        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });
        const posts = await Post.bulkCreate(postData, {
            individualHooks: true,
            returning: true,
        });
        const comments = await Comment.bulkCreate(commentData, {
            individualHooks: true,
            returning: true,
        });
    } catch (error) {
        console.error("Could not seed database: ", error);
    } finally {
        process.exit(0);
    }
}

seedDb();