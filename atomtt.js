// ==UserScript==
// @name         atomohq
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bypass
// @author       lucx
// @match        *://atomtt.com/index.php
// @match        *://atomtt.com/t_download/*
// @match        *://acorta-enlace.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atomtt.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    if (window.location.hostname.indexOf("acorta-enlace.com") >= 0) {
        window.location.href = DYykkzwP;
    }

    if (window.location.pathname.indexOf("/t_download/") >= 0) {
        if (['dutchycorp.space', 'dutchycorp.ovh'].includes(window.location.hostname) > -1) { var ticker = setInterval(function () { try { window.grecaptcha.execute(); clearInterval(ticker); } catch (e) { } }, 2000); } else { }
    }

    var torrentTimer = setInterval(function () {
        var elements = document.getElementsByClassName("btn-torrent");
        if (elements.length > 0) {
            window.location.href = elements[0].getAttribute("href");

            clearInterval(torrentTimer);
        }
    }, 100);

})();