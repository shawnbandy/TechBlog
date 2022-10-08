const router = require("express").Router();
const sequelize = require("../config/connection");
const { Comment, Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ["id", "content", "user_id"],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const post = postData.map((content) => content.get({ plain: true }));
    const posts = post.reverse();

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  } else {
    res.render("login");
  }
});


router.get("/view/:id", withAuth, async (req, res) => {

  req.session.loggedIn = true;
  console.log(req.params.id)

  console.log("reached")
  try {
    const postData = await Post.findByPk(req.params.id, {
      where: {
        id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ['id', 'content', 'user_id', 'createdAt'],
          include: [
            {
              model: User,
              attributes: ['username']
            }

          ]
        },

      ]
    });

    const testing = JSON.stringify(postData.get({plain: true}))
    console.log(testing)

    const post = postData.get({plain: true})

    console.log("------------" + post)

    res.render("viewPost", {
      post,
      loggedIn: req.session.loggedIn
    })

  }

  catch (err) {
    
  }
});

router.get("/edit/post/:id", withAuth, async (req, res) => {

  req.session.loggedIn = true;
  console.log(req.params.id)

  try {
    const postData = await Post.findByPk(req.params.id, {
      where: {
        id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ]
    });


    const post = postData.get({plain: true})

    console.log("------------")

    res.render("blogEdit", {
      post,
      loggedIn: req.session.loggedIn
    })

  }

  catch (err) {

  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  req.session.loggedIn = true;

  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.userID,
      },
    });

    const post = postData.map((content) => content.get({ plain: true }));
    const posts = post.reverse();

    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {}
});

router.get("/blogpost", withAuth, async (req, res) => {
  req.session.loggedIn = true;
  try {
    res.render("blogPost", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

module.exports = router;
