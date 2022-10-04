const router = require('express').Router();
const { User, Post, Comment } = require('../../models');



router.post('/', async (req, res) =>{
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content
        });

        res.status(200).json(newPost)
    }
    catch (err) {
        res.status(400).json(err)
    }
});

router.put('/edit/:id', async (req, res) => {
    try {
        updatePost = await Post.update(
            {
                title: req.body.title,
                content: req.body.content
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        res.status(200).json(updatePost)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        deletePost = await Post.destroy({
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