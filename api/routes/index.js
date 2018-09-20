var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/v1/dir/politician/:key.json', function (req, res) {

  var key = req.params['key'];

  key = key.replace('politician_be_', '');
  key = key.replace('be_politician_', '');

  db.query("SELECT * from politician WHERE id = ?", key, function (err, rows) {
    if (err) throw err;

    let item = rows[0];

    // Generate thumb
    item.thumb = "http://directory.wecitizens.be/assets/media/politician-thumb/" + item.id + ".jpg";

    res.json(item);
  });
});

router.get('/v1/gps/answer/segment/2018_be_municipal_be_:key.json', function (req, res) {

  var key = req.params['key'];

  if(key.includes('_electoral_list')){

    key = key.replace('_electoral_list', '');

    db.query(`
SELECT
    a.id,
    CONCAT('2018_be_municipal_be_', j.postcode) AS segment_key,
    'electoral_list' AS segment_type,
    CONCAT('be_', j.postcode, '_', lower(replace(replace(j.institution,'! &',''),' ','_'))) AS user_key,
    CONCAT('question_', a.opinion_id) AS question_key,
    CASE
        WHEN a.opinion_answer = 5 THEN 'fully_agree'
        WHEN a.opinion_answer = 4 THEN 'agree'
        WHEN a.opinion_answer = 3 THEN 'no_opinion'
        WHEN a.opinion_answer = 2 THEN 'disagree'
        WHEN a.opinion_answer = 1 THEN 'fully_disagree'
        ELSE 'no_opinion'
    END AS value,
    j.institution as user_name, # added to ease compatibility but should not be part of segments
    a.opinion_received
FROM
    opinions_answers a
        JOIN
    politician_job j ON j.id_politician = a.id_politician
WHERE
    opinion_received > '2018-09-08'
        AND j.num = 1
        AND a.id_politician != 5439 # Jean-Paul
    AND j.postcode = ` + key + `
ORDER BY opinion_received DESC
  `, key, function (err, rows) {
      if (err) throw err;

      let item = rows;

      res.json({data: item});
    });

  } else {
    key = key.replace('_candidate', '');

    db.query(`
  SELECT
    a.id,
    CONCAT('2018_be_municipal_be_', j.postcode) AS segment_key,
    'candidate' AS segment_type,
    CONCAT('be_politician_',a.id_politician) AS user_key,
    CONCAT('question_', a.opinion_id) AS question_key,
    CASE
    WHEN a.opinion_answer = 5 THEN 'fully_agree'
    WHEN a.opinion_answer = 4 THEN 'agree'
    WHEN a.opinion_answer = 3 THEN 'no_opinion'
    WHEN a.opinion_answer = 2 THEN 'disagree'
    WHEN a.opinion_answer = 1 THEN 'fully_disagree'
    ELSE 'no_opinion'
    END AS value
FROM
    opinions_answers a
    JOIN
    politician_job j ON j.id_politician = a.id_politician
WHERE
    opinion_received > '2018-09-08'
    AND j.num = 1
    AND a.id_politician != 5439 # Jean-Paul
    AND j.postcode = ` + key + `
    ORDER BY opinion_received DESC
  `, key, function (err, rows) {
      if (err) throw err;

      let item = rows;

      res.json({data: item});
    });
  }
});

router.get('/v1/vote/election/2018_be_municipal/district/be_:key.json', function (req, res) {

  let key = req.params['key'];

  db.query(`SELECT
    a.id,
    CONCAT('2018_be_municipal_be_', j.postcode) AS segment_key,
    'electoral_list' AS segment_type,
    CONCAT('be_', j.postcode, '_', lower(replace(replace(j.institution,'! &',''),' ','_'))) AS list_key,
    CONCAT('be_politician_', p.id) AS politician_key,
    j.institution,
    CONCAT(p.name, ' ', p.surname) AS full_name,
    pic.full_path as img
FROM
    opinions_answers a
        JOIN
    politician_job j ON j.id_politician = a.id_politician
        JOIN
    politician p ON p.id = a.id_politician
        LEFT JOIN
    politician_photos pic ON pic.id_politician = a.id_politician
WHERE
    opinion_received > '2018-09-08'
        AND j.num = 1
        AND j.postcode = ?
        AND a.id_politician != 5439 # Jean-Paul
GROUP BY j.id_politician
ORDER BY opinion_received DESC`, key, (err, rows) => {

    if(err) {
      throw  err;
    }

    //console.log('ANSWERS', rows);

    let data = {
      "key": "2018_be_municipal_"+key,
      "type": "be_municipal",
      "type_name": "election_type_be_municipal_name",
      "date": "2018-10-14T00:00:00.000Z",
      "main_election_key": "2018_be_municipal",
      "district_key": "be_municipal_"+key,
      "electoral_lists": [],
      "candidates": [],
      "i18n": {
        "en": {
        },
        "nl": {

        },
        "fr": {

        }
      }
    };

    let lists = {};
    let candidates = {};
    let names = {};

    rows.map((item) => {

      let imgUrl = (url) => {
        return url ? url.replace('/home/wecitizens/domains/wecitizens.be/public_html/directory/', 'http://directory.wecitizens.be/') : null
      }

      if(typeof lists[item.list_key] === 'undefined'){
        lists[item.list_key] = {
          "key": item.list_key,
          "name": item.list_key+"_name",
          "img": imgUrl(item.img),
          "candidates": {}
        };
      }

      names[item.list_key+'_name'] = item.institution;

      lists[item.list_key].candidates[item.politician_key] = {
        "order": Object.values(lists[item.list_key].candidates).length + 1,
        "key": item.politician_key
      };

      candidates[item.politician_key] = {
        key: item.politician_key,
        full_name : item.full_name,
        img: imgUrl(item.img)
      };
    });

    data.electoral_lists = Object.values(lists);

    data.electoral_lists.map((item) => {
      return item.candidates = Object.values(item.candidates);
    });

    data.candidates = Object.values(candidates);

    data.i18n.en = names;
    data.i18n.nl = names;
    data.i18n.fr = names;

    res.json(data);
  });
});

router.get('/v1/vote/district.json', function (req, res) {
  //let key = req.params['key'];
  res.json({});
});

/**
 * Just to check if the server response to a ping :-)
 */
router.get('/ping', function(req, res){
  res.send('pong');
});

module.exports = router;
