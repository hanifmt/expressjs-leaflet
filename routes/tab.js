const express = require('express');
const router = express.Router();

router.post('/', function(req, res){
  const data = JSON.parse(req.body.data)
  res.render(req.body.file,{
    data: data
  })
})

module.exports = router;