const express = require ('express');
const router = express.Router ();
const API_KEY = 'ETQL2U10444EHPDR';
const axios = require('axios');

const IntraDay_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY`;

const Weekly_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY`;

router.get ('/IntraDay', (req, res) => {
    axios.get(`${IntraDay_URL}&symbol=${req.query.symbol}&interval=1min&apikey=${API_KEY}`).then(val=>{
        res.send(val.data);
    },(err)=>{
        res.send(err);
    });  
  });

  router.get ('/Weekly', (req, res) => {
    axios.get(`${Weekly_URL}&symbol=${req.query.symbol}&apikey=${API_KEY}`).then(val=>{
        res.send(val.data);
    },(err)=>{
        res.send(err);
    });  
  });

  module.exports = router;
  