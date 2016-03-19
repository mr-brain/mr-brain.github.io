JavaScript JSON date conversion
---

In JavaScript's Date type, after JSON.stringify() will return ISO-8601 format (yyyy-MM-ddTHH: mm: ss.fffZ); interestingly, the JSON.parse() return a string, and not restored to the original Date type.

ISO-8601 format will revert back to the Date of demand, to achieve through JSON.parse() function of Reviver. Examples are as follows:

	var dateReviver = function (key, value) {
	    var a;
	    if (typeof value === 'string') {
	        a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
	        if (a) {
	            return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
	        }
	        a = /^\/Date\((.*?)\)\/$/.exec(value);
	        if (a) {
	          return new Date(parseInt(a[1]));
	        }
	    }
	    return value;
	};

We can invoke it as following:

	var strJson = "\"2014-12-25T07:27:13.851Z\"";
	var result = JSON.parse(strJson, dateReviver);
	
	strJson = "\""/Date(1330444800000)/\"";
	result = JSON.parse(strJson, dateReviver);