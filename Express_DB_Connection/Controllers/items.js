const Items = require('../Models/items');

exports.getMenuItemsByResId = (req,res) =>
{
   const { resId }  = req.params;


    Items.find({ restaurantId:resId })
    .then(response =>
        {
    
            res.status(200).json({message : "MenuItems feteched succesfully" , items: response})
             
        })
      .catch( err => {
        
        res.status(500).json({error : err})
        
    
      })
    
}
