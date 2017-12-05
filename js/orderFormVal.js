/*  orderFormVal.js */
//	Set Global Defaults
	var nbrVisits = 0;
	var i = 0;
	var vCart;
	vCartCnt = 0;
function initForm() {
//	alert("Inside valForm. First Name: " + document.form1.fName.value );
//	console.log("initForm form field-- vfName: " + vfName + " vlName: " + vlName);
//	console.log("initForm loadForm nbrVisits: " + nbrVisits);
	getStorage();
	getSCart();
	if (nbrVisits > 0) {
		return false;
	} 
	nbrVisits++;
	/*
	if (localStorage != null) {
		localStorage.removeItem("frm1.fName");
		localStorage.removeItem("frm1.lName");
		localStorage.removeItem("frm1.address");
		localStorage.removeItem("frm1.city");
		localStorage.removeItem("frm1.state");
		localStorage.removeItem("frm1.zipCode");		
	}
	*/
	// Set focus
	if (document.form1.fName.value.trim() == "" ) {
		document.getElementById("fName").focus();
	} else if (document.form1.lName.value.trim() == "") {
		document.getElementById("lName").focus();
	} else if (document.form1.address.value.trim() == "") {
		document.getElementById("address").focus();
	} else if (document.form1.city.value.trim() == "") {
		document.getElementById("city").focus();
	} else if (document.form1.state.value.trim() == "") {
		document.getElementById("state").focus();
	} else if (document.form1.zipCode.value.trim() == "") {
		document.getElementById("zipCode").focus();
	} else if (document.form1.ccNbr.value.trim() == "") {
		document.getElementById("ccNbr").focus();
	} else if (document.form1.ccSec.value.trim() == "") {
		document.getElementById("ccSec").focus();
	} 
}

function loadForm() {
	//	Load localStorage values
	if (localStorage !== null && localStorage.getItem("fName")) {
		document.form1.fName.value = JSON.parse(localStorage.getItem("fName"));
		console.log("loadForm fName = " + localStorage.getItm("fName"));
	}
/*	if (localStorage !== null && localStorage.getItem("frm1.lName")) {
		document.form1.lName.value = localStorage.getItem("frm1.lName");
	} 
	if (localStorage !== null && localStorage.getItem("frm1.address")) {
		document.form1.address.value = localStorage.getItem("frm1.address");
	}
	if (localStorage !== null && localStorage.getItem("frm1.city")) {
		document.form1.city.value = localStorage.getItem("frm1.city");
	}
	if (localStorage !== null && localStorage.getItem("frm1.state")) {
		document.form1.state.value = localStorage.getItem("frm1.state");
	}
	if (localStorage !== null && localStorage.getItem("frm1.zipCode")) {
		document.form1.zipCode.value = localStorage.getItem("frm1.zipCode");
	} 
	if (localStorage !== null && localStorage.getItem("frm1.ccType")) {
//		var vccType = localStorage.getItem("frm1.ccType");
//		console.log("loadForm vccType = " + vccType);
		if (vccType == "VISA") {
			document.getElementById("ccRadio").defaultChecked = "true";
			document.getElementById("ccMCRadio").defaultChecked = "false";
		} else if (vccType == "MC") {
			document.getElementById("ccMCRadio").defaultChecked = "true";
			document.getElementById("ccVisaRadio").defaultChecked = "false";
		} else {
			document.getElementById("ccVisaRadio").defaultChecked = "true";	
		}
	} 
*/
}

function setStorage() {
	if (localStorage !== null ) {
		localStorage.setItem('frm1.fName', JSON.stringify(document.form1.fName.value));
		localStorage.setItem('frm1.lName', JSON.stringify(document.form1.lName.value));
		localStorage.setItem('frm1.address', JSON.stringify(document.form1.address.value));
		localStorage.setItem('frm1.city', JSON.stringify(document.form1.city.value));
		localStorage.setItem('frm1.state', JSON.stringify(document.form1.state.value));
		localStorage.setItem('frm1.zipCode', JSON.stringify(document.form1.zipCode.value));
		checkRadio();
/*  not stored for security reasons
		localStorage.setItem('frm1.ccNbr', JSON.stringify(document.form1.ccNbr.value));
		localStorage.setItem('frm1.ccSec', JSON.stringify(document.form1.ccSec.value));
*/
	} 
}

function getStorage() {
	if (localStorage !== null ) {
		document.form1.fName.value = JSON.parse(localStorage.getItem('frm1.fName'));
		document.form1.lName.value = JSON.parse(localStorage.getItem('frm1.lName'));
		document.form1.address.value = JSON.parse(localStorage.getItem('frm1.address'));
		document.form1.city.value = JSON.parse(localStorage.getItem('frm1.city'));
		document.form1.state.value = JSON.parse(localStorage.getItem('frm1.state'));
		document.form1.zipCode.value = JSON.parse(localStorage.getItem('frm1.zipCode'));
/*  not stored for security reasons
		document.form1.ccNbr.value = JSON.parse(localStorage.getItem('frm1.ccNbr'));
		document.form1.ccNbr.value = JSON.parse(localStorage.getItem('frm1.ccNbr'));
*/
		if (localStorage.getItem('frm1.ccType') == "VISA") {
			document.form1.ccRadio[0].checked = checked;
		} else if (localStorage.getItem('frm1.ccType') == "MC") {
			document.form1.ccRadio[1].checked = checked;			
		} 
	}
}

function getSCart() {
	if (localStorage !== null && localStorage.getItem('sCart')) {
		vCart = JSON.parse(localStorage.getItem('sCart'));
		vCartCnt = vCart.length;
	} else { 
		alert("No Shopping Cart found.  Click Continue Shopping to add items to your cart."); 
	}
}
	
function valCol(fld, msg) {
	var vFld = fld;
	var vMsg = msg;
//	console.log("valCol fld passed = " + vFld + " msg = " + vMsg);
//	console.log("valCol nbrVisits: " + nbrVisits);
	setStorage();
//	loadForm();	
	switch(vFld) {
		case "fName":
			if (document.form1.fName.value == "" || document.form1.fName.value == null) {
				document.getElementById('msg1').innerHTML = "Field Required";
				document.getElementById("fName").focus();
			} else { document.getElementById('msg1').innerHTML = ""; }
			break;
		case "lName":
			if (document.form1.lName.value == "" || document.form1.lName.value == null) {
				document.getElementById('msg2').innerHTML = "Field Required";
				document.getElementById("lName").focus();
			} else { document.getElementById('msg2').innerHTML = ""; }
			break;
		case "address":
			if (document.form1.address.value == "" || document.form1.address.value == null) {
				document.getElementById('msg3').innerHTML = "Field Required";
				document.getElementById("address").focus();
			} else { document.getElementById('msg3').innerHTML = ""; }
 			break;
		case "city":
			if (document.form1.city.value == "" || document.form1.city.value == null) {
				document.getElementById('msg4').innerHTML = "Field Required";
				document.getElementById("city").focus();
			} else { 
				valCity();
			}
			break;
		case "state":
			if (document.form1.state.value == "" || document.form1.state.value == null) {
				document.getElementById('msg5').innerHTML = "Field Required";
				document.getElementById("state").focus();
			} else {
				valState(); 
			}
			break;
		case "zipCode":
			if (document.form1.zipCode.value == "" || document.form1.zipCode.value == null) {
				document.getElementById('msg6').innerHTML = "Field Required";
				document.getElementById("zipCode").focus();
			} else {
				valZip();
			}
			break;
		case "ccType":
			checkRadio();
			break;
		case "ccNbr":
			if (document.form1.ccNbr.value == "" || document.form1.ccNbr.value == null) {
				document.getElementById('msg6').innerHTML = "Field Required";
				document.getElementById("ccNbr").focus();
			} else {
				valccNbr();
			}
			break;
		case "ccSec":
			if (document.form1.ccSec.value == "" || document.form1.ccSec.value == null) {
				document.getElementById('msg9').innerHTML = "Field Required";
				document.getElementById("ccSec").focus();
			} else {
				valccSec();
			}
			break;
		default:
	//			console.log('valCol Invalid fld passed: ' + vFld);
			alert("Invalid fld passed. Contact application support.");
	}
}

function valCity() {
	var x = document.form1.city.value.trim();
	var testPattern = /^[a-zA-Z]+(?:[\s-]+[a-zA-Z]+)*$/;
	var xTest = testPattern.test(x);
	//	console.log("city = " + x + " Pattern test =  " + xTest);
	if (xTest == true) {
		document.getElementById('msg4').innerHTML = " ";
	} else {
		document.getElementById('msg4').innerHTML = "Invalid City";
		document.getElementById("city").focus();
	}
//	loadForm();
	nbrVisits++;
	return false;
}

function valState() {
	var x = document.form1.state.value.trim();
	var stAbbrevUp = x.toUpperCase();
	var sAbbrev = stAbbrevUp.trim();
	var testPattern = /^([a-zA-Z]{2})$/;
	//	alert("state = " + x + " Formatted = " + sAbbrev);
	var xTest = testPattern.test(sAbbrev);
	//	console.log("state = " + x + " Pattern test =  " + xTest);
	if (xTest == true) {
		document.form1.state.value = sAbbrev;
		document.getElementById('msg5').innerHTML = " ";
	} else {
		document.getElementById('msg5').innerHTML = "Invalid State Abbreviation";
		document.form1.state.value = sAbbrev;
		document.getElementById("state").focus();
	}
//	loadForm();
	nbrVisits++;
	return false;
}

function valZip() {
	var x = document.form1.zipCode.value.trim();
	var testPattern = /^\d{5}\$/;
	var testPattern2 = /^([0-9]{5})$/;
	var testPattern3 = /^([0-9]{5})+(?:[\-]+([0-9]{4}))$/;
	var testPattern4 = /^([0-9]{9})$/;
	var xTest = testPattern.test(x);
	var xTest2 = testPattern2.test(x);
	var xTest3 = testPattern3.test(x);
	var xTest4 = testPattern4.test(x);
	//	console.log("valZip = " + x + " Pattern test =  " + xTest);
	if (xTest == true || xTest2 == true || xTest3 == true || xTest4 == true) {
		document.form1.zipCode.value = x;
		document.getElementById('msg6').innerHTML = " ";
	} else {
		document.getElementById('msg6').innerHTML = "Invalid Zip Code 99999 or 99999-9999";
		document.form1.zipCode.value = x;
		document.getElementById("zipCode").focus();
	}
//	loadForm();
	nbrVisits++;
	return false;
}

function checkRadio(){
	var payment = "";
	var ccRB = document.getElementsByClassName("ccRadio");
//	console.log("findSelected ccRB.length = " + ccRB.length);
	for (i=0; i < ccRB.length; i++) {
		if (document.form1.ccRadio[i].checked) {
			payment = document.form1.ccRadio[i].value;
//			console.log("findSelect ccType selected = " + payment);
			localStorage.setItem("frm1.ccType", JSON.stringify(payment));
			return payment;
		} else {
			localStorage.setItem("frm1.ccType", JSON.stringify(""));
		}
	}
	if (payment == "") {
		document.getElementById('msg7').innerHTML = "No payment option selected"
		document.form1.ccRadio[1].focus();
	} else {
		document.getElementById('msg7').innerHTML = ""
	}
}

function valccNbr() {
	var x = Number(document.form1.ccNbr.value.trim());
//	alert(" valccNbr form cc nbr = " + x);
//	var testPattern = /^([0-9]{4}\s?[0=9]{4}\s?[0-9]{4}\s?[0-9]{4)$/; 
	var payment = checkRadio();
	console.log("valccNbr payment type selected = " + payment);
	if (payment == "VISA" || payment == "MC") {
	} else {
		console.log("No Credit Card Type selected.  Defaulted to Visa.");
		payment = "VISA";
	}
	if (payment == "VISA") {
		var testPattern = /^\d{4}\ \d{4}\ \d{4}\ \d{4}$/;
		var testPattern2 = /^([0-9]{16})$/; 
		var testPattern3 = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;
//	alert.log('valccNbr testPattern = ' + testPattern + "  #2 = " + testPattern2 + "  #3 = " + testPattern3);
		var xTest = testPattern.test(x);
		var xTest2 = testPattern2.test(x);
		var xTest3 = testPattern3.test(x);
//	alert("valccNbr xTest = " + xTest + "  xTest2 = " + xTest2 + " xTest3 = " + xTest3);
		if(xTest == true || xTest2 == true || xTest3 == true)  {  
			document.getElementById('msg8').innerHTML = " ";
			document.form1.ccNbr.value = x;		
			document.getElementById("ccNbr").focus();
		} else {  
			document.getElementById('msg8').innerHTML = "Invalid credit card number";
			document.form1.ccNbr.value = x;		
			document.getElementById("ccNbr").focus();
		}
	} else if (payment == "MC") {
		var testPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
		var testPattern2 = /^5[1-5][0-9]{14}$/; 
		var xTest = testPattern.test(x);
		var xTest2 = testPattern2.test(x);	
		if(xTest == true || xTest2 == true)  {  
			document.getElementById('msg8').innerHTML = " ";
			document.form1.ccNbr.value = x;		
			document.getElementById("ccNbr").focus();
		} else {  
			document.getElementById('msg8').innerHTML = "Invalid credit card number";
			document.form1.ccNbr.value = x;		
			document.getElementById("ccNbr").focus();
		}
	} else { console.log("valCCNbr unable to validate credit card"); }
//	loadForm();
	$var = '1234123412341234';
/*  For PHP masking
	var xMask = substr_replace(x, str_repeat("X", 12), 0, 12);
	document.form1.ccNbr.value = xMask;
*/
	nbrVisits++;
	return false;
}

function ccMasking($number, $maskingCharacter = 'X') {
    return substr($number, 0, 4) . str_repeat($maskingCharacter, strlen($number) - 8) . substr($number, -4);
}

function valccSec() {
	var x = Number(document.form1.ccSec.value);
	var testPattern = /^([0-9]{3})$/;
	var xTest = testPattern.test(x);
//	console.log("valccSec = " + x + " Pattern test =  " + xTest);
	if (xTest == true) {
		document.form1.ccSec.value = x;
		document.getElementById('msg9').innerHTML = " ";
	} else {
		document.getElementById('msg9').innerHTML = "Invalid 3-digit Code";
		document.form1.ccSec.value = x;
		document.getElementById("ccSec").focus();
	}
//	loadForm();
	nbrVisits++;
/*  For PHP masking
	var xMask = substr_replace(x, str_repeat("X", 3), 0, 3);
	document.form1.ccSec.value = xMask;	
*/
	return false;
}

function valForm() {
//	alert("Inside valForm. First Name: " + document.form1.fName.value );
//	console.log("valForm nbrVisits: " + nbrVisits);
	nbrVisits++;
//	console.log("valForm nbrVisits: " + nbrVisits);
    var vfName = document.form1.fName.value;
    var vlName = document.form1.lName.value;
    var vAddress = document.form1.address.value;
    var vCity = document.form1.city.value;
    var vState = document.form1.state.value;
	var vZipCode = document.form1.zipCode.value;
    var vccNbr = document.form1.ccNbr.value;
	var vccSec = document.form1.ccSec.value;
	if (vccSec == "") {
        document.getElementById('msg9').innerHTML = "Input Required";
		document.getElementById("ccSec").focus();
    }	
	if (vccNbr == "") {
        document.getElementById('msg8').innerHTML = "Input Required";
		document.getElementById("ccNbr").focus();
    } 
	if (vZipCode == "") {
        document.getElementById('msg6').innerHTML = "Input Required";
		document.getElementById("zipCode").focus();
    }
	if (vState == "") {
        document.getElementById('msg5').innerHTML = "Input Required";
		document.getElementById("state").focus();
    } 
	if (vCity == "") {
        document.getElementById('msg4').innerHTML = "Input Required";
		document.getElementById("city").focus();
    } 
	if (vAddress == "") {
        document.getElementById('msg3').innerHTML = "Input Required";
		document.getElementById("address").focus();
	}  
	if (vlName == "") {
        document.getElementById('msg2').innerHTML = "Input Required";
		document.getElementById("lName").focus();
	} 
 	if (vfName == "") {
        document.getElementById("msg1").innerHTML = "Input Required";
		document.getElementById("fName").focus();
    } 
	if (vfName == ""||vlName == ""||vAddress == ""||vCity == ""||vState == ""||vZipCode == ""||vccNbr == ""||vccSec == "") {
//		loadForm();
		return false;
	} else if (localStorage && localStorage.getItem("sCart") && vCartCnt > 0 ) {
			window.location.href="order.html";		
	} else {
			document.getElementById("displayCart").style.color = "red";
			document.getElementById("displayCart").innerHTML = "No Items in Cart. Add products before Check Out";
			return false;
	}
}

function shop() {
	if (localStorage && localStorage.getItem("sCart")) {
		window.location.href="flowerShop.html";		
	} else {
		document.getElementById("displayCart").style.color = "red";
		document.getElementById("displayCart").innerHTML = "No Items in Cart. Add products before Check Out";
		return false;
	}
}

/*  VALIDATE AGE
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

/*  VALIDATE SOCIAL SECURITY NUMBER entered in proper format
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