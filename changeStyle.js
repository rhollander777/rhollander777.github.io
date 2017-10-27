/* changeStyle.js */
// Change style for specified object id. 

function chgStyleByID(objectID, property, value) {
	var vObjectID = objectID;
	var vProperty = property;
	var vValue = value;
	console.log(objectID + " " + property + " " + value);
	if (vObjectID) {
	} else {
		console.log('No entry found for objectID: ' + vObjectID);
	}
	switch(vProperty) {
		case 'color':
			break;
		case 'textDecoration':
			break;
		case 'fontSize':
			break;
		case 'backgroundColor':
			break;
		case 'borderStyle':
			break;
		default:
			console.log('Invalid style property: ' + vProperty);
	}
	if (vValue == null) {
		console.log('No value entered with objectID: ' + vObjectID + ' and property: ' + vProperty);
	} else {
		document.getElementById(vObjectID).style[vProperty] = vValue;
	}
}

// Change text style option based on class after verifying valid option provided. 
// If invalid Class or Option is provided, error message is displayed in console.log. 
function chgStyleByClass(classID, property, value) {
	var vClassID = classID;
	var vProperty = Property;
	var vValue = value;
	switch(vClassID) {
		case 'text':
			break;
		case 'mnu':
			break;
		case 'frm':
			break;
		case 'leftnav':
			break;
		case 'rightnav':
			break;
		case 'footer':
			break;
		case 'profile':
			break;
		default:
			console.log('Invalid classID: ' + vClassID + '<BR>Valid values: text, mnu, frm, leftnav, rightnav, footer, and profile.');
	}	
	switch(vProperty) {
		case 'color':
			break;
		case 'textDecoration':
			break;
		case 'fontSize':
			break;
		case 'backgroundColor':
			break;
		case 'borderStyle':
			break;
		default:
			console.log('Invalid style property: ' + vProperty + '<BR>Valid values: color, textDecoration, fontSize, backgroundColor, and borderStyle.');
	}
	if (vValue == null) {
		console.log('No value entered with classID: ' + vClassID + ' and property: ' + vProperty);
	} else {
		document.getElementByClassName('vClassID').style.vProperty = vValue;
	}
}
// Change text style option element tag after verifying valid option provided. 

function chgStyleByTag(tagID, property, value) {
	var vtagID = tagID;
	var vProperty = property;
	var vValue = value;
	switch(vTagID) {
		case 'p':
			break;
		case 'h1':
			break;
		case 'h2':
			break;
		case 'td':
			break;
		case 'li':
			break;
		default:
			console.log('Invalid text tag: ' + vTagID + '<BR>Valid tags: p, h1, h2, d, and li.');
	}	
	switch(vProperty) {
		case 'color':
			break;
		case 'textDecoration':
			break;
		case 'fontSize':
			break;
		case 'backgroundColor':
			break
		case 'borderStyle':
			break;
		default:
			console.log('Invalid style propety: ' + vProperty + '<BR>Valid properties: color, textDecoration, fontSize, backgroundColor, and borderStyle.');
	}
	if (vValue == null) {
		console.log('No value entered with classID: ' + vClassID + ' and property: ' + vProperty);
	} else {
		document.getElementById('vTagID').style.vProperty = vValue;
	}
}
//	document.write(output);  /* document.write may write over entire page */