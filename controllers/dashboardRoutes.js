const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll(req.session.user_id, {
        // attributes: { exclude: ["password"] },
        include: [{ model: Post, 
          // attributes: ["name"] 
        }],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render("dashboard", {
        posts,
        logged_in: true,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/new", (req, res) => {
    res.render('add-post', {
      logged_in: true });
      });
  
  module.exports = router;