const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const  ordersSchema =   new Schema({

name :{

        type :String,
        required:true

       },
       
placedByUserId:{

        type :Number,
        required:true

       }   


}) 

module.exports = mongoose.model('order', ordersSchema , 'orders');





