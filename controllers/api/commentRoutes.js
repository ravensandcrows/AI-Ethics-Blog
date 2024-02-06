const router = require('express').Router();
const { Comment } = require('../../models/');
const { apiAuth } = require('../../utils/auth');

router.post('/', apiAuth, async (req, res)=>{
    try{
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.user_id,
        });
        res.json(newComment);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;