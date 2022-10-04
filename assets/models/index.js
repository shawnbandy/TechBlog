const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const router = require('../controllers');


//*post can have many comments
//*user can have many posts

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})







module.exports = { User, Comment, Post }