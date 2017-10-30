/*  orderFormVal.js */

/*
function validateInput() {
    var vage = document.form1.age.value;
    var vssn = document.form2.fssn.value;
    var vccnbr = document.form3.fccnbr.value;
    var vdate = document.form4.fdate.value;
    var vstate = document.form5.fstate.value;
	var vdollar = document.form6.fdollar.value;
	if (vdollar == "") {
        document.getElementById('dollarMsg').innerHTML = "Input Required";
		document.form6.fdollar.focus();
    }
    if (vstate == "") {
        document.getElementById('stateMsg').innerHTML = "Input Required";
		document.form5.fstate.focus();
	}	
	if (vdate == "") {
        document.getElementById('dateMsg').innerHTML = "Input Required";
		document.form4.fdate.focus();
	}	
    if (vccnbr == "") {
        document.getElementById('ccnbrMsg').innerHTML = "Input Required";
		document.form3.fccnbr.focus();
    }
	if (vssn == "") {
        document.getElementById('ssnMsg').innerHTML = "Input Required";
		document.form2.fssn.focus();
    }	
    if (vage == "") {
        document.getElementById('ageMsg').innerHTML = "Input Required";
		document.form1.age.focus();
    }
    return false;
}
*/

//Validate age is between 1 and 118
function valCol(frm, fld, msg) {
	var vFrm = document.getElementById('frm');
	var vFld = document.getElementById('fld');
	var vMsg = msg;
	console.log("Frm = " + vFrm + " fld = " + vFld + " msg = " + vMsg);
	var vValue = document.form[frm][fld].value;
	console.log("value = " + vValue);
//	alert("HTML ageMsg before: " + document.getElementById('ageMsg').innerHTML);
/*
	case form:
		var x = parseInt(document.[form].[fld].value); 
		if (isNaN(x)) {
			document.[form].[msg].innerHTML = "Numeric age required.";
			document.[form].[fld].value = x;
			document.[form].[fld].focus();
		} else if (x < 0 || x > 118) {
				document.[form].[msg].innerHTML = "Invalid Age";
				document.[form].[fld].value = x;
				document.[form].[fld].focus();
		} else if (x > -1 && x < 119) {
	//			console.log("x >= 0");
				document.[form].[msg].innerHTML = " ";
				document.[form].[fld].value = x;
				document.[form].[fld].focus();
				}
*/		
		return false;
	
}
// Test length of the field
/*	else if (x.length==0) {
			console.log("No age entered " + x);
			document.getElementById('ageMsg').innerHTML = "No age entered";
			document.getElementById('frmMsg').innerHTML = " ";
			document.form1.age.value = "";
			document.form1.age.focus();
			return false;
	} */


//Validate Social Security Number entered in proper format
/*
function valSSN() {
	var x = document.form2.fssn.value.trim();
	console.log('ssn = ' + x);
    var  ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
	var xPattern = ssnPattern.test(x);
	console.log('ssn pattern= ' + xPattern);
	if (xPattern == true) {
		document.getElementById('ssnMsg').innerHTML = " ";
		document.form2.fssn.value = x;
		document.form3.fccnbr.focus();
	} else {
		document.getElementById('ssnMsg').innerHTML = "Invalid ssn";
		document.form2.fssn.value = x;
		document.form2.fssn.focus();
	}
	return false;
}


// Change text style option element tag after verifying valid option provided. 
function valCCNbr() {
	var x = document.form3.fccnbr.value.trim();
//	alert("form cc nbr = " + x);
//	var cardnoPattern = /^([0-9]{4}\s?[0=9]{4}\s?[0-9]{4}\s?[0-9]{4)$/; 
	var cardnoPattern = /^\d{4}\ \d{4}\ \d{4}\ \d{4}$/;
	var cardnoPattern2 = /^([0-9]{16})$/; 
//	alert.log('cardnoPattern = ' + cardnoPattern);
//	var ccNbr = x.replace(/-/g, " ");
//	alert("ccNbr = " + ccNbr);
	var xNbr = cardnoPattern.test(x);
	var xNbr2 = cardnoPattern2.test(x);
//	alert("xNbr = " + xNbr + "  xNbr2 = " + xNbr2);
	if(xNbr == true || xNbr2 == true)  {  
		document.getElementById('ccnbrMsg').innerHTML = " ";
		document.form3.fccnbr.value = x;		
		document.form4.fdate.focus();
    } else {  
		document.getElementById('ccnbrMsg').innerHTML = "Invalid credit card number";
		document.form3.fccnbr.value = x;	
		document.form3.fccnbr.focus();
    }  
	return false;
}


function valDate(fdate) {
	var x = document.form4.fdate.value;
	x = x.trim();
//	alert("fdate = " + x);
    // regular expression to match required date format
    var datePattern1 = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	var datePattern2 = /^\d{1}\/\d{1}\/\d{4}$/;
	var datePattern3 = /^\d{2}\/\d{2}\/\d{4}$/;
	var datePattern4 = /^\d{2}\/\d{1}\/\d{4}$/;	
	var datePattern5 = /^\d{1}\/\d{2}\/\d{4}$/;		
	
//	var xDate = datePattern1.test(x);
	var vMonth, vDay;
    if (datePattern1.test(x)) {
//      alert("valid data format = " + x);
    }
	if (datePattern2.test(x)) {
				vMonth = x.substring(0,1);
				vDay = x.substring(2,3);
//				alert("2:  Month: " + vMonth  + "  vDay " + vDay); 
	} else if (datePattern3.test(x)) {
				vMonth = x.substring(0,2);
				vDay = x.substring(3,5);
//				alert("3:  Month: " + vMonth  + "  vDay " + vDay); 				
	} else if (datePattern4.test(x)) {
				vMonth = x.substring(0,2);
				vDay = x.substring(3,4);
//				alert("4:  Month: " + vMonth  + "  vDay " + vDay); 
	} else if (datePattern5.test(x)) {
				vMonth = x.substring(0,1);
				vDay = x.substring(2,4);
//				alert("5:  Month: " + vMonth  + "  vDay " + vDay); 
	} else {	
		document.getElementById('dateMsg').innerHTML = "Invalid date format.  Use m/d/yyyy.";
		document.form4.fdate.value = x;	
		document.form4.fdate.focus();
		return false;
	}
    // month value between 1 and 12\    
	// Day between 1 and 31 -- not accounting for months wiht 28, 29, or 30
	
//	alert("Month: " + vMonth + "  Day: " + vDay);

    if (vMonth < 1 || vMonth > 12) {
//		alert("inside vMonth error");
		document.getElementById('dateMsg').innerHTML = "Invalid month.";
		document.form4.fdate.value = x;	
		document.form4.fdate.focus();
	} else if (vDay < 1 || vDay > 31) {
//		alert("Invalid value for day: " + regs[1]);
		document.getElementById('dateMsg').innerHTML = "Invalid day of the month.";
		document.form4.fdate.value = x;	
		document.form4.fdate.focus();
    } else {
		document.getElementById('dateMsg').innerHTML = " ";
		document.form4.fdate.value = x;	
		document.form5.fstate.focus();	
	}
    return false;
}	


function valState() {
	var x = document.form5.fstate.value.trim();
//	alert("fstate = " + x);
	var stAbbrevUp = x.toUpperCase();
	var sAbbrev = stAbbrevUp.trim();
	var abbrevPattern = /^([a-zA-Z]{2})$/;
//	alert("state = " + x + " Formatted = " + sAbbrev);
	var xState = abbrevPattern.test(sAbbrev);
//	alert("Pattern match = " + xState);
	if (xState == true) {
		document.getElementById('stateMsg').innerHTML = " ";
		document.form5.fstate.value = sAbbrev;
		document.form6.fdollar.focus();
	} else {
		document,getElementById('stateMsg').innerHTML = "Invalid State Abbreviation";
		document.form5.fstate.value = sAbbrev;
		document.form5.fstate.focus();
	}
	return false;
}

function valDollar() {
    var vdollar = document.form6.fdollar.value.trim();
//  alert("vdollar amt = " + vdollar + " length of nbr = " + vdollar.length);	
	var dollarPattern = /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/;
    var xDollar = dollarPattern.test(vdollar);
//	alert("pattern check = " + xDollar);
	if (xDollar == true) {
		document.getElementById('dollarMsg').innerHTML = " ";
		document.form6.fdollar.value = vdollar;
	} else {
		document.getElementById('dollarMsg').innerHTML = "Invalid dollar amount";
		document.form6.fdollar.value = vdollar;	
		document.form6.fdollar.focus();
	}
	return false;
}
*/

//	document.write(output);  /* document.write may write over entire page */