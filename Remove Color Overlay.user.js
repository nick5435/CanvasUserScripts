// ==UserScript==
// @name         Remove Color Overlay from Dashboard
// @version      1.0.1
// @description  Removes the color overlay from course tiles with images
// @author       Chad Scott, Nick Meyer
// @match        https://canvas.unl.edu/
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @grant        none
// ==/UserScript==

( function() {
    'use strict';
//Remove color overlay from course images
function rColor(){
    var x = document.getElementsByClassName('ic-DashboardCard__header_image');
var i;
for (i = 0; i < x.length; i++) {
    var child = x[i].querySelector('.ic-DashboardCard__header_hero');
child.style.opacity = "0";
}
}

window.onload = function() {
   rColor();
};
})();
