// ==UserScript==
// @name         New button in uspceu.com
// @version      0.1
// @description  Adds a button for quick access to GISI+ADE double degree
// @author       You
// @match        https://www.uspceu.com/*
// ==/UserScript==

(function() {
    'use strict';
    let div = document.createElement('div');
    div.innerHTML = '<button id="specialButton" type="button">Open GISI+ADE</button>';
    let c2 = document.getElementById("top-menu");
    let parentDiv = c2.parentNode;

    parentDiv.insertBefore(div, c2);

    document.getElementById ("specialButton").addEventListener ("click", (e)=>{
        window.open("https://www.uspceu.com/oferta/grado/informatica-ade");
    });
})();