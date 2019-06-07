var bluegenesToolHomology=function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){"use strict";r.r(n),r.d(n,"main",function(){return l});var t=5;function o(e){return e.symbol||e.primaryIdentifier||e.secondaryIdentifier}function a(e,n){var r=Array.isArray(n)?"&externalids=".concat(n.join(",")):"&externalid=".concat(n);return e.concat("/portal.do","?class=Gene",r)}var i={};function c(e,n,r){var t=document.createElement("div");t.className="homology-mine-view";var o=document.createElement("span"),a=document.createTextNode(n.name);if(o.appendChild(a),o.style.color=n.colors&&n.colors.header&&n.colors.header.main||"#000",t.appendChild(o),r){var c=document.createElement("i");c.appendChild(document.createTextNode("Loading...")),t.appendChild(c)}i[n.namespace]=o,e.appendChild(t)}function u(e,n,r,u){var l=new imjs.Service({root:u.url}),d={from:"Gene",select:["secondaryIdentifier","symbol","primaryIdentifier","organism.name","organism.shortName"],orderBy:[{path:"secondaryIdentifier",direction:"ASC"}],where:[{path:"homologues.homologue",op:"LOOKUP",value:r,extraValue:"",code:"A"}]};c(e,u,!0),l.records(d).then(function(e){!function(e,n,r){var u=i[e.namespace].parentNode,l=r.filter(n(e));if(l.length){var d=u.parentNode;if(d.removeChild(u),c(d,e,!1),u=i[e.namespace].parentNode,l.slice(0,t).forEach(function(n){var r=o(n),t=document.createElement("a");t.href=a(e.url,r),t.target="_blank";var i=r.concat(" (",n.organism.shortName,")");t.appendChild(document.createTextNode(i)),u.appendChild(t)}),l.length>t){var s=document.createElement("a"),f=l.map(o);s.className="homology-show-all",s.href=a(e.url,f),s.target="_blank";var m="Show all ".concat("(",l.length,"+)");s.appendChild(document.createTextNode(m)),u.appendChild(s)}}else u.parentNode.removeChild(u)}(u,n,e)})}function l(e,n,r,t,a){var i,c;(i=n.root,c=r.value,new Promise(function(e){var n=new imjs.Service({root:i}),r={from:"Gene",select:["symbol","primaryIdentifier","secondaryIdentifier","organism.name"],orderBy:[{path:"symbol",direction:"ASC"}],where:[{path:"id",op:"=",value:c,code:"A"}]};n.records(r).then(function(n){const r=o(n[0]),t=n[0].organism.name;e([r,t])})})).then(function(r){var t,o=r[0],a=r[1];(t=n.root,new Promise(function(e){fetch("http://registry.intermine.org/service/namespace?url=".concat(encodeURIComponent(t))).then(function(e){return e.json()}).then(function(n){fetch("https://registry.intermine.org/service/instances").then(function(e){return e.json()}).then(function(r){e(r.instances.find(e=>e.namespace===n.namespace).neighbours)})})})).then(function(r){r.forEach(function(r){fetch("https://registry.intermine.org/service/instances").then(function(e){return e.json()}).then(function(t){var i=t.instances.filter(function(e){return e.neighbours.includes(r)}),c=function(e){return function(r){return e.url===n.root||r.organism.name!==a}};i.forEach(function(n){u(e,c,o,n)})})})})})}}]);