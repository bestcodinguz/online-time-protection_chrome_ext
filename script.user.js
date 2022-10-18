// ==UserScript==
// @name Online time protection
// @description A script that helps protect precious time online
// @author DiamondSystems
// @license MIT
// @version 0.1
// @include *
// @grant none
// ==/UserScript==

(function (window, undefined) {
    var w = (typeof unsafeWindow !== undefined) ? unsafeWindow : window;

    if (w.self !== w.top)
        return;

    // if (! /https:\/\/www\.yourcity\.com/.test(w.location.href))
    //     return; 

    alert("OK");
     
})(window);