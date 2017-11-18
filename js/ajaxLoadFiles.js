/*  ajaxLoadFiles.js */
/* Creating global variables and empty shopping cart object in localStorage. */
var vTable = "";
var selFile = "usa.txt";	
var usaFile = "usa.txt";
var canadaFile = "canada.txt";
var mexicoFile = "mexico.txt";
var russiaFile = "russia.txt";
//var selectedCountry = "";
/*
var selCountry = document.getElementById("selectCountry");
selCountry.addEventListener("blur", function() {
	var ourRequest = new XMLHttpRequest();
	console.log("selected value = " + document.getElementById("selectCountry").selected.value);
	if (document.getElementById("selectCountry").selected.value == "USA") {
		selFile = usaFile;
	} 
//Add logic for other files	
	ourRequest.open('GET', selFile);
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData[0]);
		loadCity(ourData);
	};
	ourRequest.send();
});
*/
function getFileFromServer(url, divId, city) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = 
	function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
//				console.log(myArr);
			loadFile(myArr, divId, city);
		}
		if (this.readyState == 4 && this.status == 404) {
			alert("Unable to locate table file: " + url);
		}
	};
//	This is where we make our request to the server. 
//  We are passing along the URL for the file we want.
//	You can see the name of the file we are requesting in the about HTML code.
  xmlhttp.open("POST", url, true);
  xmlhttp.send();
//	  document.getElementById( divId ).innerHTML = xmlhttp.responseText;	
}

function findSelectedCountry() {
//  To verify data matches, you can use the match() function and RegExp
//	var str = "The rain in SPAIN stays mainly in the plain";
//	var res = str.match(/ain/g);
//	This result of res will be an array with the values: ain,ain,ain
//	See https://www.w3schools.com/jsref/jsref_match.asp for links to RegExp Tutorial and Object Ref Guide
	selCountry = document.getElementById("selectCountry").value;
	console.log("findSelectedCountry() - selCountry value = " + selCountry);
	if (selCountry == "select country") {
		alert("Country Required.  Select Country");
	} else {
			var ourRequest = new XMLHttpRequest();
			if (selCountry == "select country") {
				alert("Country required. Select country.");
			} else if (selCountry == "usa") {
				selFile = usaFile;
			} else if (selCountry == "canada") {
				selFile = canadaFile;
			} else if (selCountry == "mexico") {
				selFile = mexicoFile;
			} else {
				selFile = russiaFile;
			}
		//Add logic for other files	
			ourRequest.open('GET', "data/" + selCountry + ".txt");
			ourRequest.onload = function() {
//				var ourData = JSON.parse(ourRequest.responseText);
				var ourData = ourRequest.responseText;
				loadCity(ourData, "cityTable", selCountry);
			};
			ourRequest.send();
	}
}

function loadCity(data, divId, selCountry) {
//  Debugging for XML files
//    var myJSON =  JSON.stringify(arr);
//	console.log("loadCity() - Data = \n" + data);
	var rmSpaces = data.trim();
//	console.log("loadCity() - rmSpaces = " + rmSpaces);
	var newLineSplit = rmSpaces.split("\n");
//	console.log("loadCity() - newLineSplit = " + newLineSplit);
	var xCity = newLineSplit[0].split("\[0-9]");
	console.log("loadCity() - xCity = " + xCity);	
	var cleanItem = removeExtraSpaces(newLineSplit[0]);
	console.log("loadCity() - cleanItem = " + cleanItem);
	var splitNbr = cleanItem.match(/\d+/g).map(Number);;	
	console.log("loadCity() - splitNbr = " + splitNbr);
	//	  alert(myJSON.length);
//	  alert("Product index 1 = " + arr.flower[1].Product);
//	  alert("array flower length = " + arr.flower.length);
	var fldCnt = 1;
	vTable = "<table><tr><th>Citites</th><th>Polution</th></tr>\n";
	for (i = 0; i < fileContent.length; i++) { 
		var myLine = fileContent.split("\t"); 
		console.log("myLine = " + myLine);
		var vCity = data[i];
		var vPopulation = data[i];
		vTable += '<tr><td>"' + vCity + '"</td>' +
					  '<td>"' + vPopulation + '"</td></tr>';
	}
	document.getElementById(divId).innerHTML = vTable;
}
function removeExtraSpaces(string){ 
	return string.replace(/\s{2,}/g, ' ');
}

function splitCityCountry() {
//	Problem 3 helps
//  To split values, use split()
//	var str = "How are you doing today?";
//	var res = str.split(" ");
//	This result of res will be an array with the values: How,are,you,doing,today? 
//	See https://www.w3schools.com/jsref/jsref_split.asp 
//	then used a for loop and append child: https://www.w3schools.com/jsref/met_node_appendchild.asp 
//	The split function returns an array, and I called the foreach() function on the Array 
//	(https://www.w3schools.com/jsref/jsref_forEach.asp) to iterate over the lines of the file.

}
// XML FILE LOAD EXAMPLES: 
/*
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "cd_catalog.xml" , true);
  xmlhttp.send();
}

function loadCities() {
  var x, i, xmlDoc, table;
  xmlDoc = xml.responseXML;
  table = "<tr><th>Artist</th><th>Title</th></tr>";
  x = xmlDoc.getElementsByTagName("CD")
  for (i = 0; i < x.length; i++) { 
    table += "<tr><td>" + 
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
*/

