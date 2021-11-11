const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("allposts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("singlepost", { post });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/login', async(req, res) => {
  try {
      res.render('login');
  } catch (err) {
      res.status(500).json(err);
  };
});

router.get('/logout', async(req, res) => {
  try {
      res.render('logout', { loggedIn: req.session.logged_in });
  } catch (err) {
      res.status(500).json(err);
  };
});

router.get('/signup', async(req, res) => {
  try {
      res.render('signup', { loggedIn: req.session.logged_in });
  } catch (err) {
      res.status(500).json(err);
  };
});

module.exports = router;