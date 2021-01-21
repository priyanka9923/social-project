const express = require ('express');
const router = express.Router();
const homeController =require('../controllers/home_controller');

console.log('router added');
router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/userpost',require('./userpost'));

module.exports = router;