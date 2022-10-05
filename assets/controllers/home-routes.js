const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models');

router.get('/', async (req, res) => {
    try {

        const postData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    attributes: ['content', 'user_id']
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const posts = postData.map((content) => content.get({ plain: true }));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });

    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return
    } else {
        res.render('login')
    }

})


module.exports = router;