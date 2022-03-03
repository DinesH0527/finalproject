const mongoose = require('mongoose');

//Intizing the mongoose schema

const Schema = mongoose.Schema;

//registring the location id scehma
const locationSchema   =   new Schema({

name :{

        type :String,
        required:true

       },
city_id:{

        type :Number,
        required:true

       },     
location_id: {
          
       type: Number,
       required:true

        },
        

city:  {

     type :String,
     required:true
        
     },
country_name:{

    type :String,
    required:true
        
   }

})

module.exports = mongoose.model('location' , locationSchema , 'Locations');//exporting the moduile





