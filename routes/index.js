var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AIOUTI' });
});

/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'New Asset' });
});

/* POST new page. */
router.post('/new', function(req, res, next) {
  var emp = req.body.emp;
  var serial = req.body.serial;
  var id = req.body.id;

  res.redirect('?emp='+ emp +'&serial=' + serial + '&id=' + id); 
});

module.exports = router;
