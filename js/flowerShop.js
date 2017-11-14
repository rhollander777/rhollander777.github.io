/*  flowerShop.js */
/* Creating an empty shopping cart object in localStorage. */
	var sCart = {};
	var sItem = {};
	sCart.sItems = [];
	var sCartCnt = 0;
	var newItem = "";
	var vCalcCost = 0;
	
	function getFileFromServer(url, divId, isJSON) {
	  var xmlhttp = new XMLHttpRequest();
	  xmlhttp.onreadystatechange = 
		function() {
			if (this.readyState == 4 && this.status == 200) {
				var myArr = JSON.parse(this.responseText);
//				console.log(myArr);
				loadFile(myArr, divId, isJSON);
			}
		};
	//	This is where we make our request to the server. We are passing along the URL for the file we want
	//	You can see the name of the file we are requesting in the about HTML code.
	//	Each button has a different file defined
	  xmlhttp.open("GET", url, true);
	  xmlhttp.send();
//	  document.getElementById( divId ).innerHTML = xmlhttp.responseText;	
	}
	
	function loadFile(arr, divId, isJson) {
	  var x, i, vTable;
//  Debugging
//    var myJSON =  JSON.stringify(arr);
//	  alert(myJSON);
//	  alert(myJSON.length);
//	  alert("Product index 1 = " + arr.flower[1].Product);
//	  alert("array flower length = " + arr.flower.length);
	  var vOut = "";
	  var i = 0;
	  var vId = arr['flower'][i]['id'][i];
//	  console.log("id = " + vId);
/*	  
	  var vCode = JSON.flower[i].Code[i].value;
	  var vPrice = JSON.flower[i].Price[i].value;
	  console.log("id = " + vId + "  Code = " + vCode + "  Price = " + vPrice);
*/
	  var rCnt = 1;
	  vTable = "<tr><th>Product</th><th>Name</th><th>Item Code</th><th>Price</th><th>Add</th><th>Remove</th></tr>\n";
	  for (i = 0; i < arr.flower.length; i++) { 
		vOut += '<tr><td id="prod' + rCnt + '"><img src="' + 
		arr.flower[i].Product  + 
			'" alt="' + arr.flower[i].Product + 
			'" onclick="addToCart(' + arr.flower[i].id + ', "' + arr.flower[i].Name + '", "' + arr.flower[i].Code + '", 1, ' + arr.flower[i].Price + ')"/></td>' +
			'<td id="name' + rCnt + '">' + arr.flower[i].Name + '</td>' +
			'<td id="code' + rCnt + '">' + arr.flower[i].Code + '</td>' +
			'<td id="price' + rCnt + '">$' + arr.flower[i].Price +  '</td>' +
			'<td>' +
		  	'<input type="button" id="addBtn' + rCnt +  '" name="addBtn' + rCnt + '" class="btn" value="Add" onclick="addToCart(' + arr.flower[i].id + ', ' + "'" + arr.flower[i].Name + "'" + ', ' + "'" + arr.flower[i].Code + "'" + ', 1, ' + arr.flower[i].Price + ')" /> </td>' +
			'<td>' +
			'<input type="button" id="delBtn' + rCnt + '" class="delBtn' + rCnt + '" class="btn" value="Remove" onclick="removeCartItem(' + arr.flower[i].id + ')" />' + 
			'</td></tr>'; 
		rCnt++;
	 }
//		console.log(vOut);
//		alert(vOut);
		document.getElementById("catalog1").innerHTML = vTable += vOut;
	}

	var myArray;
	function createArray(tableRow, name, code, qty, price){
		var vName = "name" + tableRow;
		var vCode = "code" + tableRow;
		var vQty = "qty" + tableRow;
		var vPrice = "price" + tableRow;
		myArray = [];
// 		Calculate extended cost
		vCalcCost = 0;
		if ( qty > 0 && price > 0) {
		  	vCalcCost = qty * price;
		} else if (qty < 1 && price > 1) {
			vCalcCost = 1 * price;
		} else { alert("Invalid price.  Reselect item");
		        return false;
		}	
		//clear out previous text if needed
//		document.getElementById('showArrayDiv').innerHTML = '&nbsp;';
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
//		console.log("array newItem = " + newItem);
		}

	}

    function pullArray(){
/*  Under construction 
      var vArray = JSON.parse(localStorage.getItem('sCart.sItem'));
	  for ( i = 0; i < vArray.length; i++) {
			if (vArray[i]   
	  }
      if(arrayValue) {
        document.getElementById('showSavedArrayDiv').innerHTML = arrayValue;
      }

	}
*/

	function addToCart(tableRow, name, code, qty, price) {
//		console.log("tableRow id: " + tableRow + "  code: " + code + "   qty: 1   " + price);
		createArray(tableRow, name, code, qty, price);
		if (localStorage && localStorage.getItem('sCart')) {
			// retrieve shopping cart
			sCart = localStorage.setItem('sCart', JSON.stringify(sCart));
			
			// add new item to shopping cart
			sCart.sItem.push(newItem); 
			
			// store shopping cart
			localStorage.setItem('sCart', JSON.stringify(sCart));
		sCartCnt++;
		console.log("new stored sItem array = " + JSON.parse(localStorage.getItem('sItem')));
		console.log("sCartCnt= " + sCartCnt);
		} else { 
			// retrieve shopping cart
			var oldItems = JSON.parse(localStorage.getItem('sItems'));
			console.log("oldItems = " + oldItems);
		}
	} 
	
/*		var newItem = '"' + tableRow + ', "' +
						code + '", "' +
						qty + '", "' +
						price + '", "' +
						vCalcCost + '"';

/*			var newItem = {
			"i.id": 	tableRow,
			"i.code": 	code,
			"i.qty": 	qty,
			"i.price": 	price,
			"i.cost": 	vCalcCost;
		}
*/
/*
		return false;
	
	}
		localStorage.setItem('array', JSON.stringify(myArray));
		loadArray();	
		getCart();
*/

	function getCart() {
//		alert("Inside getCart");
// Need to load table and post to sCart
		if (localStorage == null ) {
			document.getElementById("displayCart").style.color = "red";
			document.getElementById("displayCart").innerHTML = "No Items in Cart";
			return false;
		} 
		document.getElementById("displayCart").style.color = "red";
		var vCart = JSON.parse(localStorage.getItem('sCart'));
		console.log("sCart = " + JSON.parse(localStorage.getItem('sCart')));
		var vItemCnt = 0;
		var vOut = '<p style="font-size:18px;"><b>Shopping Cart</b></p><table><th>Item</th><th>Product Description</th><th>Code</th><th>Qty</th><th>Price</th><th>Cost</th>';
		for (i = 0; i < vCart.length; i++) {
			vOut += '<tr><td>' += vCart.sItem[i][i] += '</td>';
			for (vItemCnt = 0; vCart.sItem.length; vItemCnt++) {
				vOut += '<td>' += vCart.sItem[i][vItemCnt] += '</td>';				
			}
		}
		vOut += '</tr></table>';
		document.getElementById("displayCart").innerHTML = vOut;
	}
	
/*		var retrieveProd = localStorage.getItem("sItem");
		var p = JSON.parse(retrieveProd);
		console.log("localStorage parsed Code = " + p.Code);
		var vCart = "Code: " +
		p.Code + 
		" Qty: " + localStorage.getItem('qty') + 
		"Price: " + localStorage.getItem('price') + 
		" Cost: " + localStorage.getItem('liCost') + "<br>" +
		'<input type="button" id="delCart" name="delCart" onclick="removeFromCart()" />';
		if (vCart == null) {
			document.getElementById("displayCart").style.color = "red";
			document.getElementById("displayCart").innerHTML = "No Items Found in Cart";
		} else {
			document.getElementById("displayCart").innerHTML = vCart;
		}
*/

	function removeCartItem(tableRow) {
//Insert logic to identify array item in sCart and remove
		if (localStorage !== null) {
			localStorage.removeItem('sItem');
		}
		console.log("Need to add code to find item in shopping cart and remove.  Currently working with single shopping cart item.");
		getCart();
		sCartCnt--;
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
//		clearCheckbox('delBtn');
*/

	function clearCart() {
//		alert("Inside clearCart:  under construction");
		if (localStorage && localStorage.getItem('sCart')) {
			localStorage.removeItem('sCart');
			document.getElementById("displayCart").innerHTML = "Shopping Cleared";
			sCartCnt = 0;
			return false;
		}
		document.getElementById("displayCart").innerHTML = "No Shopping Cart Found";
		sCartCnt = 0;
	}
/* Replaced by buttons 
		clearCheckbox('addBtn');
		clearCheckbox('delBtn');
*/
/* Replaced by use of buttons instead of checkboxes
   	function clearCheckbox(clearClass) {
//  Logic to clear all checked boxes if a class of checkboxes is passed (e.g. addCB, delCB)
//		alert("Inside clearCheckbox.  Under construction. clearClass: " + clearClass);
		var cnt = document.getElementByClass(clearClass).length;
		for (i = 0; i <= cnt; i++) {
			if (clearId[i] == checked) {
				document.getElementById(clearClass[i]).checked = false;
			}
		} 	
	}
*/
	function checkOut() {
		if (localStorage && localStorage.getItem('sCart') && sCartCnt > 0 ) {
			window.location.href='orderForm.html';		
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
			sCartCnt = 0;
			return false;
		}
		document.getElementById("displayCart").innerHTML = "";
		sCartCnt = 0;
	}	
	function displayError() {
		alert('Call 888-888-8888 or check back later. Fulfillment page under construction. Thank you for your business.');
	}
