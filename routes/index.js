//Require express and the different express routes that are defined
const router = require('express').Router();
const apiRoute = requie\re('/api');

//Set the routes for express to use
router.use('/api', apiRoutes);
router.use((req,res) =>{
  res.send("wrong route")
           });          

module.exports = router;
