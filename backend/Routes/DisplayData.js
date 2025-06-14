const express = require('express')
const router = express.Router();

router.post("/foodItems",(req,res)=>{
  try {
    // console.log(global.fooddata);
    res.send([global.fooddata,global.foodCategory]);
  } catch (error) {
    // console.error(error.message);
    res.send("Server error");
  }
})

module.exports=router;


