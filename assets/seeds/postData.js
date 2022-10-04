const { Post } = require('../models')

const postData = [
    {
        title: 'Welcome',
        content: 'Welcome to the blog site!',
        user_id: 1
    },
    {
        title: 'First!!!',
        content: 'I was first!',
        user_id: 2
    }
];

const generatePost = () => Post.bulkCreate(postData);

module.exports = generatePost;
