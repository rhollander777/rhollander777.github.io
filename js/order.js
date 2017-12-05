/*  order.js */
/* Creating global variables and empty shopping cart object in localStorage. */

var vCart;
var vCartCnt = 0;
var newItem = "";
var vCalcCost = 0;
var vOut = "";

/*	
function getFileFromServer(url, divId, isJSON) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
	//				console.log(myArr);
			loadFile(myArr, divId, isJSON);
		}
	};
//	This is where we make our request to the server. 
//  We are passing along the URL for the file we want.
//	You can see the name of the file we are requesting in the about HTML code.
	  xmlhttp.open("GET", url, true);
	  xmlhttp.send();
//	  document.getElementById( divId ).innerHTML = xmlhttp.responseText;	
}
	
function loadFile(arr, divId, isJson) {
	var x;
	var Table;
	//  Debugging
	//    var myJSON =  JSON.stringify(arr);
	//	  alert(myJSON);
	//	  alert(myJSON.length);
	//	  alert("Product index 1 = " + arr.flower[1].Product);
	//	  alert("array flower length = " + arr.flower.length);
	var vOut = "";
	var i = 0;
	var rCnt = 1;
	vTable = "<tr><th>Product</th><th>Name</th><th>Item Code</th><th>Price</th><th>Add</th><th>Remove</th></tr>\n";
	for (i = 0; i < arr.flower.length; i++) { 
	vOut += '<tr><td id="' + rCnt + '"><img src="' + arr.flower[i].Product  + 
		'" alt="' + arr.flower[i].Product + '" onclick="addToCart(' + arr.flower[i].id + ', ' + "'" + arr.flower[i].Name + "'" + ", '" + arr.flower[i].Code + "', 1, " + arr.flower[i].Price + ');"/></td>' +
		'<td id="name' + rCnt + '">' + arr.flower[i].Name + '</td>' +
		'<td id="code' + rCnt + '">' + arr.flower[i].Code + '</td>' +
		'<td id="price' + rCnt + '">$' + arr.flower[i].Price +  '</td>' +
		'<td>' +
		'<input type="button" id="addBtn' + rCnt +  '" name="addBtn' + rCnt + '" class="btn" value="Add" onclick="addToCart(' + arr.flower[i].id + ', ' + "'" + arr.flower[i].Name + "'" + ', ' + "'" + arr.flower[i].Code + "', 1, " + arr.flower[i].Price + ');" /> </td>' +
		'<td>' +
		'<input type="button" id="delBtn' + rCnt + '" class="delBtn' + rCnt + '" class="btn" value="Remove" onclick="removeCartItem(' + arr.flower[i].id + ', ' + "'" + arr.flower[i].Code + "', " + arr.flower[i].Price + ');" />' + 
		'</td></tr>'; 
	rCnt++;
	}
	//		console.log(vOut);
	//		alert(vOut);
	document.getElementById("catalog1").innerHTML = vTable += vOut;
}
*/
function loadOrdDetail() {
	var vfName, vlName, vAddress, vCity, vState, vZip;
	if (localStorage !== null) {
		vfName = JSON.parse(localStorage.getItem('frm1.fName'));
		vlName = JSON.parse(localStorage.getItem('frm1.lName'));
		vAddress = JSON.parse(localStorage.getItem('frm1.address'));
		vCity = JSON.parse(localStorage.getItem('frm1.city'));
		vState = JSON.parse(localStorage.getItem('frm1.state'));
		vZip = JSON.parse(localStorage.getItem('frm1.zipCode'));
		vccType = JSON.parse(localStorage.getItem('frm1.ccType'));

//  Mask Credit card #
		if (localStorage.getItem('frm1.ccType') == "VISA") {
			document.form1.ccRadio[0].checked = checked;
		} else if (localStorage.getItem('frm1.ccType') == "MC") {
			document.form1.ccRadio[1].checked = checked;			
		} 
	}
	vOut = vfName + " " + vlName + "<br>" +
			vAddress + "<br>" + vCity + ", " + vState + " " + vZip;
	document.getElementById('ordDetail').innerHTML = vOut;
}

function loadCC() {
	var vccType, vccNbr, vccSec;
	if (localStorage !== null) {
		vccType = JSON.parse(localStorage.getItem('frm1.ccType'));
		vccNbr = JSON.parse(localStorage.getItem('frm1.ccNbr'));
		vccSec = JSON.parse(localStorage.getItem('frm1.ccSec'));
	}
	vOut = "Card Type: " + vccType + "<br>" + vccNbr + "<br>" + vccSec;
	document.getElementById('ccDetail').innerHTML = vOut;	
}

function loadCart() {
	if (localStorage == null) {
		document.getElementById("displayCart").style.color = "red";
		document.getElementById("displayCart").innerHTML = "No Items in Cart";
		return false;
	}
 	document.getElementById("displayCart").style.color = "blue";
	vCart = JSON.parse(localStorage.getItem("sCart"));
	vCartCnt = vCart.length;
	var vCost = 0;
//******************  CREATE HTML OUTPUT  ********************
	vOut = "";
//			console.log("loadDisplayCart Shopping Cart Length = " + vCart.SItem.length);
//			console.log("loadDisplayCart Shopping Cart id value = " + vCart[i].getElementByTagName(id).nodeValue);
	if (vCartCnt == 0) {
		vOut = "No Items in Cart";
		return false;
	} else {
//				console.log("loadDisplayCart localStorage value = "+ vCart.getElementByTagName("id").nodeValue);
	vOut = '<p style="font-size:18px;"><b>Shopping Cart</b></p><table><th>Item</th><th>Product Description</th><th>Code</th><th>Qty</th><th>Price</th><th>Cost</th>';
	}	
	for (i = 0; i < vCartCnt; i++) {
		vCost = parseFloat(Math.round(vCart[i].cost * 100) / 100).toFixed(2);
		vOut += "<tr><td>" + vCart[i].id + 
		"</td><td>" + vCart[i].name + 
		"</td><td>" + vCart[i].code +
		"</td><td>" + vCart[i].qty +
		"</td><td>" + vCart[i].price +
		"</td><td>" + vCost + "</td></tr>"
	}
	vOut += '</table>';
//	console.log("loadDisplayCart vOut = " + vOut);
	document.getElementById("displayCart").innerHTML = vOut;
	return false;
}

function calcCart() {
	if (localStorage !== null && localStorage.getItem('sCart')) {
		vCart = JSON.parse(localStorage.getItem('sCart'));
	} else { 
		alert("No shopping cart found"); 
	}
	var lineItemCnt = vCart.length;
	console.log("calcCart count = " + lineItemCnt);
	var cartTotal = 0;
	var vCartTotal = 0;
	for (i = 0; i < lineItemCnt; i++) {
		vCartTotal = parseFloat(Math.round((Number(vCart[i].cost) + cartTotal) * 100) / 100).toFixed(2);
	}	
	console.log("calcCart vCartTotal = " + vCartTotal);
	document.getElementById('ordTotal').innerHTML = vCartTotal;		
	return false;				
}

function cancelCart() {
	if (localStorage && localStorage.getItem("sCart") && sItemCnt > 0 ) {
		window.location.href="flowerShop.html";		
	} else {
		document.getElementById("displayCart").style.color = "red";
		document.getElementById("displayCart").innerHTML = "No Items in Cart. Add products before Check Out";
		return false;
	}
}

function clearCart() {
	//		alert("Inside clearCart:  under construction");
	if (localStorage && localStorage.getItem("sCart")) {
		sCart = [];
		localStorage.setItem("sCart", sCart);
	//			localStorage.removeItem('sItem');
		document.getElementById("displayCart").innerHTML = "Transaction Cancelled. Clip Shop to continue.";
		vCartCnt = 0;
		return false;
	} else {
		document.getElementById("displayCart").innerHTML = "No Shopping Cart Found";
	}
}

function checkOut() {
	if (localStorage && localStorage.getItem("sCart") && sItemCnt > 0 ) {
		window.location.href="order.html";		
	} else {
		document.getElementById("displayCart").style.color = "red";
		document.getElementById("displayCart").innerHTML = "No Items in Cart. Add products before Check Out";
		return false;
	}
}

function shop() {
	if (localStorage && localStorage.getItem("sCart") && vCartCnt > 0 ) {
		window.location.href="flowerShop.html";		
	} else {
		document.getElementById("displayCart").style.color = "red";
		document.getElementById("displayCart").innerHTML = "No Items in Cart. Add products before Check Out";
		return false;
	}
}

function clearStorage() {
//		alert("Inside clearCart:  under construction");
		if (localStorage) {
			document.getElementById("displayCart").innerHTML = "Storage Cleared";
			window.localStorage.clear();
			vCartCnt = 0;
			return false;
		}
		document.getElementById("displayCart").innerHTML = "";
		vCartCnt = 0;
}	

function displayError() {
		alert('Call 888-888-8888 or check back later. Fulfillment page under construction. Thank you for your business.');
}
