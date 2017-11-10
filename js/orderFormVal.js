/*  orderFormVal.js */
	var nbrVisits = 0;
	
function valForm() {
//	alert("Inside valForm. First Name: " + document.form1.fName.value );
//	console.log("valForm nbrVisits: " + nbrVisits);
	nbrVisits++;
//	console.log("valForm nbrVisits: " + nbrVisits);
    var vfName = document.form1.fName.value;
    var vlName = document.form1.lName.value;
    var vaddress = document.form1.address.value;
    var vcity = document.form1.city.value;
    var vstate = document.form1.state.value;
	var vzipCode = document.form1.zipCode.value;
    var vccNbr = document.form1.ccNbr.value;
	var vccSec = document.form1.ccSec.value;
	if (vccSec == "") {
        document.getElementById('msg9').innerHTML = "Input Required";
		document.form1.ccSec.focus();
    }	
	if (vccNbr == "") {
        document.getElementById('msg8').innerHTML = "Input Required";
		document.form1.ccNbr.focus();
    } 
	if (vzipCode == "") {
        document.getElementById('msg6').innerHTML = "Input Required";
		document.form1.zipCode.focus();
    }
	if (vstate == "") {
        document.getElementById('msg5').innerHTML = "Input Required";
		document.form1.state.focus();
    } 
	if (vcity == "") {
        document.getElementById('msg4').innerHTML = "Input Required";
		document.form1.city.focus();
    } 
	if (vaddress == "") {
        document.getElementById('msg3').innerHTML = "Input Required";
		document.form1.address.focus();
	}  
	if (vlName == "") {
        document.getElementById('msg2').innerHTML = "Input Required";
		document.form1.lName.focus();
	} 
 	if (vfName == "") {
        document.getElementById("msg1").innerHTML = "Input Required";
		document.form1.fName.focus();
    } 
	if (vfName == ""||vlName == ""||vAddress == ""||vCity == ""||vState == ""||vZipCode == ""||vccNbr == ""||vccSec == "") {
		loadForm();
		return false;
	} else { 
		alert("Your order will be processed");
		return false; 
	}
}

function loadForm() {
//	alert("Inside valForm. First Name: " + document.form1.fName.value );
//	console.log("form field-- vfName: " + vfName + " vlName: " + vlName);
//	console.log("loadForm nbrVisits: " + nbrVisits);
	getStorage();
	if (nbrVisits == 0) {
		nbrVisits++;
		document.getElementById("ccVisaRadio").defaultChecked = "true";
	} else { return false; }
	
	if (document.getElementById("fName").innerHTML == "") {
		document.form1.fName.focus();
	} else if (document.getElementById("lName").innerHTML == "") {
		document.form1.lName.focus();
	} else if (document.getElementById("address").innerHTML == "") {
		document.form1.address.focus();
	} else if (document.getElementById("city").innerHTML == "") {
		document.form1.city.focus();
	} else if (document.getElementById("state").innerHTML == "") {
		document.form1.state.focus();
	} else if (document.getElementById("zipCode").innerHTML == "") {
		document.form1.zipCode.focus();
	} else if (document.getElementById("ccNbr").innerHTML == "") {
		document.form1.ccNbr.focus();
	} else if (document.getElementById("ccSec").innerHTML == "") {
		document.form1.ccSec.focus();
	} 
}
function setStorage() {
	if (localStorage !== null ) {
		localStorage.setItem('frm1.fName', JSON.stringify(document.form1.fName.value));
		localStorage.setItem('frm1.lName', JSON.stringify(document.form1.lName.value));
		localStorage.setItem('frm1.address', JSON.stringify(document.form1.address.value));
		localStorage.setItem('frm1.city', JSON.stringify(document.form1.city.value));
		localStorage.setItem('frm1.state', JSON.stringify(document.form1.state.value));
		localStorage.setItem('frm1.zipCode', JSON.stringify(document.form1.zipCode.value));
//		localStorage.setItem('frm1.ccType', JSON.stringify(document.form1.ccType.value));
		localStorage.setItem('frm1.ccNbr', JSON.stringify(document.form1.ccNbr.value));
		localStorage.setItem('frm1.ccSec', JSON.stringify(document.form1.ccSec.value));
	} 
}

function getStorage() {
	if (localStorage !== null ) {
		document.getElementById("fName").innerHTML = localStorage.getItem('frm1.fName');
		document.getElementById("lName").innerHTML = localStorage.getItem('frm1.lName');
		document.getElementById("address").innerHTML = localStorage.getItem('frm1.address');
		document.getElementById("city").innerHTML = localStorage.getItem('frm1.city');
		document.getElementById("state").innerHTML = localStorage.getItem('frm1.state');
		document.getElementById("zipCode").innerHTML = localStorage.getItem('frm1.zipCode');
		document.getElementById("ccNbr").innerHTML = localStorage.getItem('frm1.ccNbr');
		document.getElementById("ccSec").innerHTML = localStorage.getItem('frm1.ccSec');
		if (localStorage.getItem('frm1.ccType') == "Visa") {
			document.getElementById("ccVisaRadio").checked;
		} else if (localStorage.getItem('frm1.ccType') == "Mastercard") {
			document.getElementById("ccMCRadio").checked;			
		}
	}
}
	
function valCol(fld, msg) {
//	console.log("fld = " + vFld + " msg = " + vMsg);
	var vFld = fld;
	var vMsg = msg;
//	console.log("fld passed = " + vFld + "  msg = " + vMsg);
//	console.log("valCol nbrVisits: " + nbrVisits);
	setStorage();
	loadForm();
	switch(vFld) {
		case "fName":
			if (document.getElementById(vFld).innerHTML == null || document.getElementById(vFld).innerHTML == " ") {
				document.getElementById(vFld).innerHTML = "Enter First Name";
				document.form1.fName.focus();
			} else { 
				document.getElementById(msg).innerHTML = " ";
				document.form1.lName.focus();
			}
			break;
		case "lName":
			if (document.getElementById(vFld).innerHTML == null || document.getElementById(vFld).innerHTML == " ") {
				document.getElementById("msg2").innerHTML = "Enter Last Name";
				document.form1.lName.focus();
			} else { 
				document.getElementById(msg).innerHTML = " ";
				document.form1.address.focus();
			}
			break;
		case "address":
			if (document.getElementById(vFld).innerHTML == null || document.getElementById(vFld).innerHTML == " ") {
				document.getElementById("msg3").innerHTML = "Enter Address";
				document.form1.address.focus();
			} else { 
				document.getElementById(msg).innerHTML = " ";
				document.form1.city.focus();
			}
			break;
		case "city":
			if (document.getElementById(vFld).innerHTML == null || document.getElementById(vFld).innerHTML == " ") {
				document.getElementById("msg4").innerHTML = "Enter City";
				document.form1.city.focus();
			} else {
				valCity();
			}
			break;
		case "state":
			if (document.getElementById(vFld).innerHTML == null || document.getElementById(vFld).innerHTML == " ") {
				document.getElementById("msg5").innerHTML = "Enter State";
				document.form1.state.focus();
			} else {
				valState(); 
			}
			break;
		case "zipCode":
			if (document.getElementById(vFld).innerHTML == null || document.getElementById(vFld).innerHTML == " ") {
				document.getElementById("msg6").innerHTML = "Enter Zip Code";
				document.form1.zipCode.focus();
			} else { 
				document.getElementById(msg).innerHTML = " ";
				document.form1.ccNbr.focus();
			}
			break;
		case "ccType":
			findSelected();
			break;
		case "ccNbr":
			if (document.getElementById(vFld).innerHTML == null || document.getElementById(vFld).innerHTML == " ") {
				document.getElementById("msg8").innerHTML = "Enter Credit Card Number";
				document.form1.ccNbr.focus();
			} else {
				valCCNbr();
			}
			break;
		case "ccSec":
			if (document.getElementById(vFld).innerHTML == null || document.getElementById(vFld).innerHTML == " " ) {
				document.getElementById("msg9").innerHTML = "Enter Security Code";
				document.form1.ccSec.focus();
			} else { 
				document.getElementById(msg).innerHTML = " ";
				document.form1.submit.focus();
			}
			break;
		default:
//			console.log('Invalid fld passed: ' + fld);
			alert("Invalid fld passed. Contact application support.");
	}	
	
}

function valCity() {
//	var x = document.form1.city.value.trim();
	var x = document.getElementById("city").innerHTML;
	var testPattern = /^([a-zA-Z])$/;
	var xCity = testPattern.test(x);
	alert("city = " + x + " Pattern test =  " + xCity);
	if (xCity == true) {
		document.getElementById('msg4').innerHTML = " ";
	} else {
		document.getElementById('msg4').innerHTML = "Invalid City";
		document.form1.city.focus();
	}
	loadForm();
	nbrVisits++;
	return false;
}

function valState() {
	var x = document.form1.state.value.trim();
//	alert("fstate = " + x);
	var stAbbrevUp = x.toUpperCase();
	var sAbbrev = stAbbrevUp.trim();
	var abbrevPattern = /^([a-zA-Z]{2})$/;
//	alert("state = " + x + " Formatted = " + sAbbrev);
	var xState = abbrevPattern.test(sAbbrev);
//	alert("Pattern match = " + xState);
	if (xState == true) {
		document.getElementById('msg5').innerHTML = " ";
	} else {
		document,getElementById('msg5').innerHTML = "Invalid State Abbreviation";
		document.form1.state.value = sAbbrev;
		document.form1.state.focus();
	}
	loadForm();
	nbrVisits++;
	return false;
}

function findSelected(){
	var ccRB = document.getElementsByClassName("ccRadio");
	var cc = "";
	for (i=0; i < ccRB.length; i++) {
		if (ccRB[i].checked.checked) {
			if (i == 0) {
				localStorage.setItem("frm1.ccType", "Visa");
			} else if (i == 1) {
				localStorage.setItem("frm1.ccType", "Mastercard");
			} else {
//				console.log=("No Credit Card Type checked");
				document.getElementById("msg7").innerHTML = "Select Valid Credit Card Type"
				document.form1.ccVisaRadio.focus();
			}
		//			return cc[i].value
		}
	}
}

function valCCNbr() {
	var x = document.form1.ccNbr.value.trim();
//	alert("form cc nbr = " + x);
//	var cardnoPattern = /^([0-9]{4}\s?[0=9]{4}\s?[0-9]{4}\s?[0-9]{4)$/; 
	findSelected();
	if (localStorage !== null ) {
		var cc = localStorage.getItem('ccType');
	} else {
		console.log("No Credit Card Type Found in storage.  Defaulted to Visa.");
		var cc = "Visa";
	}
	if (cc == "Visa") {
		var cardnoPattern = /^\d{4}\ \d{4}\ \d{4}\ \d{4}$/;
		var cardnoPattern2 = /^([0-9]{16})$/; 
		var cardnoPattern3 = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;
//	alert.log('cardnoPattern = ' + cardnoPattern + "  #2 = " + cardnoPattern2 + "  #3 = " + cardnoPattern3);
		var xNbr = cardnoPattern.test(x);
		var xNbr2 = cardnoPattern2.test(x);
		var xNbr3 = cardnoPattern3.test(x);
//	alert("xNbr = " + xNbr + "  xNbr2 = " + xNbr2 + " xNbr3 = " + xNbr3);
		if(xNbr == true || xNbr2 == true || xNbr3 == true)  {  
			document.getElementById('msg8').innerHTML = " ";
			document.form1.ccNbr.value = x;		
			document.form1.ccNbr.focus();
		} else {  
			document.getElementById('msg8').innerHTML = "Invalid credit card number";
			document.form1.ccNbr.value = x;		
			document.form1.ccNbr.focus();
		}
	} else if (cc == "Mastercard") {
		var cardnoPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
		var cardnoPattern2 = /^5[1-5][0-9]{14}$/; 
		var xNbr = cardnoPattern.test(x);
		var xNbr2 = cardnoPattern2.test(x);	
		if(xNbr == true || xNbr2 == true)  {  
			document.getElementById('msg8').innerHTML = " ";
			document.form1.ccNbr.value = x;		
			document.form1.ccNbr.focus();
		} else {  
			document.getElementById('msg8').innerHTML = "Invalid credit card number";
			document.form1.ccNbr.value = x;		
			document.form1.ccNbr.focus();
		}
	}
	loadForm();
	nbrVisits++;
	return false;
}

function loadDefault() {
		document.getElementById("city").innerHTML = "Phoenix";
		document.getElementById("state").innerHTML = "AZ";
		for (i=i; i < 10; i++) {
		document.getElementById ("msg[i]").innerHTML = " ";
		}
}
/*
//	alert("HTML ageMsg before: " + document.getElementById('ageMsg').innerHTML);
//Validate age is between 1 and 118
function valAge() {
	var x = parseInt(document.form1.age.value); 
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

		return false;
	
}
*/
// Change text style option element tag after verifying valid option provided. 

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