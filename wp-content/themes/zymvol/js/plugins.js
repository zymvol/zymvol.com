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



/*!

 * GSAP 3.11.5

 * https://greensock.com

 * 

 * @license Copyright 2023, GreenSock. All rights reserved.

 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.

 * @author: Jack Doyle, jack@greensock.com

 */



!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&Pe}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new qt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Mt(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=ct.length,i=ct.slice(0);for(dt={},t=ct.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){ct.length&&!B&&ma(),t.render(e,r,i||B&&e<0&&(t._initted||t._startAt)),ct.length&&!B&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||L,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(Z(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(B?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=Ga(t.rawTime(),e),(!e._dur||Ot(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==L?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Kt(t,e,n),t._initted?!r&&t._pt&&!B&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(ct.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Xt?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Jt(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Mt(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Mt(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=jt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,c=(r||p).length,d=y[c];if(!d){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<c;);f--}for(d=y[c]=[],i=T?Math.min(f,c)*w-.5:m%f,n=f===U?0:T?c*x/f-.5:m/f|0,l=U,u=h=0;u<c;u++)a=u%f-i,s=n-(u/f|0),d[u]=o=b?Math.abs("y"===b?s:a):G(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(d),d.max=h-l,d.min=l,d.v=c=(parseFloat(p.amount)||parseFloat(p.each)*(c<f?c-1:b?"y"===b?c/f:f:Math.max(f,c/f))||0)*("edges"===m?-1:1),d.b=c<0?g-c:g,d.u=Ya(p.amount||p.each)||0,_=_&&c<0?Yt(_):_}return c=(d[t]-d.min)/d.max||0,ja(d.b+(_?_(c):c)*d.v)+d.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=Z(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Mt(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa(Z(t)?!e:!0===r?!!(r=0):!i,function(){return Z(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!B),t.progress()<1&&St(t,"onInterrupt"),t}function wb(t){if(x()){var e=(t=!t.name&&t.default||t).name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:fe,add:Qt,kill:_e,modifier:pe,rawVars:0},a={targetTest:0,get:0,getSetter:re,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(Pe,i,ge)}else Ct.push(t)}function zb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Pt+.5|0}function Ab(e,r,i){var n,a,s,o,u,h,l,f,c,d,p=e?t(e)?[e>>16,e>>8&Pt,e&Pt]:0:Dt.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),Dt[e])p=Dt[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&Pt,p&Pt,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&Pt,e&Pt]}else if("hsl"===e.substr(0,3))if(p=d=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=zb(o+1/3,n,a),p[1]=zb(o,n,a),p[2]=zb(o-1/3,n,a);else p=e.match(tt)||Dt.transparent;p=p.map(Number)}return r&&!d&&(n=p[0]/Pt,a=p[1]/Pt,s=p[2]/Pt,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(c=l-f,u=.5<h?c/(2-l-f):c/(l+f),o=l===n?(a-s)/c+(a<s?6:0):l===a?(s-n)/c+2:(n-a)/c+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Bb(t){var r=[],i=[],n=-1;return t.split(Et).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Cb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Et),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Ab(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Bb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Et,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Et)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Fb(t){var e,r=t.join(" ");if(Et.lastIndex=0,Et.test(r))return e=zt.test(r),t[1]=Cb(t[1],e),t[0]=Cb(t[0],e,Bb(t[1])),!0}function Ob(t){var e=(t+"").split("("),r=It[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Lt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):It._CE&&Bt.test(t)?It._CE("",t):r}function Qb(t,e){for(var r,i=t._first;i;)i instanceof Xt?Qb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Qb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Sb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in It[t]=ot[t]=a,It[n=t.toLowerCase()]=r,a)It[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=It[t+"."+e]=a[e]}),a}function Tb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ub(r,t,e){function Im(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/N*(Math.asin(1/i)||0),s="out"===r?Im:"in"===r?function(t){return 1-Im(1-t)}:Tb(Im);return n=N/n,s.config=function(t,e){return Ub(r,t,e)},s}function Vb(e,r){function Qm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Qm:"in"===e?function(t){return 1-Qm(1-t)}:Tb(Qm);return t.config=function(t){return Vb(e,t)},t}var I,B,l,L,h,n,a,i,o,f,c,d,p,_,m,g,b,O,k,M,A,C,D,E,z,F,Y,j,V={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},q={duration:.5,overwrite:!1,delay:0},U=1e8,X=1/U,N=2*Math.PI,W=N/4,K=0,G=Math.sqrt,$=Math.cos,H=Math.sin,J="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Z=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},ct=[],dt={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*(Z(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},Ot=function _clamp(t,e,r){return r<t?t:e<r?e:r},kt=[].slice,Mt=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?Z(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Mt(t)):i.push(t)})||i}(t,i):_a(t)?kt.call(t,0):t?[t]:[]:kt.call((e||a).querySelectorAll(t),0)},At=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},St=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&ct.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},Ct=[],Pt=255,Dt={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Et=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Dt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),zt=/hsl[a]?\(/,Rt=(k=Date.now,M=500,A=33,C=k(),D=C,z=E=1e3/240,g={time:0,frame:0,tick:function tick(){xl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=Pe,(h.gsapVersions||(h.gsapVersions=[])).push(Pe.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),m=h.requestAnimationFrame,Ct.forEach(wb)),p&&g.sleep(),_=m||function(t){return setTimeout(t,z-1e3*g.time+1|0)},d=1,xl(2))},sleep:function sleep(){(m?h.cancelAnimationFrame:clearTimeout)(p),d=0,_=T},lagSmoothing:function lagSmoothing(t,e){M=t||1/0,A=Math.min(e||33,M)},fps:function fps(t){E=1e3/(t||240),z=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),F[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=F.indexOf(t))&&F.splice(e,1)&&e<=O&&O--},_listeners:F=[]}),Ft=function _wake(){return!d&&Rt.wake()},It={},Bt=/^[\d.\-M][\d.\-,\s]/,Lt=/["']/g,Yt=function _invertEase(e){return function(t){return 1-e(1-t)}},jt=function _parseEase(t,e){return t&&(s(t)?t:It[t]||Ob(t))||e};function xl(t){var e,r,i,n,a=k()-D,s=!0===t;if(M<a&&(C+=a-A),(0<(e=(i=(D+=a)-C)-z)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,z+=e+(E<=e?4:E-e),r=1),s||(p=_(xl)),r)for(O=0;O<F.length;O++)F[O](i,b,n,t)}function fn(t){return t<j?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Sb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),It.Linear.easeNone=It.none=It.Linear.easeIn,Sb("Elastic",Ub("in"),Ub("out"),Ub()),Y=7.5625,j=1/2.75,Sb("Bounce",function(t){return 1-fn(1-t)},fn),Sb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Sb("Circ",function(t){return-(G(1-t*t)-1)}),Sb("Sine",function(t){return 1===t?1:1-$(t*W)}),Sb("Back",Vb("in"),Vb("out"),Vb()),It.SteppedEase=It.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Ot(0,.99999999,t)|0)+n)*r}}},q.ease=It["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var Vt,qt=function GSCache(t,e){this.id=K++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:re},Ut=((Vt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Vt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Vt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Vt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},Vt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},Vt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Vt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Vt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},Vt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,this.totalTime(Ot(-Math.abs(this._delay),this._tDur,e),!0),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},Vt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},Vt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},Vt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},Vt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},Vt.revert=function revert(t){void 0===t&&(t=lt);var e=B;return B=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),B=e,this},Vt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(t):r},Vt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},Vt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},Vt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Vt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},Vt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},Vt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Vt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Vt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Vt.resume=function resume(){return this.paused(!1)},Vt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},Vt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},Vt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},Vt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Vt.then=function then(t){var i=this;return new Promise(function(e){function Ao(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Ao():i._prom=Ao})},Vt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),d||Rt.wake()}qa(Ut.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Xt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),L&&Ka(t.parent||L,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Jt(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,Jt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Jt(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==L&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(d=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),c=Tt(this._tTime,o),!_&&this._tTime&&c!==s&&this._tTime-c*o-this._dur<=0&&(c=s),d&&1&s&&(i=g-i,p=1),s!==c&&!this._lock){var T=d&&1&c,b=T===(d&&1&s);if(s<c&&(T=!T),_=T?0:g,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&St(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Qb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&!s&&(St(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||B&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&St(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(St(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Ut)){if(Z(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=Jt.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Jt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Jt.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Mt(e),s=this._first,o=t(r);s;)s instanceof Jt?la(s._targets,a)&&(o?(!Nt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Jt.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===L&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(L._ts&&(na(L,Ga(t,L)),f=Rt.frame),Rt.frame>=mt){mt+=V.autoSleep||120;var e=L._first;if((!e||!e._ts)&&V.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Ut);qa(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});function ac(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Gt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||Z(t)||J(t))return r(t)?Gt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Gt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new ge(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==c))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function gc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(Z(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Nt,Wt,Qt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var c,d=t[e],p="get"!==i?i:s(d)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,_=s(d)?l?ee:te:Zt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(c=ka(p,n)+(Ya(p)||0))&&0!==c||(n=c))),!f||p!==n||Wt)return isNaN(p*n)||""===n?(d||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,c,d,p,_=new ge(this._pt,t,e,0,1,le,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(d=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(c=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:c,c:"="===l.charAt(1)?ka(c,l)-c:parseFloat(l)-c,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||d)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||V.stringFilter,l)):(c=new ge(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof d?oe:se,0,_),l&&(c.fp=l),u&&c.modifier(u,this,t),this._pt=c)},Kt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.onUpdateParams,O=m.callbackScope,k=m.runBackwards,M=m.yoyoEase,A=m.keyframes,S=m.autoRevert,C=t._dur,P=t._startAt,D=t._targets,E=t.parent,z=E&&"nested"===E.data?E.vars.targets:D,R="auto"===t._overwrite&&!I,F=t.timeline;if(!F||A&&g||(g="none"),t._ease=jt(g,q.ease),t._yEase=M?Yt(jt(!0===M?g:M,q.ease)):0,M&&t._yoyo&&!t._repeat&&(M=t._yEase,t._yEase=t._ease,t._ease=M),t._from=!F&&!!m.runBackwards,!F||A&&!m.stagger){if(p=(l=D[0]?fa(D[0]).harness:0)&&m[l.prop],i=ua(m,ft),P&&(P._zTime<0&&P.progress(1),e<0&&k&&y&&!S?P.render(-1,!0):P.revert(k&&C?ht:ut),P._lazy=0),v){if(za(t._startAt=Jt.set(D,qa({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:!P&&w(T),startAt:null,delay:0,onUpdate:b,onUpdateParams:x,callbackScope:O,stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(B||!y&&!S)&&t._startAt.revert(ht),y&&C&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(k&&C&&!P)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!P&&w(T),immediateRender:y,stagger:0,parent:E},i),p&&(a[l.prop]=p),za(t._startAt=Jt.set(D,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(B?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,X,X);for(t._pt=t._ptCache=0,T=C&&w(T)||T&&!C,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||ea(D)[n]._gsap,t._ptLookup[n]=c={},dt[h.id]&&ct.length&&ma(),d=z===D?n:z.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,d,z)&&(t._pt=s=new ge(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){c[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=ac(a,i,t,d,o,z))?f.priority&&(u=1):c[a]=s=Qt.call(t,o,a,"get",i[a],d,z,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),R&&t._pt&&(Nt=t,L.killTweensOf(o,c,t.globalTime(e)),_=!t.parent,Nt=0),t._pt&&T&&(dt[h.id]=1)}u&&me(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,A&&e<=0&&F.render(U,!0,!0)},Gt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},$t=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ha($t+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var Jt=function(z){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,c,d,p=(a=z.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,O=p.defaults,k=p.scrollTrigger,M=p.yoyoEase,A=r.parent||L,S=(Z(e)||J(e)?t(e[0]):"length"in r)?[e]:Mt(e);if(a._targets=S.length?ea(S):R("GSAP target "+e+" not found. https://greensock.com",!V.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Xt({data:"nested",defaults:O||{},targets:A&&"nested"===A.data?A.vars.targets:S})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=S.length,c=T&&eb(T),v(T))for(l in T)~$t.indexOf(l)&&((d=d||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Ht)).stagger=0,M&&(u.yoyoEase=M),d&&yt(u,d),f=S[o],u.duration=+Gt(_,_assertThisInitialized(a),o,f,S),u.delay=(+Gt(m,_assertThisInitialized(a),o,f,S)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,c?c(o,f,S):0),s._ease=It.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=jt(x.ease||r.ease||"none");var C,P,D,E=0;if(Z(x))x.forEach(function(t){return s.to(S,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||gc(l,x[l],u,x.easeEach);for(l in u)for(C=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<C.length;o++)(D={ease:(P=C[o]).e,duration:(P.t-(o?C[o-1].t:0))/100*_})[l]=P.v,s.to(S,D,E),E+=D.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||I||(Nt=_assertThisInitialized(a),L.killTweensOf(S),Nt=0),Ka(A,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(A._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==A.data)&&(a._tTime=-X,a.render(Math.max(0,-m)||0)),k&&La(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,z);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c=this._time,d=this._tDur,p=this._dur,_=t<0,m=d-X<t&&!_?d:t<X?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===d?(a=this._repeat,i=p):((a=~~(m/s))&&a===m/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===c&&!r&&this._initted)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Qb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(c!==this._time)return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!c&&!e&&!a&&(St(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-X:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),St(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&St(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!c||!(m||c||u)||(St(this,m===d?"onComplete":"onReverseComplete",!0),!this._prom||m<d&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Ot(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||B||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&St(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&St(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||B||(St(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),z.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i){d||Rt.wake(),this._ts||this.play();var n,a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Kt(this,a),n=this._ease(a/this._dur),function _updatePropTweens(t,e,r,i,n,a,s){var o,u,h,l,f=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!f)for(f=t._ptCache[e]=[],h=t._ptLookup,l=t._targets.length;l--;){if((o=h[l][e])&&o.d&&o.d._pt)for(o=o.d._pt;o&&o.p!==e&&o.fp!==e;)o=o._next;if(!o)return Wt=1,t.vars[e]="+=0",Kt(t,s),Wt=0,1;f.push(o)}for(l=f.length;l--;)(o=(u=f[l])._pt||u).s=!i&&0!==i||n?o.s+(i||0)+a*o.c:i,o.c=r-o.s,u.e&&(u.e=ia(r)+Ya(u.e)),u.b&&(u.b=o.s+Ya(u.b))}(this,t,e,r,i,n,a)?this.resetTo(t,e,r,i):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,c=t?Mt(t):f,d=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,c))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~c.indexOf(f[l]))for(u in a=d[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return L.killTweensOf(t,e,r)},Tween}(Ut);qa(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){Jt[r]=function(){var t=new Xt,e=kt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function oc(t,e,r){return t.setAttribute(e,r)}function wc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Zt=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},ee=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},re=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?oc:Zt},se=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},oe=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},le=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},fe=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},pe=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},_e=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},me=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ge=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=wc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||se,this.d=s||this,this.set=o||Zt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=Jt,ot.TimelineLite=ot.TimelineMax=Xt,L=new Xt({sortChildren:!1,defaults:q,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),V.stringFilter=Fb;function Dc(t){return(be[t]||xe).map(function(t){return t()})}function Ec(){var t=Date.now(),o=[];2<t-Oe&&(Dc("matchMediaInit"),Te.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Dc("matchMediaRevert"),o.forEach(function(t){return t.onMatch(t)}),Oe=t,Dc("matchMedia"))}var ye,Te=[],be={},xe=[],Oe=0,Me=((ye=Context.prototype).add=function add(t,i,n){function Dw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Dw,t===s?Dw(a):t?a[t]=Dw:Dw},ye.ignore=function ignore(t){var e=l;l=null,t(this),l=e},ye.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof Jt&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},ye.clear=function clear(){this._r.length=this.data.length=0},ye.kill=function kill(e,t){var r=this;if(e){var i=this.getTweens();this.data.forEach(function(t){"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return i.splice(i.indexOf(t),1)}))}),i.map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1}).forEach(function(t){return t.t.revert(e)}),this.data.forEach(function(t){return!(t instanceof Ut)&&t.revert&&t.revert(e)}),this._r.forEach(function(t){return t(e,r)}),this.isReverted=!0}else this.data.forEach(function(t){return t.kill&&t.kill()});if(this.clear(),t){var n=Te.indexOf(this);~n&&Te.splice(n,1)}},ye.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var Ae,Se=((Ae=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Me(0,r||this.scope),o=s.conditions={};for(n in this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(Te.indexOf(s)<0&&Te.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Ec):i.addEventListener("change",Ec));return a&&e(s),this},Ae.revert=function revert(t){this.kill(t||{})},Ae.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t}var Ce={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return wb(t)})},timeline:function timeline(t){return new Xt(t)},getTweensOf:function getTweensOf(t,e){return L.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Mt(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Mt(r)).length){var n=r.map(function(t){return Pe.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&fe(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function Vx(t,e,r){return n.resetTo(i,t,e,r)}var r,n=Pe.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return Vx.tween=n,Vx},isTweening:function isTweening(t){return 0<L.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=jt(t.ease,q.ease)),ta(q,t||{})},config:function config(t){return ta(V,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Mt(t),qa(e||{},a),r)},r&&(Xt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){It[t]=jt(e)},parseEase:function parseEase(t,e){return arguments.length?jt(t,e):It},getById:function getById(t){return L.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Xt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),L.remove(n),n._dp=0,n._time=n._tTime=L._time,r=L._first;r;)i=r._next,!e&&!r._dur&&r instanceof Jt&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(L,n,0),n},context:function context(t,e){return t?new Me(t,e):l},matchMedia:function matchMedia(t){return new Se(t)},matchMediaRefresh:function matchMediaRefresh(){return Te.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Ec()},addEventListener:function addEventListener(t,e){var r=be[t]||(be[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=be[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return Z(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return Z(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return At(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return Ot(e,r,t)})},splitColor:Ab,toArray:Mt,selector:cb,mapRange:At,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),c={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if(Z(e)&&!Z(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt(Z(e)?[]:{},e));if(!u){for(s in i)Qt.call(c,e,s,"get",i[s]);a=function func(t){return fe(t,c)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Rt,updateRoot:Xt.updateRoot,plugins:pt,globalTimeline:L,core:{PropTween:ge,globals:S,Tween:Jt,Timeline:Xt,Animation:Ut,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return B},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return I=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Ce[t]=Jt[t]}),Rt.add(Xt.updateRoot),c=Ce.to({},{duration:0});function Ic(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Kc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Ic(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var Pe=Ce.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)B?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Kc("roundProps",fb),Kc("modifiers"),Kc("snap",gb))||Ce;Jt.version=Xt.version=Pe.version="3.11.5",o=1,x()&&Ft();function ud(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function vd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function wd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function xd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function yd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function zd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Ad(t,e,r){return t.style[e]=r}function Bd(t,e,r){return t.style.setProperty(e,r)}function Cd(t,e,r){return t._gsap[e]=r}function Dd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Ed(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Fd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Id(t,e){var r=this,i=this.target,n=i.style;if(t in nr){if(this.tfm=this.tfm||{},"transform"===t)return fr.transform.split(",").forEach(function(t){return Id.call(r,t,e)});if(~(t=fr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=vr(i,t)}):this.tfm[t]=i._gsap.x?i._gsap[t]:vr(i,t),0<=this.props.indexOf(cr))return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(dr,e,"")),t=cr}(n||e)&&this.props.push(t,e,n[t])}function Jd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Kd(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(ur,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Be())&&t.isStart||n[cr]||(Jd(n),a.uncache=1)}}function Ld(t,e){var r={target:t,props:[],revert:Kd,save:Id};return t._gsap||Pe.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Nd(t,e){var r=Ee.createElementNS?Ee.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ee.createElement(t);return r.style?r:Ee.createElement(t)}function Od(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ur,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Od(t,_r(e)||e,1)||""}function Rd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(De=window,Ee=De.document,ze=Ee.documentElement,Fe=Nd("div")||{style:{}},Nd("div"),cr=_r(cr),dr=cr+"Origin",Fe.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Le=!!_r("perspective"),Be=Pe.core.reverting,Re=1)}function Sd(t){var e,r=Nd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(ze.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Sd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ze.removeChild(r),this.style.cssText=a,e}function Td(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Ud(e){var r;try{r=e.getBBox()}catch(t){r=Sd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Sd||(r=Sd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Td(e,["x","cx","x1"])||0,y:+Td(e,["y","cy","y1"])||0,width:0,height:0}}function Vd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Ud(t))}function Wd(t,e){if(e){var r=t.style;e in nr&&e!==dr&&(e=cr),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(ur,"-$1").toLowerCase())):r.removeAttribute(e)}}function Xd(t,e,r,i,n,a){var s=new ge(t._pt,e,r,0,1,a?zd:yd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function $d(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Fe.style,f=hr.test(e),c="svg"===t.tagName.toLowerCase(),d=(c?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||mr[i]||mr[h]?u:("px"===h||p||(u=$d(t,e,r,"px")),o=t.getCTM&&Vd(t),!_&&"%"!==h||!nr[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!c?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==Ee&&a.appendChild||(a=Ee.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache?ia(u/s.width*100):(!_&&"%"!==h||gr[Od(a,"display")]||(l.position=Od(t,"position")),a===t&&(l.position="static"),a.appendChild(Fe),n=Fe[d],a.removeChild(Fe),l.position="absolute",f&&_&&((s=fa(a)).time=Rt.time,s.width=a[d]),ia(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[d],ia(_?u/n*100:u/100*n)))}function ae(t,e,r,i){if(!r||"none"===r){var n=_r(e,t,1),a=n&&Od(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Od(t,"borderTopColor"))}var s,o,u,h,l,f,c,d,p,_,m,g=new ge(this._pt,t.style,e,0,1,le),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=Od(t,e)||i,t.style[e]=r),Fb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)c=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),c!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===c.charAt(1)&&(c=ka(h,c)+m),d=parseFloat(c),_=c.substr((d+"").length),v=rt.lastIndex-_.length,_||(_=_||V.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=$d(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:d-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?zd:yd;return nt.test(i)&&(g.e=0),this._pt=g}function ce(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=yr[r]||r,e[1]=yr[i]||i,e.join(" ")}function de(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],nr[r]&&(i=1,r="transformOrigin"===r?dr:cr),Wd(a,r);i&&(Wd(a,cr),u&&(u.svg&&a.removeAttribute("transform"),xr(a,1),u.uncache=1,Jd(s)))}}function he(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function ie(t){var e=Od(t,cr);return he(e)?br:e.substr(7).match(et).map(ia)}function je(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=ie(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?br:u:(u!==br||t.offsetParent||t===ze||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,ze.appendChild(t)),u=ie(t),n?o.display=n:Wd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):ze.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function ke(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||je(t,!0),f=h.xOrigin||0,c=h.yOrigin||0,d=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==br&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Ud(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-c,h.xOffset=d+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[dr]="0px 0px",a&&(Xd(a,h,"xOrigin",f,w),Xd(a,h,"yOrigin",c,x),Xd(a,h,"xOffset",d,h.xOffset),Xd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function ne(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat($d(t,"x",r+"px",i)))+i}function ue(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?ar:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new ge(t._pt,e,i,n,l,vd),o.e=f,o.u="deg",t._props.push(i),o}function ve(t,e){for(var r in e)t[r]=e[r];return t}function we(t,e,r){var i,n,a,s,o,u,h,l=ve({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[cr]=e,i=xr(r,1),Wd(r,cr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[cr],f[cr]=e,i=xr(r,1),f[cr]=a),nr)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?$d(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ge(t._pt,i,n,o,u-o,ud),t._pt.u=h||0,t._props.push(n));ve(i,l)}var De,Ee,ze,Re,Fe,Ie,Be,Le,Ye=It.Power0,Ve=It.Power1,qe=It.Power2,Ue=It.Power3,Xe=It.Power4,Ne=It.Linear,We=It.Quad,Qe=It.Cubic,Ke=It.Quart,Ge=It.Quint,$e=It.Strong,He=It.Elastic,Je=It.Back,Ze=It.SteppedEase,tr=It.Bounce,er=It.Sine,rr=It.Expo,ir=It.Circ,nr={},ar=180/Math.PI,sr=Math.PI/180,or=Math.atan2,ur=/([A-Z])/g,hr=/(left|right|width|margin|padding|x)/i,lr=/[\s,\(]\S/,fr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cr="transform",dr=cr+"Origin",pr="O,Moz,ms,Ms,Webkit".split(","),_r=function _checkPropPrefix(t,e,r){var i=(e||Fe).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(pr[n]+t in i););return n<0?null:(3===n?"ms":0<=n?pr[n]:"")+t},mr={deg:1,rad:1,turn:1},gr={grid:1,flex:1},vr=function _get(t,e,r,i){var n;return Re||Rd(),e in fr&&"transform"!==e&&~(e=fr[e]).indexOf(",")&&(e=e.split(",")[0]),nr[e]&&"transform"!==e?(n=xr(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Or(Od(t,dr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Tr[e]&&Tr[e](t,e,r)||Od(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?$d(t,e,n,r)+r:n},yr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tr={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ge(t._pt,e,r,0,0,de);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},br=[1,0,0,1,0,0],wr={},xr=function _parseTransform(t,e){var r=t._gsap||new qt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w,x,O,k,M,A,S,C,P,D,E,z,R,F=t.style,I=r.scaleX<0,B="deg",L=getComputedStyle(t),Y=Od(t,dr)||"0";return i=n=a=u=h=l=f=c=d=0,s=o=1,r.svg=!(!t.getCTM||!Vd(t)),L.translate&&("none"===L.translate&&"none"===L.scale&&"none"===L.rotate||(F[cr]=("none"!==L.translate?"translate3d("+(L.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==L.rotate?"rotate("+L.rotate+") ":"")+("none"!==L.scale?"scale("+L.scale.split(" ").join(",")+") ":"")+("none"!==L[cr]?L[cr]:"")),F.scale=F.rotate=F.translate="none"),m=je(t,r.svg),r.svg&&(M=r.uncache?(A=t.getBBox(),Y=r.xOrigin-A.x+"px "+(r.yOrigin-A.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),ke(t,M||Y,!!M||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==br&&(T=m[0],b=m[1],w=m[2],x=m[3],i=O=m[4],n=k=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?or(b,T)*ar:0,(f=w||x?or(w,x)*ar+u:0)&&(o*=Math.abs(Math.cos(f*sr))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],E=m[7],C=m[8],P=m[9],D=m[10],z=m[11],i=m[12],n=m[13],a=m[14],h=(g=or(R,D))*ar,g&&(M=O*(v=Math.cos(-g))+C*(y=Math.sin(-g)),A=k*v+P*y,S=R*v+D*y,C=O*-y+C*v,P=k*-y+P*v,D=R*-y+D*v,z=E*-y+z*v,O=M,k=A,R=S),l=(g=or(-w,D))*ar,g&&(v=Math.cos(-g),z=x*(y=Math.sin(-g))+z*v,T=M=T*v-C*y,b=A=b*v-P*y,w=S=w*v-D*y),u=(g=or(b,T))*ar,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),A=O*v+k*y,b=b*v-T*y,k=k*v-O*y,T=M,O=A),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(k*k+R*R)),g=or(O,k),f=2e-4<Math.abs(g)?g*ar:0,d=z?1/(z<0?-z:z):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!he(Od(t,cr)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(I?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+B,r.rotationX=ia(h)+B,r.rotationY=ia(l)+B,r.skewX=f+B,r.skewY=c+B,r.transformPerspective=d+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||0)&&(F[dr]=Or(Y)),r.xOffset=r.yOffset=0,r.force3D=V.force3D,r.renderTransform=r.svg?Pr:Le?Cr:kr,r.uncache=0,r},Or=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},kr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cr(t,e)},Mr="0deg",Ar="0px",Sr=") ",Cr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,c=r.skewY,d=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Mr||h!==Mr)){var b,w=parseFloat(h)*sr,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*sr,b=Math.cos(w),a=ne(g,a,x*b*-v),s=ne(g,s,-Math.sin(w)*-v),o=ne(g,o,O*b*-v+v)}_!==Ar&&(y+="perspective("+_+Sr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Ar&&s===Ar&&o===Ar||(y+=o!==Ar||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Sr),u!==Mr&&(y+="rotate("+u+Sr),h!==Mr&&(y+="rotateY("+h+Sr),l!==Mr&&(y+="rotateX("+l+Sr),f===Mr&&c===Mr||(y+="skew("+f+", "+c+Sr),1===d&&1===p||(y+="scale("+d+", "+p+Sr),g.style[cr]=y||"translate(0, 0)"},Pr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,c=o.rotation,d=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);c=parseFloat(c),d=parseFloat(d),(p=parseFloat(p))&&(d+=p=parseFloat(p),c+=p),c||d?(c*=sr,d*=sr,r=Math.cos(c)*_,i=Math.sin(c)*_,n=Math.sin(c-d)*-m,a=Math.cos(c-d)*m,d&&(p*=sr,s=Math.tan(d-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=$d(g,"x",l,"px"),O=$d(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),O=ia(O+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),O=ia(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[cr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Tr[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return vr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Dr,Er,zr,Rr={name:"css",register:Rd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w=this._props,x=t.style,O=i.vars.startAt;for(c in Re||Rd(),this.styles=this.styles||Ld(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==c&&(o=e[c],!pt[c]||!ac(c,e,i,n,t,a)))if(l=typeof o,f=Tr[c],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,c,o,i)&&(T=1);else if("--"===c.substr(0,2))s=(getComputedStyle(t).getPropertyValue(c)+"").trim(),o+="",Et.lastIndex=0,Et.test(s)||(d=Ya(s),p=Ya(o)),p?d!==p&&(s=$d(t,c,s,p)+p):d&&(o+=d),this.add(x,"setProperty",s,o,n,a,0,0,c),w.push(c),b.push(c,0,x[c]);else if("undefined"!==l){if(O&&c in O?(s="function"==typeof O[c]?O[c].call(i,n,t,a):O[c],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||(s+=V.units[c]||Ya(vr(t,c))||""),"="===(s+"").charAt(1)&&(s=vr(t,c))):s=vr(t,c),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),c in fr&&("autoAlpha"===c&&(1===h&&"hidden"===vr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Xd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==c&&"transform"!==c&&~(c=fr[c]).indexOf(",")&&(c=c.split(",")[0])),m=c in nr)if(this.styles.save(c),g||((v=t._gsap).renderTransform&&!e.parseTransform||xr(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new ge(this._pt,x,cr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===c)this._pt=new ge(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,ud),this._pt.u=0,w.push("scaleY",c),c+="X";else{if("transformOrigin"===c){b.push(dr,0,x[dr]),o=ce(o),v.svg?ke(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Xd(this,v,"zOrigin",v.zOrigin,p),Xd(this,x,c,Or(s),Or(o)));continue}if("svgOrigin"===c){ke(t,o,1,y,0,this);continue}if(c in wr){ue(this,v,c,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===c){Xd(this,v,"smooth",v.smooth,o);continue}if("force3D"===c){v[c]=o;continue}if("transform"===c){we(this,o,t);continue}}else c in x||(c=_r(c)||c);if(m||(u||0===u)&&(h||0===h)&&!lr.test(o)&&c in x)u=u||0,(d=(s+"").substr((h+"").length))!==(p=Ya(o)||(c in V.units?V.units[c]:d))&&(h=$d(t,c,s,p)),this._pt=new ge(this._pt,m?v:x,c,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==c||!1===e.autoRound?ud:xd),this._pt.u=p||0,d!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=wd);else if(c in x)ae.call(this,t,c,s,_?_+o:o);else if(c in t)this.add(t,c,s||t[c],_?_+o:o,n,a);else if("parseTransform"!==c){Q(c,o);continue}m||(c in x?b.push(c,0,x[c]):b.push(c,1,s||t[c])),w.push(c)}T&&me(this)},render:function render(t,e){if(e.tween._time||!Be())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:vr,aliases:fr,getSetter:function getSetter(t,e,r){var i=fr[e];return i&&i.indexOf(",")<0&&(e=i),e in nr&&e!==dr&&(t._gsap.x||vr(t,"x"))?r&&Ie===r?"scale"===e?Dd:Cd:(Ie=r||{})&&("scale"===e?Ed:Fd):t.style&&!u(t.style[e])?Ad:~e.indexOf("-")?Bd:re(t,e)},core:{_removeProperty:Wd,_getMatrix:je}};Pe.utils.checkPrefix=_r,Pe.core.getStyleSaver=Ld,zr=ha((Dr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Er="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){nr[t]=1}),ha(Er,function(t){V.units[t]="deg",wr[t]=1}),fr[zr[13]]=Dr+","+Er,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");fr[e[1]]=zr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){V.units[t]="px"}),Pe.registerPlugin(Rr);var Fr=Pe.registerPlugin(Rr)||Pe,Ir=Fr.core.Tween;e.Back=Je,e.Bounce=tr,e.CSSPlugin=Rr,e.Circ=ir,e.Cubic=Qe,e.Elastic=He,e.Expo=rr,e.Linear=Ne,e.Power0=Ye,e.Power1=Ve,e.Power2=qe,e.Power3=Ue,e.Power4=Xe,e.Quad=We,e.Quart=Ke,e.Quint=Ge,e.Sine=er,e.SteppedEase=Ze,e.Strong=$e,e.TimelineLite=Xt,e.TimelineMax=Xt,e.TweenLite=Jt,e.TweenMax=Ir,e.default=Fr,e.gsap=Fr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});




/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(){return Me||"undefined"!=typeof window&&(Me=window.gsap)&&Me.registerPlugin&&Me}function z(e,t){return~qe.indexOf(e)&&qe[qe.indexOf(e)+1][t]}function A(e){return!!~t.indexOf(e)}function B(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function C(e,t,r,n){return e.removeEventListener(t,r,!!n)}function F(){return Re&&Re.isPressed||Ie.cache++}function G(r,n){function Vc(e){if(e||0===e){o&&(ke.history.scrollRestoration="manual");var t=Re&&Re.isPressed;e=Vc.v=Math.round(e)||(Re&&Re.iOS?1:0),r(e),Vc.cacheID=Ie.cache,t&&i("ss",e)}else(n||Ie.cache!==Vc.cacheID||i("ref"))&&(Vc.cacheID=Ie.cache,Vc.v=r());return Vc.v+Vc.offset}return Vc.offset=0,r&&Vc}function J(e){return Me.utils.toArray(e)[0]||("string"==typeof e&&!1!==Me.config().nullTargetWarn?console.warn("Element not found:",e):null)}function K(t,e){var r=e.s,n=e.sc;A(t)&&(t=Ee.scrollingElement||Pe);var o=Ie.indexOf(t),i=n===je.sc?1:2;~o||(o=Ie.push(t)-1),Ie[o+i]||t.addEventListener("scroll",F);var a=Ie[o+i],s=a||(Ie[o+i]=G(z(t,r),!0)||(A(t)?n:G(function(e){return arguments.length?t[r]=e:t[r]})));return s.target=t,a||(s.smooth="smooth"===Me.getProperty(t,"scrollBehavior")),s}function L(e,t,o){function rd(e,t){var r=Ne();t||n<r-s?(a=i,i=e,l=s,s=r):o?i+=e:i=a+(e-a)/(r-l)*(s-l)}var i=e,a=e,s=Ne(),l=s,n=t||50,c=Math.max(500,3*n);return{update:rd,reset:function reset(){a=i=o?0:i,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=Ne();return!e&&0!==e||e===i||rd(e),s===l||c<n-l?0:(i+(o?r:-r))/((o?n:s)-t)*1e3}}}function M(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function N(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function O(){(De=Me.core.globals().ScrollTrigger)&&De.core&&function _integrate(){var e=De.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,Ie),n.push.apply(n,qe),Ie=t,qe=n,i=function _bridge(e,t){return r[e](t)}}()}function P(e){return(Me=e||r())&&"undefined"!=typeof document&&document.body&&(ke=window,Pe=(Ee=document).documentElement,Oe=Ee.body,t=[ke,Ee,Pe,Oe],Me.utils.clamp,ze=Me.core.context||function(){},Be="onpointerenter"in Oe?"pointer":"mouse",Ae=k.isTouch=ke.matchMedia&&ke.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ke||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,Le=k.eventTypes=("ontouchstart"in Pe?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pe?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o=0},500),O(),Ce=1),Ce}var Me,Ce,ke,Ee,Pe,Oe,Ae,Be,De,t,Re,Le,ze,o=1,Fe=[],Ie=[],qe=[],Ne=Date.now,i=function _bridge(e,t){return t},n="scrollLeft",a="scrollTop",He={s:n,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:G(function(e){return arguments.length?ke.scrollTo(e,je.sc()):ke.pageXOffset||Ee[n]||Pe[n]||Oe[n]||0})},je={s:a,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:He,sc:G(function(e){return arguments.length?ke.scrollTo(He.sc(),e):ke.pageYOffset||Ee[a]||Pe[a]||Oe[a]||0})};He.op=je,Ie.cache=0;var k=(Observer.prototype.init=function init(e){Ce||P(Me)||console.warn("Please gsap.registerPlugin(Observer)"),De||O();var o=e.tolerance,a=e.dragMinimum,t=e.type,i=e.target,r=e.lineHeight,n=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,p=e.event,d=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,w=e.onDown,_=e.onChangeX,S=e.onChangeY,T=e.onChange,k=e.onToggleX,E=e.onToggleY,D=e.onHover,R=e.onHoverEnd,z=e.onMove,X=e.ignoreCheck,Y=e.isNormalizer,I=e.onGestureStart,q=e.onGestureEnd,V=e.onWheel,H=e.onEnable,W=e.onDisable,j=e.onClick,G=e.scrollSpeed,U=e.capture,Q=e.allowClicks,Z=e.lockAxis,$=e.onLockAxis;function Se(){return ye=Ne()}function Te(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&ge&&"touch"!==e.pointerType||X&&X(e,t)}function Ve(){var e=se.deltaX=N(be),t=se.deltaY=N(me),r=Math.abs(e)>=o,n=Math.abs(t)>=o;T&&(r||n)&&T(se,e,t,be,me),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),_&&_(se),k&&se.deltaX<0!=le<0&&k(se),le=se.deltaX,be[0]=be[1]=be[2]=0),n&&(w&&0<se.deltaY&&w(se),x&&se.deltaY<0&&x(se),S&&S(se),E&&se.deltaY<0!=ce<0&&E(se),ce=se.deltaY,me[0]=me[1]=me[2]=0),(ne||re)&&(z&&z(se),re&&(h(se),re=!1),ne=!1),ie&&!(ie=!1)&&$&&$(se),oe&&(V(se),oe=!1),ee=0}function We(e,t,r){be[r]+=e,me[r]+=t,se._vx.update(e),se._vy.update(t),n?ee=ee||requestAnimationFrame(Ve):Ve()}function Xe(e,t){Z&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",ie=!0),"y"!==ae&&(be[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(me[2]+=t,se._vy.update(t,!0)),n?ee=ee||requestAnimationFrame(Ve):Ve()}function Ye(e){if(!Te(e,1)){var t=(e=M(e,s)).clientX,r=e.clientY,n=t-se.x,o=r-se.y,i=se.isDragging;se.x=t,se.y=r,(i||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),i||(se.isDragging=!0),Xe(n,o),i||d&&d(se))}}function _e(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&I(e,se.isDragging)}function af(){return(se.isGesturing=!1)||q(se)}function bf(e){if(!Te(e)){var t=ue(),r=fe();We((t-pe)*G,(r-de)*G,1),pe=t,de=r,l&&te.restart(!0)}}function cf(e){if(!Te(e)){e=M(e,s),V&&(oe=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?ke.innerHeight:1)*f;We(e.deltaX*t,e.deltaY*t,0),l&&!Y&&te.restart(!0)}}function df(e){if(!Te(e)){var t=e.clientX,r=e.clientY,n=t-se.x,o=r-se.y;se.x=t,se.y=r,ne=!0,(n||o)&&Xe(n,o)}}function ef(e){se.event=e,D(se)}function ff(e){se.event=e,R(se)}function gf(e){return Te(e)||M(e,s)&&j(se)}this.target=i=J(i)||Pe,this.vars=e,u=u&&Me.utils.toArray(u),o=o||1e-9,a=a||0,f=f||1,G=G||1,t=t||"wheel,touch,pointer",n=!1!==n,r=r||parseFloat(ke.getComputedStyle(Oe).lineHeight)||22;var ee,te,re,ne,oe,ie,ae,se=this,le=0,ce=0,ue=K(i,He),fe=K(i,je),pe=ue(),de=fe(),ge=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===Le[0],he=A(i),ve=i.ownerDocument||Ee,be=[0,0,0],me=[0,0,0],ye=0,xe=se.onPress=function(e){Te(e,1)||e&&e.button||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=M(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),B(Y?i:ve,Le[1],Ye,s,!0),se.deltaX=se.deltaY=0,v&&v(se))},we=se.onRelease=function(t){if(!Te(t,1)){C(Y?i:ve,Le[1],Ye,!0);var e=!isNaN(se.y-se.startY),r=se.isDragging&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),n=M(t);!r&&e&&(se._vx.reset(),se._vy.reset(),s&&Q&&Me.delayedCall(.08,function(){if(300<Ne()-ye&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(ve.createEvent){var e=ve.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,ke,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&!Y&&te.restart(!0),g&&r&&g(se),b&&b(se,r)}};te=se._dc=Me.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=L(0,50,!0),se._vy=L(0,50,!0),se.scrollX=ue,se.scrollY=fe,se.isDragging=se.isGesturing=se.isPressed=!1,ze(this),se.enable=function(e){return se.isEnabled||(B(he?ve:i,"scroll",F),0<=t.indexOf("scroll")&&B(he?ve:i,"scroll",bf,s,U),0<=t.indexOf("wheel")&&B(i,"wheel",cf,s,U),(0<=t.indexOf("touch")&&Ae||0<=t.indexOf("pointer"))&&(B(i,Le[0],xe,s,U),B(ve,Le[2],we),B(ve,Le[3],we),Q&&B(i,"click",Se,!1,!0),j&&B(i,"click",gf),I&&B(ve,"gesturestart",_e),q&&B(ve,"gestureend",af),D&&B(i,Be+"enter",ef),R&&B(i,Be+"leave",ff),z&&B(i,Be+"move",df)),se.isEnabled=!0,e&&e.type&&xe(e),H&&H(se)),se},se.disable=function(){se.isEnabled&&(Fe.filter(function(e){return e!==se&&A(e.target)}).length||C(he?ve:i,"scroll",F),se.isPressed&&(se._vx.reset(),se._vy.reset(),C(Y?i:ve,Le[1],Ye,!0)),C(he?ve:i,"scroll",bf,U),C(i,"wheel",cf,U),C(i,Le[0],xe,U),C(ve,Le[2],we),C(ve,Le[3],we),C(i,"click",Se,!0),C(i,"click",gf),C(ve,"gesturestart",_e),C(ve,"gestureend",af),C(i,Be+"enter",ef),C(i,Be+"leave",ff),C(i,Be+"move",df),se.isEnabled=se.isPressed=se.isDragging=!1,W&&W(se))},se.kill=se.revert=function(){se.disable();var e=Fe.indexOf(se);0<=e&&Fe.splice(e,1),Re===se&&(Re=0)},Fe.push(se),Y&&A(i)&&(Re=se),se.enable(p)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}k.version="3.11.5",k.create=function(e){return new k(e)},k.register=P,k.getAll=function(){return Fe.slice()},k.getById=function(t){return Fe.filter(function(e){return e.vars.id===t})[0]},r()&&Me.registerPlugin(k);function za(){return rt=1}function Aa(){return rt=0}function Ba(e){return e}function Ca(e){return Math.round(1e5*e)/1e5||0}function Da(){return"undefined"!=typeof window}function Ea(){return Je||Da()&&(Je=window.gsap)&&Je.registerPlugin&&Je}function Fa(e){return!!~l.indexOf(e)}function Ga(e){return z(e,"getBoundingClientRect")||(Fa(e)?function(){return Lt.width=Ke.innerWidth,Lt.height=Ke.innerHeight,Lt}:function(){return Ct(e)})}function Ja(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return Math.max(0,(r="scroll"+n)&&(i=z(e,r))?i()-Ga(e)()[o]:Fa(e)?(Ue[r]||Qe[r])-(Ke["inner"+n]||Ue["client"+n]||Qe["client"+n]):e[r]-e["offset"+n])}function Ka(e,t){for(var r=0;r<g.length;r+=3)t&&!~t.indexOf(g[r+1])||e(g[r],g[r+1],g[r+2])}function La(e){return"string"==typeof e}function Ma(e){return"function"==typeof e}function Na(e){return"number"==typeof e}function Oa(e){return"object"==typeof e}function Pa(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Qa(e,t){if(e.enabled){var r=t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function fb(e){return Ke.getComputedStyle(e)}function hb(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function jb(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function kb(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function mb(o){var i=Je.utils.snap(o),a=Array.isArray(o)&&o.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return i(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=i(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:i(t<0?e-o:e+o)}}function ob(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function pb(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function qb(e,t,r,n){return e.removeEventListener(t,r,!!n)}function rb(e,t,r){(r=r&&r.wheelHandler)&&(e(t,"wheel",r),e(t,"touchmove",r))}function vb(e,t){if(La(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in R?R[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function wb(e,t,r,n,o,i,a,s){var l=o.startColor,c=o.endColor,u=o.fontSize,f=o.indent,p=o.fontWeight,d=Ge.createElement("div"),g=Fa(r)||"fixed"===z(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?Qe:r,b=-1!==e.indexOf("start"),m=b?l:c,y="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(y+=(n===je?S:T)+":"+(i+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),d._isStart=b,d.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),d.style.cssText=y,d.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(d,v.children[0]):v.appendChild(d),d._offset=d["offset"+n.op.d2],X(d,0,n,b),d}function Bb(){return 34<pt()-dt&&(w=w||requestAnimationFrame(W))}function Cb(){v&&v.isPressed&&!(v.startX>Qe.clientWidth)||(Ie.cache++,v?w=w||requestAnimationFrame(W):W(),dt||q("scrollStart"),dt=pt())}function Db(){y=Ke.innerWidth,m=Ke.innerHeight}function Eb(){Ie.cache++,tt||h||Ge.fullscreenElement||Ge.webkitFullscreenElement||b&&y===Ke.innerWidth&&!(Math.abs(Ke.innerHeight-m)>.25*Ke.innerHeight)||c.restart(!0)}function Hb(){return qb($,"scrollEnd",Hb)||Bt(!0)}function Kb(e){for(var t=0;t<V.length;t+=5)(!e||V[t+4]&&V[t+4].query===e)&&(V[t].style.cssText=V[t+1],V[t].getBBox&&V[t].setAttribute("transform",V[t+2]||""),V[t+3].uncache=1)}function Lb(e,t){var r;for(nt=0;nt<Pt.length;nt++)!(r=Pt[nt])||t&&r._ctx!==t||(e?r.kill(1):r.revert(!0,!0));t&&Kb(t),t||q("revert")}function Mb(e,t){Ie.cache++,!t&&lt||Ie.forEach(function(e){return Ma(e)&&e.cacheID++&&(e.rec=0)}),La(e)&&(Ke.history.scrollRestoration=x=e)}function Zb(e,t,r,n){if(!e._gsap.swappedIn){for(var o,i=j.length,a=t.style,s=e.style;i--;)a[o=j[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[T]=s[S]="auto",a.flexBasis=r.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[vt]=jb(e,He)+Mt,a[bt]=jb(e,je)+Mt,a[_t]=s[St]=s.top=s.left="0",Rt(n),s[vt]=s.maxWidth=r[vt],s[bt]=s.maxHeight=r[bt],s[_t]=r[_t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}}function ac(e){for(var t=U.length,r=e.style,n=[],o=0;o<t;o++)n.push(U[o],r[U[o]]);return n.t=e,n}function dc(e,t,r,n,o,i,a,s,l,c,u,f,p){Ma(e)&&(e=e(s)),La(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?vb("0"+e.substr(3),r):0));var d,g,h,v=p?p.time():0;if(p&&p.seek(0),Na(e))p&&(e=Je.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&X(a,r,n,!0);else{Ma(t)&&(t=t(s));var b,m,y,x,w=(e||"0").split(" ");h=J(t)||Qe,(b=Ct(h)||{})&&(b.left||b.top)||"none"!==fb(h).display||(x=h.style.display,h.style.display="block",b=Ct(h),x?h.style.display=x:h.style.removeProperty("display")),m=vb(w[0],b[n.d]),y=vb(w[1]||"0",r),e=b[n.p]-l[n.p]-c+m+o-y,a&&X(a,y,n,r-y<20||a._isStart&&20<y),r-=r-y}if(i){var _=e+r,S=i._isStart;d="scroll"+n.d2,X(i,_,n,S&&20<_||!S&&(u?Math.max(Qe[d],Ue[d]):i.parentNode[d])<=_+1),u&&(l=Ct(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+Mt))}return p&&h&&(d=Ct(h),p.seek(f),g=Ct(h),p._caScrollDist=d[n.p]-g[n.p],e=e/p._caScrollDist*f),p&&p.seek(v),p?e:Math.round(e)}function fc(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===Qe){for(o in e._stOrig=a.cssText,i=fb(e))+o||Z.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;Je.core.getCache(e).uncache=1,t.appendChild(e)}}function gc(r,e,n){var o=e,i=o;return function(e){var t=Math.round(r());return t!==o&&t!==i&&3<Math.abs(t-o)&&3<Math.abs(t-i)&&(e=t,n&&n()),i=o,o=e}}function hc(c,e){function _j(e,t,r,n,o){var i=_j.tween,a=t.onComplete,s={};r=r||u();var l=gc(u,r,function(){i.kill(),_j.tween=0});return o=n&&o||0,n=n||e-r,i&&i.kill(),t[f]=e,(t.modifiers=s)[f]=function(){return l(r+n*i.ratio+o*i.ratio*i.ratio)},t.onUpdate=function(){Ie.cache++,W()},t.onComplete=function(){_j.tween=0,a&&a.call(i)},i=_j.tween=Je.to(c,t)}var u=K(c,e),f="_scroll"+e.p2;return(c[f]=u).wheelHandler=function(){return _j.tween&&_j.tween.kill()&&(_j.tween=0)},pb(c,"wheel",u.wheelHandler),$.isTouch&&pb(c,"touchmove",u.wheelHandler),_j}var Je,s,Ke,Ge,Ue,Qe,l,c,Ze,$e,et,u,tt,rt,f,nt,p,d,g,ot,it,h,v,b,m,y,E,at,x,st,w,lt,ct,ut,ft=1,pt=Date.now,_=pt(),dt=0,gt=0,ht=Math.abs,S="right",T="bottom",vt="width",bt="height",mt="Right",yt="Left",xt="Top",wt="Bottom",_t="padding",St="margin",Tt="Width",D="Height",Mt="px",Ct=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==fb(e)[f]&&Je.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},kt={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Et={toggleActions:"play",anticipatePin:0},R={top:0,left:0,center:.5,bottom:1,right:1},X=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+Tt]=1,o["border"+a+Tt]=0,o[r.p]=t+"px",Je.set(e,o)},Pt=[],Ot={},Y={},I=[],q=function _dispatch(e){return Y[e]&&Y[e].map(function(e){return e()})||I},V=[],At=0,Bt=function _refreshAll(e,t){if(!dt||e){lt=$.isRefreshing=!0,Ie.forEach(function(e){return Ma(e)&&e.cacheID++&&(e.rec=e())});var r=q("refreshInit");ot&&$.sort(),t||Lb(),Ie.forEach(function(e){Ma(e)&&(e.smooth&&(e.target.style.scrollBehavior="auto"),e(0))}),Pt.slice(0).forEach(function(e){return e.refresh()}),Pt.forEach(function(e,t){if(e._subPinOffset&&e.pin){var r=e.vars.horizontal?"offsetWidth":"offsetHeight",n=e.pin[r];e.revert(!0,1),e.adjustPinSpacing(e.pin[r]-n),e.refresh()}}),Pt.forEach(function(e){return"max"===e.vars.end&&e.setPositions(e.start,Math.max(e.start+1,Ja(e.scroller,e._dir)))}),r.forEach(function(e){return e&&e.render&&e.render(-1)}),Ie.forEach(function(e){Ma(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior="smooth"}),e.rec&&e(e.rec))}),Mb(x,1),c.pause(),At++,W(lt=2),Pt.forEach(function(e){return Ma(e.vars.onRefresh)&&e.vars.onRefresh(e)}),lt=$.isRefreshing=!1,q("refresh")}else pb($,"scrollEnd",Hb)},H=0,Dt=1,W=function _updateAll(e){if(!lt||2===e){$.isUpdating=!0,ut&&ut.update(0);var t=Pt.length,r=pt(),n=50<=r-_,o=t&&Pt[0].scroll();if(Dt=o<H?-1:1,lt||(H=o),n&&(dt&&!rt&&200<r-dt&&(dt=0,q("scrollEnd")),et=_,_=r),Dt<0){for(nt=t;0<nt--;)Pt[nt]&&Pt[nt].update(0,n);Dt=1}else for(nt=0;nt<t;nt++)Pt[nt]&&Pt[nt].update(0,n);$.isUpdating=!1}w=0},j=["left","top",T,S,St+wt,St+mt,St+xt,St+yt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],U=j.concat([vt,bt,"boxSizing","max"+Tt,"max"+D,"position",St,_t,_t+xt,_t+mt,_t+wt,_t+yt]),Q=/([A-Z])/g,Rt=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||Je.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(Q,"-$1").toLowerCase())}},Lt={left:0,top:0},Z=/(webkit|moz|length|cssText|inset)/i,$=(ScrollTrigger.prototype.init=function init(M,C){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),gt){var k,n,d,E,P,O,A,B,D,R,L,e,F,X,Y,I,q,t,N,b,V,H,m,W,y,j,x,r,w,_,G,o,g,U,Q,Z,$,S,i,T=(M=hb(La(M)||Na(M)||M.nodeType?{trigger:M}:M,Et)).onUpdate,ee=M.toggleClass,a=M.id,te=M.onToggle,re=M.onRefresh,ne=M.scrub,oe=M.trigger,ie=M.pin,ae=M.pinSpacing,se=M.invalidateOnRefresh,le=M.anticipatePin,s=M.onScrubComplete,h=M.onSnapComplete,ce=M.once,ue=M.snap,fe=M.pinReparent,l=M.pinSpacer,pe=M.containerAnimation,de=M.fastScrollEnd,ge=M.preventOverlaps,he=M.horizontal||M.containerAnimation&&!1!==M.horizontal?He:je,ve=!ne&&0!==ne,be=J(M.scroller||Ke),c=Je.core.getCache(be),me=Fa(be),ye="fixed"===("pinType"in M?M.pinType:z(be,"pinType")||me&&"fixed"),xe=[M.onEnter,M.onLeave,M.onEnterBack,M.onLeaveBack],we=ve&&M.toggleActions.split(" "),u="markers"in M?M.markers:Et.markers,_e=me?0:parseFloat(fb(be)["border"+he.p2+Tt])||0,Se=this,Te=M.onRefreshInit&&function(){return M.onRefreshInit(Se)},Me=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=z(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Ke["inner"+o]:e["client"+o])||0}}(be,me,he),Ce=function _getOffsetsFunc(e,t){return!t||~qe.indexOf(e)?Ga(e):function(){return Lt}}(be,me),ke=0,Ee=0,Pe=K(be,he);if(at(Se),Se._dir=he,le*=45,Se.scroller=be,Se.scroll=pe?pe.time.bind(pe):Pe,E=Pe(),Se.vars=M,C=C||M.animation,"refreshPriority"in M&&(ot=1,-9999===M.refreshPriority&&(ut=Se)),c.tweenScroll=c.tweenScroll||{top:hc(be,je),left:hc(be,He)},Se.tweenTo=k=c.tweenScroll[he.p],Se.scrubDuration=function(e){(o=Na(e)&&e)?G?G.duration(e):G=Je.to(C,{ease:"expo",totalProgress:"+=0.001",duration:o,paused:!0,onComplete:function onComplete(){return s&&s(Se)}}):(G&&G.progress(1).kill(),G=0)},C&&(C.vars.lazy=!1,C._initted||!1!==C.vars.immediateRender&&!1!==M.immediateRender&&C.duration()&&C.render(0,!0,!0),Se.animation=C.pause(),(C.scrollTrigger=Se).scrubDuration(ne),G&&G.resetTo&&G.resetTo("totalProgress",0),w=0,a=a||C.vars.id),Pt.push(Se),ue&&(Oa(ue)&&!ue.push||(ue={snapTo:ue}),"scrollBehavior"in Qe.style&&Je.set(me?[Qe,Ue]:be,{scrollBehavior:"auto"}),Ie.forEach(function(e){return Ma(e)&&e.target===(me?Ge.scrollingElement||Ue:be)&&(e.smooth=!1)}),d=Ma(ue.snapTo)?ue.snapTo:"labels"===ue.snapTo?function _getClosestLabel(t){return function(e){return Je.utils.snap(kb(t),e)}}(C):"labelsDirectional"===ue.snapTo?function _getLabelAtDirection(r){return function(e,t){return mb(kb(r))(e,t.direction)}}(C):!1!==ue.directional?function(e,t){return mb(ue.snapTo)(e,pt()-Ee<500?0:t.direction)}:Je.utils.snap(ue.snapTo),g=ue.duration||{min:.1,max:2},g=Oa(g)?$e(g.min,g.max):$e(g,g),U=Je.delayedCall(ue.delay||o/2||.1,function(){var e=Pe(),t=pt()-Ee<500,r=k.tween;if(!(t||Math.abs(Se.getVelocity())<10)||r||rt||ke===e)Se.isActive&&ke!==e&&U.restart(!0);else{var n=(e-O)/F,o=C&&!ve?C.totalProgress():n,i=t?0:(o-_)/(pt()-et)*1e3||0,a=Je.utils.clamp(-n,1-n,ht(i/2)*i/.185),s=n+(!1===ue.inertia?0:a),l=$e(0,1,d(s,Se)),c=Math.round(O+l*F),u=ue.onStart,f=ue.onInterrupt,p=ue.onComplete;if(e<=A&&O<=e&&c!==e){if(r&&!r._initted&&r.data<=ht(c-e))return;!1===ue.inertia&&(a=l-n),k(c,{duration:g(ht(.185*Math.max(ht(s-o),ht(l-o))/i/.05||0)),ease:ue.ease||"power3",data:ht(c-e),onInterrupt:function onInterrupt(){return U.restart(!0)&&f&&f(Se)},onComplete:function onComplete(){Se.update(),ke=Pe(),w=_=C&&!ve?C.totalProgress():Se.progress,h&&h(Se),p&&p(Se)}},e,a*F,c-e-a*F),u&&u(Se,k.tween)}}}).pause()),a&&(Ot[a]=Se),i=(i=(oe=Se.trigger=J(oe||ie))&&oe._gsap&&oe._gsap.stRevert)&&i(Se),ie=!0===ie?oe:J(ie),La(ee)&&(ee={targets:oe,className:ee}),ie&&(!1===ae||ae===St||(ae=!(!ae&&ie.parentNode&&ie.parentNode.style&&"flex"===fb(ie.parentNode).display)&&_t),Se.pin=ie,(n=Je.core.getCache(ie)).spacer?X=n.pinState:(l&&((l=J(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=ac(l))),n.spacer=q=l||Ge.createElement("div"),q.classList.add("pin-spacer"),a&&q.classList.add("pin-spacer-"+a),n.pinState=X=ac(ie)),!1!==M.force3D&&Je.set(ie,{force3D:!0}),Se.spacer=q=n.spacer,r=fb(ie),m=r[ae+he.os2],N=Je.getProperty(ie),b=Je.quickSetter(ie,he.a,Mt),Zb(ie,q,r),I=ac(ie)),u){e=Oa(u)?hb(u,kt):kt,R=wb("scroller-start",a,be,he,e,0),L=wb("scroller-end",a,be,he,e,0,R),t=R["offset"+he.op.d2];var f=J(z(be,"content")||be);B=this.markerStart=wb("start",a,f,he,e,t,0,pe),D=this.markerEnd=wb("end",a,f,he,e,t,0,pe),pe&&(S=Je.quickSetter([B,D],he.a,Mt)),ye||qe.length&&!0===z(be,"fixedMarkers")||(function _makePositionable(e){var t=fb(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(me?Qe:be),Je.set([R,L],{force3D:!0}),y=Je.quickSetter(R,he.a,Mt),x=Je.quickSetter(L,he.a,Mt))}if(pe){var p=pe.vars.onUpdate,v=pe.vars.onUpdateParams;pe.eventCallback("onUpdate",function(){Se.update(0,0,1),p&&p.apply(pe,v||[])})}Se.previous=function(){return Pt[Pt.indexOf(Se)-1]},Se.next=function(){return Pt[Pt.indexOf(Se)+1]},Se.revert=function(e,t){if(!t)return Se.kill(!0);var r=!1!==e||!Se.enabled,n=tt;r!==Se.isReverted&&(r&&(Z=Math.max(Pe(),Se.scroll.rec||0),Q=Se.progress,$=C&&C.progress()),B&&[B,D,R,L].forEach(function(e){return e.style.display=r?"none":"block"}),r&&(tt=Se).update(r),!ie||fe&&Se.isActive||(r?function _swapPinOut(e,t,r){Rt(r);var n=e._gsap;if(n.spacerIsNative)Rt(n.spacerState);else if(e._gsap.swappedIn){var o=t.parentNode;o&&(o.insertBefore(e,t),o.removeChild(t))}e._gsap.swappedIn=!1}(ie,q,X):Zb(ie,q,fb(ie),W)),r||Se.update(r),tt=n,Se.isReverted=r)},Se.refresh=function(e,t){if(!tt&&Se.enabled||t)if(ie&&e&&dt)pb(ScrollTrigger,"scrollEnd",Hb);else{!lt&&Te&&Te(Se),tt=Se,Ee=pt(),k.tween&&(k.tween.kill(),k.tween=0),G&&G.pause(),se&&C&&C.revert({kill:!1}).invalidate(),Se.isReverted||Se.revert(!0,!0),Se._subPinOffset=!1;for(var r,n,o,i,a,s,l,c,u,f,p,d=Me(),g=Ce(),h=pe?pe.duration():Ja(be,he),v=F<=.01,b=0,m=0,y=M.end,x=M.endTrigger||oe,w=M.start||(0!==M.start&&oe?ie?"0 0":"0 100%":0),_=Se.pinnedContainer=M.pinnedContainer&&J(M.pinnedContainer),S=oe&&Math.max(0,Pt.indexOf(Se))||0,T=S;T--;)(s=Pt[T]).end||s.refresh(0,1)||(tt=Se),!(l=s.pin)||l!==oe&&l!==ie&&l!==_||s.isReverted||((f=f||[]).unshift(s),s.revert(!0,!0)),s!==Pt[T]&&(S--,T--);for(Ma(w)&&(w=w(Se)),O=dc(w,oe,d,he,Pe(),B,R,Se,g,_e,ye,h,pe)||(ie?-.001:0),Ma(y)&&(y=y(Se)),La(y)&&!y.indexOf("+=")&&(~y.indexOf(" ")?y=(La(w)?w.split(" ")[0]:"")+y:(b=vb(y.substr(2),d),y=La(w)?w:(pe?Je.utils.mapRange(0,pe.duration(),pe.scrollTrigger.start,pe.scrollTrigger.end,O):O)+b,x=oe)),A=Math.max(O,dc(y||(x?"100% 0":h),x,d,he,Pe()+b,D,L,Se,g,_e,ye,h,pe))||-.001,F=A-O||(O-=.01)&&.001,b=0,T=S;T--;)(l=(s=Pt[T]).pin)&&s.start-s._pinPush<=O&&!pe&&0<s.end&&(r=s.end-s.start,(l===oe&&s.start-s._pinPush<O||l===_)&&!Na(w)&&(b+=r*(1-s.progress)),l===ie&&(m+=r));if(O+=b,A+=b,v&&(Q=Je.utils.clamp(0,1,Je.utils.normalize(O,A,Z))),Se._pinPush=m,B&&b&&((r={})[he.a]="+="+b,_&&(r[he.p]="-="+Pe()),Je.set([B,D],r)),ie)r=fb(ie),i=he===je,o=Pe(),V=parseFloat(N(he.a))+m,!h&&1<A&&((p={style:p=(me?Ge.scrollingElement||Ue:be).style,value:p["overflow"+he.a.toUpperCase()]}).style["overflow"+he.a.toUpperCase()]="scroll"),Zb(ie,q,r),I=ac(ie),n=Ct(ie,!0),c=ye&&K(be,i?He:je)(),ae&&((W=[ae+he.os2,F+m+Mt]).t=q,(T=ae===_t?jb(ie,he)+F+m:0)&&W.push(he.d,T+Mt),Rt(W),_&&Pt.forEach(function(e){e.pin===_&&!1!==e.vars.pinSpacing&&(e._subPinOffset=!0)}),ye&&Pe(Z)),ye&&((a={top:n.top+(i?o-O:c)+Mt,left:n.left+(i?c:o-O)+Mt,boxSizing:"border-box",position:"fixed"})[vt]=a.maxWidth=Math.ceil(n.width)+Mt,a[bt]=a.maxHeight=Math.ceil(n.height)+Mt,a[St]=a[St+xt]=a[St+mt]=a[St+wt]=a[St+yt]="0",a[_t]=r[_t],a[_t+xt]=r[_t+xt],a[_t+mt]=r[_t+mt],a[_t+wt]=r[_t+wt],a[_t+yt]=r[_t+yt],Y=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(X,a,fe),lt&&Pe(0)),C?(u=C._initted,it(1),C.render(C.duration(),!0,!0),H=N(he.a)-V+F+m,j=1<Math.abs(F-H),ye&&j&&Y.splice(Y.length-2,2),C.render(0,!0,!0),u||C.invalidate(!0),C.parent||C.totalTime(C.totalTime()),it(0)):H=F,p&&(p.value?p.style["overflow"+he.a.toUpperCase()]=p.value:p.style.removeProperty("overflow-"+he.a));else if(oe&&Pe()&&!pe)for(n=oe.parentNode;n&&n!==Qe;)n._pinOffset&&(O-=n._pinOffset,A-=n._pinOffset),n=n.parentNode;f&&f.forEach(function(e){return e.revert(!1,!0)}),Se.start=O,Se.end=A,E=P=lt?Z:Pe(),pe||lt||(E<Z&&Pe(Z),Se.scroll.rec=0),Se.revert(!1,!0),U&&(ke=-1,Se.isActive&&Pe(O+F*Q),U.restart(!0)),tt=0,C&&ve&&(C._initted||$)&&C.progress()!==$&&C.progress($,!0).render(C.time(),!0,!0),(v||Q!==Se.progress||pe)&&(C&&!ve&&C.totalProgress(pe&&O<-.001&&!Q?Je.utils.normalize(O,A,0):Q,!0),Se.progress=(E-O)/F===Q?0:Q),ie&&ae&&(q._pinOffset=Math.round(Se.progress*H)),G&&G.invalidate(),re&&!lt&&re(Se)}},Se.getVelocity=function(){return(Pe()-P)/(pt()-et)*1e3||0},Se.endAnimation=function(){Pa(Se.callbackAnimation),C&&(G?G.progress(1):C.paused()?ve||Pa(C,Se.direction<0,1):Pa(C,C.reversed()))},Se.labelToScroll=function(e){return C&&C.labels&&(O||Se.refresh()||O)+C.labels[e]/C.duration()*F||0},Se.getTrailing=function(t){var e=Pt.indexOf(Se),r=0<Se.direction?Pt.slice(0,e).reverse():Pt.slice(e+1);return(La(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<Se.direction?e.end<=O:e.start>=A})},Se.update=function(e,t,r){if(!pe||r||e){var n,o,i,a,s,l,c,u=!0===lt?Z:Se.scroll(),f=e?0:(u-O)/F,p=f<0?0:1<f?1:f||0,d=Se.progress;if(t&&(P=E,E=pe?Pe():u,ue&&(_=w,w=C&&!ve?C.totalProgress():p)),le&&!p&&ie&&!tt&&!ft&&dt&&O<u+(u-P)/(pt()-et)*le&&(p=1e-4),p!==d&&Se.enabled){if(a=(s=(n=Se.isActive=!!p&&p<1)!=(!!d&&d<1))||!!p!=!!d,Se.direction=d<p?1:-1,Se.progress=p,a&&!tt&&(o=p&&!d?0:1===p?1:1===d?2:3,ve&&(i=!s&&"none"!==we[o+1]&&we[o+1]||we[o],c=C&&("complete"===i||"reset"===i||i in C))),ge&&(s||c)&&(c||ne||!C)&&(Ma(ge)?ge(Se):Se.getTrailing(ge).forEach(function(e){return e.endAnimation()})),ve||(!G||tt||ft?C&&C.totalProgress(p,!!tt):(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",p,C._tTime/C._tDur):(G.vars.totalProgress=p,G.invalidate().restart()))),ie)if(e&&ae&&(q.style[ae+he.os2]=m),ye){if(a){if(l=!e&&d<p&&u<A+1&&u+1>=Ja(be,he),fe)if(e||!n&&!l)fc(ie,q);else{var g=Ct(ie,!0),h=u-O;fc(ie,Qe,g.top+(he===je?h:0)+Mt,g.left+(he===je?0:h)+Mt)}Rt(n||l?Y:I),j&&p<1&&n||b(V+(1!==p||l?0:H))}}else b(Ca(V+H*p));!ue||k.tween||tt||ft||U.restart(!0),ee&&(s||ce&&p&&(p<1||!st))&&Ze(ee.targets).forEach(function(e){return e.classList[n||ce?"add":"remove"](ee.className)}),!T||ve||e||T(Se),a&&!tt?(ve&&(c&&("complete"===i?C.pause().totalProgress(1):"reset"===i?C.restart(!0).pause():"restart"===i?C.restart(!0):C[i]()),T&&T(Se)),!s&&st||(te&&s&&Qa(Se,te),xe[o]&&Qa(Se,xe[o]),ce&&(1===p?Se.kill(!1,1):xe[o]=0),s||xe[o=1===p?1:3]&&Qa(Se,xe[o])),de&&!n&&Math.abs(Se.getVelocity())>(Na(de)?de:2500)&&(Pa(Se.callbackAnimation),G?G.progress(1):Pa(C,"reverse"===i?1:!p,1))):ve&&T&&!tt&&T(Se)}if(x){var v=pe?u/pe.duration()*(pe._caScrollDist||0):u;y(v+(R._isFlipped?1:0)),x(v)}S&&S(-u/pe.duration()*(pe._caScrollDist||0))}},Se.enable=function(e,t){Se.enabled||(Se.enabled=!0,pb(be,"resize",Eb),pb(me?Ge:be,"scroll",Cb),Te&&pb(ScrollTrigger,"refreshInit",Te),!1!==e&&(Se.progress=Q=0,E=P=ke=Pe()),!1!==t&&Se.refresh())},Se.getTween=function(e){return e&&k?k.tween:G},Se.setPositions=function(e,t){ie&&(V+=e-O,H+=t-e-F,ae===_t&&Se.adjustPinSpacing(t-e-F)),Se.start=O=e,Se.end=A=t,F=t-e,Se.update()},Se.adjustPinSpacing=function(e){if(W&&e){var t=W.indexOf(he.d)+1;W[t]=parseFloat(W[t])+e+Mt,W[1]=parseFloat(W[1])+e+Mt,Rt(W)}},Se.disable=function(e,t){if(Se.enabled&&(!1!==e&&Se.revert(!0,!0),Se.enabled=Se.isActive=!1,t||G&&G.pause(),Z=0,n&&(n.uncache=1),Te&&qb(ScrollTrigger,"refreshInit",Te),U&&(U.pause(),k.tween&&k.tween.kill()&&(k.tween=0)),!me)){for(var r=Pt.length;r--;)if(Pt[r].scroller===be&&Pt[r]!==Se)return;qb(be,"resize",Eb),qb(be,"scroll",Cb)}},Se.kill=function(e,t){Se.disable(e,t),G&&!t&&G.kill(),a&&delete Ot[a];var r=Pt.indexOf(Se);0<=r&&Pt.splice(r,1),r===nt&&0<Dt&&nt--,r=0,Pt.forEach(function(e){return e.scroller===Se.scroller&&(r=1)}),r||lt||(Se.scroll.rec=0),C&&(C.scrollTrigger=null,e&&C.revert({kill:!1}),t||C.kill()),B&&[B,D,R,L].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ut===Se&&(ut=0),ie&&(n&&(n.uncache=1),r=0,Pt.forEach(function(e){return e.pin===ie&&r++}),r||(n.spacer=0)),M.onKill&&M.onKill(Se)},Se.enable(!1,!1),i&&i(Se),C&&C.add&&!F?Je.delayedCall(.01,function(){return O||A||Se.refresh()})&&(F=.01)&&(O=A=0):Se.refresh(),ie&&function _queueRefreshAll(){if(ct!==At){var e=ct=At;requestAnimationFrame(function(){return e===At&&Bt(!0)})}}()}else this.update=this.refresh=this.kill=Ba},ScrollTrigger.register=function register(e){return s||(Je=e||Ea(),Da()&&window.document&&ScrollTrigger.enable(),s=gt),s},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)Et[t]=e[t];return Et},ScrollTrigger.disable=function disable(t,r){gt=0,Pt.forEach(function(e){return e[r?"kill":"disable"](t)}),qb(Ke,"wheel",Cb),qb(Ge,"scroll",Cb),clearInterval(u),qb(Ge,"touchcancel",Ba),qb(Qe,"touchstart",Ba),ob(qb,Ge,"pointerdown,touchstart,mousedown",za),ob(qb,Ge,"pointerup,touchend,mouseup",Aa),c.kill(),Ka(qb);for(var e=0;e<Ie.length;e+=3)rb(qb,Ie[e],Ie[e+1]),rb(qb,Ie[e],Ie[e+2])},ScrollTrigger.enable=function enable(){if(Ke=window,Ge=document,Ue=Ge.documentElement,Qe=Ge.body,Je&&(Ze=Je.utils.toArray,$e=Je.utils.clamp,at=Je.core.context||Ba,it=Je.core.suppressOverwrites||Ba,x=Ke.history.scrollRestoration||"auto",H=Ke.pageYOffset,Je.core.globals("ScrollTrigger",ScrollTrigger),Qe)){gt=1,function _rafBugFix(){return gt&&requestAnimationFrame(_rafBugFix)}(),k.register(Je),ScrollTrigger.isTouch=k.isTouch,E=k.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pb(Ke,"wheel",Cb),l=[Ke,Ge,Ue,Qe],Je.matchMedia?(ScrollTrigger.matchMedia=function(e){var t,r=Je.matchMedia();for(t in e)r.add(t,e[t]);return r},Je.addEventListener("matchMediaInit",function(){return Lb()}),Je.addEventListener("matchMediaRevert",function(){return Kb()}),Je.addEventListener("matchMedia",function(){Bt(0,1),q("matchMedia")}),Je.matchMedia("(orientation: portrait)",function(){return Db(),Db})):console.warn("Requires GSAP 3.11.0 or later"),Db(),pb(Ge,"scroll",Cb);var e,t,r=Qe.style,n=r.borderTopStyle,o=Je.core.Animation.prototype;for(o.revert||Object.defineProperty(o,"revert",{value:function value(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",e=Ct(Qe),je.m=Math.round(e.top+je.sc())||0,He.m=Math.round(e.left+He.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),u=setInterval(Bb,250),Je.delayedCall(.5,function(){return ft=0}),pb(Ge,"touchcancel",Ba),pb(Qe,"touchstart",Ba),ob(pb,Ge,"pointerdown,touchstart,mousedown",za),ob(pb,Ge,"pointerup,touchend,mouseup",Aa),f=Je.utils.checkPrefix("transform"),U.push(f),s=pt(),c=Je.delayedCall(.2,Bt).pause(),g=[Ge,"visibilitychange",function(){var e=Ke.innerWidth,t=Ke.innerHeight;Ge.hidden?(p=e,d=t):p===e&&d===t||Eb()},Ge,"DOMContentLoaded",Bt,Ke,"load",Bt,Ke,"resize",Eb],Ka(pb),Pt.forEach(function(e){return e.enable(0,1)}),t=0;t<Ie.length;t+=3)rb(qb,Ie[t],Ie[t+1]),rb(qb,Ie[t],Ie[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(st=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(u)||(u=t)&&setInterval(Bb,t),"ignoreMobileResize"in e&&(b=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ka(qb)||Ka(pb,e.autoRefreshEvents||"none"),h=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=J(e),n=Ie.indexOf(r),o=Fa(r);~n&&Ie.splice(n,o?6:2),t&&(o?qe.unshift(Ke,t,Qe,t,Ue,t):qe.unshift(r,t))},ScrollTrigger.clearMatchMedia=function clearMatchMedia(t){Pt.forEach(function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)})},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(La(e)?J(e):e).getBoundingClientRect(),o=n[r?vt:bt]*t||0;return r?0<n.right-o&&n.left+o<Ke.innerWidth:0<n.bottom-o&&n.top+o<Ke.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){La(e)&&(e=J(e));var n=e.getBoundingClientRect(),o=n[r?vt:bt],i=null==t?o/2:t in R?R[t]*o:~t.indexOf("%")?parseFloat(t)*o/100:parseFloat(t)||0;return r?(n.left+i)/Ke.innerWidth:(n.top+i)/Ke.innerHeight},ScrollTrigger.killAll=function killAll(e){if(Pt.slice(0).forEach(function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()}),!0!==e){var t=Y.killAll||[];Y={},t.forEach(function(e){return e()})}},ScrollTrigger);function ScrollTrigger(e,t){s||ScrollTrigger.register(Je)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}$.version="3.11.5",$.saveStyles=function(e){return e?Ze(e).forEach(function(e){if(e&&e.style){var t=V.indexOf(e);0<=t&&V.splice(t,5),V.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Je.core.getCache(e),at())}}):V},$.revert=function(e,t){return Lb(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?Eb():(s||$.register())&&Bt(!0)},$.update=function(e){return++Ie.cache&&W(!0===e?2:0)},$.clearScrollMemory=Mb,$.maxScroll=function(e,t){return Ja(e,t?He:je)},$.getScrollFunc=function(e,t){return K(J(e),t?He:je)},$.getById=function(e){return Ot[e]},$.getAll=function(){return Pt.filter(function(e){return"ScrollSmoother"!==e.vars.id})},$.isScrolling=function(){return!!dt},$.snapDirectional=mb,$.addEventListener=function(e,t){var r=Y[e]||(Y[e]=[]);~r.indexOf(t)||r.push(t)},$.removeEventListener=function(e,t){var r=Y[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},$.batch=function(e,t){function Qo(e,t){var r=[],n=[],o=Je.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&Ma(t[r])&&"onRefreshInit"!==r?Qo(0,t[r]):t[r];return Ma(a)&&(a=a(),pb($,"refresh",function(){return a=t.batchMax()})),Ze(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push($.create(t))}),n};function jc(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function kc(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(k.isTouch?" pinch-zoom":""):"none",e===Ue&&kc(Qe,t)}function mc(e){var t,r=e.event,n=e.target,o=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,a=i._gsap||Je.core.getCache(i),s=pt();if(!a._isScrollT||2e3<s-a._isScrollT){for(;i&&i!==Qe&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!te[(t=fb(i)).overflowY]&&!te[t.overflowX]);)i=i.parentNode;a._isScroll=i&&i!==n&&!Fa(i)&&(te[(t=fb(i)).overflowY]||te[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==o||(r.stopPropagation(),r._gsapAllow=!0)}function nc(e,t,r,n){return k.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&mc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&pb(Ge,k.eventTypes[0],ne,!1,!0)},onDisable:function onDisable(){return qb(Ge,k.eventTypes[0],ne,!0)}})}function rc(e){function Np(){return o=!1}function Qp(){i=Ja(d,je),M=$e(E?1:0,i),f&&(T=$e(0,Ja(d,He))),l=At}function Rp(){v._gsap.y=Ca(parseFloat(v._gsap.y)+b.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",b.offset=b.cacheID=0}function Xp(){Qp(),a.isActive()&&a.vars.scrollY>i&&(b()>i?a.progress(1)&&b(i):a.resetTo("scrollY",i))}Oa(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n,i,l,o,a,c,u,s,f=e.normalizeScrollX,t=e.momentum,r=e.allowNestedScroll,p=e.onRelease,d=J(e.target)||Ue,g=Je.core.globals().ScrollSmoother,h=g&&g.get(),v=E&&(e.content&&J(e.content)||h&&!1!==e.content&&!h.smooth()&&h.content()),b=K(d,je),m=K(d,He),y=1,x=(k.isTouch&&Ke.visualViewport?Ke.visualViewport.scale*Ke.visualViewport.width:Ke.outerWidth)/Ke.innerWidth,w=0,_=Ma(t)?function(){return t(n)}:function(){return t||2.8},S=nc(d,e.type,!0,r),T=Ba,M=Ba;return v&&Je.set(v,{y:"+=0"}),e.ignoreCheck=function(e){return E&&"touchmove"===e.type&&function ignoreDrag(){if(o){requestAnimationFrame(Np);var e=Ca(n.deltaY/2),t=M(b.v-e);if(v&&t!==b.v+b.offset){b.offset=t-b.v;var r=Ca((parseFloat(v&&v._gsap.y)||0)-b.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+r+", 0, 1)",v._gsap.y=r+"px",b.cacheID=Ie.cache,W()}return!0}b.offset&&Rp(),o=!0}()||1.05<y&&"touchstart"!==e.type||n.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){o=!1;var e=y;y=Ca((Ke.visualViewport&&Ke.visualViewport.scale||1)/x),a.pause(),e!==y&&kc(d,1.01<y||!f&&"x"),c=m(),u=b(),Qp(),l=At},e.onRelease=e.onGestureStart=function(e,t){if(b.offset&&Rp(),t){Ie.cache++;var r,n,o=_();f&&(n=(r=m())+.05*o*-e.velocityX/.227,o*=jc(m,r,n,Ja(d,He)),a.vars.scrollX=T(n)),n=(r=b())+.05*o*-e.velocityY/.227,o*=jc(b,r,n,Ja(d,je)),a.vars.scrollY=M(n),a.invalidate().duration(o).play(.01),(E&&a.vars.scrollY>=i||i-1<=r)&&Je.to({},{onUpdate:Xp,duration:o})}else s.restart(!0);p&&p(e)},e.onWheel=function(){a._ts&&a.pause(),1e3<pt()-w&&(l=0,w=pt())},e.onChange=function(e,t,r,n,o){if(At!==l&&Qp(),t&&f&&m(T(n[2]===t?c+(e.startX-e.x):m()+t-n[1])),r){b.offset&&Rp();var i=o[2]===r,a=i?u+e.startY-e.y:b()+r-o[1],s=M(a);i&&a!==s&&(u+=s-a),b(s)}(r||t)&&W()},e.onEnable=function(){kc(d,!f&&"x"),$.addEventListener("refresh",Xp),pb(Ke,"resize",Xp),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=m.smooth=!1),S.enable()},e.onDisable=function(){kc(d,!0),qb(Ke,"resize",Xp),$.removeEventListener("refresh",Xp),S.kill()},e.lockAxis=!1!==e.lockAxis,((n=new k(e)).iOS=E)&&!b()&&b(1),E&&Je.ticker.add(Ba),s=n._dc,a=Je.to(n,{ease:"power4",paused:!0,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:gc(b,b(),function(){return a.pause()})},onUpdate:W,onComplete:s.vars.onComplete}),n}var ee,te={auto:1,scroll:1},re=/(input|label|select|textarea)/i,ne=function _captureInputs(e){var t=re.test(e.target.tagName);(t||ee)&&(e._gsapAllow=!0,ee=t)};$.sort=function(e){return Pt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},$.observe=function(e){return new k(e)},$.normalizeScroll=function(e){if(void 0===e)return v;if(!0===e&&v)return v.enable();if(!1===e)return v&&v.kill();var t=e instanceof k?e:rc(e);return v&&v.target===t.target&&v.kill(),Fa(t.target)&&(v=t),t},$.core={_getVelocityProp:L,_inputObserver:nc,_scrollers:Ie,_proxies:qe,bridge:{ss:function ss(){dt||q("scrollStart"),dt=pt()},ref:function ref(){return tt}}},Ea()&&Je.registerPlugin($),e.ScrollTrigger=$,e.default=$;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});



"object"==typeof navigator&&function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Plyr",t):(e="undefined"!=typeof globalThis?globalThis:e||self).Plyr=t()}(this,function(){"use strict";function e(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function t(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,s)}return i}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var a={addCSS:!0,thumbWidth:15,watch:!0};var l=function(e){return null!=e?e.constructor:null},r=function(e,t){return!!(e&&t&&e instanceof t)},o=function(e){return null==e},c=function(e){return l(e)===Object},u=function(e){return l(e)===String},h=function(e){return Array.isArray(e)},d=function(e){return r(e,NodeList)},m=u,p=h,g=d,f=function(e){return r(e,Element)},y=function(e){return r(e,Event)},b=function(e){return o(e)||(u(e)||h(e)||d(e))&&!e.length||c(e)&&!Object.keys(e).length};function v(e,t){if(1>t){var i=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(i))}return Math.round(e/t)*t}var w=function(){function e(t,i){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),f(t)?this.element=t:m(t)&&(this.element=document.querySelector(t)),f(this.element)&&b(this.element.rangeTouch)&&(this.config=n({},a,{},i),this.init())}return function(e,i,s){i&&t(e.prototype,i),s&&t(e,s)}(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,i=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[i](e,function(e){return t.set(e)},!1)})}},{key:"get",value:function(t){if(!e.enabled||!y(t))return null;var i,s=t.target,n=t.changedTouches[0],a=parseFloat(s.getAttribute("min"))||0,l=parseFloat(s.getAttribute("max"))||100,r=parseFloat(s.getAttribute("step"))||1,o=s.getBoundingClientRect(),c=100/o.width*(this.config.thumbWidth/2)/100;return 0>(i=100/o.width*(n.clientX-o.left))?i=0:100<i&&(i=100),50>i?i-=(100-2*i)*c:50<i&&(i+=2*(i-50)*c),a+v(i/100*(l-a),r)}},{key:"set",value:function(t){e.enabled&&y(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var i=new Event(t,{bubbles:!0});e.dispatchEvent(i)}}(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},s=null;if(b(t)||m(t)?s=Array.from(document.querySelectorAll(m(t)?t:'input[type="range"]')):f(t)?s=[t]:g(t)?s=Array.from(t):p(t)&&(s=t.filter(f)),b(s))return null;var l=n({},a,{},i);if(m(t)&&l.watch){var r=new MutationObserver(function(i){Array.from(i).forEach(function(i){Array.from(i.addedNodes).forEach(function(i){f(i)&&function(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}(i,t)&&new e(i,l)})})});r.observe(document.body,{childList:!0,subtree:!0})}return s.map(function(t){return new e(t,i)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}();const k=e=>null!=e?e.constructor:null,T=(e,t)=>Boolean(e&&t&&e instanceof t),C=e=>null==e,A=e=>k(e)===Object,S=e=>k(e)===String,E=e=>"function"==typeof e,P=e=>Array.isArray(e),M=e=>T(e,NodeList);function N(e){return C(e)||(S(e)||P(e)||M(e))&&!e.length||A(e)&&!Object.keys(e).length}var x={nullOrUndefined:C,object:A,number:e=>k(e)===Number&&!Number.isNaN(e),string:S,boolean:e=>k(e)===Boolean,function:E,array:P,weakMap:e=>T(e,WeakMap),nodeList:M,element:function(e){return null!==e&&"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument},textNode:e=>k(e)===Text,event:e=>T(e,Event),keyboardEvent:e=>T(e,KeyboardEvent),cue:e=>T(e,window.TextTrackCue)||T(e,window.VTTCue),track:e=>T(e,TextTrack)||!C(e)&&S(e.kind),promise:e=>T(e,Promise)&&E(e.then),url:function(e){if(T(e,window.URL))return!0;if(!S(e))return!1;let t=e;e.startsWith("http://")&&e.startsWith("https://")||(t=`http://${e}`);try{return!N(new URL(t).hostname)}catch{return!1}},empty:N};const L=(()=>{const e=document.createElement("span"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i=Object.keys(t).find(t=>void 0!==e.style[t]);return!!x.string(i)&&t[i]})();function I(e,t){setTimeout(()=>{try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch{}},t)}function $(e,t){return t.split(".").reduce((e,t)=>e&&e[t],e)}function _(e={},...t){if(!t.length)return e;const i=t.shift();return x.object(i)?(Object.keys(i).forEach(t=>{x.object(i[t])?(Object.keys(e).includes(t)||Object.assign(e,{[t]:{}}),_(e[t],i[t])):Object.assign(e,{[t]:i[t]})}),_(e,...t)):e}function O(e,t){const i=e.length?e:[e];Array.from(i).reverse().forEach((e,i)=>{const s=i>0?t.cloneNode(!0):t,n=e.parentNode,a=e.nextSibling;s.appendChild(e),a?n.insertBefore(s,a):n.appendChild(s)})}function j(e,t){x.element(e)&&!x.empty(t)&&Object.entries(t).filter(([,e])=>!x.nullOrUndefined(e)).forEach(([t,i])=>e.setAttribute(t,i))}function q(e,t,i){const s=document.createElement(e);return x.object(t)&&j(s,t),x.string(i)&&(s.textContent=i),s}function D(e,t,i,s){x.element(t)&&t.appendChild(q(e,i,s))}function H(e){x.nodeList(e)||x.array(e)?Array.from(e).forEach(H):x.element(e)&&x.element(e.parentNode)&&e.parentNode.removeChild(e)}function R(e){if(!x.element(e))return;let{length:t}=e.childNodes;for(;t>0;)e.removeChild(e.lastChild),t-=1}function F(e,t){return x.element(t)&&x.element(t.parentNode)&&x.element(e)?(t.parentNode.replaceChild(e,t),e):null}function V(e,t){if(!x.string(e)||x.empty(e))return{};const i={},s=_({},t);return e.split(",").forEach(e=>{const t=e.trim(),n=t.replace(".",""),a=t.replace(/[[\]]/g,"").split("="),[l]=a,r=a.length>1?a[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":x.string(s.class)?i.class=`${s.class} ${n}`:i.class=n;break;case"#":i.id=t.replace("#","");break;case"[":i[l]=r}}),_(s,i)}function U(e,t){if(!x.element(e))return;let i=t;x.boolean(i)||(i=!e.hidden),e.hidden=i}function B(e,t,i){if(x.nodeList(e))return Array.from(e).map(e=>B(e,t,i));if(x.element(e)){let s="toggle";return void 0!==i&&(s=i?"add":"remove"),e.classList[s](t),e.classList.contains(t)}return!1}function W(e,t){return x.element(e)&&e.classList.contains(t)}function z(e,t){const{prototype:i}=Element;return(i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(){return Array.from(document.querySelectorAll(t)).includes(this)}).call(e,t)}function K(e){return this.elements.container.querySelectorAll(e)}function Y(e){return this.elements.container.querySelector(e)}function X(e=null,t=!1){x.element(e)&&e.focus({preventScroll:!0,focusVisible:t})}const Q={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},J={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check(e,t){const i=J[e]||"html5"!==t;return{api:i,ui:i&&J.rangeInput}},pip:document.pictureInPictureEnabled&&!q("video").disablePictureInPicture,airplay:x.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime(e){if(x.empty(e))return!1;const[t]=e.split("/");let i=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(Q).includes(i)&&(i+=`; codecs="${Q[e]}"`);try{return Boolean(i&&this.media.canPlayType(i).replace(/no/,""))}catch{return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(()=>{const e=document.createElement("input");return e.type="range","range"===e.type})(),touch:"ontouchstart"in document.documentElement,transitions:!1!==L,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},G=(()=>{let e=!1;try{const t=Object.defineProperty({},"passive",{get:()=>(e=!0,null)});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e})();function Z(e,t,i,s=!1,n=!0,a=!1){if(!e||!("addEventListener"in e)||x.empty(t)||!x.function(i))return;const l=t.split(" ");let r=a;G&&(r={passive:n,capture:a}),l.forEach(t=>{this&&this.eventListeners&&s&&this.eventListeners.push({element:e,type:t,callback:i,options:r}),e[s?"addEventListener":"removeEventListener"](t,i,r)})}function ee(e,t="",i,s=!0,n=!1){Z.call(this,e,t,i,!0,s,n)}function te(e,t="",i,s=!0,n=!1){Z.call(this,e,t,i,!1,s,n)}function ie(e,t="",i,s=!0,n=!1){const a=(...l)=>{te(e,t,a,s,n),i.apply(this,l)};Z.call(this,e,t,a,!0,s,n)}function se(e,t="",i=!1,s={}){if(!x.element(e)||x.empty(t))return;const n=new CustomEvent(t,{bubbles:i,detail:{...s,plyr:this}});e.dispatchEvent(n)}function ne(){this&&this.eventListeners&&(this.eventListeners.forEach(e=>{const{element:t,type:i,callback:s,options:n}=e;t.removeEventListener(i,s,n)}),this.eventListeners=[])}function ae(){return new Promise(e=>this.ready?setTimeout(e,0):ee.call(this,this.elements.container,"ready",e)).then(()=>{})}function le(e){x.promise(e)&&e.then(null,()=>{})}function re(e){return x.array(e)?e.filter((t,i)=>e.indexOf(t)===i):e}function oe(e,t){return x.array(e)&&e.length?e.reduce((e,i)=>Math.abs(i-t)<Math.abs(e-t)?i:e):null}function ce(e){return!(!window||!window.CSS)&&window.CSS.supports(e)}const ue=[[1,1],[4,3],[3,4],[5,4],[4,5],[3,2],[2,3],[16,10],[10,16],[16,9],[9,16],[21,9],[9,21],[32,9],[9,32]].reduce((e,[t,i])=>({...e,[t/i]:[t,i]}),{});function he(e){if(!(x.array(e)||x.string(e)&&e.includes(":")))return!1;return(x.array(e)?e:e.split(":")).map(Number).every(x.number)}function de(e){if(!x.array(e)||!e.every(x.number))return null;const[t,i]=e,s=(e,t)=>0===t?e:s(t,e%t),n=s(t,i);return[t/n,i/n]}function me(e){const t=e=>he(e)?e.split(":").map(Number):null;let i=t(e);if(null===i&&(i=t(this.config.ratio)),null===i&&!x.empty(this.embed)&&x.array(this.embed.ratio)&&({ratio:i}=this.embed),null===i&&this.isHTML5){const{videoWidth:e,videoHeight:t}=this.media;i=[e,t]}return de(i)}function pe(e){if(!this.isVideo)return{};const{wrapper:t}=this.elements,i=me.call(this,e);if(!x.array(i))return{};const[s,n]=de(i),a=100/s*n;if(ce(`aspect-ratio: ${s}/${n}`)?t.style.aspectRatio=`${s}/${n}`:t.style.paddingBottom=`${a}%`,this.isVimeo&&!this.config.vimeo.premium&&this.supported.ui){const e=100/this.media.offsetWidth*Number.parseInt(window.getComputedStyle(this.media).paddingBottom,10),i=(e-a)/(e/50);this.fullscreen.active?t.style.paddingBottom=null:this.media.style.transform=`translateY(-${i}%)`}else this.isHTML5&&t.classList.add(this.config.classNames.videoFixedRatio);return{padding:a,ratio:i}}function ge(e,t,i=.05){const s=e/t,n=oe(Object.keys(ue),s);return Math.abs(n-s)<=i?ue[n]:[e,t]}const fe={getSources(){if(!this.isHTML5)return[];return Array.from(this.media.querySelectorAll("source")).filter(e=>{const t=e.getAttribute("type");return!!x.empty(t)||J.mime.call(this,t)})},getQualityOptions(){return this.config.quality.forced?this.config.quality.options:fe.getSources.call(this).map(e=>Number(e.getAttribute("size"))).filter(Boolean)},setup(){if(!this.isHTML5)return;const e=this;e.options.speed=e.config.speed.options,x.empty(this.config.ratio)||pe.call(e),Object.defineProperty(e.media,"quality",{get(){const t=fe.getSources.call(e).find(t=>t.getAttribute("src")===e.source);return t&&Number(t.getAttribute("size"))},set(t){if(e.quality!==t){if(e.config.quality.forced&&x.function(e.config.quality.onChange))e.config.quality.onChange(t);else{const i=fe.getSources.call(e).find(e=>Number(e.getAttribute("size"))===t);if(!i)return;const{currentTime:s,paused:n,preload:a,readyState:l,playbackRate:r}=e.media;e.media.src=i.getAttribute("src"),("none"!==a||l)&&(e.once("loadedmetadata",()=>{e.speed=r,e.currentTime=s,n||le(e.play())}),e.media.load())}se.call(e,e.media,"qualitychange",!1,{quality:t})}}})},cancelRequests(){this.isHTML5&&(H(fe.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};var ye={isIE:Boolean(window.document.documentMode),isEdge:/Edge/.test(navigator.userAgent),isWebKit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPadOS:"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,isIos:/iPad|iPhone|iPod/i.test(navigator.userAgent)&&navigator.maxTouchPoints>1};function be(e,...t){return x.empty(e)?e:e.toString().replace(/\{(\d+)\}/g,(e,i)=>t[i].toString())}function ve(e="",t="",i=""){return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),i.toString())}function we(e=""){return e.toString().replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())}function ke(e=""){let t=e.toString();return t=function(e=""){let t=e.toString();return t=ve(t,"-"," "),t=ve(t,"_"," "),t=we(t),ve(t," ","")}(t),t.charAt(0).toLowerCase()+t.slice(1)}function Te(e){const t=document.createElement("div");return t.appendChild(e),t.innerHTML}const Ce={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},Ae={get(e="",t={}){if(x.empty(e)||x.empty(t))return"";let i=$(t.i18n,e);if(x.empty(i))return Object.keys(Ce).includes(e)?Ce[e]:"";const s={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(s).forEach(([e,t])=>{i=ve(i,e,t)}),i}};class Se{constructor(t){e(this,"get",e=>{if(!Se.supported||!this.enabled)return null;const t=window.localStorage.getItem(this.key);if(x.empty(t))return null;const i=JSON.parse(t);return x.string(e)&&e.length?i[e]:i}),e(this,"set",e=>{if(!Se.supported||!this.enabled)return;if(!x.object(e))return;let t=this.get();x.empty(t)&&(t={}),_(t,e);try{window.localStorage.setItem(this.key,JSON.stringify(t))}catch{}}),this.enabled=t.config.storage.enabled,this.key=t.config.storage.key}static get supported(){try{if(!("localStorage"in window))return!1;const e="___test";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch{return!1}}}function Ee(e,t="text",i=!1){return new Promise((s,n)=>{try{const n=new XMLHttpRequest;if(!("withCredentials"in n))return;i&&(n.withCredentials=!0),n.addEventListener("load",()=>{if("text"===t)try{s(JSON.parse(n.responseText))}catch{s(n.responseText)}else s(n.response)}),n.addEventListener("error",()=>{throw new Error(n.status)}),n.open("GET",e,!0),n.responseType=t,n.send()}catch(e){n(e)}})}function Pe(e,t){if(!x.string(e))return;const i="cache",s=x.string(t);let n=!1;const a=()=>null!==document.getElementById(t),l=(e,t)=>{e.innerHTML=t,s&&a()||document.body.insertAdjacentElement("afterbegin",e)};if(!s||!a()){const a=Se.supported,r=document.createElement("div");if(r.setAttribute("hidden",""),s&&r.setAttribute("id",t),a){const e=window.localStorage.getItem(`${i}-${t}`);if(n=null!==e,n){const t=JSON.parse(e);l(r,t.content)}}Ee(e).then(e=>{if(!x.empty(e)){if(a)try{window.localStorage.setItem(`${i}-${t}`,JSON.stringify({content:e}))}catch{}l(r,e)}}).catch(()=>{})}}const Me=e=>Math.trunc(e/60/60%60,10);function Ne(e=0,t=!1,i=!1){if(!x.number(e))return Ne(void 0,t,i);const s=e=>`0${e}`.slice(-2);let n=Me(e);const a=(l=e,Math.trunc(l/60%60,10));var l;const r=(e=>Math.trunc(e%60,10))(e);return n=t||n>0?`${n}:`:"",`${i&&e>0?"-":""}${n}${s(a)}:${s(r)}`}const xe={getIconUrl(){const e=new URL(this.config.iconUrl,window.location),t=window.location.host?window.location.host:window.top.location.host,i=e.host!==t||ye.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:i}},findElements(){try{return this.elements.controls=Y.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:K.call(this,this.config.selectors.buttons.play),pause:Y.call(this,this.config.selectors.buttons.pause),restart:Y.call(this,this.config.selectors.buttons.restart),rewind:Y.call(this,this.config.selectors.buttons.rewind),fastForward:Y.call(this,this.config.selectors.buttons.fastForward),mute:Y.call(this,this.config.selectors.buttons.mute),pip:Y.call(this,this.config.selectors.buttons.pip),airplay:Y.call(this,this.config.selectors.buttons.airplay),settings:Y.call(this,this.config.selectors.buttons.settings),captions:Y.call(this,this.config.selectors.buttons.captions),fullscreen:Y.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=Y.call(this,this.config.selectors.progress),this.elements.inputs={seek:Y.call(this,this.config.selectors.inputs.seek),volume:Y.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:Y.call(this,this.config.selectors.display.buffer),currentTime:Y.call(this,this.config.selectors.display.currentTime),duration:Y.call(this,this.config.selectors.display.duration)},x.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon(e,t){const i="http://www.w3.org/2000/svg",s=xe.getIconUrl.call(this),n=`${s.cors?"":s.url}#${this.config.iconPrefix}`,a=document.createElementNS(i,"svg");j(a,_(t,{"aria-hidden":"true",focusable:"false"}));const l=document.createElementNS(i,"use"),r=`${n}-${e}`;return"href"in l&&l.setAttributeNS("http://www.w3.org/1999/xlink","href",r),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r),a.appendChild(l),a},createLabel(e,t={}){const i=Ae.get(e,this.config);return q("span",{...t,class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")},i)},createBadge(e){if(x.empty(e))return null;const t=q("span",{class:this.config.classNames.menu.value});return t.appendChild(q("span",{class:this.config.classNames.menu.badge},e)),t},createButton(e,t){const i=_({},t);let s=ke(e);const n={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach(e=>{Object.keys(i).includes(e)&&(n[e]=i[e],delete i[e])}),"button"!==n.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i.class.split(" ").includes(this.config.classNames.control)||_(i,{class:`${i.class} ${this.config.classNames.control}`}):i.class=this.config.classNames.control,e){case"play":n.toggle=!0,n.label="play",n.labelPressed="pause",n.icon="play",n.iconPressed="pause";break;case"mute":n.toggle=!0,n.label="mute",n.labelPressed="unmute",n.icon="volume",n.iconPressed="muted";break;case"captions":n.toggle=!0,n.label="enableCaptions",n.labelPressed="disableCaptions",n.icon="captions-off",n.iconPressed="captions-on";break;case"fullscreen":n.toggle=!0,n.label="enterFullscreen",n.labelPressed="exitFullscreen",n.icon="enter-fullscreen",n.iconPressed="exit-fullscreen";break;case"play-large":i.class+=` ${this.config.classNames.control}--overlaid`,s="play",n.label="play",n.icon="play";break;default:x.empty(n.label)&&(n.label=s),x.empty(n.icon)&&(n.icon=e)}const a=q(n.element);return n.toggle?(a.appendChild(xe.createIcon.call(this,n.iconPressed,{class:"icon--pressed"})),a.appendChild(xe.createIcon.call(this,n.icon,{class:"icon--not-pressed"})),a.appendChild(xe.createLabel.call(this,n.labelPressed,{class:"label--pressed"})),a.appendChild(xe.createLabel.call(this,n.label,{class:"label--not-pressed"}))):(a.appendChild(xe.createIcon.call(this,n.icon)),a.appendChild(xe.createLabel.call(this,n.label))),_(i,V(this.config.selectors.buttons[s],i)),j(a,i),"play"===s?(x.array(this.elements.buttons[s])||(this.elements.buttons[s]=[]),this.elements.buttons[s].push(a)):this.elements.buttons[s]=a,a},createRange(e,t){const i=q("input",_(V(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":Ae.get(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=i,xe.updateRangeFill.call(this,i),w.setup(i),i},createProgress(e,t){const i=q("progress",_(V(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){i.appendChild(q("span",null,"0"));const t={played:"played",buffer:"buffered"}[e],s=t?Ae.get(t,this.config):"";i.textContent=`% ${s.toLowerCase()}`}return this.elements.display[e]=i,i},createTime(e,t){const i=V(this.config.selectors.display[e],t),s=q("div",_(i,{class:`${i.class?i.class:""} ${this.config.classNames.display.time} `.trim(),"aria-label":Ae.get(e,this.config),role:"timer"}),"00:00");return this.elements.display[e]=s,s},bindMenuItemShortcuts(e,t){ee.call(this,e,"keydown keyup",i=>{if(![" ","ArrowUp","ArrowDown","ArrowRight"].includes(i.key))return;if(i.preventDefault(),i.stopPropagation(),"keydown"===i.type)return;const s=z(e,'[role="menuitemradio"]');if(!s&&[" ","ArrowRight"].includes(i.key))xe.showMenuPanel.call(this,t,!0);else{let t;" "!==i.key&&("ArrowDown"===i.key||s&&"ArrowRight"===i.key?(t=e.nextElementSibling,x.element(t)||(t=e.parentNode.firstElementChild)):(t=e.previousElementSibling,x.element(t)||(t=e.parentNode.lastElementChild)),X.call(this,t,!0))}},!1),ee.call(this,e,"keyup",e=>{"Return"===e.key&&xe.focusFirstMenuItem.call(this,null,!0)})},createMenuItem({value:e,list:t,type:i,title:s,badge:n=null,checked:a=!1}){const l=V(this.config.selectors.inputs[i]),r=q("button",_(l,{type:"button",role:"menuitemradio",class:`${this.config.classNames.control} ${l.class?l.class:""}`.trim(),"aria-checked":a,value:e})),o=q("span");o.innerHTML=s,x.element(n)&&o.appendChild(n),r.appendChild(o),Object.defineProperty(r,"checked",{enumerable:!0,get:()=>"true"===r.getAttribute("aria-checked"),set(e){e&&Array.from(r.parentNode.children).filter(e=>z(e,'[role="menuitemradio"]')).forEach(e=>e.setAttribute("aria-checked","false")),r.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(r,"click keyup",t=>{if(!x.keyboardEvent(t)||" "===t.key){switch(t.preventDefault(),t.stopPropagation(),r.checked=!0,i){case"language":this.currentTrack=Number(e);break;case"quality":this.quality=e;break;case"speed":this.speed=Number.parseFloat(e)}xe.showMenuPanel.call(this,"home",x.keyboardEvent(t))}},i,!1),xe.bindMenuItemShortcuts.call(this,r,i),t.appendChild(r)},formatTime(e=0,t=!1){if(!x.number(e))return e;return Ne(e,Me(this.duration)>0,t)},updateTimeDisplay(e=null,t=0,i=!1){x.element(e)&&x.number(t)&&(e.textContent=xe.formatTime(t,i))},updateVolume(){this.supported.ui&&(x.element(this.elements.inputs.volume)&&xe.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),x.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange(e,t=0){x.element(e)&&(e.value=t,xe.updateRangeFill.call(this,e))},updateProgress(e){if(!this.supported.ui||!x.event(e))return;let t=0;const i=(e,t)=>{const i=x.number(t)?t:0,s=x.element(e)?e:this.elements.display.buffer;if(x.element(s)){s.value=i;const e=s.getElementsByTagName("span")[0];x.element(e)&&(e.childNodes[0].nodeValue=i)}};if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":s=this.currentTime,n=this.duration,t=0===s||0===n||Number.isNaN(s)||Number.isNaN(n)?0:(s/n*100).toFixed(2),"timeupdate"===e.type&&xe.setRange.call(this,this.elements.inputs.seek,t);break;case"playing":case"progress":i(this.elements.display.buffer,100*this.buffered)}var s,n},updateRangeFill(e){const t=x.event(e)?e.target:e;if(x.element(t)&&"range"===t.getAttribute("type")){if(z(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);const e=xe.formatTime(this.currentTime),i=xe.formatTime(this.duration),s=Ae.get("seekLabel",this.config);t.setAttribute("aria-valuetext",s.replace("{currentTime}",e).replace("{duration}",i))}else if(z(t,this.config.selectors.inputs.volume)){const e=100*t.value;t.setAttribute("aria-valuenow",e),t.setAttribute("aria-valuetext",`${e.toFixed(1)}%`)}else t.setAttribute("aria-valuenow",t.value);(ye.isWebKit||ye.isIPadOS)&&t.style.setProperty("--value",t.value/t.max*100+"%")}},updateSeekTooltip(e){var t,i;if(!this.config.tooltips.seek||!x.element(this.elements.inputs.seek)||!x.element(this.elements.display.seekTooltip)||0===this.duration)return;const s=this.elements.display.seekTooltip,n=`${this.config.classNames.tooltip}--visible`,a=e=>B(s,n,e);if(this.touch)return void a(!1);let l=0;const r=this.elements.progress.getBoundingClientRect();if(x.event(e)){const t=e.pageX-e.clientX;l=100/r.width*(e.pageX-r.left-t)}else{if(!W(s,n))return;l=Number.parseFloat(s.style.left,10)}l<0?l=0:l>100&&(l=100);const o=this.duration/100*l;s.textContent=xe.formatTime(o);const c=null===(t=this.config.markers)||void 0===t||null===(i=t.points)||void 0===i?void 0:i.find(({time:e})=>e===Math.round(o));c&&s.insertAdjacentHTML("afterbegin",`${c.label}<br>`),s.style.left=`${l}%`,x.event(e)&&["mouseenter","mouseleave"].includes(e.type)&&a("mouseenter"===e.type)},timeUpdate(e){const t=!x.element(this.elements.display.duration)&&this.config.invertTime;xe.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||xe.updateProgress.call(this,e)},durationUpdate(){if(!this.supported.ui||!this.config.invertTime&&this.currentTime)return;if(this.duration>=2**32)return U(this.elements.display.currentTime,!0),void U(this.elements.progress,!0);x.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);const e=x.element(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&xe.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&xe.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),this.config.markers.enabled&&xe.setMarkers.call(this),xe.updateSeekTooltip.call(this)},toggleMenuButton(e,t){U(this.elements.settings.buttons[e],!t)},updateSetting(e,t,i){const s=this.elements.settings.panels[e];let n=null,a=t;if("captions"===e)n=this.currentTrack;else{if(n=x.empty(i)?this[e]:i,x.empty(n)&&(n=this.config[e].default),!x.empty(this.options[e])&&!this.options[e].includes(n))return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);if(!this.config[e].options.includes(n))return void this.debug.warn(`Disabled value of '${n}' for ${e}`)}if(x.element(a)||(a=s&&s.querySelector('[role="menu"]')),!x.element(a))return;this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML=xe.getLabel.call(this,e,n);const l=a&&a.querySelector(`[value="${n}"]`);x.element(l)&&(l.checked=!0)},getLabel(e,t){switch(e){case"speed":return 1===t?Ae.get("normal",this.config):`${t}&times;`;case"quality":if(x.number(t)){const e=Ae.get(`qualityLabel.${t}`,this.config);return e.length?e:`${t}p`}return we(t);case"captions":return $e.getLabel.call(this);default:return null}},setQualityMenu(e){if(!x.element(this.elements.settings.panels.quality))return;const t="quality",i=this.elements.settings.panels.quality.querySelector('[role="menu"]');x.array(e)&&(this.options.quality=re(e).filter(e=>this.config.quality.options.includes(e)));const s=!x.empty(this.options.quality)&&this.options.quality.length>1;if(xe.toggleMenuButton.call(this,t,s),R(i),xe.checkMenu.call(this),!s)return;const n=e=>{const t=Ae.get(`qualityBadge.${e}`,this.config);return t.length?xe.createBadge.call(this,t):null};this.options.quality.sort((e,t)=>{const i=this.config.quality.options;return i.indexOf(e)>i.indexOf(t)?1:-1}).forEach(e=>{xe.createMenuItem.call(this,{value:e,list:i,type:t,title:xe.getLabel.call(this,"quality",e),badge:n(e)})}),xe.updateSetting.call(this,t,i)},setCaptionsMenu(){if(!x.element(this.elements.settings.panels.captions))return;const e="captions",t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),i=$e.getTracks.call(this),s=Boolean(i.length);if(xe.toggleMenuButton.call(this,e,s),R(t),xe.checkMenu.call(this),!s)return;const n=i.map((e,i)=>({value:i,checked:this.captions.toggled&&this.currentTrack===i,title:$e.getLabel.call(this,e),badge:e.language&&xe.createBadge.call(this,e.language.toUpperCase()),list:t,type:"language"}));n.unshift({value:-1,checked:!this.captions.toggled,title:Ae.get("disabled",this.config),list:t,type:"language"}),n.forEach(xe.createMenuItem.bind(this)),xe.updateSetting.call(this,e,t)},setSpeedMenu(){if(!x.element(this.elements.settings.panels.speed))return;const e="speed",t=this.elements.settings.panels.speed.querySelector('[role="menu"]');this.options.speed=this.options.speed.filter(e=>e>=this.minimumSpeed&&e<=this.maximumSpeed);const i=!x.empty(this.options.speed)&&this.options.speed.length>1;xe.toggleMenuButton.call(this,e,i),R(t),xe.checkMenu.call(this),i&&(this.options.speed.forEach(i=>{xe.createMenuItem.call(this,{value:i,list:t,type:e,title:xe.getLabel.call(this,"speed",i)})}),xe.updateSetting.call(this,e,t))},checkMenu(){const{buttons:e}=this.elements.settings,t=!x.empty(e)&&Object.values(e).some(e=>!e.hidden);U(this.elements.settings.menu,!t)},focusFirstMenuItem(e,t=!1){if(this.elements.settings.popup.hidden)return;let i=e;x.element(i)||(i=Object.values(this.elements.settings.panels).find(e=>!e.hidden));const s=i.querySelector('[role^="menuitem"]');X.call(this,s,t)},toggleMenu(e){const{popup:t}=this.elements.settings,i=this.elements.buttons.settings;if(!x.element(t)||!x.element(i))return;const{hidden:s}=t;let n=s;if(x.boolean(e))n=e;else if(x.keyboardEvent(e)&&"Escape"===e.key)n=!1;else if(x.event(e)){const s=x.function(e.composedPath)?e.composedPath()[0]:e.target,a=t.contains(s);if(a||!a&&e.target!==i&&n)return}i.setAttribute("aria-expanded",n),U(t,!n),B(this.elements.container,this.config.classNames.menu.open,n),n&&x.keyboardEvent(e)?xe.focusFirstMenuItem.call(this,null,!0):n||s||X.call(this,i,x.keyboardEvent(e))},getMenuSize(e){const t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);const i=t.scrollWidth,s=t.scrollHeight;return H(t),{width:i,height:s}},showMenuPanel(e="",t=!1){const i=this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);if(!x.element(i))return;const s=i.parentNode,n=Array.from(s.children).find(e=>!e.hidden);if(J.transitions&&!J.reducedMotion){s.style.width=`${n.scrollWidth}px`,s.style.height=`${n.scrollHeight}px`;const e=xe.getMenuSize.call(this,i),t=e=>{e.target===s&&["width","height"].includes(e.propertyName)&&(s.style.width="",s.style.height="",te.call(this,s,L,t))};ee.call(this,s,L,t),s.style.width=`${e.width}px`,s.style.height=`${e.height}px`}U(n,!0),U(i,!1),xe.focusFirstMenuItem.call(this,i,t)},setDownloadUrl(){const e=this.elements.buttons.download;x.element(e)&&e.setAttribute("href",this.download)},create(e){const{bindMenuItemShortcuts:t,createButton:i,createProgress:s,createRange:n,createTime:a,setQualityMenu:l,setSpeedMenu:r,showMenuPanel:o}=xe;this.elements.controls=null,x.array(this.config.controls)&&this.config.controls.includes("play-large")&&this.elements.container.appendChild(i.call(this,"play-large"));const c=q("div",V(this.config.selectors.controls.wrapper));this.elements.controls=c;const u={class:"plyr__controls__item"};return re(x.array(this.config.controls)?this.config.controls:[]).forEach(l=>{if("restart"===l&&c.appendChild(i.call(this,"restart",u)),"rewind"===l&&c.appendChild(i.call(this,"rewind",u)),"play"===l&&c.appendChild(i.call(this,"play",u)),"fast-forward"===l&&c.appendChild(i.call(this,"fast-forward",u)),"progress"===l){const t=q("div",{class:`${u.class} plyr__progress__container`}),i=q("div",V(this.config.selectors.progress));if(i.appendChild(n.call(this,"seek",{id:`plyr-seek-${e.id}`})),i.appendChild(s.call(this,"buffer")),this.config.tooltips.seek){const e=q("span",{class:this.config.classNames.tooltip},"00:00");i.appendChild(e),this.elements.display.seekTooltip=e}this.elements.progress=i,t.appendChild(this.elements.progress),c.appendChild(t)}if("current-time"===l&&c.appendChild(a.call(this,"currentTime",u)),"duration"===l&&c.appendChild(a.call(this,"duration",u)),"mute"===l||"volume"===l){let{volume:t}=this.elements;if(x.element(t)&&c.contains(t)||(t=q("div",_({},u,{class:`${u.class} plyr__volume`.trim()})),this.elements.volume=t,c.appendChild(t)),"mute"===l&&t.appendChild(i.call(this,"mute")),"volume"===l&&!ye.isIos&&!ye.isIPadOS){const i={max:1,step:.05,value:this.config.volume};t.appendChild(n.call(this,"volume",_(i,{id:`plyr-volume-${e.id}`})))}}if("captions"===l&&c.appendChild(i.call(this,"captions",u)),"settings"===l&&!x.empty(this.config.settings)){const s=q("div",_({},u,{class:`${u.class} plyr__menu`.trim(),hidden:""}));s.appendChild(i.call(this,"settings",{"aria-haspopup":!0,"aria-controls":`plyr-settings-${e.id}`,"aria-expanded":!1}));const n=q("div",{class:"plyr__menu__container",id:`plyr-settings-${e.id}`,hidden:""}),a=q("div"),l=q("div",{id:`plyr-settings-${e.id}-home`}),r=q("div",{role:"menu"});l.appendChild(r),a.appendChild(l),this.elements.settings.panels.home=l,this.config.settings.forEach(i=>{const s=q("button",_(V(this.config.selectors.buttons.settings),{type:"button",class:`${this.config.classNames.control} ${this.config.classNames.control}--forward`,role:"menuitem","aria-haspopup":!0,hidden:""}));t.call(this,s,i),ee.call(this,s,"click",()=>{o.call(this,i,!1)});const n=q("span",null,Ae.get(i,this.config)),l=q("span",{class:this.config.classNames.menu.value});l.innerHTML=e[i],n.appendChild(l),s.appendChild(n),r.appendChild(s);const c=q("div",{id:`plyr-settings-${e.id}-${i}`,hidden:""}),u=q("button",{type:"button",class:`${this.config.classNames.control} ${this.config.classNames.control}--back`});u.appendChild(q("span",{"aria-hidden":!0},Ae.get(i,this.config))),u.appendChild(q("span",{class:this.config.classNames.hidden},Ae.get("menuBack",this.config))),ee.call(this,c,"keydown",e=>{"ArrowLeft"===e.key&&(e.preventDefault(),e.stopPropagation(),o.call(this,"home",!0))},!1),ee.call(this,u,"click",()=>{o.call(this,"home",!1)}),c.appendChild(u),c.appendChild(q("div",{role:"menu"})),a.appendChild(c),this.elements.settings.buttons[i]=s,this.elements.settings.panels[i]=c}),n.appendChild(a),s.appendChild(n),c.appendChild(s),this.elements.settings.popup=n,this.elements.settings.menu=s}if("pip"===l&&J.pip&&c.appendChild(i.call(this,"pip",u)),"airplay"===l&&J.airplay&&c.appendChild(i.call(this,"airplay",u)),"download"===l){const e=_({},u,{element:"a",href:this.download,target:"_blank"});this.isHTML5&&(e.download="");const{download:t}=this.config.urls;!x.url(t)&&this.isEmbed&&_(e,{icon:`logo-${this.provider}`,label:this.provider}),c.appendChild(i.call(this,"download",e))}"fullscreen"===l&&c.appendChild(i.call(this,"fullscreen",u))}),this.isHTML5&&l.call(this,fe.getQualityOptions.call(this)),r.call(this),c},inject(){if(this.config.loadSprite){const e=xe.getIconUrl.call(this);e.cors&&Pe(e.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());let e=null;this.elements.controls=null;const t={id:this.id,seektime:this.config.seekTime,title:this.config.title};let i=!0;x.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,t)),this.config.controls||(this.config.controls=[]),x.element(this.config.controls)||x.string(this.config.controls)?e=this.config.controls:(e=xe.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:$e.getLabel.call(this)}),i=!1);let s;i&&x.string(this.config.controls)&&(e=(e=>{let i=e;return Object.entries(t).forEach(([e,t])=>{i=ve(i,`{${e}}`,t)}),i})(e)),x.string(this.config.selectors.controls.container)&&(s=document.querySelector(this.config.selectors.controls.container)),x.element(s)||(s=this.elements.container);if(s[x.element(e)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",e),x.element(this.elements.controls)||xe.findElements.call(this),!x.empty(this.elements.buttons)){const e=e=>{const t=this.config.classNames.controlPressed;e.setAttribute("aria-pressed","false"),Object.defineProperty(e,"pressed",{configurable:!0,enumerable:!0,get:()=>W(e,t),set(i=!1){B(e,t,i),e.setAttribute("aria-pressed",i?"true":"false")}})};Object.values(this.elements.buttons).filter(Boolean).forEach(t=>{x.array(t)||x.nodeList(t)?Array.from(t).filter(Boolean).forEach(e):e(t)})}if(ye.isEdge&&I(s),this.config.tooltips.controls){const{classNames:e,selectors:t}=this.config,i=`${t.controls.wrapper} ${t.labels} .${e.hidden}`,s=K.call(this,i);Array.from(s).forEach(e=>{B(e,this.config.classNames.hidden,!1),B(e,this.config.classNames.tooltip,!0)})}},setMediaMetadata(){try{"mediaSession"in navigator&&(navigator.mediaSession.metadata=new window.MediaMetadata({title:this.config.mediaMetadata.title,artist:this.config.mediaMetadata.artist,album:this.config.mediaMetadata.album,artwork:this.config.mediaMetadata.artwork}))}catch{}},setMarkers(){var e,t;if(!this.duration||this.elements.markers)return;const i=null===(e=this.config.markers)||void 0===e||null===(t=e.points)||void 0===t?void 0:t.filter(({time:e})=>e>0&&e<this.duration);if(null==i||!i.length)return;const s=document.createDocumentFragment(),n=document.createDocumentFragment();let a=null;const l=`${this.config.classNames.tooltip}--visible`,r=e=>B(a,l,e);i.forEach(e=>{const t=q("span",{class:this.config.classNames.marker},""),i=e.time/this.duration*100+"%";a&&(t.addEventListener("mouseenter",()=>{e.label||(a.style.left=i,a.innerHTML=e.label,r(!0))}),t.addEventListener("mouseleave",()=>{r(!1)})),t.addEventListener("click",()=>{this.currentTime=e.time}),t.style.left=i,n.appendChild(t)}),s.appendChild(n),this.config.tooltips.seek||(a=q("span",{class:this.config.classNames.tooltip},""),s.appendChild(a)),this.elements.markers={points:n,tip:a},this.elements.progress.appendChild(s)}};function Le(e,t=!0){let i=e;if(t){const e=document.createElement("a");e.href=i,i=e.href}try{return new URL(i)}catch{return null}}function Ie(e){const t=new URLSearchParams;return x.object(e)&&Object.entries(e).forEach(([e,i])=>{t.set(e,i)}),t}const $e={setup(){if(!this.supported.ui)return;if(!this.isVideo||this.isYouTube||this.isHTML5&&!J.textTracks)return void(x.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&xe.setCaptionsMenu.call(this));var e,t;if(x.element(this.elements.captions)||(this.elements.captions=q("div",V(this.config.selectors.captions)),this.elements.captions.setAttribute("dir","auto"),e=this.elements.captions,t=this.elements.wrapper,x.element(e)&&x.element(t)&&t.parentNode.insertBefore(e,t.nextSibling)),ye.isIE&&window.URL){const e=this.media.querySelectorAll("track");Array.from(e).forEach(e=>{const t=e.getAttribute("src"),i=Le(t);null!==i&&i.hostname!==window.location.href.hostname&&["http:","https:"].includes(i.protocol)&&Ee(t,"blob").then(t=>{e.setAttribute("src",window.URL.createObjectURL(t))}).catch(()=>{H(e)})})}const i=re((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(e=>e.split("-")[0]));let s=(this.storage.get("language")||this.captions.language||this.config.captions.language||"auto").toLowerCase();"auto"===s&&([s]=i);let n=this.storage.get("captions")||this.captions.active;if(x.boolean(n)||({active:n}=this.config.captions),Object.assign(this.captions,{toggled:!1,active:n,language:s,languages:i}),this.isHTML5){const e=this.config.captions.update?"addtrack removetrack":"removetrack";ee.call(this,this.media.textTracks,e,$e.update.bind(this))}setTimeout($e.update.bind(this),0)},update(){const e=$e.getTracks.call(this,!0),{active:t,language:i,meta:s,currentTrackNode:n}=this.captions,a=Boolean(e.find(e=>e.language===i));this.isHTML5&&this.isVideo&&e.filter(e=>!s.get(e)).forEach(e=>{this.debug.log("Track added",e),s.set(e,{default:"showing"===e.mode}),"showing"===e.mode&&(e.mode="hidden"),ee.call(this,e,"cuechange",()=>$e.updateCues.call(this))}),(a&&this.language!==i||!e.includes(n))&&($e.setLanguage.call(this,i),$e.toggle.call(this,t&&a)),this.elements&&B(this.elements.container,this.config.classNames.captions.enabled,!x.empty(e)),x.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&xe.setCaptionsMenu.call(this)},toggle(e,t=!0){if(!this.supported.ui)return;const{toggled:i}=this.captions,s=this.config.classNames.captions.active,n=x.nullOrUndefined(e)?!i:e;if(n!==i){if(t||(this.captions.active=n,this.storage.set({captions:n})),!this.language&&n&&!t){const e=$e.getTracks.call(this),t=$e.findTrack.call(this,[this.captions.language,...this.captions.languages],!0);return this.captions.language=t.language,void $e.set.call(this,e.indexOf(t))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=n),B(this.elements.container,s,n),this.captions.toggled=n,xe.updateSetting.call(this,"captions"),se.call(this,this.media,n?"captionsenabled":"captionsdisabled")}setTimeout(()=>{n&&this.captions.toggled&&(this.captions.currentTrackNode.mode="hidden")})},set(e,t=!0){const i=$e.getTracks.call(this);if(-1!==e)if(x.number(e))if(e in i){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;const s=i[e],{language:n}=s||{};this.captions.currentTrackNode=s,xe.updateSetting.call(this,"captions"),t||(this.captions.language=n,this.storage.set({language:n})),this.isVimeo&&this.embed.enableTextTrack(n),se.call(this,this.media,"languagechange")}$e.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&$e.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else $e.toggle.call(this,!1,t)},setLanguage(e,t=!0){if(!x.string(e))return void this.debug.warn("Invalid language argument",e);const i=e.toLowerCase();this.captions.language=i;const s=$e.getTracks.call(this),n=$e.findTrack.call(this,[i]);$e.set.call(this,s.indexOf(n),t)},getTracks(e=!1){return Array.from((this.media||{}).textTracks||[]).filter(t=>!this.isHTML5||e||this.captions.meta.has(t)).filter(e=>["captions","subtitles"].includes(e.kind))},findTrack(e,t=!1){const i=$e.getTracks.call(this),s=e=>Number((this.captions.meta.get(e)||{}).default),n=Array.from(i).sort((e,t)=>s(t)-s(e));let a;return e.every(e=>(a=n.find(t=>t.language===e),!a)),a||(t?n[0]:void 0)},getCurrentTrack(){return $e.getTracks.call(this)[this.currentTrack]},getLabel(e){let t=e;return!x.track(t)&&J.textTracks&&this.captions.toggled&&(t=$e.getCurrentTrack.call(this)),x.track(t)?x.empty(t.label)?x.empty(t.language)?Ae.get("enabled",this.config):e.language.toUpperCase():t.label:Ae.get("disabled",this.config)},updateCues(e){if(!this.supported.ui)return;if(!x.element(this.elements.captions))return void this.debug.warn("No captions element to render to");if(!x.nullOrUndefined(e)&&!Array.isArray(e))return void this.debug.warn("updateCues: Invalid input",e);let t=e;if(!t){const e=$e.getCurrentTrack.call(this);t=Array.from((e||{}).activeCues||[]).map(e=>e.getCueAsHTML()).map(Te)}const i=t.map(e=>e.trim()).join("\n");if(i!==this.elements.captions.innerHTML){R(this.elements.captions);const e=q("span",V(this.config.selectors.caption));e.innerHTML=i,this.elements.captions.appendChild(e),se.call(this,this.media,"cuechange")}}},_e={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.8.3/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/oembed.json?url={0}"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",marker:"plyr__progress__marker",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id",hash:"data-plyr-embed-hash"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:"",withCredentials:!1},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,customControls:!0,referrerPolicy:null,premium:!1},youtube:{rel:0,showinfo:0,iv_load_policy:3,modestbranding:1,customControls:!0,noCookie:!1},mediaMetadata:{title:"",artist:"",album:"",artwork:[]},markers:{enabled:!1,points:[]}},Oe="picture-in-picture",je="inline",qe={html5:"html5",youtube:"youtube",vimeo:"vimeo"},De="audio",He="video";function Re(){}class Fe{constructor(e=!1){this.enabled=window.console&&e,this.enabled&&this.log("Debugging enabled")}get log(){return this.enabled?Function.prototype.bind.call(console.log,console):Re}get warn(){return this.enabled?Function.prototype.bind.call(console.warn,console):Re}get error(){return this.enabled?Function.prototype.bind.call(console.error,console):Re}}class Ve{constructor(t){e(this,"onChange",()=>{if(!this.supported)return;const e=this.player.elements.buttons.fullscreen;x.element(e)&&(e.pressed=this.active);const t=this.target===this.player.media?this.target:this.player.elements.container;se.call(this.player,t,this.active?"enterfullscreen":"exitfullscreen",!0)}),e(this,"toggleFallback",(e=!1)=>{var t,i;e?this.scrollPosition={x:null!==(t=window.scrollX)&&void 0!==t?t:0,y:null!==(i=window.scrollY)&&void 0!==i?i:0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y);if(document.body.style.overflow=e?"hidden":"",B(this.target,this.player.config.classNames.fullscreen.fallback,e),ye.isIos){let t=document.head.querySelector('meta[name="viewport"]');const i="viewport-fit=cover";t||(t=document.createElement("meta"),t.setAttribute("name","viewport"));const s=x.string(t.content)&&t.content.includes(i);e?(this.cleanupViewport=!s,s||(t.content+=`,${i}`)):this.cleanupViewport&&(t.content=t.content.split(",").filter(e=>e.trim()!==i).join(","))}this.onChange()}),e(this,"trapFocus",e=>{if(ye.isIos||ye.isIPadOS||!this.active||"Tab"!==e.key)return;const t=document.activeElement,i=K.call(this.player,"a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),[s]=i,n=i[i.length-1];t!==n||e.shiftKey?t===s&&e.shiftKey&&(n.focus(),e.preventDefault()):(s.focus(),e.preventDefault())}),e(this,"update",()=>{if(this.supported){let e;e=this.forceFallback?"Fallback (forced)":Ve.nativeSupported?"Native":"Fallback",this.player.debug.log(`${e} fullscreen enabled`)}else this.player.debug.log("Fullscreen not supported and fallback disabled");B(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.supported)}),e(this,"enter",()=>{this.supported&&(ye.isIos&&this.player.config.fullscreen.iosNative?this.player.isVimeo?this.player.embed.requestFullscreen():this.target.webkitEnterFullscreen():!Ve.nativeSupported||this.forceFallback?this.toggleFallback(!0):this.prefix?x.empty(this.prefix)||this.target[`${this.prefix}Request${this.property}`]():this.target.requestFullscreen({navigationUI:"hide"}))}),e(this,"exit",()=>{if(this.supported)if(ye.isIos&&this.player.config.fullscreen.iosNative)this.player.isVimeo?this.player.embed.exitFullscreen():this.target.webkitEnterFullscreen(),le(this.player.play());else if(!Ve.nativeSupported||this.forceFallback)this.toggleFallback(!1);else if(this.prefix){if(!x.empty(this.prefix)){const e="moz"===this.prefix?"Cancel":"Exit";document[`${this.prefix}${e}${this.property}`]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}),e(this,"toggle",()=>{this.active?this.exit():this.enter()}),this.player=t,this.prefix=Ve.prefix,this.property=Ve.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===t.config.fullscreen.fallback,this.player.elements.fullscreen=t.config.fullscreen.container&&function(e,t){const{prototype:i}=Element;return(i.closest||function(){let e=this;do{if(z.matches(e,t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}).call(e,t)}(this.player.elements.container,t.config.fullscreen.container),ee.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":`${this.prefix}fullscreenchange`,()=>{this.onChange()}),ee.call(this.player,this.player.elements.container,"dblclick",e=>{x.element(this.player.elements.controls)&&this.player.elements.controls.contains(e.target)||this.player.listeners.proxy(e,this.toggle,"fullscreen")}),ee.call(this,this.player.elements.container,"keydown",e=>this.trapFocus(e)),this.update()}static get nativeSupported(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}get useNative(){return Ve.nativeSupported&&!this.forceFallback}static get prefix(){if(x.function(document.exitFullscreen))return"";let e="";return["webkit","moz","ms"].some(t=>!(!x.function(document[`${t}ExitFullscreen`])&&!x.function(document[`${t}CancelFullScreen`]))&&(e=t,!0)),e}static get property(){return"moz"===this.prefix?"FullScreen":"Fullscreen"}get supported(){return[this.player.config.fullscreen.enabled,this.player.isVideo,Ve.nativeSupported||this.player.config.fullscreen.fallback,!this.player.isYouTube||Ve.nativeSupported||!ye.isIos||this.player.config.playsinline&&!this.player.config.fullscreen.iosNative].every(Boolean)}get active(){if(!this.supported)return!1;if(!Ve.nativeSupported||this.forceFallback)return W(this.target,this.player.config.classNames.fullscreen.fallback);const e=this.prefix?this.target.getRootNode()[`${this.prefix}${this.property}Element`]:this.target.getRootNode().fullscreenElement;return e&&e.shadowRoot?e===this.target.getRootNode().host:e===this.target}get target(){var e;return ye.isIos&&this.player.config.fullscreen.iosNative?this.player.media:null!==(e=this.player.elements.fullscreen)&&void 0!==e?e:this.player.elements.container}}function Ue(e,t=1){return new Promise((i,s)=>{const n=new Image,a=()=>{delete n.onload,delete n.onerror,(n.naturalWidth>=t?i:s)(n)};Object.assign(n,{onload:a,onerror:a,src:e})})}const Be={addStyleHook(){B(this.elements.container,this.config.selectors.container.replace(".",""),!0),B(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls(e=!1){e&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build(){if(this.listeners.media(),!this.supported.ui)return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`),void Be.toggleNativeControls.call(this,!0);x.element(this.elements.controls)||(xe.inject.call(this),this.listeners.controls()),Be.toggleNativeControls.call(this),this.isHTML5&&$e.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,xe.updateVolume.call(this),xe.timeUpdate.call(this),xe.durationUpdate.call(this),Be.checkPlaying.call(this),B(this.elements.container,this.config.classNames.pip.supported,J.pip&&this.isHTML5&&this.isVideo),B(this.elements.container,this.config.classNames.airplay.supported,J.airplay&&this.isHTML5),B(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout(()=>{se.call(this,this.media,"ready")},0),Be.setTitle.call(this),this.poster&&Be.setPoster.call(this,this.poster,!1).catch(()=>{}),this.config.duration&&xe.durationUpdate.call(this),this.config.mediaMetadata&&xe.setMediaMetadata.call(this)},setTitle(){let e=Ae.get("play",this.config);if(x.string(this.config.title)&&!x.empty(this.config.title)&&(e+=`, ${this.config.title}`),Array.from(this.elements.buttons.play||[]).forEach(t=>{t.setAttribute("aria-label",e)}),this.isEmbed){const e=Y.call(this,"iframe");if(!x.element(e))return;const t=x.empty(this.config.title)?"video":this.config.title,i=Ae.get("frameTitle",this.config);e.setAttribute("title",i.replace("{title}",t))}},togglePoster(e){B(this.elements.container,this.config.classNames.posterEnabled,e)},setPoster(e,t=!0){return t&&this.poster?Promise.reject(new Error("Poster already set")):(this.media.setAttribute("data-poster",e),this.elements.poster.removeAttribute("hidden"),ae.call(this).then(()=>Ue(e)).catch(t=>{throw e===this.poster&&Be.togglePoster.call(this,!1),t}).then(()=>{if(e!==this.poster)throw new Error("setPoster cancelled by later call to setPoster")}).then(()=>(Object.assign(this.elements.poster.style,{backgroundImage:`url('${e}')`,backgroundSize:""}),Be.togglePoster.call(this,!0),e)))},checkPlaying(e){B(this.elements.container,this.config.classNames.playing,this.playing),B(this.elements.container,this.config.classNames.paused,this.paused),B(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach(e=>{Object.assign(e,{pressed:this.playing}),e.setAttribute("aria-label",Ae.get(this.playing?"pause":"play",this.config))}),x.event(e)&&"timeupdate"===e.type||Be.toggleControls.call(this)},checkLoading(e){this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout(()=>{B(this.elements.container,this.config.classNames.loading,this.loading),Be.toggleControls.call(this)},this.loading?250:0)},toggleControls(e){const{controls:t}=this.elements;if(t&&this.config.hideControls){const i=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||i))}},migrateStyles(){Object.values({...this.media.style}).filter(e=>!x.empty(e)&&x.string(e)&&e.startsWith("--plyr")).forEach(e=>{this.elements.container.style.setProperty(e,this.media.style.getPropertyValue(e)),this.media.style.removeProperty(e)}),x.empty(this.media.style)&&this.media.removeAttribute("style")}};class We{constructor(t){e(this,"firstTouch",()=>{const{player:e}=this,{elements:t}=e;e.touch=!0,B(t.container,e.config.classNames.isTouch,!0)}),e(this,"global",(e=!0)=>{const{player:t}=this;t.config.keyboard.global&&Z.call(t,window,"keydown keyup",this.handleKey,e,!1),Z.call(t,document.body,"click",this.toggleMenu,e),ie.call(t,document.body,"touchstart",this.firstTouch)}),e(this,"container",()=>{const{player:e}=this,{config:t,elements:i,timers:s}=e;!t.keyboard.global&&t.keyboard.focused&&ee.call(e,i.container,"keydown keyup",this.handleKey,!1),ee.call(e,i.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",t=>{const{controls:n}=i;n&&"enterfullscreen"===t.type&&(n.pressed=!1,n.hover=!1);let a=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(Be.toggleControls.call(e,!0),a=e.touch?3e3:2e3),clearTimeout(s.controls),s.controls=setTimeout(()=>Be.toggleControls.call(e,!1),a)});const n=()=>{if(!e.isVimeo||e.config.vimeo.premium)return;const t=i.wrapper,{active:s}=e.fullscreen,[n,a]=me.call(e),l=ce(`aspect-ratio: ${n} / ${a}`);if(!s)return void(l?(t.style.width=null,t.style.height=null):(t.style.maxWidth=null,t.style.margin=null));const[r,o]=[Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)],c=r/o>n/a;l?(t.style.width=c?"auto":"100%",t.style.height=c?"100%":"auto"):(t.style.maxWidth=c?o/a*n+"px":null,t.style.margin=c?"0 auto":null)},a=()=>{clearTimeout(s.resized),s.resized=setTimeout(n,50)};ee.call(e,i.container,"enterfullscreen exitfullscreen",t=>{const{target:s}=e.fullscreen;if(s!==i.container)return;if(!e.isEmbed&&x.empty(e.config.ratio))return;n();("enterfullscreen"===t.type?ee:te).call(e,window,"resize",a)})}),e(this,"media",()=>{const{player:e}=this,{elements:t}=e;if(ee.call(e,e.media,"timeupdate seeking seeked",t=>xe.timeUpdate.call(e,t)),ee.call(e,e.media,"durationchange loadeddata loadedmetadata",t=>xe.durationUpdate.call(e,t)),ee.call(e,e.media,"ended",()=>{e.isHTML5&&e.isVideo&&e.config.resetOnEnd&&(e.restart(),e.pause())}),ee.call(e,e.media,"progress playing seeking seeked",t=>xe.updateProgress.call(e,t)),ee.call(e,e.media,"volumechange",t=>xe.updateVolume.call(e,t)),ee.call(e,e.media,"playing play pause ended emptied timeupdate",t=>Be.checkPlaying.call(e,t)),ee.call(e,e.media,"waiting canplay seeked playing",t=>Be.checkLoading.call(e,t)),e.supported.ui&&e.config.clickToPlay&&!e.isAudio){const i=Y.call(e,`.${e.config.classNames.video}`);if(!x.element(i))return;ee.call(e,t.container,"click",s=>{([t.container,i].includes(s.target)||i.contains(s.target))&&(e.touch&&e.config.hideControls||(e.ended?(this.proxy(s,e.restart,"restart"),this.proxy(s,()=>{le(e.play())},"play")):this.proxy(s,()=>{le(e.togglePlay())},"play")))})}e.supported.ui&&e.config.disableContextMenu&&ee.call(e,t.wrapper,"contextmenu",e=>{e.preventDefault()},!1),ee.call(e,e.media,"volumechange",()=>{e.storage.set({volume:e.volume,muted:e.muted})}),ee.call(e,e.media,"ratechange",()=>{xe.updateSetting.call(e,"speed"),e.storage.set({speed:e.speed})}),ee.call(e,e.media,"qualitychange",t=>{xe.updateSetting.call(e,"quality",null,t.detail.quality)}),ee.call(e,e.media,"ready qualitychange",()=>{xe.setDownloadUrl.call(e)});const i=e.config.events.concat(["keyup","keydown"]).join(" ");ee.call(e,e.media,i,i=>{let{detail:s={}}=i;"error"===i.type&&(s=e.media.error),se.call(e,t.container,i.type,!0,s)})}),e(this,"proxy",(e,t,i)=>{const{player:s}=this,n=s.config.listeners[i];let a=!0;x.function(n)&&(a=n.call(s,e)),!1!==a&&x.function(t)&&t.call(s,e)}),e(this,"bind",(e,t,i,s,n=!0)=>{const{player:a}=this,l=a.config.listeners[s],r=x.function(l);ee.call(a,e,t,e=>this.proxy(e,i,s),n&&!r)}),e(this,"controls",()=>{const{player:e}=this,{elements:t}=e,i=ye.isIE?"change":"input";if(t.buttons.play&&Array.from(t.buttons.play).forEach(t=>{this.bind(t,"click",()=>{le(e.togglePlay())},"play")}),this.bind(t.buttons.restart,"click",e.restart,"restart"),this.bind(t.buttons.rewind,"click",()=>{e.lastSeekTime=Date.now(),e.rewind()},"rewind"),this.bind(t.buttons.fastForward,"click",()=>{e.lastSeekTime=Date.now(),e.forward()},"fastForward"),this.bind(t.buttons.mute,"click",()=>{e.muted=!e.muted},"mute"),this.bind(t.buttons.captions,"click",()=>e.toggleCaptions()),this.bind(t.buttons.download,"click",()=>{se.call(e,e.media,"download")},"download"),this.bind(t.buttons.fullscreen,"click",()=>{e.fullscreen.toggle()},"fullscreen"),this.bind(t.buttons.pip,"click",()=>{e.pip="toggle"},"pip"),this.bind(t.buttons.airplay,"click",e.airplay,"airplay"),this.bind(t.buttons.settings,"click",t=>{t.stopPropagation(),t.preventDefault(),xe.toggleMenu.call(e,t)},null,!1),this.bind(t.buttons.settings,"keyup",t=>{[" ","Enter"].includes(t.key)&&("Enter"!==t.key?(t.preventDefault(),t.stopPropagation(),xe.toggleMenu.call(e,t)):xe.focusFirstMenuItem.call(e,null,!0))},null,!1),this.bind(t.settings.menu,"keydown",t=>{"Escape"===t.key&&xe.toggleMenu.call(e,t)}),this.bind(t.inputs.seek,"mousedown mousemove",e=>{const i=t.progress.getBoundingClientRect(),s=e.pageX-e.clientX,n=100/i.width*(e.pageX-i.left-s);e.currentTarget.setAttribute("seek-value",n)}),this.bind(t.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",t=>{const i=t.currentTarget,s="play-on-seeked";if(x.keyboardEvent(t)&&!["ArrowLeft","ArrowRight"].includes(t.key))return;e.lastSeekTime=Date.now();const n=i.hasAttribute(s),a=["mouseup","touchend","keyup"].includes(t.type);n&&a?(i.removeAttribute(s),le(e.play())):!a&&e.playing&&(i.setAttribute(s,""),e.pause())}),ye.isIos){const t=K.call(e,'input[type="range"]');Array.from(t).forEach(e=>this.bind(e,i,e=>I(e.target)))}this.bind(t.inputs.seek,i,t=>{const i=t.currentTarget;let s=i.getAttribute("seek-value");x.empty(s)&&(s=i.value),i.removeAttribute("seek-value"),e.currentTime=s/i.max*e.duration},"seek"),this.bind(t.progress,"mouseenter mouseleave mousemove",t=>xe.updateSeekTooltip.call(e,t)),this.bind(t.progress,"mousemove touchmove",t=>{const{previewThumbnails:i}=e;i&&i.loaded&&i.startMove(t)}),this.bind(t.progress,"mouseleave touchend click",()=>{const{previewThumbnails:t}=e;t&&t.loaded&&t.endMove(!1,!0)}),this.bind(t.progress,"mousedown touchstart",t=>{const{previewThumbnails:i}=e;i&&i.loaded&&i.startScrubbing(t)}),this.bind(t.progress,"mouseup touchend",t=>{const{previewThumbnails:i}=e;i&&i.loaded&&i.endScrubbing(t)}),ye.isWebKit&&Array.from(K.call(e,'input[type="range"]')).forEach(t=>{this.bind(t,"input",t=>xe.updateRangeFill.call(e,t.target))}),e.config.toggleInvert&&!x.element(t.display.duration)&&this.bind(t.display.currentTime,"click",()=>{0!==e.currentTime&&(e.config.invertTime=!e.config.invertTime,xe.timeUpdate.call(e))}),this.bind(t.inputs.volume,i,t=>{e.volume=t.target.value},"volume"),this.bind(t.controls,"mouseenter mouseleave",i=>{t.controls.hover=!e.touch&&"mouseenter"===i.type}),t.fullscreen&&Array.from(t.fullscreen.children).filter(e=>!e.contains(t.container)).forEach(i=>{this.bind(i,"mouseenter mouseleave",i=>{t.controls&&(t.controls.hover=!e.touch&&"mouseenter"===i.type)})}),this.bind(t.controls,"mousedown mouseup touchstart touchend touchcancel",e=>{t.controls.pressed=["mousedown","touchstart"].includes(e.type)}),this.bind(t.controls,"focusin",()=>{const{config:i,timers:s}=e;B(t.controls,i.classNames.noTransition,!0),Be.toggleControls.call(e,!0),setTimeout(()=>{B(t.controls,i.classNames.noTransition,!1)},0);const n=this.touch?3e3:4e3;clearTimeout(s.controls),s.controls=setTimeout(()=>Be.toggleControls.call(e,!1),n)}),this.bind(t.inputs.volume,"wheel",t=>{const i=t.webkitDirectionInvertedFromDevice,[s,n]=[t.deltaX,-t.deltaY].map(e=>i?-e:e),a=Math.sign(Math.abs(s)>Math.abs(n)?s:n);e.increaseVolume(a/50);const{volume:l}=e.media;(1===a&&l<1||-1===a&&l>0)&&t.preventDefault()},"volume",!1)}),this.player=t,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.firstTouch=this.firstTouch.bind(this)}handleKey(e){const{player:t}=this,{elements:i}=t,{key:s,type:n,altKey:a,ctrlKey:l,metaKey:r,shiftKey:o}=e,c="keydown"===n,u=c&&s===this.lastKey;if(a||l||r||o)return;if(!s)return;if(c){const n=document.activeElement;if(x.element(n)){const{editable:s}=t.config.selectors,{seek:a}=i.inputs;if(n!==a&&z(n,s))return;if(" "===e.key&&z(n,'button, [role^="menuitem"]'))return}switch([" ","ArrowLeft","ArrowUp","ArrowRight","ArrowDown","0","1","2","3","4","5","6","7","8","9","c","f","k","l","m"].includes(s)&&(e.preventDefault(),e.stopPropagation()),s){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":u||(h=Number.parseInt(s,10),t.currentTime=t.duration/10*h);break;case" ":case"k":u||le(t.togglePlay());break;case"ArrowUp":t.increaseVolume(.1);break;case"ArrowDown":t.decreaseVolume(.1);break;case"m":u||(t.muted=!t.muted);break;case"ArrowRight":t.forward();break;case"ArrowLeft":t.rewind();break;case"f":t.fullscreen.toggle();break;case"c":u||t.toggleCaptions();break;case"l":t.loop=!t.loop}"Escape"===s&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=s}else this.lastKey=null;var h}toggleMenu(e){xe.toggleMenu.call(this.player,e)}}function ze(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ke,Ye={exports:{}};var Xe=(Ke||(Ke=1,function(e){e.exports=function(){var e=function(){},t={},i={},s={};function n(e,t){e=e.push?e:[e];var n,a,l,r=[],o=e.length,c=o;for(n=function(e,i){i.length&&r.push(e),--c||t(r)};o--;)a=e[o],(l=i[a])?n(a,l):(s[a]=s[a]||[]).push(n)}function a(e,t){if(e){var n=s[e];if(i[e]=t,n)for(;n.length;)n[0](e,t),n.splice(0,1)}}function l(t,i){t.call&&(t={success:t}),i.length?(t.error||e)(i):(t.success||e)(t)}function r(t,i,s,n){var a,l,o,c=document,u=s.async,h=(s.numRetries||0)+1,d=s.before||e,m=t.replace(/[\?|#].*$/,""),p=t.replace(/^(css|img|module|nomodule)!/,"");if(n=n||0,/(^css!|\.css$)/.test(m))(o=c.createElement("link")).rel="stylesheet",o.href=p,(a="hideFocus"in o)&&o.relList&&(a=0,o.rel="preload",o.as="style");else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(m))(o=c.createElement("img")).src=p;else if((o=c.createElement("script")).src=p,o.async=void 0===u||u,l="noModule"in o,/^module!/.test(m)){if(!l)return i(t,"l");o.type="module"}else if(/^nomodule!/.test(m)&&l)return i(t,"l");o.onload=o.onerror=o.onbeforeload=function(e){var l=e.type[0];if(a)try{o.sheet.cssText.length||(l="e")}catch(e){18!=e.code&&(l="e")}if("e"==l){if((n+=1)<h)return r(t,i,s,n)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";i(t,l,e.defaultPrevented)},!1!==d(t,o)&&c.head.appendChild(o)}function o(e,t,i){var s,n,a=(e=e.push?e:[e]).length,l=a,o=[];for(s=function(e,i,s){if("e"==i&&o.push(e),"b"==i){if(!s)return;o.push(e)}--a||t(o)},n=0;n<l;n++)r(e[n],s,i)}function c(e,i,s){var n,r;if(i&&i.trim&&(n=i),r=(n?s:i)||{},n){if(n in t)throw"LoadJS";t[n]=!0}function c(t,i){o(e,function(e){l(r,e),t&&l({success:t,error:i},e),a(n,e)},r)}if(r.returnPromise)return new Promise(c);c()}return c.ready=function(e,t){return n(e,function(e){l(t,e)}),c},c.done=function(e){a(e,[])},c.reset=function(){t={},i={},s={}},c.isDefined=function(e){return e in t},c}()}(Ye)),Ye.exports),Qe=ze(Xe);function Je(e){return new Promise((t,i)=>{Qe(e,{success:t,error:i})})}function Ge(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,se.call(this,this.media,e?"play":"pause"))}const Ze={setup(){const e=this;B(e.elements.wrapper,e.config.classNames.embed,!0),e.options.speed=e.config.speed.options,pe.call(e),x.object(window.Vimeo)?Ze.ready.call(e):Je(e.config.urls.vimeo.sdk).then(()=>{Ze.ready.call(e)}).catch(t=>{e.debug.warn("Vimeo SDK (player.js) failed to load",t)})},ready(){const e=this,t=e.config.vimeo,{premium:i,referrerPolicy:s,...n}=t;let a=e.media.getAttribute("src"),l="";x.empty(a)?(a=e.media.getAttribute(e.config.attributes.embed.id),l=e.media.getAttribute(e.config.attributes.embed.hash)):l=function(e){const t=e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*h=|\/)+([\d,a-f]+)/);return t&&5===t.length?t[4]:null}(a);const r=l?{h:l}:{};i&&Object.assign(n,{controls:!1,sidedock:!1});const o=Ie({loop:e.config.loop.active,autoplay:e.autoplay,muted:e.muted,gesture:"media",playsinline:e.config.playsinline,...r,...n}),c=function(e){if(x.empty(e))return null;if(x.number(Number(e)))return e;const t=e.match(/^.*(vimeo.com\/|video\/)(\d+).*/);return t?t[2]:e}(a),u=q("iframe"),h=be(e.config.urls.vimeo.iframe,c,o);if(u.setAttribute("src",h),u.setAttribute("allowfullscreen",""),u.setAttribute("allow",["autoplay","fullscreen","picture-in-picture","encrypted-media","accelerometer","gyroscope"].join("; ")),x.empty(s)||u.setAttribute("referrerPolicy",s),i||!t.customControls)u.setAttribute("data-poster",e.poster),e.media=F(u,e.media);else{const t=q("div",{class:e.config.classNames.embedContainer,"data-poster":e.poster});t.appendChild(u),e.media=F(t,e.media)}t.customControls||Ee(be(e.config.urls.vimeo.api,h)).then(t=>{!x.empty(t)&&t.thumbnail_url&&Be.setPoster.call(e,t.thumbnail_url).catch(()=>{})}),e.embed=new window.Vimeo.Player(u,{autopause:e.config.autopause,muted:e.muted}),e.media.paused=!0,e.media.currentTime=0,e.supported.ui&&e.embed.disableTextTrack(),e.media.play=()=>(Ge.call(e,!0),e.embed.play()),e.media.pause=()=>(Ge.call(e,!1),e.embed.pause()),e.media.stop=()=>{e.pause(),e.currentTime=0};let{currentTime:d}=e.media;Object.defineProperty(e.media,"currentTime",{get:()=>d,set(t){const{embed:i,media:s,paused:n,volume:a}=e,l=n&&!i.hasPlayed;s.seeking=!0,se.call(e,s,"seeking"),Promise.resolve(l&&i.setVolume(0)).then(()=>i.setCurrentTime(t)).then(()=>l&&i.pause()).then(()=>l&&i.setVolume(a)).catch(()=>{})}});let m=e.config.speed.selected;Object.defineProperty(e.media,"playbackRate",{get:()=>m,set(t){e.embed.setPlaybackRate(t).then(()=>{m=t,se.call(e,e.media,"ratechange")}).catch(()=>{e.options.speed=[1]})}});let{volume:p}=e.config;Object.defineProperty(e.media,"volume",{get:()=>p,set(t){e.embed.setVolume(t).then(()=>{p=t,se.call(e,e.media,"volumechange")})}});let{muted:g}=e.config;Object.defineProperty(e.media,"muted",{get:()=>g,set(t){const i=!!x.boolean(t)&&t;e.embed.setMuted(!!i||e.config.muted).then(()=>{g=i,se.call(e,e.media,"volumechange")})}});let f,{loop:y}=e.config;Object.defineProperty(e.media,"loop",{get:()=>y,set(t){const i=x.boolean(t)?t:e.config.loop.active;e.embed.setLoop(i).then(()=>{y=i})}}),e.embed.getVideoUrl().then(t=>{f=t,xe.setDownloadUrl.call(e)}).catch(e=>{this.debug.warn(e)}),Object.defineProperty(e.media,"currentSrc",{get:()=>f}),Object.defineProperty(e.media,"ended",{get:()=>e.currentTime===e.duration}),Promise.all([e.embed.getVideoWidth(),e.embed.getVideoHeight()]).then(t=>{const[i,s]=t;e.embed.ratio=ge(i,s),pe.call(this)}),e.embed.setAutopause(e.config.autopause).then(t=>{e.config.autopause=t}),e.embed.getVideoTitle().then(t=>{e.config.title=t,Be.setTitle.call(this)}),e.embed.getCurrentTime().then(t=>{d=t,se.call(e,e.media,"timeupdate")}),e.embed.getDuration().then(t=>{e.media.duration=t,se.call(e,e.media,"durationchange")}),e.embed.getTextTracks().then(t=>{e.media.textTracks=t,$e.setup.call(e)}),e.embed.on("cuechange",({cues:t=[]})=>{const i=t.map(e=>function(e){const t=document.createDocumentFragment(),i=document.createElement("div");return t.appendChild(i),i.innerHTML=e,t.firstChild.textContent}(e.text));$e.updateCues.call(e,i)}),e.embed.on("loaded",()=>{if(e.embed.getPaused().then(t=>{Ge.call(e,!t),t||se.call(e,e.media,"playing")}),x.element(e.embed.element)&&e.supported.ui){e.embed.element.setAttribute("tabindex",-1)}}),e.embed.on("bufferstart",()=>{se.call(e,e.media,"waiting")}),e.embed.on("bufferend",()=>{se.call(e,e.media,"playing")}),e.embed.on("play",()=>{Ge.call(e,!0),se.call(e,e.media,"playing")}),e.embed.on("pause",()=>{Ge.call(e,!1)}),e.embed.on("timeupdate",t=>{e.media.seeking=!1,d=t.seconds,se.call(e,e.media,"timeupdate")}),e.embed.on("progress",t=>{e.media.buffered=t.percent,se.call(e,e.media,"progress"),1===Number.parseInt(t.percent,10)&&se.call(e,e.media,"canplaythrough"),e.embed.getDuration().then(t=>{t!==e.media.duration&&(e.media.duration=t,se.call(e,e.media,"durationchange"))})}),e.embed.on("seeked",()=>{e.media.seeking=!1,se.call(e,e.media,"seeked")}),e.embed.on("ended",()=>{e.media.paused=!0,se.call(e,e.media,"ended")}),e.embed.on("error",t=>{e.media.error=t,se.call(e,e.media,"error")}),t.customControls&&setTimeout(()=>Be.build.call(e),0)}};function et(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,se.call(this,this.media,e?"play":"pause"))}function tt(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}const it={setup(){if(B(this.elements.wrapper,this.config.classNames.embed,!0),x.object(window.YT)&&x.function(window.YT.Player))it.ready.call(this);else{const e=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{x.function(e)&&e(),it.ready.call(this)},Je(this.config.urls.youtube.sdk).catch(e=>{this.debug.warn("YouTube API failed to load",e)})}},getTitle(e){Ee(be(this.config.urls.youtube.api,e)).then(e=>{if(x.object(e)){const{title:t,height:i,width:s}=e;this.config.title=t,Be.setTitle.call(this),this.embed.ratio=ge(s,i)}pe.call(this)}).catch(()=>{pe.call(this)})},ready(){const e=this,t=e.config.youtube,i=e.media&&e.media.getAttribute("id");if(!x.empty(i)&&i.startsWith("youtube-"))return;let s=e.media.getAttribute("src");x.empty(s)&&(s=e.media.getAttribute(this.config.attributes.embed.id));const n=function(e){if(x.empty(e))return null;const t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&t[2]?t[2]:e}(s);const a=q("div",{id:`${e.provider}-${Math.floor(1e4*Math.random())}`,"data-poster":t.customControls?e.poster:void 0});if(e.media=F(a,e.media),t.customControls){const t=e=>`https://i.ytimg.com/vi/${n}/${e}default.jpg`;Ue(t("maxres"),121).catch(()=>Ue(t("sd"),121)).catch(()=>Ue(t("hq"))).then(t=>Be.setPoster.call(e,t.src)).then(t=>{t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover")}).catch(()=>{})}e.embed=new window.YT.Player(e.media,{videoId:n,host:tt(t),playerVars:_({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui&&t.customControls?0:1,disablekb:1,playsinline:e.config.playsinline&&!e.config.fullscreen.iosNative?1:0,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},t),events:{onError(t){if(!e.media.error){const i=t.data,s={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[i]||"An unknown error occurred";e.media.error={code:i,message:s},se.call(e,e.media,"error")}},onPlaybackRateChange(t){const i=t.target;e.media.playbackRate=i.getPlaybackRate(),se.call(e,e.media,"ratechange")},onReady(i){if(x.function(e.media.play))return;const s=i.target;it.getTitle.call(e,n),e.media.play=()=>{et.call(e,!0),s.playVideo()},e.media.pause=()=>{et.call(e,!1),s.pauseVideo()},e.media.stop=()=>{s.stopVideo()},e.media.duration=s.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:()=>Number(s.getCurrentTime()),set(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,se.call(e,e.media,"seeking"),s.seekTo(t)}}),Object.defineProperty(e.media,"playbackRate",{get:()=>s.getPlaybackRate(),set(e){s.setPlaybackRate(e)}});let{volume:a}=e.config;Object.defineProperty(e.media,"volume",{get:()=>a,set(t){a=t,s.setVolume(100*a),se.call(e,e.media,"volumechange")}});let{muted:l}=e.config;Object.defineProperty(e.media,"muted",{get:()=>l,set(t){const i=x.boolean(t)?t:l;l=i,s[i?"mute":"unMute"](),s.setVolume(100*a),se.call(e,e.media,"volumechange")}}),Object.defineProperty(e.media,"currentSrc",{get:()=>s.getVideoUrl()}),Object.defineProperty(e.media,"ended",{get:()=>e.currentTime===e.duration});const r=s.getAvailablePlaybackRates();e.options.speed=r.filter(t=>e.config.speed.options.includes(t)),e.supported.ui&&t.customControls&&e.media.setAttribute("tabindex",-1),se.call(e,e.media,"timeupdate"),se.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval(()=>{e.media.buffered=s.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&se.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),se.call(e,e.media,"canplaythrough"))},200),t.customControls&&setTimeout(()=>Be.build.call(e),50)},onStateChange(i){const s=i.target;clearInterval(e.timers.playing);switch(e.media.seeking&&[1,2].includes(i.data)&&(e.media.seeking=!1,se.call(e,e.media,"seeked")),i.data){case-1:se.call(e,e.media,"timeupdate"),e.media.buffered=s.getVideoLoadedFraction(),se.call(e,e.media,"progress");break;case 0:et.call(e,!1),e.media.loop?(s.stopVideo(),s.playVideo()):se.call(e,e.media,"ended");break;case 1:t.customControls&&!e.config.autoplay&&e.media.paused&&!e.embed.hasPlayed?e.media.pause():(et.call(e,!0),se.call(e,e.media,"playing"),e.timers.playing=setInterval(()=>{se.call(e,e.media,"timeupdate")},50),e.media.duration!==s.getDuration()&&(e.media.duration=s.getDuration(),se.call(e,e.media,"durationchange")));break;case 2:e.muted||e.embed.unMute(),et.call(e,!1);break;case 3:se.call(e,e.media,"waiting")}se.call(e,e.elements.container,"statechange",!1,{code:i.data})}}})}},st={setup(){this.media?(B(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),B(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&B(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=q("div",{class:this.config.classNames.video}),O(this.media,this.elements.wrapper),this.elements.poster=q("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?fe.setup.call(this):this.isYouTube?it.setup.call(this):this.isVimeo&&Ze.setup.call(this)):this.debug.warn("No media element found!")}};class nt{constructor(t){e(this,"load",()=>{this.enabled&&(x.object(window.google)&&x.object(window.google.ima)?this.ready():Je(this.player.config.urls.googleIMA.sdk).then(()=>{this.ready()}).catch(()=>{this.trigger("error",new Error("Google IMA SDK failed to load"))}))}),e(this,"ready",()=>{var e;this.enabled||((e=this).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then(()=>{this.clearSafetyTimer("onAdsManagerLoaded()")}),this.listeners(),this.setupIMA()}),e(this,"setupIMA",()=>{this.elements.container=q("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,e=>this.onAdsManagerLoaded(e),!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,e=>this.onAdError(e),!1),this.requestAds()}),e(this,"requestAds",()=>{const{container:e}=this.player.elements;try{const t=new google.ima.AdsRequest;t.adTagUrl=this.tagUrl,t.linearAdSlotWidth=e.offsetWidth,t.linearAdSlotHeight=e.offsetHeight,t.nonLinearAdSlotWidth=e.offsetWidth,t.nonLinearAdSlotHeight=e.offsetHeight,t.forceNonLinearFullSlot=!1,t.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(t)}catch(e){this.onAdError(e)}}),e(this,"pollCountdown",(e=!1)=>{if(!e)return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval(()=>{const e=Ne(Math.max(this.manager.getRemainingTime(),0)),t=`${Ae.get("advertisement",this.player.config)} - ${e}`;this.elements.container.setAttribute("data-badge-text",t)},100)}),e(this,"onAdsManagerLoaded",e=>{if(!this.enabled)return;const t=new google.ima.AdsRenderingSettings;t.restoreCustomPlaybackStateOnAdBreakComplete=!0,t.enablePreloading=!0,this.manager=e.getAdsManager(this.player,t),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,e=>this.onAdError(e)),Object.keys(google.ima.AdEvent.Type).forEach(e=>{this.manager.addEventListener(google.ima.AdEvent.Type[e],e=>this.onAdEvent(e))}),this.trigger("loaded")}),e(this,"addCuePoints",()=>{x.empty(this.cuePoints)||this.cuePoints.forEach(e=>{if(0!==e&&-1!==e&&e<this.player.duration){const t=this.player.elements.progress;if(x.element(t)){const i=100/this.player.duration*e,s=q("span",{class:this.player.config.classNames.cues});s.style.left=`${i.toString()}%`,t.appendChild(s)}}})}),e(this,"onAdEvent",e=>{const{container:t}=this.player.elements,i=e.getAd(),s=e.getAdData();switch((e=>{se.call(this.player,this.player.media,`ads${e.replace(/_/g,"").toLowerCase()}`)})(e.type),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),i.isLinear()||(i.width=t.offsetWidth,i.height=t.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.player.ended?this.loadAds():this.loader.contentComplete();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:s.adError&&this.player.debug.warn(`Non-fatal ad error: ${s.adError.getMessage()}`)}}),e(this,"onAdError",e=>{this.cancel(),this.player.debug.warn("Ads error",e)}),e(this,"listeners",()=>{const{container:e}=this.player.elements;let t;this.player.on("canplay",()=>{this.addCuePoints()}),this.player.on("ended",()=>{this.loader.contentComplete()}),this.player.on("timeupdate",()=>{t=this.player.currentTime}),this.player.on("seeked",()=>{const e=this.player.currentTime;x.empty(this.cuePoints)||this.cuePoints.forEach((i,s)=>{t<i&&i<e&&(this.manager.discardAdBreak(),this.cuePoints.splice(s,1))})}),window.addEventListener("resize",()=>{this.manager&&this.manager.resize(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL)})}),e(this,"play",()=>{const{container:e}=this.player.elements;this.managerPromise||this.resumeContent(),this.managerPromise.then(()=>{this.manager.setVolume(this.player.volume),this.elements.displayContainer.initialize();try{this.initialized||(this.manager.init(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL),this.manager.start()),this.initialized=!0}catch(e){this.onAdError(e)}}).catch(()=>{})}),e(this,"resumeContent",()=>{this.elements.container.style.zIndex="",this.playing=!1,le(this.player.media.play())}),e(this,"pauseContent",()=>{this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()}),e(this,"cancel",()=>{this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()}),e(this,"loadAds",()=>{this.managerPromise.then(()=>{this.manager&&this.manager.destroy(),this.managerPromise=new Promise(e=>{this.on("loaded",e),this.player.debug.log(this.manager)}),this.initialized=!1,this.requestAds()}).catch(()=>{})}),e(this,"trigger",(e,...t)=>{const i=this.events[e];x.array(i)&&i.forEach(e=>{x.function(e)&&e.apply(this,t)})}),e(this,"on",(e,t)=>(x.array(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this)),e(this,"startSafetyTimer",(e,t)=>{this.player.debug.log(`Safety timer invoked from: ${t}`),this.safetyTimer=setTimeout(()=>{this.cancel(),this.clearSafetyTimer("startSafetyTimer()")},e)}),e(this,"clearSafetyTimer",e=>{x.nullOrUndefined(this.safetyTimer)||(this.player.debug.log(`Safety timer cleared from: ${e}`),clearTimeout(this.safetyTimer),this.safetyTimer=null)}),this.player=t,this.config=t.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise((e,t)=>{this.on("loaded",e),this.on("error",t)}),this.load()}get enabled(){const{config:e}=this;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!x.empty(e.publisherId)||x.url(e.tagUrl))}get tagUrl(){const{config:e}=this;if(x.url(e.tagUrl))return e.tagUrl;return`https://go.aniview.com/api/adserver6/vast/?${Ie({AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:e.publisherId})}`}}function at(e=0,t=0,i=255){return Math.min(Math.max(e,t),i)}function lt(e){const t=[];return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(e=>{const i={};e.split(/\r\n|\n|\r/).forEach(e=>{if(x.number(i.startTime)){if(!x.empty(e.trim())&&x.empty(i.text)){const t=e.trim().split("#xywh=");[i.text]=t,t[1]&&([i.x,i.y,i.w,i.h]=t[1].split(","))}}else{const t=e.match(/(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})( ?--> ?)(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})/);t&&(i.startTime=60*Number(t[1]||0)*60+60*Number(t[2])+Number(t[3])+Number(`0.${t[4]}`),i.endTime=60*Number(t[6]||0)*60+60*Number(t[7])+Number(t[8])+Number(`0.${t[9]}`))}}),i.text&&t.push(i)}),t}function rt(e,t){const i={};return e>t.width/t.height?(i.width=t.width,i.height=1/e*t.width):(i.height=t.height,i.width=e*t.height),i}class ot{constructor(t){e(this,"load",()=>{this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then(()=>{this.enabled&&(this.render(),this.determineContainerAutoSizing(),this.listeners(),this.loaded=!0)})}),e(this,"getThumbnails",()=>new Promise(e=>{const{src:t}=this.player.config.previewThumbnails;if(x.empty(t))throw new Error("Missing previewThumbnails.src config attribute");const i=()=>{this.thumbnails.sort((e,t)=>e.height-t.height),this.player.debug.log("Preview thumbnails",this.thumbnails),e()};if(x.function(t))t(e=>{this.thumbnails=e,i()});else{const e=(x.string(t)?[t]:t).map(e=>this.getThumbnail(e));Promise.all(e).then(i)}})),e(this,"getThumbnail",e=>new Promise(t=>{Ee(e,void 0,this.player.config.previewThumbnails.withCredentials).then(i=>{const s={frames:lt(i),height:null,urlPrefix:""};s.frames[0].text.startsWith("/")||s.frames[0].text.startsWith("http://")||s.frames[0].text.startsWith("https://")||(s.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));const n=new Image;n.onload=()=>{s.height=n.naturalHeight,s.width=n.naturalWidth,this.thumbnails.push(s),t()},n.src=s.urlPrefix+s.frames[0].text})})),e(this,"startMove",e=>{if(this.loaded&&x.event(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var t,i;const s=this.player.elements.progress.getBoundingClientRect(),n=100/s.width*(e.pageX-s.left);this.seekTime=this.player.media.duration*(n/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.textContent=Ne(this.seekTime);const a=null===(t=this.player.config.markers)||void 0===t||null===(i=t.points)||void 0===i?void 0:i.find(({time:e})=>e===Math.round(this.seekTime));a&&this.elements.thumb.time.insertAdjacentHTML("afterbegin",`${a.label}<br>`)}this.showImageAtCurrentTime()}}),e(this,"endMove",()=>{this.toggleThumbContainer(!1,!0)}),e(this,"startScrubbing",e=>{(x.nullOrUndefined(e.button)||!1===e.button||0===e.button)&&(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))}),e(this,"endScrubbing",()=>{this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):ie.call(this.player,this.player.media,"timeupdate",()=>{this.mouseDown||this.toggleScrubbingContainer(!1)})}),e(this,"listeners",()=>{this.player.on("play",()=>{this.toggleThumbContainer(!1,!0)}),this.player.on("seeked",()=>{this.toggleThumbContainer(!1)}),this.player.on("timeupdate",()=>{this.lastTime=this.player.media.currentTime})}),e(this,"render",()=>{this.elements.thumb.container=q("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=q("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);const e=q("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=q("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.imageContainer.appendChild(e),x.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=q("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)}),e(this,"destroy",()=>{this.elements.thumb.container&&this.elements.thumb.container.remove(),this.elements.scrubbing.container&&this.elements.scrubbing.container.remove()}),e(this,"showImageAtCurrentTime",()=>{this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();const e=this.thumbnails[0].frames.findIndex(e=>this.seekTime>=e.startTime&&this.seekTime<=e.endTime),t=e>=0;let i=0;this.mouseDown||this.toggleThumbContainer(t),t&&(this.thumbnails.forEach((t,s)=>{this.loadedImages.includes(t.frames[e].text)&&(i=s)}),e!==this.showingThumb&&(this.showingThumb=e,this.loadImage(i)))}),e(this,"loadImage",(e=0)=>{const t=this.showingThumb,i=this.thumbnails[e],{urlPrefix:s}=i,n=i.frames[t],a=i.frames[t].text,l=s+a;if(this.currentImageElement&&this.currentImageElement.dataset.filename===a)this.showImage(this.currentImageElement,n,e,t,a,!1),this.currentImageElement.dataset.index=t,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);const i=new Image;i.src=l,i.dataset.index=t,i.dataset.filename=a,this.showingThumbFilename=a,this.player.debug.log(`Loading image: ${l}`),i.onload=()=>this.showImage(i,n,e,t,a,!0),this.loadingImage=i,this.removeOldImages(i)}}),e(this,"showImage",(e,t,i,s,n,a=!0)=>{this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${a}`),this.setImageSizeAndOffset(e,t),a&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(n)||this.loadedImages.push(n)),this.preloadNearby(s,!0).then(this.preloadNearby(s,!1)).then(this.getHigherQuality(i,e,t,n))}),e(this,"removeOldImages",e=>{Array.from(this.currentImageContainer.children).forEach(t=>{if("img"!==t.tagName.toLowerCase())return;const i=this.usingSprites?500:1e3;if(t.dataset.index!==e.dataset.index&&!t.dataset.deleting){t.dataset.deleting=!0;const{currentImageContainer:e}=this;setTimeout(()=>{e.removeChild(t),this.player.debug.log(`Removing thumb: ${t.dataset.filename}`)},i)}})}),e(this,"preloadNearby",(e,t=!0)=>new Promise(i=>{setTimeout(()=>{const s=this.thumbnails[0].frames[e].text;if(this.showingThumbFilename===s){let n;n=t?this.thumbnails[0].frames.slice(e):this.thumbnails[0].frames.slice(0,e).reverse();let a=!1;n.forEach(e=>{const t=e.text;if(t!==s&&!this.loadedImages.includes(t)){a=!0,this.player.debug.log(`Preloading thumb filename: ${t}`);const{urlPrefix:e}=this.thumbnails[0],s=e+t,n=new Image;n.src=s,n.onload=()=>{this.player.debug.log(`Preloaded thumb filename: ${t}`),this.loadedImages.includes(t)||this.loadedImages.push(t),i()}}}),a||i()}},300)})),e(this,"getHigherQuality",(e,t,i,s)=>{if(e<this.thumbnails.length-1){let n=t.naturalHeight;this.usingSprites&&(n=i.h),n<this.thumbContainerHeight&&setTimeout(()=>{this.showingThumbFilename===s&&(this.player.debug.log(`Showing higher quality thumb for: ${s}`),this.loadImage(e+1))},300)}}),e(this,"toggleThumbContainer",(e=!1,t=!1)=>{const i=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(i,e),!e&&t&&(this.showingThumb=null,this.showingThumbFilename=null)}),e(this,"toggleScrubbingContainer",(e=!1)=>{const t=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(t,e),e||(this.showingThumb=null,this.showingThumbFilename=null)}),e(this,"determineContainerAutoSizing",()=>{(this.elements.thumb.imageContainer.clientHeight>20||this.elements.thumb.imageContainer.clientWidth>20)&&(this.sizeSpecifiedInCSS=!0)}),e(this,"setThumbContainerSizeAndPos",()=>{const{imageContainer:e}=this.elements.thumb;if(this.sizeSpecifiedInCSS){if(e.clientHeight>20&&e.clientWidth<20){const t=Math.floor(e.clientHeight*this.thumbAspectRatio);e.style.width=`${t}px`}else if(e.clientHeight<20&&e.clientWidth>20){const t=Math.floor(e.clientWidth/this.thumbAspectRatio);e.style.height=`${t}px`}}else{const t=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);e.style.height=`${this.thumbContainerHeight}px`,e.style.width=`${t}px`}this.setThumbContainerPos()}),e(this,"setThumbContainerPos",()=>{const e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),{container:i}=this.elements.thumb,s=t.left-e.left+10,n=t.right-e.left-i.clientWidth-10,a=this.mousePosX-e.left-i.clientWidth/2,l=at(a,s,n);i.style.left=`${l}px`,i.style.setProperty("--preview-arrow-offset",a-l+"px")}),e(this,"setScrubbingContainerSize",()=>{const{width:e,height:t}=rt(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight});this.elements.scrubbing.container.style.width=`${e}px`,this.elements.scrubbing.container.style.height=`${t}px`}),e(this,"setImageSizeAndOffset",(e,t)=>{if(!this.usingSprites)return;const i=this.thumbContainerHeight/t.h;e.style.height=e.naturalHeight*i+"px",e.style.width=e.naturalWidth*i+"px",e.style.left=`-${t.x*i}px`,e.style.top=`-${t.y*i}px`}),this.player=t,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}get enabled(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}get currentImageContainer(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}get usingSprites(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}get thumbAspectRatio(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}get thumbContainerHeight(){if(this.mouseDown){const{height:e}=rt(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight});return e}return this.sizeSpecifiedInCSS?this.elements.thumb.imageContainer.clientHeight:Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}get currentImageElement(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement}set currentImageElement(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e}}const ct={insertElements(e,t){x.string(t)?D(e,this.media,{src:t}):x.array(t)&&t.forEach(t=>{D(e,this.media,t)})},change(e){$(e,"sources.length")?(fe.cancelRequests.call(this),this.destroy(()=>{this.options.quality=[],H(this.media),this.media=null,x.element(this.elements.container)&&this.elements.container.removeAttribute("class");const{sources:t,type:i}=e,[{provider:s=qe.html5,src:n}]=t,a="html5"===s?i:"div",l="html5"===s?{}:{src:n};Object.assign(this,{provider:s,type:i,supported:J.check(i,s,this.config.playsinline),media:q(a,l)}),this.elements.container.appendChild(this.media),x.boolean(e.autoplay)&&(this.config.autoplay=e.autoplay),this.isHTML5&&(this.config.crossorigin&&this.media.setAttribute("crossorigin",""),this.config.autoplay&&this.media.setAttribute("autoplay",""),x.empty(e.poster)||(this.poster=e.poster),this.config.loop.active&&this.media.setAttribute("loop",""),this.config.muted&&this.media.setAttribute("muted",""),this.config.playsinline&&this.media.setAttribute("playsinline","")),Be.addStyleHook.call(this),this.isHTML5&&ct.insertElements.call(this,"source",t),this.config.title=e.title,st.setup.call(this),this.isHTML5&&Object.keys(e).includes("tracks")&&ct.insertElements.call(this,"track",e.tracks),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&Be.build.call(this),this.isHTML5&&this.media.load(),x.empty(e.previewThumbnails)||(Object.assign(this.config.previewThumbnails,e.previewThumbnails),this.previewThumbnails&&this.previewThumbnails.loaded&&(this.previewThumbnails.destroy(),this.previewThumbnails=null),this.config.previewThumbnails.enabled&&(this.previewThumbnails=new ot(this))),this.fullscreen.update()},!0)):this.debug.warn("Invalid source format")}};class ut{constructor(t,i){if(e(this,"play",()=>x.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then(()=>this.ads.play()).catch(()=>le(this.media.play())),this.media.play()):null),e(this,"pause",()=>this.playing&&x.function(this.media.pause)?this.media.pause():null),e(this,"togglePlay",e=>(x.boolean(e)?e:!this.playing)?this.play():this.pause()),e(this,"stop",()=>{this.isHTML5?(this.pause(),this.restart()):x.function(this.media.stop)&&this.media.stop()}),e(this,"restart",()=>{this.currentTime=0}),e(this,"rewind",e=>{this.currentTime-=x.number(e)?e:this.config.seekTime}),e(this,"forward",e=>{this.currentTime+=x.number(e)?e:this.config.seekTime}),e(this,"increaseVolume",e=>{const t=this.media.muted?0:this.volume;this.volume=t+(x.number(e)?e:0)}),e(this,"decreaseVolume",e=>{this.increaseVolume(-e)}),e(this,"airplay",()=>{J.airplay&&this.media.webkitShowPlaybackTargetPicker()}),e(this,"toggleControls",e=>{if(this.supported.ui&&!this.isAudio){const t=W(this.elements.container,this.config.classNames.hideControls),i=void 0===e?void 0:!e,s=B(this.elements.container,this.config.classNames.hideControls,i);if(s&&x.array(this.config.controls)&&this.config.controls.includes("settings")&&!x.empty(this.config.settings)&&xe.toggleMenu.call(this,!1),s!==t){const e=s?"controlshidden":"controlsshown";se.call(this,this.media,e)}return!s}return!1}),e(this,"on",(e,t)=>{ee.call(this,this.elements.container,e,t)}),e(this,"once",(e,t)=>{ie.call(this,this.elements.container,e,t)}),e(this,"off",(e,t)=>{te(this.elements.container,e,t)}),e(this,"destroy",(e,t=!1)=>{if(!this.ready)return;const i=()=>{document.body.style.overflow="",this.embed=null,t?(Object.keys(this.elements).length&&(H(this.elements.buttons.play),H(this.elements.captions),H(this.elements.controls),H(this.elements.wrapper),this.elements.buttons.play=null,this.elements.captions=null,this.elements.controls=null,this.elements.wrapper=null),x.function(e)&&e()):(ne.call(this),fe.cancelRequests.call(this),F(this.elements.original,this.elements.container),se.call(this,this.elements.original,"destroyed",!0),x.function(e)&&e.call(this.elements.original),this.ready=!1,setTimeout(()=>{this.elements=null,this.media=null},200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(Be.toggleNativeControls.call(this,!0),i()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&x.function(this.embed.destroy)&&this.embed.destroy(),i()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(i),setTimeout(i,200))}),e(this,"supports",e=>J.mime.call(this,e)),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=J.touch,this.media=t,x.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||x.nodeList(this.media)||x.array(this.media))&&(this.media=this.media[0]),this.config=_({},_e,ut.defaults,i||{},(()=>{try{return JSON.parse(this.media.getAttribute("data-plyr-config"))}catch{return{}}})()),this.elements={container:null,fullscreen:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Fe(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",J),x.nullOrUndefined(this.media)||!x.element(this.media))return void this.debug.error("Setup failed: no suitable element passed");if(this.media.plyr)return void this.debug.warn("Target already setup");if(!this.config.enabled)return void this.debug.error("Setup failed: disabled by config");if(!J.check().api)return void this.debug.error("Setup failed: no support");const s=this.media.cloneNode(!0);s.autoplay=!1,this.elements.original=s;const n=this.media.tagName.toLowerCase();let a=null,l=null;switch(n){case"div":if(a=this.media.querySelector("iframe"),x.element(a)){if(l=Le(a.getAttribute("src")),this.provider=function(e){return/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?qe.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?qe.vimeo:null}(l.toString()),this.elements.container=this.media,this.media=a,this.elements.container.className="",l.search.length){const e=["1","true"];e.includes(l.searchParams.get("autoplay"))&&(this.config.autoplay=!0),e.includes(l.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=e.includes(l.searchParams.get("playsinline")),this.config.youtube.hl=l.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(x.empty(this.provider)||!Object.values(qe).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=He;break;case"video":case"audio":this.type=n,this.provider=qe.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=J.check(this.type,this.provider),this.supported.api?(this.eventListeners=[],this.listeners=new We(this),this.storage=new Se(this),this.media.plyr=this,x.element(this.elements.container)||(this.elements.container=q("div"),O(this.media,this.elements.container)),Be.migrateStyles.call(this),Be.addStyleHook.call(this),st.setup.call(this),this.config.debug&&ee.call(this,this.elements.container,this.config.events.join(" "),e=>{this.debug.log(`event: ${e.type}`)}),this.fullscreen=new Ve(this),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&Be.build.call(this),this.listeners.container(),this.listeners.global(),this.config.ads.enabled&&(this.ads=new nt(this)),this.isHTML5&&this.config.autoplay&&this.once("canplay",()=>le(this.play())),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new ot(this))):this.debug.error("Setup failed: no support")}get isHTML5(){return this.provider===qe.html5}get isEmbed(){return this.isYouTube||this.isVimeo}get isYouTube(){return this.provider===qe.youtube}get isVimeo(){return this.provider===qe.vimeo}get isVideo(){return this.type===He}get isAudio(){return this.type===De}get playing(){return Boolean(this.ready&&!this.paused&&!this.ended)}get paused(){return Boolean(this.media.paused)}get stopped(){return Boolean(this.paused&&0===this.currentTime)}get ended(){return Boolean(this.media.ended)}set currentTime(e){if(!this.duration)return;const t=x.number(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log(`Seeking to ${this.currentTime} seconds`)}get currentTime(){return Number(this.media.currentTime)}get buffered(){const{buffered:e}=this.media;return x.number(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}get seeking(){return Boolean(this.media.seeking)}get duration(){const e=Number.parseFloat(this.config.duration),t=(this.media||{}).duration,i=x.number(t)&&t!==1/0?t:0;return e||i}set volume(e){let t=e;x.string(t)&&(t=Number(t)),x.number(t)||(t=this.storage.get("volume")),x.number(t)||({volume:t}=this.config),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!x.empty(e)&&this.muted&&t>0&&(this.muted=!1)}get volume(){return Number(this.media.volume)}set muted(e){let t=e;x.boolean(t)||(t=this.storage.get("muted")),x.boolean(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t}get muted(){return Boolean(this.media.muted)}get hasAudio(){return!this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}set speed(e){let t=null;x.number(e)&&(t=e),x.number(t)||(t=this.storage.get("speed")),x.number(t)||(t=this.config.speed.selected);const{minimumSpeed:i,maximumSpeed:s}=this;t=at(t,i,s),this.config.speed.selected=t,setTimeout(()=>{this.media&&(this.media.playbackRate=t)},0)}get speed(){return Number(this.media.playbackRate)}get minimumSpeed(){return this.isYouTube?Math.min(...this.options.speed):this.isVimeo?.5:.0625}get maximumSpeed(){return this.isYouTube?Math.max(...this.options.speed):this.isVimeo?2:16}set quality(e){const t=this.config.quality,i=this.options.quality;if(!i.length)return;let s=[!x.empty(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(x.number),n=!0;if(!i.includes(s)){const e=oe(i,s);this.debug.warn(`Unsupported quality option: ${s}, using ${e} instead`),s=e,n=!1}t.selected=s,this.media.quality=s,n&&this.storage.set({quality:s})}get quality(){return this.media.quality}set loop(e){const t=x.boolean(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t}get loop(){return Boolean(this.media.loop)}set source(e){ct.change.call(this,e)}get source(){return this.media.currentSrc}get download(){const{download:e}=this.config.urls;return x.url(e)?e:this.source}set download(e){x.url(e)&&(this.config.urls.download=e,xe.setDownloadUrl.call(this))}set poster(e){this.isVideo?Be.setPoster.call(this,e,!1).catch(()=>{}):this.debug.warn("Poster can only be set for video")}get poster(){return this.isVideo?this.media.getAttribute("poster")||this.media.getAttribute("data-poster"):null}get ratio(){if(!this.isVideo)return null;const e=de(me.call(this));return x.array(e)?e.join(":"):e}set ratio(e){this.isVideo?x.string(e)&&he(e)?(this.config.ratio=de(e),pe.call(this)):this.debug.error(`Invalid aspect ratio specified (${e})`):this.debug.warn("Aspect ratio can only be set for video")}set autoplay(e){this.config.autoplay=x.boolean(e)?e:this.config.autoplay}get autoplay(){return Boolean(this.config.autoplay)}toggleCaptions(e){$e.toggle.call(this,e,!1)}set currentTrack(e){$e.set.call(this,e,!1),$e.setup.call(this)}get currentTrack(){const{toggled:e,currentTrack:t}=this.captions;return e?t:-1}set language(e){$e.setLanguage.call(this,e,!1)}get language(){return($e.getCurrentTrack.call(this)||{}).language}set pip(e){if(!J.pip)return;const t=x.boolean(e)?e:!this.pip;x.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?Oe:je),x.function(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture())}get pip(){return J.pip?x.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Oe:null}setPreviewThumbnails(e){this.previewThumbnails&&this.previewThumbnails.loaded&&(this.previewThumbnails.destroy(),this.previewThumbnails=null),Object.assign(this.config.previewThumbnails,e),this.config.previewThumbnails.enabled&&(this.previewThumbnails=new ot(this))}static supported(e,t){return J.check(e,t)}static loadSprite(e,t){return Pe(e,t)}static setup(e,t={}){let i=null;return x.string(e)?i=Array.from(document.querySelectorAll(e)):x.nodeList(e)?i=Array.from(e):x.array(e)&&(i=e.filter(x.element)),x.empty(i)?null:i.map(e=>new ut(e,t))}}var ht;return ut.defaults=(ht=_e,JSON.parse(JSON.stringify(ht))),ut});

//# sourceMappingURL=plyr.min.js.map


