const  MealTypes = require('../Models/mealTypes');


exports.getMealTypes = (req,res) =>
{
MealTypes.find()

.then(response =>{

    res.status(200).json({message : "mealtypes feteched succesfully" , mealTypes : response})

  })

  .catch( err =>{
    
    res.status(500).json({error : err})
    
  })
}