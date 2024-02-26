const express = require('express')
const router = express.Router()
const Blogcontent = require('./models/Createblogs');
const mongodb = require('./Db');



router.post("/Addblog", async (req, res) => {

          

            try {
                  await Blogcontent.create({
                        title: req.body.title,
                        category: req.body.category,
                        img:req.body.imagelink,
                        description:req.body.blog
                  })
                  res.json({ success: true });
                  mongodb();
            
            } catch (error) {
                  console.log(error);
                  res.json({ success: false });
                  
                  console.log("error");
            }

      });




module.exports = router;