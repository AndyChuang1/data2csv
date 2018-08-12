// data type reducing function

var dtReducing = {
	toUInt				:	function(hexData){
	    if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readUInt16BE(0);		// UINT
		else
		    return 'ErrorFormat';
	},
	toUIntDiv10			:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readUInt16BE(0)/10;		// UINT
		else
		    return 'ErrorFormat';
	},
	toUIntDiv100		:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readUInt16BE(0)/100;	// UINT
		else
		    return 'ErrorFormat';
	},
	toUIntDiv1000		:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readUInt16BE(0)/1000;	// UINT
		else
		    return 'ErrorFormat';
	},
	toUInt16				:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readUInt16BE(0);		// UINT
		else
		    return 'ErrorFormat';
	},
	toUInt16Div10			:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readUInt16BE(0)/10;		// UINT
		else
		    return 'ErrorFormat';
	},
	toUInt16Div100		:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readUInt16BE(0)/100;	// UINT
		else
		    return 'ErrorFormat';
	},
	toUInt16Div1000		:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readUInt16BE(0)/1000;	// UINT
		else
		    return 'ErrorFormat';
	},
	toUInt32		:	function(hexData){
		if(hexData.length == 8)
		    return	Buffer(hexData,'hex').readUInt32BE(0);		// UINT32
		else
		    return 'ErrorFormat';
	},
	toUInt32Div10		:	function(hexData){
		if(hexData.length == 8)
		    return	Buffer(hexData,'hex').readUInt32BE(0)/10;	// UINT32
		else
		    return 'ErrorFormat';
	},
	toUInt32Div100		:	function(hexData){
		if(hexData.length == 8)
		    return	Buffer(hexData,'hex').readUInt32BE(0)/100;	// UINT32
		else
		    return 'ErrorFormat';
	},
	toUInt32Div1000		:	function(hexData){
		if(hexData.length == 8)
		    return	Buffer(hexData,'hex').readUInt32BE(0)/1000;	// UINT32
		else
		    return 'ErrorFormat';
	},
	toSInt		:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readIntBE(0);			// SINT
		else
		    return 'ErrorFormat';
	},
	toSIntDiv10		:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readIntBE(0)/10;		// SINT
		else
		    return 'ErrorFormat';
	},
	toSIntDiv100		:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readIntBE(0)/100;		// SINT
		else
		    return 'ErrorFormat';
	},
	toSIntDiv1000		:	function(hexData){
		if(hexData.length == 4)
		    return	Buffer(hexData,'hex').readIntBE(0)/1000;	// SINT
		else
		    return 'ErrorFormat';
	},
	toSInt32		:	function(hexData){
		if(hexData.length == 8)
		    return	Buffer(hexData,'hex').readInt32BE(0);		// SINT32
		else
		    return 'ErrorFormat';
	},
	toSInt32Div10		:	function(hexData){
		if(hexData.length == 8)
		    return	Buffer(hexData,'hex').readInt32BE(0)/10;	// SINT32
		else
		    return 'ErrorFormat';
	},
	toSInt32Div100		:	function(hexData){
		if(hexData.length == 8)
		    return	Buffer(hexData,'hex').readInt32BE(0)/100;	// SINT32
		else
		    return 'ErrorFormat';
	},
	toSInt32Div1000		:	function(hexData){
		if(hexData.length == 8)
		    return	Buffer(hexData,'hex').readInt32BE(0)/1000;	// SINT32
		else
		    return 'ErrorFormat';
	},
	toFloat32			:	function(hexData){
		if(hexData.length == 8)
		    return	Buffer(hexData,'hex').readFloatBE(0);		// Float32
		else
		    return 'ErrorFormat';
	},
	copyContent	:	function(hexData){
		return	hexData;									// copy content
	}
}
module.exports = dtReducing;