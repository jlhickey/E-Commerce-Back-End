const router = require('express').Router();
const apiRouter = require('/api');

router.use('/api, apiRouters);
           
router.use((req, res) =>{
  res.send(wrong route")
});

module.exports = router;
