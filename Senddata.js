const express = require('express')
const router = express.Router()

router.post('/Senddata',(req,res)=>{
    try {
     
        res.send([global.blogcontent]);
    } catch (error) {
        console.error(error.message);
        res.send("Server error");
    }
})


module.exports = router;