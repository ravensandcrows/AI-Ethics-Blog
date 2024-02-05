const router = require('express').Router();
const path = require('path');
const { withAuth, withoutAuth } = require('../utils/auth');



// This is the 'get' route 
router.get('/', async (req, res) => {
  res.render('home');
});

router.get('/login', withoutAuth, (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;