//connect to other models
const User = require('./Users');
const Post = require('./Posts');
const Comment = require('./Comments');

Post.belongsTo(User, {
   foreignKey: 'userId',
   onDelete: 'CASCADE' 
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };