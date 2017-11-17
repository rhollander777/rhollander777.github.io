/*  GameEvents.js */
var canDrag1 = true;
var canDrag2 = true;
var canDrag3 = true;
function init() {
        var touchzone1 = document.getElementById("drag1");
        touchzone1.addEventListener("touchstart", touchStartHandler1, false);
        touchzone1.addEventListener("touchmove", touchMoveHandler1, false);
        touchzone1.addEventListener("touchend", touchEndHandler1, false);
        var touchzone2 = document.getElementById("drag2");
        touchzone2.addEventListener("touchstart", touchStartHandler2, false);
        touchzone2.addEventListener("touchmove", touchMoveHandler2, false);
        touchzone2.addEventListener("touchend", touchEndHandler2, false);
        var touchzone3 = document.getElementById("drag3");
        touchzone3.addEventListener("touchstart", touchStartHandler3, false);
        touchzone3.addEventListener("touchmove", touchMoveHandler3, false);
        touchzone3.addEventListener("touchend", touchEndHandler3, false);
}

function touchStartHandler1(event) {
        if(canDrag1) {
                document.getElementById("drag1").style.position = "absolute";
                var newXPos = (Math.round(event.touches[0].pageX) - 35) + "px";
                var newYPos = (Math.round(event.touches[0].pageY) - 35) + "px";
                document.getElementById("drag1").style.left = newXPos;
                document.getElementById("drag1").style.top = newYPos;
        }
}

function touchMoveHandler1(event) {
        if(canDrag1) {
                var newXPos = (Math.round(event.touches[0].pageX) - 35) + "px";
                var newYPos = (Math.round(event.touches[0].pageY) - 35) + "px";
                document.getElementById("drag1").style.left = newXPos;
                document.getElementById("drag1").style.top = newYPos;
        }
}

function touchStartHandler2(event) {
        if(canDrag2) {
                document.getElementById("drag2").style.position = "absolute";
                var newXPos = (Math.round(event.touches[0].pageX) - 35) + "px";
                var newYPos = (Math.round(event.touches[0].pageY) - 35) + "px";
                document.getElementById("drag2").style.left = newXPos;
                document.getElementById("drag2").style.top = newYPos;
        }
}

function touchMoveHandler2(event) {
        if(canDrag2) {
                var newXPos = (Math.round(event.touches[0].pageX) - 35) + "px";
                var newYPos = (Math.round(event.touches[0].pageY) - 35) + "px";
                document.getElementById("drag2").style.left = newXPos;
                document.getElementById("drag2").style.top = newYPos;
        }
}

function touchStartHandler3(event) {
        if(canDrag3) {
                document.getElementById("drag3").style.position = "absolute";
                var newXPos = (Math.round(event.touches[0].pageX) - 35) + "px";
                var newYPos = (Math.round(event.touches[0].pageY) - 35) + "px";
                document.getElementById("drag3").style.left = newXPos;
                document.getElementById("drag3").style.top = newYPos;
        }
}

function touchMoveHandler3(event) {
        if(canDrag3) {
                var newXPos = (Math.round(event.touches[0].pageX) - 35) + "px";
                var newYPos = (Math.round(event.touches[0].pageY) - 35) + "px";
                document.getElementById("drag3").style.left = newXPos;
                document.getElementById("drag3").style.top = newYPos;
        }
}

function touchEndHandler1(event) {
        var bodyRect = document.body.getBoundingClientRect();
        var posTarget1 = document.getElementById("target1").getBoundingClientRect();
        var offsetTarget1x = posTarget1.left - bodyRect.left;
        var offsetTarget1y = posTarget1.top - bodyRect.top;
        var posDrag1 = document.getElementById("drag1").getBoundingClientRect();
        var offsetDrag1x = posDrag1.left - bodyRect.left;
        var offsetDrag1y = posDrag1.top - bodyRect.top;
        var posTarget2 = document.getElementById("target2").getBoundingClientRect();
        var offsetTarget2x = posTarget2.left - bodyRect.left;
        var offsetTarget2y = posTarget2.top - bodyRect.top;
        var posDrag2 = document.getElementById("drag2").getBoundingClientRect();
        var offsetDrag2x = posDrag2.left - bodyRect.left;
        var offsetDrag2y = posDrag2.top - bodyRect.top;
        var posTarget3 = document.getElementById("target3").getBoundingClientRect();
        var offsetTarget3x = posTarget3.left - bodyRect.left;
        var offsetTarget3y = posTarget3.top - bodyRect.top;
        var posDrag3 = document.getElementById("drag3").getBoundingClientRect();
        var offsetDrag3x = posDrag3.left - bodyRect.left;
        var offsetDrag3y = posDrag3.top - bodyRect.top;
        if ((Math.abs(offsetTarget1x - offsetDrag1x) < 15) && (Math.abs(offsetTarget1y - offsetDrag1y) < 15)) {
                document.getElementById("drag1").style.left = offsetTarget1x + "px";
                document.getElementById("drag1").style.top = offsetTarget1y + "px";
                document.getElementById("drag1").style.backgroundColor = "#D3D3D3";
                canDrag1 = false;
        }
        checkForWin();
}

function touchEndHandler2(event) {
        var bodyRect = document.body.getBoundingClientRect();
        var posTarget2 = document.getElementById("target2").getBoundingClientRect();
        var offsetTarget2x = posTarget2.left - bodyRect.left;
        var offsetTarget2y = posTarget2.top - bodyRect.top;
        var posDrag2 = document.getElementById("drag2").getBoundingClientRect();
        var offsetDrag2x = posDrag2.left - bodyRect.left;
        var offsetDrag2y = posDrag2.top - bodyRect.top;
        if ((Math.abs(offsetTarget2x - offsetDrag2x) < 15) && (Math.abs(offsetTarget2y - offsetDrag2y) < 15)) {
                document.getElementById("drag2").style.left = offsetTarget2x + "px";
                document.getElementById("drag2").style.top = offsetTarget2y + "px";
                document.getElementById("drag2").style.backgroundColor = "#D3D3D3";
                canDrag2 = false;
        }
        checkForWin();
}

function touchEndHandler3(event) {
        var bodyRect = document.body.getBoundingClientRect();
        var posTarget3 = document.getElementById("target3").getBoundingClientRect();
        var offsetTarget3x = posTarget3.left - bodyRect.left;
        var offsetTarget3y = posTarget3.top - bodyRect.top;
        var posDrag3 = document.getElementById("drag3").getBoundingClientRect();
        var offsetDrag3x = posDrag3.left - bodyRect.left;
        var offsetDrag3y = posDrag3.top - bodyRect.top;
        if ((Math.abs(offsetTarget3x - offsetDrag3x) < 15) && (Math.abs(offsetTarget3y - offsetDrag3y) < 15)) {
                document.getElementById("drag3").style.left = offsetTarget3x + "px";
                document.getElementById("drag3").style.top = offsetTarget3y + "px";
                document.getElementById("drag3").style.backgroundColor = "#D3D3D3";
                canDrag3 = false;
        }
        checkForWin();
}

function checkForWin() {
        if((canDrag1 == false)&&(canDrag2 == false)&&(canDrag3 == false)) {
                document.getElementById("gameTitle").innerText = "YOU WIN!";
                document.getElementById("gameTitle").style.color = "#CC0000";
        }
} 