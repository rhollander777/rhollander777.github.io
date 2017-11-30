/*  *********** Finding Supported properties based on browser **********  */
function getsupportedprop(proparray){
	var root=document.documentElement //reference root element of document
	for (var i=0; i<proparray.length; i++){ //loop through possible properties
		if (proparray[i] in root.style){ //if property exists on element (value will be string, empty string if not set)
			return proparray[i] //return that string
		}
	}
}

//SAMPLE USAGE
function boxshadow() {
var boxshadowprop=getsupportedprop(['boxShadow', 'MozBoxShadow', 'WebkitBoxShadow']); //get appropriate CSS3 box-shadow property
document.getElementById("mydiv").style[boxshadowprop]="2px 2px .5px #818181"; //set CSS shadow for "mydiv"
}

function alertboxshadow(){
	alert(getsupportedprop(['boxShadow', 'MozBoxShadow', 'WebkitBoxShadow']))
}
/*  *********  END Finding Supported properties by browser ********** */

/*  ******** START HEART BEAT ********** */
var heart = document.getElementsByClassName('heart')[1],
    pfx = ["webkit", "moz", "MS", "o", ""],
    hovered = false;

function AnimationListener() {
    if(hovered)
    { 
      heart.classList.remove('animated'); 
      heart.style.webkitTransform = 'scale(2)';
      heart.style.MozTransform = 'scale(2)';
      heart.style.msTransform = 'scale(2)';
      heart.style.OTransform = 'scale(2)';
      heart.style.transform = 'scale(2)';
    }
}

function TransitionListener() {
  if(!hovered)
  {
    heart.classList.add('animated');
  }
}

function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}

PrefixedEvent(heart, "AnimationIteration", AnimationListener);

heart.onmouseover = function() {
  hovered = true;
}
heart.onmouseout = function() {
  setTimeout(function() { hovered = false; }, 500);
  PrefixedEvent(heart, "TransitionEnd", TransitionListener);
  heart.style.webkitTransform = 'scale(1)';
  heart.style.MozTransform = 'scale(1)';
  heart.style.msTransform = 'scale(1)';
  heart.style.OTransform = 'scale(1)';
  heart.style.transform = 'scale(1)';  
}
/*  ********  END HEART BEAT ************ */
