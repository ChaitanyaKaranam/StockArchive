const express = require ('express');
const app = express();
require('./models/stocks-archive-dbmodel');
const databaseAPI = require('./routes/database-api');
const realTimeAPI = require('./routes/alphavantage-api');
const cors = require('cors');

app.get('/',(req,res)=>{
    res.send('Hello');
});

app.listen(5000,()=>{
    console.log('Server started at port 5000...')
});

app.use(cors());

app.use('/api/database',databaseAPI);
app.use('/api/realtime',realTimeAPI);
