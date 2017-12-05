/*  flowerShop.js */
/* Creating global variables and empty shopping cart object in localStorage. */

/*	var sCart = {
		"sItem": []
	};
//	sCart.sItems = [];
*/

// Creating an empty shopping cart object in localStorage. */
//	sCart = localStorage.setItem('sCart', JSON.stringify(sCart));
if (localStorage) {
	var sCart = JSON.parse(localStorage.getItem('sCart'));
	var xLength = sCart.length;
	var sItemCnt = sCart.length;
	console.log("INITIATE sItemCnt = " + sItemCnt);
} else {
	var sCart = []; 
	localStorage.setItem("sCart", JSON.stringify(sCart));
	sItemCnt = 0;
}

var sItem = function(id, name, code, qty, price, cost) {
	this.id = id
	this.name = name
	this.code = code
	this.qty = qty
	this.price = price
	this.cost = cost
};
var newItem = "";
var vCalcCost = 0;
var vOut = "";
	
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

var myArray;
function createArray(tableRow, name, code, qty, price){
/*	var vName = "name" + tableRow;
	var vCode = "code" + tableRow;
	var vQty = "qty" + tableRow;
	var vPrice = "price" + tableRow;
	myArray = [];
*/
// 		Calculate extended cost
	vCalcCost = 0;
	if ( qty > 0 && price > 0) {
		vCalcCost = qty * price;
	} else if (qty < 1 && price > 1) {
		vCalcCost = 1 * price;
	} else { alert("Invalid price.  Reselect item");
			return false;
	}
	var newItem = new sItem(tableRow, name, code, qty, price, vCalcCost);
//	clear out previous text if needed
//		document.getElementById('showArrayDiv').innerHTML = '&nbsp;';	
//  Option to push array object (see Is_JSON(1).html for more details 
/*  Various ways to create newItem
	sCart.sItem.push({ 
				'id': ' + tableRow +
				', "name": "' + name +
				'", "code": "' + code +
				'", "qty": ' + qty +
				', "price": ' + price +
				', "cost": ' + vCalcCost });

//  Example of creating a shopping cart item that needs to be added to localStorage
//	Tried without quotations on array keys - unable to access
		newItem = "{id:" + tableRow +
		', name:"' + name + 
		'", code:"' + code +
		'", qty:' + qty +
		", price:" + price +
		", cost:" + vCalcCost + "}";
//  Tried with quotations on array keys - still not able to access			
	newItem = "{" + '"id": ' + tableRow +
				', "name": "' + name + 
				'", "code": "' + code +
				'", "qty": ' + qty +
				', "price": ' + price +
				', "cost": ' + vCalcCost + "}";			
*/
//	console.log("createArray newItem = " + newItem);
	return newItem;
}
/*		Another way to create an array
		myArray.push(tableRow);
		myArray.push(name);
		myArray.push(code);
		myArray.push(qty);
		myArray.push(price);	
		myArray.push(vCalcCost);
		
		newItem = "";
		for (i = 0; i < myArray.length; i++) {
				newItem += '"';
				newItem += myArray[i];
				newItem += '"';
			if (i < myArray.length - 1) {
				newItem += ", ";
			}

		}
*/
	
function addToCart(tableRow, name, code, qty, price) {
//	createArray(tableRow, name, code, qty, price);
//  Calculate extended price
	var sQty = Number(qty);
	var sPrice = Number(price);
//	console.log("sQty = " + sQty + " sPrice = " + sPrice);
//	parseFloat(Math.round(price * 100) / 100).toFixed(2);
	vCalcCost = 0;
	if ( sQty > 0 && sPrice > 0) {
		vCalcCost = sQty * sPrice;
	} else if (sQty < 1 && sPrice > 1) {
		vCalcCost = 1 * sPrice;
	} else { alert("Invalid price.  Reselect item");
			return false;
	}
//	console.log("addToCart vCalcCost = " + vCalcCost);

	for (var i = 0; i < sItemCnt; i++) {
		if (sCart[i].code === code) {
			sCart[i].qty += qty;
			sCart[i].cost = parseFloat(Math.round((Number(sCart[i].cost) + vCalcCost) * 100) / 100).toFixed(2);
//			console.log("addToCart sCart[i].cost = " + sCart[i].cost);
			localStorage.setItem("sCart", JSON.stringify(sCart));
			getCart();
			return false;				
		}
	}

	var newItem = new sItem(tableRow, name, code, qty, price, vCalcCost);	
//	var itemWKey = '"' + code + '":' + newItem;
//	console.log("addToCart newItem = " + newItem);
//	console.log("addToCart sItem = " + sItem);
	sCart.push(newItem);
	sItemCnt++;	
	if (localStorage !== null) {
	//			sCart.sItem.push(newItem);
	//			var xCart = JSON.stringify(sCart.sItem);
	//			console.log("addToCart xCart = " + xCart);
	//			vCart = JSON.parse(localStorage.getItem("sCart")) || [];
		localStorage.setItem("sCart", JSON.stringify(sCart));
	/* For Debugging
		console.log("addToCart sItemCnt = " + sItemCnt);
		for (i=0; i<sItemCnt; i++) {
			console.log("addToCart vCart.sItem[i] = " + vCart.sItem[i]);
		}
	*/
	} else { 
		alert("No shopping cart found in localStorage. Contact developer.");
	}
	getCart();
	
} 

function loadDisplayCart() {
 	document.getElementById("displayCart").style.color = "blue";
	vCart = JSON.parse(localStorage.getItem("sCart"));
	var vCost = 0;
//	vCart = JSON.parse(localStorage.getItem("sCart")) || [];
/*  Debugging
//	vItem = JSON.parse(vCart);
//	console.log("getCart vCart = " + vCart);
//	console.log("getCart vItem = " + vItem);
//	console.log("getCart getItem(sItem) = " + JSON.parse(localStorage.getItem("sItem")));
//	console.log("loadDisplayCart vCart.sItem[0].id " + vCart.sItem[0].id);
	console.log("loadDisplayCart sCart = " + sCart);
	console.log("loadDisplayCart localStorage sCart returned = " + vCart);
	console.log("loadDisplayCart vCart length = " + vCart.length);
	var vItem = vCart[0];
	var vItem = vCart.sItem[0];
	console.log("loadDisplayCart vItem = " + vItem);
	console.log("loadDisplayCart vCart[0].id = " + vCart[0].id);
	console.log("loadDisplayCart vCart[0].name = " + vCart[0].name);
	console.log("loadDisplayCart vCart[0].code = " + vCart[0].code);

//  Unable to access array keys from local storage
	Object.keys(vCart).forEach(function (key) {
		var v = vCart[key];
		console.log("loadDisplayCart key and vCart[key] = " + key + " " + v);
	});
//  Unable to access array using node annotation
	for (var i = 0; i < 6; i++) { 
		console.log("id: " + vCart[i].childNodes[i].nodeValue );
	}
*/
//******************  CREATE HTML OUTPUT  ********************
	vOut = "";
//			console.log("loadDisplayCart Shopping Cart Length = " + vCart.SItem.length);
//			console.log("loadDisplayCart Shopping Cart id value = " + vCart[i].getElementByTagName(id).nodeValue);
	if (sItemCnt == 0) {
		vOut = "No Items in Cart";
		return false;
	} else {
//				console.log("loadDisplayCart localStorage value = "+ vCart.getElementByTagName("id").nodeValue);
	vOut = '<p style="font-size:18px;"><b>Shopping Cart</b></p><table><th>Item</th><th>Product Description</th><th>Code</th><th>Qty</th><th>Price</th><th>Cost</th>';
	}	
	for (i = 0; i < sItemCnt; i++) {
		vCost = parseFloat(Math.round(vCart[i].cost * 100) / 100).toFixed(2);
		vOut += "<tr><td>" + vCart[i].id + 
		"</td><td>" + vCart[i].name + 
		"</td><td>" + vCart[i].code +
		"</td><td>" + vCart[i].qty +
		"</td><td>" + vCart[i].price +
		"</td><td>" + vCost + "</td></tr>"
/*	for (vItemCnt = 0; vCart.sItem.length; vItemCnt++) {
			vOut += '<td>' + vCart[vItemCnt] + '</td>';		
		}
					
		}
		vOut += '</td>';
*/
	}
	vOut += '</table>';
//	console.log("loadDisplayCart vOut = " + vOut);
	document.getElementById("displayCart").innerHTML = vOut;
	return false;
}

function getCart() {
//		alert("Inside getCart");
	var isJSON = true;
// Need to load table and post to sCart
	if (localStorage == null || sItemCnt == 0) {
		document.getElementById("displayCart").style.color = "red";
		document.getElementById("displayCart").innerHTML = "No Items in Cart";
		return false;
	}
	loadDisplayCart();

//	Now we will take the text and do something with it
/*
	if (isJSON) {
		document.getElementById( "displayCart" ).innerHTML = "Just the text<BR>" + responseText;
		document.getElementById( "displayCart" ).innerHTML = "Fields from the JSON Object [0]<BR>" + 
			"Id: " + responseText["id"] + "<BR>" +
					"Name: " + responseText.sItem[0].name + "<BR>" +
			"Code: " + responseText.sItem[0].code + "<BR>" +
			"Qty: " + responseText.sItem[0].qty + "<BR>" +
			"Price: " + responseText.sItem[0].price + "<BR>" +
			"Cost: " + responseText.sItem[0].cost + "<BR>" +
	
			"JSON is just Key:value pairs - " //+ responseText.thisIsTheKey[0] + "<BR>";
	}

	//			console.log("getCart id = " + localStorage.getItem(id));
	var getProperty = function (propertyName) {
		return vItem[propertyName];
	};
	
	console.log("getCart getProperty(" + '"id") = ' + getProperty("id"));
	console.log("getCart vCart.sItem[0]['id'] = " + vCart.sItem[0]['id']);
	console.log("getCart vCart.sItem[0].id = " + vCart.sItem[0].id);
	var vItem = vCart.sItem[0];
	console.log("getCart sItem = " + vItem);
	var xId = vItem.getElementByTagName('id');
	console.log("getCart xId = " + xId);
	var vId = vItem[0].id;
	console.log("getCart vId = " + vId);
	var vItemCnt = vItem.length;
	console.log("getCart vItemCnt = " + vItemCnt);
*/

}
function removeItem(code) {
	localStorage.removeItem
}
	
/*  Pulling individually store items from localStorage
		var retrieveProd = localStorage.getItem("sItem");
		var p = JSON.parse(retrieveProd);
		console.log("localStorage parsed Code = " + p.Code);
		var vCart = "Code: " +
		p.Code + 
		" Qty: " + localStorage.getItem("qt") + 
		"Price: " + localStorage.getItem("price") + 
		" Cost: " + localStorage.getItem("liCost") + "<br>" +
		'<input type="button" id="delCart" name="delCart" onclick="removeFromCart()" />';
		if (vCart == null) {
			document.getElementById("displayCart").style.color = "red";
			document.getElementById("displayCart").innerHTML = "No Items Found in Cart";
		} else {
			document.getElementById("displayCart").innerHTML = vCart;
		}
*/

function removeCartItem(tableRow, code, price) {
	var ci = tableRow;
	var vPrice = Number(price);
	console.log("removeCartItem price = " + vPrice);
	var i = 0;
	var vCart = JSON.parse(localStorage.getItem("sCart"));
	if (localStorage && localStorage.getItem("sCart")) {
	//Insert logic to identify array item in sCart and remove		
		for (i = 0; i < sItemCnt; i++) {
			if (sCart[i].code === code) {
				sCart[i].qty--;
				sCart[i].cost = parseFloat(Math.round((sCart[i].cost - vPrice) * 100) / 100).toFixed(2);
				console.log("removeCartItem sCart[i].cost = " + sCart[i].cost);
				if (sCart[i].qty == 0) {
					var cartKey = localStorage.key(code);
console.log("removeCartItem localStorage.key(code) = " + cartKey);
//					localStorage.removeItem("cartKey");
					delete sCart[i];
					localStorage.removeItem("sCart[i]");
					localStorage.setItem("sCart", JSON.stringify(sCart));
					sItemCnt--;
					console.log("removeCartItem Need to verify code removes item from cart.");
					if (sItemCnt == 0) {
						clearCart();
						getCart();
					} else {
						getCart();
						return false;
					}
				} else {
						localStorage.setItem("sCart", JSON.stringify(sCart));
						getCart();
						return false;
				}
				localStorage.setItem("sCart", JSON.stringify(sCart));				
				getCart();
				return false;				
			} 
		}
	} else {
			console.log("removeCartItem No Cart Item found");
	}
}

/*		Replaced logic with button and array instead of checkbox
		if (!document.getElementById(tableRow).checked) {
			return false;
		} else{
     		localStorage.removeItem('code');
			localStorage.removeItem('qty');
			localStorage.removeItem('price');
			localStorage.removeItem('liCost');
			document.getElementById(tableRow).checked = false;	
		}
//		clearCheckbox('delBtn');
*/

function clearCart() {
	//		alert("Inside clearCart:  under construction");
	if (localStorage && localStorage.getItem("sCart")) {
		sCart = [];
		localStorage.setItem("sCart", sCart);
	//			localStorage.removeItem('sItem');
		document.getElementById("displayCart").innerHTML = "Shopping Cart Cleared";
		sItemCnt = 0;
		return false;
	}
	document.getElementById("displayCart").innerHTML = "No Shopping Cart Found";
	sItemCnt = 0;
}

function checkOut() {
	if (localStorage && localStorage.getItem("sCart") && sItemCnt > 0 ) {
		window.location.href="orderForm.html";		
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
			sItemCnt = 0;
			return false;
		}
		document.getElementById("displayCart").innerHTML = "";
		sItemCnt = 0;
}	

function displayError() {
		alert('Call 888-888-8888 or check back later. Fulfillment page under construction. Thank you for your business.');
}
