// HMI Modbus address and function
var dataTypeReduction = require("./dataTypeReduction");

var swap32 = function (val) {
    const result = [];
        let len = val.length - 4;
        while (len >= 0) {
          result.push(val.substr(len, 4));
          len -= 4;
        }
        return result.join('');
}

var tableFnct = {
	// V_1
	"1"	:	function(hexData){
		return dataTypeReduction.toUInt32Div10(swap32(hexData));
	},
	// I_1
	"2"	:	function(hexData){
		return dataTypeReduction.toUInt32Div10(swap32(hexData));
	},
	// kW_1	
	"3"	:	function(hexData){
		return dataTypeReduction.toSInt32Div10(swap32(hexData));
	},
	// kvar_1
	"4"	:	function(hexData){
		return dataTypeReduction.toUInt32Div10(swap32(hexData));
	},
	//kVA_1
	"5"	:	function(hexData){
		return dataTypeReduction.toUInt32Div10(swap32(hexData));
	},
	//PF_1
	"6"	:	function(hexData){
		return dataTypeReduction.toUIntDiv1000(hexData);
	},
	//kWh_1
	"7"	:	function(hexData){
		return dataTypeReduction.toSInt32Div10(swap32(hexData));
	},
	//kvarh_1
	"8"	:	function(hexData){
		return dataTypeReduction.toUInt32Div10(swap32(hexData));
	},
	//kVAh_1
	"9"	:	function(hexData){
		return dataTypeReduction.toSInt32Div10(swap32(hexData));
	},
	//Grid Voltage(AC)
	"10"	:	function(hexData){
		return dataTypeReduction.toUIntDiv10(hexData);
	},
	//Grid Current(AC)
	"11"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//Grid Watt--HL(AC)
	"12"	:	function(hexData){
		return dataTypeReduction.toSInt32Div10(hexData);
	},
	//Grid Frequency
	"13"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//PV1 input DC voltage
	"14"	:	function(hexData){
		return dataTypeReduction.toUIntDiv10(hexData);
	},
	//PV1 input DC currenct
	"15"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//PV1 input power--HL
	"16"	:	function(hexData){
		return dataTypeReduction.toUInt32Div10(swap32(hexData));
	},
	//PV2 input DC voltage
	"17"	:	function(hexData){
		return dataTypeReduction.toUIntDiv10(hexData);
	},
	//PV2 input DC currenct
	"18"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//PV2 input power--HL
	"19"	:	function(hexData){
		return dataTypeReduction.toUInt32Div10(swap32(hexData));
	},
	//Internal Temperature
	"20"	:	function(hexData){
		return dataTypeReduction.toUIntDiv10(hexData);
	},
	//Working Mode
	"21"	:	function(hexData){
		return dataTypeReduction.copyContent(hexData);
	},
	//Error code 1
	"22"	:	function(hexData){
		return dataTypeReduction.copyContent(hexData);
	},
	//Error code 2
	"23"	:	function(hexData){
		return dataTypeReduction.copyContent(hexData);
	},
	//Error code 3
	"24"	:	function(hexData){
		return dataTypeReduction.copyContent(hexData);
	},
	//Error code 4
	"25"	:	function(hexData){
		return dataTypeReduction.copyContent(hexData);
	},
	//Battery Voltage
	"26"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//Battery Temperature
	"27"	:	function(hexData){
		return dataTypeReduction.toUIntDiv10(hexData);
	},
	//Battery Charging Current
	"28"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//Battery Discharging Current
	"29"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//Battery Status
	"30"	:	function(hexData){
		return dataTypeReduction.copyContent(hexData);
	},
	//AC Output Power
	"31"	:	function(hexData){
		return dataTypeReduction.toUInt(hexData);
	},
	//AC Charge Mode
	"32"	:	function(hexData){
		return dataTypeReduction.copyContent(hexData);
	},
	//Number of Battery String
	"33"	:	function(hexData){
		return dataTypeReduction.toUInt(hexData);
	},
	//Charge Max Amp / 1 string
	"34"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//Charge Voltage (MAX)
	"35"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//Charge Voltage (Float)
	"36"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//Over Voltage
	"37"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//Low Voltage
	"38"	:	function(hexData){
		return dataTypeReduction.toUIntDiv100(hexData);
	},
	//Temperature compensation
	"39"	:	function(hexData){
		return dataTypeReduction.copyContent(hexData);
	},
	//Battery state of charge
	"40"	:	function(hexData){
		return dataTypeReduction.toUInt16Div10(hexData);
	},
	//Pack Warning Flag--LH
	"41"	:	function(hexData){
		return dataTypeReduction.copyContent(swap32(hexData));
	},
	//Battery Current--LH
	"42"	:	function(hexData){
		return dataTypeReduction.toSInt32Div1000(swap32(hexData));
	},
	//Battery Voltage--LH
	"43"	:	function(hexData){
		return dataTypeReduction.toUInt32Div1000(swap32(hexData));
	},
	//High Temperature--LH
	"44"	:	function(hexData){
		return dataTypeReduction.toFloat32(swap32(hexData));
	},
	//Battery state of charge
	"45"	:	function(hexData){
		return dataTypeReduction.toUInt16Div10(hexData);
	},
	//Pack Warning Flag--LH
	"46"	:	function(hexData){
		return dataTypeReduction.copyContent(swap32(hexData));
	},
	//Battery Current--LH
	"47"	:	function(hexData){
		return dataTypeReduction.toSInt32Div1000(swap32(hexData));
	},
	//Battery Voltage--LH
	"48"	:	function(hexData){
		return dataTypeReduction.toUInt32Div1000(swap32(hexData));
	},
	//High Temperature--LH
	"49"	:	function(hexData){
		return dataTypeReduction.toFloat32(swap32(hexData));
	},
	//Battery state of charge
	"50"	:	function(hexData){
		return dataTypeReduction.toUInt16Div10(hexData);
	},
	//Pack Warning Flag--LH
	"51"	:	function(hexData){
		return dataTypeReduction.copyContent(swap32(hexData));
	},
	//Battery Current--LH
	"52"	:	function(hexData){
		return dataTypeReduction.toSInt32Div1000(swap32(hexData));
	},
	//Battery Voltage--LH
	"53"	:	function(hexData){
		return dataTypeReduction.toUInt32Div1000(swap32(hexData));
	},
	//High Temperature--LH
	"54"	:	function(hexData){
		return dataTypeReduction.toFloat32(swap32(hexData));
	},
	//Battery state of charge
	"55"	:	function(hexData){
		return dataTypeReduction.toUInt16Div10(hexData);
	},
	//Pack Warning Flag--LH
	"56"	:	function(hexData){
		return dataTypeReduction.copyContent(swap32(hexData));
	},
	//Battery Current--LH
	"57"	:	function(hexData){
		return dataTypeReduction.toSInt32Div1000(swap32(hexData));
	},
	//Battery Voltage--LH
	"58"	:	function(hexData){
		return dataTypeReduction.toUInt32Div1000(swap32(hexData));
	},
	//High Temperature--LH
	"59"	:	function(hexData){
		return dataTypeReduction.toFloat32(swap32(hexData));
	},
	//Battery state of charge
	"60"	:	function(hexData){
		return dataTypeReduction.toUInt16Div10(hexData);
	},
	//Pack Warning Flag--LH
	"61"	:	function(hexData){
		return dataTypeReduction.copyContent(swap32(hexData));
	},
	//Battery Current--LH
	"62"	:	function(hexData){
		return dataTypeReduction.toSInt32Div1000(swap32(hexData));
	},
	//Battery Voltage--LH
	"63"	:	function(hexData){
		return dataTypeReduction.toUInt32Div1000(swap32(hexData));
	},
	//High Temperature--LH
	"64"	:	function(hexData){
		return dataTypeReduction.toFloat32(swap32(hexData));
	}
}
module.exports = tableFnct;