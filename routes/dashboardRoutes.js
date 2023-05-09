const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("dashboard");
});



router.get("/new-post", (req, res) => {
    res.render("newPost");
  });
  
  router.post("/new-post", (req, res) => {
 
  });
  
  router.get("/edit-post/:id", (req, res) => {
   
  });
  
  router.post("/edit-post/:id", (req, res) => {
   
  });
  
  router.post("/delete-post/:id", (req, res) => {
   
  });
  
  module.exports = router;
  