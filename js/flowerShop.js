/*  flowerShop.js */
/* Creating an empty shopping cart object in localStorage. */
	var sCart = {};
	var sItem = {};
	sCart.sItems = [];
	localStorage.setItem('sCart', JSON.stringify(sCart));
	var sCartCnt = 0;
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
//  	  var myJSON =  JSON.stringify(arr);
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
	  vTable = "<tr><th>Product</th><th>Name</th><th>Item Code</th><th>Price</th><th>Add</th><th>Remove</th></tr>\n";
	  for (i = 0; i < arr.flower.length; i++) { 
		vOut += '<tr><td><img src="' + 
		arr.flower[i].Product  + 
			'" alt="' + arr.flower[i].Product + 
			'" onclick="addToCart(' + arr.flower[i].id + ', "' + arr.flower[i].Code + '", 1, ' + arr.flower[i].Price + ')"/></td><td>' +
		arr.flower[i].Name + "</td><td>" +
		arr.flower[i].Code + "</td><td>$" +
		arr.flower[i].Price +  "</td><td>" +
//		  	'<input type="checkbox" id="addCB[i]" class="addCB" onclick='addToCart("addCB??", "ABC123", "1", "29.99")' /> </td><td>' +
//			'<input type="checkbox" id="delCB[i]" class="delCB" onclick='removeFromCart("document.getElementById(this)", "document.catalog1.row[i].cell[2].innerHTML", qty, price)' /></td></tr>' +
//			'<input type="button" id="delBtn" class="delBtn" class="btn" value="Remove" onclick="removeFromCart("arr.Flower[i].id", "arr.flower[i].Code", 1, "arr.flower[i].Price")" /></td></tr>' + 
		  	'<input type="button" id="addBtn" name="addBtn" class="btn" value="Add" onclick="addToCart(' + arr.flower[i].id + ', "' + arr.flower[i].Code + '", 1, ' + arr.flower[i].Price + ')" /> </td><td>' +
			'<input type="button" id="delBtn" class="delBtn" class="btn" value="Remove" onclick="removeFromCart(' + arr.flower[i].id + ', "' + arr.flower[i].Code + '", 1, ' + arr.flower[i].Price + ')" /></td></tr>'; 

	 }
//		console.log(vOut);
		alert(vOut);
		document.getElementById("catalog1").innerHTML = vTable += vOut;
	}
	function addToCart(tableRow, code, qty, price) {
		alert("tableRow id: " + tableRow + "  code: " + code + "   qty: 1   " + price);
		var vCalcCost = 0;
		if (localStorage == null) {
			return false;
		} else if ( qty > 0 && price > 0) {
		  		vCalcCost = qty * price;
		} else if (qty < 1 && price > 1) {
			vCalcCost = 1 * price;
		} else { alert("Invalid price.  Reselect item");
		        return false;
		       }	   
		var oldItems = JSON.parse(localStorage.getItem('sItems'));
		console.log("oldItems = " + newItem);
		var newItem = '"' + tableRow + ', "' +
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
		console.log("newItem = " + newItem);
		sCart.sItems.push(newItem);
		localStorage.setItem('sCart', JSON.strigify(sCart));
		return false;
	
	}
     	localStorage.setItem('sProd', JSON.stringify('newItem'));

		localStorage.setItem('id', JSON.stringify('tableRow'));
		localStorage.setItem('code', JSON.stringify('code'));		
		localStorage.setItem('qty', JSON.stringify('1'));
		localStorage.setItem('price', JSON.stringify('price'));
		localStorage.setItem('vCalcCost', JSON.stringify('vCalcCost'));
*/
//		document.getElementById(tableRow).value = false; //clears the check box after add
		getCart();
		sCartCnt++;
	} 
	function getCart() {
//		alert("Inside getCart");
// Need to load table and post to sCart
		if (localStorage !== null ) {
			document.getElementById("displayCart").style.color = "red";
			document.getElementById("displayCart").innerHTML = "No Items in Cart";
			return false;
		}
		var retrieveProd = localStorage.getItem("sItem");
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
	}
	function removeFromCart(tableRow) {
		alert("code: " + code + "   qty: 1   " + price);
		if (!document.getElementById(tableRow).checked) {
			return false;
		} else{
     		localStorage.removeItem('code');
			localStorage.removeItem('qty');
			localStorage.removeItem('price');
			localStorage.removeItem('liCost');
			document.getElementById(tableRow).checked = false;	
//		clearCheckbox('delBtn');
			getCart();
			sCartCnt--;
		}
	}
	function clearCart() {
//		alert("Inside clearCart:  under construction");
		if (localStorage !== null ) {
			document.getElementById("displayCart").innerHTML = "Shopping Cart Empty";
			return false;
		}
		for (i=0; i < sCart.length; i++) {
/*   Need to find sCart array and remove all line items */
     		localStorage.removeItem('code');
			localStorage.removeItem('qty');
			localStorage.removeItem('price');
			localStorage.removeItem('liCost');			
		}
		clearCheckbox('addBtn');
		clearCheckbox('delBtn');
		document.getElementById("displayCart").innerHTML = "Shopping Cart Empty";
		sCartCnt = 0;
	}
   	function clearCheckbox(clearClass) {
//  Logic to clear all checked boxes if a class of checkboxes is passed (e.g. addCB, delCB)
//		alert("Inside clearCheckbox.  Under construction. clearClass: " + clearClass);
/*		var cnt = document.getElementByClass(clearClass).length;
		for (i = 0; i <= cnt; i++) {
			if (clearId[i] == checked) {
				document.getElementById(clearClass[i]).checked = false;
			}
		} 	
*/
	}
	function checkOut() {
		if (localStorage !== null ) {
			document.getElementById("displayCart").style.color = "red";
			document.getElementById("displayCart").innerHTML = "No Items in Cart. Add products to cart and Check Out";
			return false;
		} else {
			window.location.href='orderForm.html';		
		}
	}
	function displayError() {
		alert('Call 888-888-8888 or check back later. Fulfillment page under construction. Thank you for your business.');
	}
