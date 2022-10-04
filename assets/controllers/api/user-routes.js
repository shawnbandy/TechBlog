const router = require('express').Router();
const { User, Post, Comment } = require('../../models');


router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(newUser)
        });
    }   
    catch (err){
        console.log(err);
        res.status(500).json(err)
    }
});

router.post('/login', async (req, res) => {
    try {
        const newUser = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!newUser){
            res.status(400).json({
                message: "Incorrect username or password"
            });
            return;
        }

        const validPassword = await newUser.checkPassword(req.body.password)

        if (!validPassword){
            res.status(400).json({
                message: "Incorrect username or password"
            });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            console.log('You should be logged in')
        })

        res.status(200).json({
            user: newUser,
            message: 'You are logged in'
        })

    }

    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.post('/logout', async (req, res) =>{
    if (req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(400).end()
    }
})

module.exports = router;