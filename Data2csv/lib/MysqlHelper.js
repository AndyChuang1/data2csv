var mysql = require('mysql');
var chem001 = require("./tableFnct");
var json2csv = require('json2csv').parse;

var mysqlConfig = {
    host: "",
    user: "",
    password: "",
    //insecureAuth : true,
    //port : 3306,
    database: ""
};

var dbTableName = "nbiotrawdata";
var mysqlSvr = mysql.createConnection(mysqlConfig);

const SensorNameList = ['serial_num', 'deviceid', 'datetime', 'V_1', 'I_1', 'kW_1', 'kvar_1', 'kVA_1',
    'PF_1', 'kWh_1', 'kvarh_1', 'kVAh_1', 'Grid Voltage(AC)', 'Grid Current(AC)', 'Grid Watt(AC)',
    'Grid Frequency', 'PV1 input DC voltage', 'PV1 input DC current', 'PV1 input power', 'PV2 input DC voltage', 'PV2 input DC current', 'PV2 input power',
    'Internal Temperature', 'Working Mode', 'Error code 1', 'Error code 2', 'Error code 3', 'Error code 4', 'Battery Voltage', 'Battery Temperature', 'Battery Charging Current', 'Battery Discharging Current',
    'Battery Status', 'AC Output Power', 'AC Charge Mode', 'Number for Battery String', 'Charge Max Amp / 1 string', 'Charge Voltage (MAX)', 'Charge Voltage (Float)', 'Over Voltage', 'Low Voltage', 'Temperature compensation',
    'Battery1 state of charge', 'Battery1 Pack Warning Flag', 'Battery1 Current', 'Battery1 Voltage', 'Battery1 High Temperature',
    'Battery2 state of charge', 'Battery2 Pack Warning Flag', 'Battery2 Current', 'Battery2 Voltage', 'Battery2 High Temperature',
    'Battery3 state of charge', 'Battery3 Pack Warning Flag', 'Battery3 Current', 'Battery3 Voltage', 'Battery3 High Temperature',
    'Battery4 state of charge', 'Battery4 Pack Warning Flag', 'Battery4 Current', 'Battery4 Voltage', 'Battery4 High Temperature',
    'Battery5 state of charge', 'Battery5 Pack Warning Flag', 'Battery5 Current', 'Battery5 Voltage', 'Battery5 High Temperature'];
/*  舊式原型繼承
function mysqlHelper() {

}


mysqlHelper.prototype.start = function () {

    mysqlSvr.connect(function (err) {
        if (err) throw err;
        console.log("MySQL server connected");
    });
}

*/


class sqltest {

    start() {
        
        mysqlSvr.connect(function (err) {
            if (err) throw err;
            console.log("MySQL server connected");
        });
    }

    getReport(startday, endday) {
        var sqlCmd = "SELECT serial_num, nbiotid, deviceid, roundno, indexno, DATE_FORMAT(DATE_ADD(datetime,INTERVAL 8 HOUR), '%Y-%m-%d %H:%i:%s')"
            + "as dt, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15` FROM " +
            dbTableName + " where datetime > '" + startday.toLocaleString() + "' and  datetime < '" + endday.toLocaleString() + "'";

        return new Promise((resolve, reject) => {
            mysqlSvr.query(sqlCmd, function (err, result, fields) {
                if (err) reject (err);
                var myDatas = [];
                var bb = {};
                for (let j = 0; j < SensorNameList.length; j++) {
                    bb[SensorNameList[j]] = '';
                }
                myDatas.push(bb);
                console.log("SensorNameList.length = " + SensorNameList.length);
                Object.keys(result).forEach(function (key) {
                    var row = result[key];
                    var indexno = row.indexno;
                    var aa = {};
                    aa.serial_num = row.serial_num;
                    aa.deviceid = row.deviceid;
                    aa.datetime = row.dt;
                    //console.log(row);
                    for (let i = 1; i <= 15; i++ , indexno++) {
                        if (row[i] != 'NA' && row[i] != 'na' && row[i] != null)
                            aa[SensorNameList[indexno + 2]] = chem001[indexno](row[i]);
                    }
                    //console.log("aa=" + JSON.stringify(aa));
                    myDatas.push(aa);
                });
                //console.log("myDatas=" + JSON.stringify(myDatas));
                console.log(myDatas.length)
                if (myDatas.length == 1) {
                    
                    console.log("No data during this date!");
                    reject("No data during this date!")
                    //process.exit();
                } else {
                    const csv = json2csv(myDatas, SensorNameList);
                    resolve(csv);

                }

            })



        })
        
        
    }

}
module.exports = { sqltest };