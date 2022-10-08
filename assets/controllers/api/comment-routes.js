const router = require('express').Router();
const { User, Post, Comment } = require('../../models');



router.post('/create', async (req, res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content, 
            post_id: req.body.post_id,
            user_id: req.session.userID
        });

        res.status(200).json(newComment)
    }
    catch (err) {
        res.status(400).json(err)
    }
});

router.put('/edit/:id', async (req, res) => {
    try {
        updateComment = await Comment.update(
            {
                content: req.body.content
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        res.status(200).json(updateComment)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        deleteComment = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json('deleted')
    }
    catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;