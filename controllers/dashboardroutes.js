const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const auth = require('../utils/auth');

router.get("/", auth, (req, res) => {
    Post.findAll({
      where: {
        userId: req.session.userId
      }
    })
      .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        res.render("all-posts-admin", {
          layout: "dashboard",
          posts
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

  router.get("/new", auth, (req, res) => {
    res.render("new-post", {
      layout: "dashboard"
    });
  });
  
  router.get("/edit/:id", auth, (req, res) => {
    Post.findByPk(req.params.id)
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render("edit-post", {
            layout: "dashboard",
            post
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
module.exports = router;