// ==UserScript==
// @name Online time protection
// @description A script that helps protect precious time online
// @author DiamondSystems
// @license MIT
// @version 0.1.62
// @include http://*
// @include https://*
// @grant   unsafeWindow
// @grant   GM_registerMenuCommand
// @grant   GM_addStyle
// @icon    https://github.com/bestcodinguz/online-time-protection_chrome_ext/raw/main/icon.png
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js
// @require 
// @noframe
// @noframes
// ==/UserScript==

/**
 * Jquery Modal v0.9.1
 */
GM_addStyle(".blocker{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:auto;z-index:1;padding:20px;box-sizing:border-box;background-color:#000;background-color:rgba(0,0,0,0.75);text-align:center}.blocker:before{content:\"\";display:inline-block;height:100%;vertical-align:middle;margin-right:-0.05em}.blocker.behind{background-color:transparent}.modal{display:none;vertical-align:middle;position:relative;z-index:2;max-width:500px;box-sizing:border-box;width:90%;background:#fff;padding:15px 30px;-webkit-border-radius:8px;-moz-border-radius:8px;-o-border-radius:8px;-ms-border-radius:8px;border-radius:8px;-webkit-box-shadow:0 0 10px #000;-moz-box-shadow:0 0 10px #000;-o-box-shadow:0 0 10px #000;-ms-box-shadow:0 0 10px #000;box-shadow:0 0 10px #000;text-align:left}.modal a.close-modal{position:absolute;top:-12.5px;right:-12.5px;display:block;width:30px;height:30px;text-indent:-9999px;background-size:contain;background-repeat:no-repeat;background-position:center center;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA3hJREFUaAXlm8+K00Acx7MiCIJH/yw+gA9g25O49SL4AO3Bp1jw5NvktC+wF88qevK4BU97EmzxUBCEolK/n5gp3W6TTJPfpNPNF37MNsl85/vN/DaTmU6PknC4K+pniqeKJ3k8UnkvDxXJzzy+q/yaxxeVHxW/FNHjgRSeKt4rFoplzaAuHHDBGR2eS9G54reirsmienDCTRt7xwsp+KAoEmt9nLaGitZxrBbPFNaGfPloGw2t4JVamSt8xYW6Dg1oCYo3Yv+rCGViV160oMkcd8SYKnYV1Nb1aEOjCe6L5ZOiLfF120EjWhuBu3YIZt1NQmujnk5F4MgOpURzLfAwOBSTmzp3fpDxuI/pabxpqOoz2r2HLAb0GMbZKlNV5/Hg9XJypguryA7lPF5KMdTZQzHjqxNPhWhzIuAruOl1eNqKEx1tSh5rfbxdw7mOxCq4qS68ZTjKS1YVvilu559vWvFHhh4rZrdyZ69Vmpgdj8fJbDZLJpNJ0uv1cnr/gjrUhQMuI+ANjyuwftQ0bbL6Erp0mM/ny8Fg4M3LtdRxgMtKl3jwmIHVxYXChFy94/Rmpa/pTbNUhstKV+4Rr8lLQ9KlUvJKLyG8yvQ2s9SBy1Jb7jV5a0yapfF6apaZLjLLcWtd4sNrmJUMHyM+1xibTjH82Zh01TNlhsrOhdKTe00uAzZQmN6+KW+sDa/JD2PSVQ873m29yf+1Q9VDzfEYlHi1G5LKBBWZbtEsHbFwb1oYDwr1ZiF/2bnCSg1OBE/pfr9/bWx26UxJL3ONPISOLKUvQza0LZUxSKyjpdTGa/vDEr25rddbMM0Q3O6Lx3rqFvU+x6UrRKQY7tyrZecmD9FODy8uLizTmilwNj0kraNcAJhOp5aGVwsAGD5VmJBrWWbJSgWT9zrzWepQF47RaGSiKfeGx6Szi3gzmX/HHbihwBser4B9UJYpFBNX4R6vTn3VQnez0SymnrHQMsRYGTr1dSk34ljRqS/EMd2pLQ8YBp3a1PLfcqCpo8gtHkZFHKkTX6fs3MY0blKnth66rKCnU0VRGu37ONrQaA4eZDFtWAu2fXj9zjFkxTBOo8F7t926gTp/83Kyzzcy2kZD6xiqxTYnHLRFm3vHiRSwNSjkz3hoIzo8lCKWUlg/YtGs7tObunDAZfpDLbfEI15zsEIY3U/x/gHHc/G1zltnAgAAAABJRU5ErkJggg==')}.modal-spinner{display:none;position:fixed;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);padding:12px 16px;border-radius:5px;background-color:#111;height:20px}.modal-spinner>div{border-radius:100px;background-color:#fff;height:20px;width:2px;margin:0 1px;display:inline-block;-webkit-animation:sk-stretchdelay 1.2s infinite ease-in-out;animation:sk-stretchdelay 1.2s infinite ease-in-out}.modal-spinner .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.modal-spinner .rect3{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.modal-spinner .rect4{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}@-webkit-keyframes sk-stretchdelay{0%,40%,100%{-webkit-transform:scaleY(0.5)}20%{-webkit-transform:scaleY(1.0)}}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.5);-webkit-transform:scaleY(0.5)}20%{transform:scaleY(1.0);-webkit-transform:scaleY(1.0)}}");
/**
 * User style
 **/
GM_addStyle(".modal>h3{color:black;}");

(function (window, undefined) {
    "use strict";

    var w = (typeof unsafeWindow !== undefined) ? unsafeWindow : window;

    if (w.self !== w.top)
        return;

    var otp = {
        dbName: 'otpData',
        host: w.location.host,
        db: {
            site: {a0:0},
            exclusionTimes: []
        },

        addSettingsExclusionTimes: function(timeFrom, timeTo, isCurrentSite)
        {
            if (isCurrentSite)
            {
                if (typeof otp.db.site[otp.host] == 'undefined')
                    otp.db.site[otp.host] = {exclusionTimes: []};
                
                if (! otp.checkDuplicateExclusionTimes(otp.db.site[otp.host].exclusionTimes, timeFrom, timeTo))
                    return;
                
                otp.db.site[otp.host].exclusionTimes.push({
                    timeFrom: timeFrom,
                    timeTo: timeTo
                });
            }
            else
            {
                if (! otp.checkDuplicateExclusionTimes(otp.db.exclusionTimes, timeFrom, timeTo))
                    return;
                
                otp.db.exclusionTimes.push({
                    timeFrom: timeFrom,
                    timeTo: timeTo
                });
            }
            otp.saveDB();
        },

        checkDuplicateExclusionTimes: function(arr, timeFrom, timeTo)
        {
            var isAdd = true;

            arr.forEach(function(item, i, arr) {
                if (item.timeFrom == timeFrom && item.timeTo == timeTo)
                    return (isAdd = false);
            });

            return isAdd;
        },

        eventOpenAddExclusionTimeModal: function()
        {
            //--- clear inputs
            $('#modalAddExclusionTime input[type="time"]').val('');

            //--- open modal
            $('#modalAddExclusionTime').modal({
                closeExisting: false
            });
        },

        eventAddExclusionTime: function()
        {
            //--- get and check time
            var timeFrom = $('#modalAddExclusionTime input[name="from"]').val();
            var timeTo = $('#modalAddExclusionTime input[name="to"]').val();
            var isCurrentSite = $('#modalAddExclusionTime input[name="currentSite"]').prop('checked');

            if (typeof timeFrom != 'string' || typeof timeTo != 'string' ||
                ! /^[0-9]{2}:[0-9]{2}$/.test(timeFrom) || ! /^[0-9]{2}:[0-9]{2}$/.test(timeTo))
            { return; }

            var splitTimeFrom = timeFrom.split(':').map((num) => parseInt(num));
            var splitTimeTo = timeTo.split(':').map((num) => parseInt(num));

            if (splitTimeFrom[0] < 0 || splitTimeFrom[0] > 23 ||
                splitTimeFrom[1] < 0 || splitTimeFrom[1] > 59 ||
                splitTimeTo[0] < 0 || splitTimeTo[0] > 23 ||
                splitTimeTo[1] < 0 || splitTimeTo[1] > 59)
            { return; }

            //--- check min time
            var minuteFrom = parseInt(splitTimeFrom[0])*60+parseInt(splitTimeFrom[1]);
            var minuteTo = parseInt(splitTimeTo[0])*60+parseInt(splitTimeTo[1]);

            if (minuteFrom == minuteTo || (Math.max(minuteFrom,minuteTo)-Math.min(minuteFrom,minuteTo)) < 5)
                return;

            //--- add exclusion time
            otp.addSettingsExclusionTimes(minuteFrom, minuteTo, isCurrentSite);

            $('#modalAddExclusionTime .close-modal').click();
        },

        createModalExclusionTime: function()
        {
            var html = '<div id="modalExclusionTime" class="modal">';
            html += '<h3>Time of exception</h3>';
            html += '<p><input type="button" name="add" value="Add"></p>';
            html += '</div>';

            $('body').append(html);
            $('#modalExclusionTime input[name="add"]').on('click', this.eventOpenAddExclusionTimeModal);
        },

        createModalAddExclusionTime: function()
        {
            var html = '<div id="modalAddExclusionTime" class="modal">';
            html += '<p><h3>Add exclusion time</h3></p>';
            html += '<p><label for="lModalAddExclusionTimeFrom">From:</label><input type="time" id="lModalAddExclusionTimeFrom" name="from" required>';
            html += '&nbsp;&nbsp;&nbsp;';
            html += '<label for="lModalAddExclusionTimeTo">To:</label><input type="time" id="lModalAddExclusionTimeTo" name="to" required>';
            html += '&nbsp;&nbsp;&nbsp;';
            html += '<input type="checkbox" id="lModalAddExclusionTimeIsCurSite" name="currentSite" checked>';
            html += '<label for="lModalAddExclusionTimeIsCurSite">Only for the current site</label></p>';
            html += '<p><input type="button" name="add" value="Add"></p>';
            html += '</div>';

            $('body').append(html);
            $('#modalAddExclusionTime input[name="add"]').on('click', this.eventAddExclusionTime);
        },

        createModals: function()
        {
            this.createModalExclusionTime();
            this.createModalAddExclusionTime();
        },

        loadDB: function()
        {
            var db = localStorage.getItem(otp.dbName);

            if (typeof db == 'string')
            {
                db = JSON.parse(db);
                if (typeof db.site != 'undefined' && db.site.a0 === 0)
                {
                    otp.db = db;
                    return;
                }
            }

            otp.saveDB();
        },

        saveDB: function()
        {
            localStorage.setItem(otp.dbName, JSON.stringify(otp.db));
        },

        init: function()
        {
            this.loadDB();
            this.createModals();

            // $('#modalExclusionTime').modal();

            //--- Menu command
            GM_registerMenuCommand("Exclusion time", function(){ $("#modalExclusionTime").modal(); });
        }
    };

    otp.init();
     
})(window);