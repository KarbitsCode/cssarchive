/*!
 * JavaScript code for dropdown menu (created: February 01, 2025 12:30:14, Hash: 81A4, UID_CRC: EF967046)
 * Copyright (c) 2003-2025 Dropdown Menu Generator. All rights reserved.
 * https://www.dropdownmenugenerator.com
 */

var cmn = new cmnc();
function cmnc() {
    this.ComponentName = 'APNSoft WebControls JS source file.';
    this.Version = 'Version 4.1 (34)';
    this.Copyright = 'Copyright (C) APNSoft. All rights reserved.';
    this.uid = null;
    this.mX = 0;
    this.mY = 0;
    this.InsVrb = null;
    this.RqsBg = null;
    this.RqsDrt = null;
    this.HrfEnb = true;
    this.TmrFdOn = null;
    this.FdOnId = '';
    this.BdX = 0;
    this.BdY = 0;
    this.ErrHr = function (ex, args) {
        try {
            var wen = cmn.Gisv('wen');
            if (wen != 'true')
                return;
            var msg = 'Error! APNSoft Control was unable to perform an operation.';
            if (ex.lineNumber) {
                msg += '\r\nLine Number: ' + ex.lineNumber;
            }
            var cp = args[0];
            if (cp) {
                msg += '\r\nObject: ' + cp;
            }
            if (ex.description) {
                msg += '\r\nDescription: ' + ex.description;
            }
            if (args.callee) {
                var prcs = new String(args.callee);
                var re;
                re = new RegExp('(/\\*)([^/]|([^\\*]/))*\\*/', 'gi');
                prcs = prcs.replace(re, '');
                re = new RegExp('\/\/.*\r\n', 'gi');
                prcs = prcs.replace(re, '\r\n');
                re = new RegExp('\t', 'gi');
                prcs = prcs.replace(re, '');
                re = new RegExp('^\s{2,}', 'gi');
                prcs = prcs.replace(re, '');
                re = new RegExp('\r[\\s]*\n', 'gi');
                prcs = prcs.replace(re, '\r\n');
                re = new RegExp('\n', 'gi');
                prcs = prcs.replace(re, '');
                re = new RegExp('\r', 'gi');
                prcs = prcs.replace(re, '');
                prcs = prcs.substring(0, 500) + '...';
                msg += '\r\n\r\nException Details:\r\n' + prcs;
            }
            msg += '\r\n\r\nPlease contact support at http:\/\/www.apnsoft.com/';
            alert(msg);
        } catch (ex) {}
        return true;
    };
    this.AddEvt = function (el, evt, fn, bubble) {
        if ("addEventListener" in el) {
            try {
                el.addEventListener(evt, fn, bubble);
            } catch (e) {
                if (typeof fn === "object" && fn.handleEvent) {
                    el.addEventListener(evt, function (e) {
                        fn.handleEvent.call(fn, e);
                    }, bubble);
                } else {
                    throw e;
                }
            }
        } else if ("attachEvent" in el) {
            if (typeof fn === "object" && fn.handleEvent) {
                el.attachEvent("on" + evt, function () {
                    fn.handleEvent.call(fn);
                });
            } else {
                el.attachEvent("on" + evt, fn);
            }
        }
    };
    this.GtnIds = function (UID) {
        var res = cmn.Gisv('nidsXML', UID);
        if (res == null || res == undefined) {
            var nids = cmn.Gisv('nids', UID);
            if (typeof(nids) == 'string' && nids == '') {
                nids = null
            };
            if (nids != '' && nids != null && nids != undefined) {
                res = cmn.StrToXml(nids);
                cmn.Sisv('nidsXML', res, UID);
            }
        }
        if (res == undefined)
            res = null;
        return res;
    };
    this.sDv = function (w) {
        if (w == null || w == undefined)
            return;
        w.style.display = 'block';
        w.style.visibility = 'visible';
    };
    this.hDv = function (w, fnc) {
        if (w == null || w == undefined)
            return;
        w.style.display = '';
        w.style.visibility = 'hidden';
        if (fnc != null && fnc != undefined)
            fnc();
    };
    this.sDvOpc = function (w, sp, opTo) {
        if (w == null || w == undefined)
            return;
        var wid = w.id;
        var opFr = 0;
        var opcStp = 20;
        if (cmn.oVs(w) == false) {
            if (cmn.dBv('ie55p')) {
                cmn.sDv(w);
                cmn.StOpc(wid, 0);
            } else {
                cmn.StOpc(wid, 0);
                cmn.sDv(w);
            }
        } else {
            var opct = w.opct;
            if (opct != null && opct != undefined) {
                if (opct < opTo)
                    opFr = opct;
                if (opct >= opTo)
                    return;
            }
        }
        w.opTo = opTo;
        var procID = cmn.rnd();
        w.procID = procID;
        if (cmn.TmrFdOn != null) {
            if (cmn.FdOnId != '' && cmn.FdOnId != wid) {
                cmn.StOpc(cmn.FdOnId, 100);
            }
            clearInterval(cmn.TmrFdOn);
            cmn.TmrFdOn = null;
            cmn.FdOnId = '';
        }
        var i = opFr;
        cmn.TmrFdOn = setInterval(function () {
            i = i + opcStp;
            if (i > opTo) {
                clearInterval(cmn.TmrFdOn);
                cmn.TmrFdOn = null;
                cmn.FdOnId = '';
            }
            cmn.SetOpAut(wid, procID, opcStp);
            cmn.FdOnId = wid;
        }, 30);
    };
    this.hDvOpc = function (w, sp, opFr, mvAw, fnc) {
        if (w == null || w == undefined)
            return;
        if (cmn.oVs(w) == false) {
            return;
        }
        var wid = w.id;
        var opcStp = 40;
        var opct = w.opct;
        if (opct != null && opct != undefined) {
            opFr = opct;
        }
        w.opTo = 0;
        var procID = cmn.rnd();
        w.procID = procID;
        if (cmn.TmrFdOn != null) {
            if (cmn.FdOnId != '' && cmn.FdOnId != wid) {
                cmn.StOpc(cmn.FdOnId, 0);
            }
        }
        var i = 0;
        var TmrFdOff = setInterval(function () {
            i = i + opcStp;
            if (i > opFr) {
                clearInterval(TmrFdOff);
                TmrFdOff = null;
            }
            cmn.SetOpAut(wid, procID, opcStp, mvAw, fnc);
        }, 10);
    };
    this.SetOpAut = function (wid, procID, opcStp, mvAw, fnc) {
        var w = cmn.Mko(wid);
        if (w == null || w == undefined)
            return;
        if ((w.procID != procID) || (w.procID == null) || (w.procID == undefined)) {
            return;
        }
        var opct = w.opct;
        var opTo = w.opTo;
        if (opct == opTo)
            return;
        var opNxt = 0;
        if (opct < opTo) {
            opNxt = opct + opcStp;
            if (opNxt > 100)
                opNxt = 100;
        }
        if (opct > opTo) {
            opNxt = opct - opcStp;
            if (opNxt < 0)
                opNxt = 0;
        }
        cmn.StOpc(wid, opNxt);
        if (opNxt == 100) {
            w.procID = '';
        }
        if (opNxt == 0) {
            w.procID = '';
            cmn.hDv(w, fnc);
            cmn.StOpc(wid, 1000);
            if (mvAw == true) {
                w.style.top = '0px';
                w.style.left = '0px';
            }
        }
    };
    this.oVs = function (w) {
        var rs = false;
        if (!w)
            return rs;
        if (w.style.visibility == 'visible')
            rs = true;
        return rs;
    };
    this.rvs = function (nm, uid) {
        var UID = cmn.uid;
        if (uid != null && uid != undefined) {
            UID = uid;
        }
        var hf = cmn.Mko(nm + '_' + UID + '_vs');
        if (hf == null) {
            return '';
        }
        var res = hf.value;
        if (res == undefined || res == null) {
            res = '';
        }
        return hf.value;
    };
    this.svs = function (nm, vl, uid) {
        var UID = cmn.uid;
        if (uid != null && uid != undefined) {
            UID = uid;
        }
        var hf = cmn.Mko(nm + '_' + UID + '_vs');
        if (hf == null) {
            return;
        }
        hf.value = vl;
    };
    this.RmSl = function () {
        try {
            if (window.getSelection) {
                var myRange = window.getSelection();
                myRange.removeAllRanges();
            } else {
                document.selection.empty();
            }
        } catch (ex) {}
    };
    this.GtTtl = function (wid) {
        var ttl = '';
        try {
            ttl = cmn.Mko(wid).innerHTML;
        } catch (ex) {}
        if (ttl == null || ttl == undefined)
            ttl = '';
        var re = new RegExp('\'', 'gi');
        ttl = ttl.replace(re, '%FB0');
        var re = new RegExp('\\\\', 'gi');
        ttl = ttl.replace(re, '%FD0');
        return ttl;
    };
    this.ItmPrc = function (prc, uid, id, ttl) {
        try {
            if (prc != null && prc != undefined) {
                var re = null;
                if (uid != null && uid != undefined) {
                    re = new RegExp('[$]ComponentID[$]', 'gi');
                    prc = prc.replace(re, uid);
                }
                if (id != null && id != undefined) {
                    re = new RegExp('[$]ItemID[$]', 'gi');
                    prc = prc.replace(re, id);
                }
                if (ttl != null && ttl != undefined) {
                    var re = new RegExp('%FB0', 'gi');
                    ttl = ttl.replace(re, '\\\'');
                    var re = new RegExp('%FD0', 'gi');
                    ttl = ttl.replace(re, '\\\\');
                    re = new RegExp('[$]Title[$]', 'gi');
                    prc = prc.replace(re, ttl);
                }
                var ApplPth = null;
                try {
                    ApplPth = cvd3j76gergyjuhw;
                } catch (e) {}
                if (ApplPth == null || ApplPth == undefined)
                    ApplPth = '';
                re = new RegExp('~', 'gi');
                prc = prc.replace(re, ApplPth);
                prc = eval(TE = prc);
                if (prc != null && prc != undefined) {
                    prc;
                }
            }
        } catch (e) {
            var wen = cmn.Gisv('wen');
            if (wen == 'true') {
                alert('Error! Check the client-side code: ' + prc + '\r\n\r\nDescription: ' + e.description + '.');
            }
        }
    };
    this.AjaxRzErr = function (Tx, cntx) {
        try {
            var wen = cmn.Gisv('wen', cntx);
            if (wen == 'true') {
                var msg = "Error! APNSoft Control cannot get data from the server! \r\nException Details: " + Tx;
                alert(msg);
            }
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.WF_CBCa = function () {
        if (typeof(WebForm_CallbackComplete) == "function") {
            if (WebForm_CallbackComplete != cmn.WF_CBC) {
                WebForm_CallbackComplete = cmn.WF_CBC;
            };
        }
    };
    this.WF_CBC = function () {
        for (var i = 0; i < __pendingCallbacks.length; i++) {
            callbackObject = __pendingCallbacks[i];
            if (callbackObject && callbackObject.xmlRequest && (callbackObject.xmlRequest.readyState == 4)) {
                WebForm_ExecuteCallback(callbackObject);
                if (__pendingCallbacks[i] != null) {
                    if (!__pendingCallbacks[i].async) {
                        __synchronousCallBackIndex = -1;
                    };
                }
                __pendingCallbacks[i] = null;
                var cbfid = "__CALLBACKFRAME" + i;
                var xrf = document.getElementById(cbfid);
                if (xrf) {
                    xrf.parentNode.removeChild(xrf);
                };
            };
        };
    };
    this.getDomAdapter = function () {
        var adapter = '';
        if ('undefined' != typeof(ActiveXObject)) {
            adapter = 'MS';
        } else if ('undefined' != typeof(document) && document.implementation && document.implementation.createDocument && 'undefined' != typeof(DOMParser)) {
            adapter = 'default';
        }
        switch (adapter) {
        case 'MS':
            return new(function () {
                this.createDocument = function () {
                    var names = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"];
                    for (var key in names) {
                        try {
                            return new ActiveXObject(names[key]);
                        } catch (e) {}
                    }
                    throw new Error('Unable to create DOMDocument');
                };
                this.serialize = function (doc) {
                    return doc.xml;
                };
                this.parseXml = function (xml) {
                    var doc = this.createDocument();
                    if (!doc.loadXML(xml)) {
                        throw new Error('Parse error');
                    }
                    return doc;
                };
            })();
        case 'default':
            return new(function () {
                this.createDocument = function () {
                    return document.implementation.createDocument("", "", null);
                };
                this.serialize = function (doc) {
                    return new XMLSerializer().serializeToString(doc);
                };
                this.parseXml = function (xml) {
                    var doc = new DOMParser().parseFromString(xml, "text/xml");
                    if ("parsererror" == doc.documentElement.nodeName) {
                        throw new Error('Parse error');
                    }
                    return doc;
                };
            })();
        default:
            throw new Error('Unable to select the DOM adapter');
        }
    };
    this.StrToXml = function (str) {
        var res = cmn.getDomAdapter().parseXml('<t>' + str + '</t>');
        return res;
    };
    this.InnXml = function (xml) {
        var str = (new XMLSerializer()).serializeToString(xml);
        return str;
    };
    this.NdAtr = function (nam, atr, UID) {
        var nIds = cmn.GtnIds(UID);
        if (nIds == null)
            return null;
        var nd = nIds.getElementsByTagName('i' + nam)[0];
        if (nd == null)
            return null;
        var vl = nd.getAttribute(atr);
        return vl;
    };
    this.ShwShd = function (Obj, PngShdCnt, ccp) {
        if (PngShdCnt == null || PngShdCnt == '')
            return;
        if (PngShdCnt < 2)
            return;
        var x = cmn.pX(Obj);
        var y = cmn.pY(Obj);
        var zIndex = Obj.style.zIndex;
        var ShLft = null;
        if (PngShdCnt == 3) {
            ShLft = cmn.CrtDv(Obj.id + '_Sh0');
            ShLft.style.zIndex = zIndex;
        }
        var ShRgt = cmn.CrtDv(Obj.id + '_Sh1');
        ShRgt.style.zIndex = zIndex;
        var ShBtm = cmn.CrtDv(Obj.id + '_Sh2');
        ShBtm.style.zIndex = zIndex;
        var ShCrn = cmn.CrtDv(Obj.id + '_Sh3');
        ShCrn.style.zIndex = zIndex;
        if (ShLft != null) {
            ShLft.className = ccp + 'ShdLft ' + ccp + 'ShdCmn';
            cmn.setTop(ShLft, y);
            cmn.setLeft(ShLft, x - ShLft.offsetWidth);
            ShLft.style.height = Obj.offsetHeight + 'px';
            try {
                if (dm) {
                    cmn.AddEvt(ShLft, 'mouseover', function () {
                        clearTimeout(dm.ocM);
                        dm.ocM = null;
                    }, false);
                    cmn.AddEvt(ShLft, 'mouseout', function () {
                        dm.uD();
                    }, false);
                }
            } catch (ex) {}
            cmn.sDv(ShLft);
        }
        ShRgt.className = ccp + 'ShdRgt ' + ccp + 'ShdCmn';
        cmn.setLeft(ShRgt, x + Obj.offsetWidth);
        cmn.setTop(ShRgt, y);
        ShRgt.style.height = Obj.offsetHeight + 'px';
        try {
            if (dm) {
                cmn.AddEvt(ShRgt, 'mouseover', function () {
                    clearTimeout(dm.ocM);
                    dm.ocM = null;
                }, false);
                cmn.AddEvt(ShRgt, 'mouseout', function () {
                    dm.uD();
                }, false);
            }
        } catch (ex) {}
        cmn.sDv(ShRgt);
        ShCrn.className = ccp + 'ShdCrn ' + ccp + 'ShdCmn';
        cmn.setLeft(ShCrn, x + Obj.offsetWidth + ShRgt.offsetWidth - ShCrn.offsetWidth);
        cmn.setTop(ShCrn, y + Obj.offsetHeight);
        try {
            if (dm) {
                cmn.AddEvt(ShCrn, 'mouseover', function () {
                    clearTimeout(dm.ocM);
                    dm.ocM = null;
                }, false);
                cmn.AddEvt(ShCrn, 'mouseout', function () {
                    dm.uD();
                }, false);
            }
        } catch (ex) {}
        cmn.sDv(ShCrn);
        ShBtm.className = ccp + 'ShdBtm ' + ccp + 'ShdCmn';
        cmn.setTop(ShBtm, y + Obj.offsetHeight);
        if (PngShdCnt == 2) {
            cmn.setLeft(ShBtm, x);
            ShBtm.style.width = Obj.offsetWidth + ShRgt.offsetWidth - ShCrn.offsetWidth + 'px';
        }
        if (PngShdCnt == 3) {
            cmn.setLeft(ShBtm, x - ShLft.offsetWidth);
            ShBtm.style.width = Obj.offsetWidth + ShLft.offsetWidth + ShRgt.offsetWidth - ShCrn.offsetWidth + 'px';
        }
        try {
            if (dm) {
                cmn.AddEvt(ShBtm, 'mouseover', function () {
                    clearTimeout(dm.ocM);
                    dm.ocM = null;
                }, false);
                cmn.AddEvt(ShBtm, 'mouseout', function () {
                    dm.uD();
                }, false);
            }
        } catch (ex) {}
        cmn.sDv(ShBtm);
    };
    this.HdShd = function (Obj) {
        var ShDv = null;
        for (var i = 0; i < 4; i++) {
            ShDv = cmn.Mko(Obj.id + '_Sh' + i);
            if (ShDv != null) {
                cmn.setLeft(ShDv, 0);
                cmn.setTop(ShDv, 0);
                cmn.hDv(ShDv);
            }
        }
    };
    this.GtCssRl = function (cls, rul) {
        var res = '';
        try {
            for (var i = 0; i < document.styleSheets.length; i++) {
                var st = document.styleSheets[i];
                var rls = st.cssRules;
                if (rls == null || rls == undefined)
                    rls = st.rules;
                for (var j = 0; j < rls.length; j++) {
                    var rl = rls[j];
                    if (rl.selectorText != null && rl.selectorText != undefined) {
                        if (rl.selectorText.toLowerCase() == ('.' + cls.toLowerCase())) {
                            res = eval('rl.style.' + rul);
                            break;
                        }
                    }
                }
            }
        } catch (ex) {}
        return res;
    };
    this.cmc = function (e) {
        if (!e)
            e = window.event;
        if (e) {
            if (e.pageX || e.pageY) {
                cmn.mX = e.pageX;
                cmn.mY = e.pageY;
            } else if (e.clientX || e.clientY) {
                cmn.mX = e.clientX + document.body.scrollLeft;
                cmn.mY = e.clientY + document.body.scrollTop;
            }
        };
    };
    this.ScrVals = function () {
        var doc = document.documentElement;
        var scL = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        var scT = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        return {
            'scL': scL,
            'scT': scT
        };
    };
    this.WinScrV = function () {
        if (typeof window.innerWidth === 'number')
            return window.innerWidth > document.documentElement.clientWidth;
        var rt = document.documentElement || document.body;
        var of = null;
        if (typeof rt.currentStyle !== 'undefined')
            of = rt.currentStyle.overflow;
        of = of || window.getComputedStyle(rt, '').overflow;
        var ofY = null;
        if (typeof rt.currentStyle !== 'undefined')
            ofY = rt.currentStyle.overflowY;
        ofY = ofY || window.getComputedStyle(rt, '').overflowY;
        var cnof = rt.scrollHeight > rt.clientHeight;
        var ovSh = /^(visible|auto)$/.test(of) || /^(visible|auto)$/.test(ofY);
        var alShSc = of === 'scroll' || ofY === 'scroll';
        return (cnof && ovSh) || (alShSc);
    };
    this.pX = function (w) {
        var cl = 0;
        if (w == null)
            return cl;
        if (w.parentNode == null)
            return cl;
        if (w.offsetParent) {
            while (w) {
                cl += w.offsetLeft;
                w = w.offsetParent;
            }
        } else {
            if (w.x) {
                cl += w.x;
            }
        }
        return cl;
    };
    this.pY = function (w) {
        var ct = 0;
        if (w == null)
            return ct;
        if (w.parentNode == null)
            return ct;
        if (w.offsetParent) {
            while (w) {
                ct += w.offsetTop;
                w = w.offsetParent;
            }
        } else {
            if (w.y) {
                ct += w.y;
            }
        }
        return ct;
    };
    this.pX2 = function (w) {
        var ct = 0;
        while (w) {
            ct += (w.offsetLeft - w.scrollLeft + w.clientLeft);
            w = w.offsetParent;
        }
        return ct;
    };
    this.pY2 = function (w) {
        var ct = 0;
        while (w) {
            ct += (w.offsetTop - w.scrollTop + w.clientTop);
            w = w.offsetParent;
        }
        return ct;
    };
    this.pX3 = function (w) {
        return cmn.pXY3(w).left;
    };
    this.pY3 = function (w) {
        return cmn.pXY3(w).top;
    };
    this.pXY3 = function (elem) {
        var box = elem.getBoundingClientRect();
        var body = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return {
            top: Math.round(top),
            left: Math.round(left)
        };
    };
    this.GetBdXY = function () {
        try {
            var Dv = document.createElement('DIV');
            Dv.id = "Dv4567345";
            Dv.style.position = 'absolute';
            Dv.style.display = 'Block';
            Dv.style.left = '0px';
            Dv.style.top = '0px';
            Dv.style.width = '100px';
            Dv.style.height = '100px';
            Dv.style.visibility = 'hidden';
            Dv.style.zIndex = 0;
            document.body.appendChild(Dv);
            cmn.BdX = cmn.pX3(Dv);
            cmn.BdY = cmn.pY3(Dv);
            document.body.removeChild(Dv);
            if (cmn.BdX < 0)
                cmn.BdX = 0;
            if (cmn.BdY < 0)
                cmn.BdY = 0;
        } catch (e) {}
    };
    this.setLeft = function (w, L) {
        if (w == null || w == undefined)
            return;
        w.style.left = L + 'px';
        var Req = w.offsetLeft;
        var Cur = cmn.pX(w);
        var Del = Req - Cur;
        w.style.left = (L + Del) + 'px';
    };
    this.setTop = function (w, T) {
        if (w == null || w == undefined)
            return;
        w.style.top = T + 'px';
        var Req = w.offsetTop;
        var Cur = cmn.pY(w);
        var Del = Req - Cur;
        w.style.top = (T + Del) + 'px';
    };
    this.Sisv = function (key, val, uid) {
        var UID = cmn.uid;
        if (uid != null && uid != undefined) {
            UID = uid;
        }
        if (cmn.InsVrb == null) {
            cmn.InsVrb = new Object();
            cmn.InsVrb.obj = eval(UID + 'L');
            cmn.InsVrb.name = UID;
        } else {
            if (cmn.InsVrb.name != UID) {
                cmn.InsVrb.obj = eval(UID + 'L');
                cmn.InsVrb.name = UID;
            }
        }
        cmn.InsVrb.obj[key] = val;
    };
    this.Gisv = function (key, uid) {
        var UID = cmn.uid;
        if (uid != null && uid != undefined) {
            UID = uid;
        }
        var val = '';
        if (UID == null || UID == undefined)
            return val;
        if (UID == '')
            return val;
        var Obj = null;
        cmn.InsVrb = new Object();
        try {
            Obj = eval(UID + 'L');
        } catch (e) {}
        if (Obj == null || Obj == undefined)
            return '';
        cmn.InsVrb.obj = Obj;
        cmn.InsVrb.name = UID;
        val = cmn.InsVrb.obj[key];
        return val;
    };
    this.href = function (u, t) {
        if (this.HrfEnb == false)
            return;
        var v;
        var nh;
        var re = null;
        u = cmn.trim(u);
        t = cmn.trim(t);
        if (u == '' || u == null || u == undefined) {
            return;
        }
        if (t == '' || t == null || t == undefined) {
            t = '_top';
        }
        try {
            var re = new RegExp('&amp;', 'gi');
            u = u.replace(re, '&');
            u = u.replace('$Rnd$', cmn.rnd());
            try {
                var FstChr = u.charAt(0);
                if (FstChr == '~') {
                    var host = window.location.protocol + String.fromCharCode(47, 47) + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
                    u = u.replace('~', host);
                }
            } catch (e) {}
            var u_l = u.toLowerCase();
            if (u_l.indexOf('.com') > 0 || u_l.indexOf('.net') > 0 || u_l.indexOf('.org') > 0 || u_l.indexOf('.gov') > 0 || u_l.indexOf('.mil') > 0 || u_l.indexOf('.info') > 0 || u_l.indexOf('.co.uk') > 0) {
                if (u_l.indexOf('http') != 0 && u_l.indexOf('ftp') != 0 && u_l.indexOf('file') != 0 && u_l.indexOf('mailto') != 0) {
                    if (u_l.indexOf('@') > -1) {
                        u = 'mailto:' + u;
                    } else {
                        u = 'http:\/\/' + u;
                    }
                }
            } else {
                if (u_l.indexOf('www') == 0) {
                    u = 'http:\/\/' + u;
                }
            }
            v = open(u, t);
        } catch (e) {}
    };
    this.APB = function (uid, id) {
        try {
            __doPostBack(uid, id);
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.CrtDv = function (id) {
        var Dv = cmn.Mko(id);
        if (Dv == null) {
            Dv = document.createElement('DIV');
            Dv.name = id;
            Dv.id = id;
            Dv.style.position = 'absolute';
            Dv.style.display = 'block';
            Dv.style.left = '0px';
            Dv.style.top = '0px';
            Dv.style.visibility = 'hidden';
            Dv.style.whiteSpace = 'nowrap';
            document.body.appendChild(Dv);
        }
        return Dv;
    };
    this.cIFR = function (ifid, uid) {
        var ifr = document.createElement('iframe');
        ifr.id = ifid;
        ifr.src = cmn.Gisv('EmpHtm', uid);
        ifr.border = 0;
        ifr.frameBorder = 0;
        ifr.marginHeight = 0;
        ifr.marginWidth = 0;
        ifr.scrolling = 'no';
        ifr.style.position = 'absolute';
        ifr.style.display = 'none';
        ifr.style.top = '0px';
        ifr.style.left = '0px';
        ifr.style.width = '1px';
        ifr.style.height = '1px';
        ifr.style.backgroundColor = 'transparent';
        return ifr;
    };
    this.cmb = function () {
        var r = false;
        if (!document.compatMode || document.compatMode == undefined) {
            var tmp = null;
            tmp = document.createElement('div');
            tmp.style.width = '1';
            if (tmp.style.width == '') {
                r = true;
            }
            tmp = null;
            return r;
        }
        if (document.compatMode && document.compatMode.toLowerCase().indexOf('back') < 0) {
            r = true;
        }
        return r;
    };
    this.Mko = function (n) {
        var Ob;
        try {
            Ob = document.getElementById(n);
        } catch (e) {
            return null;
        }
        if (Ob == undefined)
            return null;
        return Ob;
    };
    this.trim = function (str) {
        var s = new String(str);
        if (s == '' || s == null || s == undefined)
            return s;
        s = s.replace(/^\s*/, '').replace(/\s*$/, '');
        return s;
    };
    this.rnd = function () {
        var RND = '';
        var _rnd = Math.random() * 100000000;
        RND = Math.round(_rnd) + '';
        return RND;
    };
    this.dBv = function (nm) {
        var mj = 0;
        try {
            mj = parseInt(navigator.appVersion);
        } catch (ex) {}
        var ua = navigator.userAgent.toLowerCase();
        var op = (ua.indexOf("opera") != -1);
        var op2 = (ua.indexOf("opera 2") != -1 || ua.indexOf("opera/2") != -1);
        var op3 = (ua.indexOf("opera 3") != -1 || ua.indexOf("opera/3") != -1);
        var op4 = (ua.indexOf("opera 4") != -1 || ua.indexOf("opera/4") != -1);
        var op5p = (op && !op2 && !op3 && !op4);
        var ie = ((ua.indexOf("msie") != -1) && (ua.indexOf("opera") == -1));
        var ie3 = (ie && (mj < 4));
        var ie4 = (ie && (mj == 4) && (ua.indexOf("msie 4") != -1));
        var ie5 = (ie && (mj == 4) && (ua.indexOf("msie 5.0") != -1));
        var ie55p = (ie && !ie3 && !ie4 && !ie5);
        var ie9 = (ie && (mj == 5) && (ua.indexOf("msie 9.0") != -1));
        var ie9p = false;
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var ieversion = new Number(RegExp.$1);
            if (ieversion >= 9 && ie9)
                ie9p = true;
        }
        var saf = ((ua.indexOf('safari') != -1) && (ua.indexOf('mac') != -1)) ? true : false;
        var SafWin = (!saf && (ua.indexOf('safari') != -1) && (ua.indexOf('windows') != -1)) ? true : false;
        var Chr = (SafWin && (ua.indexOf("chrome") != -1));
        if (Chr == true)
            SafWin = false;
        var FF = ((ua.indexOf('firefox') != -1) && (!ie55p) && (ua.indexOf('mozilla/5') != -1) && (ua.indexOf('spoofer') == -1) && (ua.indexOf('compatible') == -1) && (ua.indexOf('opera') == -1) && (ua.indexOf('webtv') == -1) && (ua.indexOf('hotjava') == -1));
        var FF3p = (FF && (ua.indexOf("firefox/2") == -1));
        return (eval(nm));
    };
    this.GPg = function () {
        var P = location.href;
        if (P.indexOf('?') > -1) {
            P = P.substring(0, P.indexOf('?'));
        }
        return P;
    };
    this.Delay = function (ms) {
        var date = new Date();
        var curDate = null;
        do {
            curDate = new Date();
        } while (curDate - date < ms);
    };
    this.outerHTML = function (elm) {
        try {
            var res = elm.outerHTML;
            if ((res != null) && (res != undefined)) {
                return res;
            }
            var tmp = null;
            tmp = document.createElement('div');
            tmp.appendChild(elm.cloneNode(true));
            res = tmp.innerHTML;
            tmp = null;
            return res;
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.GtSdStr = function (cls) {
        var Shd = 0;
        var shd = cmn.GtCssRl(cls, 'filter');
        if (shd != undefined && shd != null) {
            shd = shd.toLowerCase();
            var ind = shd.indexOf('strength=') + 9;
            shd = shd.substring(ind, ind + 3);
            Shd = parseInt(shd);
            if (isNaN(Shd))
                Shd = 0;
        }
        return Shd;
    };
    this.StOpcObj = function (w, op) {
        if (w == null || w == undefined)
            return;
        var ws = w.style;
        if (ws == null || ws == undefined)
            return;
        var fv = op / 100;
        w.opct = op;
        if ((ws.opacity != null) && (ws.opacity != undefined)) {
            w.style.opacity = fv;
        }
        if ((ws.filter != null) && (ws.filter != undefined)) {
            var filter = cmn.GtCssRl(w.className, 'filter');
            ws.filter = filter;
            if (op < 100) {
                ws.filter += ' alpha(opacity=' + op + ')';
            }
            return;
        }
        if ((ws.MozOpacity != null) && (ws.MozOpacity != undefined)) {
            ws.MozOpacity = fv;
            return;
        }
        if ((ws.opacity != null) && (ws.opacity != undefined)) {
            ws.opacity = fv;
            return;
        }
        if ((ws.KhtmlOpacity != null) && (ws.KhtmlOpacity != undefined)) {
            ws.KhtmlOpacity = fv;
            return;
        }
    };
    this.StOpc = function (wid, op) {
        var w = cmn.Mko(wid);
        if (w == null || w == undefined)
            return;
        cmn.StOpcObj(w, op);
    };
    this.GtAjxLd = function () {
        var res = null;
        try {
            res = zcc46jhssgd54ffggesh4;
        } catch (e) {}
        if (res == null || res == undefined)
            res = '';
        return res;
    };
    this.EncodeValue = function (val) {
        var res = val;
        var re;
        re = new RegExp(';', 'gi');
        res = res.replace(re, '%FA0');
        re = new RegExp('\'', 'gi');
        res = res.replace(re, '%FB0');
        re = new RegExp('\\\\', 'gi');
        res = res.replace(re, '%FD0');
        re = new RegExp('"', 'gi');
        res = res.replace(re, '%FE0');
        re = new RegExp('=', 'gi');
        res = res.replace(re, '%FG0');
        re = new RegExp(',', 'gi');
        res = res.replace(re, '%FH0');
        re = new RegExp('<BR[^>]*>', 'gi');
        res = res.replace(re, '%FFFBR');
        re = new RegExp('<br[^>]*>', 'gi');
        res = res.replace(re, '%FFFBR');
        return res;
    };
    this.DecodeValue = function (val) {
        var res = val;
        var re;
        re = new RegExp('%FA0', 'gi');
        res = res.replace(re, ';');
        re = new RegExp('%FB0', 'gi');
        res = res.replace(re, '\'');
        re = new RegExp('%FD0', 'gi');
        res = res.replace(re, '\\\\');
        re = new RegExp('%FE0', 'gi');
        res = res.replace(re, '"');
        re = new RegExp('%FG0', 'gi');
        res = res.replace(re, '=');
        re = new RegExp('%FH0', 'gi');
        res = res.replace(re, ',');
        re = new RegExp('%FFFBR', 'gi');
        res = res.replace(re, '<BR>');
        return res;
    };
    this.SetAttr2 = function (obj, name, val) {
        try {
            var attr = obj.attributes[name];
            if (attr == null || attr == undefined) {
                attr = document.createAttribute(name);
                obj.setAttributeNode(attr);
            }
            attr.value = val;
            if (val == '')
                obj.removeAttribute(name);
        } catch (e) {
            alert(e);
        }
    };
    this.SetAttr = function (id, name, val) {
        try {
            var obj = cmn.Mko(id);
            if (obj == null) {
                throw 'Element [' + id + '] not found!';
                return false;
            }
            cmn.SetAttr2(obj, name, val);
        } catch (e) {
            alert(e);
        }
    };
    this.GetAttr = function (id, name) {
        var res = '';
        try {
            var obj = cmn.Mko(id);
            if (obj == null) {
                throw 'Element [' + id + '] not found!';
                return '';
            }
            res = cmn.GetAttr2(obj, name);
            return res;
        } catch (e) {
            alert(e);
        }
        return res;
    };
    this.GetAttr2 = function (obj, name) {
        var res = '';
        var attr = obj.attributes[name];
        if (attr == null || attr == undefined) {
            var tst_elm = document.createElement('div');
            tst_elm.innerHTML = this.outerHTML(obj);
            var elm = tst_elm.childNodes[0];
            attr = elm.attributes[name];
            if (attr == null || attr == undefined) {
                return '';
            }
        }
        res = attr.value;
        if (res == null)
            res = '';
        if (typeof res === "undefined")
            res = '';
        return res;
    };
    this.PBtoURL = function (u) {
        var url = u.toLowerCase();
        if ((url.indexOf('http:') == 0) || (url.indexOf('https:') == 0)) {
            var x = open(u, '_top');
            return;
        }
        document.forms[0].action = u;
        document.forms[0].__VIEWSTATE.name = 'NOVIEWSTATE';
        __doPostBack(document.forms[0].id, null);
    };
    this.IsHTML5 = function () {
        var res = false;
        var pbid = null;
        var dt = document.doctype;
        if (dt != null && dt != undefined) {
            pbid = dt.publicId;
            if (pbid == null || pbid == '') {
                res = true;
            }
            return res;
        } else {
            dt = document.all[0].text;
            if (dt != null && dt != undefined) {
                dt = dt.toLowerCase();
                if (dt != '' && dt.indexOf('public') == -1) {
                    res = true;
                }
            }
        }
        return res;
    };
    this.IsMobChk = function () {
        try {
            if (sessionStorage.desktop)
                return false;
            if (localStorage.mobile)
                return true;
        } catch (ex) {}
        try {
            var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
            var nav = navigator.userAgent.toLowerCase();
            for (var i = 0; i < mobile.length; i++) {
                if (nav.indexOf(mobile[i].toLowerCase()) > 0) {
                    return true;
                    break;
                }
            }
        } catch (ex) {}
        return false;
    };
    this.RegWbFnt = function (Fid, Fml, Path, Rnd, Frmt) {
        var CssFn = '@font-face {font-family: \'' + Fml + '\';src:url(\'' + Path + '.eot?a' + Rnd + '\');src:url(\'' + Path + '.eot?a' + Rnd + '#iefix\') format(\'embedded-opentype\'), url(\'' + Path + '.woff?a' + Rnd + '\') format(\'woff\'), url(\'' + Path + '.ttf?a' + Rnd + '\') format(\'truetype\');font-weight: normal;font-style: normal;}';
        var Css = '';
        if (Frmt) {
            Css = '[class="' + Fml + '"] {font-family: \'' + Fml + '\' !important;font-style: normal;font-weight: normal;font-variant: normal;text-transform: none;line-height: 1;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}';
        }
        cmn.RegPageCss(Fid, CssFn + Css, true);
    };
    this.UnRegStyle = function (Sid, Msk, Excl) {
        var res = 0;
        var Hd = document.getElementsByTagName('head')[0];
        var stls = document.getElementsByTagName('style');
        for (var i = 0; i < stls.length; i++) {
            if (stls[i] != null && stls[i] != undefined) {
                var stid = stls[i].getAttribute('id');
                if (stid != null && stid != undefined) {
                    if (Sid != '*' && stid == Sid) {
                        Hd.removeChild(stls[i]);
                        res++;
                    }
                    if (Sid == '*' && stid.indexOf(Msk) > -1) {
                        if (stid != Excl) {
                            Hd.removeChild(stls[i]);
                            res++;
                        }
                    }
                }
            }
        }
        return res;
    };
    this.RegPageCss = function (id, Css, SkipAdd) {
        if (SkipAdd == true) {
            var Reg = true;
            var stls = document.getElementsByTagName('style');
            for (var i = 0; i < stls.length; i++) {
                if (stls[i] != null && stls[i] != undefined) {
                    var stid = stls[i].getAttribute('id');
                    if (stid != null && stid != undefined) {
                        if (stid == id) {
                            Reg = false;
                            break;
                        }
                    }
                }
            }
            if (Reg == false) {
                return;
            }
        }
        var Hd = document.getElementsByTagName('head')[0];
        var stl = document.createElement('style');
        stl.setAttribute('type', 'text/css');
        stl.setAttribute('id', id);
        if (stl.styleSheet == null || stl.styleSheet == undefined) {
            try {
                stl.innerHTML = Css;
            } catch (err) {
                try {
                    stl.textContent = Css;
                } catch (err) {
                    stl.innerText = Css;
                }
            }
        } else {
            stl.styleSheet.cssText = Css;
        }
        Hd.appendChild(stl);
    };
    this.GetCompStyle = function (w, nm) {
        return parseInt(window.getComputedStyle(w, null).getPropertyValue(nm));
    };
    this.DeCompact = function (s, c, m, g, r) {
        if (r == '1') {
            s = s.replace(/<2>/gi, '!important;" onclick="cmn.href(\'');
            s = s.replace(/<1>/gi, '\');dm.RspSubHd(\'<r>\');');
            s = s.replace(/<0>/gi, '</div><div<t>SubResDIV" style="padding-left:');
        }
        s = s.replace(/<h>/gi, '<e>' + c + 'TitleTD<k>_i');
        s = s.replace(/<y>/gi, ');<c>><tr><td<t>IconTD<o>');
        s = s.replace(/<z>/gi, '\');cmn.href(\'');
        s = s.replace(/<w>/gi, 'SubMenuDIV" onclick="dm.mc();" onmouseover="dm.vD();" onmouseout="dm.uD();"><div style="display:-moz-inline-stack;display:inline-block;margin:0;vertical-align:top;position:absolute;');
        s = s.replace(/<t>/gi, ' class=\"' + c);
        s = s.replace(/<r>/gi, m);
        s = s.replace(/<o>/gi, '"><font class="' + g + '"');
        s = s.replace(/<n>/gi, '" onclick="dm.ItClk(this,');
        s = s.replace(/<l>/gi, '" class="' + c + 'SubMenuItemTD" onmouseover="dm.v(this, ');
        s = s.replace(/<k>/gi, '" id="' + m);
        s = s.replace(/<j>/gi, '</td><td class="' + c);
        s = s.replace(/<g>/gi, '<tr><td onmouseout="dm.u(this);" id="');
        s = s.replace(/<f>/gi, '">&nbsp;</td></tr></table></td></tr>');
        s = s.replace(/<e>/gi, '</font></td><td class="');
        s = s.replace(/<d>/gi, '</font></td></tr></table></td></tr><tr><td ');
        s = s.replace(/<c>/gi, '"><table border="0" cellspacing="0" cellpadding="0"');
        return s;
    };
    this.Show = function (vrb, clr) {
        var ID = 'DebugDiv';
        var Dv = cmn.Mko(ID);
        if (Dv == null) {
            Dv = document.createElement('DIV');
            Dv.name = ID;
            Dv.id = ID;
            Dv.style.position = 'absolute';
            Dv.style.display = 'Block';
            Dv.style.left = '360px';
            Dv.style.top = '360px';
            Dv.style.visibility = 'visible';
            Dv.style.color = '#AB2E00';
            Dv.style.background = '#eaeaea';
            Dv.style.fontSize = '12px';
            Dv.style.border = 'solid 1px red';
            Dv.style.zIndex = 50000;
            document.body.appendChild(Dv);
        }
        try {
            var re = new RegExp('&', 'gi');
            vrb = vrb.replace(re, '&amp;');
            re = new RegExp('<', 'gi');
            vrb = vrb.replace(re, '&lt;');
            re = new RegExp('>', 'gi');
            vrb = vrb.replace(re, '&gt;');
        } catch (ex) {}
        if (clr != '' && clr != null && clr != undefined)
            vrb = '<font color=\'' + clr + '\'>' + vrb + '</font>';
        Dv.innerHTML += '==Result==: ' + vrb + '<br/>';
    };
};

var dm = new dmc();
function dmc() {
    this.ComponentName = 'APNSoft WebControls JS source file.';
    this.Version = 'Version 4.2 (127)';
    this.Copyright = 'Copyright (C) APNSoft. All rights reserved.';
    this.ie = (document.all);
    this.n6 = (document.getElementById && !this.ie);
    this.uid = '';
    this.tObj;
    this.mO = 1;
    this.Lvl;
    this.oDr = 1;
    this.tr = false;
    this.Oms = new Array(12);
    this.ocM;
    this.ocD;
    this.ocMt = 600;
    this.ocDt = 250;
    this.SMScrl = false;
    this.EDV = '0';
    this.cdID = '';
    this.smch = true;
    this.tmpo = null;
    this.mwc = 0;
    this.omc = '';
    this.omm = '';
    this.dttob;
    this.tdo = null;
    this.cAmt = null;
    this.smo = '0';
    this.eommo = false;
    this.cifs = null;
    this.ttf = null;
    this.hmp = 0;
    this.SmIsSc = false;
    this.DsplX = 0;
    this.DsplY = 0;
    this.IsMob = false;
    this.HovItm = '';
    this.OnEmptSp = false;
    this.BdRltv = false;
    this.i = function (mid, t, wbfnt) {
        try {
            if (wbfnt == null || wbfnt == undefined)
                wbfnt = '';
            var div = cmn.Mko(mid + '_-0p');
            var uid_l = cmn.Gisv('uid', mid);
            if ((uid_l == '' || div == null) && t < 50) {
                t++;
                setTimeout('dm.i(\'' + mid + '\',' + t + ',\'' + wbfnt + '\');', 50);
                return;
            }
            if (div) {
                dm.IsMob = cmn.IsMobChk();
                if (dm.IsMob == true) {
                    cmn.Sisv('smc', '2', mid);
                }
                dm.uid = mid;
                dm.dInO(mid);
                dm.HSPth(mid);
                dm.mO = cmn.Gisv('o', mid);
                var DvPdd = 0;
                try {
                    DvPdd = cmn.GetCompStyle(div, 'padding-left');
                    div.DvPdd = DvPdd;
                } catch (ep) {}
                if (dm.mO == '1') {
                    var tbl = div.childNodes[0];
                    var sum = tbl.offsetWidth;
                    var tbl2 = cmn.Mko(mid + '_rtb');
                    if (tbl2 != null) {
                        sum += tbl2.offsetWidth;
                    }
                    if (tbl2 != null) {
                        DvPdd += 2
                    };
                    sum += ((DvPdd) * 2);
                    div.style.minWidth = sum + 'px';
                    div.mnwdt = sum;
                    if (tbl2 != null) {
                        var ltr = tbl.rows[0];
                        var rtr = tbl2.rows[0];
                        var lwdt = ltr.offsetHeight;
                        var rwdt = rtr.offsetHeight;
                        if (lwdt != rwdt) {
                            if (lwdt > rwdt) {
                                rtr.style.height = lwdt + 'px';
                            } else {
                                ltr.style.height = rwdt + 'px';
                            }
                        }
                    }
                }
                if (dm.mO == '2') {
                    var tbl = div.childNodes[0];
                    div.style.visibility = 'visible';
                    var _WdtVrtMn = cmn.Gisv('WdtVrtMn', mid);
                    if (_WdtVrtMn != false) {
                        dm.StEqWd(tbl);
                        if (wbfnt != '') {
                            var fnrg = cmn.Mko(wbfnt);
                            if (fnrg == null) {
                                div.intw = tbl.offsetWidth;
                                dm.itw(mid, 0);
                            }
                        } else {
                            var asn = function () {
                                tbl.wprc = '0';
                                dm.StEqWd(tbl);
                            };
                            setTimeout(asn, 50);
                        }
                    } else {
                        dm.DsplHdrs(tbl);
                    }
                }
                var DvMb = cmn.Mko(mid + '_Mob');
                if (DvMb) {
                    var InRs = function () {
                        try {
                            var SbDv = cmn.Mko(mid + '_Mob-p');
                            var dv = cmn.Mko(mid + '_-0p');
                            cmn.AddEvt(window, 'resize', function (e) {
                                dm.WinRsz(e, mid, DvMb, SbDv, dv);
                            }, false);
                            cmn.AddEvt(window, 'scroll', function (e) {
                                dm.WinRsz(e, mid, DvMb, SbDv, dv);
                            }, false);
                            dm.RspMnAct(mid, DvMb, SbDv, dv);
                        } catch (exx) {}
                    };
                    setTimeout(InRs, 20);
                }
                try {
                    var style = window.getComputedStyle(document.body);
                    if (style.getPropertyValue('position') == 'relative') {
                        dm.BdRltv = true;
                        cmn.GetBdXY();
                    }
                } catch (ex3) {}
                return;
            }
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.WinRsz = function (e, uid, DvMb, SbDv, dv) {
        dm.RspMnAct(uid, DvMb, SbDv, dv);
    };
    this.RspMnAct = function (uid, DvMb, SbDv, dv) {
        try {
            var MnTbl = dv.childNodes[0];
            var pdL = cmn.pX(MnTbl);
            var RgEdg = pdL + dv.mnwdt;
            var DvPdd = 0;
            var wW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var _ScrVals = cmn.ScrVals();
            wW = wW + _ScrVals.scL;
            var SBr = 0;
            if (!dm.IsMob)
                SBr = 17;
            wW = wW - SBr;
            if (MnTbl.RgEdg != null && MnTbl.RgEdg != undefined) {
                RgEdg = MnTbl.RgEdg;
                pdL = MnTbl.pdL;
                DvPdd = dv.DvPdd;
            }
            if (dm.IsMob) {
                if (dv.style.display != 'none') {
                    dv.style.display = 'none';
                    DvMb.style.display = 'block';
                    DvMb.style.maxWidth = 'none';
                }
                DvMb.style.width = '100%';
                return;
            }
            if ((RgEdg - SBr) > wW) {
                if (MnTbl.RgEdg == null || MnTbl.RgEdg == undefined) {
                    MnTbl.RgEdg = RgEdg;
                    MnTbl.pdL = pdL;
                    if (!dv.DvPdd) {
                        DvPdd = 0;
                        try {
                            DvPdd = cmn.GetCompStyle(dv, 'padding-left');
                        } catch (ep) {}
                        dv.DvPdd = DvPdd;
                    }
                }
                if (dv.style.display != 'none') {
                    dv.style.display = 'none';
                    DvMb.style.display = 'block';
                    DvMb.style.maxWidth = 'none';
                    if (DvMb.offsetLeft == 0)
                        DvMb.Fxd = true;
                }
                if (DvMb.Fxd) {
                    DvMb.style.width = (wW - cmn.pX(DvMb) - (DvPdd * 2) - _ScrVals.scL) + 'px';
                } else {
                    DvMb.style.width = (wW - cmn.pX(DvMb) - (DvPdd * 2)) + 'px';
                    DvMb.style.marginLeft = _ScrVals.scL + 'px';
                }
                if (SbDv.style.display != '') {
                    dm.RspSubPos(DvMb, SbDv);
                }
            } else {
                if (dv.style.display == 'none') {
                    MnTbl.RgEdg = null;
                    dv.style.display = '';
                    DvMb.style.display = 'none';
                    dm.RspSubHd(uid);
                }
            }
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.RspSubShHd = function (mid) {
        var DvMb = cmn.Mko(mid + '_Mob');
        if (DvMb == null)
            return;
        var SbDv = cmn.Mko(mid + '_Mob-p');
        var Icn = cmn.Mko(mid + '_MobIcn');
        if (SbDv.style.display == '') {
            SbDv.style.width = 'auto';
            SbDv.style.height = 'auto';
            SbDv.style.overflow = 'auto';
            dm.RspSubPos(DvMb, SbDv);
            dm.ShHdObj(SbDv, 't', 's');
            if (Icn != null)
                Icn.innerHTML = '&#xe793;';
        } else {
            var FxY = 0;
            var PosY = cmn.pY(DvMb);
            var MnHgt = DvMb.offsetHeight;
            var MnBtEdg = PosY + MnHgt;
            try {
                var _ScrVals = cmn.ScrVals();
                var MnDvRct = DvMb.getBoundingClientRect();
                FxY = Math.round(PosY - MnDvRct.top - _ScrVals.scT);
            } catch (ex) {}
            if (FxY == 0 || (MnBtEdg - FxY) < (cmn.pY(SbDv) + SbDv.offsetHeight)) {
                dm.RspSubHd(mid);
            } else {
                SbDv.TT = (_ScrVals.scT + MnBtEdg);
                cmn.setTop(SbDv, MnBtEdg - FxY);
            }
        }
    };
    this.RspSubHd = function (mid) {
        var SbDv = cmn.Mko(mid + '_Mob-p');
        SbDv.style.overflow = 'hidden';
        SbDv.style.width = '1px';
        SbDv.style.height = '1px';
        SbDv.style.top = '0px';
        SbDv.style.left = '0px';
        dm.ShHdObj(SbDv, 't', 'h');
        var Icn = cmn.Mko(mid + '_MobIcn');
        if (Icn != null)
            Icn.innerHTML = '&#xe777;';
    };
    this.RspSubPos = function (DvMb, SbDv) {
        var FxX = 0;
        var FxY = 0;
        var PosX = cmn.pX(DvMb);
        var PosY = cmn.pY(DvMb);
        var MnHgt = DvMb.offsetHeight;
        var MnBtEdg = PosY + MnHgt;
        try {
            var _ScrVals = cmn.ScrVals();
            var MnDvRct = DvMb.getBoundingClientRect();
            FxX = Math.round(PosX - MnDvRct.left - _ScrVals.scL);
            FxY = Math.round(PosY - MnDvRct.top - _ScrVals.scT);
        } catch (ex) {}
        SbDv.style.left = PosX - FxX + 'px';
        cmn.setTop(SbDv, MnBtEdg - FxY);
        if (FxY != 0) {
            if (SbDv.style.display != '') {
                if (SbDv.TT == null || SbDv.TT == undefined) {
                    cmn.setTop(SbDv, MnBtEdg);
                } else {
                    if (SbDv.TT > (_ScrVals.scT + MnBtEdg)) {
                        SbDv.TT = (_ScrVals.scT + MnBtEdg);
                    }
                    cmn.setTop(SbDv, SbDv.TT);
                }
            } else {
                cmn.setTop(SbDv, MnBtEdg - FxY);
                SbDv.TT = (MnBtEdg - FxY);
            }
        }
        SbDv.style.width = DvMb.offsetWidth + 'px';
    };
    this.RspExCll = function (mid, id) {
        var obj = cmn.Mko('MobSub_' + mid + '_' + id);
        if (obj == null)
            return;
        var icn = cmn.Mko('RspExpIcn_' + mid + '_' + id);
        if (obj.style.display == 'none') {
            obj.style.display = 'block';
            if (icn !== null)
                icn.innerHTML = '&#xeb20;';
        } else {
            obj.style.display = 'none';
            if (icn !== null)
                icn.innerHTML = '&#xe920;';
        }
    };
    this.dInO = function (uid) {
        try {
            var UID = dm.uid;
            if (uid != null && uid != undefined) {
                UID = uid;
            }
            var tr;
            tr = cmn.Gisv('ocDt', UID);
            if (tr == null || tr == undefined) {
                tr = 250;
            }
            dm.ocDt = tr;
            dm.tr = cmn.Gisv('TrEff', UID);
            dm.EDV = '0';
            tr = cmn.Gisv('edv', UID);
            if (tr == '1') {
                dm.EDV = '1';
            }
            dm.tdo = null;
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.StEqWd = function (tbl) {
        if (tbl == null || tbl == undefined)
            return;
        if (tbl.rows == null || tbl.rows == undefined)
            return;
        if (tbl.wprc != undefined && tbl.wprc == '1')
            return;
        var PrDv = tbl.parentNode;
        tbl.wprc = '1';
        var Wdt = 0;
        var WdtIc = 0;
        var WdtAr = 0;
        var ItmTRs = new Array();
        var WdtWOHd = tbl.offsetWidth;
        var CorrReq = false;
        var TblTD = null;
        var ItmTR = null;
        var Temp = null;
        for (var i = 0; i < tbl.rows.length; i++) {
            TblTD = tbl.rows[i].childNodes[0];
            if (TblTD.style.display == 'none') {
                TblTD.style.display = '';
                CorrReq = true;
            }
            ItmTR = null;
            try {
                if (TblTD.hasChildNodes()) {
                    Temp = TblTD.childNodes[0];
                    if (Temp.rows) {
                        ItmTR = Temp.rows[0];
                    }
                }
            } catch (ex) {}
            ItmTRs[i] = ItmTR;
            if (ItmTR != null && ItmTR != undefined) {
                var ItmIcnTD = ItmTR.cells[0];
                var ItmTtlTD = ItmTR.cells[1];
                var ItmArrTD = ItmTR.cells[2];
                if (ItmIcnTD != null && ItmIcnTD != undefined) {
                    if (WdtIc < ItmIcnTD.offsetWidth) {
                        WdtIc = ItmIcnTD.offsetWidth;
                    }
                }
                if (ItmTtlTD != null && ItmTtlTD != undefined) {
                    if (Wdt < ItmTtlTD.offsetWidth) {
                        Wdt = ItmTtlTD.offsetWidth;
                    }
                }
                if (ItmArrTD != null && ItmArrTD != undefined) {
                    if (WdtAr < ItmArrTD.offsetWidth) {
                        WdtAr = ItmArrTD.offsetWidth;
                    }
                }
            }
        }
        if (CorrReq == true) {
            var Crr = tbl.offsetWidth - WdtWOHd;
            if (Crr > 0) {
                Wdt = Wdt + Crr;
            }
        }
        PrDv.style.width = (tbl.offsetWidth + 200) + 'px';
        for (var i = 0; i < ItmTRs.length; i++) {
            var TD = null;
            if (ItmTRs[i] != null && ItmTRs[i] != undefined) {
                TD = ItmTRs[i].cells[0];
                if (TD != null && TD != undefined) {
                    TD.style.width = WdtIc + 'px';
                    if (TD.offsetWidth > WdtIc) {
                        TD.style.width = (WdtIc - (TD.offsetWidth - WdtIc)) + 'px';
                    }
                }
                TD = ItmTRs[i].cells[1];
                if (TD != null && TD != undefined) {
                    TD.style.width = Wdt + 'px';
                    if (TD.offsetWidth > Wdt) {
                        TD.style.width = (Wdt - (TD.offsetWidth - Wdt)) + 'px';
                    }
                }
                TD = ItmTRs[i].cells[2];
                if (TD != null && TD != undefined) {
                    TD.style.width = WdtAr + 'px';
                    if (TD.offsetWidth > WdtAr) {
                        TD.style.width = (WdtAr - (TD.offsetWidth - WdtAr) + 2) + 'px';
                    }
                }
            }
        }
        if (PrDv.id != '' && PrDv.id.indexOf('sd') == PrDv.id.length - 2) {
            PrDv.style.width = tbl.offsetWidth + 17 + 'px';
        } else {
            var _pd = 0;
            if (PrDv.DvPdd)
                _pd = PrDv.DvPdd;
            PrDv.style.width = tbl.offsetWidth + (_pd * 2) + 'px';
        }
    };
    this.itw = function (mid, t) {
        try {
            var div = cmn.Mko(mid + '_-0p');
            var tbl = div.childNodes[0];
            var rlwd = tbl.offsetWidth;
            if ((div.intw == rlwd) && (t < 50)) {
                t++;
                setTimeout('dm.itw(\'' + mid + '\',' + t + ');', 50);
                return;
            }
            if (div.intw != rlwd) {
                tbl.wprc = '0';
                dm.StEqWd(tbl);
                var gxe = function () {
                    tbl.wprc = '0';
                    dm.StEqWd(tbl);
                };
                setTimeout(gxe, 50);
                return;
            }
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.DsplHdrs = function (tbl) {
        if (tbl == null || tbl == undefined)
            return;
        if (tbl.rows == null || tbl.rows == undefined)
            return;
        if (tbl.wprc != undefined && tbl.wprc == '1')
            return;
        tbl.wprc = '1';
        var TblTD = null;
        var ItmTR = null;
        var Temp = null;
        for (var i = 0; i < tbl.rows.length; i++) {
            TblTD = tbl.rows[i].childNodes[0];
            if (TblTD.style.display == 'none') {
                TblTD.style.display = '';
            }
        }
    };
    this.HSPth = function (mid) {
        var hpth = cmn.Gisv('hpth', mid);
        if (hpth != 'true')
            return false;
        var sit = cmn.rvs('sit', mid);
        if (sit != '') {
            var SelIts = dm.GtPrnItm(sit, mid);
            var _lvl = -1;
            if (SelIts != undefined && SelIts != null) {
                if (SelIts.length > 0) {
                    for (var i = 0; i < SelIts.length; i++) {
                        _lvl = SelIts.length - i;
                        dm.MrkItm(SelIts[i], 's', _lvl, mid);
                    }
                }
            }
            cmn.Sisv('SelIts', SelIts, mid);
            if (SelIts == '')
                return false;
            return true;
        }
        return false;
    };
    this.vD = function () {
        clearTimeout(dm.ocM);
        dm.ocM = null;
    };
    this.uD = function () {
        try {
            clearTimeout(dm.ocD);
            dm.ocD = null;
            clearTimeout(dm.ocM);
            dm.ocM = null;
            dm.htt();
            var smc = cmn.Gisv('smc', dm.uid);
            if (smc == '1') {
                var _th = this;
                dm.ocM = setTimeout(function () {
                    _th.cAm();
                }, dm.ocMt);
            }
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.v = function (w, lvl) {
        try {
            dm.OnEmptSp = false;
            clearTimeout(dm.ocD);
            dm.ocD = null;
            clearTimeout(dm.ocM);
            dm.ocM = null;
            clearTimeout(dm.cAmt);
            dm.cAmt = null;
            var NewMnu = false;
            var cmId = w.id.substring(0, w.id.indexOf('_'));
            if ((dm.uid != '') && (dm.uid != cmId)) {
                dm.cAm();
                clearInterval(cmn.TmrFdOn);
                cmn.TmrFdOn = null;
                cmn.FdOnId = '';
            }
            if ((dm.uid == '') || (dm.uid != cmId)) {
                NewMnu = true;
            }
            dm.uid = cmId;
            cmn.uid = dm.uid;
            dm.HovItm = w;
            if (NewMnu) {
                dm.dInO(cmId);
            }
            dm.mO = cmn.Gisv('o', dm.uid);
            dm.Lvl = lvl;
            if (dm.Lvl == 1) {
                dm.rsDr();
            }
            if ((dm.Lvl == 1) && (document.onclick != dm.bmo)) {
                dm.omc = document.onclick;
                document.onclick = dm.bmo;
                if (dm.IsMob == true) {
                    try {
                        if (document.addEventListener) {
                            document.addEventListener('touchend', dm.bmo2, true);
                            document.addEventListener('touchmove', dm.bmo3, true);
                        }
                    } catch (ex) {}
                }
            }
            if (dm.tObj != w) {
                dm.tObj = w;
                dm.htt();
            }
            clearTimeout(dm.dttob);
            dm.dttob = null;
            var _th = this;
            dm.dttob = setTimeout(function () {
                _th.dtt();
            }, 400);
            if (document.onmousemove != dm.omm && document.onmousemove != cmn.cmc) {
                dm.omm = document.onmousemove;
                document.onmousemove = cmn.cmc;
            }
            if (!dm.eommo) {
                try {
                    if (window.OnMenuMouseOver) {
                        OnMenuMouseOver();
                    }
                } catch (e) {}
                dm.eommo = true;
            }
            if (dm.smch == true) {
                dm.Hv(w);
            }
            var i;
            for (i = 1; i < 12; i++) {
                if (dm.Oms[i] == dm.tObj.id + '-p') {
                    return;
                }
            }
            if (dm.smo == '0') {
                dm.smo = cmn.Gisv('smo', dm.uid);
            }
            var _th = this;
            if (dm.smo == '1') {
                if ((dm.mO != 1) || (dm.Lvl > 1)) {
                    dm.ocD = setTimeout(function () {
                        _th.oChe();
                    }, dm.ocDt);
                } else {
                    var ocDth = cmn.Gisv('ocDth', dm.uid);
                    dm.cCl('n');
                    dm.ocD = setTimeout(function () {
                        _th.oChe();
                    }, ocDth);
                }
            }
        } catch (ex) {
            try {
                if (dm.omc != '') {
                    document.onclick = dm.omc;
                }
            } catch (ex) {
                document.onclick = dm.omc;
            }
            cmn.ErrHr(ex, arguments);
        }
    };
    this.vEmp = function (lvl) {
        if (dm.OnEmptSp == false)
            return;
        clearTimeout(dm.ocD);
        dm.ocD = null;
        clearTimeout(dm.ocM);
        dm.ocM = null;
        clearTimeout(dm.cAmt);
        dm.cAmt = null;
        dm.ocD = setTimeout(function () {
            dm.MrkItm(dm.HovItm, 'n', dm.Lvl, dm.uid);
            try {
                if (typeof dm.Oms[lvl] != 'undefined') {
                    var sl = dm.Oms[lvl].substring(0, dm.Oms[lvl].length - 2);
                    dm.MrkItm(cmn.Mko(sl), 'n', dm.Lvl, dm.uid);
                }
            } catch (e) {}
            var SelIts = cmn.Gisv('SelIts', dm.uid);
            if (SelIts != null) {
                for (var i = 0; i < SelIts.length; i++) {
                    var _Lvl = dm.Lvl;
                    if (i == (SelIts.length - 1))
                        _Lvl = 1;
                    dm.MrkItm(SelIts[i], 's', _Lvl, dm.uid);
                }
            }
            for (i = lvl; i < 12; i++) {
                dm.HdSbm(i, 't');
            }
        }, 500);
    };
    this.u = function (w) {
        try {
            dm.OnEmptSp = true;
            clearTimeout(dm.ocD);
            dm.ocD = null;
            clearTimeout(dm.ocM);
            dm.ocM = null;
            clearTimeout(dm.dttob);
            dm.dttob = null;
            var _th = this;
            var smc = cmn.Gisv('smc', dm.uid);
            if (smc == '1') {
                dm.ocM = setTimeout(function () {
                    _th.cAm();
                }, dm.ocMt);
                if (cmn.dBv('FF3p')) {
                    if (dm.SmIsSc) {
                        clearTimeout(dm.ocM);
                        dm.ocM = null;
                    }
                }
            }
            var i;
            for (i = 1; i < 12; i++) {
                if (dm.Oms[i] == w.id + '-p') {
                    return;
                }
            }
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.dtt = function (tx) {
        try {
            if (dm.tObj == null) {
                return;
            }
            var t = cmn.Gisv('ttt_' + dm.tObj.id, dm.uid);
            if ((t == 'undefined') || (t == '') || (t == null)) {
                return;
            }
            var ifc = null;
            ifc = cmn.Mko(dm.uid + 'ifc');
            if (ifc == null || ifc == undefined) {
                return;
            }
            if (dm.tdo == null) {
                var nd = new dm.cDIV();
                ifc.appendChild(nd);
                dm.tdo = nd;
            }
            dm.tdo.innerHTML = t;
            var zi = cmn.Gisv('zi', dm.uid);
            dm.tdo.style.zIndex = zi + 20;
            var ccp = cmn.Gisv('ccp', dm.uid);
            dm.tdo.className = ccp + 'TooltipDIV';
            dm.tdo.style.whiteSpace = 'nowrap';
            try {
                if (cmn.dBv('ie55p') || cmn.dBv('op5p')) {
                    dm.tdo.attachEvent('onmouseover', dm.htt);
                } else {
                    dm.tdo.addEventListener('mouseover', dm.htt, true);
                }
            } catch (tm) {}
            var res = dm.stp();
            if (res == false) {
                return;
            }
            if (cmn.dBv('ie55p')) {
                if (dm.ttf == null) {
                    var nif = new cmn.cIFR('dm_ttf', dm.uid);
                    ifc.appendChild(nif);
                    dm.ttf = nif;
                }
                var Shd = cmn.GtSdStr(dm.tdo.className);
                if (cmn.dBv('ie9p')) {
                    Shd = 0;
                }
                dm.ttf.style.display = 'block';
                dm.ttf.style.height = (dm.tdo.offsetHeight - Shd) + 'px';
                dm.ttf.style.width = (dm.tdo.offsetWidth - Shd) + 'px';
                cmn.setTop(dm.ttf, cmn.pY(dm.tdo));
                cmn.setLeft(dm.ttf, cmn.pX(dm.tdo));
                dm.ttf.style.zIndex = 0;
                dm.tmpo = dm.ttf;
            }
            dm.dttl(dm.tdo);
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.dttl = function (w) {
        cmn.sDv(w);
        cmn.sDv(dm.tmpo);
    };
    this.htt = function () {
        clearTimeout(dm.dttob);
        dm.dttob = null;
        try {
            if (dm.tdo != null) {
                cmn.hDv(dm.tdo);
                cmn.setTop(dm.tdo, 0);
                cmn.setLeft(dm.tdo, 0);
            }
            if ((cmn.dBv('ie55p')) && (dm.ttf != null)) {
                cmn.hDv(dm.ttf);
                cmn.setTop(dm.ttf, 0);
                cmn.setLeft(dm.ttf, 0);
            }
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.stp = function () {
        try {
            var dX = -5;
            var dY = 20;
            var pX = cmn.mX + dX;
            var pY = cmn.mY + dY;
            if ((cmn.mX == cmn.mY) && (cmn.mX == 0)) {
                return false;
            }
            var wH = 600;
            var wW = 800;
            var dB = document.body;
            if (dm.ie) {
                wH = dB.offsetHeight;
                wW = dB.offsetWidth;
            } else {
                if (dm.n6) {
                    wH = innerHeight;
                    wW = innerWidth;
                }
            }
            if (cmn.dBv('ie55p')) {
                wH = dB.parentNode.offsetHeight;
                wW = dB.parentNode.offsetWidth;
            } else {
                wH = innerHeight;
                wW = innerWidth;
            }
            var _ScrVals = cmn.ScrVals();
            scL = _ScrVals.scL;
            scT = _ScrVals.scT;
            if (cmn.mX + dX < 5) {
                pX = 5;
            }
            if (wW - cmn.mX < dm.tdo.offsetWidth + dX + 20 - scL) {
                pX = wW - dm.tdo.offsetWidth - 20 + scL;
            }
            if (wH - cmn.mY - dY - dm.tdo.offsetHeight + scT < 15) {
                pY = cmn.mY - dY - dm.tdo.offsetHeight;
            }
            cmn.setLeft(dm.tdo, pX);
            cmn.setTop(dm.tdo, pY);
            try {
                var rect = dm.tdo.getBoundingClientRect();
                if ((rect.left - pX) > 10) {
                    cmn.setLeft(dm.tdo, (pX - (rect.left - pX)));
                }
                if ((rect.top - pY) > 10) {
                    cmn.setTop(dm.tdo, (pY - (rect.top - pY)));
                }
            } catch (exx) {}
            return true;
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
            return false;
        }
    };
    this.cDIV = function () {
        var d = document.createElement('DIV');
        d.id = 'tt' + dm.uid;
        d.style.position = 'absolute';
        d.style.visibility = 'hidden';
        return d;
    };
    this.cIFRs = function () {
        if (dm.cifs == null) {
            dm.cifs = new Array(12);
            var ifc = cmn.Mko(dm.uid + 'ifc');
            var nif;
            for (i = 0; i < 12; i++) {
                nif = new cmn.cIFR('dm_' + i + 'f', dm.uid);
                ifc.appendChild(nif);
                dm.cifs[i] = nif;
            }
        }
    };
    this.mc = function () {
        dm.mwc = 1;
        if (dm.smo == '2') {
            dm.oChe();
        }
    };
    this.bmo = function () {
        if (dm.cAmt == null) {
            dm.cAmt = setTimeout('dm.cAm()', 100);
        }
    };
    this.bmo2 = function () {
        if (dm.tmpo) {
            dm.tmpo = null;
            return;
        }
        if (dm.cAmt == null) {
            dm.cAmt = setTimeout('dm.cAm()', 500);
        }
        dm.tmpo = null;
    };
    this.bmo3 = function () {
        dm.tmpo = true;
    };
    this.oChe = function () {
        dm.cCl('t');
        dm.oCh(dm.tObj);
    };
    this.oCh = function (w) {
        if (w == null || w == undefined)
            return;
        var chOb = cmn.Mko(w.id + '-p');
        if (!chOb) {
            return;
        }
        dm.SmIsSc = false;
        dm.SMScrl = false;
        var UID = w.id.substring(0, w.id.indexOf('_'));
        var ccp = cmn.Gisv('ccp', UID);
        var scdo = cmn.Mko(w.id + 'sd');
        var tbl = cmn.Mko(w.id + '-smt');
        var mltclm = false;
        try {
            var _mltclm = tbl.getAttribute('mltclm');
            if (_mltclm != null && _mltclm == '1')
                mltclm = true;
        } catch (ex) {}
        if (mltclm == true) {
            var SubTbls = tbl.rows[0].childNodes;
            for (var i = 0; i < SubTbls.length; i++) {
                dm.StEqWd(SubTbls[i].childNodes[0].childNodes[0]);
            }
        } else {
            dm.StEqWd(tbl);
        }
        if (scdo != null) {
            dm.SMScrl = true;
            if (scdo.style.height == 'auto') {
                var SMH = cmn.Gisv('SMH', dm.uid);
                scdo.style.height = parseInt(SMH) + 'px';
            }
            if (parseInt(scdo.style.height) <= tbl.offsetHeight) {
                if (cmn.dBv('FF3p') || cmn.dBv('op5p') || cmn.dBv('saf') || cmn.dBv('SafWin')) {
                    if (scdo.style.width == 'auto') {
                        scdo.style.width = scdo.offsetWidth + 17 + 'px';
                    }
                } else if (!cmn.dBv('ie55p')) {
                    if (cmn.dBv('FF')) {
                        scdo.style.width = scdo.offsetWidth + 'px';
                    }
                }
                if (scdo.offsetWidth < (scdo.childNodes[0].offsetWidth + 17)) {
                    scdo.style.width = scdo.offsetWidth + 17 + 'px';
                }
                dm.SmIsSc = true;
            } else {
                scdo.style.height = 'auto';
                scdo.style.width = tbl.offsetWidth + 'px';
            }
        }
        var cOb = cmn.Mko(w.id + '-p');
        dm.dCr(w, cOb);
        if (dm.tObj != null && dm.tObj != undefined) {
            var Obj = cmn.Mko(dm.tObj.id + '-p');
            if (Obj != null && Obj != undefined) {
                if (cmn.dBv('ie55p')) {
                    var Shd = cmn.GtSdStr(ccp + 'SubMenuDIV');
                    if (cmn.dBv('ie9p')) {
                        Shd = 0;
                    }
                    dm.cIFRs();
                    var ifr = dm.cifs[dm.Lvl - 1];
                    ifr.style.display = 'block';
                    ifr.style.height = (Obj.offsetHeight - Shd) + 'px';
                    ifr.style.width = (Obj.offsetWidth - Shd) + 'px';
                    cmn.setTop(ifr, cmn.pY(Obj));
                    cmn.setLeft(ifr, cmn.pX(Obj));
                    ifr.style.zIndex = 0;
                    dm.ShHdObj(ifr, 't', 's', 2);
                }
                Obj.style.zIndex = cmn.Gisv('zi', UID) + dm.Lvl + 1;
                var ScrDv = cmn.Mko(w.id + 'sd');
                if (ScrDv != null) {
                    ScrDv.style.position = 'static';
                }
                dm.ShHdObj(Obj, 't', 's');
                var PngShdCnt = cmn.Gisv('PngShdCnt', UID);
                cmn.ShwShd(Obj, PngShdCnt, ccp);
            }
        }
        dm.Oms[dm.Lvl] = w.id + '-p';
    };
    this.cCl = function (t) {
        for (i = dm.Lvl; i < 12; i++) {
            dm.HdSbm(i, t);
        }
    };
    this.cAm = function () {
        try {
            clearTimeout(dm.cAmt);
            dm.cAmt = null;
            if (dm.mwc == 1) {
                dm.mwc = 0;
                return;
            }
            try {
                if (window.OnMenuCloseAll) {
                    OnMenuCloseAll();
                }
            } catch (e) {}
            dm.eommo = false;
            dm.tObj = null;
            dm.htt();
            if (dm.omm != cmn.cmc && dm.omm != '') {
                document.onmousemove = dm.omm;
                dm.omm = '';
            }
            try {
                if (dm.omc != '') {
                    document.onclick = dm.omc;
                }
            } catch (ex) {
                document.onclick = dm.omc;
            }
            dm.omc = '';
            if (dm.IsMob == true) {
                try {
                    if (document.removeEventListener) {
                        document.removeEventListener('touchend', dm.bmo2, true);
                        document.removeEventListener('touchmove', dm.bmo3, true);
                    }
                } catch (ex) {}
            }
            dm.smo = '0';
            for (i = 1; i < 12; i++) {
                dm.HdSbm(i, 't');
            }
            dm.UhlHv(dm.uid);
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.HdScrDv = function (ScrDv) {
        ScrDv.style.position = 'absolute';
        ScrDv.style.left = '-6000px';
    };
    this.HdSbm = function (i, t) {
        var obj = cmn.Mko(dm.Oms[i]);
        if (obj != null) {
            var ScrDv = cmn.Mko(obj.id.substring(0, obj.id.indexOf('-p')) + 'sd');
            var _th = this;
            if (ScrDv != null) {
                dm.ShHdObj(obj, t, 'h', null, function () {
                    _th.HdScrDv(ScrDv);
                });
            } else {
                dm.ShHdObj(obj, t, 'h');
            }
            cmn.HdShd(obj);
            dm.Oms[i] = undefined;
            if (dm.cifs != null) {
                obj = dm.cifs[i - 1];
                if (obj != null) {
                    cmn.hDv(obj);
                    cmn.setTop(obj, 0);
                    cmn.setLeft(obj, 0);
                }
            }
        }
    };
    this.UhlHv = function (uid) {
        var UID = dm.uid;
        if (uid != undefined && uid != null) {
            UID = uid;
        }
        var HovIts = cmn.Gisv('HovIts', UID);
        var SelIts = cmn.Gisv('SelIts', UID);
        var _lvl = -1;
        if (HovIts != null && HovIts != undefined) {
            if (HovIts.length > 0) {
                for (var i = 0; i < HovIts.length; i++) {
                    _lvl = HovIts.length - i;
                    var SetItem = null;
                    if (SelIts != null)
                        SetItem = SelIts[i];
                    if (SetItem == null || SetItem != HovIts[i]) {
                        dm.MrkItm(HovIts[i], 'n', _lvl, UID);
                    }
                }
            }
        }
        cmn.Sisv('HovIts', null, UID);
        if (SelIts != undefined && SelIts != null) {
            if (SelIts.length > 0) {
                for (var i = 0; i < SelIts.length; i++) {
                    _lvl = SelIts[i].lvl;
                    if (!_lvl)
                        _lvl = SelIts.length - i;
                    dm.MrkItm(SelIts[i], 's', _lvl, UID);
                }
            }
        }
    };
    this.gCd = function (w) {
        var dOb = w.parentNode;
        if (cmn.dBv('SafWin')) {
            while (dOb.parentNode) {
                if ((dOb.tagName == 'DIV') && (dOb.style.overflowX != 'auto')) {
                    return dOb;
                }
                dOb = dOb.parentNode;
            }
        } else {
            while (dOb.parentNode) {
                if ((dOb.tagName == 'DIV') && (dOb.style.overflow.length == 0)) {
                    return dOb;
                }
                dOb = dOb.parentNode;
            }
        }
        return null;
    };
    this.Hv = function (w) {
        dm.UhlHv(dm.uid);
        var UID = w.id.substring(0, w.id.indexOf('_'));
        var ItemID = w.id.substring(UID.length + 1);
        var HovIts = dm.GtPrnItm(ItemID, UID);
        if (HovIts == null)
            return;
        var nd = null;
        var _lvl = -1;
        if (HovIts.length > 0) {
            for (var i = 0; i < HovIts.length; i++) {
                _lvl = HovIts.length - i;
                nd = HovIts[i];
                if (!nd.getAttribute('nhv')) {
                    dm.MrkItm(nd, 'h', _lvl, null);
                }
            }
        }
        cmn.Sisv('HovIts', HovIts, dm.uid);
    };
    this.MrkItm = function (w, Ind, lvl, uid) {
        var UID = dm.uid;
        if (uid != null && uid != undefined) {
            UID = uid;
        }
        if (w == null) {
            return;
        }
        var ItemID = w.id.substring(UID.length + 1);
        var ccp = cmn.Gisv('ccp', UID);
        var Ncn = '';
        var CssPref = 'Main';
        if (lvl > 1) {
            CssPref = 'Sub';
        }
        if (Ind == 'n' || Ind == '' || Ind == null || Ind == undefined) {
            Ncn = ccp + CssPref + 'MenuItemTD';
        } else if (Ind == 'h') {
            Ncn = ccp + CssPref + 'MenuItemHoveredTD';
        } else if (Ind == 's') {
            Ncn = ccp + CssPref + 'MenuItemSelectedTD';
        }
        if (w.className != Ncn) {
            w.className = Ncn;
        }
        var Obj = w.childNodes[0];
        if (Obj != null) {
            if (Obj.tagName == 'IMG') {
                var Im = cmn.Gisv('m' + ItemID + 'Im', UID);
                var ImO = cmn.Gisv('m' + ItemID + 'ImO', UID);
                if (Im != null && ImO != null) {
                    if (Ind == 'h') {
                        Obj.src = ImO.src;
                    }
                    if (Ind == 'n' || Ind == 's') {
                        Obj.src = Im.src;
                    }
                }
                return;
            }
        }
        var icn = cmn.Mko(w.id + '-icn');
        if (icn != null) {
            var Ic = cmn.Gisv('i' + ItemID + 'Ic', UID);
            var IcO = cmn.Gisv('i' + ItemID + 'IcO', UID);
            if (Ic != null && IcO != null) {
                if (Ind == 'h' || Ind == 's') {
                    icn.src = IcO.src;
                } else {
                    icn.src = Ic.src;
                }
            }
        }
    };
    this.ItClk = function (w, alt, clceff) {
        if (dm.IsMob == true) {
            try {
                w.onmouseover();
            } catch (ex) {}
        }
        var ItemID = w.id.substring(dm.uid.length + 1);
        var SlIts = null;
        var hpth = cmn.Gisv('hpth', dm.uid);
        if (hpth == 'true') {
            dm.UnhItm(dm.uid, ItemID);
            cmn.svs('sit', ItemID, dm.uid);
            dm.HSPth(dm.uid);
        }
        if (clceff == '1') {
            dm.Hv(w);
            dm.MrkItm(w, 's', dm.Lvl, dm.uid);
            var asn = function () {
                if (dm.tObj == w) {
                    dm.MrkItm(w, 'h', dm.Lvl, dm.uid);
                }
            };
            setTimeout(asn, 80);
        }
        var cid = cmn.Gisv('id', dm.uid);
        alt = cmn.trim(alt);
        var ttl = cmn.GtTtl(w.id + '-tl');
        if (alt != '' && alt != null) {
            cmn.ItmPrc(alt, cid, ItemID, ttl);
        } else {
            var prc = cmn.Gisv('ClClk', dm.uid);
            cmn.ItmPrc(prc, cid, ItemID, ttl);
        }
    };
    this.UnhItm = function (uid, ItemID) {
        var sit = cmn.rvs('sit', uid);
        if (sit != '' && sit != ItemID) {
            var SlIts = dm.GtPrnItm(sit, uid);
            if (SlIts != null && SlIts.length > 0) {
                var _lvl = -1;
                for (var i = 0; i < SlIts.length; i++) {
                    _lvl = SlIts.length - i;
                    dm.MrkItm(SlIts[i], 'n', _lvl, uid);
                }
            }
        }
    };
    this.GtPrnItm = function (ItemID, UID) {
        try {
            var res = new Array();
            res[0] = cmn.Mko(UID + '_' + ItemID);
            var nIds = cmn.GtnIds(UID);
            if (nIds != null) {
                var pn = null;
                var NdID = 'i' + ItemID;
                for (var i = 1; i < 13; i++) {
                    pn = nIds.getElementsByTagName(NdID)[0];
                    if (pn == null || pn == undefined) {
                        break;
                    }
                    pn = pn.parentNode;
                    NdID = pn.nodeName;
                    if (pn.nodeName == 't') {
                        break;
                    }
                    res[i] = cmn.Mko(UID + '_' + NdID.substring(1));
                }
            }
            return res;
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.GtPrnID = function (w) {
        try {
            var res = '';
            var UID = w.id.substring(0, w.id.indexOf('_'));
            var ItemID = w.id.substring(UID.length + 1);
            var nIds = cmn.GtnIds(UID);
            if (nIds != null) {
                var pn = null;
                var NdID = 'i' + ItemID;
                pn = nIds.getElementsByTagName(NdID)[0].parentNode;
                if (pn.nodeName == 't') {
                    return res;
                }
                res = pn.nodeName.substring(1);
            }
            return res;
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.dCr = function (w, cOb) {
        var UID = w.id.substring(0, w.id.indexOf('_'));
        var ItemID = w.id.substring(UID.length + 1);
        var OvH = -5;
        var OvV = -4;
        var Ov = cmn.Gisv('ho', dm.uid);
        if (Ov != null) {
            OvH = Ov;
        }
        Ov = cmn.Gisv('vo', dm.uid);
        if (Ov != null) {
            OvV = Ov;
        }
        var cDw = 0;
        var cDh = 0;
        if (dm.SMScrl) {
            cDw = cOb.childNodes[0].childNodes[0].offsetWidth + 12;
            cDh = cOb.childNodes[0].childNodes[0].offsetHeight + 12;
        } else {
            cDw = cOb.childNodes[0].offsetWidth;
            cDh = cOb.childNodes[0].offsetHeight;
        }
        var wH = 600;
        var wW = 800;
        var dB = document.body;
        var stY;
        var stX;
        var _ScrVals = cmn.ScrVals();
        scL = _ScrVals.scL;
        scT = _ScrVals.scT;
        if (dm.ie) {
            wH = dB.offsetHeight;
            wW = dB.offsetWidth;
        } else {
            if (dm.n6) {
                wH = innerHeight;
                wW = innerWidth;
            }
        }
        if (cmn.dBv('ie55p')) {
            wH = dB.parentNode.offsetHeight;
            wW = dB.parentNode.offsetWidth;
        } else {
            wH = innerHeight;
            wW = innerWidth;
        }
        var cDo = dm.gCd(w);
        var _sbmnor = cDo.parentNode.getAttribute('sbmnor');
        if (_sbmnor == null)
            _sbmnor = '0';
        var FxY = 0;
        var FxX = 0;
        if (dm.Lvl == 1) {
            try {
                if (dm.BdRltv) {
                    document.body.style.position = 'static';
                }
                var MnDv = cmn.Mko(dm.uid + '_-0p');
                var MnDvRct = MnDv.getBoundingClientRect();
                FxY = Math.round(cmn.pY(MnDv) - MnDvRct.top - scT);
                FxX = Math.round(cmn.pX(MnDv) - MnDvRct.left - scL);
                if (dm.BdRltv) {
                    document.body.style.position = 'relative';
                }
            } catch (ex) {}
        }
        if (dm.Lvl == 1) {
            dm.hmp = 0;
        }
        if ((dm.Lvl == 1 && dm.mO == 1) || (_sbmnor == '1')) {
            if (dm.EDV == '1') {
                stY = cmn.pY(cDo) - cDh;
                dm.hmp = stY + cDh;
            } else {
                stY = cmn.pY(cDo) + cDo.offsetHeight;
            }
            stY += OvV;
        } else {
            var vpt = cmn.Gisv('PosVertTyp', dm.uid);
            if (vpt == '2') {
                var pd;
                if (dm.Lvl == 1) {
                    pd = cmn.Mko(dm.uid + '_-0p');
                }
                if (dm.Lvl > 1) {
                    pd = cmn.Mko(dm.Oms[dm.Lvl - 1]);
                }
                stY = cmn.pY(pd);
            } else {
                var brdH = parseInt((w.offsetHeight - w.clientHeight) / 2);
                if (isNaN(brdH))
                    brdH = 0;
                stY = cmn.pY(w);
                stY = stY - brdH;
            }
        }
        if (FxY < -2) {
            stY += scT;
            stY = stY - cmn.BdY;
        }
        if ((dm.Lvl != 1) && (cmn.dBv('saf'))) {
            stY -= document.body.offsetTop;
        }
        var svsp = cmn.Gisv('svsp', UID);
        if (svsp == 'f') {
            var ChScr = cmn.Mko(w.id + 'sd');
            if (ChScr != null) {
                ChScr.scrollTop = 0;
            }
        }
        var PrnID = dm.GtPrnID(w);
        var scdo = cmn.Mko(dm.uid + '_' + PrnID + 'sd');
        if (scdo != null) {
            stY -= scdo.scrollTop;
        }
        if (dm.Lvl != 1 || dm.mO != 1) {
            var SbHg = cDh;
            try {
                if (SbHg < 12) {
                    SbHg = cOb.childNodes[0].childNodes[0].offsetHeight + 8;
                }
            } catch (e) {}
            if ((stY + SbHg + 21) > (wH + scT)) {
                stY = (wH + scT) - SbHg - 21;
            }
            if (dm.hmp > 0) {
                if ((stY + SbHg) > dm.hmp) {
                    stY = dm.hmp - SbHg;
                }
            }
        }
        var MrgTp = cmn.NdAtr(ItemID, 'MrgTp', UID);
        if (MrgTp == null || MrgTp == undefined)
            MrgTp = 0;
        var MrgTp = parseInt(MrgTp);
        if (isNaN(MrgTp)) {
            MrgTp = 0;
        }
        stY += MrgTp;
        if (dm.Lvl == 1) {
            stY -= this.DsplY;
        }
        cmn.setTop(cOb, stY);
        var pXw = cmn.pX(w);
        dm.rsDr();
        if (!dm.cFt(w, pXw, cDw, wW, cDo, scL)) {
            dm.rDr();
        }
        if (!dm.cFt(w, pXw, cDw, wW, cDo, scL)) {
            dm.rDr();
        }
        if ((dm.Lvl == 1 && dm.mO == 1) || (_sbmnor == '1')) {
            stX = pXw;
            var _MrgLf = cmn.NdAtr(ItemID, 'MrgLf', UID);
            var MrgLf = 0;
            if (_MrgLf != null && _MrgLf != undefined) {
                if (_MrgLf != 'center' && _MrgLf != 'right' && _MrgLf != 'wcenter') {
                    MrgLf = parseInt(_MrgLf);
                    if (isNaN(MrgLf)) {
                        MrgLf = 0;
                    }
                } else {
                    var MnDvWd = cOb.offsetWidth;
                    var SbDvWd = cOb.childNodes[0].childNodes[0].offsetWidth;
                    if (_MrgLf == 'center') {
                        MrgLf = (w.offsetWidth - cOb.offsetWidth) / 2;
                        if (MnDvWd < 21)
                            MrgLf = (w.offsetWidth - (MnDvWd + SbDvWd)) / 2;
                    } else if (_MrgLf == 'right') {
                        MrgLf = w.offsetWidth - cOb.offsetWidth;
                        if (MnDvWd < 21)
                            MrgLf = w.offsetWidth - (MnDvWd + SbDvWd);
                    } else if (_MrgLf == 'wcenter') {
                        stX = 0;
                        MrgLf = (wW - cOb.offsetWidth) / 2;
                    }
                }
            }
            stX += parseInt(MrgLf);
            if (dm.Lvl == 1) {
                stX -= this.DsplX;
            }
            if ((wW - 20) > cDw) {
                if ((wW - stX - 30) < cDw - scL) {
                    stX = wW - cDw - 30 + scL;
                } else {
                    if ((stX - scL) < 0) {
                        stX += (scL - stX) + 10;
                    }
                }
            } else {
                if ((wW - stX - 30) < cDw - scL) {
                    stX = ((cDw - wW) / 2) + scL;
                } else {
                    if ((stX - scL) < 0) {
                        stX = ((cDw - wW) / 2) + scL;
                    }
                }
            }
        }
        if ((dm.Lvl > 1 || dm.mO != 1) && (_sbmnor == '0')) {
            if (dm.oDr == 1) {
                stX = pXw + w.offsetWidth;
                if (!dm.Op) {
                    stX += OvH;
                }
                if (dm.Lvl == 1 && dm.mO != 1) {
                    stX -= this.DsplX;
                }
            }
            if (dm.oDr == 2) {
                stX = pXw - cDw;
                if (!dm.Op) {
                    stX -= OvH;
                }
            }
        }
        if (FxX < -2) {
            stX += scL;
        }
        if (FxY < -2) {
            stX = stX - cmn.BdX;
        }
        if ((dm.Lvl != 1) && (cmn.dBv('saf'))) {
            stX -= document.body.offsetLeft;
        }
        cmn.setLeft(cOb, stX);
        w.offsetParent;
    };
    this.rDr = function () {
        if (dm.oDr == 1) {
            dm.oDr = 2;
        } else {
            dm.oDr = 1;
        }
    };
    this.rsDr = function () {
        var dDd = cmn.Gisv('ed', dm.uid);
        if (dDd) {
            dm.oDr = dDd;
        }
    };
    this.cFt = function (w, pXw, cDw, wW, cDo, scL) {
        if ((dm.Lvl == 1) && (dm.mO == 1)) {
            return true;
        }
        var r = true;
        if (dm.oDr == 1) {
            if ((wW - (pXw + w.offsetWidth - scL)) < (cDw + 30)) {
                r = false;
            }
        }
        if (dm.oDr == 2) {
            if ((pXw - scL) < (cDw + 10)) {
                r = false;
            }
        }
        return r;
    };
    this.ShHdObj = function (w, t, sh, opCst, fnc) {
        try {
            if (w == null || w == undefined)
                return;
            var Spd = 5;
            if (t == 't') {
                if (dm.tr == false)
                    t = 'n';
            }
            var zInd = w.style.zIndex;
            var op = 100;
            var ccp = cmn.Gisv('ccp', dm.uid);
            var css = ccp + 'SubMenuDIV';
            var opc = cmn.GtCssRl(css, 'opacity');
            if (opc != undefined && opc != null) {
                if (opc != '')
                    op = opc * 100;
                if (op == 0)
                    op = 100;
            }
            if (opCst != undefined && opCst != null) {
                op = opCst;
            }
            if (t == 't') {
                Spd = cmn.Gisv('TrSpd', dm.uid);
                if (sh == 's') {
                    cmn.sDvOpc(w, Spd, op);
                } else {
                    cmn.hDvOpc(w, Spd, op, true, fnc);
                }
            } else {
                if (sh == 's') {
                    cmn.sDv(w);
                    cmn.StOpc(w.id, op);
                } else {
                    cmn.hDv(w, fnc);
                }
            }
        } catch (ex) {
            cmn.ErrHr(ex, arguments);
        }
    };
    this.GetFullMenuID = function (mid) {
        var midF = null;
        try {
            midF = eval('gbd4Hirq0nTyd' + mid);
        } catch (ex) {}
        if (midF == null || midF == undefined || midF == '') {
            alert('Error! APNSoft Menu \'' + mid + '\' not found!');
            return '';
        }
        return midF;
    };
    this.GetHref = function (mid, iid) {
        var midF = dm.GetFullMenuID(mid);
        if (midF == '')
            return;
        var itmTD = cmn.Mko(midF + '_' + iid);
        if (itmTD == null || itmTD == undefined) {
            alert('Error! Item \'' + iid + '\' not found!');
            return '';
        }
        var oncl = '';
        try {
            oncl = itmTD.attributes['onclick'].value;
        } catch (ex) {}
        if (oncl == '')
            return '';
        var ind = oncl.indexOf('cmn.href(\'');
        var ind2 = oncl.indexOf('\',\'');
        if (ind == -1 || ind2 == -1)
            return '';
        var href = oncl.substring(ind + 10, ind2);
        return href;
    };
    this.HideSubmenus = function (mid) {
        var midF = dm.GetFullMenuID(mid);
        if (midF == '')
            return;
        var uidRm = dm.uid;
        dm.uid = midF;
        dm.mwc = 0;
        dm.cAm();
        dm.uid = uidRm;
    };
    this.HighlightItem = function (mid, iid, t) {
        var uid = dm.GetFullMenuID(mid);
        if (uid == '')
            return;
        if (t == null || t == undefined) {
            t = 0;
        }
        var Res = false;
        var Vrbl = '';
        var mlt = iid.constructor === Array;
        if (mlt) {
            var x = [];
            for (i = 0; i < iid.length; ++i) {
                x.push('\'' + iid[i] + '\'');
            }
            Vrbl = '[' + x + ']';
        } else {
            Vrbl = '\'' + iid + '\'';
        }
        var md = cmn.Mko(uid + '_-0p');
        if (md == null && t < 100) {
            t++;
            setTimeout('dm.HighlightItem(\'' + mid + '\',' + Vrbl + ',' + t + ');', 50);
            return;
        }
        var sit = cmn.rvs('sit', uid);
        if (sit != '') {
            if (sit.indexOf('[') > -1) {
                var _sitm = eval(sit);
                dm.SelUnselMlt(uid, _sitm, 'n');
            } else {
                dm.UnhItm(uid, iid);
            }
            cmn.Sisv('SelIts', '', uid);
        }
        if (mlt) {
            cmn.svs('sit', Vrbl, uid);
            var res = new Array();
            var _ob = null;
            var _lvl = -1;
            for (i = 0; i < iid.length; ++i) {
                _ob = cmn.Mko(uid + '_' + iid[i]);
                _lvl = -1;
                if (_ob.className.indexOf('SubMenuItem') > 0)
                    _lvl = 2;
                _ob.lvl = _lvl;
                res[i] = _ob;
            }
            cmn.Sisv('SelIts', res, uid);
            Res = dm.SelUnselMlt(uid, iid, 's');
        } else {
            cmn.Sisv('hpth', 'true', uid);
            cmn.svs('sit', iid, uid);
            Res = dm.HSPth(uid);
            cmn.Sisv('hpth', 'false', uid);
        }
        return Res;
    };
    this.SelUnselMlt = function (uid, Elms, op) {
        var Res = false;
        var Elm = null;
        var _lvl = -1;
        for (i = 0; i < Elms.length; ++i) {
            Elm = cmn.Mko(uid + '_' + Elms[i] + '');
            if (Elm) {
                _lvl = -1;
                if (Elm.className.indexOf('SubMenuItem') > 0)
                    _lvl = 2;
                dm.MrkItm(Elm, op, _lvl, uid);
                Res = true;
            }
        }
        return Res;
    };
    this.HideItem = function (mid, iid) {
        dm.ShHdItm(mid, iid, '0');
    };
    this.ShowItem = function (mid, iid) {
        dm.ShHdItm(mid, iid, '1');
    };
    this.ShHdItm = function (mid, iid, ShHd, t) {
        var uid = dm.GetFullMenuID(mid);
        if (uid == '')
            return;
        if (t == null || t == undefined) {
            t = 0;
        }
        var itm = cmn.Mko(uid + '_' + iid);
        if (itm == null && t < 100) {
            t++;
            setTimeout('dm.ShHdItm(\'' + mid + '\',\'' + iid + '\',\'' + ShHd + '\',' + t + ');', 50);
            return;
        }
        if (itm == null)
            return;
        var SelIts = dm.GtPrnItm(iid, uid);
        if ((dm.mO != 1) || (SelIts.length > 1)) {
            itm = itm.parentNode;
        }
        var attr = '';
        if (ShHd == '0')
            attr = 'display:none !important';
        cmn.SetAttr2(itm, 'style', attr);
    };
    this.ApplyCSS = function (mid, cls, sbm, t) {
        var uid = dm.GetFullMenuID(mid);
        if (uid == '')
            return;
        if (t == null || t == undefined) {
            t = 0;
        }
        if (sbm == null || sbm == undefined) {
            sbm = '';
        }
        var div = cmn.Mko(uid + '_-0p');
        if (div == null && t < 100) {
            t++;
            setTimeout('dm.ApplyCSS(\'' + mid + '\',\'' + cls + '\',\'' + sbm + '\',' + t + ');', 50);
            return;
        }
        if (div == null)
            return;
        if (sbm == '') {
            div.className += ' ' + cls;
        } else {
            var ccp = cmn.Gisv('ccp', uid);
            var divs = document.getElementsByClassName(ccp + 'SubMenuDIV');
            if (divs) {
                for (i = 0; i < divs.length; i++) {
                    divs[i].className = divs[i].className + ' ' + cls;
                }
            }
        }
    };
    this.SetVar = function (mid, name, value, t) {
        var uid = dm.GetFullMenuID(mid);
        if (uid == '')
            return;
        if (t == null || t == undefined) {
            t = 0;
        }
        var div = cmn.Mko(uid + '_-0p');
        if (div == null && t < 100) {
            t++;
            setTimeout('dm.SetVar(\'' + mid + '\',\'' + name + '\',\'' + value + '\',' + t + ');', 50);
            return;
        }
        if (div == null)
            return;
        cmn.Sisv(name, value, uid);
    };
};

/*DSRGFT5675443*/

function AddGlyphs(Path) {
    cmn.RegWbFnt('MG_Icons', 'MG_Icons', Path + 'MG_Icons', 'r729009850', true);
};

function AddCss_main(Path, HostURL) {
    var Css = '.A81MainMenuDIV *, .A81SubMenuDIV * {-webkit-box-sizing: content-box !important;-moz-box-sizing: content-box !important;box-sizing: content-box !important;}.A81MainMenuDIV TD, .A81SubMenuDIV TD {vertical-align: middle;border: none;padding: 0px;}.A81Defaults {color: #51729A;OverlapVertical: -3px;OverlapHorizontal: 7px;}.A81IconTD, .A81TitleTD, .A81ArrowTD, .A81HeaderTD, .A81TitleTD * {text-shadow: none;font-size: 16px;font-family: Trebuchet MS;white-space: nowrap;padding: 0px;line-height: normal;vertical-align: middle;}.A81TitleTD {text-align: left;}.A81ArrowTD {padding-left: 2px;}.A81IconTD font, .A81ArrowTD font {margin: 0 !important;display: block !important;padding: 0px;line-height: 16px;}.A81MainMenuDIV {border: solid 1px !important;border-color: #D8D8D8 !important;padding: 4px;background-color: #EAEAEA;background: -moz-linear-gradient(top, #F8F8F8 0%, #E3E3E3 100%); background: -webkit-linear-gradient(top, #F8F8F8 0%, #E3E3E3 100%); background: linear-gradient(to bottom, #F8F8F8 0%, #E3E3E3 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#F8F8F8\', endColorstr=\'#E3E3E3\', GradientType=0);;cursor: default;}.A81MainMenuDIV .A81HeaderTD {text-align: left;padding: 6px !important;padding-left: 6px !important;padding-right: 6px !important;color: #959595;}.A81MainMenuDIV TABLE {width: auto;border: none;border-collapse: separate;margin: 0px;padding: 0px;}.A81MainMenuDIV{display:-moz-inline-stack;display:inline-block;zoom:1;*display:inline;overflow:hidden;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}.A81MainMenuItemTD {padding: 9px !important;padding-left: 6px !important;padding-right: 6px !important;}.A81MainMenuItemTD .A81TitleTD, .A81MainMenuItemTD .A81IconTD, .A81MainMenuItemTD .A81ArrowTD {color: #3A536E;text-shadow: 1px 1px 1px #FFFFFF;}.A81MainMenuItemHoveredTD {padding: 9px !important;padding-left: 6px !important;padding-right: 6px !important;background-color: #51729A;cursor: default;cursor: hand;cursor: pointer;}.A81MainMenuItemHoveredTD .A81TitleTD, .A81MainMenuItemHoveredTD .A81IconTD, .A81MainMenuItemHoveredTD .A81ArrowTD {color: #FFFFFF;text-shadow: 1px 1px 1px #3B5471;}.A81MainMenuItemSelectedTD {padding: 9px !important;padding-left: 6px !important;padding-right: 6px !important;background-color: #D9D9D9;}.A81MainMenuItemSelectedTD .A81TitleTD, .A81MainMenuItemSelectedTD .A81IconTD, .A81MainMenuItemSelectedTD .A81ArrowTD {color: #3A536E;}.A81SubMenuDIV {-moz-box-sizing: content-box;-webkit-box-sizing: content-box;box-sizing: content-box;padding: 6px;background-color: #51729A;cursor: default;}.A81SubMenuDIV .A81HeaderTD {text-align: left;padding: 5px !important;padding-left: 6px !important;padding-right: 6px !important;color: #91A8C4;}.A81SubMenuDIV TABLE {border: none;border-collapse: separate;width: auto !important;margin: 0px;padding: 0px;}.A81SubMenuItemTD, .A81SubResDIV {padding: 6px !important;padding-left: 7px !important;padding-right: 7px !important;}.A81SubMenuItemTD .A81TitleTD, .A81SubMenuItemTD .A81IconTD, .A81SubMenuItemTD .A81ArrowTD, .A81SubResDIV {color: #FFFFFF;text-shadow: 1px 1px 1px #3B5471;}.A81SubMenuItemHoveredTD, .A81SubResDIV:hover {padding: 6px !important;padding-left: 7px !important;padding-right: 7px !important;background-color: #EBEBEB;cursor: default;cursor: hand;cursor: pointer;}.A81SubMenuItemHoveredTD .A81TitleTD, .A81SubMenuItemHoveredTD .A81IconTD, .A81SubMenuItemHoveredTD .A81ArrowTD, .A81SubResDIV:hover {color: #3A536E;text-shadow: 1px 1px 1px #FFFFFF;}.A81SubMenuItemSelectedTD {padding: 6px !important;padding-left: 7px !important;padding-right: 7px !important;background-color: #7190B4;}.A81SubMenuItemSelectedTD .A81TitleTD, .A81SubMenuItemSelectedTD .A81IconTD, .A81SubMenuItemSelectedTD .A81ArrowTD {color: #FFFFFF;text-shadow: 1px 1px 1px #3B5471;}.A81SeparatorVerticalTD {padding: 0px !important;border-left-style: solid !important;border-left-width: 1px !important;border-left-color: #9A9A9A !important;background-color: #DEDEDE;}.A81SeparatorVerticalTD TABLE {width: 1px;}.A81SeparatorHorizontalTD {padding: 0px !important;background-color: #698AB0 !important;border-top-style: solid !important;border-top-width: 1px !important;border-top-color: #3E5876 !important;}.A81MainMenuDIV .A81SeparatorHorizontalTD {padding: 0px !important;border-top-style: solid !important;border-top-width: 1px !important;border-top-color: #DEDEDE !important;background-color: #FFFFFF !important;}.A81MltClmnSepar1TD {padding-left: 4px !important;}.A81MltClmnSepar1AddTD {border-left-style: solid !important;border-left-width: 1px !important;border-left-color: #698AB0 !important;}.A81MltClmnSepar2TD {padding-right: 4px !important;border-right-style: solid !important;border-right-width: 1px !important;border-right-color: #3E5876 !important;}.A81SepVertHorSubmTD {border-left-color: #3E5876 !important;background-color: #698AB0;}.A81TooltipDIV {font-family: Trebuchet MS;font-size: 12px;color: #555555;padding: 3px;padding-left: 5px;padding-right: 5px;background-color: #F8F8F8;border: solid 1px #888888;}.A81SubMenuDIV, .A81TooltipDIV {-webkit-box-shadow: 3px 3px 7px 0px rgba(50, 50, 50, 0.20); -moz-box-shadow: 3px 3px 7px 0px rgba(50, 50, 50, 0.20); box-shadow: 3px 3px 7px 0px rgba(50, 50, 50, 0.20);}.A81MainMenuDIV, .A81SubMenuDIV {border-radius: 4px; -webkit-border-radius:4px; -khtml-border-radius:4px; -moz-border-radius:4px;}.A81MainMenuItemHoveredTD, .A81MainMenuItemSelectedTD, .A81SubMenuItemHoveredTD, .A81SubResDIV:hover, .A81SubMenuItemSelectedTD, .A81TooltipDIV {border-radius: 3px; -webkit-border-radius:3px; -khtml-border-radius:3px; -moz-border-radius:3px;}.A81IconTD {color: #000000;vertical-align: middle;text-align: center;}.A81IconTD font {font-size: 16px;padding-left: 2px;padding-right: 8px;width: 16px;}.A81ArrowNotitleTD font {padding-left: 0px !important;}.A81SubResDIV {font-family: Trebuchet MS;font-size: 16px;color: #FFFFFF;padding: 4px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;vertical-align: middle;line-height: 16px;}.A81SubResDIV font {margin-top: 0px;margin-right: 8px;font-size: 16px;float: left;}.A81SubResDIV:hover {color: #3A536E;}';

    cmn.RegPageCss('Style_Menu_A81', Css, true);
};
var gbd4Hirq0nTydmain = 'mnF3216978';
var mnF3216978i = function () {
    dm.i('mnF3216978', 0);
};
var mnF3216978L = null;
function mnF3216978LCn(Path) {
    this.id = 'main';
    this.uid = 'main';
    this.sfu = Path;
    this.ccp = 'A81';
    this.EmpHtm = Path + 'Empty.htm';
    this.PngShdCnt = 0;
    this.o = 2;
    this.ed = 1;
    this.TrEff = true;
    this.TrSpd = 5;
    this.ho = 7;
    this.vo = -3;
    this.zi = 999998;
    this.smo = '1';
    this.smc = '1';
    this.hpth = 'false';
    this.ocDt = 250;
    this.HovIts = null;
    this.SelIts = null;
    this.SMH = '10000';
    this.nids = '<ii3><ii4/><ii6/><ii5/><ii9/><ii10/><ii11/><ii12/><ii13/><ii14/></ii3>';
    this.SbmAtHd = true;
    this.PosVertTyp = '1';
    this.ttt_mnF3216978_i4 = 'ascii';
    this.ttt_mnF3216978_i6 = 'css';
    this.ttt_mnF3216978_i5 = 'dcd';
    this.ttt_mnF3216978_i9 = 'temp';
    this.ttt_mnF3216978_i10 = 'unipad';
    this.ttt_mnF3216978_i11 = 'flash';
    this.ttt_mnF3216978_i12 = 'calc';
    this.ttt_mnF3216978_i13 = 'py';
    this.ttt_mnF3216978_i14 = 'cnt';
};

var main = {
    _path: '',
    _div: '',
    _SbMnu: false,
    Mnu: '',
    Plcd: false,
    ItmsCnt: 10,
    CCP: 'A81',
    Prepare: function () {
        var Ident = 'main';
        var Path = main._path;
        var HostURL = '';

        if (Path == '' || Path == null || Path == undefined) {
            Path = './' + Ident + '/';
            var e = document.getElementsByTagName('script');
            var src = null;
            var attr = null;
            var IdentLw = Ident.toLowerCase();
            var Ind = -1;
            var attrLw = '';
            for (var i = 0; i < e.length; i++) {
                src = e[i].attributes['src'];
                if (src && src != null && src != undefined && src != '') {
                    attr = src.value;
                    if (attr && attr != null && attr != undefined && attr != '') {
                        attrLw = attr.toLowerCase();
                        Ind = attrLw.lastIndexOf('/' + IdentLw + '.js');
                        if (Ind > -1) {
                            Path = attr.substring(0, Ind);
                            break;
                        }
                        Ind = attrLw.lastIndexOf('/' + IdentLw + '_short.js');
                        if (Ind > -1) {
                            Path = attr.substring(0, Ind);
                            break;
                        }
                        Ind = attrLw.indexOf(IdentLw + '/script.js');
                        if (Ind > -1) {
                            Path = attr.substring(0, Ind) + Ident;
                            break;
                        }
                    }
                }
            }

            var PrmInd = 0;
            PrmInd = Path.indexOf('?');
            if (PrmInd > 0)
                Path = Path.substring(0, PrmInd);

            Path = Path.replace(/(\r\n|\n|\r)/gm, ''); /*Line Breaks*/
        }

        var lst = Path.substring(Path.length - 1);
        if (lst != '/')
            Path = Path + '/';

        var gl = function (h) {
            var l = document.createElement('a');
            l.href = h;
            return l;
        };
        var l = gl(Path);
        HostURL = '//' + l.hostname;
        if (l.protocol != ':')
            HostURL = l.protocol + HostURL;
        AddGlyphs(Path);

        AddCss_main(Path, HostURL);
        mnF3216978L = new mnF3216978LCn(Path);
        main.Mnu = '<div><input id="sit_mnF3216978_vs" name="sit_mnF3216978_vs" type="hidden" value="" /></div><div id="mnF3216978_-0p" class="A81MainMenuDIV" onmouseover="dm.vD();" onmouseout="dm.uD();" style="visibility:hidden;z-index:999999;position:static;vertical-align:top;display:-moz-inline-stack;display:inline-block;zoom:1;*display:inline;"><table border="0" cellspacing="0" cellpadding="0" onclick="dm.mc();"><tr><td onmouseout="dm.u(this);" id="mnF3216978_i3" onclick="dm.ItClk(this,\'\',\'1\');" class="A81MainMenuItemTD" onmouseover="dm.v(this, 1);"><table border="0" cellspacing="0" cellpadding="0"><tr><td class="A81IconTD"><font class="MG_Icons">&#xe720;</font></td><td class="A81TitleTD" id="mnF3216978_i3-tl">Main</td><td class="A81ArrowTD"><font class="MG_Icons" style="font-size:16px;width:10px;padding-left:10px;">&#xea20;</font></td></tr></table></td></tr></table></div>';
        var s0 = '-p" style="Z-INDEX:999999;height:auto;visibility:hidden;POSITION:absolute;LEFT:1px;TOP:1px;WIDTH:auto;padding:0px;"><div<t>SubMenuDIV" onclick="dm.mc();" onmouseover="dm.vD();" onmouseout="dm.uD();<c> id="<r>_i';
        var s2 = '-smt"><g><r>_i';
        var s3 = '<j>ArrowTD<f><g><r>_i';
        main.SubMnu = '<div id="<r>ifc"></div><div id="<r>_i3' + s0 + '3' + s2 + '4<n>\'\',\'1\<z>../redir.html?go=1/ascii.html\',\'_self\');<l>2<y>>&#xe74e;<h>4-tl">ASCII Art' + s3 + '6<n>\'\',\'1\<z>../redir.html?go=1/css.html\',\'_self\');<l>2<y>>&#xe74e;<h>6-tl">CSS Projects' + s3 + '5<n>\'\',\'1\<z>../redir.html?go=1/dcd.html\',\'_self\');<l>2<y>>&#xe74e;<h>5-tl">Dicoding Projects' + s3 + '9<n>\'\',\'1\<z>../redir.html?go=1/temp.html\',\'_self\');<l>2<y>>&#xe74e;<h>9-tl">Konversi Suhu' + s3 + '10<n>\'\',\'1\<z>../redir.html?go=1/unipad.html\',\'_self\');<l>2<y>>&#xe74e;<h>10-tl">Unipad Player' + s3 + '11<n>\'\',\'1\<z>../redir.html?go=1/flash.html\',\'_self\');<l>2<y>>&#xe74e;<h>11-tl">Flash Games' + s3 + '12<n>\'\',\'1\<z>../redir.html?go=1/calc.html\',\'_self\');<l>2<y>>&#xe74e;<h>12-tl">Kalkulator' + s3 + '13<n>\'\',\'1\<z>../redir.html?go=1/py.html\',\'_self\');<l>2<y>>&#xe74e;<h>13-tl">PyScript' + s3 + '14<n>\'\',\'1\<z>../redir.html?go=1/cnt.html\',\'_self\');<l>2<y>>&#xe74e;<h>14-tl">Counter<j>ArrowTD<f></table></div></div>';
        main.SubMnu = cmn.DeCompact(main.SubMnu, 'A81', 'mnF3216978', 'MG_Icons', '1');
    },

    addEvent: function (el, evnt, func) {
        try {
            if (el.addEventListener) {
                el.addEventListener(evnt, func, false);
            } else if (el.attachEvent) {
                el.attachEvent('on' + evnt, func);
            }
        } catch (e) {}
    },

    GetDst: function () {
        var DstID = main._div;
        if (DstID == '')
            DstID = 'main';
        var Dst = cmn.Mko(DstID);
        return Dst;
    },

    PlaceAuto: function (p, d, sb) {
        main.Plcd = false;
        main._path = '';
        main._div = '';
        main._SbMnu = false;
        if (p != null && p != undefined && p != '') {
            main._path = p;
        }
        if (d != null && d != undefined && d != '') {
            main._div = d;
        }
        if (sb == true) {
            main._SbMnu = true;
        }
        main.Prepare();
        main.addEvent(window, 'load', main.PutInDIV);
        main.PutInDIV_TO(0);
    },

    PutInDIV_TO: function (t) {
        var Dst = main.GetDst();
        if (Dst == null || Dst == undefined) {
            if (t < 50) {
                t++;
                setTimeout('main.PutInDIV_TO(' + t + ');', 50);
                return;
            }
        } else {
            main.PutInDIV();
        }
    },

    PutInDIV: function () {
        if (main.Plcd == true)
            return;
        var Dst = main.GetDst();
        if (Dst == null || Dst == undefined) {
            return;
        }

        if (main._SbMnu == true) {
            Dst.innerHTML = main.Mnu + main.SubMnu;
        } else {
            Dst.innerHTML = main.Mnu;
            var Dv = document.createElement('DIV');
            Dv.innerHTML = main.SubMnu;
            document.body.appendChild(Dv);
        }

        setTimeout('mnF3216978i()', 10);
        main.Plcd = true;
        var Mnu = cmn.Mko('mnF3216978_-0p');
        if (Mnu != null) {
            var ShMn = function () {
                Mnu.childNodes[0].style.visibility = 'visible';
            };
            setTimeout(ShMn, 20);
        }
    },

    Show: function () {
        main.Plcd = false;
        main.Prepare();
        document.write(main.Mnu + main.SubMnu);
        setTimeout('mnF3216978i()', 10);
        main.Plcd = true;
    }

};
