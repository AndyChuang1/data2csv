'use strict';
var express = require('express');
var url = require('url');
var router = express.Router();
var { sqltest } = require('../lib/MysqlHelper')
var sqlquery = new sqltest


router.get('/', function (req, res) {
    var qData = url.parse(req.url, true);
    var dt = qData.query.dt;
    var startday = new Date(dt + ' 00:00:00');
    var endday = new Date(dt + ' 00:00:00');
    endday.setDate(startday.getDate() + 1);
    sqlquery.getReport(startday, endday).then(result => {
        //if your did not setHeader response will send string

        //res.setHeader('Content-disposition', 'attachment;' + ' filename=' + dt +'.csv');
        //res.set('Content-Type', 'text/csv');

        
        res.status(200).send(result);
        
    }).catch(error => {
        res.send(error)

    })
    
    
});

module.exports = router;
