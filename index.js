const express = require('express');
const port = 3000;
const cors =require('cors');
const app = express();
const bodyParser = require('body-parser');
// 
require('./db');
require('./models/User');
//
const authRoutes = require('./routes/authRoutes');
const  requireToken=require('./middlewares/AuthTokenRequired')
//
app.use(bodyParser.json());
app.use(authRoutes);
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST"]
}))
//

app.get('/',requireToken,(req,res)=>{
    console.log(req.user);
    res.send(req.user);
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})