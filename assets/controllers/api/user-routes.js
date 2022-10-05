const router = require('express').Router();
const { User, Post, Comment } = require('../../models');


router.post('/create', async (req, res) => {
    try {

        const attemptedUsername = req.body.username;

        const allUsers = await User.findAll();

        const allUsernames = await allUsers.map((username) => username.get({ plain: true }))

        //*checks to see if the user's username is unique, else it doesn't let them create it
        for(let i = 0; i < allUsernames.length; i++){
            if(attemptedUsername == allUsernames[i].username){
                res.status(500).json({message: "Someone already has that username"})
                return;
            } 
        }

        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        console.log('newUser')

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
            console.log('!newUser')
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
            res.status(200).json({
                user: newUser,
                message: 'You are logged in'
            })
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