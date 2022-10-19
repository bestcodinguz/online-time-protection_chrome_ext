// ==UserScript==
// @name Online time protection
// @description A script that helps protect precious time online
// @author DiamondSystems
// @license MIT
// @version 0.1.4
// @include http://*
// @include https://*
// @grant   unsafeWindow
// @icon    https://github.com/bestcodinguz/online-time-protection_chrome_ext/raw/main/icon.png
// @noframe
// @noframes
// ==/UserScript==

(function (window, undefined) {
    "use strict";

    var w = (typeof unsafeWindow !== undefined) ? unsafeWindow : window;

    if (w.self !== w.top)
        return;

    //--- get data
    var otpData = localStorage.getItem('otpData');

    if (typeof otpData != 'string')
        otpData = {a0:0};
    else
    {
        otpData = JSON.parse(otpData);
        if (typeof otpData.a0 == 'undefined' || otpData.a0 !== 0)
            otpData = {a0:0};
    }

    var host = w.location.host;

    if (typeof otpData[host] == "undefined")
    {
        otpData[host] = 1;
    }
    else
    {
        otpData[host]++;
    }

    localStorage.setItem('otpData', JSON.stringify(otpData));

    console.log("TEST", otpData);
     
})(window);