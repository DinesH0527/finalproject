const Orders = require('../Models/orders');

exports.saveOrderDetails = (req, res) =>
{
    const { name , placedBy, placedByUserId , placedOn , items , amount , restaurantId} = req.body;
    const user =  new User({
        name,
        placedBy,
        placedByUserId,
        placedOn,
        items,
        amount,
        restaurantId
    })

    order.save()
     .then(response =>{

      {res.status(200).json({message: "Updated order is saved succesfully", order : response});}

          })

     .catch( err => {
         
        res.status(500).json({error:err})

         })
}

exports.getOrdersByUserId = (req,res) =>{

    const { uId } = req.params;

    Orders.find({ placedByUserId: uId })
      .then(
          response => 
          {
          
          res.status(200).json({Message: "Fetched orders", orders: response})

           })
      .catch(err =>
         {
        
        res.status(500).json({error: err})

        })
}
