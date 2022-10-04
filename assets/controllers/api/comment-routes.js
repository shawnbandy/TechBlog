const router = require('express').Router();
const { User, Post, Comment } = require('../../models');



router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content 
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

route.delete('/delete/:id', async (req, res) => {
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