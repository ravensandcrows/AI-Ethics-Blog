const router = require('express').Router();
const { withAuth, withoutAuth } = require('../utils/auth');
const { Post, Comment, User } = require('../models/');

// This is the home route 
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    const posts = postData.map((post)=>post.get({plain : true}));

    res.render('home', {posts, loggedIn: req.session.logged_in});
  }
  catch (err){
    res.status(500).json(err);
  }
});

//Login
router.get('/login', withoutAuth, (req, res) => {
  try {
    res.render('login');
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/join', withoutAuth, (req, res) => {
  try {
    res.render('join');
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//post path
router.get('/post/:id', async(req, res)=>{
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData){
      const post = postData.get({ plain: true });
      res.render('post', { post, loddedIn: req.session.logged_in});
    }
    else{
      res.status(404).end();
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;