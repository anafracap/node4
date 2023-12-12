var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,
                        fruits: {
                          a: 'apple',
                          b: 'blueberry',
                          c: 'coconut',
                          d: 'durian',
                          e: 'elderberry'
                        }
                      });
});

module.exports = router;
