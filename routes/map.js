var express = require('express');
var router = express.Router();

/* GET map page. */
router.get('/', function(req, res, next) {
  res.render('map', { 
    title: 'Map', manhole: [[51.505, -0.09],[51.505, -0.08]]
  });
});

/* GET map page. */
router.post('/sidebar', function(req, res, next) {
  res.render('sidebar', { 
    title: 'Sidebar',data: req.body.data 
  });
});

module.exports = router;
