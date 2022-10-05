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

});

router.get('/dashboard/', async (req, res) => {

    try {

        if (req.session.loggedIn) {
            const currentUser = await User.findOne({
                where: {
                    id: req.session.userID
                }
            })
            console.log(currentUser)
        }

        const postData = await Post.findAll({
            where: {
                user_id: req.session.userID
            }
        });

        const posts = postData.map((content) => content.get({ plain: true }));

        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn
        })
    }

    catch (err){

    }
});

router.get('/blogpost', async (req, res) => {
   
    try {


        res.render('blogPost', {
            
        })
    }

    catch (err){

    }
})


module.exports = router;