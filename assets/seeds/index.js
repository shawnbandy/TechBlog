const sequelize = require('../config/connection');
const genComment = require('./commentData');
const genPost = require('./postData');
const genUser = require('./userData');

const seedAll = async () => {
    await sequelize.sync({force: true});
    await genUser();
    await genPost();
    await genComment();
    process.exit(0);
}

seedAll();