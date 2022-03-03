const User = require('../Models/users');


exports.userSignUp = (req,res) =>
{
   const { email , password ,firstname , lastname }  = req.body;

   const user = new User({
        email,
        password,
        firstname,
        lastname
    });

    user.save()
    .then(response =>
        {
    
            res.status(200).json({message : "user registered  succesfully" , user: response})
             
        })
      .catch( err => {
        
        res.status(500).json({error : err})
        
    
      })
    
}


exports.userLogin = (req,res) =>

{

const { email , password } = req.body;
User.find({ email: email , password : password })

.then(response =>
  {
  
    if(response.length > 0)
      {

        res.status(200).json({message : "user Authenticated  succesfully" , isAuthenticated : true , user : response})

      }
      else
      {

        res.status(200).json({message : "user not  Authenticated  succesfully" , isAuthenticated : false , user : response})
      }
       
  })

.catch( err => {
  
  res.status(500).json({error : err})
  

})

}




