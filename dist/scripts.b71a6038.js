// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts.js":[function(require,module,exports) {
var teamInfo = [{
  name: "Chris",
  color: "rgba(157,89,66)",
  tea: true
}, {
  name: "Alex",
  color: "rgba(0,0,0)",
  tea: false
}, {
  name: "Aaron",
  color: "rgb(119,56,41)",
  tea: true
}, {
  name: "Aomyi",
  color: "rgba(226,136,100)",
  tea: true
}, {
  name: "Steve",
  color: "rgb(119,56,41)",
  tea: true
}, {
  name: "Mark",
  color: "rgb(0,0,0)",
  tea: false
}, {
  name: "Michael",
  color: "rgb(195,111,77)",
  tea: true
}];

function createTeaSvg(color) {
  var newItem = " <svg\n  width=\"100%\"\n  height=\"100%\"\n  viewBox=\"0 0 905 905\"\n  version=\"1.1\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n  xml:space=\"preserve\"\n  xmlns:serif=\"http://www.serif.com/\"\n  style=\"fill-rule: evenodd; clip-rule: evenodd; stroke-miterlimit: 10\"\n  class=\"tea-cup\"\n>\n  <g transform=\"matrix(0,-4.16667,-4.16667,0,452.425,0)\">\n    <path\n      d=\"M-108.582,-108.582C-168.55,-108.582 -217.164,-59.968 -217.164,0C-217.164,59.968 -168.55,108.582 -108.582,108.582C-48.614,108.582 0,59.968 0,0C0,-59.968 -48.614,-108.582 -108.582,-108.582\"\n      style=\"fill: rgb(237, 238, 239); fill-rule: nonzero\"\n    />\n  </g>\n  <g transform=\"matrix(0,-4.16667,-4.16667,0,452.425,156.525)\">\n    <circle\n      cx=\"-71.016\"\n      cy=\"0\"\n      r=\"71.016\"\n      style=\"fill: none; stroke: rgb(104, 105, 105); stroke-width: 1px\"\n    />\n  </g>\n  <g transform=\"matrix(4.16667,0,0,4.16667,880.105,193.207)\">\n    <path\n      d=\"M0,150.328L-41.66,110.722C-42.622,109.806 -43.716,109.111 -44.878,108.628C-20.88,79 -23.322,35.419 -51.431,8.695C-80.987,-19.404 -127.727,-18.223 -155.827,11.333C-183.926,40.889 -182.745,87.629 -153.189,115.729C-126.962,140.663 -87.208,142.539 -58.951,121.995C-58.412,123.511 -57.523,124.925 -56.284,126.104L-14.624,165.71C-10.394,169.732 -3.643,169.561 0.379,165.331C4.401,161.101 4.23,154.35 0,150.328\"\n      style=\"fill: white; fill-rule: nonzero\"\n    />\n  </g>\n  <g\n    transform=\"matrix(2.87093,-3.01975,-3.01975,-2.87093,700.105,439.971)\"\n  >\n    <path\n      d=\"M-42.894,-18.405C-75.581,-18.406 -102.079,8.093 -102.079,40.78C-102.08,73.467 -75.581,99.965 -42.894,99.965C-10.207,99.966 16.291,73.467 16.291,40.78C16.292,8.093 -10.207,-18.405 -42.894,-18.405\"\n      style=\"fill: ".concat(color, "; fill-rule: nonzero\"\n    />\n  </g>\n  <g transform=\"matrix(4.16667,0,0,4.16667,297.765,386.617)\">\n    <path\n      d=\"M0,-7.609C22.522,-31.299 59.984,-32.245 83.674,-9.723C88.87,-4.783 92.972,0.876 95.972,6.951C94.082,-5.614 88.152,-17.667 78.231,-27.1C54.541,-49.622 17.079,-48.676 -5.443,-24.986C-23.025,-6.493 -26.304,20.393 -15.627,42.013C-18.249,24.578 -13.089,6.159 0,-7.609\"\n      style=\"fill: ").concat(color, "; fill-rule: nonzero\"\n    />\n  </g>\n</svg>");
  return newItem;
}

function createCoffeeSvg() {
  return "<svg viewBox=\"0 0 215.46719 231.64229\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"tea-cup\">\n  <defs>\n   <linearGradient id=\"d\">\n    <stop stop-color=\"#e6e6e6\" offset=\"0\"/>\n    <stop stop-color=\"#e6e6e6\" stop-opacity=\"0\" offset=\"1\"/>\n   </linearGradient>\n   <linearGradient id=\"a\">\n    <stop stop-color=\"#fff\" offset=\"0\"/>\n    <stop stop-color=\"#fff\" stop-opacity=\"0\" offset=\"1\"/>\n   </linearGradient>\n   <linearGradient id=\"e\">\n    <stop stop-color=\"#cbf9ff\" stop-opacity=\".66327\" offset=\"0\"/>\n    <stop stop-color=\"#fff2f2\" stop-opacity=\"0\" offset=\"1\"/>\n   </linearGradient>\n   <linearGradient id=\"b\">\n    <stop stop-color=\"#999\" offset=\"0\"/>\n    <stop stop-color=\"#999\" stop-opacity=\"0\" offset=\"1\"/>\n   </linearGradient>\n   <linearGradient id=\"q\" x1=\"-343.16\" x2=\"-140.67\" y1=\"652.24\" y2=\"588.1\" gradientTransform=\"matrix(.22641 0 .037977 .22082 113.79 -6.2884)\" gradientUnits=\"userSpaceOnUse\">\n    <stop stop-color=\"#999\" offset=\"0\"/>\n    <stop stop-color=\"#fff\" stop-opacity=\".49804\" offset=\".5\"/>\n    <stop stop-color=\"#999\" offset=\"1\"/>\n   </linearGradient>\n   <linearGradient id=\"s\" x1=\"300.66\" x2=\"313.02\" y1=\"-95.044\" y2=\"-95.298\" gradientTransform=\"matrix(.46981 .5587 -.11703 .72053 -50.501 21.644)\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#d\"/>\n   <linearGradient id=\"r\" x1=\"179.97\" x2=\"184.48\" gradientTransform=\"matrix(.72998 0 .17708 .70911 -53.455 20.031)\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#d\"/>\n   <linearGradient id=\"p\" x1=\"166.52\" x2=\"162.22\" y1=\"-51.69\" y2=\"130.8\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#e\"/>\n   <linearGradient id=\"o\" x1=\"109.95\" x2=\"151.52\" y1=\"21.308\" y2=\"121\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#e\"/>\n   <linearGradient id=\"n\" x1=\"678.74\" x2=\"564.29\" y1=\"318.04\" y2=\"253.79\" gradientTransform=\"matrix(-.21042 0 0 .21042 244.84 46.36)\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#b\"/>\n   <linearGradient id=\"m\" x1=\"230.61\" x2=\"169.85\" y1=\"106.07\" y2=\"102.77\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#b\"/>\n   <linearGradient id=\"l\" x1=\"96.204\" x2=\"139.19\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#b\"/>\n   <radialGradient id=\"k\" cx=\"66.016\" cy=\"302.75\" r=\"18.359\" gradientTransform=\"matrix(1 0 0 .87234 0 38.649)\" gradientUnits=\"userSpaceOnUse\">\n    <stop stop-color=\"#e3b36a\" offset=\"0\"/>\n    <stop stop-color=\"#e3b36a\" stop-opacity=\"0\" offset=\"1\"/>\n   </radialGradient>\n   <radialGradient id=\"f\" cx=\"137.38\" cy=\"250.81\" r=\"117.18\" fx=\"118.3\" fy=\"227.9\" gradientTransform=\"matrix(1 0 0 .3319 0 167.56)\" gradientUnits=\"userSpaceOnUse\">\n    <stop stop-opacity=\".69072\" offset=\"0\"/>\n    <stop stop-opacity=\"0\" offset=\"1\"/>\n   </radialGradient>\n   <radialGradient id=\"j\" cx=\"101.51\" cy=\"172.5\" r=\"31.117\" fx=\"103.98\" fy=\"159.87\" gradientTransform=\"matrix(-.88064 -1.4631 1.2303 -.74053 -22.655 403.87)\" gradientUnits=\"userSpaceOnUse\">\n    <stop stop-color=\"#e6e6e6\" offset=\"0\"/>\n    <stop stop-color=\"#e6e6e6\" offset=\".5\"/>\n    <stop stop-color=\"#e6e6e6\" offset=\".75\"/>\n    <stop stop-color=\"#e6e6e6\" stop-opacity=\"0\" offset=\"1\"/>\n   </radialGradient>\n   <radialGradient id=\"g\" cx=\"-240.85\" cy=\"-2034.8\" r=\"127.14\" fx=\"-212.82\" fy=\"-1987.7\" gradientTransform=\"matrix(-.65815 -.17586 .5135 -.16844 642.11 -2400.2)\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#a\"/>\n   <radialGradient id=\"c\" cx=\"-520.71\" cy=\"-2546.9\" r=\"26.429\" gradientTransform=\"matrix(1 0 0 .83784 0 -413.01)\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#a\"/>\n   <radialGradient id=\"i\" cx=\"-265.86\" cy=\"-2031.6\" r=\"127.14\" fx=\"-314.61\" fy=\"-2371.3\" gradientTransform=\"matrix(-.26233 .0079604 -.0072074 -.049817 85.475 33.733)\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#a\"/>\n   <radialGradient id=\"h\" cx=\"-309.29\" cy=\"-2076.2\" r=\"150.71\" fx=\"-312.14\" fy=\"-2205.1\" gradientTransform=\"matrix(.33282 -.00057844 -.0015784 -.363 268.82 -588.85)\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#a\"/>\n  </defs>\n  <g transform=\"translate(-44.709 -17.718)\">\n   <path transform=\"matrix(.70503 0 0 .94449 58.38 -32.06)\" d=\"m278.35 250.81a140.97 38.891 0 1 1 -281.94 0 140.97 38.891 0 1 1 281.94 0z\" fill=\"url(#f)\" fill-rule=\"evenodd\"/>\n   <path transform=\"matrix(3.513 0 0 2.1336 46.53 -212.52)\" d=\"m45.714 193.08a11.429 12.143 0 1 1 -5e-5 -0.03729l-11.429 0.03729z\" fill=\"#999\" fill-rule=\"evenodd\"/>\n   <g transform=\"matrix(.21042 0 0 .21042 87.788 47.563)\" fill=\"#ccc\">\n    <g fill=\"#ccc\" fill-rule=\"evenodd\">\n     <path d=\"m374.91 68.393c-190.83 0-345.72 79.763-345.72 178.06 0 14.227 3.2785 28.079 9.4062 41.344l131.97 420.41c14.369 70.803 100.09 125.25 203.59 125.25 31.381 0 61.128-5.005 87.747-13.953 61.102-20.54 105.73-61.857 115.82-111.11h0.1875l137.12-426.09h-1.4062c4.5979-11.577 7-23.57 7-35.844 0-98.3-154.88-178.06-345.72-178.06z\"/>\n     <path d=\"m713.33 283.59 3.0538-12.644 2.4244-14.532\" stroke=\"#dadada\" stroke-width=\"2.5392\"/>\n    </g>\n   </g>\n   <path transform=\"matrix(.18723 0 0 .091773 403.51 114.52)\" d=\"m-1434.7 145.17c251.14 145.14 553.42-31.266 544.04-321.18-9.5623-295.49-308.43-457.47-564.53-309.75-251.26 144.93-249.63 494.91 6.1299 631.74 260.68 139.46 550.39-38.378 550.52-334.02 0.12268-290.06-303.79-463.64-550.17-310.56-251.12 156.03-241.96 495.84 14.015 643.78z\" fill=\"#fff\" fill-rule=\"evenodd\"/>\n   <path d=\"m96.204 108.48s5.5757 10.446 18.637 18.336c21.85 8.9546 23.447 7.8155 23.447 7.8155l9.9197 85.069s-7.9232-2.9466-13.635-6.9295-9.812-12.309-9.812-12.309l-28.557-91.983z\" fill=\"url(#l)\" fill-rule=\"evenodd\"/>\n   <path d=\"m124.23 210.98 42.791 10.656 50.4-11.257 1.4264-74.849s-34.385 2.9807-53.878 3.1119c-20.92 0-45.019-3.7131-45.019-3.7131l4.2792 76.051z\" fill=\"url(#h)\" fill-rule=\"evenodd\"/>\n   <path d=\"m163.24 149.36c-14.768 0-26.753-8.4841-26.753-18.938s12.426-22.519 26.753-18.938l51.703 12.926c-17.861 8.728-28.706 21.952-51.703 24.95z\" fill=\"url(#i)\" fill-rule=\"evenodd\"/>\n   <path transform=\"matrix(.20599 .012887 0 .4087 212.13 900.79)\" d=\"m-124.29-2016.9a127.14 45 0 1 1 -7.7e-4 -0.1566l-127.14 0.1566z\" fill=\"url(#g)\" fill-rule=\"evenodd\"/>\n   <path d=\"m199.89 86.522c-30.689-2.4048-92.866 5.3619-94.862 19.768 5.5434 11.486 33.201 23.833 62.862 23.833 30.089 0 65.141-16.234 62.588-27.638-0.14374 3.182-0.62356-12.657-30.588-15.964z\" fill=\"url(#m)\" fill-rule=\"evenodd\"/>\n   <path transform=\"matrix(.23847 0 0 .046029 232.38 249.72)\" d=\"m-192.86-2513.4a64.286 45.714 0 1 1 -3e-4 -0.1403l-64.285 0.1403z\" fill=\"#fff\" fill-rule=\"evenodd\"/>\n   <path d=\"m161.18 142.51h20.606l-8.7318 69.303-9.2712-3.0012-2.603-66.301z\" fill=\"#fff\" fill-rule=\"evenodd\" stroke=\"#fff\" stroke-dasharray=\"0.29458349, 0.29458349\" stroke-width=\"2.9458\"/>\n   <path transform=\"matrix(.12859 0 0 .020065 196.6 115.71)\" d=\"m-192.86-2513.4a64.286 45.714 0 1 1 -3e-4 -0.1403l-64.285 0.1403z\" fill=\"#fff\" fill-rule=\"evenodd\"/>\n   <path d=\"m153.78 67.885c26.455 0 61.917 17.625 71.45 31.673 1.3089 1.9289 2.1289 3.7903 2.3698 5.5295-5.5433 11.486-33.201 23.833-62.862 23.833-30.089 0-63.638-17.136-61.085-28.54 4.0515-15.455 28.279-17.767 50.127-32.496z\" fill=\"url(#n)\" fill-rule=\"evenodd\"/>\n   <g transform=\"matrix(.72998 0 0 .72998 9.9506 -110.66)\" fill-rule=\"evenodd\">\n    <path d=\"m216.61 280.46c-33.143 0-55.794 10.192-73.96 26.297 10.426 11.764 39.846-11.906 73.006-11.906 34.444 0 67.297 23.561 76.675 11.083-20.543-18.475-41.235-25.474-75.721-25.474z\" fill=\"#be8124\"/>\n    <path d=\"m215.91 283.91c-32.24 0-53.896 10.619-70.407 25.603 14.562 10.615 36.606 17.607 68.863 17.607 33.506 0 59.754-6.8094 75.23-19.225-18.896-17.282-42.741-23.985-73.686-23.985z\" fill=\"#28170b\"/>\n   </g>\n   <path transform=\"matrix(1.0561 0 0 .72998 88.7 -113.15)\" d=\"m84.375 302.75a18.359 16.016 0 1 1 -9e-5 -0.04918l-18.359 0.04918z\" fill=\"url(#k)\" fill-rule=\"evenodd\" opacity=\".5\"/>\n   <path d=\"m150.4 24.9c30.422 11.706 5.255 91.387 3.4218 96.097-10.604-5.9363-8.8116-44.028-24.815-40.764-25.264 5.1521 39.554-34.487 21.394-55.333z\" fill=\"url(#o)\" fill-rule=\"evenodd\"/>\n   <path d=\"m146.79 38.863c7.1939-24.17-14.31 38.357-27.316 54.133 10.931 27.67 36.119 21.827 47.051 44.431 0 0-27.76-39.342-19.719-56.426s-0.01531-42.138-0.01531-42.138z\" fill=\"url(#p)\" fill-rule=\"evenodd\"/>\n   <path transform=\"matrix(.1449 -.056785 .014618 .083536 206.83 333.76)\" d=\"m-494.29-2546.9a26.429 22.143 0 1 1 -1.3e-4 -0.068l-26.428 0.068z\" fill=\"url(#c)\" fill-rule=\"evenodd\"/>\n   <path d=\"m73.089 107.46c-6.18 1.8163-16.234 8.6577-16.753 22.434 0.33514 9.7619 7.5471 22.021 22.095 25.045 15.033 3.1253 27.96-8.6711 25.549-22.688-1.0631-6.1812 1.0554-5.4905-2.3542-10.342-0.536-0.76262-3.1731-9.1731-4.5289-11.565-0.49762-0.87783-0.25445 0.83036-0.60954 1.3454-0.60713 0.31337-1.2024-0.0307-1.6931-0.43462-3.5578-2.9286-11.412-6.0923-21.705-3.7947zm4.0426 7.8922c9.8195 0 18.567 4.2466 20.133 13.354s-6.697 18.523-16.685 15.875c-11.512-3.0525-11.468-10.362-11.604-11.617-1.0497-9.6248-1.6633-17.611 8.1562-17.611z\" fill=\"url(#q)\" fill-rule=\"evenodd\"/>\n   <path d=\"m81.78 112.33c-13.381 0.36171-24.785 11.388-21.991 24.933 5.1047 20.806 25.144 18.614 38.552 29.792 13.019 13.394 18.979 25.686 18.979 25.686l4.1518 2.4865c-5.1319-21.781-10.584-43.486-16.105-65.173-3.4336-13.642-8.2575-17.458-22.287-17.725-0.43843-0.00833-0.86864-0.01166-1.3003 0zm2.1752 6.9054c9.7355-1e-5 17.526 5.6465 18.378 14.606s-6.3696 16.242-16.105 16.242-16.294-6.4758-17.146-15.435 5.137-15.413 14.873-15.413z\" fill=\"url(#j)\" fill-rule=\"evenodd\" stroke=\"#dadada\" stroke-width=\".06871\"/>\n   <path transform=\"matrix(.1449 -.056785 .014618 .083536 186.67 297.47)\" d=\"m-494.29-2546.9a26.429 22.143 0 1 1 -1.3e-4 -0.068l-26.428 0.068z\" fill=\"url(#c)\" fill-rule=\"evenodd\"/>\n   <path d=\"m101.73 120.43s2.9074 3.2437 3.0959 3.4277c13.38 13.056 18.68 71.78 18.68 71.78l-2.2894-0.60488-19.487-74.603z\" fill=\"url(#r)\" fill-rule=\"evenodd\"/>\n   <path d=\"m98.368 116.31s1.5026 0.86544 3.1846 2.6716c1.6325 1.7529 4.2493 5.2588 4.2493 5.2588l1.9107 2.9311-6.9299-7.8296-2.4148-3.0319z\" fill=\"url(#s)\" fill-rule=\"evenodd\"/>\n   <path d=\"m84.533 159.03c4.4438 1.8805 8.8709 4.0157 12.803 7.2364 13.632 13.662 20.154 26.2 20.154 26.2l4.2655 2.5362c-3.313-12.011-6.7314-23.998-10.19-35.973h-27.032z\" fill=\"#e6e6e6\" fill-rule=\"evenodd\"/>\n  </g>\n </svg>";
} //Start functionality


var teaGrid = document.querySelector(".tea-grid");
teamInfo.forEach(function (teamMember) {
  var item = document.createElement("div");
  item.classList.add("tea-grid-item");

  if (teamMember.tea) {
    var svg = createTeaSvg(teamMember.color);
    var rest = "<p class=\"tea-text\">".concat(teamMember.name, "</p>");
    item.innerHTML = svg + rest;
    teaGrid.appendChild(item);
  } else {
    var _svg = createCoffeeSvg();

    var _rest = "<p class=\"tea-text coffee\">".concat(teamMember.name, "</p>");

    item.innerHTML = _svg + _rest;
    teaGrid.appendChild(item);
  }
});
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54322" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts.js"], null)
//# sourceMappingURL=/scripts.b71a6038.js.map