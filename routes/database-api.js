const express = require ('express');
const router = express.Router ();
const connection = require ('../models/stocks-archive-dbmodel');

router.get ('/sample', (req, res) => {
  connection.query ('SELECT * FROM `historical-stocks` LIMIT 10', (error,result)=>{
    if (error) throw error;
    res.send(result);
  });  
});

router.get('/best',(req,res)=>{
    connection.query ('SELECT * FROM `historical-stocks` order by Date DESC,High Desc limit 100', (error,result)=>{
      if (error) throw error;
      res.send(result);
    });    
});

module.exports = router;
