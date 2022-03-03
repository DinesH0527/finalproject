const express = require ('express');

const router = express.Router();

const  locationController = require('../Controllers/locations');
const  mealTypeController = require('../Controllers/mealTypes');
const  restaurantController = require('../Controllers/restaurant');
const  menuItemsController = require('../Controllers/items');
const  ordersController    = require('../Controllers/orders');
const   userController    = require('../Controllers/users');
const  paymentGateWayController=require('../Controllers/Paymentgateway')

router.get('/locations',locationController.getLocations);
router.get('/mealTypes',mealTypeController.getMealTypes);
router.get('/restaurants/:locId',restaurantController.getRestaurantByLocation);
router.post('/filter',restaurantController.restaurantFilter);
router.get('/restaurant/:resId' , restaurantController.getRestaurantDetailsById);
router.get('/menuitems/:resId', menuItemsController.getMenuItemsByResId);
router.get('/orders/:uId', ordersController.getOrdersByUserId);
router.post('/usersignup',userController.userSignUp);
router.post('/login' , userController.userLogin);
router.post('/saveorderdetails',ordersController.saveOrderDetails);
router.post('/payment',paymentGateWayController.payment);
router.post('/callback',paymentGateWayController.callback);


module.exports = router;





