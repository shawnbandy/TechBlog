const { Comment } = require('../models');

const commentData = [
  {
    content: 'Such a warm welcome :)',
    post_id: 1,
    user_id: 2,
  },
  {
    content: 'I think... that I had the first post...',
    post_id: 2,
    user_id: 1,
  },
];

const generateComments = () => Comment.bulkCreate(commentData);

module.exports = generateComments;
