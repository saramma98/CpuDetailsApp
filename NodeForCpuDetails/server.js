const express = require('express');
const app = express();

const CpuDetController= require('./Controller/CpuDetailsControler');

const cpuDets = new CpuDetController();

const cors = require('cors')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', cpuDets.getCpuDet);

 var server =app.listen(8080, function(){

    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

 }
 )
