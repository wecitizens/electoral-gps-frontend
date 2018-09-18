var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/dir/politician/:key.json', function (req, res, next) {

  var key = req.params['key'];

  key = key.replace('politician_be_', '');

  db.query("SELECT * from politician WHERE id = ?", key, function (err, rows, fields) {
    if (err) throw err;

    let item = rows[0];

    // Generate thumb
    item.thumb = "http://directory.wecitizens.be/assets/media/politician-thumb/"+item.id+".jpg";

    res.json(item);
  });
});

module.exports = router;