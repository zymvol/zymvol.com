/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());


/*!

  * Bootstrap v5.3.7 (https://getbootstrap.com/)

  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)

  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

  */

(function (global, factory) {

  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :

  typeof define === 'function' && define.amd ? define(factory) :

  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory());

})(this, (function () { 'use strict';



  /**

   * --------------------------------------------------------------------------

   * Bootstrap dom/data.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */



  /**

   * Constants

   */



  const elementMap = new Map();

  const Data = {

    set(element, key, instance) {

      if (!elementMap.has(element)) {

        elementMap.set(element, new Map());

      }

      const instanceMap = elementMap.get(element);



      // make it clear we only want one instance per element

      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {

        // eslint-disable-next-line no-console

        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);

        return;

      }

      instanceMap.set(key, instance);

    },

    get(element, key) {

      if (elementMap.has(element)) {

        return elementMap.get(element).get(key) || null;

      }

      return null;

    },

    remove(element, key) {

      if (!elementMap.has(element)) {

        return;

      }

      const instanceMap = elementMap.get(element);

      instanceMap.delete(key);



      // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {

        elementMap.delete(element);

      }

    }

  };



  /**

   * --------------------------------------------------------------------------

   * Bootstrap util/index.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */



  const MAX_UID = 1000000;

  const MILLISECONDS_MULTIPLIER = 1000;

  const TRANSITION_END = 'transitionend';



  /**

   * Properly escape IDs selectors to handle weird IDs

   * @param {string} selector

   * @returns {string}

   */

  const parseSelector = selector => {

    if (selector && window.CSS && window.CSS.escape) {

      // document.querySelector needs escaping to handle IDs (html5+) containing for instance /

      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);

    }

    return selector;

  };



  // Shout-out Angus Croll (https://goo.gl/pxwQGp)

  const toType = object => {

    if (object === null || object === undefined) {

      return `${object}`;

    }

    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();

  };



  /**

   * Public Util API

   */



  const getUID = prefix => {

    do {

      prefix += Math.floor(Math.random() * MAX_UID);

    } while (document.getElementById(prefix));

    return prefix;

  };

  const getTransitionDurationFromElement = element => {

    if (!element) {

      return 0;

    }



    // Get transition-duration of the element

    let {

      transitionDuration,

      transitionDelay

    } = window.getComputedStyle(element);

    const floatTransitionDuration = Number.parseFloat(transitionDuration);

    const floatTransitionDelay = Number.parseFloat(transitionDelay);



    // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {

      return 0;

    }



    // If multiple durations are defined, take the first

    transitionDuration = transitionDuration.split(',')[0];

    transitionDelay = transitionDelay.split(',')[0];

    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;

  };

  const triggerTransitionEnd = element => {

    element.dispatchEvent(new Event(TRANSITION_END));

  };

  const isElement$1 = object => {

    if (!object || typeof object !== 'object') {

      return false;

    }

    if (typeof object.jquery !== 'undefined') {

      object = object[0];

    }

    return typeof object.nodeType !== 'undefined';

  };

  const getElement = object => {

    // it's a jQuery object or a node element

    if (isElement$1(object)) {

      return object.jquery ? object[0] : object;

    }

    if (typeof object === 'string' && object.length > 0) {

      return document.querySelector(parseSelector(object));

    }

    return null;

  };

  const isVisible = element => {

    if (!isElement$1(element) || element.getClientRects().length === 0) {

      return false;

    }

    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';

    // Handle `details` element as its content may falsie appear visible when it is closed

    const closedDetails = element.closest('details:not([open])');

    if (!closedDetails) {

      return elementIsVisible;

    }

    if (closedDetails !== element) {

      const summary = element.closest('summary');

      if (summary && summary.parentNode !== closedDetails) {

        return false;

      }

      if (summary === null) {

        return false;

      }

    }

    return elementIsVisible;

  };

  const isDisabled = element => {

    if (!element || element.nodeType !== Node.ELEMENT_NODE) {

      return true;

    }

    if (element.classList.contains('disabled')) {

      return true;

    }

    if (typeof element.disabled !== 'undefined') {

      return element.disabled;

    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';

  };

  const findShadowRoot = element => {

    if (!document.documentElement.attachShadow) {

      return null;

    }



    // Can find the shadow root otherwise it'll return the document

    if (typeof element.getRootNode === 'function') {

      const root = element.getRootNode();

      return root instanceof ShadowRoot ? root : null;

    }

    if (element instanceof ShadowRoot) {

      return element;

    }



    // when we don't find a shadow root

    if (!element.parentNode) {

      return null;

    }

    return findShadowRoot(element.parentNode);

  };

  const noop = () => {};



  /**

   * Trick to restart an element's animation

   *

   * @param {HTMLElement} element

   * @return void

   *

   * @see https://www.harrytheo.com/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation

   */

  const reflow = element => {

    element.offsetHeight; // eslint-disable-line no-unused-expressions

  };

  const getjQuery = () => {

    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {

      return window.jQuery;

    }

    return null;

  };

  const DOMContentLoadedCallbacks = [];

  const onDOMContentLoaded = callback => {

    if (document.readyState === 'loading') {

      // add listener on the first call when the document is in loading state

      if (!DOMContentLoadedCallbacks.length) {

        document.addEventListener('DOMContentLoaded', () => {

          for (const callback of DOMContentLoadedCallbacks) {

            callback();

          }

        });

      }

      DOMContentLoadedCallbacks.push(callback);

    } else {

      callback();

    }

  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {

    onDOMContentLoaded(() => {

      const $ = getjQuery();

      /* istanbul ignore if */

      if ($) {

        const name = plugin.NAME;

        const JQUERY_NO_CONFLICT = $.fn[name];

        $.fn[name] = plugin.jQueryInterface;

        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {

          $.fn[name] = JQUERY_NO_CONFLICT;

          return plugin.jQueryInterface;

        };

      }

    });

  };

  const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {

    return typeof possibleCallback === 'function' ? possibleCallback.call(...args) : defaultValue;

  };

  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {

    if (!waitForTransition) {

      execute(callback);

      return;

    }

    const durationPadding = 5;

    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;

    let called = false;

    const handler = ({

      target

    }) => {

      if (target !== transitionElement) {

        return;

      }

      called = true;

      transitionElement.removeEventListener(TRANSITION_END, handler);

      execute(callback);

    };

    transitionElement.addEventListener(TRANSITION_END, handler);

    setTimeout(() => {

      if (!called) {

        triggerTransitionEnd(transitionElement);

      }

    }, emulatedDuration);

  };



  /**

   * Return the previous/next element of a list.

   *

   * @param {array} list    The list of elements

   * @param activeElement   The active element

   * @param shouldGetNext   Choose to get next or previous element

   * @param isCycleAllowed

   * @return {Element|elem} The proper element

   */

  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {

    const listLength = list.length;

    let index = list.indexOf(activeElement);



    // if the element does not exist in the list return an element

    // depending on the direction and if cycle is allowed

    if (index === -1) {

      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];

    }

    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {

      index = (index + listLength) % listLength;

    }

    return list[Math.max(0, Math.min(index, listLength - 1))];

  };



  /**

   * --------------------------------------------------------------------------

   * Bootstrap dom/event-handler.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;

  const stripNameRegex = /\..*/;

  const stripUidRegex = /::\d+$/;

  const eventRegistry = {}; // Events storage

  let uidEvent = 1;

  const customEvents = {

    mouseenter: 'mouseover',

    mouseleave: 'mouseout'

  };

  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);



  /**

   * Private methods

   */



  function makeEventUid(element, uid) {

    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;

  }

  function getElementEvents(element) {

    const uid = makeEventUid(element);

    element.uidEvent = uid;

    eventRegistry[uid] = eventRegistry[uid] || {};

    return eventRegistry[uid];

  }

  function bootstrapHandler(element, fn) {

    return function handler(event) {

      hydrateObj(event, {

        delegateTarget: element

      });

      if (handler.oneOff) {

        EventHandler.off(element, event.type, fn);

      }

      return fn.apply(element, [event]);

    };

  }

  function bootstrapDelegationHandler(element, selector, fn) {

    return function handler(event) {

      const domElements = element.querySelectorAll(selector);

      for (let {

        target

      } = event; target && target !== this; target = target.parentNode) {

        for (const domElement of domElements) {

          if (domElement !== target) {

            continue;

          }

          hydrateObj(event, {

            delegateTarget: target

          });

          if (handler.oneOff) {

            EventHandler.off(element, event.type, selector, fn);

          }

          return fn.apply(target, [event]);

        }

      }

    };

  }

  function findHandler(events, callable, delegationSelector = null) {

    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);

  }

  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {

    const isDelegated = typeof handler === 'string';

    // TODO: tooltip passes `false` instead of selector, so we need to check

    const callable = isDelegated ? delegationFunction : handler || delegationFunction;

    let typeEvent = getTypeEvent(originalTypeEvent);

    if (!nativeEvents.has(typeEvent)) {

      typeEvent = originalTypeEvent;

    }

    return [isDelegated, callable, typeEvent];

  }

  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {

    if (typeof originalTypeEvent !== 'string' || !element) {

      return;

    }

    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);



    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position

    // this prevents the handler from being dispatched the same way as mouseover or mouseout does

    if (originalTypeEvent in customEvents) {

      const wrapFunction = fn => {

        return function (event) {

          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {

            return fn.call(this, event);

          }

        };

      };

      callable = wrapFunction(callable);

    }

    const events = getElementEvents(element);

    const handlers = events[typeEvent] || (events[typeEvent] = {});

    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);

    if (previousFunction) {

      previousFunction.oneOff = previousFunction.oneOff && oneOff;

      return;

    }

    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));

    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);

    fn.delegationSelector = isDelegated ? handler : null;

    fn.callable = callable;

    fn.oneOff = oneOff;

    fn.uidEvent = uid;

    handlers[uid] = fn;

    element.addEventListener(typeEvent, fn, isDelegated);

  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {

    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {

      return;

    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));

    delete events[typeEvent][fn.uidEvent];

  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {

    const storeElementEvent = events[typeEvent] || {};

    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {

      if (handlerKey.includes(namespace)) {

        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);

      }

    }

  }

  function getTypeEvent(event) {

    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

    event = event.replace(stripNameRegex, '');

    return customEvents[event] || event;

  }

  const EventHandler = {

    on(element, event, handler, delegationFunction) {

      addHandler(element, event, handler, delegationFunction, false);

    },

    one(element, event, handler, delegationFunction) {

      addHandler(element, event, handler, delegationFunction, true);

    },

    off(element, originalTypeEvent, handler, delegationFunction) {

      if (typeof originalTypeEvent !== 'string' || !element) {

        return;

      }

      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

      const inNamespace = typeEvent !== originalTypeEvent;

      const events = getElementEvents(element);

      const storeElementEvent = events[typeEvent] || {};

      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof callable !== 'undefined') {

        // Simplest case: handler is passed, remove that listener ONLY.

        if (!Object.keys(storeElementEvent).length) {

          return;

        }

        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);

        return;

      }

      if (isNamespace) {

        for (const elementEvent of Object.keys(events)) {

          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));

        }

      }

      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {

        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {

          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);

        }

      }

    },

    trigger(element, event, args) {

      if (typeof event !== 'string' || !element) {

        return null;

      }

      const $ = getjQuery();

      const typeEvent = getTypeEvent(event);

      const inNamespace = event !== typeEvent;

      let jQueryEvent = null;

      let bubbles = true;

      let nativeDispatch = true;

      let defaultPrevented = false;

      if (inNamespace && $) {

        jQueryEvent = $.Event(event, args);

        $(element).trigger(jQueryEvent);

        bubbles = !jQueryEvent.isPropagationStopped();

        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();

        defaultPrevented = jQueryEvent.isDefaultPrevented();

      }

      const evt = hydrateObj(new Event(event, {

        bubbles,

        cancelable: true

      }), args);

      if (defaultPrevented) {

        evt.preventDefault();

      }

      if (nativeDispatch) {

        element.dispatchEvent(evt);

      }

      if (evt.defaultPrevented && jQueryEvent) {

        jQueryEvent.preventDefault();

      }

      return evt;

    }

  };

  function hydrateObj(obj, meta = {}) {

    for (const [key, value] of Object.entries(meta)) {

      try {

        obj[key] = value;

      } catch (_unused) {

        Object.defineProperty(obj, key, {

          configurable: true,

          get() {

            return value;

          }

        });

      }

    }

    return obj;

  }



  /**

   * --------------------------------------------------------------------------

   * Bootstrap dom/manipulator.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */



  function normalizeData(value) {

    if (value === 'true') {

      return true;

    }

    if (value === 'false') {

      return false;

    }

    if (value === Number(value).toString()) {

      return Number(value);

    }

    if (value === '' || value === 'null') {

      return null;

    }

    if (typeof value !== 'string') {

      return value;

    }

    try {

      return JSON.parse(decodeURIComponent(value));

    } catch (_unused) {

      return value;

    }

  }

  function normalizeDataKey(key) {

    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);

  }

  const Manipulator = {

    setDataAttribute(element, key, value) {

      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);

    },

    removeDataAttribute(element, key) {

      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);

    },

    getDataAttributes(element) {

      if (!element) {

        return {};

      }

      const attributes = {};

      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

      for (const key of bsKeys) {

        let pureKey = key.replace(/^bs/, '');

        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);

        attributes[pureKey] = normalizeData(element.dataset[key]);

      }

      return attributes;

    },

    getDataAttribute(element, key) {

      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));

    }

  };



  /**

   * --------------------------------------------------------------------------

   * Bootstrap util/config.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Class definition

   */



  class Config {

    // Getters

    static get Default() {

      return {};

    }

    static get DefaultType() {

      return {};

    }

    static get NAME() {

      throw new Error('You have to implement the static method "NAME", for each component!');

    }

    _getConfig(config) {

      config = this._mergeConfigObj(config);

      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;

    }

    _configAfterMerge(config) {

      return config;

    }

    _mergeConfigObj(config, element) {

      const jsonConfig = isElement$1(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse



      return {

        ...this.constructor.Default,

        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),

        ...(isElement$1(element) ? Manipulator.getDataAttributes(element) : {}),

        ...(typeof config === 'object' ? config : {})

      };

    }

    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {

      for (const [property, expectedTypes] of Object.entries(configTypes)) {

        const value = config[property];

        const valueType = isElement$1(value) ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {

          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);

        }

      }

    }

  }



  /**

   * --------------------------------------------------------------------------

   * Bootstrap base-component.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const VERSION = '5.3.7';



  /**

   * Class definition

   */



  class BaseComponent extends Config {

    constructor(element, config) {

      super();

      element = getElement(element);

      if (!element) {

        return;

      }

      this._element = element;

      this._config = this._getConfig(config);

      Data.set(this._element, this.constructor.DATA_KEY, this);

    }



    // Public

    dispose() {

      Data.remove(this._element, this.constructor.DATA_KEY);

      EventHandler.off(this._element, this.constructor.EVENT_KEY);

      for (const propertyName of Object.getOwnPropertyNames(this)) {

        this[propertyName] = null;

      }

    }



    // Private

    _queueCallback(callback, element, isAnimated = true) {

      executeAfterTransition(callback, element, isAnimated);

    }

    _getConfig(config) {

      config = this._mergeConfigObj(config, this._element);

      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;

    }



    // Static

    static getInstance(element) {

      return Data.get(getElement(element), this.DATA_KEY);

    }

    static getOrCreateInstance(element, config = {}) {

      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);

    }

    static get VERSION() {

      return VERSION;

    }

    static get DATA_KEY() {

      return `bs.${this.NAME}`;

    }

    static get EVENT_KEY() {

      return `.${this.DATA_KEY}`;

    }

    static eventName(name) {

      return `${name}${this.EVENT_KEY}`;

    }

  }



  /**

   * --------------------------------------------------------------------------

   * Bootstrap dom/selector-engine.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */



  const getSelector = element => {

    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {

      let hrefAttribute = element.getAttribute('href');



      // The only valid content that could double as a selector are IDs or classes,

      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,

      // `document.querySelector` will rightfully complain it is invalid.

      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {

        return null;

      }



      // Just in case some CMS puts out a full URL with the anchor appended

      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {

        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;

      }

      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;

    }

    return selector ? selector.split(',').map(sel => parseSelector(sel)).join(',') : null;

  };

  const SelectorEngine = {

    find(selector, element = document.documentElement) {

      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));

    },

    findOne(selector, element = document.documentElement) {

      return Element.prototype.querySelector.call(element, selector);

    },

    children(element, selector) {

      return [].concat(...element.children).filter(child => child.matches(selector));

    },

    parents(element, selector) {

      const parents = [];

      let ancestor = element.parentNode.closest(selector);

      while (ancestor) {

        parents.push(ancestor);

        ancestor = ancestor.parentNode.closest(selector);

      }

      return parents;

    },

    prev(element, selector) {

      let previous = element.previousElementSibling;

      while (previous) {

        if (previous.matches(selector)) {

          return [previous];

        }

        previous = previous.previousElementSibling;

      }

      return [];

    },

    // TODO: this is now unused; remove later along with prev()

    next(element, selector) {

      let next = element.nextElementSibling;

      while (next) {

        if (next.matches(selector)) {

          return [next];

        }

        next = next.nextElementSibling;

      }

      return [];

    },

    focusableChildren(element) {

      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');

      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));

    },

    getSelectorFromElement(element) {

      const selector = getSelector(element);

      if (selector) {

        return SelectorEngine.findOne(selector) ? selector : null;

      }

      return null;

    },

    getElementFromSelector(element) {

      const selector = getSelector(element);

      return selector ? SelectorEngine.findOne(selector) : null;

    },

    getMultipleElementsFromSelector(element) {

      const selector = getSelector(element);

      return selector ? SelectorEngine.find(selector) : [];

    }

  };



  /**

   * --------------------------------------------------------------------------

   * Bootstrap util/component-functions.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */



  const enableDismissTrigger = (component, method = 'hide') => {

    const clickEvent = `click.dismiss${component.EVENT_KEY}`;

    const name = component.NAME;

    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {

      if (['A', 'AREA'].includes(this.tagName)) {

        event.preventDefault();

      }

      if (isDisabled(this)) {

        return;

      }

      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);

      const instance = component.getOrCreateInstance(target);



      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();

    });

  };



  /**

   * --------------------------------------------------------------------------

   * Bootstrap alert.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$f = 'alert';

  const DATA_KEY$a = 'bs.alert';

  const EVENT_KEY$b = `.${DATA_KEY$a}`;

  const EVENT_CLOSE = `close${EVENT_KEY$b}`;

  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;

  const CLASS_NAME_FADE$5 = 'fade';

  const CLASS_NAME_SHOW$8 = 'show';



  /**

   * Class definition

   */



  class Alert extends BaseComponent {

    // Getters

    static get NAME() {

      return NAME$f;

    }



    // Public

    close() {

      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {

        return;

      }

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);

    }



    // Private

    _destroyElement() {

      this._element.remove();

      EventHandler.trigger(this._element, EVENT_CLOSED);

      this.dispose();

    }



    // Static

    static jQueryInterface(config) {

      return this.each(function () {

        const data = Alert.getOrCreateInstance(this);

        if (typeof config !== 'string') {

          return;

        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {

          throw new TypeError(`No method named "${config}"`);

        }

        data[config](this);

      });

    }

  }



  /**

   * Data API implementation

   */



  enableDismissTrigger(Alert, 'close');



  /**

   * jQuery

   */



  defineJQueryPlugin(Alert);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap button.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$e = 'button';

  const DATA_KEY$9 = 'bs.button';

  const EVENT_KEY$a = `.${DATA_KEY$9}`;

  const DATA_API_KEY$6 = '.data-api';

  const CLASS_NAME_ACTIVE$3 = 'active';

  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';

  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;



  /**

   * Class definition

   */



  class Button extends BaseComponent {

    // Getters

    static get NAME() {

      return NAME$e;

    }



    // Public

    toggle() {

      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method

      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));

    }



    // Static

    static jQueryInterface(config) {

      return this.each(function () {

        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {

          data[config]();

        }

      });

    }

  }



  /**

   * Data API implementation

   */



  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {

    event.preventDefault();

    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);

    const data = Button.getOrCreateInstance(button);

    data.toggle();

  });



  /**

   * jQuery

   */



  defineJQueryPlugin(Button);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap util/swipe.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$d = 'swipe';

  const EVENT_KEY$9 = '.bs.swipe';

  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;

  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;

  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;

  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;

  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;

  const POINTER_TYPE_TOUCH = 'touch';

  const POINTER_TYPE_PEN = 'pen';

  const CLASS_NAME_POINTER_EVENT = 'pointer-event';

  const SWIPE_THRESHOLD = 40;

  const Default$c = {

    endCallback: null,

    leftCallback: null,

    rightCallback: null

  };

  const DefaultType$c = {

    endCallback: '(function|null)',

    leftCallback: '(function|null)',

    rightCallback: '(function|null)'

  };



  /**

   * Class definition

   */



  class Swipe extends Config {

    constructor(element, config) {

      super();

      this._element = element;

      if (!element || !Swipe.isSupported()) {

        return;

      }

      this._config = this._getConfig(config);

      this._deltaX = 0;

      this._supportPointerEvents = Boolean(window.PointerEvent);

      this._initEvents();

    }



    // Getters

    static get Default() {

      return Default$c;

    }

    static get DefaultType() {

      return DefaultType$c;

    }

    static get NAME() {

      return NAME$d;

    }



    // Public

    dispose() {

      EventHandler.off(this._element, EVENT_KEY$9);

    }



    // Private

    _start(event) {

      if (!this._supportPointerEvents) {

        this._deltaX = event.touches[0].clientX;

        return;

      }

      if (this._eventIsPointerPenTouch(event)) {

        this._deltaX = event.clientX;

      }

    }

    _end(event) {

      if (this._eventIsPointerPenTouch(event)) {

        this._deltaX = event.clientX - this._deltaX;

      }

      this._handleSwipe();

      execute(this._config.endCallback);

    }

    _move(event) {

      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;

    }

    _handleSwipe() {

      const absDeltaX = Math.abs(this._deltaX);

      if (absDeltaX <= SWIPE_THRESHOLD) {

        return;

      }

      const direction = absDeltaX / this._deltaX;

      this._deltaX = 0;

      if (!direction) {

        return;

      }

      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);

    }

    _initEvents() {

      if (this._supportPointerEvents) {

        EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));

        EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);

      } else {

        EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));

        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));

        EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));

      }

    }

    _eventIsPointerPenTouch(event) {

      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);

    }



    // Static

    static isSupported() {

      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;

    }

  }



  /**

   * --------------------------------------------------------------------------

   * Bootstrap carousel.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$c = 'carousel';

  const DATA_KEY$8 = 'bs.carousel';

  const EVENT_KEY$8 = `.${DATA_KEY$8}`;

  const DATA_API_KEY$5 = '.data-api';

  const ARROW_LEFT_KEY$1 = 'ArrowLeft';

  const ARROW_RIGHT_KEY$1 = 'ArrowRight';

  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch



  const ORDER_NEXT = 'next';

  const ORDER_PREV = 'prev';

  const DIRECTION_LEFT = 'left';

  const DIRECTION_RIGHT = 'right';

  const EVENT_SLIDE = `slide${EVENT_KEY$8}`;

  const EVENT_SLID = `slid${EVENT_KEY$8}`;

  const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;

  const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;

  const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;

  const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;

  const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;

  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;

  const CLASS_NAME_CAROUSEL = 'carousel';

  const CLASS_NAME_ACTIVE$2 = 'active';

  const CLASS_NAME_SLIDE = 'slide';

  const CLASS_NAME_END = 'carousel-item-end';

  const CLASS_NAME_START = 'carousel-item-start';

  const CLASS_NAME_NEXT = 'carousel-item-next';

  const CLASS_NAME_PREV = 'carousel-item-prev';

  const SELECTOR_ACTIVE = '.active';

  const SELECTOR_ITEM = '.carousel-item';

  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;

  const SELECTOR_ITEM_IMG = '.carousel-item img';

  const SELECTOR_INDICATORS = '.carousel-indicators';

  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';

  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';

  const KEY_TO_DIRECTION = {

    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,

    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT

  };

  const Default$b = {

    interval: 5000,

    keyboard: true,

    pause: 'hover',

    ride: false,

    touch: true,

    wrap: true

  };

  const DefaultType$b = {

    interval: '(number|boolean)',

    // TODO:v6 remove boolean support

    keyboard: 'boolean',

    pause: '(string|boolean)',

    ride: '(boolean|string)',

    touch: 'boolean',

    wrap: 'boolean'

  };



  /**

   * Class definition

   */



  class Carousel extends BaseComponent {

    constructor(element, config) {

      super(element, config);

      this._interval = null;

      this._activeElement = null;

      this._isSliding = false;

      this.touchTimeout = null;

      this._swipeHelper = null;

      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);

      this._addEventListeners();

      if (this._config.ride === CLASS_NAME_CAROUSEL) {

        this.cycle();

      }

    }



    // Getters

    static get Default() {

      return Default$b;

    }

    static get DefaultType() {

      return DefaultType$b;

    }

    static get NAME() {

      return NAME$c;

    }



    // Public

    next() {

      this._slide(ORDER_NEXT);

    }

    nextWhenVisible() {

      // FIXME TODO use `document.visibilityState`

      // Don't call next when the page isn't visible

      // or the carousel or its parent isn't visible

      if (!document.hidden && isVisible(this._element)) {

        this.next();

      }

    }

    prev() {

      this._slide(ORDER_PREV);

    }

    pause() {

      if (this._isSliding) {

        triggerTransitionEnd(this._element);

      }

      this._clearInterval();

    }

    cycle() {

      this._clearInterval();

      this._updateInterval();

      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);

    }

    _maybeEnableCycle() {

      if (!this._config.ride) {

        return;

      }

      if (this._isSliding) {

        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());

        return;

      }

      this.cycle();

    }

    to(index) {

      const items = this._getItems();

      if (index > items.length - 1 || index < 0) {

        return;

      }

      if (this._isSliding) {

        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));

        return;

      }

      const activeIndex = this._getItemIndex(this._getActive());

      if (activeIndex === index) {

        return;

      }

      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, items[index]);

    }

    dispose() {

      if (this._swipeHelper) {

        this._swipeHelper.dispose();

      }

      super.dispose();

    }



    // Private

    _configAfterMerge(config) {

      config.defaultInterval = config.interval;

      return config;

    }

    _addEventListeners() {

      if (this._config.keyboard) {

        EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));

      }

      if (this._config.pause === 'hover') {

        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());

        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());

      }

      if (this._config.touch && Swipe.isSupported()) {

        this._addTouchEventListeners();

      }

    }

    _addTouchEventListeners() {

      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {

        EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());

      }

      const endCallBack = () => {

        if (this._config.pause !== 'hover') {

          return;

        }



        // If it's a touch-enabled device, mouseenter/leave are fired as

        // part of the mouse compatibility events on first tap - the carousel

        // would stop cycling until user tapped out of it;

        // here, we listen for touchend, explicitly pause the carousel

        // (as if it's the second time we tap on it, mouseenter compat event

        // is NOT fired) and after a timeout (to allow for mouse compatibility

        // events to fire) we explicitly restart cycling



        this.pause();

        if (this.touchTimeout) {

          clearTimeout(this.touchTimeout);

        }

        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);

      };

      const swipeConfig = {

        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),

        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),

        endCallback: endCallBack

      };

      this._swipeHelper = new Swipe(this._element, swipeConfig);

    }

    _keydown(event) {

      if (/input|textarea/i.test(event.target.tagName)) {

        return;

      }

      const direction = KEY_TO_DIRECTION[event.key];

      if (direction) {

        event.preventDefault();

        this._slide(this._directionToOrder(direction));

      }

    }

    _getItemIndex(element) {

      return this._getItems().indexOf(element);

    }

    _setActiveIndicatorElement(index) {

      if (!this._indicatorsElement) {

        return;

      }

      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);

      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);

      activeIndicator.removeAttribute('aria-current');

      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

      if (newActiveIndicator) {

        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);

        newActiveIndicator.setAttribute('aria-current', 'true');

      }

    }

    _updateInterval() {

      const element = this._activeElement || this._getActive();

      if (!element) {

        return;

      }

      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

      this._config.interval = elementInterval || this._config.defaultInterval;

    }

    _slide(order, element = null) {

      if (this._isSliding) {

        return;

      }

      const activeElement = this._getActive();

      const isNext = order === ORDER_NEXT;

      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);

      if (nextElement === activeElement) {

        return;

      }

      const nextElementIndex = this._getItemIndex(nextElement);

      const triggerEvent = eventName => {

        return EventHandler.trigger(this._element, eventName, {

          relatedTarget: nextElement,

          direction: this._orderToDirection(order),

          from: this._getItemIndex(activeElement),

          to: nextElementIndex

        });

      };

      const slideEvent = triggerEvent(EVENT_SLIDE);

      if (slideEvent.defaultPrevented) {

        return;

      }

      if (!activeElement || !nextElement) {

        // Some weirdness is happening, so we bail

        // TODO: change tests that use empty divs to avoid this check

        return;

      }

      const isCycling = Boolean(this._interval);

      this.pause();

      this._isSliding = true;

      this._setActiveIndicatorElement(nextElementIndex);

      this._activeElement = nextElement;

      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;

      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

      nextElement.classList.add(orderClassName);

      reflow(nextElement);

      activeElement.classList.add(directionalClassName);

      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => {

        nextElement.classList.remove(directionalClassName, orderClassName);

        nextElement.classList.add(CLASS_NAME_ACTIVE$2);

        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);

        this._isSliding = false;

        triggerEvent(EVENT_SLID);

      };

      this._queueCallback(completeCallBack, activeElement, this._isAnimated());

      if (isCycling) {

        this.cycle();

      }

    }

    _isAnimated() {

      return this._element.classList.contains(CLASS_NAME_SLIDE);

    }

    _getActive() {

      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    }

    _getItems() {

      return SelectorEngine.find(SELECTOR_ITEM, this._element);

    }

    _clearInterval() {

      if (this._interval) {

        clearInterval(this._interval);

        this._interval = null;

      }

    }

    _directionToOrder(direction) {

      if (isRTL()) {

        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;

      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;

    }

    _orderToDirection(order) {

      if (isRTL()) {

        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;

      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;

    }



    // Static

    static jQueryInterface(config) {

      return this.each(function () {

        const data = Carousel.getOrCreateInstance(this, config);

        if (typeof config === 'number') {

          data.to(config);

          return;

        }

        if (typeof config === 'string') {

          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {

            throw new TypeError(`No method named "${config}"`);

          }

          data[config]();

        }

      });

    }

  }



  /**

   * Data API implementation

   */



  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {

    const target = SelectorEngine.getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {

      return;

    }

    event.preventDefault();

    const carousel = Carousel.getOrCreateInstance(target);

    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {

      carousel.to(slideIndex);

      carousel._maybeEnableCycle();

      return;

    }

    if (Manipulator.getDataAttribute(this, 'slide') === 'next') {

      carousel.next();

      carousel._maybeEnableCycle();

      return;

    }

    carousel.prev();

    carousel._maybeEnableCycle();

  });

  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {

    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (const carousel of carousels) {

      Carousel.getOrCreateInstance(carousel);

    }

  });



  /**

   * jQuery

   */



  defineJQueryPlugin(Carousel);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap collapse.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$b = 'collapse';

  const DATA_KEY$7 = 'bs.collapse';

  const EVENT_KEY$7 = `.${DATA_KEY$7}`;

  const DATA_API_KEY$4 = '.data-api';

  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;

  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;

  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;

  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;

  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;

  const CLASS_NAME_SHOW$7 = 'show';

  const CLASS_NAME_COLLAPSE = 'collapse';

  const CLASS_NAME_COLLAPSING = 'collapsing';

  const CLASS_NAME_COLLAPSED = 'collapsed';

  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;

  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';

  const WIDTH = 'width';

  const HEIGHT = 'height';

  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';

  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';

  const Default$a = {

    parent: null,

    toggle: true

  };

  const DefaultType$a = {

    parent: '(null|element)',

    toggle: 'boolean'

  };



  /**

   * Class definition

   */



  class Collapse extends BaseComponent {

    constructor(element, config) {

      super(element, config);

      this._isTransitioning = false;

      this._triggerArray = [];

      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (const elem of toggleList) {

        const selector = SelectorEngine.getSelectorFromElement(elem);

        const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);

        if (selector !== null && filterElement.length) {

          this._triggerArray.push(elem);

        }

      }

      this._initializeChildren();

      if (!this._config.parent) {

        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());

      }

      if (this._config.toggle) {

        this.toggle();

      }

    }



    // Getters

    static get Default() {

      return Default$a;

    }

    static get DefaultType() {

      return DefaultType$a;

    }

    static get NAME() {

      return NAME$b;

    }



    // Public

    toggle() {

      if (this._isShown()) {

        this.hide();

      } else {

        this.show();

      }

    }

    show() {

      if (this._isTransitioning || this._isShown()) {

        return;

      }

      let activeChildren = [];



      // find active children

      if (this._config.parent) {

        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {

          toggle: false

        }));

      }

      if (activeChildren.length && activeChildren[0]._isTransitioning) {

        return;

      }

      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);

      if (startEvent.defaultPrevented) {

        return;

      }

      for (const activeInstance of activeChildren) {

        activeInstance.hide();

      }

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      const complete = () => {

        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        this._element.style[dimension] = '';

        EventHandler.trigger(this._element, EVENT_SHOWN$6);

      };

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);

      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = `${this._element[scrollSize]}px`;

    }

    hide() {

      if (this._isTransitioning || !this._isShown()) {

        return;

      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);

      if (startEvent.defaultPrevented) {

        return;

      }

      const dimension = this._getDimension();

      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;

      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      for (const trigger of this._triggerArray) {

        const element = SelectorEngine.getElementFromSelector(trigger);

        if (element && !this._isShown(element)) {

          this._addAriaAndCollapsedClass([trigger], false);

        }

      }

      this._isTransitioning = true;

      const complete = () => {

        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(this._element, EVENT_HIDDEN$6);

      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);

    }



    // Private

    _isShown(element = this._element) {

      return element.classList.contains(CLASS_NAME_SHOW$7);

    }

    _configAfterMerge(config) {

      config.toggle = Boolean(config.toggle); // Coerce string values

      config.parent = getElement(config.parent);

      return config;

    }

    _getDimension() {

      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;

    }

    _initializeChildren() {

      if (!this._config.parent) {

        return;

      }

      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);

      for (const element of children) {

        const selected = SelectorEngine.getElementFromSelector(element);

        if (selected) {

          this._addAriaAndCollapsedClass([element], this._isShown(selected));

        }

      }

    }

    _getFirstLevelChildren(selector) {

      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);

      // remove children if greater depth

      return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));

    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {

      if (!triggerArray.length) {

        return;

      }

      for (const element of triggerArray) {

        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);

        element.setAttribute('aria-expanded', isOpen);

      }

    }



    // Static

    static jQueryInterface(config) {

      const _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {

        _config.toggle = false;

      }

      return this.each(function () {

        const data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {

          if (typeof data[config] === 'undefined') {

            throw new TypeError(`No method named "${config}"`);

          }

          data[config]();

        }

      });

    }

  }



  /**

   * Data API implementation

   */



  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {

    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element

    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {

      event.preventDefault();

    }

    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {

      Collapse.getOrCreateInstance(element, {

        toggle: false

      }).toggle();

    }

  });



  /**

   * jQuery

   */



  defineJQueryPlugin(Collapse);



  var top = 'top';

  var bottom = 'bottom';

  var right = 'right';

  var left = 'left';

  var auto = 'auto';

  var basePlacements = [top, bottom, right, left];

  var start = 'start';

  var end = 'end';

  var clippingParents = 'clippingParents';

  var viewport = 'viewport';

  var popper = 'popper';

  var reference = 'reference';

  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {

    return acc.concat([placement + "-" + start, placement + "-" + end]);

  }, []);

  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {

    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);

  }, []); // modifiers that need to read the DOM



  var beforeRead = 'beforeRead';

  var read = 'read';

  var afterRead = 'afterRead'; // pure-logic modifiers



  var beforeMain = 'beforeMain';

  var main = 'main';

  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)



  var beforeWrite = 'beforeWrite';

  var write = 'write';

  var afterWrite = 'afterWrite';

  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];



  function getNodeName(element) {

    return element ? (element.nodeName || '').toLowerCase() : null;

  }



  function getWindow(node) {

    if (node == null) {

      return window;

    }



    if (node.toString() !== '[object Window]') {

      var ownerDocument = node.ownerDocument;

      return ownerDocument ? ownerDocument.defaultView || window : window;

    }



    return node;

  }



  function isElement(node) {

    var OwnElement = getWindow(node).Element;

    return node instanceof OwnElement || node instanceof Element;

  }



  function isHTMLElement(node) {

    var OwnElement = getWindow(node).HTMLElement;

    return node instanceof OwnElement || node instanceof HTMLElement;

  }



  function isShadowRoot(node) {

    // IE 11 has no ShadowRoot

    if (typeof ShadowRoot === 'undefined') {

      return false;

    }



    var OwnElement = getWindow(node).ShadowRoot;

    return node instanceof OwnElement || node instanceof ShadowRoot;

  }



  // and applies them to the HTMLElements such as popper and arrow



  function applyStyles(_ref) {

    var state = _ref.state;

    Object.keys(state.elements).forEach(function (name) {

      var style = state.styles[name] || {};

      var attributes = state.attributes[name] || {};

      var element = state.elements[name]; // arrow is optional + virtual elements



      if (!isHTMLElement(element) || !getNodeName(element)) {

        return;

      } // Flow doesn't support to extend this property, but it's the most

      // effective way to apply styles to an HTMLElement

      // $FlowFixMe[cannot-write]





      Object.assign(element.style, style);

      Object.keys(attributes).forEach(function (name) {

        var value = attributes[name];



        if (value === false) {

          element.removeAttribute(name);

        } else {

          element.setAttribute(name, value === true ? '' : value);

        }

      });

    });

  }



  function effect$2(_ref2) {

    var state = _ref2.state;

    var initialStyles = {

      popper: {

        position: state.options.strategy,

        left: '0',

        top: '0',

        margin: '0'

      },

      arrow: {

        position: 'absolute'

      },

      reference: {}

    };

    Object.assign(state.elements.popper.style, initialStyles.popper);

    state.styles = initialStyles;



    if (state.elements.arrow) {

      Object.assign(state.elements.arrow.style, initialStyles.arrow);

    }



    return function () {

      Object.keys(state.elements).forEach(function (name) {

        var element = state.elements[name];

        var attributes = state.attributes[name] || {};

        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them



        var style = styleProperties.reduce(function (style, property) {

          style[property] = '';

          return style;

        }, {}); // arrow is optional + virtual elements



        if (!isHTMLElement(element) || !getNodeName(element)) {

          return;

        }



        Object.assign(element.style, style);

        Object.keys(attributes).forEach(function (attribute) {

          element.removeAttribute(attribute);

        });

      });

    };

  } // eslint-disable-next-line import/no-unused-modules





  const applyStyles$1 = {

    name: 'applyStyles',

    enabled: true,

    phase: 'write',

    fn: applyStyles,

    effect: effect$2,

    requires: ['computeStyles']

  };



  function getBasePlacement(placement) {

    return placement.split('-')[0];

  }



  var max = Math.max;

  var min = Math.min;

  var round = Math.round;



  function getUAString() {

    var uaData = navigator.userAgentData;



    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {

      return uaData.brands.map(function (item) {

        return item.brand + "/" + item.version;

      }).join(' ');

    }



    return navigator.userAgent;

  }



  function isLayoutViewport() {

    return !/^((?!chrome|android).)*safari/i.test(getUAString());

  }



  function getBoundingClientRect(element, includeScale, isFixedStrategy) {

    if (includeScale === void 0) {

      includeScale = false;

    }



    if (isFixedStrategy === void 0) {

      isFixedStrategy = false;

    }



    var clientRect = element.getBoundingClientRect();

    var scaleX = 1;

    var scaleY = 1;



    if (includeScale && isHTMLElement(element)) {

      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;

      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;

    }



    var _ref = isElement(element) ? getWindow(element) : window,

        visualViewport = _ref.visualViewport;



    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;

    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;

    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;

    var width = clientRect.width / scaleX;

    var height = clientRect.height / scaleY;

    return {

      width: width,

      height: height,

      top: y,

      right: x + width,

      bottom: y + height,

      left: x,

      x: x,

      y: y

    };

  }



  // means it doesn't take into account transforms.



  function getLayoutRect(element) {

    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.

    // Fixes https://github.com/popperjs/popper-core/issues/1223



    var width = element.offsetWidth;

    var height = element.offsetHeight;



    if (Math.abs(clientRect.width - width) <= 1) {

      width = clientRect.width;

    }



    if (Math.abs(clientRect.height - height) <= 1) {

      height = clientRect.height;

    }



    return {

      x: element.offsetLeft,

      y: element.offsetTop,

      width: width,

      height: height

    };

  }



  function contains(parent, child) {

    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method



    if (parent.contains(child)) {

      return true;

    } // then fallback to custom implementation with Shadow DOM support

    else if (rootNode && isShadowRoot(rootNode)) {

        var next = child;



        do {

          if (next && parent.isSameNode(next)) {

            return true;

          } // $FlowFixMe[prop-missing]: need a better way to handle this...





          next = next.parentNode || next.host;

        } while (next);

      } // Give up, the result is false





    return false;

  }



  function getComputedStyle$1(element) {

    return getWindow(element).getComputedStyle(element);

  }



  function isTableElement(element) {

    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;

  }



  function getDocumentElement(element) {

    // $FlowFixMe[incompatible-return]: assume body is always available

    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]

    element.document) || window.document).documentElement;

  }



  function getParentNode(element) {

    if (getNodeName(element) === 'html') {

      return element;

    }



    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle

      // $FlowFixMe[incompatible-return]

      // $FlowFixMe[prop-missing]

      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node

      element.parentNode || ( // DOM Element detected

      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected

      // $FlowFixMe[incompatible-call]: HTMLElement is a Node

      getDocumentElement(element) // fallback



    );

  }



  function getTrueOffsetParent(element) {

    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837

    getComputedStyle$1(element).position === 'fixed') {

      return null;

    }



    return element.offsetParent;

  } // `.offsetParent` reports `null` for fixed elements, while absolute elements

  // return the containing block





  function getContainingBlock(element) {

    var isFirefox = /firefox/i.test(getUAString());

    var isIE = /Trident/i.test(getUAString());



    if (isIE && isHTMLElement(element)) {

      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport

      var elementCss = getComputedStyle$1(element);



      if (elementCss.position === 'fixed') {

        return null;

      }

    }



    var currentNode = getParentNode(element);



    if (isShadowRoot(currentNode)) {

      currentNode = currentNode.host;

    }



    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {

      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that

      // create a containing block.

      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block



      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {

        return currentNode;

      } else {

        currentNode = currentNode.parentNode;

      }

    }



    return null;

  } // Gets the closest ancestor positioned element. Handles some edge cases,

  // such as table ancestors and cross browser bugs.





  function getOffsetParent(element) {

    var window = getWindow(element);

    var offsetParent = getTrueOffsetParent(element);



    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {

      offsetParent = getTrueOffsetParent(offsetParent);

    }



    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {

      return window;

    }



    return offsetParent || getContainingBlock(element) || window;

  }



  function getMainAxisFromPlacement(placement) {

    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';

  }



  function within(min$1, value, max$1) {

    return max(min$1, min(value, max$1));

  }

  function withinMaxClamp(min, value, max) {

    var v = within(min, value, max);

    return v > max ? max : v;

  }



  function getFreshSideObject() {

    return {

      top: 0,

      right: 0,

      bottom: 0,

      left: 0

    };

  }



  function mergePaddingObject(paddingObject) {

    return Object.assign({}, getFreshSideObject(), paddingObject);

  }



  function expandToHashMap(value, keys) {

    return keys.reduce(function (hashMap, key) {

      hashMap[key] = value;

      return hashMap;

    }, {});

  }



  var toPaddingObject = function toPaddingObject(padding, state) {

    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {

      placement: state.placement

    })) : padding;

    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));

  };



  function arrow(_ref) {

    var _state$modifiersData$;



    var state = _ref.state,

        name = _ref.name,

        options = _ref.options;

    var arrowElement = state.elements.arrow;

    var popperOffsets = state.modifiersData.popperOffsets;

    var basePlacement = getBasePlacement(state.placement);

    var axis = getMainAxisFromPlacement(basePlacement);

    var isVertical = [left, right].indexOf(basePlacement) >= 0;

    var len = isVertical ? 'height' : 'width';



    if (!arrowElement || !popperOffsets) {

      return;

    }



    var paddingObject = toPaddingObject(options.padding, state);

    var arrowRect = getLayoutRect(arrowElement);

    var minProp = axis === 'y' ? top : left;

    var maxProp = axis === 'y' ? bottom : right;

    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];

    var startDiff = popperOffsets[axis] - state.rects.reference[axis];

    var arrowOffsetParent = getOffsetParent(arrowElement);

    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;

    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is

    // outside of the popper bounds



    var min = paddingObject[minProp];

    var max = clientSize - arrowRect[len] - paddingObject[maxProp];

    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;

    var offset = within(min, center, max); // Prevents breaking syntax highlighting...



    var axisProp = axis;

    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);

  }



  function effect$1(_ref2) {

    var state = _ref2.state,

        options = _ref2.options;

    var _options$element = options.element,

        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;



    if (arrowElement == null) {

      return;

    } // CSS selector





    if (typeof arrowElement === 'string') {

      arrowElement = state.elements.popper.querySelector(arrowElement);



      if (!arrowElement) {

        return;

      }

    }



    if (!contains(state.elements.popper, arrowElement)) {

      return;

    }



    state.elements.arrow = arrowElement;

  } // eslint-disable-next-line import/no-unused-modules





  const arrow$1 = {

    name: 'arrow',

    enabled: true,

    phase: 'main',

    fn: arrow,

    effect: effect$1,

    requires: ['popperOffsets'],

    requiresIfExists: ['preventOverflow']

  };



  function getVariation(placement) {

    return placement.split('-')[1];

  }



  var unsetSides = {

    top: 'auto',

    right: 'auto',

    bottom: 'auto',

    left: 'auto'

  }; // Round the offsets to the nearest suitable subpixel based on the DPR.

  // Zooming can change the DPR, but it seems to report a value that will

  // cleanly divide the values into the appropriate subpixels.



  function roundOffsetsByDPR(_ref, win) {

    var x = _ref.x,

        y = _ref.y;

    var dpr = win.devicePixelRatio || 1;

    return {

      x: round(x * dpr) / dpr || 0,

      y: round(y * dpr) / dpr || 0

    };

  }



  function mapToStyles(_ref2) {

    var _Object$assign2;



    var popper = _ref2.popper,

        popperRect = _ref2.popperRect,

        placement = _ref2.placement,

        variation = _ref2.variation,

        offsets = _ref2.offsets,

        position = _ref2.position,

        gpuAcceleration = _ref2.gpuAcceleration,

        adaptive = _ref2.adaptive,

        roundOffsets = _ref2.roundOffsets,

        isFixed = _ref2.isFixed;

    var _offsets$x = offsets.x,

        x = _offsets$x === void 0 ? 0 : _offsets$x,

        _offsets$y = offsets.y,

        y = _offsets$y === void 0 ? 0 : _offsets$y;



    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({

      x: x,

      y: y

    }) : {

      x: x,

      y: y

    };



    x = _ref3.x;

    y = _ref3.y;

    var hasX = offsets.hasOwnProperty('x');

    var hasY = offsets.hasOwnProperty('y');

    var sideX = left;

    var sideY = top;

    var win = window;



    if (adaptive) {

      var offsetParent = getOffsetParent(popper);

      var heightProp = 'clientHeight';

      var widthProp = 'clientWidth';



      if (offsetParent === getWindow(popper)) {

        offsetParent = getDocumentElement(popper);



        if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {

          heightProp = 'scrollHeight';

          widthProp = 'scrollWidth';

        }

      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it





      offsetParent = offsetParent;



      if (placement === top || (placement === left || placement === right) && variation === end) {

        sideY = bottom;

        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]

        offsetParent[heightProp];

        y -= offsetY - popperRect.height;

        y *= gpuAcceleration ? 1 : -1;

      }



      if (placement === left || (placement === top || placement === bottom) && variation === end) {

        sideX = right;

        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]

        offsetParent[widthProp];

        x -= offsetX - popperRect.width;

        x *= gpuAcceleration ? 1 : -1;

      }

    }



    var commonStyles = Object.assign({

      position: position

    }, adaptive && unsetSides);



    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({

      x: x,

      y: y

    }, getWindow(popper)) : {

      x: x,

      y: y

    };



    x = _ref4.x;

    y = _ref4.y;



    if (gpuAcceleration) {

      var _Object$assign;



      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));

    }



    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));

  }



  function computeStyles(_ref5) {

    var state = _ref5.state,

        options = _ref5.options;

    var _options$gpuAccelerat = options.gpuAcceleration,

        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,

        _options$adaptive = options.adaptive,

        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,

        _options$roundOffsets = options.roundOffsets,

        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

    var commonStyles = {

      placement: getBasePlacement(state.placement),

      variation: getVariation(state.placement),

      popper: state.elements.popper,

      popperRect: state.rects.popper,

      gpuAcceleration: gpuAcceleration,

      isFixed: state.options.strategy === 'fixed'

    };



    if (state.modifiersData.popperOffsets != null) {

      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {

        offsets: state.modifiersData.popperOffsets,

        position: state.options.strategy,

        adaptive: adaptive,

        roundOffsets: roundOffsets

      })));

    }



    if (state.modifiersData.arrow != null) {

      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {

        offsets: state.modifiersData.arrow,

        position: 'absolute',

        adaptive: false,

        roundOffsets: roundOffsets

      })));

    }



    state.attributes.popper = Object.assign({}, state.attributes.popper, {

      'data-popper-placement': state.placement

    });

  } // eslint-disable-next-line import/no-unused-modules





  const computeStyles$1 = {

    name: 'computeStyles',

    enabled: true,

    phase: 'beforeWrite',

    fn: computeStyles,

    data: {}

  };



  var passive = {

    passive: true

  };



  function effect(_ref) {

    var state = _ref.state,

        instance = _ref.instance,

        options = _ref.options;

    var _options$scroll = options.scroll,

        scroll = _options$scroll === void 0 ? true : _options$scroll,

        _options$resize = options.resize,

        resize = _options$resize === void 0 ? true : _options$resize;

    var window = getWindow(state.elements.popper);

    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);



    if (scroll) {

      scrollParents.forEach(function (scrollParent) {

        scrollParent.addEventListener('scroll', instance.update, passive);

      });

    }



    if (resize) {

      window.addEventListener('resize', instance.update, passive);

    }



    return function () {

      if (scroll) {

        scrollParents.forEach(function (scrollParent) {

          scrollParent.removeEventListener('scroll', instance.update, passive);

        });

      }



      if (resize) {

        window.removeEventListener('resize', instance.update, passive);

      }

    };

  } // eslint-disable-next-line import/no-unused-modules





  const eventListeners = {

    name: 'eventListeners',

    enabled: true,

    phase: 'write',

    fn: function fn() {},

    effect: effect,

    data: {}

  };



  var hash$1 = {

    left: 'right',

    right: 'left',

    bottom: 'top',

    top: 'bottom'

  };

  function getOppositePlacement(placement) {

    return placement.replace(/left|right|bottom|top/g, function (matched) {

      return hash$1[matched];

    });

  }



  var hash = {

    start: 'end',

    end: 'start'

  };

  function getOppositeVariationPlacement(placement) {

    return placement.replace(/start|end/g, function (matched) {

      return hash[matched];

    });

  }



  function getWindowScroll(node) {

    var win = getWindow(node);

    var scrollLeft = win.pageXOffset;

    var scrollTop = win.pageYOffset;

    return {

      scrollLeft: scrollLeft,

      scrollTop: scrollTop

    };

  }



  function getWindowScrollBarX(element) {

    // If <html> has a CSS width greater than the viewport, then this will be

    // incorrect for RTL.

    // Popper 1 is broken in this case and never had a bug report so let's assume

    // it's not an issue. I don't think anyone ever specifies width on <html>

    // anyway.

    // Browsers where the left scrollbar doesn't cause an issue report `0` for

    // this (e.g. Edge 2019, IE11, Safari)

    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;

  }



  function getViewportRect(element, strategy) {

    var win = getWindow(element);

    var html = getDocumentElement(element);

    var visualViewport = win.visualViewport;

    var width = html.clientWidth;

    var height = html.clientHeight;

    var x = 0;

    var y = 0;



    if (visualViewport) {

      width = visualViewport.width;

      height = visualViewport.height;

      var layoutViewport = isLayoutViewport();



      if (layoutViewport || !layoutViewport && strategy === 'fixed') {

        x = visualViewport.offsetLeft;

        y = visualViewport.offsetTop;

      }

    }



    return {

      width: width,

      height: height,

      x: x + getWindowScrollBarX(element),

      y: y

    };

  }



  // of the `<html>` and `<body>` rect bounds if horizontally scrollable



  function getDocumentRect(element) {

    var _element$ownerDocumen;



    var html = getDocumentElement(element);

    var winScroll = getWindowScroll(element);

    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;

    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);

    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);

    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);

    var y = -winScroll.scrollTop;



    if (getComputedStyle$1(body || html).direction === 'rtl') {

      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;

    }



    return {

      width: width,

      height: height,

      x: x,

      y: y

    };

  }



  function isScrollParent(element) {

    // Firefox wants us to check `-x` and `-y` variations as well

    var _getComputedStyle = getComputedStyle$1(element),

        overflow = _getComputedStyle.overflow,

        overflowX = _getComputedStyle.overflowX,

        overflowY = _getComputedStyle.overflowY;



    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);

  }



  function getScrollParent(node) {

    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {

      // $FlowFixMe[incompatible-return]: assume body is always available

      return node.ownerDocument.body;

    }



    if (isHTMLElement(node) && isScrollParent(node)) {

      return node;

    }



    return getScrollParent(getParentNode(node));

  }



  /*

  given a DOM element, return the list of all scroll parents, up the list of ancesors

  until we get to the top window object. This list is what we attach scroll listeners

  to, because if any of these parent elements scroll, we'll need to re-calculate the

  reference element's position.

  */



  function listScrollParents(element, list) {

    var _element$ownerDocumen;



    if (list === void 0) {

      list = [];

    }



    var scrollParent = getScrollParent(element);

    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);

    var win = getWindow(scrollParent);

    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;

    var updatedList = list.concat(target);

    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here

    updatedList.concat(listScrollParents(getParentNode(target)));

  }



  function rectToClientRect(rect) {

    return Object.assign({}, rect, {

      left: rect.x,

      top: rect.y,

      right: rect.x + rect.width,

      bottom: rect.y + rect.height

    });

  }



  function getInnerBoundingClientRect(element, strategy) {

    var rect = getBoundingClientRect(element, false, strategy === 'fixed');

    rect.top = rect.top + element.clientTop;

    rect.left = rect.left + element.clientLeft;

    rect.bottom = rect.top + element.clientHeight;

    rect.right = rect.left + element.clientWidth;

    rect.width = element.clientWidth;

    rect.height = element.clientHeight;

    rect.x = rect.left;

    rect.y = rect.top;

    return rect;

  }



  function getClientRectFromMixedType(element, clippingParent, strategy) {

    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));

  } // A "clipping parent" is an overflowable container with the characteristic of

  // clipping (or hiding) overflowing elements with a position different from

  // `initial`





  function getClippingParents(element) {

    var clippingParents = listScrollParents(getParentNode(element));

    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;

    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;



    if (!isElement(clipperElement)) {

      return [];

    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414





    return clippingParents.filter(function (clippingParent) {

      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';

    });

  } // Gets the maximum area that the element is visible in due to any number of

  // clipping parents





  function getClippingRect(element, boundary, rootBoundary, strategy) {

    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);

    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);

    var firstClippingParent = clippingParents[0];

    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {

      var rect = getClientRectFromMixedType(element, clippingParent, strategy);

      accRect.top = max(rect.top, accRect.top);

      accRect.right = min(rect.right, accRect.right);

      accRect.bottom = min(rect.bottom, accRect.bottom);

      accRect.left = max(rect.left, accRect.left);

      return accRect;

    }, getClientRectFromMixedType(element, firstClippingParent, strategy));

    clippingRect.width = clippingRect.right - clippingRect.left;

    clippingRect.height = clippingRect.bottom - clippingRect.top;

    clippingRect.x = clippingRect.left;

    clippingRect.y = clippingRect.top;

    return clippingRect;

  }



  function computeOffsets(_ref) {

    var reference = _ref.reference,

        element = _ref.element,

        placement = _ref.placement;

    var basePlacement = placement ? getBasePlacement(placement) : null;

    var variation = placement ? getVariation(placement) : null;

    var commonX = reference.x + reference.width / 2 - element.width / 2;

    var commonY = reference.y + reference.height / 2 - element.height / 2;

    var offsets;



    switch (basePlacement) {

      case top:

        offsets = {

          x: commonX,

          y: reference.y - element.height

        };

        break;



      case bottom:

        offsets = {

          x: commonX,

          y: reference.y + reference.height

        };

        break;



      case right:

        offsets = {

          x: reference.x + reference.width,

          y: commonY

        };

        break;



      case left:

        offsets = {

          x: reference.x - element.width,

          y: commonY

        };

        break;



      default:

        offsets = {

          x: reference.x,

          y: reference.y

        };

    }



    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;



    if (mainAxis != null) {

      var len = mainAxis === 'y' ? 'height' : 'width';



      switch (variation) {

        case start:

          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);

          break;



        case end:

          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);

          break;

      }

    }



    return offsets;

  }



  function detectOverflow(state, options) {

    if (options === void 0) {

      options = {};

    }



    var _options = options,

        _options$placement = _options.placement,

        placement = _options$placement === void 0 ? state.placement : _options$placement,

        _options$strategy = _options.strategy,

        strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,

        _options$boundary = _options.boundary,

        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,

        _options$rootBoundary = _options.rootBoundary,

        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,

        _options$elementConte = _options.elementContext,

        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,

        _options$altBoundary = _options.altBoundary,

        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,

        _options$padding = _options.padding,

        padding = _options$padding === void 0 ? 0 : _options$padding;

    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));

    var altContext = elementContext === popper ? reference : popper;

    var popperRect = state.rects.popper;

    var element = state.elements[altBoundary ? altContext : elementContext];

    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);

    var referenceClientRect = getBoundingClientRect(state.elements.reference);

    var popperOffsets = computeOffsets({

      reference: referenceClientRect,

      element: popperRect,

      placement: placement

    });

    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));

    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect

    // 0 or negative = within the clipping rect



    var overflowOffsets = {

      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,

      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,

      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,

      right: elementClientRect.right - clippingClientRect.right + paddingObject.right

    };

    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element



    if (elementContext === popper && offsetData) {

      var offset = offsetData[placement];

      Object.keys(overflowOffsets).forEach(function (key) {

        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;

        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';

        overflowOffsets[key] += offset[axis] * multiply;

      });

    }



    return overflowOffsets;

  }



  function computeAutoPlacement(state, options) {

    if (options === void 0) {

      options = {};

    }



    var _options = options,

        placement = _options.placement,

        boundary = _options.boundary,

        rootBoundary = _options.rootBoundary,

        padding = _options.padding,

        flipVariations = _options.flipVariations,

        _options$allowedAutoP = _options.allowedAutoPlacements,

        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;

    var variation = getVariation(placement);

    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {

      return getVariation(placement) === variation;

    }) : basePlacements;

    var allowedPlacements = placements$1.filter(function (placement) {

      return allowedAutoPlacements.indexOf(placement) >= 0;

    });



    if (allowedPlacements.length === 0) {

      allowedPlacements = placements$1;

    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...





    var overflows = allowedPlacements.reduce(function (acc, placement) {

      acc[placement] = detectOverflow(state, {

        placement: placement,

        boundary: boundary,

        rootBoundary: rootBoundary,

        padding: padding

      })[getBasePlacement(placement)];

      return acc;

    }, {});

    return Object.keys(overflows).sort(function (a, b) {

      return overflows[a] - overflows[b];

    });

  }



  function getExpandedFallbackPlacements(placement) {

    if (getBasePlacement(placement) === auto) {

      return [];

    }



    var oppositePlacement = getOppositePlacement(placement);

    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];

  }



  function flip(_ref) {

    var state = _ref.state,

        options = _ref.options,

        name = _ref.name;



    if (state.modifiersData[name]._skip) {

      return;

    }



    var _options$mainAxis = options.mainAxis,

        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,

        _options$altAxis = options.altAxis,

        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,

        specifiedFallbackPlacements = options.fallbackPlacements,

        padding = options.padding,

        boundary = options.boundary,

        rootBoundary = options.rootBoundary,

        altBoundary = options.altBoundary,

        _options$flipVariatio = options.flipVariations,

        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,

        allowedAutoPlacements = options.allowedAutoPlacements;

    var preferredPlacement = state.options.placement;

    var basePlacement = getBasePlacement(preferredPlacement);

    var isBasePlacement = basePlacement === preferredPlacement;

    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));

    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {

      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {

        placement: placement,

        boundary: boundary,

        rootBoundary: rootBoundary,

        padding: padding,

        flipVariations: flipVariations,

        allowedAutoPlacements: allowedAutoPlacements

      }) : placement);

    }, []);

    var referenceRect = state.rects.reference;

    var popperRect = state.rects.popper;

    var checksMap = new Map();

    var makeFallbackChecks = true;

    var firstFittingPlacement = placements[0];



    for (var i = 0; i < placements.length; i++) {

      var placement = placements[i];



      var _basePlacement = getBasePlacement(placement);



      var isStartVariation = getVariation(placement) === start;

      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;

      var len = isVertical ? 'width' : 'height';

      var overflow = detectOverflow(state, {

        placement: placement,

        boundary: boundary,

        rootBoundary: rootBoundary,

        altBoundary: altBoundary,

        padding: padding

      });

      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;



      if (referenceRect[len] > popperRect[len]) {

        mainVariationSide = getOppositePlacement(mainVariationSide);

      }



      var altVariationSide = getOppositePlacement(mainVariationSide);

      var checks = [];



      if (checkMainAxis) {

        checks.push(overflow[_basePlacement] <= 0);

      }



      if (checkAltAxis) {

        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);

      }



      if (checks.every(function (check) {

        return check;

      })) {

        firstFittingPlacement = placement;

        makeFallbackChecks = false;

        break;

      }



      checksMap.set(placement, checks);

    }



    if (makeFallbackChecks) {

      // `2` may be desired in some cases – research later

      var numberOfChecks = flipVariations ? 3 : 1;



      var _loop = function _loop(_i) {

        var fittingPlacement = placements.find(function (placement) {

          var checks = checksMap.get(placement);



          if (checks) {

            return checks.slice(0, _i).every(function (check) {

              return check;

            });

          }

        });



        if (fittingPlacement) {

          firstFittingPlacement = fittingPlacement;

          return "break";

        }

      };



      for (var _i = numberOfChecks; _i > 0; _i--) {

        var _ret = _loop(_i);



        if (_ret === "break") break;

      }

    }



    if (state.placement !== firstFittingPlacement) {

      state.modifiersData[name]._skip = true;

      state.placement = firstFittingPlacement;

      state.reset = true;

    }

  } // eslint-disable-next-line import/no-unused-modules





  const flip$1 = {

    name: 'flip',

    enabled: true,

    phase: 'main',

    fn: flip,

    requiresIfExists: ['offset'],

    data: {

      _skip: false

    }

  };



  function getSideOffsets(overflow, rect, preventedOffsets) {

    if (preventedOffsets === void 0) {

      preventedOffsets = {

        x: 0,

        y: 0

      };

    }



    return {

      top: overflow.top - rect.height - preventedOffsets.y,

      right: overflow.right - rect.width + preventedOffsets.x,

      bottom: overflow.bottom - rect.height + preventedOffsets.y,

      left: overflow.left - rect.width - preventedOffsets.x

    };

  }



  function isAnySideFullyClipped(overflow) {

    return [top, right, bottom, left].some(function (side) {

      return overflow[side] >= 0;

    });

  }



  function hide(_ref) {

    var state = _ref.state,

        name = _ref.name;

    var referenceRect = state.rects.reference;

    var popperRect = state.rects.popper;

    var preventedOffsets = state.modifiersData.preventOverflow;

    var referenceOverflow = detectOverflow(state, {

      elementContext: 'reference'

    });

    var popperAltOverflow = detectOverflow(state, {

      altBoundary: true

    });

    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);

    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);

    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);

    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);

    state.modifiersData[name] = {

      referenceClippingOffsets: referenceClippingOffsets,

      popperEscapeOffsets: popperEscapeOffsets,

      isReferenceHidden: isReferenceHidden,

      hasPopperEscaped: hasPopperEscaped

    };

    state.attributes.popper = Object.assign({}, state.attributes.popper, {

      'data-popper-reference-hidden': isReferenceHidden,

      'data-popper-escaped': hasPopperEscaped

    });

  } // eslint-disable-next-line import/no-unused-modules





  const hide$1 = {

    name: 'hide',

    enabled: true,

    phase: 'main',

    requiresIfExists: ['preventOverflow'],

    fn: hide

  };



  function distanceAndSkiddingToXY(placement, rects, offset) {

    var basePlacement = getBasePlacement(placement);

    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;



    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {

      placement: placement

    })) : offset,

        skidding = _ref[0],

        distance = _ref[1];



    skidding = skidding || 0;

    distance = (distance || 0) * invertDistance;

    return [left, right].indexOf(basePlacement) >= 0 ? {

      x: distance,

      y: skidding

    } : {

      x: skidding,

      y: distance

    };

  }



  function offset(_ref2) {

    var state = _ref2.state,

        options = _ref2.options,

        name = _ref2.name;

    var _options$offset = options.offset,

        offset = _options$offset === void 0 ? [0, 0] : _options$offset;

    var data = placements.reduce(function (acc, placement) {

      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);

      return acc;

    }, {});

    var _data$state$placement = data[state.placement],

        x = _data$state$placement.x,

        y = _data$state$placement.y;



    if (state.modifiersData.popperOffsets != null) {

      state.modifiersData.popperOffsets.x += x;

      state.modifiersData.popperOffsets.y += y;

    }



    state.modifiersData[name] = data;

  } // eslint-disable-next-line import/no-unused-modules





  const offset$1 = {

    name: 'offset',

    enabled: true,

    phase: 'main',

    requires: ['popperOffsets'],

    fn: offset

  };



  function popperOffsets(_ref) {

    var state = _ref.state,

        name = _ref.name;

    // Offsets are the actual position the popper needs to have to be

    // properly positioned near its reference element

    // This is the most basic placement, and will be adjusted by

    // the modifiers in the next step

    state.modifiersData[name] = computeOffsets({

      reference: state.rects.reference,

      element: state.rects.popper,

      placement: state.placement

    });

  } // eslint-disable-next-line import/no-unused-modules





  const popperOffsets$1 = {

    name: 'popperOffsets',

    enabled: true,

    phase: 'read',

    fn: popperOffsets,

    data: {}

  };



  function getAltAxis(axis) {

    return axis === 'x' ? 'y' : 'x';

  }



  function preventOverflow(_ref) {

    var state = _ref.state,

        options = _ref.options,

        name = _ref.name;

    var _options$mainAxis = options.mainAxis,

        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,

        _options$altAxis = options.altAxis,

        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,

        boundary = options.boundary,

        rootBoundary = options.rootBoundary,

        altBoundary = options.altBoundary,

        padding = options.padding,

        _options$tether = options.tether,

        tether = _options$tether === void 0 ? true : _options$tether,

        _options$tetherOffset = options.tetherOffset,

        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;

    var overflow = detectOverflow(state, {

      boundary: boundary,

      rootBoundary: rootBoundary,

      padding: padding,

      altBoundary: altBoundary

    });

    var basePlacement = getBasePlacement(state.placement);

    var variation = getVariation(state.placement);

    var isBasePlacement = !variation;

    var mainAxis = getMainAxisFromPlacement(basePlacement);

    var altAxis = getAltAxis(mainAxis);

    var popperOffsets = state.modifiersData.popperOffsets;

    var referenceRect = state.rects.reference;

    var popperRect = state.rects.popper;

    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {

      placement: state.placement

    })) : tetherOffset;

    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {

      mainAxis: tetherOffsetValue,

      altAxis: tetherOffsetValue

    } : Object.assign({

      mainAxis: 0,

      altAxis: 0

    }, tetherOffsetValue);

    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;

    var data = {

      x: 0,

      y: 0

    };



    if (!popperOffsets) {

      return;

    }



    if (checkMainAxis) {

      var _offsetModifierState$;



      var mainSide = mainAxis === 'y' ? top : left;

      var altSide = mainAxis === 'y' ? bottom : right;

      var len = mainAxis === 'y' ? 'height' : 'width';

      var offset = popperOffsets[mainAxis];

      var min$1 = offset + overflow[mainSide];

      var max$1 = offset - overflow[altSide];

      var additive = tether ? -popperRect[len] / 2 : 0;

      var minLen = variation === start ? referenceRect[len] : popperRect[len];

      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go

      // outside the reference bounds



      var arrowElement = state.elements.arrow;

      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {

        width: 0,

        height: 0

      };

      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();

      var arrowPaddingMin = arrowPaddingObject[mainSide];

      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want

      // to include its full size in the calculation. If the reference is small

      // and near the edge of a boundary, the popper can overflow even if the

      // reference is not overflowing as well (e.g. virtual elements with no

      // width or height)



      var arrowLen = within(0, referenceRect[len], arrowRect[len]);

      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;

      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;

      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);

      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;

      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;

      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;

      var tetherMax = offset + maxOffset - offsetModifierValue;

      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);

      popperOffsets[mainAxis] = preventedOffset;

      data[mainAxis] = preventedOffset - offset;

    }



    if (checkAltAxis) {

      var _offsetModifierState$2;



      var _mainSide = mainAxis === 'x' ? top : left;



      var _altSide = mainAxis === 'x' ? bottom : right;



      var _offset = popperOffsets[altAxis];



      var _len = altAxis === 'y' ? 'height' : 'width';



      var _min = _offset + overflow[_mainSide];



      var _max = _offset - overflow[_altSide];



      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;



      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;



      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;



      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;



      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);



      popperOffsets[altAxis] = _preventedOffset;

      data[altAxis] = _preventedOffset - _offset;

    }



    state.modifiersData[name] = data;

  } // eslint-disable-next-line import/no-unused-modules





  const preventOverflow$1 = {

    name: 'preventOverflow',

    enabled: true,

    phase: 'main',

    fn: preventOverflow,

    requiresIfExists: ['offset']

  };



  function getHTMLElementScroll(element) {

    return {

      scrollLeft: element.scrollLeft,

      scrollTop: element.scrollTop

    };

  }



  function getNodeScroll(node) {

    if (node === getWindow(node) || !isHTMLElement(node)) {

      return getWindowScroll(node);

    } else {

      return getHTMLElementScroll(node);

    }

  }



  function isElementScaled(element) {

    var rect = element.getBoundingClientRect();

    var scaleX = round(rect.width) / element.offsetWidth || 1;

    var scaleY = round(rect.height) / element.offsetHeight || 1;

    return scaleX !== 1 || scaleY !== 1;

  } // Returns the composite rect of an element relative to its offsetParent.

  // Composite means it takes into account transforms as well as layout.





  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {

    if (isFixed === void 0) {

      isFixed = false;

    }



    var isOffsetParentAnElement = isHTMLElement(offsetParent);

    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);

    var documentElement = getDocumentElement(offsetParent);

    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);

    var scroll = {

      scrollLeft: 0,

      scrollTop: 0

    };

    var offsets = {

      x: 0,

      y: 0

    };



    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {

      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078

      isScrollParent(documentElement)) {

        scroll = getNodeScroll(offsetParent);

      }



      if (isHTMLElement(offsetParent)) {

        offsets = getBoundingClientRect(offsetParent, true);

        offsets.x += offsetParent.clientLeft;

        offsets.y += offsetParent.clientTop;

      } else if (documentElement) {

        offsets.x = getWindowScrollBarX(documentElement);

      }

    }



    return {

      x: rect.left + scroll.scrollLeft - offsets.x,

      y: rect.top + scroll.scrollTop - offsets.y,

      width: rect.width,

      height: rect.height

    };

  }



  function order(modifiers) {

    var map = new Map();

    var visited = new Set();

    var result = [];

    modifiers.forEach(function (modifier) {

      map.set(modifier.name, modifier);

    }); // On visiting object, check for its dependencies and visit them recursively



    function sort(modifier) {

      visited.add(modifier.name);

      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);

      requires.forEach(function (dep) {

        if (!visited.has(dep)) {

          var depModifier = map.get(dep);



          if (depModifier) {

            sort(depModifier);

          }

        }

      });

      result.push(modifier);

    }



    modifiers.forEach(function (modifier) {

      if (!visited.has(modifier.name)) {

        // check for visited object

        sort(modifier);

      }

    });

    return result;

  }



  function orderModifiers(modifiers) {

    // order based on dependencies

    var orderedModifiers = order(modifiers); // order based on phase



    return modifierPhases.reduce(function (acc, phase) {

      return acc.concat(orderedModifiers.filter(function (modifier) {

        return modifier.phase === phase;

      }));

    }, []);

  }



  function debounce(fn) {

    var pending;

    return function () {

      if (!pending) {

        pending = new Promise(function (resolve) {

          Promise.resolve().then(function () {

            pending = undefined;

            resolve(fn());

          });

        });

      }



      return pending;

    };

  }



  function mergeByName(modifiers) {

    var merged = modifiers.reduce(function (merged, current) {

      var existing = merged[current.name];

      merged[current.name] = existing ? Object.assign({}, existing, current, {

        options: Object.assign({}, existing.options, current.options),

        data: Object.assign({}, existing.data, current.data)

      }) : current;

      return merged;

    }, {}); // IE11 does not support Object.values



    return Object.keys(merged).map(function (key) {

      return merged[key];

    });

  }



  var DEFAULT_OPTIONS = {

    placement: 'bottom',

    modifiers: [],

    strategy: 'absolute'

  };



  function areValidElements() {

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {

      args[_key] = arguments[_key];

    }



    return !args.some(function (element) {

      return !(element && typeof element.getBoundingClientRect === 'function');

    });

  }



  function popperGenerator(generatorOptions) {

    if (generatorOptions === void 0) {

      generatorOptions = {};

    }



    var _generatorOptions = generatorOptions,

        _generatorOptions$def = _generatorOptions.defaultModifiers,

        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,

        _generatorOptions$def2 = _generatorOptions.defaultOptions,

        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;

    return function createPopper(reference, popper, options) {

      if (options === void 0) {

        options = defaultOptions;

      }



      var state = {

        placement: 'bottom',

        orderedModifiers: [],

        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),

        modifiersData: {},

        elements: {

          reference: reference,

          popper: popper

        },

        attributes: {},

        styles: {}

      };

      var effectCleanupFns = [];

      var isDestroyed = false;

      var instance = {

        state: state,

        setOptions: function setOptions(setOptionsAction) {

          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;

          cleanupModifierEffects();

          state.options = Object.assign({}, defaultOptions, state.options, options);

          state.scrollParents = {

            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],

            popper: listScrollParents(popper)

          }; // Orders the modifiers based on their dependencies and `phase`

          // properties



          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers



          state.orderedModifiers = orderedModifiers.filter(function (m) {

            return m.enabled;

          });

          runModifierEffects();

          return instance.update();

        },

        // Sync update – it will always be executed, even if not necessary. This

        // is useful for low frequency updates where sync behavior simplifies the

        // logic.

        // For high frequency updates (e.g. `resize` and `scroll` events), always

        // prefer the async Popper#update method

        forceUpdate: function forceUpdate() {

          if (isDestroyed) {

            return;

          }



          var _state$elements = state.elements,

              reference = _state$elements.reference,

              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements

          // anymore



          if (!areValidElements(reference, popper)) {

            return;

          } // Store the reference and popper rects to be read by modifiers





          state.rects = {

            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),

            popper: getLayoutRect(popper)

          }; // Modifiers have the ability to reset the current update cycle. The

          // most common use case for this is the `flip` modifier changing the

          // placement, which then needs to re-run all the modifiers, because the

          // logic was previously ran for the previous placement and is therefore

          // stale/incorrect



          state.reset = false;

          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier

          // is filled with the initial data specified by the modifier. This means

          // it doesn't persist and is fresh on each update.

          // To ensure persistent data, use `${name}#persistent`



          state.orderedModifiers.forEach(function (modifier) {

            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);

          });



          for (var index = 0; index < state.orderedModifiers.length; index++) {

            if (state.reset === true) {

              state.reset = false;

              index = -1;

              continue;

            }



            var _state$orderedModifie = state.orderedModifiers[index],

                fn = _state$orderedModifie.fn,

                _state$orderedModifie2 = _state$orderedModifie.options,

                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,

                name = _state$orderedModifie.name;



            if (typeof fn === 'function') {

              state = fn({

                state: state,

                options: _options,

                name: name,

                instance: instance

              }) || state;

            }

          }

        },

        // Async and optimistically optimized update – it will not be executed if

        // not necessary (debounced to run at most once-per-tick)

        update: debounce(function () {

          return new Promise(function (resolve) {

            instance.forceUpdate();

            resolve(state);

          });

        }),

        destroy: function destroy() {

          cleanupModifierEffects();

          isDestroyed = true;

        }

      };



      if (!areValidElements(reference, popper)) {

        return instance;

      }



      instance.setOptions(options).then(function (state) {

        if (!isDestroyed && options.onFirstUpdate) {

          options.onFirstUpdate(state);

        }

      }); // Modifiers have the ability to execute arbitrary code before the first

      // update cycle runs. They will be executed in the same order as the update

      // cycle. This is useful when a modifier adds some persistent data that

      // other modifiers need to use, but the modifier is run after the dependent

      // one.



      function runModifierEffects() {

        state.orderedModifiers.forEach(function (_ref) {

          var name = _ref.name,

              _ref$options = _ref.options,

              options = _ref$options === void 0 ? {} : _ref$options,

              effect = _ref.effect;



          if (typeof effect === 'function') {

            var cleanupFn = effect({

              state: state,

              name: name,

              instance: instance,

              options: options

            });



            var noopFn = function noopFn() {};



            effectCleanupFns.push(cleanupFn || noopFn);

          }

        });

      }



      function cleanupModifierEffects() {

        effectCleanupFns.forEach(function (fn) {

          return fn();

        });

        effectCleanupFns = [];

      }



      return instance;

    };

  }

  var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];

  var createPopper$1 = /*#__PURE__*/popperGenerator({

    defaultModifiers: defaultModifiers$1

  }); // eslint-disable-next-line import/no-unused-modules



  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];

  var createPopper = /*#__PURE__*/popperGenerator({

    defaultModifiers: defaultModifiers

  }); // eslint-disable-next-line import/no-unused-modules



  const Popper = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({

    __proto__: null,

    afterMain,

    afterRead,

    afterWrite,

    applyStyles: applyStyles$1,

    arrow: arrow$1,

    auto,

    basePlacements,

    beforeMain,

    beforeRead,

    beforeWrite,

    bottom,

    clippingParents,

    computeStyles: computeStyles$1,

    createPopper,

    createPopperBase: createPopper$2,

    createPopperLite: createPopper$1,

    detectOverflow,

    end,

    eventListeners,

    flip: flip$1,

    hide: hide$1,

    left,

    main,

    modifierPhases,

    offset: offset$1,

    placements,

    popper,

    popperGenerator,

    popperOffsets: popperOffsets$1,

    preventOverflow: preventOverflow$1,

    read,

    reference,

    right,

    start,

    top,

    variationPlacements,

    viewport,

    write

  }, Symbol.toStringTag, { value: 'Module' }));



  /**

   * --------------------------------------------------------------------------

   * Bootstrap dropdown.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$a = 'dropdown';

  const DATA_KEY$6 = 'bs.dropdown';

  const EVENT_KEY$6 = `.${DATA_KEY$6}`;

  const DATA_API_KEY$3 = '.data-api';

  const ESCAPE_KEY$2 = 'Escape';

  const TAB_KEY$1 = 'Tab';

  const ARROW_UP_KEY$1 = 'ArrowUp';

  const ARROW_DOWN_KEY$1 = 'ArrowDown';

  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button



  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;

  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;

  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;

  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;

  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;

  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;

  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;

  const CLASS_NAME_SHOW$6 = 'show';

  const CLASS_NAME_DROPUP = 'dropup';

  const CLASS_NAME_DROPEND = 'dropend';

  const CLASS_NAME_DROPSTART = 'dropstart';

  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';

  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';

  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';

  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;

  const SELECTOR_MENU = '.dropdown-menu';

  const SELECTOR_NAVBAR = '.navbar';

  const SELECTOR_NAVBAR_NAV = '.navbar-nav';

  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';

  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';

  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';

  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';

  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';

  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';

  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';

  const PLACEMENT_TOPCENTER = 'top';

  const PLACEMENT_BOTTOMCENTER = 'bottom';

  const Default$9 = {

    autoClose: true,

    boundary: 'clippingParents',

    display: 'dynamic',

    offset: [0, 2],

    popperConfig: null,

    reference: 'toggle'

  };

  const DefaultType$9 = {

    autoClose: '(boolean|string)',

    boundary: '(string|element)',

    display: 'string',

    offset: '(array|string|function)',

    popperConfig: '(null|object|function)',

    reference: '(string|element|object)'

  };



  /**

   * Class definition

   */



  class Dropdown extends BaseComponent {

    constructor(element, config) {

      super(element, config);

      this._popper = null;

      this._parent = this._element.parentNode; // dropdown wrapper

      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/

      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);

      this._inNavbar = this._detectNavbar();

    }



    // Getters

    static get Default() {

      return Default$9;

    }

    static get DefaultType() {

      return DefaultType$9;

    }

    static get NAME() {

      return NAME$a;

    }



    // Public

    toggle() {

      return this._isShown() ? this.hide() : this.show();

    }

    show() {

      if (isDisabled(this._element) || this._isShown()) {

        return;

      }

      const relatedTarget = {

        relatedTarget: this._element

      };

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);

      if (showEvent.defaultPrevented) {

        return;

      }

      this._createPopper();



      // If this is a touch-enabled device we add extra

      // empty mouseover listeners to the body's immediate children;

      // only needed because of broken event delegation on iOS

      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {

        for (const element of [].concat(...document.body.children)) {

          EventHandler.on(element, 'mouseover', noop);

        }

      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.add(CLASS_NAME_SHOW$6);

      this._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);

    }

    hide() {

      if (isDisabled(this._element) || !this._isShown()) {

        return;

      }

      const relatedTarget = {

        relatedTarget: this._element

      };

      this._completeHide(relatedTarget);

    }

    dispose() {

      if (this._popper) {

        this._popper.destroy();

      }

      super.dispose();

    }

    update() {

      this._inNavbar = this._detectNavbar();

      if (this._popper) {

        this._popper.update();

      }

    }



    // Private

    _completeHide(relatedTarget) {

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);

      if (hideEvent.defaultPrevented) {

        return;

      }



      // If this is a touch-enabled device we remove the extra

      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {

        for (const element of [].concat(...document.body.children)) {

          EventHandler.off(element, 'mouseover', noop);

        }

      }

      if (this._popper) {

        this._popper.destroy();

      }

      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator.removeDataAttribute(this._menu, 'popper');

      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);



      // Explicitly return focus to the trigger element

      this._element.focus();

    }

    _getConfig(config) {

      config = super._getConfig(config);

      if (typeof config.reference === 'object' && !isElement$1(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {

        // Popper virtual elements require a getBoundingClientRect method

        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);

      }

      return config;

    }

    _createPopper() {

      if (typeof Popper === 'undefined') {

        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org/docs/v2/)');

      }

      let referenceElement = this._element;

      if (this._config.reference === 'parent') {

        referenceElement = this._parent;

      } else if (isElement$1(this._config.reference)) {

        referenceElement = getElement(this._config.reference);

      } else if (typeof this._config.reference === 'object') {

        referenceElement = this._config.reference;

      }

      const popperConfig = this._getPopperConfig();

      this._popper = createPopper(referenceElement, this._menu, popperConfig);

    }

    _isShown() {

      return this._menu.classList.contains(CLASS_NAME_SHOW$6);

    }

    _getPlacement() {

      const parentDropdown = this._parent;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {

        return PLACEMENT_RIGHT;

      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {

        return PLACEMENT_LEFT;

      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {

        return PLACEMENT_TOPCENTER;

      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {

        return PLACEMENT_BOTTOMCENTER;

      }



      // We need to trim the value because custom properties can also include spaces

      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {

        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;

      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;

    }

    _detectNavbar() {

      return this._element.closest(SELECTOR_NAVBAR) !== null;

    }

    _getOffset() {

      const {

        offset

      } = this._config;

      if (typeof offset === 'string') {

        return offset.split(',').map(value => Number.parseInt(value, 10));

      }

      if (typeof offset === 'function') {

        return popperData => offset(popperData, this._element);

      }

      return offset;

    }

    _getPopperConfig() {

      const defaultBsPopperConfig = {

        placement: this._getPlacement(),

        modifiers: [{

          name: 'preventOverflow',

          options: {

            boundary: this._config.boundary

          }

        }, {

          name: 'offset',

          options: {

            offset: this._getOffset()

          }

        }]

      };



      // Disable Popper if we have a static display or Dropdown is in Navbar

      if (this._inNavbar || this._config.display === 'static') {

        Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove

        defaultBsPopperConfig.modifiers = [{

          name: 'applyStyles',

          enabled: false

        }];

      }

      return {

        ...defaultBsPopperConfig,

        ...execute(this._config.popperConfig, [undefined, defaultBsPopperConfig])

      };

    }

    _selectMenuItem({

      key,

      target

    }) {

      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));

      if (!items.length) {

        return;

      }



      // if target isn't included in items (e.g. when expanding the dropdown)

      // allow cycling to get the last item in case key equals ARROW_UP_KEY

      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();

    }



    // Static

    static jQueryInterface(config) {

      return this.each(function () {

        const data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {

          return;

        }

        if (typeof data[config] === 'undefined') {

          throw new TypeError(`No method named "${config}"`);

        }

        data[config]();

      });

    }

    static clearMenus(event) {

      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {

        return;

      }

      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);

      for (const toggle of openToggles) {

        const context = Dropdown.getInstance(toggle);

        if (!context || context._config.autoClose === false) {

          continue;

        }

        const composedPath = event.composedPath();

        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {

          continue;

        }



        // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu

        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {

          continue;

        }

        const relatedTarget = {

          relatedTarget: context._element

        };

        if (event.type === 'click') {

          relatedTarget.clickEvent = event;

        }

        context._completeHide(relatedTarget);

      }

    }

    static dataApiKeydownHandler(event) {

      // If not an UP | DOWN | ESCAPE key => not a dropdown command

      // If input/textarea && if key is other than ESCAPE => not a dropdown command



      const isInput = /input|textarea/i.test(event.target.tagName);

      const isEscapeEvent = event.key === ESCAPE_KEY$2;

      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);

      if (!isUpOrDownEvent && !isEscapeEvent) {

        return;

      }

      if (isInput && !isEscapeEvent) {

        return;

      }

      event.preventDefault();



      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/

      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);

      const instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (isUpOrDownEvent) {

        event.stopPropagation();

        instance.show();

        instance._selectMenuItem(event);

        return;

      }

      if (instance._isShown()) {

        // else is escape and we check if it is shown

        event.stopPropagation();

        instance.hide();

        getToggleButton.focus();

      }

    }

  }



  /**

   * Data API implementation

   */



  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);

  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);

  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);

  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);

  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {

    event.preventDefault();

    Dropdown.getOrCreateInstance(this).toggle();

  });



  /**

   * jQuery

   */



  defineJQueryPlugin(Dropdown);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap util/backdrop.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$9 = 'backdrop';

  const CLASS_NAME_FADE$4 = 'fade';

  const CLASS_NAME_SHOW$5 = 'show';

  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;

  const Default$8 = {

    className: 'modal-backdrop',

    clickCallback: null,

    isAnimated: false,

    isVisible: true,

    // if false, we use the backdrop helper without adding any element to the dom

    rootElement: 'body' // give the choice to place backdrop under different elements

  };

  const DefaultType$8 = {

    className: 'string',

    clickCallback: '(function|null)',

    isAnimated: 'boolean',

    isVisible: 'boolean',

    rootElement: '(element|string)'

  };



  /**

   * Class definition

   */



  class Backdrop extends Config {

    constructor(config) {

      super();

      this._config = this._getConfig(config);

      this._isAppended = false;

      this._element = null;

    }



    // Getters

    static get Default() {

      return Default$8;

    }

    static get DefaultType() {

      return DefaultType$8;

    }

    static get NAME() {

      return NAME$9;

    }



    // Public

    show(callback) {

      if (!this._config.isVisible) {

        execute(callback);

        return;

      }

      this._append();

      const element = this._getElement();

      if (this._config.isAnimated) {

        reflow(element);

      }

      element.classList.add(CLASS_NAME_SHOW$5);

      this._emulateAnimation(() => {

        execute(callback);

      });

    }

    hide(callback) {

      if (!this._config.isVisible) {

        execute(callback);

        return;

      }

      this._getElement().classList.remove(CLASS_NAME_SHOW$5);

      this._emulateAnimation(() => {

        this.dispose();

        execute(callback);

      });

    }

    dispose() {

      if (!this._isAppended) {

        return;

      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;

    }



    // Private

    _getElement() {

      if (!this._element) {

        const backdrop = document.createElement('div');

        backdrop.className = this._config.className;

        if (this._config.isAnimated) {

          backdrop.classList.add(CLASS_NAME_FADE$4);

        }

        this._element = backdrop;

      }

      return this._element;

    }

    _configAfterMerge(config) {

      // use getElement() with the default "body" to get a fresh Element on each instantiation

      config.rootElement = getElement(config.rootElement);

      return config;

    }

    _append() {

      if (this._isAppended) {

        return;

      }

      const element = this._getElement();

      this._config.rootElement.append(element);

      EventHandler.on(element, EVENT_MOUSEDOWN, () => {

        execute(this._config.clickCallback);

      });

      this._isAppended = true;

    }

    _emulateAnimation(callback) {

      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);

    }

  }



  /**

   * --------------------------------------------------------------------------

   * Bootstrap util/focustrap.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$8 = 'focustrap';

  const DATA_KEY$5 = 'bs.focustrap';

  const EVENT_KEY$5 = `.${DATA_KEY$5}`;

  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;

  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;

  const TAB_KEY = 'Tab';

  const TAB_NAV_FORWARD = 'forward';

  const TAB_NAV_BACKWARD = 'backward';

  const Default$7 = {

    autofocus: true,

    trapElement: null // The element to trap focus inside of

  };

  const DefaultType$7 = {

    autofocus: 'boolean',

    trapElement: 'element'

  };



  /**

   * Class definition

   */



  class FocusTrap extends Config {

    constructor(config) {

      super();

      this._config = this._getConfig(config);

      this._isActive = false;

      this._lastTabNavDirection = null;

    }



    // Getters

    static get Default() {

      return Default$7;

    }

    static get DefaultType() {

      return DefaultType$7;

    }

    static get NAME() {

      return NAME$8;

    }



    // Public

    activate() {

      if (this._isActive) {

        return;

      }

      if (this._config.autofocus) {

        this._config.trapElement.focus();

      }

      EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));

      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));

      this._isActive = true;

    }

    deactivate() {

      if (!this._isActive) {

        return;

      }

      this._isActive = false;

      EventHandler.off(document, EVENT_KEY$5);

    }



    // Private

    _handleFocusin(event) {

      const {

        trapElement

      } = this._config;

      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {

        return;

      }

      const elements = SelectorEngine.focusableChildren(trapElement);

      if (elements.length === 0) {

        trapElement.focus();

      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {

        elements[elements.length - 1].focus();

      } else {

        elements[0].focus();

      }

    }

    _handleKeydown(event) {

      if (event.key !== TAB_KEY) {

        return;

      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;

    }

  }



  /**

   * --------------------------------------------------------------------------

   * Bootstrap util/scrollBar.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';

  const SELECTOR_STICKY_CONTENT = '.sticky-top';

  const PROPERTY_PADDING = 'padding-right';

  const PROPERTY_MARGIN = 'margin-right';



  /**

   * Class definition

   */



  class ScrollBarHelper {

    constructor() {

      this._element = document.body;

    }



    // Public

    getWidth() {

      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes

      const documentWidth = document.documentElement.clientWidth;

      return Math.abs(window.innerWidth - documentWidth);

    }

    hide() {

      const width = this.getWidth();

      this._disableOverFlow();

      // give padding to element to balance the hidden scrollbar width

      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);

      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth

      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);

    }

    reset() {

      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);

    }

    isOverflowing() {

      return this.getWidth() > 0;

    }



    // Private

    _disableOverFlow() {

      this._saveInitialAttribute(this._element, 'overflow');

      this._element.style.overflow = 'hidden';

    }

    _setElementAttributes(selector, styleProperty, callback) {

      const scrollbarWidth = this.getWidth();

      const manipulationCallBack = element => {

        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {

          return;

        }

        this._saveInitialAttribute(element, styleProperty);

        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);

        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);

      };

      this._applyManipulationCallback(selector, manipulationCallBack);

    }

    _saveInitialAttribute(element, styleProperty) {

      const actualValue = element.style.getPropertyValue(styleProperty);

      if (actualValue) {

        Manipulator.setDataAttribute(element, styleProperty, actualValue);

      }

    }

    _resetElementAttributes(selector, styleProperty) {

      const manipulationCallBack = element => {

        const value = Manipulator.getDataAttribute(element, styleProperty);

        // We only want to remove the property if the value is `null`; the value can also be zero

        if (value === null) {

          element.style.removeProperty(styleProperty);

          return;

        }

        Manipulator.removeDataAttribute(element, styleProperty);

        element.style.setProperty(styleProperty, value);

      };

      this._applyManipulationCallback(selector, manipulationCallBack);

    }

    _applyManipulationCallback(selector, callBack) {

      if (isElement$1(selector)) {

        callBack(selector);

        return;

      }

      for (const sel of SelectorEngine.find(selector, this._element)) {

        callBack(sel);

      }

    }

  }



  /**

   * --------------------------------------------------------------------------

   * Bootstrap modal.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$7 = 'modal';

  const DATA_KEY$4 = 'bs.modal';

  const EVENT_KEY$4 = `.${DATA_KEY$4}`;

  const DATA_API_KEY$2 = '.data-api';

  const ESCAPE_KEY$1 = 'Escape';

  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;

  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;

  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;

  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;

  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;

  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;

  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;

  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;

  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;

  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;

  const CLASS_NAME_OPEN = 'modal-open';

  const CLASS_NAME_FADE$3 = 'fade';

  const CLASS_NAME_SHOW$4 = 'show';

  const CLASS_NAME_STATIC = 'modal-static';

  const OPEN_SELECTOR$1 = '.modal.show';

  const SELECTOR_DIALOG = '.modal-dialog';

  const SELECTOR_MODAL_BODY = '.modal-body';

  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';

  const Default$6 = {

    backdrop: true,

    focus: true,

    keyboard: true

  };

  const DefaultType$6 = {

    backdrop: '(boolean|string)',

    focus: 'boolean',

    keyboard: 'boolean'

  };



  /**

   * Class definition

   */



  class Modal extends BaseComponent {

    constructor(element, config) {

      super(element, config);

      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);

      this._backdrop = this._initializeBackDrop();

      this._focustrap = this._initializeFocusTrap();

      this._isShown = false;

      this._isTransitioning = false;

      this._scrollBar = new ScrollBarHelper();

      this._addEventListeners();

    }



    // Getters

    static get Default() {

      return Default$6;

    }

    static get DefaultType() {

      return DefaultType$6;

    }

    static get NAME() {

      return NAME$7;

    }



    // Public

    toggle(relatedTarget) {

      return this._isShown ? this.hide() : this.show(relatedTarget);

    }

    show(relatedTarget) {

      if (this._isShown || this._isTransitioning) {

        return;

      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {

        relatedTarget

      });

      if (showEvent.defaultPrevented) {

        return;

      }

      this._isShown = true;

      this._isTransitioning = true;

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._backdrop.show(() => this._showElement(relatedTarget));

    }

    hide() {

      if (!this._isShown || this._isTransitioning) {

        return;

      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);

      if (hideEvent.defaultPrevented) {

        return;

      }

      this._isShown = false;

      this._isTransitioning = true;

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());

    }

    dispose() {

      EventHandler.off(window, EVENT_KEY$4);

      EventHandler.off(this._dialog, EVENT_KEY$4);

      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();

    }

    handleUpdate() {

      this._adjustDialog();

    }



    // Private

    _initializeBackDrop() {

      return new Backdrop({

        isVisible: Boolean(this._config.backdrop),

        // 'static' option will be translated to true, and booleans will keep their value,

        isAnimated: this._isAnimated()

      });

    }

    _initializeFocusTrap() {

      return new FocusTrap({

        trapElement: this._element

      });

    }

    _showElement(relatedTarget) {

      // try to append dynamic modal

      if (!document.body.contains(this._element)) {

        document.body.append(this._element);

      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (modalBody) {

        modalBody.scrollTop = 0;

      }

      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW$4);

      const transitionComplete = () => {

        if (this._config.focus) {

          this._focustrap.activate();

        }

        this._isTransitioning = false;

        EventHandler.trigger(this._element, EVENT_SHOWN$4, {

          relatedTarget

        });

      };

      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());

    }

    _addEventListeners() {

      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {

        if (event.key !== ESCAPE_KEY$1) {

          return;

        }

        if (this._config.keyboard) {

          this.hide();

          return;

        }

        this._triggerBackdropTransition();

      });

      EventHandler.on(window, EVENT_RESIZE$1, () => {

        if (this._isShown && !this._isTransitioning) {

          this._adjustDialog();

        }

      });

      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {

        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks

        EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {

          if (this._element !== event.target || this._element !== event2.target) {

            return;

          }

          if (this._config.backdrop === 'static') {

            this._triggerBackdropTransition();

            return;

          }

          if (this._config.backdrop) {

            this.hide();

          }

        });

      });

    }

    _hideModal() {

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(() => {

        document.body.classList.remove(CLASS_NAME_OPEN);

        this._resetAdjustments();

        this._scrollBar.reset();

        EventHandler.trigger(this._element, EVENT_HIDDEN$4);

      });

    }

    _isAnimated() {

      return this._element.classList.contains(CLASS_NAME_FADE$3);

    }

    _triggerBackdropTransition() {

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);

      if (hideEvent.defaultPrevented) {

        return;

      }

      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      const initialOverflowY = this._element.style.overflowY;

      // return if the following background transition hasn't yet completed

      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {

        return;

      }

      if (!isModalOverflowing) {

        this._element.style.overflowY = 'hidden';

      }

      this._element.classList.add(CLASS_NAME_STATIC);

      this._queueCallback(() => {

        this._element.classList.remove(CLASS_NAME_STATIC);

        this._queueCallback(() => {

          this._element.style.overflowY = initialOverflowY;

        }, this._dialog);

      }, this._dialog);

      this._element.focus();

    }



    /**

     * The following methods are used to handle overflowing modals

     */



    _adjustDialog() {

      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      const scrollbarWidth = this._scrollBar.getWidth();

      const isBodyOverflowing = scrollbarWidth > 0;

      if (isBodyOverflowing && !isModalOverflowing) {

        const property = isRTL() ? 'paddingLeft' : 'paddingRight';

        this._element.style[property] = `${scrollbarWidth}px`;

      }

      if (!isBodyOverflowing && isModalOverflowing) {

        const property = isRTL() ? 'paddingRight' : 'paddingLeft';

        this._element.style[property] = `${scrollbarWidth}px`;

      }

    }

    _resetAdjustments() {

      this._element.style.paddingLeft = '';

      this._element.style.paddingRight = '';

    }



    // Static

    static jQueryInterface(config, relatedTarget) {

      return this.each(function () {

        const data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {

          return;

        }

        if (typeof data[config] === 'undefined') {

          throw new TypeError(`No method named "${config}"`);

        }

        data[config](relatedTarget);

      });

    }

  }



  /**

   * Data API implementation

   */



  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {

    const target = SelectorEngine.getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {

      event.preventDefault();

    }

    EventHandler.one(target, EVENT_SHOW$4, showEvent => {

      if (showEvent.defaultPrevented) {

        // only register focus restorer if modal will actually get shown

        return;

      }

      EventHandler.one(target, EVENT_HIDDEN$4, () => {

        if (isVisible(this)) {

          this.focus();

        }

      });

    });



    // avoid conflict when clicking modal toggler while another one is open

    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

    if (alreadyOpen) {

      Modal.getInstance(alreadyOpen).hide();

    }

    const data = Modal.getOrCreateInstance(target);

    data.toggle(this);

  });

  enableDismissTrigger(Modal);



  /**

   * jQuery

   */



  defineJQueryPlugin(Modal);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap offcanvas.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$6 = 'offcanvas';

  const DATA_KEY$3 = 'bs.offcanvas';

  const EVENT_KEY$3 = `.${DATA_KEY$3}`;

  const DATA_API_KEY$1 = '.data-api';

  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;

  const ESCAPE_KEY = 'Escape';

  const CLASS_NAME_SHOW$3 = 'show';

  const CLASS_NAME_SHOWING$1 = 'showing';

  const CLASS_NAME_HIDING = 'hiding';

  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';

  const OPEN_SELECTOR = '.offcanvas.show';

  const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;

  const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;

  const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;

  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;

  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;

  const EVENT_RESIZE = `resize${EVENT_KEY$3}`;

  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;

  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;

  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';

  const Default$5 = {

    backdrop: true,

    keyboard: true,

    scroll: false

  };

  const DefaultType$5 = {

    backdrop: '(boolean|string)',

    keyboard: 'boolean',

    scroll: 'boolean'

  };



  /**

   * Class definition

   */



  class Offcanvas extends BaseComponent {

    constructor(element, config) {

      super(element, config);

      this._isShown = false;

      this._backdrop = this._initializeBackDrop();

      this._focustrap = this._initializeFocusTrap();

      this._addEventListeners();

    }



    // Getters

    static get Default() {

      return Default$5;

    }

    static get DefaultType() {

      return DefaultType$5;

    }

    static get NAME() {

      return NAME$6;

    }



    // Public

    toggle(relatedTarget) {

      return this._isShown ? this.hide() : this.show(relatedTarget);

    }

    show(relatedTarget) {

      if (this._isShown) {

        return;

      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {

        relatedTarget

      });

      if (showEvent.defaultPrevented) {

        return;

      }

      this._isShown = true;

      this._backdrop.show();

      if (!this._config.scroll) {

        new ScrollBarHelper().hide();

      }

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOWING$1);

      const completeCallBack = () => {

        if (!this._config.scroll || this._config.backdrop) {

          this._focustrap.activate();

        }

        this._element.classList.add(CLASS_NAME_SHOW$3);

        this._element.classList.remove(CLASS_NAME_SHOWING$1);

        EventHandler.trigger(this._element, EVENT_SHOWN$3, {

          relatedTarget

        });

      };

      this._queueCallback(completeCallBack, this._element, true);

    }

    hide() {

      if (!this._isShown) {

        return;

      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {

        return;

      }

      this._focustrap.deactivate();

      this._element.blur();

      this._isShown = false;

      this._element.classList.add(CLASS_NAME_HIDING);

      this._backdrop.hide();

      const completeCallback = () => {

        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        if (!this._config.scroll) {

          new ScrollBarHelper().reset();

        }

        EventHandler.trigger(this._element, EVENT_HIDDEN$3);

      };

      this._queueCallback(completeCallback, this._element, true);

    }

    dispose() {

      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();

    }



    // Private

    _initializeBackDrop() {

      const clickCallback = () => {

        if (this._config.backdrop === 'static') {

          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

          return;

        }

        this.hide();

      };



      // 'static' option will be translated to true, and booleans will keep their value

      const isVisible = Boolean(this._config.backdrop);

      return new Backdrop({

        className: CLASS_NAME_BACKDROP,

        isVisible,

        isAnimated: true,

        rootElement: this._element.parentNode,

        clickCallback: isVisible ? clickCallback : null

      });

    }

    _initializeFocusTrap() {

      return new FocusTrap({

        trapElement: this._element

      });

    }

    _addEventListeners() {

      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {

        if (event.key !== ESCAPE_KEY) {

          return;

        }

        if (this._config.keyboard) {

          this.hide();

          return;

        }

        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      });

    }



    // Static

    static jQueryInterface(config) {

      return this.each(function () {

        const data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {

          return;

        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {

          throw new TypeError(`No method named "${config}"`);

        }

        data[config](this);

      });

    }

  }



  /**

   * Data API implementation

   */



  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {

    const target = SelectorEngine.getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {

      event.preventDefault();

    }

    if (isDisabled(this)) {

      return;

    }

    EventHandler.one(target, EVENT_HIDDEN$3, () => {

      // focus on trigger when it is closed

      if (isVisible(this)) {

        this.focus();

      }

    });



    // avoid conflict when clicking a toggler of an offcanvas, while another is open

    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (alreadyOpen && alreadyOpen !== target) {

      Offcanvas.getInstance(alreadyOpen).hide();

    }

    const data = Offcanvas.getOrCreateInstance(target);

    data.toggle(this);

  });

  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {

    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {

      Offcanvas.getOrCreateInstance(selector).show();

    }

  });

  EventHandler.on(window, EVENT_RESIZE, () => {

    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {

      if (getComputedStyle(element).position !== 'fixed') {

        Offcanvas.getOrCreateInstance(element).hide();

      }

    }

  });

  enableDismissTrigger(Offcanvas);



  /**

   * jQuery

   */



  defineJQueryPlugin(Offcanvas);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap util/sanitizer.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */



  // js-docs-start allow-list

  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;

  const DefaultAllowlist = {

    // Global attributes allowed on any supplied element below.

    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],

    a: ['target', 'href', 'title', 'rel'],

    area: [],

    b: [],

    br: [],

    col: [],

    code: [],

    dd: [],

    div: [],

    dl: [],

    dt: [],

    em: [],

    hr: [],

    h1: [],

    h2: [],

    h3: [],

    h4: [],

    h5: [],

    h6: [],

    i: [],

    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],

    li: [],

    ol: [],

    p: [],

    pre: [],

    s: [],

    small: [],

    span: [],

    sub: [],

    sup: [],

    strong: [],

    u: [],

    ul: []

  };

  // js-docs-end allow-list



  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);



  /**

   * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation

   * contexts.

   *

   * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38

   */

  const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;

  const allowedAttribute = (attribute, allowedAttributeList) => {

    const attributeName = attribute.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attributeName)) {

      if (uriAttributes.has(attributeName)) {

        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));

      }

      return true;

    }



    // Check if a regular expression validates the attribute.

    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));

  };

  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {

    if (!unsafeHtml.length) {

      return unsafeHtml;

    }

    if (sanitizeFunction && typeof sanitizeFunction === 'function') {

      return sanitizeFunction(unsafeHtml);

    }

    const domParser = new window.DOMParser();

    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');

    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (const element of elements) {

      const elementName = element.nodeName.toLowerCase();

      if (!Object.keys(allowList).includes(elementName)) {

        element.remove();

        continue;

      }

      const attributeList = [].concat(...element.attributes);

      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

      for (const attribute of attributeList) {

        if (!allowedAttribute(attribute, allowedAttributes)) {

          element.removeAttribute(attribute.nodeName);

        }

      }

    }

    return createdDocument.body.innerHTML;

  }



  /**

   * --------------------------------------------------------------------------

   * Bootstrap util/template-factory.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$5 = 'TemplateFactory';

  const Default$4 = {

    allowList: DefaultAllowlist,

    content: {},

    // { selector : text ,  selector2 : text2 , }

    extraClass: '',

    html: false,

    sanitize: true,

    sanitizeFn: null,

    template: '<div></div>'

  };

  const DefaultType$4 = {

    allowList: 'object',

    content: 'object',

    extraClass: '(string|function)',

    html: 'boolean',

    sanitize: 'boolean',

    sanitizeFn: '(null|function)',

    template: 'string'

  };

  const DefaultContentType = {

    entry: '(string|element|function|null)',

    selector: '(string|element)'

  };



  /**

   * Class definition

   */



  class TemplateFactory extends Config {

    constructor(config) {

      super();

      this._config = this._getConfig(config);

    }



    // Getters

    static get Default() {

      return Default$4;

    }

    static get DefaultType() {

      return DefaultType$4;

    }

    static get NAME() {

      return NAME$5;

    }



    // Public

    getContent() {

      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);

    }

    hasContent() {

      return this.getContent().length > 0;

    }

    changeContent(content) {

      this._checkContent(content);

      this._config.content = {

        ...this._config.content,

        ...content

      };

      return this;

    }

    toHtml() {

      const templateWrapper = document.createElement('div');

      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

      for (const [selector, text] of Object.entries(this._config.content)) {

        this._setContent(templateWrapper, text, selector);

      }

      const template = templateWrapper.children[0];

      const extraClass = this._resolvePossibleFunction(this._config.extraClass);

      if (extraClass) {

        template.classList.add(...extraClass.split(' '));

      }

      return template;

    }



    // Private

    _typeCheckConfig(config) {

      super._typeCheckConfig(config);

      this._checkContent(config.content);

    }

    _checkContent(arg) {

      for (const [selector, content] of Object.entries(arg)) {

        super._typeCheckConfig({

          selector,

          entry: content

        }, DefaultContentType);

      }

    }

    _setContent(template, content, selector) {

      const templateElement = SelectorEngine.findOne(selector, template);

      if (!templateElement) {

        return;

      }

      content = this._resolvePossibleFunction(content);

      if (!content) {

        templateElement.remove();

        return;

      }

      if (isElement$1(content)) {

        this._putElementInTemplate(getElement(content), templateElement);

        return;

      }

      if (this._config.html) {

        templateElement.innerHTML = this._maybeSanitize(content);

        return;

      }

      templateElement.textContent = content;

    }

    _maybeSanitize(arg) {

      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;

    }

    _resolvePossibleFunction(arg) {

      return execute(arg, [undefined, this]);

    }

    _putElementInTemplate(element, templateElement) {

      if (this._config.html) {

        templateElement.innerHTML = '';

        templateElement.append(element);

        return;

      }

      templateElement.textContent = element.textContent;

    }

  }



  /**

   * --------------------------------------------------------------------------

   * Bootstrap tooltip.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$4 = 'tooltip';

  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);

  const CLASS_NAME_FADE$2 = 'fade';

  const CLASS_NAME_MODAL = 'modal';

  const CLASS_NAME_SHOW$2 = 'show';

  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';

  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;

  const EVENT_MODAL_HIDE = 'hide.bs.modal';

  const TRIGGER_HOVER = 'hover';

  const TRIGGER_FOCUS = 'focus';

  const TRIGGER_CLICK = 'click';

  const TRIGGER_MANUAL = 'manual';

  const EVENT_HIDE$2 = 'hide';

  const EVENT_HIDDEN$2 = 'hidden';

  const EVENT_SHOW$2 = 'show';

  const EVENT_SHOWN$2 = 'shown';

  const EVENT_INSERTED = 'inserted';

  const EVENT_CLICK$1 = 'click';

  const EVENT_FOCUSIN$1 = 'focusin';

  const EVENT_FOCUSOUT$1 = 'focusout';

  const EVENT_MOUSEENTER = 'mouseenter';

  const EVENT_MOUSELEAVE = 'mouseleave';

  const AttachmentMap = {

    AUTO: 'auto',

    TOP: 'top',

    RIGHT: isRTL() ? 'left' : 'right',

    BOTTOM: 'bottom',

    LEFT: isRTL() ? 'right' : 'left'

  };

  const Default$3 = {

    allowList: DefaultAllowlist,

    animation: true,

    boundary: 'clippingParents',

    container: false,

    customClass: '',

    delay: 0,

    fallbackPlacements: ['top', 'right', 'bottom', 'left'],

    html: false,

    offset: [0, 6],

    placement: 'top',

    popperConfig: null,

    sanitize: true,

    sanitizeFn: null,

    selector: false,

    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',

    title: '',

    trigger: 'hover focus'

  };

  const DefaultType$3 = {

    allowList: 'object',

    animation: 'boolean',

    boundary: '(string|element)',

    container: '(string|element|boolean)',

    customClass: '(string|function)',

    delay: '(number|object)',

    fallbackPlacements: 'array',

    html: 'boolean',

    offset: '(array|string|function)',

    placement: '(string|function)',

    popperConfig: '(null|object|function)',

    sanitize: 'boolean',

    sanitizeFn: '(null|function)',

    selector: '(string|boolean)',

    template: 'string',

    title: '(string|element|function)',

    trigger: 'string'

  };



  /**

   * Class definition

   */



  class Tooltip extends BaseComponent {

    constructor(element, config) {

      if (typeof Popper === 'undefined') {

        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org/docs/v2/)');

      }

      super(element, config);



      // Private

      this._isEnabled = true;

      this._timeout = 0;

      this._isHovered = null;

      this._activeTrigger = {};

      this._popper = null;

      this._templateFactory = null;

      this._newContent = null;



      // Protected

      this.tip = null;

      this._setListeners();

      if (!this._config.selector) {

        this._fixTitle();

      }

    }



    // Getters

    static get Default() {

      return Default$3;

    }

    static get DefaultType() {

      return DefaultType$3;

    }

    static get NAME() {

      return NAME$4;

    }



    // Public

    enable() {

      this._isEnabled = true;

    }

    disable() {

      this._isEnabled = false;

    }

    toggleEnabled() {

      this._isEnabled = !this._isEnabled;

    }

    toggle() {

      if (!this._isEnabled) {

        return;

      }

      if (this._isShown()) {

        this._leave();

        return;

      }

      this._enter();

    }

    dispose() {

      clearTimeout(this._timeout);

      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this._element.getAttribute('data-bs-original-title')) {

        this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));

      }

      this._disposePopper();

      super.dispose();

    }

    show() {

      if (this._element.style.display === 'none') {

        throw new Error('Please use show on visible elements');

      }

      if (!(this._isWithContent() && this._isEnabled)) {

        return;

      }

      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));

      const shadowRoot = findShadowRoot(this._element);

      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {

        return;

      }



      // TODO: v6 remove this or make it optional

      this._disposePopper();

      const tip = this._getTipElement();

      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));

      const {

        container

      } = this._config;

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {

        container.append(tip);

        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));

      }

      this._popper = this._createPopper(tip);

      tip.classList.add(CLASS_NAME_SHOW$2);



      // If this is a touch-enabled device we add extra

      // empty mouseover listeners to the body's immediate children;

      // only needed because of broken event delegation on iOS

      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      if ('ontouchstart' in document.documentElement) {

        for (const element of [].concat(...document.body.children)) {

          EventHandler.on(element, 'mouseover', noop);

        }

      }

      const complete = () => {

        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));

        if (this._isHovered === false) {

          this._leave();

        }

        this._isHovered = false;

      };

      this._queueCallback(complete, this.tip, this._isAnimated());

    }

    hide() {

      if (!this._isShown()) {

        return;

      }

      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));

      if (hideEvent.defaultPrevented) {

        return;

      }

      const tip = this._getTipElement();

      tip.classList.remove(CLASS_NAME_SHOW$2);



      // If this is a touch-enabled device we remove the extra

      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {

        for (const element of [].concat(...document.body.children)) {

          EventHandler.off(element, 'mouseover', noop);

        }

      }

      this._activeTrigger[TRIGGER_CLICK] = false;

      this._activeTrigger[TRIGGER_FOCUS] = false;

      this._activeTrigger[TRIGGER_HOVER] = false;

      this._isHovered = null; // it is a trick to support manual triggering



      const complete = () => {

        if (this._isWithActiveTrigger()) {

          return;

        }

        if (!this._isHovered) {

          this._disposePopper();

        }

        this._element.removeAttribute('aria-describedby');

        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));

      };

      this._queueCallback(complete, this.tip, this._isAnimated());

    }

    update() {

      if (this._popper) {

        this._popper.update();

      }

    }



    // Protected

    _isWithContent() {

      return Boolean(this._getTitle());

    }

    _getTipElement() {

      if (!this.tip) {

        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());

      }

      return this.tip;

    }

    _createTipElement(content) {

      const tip = this._getTemplateFactory(content).toHtml();



      // TODO: remove this check in v6

      if (!tip) {

        return null;

      }

      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);

      // TODO: v6 the following can be achieved with CSS only

      tip.classList.add(`bs-${this.constructor.NAME}-auto`);

      const tipId = getUID(this.constructor.NAME).toString();

      tip.setAttribute('id', tipId);

      if (this._isAnimated()) {

        tip.classList.add(CLASS_NAME_FADE$2);

      }

      return tip;

    }

    setContent(content) {

      this._newContent = content;

      if (this._isShown()) {

        this._disposePopper();

        this.show();

      }

    }

    _getTemplateFactory(content) {

      if (this._templateFactory) {

        this._templateFactory.changeContent(content);

      } else {

        this._templateFactory = new TemplateFactory({

          ...this._config,

          // the `content` var has to be after `this._config`

          // to override config.content in case of popover

          content,

          extraClass: this._resolvePossibleFunction(this._config.customClass)

        });

      }

      return this._templateFactory;

    }

    _getContentForTemplate() {

      return {

        [SELECTOR_TOOLTIP_INNER]: this._getTitle()

      };

    }

    _getTitle() {

      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');

    }



    // Private

    _initializeOnDelegatedTarget(event) {

      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());

    }

    _isAnimated() {

      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);

    }

    _isShown() {

      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);

    }

    _createPopper(tip) {

      const placement = execute(this._config.placement, [this, tip, this._element]);

      const attachment = AttachmentMap[placement.toUpperCase()];

      return createPopper(this._element, tip, this._getPopperConfig(attachment));

    }

    _getOffset() {

      const {

        offset

      } = this._config;

      if (typeof offset === 'string') {

        return offset.split(',').map(value => Number.parseInt(value, 10));

      }

      if (typeof offset === 'function') {

        return popperData => offset(popperData, this._element);

      }

      return offset;

    }

    _resolvePossibleFunction(arg) {

      return execute(arg, [this._element, this._element]);

    }

    _getPopperConfig(attachment) {

      const defaultBsPopperConfig = {

        placement: attachment,

        modifiers: [{

          name: 'flip',

          options: {

            fallbackPlacements: this._config.fallbackPlacements

          }

        }, {

          name: 'offset',

          options: {

            offset: this._getOffset()

          }

        }, {

          name: 'preventOverflow',

          options: {

            boundary: this._config.boundary

          }

        }, {

          name: 'arrow',

          options: {

            element: `.${this.constructor.NAME}-arrow`

          }

        }, {

          name: 'preSetPlacement',

          enabled: true,

          phase: 'beforeMain',

          fn: data => {

            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.

            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement

            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);

          }

        }]

      };

      return {

        ...defaultBsPopperConfig,

        ...execute(this._config.popperConfig, [undefined, defaultBsPopperConfig])

      };

    }

    _setListeners() {

      const triggers = this._config.trigger.split(' ');

      for (const trigger of triggers) {

        if (trigger === 'click') {

          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {

            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[TRIGGER_CLICK] = !(context._isShown() && context._activeTrigger[TRIGGER_CLICK]);

            context.toggle();

          });

        } else if (trigger !== TRIGGER_MANUAL) {

          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);

          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);

          EventHandler.on(this._element, eventIn, this._config.selector, event => {

            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;

            context._enter();

          });

          EventHandler.on(this._element, eventOut, this._config.selector, event => {

            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);

            context._leave();

          });

        }

      }

      this._hideModalHandler = () => {

        if (this._element) {

          this.hide();

        }

      };

      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

    }

    _fixTitle() {

      const title = this._element.getAttribute('title');

      if (!title) {

        return;

      }

      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {

        this._element.setAttribute('aria-label', title);

      }

      this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility

      this._element.removeAttribute('title');

    }

    _enter() {

      if (this._isShown() || this._isHovered) {

        this._isHovered = true;

        return;

      }

      this._isHovered = true;

      this._setTimeout(() => {

        if (this._isHovered) {

          this.show();

        }

      }, this._config.delay.show);

    }

    _leave() {

      if (this._isWithActiveTrigger()) {

        return;

      }

      this._isHovered = false;

      this._setTimeout(() => {

        if (!this._isHovered) {

          this.hide();

        }

      }, this._config.delay.hide);

    }

    _setTimeout(handler, timeout) {

      clearTimeout(this._timeout);

      this._timeout = setTimeout(handler, timeout);

    }

    _isWithActiveTrigger() {

      return Object.values(this._activeTrigger).includes(true);

    }

    _getConfig(config) {

      const dataAttributes = Manipulator.getDataAttributes(this._element);

      for (const dataAttribute of Object.keys(dataAttributes)) {

        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {

          delete dataAttributes[dataAttribute];

        }

      }

      config = {

        ...dataAttributes,

        ...(typeof config === 'object' && config ? config : {})

      };

      config = this._mergeConfigObj(config);

      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;

    }

    _configAfterMerge(config) {

      config.container = config.container === false ? document.body : getElement(config.container);

      if (typeof config.delay === 'number') {

        config.delay = {

          show: config.delay,

          hide: config.delay

        };

      }

      if (typeof config.title === 'number') {

        config.title = config.title.toString();

      }

      if (typeof config.content === 'number') {

        config.content = config.content.toString();

      }

      return config;

    }

    _getDelegateConfig() {

      const config = {};

      for (const [key, value] of Object.entries(this._config)) {

        if (this.constructor.Default[key] !== value) {

          config[key] = value;

        }

      }

      config.selector = false;

      config.trigger = 'manual';



      // In the future can be replaced with:

      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])

      // `Object.fromEntries(keysWithDifferentValues)`

      return config;

    }

    _disposePopper() {

      if (this._popper) {

        this._popper.destroy();

        this._popper = null;

      }

      if (this.tip) {

        this.tip.remove();

        this.tip = null;

      }

    }



    // Static

    static jQueryInterface(config) {

      return this.each(function () {

        const data = Tooltip.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {

          return;

        }

        if (typeof data[config] === 'undefined') {

          throw new TypeError(`No method named "${config}"`);

        }

        data[config]();

      });

    }

  }



  /**

   * jQuery

   */



  defineJQueryPlugin(Tooltip);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap popover.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$3 = 'popover';

  const SELECTOR_TITLE = '.popover-header';

  const SELECTOR_CONTENT = '.popover-body';

  const Default$2 = {

    ...Tooltip.Default,

    content: '',

    offset: [0, 8],

    placement: 'right',

    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',

    trigger: 'click'

  };

  const DefaultType$2 = {

    ...Tooltip.DefaultType,

    content: '(null|string|element|function)'

  };



  /**

   * Class definition

   */



  class Popover extends Tooltip {

    // Getters

    static get Default() {

      return Default$2;

    }

    static get DefaultType() {

      return DefaultType$2;

    }

    static get NAME() {

      return NAME$3;

    }



    // Overrides

    _isWithContent() {

      return this._getTitle() || this._getContent();

    }



    // Private

    _getContentForTemplate() {

      return {

        [SELECTOR_TITLE]: this._getTitle(),

        [SELECTOR_CONTENT]: this._getContent()

      };

    }

    _getContent() {

      return this._resolvePossibleFunction(this._config.content);

    }



    // Static

    static jQueryInterface(config) {

      return this.each(function () {

        const data = Popover.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {

          return;

        }

        if (typeof data[config] === 'undefined') {

          throw new TypeError(`No method named "${config}"`);

        }

        data[config]();

      });

    }

  }



  /**

   * jQuery

   */



  defineJQueryPlugin(Popover);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap scrollspy.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$2 = 'scrollspy';

  const DATA_KEY$2 = 'bs.scrollspy';

  const EVENT_KEY$2 = `.${DATA_KEY$2}`;

  const DATA_API_KEY = '.data-api';

  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;

  const EVENT_CLICK = `click${EVENT_KEY$2}`;

  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;

  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';

  const CLASS_NAME_ACTIVE$1 = 'active';

  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';

  const SELECTOR_TARGET_LINKS = '[href]';

  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';

  const SELECTOR_NAV_LINKS = '.nav-link';

  const SELECTOR_NAV_ITEMS = '.nav-item';

  const SELECTOR_LIST_ITEMS = '.list-group-item';

  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;

  const SELECTOR_DROPDOWN = '.dropdown';

  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';

  const Default$1 = {

    offset: null,

    // TODO: v6 @deprecated, keep it for backwards compatibility reasons

    rootMargin: '0px 0px -25%',

    smoothScroll: false,

    target: null,

    threshold: [0.1, 0.5, 1]

  };

  const DefaultType$1 = {

    offset: '(number|null)',

    // TODO v6 @deprecated, keep it for backwards compatibility reasons

    rootMargin: 'string',

    smoothScroll: 'boolean',

    target: 'element',

    threshold: 'array'

  };



  /**

   * Class definition

   */



  class ScrollSpy extends BaseComponent {

    constructor(element, config) {

      super(element, config);



      // this._element is the observablesContainer and config.target the menu links wrapper

      this._targetLinks = new Map();

      this._observableSections = new Map();

      this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;

      this._activeTarget = null;

      this._observer = null;

      this._previousScrollData = {

        visibleEntryTop: 0,

        parentScrollTop: 0

      };

      this.refresh(); // initialize

    }



    // Getters

    static get Default() {

      return Default$1;

    }

    static get DefaultType() {

      return DefaultType$1;

    }

    static get NAME() {

      return NAME$2;

    }



    // Public

    refresh() {

      this._initializeTargetsAndObservables();

      this._maybeEnableSmoothScroll();

      if (this._observer) {

        this._observer.disconnect();

      } else {

        this._observer = this._getNewObserver();

      }

      for (const section of this._observableSections.values()) {

        this._observer.observe(section);

      }

    }

    dispose() {

      this._observer.disconnect();

      super.dispose();

    }



    // Private

    _configAfterMerge(config) {

      // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case

      config.target = getElement(config.target) || document.body;



      // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only

      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;

      if (typeof config.threshold === 'string') {

        config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));

      }

      return config;

    }

    _maybeEnableSmoothScroll() {

      if (!this._config.smoothScroll) {

        return;

      }



      // unregister any previous listeners

      EventHandler.off(this._config.target, EVENT_CLICK);

      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {

        const observableSection = this._observableSections.get(event.target.hash);

        if (observableSection) {

          event.preventDefault();

          const root = this._rootElement || window;

          const height = observableSection.offsetTop - this._element.offsetTop;

          if (root.scrollTo) {

            root.scrollTo({

              top: height,

              behavior: 'smooth'

            });

            return;

          }



          // Chrome 60 doesn't support `scrollTo`

          root.scrollTop = height;

        }

      });

    }

    _getNewObserver() {

      const options = {

        root: this._rootElement,

        threshold: this._config.threshold,

        rootMargin: this._config.rootMargin

      };

      return new IntersectionObserver(entries => this._observerCallback(entries), options);

    }



    // The logic of selection

    _observerCallback(entries) {

      const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);

      const activate = entry => {

        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;

        this._process(targetElement(entry));

      };

      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;

      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;

      this._previousScrollData.parentScrollTop = parentScrollTop;

      for (const entry of entries) {

        if (!entry.isIntersecting) {

          this._activeTarget = null;

          this._clearActiveClass(targetElement(entry));

          continue;

        }

        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;

        // if we are scrolling down, pick the bigger offsetTop

        if (userScrollsDown && entryIsLowerThanPrevious) {

          activate(entry);

          // if parent isn't scrolled, let's keep the first visible item, breaking the iteration

          if (!parentScrollTop) {

            return;

          }

          continue;

        }



        // if we are scrolling up, pick the smallest offsetTop

        if (!userScrollsDown && !entryIsLowerThanPrevious) {

          activate(entry);

        }

      }

    }

    _initializeTargetsAndObservables() {

      this._targetLinks = new Map();

      this._observableSections = new Map();

      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);

      for (const anchor of targetLinks) {

        // ensure that the anchor has an id and is not disabled

        if (!anchor.hash || isDisabled(anchor)) {

          continue;

        }

        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);



        // ensure that the observableSection exists & is visible

        if (isVisible(observableSection)) {

          this._targetLinks.set(decodeURI(anchor.hash), anchor);

          this._observableSections.set(anchor.hash, observableSection);

        }

      }

    }

    _process(target) {

      if (this._activeTarget === target) {

        return;

      }

      this._clearActiveClass(this._config.target);

      this._activeTarget = target;

      target.classList.add(CLASS_NAME_ACTIVE$1);

      this._activateParents(target);

      EventHandler.trigger(this._element, EVENT_ACTIVATE, {

        relatedTarget: target

      });

    }

    _activateParents(target) {

      // Activate dropdown parents

      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {

        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);

        return;

      }

      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {

        // Set triggered links parents as active

        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {

          item.classList.add(CLASS_NAME_ACTIVE$1);

        }

      }

    }

    _clearActiveClass(parent) {

      parent.classList.remove(CLASS_NAME_ACTIVE$1);

      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);

      for (const node of activeNodes) {

        node.classList.remove(CLASS_NAME_ACTIVE$1);

      }

    }



    // Static

    static jQueryInterface(config) {

      return this.each(function () {

        const data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {

          return;

        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {

          throw new TypeError(`No method named "${config}"`);

        }

        data[config]();

      });

    }

  }



  /**

   * Data API implementation

   */



  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {

    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {

      ScrollSpy.getOrCreateInstance(spy);

    }

  });



  /**

   * jQuery

   */



  defineJQueryPlugin(ScrollSpy);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap tab.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME$1 = 'tab';

  const DATA_KEY$1 = 'bs.tab';

  const EVENT_KEY$1 = `.${DATA_KEY$1}`;

  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;

  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;

  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;

  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;

  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;

  const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;

  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;

  const ARROW_LEFT_KEY = 'ArrowLeft';

  const ARROW_RIGHT_KEY = 'ArrowRight';

  const ARROW_UP_KEY = 'ArrowUp';

  const ARROW_DOWN_KEY = 'ArrowDown';

  const HOME_KEY = 'Home';

  const END_KEY = 'End';

  const CLASS_NAME_ACTIVE = 'active';

  const CLASS_NAME_FADE$1 = 'fade';

  const CLASS_NAME_SHOW$1 = 'show';

  const CLASS_DROPDOWN = 'dropdown';

  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';

  const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';

  const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;

  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';

  const SELECTOR_OUTER = '.nav-item, .list-group-item';

  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;

  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6

  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;

  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;



  /**

   * Class definition

   */



  class Tab extends BaseComponent {

    constructor(element) {

      super(element);

      this._parent = this._element.closest(SELECTOR_TAB_PANEL);

      if (!this._parent) {

        return;

        // TODO: should throw exception in v6

        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)

      }



      // Set up initial aria attributes

      this._setInitialAttributes(this._parent, this._getChildren());

      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));

    }



    // Getters

    static get NAME() {

      return NAME$1;

    }



    // Public

    show() {

      // Shows this elem and deactivate the active sibling if exists

      const innerElem = this._element;

      if (this._elemIsActive(innerElem)) {

        return;

      }



      // Search for active tab on same parent to deactivate it

      const active = this._getActiveElem();

      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {

        relatedTarget: innerElem

      }) : null;

      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {

        relatedTarget: active

      });

      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {

        return;

      }

      this._deactivate(active, innerElem);

      this._activate(innerElem, active);

    }



    // Private

    _activate(element, relatedElem) {

      if (!element) {

        return;

      }

      element.classList.add(CLASS_NAME_ACTIVE);

      this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section



      const complete = () => {

        if (element.getAttribute('role') !== 'tab') {

          element.classList.add(CLASS_NAME_SHOW$1);

          return;

        }

        element.removeAttribute('tabindex');

        element.setAttribute('aria-selected', true);

        this._toggleDropDown(element, true);

        EventHandler.trigger(element, EVENT_SHOWN$1, {

          relatedTarget: relatedElem

        });

      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));

    }

    _deactivate(element, relatedElem) {

      if (!element) {

        return;

      }

      element.classList.remove(CLASS_NAME_ACTIVE);

      element.blur();

      this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too



      const complete = () => {

        if (element.getAttribute('role') !== 'tab') {

          element.classList.remove(CLASS_NAME_SHOW$1);

          return;

        }

        element.setAttribute('aria-selected', false);

        element.setAttribute('tabindex', '-1');

        this._toggleDropDown(element, false);

        EventHandler.trigger(element, EVENT_HIDDEN$1, {

          relatedTarget: relatedElem

        });

      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));

    }

    _keydown(event) {

      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {

        return;

      }

      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page

      event.preventDefault();

      const children = this._getChildren().filter(element => !isDisabled(element));

      let nextActiveElement;

      if ([HOME_KEY, END_KEY].includes(event.key)) {

        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];

      } else {

        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);

        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);

      }

      if (nextActiveElement) {

        nextActiveElement.focus({

          preventScroll: true

        });

        Tab.getOrCreateInstance(nextActiveElement).show();

      }

    }

    _getChildren() {

      // collection of inner elements

      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);

    }

    _getActiveElem() {

      return this._getChildren().find(child => this._elemIsActive(child)) || null;

    }

    _setInitialAttributes(parent, children) {

      this._setAttributeIfNotExists(parent, 'role', 'tablist');

      for (const child of children) {

        this._setInitialAttributesOnChild(child);

      }

    }

    _setInitialAttributesOnChild(child) {

      child = this._getInnerElement(child);

      const isActive = this._elemIsActive(child);

      const outerElem = this._getOuterElement(child);

      child.setAttribute('aria-selected', isActive);

      if (outerElem !== child) {

        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');

      }

      if (!isActive) {

        child.setAttribute('tabindex', '-1');

      }

      this._setAttributeIfNotExists(child, 'role', 'tab');



      // set attributes to the related panel too

      this._setInitialAttributesOnTargetPanel(child);

    }

    _setInitialAttributesOnTargetPanel(child) {

      const target = SelectorEngine.getElementFromSelector(child);

      if (!target) {

        return;

      }

      this._setAttributeIfNotExists(target, 'role', 'tabpanel');

      if (child.id) {

        this._setAttributeIfNotExists(target, 'aria-labelledby', `${child.id}`);

      }

    }

    _toggleDropDown(element, open) {

      const outerElem = this._getOuterElement(element);

      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {

        return;

      }

      const toggle = (selector, className) => {

        const element = SelectorEngine.findOne(selector, outerElem);

        if (element) {

          element.classList.toggle(className, open);

        }

      };

      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);

      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);

      outerElem.setAttribute('aria-expanded', open);

    }

    _setAttributeIfNotExists(element, attribute, value) {

      if (!element.hasAttribute(attribute)) {

        element.setAttribute(attribute, value);

      }

    }

    _elemIsActive(elem) {

      return elem.classList.contains(CLASS_NAME_ACTIVE);

    }



    // Try to get the inner element (usually the .nav-link)

    _getInnerElement(elem) {

      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);

    }



    // Try to get the outer element (usually the .nav-item)

    _getOuterElement(elem) {

      return elem.closest(SELECTOR_OUTER) || elem;

    }



    // Static

    static jQueryInterface(config) {

      return this.each(function () {

        const data = Tab.getOrCreateInstance(this);

        if (typeof config !== 'string') {

          return;

        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {

          throw new TypeError(`No method named "${config}"`);

        }

        data[config]();

      });

    }

  }



  /**

   * Data API implementation

   */



  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {

    if (['A', 'AREA'].includes(this.tagName)) {

      event.preventDefault();

    }

    if (isDisabled(this)) {

      return;

    }

    Tab.getOrCreateInstance(this).show();

  });



  /**

   * Initialize on focus

   */

  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {

    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {

      Tab.getOrCreateInstance(element);

    }

  });

  /**

   * jQuery

   */



  defineJQueryPlugin(Tab);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap toast.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */





  /**

   * Constants

   */



  const NAME = 'toast';

  const DATA_KEY = 'bs.toast';

  const EVENT_KEY = `.${DATA_KEY}`;

  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;

  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;

  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;

  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;

  const EVENT_HIDE = `hide${EVENT_KEY}`;

  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;

  const EVENT_SHOW = `show${EVENT_KEY}`;

  const EVENT_SHOWN = `shown${EVENT_KEY}`;

  const CLASS_NAME_FADE = 'fade';

  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

  const CLASS_NAME_SHOW = 'show';

  const CLASS_NAME_SHOWING = 'showing';

  const DefaultType = {

    animation: 'boolean',

    autohide: 'boolean',

    delay: 'number'

  };

  const Default = {

    animation: true,

    autohide: true,

    delay: 5000

  };



  /**

   * Class definition

   */



  class Toast extends BaseComponent {

    constructor(element, config) {

      super(element, config);

      this._timeout = null;

      this._hasMouseInteraction = false;

      this._hasKeyboardInteraction = false;

      this._setListeners();

    }



    // Getters

    static get Default() {

      return Default;

    }

    static get DefaultType() {

      return DefaultType;

    }

    static get NAME() {

      return NAME;

    }



    // Public

    show() {

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {

        return;

      }

      this._clearTimeout();

      if (this._config.animation) {

        this._element.classList.add(CLASS_NAME_FADE);

      }

      const complete = () => {

        this._element.classList.remove(CLASS_NAME_SHOWING);

        EventHandler.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();

      };

      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated

      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);

    }

    hide() {

      if (!this.isShown()) {

        return;

      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {

        return;

      }

      const complete = () => {

        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated

        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);

        EventHandler.trigger(this._element, EVENT_HIDDEN);

      };

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);

    }

    dispose() {

      this._clearTimeout();

      if (this.isShown()) {

        this._element.classList.remove(CLASS_NAME_SHOW);

      }

      super.dispose();

    }

    isShown() {

      return this._element.classList.contains(CLASS_NAME_SHOW);

    }



    // Private

    _maybeScheduleHide() {

      if (!this._config.autohide) {

        return;

      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {

        return;

      }

      this._timeout = setTimeout(() => {

        this.hide();

      }, this._config.delay);

    }

    _onInteraction(event, isInteracting) {

      switch (event.type) {

        case 'mouseover':

        case 'mouseout':

          {

            this._hasMouseInteraction = isInteracting;

            break;

          }

        case 'focusin':

        case 'focusout':

          {

            this._hasKeyboardInteraction = isInteracting;

            break;

          }

      }

      if (isInteracting) {

        this._clearTimeout();

        return;

      }

      const nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {

        return;

      }

      this._maybeScheduleHide();

    }

    _setListeners() {

      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));

      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));

      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));

      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));

    }

    _clearTimeout() {

      clearTimeout(this._timeout);

      this._timeout = null;

    }



    // Static

    static jQueryInterface(config) {

      return this.each(function () {

        const data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {

          if (typeof data[config] === 'undefined') {

            throw new TypeError(`No method named "${config}"`);

          }

          data[config](this);

        }

      });

    }

  }



  /**

   * Data API implementation

   */



  enableDismissTrigger(Toast);



  /**

   * jQuery

   */



  defineJQueryPlugin(Toast);



  /**

   * --------------------------------------------------------------------------

   * Bootstrap index.umd.js

   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)

   * --------------------------------------------------------------------------

   */



  const index_umd = {

    Alert,

    Button,

    Carousel,

    Collapse,

    Dropdown,

    Modal,

    Offcanvas,

    Popover,

    ScrollSpy,

    Tab,

    Toast,

    Tooltip

  };



  return index_umd;



}));

//# sourceMappingURL=bootstrap.bundle.js.map



/**

 * Swiper 11.2.10

 * Most modern mobile touch slider and framework with hardware accelerated transitions

 * https://swiperjs.com

 *

 * Copyright 2014-2025 Vladimir Kharlampidi

 *

 * Released under the MIT License

 *

 * Released on: June 28, 2025

 */



var Swiper = (function () {

  'use strict';



  /**

   * SSR Window 5.0.1

   * Better handling for window object in SSR environment

   * https://github.com/nolimits4web/ssr-window

   *

   * Copyright 2025, Vladimir Kharlampidi

   *

   * Licensed under MIT

   *

   * Released on: June 27, 2025

   */

  /* eslint-disable no-param-reassign */

  function isObject$1(obj) {

    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;

  }

  function extend$1(target, src) {

    if (target === void 0) {

      target = {};

    }

    if (src === void 0) {

      src = {};

    }

    const noExtend = ['__proto__', 'constructor', 'prototype'];

    Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {

      if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {

        extend$1(target[key], src[key]);

      }

    });

  }

  const ssrDocument = {

    body: {},

    addEventListener() {},

    removeEventListener() {},

    activeElement: {

      blur() {},

      nodeName: ''

    },

    querySelector() {

      return null;

    },

    querySelectorAll() {

      return [];

    },

    getElementById() {

      return null;

    },

    createEvent() {

      return {

        initEvent() {}

      };

    },

    createElement() {

      return {

        children: [],

        childNodes: [],

        style: {},

        setAttribute() {},

        getElementsByTagName() {

          return [];

        }

      };

    },

    createElementNS() {

      return {};

    },

    importNode() {

      return null;

    },

    location: {

      hash: '',

      host: '',

      hostname: '',

      href: '',

      origin: '',

      pathname: '',

      protocol: '',

      search: ''

    }

  };

  function getDocument() {

    const doc = typeof document !== 'undefined' ? document : {};

    extend$1(doc, ssrDocument);

    return doc;

  }

  const ssrWindow = {

    document: ssrDocument,

    navigator: {

      userAgent: ''

    },

    location: {

      hash: '',

      host: '',

      hostname: '',

      href: '',

      origin: '',

      pathname: '',

      protocol: '',

      search: ''

    },

    history: {

      replaceState() {},

      pushState() {},

      go() {},

      back() {}

    },

    CustomEvent: function CustomEvent() {

      return this;

    },

    addEventListener() {},

    removeEventListener() {},

    getComputedStyle() {

      return {

        getPropertyValue() {

          return '';

        }

      };

    },

    Image() {},

    Date() {},

    screen: {},

    setTimeout() {},

    clearTimeout() {},

    matchMedia() {

      return {};

    },

    requestAnimationFrame(callback) {

      if (typeof setTimeout === 'undefined') {

        callback();

        return null;

      }

      return setTimeout(callback, 0);

    },

    cancelAnimationFrame(id) {

      if (typeof setTimeout === 'undefined') {

        return;

      }

      clearTimeout(id);

    }

  };

  function getWindow() {

    const win = typeof window !== 'undefined' ? window : {};

    extend$1(win, ssrWindow);

    return win;

  }



  function classesToTokens(classes) {

    if (classes === void 0) {

      classes = '';

    }

    return classes.trim().split(' ').filter(c => !!c.trim());

  }



  function deleteProps(obj) {

    const object = obj;

    Object.keys(object).forEach(key => {

      try {

        object[key] = null;

      } catch (e) {

        // no getter for object

      }

      try {

        delete object[key];

      } catch (e) {

        // something got wrong

      }

    });

  }

  function nextTick(callback, delay) {

    if (delay === void 0) {

      delay = 0;

    }

    return setTimeout(callback, delay);

  }

  function now() {

    return Date.now();

  }

  function getComputedStyle$1(el) {

    const window = getWindow();

    let style;

    if (window.getComputedStyle) {

      style = window.getComputedStyle(el, null);

    }

    if (!style && el.currentStyle) {

      style = el.currentStyle;

    }

    if (!style) {

      style = el.style;

    }

    return style;

  }

  function getTranslate(el, axis) {

    if (axis === void 0) {

      axis = 'x';

    }

    const window = getWindow();

    let matrix;

    let curTransform;

    let transformMatrix;

    const curStyle = getComputedStyle$1(el);

    if (window.WebKitCSSMatrix) {

      curTransform = curStyle.transform || curStyle.webkitTransform;

      if (curTransform.split(',').length > 6) {

        curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');

      }

      // Some old versions of Webkit choke when 'none' is passed; pass

      // empty string instead in this case

      transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);

    } else {

      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');

      matrix = transformMatrix.toString().split(',');

    }

    if (axis === 'x') {

      // Latest Chrome and webkits Fix

      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;

      // Crazy IE10 Matrix

      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);

      // Normal Browsers

      else curTransform = parseFloat(matrix[4]);

    }

    if (axis === 'y') {

      // Latest Chrome and webkits Fix

      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;

      // Crazy IE10 Matrix

      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);

      // Normal Browsers

      else curTransform = parseFloat(matrix[5]);

    }

    return curTransform || 0;

  }

  function isObject(o) {

    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';

  }

  function isNode(node) {

    // eslint-disable-next-line

    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {

      return node instanceof HTMLElement;

    }

    return node && (node.nodeType === 1 || node.nodeType === 11);

  }

  function extend() {

    const to = Object(arguments.length <= 0 ? undefined : arguments[0]);

    const noExtend = ['__proto__', 'constructor', 'prototype'];

    for (let i = 1; i < arguments.length; i += 1) {

      const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

      if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {

        const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {

          const nextKey = keysArray[nextIndex];

          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {

            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {

              if (nextSource[nextKey].__swiper__) {

                to[nextKey] = nextSource[nextKey];

              } else {

                extend(to[nextKey], nextSource[nextKey]);

              }

            } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {

              to[nextKey] = {};

              if (nextSource[nextKey].__swiper__) {

                to[nextKey] = nextSource[nextKey];

              } else {

                extend(to[nextKey], nextSource[nextKey]);

              }

            } else {

              to[nextKey] = nextSource[nextKey];

            }

          }

        }

      }

    }

    return to;

  }

  function setCSSProperty(el, varName, varValue) {

    el.style.setProperty(varName, varValue);

  }

  function animateCSSModeScroll(_ref) {

    let {

      swiper,

      targetPosition,

      side

    } = _ref;

    const window = getWindow();

    const startPosition = -swiper.translate;

    let startTime = null;

    let time;

    const duration = swiper.params.speed;

    swiper.wrapperEl.style.scrollSnapType = 'none';

    window.cancelAnimationFrame(swiper.cssModeFrameID);

    const dir = targetPosition > startPosition ? 'next' : 'prev';

    const isOutOfBound = (current, target) => {

      return dir === 'next' && current >= target || dir === 'prev' && current <= target;

    };

    const animate = () => {

      time = new Date().getTime();

      if (startTime === null) {

        startTime = time;

      }

      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);

      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;

      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

      if (isOutOfBound(currentPosition, targetPosition)) {

        currentPosition = targetPosition;

      }

      swiper.wrapperEl.scrollTo({

        [side]: currentPosition

      });

      if (isOutOfBound(currentPosition, targetPosition)) {

        swiper.wrapperEl.style.overflow = 'hidden';

        swiper.wrapperEl.style.scrollSnapType = '';

        setTimeout(() => {

          swiper.wrapperEl.style.overflow = '';

          swiper.wrapperEl.scrollTo({

            [side]: currentPosition

          });

        });

        window.cancelAnimationFrame(swiper.cssModeFrameID);

        return;

      }

      swiper.cssModeFrameID = window.requestAnimationFrame(animate);

    };

    animate();

  }

  function getSlideTransformEl(slideEl) {

    return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;

  }

  function elementChildren(element, selector) {

    if (selector === void 0) {

      selector = '';

    }

    const window = getWindow();

    const children = [...element.children];

    if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {

      children.push(...element.assignedElements());

    }

    if (!selector) {

      return children;

    }

    return children.filter(el => el.matches(selector));

  }

  function elementIsChildOfSlot(el, slot) {

    // Breadth-first search through all parent's children and assigned elements

    const elementsQueue = [slot];

    while (elementsQueue.length > 0) {

      const elementToCheck = elementsQueue.shift();

      if (el === elementToCheck) {

        return true;

      }

      elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : []), ...(elementToCheck.assignedElements ? elementToCheck.assignedElements() : []));

    }

  }

  function elementIsChildOf(el, parent) {

    const window = getWindow();

    let isChild = parent.contains(el);

    if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {

      const children = [...parent.assignedElements()];

      isChild = children.includes(el);

      if (!isChild) {

        isChild = elementIsChildOfSlot(el, parent);

      }

    }

    return isChild;

  }

  function showWarning(text) {

    try {

      console.warn(text);

      return;

    } catch (err) {

      // err

    }

  }

  function createElement(tag, classes) {

    if (classes === void 0) {

      classes = [];

    }

    const el = document.createElement(tag);

    el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));

    return el;

  }

  function elementOffset(el) {

    const window = getWindow();

    const document = getDocument();

    const box = el.getBoundingClientRect();

    const body = document.body;

    const clientTop = el.clientTop || body.clientTop || 0;

    const clientLeft = el.clientLeft || body.clientLeft || 0;

    const scrollTop = el === window ? window.scrollY : el.scrollTop;

    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;

    return {

      top: box.top + scrollTop - clientTop,

      left: box.left + scrollLeft - clientLeft

    };

  }

  function elementPrevAll(el, selector) {

    const prevEls = [];

    while (el.previousElementSibling) {

      const prev = el.previousElementSibling; // eslint-disable-line

      if (selector) {

        if (prev.matches(selector)) prevEls.push(prev);

      } else prevEls.push(prev);

      el = prev;

    }

    return prevEls;

  }

  function elementNextAll(el, selector) {

    const nextEls = [];

    while (el.nextElementSibling) {

      const next = el.nextElementSibling; // eslint-disable-line

      if (selector) {

        if (next.matches(selector)) nextEls.push(next);

      } else nextEls.push(next);

      el = next;

    }

    return nextEls;

  }

  function elementStyle(el, prop) {

    const window = getWindow();

    return window.getComputedStyle(el, null).getPropertyValue(prop);

  }

  function elementIndex(el) {

    let child = el;

    let i;

    if (child) {

      i = 0;

      // eslint-disable-next-line

      while ((child = child.previousSibling) !== null) {

        if (child.nodeType === 1) i += 1;

      }

      return i;

    }

    return undefined;

  }

  function elementParents(el, selector) {

    const parents = []; // eslint-disable-line

    let parent = el.parentElement; // eslint-disable-line

    while (parent) {

      if (selector) {

        if (parent.matches(selector)) parents.push(parent);

      } else {

        parents.push(parent);

      }

      parent = parent.parentElement;

    }

    return parents;

  }

  function elementTransitionEnd(el, callback) {

    function fireCallBack(e) {

      if (e.target !== el) return;

      callback.call(el, e);

      el.removeEventListener('transitionend', fireCallBack);

    }

    if (callback) {

      el.addEventListener('transitionend', fireCallBack);

    }

  }

  function elementOuterSize(el, size, includeMargins) {

    const window = getWindow();

    if (includeMargins) {

      return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));

    }

    return el.offsetWidth;

  }

  function makeElementsArray(el) {

    return (Array.isArray(el) ? el : [el]).filter(e => !!e);

  }

  function getRotateFix(swiper) {

    return v => {

      if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {

        return v + 0.001;

      }

      return v;

    };

  }

  function setInnerHTML(el, html) {

    if (html === void 0) {

      html = '';

    }

    if (typeof trustedTypes !== 'undefined') {

      el.innerHTML = trustedTypes.createPolicy('html', {

        createHTML: s => s

      }).createHTML(html);

    } else {

      el.innerHTML = html;

    }

  }



  let support;

  function calcSupport() {

    const window = getWindow();

    const document = getDocument();

    return {

      smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,

      touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)

    };

  }

  function getSupport() {

    if (!support) {

      support = calcSupport();

    }

    return support;

  }



  let deviceCached;

  function calcDevice(_temp) {

    let {

      userAgent

    } = _temp === void 0 ? {} : _temp;

    const support = getSupport();

    const window = getWindow();

    const platform = window.navigator.platform;

    const ua = userAgent || window.navigator.userAgent;

    const device = {

      ios: false,

      android: false

    };

    const screenWidth = window.screen.width;

    const screenHeight = window.screen.height;

    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);

    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);

    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

    const windows = platform === 'Win32';

    let macos = platform === 'MacIntel';



    // iPadOs 13 fix

    const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {

      ipad = ua.match(/(Version)\/([\d.]+)/);

      if (!ipad) ipad = [0, 1, '13_0_0'];

      macos = false;

    }



    // Android

    if (android && !windows) {

      device.os = 'android';

      device.android = true;

    }

    if (ipad || iphone || ipod) {

      device.os = 'ios';

      device.ios = true;

    }



    // Export object

    return device;

  }

  function getDevice(overrides) {

    if (overrides === void 0) {

      overrides = {};

    }

    if (!deviceCached) {

      deviceCached = calcDevice(overrides);

    }

    return deviceCached;

  }



  let browser;

  function calcBrowser() {

    const window = getWindow();

    const device = getDevice();

    let needPerspectiveFix = false;

    function isSafari() {

      const ua = window.navigator.userAgent.toLowerCase();

      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;

    }

    if (isSafari()) {

      const ua = String(window.navigator.userAgent);

      if (ua.includes('Version/')) {

        const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));

        needPerspectiveFix = major < 16 || major === 16 && minor < 2;

      }

    }

    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);

    const isSafariBrowser = isSafari();

    const need3dFix = isSafariBrowser || isWebView && device.ios;

    return {

      isSafari: needPerspectiveFix || isSafariBrowser,

      needPerspectiveFix,

      need3dFix,

      isWebView

    };

  }

  function getBrowser() {

    if (!browser) {

      browser = calcBrowser();

    }

    return browser;

  }



  function Resize(_ref) {

    let {

      swiper,

      on,

      emit

    } = _ref;

    const window = getWindow();

    let observer = null;

    let animationFrame = null;

    const resizeHandler = () => {

      if (!swiper || swiper.destroyed || !swiper.initialized) return;

      emit('beforeResize');

      emit('resize');

    };

    const createObserver = () => {

      if (!swiper || swiper.destroyed || !swiper.initialized) return;

      observer = new ResizeObserver(entries => {

        animationFrame = window.requestAnimationFrame(() => {

          const {

            width,

            height

          } = swiper;

          let newWidth = width;

          let newHeight = height;

          entries.forEach(_ref2 => {

            let {

              contentBoxSize,

              contentRect,

              target

            } = _ref2;

            if (target && target !== swiper.el) return;

            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;

            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;

          });

          if (newWidth !== width || newHeight !== height) {

            resizeHandler();

          }

        });

      });

      observer.observe(swiper.el);

    };

    const removeObserver = () => {

      if (animationFrame) {

        window.cancelAnimationFrame(animationFrame);

      }

      if (observer && observer.unobserve && swiper.el) {

        observer.unobserve(swiper.el);

        observer = null;

      }

    };

    const orientationChangeHandler = () => {

      if (!swiper || swiper.destroyed || !swiper.initialized) return;

      emit('orientationchange');

    };

    on('init', () => {

      if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {

        createObserver();

        return;

      }

      window.addEventListener('resize', resizeHandler);

      window.addEventListener('orientationchange', orientationChangeHandler);

    });

    on('destroy', () => {

      removeObserver();

      window.removeEventListener('resize', resizeHandler);

      window.removeEventListener('orientationchange', orientationChangeHandler);

    });

  }



  function Observer(_ref) {

    let {

      swiper,

      extendParams,

      on,

      emit

    } = _ref;

    const observers = [];

    const window = getWindow();

    const attach = function (target, options) {

      if (options === void 0) {

        options = {};

      }

      const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;

      const observer = new ObserverFunc(mutations => {

        // The observerUpdate event should only be triggered

        // once despite the number of mutations.  Additional

        // triggers are redundant and are very costly

        if (swiper.__preventObserver__) return;

        if (mutations.length === 1) {

          emit('observerUpdate', mutations[0]);

          return;

        }

        const observerUpdate = function observerUpdate() {

          emit('observerUpdate', mutations[0]);

        };

        if (window.requestAnimationFrame) {

          window.requestAnimationFrame(observerUpdate);

        } else {

          window.setTimeout(observerUpdate, 0);

        }

      });

      observer.observe(target, {

        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,

        childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,

        characterData: typeof options.characterData === 'undefined' ? true : options.characterData

      });

      observers.push(observer);

    };

    const init = () => {

      if (!swiper.params.observer) return;

      if (swiper.params.observeParents) {

        const containerParents = elementParents(swiper.hostEl);

        for (let i = 0; i < containerParents.length; i += 1) {

          attach(containerParents[i]);

        }

      }

      // Observe container

      attach(swiper.hostEl, {

        childList: swiper.params.observeSlideChildren

      });



      // Observe wrapper

      attach(swiper.wrapperEl, {

        attributes: false

      });

    };

    const destroy = () => {

      observers.forEach(observer => {

        observer.disconnect();

      });

      observers.splice(0, observers.length);

    };

    extendParams({

      observer: false,

      observeParents: false,

      observeSlideChildren: false

    });

    on('init', init);

    on('destroy', destroy);

  }



  /* eslint-disable no-underscore-dangle */



  var eventsEmitter = {

    on(events, handler, priority) {

      const self = this;

      if (!self.eventsListeners || self.destroyed) return self;

      if (typeof handler !== 'function') return self;

      const method = priority ? 'unshift' : 'push';

      events.split(' ').forEach(event => {

        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];

        self.eventsListeners[event][method](handler);

      });

      return self;

    },

    once(events, handler, priority) {

      const self = this;

      if (!self.eventsListeners || self.destroyed) return self;

      if (typeof handler !== 'function') return self;

      function onceHandler() {

        self.off(events, onceHandler);

        if (onceHandler.__emitterProxy) {

          delete onceHandler.__emitterProxy;

        }

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {

          args[_key] = arguments[_key];

        }

        handler.apply(self, args);

      }

      onceHandler.__emitterProxy = handler;

      return self.on(events, onceHandler, priority);

    },

    onAny(handler, priority) {

      const self = this;

      if (!self.eventsListeners || self.destroyed) return self;

      if (typeof handler !== 'function') return self;

      const method = priority ? 'unshift' : 'push';

      if (self.eventsAnyListeners.indexOf(handler) < 0) {

        self.eventsAnyListeners[method](handler);

      }

      return self;

    },

    offAny(handler) {

      const self = this;

      if (!self.eventsListeners || self.destroyed) return self;

      if (!self.eventsAnyListeners) return self;

      const index = self.eventsAnyListeners.indexOf(handler);

      if (index >= 0) {

        self.eventsAnyListeners.splice(index, 1);

      }

      return self;

    },

    off(events, handler) {

      const self = this;

      if (!self.eventsListeners || self.destroyed) return self;

      if (!self.eventsListeners) return self;

      events.split(' ').forEach(event => {

        if (typeof handler === 'undefined') {

          self.eventsListeners[event] = [];

        } else if (self.eventsListeners[event]) {

          self.eventsListeners[event].forEach((eventHandler, index) => {

            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {

              self.eventsListeners[event].splice(index, 1);

            }

          });

        }

      });

      return self;

    },

    emit() {

      const self = this;

      if (!self.eventsListeners || self.destroyed) return self;

      if (!self.eventsListeners) return self;

      let events;

      let data;

      let context;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {

        args[_key2] = arguments[_key2];

      }

      if (typeof args[0] === 'string' || Array.isArray(args[0])) {

        events = args[0];

        data = args.slice(1, args.length);

        context = self;

      } else {

        events = args[0].events;

        data = args[0].data;

        context = args[0].context || self;

      }

      data.unshift(context);

      const eventsArray = Array.isArray(events) ? events : events.split(' ');

      eventsArray.forEach(event => {

        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {

          self.eventsAnyListeners.forEach(eventHandler => {

            eventHandler.apply(context, [event, ...data]);

          });

        }

        if (self.eventsListeners && self.eventsListeners[event]) {

          self.eventsListeners[event].forEach(eventHandler => {

            eventHandler.apply(context, data);

          });

        }

      });

      return self;

    }

  };



  function updateSize() {

    const swiper = this;

    let width;

    let height;

    const el = swiper.el;

    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {

      width = swiper.params.width;

    } else {

      width = el.clientWidth;

    }

    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {

      height = swiper.params.height;

    } else {

      height = el.clientHeight;

    }

    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {

      return;

    }



    // Subtract paddings

    width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);

    height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);

    if (Number.isNaN(width)) width = 0;

    if (Number.isNaN(height)) height = 0;

    Object.assign(swiper, {

      width,

      height,

      size: swiper.isHorizontal() ? width : height

    });

  }



  function updateSlides() {

    const swiper = this;

    function getDirectionPropertyValue(node, label) {

      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);

    }

    const params = swiper.params;

    const {

      wrapperEl,

      slidesEl,

      size: swiperSize,

      rtlTranslate: rtl,

      wrongRTL

    } = swiper;

    const isVirtual = swiper.virtual && params.virtual.enabled;

    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;

    const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);

    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;

    let snapGrid = [];

    const slidesGrid = [];

    const slidesSizesGrid = [];

    let offsetBefore = params.slidesOffsetBefore;

    if (typeof offsetBefore === 'function') {

      offsetBefore = params.slidesOffsetBefore.call(swiper);

    }

    let offsetAfter = params.slidesOffsetAfter;

    if (typeof offsetAfter === 'function') {

      offsetAfter = params.slidesOffsetAfter.call(swiper);

    }

    const previousSnapGridLength = swiper.snapGrid.length;

    const previousSlidesGridLength = swiper.slidesGrid.length;

    let spaceBetween = params.spaceBetween;

    let slidePosition = -offsetBefore;

    let prevSlideSize = 0;

    let index = 0;

    if (typeof swiperSize === 'undefined') {

      return;

    }

    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {

      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;

    } else if (typeof spaceBetween === 'string') {

      spaceBetween = parseFloat(spaceBetween);

    }

    swiper.virtualSize = -spaceBetween;



    // reset margins

    slides.forEach(slideEl => {

      if (rtl) {

        slideEl.style.marginLeft = '';

      } else {

        slideEl.style.marginRight = '';

      }

      slideEl.style.marginBottom = '';

      slideEl.style.marginTop = '';

    });



    // reset cssMode offsets

    if (params.centeredSlides && params.cssMode) {

      setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');

      setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');

    }

    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

    if (gridEnabled) {

      swiper.grid.initSlides(slides);

    } else if (swiper.grid) {

      swiper.grid.unsetSlides();

    }



    // Calc slides

    let slideSize;

    const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {

      return typeof params.breakpoints[key].slidesPerView !== 'undefined';

    }).length > 0;

    for (let i = 0; i < slidesLength; i += 1) {

      slideSize = 0;

      let slide;

      if (slides[i]) slide = slides[i];

      if (gridEnabled) {

        swiper.grid.updateSlide(i, slide, slides);

      }

      if (slides[i] && elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line



      if (params.slidesPerView === 'auto') {

        if (shouldResetSlideSize) {

          slides[i].style[swiper.getDirectionLabel('width')] = ``;

        }

        const slideStyles = getComputedStyle(slide);

        const currentTransform = slide.style.transform;

        const currentWebKitTransform = slide.style.webkitTransform;

        if (currentTransform) {

          slide.style.transform = 'none';

        }

        if (currentWebKitTransform) {

          slide.style.webkitTransform = 'none';

        }

        if (params.roundLengths) {

          slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);

        } else {

          // eslint-disable-next-line

          const width = getDirectionPropertyValue(slideStyles, 'width');

          const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');

          const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');

          const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');

          const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');

          const boxSizing = slideStyles.getPropertyValue('box-sizing');

          if (boxSizing && boxSizing === 'border-box') {

            slideSize = width + marginLeft + marginRight;

          } else {

            const {

              clientWidth,

              offsetWidth

            } = slide;

            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);

          }

        }

        if (currentTransform) {

          slide.style.transform = currentTransform;

        }

        if (currentWebKitTransform) {

          slide.style.webkitTransform = currentWebKitTransform;

        }

        if (params.roundLengths) slideSize = Math.floor(slideSize);

      } else {

        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;

        if (params.roundLengths) slideSize = Math.floor(slideSize);

        if (slides[i]) {

          slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;

        }

      }

      if (slides[i]) {

        slides[i].swiperSlideSize = slideSize;

      }

      slidesSizesGrid.push(slideSize);

      if (params.centeredSlides) {

        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;

        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;

        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;

        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;

        if (params.roundLengths) slidePosition = Math.floor(slidePosition);

        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);

        slidesGrid.push(slidePosition);

      } else {

        if (params.roundLengths) slidePosition = Math.floor(slidePosition);

        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);

        slidesGrid.push(slidePosition);

        slidePosition = slidePosition + slideSize + spaceBetween;

      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;

    }

    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {

      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;

    }

    if (params.setWrapperSize) {

      wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;

    }

    if (gridEnabled) {

      swiper.grid.updateWrapperSize(slideSize, snapGrid);

    }



    // Remove last grid elements depending on width

    if (!params.centeredSlides) {

      const newSlidesGrid = [];

      for (let i = 0; i < snapGrid.length; i += 1) {

        let slidesGridItem = snapGrid[i];

        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {

          newSlidesGrid.push(slidesGridItem);

        }

      }

      snapGrid = newSlidesGrid;

      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {

        snapGrid.push(swiper.virtualSize - swiperSize);

      }

    }

    if (isVirtual && params.loop) {

      const size = slidesSizesGrid[0] + spaceBetween;

      if (params.slidesPerGroup > 1) {

        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);

        const groupSize = size * params.slidesPerGroup;

        for (let i = 0; i < groups; i += 1) {

          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);

        }

      }

      for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {

        if (params.slidesPerGroup === 1) {

          snapGrid.push(snapGrid[snapGrid.length - 1] + size);

        }

        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);

        swiper.virtualSize += size;

      }

    }

    if (snapGrid.length === 0) snapGrid = [0];

    if (spaceBetween !== 0) {

      const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');

      slides.filter((_, slideIndex) => {

        if (!params.cssMode || params.loop) return true;

        if (slideIndex === slides.length - 1) {

          return false;

        }

        return true;

      }).forEach(slideEl => {

        slideEl.style[key] = `${spaceBetween}px`;

      });

    }

    if (params.centeredSlides && params.centeredSlidesBounds) {

      let allSlidesSize = 0;

      slidesSizesGrid.forEach(slideSizeValue => {

        allSlidesSize += slideSizeValue + (spaceBetween || 0);

      });

      allSlidesSize -= spaceBetween;

      const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;

      snapGrid = snapGrid.map(snap => {

        if (snap <= 0) return -offsetBefore;

        if (snap > maxSnap) return maxSnap + offsetAfter;

        return snap;

      });

    }

    if (params.centerInsufficientSlides) {

      let allSlidesSize = 0;

      slidesSizesGrid.forEach(slideSizeValue => {

        allSlidesSize += slideSizeValue + (spaceBetween || 0);

      });

      allSlidesSize -= spaceBetween;

      const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);

      if (allSlidesSize + offsetSize < swiperSize) {

        const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;

        snapGrid.forEach((snap, snapIndex) => {

          snapGrid[snapIndex] = snap - allSlidesOffset;

        });

        slidesGrid.forEach((snap, snapIndex) => {

          slidesGrid[snapIndex] = snap + allSlidesOffset;

        });

      }

    }

    Object.assign(swiper, {

      slides,

      snapGrid,

      slidesGrid,

      slidesSizesGrid

    });

    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {

      setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);

      setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);

      const addToSnapGrid = -swiper.snapGrid[0];

      const addToSlidesGrid = -swiper.slidesGrid[0];

      swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);

      swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);

    }

    if (slidesLength !== previousSlidesLength) {

      swiper.emit('slidesLengthChange');

    }

    if (snapGrid.length !== previousSnapGridLength) {

      if (swiper.params.watchOverflow) swiper.checkOverflow();

      swiper.emit('snapGridLengthChange');

    }

    if (slidesGrid.length !== previousSlidesGridLength) {

      swiper.emit('slidesGridLengthChange');

    }

    if (params.watchSlidesProgress) {

      swiper.updateSlidesOffset();

    }

    swiper.emit('slidesUpdated');

    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {

      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;

      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);

      if (slidesLength <= params.maxBackfaceHiddenSlides) {

        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);

      } else if (hasClassBackfaceClassAdded) {

        swiper.el.classList.remove(backFaceHiddenClass);

      }

    }

  }



  function updateAutoHeight(speed) {

    const swiper = this;

    const activeSlides = [];

    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    let newHeight = 0;

    let i;

    if (typeof speed === 'number') {

      swiper.setTransition(speed);

    } else if (speed === true) {

      swiper.setTransition(swiper.params.speed);

    }

    const getSlideByIndex = index => {

      if (isVirtual) {

        return swiper.slides[swiper.getSlideIndexByData(index)];

      }

      return swiper.slides[index];

    };

    // Find slides currently in view

    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {

      if (swiper.params.centeredSlides) {

        (swiper.visibleSlides || []).forEach(slide => {

          activeSlides.push(slide);

        });

      } else {

        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {

          const index = swiper.activeIndex + i;

          if (index > swiper.slides.length && !isVirtual) break;

          activeSlides.push(getSlideByIndex(index));

        }

      }

    } else {

      activeSlides.push(getSlideByIndex(swiper.activeIndex));

    }



    // Find new height from highest slide in view

    for (i = 0; i < activeSlides.length; i += 1) {

      if (typeof activeSlides[i] !== 'undefined') {

        const height = activeSlides[i].offsetHeight;

        newHeight = height > newHeight ? height : newHeight;

      }

    }



    // Update Height

    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;

  }



  function updateSlidesOffset() {

    const swiper = this;

    const slides = swiper.slides;

    // eslint-disable-next-line

    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;

    for (let i = 0; i < slides.length; i += 1) {

      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();

    }

  }



  const toggleSlideClasses$1 = (slideEl, condition, className) => {

    if (condition && !slideEl.classList.contains(className)) {

      slideEl.classList.add(className);

    } else if (!condition && slideEl.classList.contains(className)) {

      slideEl.classList.remove(className);

    }

  };

  function updateSlidesProgress(translate) {

    if (translate === void 0) {

      translate = this && this.translate || 0;

    }

    const swiper = this;

    const params = swiper.params;

    const {

      slides,

      rtlTranslate: rtl,

      snapGrid

    } = swiper;

    if (slides.length === 0) return;

    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();

    let offsetCenter = -translate;

    if (rtl) offsetCenter = translate;

    swiper.visibleSlidesIndexes = [];

    swiper.visibleSlides = [];

    let spaceBetween = params.spaceBetween;

    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {

      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;

    } else if (typeof spaceBetween === 'string') {

      spaceBetween = parseFloat(spaceBetween);

    }

    for (let i = 0; i < slides.length; i += 1) {

      const slide = slides[i];

      let slideOffset = slide.swiperSlideOffset;

      if (params.cssMode && params.centeredSlides) {

        slideOffset -= slides[0].swiperSlideOffset;

      }

      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);

      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);

      const slideBefore = -(offsetCenter - slideOffset);

      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];

      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];

      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {

        swiper.visibleSlides.push(slide);

        swiper.visibleSlidesIndexes.push(i);

      }

      toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);

      toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);

      slide.progress = rtl ? -slideProgress : slideProgress;

      slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;

    }

  }



  function updateProgress(translate) {

    const swiper = this;

    if (typeof translate === 'undefined') {

      const multiplier = swiper.rtlTranslate ? -1 : 1;

      // eslint-disable-next-line

      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;

    }

    const params = swiper.params;

    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    let {

      progress,

      isBeginning,

      isEnd,

      progressLoop

    } = swiper;

    const wasBeginning = isBeginning;

    const wasEnd = isEnd;

    if (translatesDiff === 0) {

      progress = 0;

      isBeginning = true;

      isEnd = true;

    } else {

      progress = (translate - swiper.minTranslate()) / translatesDiff;

      const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;

      const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;

      isBeginning = isBeginningRounded || progress <= 0;

      isEnd = isEndRounded || progress >= 1;

      if (isBeginningRounded) progress = 0;

      if (isEndRounded) progress = 1;

    }

    if (params.loop) {

      const firstSlideIndex = swiper.getSlideIndexByData(0);

      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);

      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];

      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];

      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];

      const translateAbs = Math.abs(translate);

      if (translateAbs >= firstSlideTranslate) {

        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;

      } else {

        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;

      }

      if (progressLoop > 1) progressLoop -= 1;

    }

    Object.assign(swiper, {

      progress,

      progressLoop,

      isBeginning,

      isEnd

    });

    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

    if (isBeginning && !wasBeginning) {

      swiper.emit('reachBeginning toEdge');

    }

    if (isEnd && !wasEnd) {

      swiper.emit('reachEnd toEdge');

    }

    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {

      swiper.emit('fromEdge');

    }

    swiper.emit('progress', progress);

  }



  const toggleSlideClasses = (slideEl, condition, className) => {

    if (condition && !slideEl.classList.contains(className)) {

      slideEl.classList.add(className);

    } else if (!condition && slideEl.classList.contains(className)) {

      slideEl.classList.remove(className);

    }

  };

  function updateSlidesClasses() {

    const swiper = this;

    const {

      slides,

      params,

      slidesEl,

      activeIndex

    } = swiper;

    const isVirtual = swiper.virtual && params.virtual.enabled;

    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

    const getFilteredSlide = selector => {

      return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];

    };

    let activeSlide;

    let prevSlide;

    let nextSlide;

    if (isVirtual) {

      if (params.loop) {

        let slideIndex = activeIndex - swiper.virtual.slidesBefore;

        if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;

        if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;

        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);

      } else {

        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);

      }

    } else {

      if (gridEnabled) {

        activeSlide = slides.find(slideEl => slideEl.column === activeIndex);

        nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);

        prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);

      } else {

        activeSlide = slides[activeIndex];

      }

    }

    if (activeSlide) {

      if (!gridEnabled) {

        // Next Slide

        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];

        if (params.loop && !nextSlide) {

          nextSlide = slides[0];

        }



        // Prev Slide

        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];

        if (params.loop && !prevSlide === 0) {

          prevSlide = slides[slides.length - 1];

        }

      }

    }

    slides.forEach(slideEl => {

      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);

      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);

      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);

    });

    swiper.emitSlidesClasses();

  }



  const processLazyPreloader = (swiper, imageEl) => {

    if (!swiper || swiper.destroyed || !swiper.params) return;

    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;

    const slideEl = imageEl.closest(slideSelector());

    if (slideEl) {

      let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);

      if (!lazyEl && swiper.isElement) {

        if (slideEl.shadowRoot) {

          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);

        } else {

          // init later

          requestAnimationFrame(() => {

            if (slideEl.shadowRoot) {

              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);

              if (lazyEl) lazyEl.remove();

            }

          });

        }

      }

      if (lazyEl) lazyEl.remove();

    }

  };

  const unlazy = (swiper, index) => {

    if (!swiper.slides[index]) return;

    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');

    if (imageEl) imageEl.removeAttribute('loading');

  };

  const preload = swiper => {

    if (!swiper || swiper.destroyed || !swiper.params) return;

    let amount = swiper.params.lazyPreloadPrevNext;

    const len = swiper.slides.length;

    if (!len || !amount || amount < 0) return;

    amount = Math.min(amount, len);

    const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);

    const activeIndex = swiper.activeIndex;

    if (swiper.params.grid && swiper.params.grid.rows > 1) {

      const activeColumn = activeIndex;

      const preloadColumns = [activeColumn - amount];

      preloadColumns.push(...Array.from({

        length: amount

      }).map((_, i) => {

        return activeColumn + slidesPerView + i;

      }));

      swiper.slides.forEach((slideEl, i) => {

        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);

      });

      return;

    }

    const slideIndexLastInView = activeIndex + slidesPerView - 1;

    if (swiper.params.rewind || swiper.params.loop) {

      for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {

        const realIndex = (i % len + len) % len;

        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);

      }

    } else {

      for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {

        if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {

          unlazy(swiper, i);

        }

      }

    }

  };



  function getActiveIndexByTranslate(swiper) {

    const {

      slidesGrid,

      params

    } = swiper;

    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    let activeIndex;

    for (let i = 0; i < slidesGrid.length; i += 1) {

      if (typeof slidesGrid[i + 1] !== 'undefined') {

        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {

          activeIndex = i;

        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {

          activeIndex = i + 1;

        }

      } else if (translate >= slidesGrid[i]) {

        activeIndex = i;

      }

    }

    // Normalize slideIndex

    if (params.normalizeSlideIndex) {

      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;

    }

    return activeIndex;

  }

  function updateActiveIndex(newActiveIndex) {

    const swiper = this;

    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    const {

      snapGrid,

      params,

      activeIndex: previousIndex,

      realIndex: previousRealIndex,

      snapIndex: previousSnapIndex

    } = swiper;

    let activeIndex = newActiveIndex;

    let snapIndex;

    const getVirtualRealIndex = aIndex => {

      let realIndex = aIndex - swiper.virtual.slidesBefore;

      if (realIndex < 0) {

        realIndex = swiper.virtual.slides.length + realIndex;

      }

      if (realIndex >= swiper.virtual.slides.length) {

        realIndex -= swiper.virtual.slides.length;

      }

      return realIndex;

    };

    if (typeof activeIndex === 'undefined') {

      activeIndex = getActiveIndexByTranslate(swiper);

    }

    if (snapGrid.indexOf(translate) >= 0) {

      snapIndex = snapGrid.indexOf(translate);

    } else {

      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);

      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);

    }

    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    if (activeIndex === previousIndex && !swiper.params.loop) {

      if (snapIndex !== previousSnapIndex) {

        swiper.snapIndex = snapIndex;

        swiper.emit('snapIndexChange');

      }

      return;

    }

    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {

      swiper.realIndex = getVirtualRealIndex(activeIndex);

      return;

    }

    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;



    // Get real index

    let realIndex;

    if (swiper.virtual && params.virtual.enabled && params.loop) {

      realIndex = getVirtualRealIndex(activeIndex);

    } else if (gridEnabled) {

      const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);

      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);

      if (Number.isNaN(activeSlideIndex)) {

        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);

      }

      realIndex = Math.floor(activeSlideIndex / params.grid.rows);

    } else if (swiper.slides[activeIndex]) {

      const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');

      if (slideIndex) {

        realIndex = parseInt(slideIndex, 10);

      } else {

        realIndex = activeIndex;

      }

    } else {

      realIndex = activeIndex;

    }

    Object.assign(swiper, {

      previousSnapIndex,

      snapIndex,

      previousRealIndex,

      realIndex,

      previousIndex,

      activeIndex

    });

    if (swiper.initialized) {

      preload(swiper);

    }

    swiper.emit('activeIndexChange');

    swiper.emit('snapIndexChange');

    if (swiper.initialized || swiper.params.runCallbacksOnInit) {

      if (previousRealIndex !== realIndex) {

        swiper.emit('realIndexChange');

      }

      swiper.emit('slideChange');

    }

  }



  function updateClickedSlide(el, path) {

    const swiper = this;

    const params = swiper.params;

    let slide = el.closest(`.${params.slideClass}, swiper-slide`);

    if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {

      [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {

        if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {

          slide = pathEl;

        }

      });

    }

    let slideFound = false;

    let slideIndex;

    if (slide) {

      for (let i = 0; i < swiper.slides.length; i += 1) {

        if (swiper.slides[i] === slide) {

          slideFound = true;

          slideIndex = i;

          break;

        }

      }

    }

    if (slide && slideFound) {

      swiper.clickedSlide = slide;

      if (swiper.virtual && swiper.params.virtual.enabled) {

        swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);

      } else {

        swiper.clickedIndex = slideIndex;

      }

    } else {

      swiper.clickedSlide = undefined;

      swiper.clickedIndex = undefined;

      return;

    }

    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {

      swiper.slideToClickedSlide();

    }

  }



  var update = {

    updateSize,

    updateSlides,

    updateAutoHeight,

    updateSlidesOffset,

    updateSlidesProgress,

    updateProgress,

    updateSlidesClasses,

    updateActiveIndex,

    updateClickedSlide

  };



  function getSwiperTranslate(axis) {

    if (axis === void 0) {

      axis = this.isHorizontal() ? 'x' : 'y';

    }

    const swiper = this;

    const {

      params,

      rtlTranslate: rtl,

      translate,

      wrapperEl

    } = swiper;

    if (params.virtualTranslate) {

      return rtl ? -translate : translate;

    }

    if (params.cssMode) {

      return translate;

    }

    let currentTranslate = getTranslate(wrapperEl, axis);

    currentTranslate += swiper.cssOverflowAdjustment();

    if (rtl) currentTranslate = -currentTranslate;

    return currentTranslate || 0;

  }



  function setTranslate(translate, byController) {

    const swiper = this;

    const {

      rtlTranslate: rtl,

      params,

      wrapperEl,

      progress

    } = swiper;

    let x = 0;

    let y = 0;

    const z = 0;

    if (swiper.isHorizontal()) {

      x = rtl ? -translate : translate;

    } else {

      y = translate;

    }

    if (params.roundLengths) {

      x = Math.floor(x);

      y = Math.floor(y);

    }

    swiper.previousTranslate = swiper.translate;

    swiper.translate = swiper.isHorizontal() ? x : y;

    if (params.cssMode) {

      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;

    } else if (!params.virtualTranslate) {

      if (swiper.isHorizontal()) {

        x -= swiper.cssOverflowAdjustment();

      } else {

        y -= swiper.cssOverflowAdjustment();

      }

      wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;

    }



    // Check if we need to update progress

    let newProgress;

    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    if (translatesDiff === 0) {

      newProgress = 0;

    } else {

      newProgress = (translate - swiper.minTranslate()) / translatesDiff;

    }

    if (newProgress !== progress) {

      swiper.updateProgress(translate);

    }

    swiper.emit('setTranslate', swiper.translate, byController);

  }



  function minTranslate() {

    return -this.snapGrid[0];

  }



  function maxTranslate() {

    return -this.snapGrid[this.snapGrid.length - 1];

  }



  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {

    if (translate === void 0) {

      translate = 0;

    }

    if (speed === void 0) {

      speed = this.params.speed;

    }

    if (runCallbacks === void 0) {

      runCallbacks = true;

    }

    if (translateBounds === void 0) {

      translateBounds = true;

    }

    const swiper = this;

    const {

      params,

      wrapperEl

    } = swiper;

    if (swiper.animating && params.preventInteractionOnTransition) {

      return false;

    }

    const minTranslate = swiper.minTranslate();

    const maxTranslate = swiper.maxTranslate();

    let newTranslate;

    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;



    // Update progress

    swiper.updateProgress(newTranslate);

    if (params.cssMode) {

      const isH = swiper.isHorizontal();

      if (speed === 0) {

        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;

      } else {

        if (!swiper.support.smoothScroll) {

          animateCSSModeScroll({

            swiper,

            targetPosition: -newTranslate,

            side: isH ? 'left' : 'top'

          });

          return true;

        }

        wrapperEl.scrollTo({

          [isH ? 'left' : 'top']: -newTranslate,

          behavior: 'smooth'

        });

      }

      return true;

    }

    if (speed === 0) {

      swiper.setTransition(0);

      swiper.setTranslate(newTranslate);

      if (runCallbacks) {

        swiper.emit('beforeTransitionStart', speed, internal);

        swiper.emit('transitionEnd');

      }

    } else {

      swiper.setTransition(speed);

      swiper.setTranslate(newTranslate);

      if (runCallbacks) {

        swiper.emit('beforeTransitionStart', speed, internal);

        swiper.emit('transitionStart');

      }

      if (!swiper.animating) {

        swiper.animating = true;

        if (!swiper.onTranslateToWrapperTransitionEnd) {

          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {

            if (!swiper || swiper.destroyed) return;

            if (e.target !== this) return;

            swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);

            swiper.onTranslateToWrapperTransitionEnd = null;

            delete swiper.onTranslateToWrapperTransitionEnd;

            swiper.animating = false;

            if (runCallbacks) {

              swiper.emit('transitionEnd');

            }

          };

        }

        swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);

      }

    }

    return true;

  }



  var translate = {

    getTranslate: getSwiperTranslate,

    setTranslate,

    minTranslate,

    maxTranslate,

    translateTo

  };



  function setTransition(duration, byController) {

    const swiper = this;

    if (!swiper.params.cssMode) {

      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;

      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';

    }

    swiper.emit('setTransition', duration, byController);

  }



  function transitionEmit(_ref) {

    let {

      swiper,

      runCallbacks,

      direction,

      step

    } = _ref;

    const {

      activeIndex,

      previousIndex

    } = swiper;

    let dir = direction;

    if (!dir) {

      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';

    }

    swiper.emit(`transition${step}`);

    if (runCallbacks && dir === 'reset') {

      swiper.emit(`slideResetTransition${step}`);

    } else if (runCallbacks && activeIndex !== previousIndex) {

      swiper.emit(`slideChangeTransition${step}`);

      if (dir === 'next') {

        swiper.emit(`slideNextTransition${step}`);

      } else {

        swiper.emit(`slidePrevTransition${step}`);

      }

    }

  }



  function transitionStart(runCallbacks, direction) {

    if (runCallbacks === void 0) {

      runCallbacks = true;

    }

    const swiper = this;

    const {

      params

    } = swiper;

    if (params.cssMode) return;

    if (params.autoHeight) {

      swiper.updateAutoHeight();

    }

    transitionEmit({

      swiper,

      runCallbacks,

      direction,

      step: 'Start'

    });

  }



  function transitionEnd(runCallbacks, direction) {

    if (runCallbacks === void 0) {

      runCallbacks = true;

    }

    const swiper = this;

    const {

      params

    } = swiper;

    swiper.animating = false;

    if (params.cssMode) return;

    swiper.setTransition(0);

    transitionEmit({

      swiper,

      runCallbacks,

      direction,

      step: 'End'

    });

  }



  var transition = {

    setTransition,

    transitionStart,

    transitionEnd

  };



  function slideTo(index, speed, runCallbacks, internal, initial) {

    if (index === void 0) {

      index = 0;

    }

    if (runCallbacks === void 0) {

      runCallbacks = true;

    }

    if (typeof index === 'string') {

      index = parseInt(index, 10);

    }

    const swiper = this;

    let slideIndex = index;

    if (slideIndex < 0) slideIndex = 0;

    const {

      params,

      snapGrid,

      slidesGrid,

      previousIndex,

      activeIndex,

      rtlTranslate: rtl,

      wrapperEl,

      enabled

    } = swiper;

    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {

      return false;

    }

    if (typeof speed === 'undefined') {

      speed = swiper.params.speed;

    }

    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);

    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);

    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    const translate = -snapGrid[snapIndex];

    // Normalize slideIndex

    if (params.normalizeSlideIndex) {

      for (let i = 0; i < slidesGrid.length; i += 1) {

        const normalizedTranslate = -Math.floor(translate * 100);

        const normalizedGrid = Math.floor(slidesGrid[i] * 100);

        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

        if (typeof slidesGrid[i + 1] !== 'undefined') {

          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {

            slideIndex = i;

          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {

            slideIndex = i + 1;

          }

        } else if (normalizedTranslate >= normalizedGrid) {

          slideIndex = i;

        }

      }

    }

    // Directions locks

    if (swiper.initialized && slideIndex !== activeIndex) {

      if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {

        return false;

      }

      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {

        if ((activeIndex || 0) !== slideIndex) {

          return false;

        }

      }

    }

    if (slideIndex !== (previousIndex || 0) && runCallbacks) {

      swiper.emit('beforeSlideChangeStart');

    }



    // Update progress

    swiper.updateProgress(translate);

    let direction;

    if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';



    // initial virtual

    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    const isInitialVirtual = isVirtual && initial;

    // Update Index

    if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {

      swiper.updateActiveIndex(slideIndex);

      // Update Height

      if (params.autoHeight) {

        swiper.updateAutoHeight();

      }

      swiper.updateSlidesClasses();

      if (params.effect !== 'slide') {

        swiper.setTranslate(translate);

      }

      if (direction !== 'reset') {

        swiper.transitionStart(runCallbacks, direction);

        swiper.transitionEnd(runCallbacks, direction);

      }

      return false;

    }

    if (params.cssMode) {

      const isH = swiper.isHorizontal();

      const t = rtl ? translate : -translate;

      if (speed === 0) {

        if (isVirtual) {

          swiper.wrapperEl.style.scrollSnapType = 'none';

          swiper._immediateVirtual = true;

        }

        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {

          swiper._cssModeVirtualInitialSet = true;

          requestAnimationFrame(() => {

            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

          });

        } else {

          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

        }

        if (isVirtual) {

          requestAnimationFrame(() => {

            swiper.wrapperEl.style.scrollSnapType = '';

            swiper._immediateVirtual = false;

          });

        }

      } else {

        if (!swiper.support.smoothScroll) {

          animateCSSModeScroll({

            swiper,

            targetPosition: t,

            side: isH ? 'left' : 'top'

          });

          return true;

        }

        wrapperEl.scrollTo({

          [isH ? 'left' : 'top']: t,

          behavior: 'smooth'

        });

      }

      return true;

    }

    const browser = getBrowser();

    const isSafari = browser.isSafari;

    if (isVirtual && !initial && isSafari && swiper.isElement) {

      swiper.virtual.update(false, false, slideIndex);

    }

    swiper.setTransition(speed);

    swiper.setTranslate(translate);

    swiper.updateActiveIndex(slideIndex);

    swiper.updateSlidesClasses();

    swiper.emit('beforeTransitionStart', speed, internal);

    swiper.transitionStart(runCallbacks, direction);

    if (speed === 0) {

      swiper.transitionEnd(runCallbacks, direction);

    } else if (!swiper.animating) {

      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {

        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {

          if (!swiper || swiper.destroyed) return;

          if (e.target !== this) return;

          swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);

          swiper.onSlideToWrapperTransitionEnd = null;

          delete swiper.onSlideToWrapperTransitionEnd;

          swiper.transitionEnd(runCallbacks, direction);

        };

      }

      swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);

    }

    return true;

  }



  function slideToLoop(index, speed, runCallbacks, internal) {

    if (index === void 0) {

      index = 0;

    }

    if (runCallbacks === void 0) {

      runCallbacks = true;

    }

    if (typeof index === 'string') {

      const indexAsNumber = parseInt(index, 10);

      index = indexAsNumber;

    }

    const swiper = this;

    if (swiper.destroyed) return;

    if (typeof speed === 'undefined') {

      speed = swiper.params.speed;

    }

    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;

    let newIndex = index;

    if (swiper.params.loop) {

      if (swiper.virtual && swiper.params.virtual.enabled) {

        // eslint-disable-next-line

        newIndex = newIndex + swiper.virtual.slidesBefore;

      } else {

        let targetSlideIndex;

        if (gridEnabled) {

          const slideIndex = newIndex * swiper.params.grid.rows;

          targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;

        } else {

          targetSlideIndex = swiper.getSlideIndexByData(newIndex);

        }

        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;

        const {

          centeredSlides

        } = swiper.params;

        let slidesPerView = swiper.params.slidesPerView;

        if (slidesPerView === 'auto') {

          slidesPerView = swiper.slidesPerViewDynamic();

        } else {

          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));

          if (centeredSlides && slidesPerView % 2 === 0) {

            slidesPerView = slidesPerView + 1;

          }

        }

        let needLoopFix = cols - targetSlideIndex < slidesPerView;

        if (centeredSlides) {

          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);

        }

        if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {

          needLoopFix = false;

        }

        if (needLoopFix) {

          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';

          swiper.loopFix({

            direction,

            slideTo: true,

            activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,

            slideRealIndex: direction === 'next' ? swiper.realIndex : undefined

          });

        }

        if (gridEnabled) {

          const slideIndex = newIndex * swiper.params.grid.rows;

          newIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;

        } else {

          newIndex = swiper.getSlideIndexByData(newIndex);

        }

      }

    }

    requestAnimationFrame(() => {

      swiper.slideTo(newIndex, speed, runCallbacks, internal);

    });

    return swiper;

  }



  /* eslint no-unused-vars: "off" */

  function slideNext(speed, runCallbacks, internal) {

    if (runCallbacks === void 0) {

      runCallbacks = true;

    }

    const swiper = this;

    const {

      enabled,

      params,

      animating

    } = swiper;

    if (!enabled || swiper.destroyed) return swiper;

    if (typeof speed === 'undefined') {

      speed = swiper.params.speed;

    }

    let perGroup = params.slidesPerGroup;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {

      perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);

    }

    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

    const isVirtual = swiper.virtual && params.virtual.enabled;

    if (params.loop) {

      if (animating && !isVirtual && params.loopPreventsSliding) return false;

      swiper.loopFix({

        direction: 'next'

      });

      // eslint-disable-next-line

      swiper._clientLeft = swiper.wrapperEl.clientLeft;

      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {

        requestAnimationFrame(() => {

          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);

        });

        return true;

      }

    }

    if (params.rewind && swiper.isEnd) {

      return swiper.slideTo(0, speed, runCallbacks, internal);

    }

    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);

  }



  /* eslint no-unused-vars: "off" */

  function slidePrev(speed, runCallbacks, internal) {

    if (runCallbacks === void 0) {

      runCallbacks = true;

    }

    const swiper = this;

    const {

      params,

      snapGrid,

      slidesGrid,

      rtlTranslate,

      enabled,

      animating

    } = swiper;

    if (!enabled || swiper.destroyed) return swiper;

    if (typeof speed === 'undefined') {

      speed = swiper.params.speed;

    }

    const isVirtual = swiper.virtual && params.virtual.enabled;

    if (params.loop) {

      if (animating && !isVirtual && params.loopPreventsSliding) return false;

      swiper.loopFix({

        direction: 'prev'

      });

      // eslint-disable-next-line

      swiper._clientLeft = swiper.wrapperEl.clientLeft;

    }

    const translate = rtlTranslate ? swiper.translate : -swiper.translate;

    function normalize(val) {

      if (val < 0) return -Math.floor(Math.abs(val));

      return Math.floor(val);

    }

    const normalizedTranslate = normalize(translate);

    const normalizedSnapGrid = snapGrid.map(val => normalize(val));

    const isFreeMode = params.freeMode && params.freeMode.enabled;

    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

    if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {

      let prevSnapIndex;

      snapGrid.forEach((snap, snapIndex) => {

        if (normalizedTranslate >= snap) {

          // prevSnap = snap;

          prevSnapIndex = snapIndex;

        }

      });

      if (typeof prevSnapIndex !== 'undefined') {

        prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];

      }

    }

    let prevIndex = 0;

    if (typeof prevSnap !== 'undefined') {

      prevIndex = slidesGrid.indexOf(prevSnap);

      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {

        prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;

        prevIndex = Math.max(prevIndex, 0);

      }

    }

    if (params.rewind && swiper.isBeginning) {

      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;

      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);

    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {

      requestAnimationFrame(() => {

        swiper.slideTo(prevIndex, speed, runCallbacks, internal);

      });

      return true;

    }

    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);

  }



  /* eslint no-unused-vars: "off" */

  function slideReset(speed, runCallbacks, internal) {

    if (runCallbacks === void 0) {

      runCallbacks = true;

    }

    const swiper = this;

    if (swiper.destroyed) return;

    if (typeof speed === 'undefined') {

      speed = swiper.params.speed;

    }

    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);

  }



  /* eslint no-unused-vars: "off" */

  function slideToClosest(speed, runCallbacks, internal, threshold) {

    if (runCallbacks === void 0) {

      runCallbacks = true;

    }

    if (threshold === void 0) {

      threshold = 0.5;

    }

    const swiper = this;

    if (swiper.destroyed) return;

    if (typeof speed === 'undefined') {

      speed = swiper.params.speed;

    }

    let index = swiper.activeIndex;

    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);

    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);

    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    if (translate >= swiper.snapGrid[snapIndex]) {

      // The current translate is on or after the current snap index, so the choice

      // is between the current index and the one after it.

      const currentSnap = swiper.snapGrid[snapIndex];

      const nextSnap = swiper.snapGrid[snapIndex + 1];

      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {

        index += swiper.params.slidesPerGroup;

      }

    } else {

      // The current translate is before the current snap index, so the choice

      // is between the current index and the one before it.

      const prevSnap = swiper.snapGrid[snapIndex - 1];

      const currentSnap = swiper.snapGrid[snapIndex];

      if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {

        index -= swiper.params.slidesPerGroup;

      }

    }

    index = Math.max(index, 0);

    index = Math.min(index, swiper.slidesGrid.length - 1);

    return swiper.slideTo(index, speed, runCallbacks, internal);

  }



  function slideToClickedSlide() {

    const swiper = this;

    if (swiper.destroyed) return;

    const {

      params,

      slidesEl

    } = swiper;

    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;

    let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);

    let realIndex;

    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;

    const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;

    if (params.loop) {

      if (swiper.animating) return;

      realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);

      if (params.centeredSlides) {

        swiper.slideToLoop(realIndex);

      } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {

        swiper.loopFix();

        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);

        nextTick(() => {

          swiper.slideTo(slideToIndex);

        });

      } else {

        swiper.slideTo(slideToIndex);

      }

    } else {

      swiper.slideTo(slideToIndex);

    }

  }



  var slide = {

    slideTo,

    slideToLoop,

    slideNext,

    slidePrev,

    slideReset,

    slideToClosest,

    slideToClickedSlide

  };



  function loopCreate(slideRealIndex, initial) {

    const swiper = this;

    const {

      params,

      slidesEl

    } = swiper;

    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;

    const initSlides = () => {

      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);

      slides.forEach((el, index) => {

        el.setAttribute('data-swiper-slide-index', index);

      });

    };

    const clearBlankSlides = () => {

      const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);

      slides.forEach(el => {

        el.remove();

      });

      if (slides.length > 0) {

        swiper.recalcSlides();

        swiper.updateSlides();

      }

    };

    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

    if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {

      clearBlankSlides();

    }

    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);

    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;

    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;

    const addBlankSlides = amountOfSlides => {

      for (let i = 0; i < amountOfSlides; i += 1) {

        const slideEl = swiper.isElement ? createElement('swiper-slide', [params.slideBlankClass]) : createElement('div', [params.slideClass, params.slideBlankClass]);

        swiper.slidesEl.append(slideEl);

      }

    };

    if (shouldFillGroup) {

      if (params.loopAddBlankSlides) {

        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;

        addBlankSlides(slidesToAdd);

        swiper.recalcSlides();

        swiper.updateSlides();

      } else {

        showWarning('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');

      }

      initSlides();

    } else if (shouldFillGrid) {

      if (params.loopAddBlankSlides) {

        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;

        addBlankSlides(slidesToAdd);

        swiper.recalcSlides();

        swiper.updateSlides();

      } else {

        showWarning('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');

      }

      initSlides();

    } else {

      initSlides();

    }

    swiper.loopFix({

      slideRealIndex,

      direction: params.centeredSlides ? undefined : 'next',

      initial

    });

  }



  function loopFix(_temp) {

    let {

      slideRealIndex,

      slideTo = true,

      direction,

      setTranslate,

      activeSlideIndex,

      initial,

      byController,

      byMousewheel

    } = _temp === void 0 ? {} : _temp;

    const swiper = this;

    if (!swiper.params.loop) return;

    swiper.emit('beforeLoopFix');

    const {

      slides,

      allowSlidePrev,

      allowSlideNext,

      slidesEl,

      params

    } = swiper;

    const {

      centeredSlides,

      initialSlide

    } = params;

    swiper.allowSlidePrev = true;

    swiper.allowSlideNext = true;

    if (swiper.virtual && params.virtual.enabled) {

      if (slideTo) {

        if (!params.centeredSlides && swiper.snapIndex === 0) {

          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);

        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {

          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);

        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {

          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);

        }

      }

      swiper.allowSlidePrev = allowSlidePrev;

      swiper.allowSlideNext = allowSlideNext;

      swiper.emit('loopFix');

      return;

    }

    let slidesPerView = params.slidesPerView;

    if (slidesPerView === 'auto') {

      slidesPerView = swiper.slidesPerViewDynamic();

    } else {

      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));

      if (centeredSlides && slidesPerView % 2 === 0) {

        slidesPerView = slidesPerView + 1;

      }

    }

    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;

    let loopedSlides = centeredSlides ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;

    if (loopedSlides % slidesPerGroup !== 0) {

      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;

    }

    loopedSlides += params.loopAdditionalSlides;

    swiper.loopedSlides = loopedSlides;

    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

    if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {

      showWarning('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');

    } else if (gridEnabled && params.grid.fill === 'row') {

      showWarning('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');

    }

    const prependSlidesIndexes = [];

    const appendSlidesIndexes = [];

    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;

    const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;

    let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;

    if (typeof activeSlideIndex === 'undefined') {

      activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));

    } else {

      activeIndex = activeSlideIndex;

    }

    const isNext = direction === 'next' || !direction;

    const isPrev = direction === 'prev' || !direction;

    let slidesPrepended = 0;

    let slidesAppended = 0;

    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;

    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);

    // prepend last slides before start

    if (activeColIndexWithShift < loopedSlides) {

      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);

      for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {

        const index = i - Math.floor(i / cols) * cols;

        if (gridEnabled) {

          const colIndexToPrepend = cols - index - 1;

          for (let i = slides.length - 1; i >= 0; i -= 1) {

            if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);

          }

          // slides.forEach((slide, slideIndex) => {

          //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);

          // });

        } else {

          prependSlidesIndexes.push(cols - index - 1);

        }

      }

    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {

      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);

      if (isInitialOverflow) {

        slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);

      }

      for (let i = 0; i < slidesAppended; i += 1) {

        const index = i - Math.floor(i / cols) * cols;

        if (gridEnabled) {

          slides.forEach((slide, slideIndex) => {

            if (slide.column === index) appendSlidesIndexes.push(slideIndex);

          });

        } else {

          appendSlidesIndexes.push(index);

        }

      }

    }

    swiper.__preventObserver__ = true;

    requestAnimationFrame(() => {

      swiper.__preventObserver__ = false;

    });

    if (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {

      if (appendSlidesIndexes.includes(activeSlideIndex)) {

        appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);

      }

      if (prependSlidesIndexes.includes(activeSlideIndex)) {

        prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);

      }

    }

    if (isPrev) {

      prependSlidesIndexes.forEach(index => {

        slides[index].swiperLoopMoveDOM = true;

        slidesEl.prepend(slides[index]);

        slides[index].swiperLoopMoveDOM = false;

      });

    }

    if (isNext) {

      appendSlidesIndexes.forEach(index => {

        slides[index].swiperLoopMoveDOM = true;

        slidesEl.append(slides[index]);

        slides[index].swiperLoopMoveDOM = false;

      });

    }

    swiper.recalcSlides();

    if (params.slidesPerView === 'auto') {

      swiper.updateSlides();

    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {

      swiper.slides.forEach((slide, slideIndex) => {

        swiper.grid.updateSlide(slideIndex, slide, swiper.slides);

      });

    }

    if (params.watchSlidesProgress) {

      swiper.updateSlidesOffset();

    }

    if (slideTo) {

      if (prependSlidesIndexes.length > 0 && isPrev) {

        if (typeof slideRealIndex === 'undefined') {

          const currentSlideTranslate = swiper.slidesGrid[activeIndex];

          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];

          const diff = newSlideTranslate - currentSlideTranslate;

          if (byMousewheel) {

            swiper.setTranslate(swiper.translate - diff);

          } else {

            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);

            if (setTranslate) {

              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;

              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;

            }

          }

        } else {

          if (setTranslate) {

            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;

            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);

            swiper.touchEventsData.currentTranslate = swiper.translate;

          }

        }

      } else if (appendSlidesIndexes.length > 0 && isNext) {

        if (typeof slideRealIndex === 'undefined') {

          const currentSlideTranslate = swiper.slidesGrid[activeIndex];

          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];

          const diff = newSlideTranslate - currentSlideTranslate;

          if (byMousewheel) {

            swiper.setTranslate(swiper.translate - diff);

          } else {

            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);

            if (setTranslate) {

              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;

              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;

            }

          }

        } else {

          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;

          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);

        }

      }

    }

    swiper.allowSlidePrev = allowSlidePrev;

    swiper.allowSlideNext = allowSlideNext;

    if (swiper.controller && swiper.controller.control && !byController) {

      const loopParams = {

        slideRealIndex,

        direction,

        setTranslate,

        activeSlideIndex,

        byController: true

      };

      if (Array.isArray(swiper.controller.control)) {

        swiper.controller.control.forEach(c => {

          if (!c.destroyed && c.params.loop) c.loopFix({

            ...loopParams,

            slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false

          });

        });

      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {

        swiper.controller.control.loopFix({

          ...loopParams,

          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false

        });

      }

    }

    swiper.emit('loopFix');

  }



  function loopDestroy() {

    const swiper = this;

    const {

      params,

      slidesEl

    } = swiper;

    if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;

    swiper.recalcSlides();

    const newSlidesOrder = [];

    swiper.slides.forEach(slideEl => {

      const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;

      newSlidesOrder[index] = slideEl;

    });

    swiper.slides.forEach(slideEl => {

      slideEl.removeAttribute('data-swiper-slide-index');

    });

    newSlidesOrder.forEach(slideEl => {

      slidesEl.append(slideEl);

    });

    swiper.recalcSlides();

    swiper.slideTo(swiper.realIndex, 0);

  }



  var loop = {

    loopCreate,

    loopFix,

    loopDestroy

  };



  function setGrabCursor(moving) {

    const swiper = this;

    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;

    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;

    if (swiper.isElement) {

      swiper.__preventObserver__ = true;

    }

    el.style.cursor = 'move';

    el.style.cursor = moving ? 'grabbing' : 'grab';

    if (swiper.isElement) {

      requestAnimationFrame(() => {

        swiper.__preventObserver__ = false;

      });

    }

  }



  function unsetGrabCursor() {

    const swiper = this;

    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {

      return;

    }

    if (swiper.isElement) {

      swiper.__preventObserver__ = true;

    }

    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';

    if (swiper.isElement) {

      requestAnimationFrame(() => {

        swiper.__preventObserver__ = false;

      });

    }

  }



  var grabCursor = {

    setGrabCursor,

    unsetGrabCursor

  };



  // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

  function closestElement(selector, base) {

    if (base === void 0) {

      base = this;

    }

    function __closestFrom(el) {

      if (!el || el === getDocument() || el === getWindow()) return null;

      if (el.assignedSlot) el = el.assignedSlot;

      const found = el.closest(selector);

      if (!found && !el.getRootNode) {

        return null;

      }

      return found || __closestFrom(el.getRootNode().host);

    }

    return __closestFrom(base);

  }

  function preventEdgeSwipe(swiper, event, startX) {

    const window = getWindow();

    const {

      params

    } = swiper;

    const edgeSwipeDetection = params.edgeSwipeDetection;

    const edgeSwipeThreshold = params.edgeSwipeThreshold;

    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {

      if (edgeSwipeDetection === 'prevent') {

        event.preventDefault();

        return true;

      }

      return false;

    }

    return true;

  }

  function onTouchStart(event) {

    const swiper = this;

    const document = getDocument();

    let e = event;

    if (e.originalEvent) e = e.originalEvent;

    const data = swiper.touchEventsData;

    if (e.type === 'pointerdown') {

      if (data.pointerId !== null && data.pointerId !== e.pointerId) {

        return;

      }

      data.pointerId = e.pointerId;

    } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {

      data.touchId = e.targetTouches[0].identifier;

    }

    if (e.type === 'touchstart') {

      // don't proceed touch event

      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);

      return;

    }

    const {

      params,

      touches,

      enabled

    } = swiper;

    if (!enabled) return;

    if (!params.simulateTouch && e.pointerType === 'mouse') return;

    if (swiper.animating && params.preventInteractionOnTransition) {

      return;

    }

    if (!swiper.animating && params.cssMode && params.loop) {

      swiper.loopFix();

    }

    let targetEl = e.target;

    if (params.touchEventsTarget === 'wrapper') {

      if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;

    }

    if ('which' in e && e.which === 3) return;

    if ('button' in e && e.button > 0) return;

    if (data.isTouched && data.isMoved) return;



    // change target el for shadow root component

    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

    // eslint-disable-next-line

    const eventPath = e.composedPath ? e.composedPath() : e.path;

    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {

      targetEl = eventPath[0];

    }

    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;

    const isTargetShadow = !!(e.target && e.target.shadowRoot);



    // use closestElement for shadow root element to get the actual closest for nested shadow root element

    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {

      swiper.allowClick = true;

      return;

    }

    if (params.swipeHandler) {

      if (!targetEl.closest(params.swipeHandler)) return;

    }

    touches.currentX = e.pageX;

    touches.currentY = e.pageY;

    const startX = touches.currentX;

    const startY = touches.currentY;



    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore



    if (!preventEdgeSwipe(swiper, e, startX)) {

      return;

    }

    Object.assign(data, {

      isTouched: true,

      isMoved: false,

      allowTouchCallbacks: true,

      isScrolling: undefined,

      startMoving: undefined

    });

    touches.startX = startX;

    touches.startY = startY;

    data.touchStartTime = now();

    swiper.allowClick = true;

    swiper.updateSize();

    swiper.swipeDirection = undefined;

    if (params.threshold > 0) data.allowThresholdMove = false;

    let preventDefault = true;

    if (targetEl.matches(data.focusableElements)) {

      preventDefault = false;

      if (targetEl.nodeName === 'SELECT') {

        data.isTouched = false;

      }

    }

    if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {

      document.activeElement.blur();

    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {

      e.preventDefault();

    }

    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {

      swiper.freeMode.onTouchStart();

    }

    swiper.emit('touchStart', e);

  }



  function onTouchMove(event) {

    const document = getDocument();

    const swiper = this;

    const data = swiper.touchEventsData;

    const {

      params,

      touches,

      rtlTranslate: rtl,

      enabled

    } = swiper;

    if (!enabled) return;

    if (!params.simulateTouch && event.pointerType === 'mouse') return;

    let e = event;

    if (e.originalEvent) e = e.originalEvent;

    if (e.type === 'pointermove') {

      if (data.touchId !== null) return; // return from pointer if we use touch

      const id = e.pointerId;

      if (id !== data.pointerId) return;

    }

    let targetTouch;

    if (e.type === 'touchmove') {

      targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);

      if (!targetTouch || targetTouch.identifier !== data.touchId) return;

    } else {

      targetTouch = e;

    }

    if (!data.isTouched) {

      if (data.startMoving && data.isScrolling) {

        swiper.emit('touchMoveOpposite', e);

      }

      return;

    }

    const pageX = targetTouch.pageX;

    const pageY = targetTouch.pageY;

    if (e.preventedByNestedSwiper) {

      touches.startX = pageX;

      touches.startY = pageY;

      return;

    }

    if (!swiper.allowTouchMove) {

      if (!e.target.matches(data.focusableElements)) {

        swiper.allowClick = false;

      }

      if (data.isTouched) {

        Object.assign(touches, {

          startX: pageX,

          startY: pageY,

          currentX: pageX,

          currentY: pageY

        });

        data.touchStartTime = now();

      }

      return;

    }

    if (params.touchReleaseOnEdges && !params.loop) {

      if (swiper.isVertical()) {

        // Vertical

        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {

          data.isTouched = false;

          data.isMoved = false;

          return;

        }

      } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {

        return;

      } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {

        return;

      }

    }

    if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {

      document.activeElement.blur();

    }

    if (document.activeElement) {

      if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {

        data.isMoved = true;

        swiper.allowClick = false;

        return;

      }

    }

    if (data.allowTouchCallbacks) {

      swiper.emit('touchMove', e);

    }

    touches.previousX = touches.currentX;

    touches.previousY = touches.currentY;

    touches.currentX = pageX;

    touches.currentY = pageY;

    const diffX = touches.currentX - touches.startX;

    const diffY = touches.currentY - touches.startY;

    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

    if (typeof data.isScrolling === 'undefined') {

      let touchAngle;

      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {

        data.isScrolling = false;

      } else {

        // eslint-disable-next-line

        if (diffX * diffX + diffY * diffY >= 25) {

          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;

          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;

        }

      }

    }

    if (data.isScrolling) {

      swiper.emit('touchMoveOpposite', e);

    }

    if (typeof data.startMoving === 'undefined') {

      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {

        data.startMoving = true;

      }

    }

    if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {

      data.isTouched = false;

      return;

    }

    if (!data.startMoving) {

      return;

    }

    swiper.allowClick = false;

    if (!params.cssMode && e.cancelable) {

      e.preventDefault();

    }

    if (params.touchMoveStopPropagation && !params.nested) {

      e.stopPropagation();

    }

    let diff = swiper.isHorizontal() ? diffX : diffY;

    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;

    if (params.oneWayMovement) {

      diff = Math.abs(diff) * (rtl ? 1 : -1);

      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);

    }

    touches.diff = diff;

    diff *= params.touchRatio;

    if (rtl) {

      diff = -diff;

      touchesDiff = -touchesDiff;

    }

    const prevTouchesDirection = swiper.touchesDirection;

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';

    swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';

    const isLoop = swiper.params.loop && !params.cssMode;

    const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;

    if (!data.isMoved) {

      if (isLoop && allowLoopFix) {

        swiper.loopFix({

          direction: swiper.swipeDirection

        });

      }

      data.startTranslate = swiper.getTranslate();

      swiper.setTransition(0);

      if (swiper.animating) {

        const evt = new window.CustomEvent('transitionend', {

          bubbles: true,

          cancelable: true,

          detail: {

            bySwiperTouchMove: true

          }

        });

        swiper.wrapperEl.dispatchEvent(evt);

      }

      data.allowMomentumBounce = false;

      // Grab Cursor

      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {

        swiper.setGrabCursor(true);

      }

      swiper.emit('sliderFirstMove', e);

    }

    let loopFixed;

    new Date().getTime();

    if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {

      Object.assign(touches, {

        startX: pageX,

        startY: pageY,

        currentX: pageX,

        currentY: pageY,

        startTranslate: data.currentTranslate

      });

      data.loopSwapReset = true;

      data.startTranslate = data.currentTranslate;

      return;

    }

    swiper.emit('sliderMove', e);

    data.isMoved = true;

    data.currentTranslate = diff + data.startTranslate;

    let disableParentSwiper = true;

    let resistanceRatio = params.resistanceRatio;

    if (params.touchReleaseOnEdges) {

      resistanceRatio = 0;

    }

    if (diff > 0) {

      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {

        swiper.loopFix({

          direction: 'prev',

          setTranslate: true,

          activeSlideIndex: 0

        });

      }

      if (data.currentTranslate > swiper.minTranslate()) {

        disableParentSwiper = false;

        if (params.resistance) {

          data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;

        }

      }

    } else if (diff < 0) {

      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {

        swiper.loopFix({

          direction: 'next',

          setTranslate: true,

          activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))

        });

      }

      if (data.currentTranslate < swiper.maxTranslate()) {

        disableParentSwiper = false;

        if (params.resistance) {

          data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;

        }

      }

    }

    if (disableParentSwiper) {

      e.preventedByNestedSwiper = true;

    }



    // Directions locks

    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {

      data.currentTranslate = data.startTranslate;

    }

    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {

      data.currentTranslate = data.startTranslate;

    }

    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {

      data.currentTranslate = data.startTranslate;

    }



    // Threshold

    if (params.threshold > 0) {

      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {

        if (!data.allowThresholdMove) {

          data.allowThresholdMove = true;

          touches.startX = touches.currentX;

          touches.startY = touches.currentY;

          data.currentTranslate = data.startTranslate;

          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;

          return;

        }

      } else {

        data.currentTranslate = data.startTranslate;

        return;

      }

    }

    if (!params.followFinger || params.cssMode) return;



    // Update active index in free mode

    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {

      swiper.updateActiveIndex();

      swiper.updateSlidesClasses();

    }

    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {

      swiper.freeMode.onTouchMove();

    }

    // Update progress

    swiper.updateProgress(data.currentTranslate);

    // Update translate

    swiper.setTranslate(data.currentTranslate);

  }



  function onTouchEnd(event) {

    const swiper = this;

    const data = swiper.touchEventsData;

    let e = event;

    if (e.originalEvent) e = e.originalEvent;

    let targetTouch;

    const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';

    if (!isTouchEvent) {

      if (data.touchId !== null) return; // return from pointer if we use touch

      if (e.pointerId !== data.pointerId) return;

      targetTouch = e;

    } else {

      targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);

      if (!targetTouch || targetTouch.identifier !== data.touchId) return;

    }

    if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {

      const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);

      if (!proceed) {

        return;

      }

    }

    data.pointerId = null;

    data.touchId = null;

    const {

      params,

      touches,

      rtlTranslate: rtl,

      slidesGrid,

      enabled

    } = swiper;

    if (!enabled) return;

    if (!params.simulateTouch && e.pointerType === 'mouse') return;

    if (data.allowTouchCallbacks) {

      swiper.emit('touchEnd', e);

    }

    data.allowTouchCallbacks = false;

    if (!data.isTouched) {

      if (data.isMoved && params.grabCursor) {

        swiper.setGrabCursor(false);

      }

      data.isMoved = false;

      data.startMoving = false;

      return;

    }



    // Return Grab Cursor

    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {

      swiper.setGrabCursor(false);

    }



    // Time diff

    const touchEndTime = now();

    const timeDiff = touchEndTime - data.touchStartTime;



    // Tap, doubleTap, Click

    if (swiper.allowClick) {

      const pathTree = e.path || e.composedPath && e.composedPath();

      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);

      swiper.emit('tap click', e);

      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {

        swiper.emit('doubleTap doubleClick', e);

      }

    }

    data.lastClickTime = now();

    nextTick(() => {

      if (!swiper.destroyed) swiper.allowClick = true;

    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {

      data.isTouched = false;

      data.isMoved = false;

      data.startMoving = false;

      return;

    }

    data.isTouched = false;

    data.isMoved = false;

    data.startMoving = false;

    let currentPos;

    if (params.followFinger) {

      currentPos = rtl ? swiper.translate : -swiper.translate;

    } else {

      currentPos = -data.currentTranslate;

    }

    if (params.cssMode) {

      return;

    }

    if (params.freeMode && params.freeMode.enabled) {

      swiper.freeMode.onTouchEnd({

        currentPos

      });

      return;

    }



    // Find current slide

    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;

    let stopIndex = 0;

    let groupSize = swiper.slidesSizesGrid[0];

    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {

      const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (typeof slidesGrid[i + increment] !== 'undefined') {

        if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {

          stopIndex = i;

          groupSize = slidesGrid[i + increment] - slidesGrid[i];

        }

      } else if (swipeToLast || currentPos >= slidesGrid[i]) {

        stopIndex = i;

        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];

      }

    }

    let rewindFirstIndex = null;

    let rewindLastIndex = null;

    if (params.rewind) {

      if (swiper.isBeginning) {

        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;

      } else if (swiper.isEnd) {

        rewindFirstIndex = 0;

      }

    }

    // Find current slide size

    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (timeDiff > params.longSwipesMs) {

      // Long touches

      if (!params.longSwipes) {

        swiper.slideTo(swiper.activeIndex);

        return;

      }

      if (swiper.swipeDirection === 'next') {

        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);

      }

      if (swiper.swipeDirection === 'prev') {

        if (ratio > 1 - params.longSwipesRatio) {

          swiper.slideTo(stopIndex + increment);

        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {

          swiper.slideTo(rewindLastIndex);

        } else {

          swiper.slideTo(stopIndex);

        }

      }

    } else {

      // Short swipes

      if (!params.shortSwipes) {

        swiper.slideTo(swiper.activeIndex);

        return;

      }

      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

      if (!isNavButtonTarget) {

        if (swiper.swipeDirection === 'next') {

          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);

        }

        if (swiper.swipeDirection === 'prev') {

          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);

        }

      } else if (e.target === swiper.navigation.nextEl) {

        swiper.slideTo(stopIndex + increment);

      } else {

        swiper.slideTo(stopIndex);

      }

    }

  }



  function onResize() {

    const swiper = this;

    const {

      params,

      el

    } = swiper;

    if (el && el.offsetWidth === 0) return;



    // Breakpoints

    if (params.breakpoints) {

      swiper.setBreakpoint();

    }



    // Save locks

    const {

      allowSlideNext,

      allowSlidePrev,

      snapGrid

    } = swiper;

    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;



    // Disable locks on resize

    swiper.allowSlideNext = true;

    swiper.allowSlidePrev = true;

    swiper.updateSize();

    swiper.updateSlides();

    swiper.updateSlidesClasses();

    const isVirtualLoop = isVirtual && params.loop;

    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {

      swiper.slideTo(swiper.slides.length - 1, 0, false, true);

    } else {

      if (swiper.params.loop && !isVirtual) {

        swiper.slideToLoop(swiper.realIndex, 0, false, true);

      } else {

        swiper.slideTo(swiper.activeIndex, 0, false, true);

      }

    }

    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {

      clearTimeout(swiper.autoplay.resizeTimeout);

      swiper.autoplay.resizeTimeout = setTimeout(() => {

        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {

          swiper.autoplay.resume();

        }

      }, 500);

    }

    // Return locks after resize

    swiper.allowSlidePrev = allowSlidePrev;

    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {

      swiper.checkOverflow();

    }

  }



  function onClick(e) {

    const swiper = this;

    if (!swiper.enabled) return;

    if (!swiper.allowClick) {

      if (swiper.params.preventClicks) e.preventDefault();

      if (swiper.params.preventClicksPropagation && swiper.animating) {

        e.stopPropagation();

        e.stopImmediatePropagation();

      }

    }

  }



  function onScroll() {

    const swiper = this;

    const {

      wrapperEl,

      rtlTranslate,

      enabled

    } = swiper;

    if (!enabled) return;

    swiper.previousTranslate = swiper.translate;

    if (swiper.isHorizontal()) {

      swiper.translate = -wrapperEl.scrollLeft;

    } else {

      swiper.translate = -wrapperEl.scrollTop;

    }

    // eslint-disable-next-line

    if (swiper.translate === 0) swiper.translate = 0;

    swiper.updateActiveIndex();

    swiper.updateSlidesClasses();

    let newProgress;

    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    if (translatesDiff === 0) {

      newProgress = 0;

    } else {

      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;

    }

    if (newProgress !== swiper.progress) {

      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);

    }

    swiper.emit('setTranslate', swiper.translate, false);

  }



  function onLoad(e) {

    const swiper = this;

    processLazyPreloader(swiper, e.target);

    if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {

      return;

    }

    swiper.update();

  }



  function onDocumentTouchStart() {

    const swiper = this;

    if (swiper.documentTouchHandlerProceeded) return;

    swiper.documentTouchHandlerProceeded = true;

    if (swiper.params.touchReleaseOnEdges) {

      swiper.el.style.touchAction = 'auto';

    }

  }



  const events = (swiper, method) => {

    const document = getDocument();

    const {

      params,

      el,

      wrapperEl,

      device

    } = swiper;

    const capture = !!params.nested;

    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

    const swiperMethod = method;

    if (!el || typeof el === 'string') return;



    // Touch Events

    document[domMethod]('touchstart', swiper.onDocumentTouchStart, {

      passive: false,

      capture

    });

    el[domMethod]('touchstart', swiper.onTouchStart, {

      passive: false

    });

    el[domMethod]('pointerdown', swiper.onTouchStart, {

      passive: false

    });

    document[domMethod]('touchmove', swiper.onTouchMove, {

      passive: false,

      capture

    });

    document[domMethod]('pointermove', swiper.onTouchMove, {

      passive: false,

      capture

    });

    document[domMethod]('touchend', swiper.onTouchEnd, {

      passive: true

    });

    document[domMethod]('pointerup', swiper.onTouchEnd, {

      passive: true

    });

    document[domMethod]('pointercancel', swiper.onTouchEnd, {

      passive: true

    });

    document[domMethod]('touchcancel', swiper.onTouchEnd, {

      passive: true

    });

    document[domMethod]('pointerout', swiper.onTouchEnd, {

      passive: true

    });

    document[domMethod]('pointerleave', swiper.onTouchEnd, {

      passive: true

    });

    document[domMethod]('contextmenu', swiper.onTouchEnd, {

      passive: true

    });



    // Prevent Links Clicks

    if (params.preventClicks || params.preventClicksPropagation) {

      el[domMethod]('click', swiper.onClick, true);

    }

    if (params.cssMode) {

      wrapperEl[domMethod]('scroll', swiper.onScroll);

    }



    // Resize handler

    if (params.updateOnWindowResize) {

      swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);

    } else {

      swiper[swiperMethod]('observerUpdate', onResize, true);

    }



    // Images loader

    el[domMethod]('load', swiper.onLoad, {

      capture: true

    });

  };

  function attachEvents() {

    const swiper = this;

    const {

      params

    } = swiper;

    swiper.onTouchStart = onTouchStart.bind(swiper);

    swiper.onTouchMove = onTouchMove.bind(swiper);

    swiper.onTouchEnd = onTouchEnd.bind(swiper);

    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);

    if (params.cssMode) {

      swiper.onScroll = onScroll.bind(swiper);

    }

    swiper.onClick = onClick.bind(swiper);

    swiper.onLoad = onLoad.bind(swiper);

    events(swiper, 'on');

  }

  function detachEvents() {

    const swiper = this;

    events(swiper, 'off');

  }

  var events$1 = {

    attachEvents,

    detachEvents

  };



  const isGridEnabled = (swiper, params) => {

    return swiper.grid && params.grid && params.grid.rows > 1;

  };

  function setBreakpoint() {

    const swiper = this;

    const {

      realIndex,

      initialized,

      params,

      el

    } = swiper;

    const breakpoints = params.breakpoints;

    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

    const document = getDocument();



    // Get breakpoint for window/container width and update parameters

    const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';

    const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);

    const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);

    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;

    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

    const breakpointParams = breakpointOnlyParams || swiper.originalParams;

    const wasMultiRow = isGridEnabled(swiper, params);

    const isMultiRow = isGridEnabled(swiper, breakpointParams);

    const wasGrabCursor = swiper.params.grabCursor;

    const isGrabCursor = breakpointParams.grabCursor;

    const wasEnabled = params.enabled;

    if (wasMultiRow && !isMultiRow) {

      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);

      swiper.emitContainerClasses();

    } else if (!wasMultiRow && isMultiRow) {

      el.classList.add(`${params.containerModifierClass}grid`);

      if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {

        el.classList.add(`${params.containerModifierClass}grid-column`);

      }

      swiper.emitContainerClasses();

    }

    if (wasGrabCursor && !isGrabCursor) {

      swiper.unsetGrabCursor();

    } else if (!wasGrabCursor && isGrabCursor) {

      swiper.setGrabCursor();

    }



    // Toggle navigation, pagination, scrollbar

    ['navigation', 'pagination', 'scrollbar'].forEach(prop => {

      if (typeof breakpointParams[prop] === 'undefined') return;

      const wasModuleEnabled = params[prop] && params[prop].enabled;

      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;

      if (wasModuleEnabled && !isModuleEnabled) {

        swiper[prop].disable();

      }

      if (!wasModuleEnabled && isModuleEnabled) {

        swiper[prop].enable();

      }

    });

    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;

    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

    const wasLoop = params.loop;

    if (directionChanged && initialized) {

      swiper.changeDirection();

    }

    extend(swiper.params, breakpointParams);

    const isEnabled = swiper.params.enabled;

    const hasLoop = swiper.params.loop;

    Object.assign(swiper, {

      allowTouchMove: swiper.params.allowTouchMove,

      allowSlideNext: swiper.params.allowSlideNext,

      allowSlidePrev: swiper.params.allowSlidePrev

    });

    if (wasEnabled && !isEnabled) {

      swiper.disable();

    } else if (!wasEnabled && isEnabled) {

      swiper.enable();

    }

    swiper.currentBreakpoint = breakpoint;

    swiper.emit('_beforeBreakpoint', breakpointParams);

    if (initialized) {

      if (needsReLoop) {

        swiper.loopDestroy();

        swiper.loopCreate(realIndex);

        swiper.updateSlides();

      } else if (!wasLoop && hasLoop) {

        swiper.loopCreate(realIndex);

        swiper.updateSlides();

      } else if (wasLoop && !hasLoop) {

        swiper.loopDestroy();

      }

    }

    swiper.emit('breakpoint', breakpointParams);

  }



  function getBreakpoint(breakpoints, base, containerEl) {

    if (base === void 0) {

      base = 'window';

    }

    if (!breakpoints || base === 'container' && !containerEl) return undefined;

    let breakpoint = false;

    const window = getWindow();

    const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;

    const points = Object.keys(breakpoints).map(point => {

      if (typeof point === 'string' && point.indexOf('@') === 0) {

        const minRatio = parseFloat(point.substr(1));

        const value = currentHeight * minRatio;

        return {

          value,

          point

        };

      }

      return {

        value: point,

        point

      };

    });

    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

    for (let i = 0; i < points.length; i += 1) {

      const {

        point,

        value

      } = points[i];

      if (base === 'window') {

        if (window.matchMedia(`(min-width: ${value}px)`).matches) {

          breakpoint = point;

        }

      } else if (value <= containerEl.clientWidth) {

        breakpoint = point;

      }

    }

    return breakpoint || 'max';

  }



  var breakpoints = {

    setBreakpoint,

    getBreakpoint

  };



  function prepareClasses(entries, prefix) {

    const resultClasses = [];

    entries.forEach(item => {

      if (typeof item === 'object') {

        Object.keys(item).forEach(classNames => {

          if (item[classNames]) {

            resultClasses.push(prefix + classNames);

          }

        });

      } else if (typeof item === 'string') {

        resultClasses.push(prefix + item);

      }

    });

    return resultClasses;

  }

  function addClasses() {

    const swiper = this;

    const {

      classNames,

      params,

      rtl,

      el,

      device

    } = swiper;

    // prettier-ignore

    const suffixes = prepareClasses(['initialized', params.direction, {

      'free-mode': swiper.params.freeMode && params.freeMode.enabled

    }, {

      'autoheight': params.autoHeight

    }, {

      'rtl': rtl

    }, {

      'grid': params.grid && params.grid.rows > 1

    }, {

      'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'

    }, {

      'android': device.android

    }, {

      'ios': device.ios

    }, {

      'css-mode': params.cssMode

    }, {

      'centered': params.cssMode && params.centeredSlides

    }, {

      'watch-progress': params.watchSlidesProgress

    }], params.containerModifierClass);

    classNames.push(...suffixes);

    el.classList.add(...classNames);

    swiper.emitContainerClasses();

  }



  function removeClasses() {

    const swiper = this;

    const {

      el,

      classNames

    } = swiper;

    if (!el || typeof el === 'string') return;

    el.classList.remove(...classNames);

    swiper.emitContainerClasses();

  }



  var classes = {

    addClasses,

    removeClasses

  };



  function checkOverflow() {

    const swiper = this;

    const {

      isLocked: wasLocked,

      params

    } = swiper;

    const {

      slidesOffsetBefore

    } = params;

    if (slidesOffsetBefore) {

      const lastSlideIndex = swiper.slides.length - 1;

      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;

      swiper.isLocked = swiper.size > lastSlideRightEdge;

    } else {

      swiper.isLocked = swiper.snapGrid.length === 1;

    }

    if (params.allowSlideNext === true) {

      swiper.allowSlideNext = !swiper.isLocked;

    }

    if (params.allowSlidePrev === true) {

      swiper.allowSlidePrev = !swiper.isLocked;

    }

    if (wasLocked && wasLocked !== swiper.isLocked) {

      swiper.isEnd = false;

    }

    if (wasLocked !== swiper.isLocked) {

      swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

    }

  }

  var checkOverflow$1 = {

    checkOverflow

  };



  var defaults = {

    init: true,

    direction: 'horizontal',

    oneWayMovement: false,

    swiperElementNodeName: 'SWIPER-CONTAINER',

    touchEventsTarget: 'wrapper',

    initialSlide: 0,

    speed: 300,

    cssMode: false,

    updateOnWindowResize: true,

    resizeObserver: true,

    nested: false,

    createElements: false,

    eventsPrefix: 'swiper',

    enabled: true,

    focusableElements: 'input, select, option, textarea, button, video, label',

    // Overrides

    width: null,

    height: null,

    //

    preventInteractionOnTransition: false,

    // ssr

    userAgent: null,

    url: null,

    // To support iOS's swipe-to-go-back gesture (when being used in-app).

    edgeSwipeDetection: false,

    edgeSwipeThreshold: 20,

    // Autoheight

    autoHeight: false,

    // Set wrapper width

    setWrapperSize: false,

    // Virtual Translate

    virtualTranslate: false,

    // Effects

    effect: 'slide',

    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'



    // Breakpoints

    breakpoints: undefined,

    breakpointsBase: 'window',

    // Slides grid

    spaceBetween: 0,

    slidesPerView: 1,

    slidesPerGroup: 1,

    slidesPerGroupSkip: 0,

    slidesPerGroupAuto: false,

    centeredSlides: false,

    centeredSlidesBounds: false,

    slidesOffsetBefore: 0,

    // in px

    slidesOffsetAfter: 0,

    // in px

    normalizeSlideIndex: true,

    centerInsufficientSlides: false,

    // Disable swiper and hide navigation when container not overflow

    watchOverflow: true,

    // Round length

    roundLengths: false,

    // Touches

    touchRatio: 1,

    touchAngle: 45,

    simulateTouch: true,

    shortSwipes: true,

    longSwipes: true,

    longSwipesRatio: 0.5,

    longSwipesMs: 300,

    followFinger: true,

    allowTouchMove: true,

    threshold: 5,

    touchMoveStopPropagation: false,

    touchStartPreventDefault: true,

    touchStartForcePreventDefault: false,

    touchReleaseOnEdges: false,

    // Unique Navigation Elements

    uniqueNavElements: true,

    // Resistance

    resistance: true,

    resistanceRatio: 0.85,

    // Progress

    watchSlidesProgress: false,

    // Cursor

    grabCursor: false,

    // Clicks

    preventClicks: true,

    preventClicksPropagation: true,

    slideToClickedSlide: false,

    // loop

    loop: false,

    loopAddBlankSlides: true,

    loopAdditionalSlides: 0,

    loopPreventsSliding: true,

    // rewind

    rewind: false,

    // Swiping/no swiping

    allowSlidePrev: true,

    allowSlideNext: true,

    swipeHandler: null,

    // '.swipe-handler',

    noSwiping: true,

    noSwipingClass: 'swiper-no-swiping',

    noSwipingSelector: null,

    // Passive Listeners

    passiveListeners: true,

    maxBackfaceHiddenSlides: 10,

    // NS

    containerModifierClass: 'swiper-',

    // NEW

    slideClass: 'swiper-slide',

    slideBlankClass: 'swiper-slide-blank',

    slideActiveClass: 'swiper-slide-active',

    slideVisibleClass: 'swiper-slide-visible',

    slideFullyVisibleClass: 'swiper-slide-fully-visible',

    slideNextClass: 'swiper-slide-next',

    slidePrevClass: 'swiper-slide-prev',

    wrapperClass: 'swiper-wrapper',

    lazyPreloaderClass: 'swiper-lazy-preloader',

    lazyPreloadPrevNext: 0,

    // Callbacks

    runCallbacksOnInit: true,

    // Internals

    _emitClasses: false

  };



  function moduleExtendParams(params, allModulesParams) {

    return function extendParams(obj) {

      if (obj === void 0) {

        obj = {};

      }

      const moduleParamName = Object.keys(obj)[0];

      const moduleParams = obj[moduleParamName];

      if (typeof moduleParams !== 'object' || moduleParams === null) {

        extend(allModulesParams, obj);

        return;

      }

      if (params[moduleParamName] === true) {

        params[moduleParamName] = {

          enabled: true

        };

      }

      if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {

        params[moduleParamName].auto = true;

      }

      if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {

        params[moduleParamName].auto = true;

      }

      if (!(moduleParamName in params && 'enabled' in moduleParams)) {

        extend(allModulesParams, obj);

        return;

      }

      if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {

        params[moduleParamName].enabled = true;

      }

      if (!params[moduleParamName]) params[moduleParamName] = {

        enabled: false

      };

      extend(allModulesParams, obj);

    };

  }



  /* eslint no-param-reassign: "off" */

  const prototypes = {

    eventsEmitter,

    update,

    translate,

    transition,

    slide,

    loop,

    grabCursor,

    events: events$1,

    breakpoints,

    checkOverflow: checkOverflow$1,

    classes

  };

  const extendedDefaults = {};

  class Swiper {

    constructor() {

      let el;

      let params;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {

        args[_key] = arguments[_key];

      }

      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {

        params = args[0];

      } else {

        [el, params] = args;

      }

      if (!params) params = {};

      params = extend({}, params);

      if (el && !params.el) params.el = el;

      const document = getDocument();

      if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {

        const swipers = [];

        document.querySelectorAll(params.el).forEach(containerEl => {

          const newParams = extend({}, params, {

            el: containerEl

          });

          swipers.push(new Swiper(newParams));

        });

        // eslint-disable-next-line no-constructor-return

        return swipers;

      }



      // Swiper Instance

      const swiper = this;

      swiper.__swiper__ = true;

      swiper.support = getSupport();

      swiper.device = getDevice({

        userAgent: params.userAgent

      });

      swiper.browser = getBrowser();

      swiper.eventsListeners = {};

      swiper.eventsAnyListeners = [];

      swiper.modules = [...swiper.__modules__];

      if (params.modules && Array.isArray(params.modules)) {

        swiper.modules.push(...params.modules);

      }

      const allModulesParams = {};

      swiper.modules.forEach(mod => {

        mod({

          params,

          swiper,

          extendParams: moduleExtendParams(params, allModulesParams),

          on: swiper.on.bind(swiper),

          once: swiper.once.bind(swiper),

          off: swiper.off.bind(swiper),

          emit: swiper.emit.bind(swiper)

        });

      });



      // Extend defaults with modules params

      const swiperParams = extend({}, defaults, allModulesParams);



      // Extend defaults with passed params

      swiper.params = extend({}, swiperParams, extendedDefaults, params);

      swiper.originalParams = extend({}, swiper.params);

      swiper.passedParams = extend({}, params);



      // add event listeners

      if (swiper.params && swiper.params.on) {

        Object.keys(swiper.params.on).forEach(eventName => {

          swiper.on(eventName, swiper.params.on[eventName]);

        });

      }

      if (swiper.params && swiper.params.onAny) {

        swiper.onAny(swiper.params.onAny);

      }



      // Extend Swiper

      Object.assign(swiper, {

        enabled: swiper.params.enabled,

        el,

        // Classes

        classNames: [],

        // Slides

        slides: [],

        slidesGrid: [],

        snapGrid: [],

        slidesSizesGrid: [],

        // isDirection

        isHorizontal() {

          return swiper.params.direction === 'horizontal';

        },

        isVertical() {

          return swiper.params.direction === 'vertical';

        },

        // Indexes

        activeIndex: 0,

        realIndex: 0,

        //

        isBeginning: true,

        isEnd: false,

        // Props

        translate: 0,

        previousTranslate: 0,

        progress: 0,

        velocity: 0,

        animating: false,

        cssOverflowAdjustment() {

          // Returns 0 unless `translate` is > 2**23

          // Should be subtracted from css values to prevent overflow

          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;

        },

        // Locks

        allowSlideNext: swiper.params.allowSlideNext,

        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events

        touchEventsData: {

          isTouched: undefined,

          isMoved: undefined,

          allowTouchCallbacks: undefined,

          touchStartTime: undefined,

          isScrolling: undefined,

          currentTranslate: undefined,

          startTranslate: undefined,

          allowThresholdMove: undefined,

          // Form elements to match

          focusableElements: swiper.params.focusableElements,

          // Last click time

          lastClickTime: 0,

          clickTimeout: undefined,

          // Velocities

          velocities: [],

          allowMomentumBounce: undefined,

          startMoving: undefined,

          pointerId: null,

          touchId: null

        },

        // Clicks

        allowClick: true,

        // Touches

        allowTouchMove: swiper.params.allowTouchMove,

        touches: {

          startX: 0,

          startY: 0,

          currentX: 0,

          currentY: 0,

          diff: 0

        },

        // Images

        imagesToLoad: [],

        imagesLoaded: 0

      });

      swiper.emit('_swiper');



      // Init

      if (swiper.params.init) {

        swiper.init();

      }



      // Return app instance

      // eslint-disable-next-line no-constructor-return

      return swiper;

    }

    getDirectionLabel(property) {

      if (this.isHorizontal()) {

        return property;

      }

      // prettier-ignore

      return {

        'width': 'height',

        'margin-top': 'margin-left',

        'margin-bottom ': 'margin-right',

        'margin-left': 'margin-top',

        'margin-right': 'margin-bottom',

        'padding-left': 'padding-top',

        'padding-right': 'padding-bottom',

        'marginRight': 'marginBottom'

      }[property];

    }

    getSlideIndex(slideEl) {

      const {

        slidesEl,

        params

      } = this;

      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);

      const firstSlideIndex = elementIndex(slides[0]);

      return elementIndex(slideEl) - firstSlideIndex;

    }

    getSlideIndexByData(index) {

      return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index));

    }

    getSlideIndexWhenGrid(index) {

      if (this.grid && this.params.grid && this.params.grid.rows > 1) {

        if (this.params.grid.fill === 'column') {

          index = Math.floor(index / this.params.grid.rows);

        } else if (this.params.grid.fill === 'row') {

          index = index % Math.ceil(this.slides.length / this.params.grid.rows);

        }

      }

      return index;

    }

    recalcSlides() {

      const swiper = this;

      const {

        slidesEl,

        params

      } = swiper;

      swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);

    }

    enable() {

      const swiper = this;

      if (swiper.enabled) return;

      swiper.enabled = true;

      if (swiper.params.grabCursor) {

        swiper.setGrabCursor();

      }

      swiper.emit('enable');

    }

    disable() {

      const swiper = this;

      if (!swiper.enabled) return;

      swiper.enabled = false;

      if (swiper.params.grabCursor) {

        swiper.unsetGrabCursor();

      }

      swiper.emit('disable');

    }

    setProgress(progress, speed) {

      const swiper = this;

      progress = Math.min(Math.max(progress, 0), 1);

      const min = swiper.minTranslate();

      const max = swiper.maxTranslate();

      const current = (max - min) * progress + min;

      swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);

      swiper.updateActiveIndex();

      swiper.updateSlidesClasses();

    }

    emitContainerClasses() {

      const swiper = this;

      if (!swiper.params._emitClasses || !swiper.el) return;

      const cls = swiper.el.className.split(' ').filter(className => {

        return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;

      });

      swiper.emit('_containerClasses', cls.join(' '));

    }

    getSlideClasses(slideEl) {

      const swiper = this;

      if (swiper.destroyed) return '';

      return slideEl.className.split(' ').filter(className => {

        return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;

      }).join(' ');

    }

    emitSlidesClasses() {

      const swiper = this;

      if (!swiper.params._emitClasses || !swiper.el) return;

      const updates = [];

      swiper.slides.forEach(slideEl => {

        const classNames = swiper.getSlideClasses(slideEl);

        updates.push({

          slideEl,

          classNames

        });

        swiper.emit('_slideClass', slideEl, classNames);

      });

      swiper.emit('_slideClasses', updates);

    }

    slidesPerViewDynamic(view, exact) {

      if (view === void 0) {

        view = 'current';

      }

      if (exact === void 0) {

        exact = false;

      }

      const swiper = this;

      const {

        params,

        slides,

        slidesGrid,

        slidesSizesGrid,

        size: swiperSize,

        activeIndex

      } = swiper;

      let spv = 1;

      if (typeof params.slidesPerView === 'number') return params.slidesPerView;

      if (params.centeredSlides) {

        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;

        let breakLoop;

        for (let i = activeIndex + 1; i < slides.length; i += 1) {

          if (slides[i] && !breakLoop) {

            slideSize += Math.ceil(slides[i].swiperSlideSize);

            spv += 1;

            if (slideSize > swiperSize) breakLoop = true;

          }

        }

        for (let i = activeIndex - 1; i >= 0; i -= 1) {

          if (slides[i] && !breakLoop) {

            slideSize += slides[i].swiperSlideSize;

            spv += 1;

            if (slideSize > swiperSize) breakLoop = true;

          }

        }

      } else {

        // eslint-disable-next-line

        if (view === 'current') {

          for (let i = activeIndex + 1; i < slides.length; i += 1) {

            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

            if (slideInView) {

              spv += 1;

            }

          }

        } else {

          // previous

          for (let i = activeIndex - 1; i >= 0; i -= 1) {

            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

            if (slideInView) {

              spv += 1;

            }

          }

        }

      }

      return spv;

    }

    update() {

      const swiper = this;

      if (!swiper || swiper.destroyed) return;

      const {

        snapGrid,

        params

      } = swiper;

      // Breakpoints

      if (params.breakpoints) {

        swiper.setBreakpoint();

      }

      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {

        if (imageEl.complete) {

          processLazyPreloader(swiper, imageEl);

        }

      });

      swiper.updateSize();

      swiper.updateSlides();

      swiper.updateProgress();

      swiper.updateSlidesClasses();

      function setTranslate() {

        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;

        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());

        swiper.setTranslate(newTranslate);

        swiper.updateActiveIndex();

        swiper.updateSlidesClasses();

      }

      let translated;

      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {

        setTranslate();

        if (params.autoHeight) {

          swiper.updateAutoHeight();

        }

      } else {

        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {

          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;

          translated = swiper.slideTo(slides.length - 1, 0, false, true);

        } else {

          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);

        }

        if (!translated) {

          setTranslate();

        }

      }

      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {

        swiper.checkOverflow();

      }

      swiper.emit('update');

    }

    changeDirection(newDirection, needUpdate) {

      if (needUpdate === void 0) {

        needUpdate = true;

      }

      const swiper = this;

      const currentDirection = swiper.params.direction;

      if (!newDirection) {

        // eslint-disable-next-line

        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';

      }

      if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {

        return swiper;

      }

      swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);

      swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);

      swiper.emitContainerClasses();

      swiper.params.direction = newDirection;

      swiper.slides.forEach(slideEl => {

        if (newDirection === 'vertical') {

          slideEl.style.width = '';

        } else {

          slideEl.style.height = '';

        }

      });

      swiper.emit('changeDirection');

      if (needUpdate) swiper.update();

      return swiper;

    }

    changeLanguageDirection(direction) {

      const swiper = this;

      if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;

      swiper.rtl = direction === 'rtl';

      swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;

      if (swiper.rtl) {

        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);

        swiper.el.dir = 'rtl';

      } else {

        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);

        swiper.el.dir = 'ltr';

      }

      swiper.update();

    }

    mount(element) {

      const swiper = this;

      if (swiper.mounted) return true;



      // Find el

      let el = element || swiper.params.el;

      if (typeof el === 'string') {

        el = document.querySelector(el);

      }

      if (!el) {

        return false;

      }

      el.swiper = swiper;

      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {

        swiper.isElement = true;

      }

      const getWrapperSelector = () => {

        return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;

      };

      const getWrapper = () => {

        if (el && el.shadowRoot && el.shadowRoot.querySelector) {

          const res = el.shadowRoot.querySelector(getWrapperSelector());

          // Children needs to return slot items

          return res;

        }

        return elementChildren(el, getWrapperSelector())[0];

      };

      // Find Wrapper

      let wrapperEl = getWrapper();

      if (!wrapperEl && swiper.params.createElements) {

        wrapperEl = createElement('div', swiper.params.wrapperClass);

        el.append(wrapperEl);

        elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {

          wrapperEl.append(slideEl);

        });

      }

      Object.assign(swiper, {

        el,

        wrapperEl,

        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,

        hostEl: swiper.isElement ? el.parentNode.host : el,

        mounted: true,

        // RTL

        rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',

        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),

        wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'

      });

      return true;

    }

    init(el) {

      const swiper = this;

      if (swiper.initialized) return swiper;

      const mounted = swiper.mount(el);

      if (mounted === false) return swiper;

      swiper.emit('beforeInit');



      // Set breakpoint

      if (swiper.params.breakpoints) {

        swiper.setBreakpoint();

      }



      // Add Classes

      swiper.addClasses();



      // Update size

      swiper.updateSize();



      // Update slides

      swiper.updateSlides();

      if (swiper.params.watchOverflow) {

        swiper.checkOverflow();

      }



      // Set Grab Cursor

      if (swiper.params.grabCursor && swiper.enabled) {

        swiper.setGrabCursor();

      }



      // Slide To Initial Slide

      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {

        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);

      } else {

        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);

      }



      // Create loop

      if (swiper.params.loop) {

        swiper.loopCreate(undefined, true);

      }



      // Attach events

      swiper.attachEvents();

      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];

      if (swiper.isElement) {

        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));

      }

      lazyElements.forEach(imageEl => {

        if (imageEl.complete) {

          processLazyPreloader(swiper, imageEl);

        } else {

          imageEl.addEventListener('load', e => {

            processLazyPreloader(swiper, e.target);

          });

        }

      });

      preload(swiper);



      // Init Flag

      swiper.initialized = true;

      preload(swiper);



      // Emit

      swiper.emit('init');

      swiper.emit('afterInit');

      return swiper;

    }

    destroy(deleteInstance, cleanStyles) {

      if (deleteInstance === void 0) {

        deleteInstance = true;

      }

      if (cleanStyles === void 0) {

        cleanStyles = true;

      }

      const swiper = this;

      const {

        params,

        el,

        wrapperEl,

        slides

      } = swiper;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {

        return null;

      }

      swiper.emit('beforeDestroy');



      // Init Flag

      swiper.initialized = false;



      // Detach events

      swiper.detachEvents();



      // Destroy loop

      if (params.loop) {

        swiper.loopDestroy();

      }



      // Cleanup styles

      if (cleanStyles) {

        swiper.removeClasses();

        if (el && typeof el !== 'string') {

          el.removeAttribute('style');

        }

        if (wrapperEl) {

          wrapperEl.removeAttribute('style');

        }

        if (slides && slides.length) {

          slides.forEach(slideEl => {

            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);

            slideEl.removeAttribute('style');

            slideEl.removeAttribute('data-swiper-slide-index');

          });

        }

      }

      swiper.emit('destroy');



      // Detach emitter events

      Object.keys(swiper.eventsListeners).forEach(eventName => {

        swiper.off(eventName);

      });

      if (deleteInstance !== false) {

        if (swiper.el && typeof swiper.el !== 'string') {

          swiper.el.swiper = null;

        }

        deleteProps(swiper);

      }

      swiper.destroyed = true;

      return null;

    }

    static extendDefaults(newDefaults) {

      extend(extendedDefaults, newDefaults);

    }

    static get extendedDefaults() {

      return extendedDefaults;

    }

    static get defaults() {

      return defaults;

    }

    static installModule(mod) {

      if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];

      const modules = Swiper.prototype.__modules__;

      if (typeof mod === 'function' && modules.indexOf(mod) < 0) {

        modules.push(mod);

      }

    }

    static use(module) {

      if (Array.isArray(module)) {

        module.forEach(m => Swiper.installModule(m));

        return Swiper;

      }

      Swiper.installModule(module);

      return Swiper;

    }

  }

  Object.keys(prototypes).forEach(prototypeGroup => {

    Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {

      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];

    });

  });

  Swiper.use([Resize, Observer]);



  function Virtual(_ref) {

    let {

      swiper,

      extendParams,

      on,

      emit

    } = _ref;

    extendParams({

      virtual: {

        enabled: false,

        slides: [],

        cache: true,

        renderSlide: null,

        renderExternal: null,

        renderExternalUpdate: true,

        addSlidesBefore: 0,

        addSlidesAfter: 0

      }

    });

    let cssModeTimeout;

    const document = getDocument();

    swiper.virtual = {

      cache: {},

      from: undefined,

      to: undefined,

      slides: [],

      offset: 0,

      slidesGrid: []

    };

    const tempDOM = document.createElement('div');

    function renderSlide(slide, index) {

      const params = swiper.params.virtual;

      if (params.cache && swiper.virtual.cache[index]) {

        return swiper.virtual.cache[index];

      }

      // eslint-disable-next-line

      let slideEl;

      if (params.renderSlide) {

        slideEl = params.renderSlide.call(swiper, slide, index);

        if (typeof slideEl === 'string') {

          setInnerHTML(tempDOM, slideEl);

          slideEl = tempDOM.children[0];

        }

      } else if (swiper.isElement) {

        slideEl = createElement('swiper-slide');

      } else {

        slideEl = createElement('div', swiper.params.slideClass);

      }

      slideEl.setAttribute('data-swiper-slide-index', index);

      if (!params.renderSlide) {

        setInnerHTML(slideEl, slide);

      }

      if (params.cache) {

        swiper.virtual.cache[index] = slideEl;

      }

      return slideEl;

    }

    function update(force, beforeInit, forceActiveIndex) {

      const {

        slidesPerView,

        slidesPerGroup,

        centeredSlides,

        loop: isLoop,

        initialSlide

      } = swiper.params;

      if (beforeInit && !isLoop && initialSlide > 0) {

        return;

      }

      const {

        addSlidesBefore,

        addSlidesAfter

      } = swiper.params.virtual;

      const {

        from: previousFrom,

        to: previousTo,

        slides,

        slidesGrid: previousSlidesGrid,

        offset: previousOffset

      } = swiper.virtual;

      if (!swiper.params.cssMode) {

        swiper.updateActiveIndex();

      }

      const activeIndex = typeof forceActiveIndex === 'undefined' ? swiper.activeIndex || 0 : forceActiveIndex;

      let offsetProp;

      if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';

      let slidesAfter;

      let slidesBefore;

      if (centeredSlides) {

        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;

        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;

      } else {

        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;

        slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;

      }

      let from = activeIndex - slidesBefore;

      let to = activeIndex + slidesAfter;

      if (!isLoop) {

        from = Math.max(from, 0);

        to = Math.min(to, slides.length - 1);

      }

      let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      if (isLoop && activeIndex >= slidesBefore) {

        from -= slidesBefore;

        if (!centeredSlides) offset += swiper.slidesGrid[0];

      } else if (isLoop && activeIndex < slidesBefore) {

        from = -slidesBefore;

        if (centeredSlides) offset += swiper.slidesGrid[0];

      }

      Object.assign(swiper.virtual, {

        from,

        to,

        offset,

        slidesGrid: swiper.slidesGrid,

        slidesBefore,

        slidesAfter

      });

      function onRendered() {

        swiper.updateSlides();

        swiper.updateProgress();

        swiper.updateSlidesClasses();

        emit('virtualUpdate');

      }

      if (previousFrom === from && previousTo === to && !force) {

        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {

          swiper.slides.forEach(slideEl => {

            slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;

          });

        }

        swiper.updateProgress();

        emit('virtualUpdate');

        return;

      }

      if (swiper.params.virtual.renderExternal) {

        swiper.params.virtual.renderExternal.call(swiper, {

          offset,

          from,

          to,

          slides: function getSlides() {

            const slidesToRender = [];

            for (let i = from; i <= to; i += 1) {

              slidesToRender.push(slides[i]);

            }

            return slidesToRender;

          }()

        });

        if (swiper.params.virtual.renderExternalUpdate) {

          onRendered();

        } else {

          emit('virtualUpdate');

        }

        return;

      }

      const prependIndexes = [];

      const appendIndexes = [];

      const getSlideIndex = index => {

        let slideIndex = index;

        if (index < 0) {

          slideIndex = slides.length + index;

        } else if (slideIndex >= slides.length) {

          // eslint-disable-next-line

          slideIndex = slideIndex - slides.length;

        }

        return slideIndex;

      };

      if (force) {

        swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {

          slideEl.remove();

        });

      } else {

        for (let i = previousFrom; i <= previousTo; i += 1) {

          if (i < from || i > to) {

            const slideIndex = getSlideIndex(i);

            swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {

              slideEl.remove();

            });

          }

        }

      }

      const loopFrom = isLoop ? -slides.length : 0;

      const loopTo = isLoop ? slides.length * 2 : slides.length;

      for (let i = loopFrom; i < loopTo; i += 1) {

        if (i >= from && i <= to) {

          const slideIndex = getSlideIndex(i);

          if (typeof previousTo === 'undefined' || force) {

            appendIndexes.push(slideIndex);

          } else {

            if (i > previousTo) appendIndexes.push(slideIndex);

            if (i < previousFrom) prependIndexes.push(slideIndex);

          }

        }

      }

      appendIndexes.forEach(index => {

        swiper.slidesEl.append(renderSlide(slides[index], index));

      });

      if (isLoop) {

        for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {

          const index = prependIndexes[i];

          swiper.slidesEl.prepend(renderSlide(slides[index], index));

        }

      } else {

        prependIndexes.sort((a, b) => b - a);

        prependIndexes.forEach(index => {

          swiper.slidesEl.prepend(renderSlide(slides[index], index));

        });

      }

      elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {

        slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;

      });

      onRendered();

    }

    function appendSlide(slides) {

      if (typeof slides === 'object' && 'length' in slides) {

        for (let i = 0; i < slides.length; i += 1) {

          if (slides[i]) swiper.virtual.slides.push(slides[i]);

        }

      } else {

        swiper.virtual.slides.push(slides);

      }

      update(true);

    }

    function prependSlide(slides) {

      const activeIndex = swiper.activeIndex;

      let newActiveIndex = activeIndex + 1;

      let numberOfNewSlides = 1;

      if (Array.isArray(slides)) {

        for (let i = 0; i < slides.length; i += 1) {

          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);

        }

        newActiveIndex = activeIndex + slides.length;

        numberOfNewSlides = slides.length;

      } else {

        swiper.virtual.slides.unshift(slides);

      }

      if (swiper.params.virtual.cache) {

        const cache = swiper.virtual.cache;

        const newCache = {};

        Object.keys(cache).forEach(cachedIndex => {

          const cachedEl = cache[cachedIndex];

          const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');

          if (cachedElIndex) {

            cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);

          }

          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;

        });

        swiper.virtual.cache = newCache;

      }

      update(true);

      swiper.slideTo(newActiveIndex, 0);

    }

    function removeSlide(slidesIndexes) {

      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;

      let activeIndex = swiper.activeIndex;

      if (Array.isArray(slidesIndexes)) {

        for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {

          if (swiper.params.virtual.cache) {

            delete swiper.virtual.cache[slidesIndexes[i]];

            // shift cache indexes

            Object.keys(swiper.virtual.cache).forEach(key => {

              if (key > slidesIndexes) {

                swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];

                swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);

                delete swiper.virtual.cache[key];

              }

            });

          }

          swiper.virtual.slides.splice(slidesIndexes[i], 1);

          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;

          activeIndex = Math.max(activeIndex, 0);

        }

      } else {

        if (swiper.params.virtual.cache) {

          delete swiper.virtual.cache[slidesIndexes];

          // shift cache indexes

          Object.keys(swiper.virtual.cache).forEach(key => {

            if (key > slidesIndexes) {

              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];

              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);

              delete swiper.virtual.cache[key];

            }

          });

        }

        swiper.virtual.slides.splice(slidesIndexes, 1);

        if (slidesIndexes < activeIndex) activeIndex -= 1;

        activeIndex = Math.max(activeIndex, 0);

      }

      update(true);

      swiper.slideTo(activeIndex, 0);

    }

    function removeAllSlides() {

      swiper.virtual.slides = [];

      if (swiper.params.virtual.cache) {

        swiper.virtual.cache = {};

      }

      update(true);

      swiper.slideTo(0, 0);

    }

    on('beforeInit', () => {

      if (!swiper.params.virtual.enabled) return;

      let domSlidesAssigned;

      if (typeof swiper.passedParams.virtual.slides === 'undefined') {

        const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));

        if (slides && slides.length) {

          swiper.virtual.slides = [...slides];

          domSlidesAssigned = true;

          slides.forEach((slideEl, slideIndex) => {

            slideEl.setAttribute('data-swiper-slide-index', slideIndex);

            swiper.virtual.cache[slideIndex] = slideEl;

            slideEl.remove();

          });

        }

      }

      if (!domSlidesAssigned) {

        swiper.virtual.slides = swiper.params.virtual.slides;

      }

      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);

      swiper.params.watchSlidesProgress = true;

      swiper.originalParams.watchSlidesProgress = true;

      update(false, true);

    });

    on('setTranslate', () => {

      if (!swiper.params.virtual.enabled) return;

      if (swiper.params.cssMode && !swiper._immediateVirtual) {

        clearTimeout(cssModeTimeout);

        cssModeTimeout = setTimeout(() => {

          update();

        }, 100);

      } else {

        update();

      }

    });

    on('init update resize', () => {

      if (!swiper.params.virtual.enabled) return;

      if (swiper.params.cssMode) {

        setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);

      }

    });

    Object.assign(swiper.virtual, {

      appendSlide,

      prependSlide,

      removeSlide,

      removeAllSlides,

      update

    });

  }



  /* eslint-disable consistent-return */

  function Keyboard(_ref) {

    let {

      swiper,

      extendParams,

      on,

      emit

    } = _ref;

    const document = getDocument();

    const window = getWindow();

    swiper.keyboard = {

      enabled: false

    };

    extendParams({

      keyboard: {

        enabled: false,

        onlyInViewport: true,

        pageUpDown: true

      }

    });

    function handle(event) {

      if (!swiper.enabled) return;

      const {

        rtlTranslate: rtl

      } = swiper;

      let e = event;

      if (e.originalEvent) e = e.originalEvent; // jquery fix

      const kc = e.keyCode || e.charCode;

      const pageUpDown = swiper.params.keyboard.pageUpDown;

      const isPageUp = pageUpDown && kc === 33;

      const isPageDown = pageUpDown && kc === 34;

      const isArrowLeft = kc === 37;

      const isArrowRight = kc === 39;

      const isArrowUp = kc === 38;

      const isArrowDown = kc === 40;

      // Directions locks

      if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {

        return false;

      }

      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {

        return false;

      }

      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {

        return undefined;

      }

      if (document.activeElement && (document.activeElement.isContentEditable || document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea'))) {

        return undefined;

      }

      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {

        let inView = false;

        // Check that swiper should be inside of visible area of window

        if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {

          return undefined;

        }

        const el = swiper.el;

        const swiperWidth = el.clientWidth;

        const swiperHeight = el.clientHeight;

        const windowWidth = window.innerWidth;

        const windowHeight = window.innerHeight;

        const swiperOffset = elementOffset(el);

        if (rtl) swiperOffset.left -= el.scrollLeft;

        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

        for (let i = 0; i < swiperCoord.length; i += 1) {

          const point = swiperCoord[i];

          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {

            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

            inView = true;

          }

        }

        if (!inView) return undefined;

      }

      if (swiper.isHorizontal()) {

        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {

          if (e.preventDefault) e.preventDefault();else e.returnValue = false;

        }

        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();

        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();

      } else {

        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {

          if (e.preventDefault) e.preventDefault();else e.returnValue = false;

        }

        if (isPageDown || isArrowDown) swiper.slideNext();

        if (isPageUp || isArrowUp) swiper.slidePrev();

      }

      emit('keyPress', kc);

      return undefined;

    }

    function enable() {

      if (swiper.keyboard.enabled) return;

      document.addEventListener('keydown', handle);

      swiper.keyboard.enabled = true;

    }

    function disable() {

      if (!swiper.keyboard.enabled) return;

      document.removeEventListener('keydown', handle);

      swiper.keyboard.enabled = false;

    }

    on('init', () => {

      if (swiper.params.keyboard.enabled) {

        enable();

      }

    });

    on('destroy', () => {

      if (swiper.keyboard.enabled) {

        disable();

      }

    });

    Object.assign(swiper.keyboard, {

      enable,

      disable

    });

  }



  /* eslint-disable consistent-return */

  function Mousewheel(_ref) {

    let {

      swiper,

      extendParams,

      on,

      emit

    } = _ref;

    const window = getWindow();

    extendParams({

      mousewheel: {

        enabled: false,

        releaseOnEdges: false,

        invert: false,

        forceToAxis: false,

        sensitivity: 1,

        eventsTarget: 'container',

        thresholdDelta: null,

        thresholdTime: null,

        noMousewheelClass: 'swiper-no-mousewheel'

      }

    });

    swiper.mousewheel = {

      enabled: false

    };

    let timeout;

    let lastScrollTime = now();

    let lastEventBeforeSnap;

    const recentWheelEvents = [];

    function normalize(e) {

      // Reasonable defaults

      const PIXEL_STEP = 10;

      const LINE_HEIGHT = 40;

      const PAGE_HEIGHT = 800;

      let sX = 0;

      let sY = 0; // spinX, spinY

      let pX = 0;

      let pY = 0; // pixelX, pixelY



      // Legacy

      if ('detail' in e) {

        sY = e.detail;

      }

      if ('wheelDelta' in e) {

        sY = -e.wheelDelta / 120;

      }

      if ('wheelDeltaY' in e) {

        sY = -e.wheelDeltaY / 120;

      }

      if ('wheelDeltaX' in e) {

        sX = -e.wheelDeltaX / 120;

      }



      // side scrolling on FF with DOMMouseScroll

      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {

        sX = sY;

        sY = 0;

      }

      pX = sX * PIXEL_STEP;

      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {

        pY = e.deltaY;

      }

      if ('deltaX' in e) {

        pX = e.deltaX;

      }

      if (e.shiftKey && !pX) {

        // if user scrolls with shift he wants horizontal scroll

        pX = pY;

        pY = 0;

      }

      if ((pX || pY) && e.deltaMode) {

        if (e.deltaMode === 1) {

          // delta in LINE units

          pX *= LINE_HEIGHT;

          pY *= LINE_HEIGHT;

        } else {

          // delta in PAGE units

          pX *= PAGE_HEIGHT;

          pY *= PAGE_HEIGHT;

        }

      }



      // Fall-back if spin cannot be determined

      if (pX && !sX) {

        sX = pX < 1 ? -1 : 1;

      }

      if (pY && !sY) {

        sY = pY < 1 ? -1 : 1;

      }

      return {

        spinX: sX,

        spinY: sY,

        pixelX: pX,

        pixelY: pY

      };

    }

    function handleMouseEnter() {

      if (!swiper.enabled) return;

      swiper.mouseEntered = true;

    }

    function handleMouseLeave() {

      if (!swiper.enabled) return;

      swiper.mouseEntered = false;

    }

    function animateSlider(newEvent) {

      if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {

        // Prevent if delta of wheel scroll delta is below configured threshold

        return false;

      }

      if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {

        // Prevent if time between scrolls is below configured threshold

        return false;

      }



      // If the movement is NOT big enough and

      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):

      //   Don't go any further (avoid insignificant scroll movement).

      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {

        // Return false as a default

        return true;

      }

      // If user is scrolling towards the end:

      //   If the slider hasn't hit the latest slide or

      //   if the slider is a loop and

      //   if the slider isn't moving right now:

      //     Go to next slide and

      //     emit a scroll event.

      // Else (the user is scrolling towards the beginning) and

      // if the slider hasn't hit the first slide or

      // if the slider is a loop and

      // if the slider isn't moving right now:

      //   Go to prev slide and

      //   emit a scroll event.

      if (newEvent.direction < 0) {

        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {

          swiper.slideNext();

          emit('scroll', newEvent.raw);

        }

      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {

        swiper.slidePrev();

        emit('scroll', newEvent.raw);

      }

      // If you got here is because an animation has been triggered so store the current time

      lastScrollTime = new window.Date().getTime();

      // Return false as a default

      return false;

    }

    function releaseScroll(newEvent) {

      const params = swiper.params.mousewheel;

      if (newEvent.direction < 0) {

        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {

          // Return true to animate scroll on edges

          return true;

        }

      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {

        // Return true to animate scroll on edges

        return true;

      }

      return false;

    }

    function handle(event) {

      let e = event;

      let disableParentSwiper = true;

      if (!swiper.enabled) return;



      // Ignore event if the target or its parents have the swiper-no-mousewheel class

      if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;

      const params = swiper.params.mousewheel;

      if (swiper.params.cssMode) {

        e.preventDefault();

      }

      let targetEl = swiper.el;

      if (swiper.params.mousewheel.eventsTarget !== 'container') {

        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);

      }

      const targetElContainsTarget = targetEl && targetEl.contains(e.target);

      if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;

      if (e.originalEvent) e = e.originalEvent; // jquery fix

      let delta = 0;

      const rtlFactor = swiper.rtlTranslate ? -1 : 1;

      const data = normalize(e);

      if (params.forceToAxis) {

        if (swiper.isHorizontal()) {

          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;

        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;

      } else {

        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;

      }

      if (delta === 0) return true;

      if (params.invert) delta = -delta;



      // Get the scroll positions

      let positions = swiper.getTranslate() + delta * params.sensitivity;

      if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();

      if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();



      // When loop is true:

      //     the disableParentSwiper will be true.

      // When loop is false:

      //     if the scroll positions is not on edge,

      //     then the disableParentSwiper will be true.

      //     if the scroll on edge positions,

      //     then the disableParentSwiper will be false.

      disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());

      if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {

        // Register the new event in a variable which stores the relevant data

        const newEvent = {

          time: now(),

          delta: Math.abs(delta),

          direction: Math.sign(delta),

          raw: event

        };



        // Keep the most recent events

        if (recentWheelEvents.length >= 2) {

          recentWheelEvents.shift(); // only store the last N events

        }



        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;

        recentWheelEvents.push(newEvent);



        // If there is at least one previous recorded event:

        //   If direction has changed or

        //   if the scroll is quicker than the previous one:

        //     Animate the slider.

        // Else (this is the first time the wheel is moved):

        //     Animate the slider.

        if (prevEvent) {

          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {

            animateSlider(newEvent);

          }

        } else {

          animateSlider(newEvent);

        }



        // If it's time to release the scroll:

        //   Return now so you don't hit the preventDefault.

        if (releaseScroll(newEvent)) {

          return true;

        }

      } else {

        // Freemode or scrollContainer:



        // If we recently snapped after a momentum scroll, then ignore wheel events

        // to give time for the deceleration to finish. Stop ignoring after 500 msecs

        // or if it's a new scroll (larger delta or inverse sign as last event before

        // an end-of-momentum snap).

        const newEvent = {

          time: now(),

          delta: Math.abs(delta),

          direction: Math.sign(delta)

        };

        const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;

        if (!ignoreWheelEvents) {

          lastEventBeforeSnap = undefined;

          let position = swiper.getTranslate() + delta * params.sensitivity;

          const wasBeginning = swiper.isBeginning;

          const wasEnd = swiper.isEnd;

          if (position >= swiper.minTranslate()) position = swiper.minTranslate();

          if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();

          swiper.setTransition(0);

          swiper.setTranslate(position);

          swiper.updateProgress();

          swiper.updateActiveIndex();

          swiper.updateSlidesClasses();

          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {

            swiper.updateSlidesClasses();

          }

          if (swiper.params.loop) {

            swiper.loopFix({

              direction: newEvent.direction < 0 ? 'next' : 'prev',

              byMousewheel: true

            });

          }

          if (swiper.params.freeMode.sticky) {

            // When wheel scrolling starts with sticky (aka snap) enabled, then detect

            // the end of a momentum scroll by storing recent (N=15?) wheel events.

            // 1. do all N events have decreasing or same (absolute value) delta?

            // 2. did all N events arrive in the last M (M=500?) msecs?

            // 3. does the earliest event have an (absolute value) delta that's

            //    at least P (P=1?) larger than the most recent event's delta?

            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?

            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.

            // Snap immediately and ignore remaining wheel events in this scroll.

            // See comment above for "remaining wheel events in this scroll" determination.

            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.

            clearTimeout(timeout);

            timeout = undefined;

            if (recentWheelEvents.length >= 15) {

              recentWheelEvents.shift(); // only store the last N events

            }



            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;

            const firstEvent = recentWheelEvents[0];

            recentWheelEvents.push(newEvent);

            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {

              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.

              recentWheelEvents.splice(0);

            } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {

              // We're at the end of the deceleration of a momentum scroll, so there's no need

              // to wait for more events. Snap ASAP on the next tick.

              // Also, because there's some remaining momentum we'll bias the snap in the

              // direction of the ongoing scroll because it's better UX for the scroll to snap

              // in the same direction as the scroll instead of reversing to snap.  Therefore,

              // if it's already scrolled more than 20% in the current direction, keep going.

              const snapToThreshold = delta > 0 ? 0.8 : 0.2;

              lastEventBeforeSnap = newEvent;

              recentWheelEvents.splice(0);

              timeout = nextTick(() => {

                if (swiper.destroyed || !swiper.params) return;

                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);

              }, 0); // no delay; move on next tick

            }



            if (!timeout) {

              // if we get here, then we haven't detected the end of a momentum scroll, so

              // we'll consider a scroll "complete" when there haven't been any wheel events

              // for 500ms.

              timeout = nextTick(() => {

                if (swiper.destroyed || !swiper.params) return;

                const snapToThreshold = 0.5;

                lastEventBeforeSnap = newEvent;

                recentWheelEvents.splice(0);

                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);

              }, 500);

            }

          }



          // Emit event

          if (!ignoreWheelEvents) emit('scroll', e);



          // Stop autoplay

          if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();

          // Return page scroll on edge positions

          if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {

            return true;

          }

        }

      }

      if (e.preventDefault) e.preventDefault();else e.returnValue = false;

      return false;

    }

    function events(method) {

      let targetEl = swiper.el;

      if (swiper.params.mousewheel.eventsTarget !== 'container') {

        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);

      }

      targetEl[method]('mouseenter', handleMouseEnter);

      targetEl[method]('mouseleave', handleMouseLeave);

      targetEl[method]('wheel', handle);

    }

    function enable() {

      if (swiper.params.cssMode) {

        swiper.wrapperEl.removeEventListener('wheel', handle);

        return true;

      }

      if (swiper.mousewheel.enabled) return false;

      events('addEventListener');

      swiper.mousewheel.enabled = true;

      return true;

    }

    function disable() {

      if (swiper.params.cssMode) {

        swiper.wrapperEl.addEventListener(event, handle);

        return true;

      }

      if (!swiper.mousewheel.enabled) return false;

      events('removeEventListener');

      swiper.mousewheel.enabled = false;

      return true;

    }

    on('init', () => {

      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {

        disable();

      }

      if (swiper.params.mousewheel.enabled) enable();

    });

    on('destroy', () => {

      if (swiper.params.cssMode) {

        enable();

      }

      if (swiper.mousewheel.enabled) disable();

    });

    Object.assign(swiper.mousewheel, {

      enable,

      disable

    });

  }



  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {

    if (swiper.params.createElements) {

      Object.keys(checkProps).forEach(key => {

        if (!params[key] && params.auto === true) {

          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];

          if (!element) {

            element = createElement('div', checkProps[key]);

            element.className = checkProps[key];

            swiper.el.append(element);

          }

          params[key] = element;

          originalParams[key] = element;

        }

      });

    }

    return params;

  }



  function Navigation(_ref) {

    let {

      swiper,

      extendParams,

      on,

      emit

    } = _ref;

    extendParams({

      navigation: {

        nextEl: null,

        prevEl: null,

        hideOnClick: false,

        disabledClass: 'swiper-button-disabled',

        hiddenClass: 'swiper-button-hidden',

        lockClass: 'swiper-button-lock',

        navigationDisabledClass: 'swiper-navigation-disabled'

      }

    });

    swiper.navigation = {

      nextEl: null,

      prevEl: null

    };

    function getEl(el) {

      let res;

      if (el && typeof el === 'string' && swiper.isElement) {

        res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);

        if (res) return res;

      }

      if (el) {

        if (typeof el === 'string') res = [...document.querySelectorAll(el)];

        if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {

          res = swiper.el.querySelector(el);

        } else if (res && res.length === 1) {

          res = res[0];

        }

      }

      if (el && !res) return el;

      // if (Array.isArray(res) && res.length === 1) res = res[0];

      return res;

    }

    function toggleEl(el, disabled) {

      const params = swiper.params.navigation;

      el = makeElementsArray(el);

      el.forEach(subEl => {

        if (subEl) {

          subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));

          if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;

          if (swiper.params.watchOverflow && swiper.enabled) {

            subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);

          }

        }

      });

    }

    function update() {

      // Update Navigation Buttons

      const {

        nextEl,

        prevEl

      } = swiper.navigation;

      if (swiper.params.loop) {

        toggleEl(prevEl, false);

        toggleEl(nextEl, false);

        return;

      }

      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);

      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);

    }

    function onPrevClick(e) {

      e.preventDefault();

      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;

      swiper.slidePrev();

      emit('navigationPrev');

    }

    function onNextClick(e) {

      e.preventDefault();

      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;

      swiper.slideNext();

      emit('navigationNext');

    }

    function init() {

      const params = swiper.params.navigation;

      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {

        nextEl: 'swiper-button-next',

        prevEl: 'swiper-button-prev'

      });

      if (!(params.nextEl || params.prevEl)) return;

      let nextEl = getEl(params.nextEl);

      let prevEl = getEl(params.prevEl);

      Object.assign(swiper.navigation, {

        nextEl,

        prevEl

      });

      nextEl = makeElementsArray(nextEl);

      prevEl = makeElementsArray(prevEl);

      const initButton = (el, dir) => {

        if (el) {

          el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);

        }

        if (!swiper.enabled && el) {

          el.classList.add(...params.lockClass.split(' '));

        }

      };

      nextEl.forEach(el => initButton(el, 'next'));

      prevEl.forEach(el => initButton(el, 'prev'));

    }

    function destroy() {

      let {

        nextEl,

        prevEl

      } = swiper.navigation;

      nextEl = makeElementsArray(nextEl);

      prevEl = makeElementsArray(prevEl);

      const destroyButton = (el, dir) => {

        el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);

        el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));

      };

      nextEl.forEach(el => destroyButton(el, 'next'));

      prevEl.forEach(el => destroyButton(el, 'prev'));

    }

    on('init', () => {

      if (swiper.params.navigation.enabled === false) {

        // eslint-disable-next-line

        disable();

      } else {

        init();

        update();

      }

    });

    on('toEdge fromEdge lock unlock', () => {

      update();

    });

    on('destroy', () => {

      destroy();

    });

    on('enable disable', () => {

      let {

        nextEl,

        prevEl

      } = swiper.navigation;

      nextEl = makeElementsArray(nextEl);

      prevEl = makeElementsArray(prevEl);

      if (swiper.enabled) {

        update();

        return;

      }

      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));

    });

    on('click', (_s, e) => {

      let {

        nextEl,

        prevEl

      } = swiper.navigation;

      nextEl = makeElementsArray(nextEl);

      prevEl = makeElementsArray(prevEl);

      const targetEl = e.target;

      let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);

      if (swiper.isElement && !targetIsButton) {

        const path = e.path || e.composedPath && e.composedPath();

        if (path) {

          targetIsButton = path.find(pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl));

        }

      }

      if (swiper.params.navigation.hideOnClick && !targetIsButton) {

        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;

        let isHidden;

        if (nextEl.length) {

          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);

        } else if (prevEl.length) {

          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);

        }

        if (isHidden === true) {

          emit('navigationShow');

        } else {

          emit('navigationHide');

        }

        [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));

      }

    });

    const enable = () => {

      swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));

      init();

      update();

    };

    const disable = () => {

      swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));

      destroy();

    };

    Object.assign(swiper.navigation, {

      enable,

      disable,

      update,

      init,

      destroy

    });

  }



  function classesToSelector(classes) {

    if (classes === void 0) {

      classes = '';

    }

    return `.${classes.trim().replace(/([\.:!+\/()[\]])/g, '\\$1') // eslint-disable-line

  .replace(/ /g, '.')}`;

  }



  function Pagination(_ref) {

    let {

      swiper,

      extendParams,

      on,

      emit

    } = _ref;

    const pfx = 'swiper-pagination';

    extendParams({

      pagination: {

        el: null,

        bulletElement: 'span',

        clickable: false,

        hideOnClick: false,

        renderBullet: null,

        renderProgressbar: null,

        renderFraction: null,

        renderCustom: null,

        progressbarOpposite: false,

        type: 'bullets',

        // 'bullets' or 'progressbar' or 'fraction' or 'custom'

        dynamicBullets: false,

        dynamicMainBullets: 1,

        formatFractionCurrent: number => number,

        formatFractionTotal: number => number,

        bulletClass: `${pfx}-bullet`,

        bulletActiveClass: `${pfx}-bullet-active`,

        modifierClass: `${pfx}-`,

        currentClass: `${pfx}-current`,

        totalClass: `${pfx}-total`,

        hiddenClass: `${pfx}-hidden`,

        progressbarFillClass: `${pfx}-progressbar-fill`,

        progressbarOppositeClass: `${pfx}-progressbar-opposite`,

        clickableClass: `${pfx}-clickable`,

        lockClass: `${pfx}-lock`,

        horizontalClass: `${pfx}-horizontal`,

        verticalClass: `${pfx}-vertical`,

        paginationDisabledClass: `${pfx}-disabled`

      }

    });

    swiper.pagination = {

      el: null,

      bullets: []

    };

    let bulletSize;

    let dynamicBulletIndex = 0;

    function isPaginationDisabled() {

      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;

    }

    function setSideBullets(bulletEl, position) {

      const {

        bulletActiveClass

      } = swiper.params.pagination;

      if (!bulletEl) return;

      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];

      if (bulletEl) {

        bulletEl.classList.add(`${bulletActiveClass}-${position}`);

        bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];

        if (bulletEl) {

          bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);

        }

      }

    }

    function getMoveDirection(prevIndex, nextIndex, length) {

      prevIndex = prevIndex % length;

      nextIndex = nextIndex % length;

      if (nextIndex === prevIndex + 1) {

        return 'next';

      } else if (nextIndex === prevIndex - 1) {

        return 'previous';

      }

      return;

    }

    function onBulletClick(e) {

      const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));

      if (!bulletEl) {

        return;

      }

      e.preventDefault();

      const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;

      if (swiper.params.loop) {

        if (swiper.realIndex === index) return;

        const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);

        if (moveDirection === 'next') {

          swiper.slideNext();

        } else if (moveDirection === 'previous') {

          swiper.slidePrev();

        } else {

          swiper.slideToLoop(index);

        }

      } else {

        swiper.slideTo(index);

      }

    }

    function update() {

      // Render || Update Pagination bullets/items

      const rtl = swiper.rtl;

      const params = swiper.params.pagination;

      if (isPaginationDisabled()) return;

      let el = swiper.pagination.el;

      el = makeElementsArray(el);

      // Current/Total

      let current;

      let previousIndex;

      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

      const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.loop) {

        previousIndex = swiper.previousRealIndex || 0;

        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;

      } else if (typeof swiper.snapIndex !== 'undefined') {

        current = swiper.snapIndex;

        previousIndex = swiper.previousSnapIndex;

      } else {

        previousIndex = swiper.previousIndex || 0;

        current = swiper.activeIndex || 0;

      }

      // Types

      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {

        const bullets = swiper.pagination.bullets;

        let firstIndex;

        let lastIndex;

        let midIndex;

        if (params.dynamicBullets) {

          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);

          el.forEach(subEl => {

            subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;

          });

          if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {

            dynamicBulletIndex += current - (previousIndex || 0);

            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {

              dynamicBulletIndex = params.dynamicMainBullets - 1;

            } else if (dynamicBulletIndex < 0) {

              dynamicBulletIndex = 0;

            }

          }

          firstIndex = Math.max(current - dynamicBulletIndex, 0);

          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);

          midIndex = (lastIndex + firstIndex) / 2;

        }

        bullets.forEach(bulletEl => {

          const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();

          bulletEl.classList.remove(...classesToRemove);

        });

        if (el.length > 1) {

          bullets.forEach(bullet => {

            const bulletIndex = elementIndex(bullet);

            if (bulletIndex === current) {

              bullet.classList.add(...params.bulletActiveClass.split(' '));

            } else if (swiper.isElement) {

              bullet.setAttribute('part', 'bullet');

            }

            if (params.dynamicBullets) {

              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {

                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));

              }

              if (bulletIndex === firstIndex) {

                setSideBullets(bullet, 'prev');

              }

              if (bulletIndex === lastIndex) {

                setSideBullets(bullet, 'next');

              }

            }

          });

        } else {

          const bullet = bullets[current];

          if (bullet) {

            bullet.classList.add(...params.bulletActiveClass.split(' '));

          }

          if (swiper.isElement) {

            bullets.forEach((bulletEl, bulletIndex) => {

              bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');

            });

          }

          if (params.dynamicBullets) {

            const firstDisplayedBullet = bullets[firstIndex];

            const lastDisplayedBullet = bullets[lastIndex];

            for (let i = firstIndex; i <= lastIndex; i += 1) {

              if (bullets[i]) {

                bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));

              }

            }

            setSideBullets(firstDisplayedBullet, 'prev');

            setSideBullets(lastDisplayedBullet, 'next');

          }

        }

        if (params.dynamicBullets) {

          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);

          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;

          const offsetProp = rtl ? 'right' : 'left';

          bullets.forEach(bullet => {

            bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;

          });

        }

      }

      el.forEach((subEl, subElIndex) => {

        if (params.type === 'fraction') {

          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {

            fractionEl.textContent = params.formatFractionCurrent(current + 1);

          });

          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {

            totalEl.textContent = params.formatFractionTotal(total);

          });

        }

        if (params.type === 'progressbar') {

          let progressbarDirection;

          if (params.progressbarOpposite) {

            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';

          } else {

            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';

          }

          const scale = (current + 1) / total;

          let scaleX = 1;

          let scaleY = 1;

          if (progressbarDirection === 'horizontal') {

            scaleX = scale;

          } else {

            scaleY = scale;

          }

          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {

            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;

            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;

          });

        }

        if (params.type === 'custom' && params.renderCustom) {

          setInnerHTML(subEl, params.renderCustom(swiper, current + 1, total));

          if (subElIndex === 0) emit('paginationRender', subEl);

        } else {

          if (subElIndex === 0) emit('paginationRender', subEl);

          emit('paginationUpdate', subEl);

        }

        if (swiper.params.watchOverflow && swiper.enabled) {

          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);

        }

      });

    }

    function render() {

      // Render Container

      const params = swiper.params.pagination;

      if (isPaginationDisabled()) return;

      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;

      let el = swiper.pagination.el;

      el = makeElementsArray(el);

      let paginationHTML = '';

      if (params.type === 'bullets') {

        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {

          numberOfBullets = slidesLength;

        }

        for (let i = 0; i < numberOfBullets; i += 1) {

          if (params.renderBullet) {

            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);

          } else {

            // prettier-ignore

            paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;

          }

        }

      }

      if (params.type === 'fraction') {

        if (params.renderFraction) {

          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);

        } else {

          paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;

        }

      }

      if (params.type === 'progressbar') {

        if (params.renderProgressbar) {

          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);

        } else {

          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;

        }

      }

      swiper.pagination.bullets = [];

      el.forEach(subEl => {

        if (params.type !== 'custom') {

          setInnerHTML(subEl, paginationHTML || '');

        }

        if (params.type === 'bullets') {

          swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));

        }

      });

      if (params.type !== 'custom') {

        emit('paginationRender', el[0]);

      }

    }

    function init() {

      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {

        el: 'swiper-pagination'

      });

      const params = swiper.params.pagination;

      if (!params.el) return;

      let el;

      if (typeof params.el === 'string' && swiper.isElement) {

        el = swiper.el.querySelector(params.el);

      }

      if (!el && typeof params.el === 'string') {

        el = [...document.querySelectorAll(params.el)];

      }

      if (!el) {

        el = params.el;

      }

      if (!el || el.length === 0) return;

      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {

        el = [...swiper.el.querySelectorAll(params.el)];

        // check if it belongs to another nested Swiper

        if (el.length > 1) {

          el = el.find(subEl => {

            if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;

            return true;

          });

        }

      }

      if (Array.isArray(el) && el.length === 1) el = el[0];

      Object.assign(swiper.pagination, {

        el

      });

      el = makeElementsArray(el);

      el.forEach(subEl => {

        if (params.type === 'bullets' && params.clickable) {

          subEl.classList.add(...(params.clickableClass || '').split(' '));

        }

        subEl.classList.add(params.modifierClass + params.type);

        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

        if (params.type === 'bullets' && params.dynamicBullets) {

          subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);

          dynamicBulletIndex = 0;

          if (params.dynamicMainBullets < 1) {

            params.dynamicMainBullets = 1;

          }

        }

        if (params.type === 'progressbar' && params.progressbarOpposite) {

          subEl.classList.add(params.progressbarOppositeClass);

        }

        if (params.clickable) {

          subEl.addEventListener('click', onBulletClick);

        }

        if (!swiper.enabled) {

          subEl.classList.add(params.lockClass);

        }

      });

    }

    function destroy() {

      const params = swiper.params.pagination;

      if (isPaginationDisabled()) return;

      let el = swiper.pagination.el;

      if (el) {

        el = makeElementsArray(el);

        el.forEach(subEl => {

          subEl.classList.remove(params.hiddenClass);

          subEl.classList.remove(params.modifierClass + params.type);

          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

          if (params.clickable) {

            subEl.classList.remove(...(params.clickableClass || '').split(' '));

            subEl.removeEventListener('click', onBulletClick);

          }

        });

      }

      if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));

    }

    on('changeDirection', () => {

      if (!swiper.pagination || !swiper.pagination.el) return;

      const params = swiper.params.pagination;

      let {

        el

      } = swiper.pagination;

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.classList.remove(params.horizontalClass, params.verticalClass);

        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

      });

    });

    on('init', () => {

      if (swiper.params.pagination.enabled === false) {

        // eslint-disable-next-line

        disable();

      } else {

        init();

        render();

        update();

      }

    });

    on('activeIndexChange', () => {

      if (typeof swiper.snapIndex === 'undefined') {

        update();

      }

    });

    on('snapIndexChange', () => {

      update();

    });

    on('snapGridLengthChange', () => {

      render();

      update();

    });

    on('destroy', () => {

      destroy();

    });

    on('enable disable', () => {

      let {

        el

      } = swiper.pagination;

      if (el) {

        el = makeElementsArray(el);

        el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));

      }

    });

    on('lock unlock', () => {

      update();

    });

    on('click', (_s, e) => {

      const targetEl = e.target;

      const el = makeElementsArray(swiper.pagination.el);

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {

        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;

        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);

        if (isHidden === true) {

          emit('paginationShow');

        } else {

          emit('paginationHide');

        }

        el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));

      }

    });

    const enable = () => {

      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);

      let {

        el

      } = swiper.pagination;

      if (el) {

        el = makeElementsArray(el);

        el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));

      }

      init();

      render();

      update();

    };

    const disable = () => {

      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);

      let {

        el

      } = swiper.pagination;

      if (el) {

        el = makeElementsArray(el);

        el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));

      }

      destroy();

    };

    Object.assign(swiper.pagination, {

      enable,

      disable,

      render,

      update,

      init,

      destroy

    });

  }



  function Scrollbar(_ref) {

    let {

      swiper,

      extendParams,

      on,

      emit

    } = _ref;

    const document = getDocument();

    let isTouched = false;

    let timeout = null;

    let dragTimeout = null;

    let dragStartPos;

    let dragSize;

    let trackSize;

    let divider;

    extendParams({

      scrollbar: {

        el: null,

        dragSize: 'auto',

        hide: false,

        draggable: false,

        snapOnRelease: true,

        lockClass: 'swiper-scrollbar-lock',

        dragClass: 'swiper-scrollbar-drag',

        scrollbarDisabledClass: 'swiper-scrollbar-disabled',

        horizontalClass: `swiper-scrollbar-horizontal`,

        verticalClass: `swiper-scrollbar-vertical`

      }

    });

    swiper.scrollbar = {

      el: null,

      dragEl: null

    };

    function setTranslate() {

      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

      const {

        scrollbar,

        rtlTranslate: rtl

      } = swiper;

      const {

        dragEl,

        el

      } = scrollbar;

      const params = swiper.params.scrollbar;

      const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;

      let newSize = dragSize;

      let newPos = (trackSize - dragSize) * progress;

      if (rtl) {

        newPos = -newPos;

        if (newPos > 0) {

          newSize = dragSize - newPos;

          newPos = 0;

        } else if (-newPos + dragSize > trackSize) {

          newSize = trackSize + newPos;

        }

      } else if (newPos < 0) {

        newSize = dragSize + newPos;

        newPos = 0;

      } else if (newPos + dragSize > trackSize) {

        newSize = trackSize - newPos;

      }

      if (swiper.isHorizontal()) {

        dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;

        dragEl.style.width = `${newSize}px`;

      } else {

        dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;

        dragEl.style.height = `${newSize}px`;

      }

      if (params.hide) {

        clearTimeout(timeout);

        el.style.opacity = 1;

        timeout = setTimeout(() => {

          el.style.opacity = 0;

          el.style.transitionDuration = '400ms';

        }, 1000);

      }

    }

    function setTransition(duration) {

      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

      swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;

    }

    function updateSize() {

      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

      const {

        scrollbar

      } = swiper;

      const {

        dragEl,

        el

      } = scrollbar;

      dragEl.style.width = '';

      dragEl.style.height = '';

      trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;

      divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

      if (swiper.params.scrollbar.dragSize === 'auto') {

        dragSize = trackSize * divider;

      } else {

        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);

      }

      if (swiper.isHorizontal()) {

        dragEl.style.width = `${dragSize}px`;

      } else {

        dragEl.style.height = `${dragSize}px`;

      }

      if (divider >= 1) {

        el.style.display = 'none';

      } else {

        el.style.display = '';

      }

      if (swiper.params.scrollbar.hide) {

        el.style.opacity = 0;

      }

      if (swiper.params.watchOverflow && swiper.enabled) {

        scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);

      }

    }

    function getPointerPosition(e) {

      return swiper.isHorizontal() ? e.clientX : e.clientY;

    }

    function setDragPosition(e) {

      const {

        scrollbar,

        rtlTranslate: rtl

      } = swiper;

      const {

        el

      } = scrollbar;

      let positionRatio;

      positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);

      positionRatio = Math.max(Math.min(positionRatio, 1), 0);

      if (rtl) {

        positionRatio = 1 - positionRatio;

      }

      const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;

      swiper.updateProgress(position);

      swiper.setTranslate(position);

      swiper.updateActiveIndex();

      swiper.updateSlidesClasses();

    }

    function onDragStart(e) {

      const params = swiper.params.scrollbar;

      const {

        scrollbar,

        wrapperEl

      } = swiper;

      const {

        el,

        dragEl

      } = scrollbar;

      isTouched = true;

      dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;

      e.preventDefault();

      e.stopPropagation();

      wrapperEl.style.transitionDuration = '100ms';

      dragEl.style.transitionDuration = '100ms';

      setDragPosition(e);

      clearTimeout(dragTimeout);

      el.style.transitionDuration = '0ms';

      if (params.hide) {

        el.style.opacity = 1;

      }

      if (swiper.params.cssMode) {

        swiper.wrapperEl.style['scroll-snap-type'] = 'none';

      }

      emit('scrollbarDragStart', e);

    }

    function onDragMove(e) {

      const {

        scrollbar,

        wrapperEl

      } = swiper;

      const {

        el,

        dragEl

      } = scrollbar;

      if (!isTouched) return;

      if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;

      setDragPosition(e);

      wrapperEl.style.transitionDuration = '0ms';

      el.style.transitionDuration = '0ms';

      dragEl.style.transitionDuration = '0ms';

      emit('scrollbarDragMove', e);

    }

    function onDragEnd(e) {

      const params = swiper.params.scrollbar;

      const {

        scrollbar,

        wrapperEl

      } = swiper;

      const {

        el

      } = scrollbar;

      if (!isTouched) return;

      isTouched = false;

      if (swiper.params.cssMode) {

        swiper.wrapperEl.style['scroll-snap-type'] = '';

        wrapperEl.style.transitionDuration = '';

      }

      if (params.hide) {

        clearTimeout(dragTimeout);

        dragTimeout = nextTick(() => {

          el.style.opacity = 0;

          el.style.transitionDuration = '400ms';

        }, 1000);

      }

      emit('scrollbarDragEnd', e);

      if (params.snapOnRelease) {

        swiper.slideToClosest();

      }

    }

    function events(method) {

      const {

        scrollbar,

        params

      } = swiper;

      const el = scrollbar.el;

      if (!el) return;

      const target = el;

      const activeListener = params.passiveListeners ? {

        passive: false,

        capture: false

      } : false;

      const passiveListener = params.passiveListeners ? {

        passive: true,

        capture: false

      } : false;

      if (!target) return;

      const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

      target[eventMethod]('pointerdown', onDragStart, activeListener);

      document[eventMethod]('pointermove', onDragMove, activeListener);

      document[eventMethod]('pointerup', onDragEnd, passiveListener);

    }

    function enableDraggable() {

      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

      events('on');

    }

    function disableDraggable() {

      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

      events('off');

    }

    function init() {

      const {

        scrollbar,

        el: swiperEl

      } = swiper;

      swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {

        el: 'swiper-scrollbar'

      });

      const params = swiper.params.scrollbar;

      if (!params.el) return;

      let el;

      if (typeof params.el === 'string' && swiper.isElement) {

        el = swiper.el.querySelector(params.el);

      }

      if (!el && typeof params.el === 'string') {

        el = document.querySelectorAll(params.el);

        if (!el.length) return;

      } else if (!el) {

        el = params.el;

      }

      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {

        el = swiperEl.querySelector(params.el);

      }

      if (el.length > 0) el = el[0];

      el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

      let dragEl;

      if (el) {

        dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));

        if (!dragEl) {

          dragEl = createElement('div', swiper.params.scrollbar.dragClass);

          el.append(dragEl);

        }

      }

      Object.assign(scrollbar, {

        el,

        dragEl

      });

      if (params.draggable) {

        enableDraggable();

      }

      if (el) {

        el.classList[swiper.enabled ? 'remove' : 'add'](...classesToTokens(swiper.params.scrollbar.lockClass));

      }

    }

    function destroy() {

      const params = swiper.params.scrollbar;

      const el = swiper.scrollbar.el;

      if (el) {

        el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));

      }

      disableDraggable();

    }

    on('changeDirection', () => {

      if (!swiper.scrollbar || !swiper.scrollbar.el) return;

      const params = swiper.params.scrollbar;

      let {

        el

      } = swiper.scrollbar;

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.classList.remove(params.horizontalClass, params.verticalClass);

        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

      });

    });

    on('init', () => {

      if (swiper.params.scrollbar.enabled === false) {

        // eslint-disable-next-line

        disable();

      } else {

        init();

        updateSize();

        setTranslate();

      }

    });

    on('update resize observerUpdate lock unlock changeDirection', () => {

      updateSize();

    });

    on('setTranslate', () => {

      setTranslate();

    });

    on('setTransition', (_s, duration) => {

      setTransition(duration);

    });

    on('enable disable', () => {

      const {

        el

      } = swiper.scrollbar;

      if (el) {

        el.classList[swiper.enabled ? 'remove' : 'add'](...classesToTokens(swiper.params.scrollbar.lockClass));

      }

    });

    on('destroy', () => {

      destroy();

    });

    const enable = () => {

      swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));

      if (swiper.scrollbar.el) {

        swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));

      }

      init();

      updateSize();

      setTranslate();

    };

    const disable = () => {

      swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));

      if (swiper.scrollbar.el) {

        swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));

      }

      destroy();

    };

    Object.assign(swiper.scrollbar, {

      enable,

      disable,

      updateSize,

      setTranslate,

      init,

      destroy

    });

  }



  function Parallax(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      parallax: {

        enabled: false

      }

    });

    const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';

    const setTransform = (el, progress) => {

      const {

        rtl

      } = swiper;

      const rtlFactor = rtl ? -1 : 1;

      const p = el.getAttribute('data-swiper-parallax') || '0';

      let x = el.getAttribute('data-swiper-parallax-x');

      let y = el.getAttribute('data-swiper-parallax-y');

      const scale = el.getAttribute('data-swiper-parallax-scale');

      const opacity = el.getAttribute('data-swiper-parallax-opacity');

      const rotate = el.getAttribute('data-swiper-parallax-rotate');

      if (x || y) {

        x = x || '0';

        y = y || '0';

      } else if (swiper.isHorizontal()) {

        x = p;

        y = '0';

      } else {

        y = p;

        x = '0';

      }

      if (x.indexOf('%') >= 0) {

        x = `${parseInt(x, 10) * progress * rtlFactor}%`;

      } else {

        x = `${x * progress * rtlFactor}px`;

      }

      if (y.indexOf('%') >= 0) {

        y = `${parseInt(y, 10) * progress}%`;

      } else {

        y = `${y * progress}px`;

      }

      if (typeof opacity !== 'undefined' && opacity !== null) {

        const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));

        el.style.opacity = currentOpacity;

      }

      let transform = `translate3d(${x}, ${y}, 0px)`;

      if (typeof scale !== 'undefined' && scale !== null) {

        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));

        transform += ` scale(${currentScale})`;

      }

      if (rotate && typeof rotate !== 'undefined' && rotate !== null) {

        const currentRotate = rotate * progress * -1;

        transform += ` rotate(${currentRotate}deg)`;

      }

      el.style.transform = transform;

    };

    const setTranslate = () => {

      const {

        el,

        slides,

        progress,

        snapGrid,

        isElement

      } = swiper;

      const elements = elementChildren(el, elementsSelector);

      if (swiper.isElement) {

        elements.push(...elementChildren(swiper.hostEl, elementsSelector));

      }

      elements.forEach(subEl => {

        setTransform(subEl, progress);

      });

      slides.forEach((slideEl, slideIndex) => {

        let slideProgress = slideEl.progress;

        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {

          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);

        }

        slideProgress = Math.min(Math.max(slideProgress, -1), 1);

        slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {

          setTransform(subEl, slideProgress);

        });

      });

    };

    const setTransition = function (duration) {

      if (duration === void 0) {

        duration = swiper.params.speed;

      }

      const {

        el,

        hostEl

      } = swiper;

      const elements = [...el.querySelectorAll(elementsSelector)];

      if (swiper.isElement) {

        elements.push(...hostEl.querySelectorAll(elementsSelector));

      }

      elements.forEach(parallaxEl => {

        let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;

        if (duration === 0) parallaxDuration = 0;

        parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;

      });

    };

    on('beforeInit', () => {

      if (!swiper.params.parallax.enabled) return;

      swiper.params.watchSlidesProgress = true;

      swiper.originalParams.watchSlidesProgress = true;

    });

    on('init', () => {

      if (!swiper.params.parallax.enabled) return;

      setTranslate();

    });

    on('setTranslate', () => {

      if (!swiper.params.parallax.enabled) return;

      setTranslate();

    });

    on('setTransition', (_swiper, duration) => {

      if (!swiper.params.parallax.enabled) return;

      setTransition(duration);

    });

  }



  function Zoom(_ref) {

    let {

      swiper,

      extendParams,

      on,

      emit

    } = _ref;

    const window = getWindow();

    extendParams({

      zoom: {

        enabled: false,

        limitToOriginalSize: false,

        maxRatio: 3,

        minRatio: 1,

        panOnMouseMove: false,

        toggle: true,

        containerClass: 'swiper-zoom-container',

        zoomedSlideClass: 'swiper-slide-zoomed'

      }

    });

    swiper.zoom = {

      enabled: false

    };

    let currentScale = 1;

    let isScaling = false;

    let isPanningWithMouse = false;

    let mousePanStart = {

      x: 0,

      y: 0

    };

    const mousePanSensitivity = -3; // Negative to invert pan direction

    let fakeGestureTouched;

    let fakeGestureMoved;

    const evCache = [];

    const gesture = {

      originX: 0,

      originY: 0,

      slideEl: undefined,

      slideWidth: undefined,

      slideHeight: undefined,

      imageEl: undefined,

      imageWrapEl: undefined,

      maxRatio: 3

    };

    const image = {

      isTouched: undefined,

      isMoved: undefined,

      currentX: undefined,

      currentY: undefined,

      minX: undefined,

      minY: undefined,

      maxX: undefined,

      maxY: undefined,

      width: undefined,

      height: undefined,

      startX: undefined,

      startY: undefined,

      touchesStart: {},

      touchesCurrent: {}

    };

    const velocity = {

      x: undefined,

      y: undefined,

      prevPositionX: undefined,

      prevPositionY: undefined,

      prevTime: undefined

    };

    let scale = 1;

    Object.defineProperty(swiper.zoom, 'scale', {

      get() {

        return scale;

      },

      set(value) {

        if (scale !== value) {

          const imageEl = gesture.imageEl;

          const slideEl = gesture.slideEl;

          emit('zoomChange', value, imageEl, slideEl);

        }

        scale = value;

      }

    });

    function getDistanceBetweenTouches() {

      if (evCache.length < 2) return 1;

      const x1 = evCache[0].pageX;

      const y1 = evCache[0].pageY;

      const x2 = evCache[1].pageX;

      const y2 = evCache[1].pageY;

      const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

      return distance;

    }

    function getMaxRatio() {

      const params = swiper.params.zoom;

      const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;

      if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {

        const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;

        return Math.min(imageMaxRatio, maxRatio);

      }

      return maxRatio;

    }

    function getScaleOrigin() {

      if (evCache.length < 2) return {

        x: null,

        y: null

      };

      const box = gesture.imageEl.getBoundingClientRect();

      return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];

    }

    function getSlideSelector() {

      return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;

    }

    function eventWithinSlide(e) {

      const slideSelector = getSlideSelector();

      if (e.target.matches(slideSelector)) return true;

      if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;

      return false;

    }

    function eventWithinZoomContainer(e) {

      const selector = `.${swiper.params.zoom.containerClass}`;

      if (e.target.matches(selector)) return true;

      if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;

      return false;

    }



    // Events

    function onGestureStart(e) {

      if (e.pointerType === 'mouse') {

        evCache.splice(0, evCache.length);

      }

      if (!eventWithinSlide(e)) return;

      const params = swiper.params.zoom;

      fakeGestureTouched = false;

      fakeGestureMoved = false;

      evCache.push(e);

      if (evCache.length < 2) {

        return;

      }

      fakeGestureTouched = true;

      gesture.scaleStart = getDistanceBetweenTouches();

      if (!gesture.slideEl) {

        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);

        if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];

        let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);

        if (imageEl) {

          imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];

        }

        gesture.imageEl = imageEl;

        if (imageEl) {

          gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];

        } else {

          gesture.imageWrapEl = undefined;

        }

        if (!gesture.imageWrapEl) {

          gesture.imageEl = undefined;

          return;

        }

        gesture.maxRatio = getMaxRatio();

      }

      if (gesture.imageEl) {

        const [originX, originY] = getScaleOrigin();

        gesture.originX = originX;

        gesture.originY = originY;

        gesture.imageEl.style.transitionDuration = '0ms';

      }

      isScaling = true;

    }

    function onGestureChange(e) {

      if (!eventWithinSlide(e)) return;

      const params = swiper.params.zoom;

      const zoom = swiper.zoom;

      const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);

      if (pointerIndex >= 0) evCache[pointerIndex] = e;

      if (evCache.length < 2) {

        return;

      }

      fakeGestureMoved = true;

      gesture.scaleMove = getDistanceBetweenTouches();

      if (!gesture.imageEl) {

        return;

      }

      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;

      if (zoom.scale > gesture.maxRatio) {

        zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;

      }

      if (zoom.scale < params.minRatio) {

        zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;

      }

      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;

    }

    function onGestureEnd(e) {

      if (!eventWithinSlide(e)) return;

      if (e.pointerType === 'mouse' && e.type === 'pointerout') return;

      const params = swiper.params.zoom;

      const zoom = swiper.zoom;

      const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);

      if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);

      if (!fakeGestureTouched || !fakeGestureMoved) {

        return;

      }

      fakeGestureTouched = false;

      fakeGestureMoved = false;

      if (!gesture.imageEl) return;

      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);

      gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;

      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;

      currentScale = zoom.scale;

      isScaling = false;

      if (zoom.scale > 1 && gesture.slideEl) {

        gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);

      } else if (zoom.scale <= 1 && gesture.slideEl) {

        gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);

      }

      if (zoom.scale === 1) {

        gesture.originX = 0;

        gesture.originY = 0;

        gesture.slideEl = undefined;

      }

    }

    let allowTouchMoveTimeout;

    function allowTouchMove() {

      swiper.touchEventsData.preventTouchMoveFromPointerMove = false;

    }

    function preventTouchMove() {

      clearTimeout(allowTouchMoveTimeout);

      swiper.touchEventsData.preventTouchMoveFromPointerMove = true;

      allowTouchMoveTimeout = setTimeout(() => {

        if (swiper.destroyed) return;

        allowTouchMove();

      });

    }

    function onTouchStart(e) {

      const device = swiper.device;

      if (!gesture.imageEl) return;

      if (image.isTouched) return;

      if (device.android && e.cancelable) e.preventDefault();

      image.isTouched = true;

      const event = evCache.length > 0 ? evCache[0] : e;

      image.touchesStart.x = event.pageX;

      image.touchesStart.y = event.pageY;

    }

    function onTouchMove(e) {

      const isMouseEvent = e.pointerType === 'mouse';

      const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;

      if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {

        return;

      }

      const zoom = swiper.zoom;

      if (!gesture.imageEl) {

        return;

      }

      if (!image.isTouched || !gesture.slideEl) {

        if (isMousePan) onMouseMove(e);

        return;

      }

      if (isMousePan) {

        onMouseMove(e);

        return;

      }

      if (!image.isMoved) {

        image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;

        image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;

        image.startX = getTranslate(gesture.imageWrapEl, 'x') || 0;

        image.startY = getTranslate(gesture.imageWrapEl, 'y') || 0;

        gesture.slideWidth = gesture.slideEl.offsetWidth;

        gesture.slideHeight = gesture.slideEl.offsetHeight;

        gesture.imageWrapEl.style.transitionDuration = '0ms';

      }

      // Define if we need image drag

      const scaledWidth = image.width * zoom.scale;

      const scaledHeight = image.height * zoom.scale;

      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);

      image.maxX = -image.minX;

      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);

      image.maxY = -image.minY;

      image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;

      image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;

      const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));

      if (touchesDiff > 5) {

        swiper.allowClick = false;

      }

      if (!image.isMoved && !isScaling) {

        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {

          image.isTouched = false;

          allowTouchMove();

          return;

        }

        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {

          image.isTouched = false;

          allowTouchMove();

          return;

        }

      }

      if (e.cancelable) {

        e.preventDefault();

      }

      e.stopPropagation();

      preventTouchMove();

      image.isMoved = true;

      const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);

      const {

        originX,

        originY

      } = gesture;

      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);

      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);

      if (image.currentX < image.minX) {

        image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;

      }

      if (image.currentX > image.maxX) {

        image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;

      }

      if (image.currentY < image.minY) {

        image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;

      }

      if (image.currentY > image.maxY) {

        image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;

      }



      // Velocity

      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;

      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;

      if (!velocity.prevTime) velocity.prevTime = Date.now();

      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;

      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;

      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;

      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;

      velocity.prevPositionX = image.touchesCurrent.x;

      velocity.prevPositionY = image.touchesCurrent.y;

      velocity.prevTime = Date.now();

      gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;

    }

    function onTouchEnd() {

      const zoom = swiper.zoom;

      evCache.length = 0;

      if (!gesture.imageEl) return;

      if (!image.isTouched || !image.isMoved) {

        image.isTouched = false;

        image.isMoved = false;

        return;

      }

      image.isTouched = false;

      image.isMoved = false;

      let momentumDurationX = 300;

      let momentumDurationY = 300;

      const momentumDistanceX = velocity.x * momentumDurationX;

      const newPositionX = image.currentX + momentumDistanceX;

      const momentumDistanceY = velocity.y * momentumDurationY;

      const newPositionY = image.currentY + momentumDistanceY;



      // Fix duration

      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);

      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);

      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;

      image.currentY = newPositionY;

      // Define if we need image drag

      const scaledWidth = image.width * zoom.scale;

      const scaledHeight = image.height * zoom.scale;

      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);

      image.maxX = -image.minX;

      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);

      image.maxY = -image.minY;

      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);

      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

      gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;

      gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;

    }

    function onTransitionEnd() {

      const zoom = swiper.zoom;

      if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {

        if (gesture.imageEl) {

          gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';

        }

        if (gesture.imageWrapEl) {

          gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';

        }

        gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);

        zoom.scale = 1;

        currentScale = 1;

        gesture.slideEl = undefined;

        gesture.imageEl = undefined;

        gesture.imageWrapEl = undefined;

        gesture.originX = 0;

        gesture.originY = 0;

      }

    }

    function onMouseMove(e) {

      // Only pan if zoomed in and mouse panning is enabled

      if (currentScale <= 1 || !gesture.imageWrapEl) return;

      if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;

      const currentTransform = window.getComputedStyle(gesture.imageWrapEl).transform;

      const matrix = new window.DOMMatrix(currentTransform);

      if (!isPanningWithMouse) {

        isPanningWithMouse = true;

        mousePanStart.x = e.clientX;

        mousePanStart.y = e.clientY;

        image.startX = matrix.e;

        image.startY = matrix.f;

        image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;

        image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;

        gesture.slideWidth = gesture.slideEl.offsetWidth;

        gesture.slideHeight = gesture.slideEl.offsetHeight;

        return;

      }

      const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;

      const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;

      const scaledWidth = image.width * currentScale;

      const scaledHeight = image.height * currentScale;

      const slideWidth = gesture.slideWidth;

      const slideHeight = gesture.slideHeight;

      const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);

      const maxX = -minX;

      const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);

      const maxY = -minY;

      const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);

      const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);

      gesture.imageWrapEl.style.transitionDuration = '0ms';

      gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;

      mousePanStart.x = e.clientX;

      mousePanStart.y = e.clientY;

      image.startX = newX;

      image.startY = newY;

      image.currentX = newX;

      image.currentY = newY;

    }

    function zoomIn(e) {

      const zoom = swiper.zoom;

      const params = swiper.params.zoom;

      if (!gesture.slideEl) {

        if (e && e.target) {

          gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);

        }

        if (!gesture.slideEl) {

          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {

            gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];

          } else {

            gesture.slideEl = swiper.slides[swiper.activeIndex];

          }

        }

        let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);

        if (imageEl) {

          imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];

        }

        gesture.imageEl = imageEl;

        if (imageEl) {

          gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];

        } else {

          gesture.imageWrapEl = undefined;

        }

      }

      if (!gesture.imageEl || !gesture.imageWrapEl) return;

      if (swiper.params.cssMode) {

        swiper.wrapperEl.style.overflow = 'hidden';

        swiper.wrapperEl.style.touchAction = 'none';

      }

      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);

      let touchX;

      let touchY;

      let offsetX;

      let offsetY;

      let diffX;

      let diffY;

      let translateX;

      let translateY;

      let imageWidth;

      let imageHeight;

      let scaledWidth;

      let scaledHeight;

      let translateMinX;

      let translateMinY;

      let translateMaxX;

      let translateMaxY;

      let slideWidth;

      let slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {

        touchX = e.pageX;

        touchY = e.pageY;

      } else {

        touchX = image.touchesStart.x;

        touchY = image.touchesStart.y;

      }

      const prevScale = currentScale;

      const forceZoomRatio = typeof e === 'number' ? e : null;

      if (currentScale === 1 && forceZoomRatio) {

        touchX = undefined;

        touchY = undefined;

        image.touchesStart.x = undefined;

        image.touchesStart.y = undefined;

      }

      const maxRatio = getMaxRatio();

      zoom.scale = forceZoomRatio || maxRatio;

      currentScale = forceZoomRatio || maxRatio;

      if (e && !(currentScale === 1 && forceZoomRatio)) {

        slideWidth = gesture.slideEl.offsetWidth;

        slideHeight = gesture.slideEl.offsetHeight;

        offsetX = elementOffset(gesture.slideEl).left + window.scrollX;

        offsetY = elementOffset(gesture.slideEl).top + window.scrollY;

        diffX = offsetX + slideWidth / 2 - touchX;

        diffY = offsetY + slideHeight / 2 - touchY;

        imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;

        imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;

        scaledWidth = imageWidth * zoom.scale;

        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);

        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);

        translateMaxX = -translateMinX;

        translateMaxY = -translateMinY;

        if (prevScale > 0 && forceZoomRatio && typeof image.currentX === 'number' && typeof image.currentY === 'number') {

          translateX = image.currentX * zoom.scale / prevScale;

          translateY = image.currentY * zoom.scale / prevScale;

        } else {

          translateX = diffX * zoom.scale;

          translateY = diffY * zoom.scale;

        }

        if (translateX < translateMinX) {

          translateX = translateMinX;

        }

        if (translateX > translateMaxX) {

          translateX = translateMaxX;

        }

        if (translateY < translateMinY) {

          translateY = translateMinY;

        }

        if (translateY > translateMaxY) {

          translateY = translateMaxY;

        }

      } else {

        translateX = 0;

        translateY = 0;

      }

      if (forceZoomRatio && zoom.scale === 1) {

        gesture.originX = 0;

        gesture.originY = 0;

      }

      image.currentX = translateX;

      image.currentY = translateY;

      gesture.imageWrapEl.style.transitionDuration = '300ms';

      gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;

      gesture.imageEl.style.transitionDuration = '300ms';

      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;

    }

    function zoomOut() {

      const zoom = swiper.zoom;

      const params = swiper.params.zoom;

      if (!gesture.slideEl) {

        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {

          gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];

        } else {

          gesture.slideEl = swiper.slides[swiper.activeIndex];

        }

        let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);

        if (imageEl) {

          imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];

        }

        gesture.imageEl = imageEl;

        if (imageEl) {

          gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];

        } else {

          gesture.imageWrapEl = undefined;

        }

      }

      if (!gesture.imageEl || !gesture.imageWrapEl) return;

      if (swiper.params.cssMode) {

        swiper.wrapperEl.style.overflow = '';

        swiper.wrapperEl.style.touchAction = '';

      }

      zoom.scale = 1;

      currentScale = 1;

      image.currentX = undefined;

      image.currentY = undefined;

      image.touchesStart.x = undefined;

      image.touchesStart.y = undefined;

      gesture.imageWrapEl.style.transitionDuration = '300ms';

      gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';

      gesture.imageEl.style.transitionDuration = '300ms';

      gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';

      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);

      gesture.slideEl = undefined;

      gesture.originX = 0;

      gesture.originY = 0;

      if (swiper.params.zoom.panOnMouseMove) {

        mousePanStart = {

          x: 0,

          y: 0

        };

        if (isPanningWithMouse) {

          isPanningWithMouse = false;

          image.startX = 0;

          image.startY = 0;

        }

      }

    }



    // Toggle Zoom

    function zoomToggle(e) {

      const zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {

        // Zoom Out

        zoomOut();

      } else {

        // Zoom In

        zoomIn(e);

      }

    }

    function getListeners() {

      const passiveListener = swiper.params.passiveListeners ? {

        passive: true,

        capture: false

      } : false;

      const activeListenerWithCapture = swiper.params.passiveListeners ? {

        passive: false,

        capture: true

      } : true;

      return {

        passiveListener,

        activeListenerWithCapture

      };

    }



    // Attach/Detach Events

    function enable() {

      const zoom = swiper.zoom;

      if (zoom.enabled) return;

      zoom.enabled = true;

      const {

        passiveListener,

        activeListenerWithCapture

      } = getListeners();



      // Scale image

      swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);

      swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);

      ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {

        swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);

      });



      // Move image

      swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);

    }

    function disable() {

      const zoom = swiper.zoom;

      if (!zoom.enabled) return;

      zoom.enabled = false;

      const {

        passiveListener,

        activeListenerWithCapture

      } = getListeners();



      // Scale image

      swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);

      swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);

      ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {

        swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);

      });



      // Move image

      swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);

    }

    on('init', () => {

      if (swiper.params.zoom.enabled) {

        enable();

      }

    });

    on('destroy', () => {

      disable();

    });

    on('touchStart', (_s, e) => {

      if (!swiper.zoom.enabled) return;

      onTouchStart(e);

    });

    on('touchEnd', (_s, e) => {

      if (!swiper.zoom.enabled) return;

      onTouchEnd();

    });

    on('doubleTap', (_s, e) => {

      if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {

        zoomToggle(e);

      }

    });

    on('transitionEnd', () => {

      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {

        onTransitionEnd();

      }

    });

    on('slideChange', () => {

      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {

        onTransitionEnd();

      }

    });

    Object.assign(swiper.zoom, {

      enable,

      disable,

      in: zoomIn,

      out: zoomOut,

      toggle: zoomToggle

    });

  }



  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  function Controller(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      controller: {

        control: undefined,

        inverse: false,

        by: 'slide' // or 'container'

      }

    });



    swiper.controller = {

      control: undefined

    };

    function LinearSpline(x, y) {

      const binarySearch = function search() {

        let maxIndex;

        let minIndex;

        let guess;

        return (array, val) => {

          minIndex = -1;

          maxIndex = array.length;

          while (maxIndex - minIndex > 1) {

            guess = maxIndex + minIndex >> 1;

            if (array[guess] <= val) {

              minIndex = guess;

            } else {

              maxIndex = guess;

            }

          }

          return maxIndex;

        };

      }();

      this.x = x;

      this.y = y;

      this.lastIndex = x.length - 1;

      // Given an x value (x2), return the expected y2 value:

      // (x1,y1) is the known point before given value,

      // (x3,y3) is the known point after given value.

      let i1;

      let i3;

      this.interpolate = function interpolate(x2) {

        if (!x2) return 0;



        // Get the indexes of x1 and x3 (the array indexes before and after given x2):

        i3 = binarySearch(this.x, x2);

        i1 = i3 - 1;



        // We have our indexes i1 & i3, so we can calculate already:

        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];

      };

      return this;

    }

    function getInterpolateFunction(c) {

      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);

    }

    function setTranslate(_t, byController) {

      const controlled = swiper.controller.control;

      let multiplier;

      let controlledTranslate;

      const Swiper = swiper.constructor;

      function setControlledTranslate(c) {

        if (c.destroyed) return;



        // this will create an Interpolate function based on the snapGrids

        // x is the Grid of the scrolled scroller and y will be the controlled scroller

        // it makes sense to create this only once and recall it for the interpolation

        // the function does a lot of value caching for performance

        const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

        if (swiper.params.controller.by === 'slide') {

          getInterpolateFunction(c);

          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid

          // but it did not work out

          controlledTranslate = -swiper.controller.spline.interpolate(-translate);

        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {

          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());

          if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {

            multiplier = 1;

          }

          controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();

        }

        if (swiper.params.controller.inverse) {

          controlledTranslate = c.maxTranslate() - controlledTranslate;

        }

        c.updateProgress(controlledTranslate);

        c.setTranslate(controlledTranslate, swiper);

        c.updateActiveIndex();

        c.updateSlidesClasses();

      }

      if (Array.isArray(controlled)) {

        for (let i = 0; i < controlled.length; i += 1) {

          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {

            setControlledTranslate(controlled[i]);

          }

        }

      } else if (controlled instanceof Swiper && byController !== controlled) {

        setControlledTranslate(controlled);

      }

    }

    function setTransition(duration, byController) {

      const Swiper = swiper.constructor;

      const controlled = swiper.controller.control;

      let i;

      function setControlledTransition(c) {

        if (c.destroyed) return;

        c.setTransition(duration, swiper);

        if (duration !== 0) {

          c.transitionStart();

          if (c.params.autoHeight) {

            nextTick(() => {

              c.updateAutoHeight();

            });

          }

          elementTransitionEnd(c.wrapperEl, () => {

            if (!controlled) return;

            c.transitionEnd();

          });

        }

      }

      if (Array.isArray(controlled)) {

        for (i = 0; i < controlled.length; i += 1) {

          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {

            setControlledTransition(controlled[i]);

          }

        }

      } else if (controlled instanceof Swiper && byController !== controlled) {

        setControlledTransition(controlled);

      }

    }

    function removeSpline() {

      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {

        swiper.controller.spline = undefined;

        delete swiper.controller.spline;

      }

    }

    on('beforeInit', () => {

      if (typeof window !== 'undefined' && (

      // eslint-disable-line

      typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {

        const controlElements = typeof swiper.params.controller.control === 'string' ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];

        controlElements.forEach(controlElement => {

          if (!swiper.controller.control) swiper.controller.control = [];

          if (controlElement && controlElement.swiper) {

            swiper.controller.control.push(controlElement.swiper);

          } else if (controlElement) {

            const eventName = `${swiper.params.eventsPrefix}init`;

            const onControllerSwiper = e => {

              swiper.controller.control.push(e.detail[0]);

              swiper.update();

              controlElement.removeEventListener(eventName, onControllerSwiper);

            };

            controlElement.addEventListener(eventName, onControllerSwiper);

          }

        });

        return;

      }

      swiper.controller.control = swiper.params.controller.control;

    });

    on('update', () => {

      removeSpline();

    });

    on('resize', () => {

      removeSpline();

    });

    on('observerUpdate', () => {

      removeSpline();

    });

    on('setTranslate', (_s, translate, byController) => {

      if (!swiper.controller.control || swiper.controller.control.destroyed) return;

      swiper.controller.setTranslate(translate, byController);

    });

    on('setTransition', (_s, duration, byController) => {

      if (!swiper.controller.control || swiper.controller.control.destroyed) return;

      swiper.controller.setTransition(duration, byController);

    });

    Object.assign(swiper.controller, {

      setTranslate,

      setTransition

    });

  }



  function A11y(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      a11y: {

        enabled: true,

        notificationClass: 'swiper-notification',

        prevSlideMessage: 'Previous slide',

        nextSlideMessage: 'Next slide',

        firstSlideMessage: 'This is the first slide',

        lastSlideMessage: 'This is the last slide',

        paginationBulletMessage: 'Go to slide {{index}}',

        slideLabelMessage: '{{index}} / {{slidesLength}}',

        containerMessage: null,

        containerRoleDescriptionMessage: null,

        containerRole: null,

        itemRoleDescriptionMessage: null,

        slideRole: 'group',

        id: null,

        scrollOnFocus: true

      }

    });

    swiper.a11y = {

      clicked: false

    };

    let liveRegion = null;

    let preventFocusHandler;

    let focusTargetSlideEl;

    let visibilityChangedTimestamp = new Date().getTime();

    function notify(message) {

      const notification = liveRegion;

      if (notification.length === 0) return;

      setInnerHTML(notification, message);

    }

    function getRandomNumber(size) {

      if (size === void 0) {

        size = 16;

      }

      const randomChar = () => Math.round(16 * Math.random()).toString(16);

      return 'x'.repeat(size).replace(/x/g, randomChar);

    }

    function makeElFocusable(el) {

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.setAttribute('tabIndex', '0');

      });

    }

    function makeElNotFocusable(el) {

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.setAttribute('tabIndex', '-1');

      });

    }

    function addElRole(el, role) {

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.setAttribute('role', role);

      });

    }

    function addElRoleDescription(el, description) {

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.setAttribute('aria-roledescription', description);

      });

    }

    function addElControls(el, controls) {

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.setAttribute('aria-controls', controls);

      });

    }

    function addElLabel(el, label) {

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.setAttribute('aria-label', label);

      });

    }

    function addElId(el, id) {

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.setAttribute('id', id);

      });

    }

    function addElLive(el, live) {

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.setAttribute('aria-live', live);

      });

    }

    function disableEl(el) {

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.setAttribute('aria-disabled', true);

      });

    }

    function enableEl(el) {

      el = makeElementsArray(el);

      el.forEach(subEl => {

        subEl.setAttribute('aria-disabled', false);

      });

    }

    function onEnterOrSpaceKey(e) {

      if (e.keyCode !== 13 && e.keyCode !== 32) return;

      const params = swiper.params.a11y;

      const targetEl = e.target;

      if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {

        if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;

      }

      if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {

        const prevEls = makeElementsArray(swiper.navigation.prevEl);

        const nextEls = makeElementsArray(swiper.navigation.nextEl);

        if (nextEls.includes(targetEl)) {

          if (!(swiper.isEnd && !swiper.params.loop)) {

            swiper.slideNext();

          }

          if (swiper.isEnd) {

            notify(params.lastSlideMessage);

          } else {

            notify(params.nextSlideMessage);

          }

        }

        if (prevEls.includes(targetEl)) {

          if (!(swiper.isBeginning && !swiper.params.loop)) {

            swiper.slidePrev();

          }

          if (swiper.isBeginning) {

            notify(params.firstSlideMessage);

          } else {

            notify(params.prevSlideMessage);

          }

        }

      }

      if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {

        targetEl.click();

      }

    }

    function updateNavigation() {

      if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;

      const {

        nextEl,

        prevEl

      } = swiper.navigation;

      if (prevEl) {

        if (swiper.isBeginning) {

          disableEl(prevEl);

          makeElNotFocusable(prevEl);

        } else {

          enableEl(prevEl);

          makeElFocusable(prevEl);

        }

      }

      if (nextEl) {

        if (swiper.isEnd) {

          disableEl(nextEl);

          makeElNotFocusable(nextEl);

        } else {

          enableEl(nextEl);

          makeElFocusable(nextEl);

        }

      }

    }

    function hasPagination() {

      return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;

    }

    function hasClickablePagination() {

      return hasPagination() && swiper.params.pagination.clickable;

    }

    function updatePagination() {

      const params = swiper.params.a11y;

      if (!hasPagination()) return;

      swiper.pagination.bullets.forEach(bulletEl => {

        if (swiper.params.pagination.clickable) {

          makeElFocusable(bulletEl);

          if (!swiper.params.pagination.renderBullet) {

            addElRole(bulletEl, 'button');

            addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));

          }

        }

        if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {

          bulletEl.setAttribute('aria-current', 'true');

        } else {

          bulletEl.removeAttribute('aria-current');

        }

      });

    }

    const initNavEl = (el, wrapperId, message) => {

      makeElFocusable(el);

      if (el.tagName !== 'BUTTON') {

        addElRole(el, 'button');

        el.addEventListener('keydown', onEnterOrSpaceKey);

      }

      addElLabel(el, message);

      addElControls(el, wrapperId);

    };

    const handlePointerDown = e => {

      if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {

        preventFocusHandler = true;

      }

      swiper.a11y.clicked = true;

    };

    const handlePointerUp = () => {

      preventFocusHandler = false;

      requestAnimationFrame(() => {

        requestAnimationFrame(() => {

          if (!swiper.destroyed) {

            swiper.a11y.clicked = false;

          }

        });

      });

    };

    const onVisibilityChange = e => {

      visibilityChangedTimestamp = new Date().getTime();

    };

    const handleFocus = e => {

      if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;

      if (new Date().getTime() - visibilityChangedTimestamp < 100) return;

      const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);

      if (!slideEl || !swiper.slides.includes(slideEl)) return;

      focusTargetSlideEl = slideEl;

      const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;

      const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);

      if (isActive || isVisible) return;

      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;

      if (swiper.isHorizontal()) {

        swiper.el.scrollLeft = 0;

      } else {

        swiper.el.scrollTop = 0;

      }

      requestAnimationFrame(() => {

        if (preventFocusHandler) return;

        if (swiper.params.loop) {

          swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute('data-swiper-slide-index'))), 0);

        } else {

          swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);

        }

        preventFocusHandler = false;

      });

    };

    const initSlides = () => {

      const params = swiper.params.a11y;

      if (params.itemRoleDescriptionMessage) {

        addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);

      }

      if (params.slideRole) {

        addElRole(swiper.slides, params.slideRole);

      }

      const slidesLength = swiper.slides.length;

      if (params.slideLabelMessage) {

        swiper.slides.forEach((slideEl, index) => {

          const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;

          const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);

          addElLabel(slideEl, ariaLabelMessage);

        });

      }

    };

    const init = () => {

      const params = swiper.params.a11y;

      swiper.el.append(liveRegion);



      // Container

      const containerEl = swiper.el;

      if (params.containerRoleDescriptionMessage) {

        addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);

      }

      if (params.containerMessage) {

        addElLabel(containerEl, params.containerMessage);

      }

      if (params.containerRole) {

        addElRole(containerEl, params.containerRole);

      }



      // Wrapper

      const wrapperEl = swiper.wrapperEl;

      const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;

      const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';

      addElId(wrapperEl, wrapperId);

      addElLive(wrapperEl, live);



      // Slide

      initSlides();



      // Navigation

      let {

        nextEl,

        prevEl

      } = swiper.navigation ? swiper.navigation : {};

      nextEl = makeElementsArray(nextEl);

      prevEl = makeElementsArray(prevEl);

      if (nextEl) {

        nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));

      }

      if (prevEl) {

        prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));

      }



      // Pagination

      if (hasClickablePagination()) {

        const paginationEl = makeElementsArray(swiper.pagination.el);

        paginationEl.forEach(el => {

          el.addEventListener('keydown', onEnterOrSpaceKey);

        });

      }



      // Tab focus

      const document = getDocument();

      document.addEventListener('visibilitychange', onVisibilityChange);

      swiper.el.addEventListener('focus', handleFocus, true);

      swiper.el.addEventListener('focus', handleFocus, true);

      swiper.el.addEventListener('pointerdown', handlePointerDown, true);

      swiper.el.addEventListener('pointerup', handlePointerUp, true);

    };

    function destroy() {

      if (liveRegion) liveRegion.remove();

      let {

        nextEl,

        prevEl

      } = swiper.navigation ? swiper.navigation : {};

      nextEl = makeElementsArray(nextEl);

      prevEl = makeElementsArray(prevEl);

      if (nextEl) {

        nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));

      }

      if (prevEl) {

        prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));

      }



      // Pagination

      if (hasClickablePagination()) {

        const paginationEl = makeElementsArray(swiper.pagination.el);

        paginationEl.forEach(el => {

          el.removeEventListener('keydown', onEnterOrSpaceKey);

        });

      }

      const document = getDocument();

      document.removeEventListener('visibilitychange', onVisibilityChange);

      // Tab focus

      if (swiper.el && typeof swiper.el !== 'string') {

        swiper.el.removeEventListener('focus', handleFocus, true);

        swiper.el.removeEventListener('pointerdown', handlePointerDown, true);

        swiper.el.removeEventListener('pointerup', handlePointerUp, true);

      }

    }

    on('beforeInit', () => {

      liveRegion = createElement('span', swiper.params.a11y.notificationClass);

      liveRegion.setAttribute('aria-live', 'assertive');

      liveRegion.setAttribute('aria-atomic', 'true');

    });

    on('afterInit', () => {

      if (!swiper.params.a11y.enabled) return;

      init();

    });

    on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {

      if (!swiper.params.a11y.enabled) return;

      initSlides();

    });

    on('fromEdge toEdge afterInit lock unlock', () => {

      if (!swiper.params.a11y.enabled) return;

      updateNavigation();

    });

    on('paginationUpdate', () => {

      if (!swiper.params.a11y.enabled) return;

      updatePagination();

    });

    on('destroy', () => {

      if (!swiper.params.a11y.enabled) return;

      destroy();

    });

  }



  function History(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      history: {

        enabled: false,

        root: '',

        replaceState: false,

        key: 'slides',

        keepQuery: false

      }

    });

    let initialized = false;

    let paths = {};

    const slugify = text => {

      return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');

    };

    const getPathValues = urlOverride => {

      const window = getWindow();

      let location;

      if (urlOverride) {

        location = new URL(urlOverride);

      } else {

        location = window.location;

      }

      const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');

      const total = pathArray.length;

      const key = pathArray[total - 2];

      const value = pathArray[total - 1];

      return {

        key,

        value

      };

    };

    const setHistory = (key, index) => {

      const window = getWindow();

      if (!initialized || !swiper.params.history.enabled) return;

      let location;

      if (swiper.params.url) {

        location = new URL(swiper.params.url);

      } else {

        location = window.location;

      }

      const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];

      let value = slugify(slide.getAttribute('data-history'));

      if (swiper.params.history.root.length > 0) {

        let root = swiper.params.history.root;

        if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);

        value = `${root}/${key ? `${key}/` : ''}${value}`;

      } else if (!location.pathname.includes(key)) {

        value = `${key ? `${key}/` : ''}${value}`;

      }

      if (swiper.params.history.keepQuery) {

        value += location.search;

      }

      const currentState = window.history.state;

      if (currentState && currentState.value === value) {

        return;

      }

      if (swiper.params.history.replaceState) {

        window.history.replaceState({

          value

        }, null, value);

      } else {

        window.history.pushState({

          value

        }, null, value);

      }

    };

    const scrollToSlide = (speed, value, runCallbacks) => {

      if (value) {

        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {

          const slide = swiper.slides[i];

          const slideHistory = slugify(slide.getAttribute('data-history'));

          if (slideHistory === value) {

            const index = swiper.getSlideIndex(slide);

            swiper.slideTo(index, speed, runCallbacks);

          }

        }

      } else {

        swiper.slideTo(0, speed, runCallbacks);

      }

    };

    const setHistoryPopState = () => {

      paths = getPathValues(swiper.params.url);

      scrollToSlide(swiper.params.speed, paths.value, false);

    };

    const init = () => {

      const window = getWindow();

      if (!swiper.params.history) return;

      if (!window.history || !window.history.pushState) {

        swiper.params.history.enabled = false;

        swiper.params.hashNavigation.enabled = true;

        return;

      }

      initialized = true;

      paths = getPathValues(swiper.params.url);

      if (!paths.key && !paths.value) {

        if (!swiper.params.history.replaceState) {

          window.addEventListener('popstate', setHistoryPopState);

        }

        return;

      }

      scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

      if (!swiper.params.history.replaceState) {

        window.addEventListener('popstate', setHistoryPopState);

      }

    };

    const destroy = () => {

      const window = getWindow();

      if (!swiper.params.history.replaceState) {

        window.removeEventListener('popstate', setHistoryPopState);

      }

    };

    on('init', () => {

      if (swiper.params.history.enabled) {

        init();

      }

    });

    on('destroy', () => {

      if (swiper.params.history.enabled) {

        destroy();

      }

    });

    on('transitionEnd _freeModeNoMomentumRelease', () => {

      if (initialized) {

        setHistory(swiper.params.history.key, swiper.activeIndex);

      }

    });

    on('slideChange', () => {

      if (initialized && swiper.params.cssMode) {

        setHistory(swiper.params.history.key, swiper.activeIndex);

      }

    });

  }



  function HashNavigation(_ref) {

    let {

      swiper,

      extendParams,

      emit,

      on

    } = _ref;

    let initialized = false;

    const document = getDocument();

    const window = getWindow();

    extendParams({

      hashNavigation: {

        enabled: false,

        replaceState: false,

        watchState: false,

        getSlideIndex(_s, hash) {

          if (swiper.virtual && swiper.params.virtual.enabled) {

            const slideWithHash = swiper.slides.find(slideEl => slideEl.getAttribute('data-hash') === hash);

            if (!slideWithHash) return 0;

            const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);

            return index;

          }

          return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);

        }

      }

    });

    const onHashChange = () => {

      emit('hashChange');

      const newHash = document.location.hash.replace('#', '');

      const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];

      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';

      if (newHash !== activeSlideHash) {

        const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);

        if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;

        swiper.slideTo(newIndex);

      }

    };

    const setHash = () => {

      if (!initialized || !swiper.params.hashNavigation.enabled) return;

      const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];

      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';

      if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {

        window.history.replaceState(null, null, `#${activeSlideHash}` || '');

        emit('hashSet');

      } else {

        document.location.hash = activeSlideHash || '';

        emit('hashSet');

      }

    };

    const init = () => {

      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;

      initialized = true;

      const hash = document.location.hash.replace('#', '');

      if (hash) {

        const speed = 0;

        const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);

        swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);

      }

      if (swiper.params.hashNavigation.watchState) {

        window.addEventListener('hashchange', onHashChange);

      }

    };

    const destroy = () => {

      if (swiper.params.hashNavigation.watchState) {

        window.removeEventListener('hashchange', onHashChange);

      }

    };

    on('init', () => {

      if (swiper.params.hashNavigation.enabled) {

        init();

      }

    });

    on('destroy', () => {

      if (swiper.params.hashNavigation.enabled) {

        destroy();

      }

    });

    on('transitionEnd _freeModeNoMomentumRelease', () => {

      if (initialized) {

        setHash();

      }

    });

    on('slideChange', () => {

      if (initialized && swiper.params.cssMode) {

        setHash();

      }

    });

  }



  /* eslint no-underscore-dangle: "off" */

  /* eslint no-use-before-define: "off" */

  function Autoplay(_ref) {

    let {

      swiper,

      extendParams,

      on,

      emit,

      params

    } = _ref;

    swiper.autoplay = {

      running: false,

      paused: false,

      timeLeft: 0

    };

    extendParams({

      autoplay: {

        enabled: false,

        delay: 3000,

        waitForTransition: true,

        disableOnInteraction: false,

        stopOnLastSlide: false,

        reverseDirection: false,

        pauseOnMouseEnter: false

      }

    });

    let timeout;

    let raf;

    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;

    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;

    let autoplayTimeLeft;

    let autoplayStartTime = new Date().getTime();

    let wasPaused;

    let isTouched;

    let pausedByTouch;

    let touchStartTimeout;

    let slideChanged;

    let pausedByInteraction;

    let pausedByPointerEnter;

    function onTransitionEnd(e) {

      if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;

      if (e.target !== swiper.wrapperEl) return;

      swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);

      if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {

        return;

      }

      resume();

    }

    const calcTimeLeft = () => {

      if (swiper.destroyed || !swiper.autoplay.running) return;

      if (swiper.autoplay.paused) {

        wasPaused = true;

      } else if (wasPaused) {

        autoplayDelayCurrent = autoplayTimeLeft;

        wasPaused = false;

      }

      const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();

      swiper.autoplay.timeLeft = timeLeft;

      emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);

      raf = requestAnimationFrame(() => {

        calcTimeLeft();

      });

    };

    const getSlideDelay = () => {

      let activeSlideEl;

      if (swiper.virtual && swiper.params.virtual.enabled) {

        activeSlideEl = swiper.slides.find(slideEl => slideEl.classList.contains('swiper-slide-active'));

      } else {

        activeSlideEl = swiper.slides[swiper.activeIndex];

      }

      if (!activeSlideEl) return undefined;

      const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);

      return currentSlideDelay;

    };

    const run = delayForce => {

      if (swiper.destroyed || !swiper.autoplay.running) return;

      cancelAnimationFrame(raf);

      calcTimeLeft();

      let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;

      autoplayDelayTotal = swiper.params.autoplay.delay;

      autoplayDelayCurrent = swiper.params.autoplay.delay;

      const currentSlideDelay = getSlideDelay();

      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {

        delay = currentSlideDelay;

        autoplayDelayTotal = currentSlideDelay;

        autoplayDelayCurrent = currentSlideDelay;

      }

      autoplayTimeLeft = delay;

      const speed = swiper.params.speed;

      const proceed = () => {

        if (!swiper || swiper.destroyed) return;

        if (swiper.params.autoplay.reverseDirection) {

          if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {

            swiper.slidePrev(speed, true, true);

            emit('autoplay');

          } else if (!swiper.params.autoplay.stopOnLastSlide) {

            swiper.slideTo(swiper.slides.length - 1, speed, true, true);

            emit('autoplay');

          }

        } else {

          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {

            swiper.slideNext(speed, true, true);

            emit('autoplay');

          } else if (!swiper.params.autoplay.stopOnLastSlide) {

            swiper.slideTo(0, speed, true, true);

            emit('autoplay');

          }

        }

        if (swiper.params.cssMode) {

          autoplayStartTime = new Date().getTime();

          requestAnimationFrame(() => {

            run();

          });

        }

      };

      if (delay > 0) {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

          proceed();

        }, delay);

      } else {

        requestAnimationFrame(() => {

          proceed();

        });

      }



      // eslint-disable-next-line

      return delay;

    };

    const start = () => {

      autoplayStartTime = new Date().getTime();

      swiper.autoplay.running = true;

      run();

      emit('autoplayStart');

    };

    const stop = () => {

      swiper.autoplay.running = false;

      clearTimeout(timeout);

      cancelAnimationFrame(raf);

      emit('autoplayStop');

    };

    const pause = (internal, reset) => {

      if (swiper.destroyed || !swiper.autoplay.running) return;

      clearTimeout(timeout);

      if (!internal) {

        pausedByInteraction = true;

      }

      const proceed = () => {

        emit('autoplayPause');

        if (swiper.params.autoplay.waitForTransition) {

          swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);

        } else {

          resume();

        }

      };

      swiper.autoplay.paused = true;

      if (reset) {

        if (slideChanged) {

          autoplayTimeLeft = swiper.params.autoplay.delay;

        }

        slideChanged = false;

        proceed();

        return;

      }

      const delay = autoplayTimeLeft || swiper.params.autoplay.delay;

      autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);

      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;

      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;

      proceed();

    };

    const resume = () => {

      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;

      autoplayStartTime = new Date().getTime();

      if (pausedByInteraction) {

        pausedByInteraction = false;

        run(autoplayTimeLeft);

      } else {

        run();

      }

      swiper.autoplay.paused = false;

      emit('autoplayResume');

    };

    const onVisibilityChange = () => {

      if (swiper.destroyed || !swiper.autoplay.running) return;

      const document = getDocument();

      if (document.visibilityState === 'hidden') {

        pausedByInteraction = true;

        pause(true);

      }

      if (document.visibilityState === 'visible') {

        resume();

      }

    };

    const onPointerEnter = e => {

      if (e.pointerType !== 'mouse') return;

      pausedByInteraction = true;

      pausedByPointerEnter = true;

      if (swiper.animating || swiper.autoplay.paused) return;

      pause(true);

    };

    const onPointerLeave = e => {

      if (e.pointerType !== 'mouse') return;

      pausedByPointerEnter = false;

      if (swiper.autoplay.paused) {

        resume();

      }

    };

    const attachMouseEvents = () => {

      if (swiper.params.autoplay.pauseOnMouseEnter) {

        swiper.el.addEventListener('pointerenter', onPointerEnter);

        swiper.el.addEventListener('pointerleave', onPointerLeave);

      }

    };

    const detachMouseEvents = () => {

      if (swiper.el && typeof swiper.el !== 'string') {

        swiper.el.removeEventListener('pointerenter', onPointerEnter);

        swiper.el.removeEventListener('pointerleave', onPointerLeave);

      }

    };

    const attachDocumentEvents = () => {

      const document = getDocument();

      document.addEventListener('visibilitychange', onVisibilityChange);

    };

    const detachDocumentEvents = () => {

      const document = getDocument();

      document.removeEventListener('visibilitychange', onVisibilityChange);

    };

    on('init', () => {

      if (swiper.params.autoplay.enabled) {

        attachMouseEvents();

        attachDocumentEvents();

        start();

      }

    });

    on('destroy', () => {

      detachMouseEvents();

      detachDocumentEvents();

      if (swiper.autoplay.running) {

        stop();

      }

    });

    on('_freeModeStaticRelease', () => {

      if (pausedByTouch || pausedByInteraction) {

        resume();

      }

    });

    on('_freeModeNoMomentumRelease', () => {

      if (!swiper.params.autoplay.disableOnInteraction) {

        pause(true, true);

      } else {

        stop();

      }

    });

    on('beforeTransitionStart', (_s, speed, internal) => {

      if (swiper.destroyed || !swiper.autoplay.running) return;

      if (internal || !swiper.params.autoplay.disableOnInteraction) {

        pause(true, true);

      } else {

        stop();

      }

    });

    on('sliderFirstMove', () => {

      if (swiper.destroyed || !swiper.autoplay.running) return;

      if (swiper.params.autoplay.disableOnInteraction) {

        stop();

        return;

      }

      isTouched = true;

      pausedByTouch = false;

      pausedByInteraction = false;

      touchStartTimeout = setTimeout(() => {

        pausedByInteraction = true;

        pausedByTouch = true;

        pause(true);

      }, 200);

    });

    on('touchEnd', () => {

      if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;

      clearTimeout(touchStartTimeout);

      clearTimeout(timeout);

      if (swiper.params.autoplay.disableOnInteraction) {

        pausedByTouch = false;

        isTouched = false;

        return;

      }

      if (pausedByTouch && swiper.params.cssMode) resume();

      pausedByTouch = false;

      isTouched = false;

    });

    on('slideChange', () => {

      if (swiper.destroyed || !swiper.autoplay.running) return;

      slideChanged = true;

    });

    Object.assign(swiper.autoplay, {

      start,

      stop,

      pause,

      resume

    });

  }



  function Thumb(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      thumbs: {

        swiper: null,

        multipleActiveThumbs: true,

        autoScrollOffset: 0,

        slideThumbActiveClass: 'swiper-slide-thumb-active',

        thumbsContainerClass: 'swiper-thumbs'

      }

    });

    let initialized = false;

    let swiperCreated = false;

    swiper.thumbs = {

      swiper: null

    };

    function onThumbClick() {

      const thumbsSwiper = swiper.thumbs.swiper;

      if (!thumbsSwiper || thumbsSwiper.destroyed) return;

      const clickedIndex = thumbsSwiper.clickedIndex;

      const clickedSlide = thumbsSwiper.clickedSlide;

      if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;

      if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;

      let slideToIndex;

      if (thumbsSwiper.params.loop) {

        slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);

      } else {

        slideToIndex = clickedIndex;

      }

      if (swiper.params.loop) {

        swiper.slideToLoop(slideToIndex);

      } else {

        swiper.slideTo(slideToIndex);

      }

    }

    function init() {

      const {

        thumbs: thumbsParams

      } = swiper.params;

      if (initialized) return false;

      initialized = true;

      const SwiperClass = swiper.constructor;

      if (thumbsParams.swiper instanceof SwiperClass) {

        if (thumbsParams.swiper.destroyed) {

          initialized = false;

          return false;

        }

        swiper.thumbs.swiper = thumbsParams.swiper;

        Object.assign(swiper.thumbs.swiper.originalParams, {

          watchSlidesProgress: true,

          slideToClickedSlide: false

        });

        Object.assign(swiper.thumbs.swiper.params, {

          watchSlidesProgress: true,

          slideToClickedSlide: false

        });

        swiper.thumbs.swiper.update();

      } else if (isObject(thumbsParams.swiper)) {

        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);

        Object.assign(thumbsSwiperParams, {

          watchSlidesProgress: true,

          slideToClickedSlide: false

        });

        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);

        swiperCreated = true;

      }

      swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);

      swiper.thumbs.swiper.on('tap', onThumbClick);

      return true;

    }

    function update(initial) {

      const thumbsSwiper = swiper.thumbs.swiper;

      if (!thumbsSwiper || thumbsSwiper.destroyed) return;

      const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;



      // Activate thumbs

      let thumbsToActivate = 1;

      const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {

        thumbsToActivate = swiper.params.slidesPerView;

      }

      if (!swiper.params.thumbs.multipleActiveThumbs) {

        thumbsToActivate = 1;

      }

      thumbsToActivate = Math.floor(thumbsToActivate);

      thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));

      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {

        for (let i = 0; i < thumbsToActivate; i += 1) {

          elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {

            slideEl.classList.add(thumbActiveClass);

          });

        }

      } else {

        for (let i = 0; i < thumbsToActivate; i += 1) {

          if (thumbsSwiper.slides[swiper.realIndex + i]) {

            thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);

          }

        }

      }

      const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;

      const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {

        const currentThumbsIndex = thumbsSwiper.activeIndex;

        let newThumbsIndex;

        let direction;

        if (thumbsSwiper.params.loop) {

          const newThumbsSlide = thumbsSwiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`);

          newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);

          direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';

        } else {

          newThumbsIndex = swiper.realIndex;

          direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';

        }

        if (useOffset) {

          newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;

        }

        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {

          if (thumbsSwiper.params.centeredSlides) {

            if (newThumbsIndex > currentThumbsIndex) {

              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;

            } else {

              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;

            }

          } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;

          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);

        }

      }

    }

    on('beforeInit', () => {

      const {

        thumbs

      } = swiper.params;

      if (!thumbs || !thumbs.swiper) return;

      if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {

        const document = getDocument();

        const getThumbsElementAndInit = () => {

          const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;

          if (thumbsElement && thumbsElement.swiper) {

            thumbs.swiper = thumbsElement.swiper;

            init();

            update(true);

          } else if (thumbsElement) {

            const eventName = `${swiper.params.eventsPrefix}init`;

            const onThumbsSwiper = e => {

              thumbs.swiper = e.detail[0];

              thumbsElement.removeEventListener(eventName, onThumbsSwiper);

              init();

              update(true);

              thumbs.swiper.update();

              swiper.update();

            };

            thumbsElement.addEventListener(eventName, onThumbsSwiper);

          }

          return thumbsElement;

        };

        const watchForThumbsToAppear = () => {

          if (swiper.destroyed) return;

          const thumbsElement = getThumbsElementAndInit();

          if (!thumbsElement) {

            requestAnimationFrame(watchForThumbsToAppear);

          }

        };

        requestAnimationFrame(watchForThumbsToAppear);

      } else {

        init();

        update(true);

      }

    });

    on('slideChange update resize observerUpdate', () => {

      update();

    });

    on('setTransition', (_s, duration) => {

      const thumbsSwiper = swiper.thumbs.swiper;

      if (!thumbsSwiper || thumbsSwiper.destroyed) return;

      thumbsSwiper.setTransition(duration);

    });

    on('beforeDestroy', () => {

      const thumbsSwiper = swiper.thumbs.swiper;

      if (!thumbsSwiper || thumbsSwiper.destroyed) return;

      if (swiperCreated) {

        thumbsSwiper.destroy();

      }

    });

    Object.assign(swiper.thumbs, {

      init,

      update

    });

  }



  function freeMode(_ref) {

    let {

      swiper,

      extendParams,

      emit,

      once

    } = _ref;

    extendParams({

      freeMode: {

        enabled: false,

        momentum: true,

        momentumRatio: 1,

        momentumBounce: true,

        momentumBounceRatio: 1,

        momentumVelocityRatio: 1,

        sticky: false,

        minimumVelocity: 0.02

      }

    });

    function onTouchStart() {

      if (swiper.params.cssMode) return;

      const translate = swiper.getTranslate();

      swiper.setTranslate(translate);

      swiper.setTransition(0);

      swiper.touchEventsData.velocities.length = 0;

      swiper.freeMode.onTouchEnd({

        currentPos: swiper.rtl ? swiper.translate : -swiper.translate

      });

    }

    function onTouchMove() {

      if (swiper.params.cssMode) return;

      const {

        touchEventsData: data,

        touches

      } = swiper;

      // Velocity

      if (data.velocities.length === 0) {

        data.velocities.push({

          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],

          time: data.touchStartTime

        });

      }

      data.velocities.push({

        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],

        time: now()

      });

    }

    function onTouchEnd(_ref2) {

      let {

        currentPos

      } = _ref2;

      if (swiper.params.cssMode) return;

      const {

        params,

        wrapperEl,

        rtlTranslate: rtl,

        snapGrid,

        touchEventsData: data

      } = swiper;

      // Time diff

      const touchEndTime = now();

      const timeDiff = touchEndTime - data.touchStartTime;

      if (currentPos < -swiper.minTranslate()) {

        swiper.slideTo(swiper.activeIndex);

        return;

      }

      if (currentPos > -swiper.maxTranslate()) {

        if (swiper.slides.length < snapGrid.length) {

          swiper.slideTo(snapGrid.length - 1);

        } else {

          swiper.slideTo(swiper.slides.length - 1);

        }

        return;

      }

      if (params.freeMode.momentum) {

        if (data.velocities.length > 1) {

          const lastMoveEvent = data.velocities.pop();

          const velocityEvent = data.velocities.pop();

          const distance = lastMoveEvent.position - velocityEvent.position;

          const time = lastMoveEvent.time - velocityEvent.time;

          swiper.velocity = distance / time;

          swiper.velocity /= 2;

          if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {

            swiper.velocity = 0;

          }

          // this implies that the user stopped moving a finger then released.

          // There would be no events with distance zero, so the last event is stale.

          if (time > 150 || now() - lastMoveEvent.time > 300) {

            swiper.velocity = 0;

          }

        } else {

          swiper.velocity = 0;

        }

        swiper.velocity *= params.freeMode.momentumVelocityRatio;

        data.velocities.length = 0;

        let momentumDuration = 1000 * params.freeMode.momentumRatio;

        const momentumDistance = swiper.velocity * momentumDuration;

        let newPosition = swiper.translate + momentumDistance;

        if (rtl) newPosition = -newPosition;

        let doBounce = false;

        let afterBouncePosition;

        const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;

        let needsLoopFix;

        if (newPosition < swiper.maxTranslate()) {

          if (params.freeMode.momentumBounce) {

            if (newPosition + swiper.maxTranslate() < -bounceAmount) {

              newPosition = swiper.maxTranslate() - bounceAmount;

            }

            afterBouncePosition = swiper.maxTranslate();

            doBounce = true;

            data.allowMomentumBounce = true;

          } else {

            newPosition = swiper.maxTranslate();

          }

          if (params.loop && params.centeredSlides) needsLoopFix = true;

        } else if (newPosition > swiper.minTranslate()) {

          if (params.freeMode.momentumBounce) {

            if (newPosition - swiper.minTranslate() > bounceAmount) {

              newPosition = swiper.minTranslate() + bounceAmount;

            }

            afterBouncePosition = swiper.minTranslate();

            doBounce = true;

            data.allowMomentumBounce = true;

          } else {

            newPosition = swiper.minTranslate();

          }

          if (params.loop && params.centeredSlides) needsLoopFix = true;

        } else if (params.freeMode.sticky) {

          let nextSlide;

          for (let j = 0; j < snapGrid.length; j += 1) {

            if (snapGrid[j] > -newPosition) {

              nextSlide = j;

              break;

            }

          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {

            newPosition = snapGrid[nextSlide];

          } else {

            newPosition = snapGrid[nextSlide - 1];

          }

          newPosition = -newPosition;

        }

        if (needsLoopFix) {

          once('transitionEnd', () => {

            swiper.loopFix();

          });

        }

        // Fix duration

        if (swiper.velocity !== 0) {

          if (rtl) {

            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);

          } else {

            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);

          }

          if (params.freeMode.sticky) {

            // If freeMode.sticky is active and the user ends a swipe with a slow-velocity

            // event, then durations can be 20+ seconds to slide one (or zero!) slides.

            // It's easy to see this when simulating touch with mouse events. To fix this,

            // limit single-slide swipes to the default slide duration. This also has the

            // nice side effect of matching slide speed if the user stopped moving before

            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.

            // For faster swipes, also apply limits (albeit higher ones).

            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);

            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

            if (moveDistance < currentSlideSize) {

              momentumDuration = params.speed;

            } else if (moveDistance < 2 * currentSlideSize) {

              momentumDuration = params.speed * 1.5;

            } else {

              momentumDuration = params.speed * 2.5;

            }

          }

        } else if (params.freeMode.sticky) {

          swiper.slideToClosest();

          return;

        }

        if (params.freeMode.momentumBounce && doBounce) {

          swiper.updateProgress(afterBouncePosition);

          swiper.setTransition(momentumDuration);

          swiper.setTranslate(newPosition);

          swiper.transitionStart(true, swiper.swipeDirection);

          swiper.animating = true;

          elementTransitionEnd(wrapperEl, () => {

            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;

            emit('momentumBounce');

            swiper.setTransition(params.speed);

            setTimeout(() => {

              swiper.setTranslate(afterBouncePosition);

              elementTransitionEnd(wrapperEl, () => {

                if (!swiper || swiper.destroyed) return;

                swiper.transitionEnd();

              });

            }, 0);

          });

        } else if (swiper.velocity) {

          emit('_freeModeNoMomentumRelease');

          swiper.updateProgress(newPosition);

          swiper.setTransition(momentumDuration);

          swiper.setTranslate(newPosition);

          swiper.transitionStart(true, swiper.swipeDirection);

          if (!swiper.animating) {

            swiper.animating = true;

            elementTransitionEnd(wrapperEl, () => {

              if (!swiper || swiper.destroyed) return;

              swiper.transitionEnd();

            });

          }

        } else {

          swiper.updateProgress(newPosition);

        }

        swiper.updateActiveIndex();

        swiper.updateSlidesClasses();

      } else if (params.freeMode.sticky) {

        swiper.slideToClosest();

        return;

      } else if (params.freeMode) {

        emit('_freeModeNoMomentumRelease');

      }

      if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {

        emit('_freeModeStaticRelease');

        swiper.updateProgress();

        swiper.updateActiveIndex();

        swiper.updateSlidesClasses();

      }

    }

    Object.assign(swiper, {

      freeMode: {

        onTouchStart,

        onTouchMove,

        onTouchEnd

      }

    });

  }



  function Grid(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      grid: {

        rows: 1,

        fill: 'column'

      }

    });

    let slidesNumberEvenToRows;

    let slidesPerRow;

    let numFullColumns;

    let wasMultiRow;

    const getSpaceBetween = () => {

      let spaceBetween = swiper.params.spaceBetween;

      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {

        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;

      } else if (typeof spaceBetween === 'string') {

        spaceBetween = parseFloat(spaceBetween);

      }

      return spaceBetween;

    };

    const initSlides = slides => {

      const {

        slidesPerView

      } = swiper.params;

      const {

        rows,

        fill

      } = swiper.params.grid;

      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;

      numFullColumns = Math.floor(slidesLength / rows);

      if (Math.floor(slidesLength / rows) === slidesLength / rows) {

        slidesNumberEvenToRows = slidesLength;

      } else {

        slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;

      }

      if (slidesPerView !== 'auto' && fill === 'row') {

        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);

      }

      slidesPerRow = slidesNumberEvenToRows / rows;

    };

    const unsetSlides = () => {

      if (swiper.slides) {

        swiper.slides.forEach(slide => {

          if (slide.swiperSlideGridSet) {

            slide.style.height = '';

            slide.style[swiper.getDirectionLabel('margin-top')] = '';

          }

        });

      }

    };

    const updateSlide = (i, slide, slides) => {

      const {

        slidesPerGroup

      } = swiper.params;

      const spaceBetween = getSpaceBetween();

      const {

        rows,

        fill

      } = swiper.params.grid;

      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;

      // Set slides order

      let newSlideOrderIndex;

      let column;

      let row;

      if (fill === 'row' && slidesPerGroup > 1) {

        const groupIndex = Math.floor(i / (slidesPerGroup * rows));

        const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;

        const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);

        row = Math.floor(slideIndexInGroup / columnsInGroup);

        column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;

        newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;

        slide.style.order = newSlideOrderIndex;

      } else if (fill === 'column') {

        column = Math.floor(i / rows);

        row = i - column * rows;

        if (column > numFullColumns || column === numFullColumns && row === rows - 1) {

          row += 1;

          if (row >= rows) {

            row = 0;

            column += 1;

          }

        }

      } else {

        row = Math.floor(i / slidesPerRow);

        column = i - row * slidesPerRow;

      }

      slide.row = row;

      slide.column = column;

      slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;

      slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';

      slide.swiperSlideGridSet = true;

    };

    const updateWrapperSize = (slideSize, snapGrid) => {

      const {

        centeredSlides,

        roundLengths

      } = swiper.params;

      const spaceBetween = getSpaceBetween();

      const {

        rows

      } = swiper.params.grid;

      swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;

      swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;

      if (!swiper.params.cssMode) {

        swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;

      }

      if (centeredSlides) {

        const newSlidesGrid = [];

        for (let i = 0; i < snapGrid.length; i += 1) {

          let slidesGridItem = snapGrid[i];

          if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);

          if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);

        }

        snapGrid.splice(0, snapGrid.length);

        snapGrid.push(...newSlidesGrid);

      }

    };

    const onInit = () => {

      wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;

    };

    const onUpdate = () => {

      const {

        params,

        el

      } = swiper;

      const isMultiRow = params.grid && params.grid.rows > 1;

      if (wasMultiRow && !isMultiRow) {

        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);

        numFullColumns = 1;

        swiper.emitContainerClasses();

      } else if (!wasMultiRow && isMultiRow) {

        el.classList.add(`${params.containerModifierClass}grid`);

        if (params.grid.fill === 'column') {

          el.classList.add(`${params.containerModifierClass}grid-column`);

        }

        swiper.emitContainerClasses();

      }

      wasMultiRow = isMultiRow;

    };

    on('init', onInit);

    on('update', onUpdate);

    swiper.grid = {

      initSlides,

      unsetSlides,

      updateSlide,

      updateWrapperSize

    };

  }



  function appendSlide(slides) {

    const swiper = this;

    const {

      params,

      slidesEl

    } = swiper;

    if (params.loop) {

      swiper.loopDestroy();

    }

    const appendElement = slideEl => {

      if (typeof slideEl === 'string') {

        const tempDOM = document.createElement('div');

        setInnerHTML(tempDOM, slideEl);

        slidesEl.append(tempDOM.children[0]);

        setInnerHTML(tempDOM, '');

      } else {

        slidesEl.append(slideEl);

      }

    };

    if (typeof slides === 'object' && 'length' in slides) {

      for (let i = 0; i < slides.length; i += 1) {

        if (slides[i]) appendElement(slides[i]);

      }

    } else {

      appendElement(slides);

    }

    swiper.recalcSlides();

    if (params.loop) {

      swiper.loopCreate();

    }

    if (!params.observer || swiper.isElement) {

      swiper.update();

    }

  }



  function prependSlide(slides) {

    const swiper = this;

    const {

      params,

      activeIndex,

      slidesEl

    } = swiper;

    if (params.loop) {

      swiper.loopDestroy();

    }

    let newActiveIndex = activeIndex + 1;

    const prependElement = slideEl => {

      if (typeof slideEl === 'string') {

        const tempDOM = document.createElement('div');

        setInnerHTML(tempDOM, slideEl);

        slidesEl.prepend(tempDOM.children[0]);

        setInnerHTML(tempDOM, '');

      } else {

        slidesEl.prepend(slideEl);

      }

    };

    if (typeof slides === 'object' && 'length' in slides) {

      for (let i = 0; i < slides.length; i += 1) {

        if (slides[i]) prependElement(slides[i]);

      }

      newActiveIndex = activeIndex + slides.length;

    } else {

      prependElement(slides);

    }

    swiper.recalcSlides();

    if (params.loop) {

      swiper.loopCreate();

    }

    if (!params.observer || swiper.isElement) {

      swiper.update();

    }

    swiper.slideTo(newActiveIndex, 0, false);

  }



  function addSlide(index, slides) {

    const swiper = this;

    const {

      params,

      activeIndex,

      slidesEl

    } = swiper;

    let activeIndexBuffer = activeIndex;

    if (params.loop) {

      activeIndexBuffer -= swiper.loopedSlides;

      swiper.loopDestroy();

      swiper.recalcSlides();

    }

    const baseLength = swiper.slides.length;

    if (index <= 0) {

      swiper.prependSlide(slides);

      return;

    }

    if (index >= baseLength) {

      swiper.appendSlide(slides);

      return;

    }

    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

    const slidesBuffer = [];

    for (let i = baseLength - 1; i >= index; i -= 1) {

      const currentSlide = swiper.slides[i];

      currentSlide.remove();

      slidesBuffer.unshift(currentSlide);

    }

    if (typeof slides === 'object' && 'length' in slides) {

      for (let i = 0; i < slides.length; i += 1) {

        if (slides[i]) slidesEl.append(slides[i]);

      }

      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;

    } else {

      slidesEl.append(slides);

    }

    for (let i = 0; i < slidesBuffer.length; i += 1) {

      slidesEl.append(slidesBuffer[i]);

    }

    swiper.recalcSlides();

    if (params.loop) {

      swiper.loopCreate();

    }

    if (!params.observer || swiper.isElement) {

      swiper.update();

    }

    if (params.loop) {

      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);

    } else {

      swiper.slideTo(newActiveIndex, 0, false);

    }

  }



  function removeSlide(slidesIndexes) {

    const swiper = this;

    const {

      params,

      activeIndex

    } = swiper;

    let activeIndexBuffer = activeIndex;

    if (params.loop) {

      activeIndexBuffer -= swiper.loopedSlides;

      swiper.loopDestroy();

    }

    let newActiveIndex = activeIndexBuffer;

    let indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {

      for (let i = 0; i < slidesIndexes.length; i += 1) {

        indexToRemove = slidesIndexes[i];

        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();

        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;

      }

      newActiveIndex = Math.max(newActiveIndex, 0);

    } else {

      indexToRemove = slidesIndexes;

      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();

      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;

      newActiveIndex = Math.max(newActiveIndex, 0);

    }

    swiper.recalcSlides();

    if (params.loop) {

      swiper.loopCreate();

    }

    if (!params.observer || swiper.isElement) {

      swiper.update();

    }

    if (params.loop) {

      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);

    } else {

      swiper.slideTo(newActiveIndex, 0, false);

    }

  }



  function removeAllSlides() {

    const swiper = this;

    const slidesIndexes = [];

    for (let i = 0; i < swiper.slides.length; i += 1) {

      slidesIndexes.push(i);

    }

    swiper.removeSlide(slidesIndexes);

  }



  function Manipulation(_ref) {

    let {

      swiper

    } = _ref;

    Object.assign(swiper, {

      appendSlide: appendSlide.bind(swiper),

      prependSlide: prependSlide.bind(swiper),

      addSlide: addSlide.bind(swiper),

      removeSlide: removeSlide.bind(swiper),

      removeAllSlides: removeAllSlides.bind(swiper)

    });

  }



  function effectInit(params) {

    const {

      effect,

      swiper,

      on,

      setTranslate,

      setTransition,

      overwriteParams,

      perspective,

      recreateShadows,

      getEffectParams

    } = params;

    on('beforeInit', () => {

      if (swiper.params.effect !== effect) return;

      swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

      if (perspective && perspective()) {

        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      }

      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};

      Object.assign(swiper.params, overwriteParamsResult);

      Object.assign(swiper.originalParams, overwriteParamsResult);

    });

    on('setTranslate _virtualUpdated', () => {

      if (swiper.params.effect !== effect) return;

      setTranslate();

    });

    on('setTransition', (_s, duration) => {

      if (swiper.params.effect !== effect) return;

      setTransition(duration);

    });

    on('transitionEnd', () => {

      if (swiper.params.effect !== effect) return;

      if (recreateShadows) {

        if (!getEffectParams || !getEffectParams().slideShadows) return;

        // remove shadows

        swiper.slides.forEach(slideEl => {

          slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());

        });

        // create new one

        recreateShadows();

      }

    });

    let requireUpdateOnVirtual;

    on('virtualUpdate', () => {

      if (swiper.params.effect !== effect) return;

      if (!swiper.slides.length) {

        requireUpdateOnVirtual = true;

      }

      requestAnimationFrame(() => {

        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {

          setTranslate();

          requireUpdateOnVirtual = false;

        }

      });

    });

  }



  function effectTarget(effectParams, slideEl) {

    const transformEl = getSlideTransformEl(slideEl);

    if (transformEl !== slideEl) {

      transformEl.style.backfaceVisibility = 'hidden';

      transformEl.style['-webkit-backface-visibility'] = 'hidden';

    }

    return transformEl;

  }



  function effectVirtualTransitionEnd(_ref) {

    let {

      swiper,

      duration,

      transformElements,

      allSlides

    } = _ref;

    const {

      activeIndex

    } = swiper;

    const getSlide = el => {

      if (!el.parentElement) {

        // assume shadow root

        const slide = swiper.slides.find(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);

        return slide;

      }

      return el.parentElement;

    };

    if (swiper.params.virtualTranslate && duration !== 0) {

      let eventTriggered = false;

      let transitionEndTarget;

      if (allSlides) {

        transitionEndTarget = transformElements;

      } else {

        transitionEndTarget = transformElements.filter(transformEl => {

          const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;

          return swiper.getSlideIndex(el) === activeIndex;

        });

      }

      transitionEndTarget.forEach(el => {

        elementTransitionEnd(el, () => {

          if (eventTriggered) return;

          if (!swiper || swiper.destroyed) return;

          eventTriggered = true;

          swiper.animating = false;

          const evt = new window.CustomEvent('transitionend', {

            bubbles: true,

            cancelable: true

          });

          swiper.wrapperEl.dispatchEvent(evt);

        });

      });

    }

  }



  function EffectFade(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      fadeEffect: {

        crossFade: false

      }

    });

    const setTranslate = () => {

      const {

        slides

      } = swiper;

      const params = swiper.params.fadeEffect;

      for (let i = 0; i < slides.length; i += 1) {

        const slideEl = swiper.slides[i];

        const offset = slideEl.swiperSlideOffset;

        let tx = -offset;

        if (!swiper.params.virtualTranslate) tx -= swiper.translate;

        let ty = 0;

        if (!swiper.isHorizontal()) {

          ty = tx;

          tx = 0;

        }

        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);

        const targetEl = effectTarget(params, slideEl);

        targetEl.style.opacity = slideOpacity;

        targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;

      }

    };

    const setTransition = duration => {

      const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));

      transformElements.forEach(el => {

        el.style.transitionDuration = `${duration}ms`;

      });

      effectVirtualTransitionEnd({

        swiper,

        duration,

        transformElements,

        allSlides: true

      });

    };

    effectInit({

      effect: 'fade',

      swiper,

      on,

      setTranslate,

      setTransition,

      overwriteParams: () => ({

        slidesPerView: 1,

        slidesPerGroup: 1,

        watchSlidesProgress: true,

        spaceBetween: 0,

        virtualTranslate: !swiper.params.cssMode

      })

    });

  }



  function EffectCube(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      cubeEffect: {

        slideShadows: true,

        shadow: true,

        shadowOffset: 20,

        shadowScale: 0.94

      }

    });

    const createSlideShadows = (slideEl, progress, isHorizontal) => {

      let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');

      let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');

      if (!shadowBefore) {

        shadowBefore = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));

        slideEl.append(shadowBefore);

      }

      if (!shadowAfter) {

        shadowAfter = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));

        slideEl.append(shadowAfter);

      }

      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);

      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);

    };

    const recreateShadows = () => {

      // create new ones

      const isHorizontal = swiper.isHorizontal();

      swiper.slides.forEach(slideEl => {

        const progress = Math.max(Math.min(slideEl.progress, 1), -1);

        createSlideShadows(slideEl, progress, isHorizontal);

      });

    };

    const setTranslate = () => {

      const {

        el,

        wrapperEl,

        slides,

        width: swiperWidth,

        height: swiperHeight,

        rtlTranslate: rtl,

        size: swiperSize,

        browser

      } = swiper;

      const r = getRotateFix(swiper);

      const params = swiper.params.cubeEffect;

      const isHorizontal = swiper.isHorizontal();

      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      let wrapperRotate = 0;

      let cubeShadowEl;

      if (params.shadow) {

        if (isHorizontal) {

          cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');

          if (!cubeShadowEl) {

            cubeShadowEl = createElement('div', 'swiper-cube-shadow');

            swiper.wrapperEl.append(cubeShadowEl);

          }

          cubeShadowEl.style.height = `${swiperWidth}px`;

        } else {

          cubeShadowEl = el.querySelector('.swiper-cube-shadow');

          if (!cubeShadowEl) {

            cubeShadowEl = createElement('div', 'swiper-cube-shadow');

            el.append(cubeShadowEl);

          }

        }

      }

      for (let i = 0; i < slides.length; i += 1) {

        const slideEl = slides[i];

        let slideIndex = i;

        if (isVirtual) {

          slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);

        }

        let slideAngle = slideIndex * 90;

        let round = Math.floor(slideAngle / 360);

        if (rtl) {

          slideAngle = -slideAngle;

          round = Math.floor(-slideAngle / 360);

        }

        const progress = Math.max(Math.min(slideEl.progress, 1), -1);

        let tx = 0;

        let ty = 0;

        let tz = 0;

        if (slideIndex % 4 === 0) {

          tx = -round * 4 * swiperSize;

          tz = 0;

        } else if ((slideIndex - 1) % 4 === 0) {

          tx = 0;

          tz = -round * 4 * swiperSize;

        } else if ((slideIndex - 2) % 4 === 0) {

          tx = swiperSize + round * 4 * swiperSize;

          tz = swiperSize;

        } else if ((slideIndex - 3) % 4 === 0) {

          tx = -swiperSize;

          tz = 3 * swiperSize + swiperSize * 4 * round;

        }

        if (rtl) {

          tx = -tx;

        }

        if (!isHorizontal) {

          ty = tx;

          tx = 0;

        }

        const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

        if (progress <= 1 && progress > -1) {

          wrapperRotate = slideIndex * 90 + progress * 90;

          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;

        }

        slideEl.style.transform = transform;

        if (params.slideShadows) {

          createSlideShadows(slideEl, progress, isHorizontal);

        }

      }

      wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;

      wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;

      if (params.shadow) {

        if (isHorizontal) {

          cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;

        } else {

          const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;

          const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);

          const scale1 = params.shadowScale;

          const scale2 = params.shadowScale / multiplier;

          const offset = params.shadowOffset;

          cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;

        }

      }

      const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;

      wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;

      wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);

    };

    const setTransition = duration => {

      const {

        el,

        slides

      } = swiper;

      slides.forEach(slideEl => {

        slideEl.style.transitionDuration = `${duration}ms`;

        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {

          subEl.style.transitionDuration = `${duration}ms`;

        });

      });

      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {

        const shadowEl = el.querySelector('.swiper-cube-shadow');

        if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;

      }

    };

    effectInit({

      effect: 'cube',

      swiper,

      on,

      setTranslate,

      setTransition,

      recreateShadows,

      getEffectParams: () => swiper.params.cubeEffect,

      perspective: () => true,

      overwriteParams: () => ({

        slidesPerView: 1,

        slidesPerGroup: 1,

        watchSlidesProgress: true,

        resistanceRatio: 0,

        spaceBetween: 0,

        centeredSlides: false,

        virtualTranslate: true

      })

    });

  }



  function createShadow(suffix, slideEl, side) {

    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;

    const shadowContainer = getSlideTransformEl(slideEl);

    let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);

    if (!shadowEl) {

      shadowEl = createElement('div', shadowClass.split(' '));

      shadowContainer.append(shadowEl);

    }

    return shadowEl;

  }



  function EffectFlip(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      flipEffect: {

        slideShadows: true,

        limitRotation: true

      }

    });

    const createSlideShadows = (slideEl, progress) => {

      let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');

      let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');

      if (!shadowBefore) {

        shadowBefore = createShadow('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');

      }

      if (!shadowAfter) {

        shadowAfter = createShadow('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');

      }

      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);

      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);

    };

    const recreateShadows = () => {

      // Set shadows

      swiper.params.flipEffect;

      swiper.slides.forEach(slideEl => {

        let progress = slideEl.progress;

        if (swiper.params.flipEffect.limitRotation) {

          progress = Math.max(Math.min(slideEl.progress, 1), -1);

        }

        createSlideShadows(slideEl, progress);

      });

    };

    const setTranslate = () => {

      const {

        slides,

        rtlTranslate: rtl

      } = swiper;

      const params = swiper.params.flipEffect;

      const rotateFix = getRotateFix(swiper);

      for (let i = 0; i < slides.length; i += 1) {

        const slideEl = slides[i];

        let progress = slideEl.progress;

        if (swiper.params.flipEffect.limitRotation) {

          progress = Math.max(Math.min(slideEl.progress, 1), -1);

        }

        const offset = slideEl.swiperSlideOffset;

        const rotate = -180 * progress;

        let rotateY = rotate;

        let rotateX = 0;

        let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;

        let ty = 0;

        if (!swiper.isHorizontal()) {

          ty = tx;

          tx = 0;

          rotateX = -rotateY;

          rotateY = 0;

        } else if (rtl) {

          rotateY = -rotateY;

        }

        slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (params.slideShadows) {

          createSlideShadows(slideEl, progress);

        }

        const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;

        const targetEl = effectTarget(params, slideEl);

        targetEl.style.transform = transform;

      }

    };

    const setTransition = duration => {

      const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));

      transformElements.forEach(el => {

        el.style.transitionDuration = `${duration}ms`;

        el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {

          shadowEl.style.transitionDuration = `${duration}ms`;

        });

      });

      effectVirtualTransitionEnd({

        swiper,

        duration,

        transformElements

      });

    };

    effectInit({

      effect: 'flip',

      swiper,

      on,

      setTranslate,

      setTransition,

      recreateShadows,

      getEffectParams: () => swiper.params.flipEffect,

      perspective: () => true,

      overwriteParams: () => ({

        slidesPerView: 1,

        slidesPerGroup: 1,

        watchSlidesProgress: true,

        spaceBetween: 0,

        virtualTranslate: !swiper.params.cssMode

      })

    });

  }



  function EffectCoverflow(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      coverflowEffect: {

        rotate: 50,

        stretch: 0,

        depth: 100,

        scale: 1,

        modifier: 1,

        slideShadows: true

      }

    });

    const setTranslate = () => {

      const {

        width: swiperWidth,

        height: swiperHeight,

        slides,

        slidesSizesGrid

      } = swiper;

      const params = swiper.params.coverflowEffect;

      const isHorizontal = swiper.isHorizontal();

      const transform = swiper.translate;

      const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;

      const rotate = isHorizontal ? params.rotate : -params.rotate;

      const translate = params.depth;

      const r = getRotateFix(swiper);

      // Each slide offset from center

      for (let i = 0, length = slides.length; i < length; i += 1) {

        const slideEl = slides[i];

        const slideSize = slidesSizesGrid[i];

        const slideOffset = slideEl.swiperSlideOffset;

        const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;

        const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;

        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;

        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;

        // var rotateZ = 0

        let translateZ = -translate * Math.abs(offsetMultiplier);

        let stretch = params.stretch;

        // Allow percentage to make a relative stretch for responsive sliders

        if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {

          stretch = parseFloat(params.stretch) / 100 * slideSize;

        }

        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;

        let translateX = isHorizontal ? stretch * offsetMultiplier : 0;

        let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);



        // Fix for ultra small values

        if (Math.abs(translateX) < 0.001) translateX = 0;

        if (Math.abs(translateY) < 0.001) translateY = 0;

        if (Math.abs(translateZ) < 0.001) translateZ = 0;

        if (Math.abs(rotateY) < 0.001) rotateY = 0;

        if (Math.abs(rotateX) < 0.001) rotateX = 0;

        if (Math.abs(scale) < 0.001) scale = 0;

        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;

        const targetEl = effectTarget(params, slideEl);

        targetEl.style.transform = slideTransform;

        slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

        if (params.slideShadows) {

          // Set shadows

          let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');

          let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');

          if (!shadowBeforeEl) {

            shadowBeforeEl = createShadow('coverflow', slideEl, isHorizontal ? 'left' : 'top');

          }

          if (!shadowAfterEl) {

            shadowAfterEl = createShadow('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');

          }

          if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;

          if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;

        }

      }

    };

    const setTransition = duration => {

      const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));

      transformElements.forEach(el => {

        el.style.transitionDuration = `${duration}ms`;

        el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {

          shadowEl.style.transitionDuration = `${duration}ms`;

        });

      });

    };

    effectInit({

      effect: 'coverflow',

      swiper,

      on,

      setTranslate,

      setTransition,

      perspective: () => true,

      overwriteParams: () => ({

        watchSlidesProgress: true

      })

    });

  }



  function EffectCreative(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      creativeEffect: {

        limitProgress: 1,

        shadowPerProgress: false,

        progressMultiplier: 1,

        perspective: true,

        prev: {

          translate: [0, 0, 0],

          rotate: [0, 0, 0],

          opacity: 1,

          scale: 1

        },

        next: {

          translate: [0, 0, 0],

          rotate: [0, 0, 0],

          opacity: 1,

          scale: 1

        }

      }

    });

    const getTranslateValue = value => {

      if (typeof value === 'string') return value;

      return `${value}px`;

    };

    const setTranslate = () => {

      const {

        slides,

        wrapperEl,

        slidesSizesGrid

      } = swiper;

      const params = swiper.params.creativeEffect;

      const {

        progressMultiplier: multiplier

      } = params;

      const isCenteredSlides = swiper.params.centeredSlides;

      const rotateFix = getRotateFix(swiper);

      if (isCenteredSlides) {

        const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;

        wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;

      }

      for (let i = 0; i < slides.length; i += 1) {

        const slideEl = slides[i];

        const slideProgress = slideEl.progress;

        const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);

        let originalProgress = progress;

        if (!isCenteredSlides) {

          originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);

        }

        const offset = slideEl.swiperSlideOffset;

        const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];

        const r = [0, 0, 0];

        let custom = false;

        if (!swiper.isHorizontal()) {

          t[1] = t[0];

          t[0] = 0;

        }

        let data = {

          translate: [0, 0, 0],

          rotate: [0, 0, 0],

          scale: 1,

          opacity: 1

        };

        if (progress < 0) {

          data = params.next;

          custom = true;

        } else if (progress > 0) {

          data = params.prev;

          custom = true;

        }

        // set translate

        t.forEach((value, index) => {

          t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;

        });

        // set rotates

        r.forEach((value, index) => {

          let val = data.rotate[index] * Math.abs(progress * multiplier);

          r[index] = val;

        });

        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;

        const translateString = t.join(', ');

        const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;

        const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;

        const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;

        const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;



        // Set shadows

        if (custom && data.shadow || !custom) {

          let shadowEl = slideEl.querySelector('.swiper-slide-shadow');

          if (!shadowEl && data.shadow) {

            shadowEl = createShadow('creative', slideEl);

          }

          if (shadowEl) {

            const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;

            shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);

          }

        }

        const targetEl = effectTarget(params, slideEl);

        targetEl.style.transform = transform;

        targetEl.style.opacity = opacityString;

        if (data.origin) {

          targetEl.style.transformOrigin = data.origin;

        }

      }

    };

    const setTransition = duration => {

      const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));

      transformElements.forEach(el => {

        el.style.transitionDuration = `${duration}ms`;

        el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {

          shadowEl.style.transitionDuration = `${duration}ms`;

        });

      });

      effectVirtualTransitionEnd({

        swiper,

        duration,

        transformElements,

        allSlides: true

      });

    };

    effectInit({

      effect: 'creative',

      swiper,

      on,

      setTranslate,

      setTransition,

      perspective: () => swiper.params.creativeEffect.perspective,

      overwriteParams: () => ({

        watchSlidesProgress: true,

        virtualTranslate: !swiper.params.cssMode

      })

    });

  }



  function EffectCards(_ref) {

    let {

      swiper,

      extendParams,

      on

    } = _ref;

    extendParams({

      cardsEffect: {

        slideShadows: true,

        rotate: true,

        perSlideRotate: 2,

        perSlideOffset: 8

      }

    });

    const setTranslate = () => {

      const {

        slides,

        activeIndex,

        rtlTranslate: rtl

      } = swiper;

      const params = swiper.params.cardsEffect;

      const {

        startTranslate,

        isTouched

      } = swiper.touchEventsData;

      const currentTranslate = rtl ? -swiper.translate : swiper.translate;

      for (let i = 0; i < slides.length; i += 1) {

        const slideEl = slides[i];

        const slideProgress = slideEl.progress;

        const progress = Math.min(Math.max(slideProgress, -4), 4);

        let offset = slideEl.swiperSlideOffset;

        if (swiper.params.centeredSlides && !swiper.params.cssMode) {

          swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;

        }

        if (swiper.params.centeredSlides && swiper.params.cssMode) {

          offset -= slides[0].swiperSlideOffset;

        }

        let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;

        let tY = 0;

        const tZ = -100 * Math.abs(progress);

        let scale = 1;

        let rotate = -params.perSlideRotate * progress;

        let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;

        const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;

        const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;

        const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

        if (isSwipeToNext || isSwipeToPrev) {

          const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;

          rotate += -28 * progress * subProgress;

          scale += -0.5 * subProgress;

          tXAdd += 96 * subProgress;

          tY = `${-25 * subProgress * Math.abs(progress)}%`;

        }

        if (progress < 0) {

          // next

          tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;

        } else if (progress > 0) {

          // prev

          tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;

        } else {

          tX = `${tX}px`;

        }

        if (!swiper.isHorizontal()) {

          const prevY = tY;

          tY = tX;

          tX = prevY;

        }

        const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;



        /* eslint-disable */

        const transform = `

        translate3d(${tX}, ${tY}, ${tZ}px)

        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)

        scale(${scaleString})

      `;

        /* eslint-enable */



        if (params.slideShadows) {

          // Set shadows

          let shadowEl = slideEl.querySelector('.swiper-slide-shadow');

          if (!shadowEl) {

            shadowEl = createShadow('cards', slideEl);

          }

          if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);

        }

        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;

        const targetEl = effectTarget(params, slideEl);

        targetEl.style.transform = transform;

      }

    };

    const setTransition = duration => {

      const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));

      transformElements.forEach(el => {

        el.style.transitionDuration = `${duration}ms`;

        el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {

          shadowEl.style.transitionDuration = `${duration}ms`;

        });

      });

      effectVirtualTransitionEnd({

        swiper,

        duration,

        transformElements

      });

    };

    effectInit({

      effect: 'cards',

      swiper,

      on,

      setTranslate,

      setTransition,

      perspective: () => true,

      overwriteParams: () => ({

        _loopSwapReset: false,

        watchSlidesProgress: true,

        loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,

        centeredSlides: true,

        virtualTranslate: !swiper.params.cssMode

      })

    });

  }



  /**

   * Swiper 11.2.10

   * Most modern mobile touch slider and framework with hardware accelerated transitions

   * https://swiperjs.com

   *

   * Copyright 2014-2025 Vladimir Kharlampidi

   *

   * Released under the MIT License

   *

   * Released on: June 28, 2025

   */





  // Swiper Class

  const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];

  Swiper.use(modules);



  return Swiper;



})();



/*!

 *  @preserve

 * 

 * Readmore.js plugin

 * Author: @jed_foster

 * Project home: jedfoster.com/Readmore.js

 * Version: 3.0.0-beta-1

 * Licensed under the MIT license

 * 

 * Debounce function from davidwalsh.name/javascript-debounce-function

 */

(function webpackUniversalModuleDefinition(root, factory) {

	if(typeof exports === 'object' && typeof module === 'object')

		module.exports = factory();

	else if(typeof define === 'function' && define.amd)

		define("Readmore", [], factory);

	else if(typeof exports === 'object')

		exports["Readmore"] = factory();

	else

		root["Readmore"] = factory();

})(window, function() {

return /******/ (function(modules) { // webpackBootstrap

/******/ 	// The module cache

/******/ 	var installedModules = {};

/******/

/******/ 	// The require function

/******/ 	function __webpack_require__(moduleId) {

/******/

/******/ 		// Check if module is in cache

/******/ 		if(installedModules[moduleId]) {

/******/ 			return installedModules[moduleId].exports;

/******/ 		}

/******/ 		// Create a new module (and put it into the cache)

/******/ 		var module = installedModules[moduleId] = {

/******/ 			i: moduleId,

/******/ 			l: false,

/******/ 			exports: {}

/******/ 		};

/******/

/******/ 		// Execute the module function

/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/

/******/ 		// Flag the module as loaded

/******/ 		module.l = true;

/******/

/******/ 		// Return the exports of the module

/******/ 		return module.exports;

/******/ 	}

/******/

/******/

/******/ 	// expose the modules object (__webpack_modules__)

/******/ 	__webpack_require__.m = modules;

/******/

/******/ 	// expose the module cache

/******/ 	__webpack_require__.c = installedModules;

/******/

/******/ 	// define getter function for harmony exports

/******/ 	__webpack_require__.d = function(exports, name, getter) {

/******/ 		if(!__webpack_require__.o(exports, name)) {

/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });

/******/ 		}

/******/ 	};

/******/

/******/ 	// define __esModule on exports

/******/ 	__webpack_require__.r = function(exports) {

/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {

/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

/******/ 		}

/******/ 		Object.defineProperty(exports, '__esModule', { value: true });

/******/ 	};

/******/

/******/ 	// create a fake namespace object

/******/ 	// mode & 1: value is a module id, require it

/******/ 	// mode & 2: merge all properties of value into the ns

/******/ 	// mode & 4: return value when already ns object

/******/ 	// mode & 8|1: behave like require

/******/ 	__webpack_require__.t = function(value, mode) {

/******/ 		if(mode & 1) value = __webpack_require__(value);

/******/ 		if(mode & 8) return value;

/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;

/******/ 		var ns = Object.create(null);

/******/ 		__webpack_require__.r(ns);

/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });

/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));

/******/ 		return ns;

/******/ 	};

/******/

/******/ 	// getDefaultExport function for compatibility with non-harmony modules

/******/ 	__webpack_require__.n = function(module) {

/******/ 		var getter = module && module.__esModule ?

/******/ 			function getDefault() { return module['default']; } :

/******/ 			function getModuleExports() { return module; };

/******/ 		__webpack_require__.d(getter, 'a', getter);

/******/ 		return getter;

/******/ 	};

/******/

/******/ 	// Object.prototype.hasOwnProperty.call

/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/

/******/ 	// __webpack_public_path__

/******/ 	__webpack_require__.p = "";

/******/

/******/

/******/ 	// Load entry module and return exports

/******/ 	return __webpack_require__(__webpack_require__.s = 0);

/******/ })

/************************************************************************/

/******/ ({



/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":

/*!***************************************************************!*\

  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!

  \***************************************************************/

/*! no static exports found */

/***/ (function(module, exports) {



function _classCallCheck(instance, Constructor) {

  if (!(instance instanceof Constructor)) {

    throw new TypeError("Cannot call a class as a function");

  }

}



module.exports = _classCallCheck;



/***/ }),



/***/ "./node_modules/@babel/runtime/helpers/createClass.js":

/*!************************************************************!*\

  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!

  \************************************************************/

/*! no static exports found */

/***/ (function(module, exports) {



function _defineProperties(target, props) {

  for (var i = 0; i < props.length; i++) {

    var descriptor = props[i];

    descriptor.enumerable = descriptor.enumerable || false;

    descriptor.configurable = true;

    if ("value" in descriptor) descriptor.writable = true;

    Object.defineProperty(target, descriptor.key, descriptor);

  }

}



function _createClass(Constructor, protoProps, staticProps) {

  if (protoProps) _defineProperties(Constructor.prototype, protoProps);

  if (staticProps) _defineProperties(Constructor, staticProps);

  return Constructor;

}



module.exports = _createClass;



/***/ }),



/***/ "./node_modules/@babel/runtime/helpers/typeof.js":

/*!*******************************************************!*\

  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!

  \*******************************************************/

/*! no static exports found */

/***/ (function(module, exports) {



function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }



function _typeof(obj) {

  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {

    module.exports = _typeof = function _typeof(obj) {

      return _typeof2(obj);

    };

  } else {

    module.exports = _typeof = function _typeof(obj) {

      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);

    };

  }



  return _typeof(obj);

}



module.exports = _typeof;



/***/ }),



/***/ "./src/readmore.js":

/*!*************************!*\

  !*** ./src/readmore.js ***!

  \*************************/

/*! exports provided: default */

/***/ (function(module, __webpack_exports__, __webpack_require__) {



"use strict";

__webpack_require__.r(__webpack_exports__);

/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);

/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);

/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);







var uniqueIdCounter = 0;

var isCssEmbeddedFor = []; // from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md



(function removePolyfill(arr) {

  arr.forEach(function (item) {

    if (Object.prototype.hasOwnProperty.call(item, 'remove')) {

      return;

    }



    Object.defineProperty(item, 'remove', {

      configurable: true,

      enumerable: true,

      writable: true,

      value: function remove() {

        if (this.parentNode !== null) {

          this.parentNode.removeChild(this);

        }

      }

    });

  });

})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);



function forEach(arr, callback, scope) {

  for (var i = 0; i < arr.length; i += 1) {

    callback.call(scope, arr[i], i);

  }

}



function extend() {

  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {

    objects[_key] = arguments[_key];

  }



  var hasProp = {}.hasOwnProperty;

  var child = objects[0];

  var parent = objects[1];



  if (objects.length > 2) {

    var args = [];

    Object.keys(objects).forEach(function (key) {

      args.push(objects[key]);

    });



    while (args.length > 2) {

      var c1 = args.shift();

      var p1 = args.shift();

      args.unshift(extend(c1, p1));

    }



    child = args.shift();

    parent = args.shift();

  }



  if (parent) {

    Object.keys(parent).forEach(function (key) {

      if (hasProp.call(parent, key)) {

        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(parent[key]) === 'object') {

          child[key] = child[key] || {};

          child[key] = extend(child[key], parent[key]);

        } else {

          child[key] = parent[key];

        }

      }

    });

  }



  return child;

}



function debounce(func, wait, immediate) {

  var timeout;

  return function debouncedFunc() {

    var _this = this;



    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {

      args[_key2] = arguments[_key2];

    }



    var callNow = immediate && !timeout;



    var later = function later() {

      timeout = null;

      if (!immediate) func.apply(_this, args);

    };



    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(this, args);

  };

}



function uniqueId() {

  uniqueIdCounter += 1;

  return "rmjs-".concat(uniqueIdCounter);

}



function setBoxHeights(element) {

  element.style.height = 'auto';

  var expandedHeight = parseInt(element.getBoundingClientRect().height, 10);

  var cssMaxHeight = parseInt(window.getComputedStyle(element).maxHeight, 10);

  var defaultHeight = parseInt(element.readmore.defaultHeight, 10); // Store our measurements.



  element.readmore.expandedHeight = expandedHeight;

  element.readmore.maxHeight = cssMaxHeight;

  element.readmore.collapsedHeight = cssMaxHeight || element.readmore.collapsedHeight || defaultHeight;

  element.style.maxHeight = 'none';

}



function createElementFromString(htmlString) {

  var div = document.createElement('div');

  div.innerHTML = htmlString;

  return div.firstChild;

}



function embedCSS(selector, options) {

  if (!isCssEmbeddedFor[selector]) {

    var styles = '';



    if (options.embedCSS && options.blockCSS !== '') {

      styles += "".concat(selector, " + [data-readmore-toggle], ").concat(selector, "[data-readmore] {\n        ").concat(options.blockCSS, "\n      }");

    } // Include the transition CSS even if embedCSS is false





    styles += "".concat(selector, "[data-readmore] {\n      transition: height ").concat(options.speed, "ms;\n      overflow: hidden;\n    }");



    (function (d, u) {

      var css = d.createElement('style');

      css.type = 'text/css';



      if (css.styleSheet) {

        css.styleSheet.cssText = u;

      } else {

        css.appendChild(d.createTextNode(u));

      }



      d.getElementsByTagName('head')[0].appendChild(css);

    })(document, styles);



    isCssEmbeddedFor[selector] = true;

  }

}



function buildToggle(link, element, scope) {

  function clickHandler(event) {

    this.toggle(element, event);

  }



  var text = link;



  if (typeof link === 'function') {

    text = link(element);

  }



  var toggleLink = createElementFromString(text);

  toggleLink.setAttribute('data-readmore-toggle', element.id);

  toggleLink.setAttribute('aria-controls', element.id);

  toggleLink.addEventListener('click', clickHandler.bind(scope));

  return toggleLink;

}



function isEnvironmentSupported() {

  return typeof window !== 'undefined' && typeof document !== 'undefined' && !!document.querySelectorAll && !!window.addEventListener;

}



var resizeBoxes = debounce(function () {

  var elements = document.querySelectorAll('[data-readmore]');

  forEach(elements, function (element) {

    var expanded = element.getAttribute('aria-expanded') === 'true';

    setBoxHeights(element);

    element.style.height = "".concat(expanded ? element.readmore.expandedHeight : element.readmore.collapsedHeight, "px");

  });

}, 100);

var defaults = {

  speed: 100,

  collapsedHeight: 200,

  heightMargin: 16,

  moreLink: '<a href="#">Read More</a>',

  lessLink: '<a href="#">Close</a>',

  embedCSS: true,

  blockCSS: 'display: block; width: 100%;',

  startOpen: false,

  sourceOrder: 'after',

  // callbacks

  blockProcessed: function blockProcessed() {},

  beforeToggle: function beforeToggle() {},

  afterToggle: function afterToggle() {}

};



var Readmore =

/*#__PURE__*/

function () {

  function Readmore() {

    var _this2 = this;



    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Readmore);



    if (!isEnvironmentSupported()) return;



    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {

      args[_key3] = arguments[_key3];

    }



    var selector = args[0],

        options = args[1];

    var elements;



    if (typeof selector === 'string') {

      elements = document.querySelectorAll(selector);

    } else if (selector.nodeName) {

      elements = [selector]; // emulate a NodeList by casting a single Node as an array

    } else {

      elements = selector;

    } // After all that, if we _still_ don't have iteratable NodeList, bail out.





    if (!elements.length) return;

    this.options = extend({}, defaults, options);



    if (typeof selector === 'string') {

      embedCSS(selector, this.options);

    } else {

      // Instances need distinct selectors so they don't stomp on each other.

      this.instanceSelector = ".".concat(uniqueId());

      embedCSS(this.instanceSelector, this.options);

    } // Need to resize boxes when the page has fully loaded.





    window.addEventListener('load', resizeBoxes);

    window.addEventListener('resize', resizeBoxes);

    this.elements = [];

    forEach(elements, function (element) {

      if (_this2.instanceSelector) {

        element.classList.add(_this2.instanceSelector.substr(1));

      }



      var expanded = _this2.options.startOpen;

      element.readmore = {

        defaultHeight: _this2.options.collapsedHeight,

        heightMargin: _this2.options.heightMargin

      };

      setBoxHeights(element);

      var heightMargin = element.readmore.heightMargin;



      if (element.getBoundingClientRect().height <= element.readmore.collapsedHeight + heightMargin) {

        if (typeof _this2.options.blockProcessed === 'function') {

          _this2.options.blockProcessed(element, false);

        }



        return;

      }



      element.setAttribute('data-readmore', '');

      element.setAttribute('aria-expanded', expanded);

      element.id = element.id || uniqueId();

      var toggleLink = expanded ? _this2.options.lessLink : _this2.options.moreLink;

      var toggleElement = buildToggle(toggleLink, element, _this2);

      element.parentNode.insertBefore(toggleElement, _this2.options.sourceOrder === 'before' ? element : element.nextSibling);

      element.style.height = "".concat(expanded ? element.readmore.expandedHeight : element.readmore.collapsedHeight, "px");



      if (typeof _this2.options.blockProcessed === 'function') {

        _this2.options.blockProcessed(element, true);

      }



      _this2.elements.push(element);

    });

  } // Signature when called internally by the toggleLink click handler:

  //   toggle(element, event)

  //

  // When called externally by an instance,

  // e.g. readmoreDemo.toggle(document.querySelector('article:nth-of-type(1)')):

  //   toggle(elementOrQuerySelector)





  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Readmore, [{

    key: "toggle",

    value: function toggle() {

      var _this3 = this;



      var el = arguments.length <= 0 ? undefined : arguments[0];



      var toggleElement = function toggleElement(element) {

        var trigger = document.querySelector("[aria-controls=\"".concat(element.id, "\"]"));

        var expanded = element.getBoundingClientRect().height <= element.readmore.collapsedHeight;

        var newHeight = expanded ? element.readmore.expandedHeight : element.readmore.collapsedHeight; // Fire beforeToggle callback

        // Since we determined the new "expanded" state above we're now out of sync

        // with our true current state, so we need to flip the value of `expanded`



        if (typeof _this3.options.beforeToggle === 'function') {

          var shouldContinueToggle = _this3.options.beforeToggle(trigger, element, !expanded); // if the beforeToggle callback returns false, stop toggling





          if (shouldContinueToggle === false) {

            return;

          }

        }



        element.style.height = "".concat(newHeight, "px");



        var transitionendHandler = function transitionendHandler(transitionEvent) {

          // Fire afterToggle callback

          if (typeof _this3.options.afterToggle === 'function') {

            _this3.options.afterToggle(trigger, element, expanded);

          }



          transitionEvent.stopPropagation();

          element.setAttribute('aria-expanded', expanded);

          element.removeEventListener('transitionend', transitionendHandler, false);

        };



        element.addEventListener('transitionend', transitionendHandler, false);



        if (_this3.options.speed < 1) {

          transitionendHandler.call(_this3, {

            target: element

          });

        }



        var toggleLink = expanded ? _this3.options.lessLink : _this3.options.moreLink;



        if (!toggleLink) {

          trigger.remove();

        } else if (trigger && trigger.parentNode) {

          trigger.parentNode.replaceChild(buildToggle(toggleLink, element, _this3), trigger);

        }

      };



      if (typeof el === 'string') {

        el = document.querySelectorAll(el);

      }



      if (!el) {

        throw new Error('Element MUST be either an HTML node or querySelector string');

      }



      var event = arguments.length <= 1 ? undefined : arguments[1];



      if (event) {

        event.preventDefault();

        event.stopPropagation();

      }



      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(el) === 'object' && !el.nodeName) {

        // element is likely a NodeList

        forEach(el, toggleElement);

      } else {

        toggleElement(el);

      }

    }

  }, {

    key: "destroy",

    value: function destroy(selector) {

      var _this4 = this;



      var elements;



      if (!selector) {

        elements = this.elements; // eslint-disable-line

      } else if (typeof selector === 'string') {

        elements = document.querySelectorAll(selector);

      } else if (selector.nodeName) {

        elements = [selector]; // emulate a NodeList by casting a single Node as an array

      } else {

        elements = selector;

      }



      forEach(elements, function (element) {

        if (_this4.elements.indexOf(element) === -1) {

          return;

        }



        _this4.elements = _this4.elements.filter(function (el) {

          return el !== element;

        });



        if (_this4.instanceSelector) {

          element.classList.remove(_this4.instanceSelector.substr(1));

        }



        delete element.readmore;

        element.style.height = 'initial';

        element.style.maxHeight = 'initial';

        element.removeAttribute('data-readmore');

        element.removeAttribute('aria-expanded');

        var trigger = document.querySelector("[aria-controls=\"".concat(element.id, "\"]"));



        if (trigger) {

          trigger.remove();

        }



        if (element.id.indexOf('rmjs-') !== -1) {

          element.removeAttribute('id');

        }

      });

      delete this;

    }

  }]);



  return Readmore;

}();



Readmore.VERSION = "3.0.0-beta-1";

/* harmony default export */ __webpack_exports__["default"] = (Readmore);



/***/ }),



/***/ 0:

/*!*******************************!*\

  !*** multi ./src/readmore.js ***!

  \*******************************/

/*! no static exports found */

/***/ (function(module, exports, __webpack_require__) {



module.exports = __webpack_require__(/*! ./src/readmore.js */"./src/readmore.js");





/***/ })



/******/ })["default"];

});

//# sourceMappingURL=readmore.js.map

/**

 * simplebar - v6.3.2

 * Scrollbars, simpler.

 * https://grsmto.github.io/simplebar/

 *

 * Made by Adrien Denat from a fork by Jonathan Nicol

 * Under MIT License

 */



var SimpleBar = (function () {

    'use strict';



    /******************************************************************************

    Copyright (c) Microsoft Corporation.



    Permission to use, copy, modify, and/or distribute this software for any

    purpose with or without fee is hereby granted.



    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH

    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY

    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,

    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM

    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR

    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR

    PERFORMANCE OF THIS SOFTWARE.

    ***************************************************************************** */

    /* global Reflect, Promise */



    var extendStatics = function(d, b) {

        extendStatics = Object.setPrototypeOf ||

            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||

            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

        return extendStatics(d, b);

    };



    function __extends(d, b) {

        if (typeof b !== "function" && b !== null)

            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

        extendStatics(d, b);

        function __() { this.constructor = d; }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());

    }



    /**

     * Checks if `value` is the

     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)

     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)

     *

     * @static

     * @memberOf _

     * @since 0.1.0

     * @category Lang

     * @param {*} value The value to check.

     * @returns {boolean} Returns `true` if `value` is an object, else `false`.

     * @example

     *

     * _.isObject({});

     * // => true

     *

     * _.isObject([1, 2, 3]);

     * // => true

     *

     * _.isObject(_.noop);

     * // => true

     *

     * _.isObject(null);

     * // => false

     */

    function isObject(value) {

      var type = typeof value;

      return value != null && (type == 'object' || type == 'function');

    }



    /** Detect free variable `global` from Node.js. */

    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;



    var freeGlobal$1 = freeGlobal;



    /** Detect free variable `self`. */

    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;



    /** Used as a reference to the global object. */

    var root = freeGlobal$1 || freeSelf || Function('return this')();



    var root$1 = root;



    /**

     * Gets the timestamp of the number of milliseconds that have elapsed since

     * the Unix epoch (1 January 1970 00:00:00 UTC).

     *

     * @static

     * @memberOf _

     * @since 2.4.0

     * @category Date

     * @returns {number} Returns the timestamp.

     * @example

     *

     * _.defer(function(stamp) {

     *   console.log(_.now() - stamp);

     * }, _.now());

     * // => Logs the number of milliseconds it took for the deferred invocation.

     */

    var now = function() {

      return root$1.Date.now();

    };



    var now$1 = now;



    /** Used to match a single whitespace character. */

    var reWhitespace = /\s/;



    /**

     * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace

     * character of `string`.

     *

     * @private

     * @param {string} string The string to inspect.

     * @returns {number} Returns the index of the last non-whitespace character.

     */

    function trimmedEndIndex(string) {

      var index = string.length;



      while (index-- && reWhitespace.test(string.charAt(index))) {}

      return index;

    }



    /** Used to match leading whitespace. */

    var reTrimStart = /^\s+/;



    /**

     * The base implementation of `_.trim`.

     *

     * @private

     * @param {string} string The string to trim.

     * @returns {string} Returns the trimmed string.

     */

    function baseTrim(string) {

      return string

        ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')

        : string;

    }



    /** Built-in value references. */

    var Symbol = root$1.Symbol;



    var Symbol$1 = Symbol;



    /** Used for built-in method references. */

    var objectProto$1 = Object.prototype;



    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto$1.hasOwnProperty;



    /**

     * Used to resolve the

     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)

     * of values.

     */

    var nativeObjectToString$1 = objectProto$1.toString;



    /** Built-in value references. */

    var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;



    /**

     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.

     *

     * @private

     * @param {*} value The value to query.

     * @returns {string} Returns the raw `toStringTag`.

     */

    function getRawTag(value) {

      var isOwn = hasOwnProperty.call(value, symToStringTag$1),

          tag = value[symToStringTag$1];



      try {

        value[symToStringTag$1] = undefined;

        var unmasked = true;

      } catch (e) {}



      var result = nativeObjectToString$1.call(value);

      if (unmasked) {

        if (isOwn) {

          value[symToStringTag$1] = tag;

        } else {

          delete value[symToStringTag$1];

        }

      }

      return result;

    }



    /** Used for built-in method references. */

    var objectProto = Object.prototype;



    /**

     * Used to resolve the

     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)

     * of values.

     */

    var nativeObjectToString = objectProto.toString;



    /**

     * Converts `value` to a string using `Object.prototype.toString`.

     *

     * @private

     * @param {*} value The value to convert.

     * @returns {string} Returns the converted string.

     */

    function objectToString(value) {

      return nativeObjectToString.call(value);

    }



    /** `Object#toString` result references. */

    var nullTag = '[object Null]',

        undefinedTag = '[object Undefined]';



    /** Built-in value references. */

    var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;



    /**

     * The base implementation of `getTag` without fallbacks for buggy environments.

     *

     * @private

     * @param {*} value The value to query.

     * @returns {string} Returns the `toStringTag`.

     */

    function baseGetTag(value) {

      if (value == null) {

        return value === undefined ? undefinedTag : nullTag;

      }

      return (symToStringTag && symToStringTag in Object(value))

        ? getRawTag(value)

        : objectToString(value);

    }



    /**

     * Checks if `value` is object-like. A value is object-like if it's not `null`

     * and has a `typeof` result of "object".

     *

     * @static

     * @memberOf _

     * @since 4.0.0

     * @category Lang

     * @param {*} value The value to check.

     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.

     * @example

     *

     * _.isObjectLike({});

     * // => true

     *

     * _.isObjectLike([1, 2, 3]);

     * // => true

     *

     * _.isObjectLike(_.noop);

     * // => false

     *

     * _.isObjectLike(null);

     * // => false

     */

    function isObjectLike(value) {

      return value != null && typeof value == 'object';

    }



    /** `Object#toString` result references. */

    var symbolTag = '[object Symbol]';



    /**

     * Checks if `value` is classified as a `Symbol` primitive or object.

     *

     * @static

     * @memberOf _

     * @since 4.0.0

     * @category Lang

     * @param {*} value The value to check.

     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.

     * @example

     *

     * _.isSymbol(Symbol.iterator);

     * // => true

     *

     * _.isSymbol('abc');

     * // => false

     */

    function isSymbol(value) {

      return typeof value == 'symbol' ||

        (isObjectLike(value) && baseGetTag(value) == symbolTag);

    }



    /** Used as references for various `Number` constants. */

    var NAN = 0 / 0;



    /** Used to detect bad signed hexadecimal string values. */

    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;



    /** Used to detect binary string values. */

    var reIsBinary = /^0b[01]+$/i;



    /** Used to detect octal string values. */

    var reIsOctal = /^0o[0-7]+$/i;



    /** Built-in method references without a dependency on `root`. */

    var freeParseInt = parseInt;



    /**

     * Converts `value` to a number.

     *

     * @static

     * @memberOf _

     * @since 4.0.0

     * @category Lang

     * @param {*} value The value to process.

     * @returns {number} Returns the number.

     * @example

     *

     * _.toNumber(3.2);

     * // => 3.2

     *

     * _.toNumber(Number.MIN_VALUE);

     * // => 5e-324

     *

     * _.toNumber(Infinity);

     * // => Infinity

     *

     * _.toNumber('3.2');

     * // => 3.2

     */

    function toNumber(value) {

      if (typeof value == 'number') {

        return value;

      }

      if (isSymbol(value)) {

        return NAN;

      }

      if (isObject(value)) {

        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;

        value = isObject(other) ? (other + '') : other;

      }

      if (typeof value != 'string') {

        return value === 0 ? value : +value;

      }

      value = baseTrim(value);

      var isBinary = reIsBinary.test(value);

      return (isBinary || reIsOctal.test(value))

        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)

        : (reIsBadHex.test(value) ? NAN : +value);

    }



    /** Error message constants. */

    var FUNC_ERROR_TEXT$1 = 'Expected a function';



    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeMax = Math.max,

        nativeMin = Math.min;



    /**

     * Creates a debounced function that delays invoking `func` until after `wait`

     * milliseconds have elapsed since the last time the debounced function was

     * invoked. The debounced function comes with a `cancel` method to cancel

     * delayed `func` invocations and a `flush` method to immediately invoke them.

     * Provide `options` to indicate whether `func` should be invoked on the

     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked

     * with the last arguments provided to the debounced function. Subsequent

     * calls to the debounced function return the result of the last `func`

     * invocation.

     *

     * **Note:** If `leading` and `trailing` options are `true`, `func` is

     * invoked on the trailing edge of the timeout only if the debounced function

     * is invoked more than once during the `wait` timeout.

     *

     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred

     * until to the next tick, similar to `setTimeout` with a timeout of `0`.

     *

     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)

     * for details over the differences between `_.debounce` and `_.throttle`.

     *

     * @static

     * @memberOf _

     * @since 0.1.0

     * @category Function

     * @param {Function} func The function to debounce.

     * @param {number} [wait=0] The number of milliseconds to delay.

     * @param {Object} [options={}] The options object.

     * @param {boolean} [options.leading=false]

     *  Specify invoking on the leading edge of the timeout.

     * @param {number} [options.maxWait]

     *  The maximum time `func` is allowed to be delayed before it's invoked.

     * @param {boolean} [options.trailing=true]

     *  Specify invoking on the trailing edge of the timeout.

     * @returns {Function} Returns the new debounced function.

     * @example

     *

     * // Avoid costly calculations while the window size is in flux.

     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));

     *

     * // Invoke `sendMail` when clicked, debouncing subsequent calls.

     * jQuery(element).on('click', _.debounce(sendMail, 300, {

     *   'leading': true,

     *   'trailing': false

     * }));

     *

     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.

     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });

     * var source = new EventSource('/stream');

     * jQuery(source).on('message', debounced);

     *

     * // Cancel the trailing debounced invocation.

     * jQuery(window).on('popstate', debounced.cancel);

     */

    function debounce(func, wait, options) {

      var lastArgs,

          lastThis,

          maxWait,

          result,

          timerId,

          lastCallTime,

          lastInvokeTime = 0,

          leading = false,

          maxing = false,

          trailing = true;



      if (typeof func != 'function') {

        throw new TypeError(FUNC_ERROR_TEXT$1);

      }

      wait = toNumber(wait) || 0;

      if (isObject(options)) {

        leading = !!options.leading;

        maxing = 'maxWait' in options;

        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;

        trailing = 'trailing' in options ? !!options.trailing : trailing;

      }



      function invokeFunc(time) {

        var args = lastArgs,

            thisArg = lastThis;



        lastArgs = lastThis = undefined;

        lastInvokeTime = time;

        result = func.apply(thisArg, args);

        return result;

      }



      function leadingEdge(time) {

        // Reset any `maxWait` timer.

        lastInvokeTime = time;

        // Start the timer for the trailing edge.

        timerId = setTimeout(timerExpired, wait);

        // Invoke the leading edge.

        return leading ? invokeFunc(time) : result;

      }



      function remainingWait(time) {

        var timeSinceLastCall = time - lastCallTime,

            timeSinceLastInvoke = time - lastInvokeTime,

            timeWaiting = wait - timeSinceLastCall;



        return maxing

          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)

          : timeWaiting;

      }



      function shouldInvoke(time) {

        var timeSinceLastCall = time - lastCallTime,

            timeSinceLastInvoke = time - lastInvokeTime;



        // Either this is the first call, activity has stopped and we're at the

        // trailing edge, the system time has gone backwards and we're treating

        // it as the trailing edge, or we've hit the `maxWait` limit.

        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||

          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));

      }



      function timerExpired() {

        var time = now$1();

        if (shouldInvoke(time)) {

          return trailingEdge(time);

        }

        // Restart the timer.

        timerId = setTimeout(timerExpired, remainingWait(time));

      }



      function trailingEdge(time) {

        timerId = undefined;



        // Only invoke if we have `lastArgs` which means `func` has been

        // debounced at least once.

        if (trailing && lastArgs) {

          return invokeFunc(time);

        }

        lastArgs = lastThis = undefined;

        return result;

      }



      function cancel() {

        if (timerId !== undefined) {

          clearTimeout(timerId);

        }

        lastInvokeTime = 0;

        lastArgs = lastCallTime = lastThis = timerId = undefined;

      }



      function flush() {

        return timerId === undefined ? result : trailingEdge(now$1());

      }



      function debounced() {

        var time = now$1(),

            isInvoking = shouldInvoke(time);



        lastArgs = arguments;

        lastThis = this;

        lastCallTime = time;



        if (isInvoking) {

          if (timerId === undefined) {

            return leadingEdge(lastCallTime);

          }

          if (maxing) {

            // Handle invocations in a tight loop.

            clearTimeout(timerId);

            timerId = setTimeout(timerExpired, wait);

            return invokeFunc(lastCallTime);

          }

        }

        if (timerId === undefined) {

          timerId = setTimeout(timerExpired, wait);

        }

        return result;

      }

      debounced.cancel = cancel;

      debounced.flush = flush;

      return debounced;

    }



    /** Error message constants. */

    var FUNC_ERROR_TEXT = 'Expected a function';



    /**

     * Creates a throttled function that only invokes `func` at most once per

     * every `wait` milliseconds. The throttled function comes with a `cancel`

     * method to cancel delayed `func` invocations and a `flush` method to

     * immediately invoke them. Provide `options` to indicate whether `func`

     * should be invoked on the leading and/or trailing edge of the `wait`

     * timeout. The `func` is invoked with the last arguments provided to the

     * throttled function. Subsequent calls to the throttled function return the

     * result of the last `func` invocation.

     *

     * **Note:** If `leading` and `trailing` options are `true`, `func` is

     * invoked on the trailing edge of the timeout only if the throttled function

     * is invoked more than once during the `wait` timeout.

     *

     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred

     * until to the next tick, similar to `setTimeout` with a timeout of `0`.

     *

     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)

     * for details over the differences between `_.throttle` and `_.debounce`.

     *

     * @static

     * @memberOf _

     * @since 0.1.0

     * @category Function

     * @param {Function} func The function to throttle.

     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.

     * @param {Object} [options={}] The options object.

     * @param {boolean} [options.leading=true]

     *  Specify invoking on the leading edge of the timeout.

     * @param {boolean} [options.trailing=true]

     *  Specify invoking on the trailing edge of the timeout.

     * @returns {Function} Returns the new throttled function.

     * @example

     *

     * // Avoid excessively updating the position while scrolling.

     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));

     *

     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.

     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });

     * jQuery(element).on('click', throttled);

     *

     * // Cancel the trailing throttled invocation.

     * jQuery(window).on('popstate', throttled.cancel);

     */

    function throttle(func, wait, options) {

      var leading = true,

          trailing = true;



      if (typeof func != 'function') {

        throw new TypeError(FUNC_ERROR_TEXT);

      }

      if (isObject(options)) {

        leading = 'leading' in options ? !!options.leading : leading;

        trailing = 'trailing' in options ? !!options.trailing : trailing;

      }

      return debounce(func, wait, {

        'leading': leading,

        'maxWait': wait,

        'trailing': trailing

      });

    }



    /**

     * simplebar-core - v1.3.2

     * Scrollbars, simpler.

     * https://grsmto.github.io/simplebar/

     *

     * Made by Adrien Denat from a fork by Jonathan Nicol

     * Under MIT License

     */



    /******************************************************************************

    Copyright (c) Microsoft Corporation.



    Permission to use, copy, modify, and/or distribute this software for any

    purpose with or without fee is hereby granted.



    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH

    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY

    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,

    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM

    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR

    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR

    PERFORMANCE OF THIS SOFTWARE.

    ***************************************************************************** */



    var __assign = function() {

        __assign = Object.assign || function __assign(t) {

            for (var s, i = 1, n = arguments.length; i < n; i++) {

                s = arguments[i];

                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];

            }

            return t;

        };

        return __assign.apply(this, arguments);

    };



    function getElementWindow$1(element) {

        if (!element ||

            !element.ownerDocument ||

            !element.ownerDocument.defaultView) {

            return window;

        }

        return element.ownerDocument.defaultView;

    }

    function getElementDocument$1(element) {

        if (!element || !element.ownerDocument) {

            return document;

        }

        return element.ownerDocument;

    }

    // Helper function to retrieve options from element attributes

    var getOptions$1 = function (obj) {

        var initialObj = {};

        var options = Array.prototype.reduce.call(obj, function (acc, attribute) {

            var option = attribute.name.match(/data-simplebar-(.+)/);

            if (option) {

                var key = option[1].replace(/\W+(.)/g, function (_, chr) { return chr.toUpperCase(); });

                switch (attribute.value) {

                    case 'true':

                        acc[key] = true;

                        break;

                    case 'false':

                        acc[key] = false;

                        break;

                    case undefined:

                        acc[key] = true;

                        break;

                    default:

                        acc[key] = attribute.value;

                }

            }

            return acc;

        }, initialObj);

        return options;

    };

    function addClasses$1(el, classes) {

        var _a;

        if (!el)

            return;

        (_a = el.classList).add.apply(_a, classes.split(' '));

    }

    function removeClasses$1(el, classes) {

        if (!el)

            return;

        classes.split(' ').forEach(function (className) {

            el.classList.remove(className);

        });

    }

    function classNamesToQuery$1(classNames) {

        return ".".concat(classNames.split(' ').join('.'));

    }

    var canUseDOM$1 = !!(typeof window !== 'undefined' &&

        window.document &&

        window.document.createElement);



    var helpers = /*#__PURE__*/Object.freeze({

        __proto__: null,

        addClasses: addClasses$1,

        canUseDOM: canUseDOM$1,

        classNamesToQuery: classNamesToQuery$1,

        getElementDocument: getElementDocument$1,

        getElementWindow: getElementWindow$1,

        getOptions: getOptions$1,

        removeClasses: removeClasses$1

    });



    var cachedScrollbarWidth = null;

    var cachedDevicePixelRatio = null;

    if (canUseDOM$1) {

        window.addEventListener('resize', function () {

            if (cachedDevicePixelRatio !== window.devicePixelRatio) {

                cachedDevicePixelRatio = window.devicePixelRatio;

                cachedScrollbarWidth = null;

            }

        });

    }

    function scrollbarWidth() {

        if (cachedScrollbarWidth === null) {

            if (typeof document === 'undefined') {

                cachedScrollbarWidth = 0;

                return cachedScrollbarWidth;

            }

            var body = document.body;

            var box = document.createElement('div');

            box.classList.add('simplebar-hide-scrollbar');

            body.appendChild(box);

            var width = box.getBoundingClientRect().right;

            body.removeChild(box);

            cachedScrollbarWidth = width;

        }

        return cachedScrollbarWidth;

    }



    var getElementWindow = getElementWindow$1, getElementDocument = getElementDocument$1, getOptions$2 = getOptions$1, addClasses$2 = addClasses$1, removeClasses = removeClasses$1, classNamesToQuery = classNamesToQuery$1;

    var SimpleBarCore = /** @class */ (function () {

        function SimpleBarCore(element, options) {

            if (options === void 0) { options = {}; }

            var _this = this;

            this.removePreventClickId = null;

            this.minScrollbarWidth = 20;

            this.stopScrollDelay = 175;

            this.isScrolling = false;

            this.isMouseEntering = false;

            this.isDragging = false;

            this.scrollXTicking = false;

            this.scrollYTicking = false;

            this.wrapperEl = null;

            this.contentWrapperEl = null;

            this.contentEl = null;

            this.offsetEl = null;

            this.maskEl = null;

            this.placeholderEl = null;

            this.heightAutoObserverWrapperEl = null;

            this.heightAutoObserverEl = null;

            this.rtlHelpers = null;

            this.scrollbarWidth = 0;

            this.resizeObserver = null;

            this.mutationObserver = null;

            this.elStyles = null;

            this.isRtl = null;

            this.mouseX = 0;

            this.mouseY = 0;

            this.onMouseMove = function () { };

            this.onWindowResize = function () { };

            this.onStopScrolling = function () { };

            this.onMouseEntered = function () { };

            /**

             * On scroll event handling

             */

            this.onScroll = function () {

                var elWindow = getElementWindow(_this.el);

                if (!_this.scrollXTicking) {

                    elWindow.requestAnimationFrame(_this.scrollX);

                    _this.scrollXTicking = true;

                }

                if (!_this.scrollYTicking) {

                    elWindow.requestAnimationFrame(_this.scrollY);

                    _this.scrollYTicking = true;

                }

                if (!_this.isScrolling) {

                    _this.isScrolling = true;

                    addClasses$2(_this.el, _this.classNames.scrolling);

                }

                _this.showScrollbar('x');

                _this.showScrollbar('y');

                _this.onStopScrolling();

            };

            this.scrollX = function () {

                if (_this.axis.x.isOverflowing) {

                    _this.positionScrollbar('x');

                }

                _this.scrollXTicking = false;

            };

            this.scrollY = function () {

                if (_this.axis.y.isOverflowing) {

                    _this.positionScrollbar('y');

                }

                _this.scrollYTicking = false;

            };

            this._onStopScrolling = function () {

                removeClasses(_this.el, _this.classNames.scrolling);

                if (_this.options.autoHide) {

                    _this.hideScrollbar('x');

                    _this.hideScrollbar('y');

                }

                _this.isScrolling = false;

            };

            this.onMouseEnter = function () {

                if (!_this.isMouseEntering) {

                    addClasses$2(_this.el, _this.classNames.mouseEntered);

                    _this.showScrollbar('x');

                    _this.showScrollbar('y');

                    _this.isMouseEntering = true;

                }

                _this.onMouseEntered();

            };

            this._onMouseEntered = function () {

                removeClasses(_this.el, _this.classNames.mouseEntered);

                if (_this.options.autoHide) {

                    _this.hideScrollbar('x');

                    _this.hideScrollbar('y');

                }

                _this.isMouseEntering = false;

            };

            this._onMouseMove = function (e) {

                _this.mouseX = e.clientX;

                _this.mouseY = e.clientY;

                if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {

                    _this.onMouseMoveForAxis('x');

                }

                if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {

                    _this.onMouseMoveForAxis('y');

                }

            };

            this.onMouseLeave = function () {

                _this.onMouseMove.cancel();

                if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {

                    _this.onMouseLeaveForAxis('x');

                }

                if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {

                    _this.onMouseLeaveForAxis('y');

                }

                _this.mouseX = -1;

                _this.mouseY = -1;

            };

            this._onWindowResize = function () {

                // Recalculate scrollbarWidth in case it's a zoom

                _this.scrollbarWidth = _this.getScrollbarWidth();

                _this.hideNativeScrollbar();

            };

            this.onPointerEvent = function (e) {

                if (!_this.axis.x.track.el ||

                    !_this.axis.y.track.el ||

                    !_this.axis.x.scrollbar.el ||

                    !_this.axis.y.scrollbar.el)

                    return;

                var isWithinTrackXBounds, isWithinTrackYBounds;

                _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();

                _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

                if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {

                    isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);

                }

                if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {

                    isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);

                }

                // If any pointer event is called on the scrollbar

                if (isWithinTrackXBounds || isWithinTrackYBounds) {

                    // Prevent event leaking

                    e.stopPropagation();

                    if (e.type === 'pointerdown' && e.pointerType !== 'touch') {

                        if (isWithinTrackXBounds) {

                            _this.axis.x.scrollbar.rect =

                                _this.axis.x.scrollbar.el.getBoundingClientRect();

                            if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {

                                _this.onDragStart(e, 'x');

                            }

                            else {

                                _this.onTrackClick(e, 'x');

                            }

                        }

                        if (isWithinTrackYBounds) {

                            _this.axis.y.scrollbar.rect =

                                _this.axis.y.scrollbar.el.getBoundingClientRect();

                            if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {

                                _this.onDragStart(e, 'y');

                            }

                            else {

                                _this.onTrackClick(e, 'y');

                            }

                        }

                    }

                }

            };

            /**

             * Drag scrollbar handle

             */

            this.drag = function (e) {

                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

                if (!_this.draggedAxis || !_this.contentWrapperEl)

                    return;

                var eventOffset;

                var track = _this.axis[_this.draggedAxis].track;

                var trackSize = (_b = (_a = track.rect) === null || _a === void 0 ? void 0 : _a[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b !== void 0 ? _b : 0;

                var scrollbar = _this.axis[_this.draggedAxis].scrollbar;

                var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;

                var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : '0px', 10);

                e.preventDefault();

                e.stopPropagation();

                if (_this.draggedAxis === 'y') {

                    eventOffset = e.pageY;

                }

                else {

                    eventOffset = e.pageX;

                }

                // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).

                var dragPos = eventOffset -

                    ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) -

                    _this.axis[_this.draggedAxis].dragOffset;

                dragPos =

                    _this.draggedAxis === 'x' && _this.isRtl

                        ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) -

                            scrollbar.size -

                            dragPos

                        : dragPos;

                // Convert the mouse position into a percentage of the scrollbar height/width.

                var dragPerc = dragPos / (trackSize - scrollbar.size);

                // Scroll the content by the same percentage.

                var scrollPos = dragPerc * (contentSize - hostSize);

                // Fix browsers inconsistency on RTL

                if (_this.draggedAxis === 'x' && _this.isRtl) {

                    scrollPos = ((_l = SimpleBarCore.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative)

                        ? -scrollPos

                        : scrollPos;

                }

                _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] =

                    scrollPos;

            };

            /**

             * End scroll handle drag

             */

            this.onEndDrag = function (e) {

                _this.isDragging = false;

                var elDocument = getElementDocument(_this.el);

                var elWindow = getElementWindow(_this.el);

                e.preventDefault();

                e.stopPropagation();

                removeClasses(_this.el, _this.classNames.dragging);

                _this.onStopScrolling();

                elDocument.removeEventListener('mousemove', _this.drag, true);

                elDocument.removeEventListener('mouseup', _this.onEndDrag, true);

                _this.removePreventClickId = elWindow.setTimeout(function () {

                    // Remove these asynchronously so we still suppress click events

                    // generated simultaneously with mouseup.

                    elDocument.removeEventListener('click', _this.preventClick, true);

                    elDocument.removeEventListener('dblclick', _this.preventClick, true);

                    _this.removePreventClickId = null;

                });

            };

            /**

             * Handler to ignore click events during drag

             */

            this.preventClick = function (e) {

                e.preventDefault();

                e.stopPropagation();

            };

            this.el = element;

            this.options = __assign(__assign({}, SimpleBarCore.defaultOptions), options);

            this.classNames = __assign(__assign({}, SimpleBarCore.defaultOptions.classNames), options.classNames);

            this.axis = {

                x: {

                    scrollOffsetAttr: 'scrollLeft',

                    sizeAttr: 'width',

                    scrollSizeAttr: 'scrollWidth',

                    offsetSizeAttr: 'offsetWidth',

                    offsetAttr: 'left',

                    overflowAttr: 'overflowX',

                    dragOffset: 0,

                    isOverflowing: true,

                    forceVisible: false,

                    track: { size: null, el: null, rect: null, isVisible: false },

                    scrollbar: { size: null, el: null, rect: null, isVisible: false }

                },

                y: {

                    scrollOffsetAttr: 'scrollTop',

                    sizeAttr: 'height',

                    scrollSizeAttr: 'scrollHeight',

                    offsetSizeAttr: 'offsetHeight',

                    offsetAttr: 'top',

                    overflowAttr: 'overflowY',

                    dragOffset: 0,

                    isOverflowing: true,

                    forceVisible: false,

                    track: { size: null, el: null, rect: null, isVisible: false },

                    scrollbar: { size: null, el: null, rect: null, isVisible: false }

                }

            };

            if (typeof this.el !== 'object' || !this.el.nodeName) {

                throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));

            }

            this.onMouseMove = throttle(this._onMouseMove, 64);

            this.onWindowResize = debounce(this._onWindowResize, 64, { leading: true });

            this.onStopScrolling = debounce(this._onStopScrolling, this.stopScrollDelay);

            this.onMouseEntered = debounce(this._onMouseEntered, this.stopScrollDelay);

            this.init();

        }

        /**

         * Helper to fix browsers inconsistency on RTL:

         *  - Firefox inverts the scrollbar initial position

         *  - IE11 inverts both scrollbar position and scrolling offset

         * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634

         */

        SimpleBarCore.getRtlHelpers = function () {

            if (SimpleBarCore.rtlHelpers) {

                return SimpleBarCore.rtlHelpers;

            }

            var dummyDiv = document.createElement('div');

            dummyDiv.innerHTML =

                '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';

            var scrollbarDummyEl = dummyDiv.firstElementChild;

            var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;

            if (!dummyChild)

                return null;

            document.body.appendChild(scrollbarDummyEl);

            scrollbarDummyEl.scrollLeft = 0;

            var dummyContainerOffset = SimpleBarCore.getOffset(scrollbarDummyEl);

            var dummyChildOffset = SimpleBarCore.getOffset(dummyChild);

            scrollbarDummyEl.scrollLeft = -999;

            var dummyChildOffsetAfterScroll = SimpleBarCore.getOffset(dummyChild);

            document.body.removeChild(scrollbarDummyEl);

            SimpleBarCore.rtlHelpers = {

                // determines if the scrolling is responding with negative values

                isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,

                // determines if the origin scrollbar position is inverted or not (positioned on left or right)

                isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left

            };

            return SimpleBarCore.rtlHelpers;

        };

        SimpleBarCore.prototype.getScrollbarWidth = function () {

            // Try/catch for FF 56 throwing on undefined computedStyles

            try {

                // Detect browsers supporting CSS scrollbar styling and do not calculate

                if ((this.contentWrapperEl &&

                    getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar')

                        .display === 'none') ||

                    'scrollbarWidth' in document.documentElement.style ||

                    '-ms-overflow-style' in document.documentElement.style) {

                    return 0;

                }

                else {

                    return scrollbarWidth();

                }

            }

            catch (e) {

                return scrollbarWidth();

            }

        };

        SimpleBarCore.getOffset = function (el) {

            var rect = el.getBoundingClientRect();

            var elDocument = getElementDocument(el);

            var elWindow = getElementWindow(el);

            return {

                top: rect.top +

                    (elWindow.pageYOffset || elDocument.documentElement.scrollTop),

                left: rect.left +

                    (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)

            };

        };

        SimpleBarCore.prototype.init = function () {

            // We stop here on server-side

            if (canUseDOM$1) {

                this.initDOM();

                this.rtlHelpers = SimpleBarCore.getRtlHelpers();

                this.scrollbarWidth = this.getScrollbarWidth();

                this.recalculate();

                this.initListeners();

            }

        };

        SimpleBarCore.prototype.initDOM = function () {

            var _a, _b;

            // assume that element has his DOM already initiated

            this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));

            this.contentWrapperEl =

                this.options.scrollableNode ||

                    this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));

            this.contentEl =

                this.options.contentNode ||

                    this.el.querySelector(classNamesToQuery(this.classNames.contentEl));

            this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));

            this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));

            this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));

            this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));

            this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));

            this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));

            this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));

            this.axis.x.scrollbar.el =

                ((_a = this.axis.x.track.el) === null || _a === void 0 ? void 0 : _a.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;

            this.axis.y.scrollbar.el =

                ((_b = this.axis.y.track.el) === null || _b === void 0 ? void 0 : _b.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;

            if (!this.options.autoHide) {

                addClasses$2(this.axis.x.scrollbar.el, this.classNames.visible);

                addClasses$2(this.axis.y.scrollbar.el, this.classNames.visible);

            }

        };

        SimpleBarCore.prototype.initListeners = function () {

            var _this = this;

            var _a;

            var elWindow = getElementWindow(this.el);

            // Event listeners

            this.el.addEventListener('mouseenter', this.onMouseEnter);

            this.el.addEventListener('pointerdown', this.onPointerEvent, true);

            this.el.addEventListener('mousemove', this.onMouseMove);

            this.el.addEventListener('mouseleave', this.onMouseLeave);

            (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', this.onScroll);

            // Browser zoom triggers a window resize

            elWindow.addEventListener('resize', this.onWindowResize);

            if (!this.contentEl)

                return;

            if (window.ResizeObserver) {

                // Hack for https://github.com/WICG/ResizeObserver/issues/38

                var resizeObserverStarted_1 = false;

                var resizeObserver = elWindow.ResizeObserver || ResizeObserver;

                this.resizeObserver = new resizeObserver(function () {

                    if (!resizeObserverStarted_1)

                        return;

                    elWindow.requestAnimationFrame(function () {

                        _this.recalculate();

                    });

                });

                this.resizeObserver.observe(this.el);

                this.resizeObserver.observe(this.contentEl);

                elWindow.requestAnimationFrame(function () {

                    resizeObserverStarted_1 = true;

                });

            }

            // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.

            this.mutationObserver = new elWindow.MutationObserver(function () {

                elWindow.requestAnimationFrame(function () {

                    _this.recalculate();

                });

            });

            this.mutationObserver.observe(this.contentEl, {

                childList: true,

                subtree: true,

                characterData: true

            });

        };

        SimpleBarCore.prototype.recalculate = function () {

            if (!this.heightAutoObserverEl ||

                !this.contentEl ||

                !this.contentWrapperEl ||

                !this.wrapperEl ||

                !this.placeholderEl)

                return;

            var elWindow = getElementWindow(this.el);

            this.elStyles = elWindow.getComputedStyle(this.el);

            this.isRtl = this.elStyles.direction === 'rtl';

            var contentElOffsetWidth = this.contentEl.offsetWidth;

            var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;

            var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;

            var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;

            var elOverflowX = this.elStyles.overflowX;

            var elOverflowY = this.elStyles.overflowY;

            this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);

            this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);

            var contentElScrollHeight = this.contentEl.scrollHeight;

            var contentElScrollWidth = this.contentEl.scrollWidth;

            this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%';

            // Determine placeholder size

            this.placeholderEl.style.width = isWidthAuto

                ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px")

                : 'auto';

            this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");

            var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;

            this.axis.x.isOverflowing =

                contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;

            this.axis.y.isOverflowing =

                contentElScrollHeight > contentWrapperElOffsetHeight;

            // Set isOverflowing to false if user explicitely set hidden overflow

            this.axis.x.isOverflowing =

                elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;

            this.axis.y.isOverflowing =

                elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;

            this.axis.x.forceVisible =

                this.options.forceVisible === 'x' || this.options.forceVisible === true;

            this.axis.y.forceVisible =

                this.options.forceVisible === 'y' || this.options.forceVisible === true;

            this.hideNativeScrollbar();

            // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

            var offsetForXScrollbar = this.axis.x.isOverflowing

                ? this.scrollbarWidth

                : 0;

            var offsetForYScrollbar = this.axis.y.isOverflowing

                ? this.scrollbarWidth

                : 0;

            this.axis.x.isOverflowing =

                this.axis.x.isOverflowing &&

                    contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;

            this.axis.y.isOverflowing =

                this.axis.y.isOverflowing &&

                    contentElScrollHeight >

                        contentWrapperElOffsetHeight - offsetForXScrollbar;

            this.axis.x.scrollbar.size = this.getScrollbarSize('x');

            this.axis.y.scrollbar.size = this.getScrollbarSize('y');

            if (this.axis.x.scrollbar.el)

                this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");

            if (this.axis.y.scrollbar.el)

                this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");

            this.positionScrollbar('x');

            this.positionScrollbar('y');

            this.toggleTrackVisibility('x');

            this.toggleTrackVisibility('y');

        };

        /**

         * Calculate scrollbar size

         */

        SimpleBarCore.prototype.getScrollbarSize = function (axis) {

            var _a, _b;

            if (axis === void 0) { axis = 'y'; }

            if (!this.axis[axis].isOverflowing || !this.contentEl) {

                return 0;

            }

            var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];

            var trackSize = (_b = (_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) !== null && _b !== void 0 ? _b : 0;

            var scrollbarRatio = trackSize / contentSize;

            var scrollbarSize;

            // Calculate new height/position of drag handle.

            scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

            if (this.options.scrollbarMaxSize) {

                scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);

            }

            return scrollbarSize;

        };

        SimpleBarCore.prototype.positionScrollbar = function (axis) {

            var _a, _b, _c;

            if (axis === void 0) { axis = 'y'; }

            var scrollbar = this.axis[axis].scrollbar;

            if (!this.axis[axis].isOverflowing ||

                !this.contentWrapperEl ||

                !scrollbar.el ||

                !this.elStyles) {

                return;

            }

            var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];

            var trackSize = ((_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) || 0;

            var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);

            var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];

            scrollOffset =

                axis === 'x' &&

                    this.isRtl &&

                    ((_b = SimpleBarCore.getRtlHelpers()) === null || _b === void 0 ? void 0 : _b.isScrollOriginAtZero)

                    ? -scrollOffset

                    : scrollOffset;

            if (axis === 'x' && this.isRtl) {

                scrollOffset = ((_c = SimpleBarCore.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative)

                    ? scrollOffset

                    : -scrollOffset;

            }

            var scrollPourcent = scrollOffset / (contentSize - hostSize);

            var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);

            handleOffset =

                axis === 'x' && this.isRtl

                    ? -handleOffset + (trackSize - scrollbar.size)

                    : handleOffset;

            scrollbar.el.style.transform =

                axis === 'x'

                    ? "translate3d(".concat(handleOffset, "px, 0, 0)")

                    : "translate3d(0, ".concat(handleOffset, "px, 0)");

        };

        SimpleBarCore.prototype.toggleTrackVisibility = function (axis) {

            if (axis === void 0) { axis = 'y'; }

            var track = this.axis[axis].track.el;

            var scrollbar = this.axis[axis].scrollbar.el;

            if (!track || !scrollbar || !this.contentWrapperEl)

                return;

            if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {

                track.style.visibility = 'visible';

                this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';

                this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));

            }

            else {

                track.style.visibility = 'hidden';

                this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';

                this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));

            }

            // Even if forceVisible is enabled, scrollbar itself should be hidden

            if (this.axis[axis].isOverflowing) {

                scrollbar.style.display = 'block';

            }

            else {

                scrollbar.style.display = 'none';

            }

        };

        SimpleBarCore.prototype.showScrollbar = function (axis) {

            if (axis === void 0) { axis = 'y'; }

            if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {

                addClasses$2(this.axis[axis].scrollbar.el, this.classNames.visible);

                this.axis[axis].scrollbar.isVisible = true;

            }

        };

        SimpleBarCore.prototype.hideScrollbar = function (axis) {

            if (axis === void 0) { axis = 'y'; }

            if (this.isDragging)

                return;

            if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {

                removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);

                this.axis[axis].scrollbar.isVisible = false;

            }

        };

        SimpleBarCore.prototype.hideNativeScrollbar = function () {

            if (!this.offsetEl)

                return;

            this.offsetEl.style[this.isRtl ? 'left' : 'right'] =

                this.axis.y.isOverflowing || this.axis.y.forceVisible

                    ? "-".concat(this.scrollbarWidth, "px")

                    : '0px';

            this.offsetEl.style.bottom =

                this.axis.x.isOverflowing || this.axis.x.forceVisible

                    ? "-".concat(this.scrollbarWidth, "px")

                    : '0px';

        };

        SimpleBarCore.prototype.onMouseMoveForAxis = function (axis) {

            if (axis === void 0) { axis = 'y'; }

            var currentAxis = this.axis[axis];

            if (!currentAxis.track.el || !currentAxis.scrollbar.el)

                return;

            currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();

            currentAxis.scrollbar.rect =

                currentAxis.scrollbar.el.getBoundingClientRect();

            if (this.isWithinBounds(currentAxis.track.rect)) {

                this.showScrollbar(axis);

                addClasses$2(currentAxis.track.el, this.classNames.hover);

                if (this.isWithinBounds(currentAxis.scrollbar.rect)) {

                    addClasses$2(currentAxis.scrollbar.el, this.classNames.hover);

                }

                else {

                    removeClasses(currentAxis.scrollbar.el, this.classNames.hover);

                }

            }

            else {

                removeClasses(currentAxis.track.el, this.classNames.hover);

                if (this.options.autoHide) {

                    this.hideScrollbar(axis);

                }

            }

        };

        SimpleBarCore.prototype.onMouseLeaveForAxis = function (axis) {

            if (axis === void 0) { axis = 'y'; }

            removeClasses(this.axis[axis].track.el, this.classNames.hover);

            removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);

            if (this.options.autoHide) {

                this.hideScrollbar(axis);

            }

        };

        /**

         * on scrollbar handle drag movement starts

         */

        SimpleBarCore.prototype.onDragStart = function (e, axis) {

            var _a;

            if (axis === void 0) { axis = 'y'; }

            this.isDragging = true;

            var elDocument = getElementDocument(this.el);

            var elWindow = getElementWindow(this.el);

            var scrollbar = this.axis[axis].scrollbar;

            // Measure how far the user's mouse is from the top of the scrollbar drag handle.

            var eventOffset = axis === 'y' ? e.pageY : e.pageX;

            this.axis[axis].dragOffset =

                eventOffset - (((_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) || 0);

            this.draggedAxis = axis;

            addClasses$2(this.el, this.classNames.dragging);

            elDocument.addEventListener('mousemove', this.drag, true);

            elDocument.addEventListener('mouseup', this.onEndDrag, true);

            if (this.removePreventClickId === null) {

                elDocument.addEventListener('click', this.preventClick, true);

                elDocument.addEventListener('dblclick', this.preventClick, true);

            }

            else {

                elWindow.clearTimeout(this.removePreventClickId);

                this.removePreventClickId = null;

            }

        };

        SimpleBarCore.prototype.onTrackClick = function (e, axis) {

            var _this = this;

            var _a, _b, _c, _d;

            if (axis === void 0) { axis = 'y'; }

            var currentAxis = this.axis[axis];

            if (!this.options.clickOnTrack ||

                !currentAxis.scrollbar.el ||

                !this.contentWrapperEl)

                return;

            // Preventing the event's default to trigger click underneath

            e.preventDefault();

            var elWindow = getElementWindow(this.el);

            this.axis[axis].scrollbar.rect =

                currentAxis.scrollbar.el.getBoundingClientRect();

            var scrollbar = this.axis[axis].scrollbar;

            var scrollbarOffset = (_b = (_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) !== null && _b !== void 0 ? _b : 0;

            var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : '0px', 10);

            var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];

            var t = axis === 'y'

                ? this.mouseY - scrollbarOffset

                : this.mouseX - scrollbarOffset;

            var dir = t < 0 ? -1 : 1;

            var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;

            var speed = 40;

            var scrollTo = function () {

                if (!_this.contentWrapperEl)

                    return;

                if (dir === -1) {

                    if (scrolled > scrollSize) {

                        scrolled -= speed;

                        _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;

                        elWindow.requestAnimationFrame(scrollTo);

                    }

                }

                else {

                    if (scrolled < scrollSize) {

                        scrolled += speed;

                        _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;

                        elWindow.requestAnimationFrame(scrollTo);

                    }

                }

            };

            scrollTo();

        };

        /**

         * Getter for content element

         */

        SimpleBarCore.prototype.getContentElement = function () {

            return this.contentEl;

        };

        /**

         * Getter for original scrolling element

         */

        SimpleBarCore.prototype.getScrollElement = function () {

            return this.contentWrapperEl;

        };

        SimpleBarCore.prototype.removeListeners = function () {

            var elWindow = getElementWindow(this.el);

            // Event listeners

            this.el.removeEventListener('mouseenter', this.onMouseEnter);

            this.el.removeEventListener('pointerdown', this.onPointerEvent, true);

            this.el.removeEventListener('mousemove', this.onMouseMove);

            this.el.removeEventListener('mouseleave', this.onMouseLeave);

            if (this.contentWrapperEl) {

                this.contentWrapperEl.removeEventListener('scroll', this.onScroll);

            }

            elWindow.removeEventListener('resize', this.onWindowResize);

            if (this.mutationObserver) {

                this.mutationObserver.disconnect();

            }

            if (this.resizeObserver) {

                this.resizeObserver.disconnect();

            }

            // Cancel all debounced functions

            this.onMouseMove.cancel();

            this.onWindowResize.cancel();

            this.onStopScrolling.cancel();

            this.onMouseEntered.cancel();

        };

        /**

         * Remove all listeners from DOM nodes

         */

        SimpleBarCore.prototype.unMount = function () {

            this.removeListeners();

        };

        /**

         * Check if mouse is within bounds

         */

        SimpleBarCore.prototype.isWithinBounds = function (bbox) {

            return (this.mouseX >= bbox.left &&

                this.mouseX <= bbox.left + bbox.width &&

                this.mouseY >= bbox.top &&

                this.mouseY <= bbox.top + bbox.height);

        };

        /**

         * Find element children matches query

         */

        SimpleBarCore.prototype.findChild = function (el, query) {

            var matches = el.matches ||

                el.webkitMatchesSelector ||

                el.mozMatchesSelector ||

                el.msMatchesSelector;

            return Array.prototype.filter.call(el.children, function (child) {

                return matches.call(child, query);

            })[0];

        };

        SimpleBarCore.rtlHelpers = null;

        SimpleBarCore.defaultOptions = {

            forceVisible: false,

            clickOnTrack: true,

            scrollbarMinSize: 25,

            scrollbarMaxSize: 0,

            ariaLabel: 'scrollable content',

            tabIndex: 0,

            classNames: {

                contentEl: 'simplebar-content',

                contentWrapper: 'simplebar-content-wrapper',

                offset: 'simplebar-offset',

                mask: 'simplebar-mask',

                wrapper: 'simplebar-wrapper',

                placeholder: 'simplebar-placeholder',

                scrollbar: 'simplebar-scrollbar',

                track: 'simplebar-track',

                heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',

                heightAutoObserverEl: 'simplebar-height-auto-observer',

                visible: 'simplebar-visible',

                horizontal: 'simplebar-horizontal',

                vertical: 'simplebar-vertical',

                hover: 'simplebar-hover',

                dragging: 'simplebar-dragging',

                scrolling: 'simplebar-scrolling',

                scrollable: 'simplebar-scrollable',

                mouseEntered: 'simplebar-mouse-entered'

            },

            scrollableNode: null,

            contentNode: null,

            autoHide: true

        };

        /**

         * Static functions

         */

        SimpleBarCore.getOptions = getOptions$2;

        SimpleBarCore.helpers = helpers;

        return SimpleBarCore;

    }());



    var _a = SimpleBarCore.helpers, getOptions = _a.getOptions, addClasses = _a.addClasses, canUseDOM = _a.canUseDOM;

    var SimpleBar = /** @class */ (function (_super) {

        __extends(SimpleBar, _super);

        function SimpleBar() {

            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {

                args[_i] = arguments[_i];

            }

            var _this = _super.apply(this, args) || this;

            // // Save a reference to the instance, so we know this DOM node has already been instancied

            SimpleBar.instances.set(args[0], _this);

            return _this;

        }

        SimpleBar.initDOMLoadedElements = function () {

            document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);

            window.removeEventListener('load', this.initDOMLoadedElements);

            Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (el) {

                if (el.getAttribute('data-simplebar') !== 'init' &&

                    !SimpleBar.instances.has(el))

                    new SimpleBar(el, getOptions(el.attributes));

            });

        };

        SimpleBar.removeObserver = function () {

            var _a;

            (_a = SimpleBar.globalObserver) === null || _a === void 0 ? void 0 : _a.disconnect();

        };

        SimpleBar.prototype.initDOM = function () {

            var _this = this;

            var _a, _b, _c;

            // make sure this element doesn't have the elements yet

            if (!Array.prototype.filter.call(this.el.children, function (child) {

                return child.classList.contains(_this.classNames.wrapper);

            }).length) {

                // Prepare DOM

                this.wrapperEl = document.createElement('div');

                this.contentWrapperEl = document.createElement('div');

                this.offsetEl = document.createElement('div');

                this.maskEl = document.createElement('div');

                this.contentEl = document.createElement('div');

                this.placeholderEl = document.createElement('div');

                this.heightAutoObserverWrapperEl = document.createElement('div');

                this.heightAutoObserverEl = document.createElement('div');

                addClasses(this.wrapperEl, this.classNames.wrapper);

                addClasses(this.contentWrapperEl, this.classNames.contentWrapper);

                addClasses(this.offsetEl, this.classNames.offset);

                addClasses(this.maskEl, this.classNames.mask);

                addClasses(this.contentEl, this.classNames.contentEl);

                addClasses(this.placeholderEl, this.classNames.placeholder);

                addClasses(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl);

                addClasses(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl);

                while (this.el.firstChild) {

                    this.contentEl.appendChild(this.el.firstChild);

                }

                this.contentWrapperEl.appendChild(this.contentEl);

                this.offsetEl.appendChild(this.contentWrapperEl);

                this.maskEl.appendChild(this.offsetEl);

                this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);

                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);

                this.wrapperEl.appendChild(this.maskEl);

                this.wrapperEl.appendChild(this.placeholderEl);

                this.el.appendChild(this.wrapperEl);

                (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.setAttribute('tabindex', this.options.tabIndex.toString());

                (_b = this.contentWrapperEl) === null || _b === void 0 ? void 0 : _b.setAttribute('role', 'region');

                (_c = this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c.setAttribute('aria-label', this.options.ariaLabel);

            }

            if (!this.axis.x.track.el || !this.axis.y.track.el) {

                var track = document.createElement('div');

                var scrollbar = document.createElement('div');

                addClasses(track, this.classNames.track);

                addClasses(scrollbar, this.classNames.scrollbar);

                track.appendChild(scrollbar);

                this.axis.x.track.el = track.cloneNode(true);

                addClasses(this.axis.x.track.el, this.classNames.horizontal);

                this.axis.y.track.el = track.cloneNode(true);

                addClasses(this.axis.y.track.el, this.classNames.vertical);

                this.el.appendChild(this.axis.x.track.el);

                this.el.appendChild(this.axis.y.track.el);

            }

            SimpleBarCore.prototype.initDOM.call(this);

            this.el.setAttribute('data-simplebar', 'init');

        };

        SimpleBar.prototype.unMount = function () {

            SimpleBarCore.prototype.unMount.call(this);

            SimpleBar.instances["delete"](this.el);

        };

        SimpleBar.initHtmlApi = function () {

            this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);

            // MutationObserver is IE11+

            if (typeof MutationObserver !== 'undefined') {

                // Mutation observer to observe dynamically added elements

                this.globalObserver = new MutationObserver(SimpleBar.handleMutations);

                this.globalObserver.observe(document, { childList: true, subtree: true });

            }

            // Taken from jQuery `ready` function

            // Instantiate elements already present on the page

            if (document.readyState === 'complete' || // @ts-ignore: IE specific

                (document.readyState !== 'loading' && !document.documentElement.doScroll)) {

                // Handle it asynchronously to allow scripts the opportunity to delay init

                window.setTimeout(this.initDOMLoadedElements);

            }

            else {

                document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);

                window.addEventListener('load', this.initDOMLoadedElements);

            }

        };

        SimpleBar.handleMutations = function (mutations) {

            mutations.forEach(function (mutation) {

                mutation.addedNodes.forEach(function (addedNode) {

                    if (addedNode.nodeType === 1) {

                        if (addedNode.hasAttribute('data-simplebar')) {

                            !SimpleBar.instances.has(addedNode) &&

                                document.documentElement.contains(addedNode) &&

                                new SimpleBar(addedNode, getOptions(addedNode.attributes));

                        }

                        else {

                            addedNode

                                .querySelectorAll('[data-simplebar]')

                                .forEach(function (el) {

                                if (el.getAttribute('data-simplebar') !== 'init' &&

                                    !SimpleBar.instances.has(el) &&

                                    document.documentElement.contains(el))

                                    new SimpleBar(el, getOptions(el.attributes));

                            });

                        }

                    }

                });

                mutation.removedNodes.forEach(function (removedNode) {

                    var _a;

                    if (removedNode.nodeType === 1) {

                        if (removedNode.getAttribute('data-simplebar') === 'init') {

                            !document.documentElement.contains(removedNode) &&

                                ((_a = SimpleBar.instances.get(removedNode)) === null || _a === void 0 ? void 0 : _a.unMount());

                        }

                        else {

                            Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function (el) {

                                var _a;

                                !document.documentElement.contains(el) &&

                                    ((_a = SimpleBar.instances.get(el)) === null || _a === void 0 ? void 0 : _a.unMount());

                            });

                        }

                    }

                });

            });

        };

        SimpleBar.instances = new WeakMap();

        return SimpleBar;

    }(SimpleBarCore));

    /**

     * HTML API

     * Called only in a browser env.

     */

    if (canUseDOM) {

        SimpleBar.initHtmlApi();

    }



    return SimpleBar;



})();


