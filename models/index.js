//connect to other models
const User = require('./Users');
const Post = require('./Posts');
const Comment = require('./Comments');

Post.belongsTo(User, {
   foreignKey: 'userID',
   onDelete: 'CASCADE' 
});

Post.hasMany(Comment, {
    foreignKey: 'postID',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});



module.exports = { User, Post, Comment };
