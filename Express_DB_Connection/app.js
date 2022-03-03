const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const app = express();

//cors - croos origin resource sharing

const host = '0.0.0.0';
const port = '4040';
const dburl = 'mongodb://127.0.0.1:27017/zomatoprac_17';
const serverDBURL= 'mongodb+srv://zm_clone_user:zomatomongodb@cluster0.cj1og.mongodb.net/EXPRESS_DB_Collections?retryWrites=true&w=majority';

app.use(cors());
app.options('*' , cors());
app.use(express.json());


app.use('/' , router);

mongoose.connect(serverDBURL,{ 
   useNewUrlParser: true ,  useUnifiedTopology: true 
 })
   .then(res => 
       {

    app.listen(port , host , () =>
        {

        console.log(`server is running at  ${host} : ${port} `)
        
        });
        
   })
.catch( err => console.log(err) );




















