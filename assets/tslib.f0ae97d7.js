import{aO as H}from"./index.b1dedcb5.js";var L={exports:{}};/*! *****************************************************************************
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
***************************************************************************** */(function(J){var p,g,O,S,j,P,E,I,T,b,m,G,R,y,D,A,F,B,M,V,q,z,C;(function(u){var d=typeof H=="object"?H:typeof self=="object"?self:typeof this=="object"?this:{};u(t(d,t(J.exports)));function t(e,n){return e!==d&&(typeof Object.create=="function"?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(a,i){return e[a]=n?n(a,i):i}}})(function(u){var d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};p=function(t,e){d(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)},g=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},O=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(n[a[i]]=t[a[i]]);return n},S=function(t,e,n,a){var i=arguments.length,r=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(i<3?o(r):i>3?o(e,n,r):o(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},j=function(t,e){return function(n,a){e(n,a,t)}},P=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)},E=function(t,e,n,a){function i(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function c(s){try{f(a.next(s))}catch(v){o(v)}}function _(s){try{f(a.throw(s))}catch(v){o(v)}}function f(s){s.done?r(s.value):i(s.value).then(c,_)}f((a=a.apply(t,e||[])).next())})},I=function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,i,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(f){return function(s){return _([f,s])}}function _(f){if(a)throw new TypeError("Generator is already executing.");for(;n;)try{if(a=1,i&&(r=f[0]&2?i.return:f[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,f[1])).done)return r;switch(i=0,r&&(f=[f[0]&2,r.value]),f[0]){case 0:case 1:r=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,i=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!r||f[1]>r[0]&&f[1]<r[3])){n.label=f[1];break}if(f[0]===6&&n.label<r[1]){n.label=r[1],r=f;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(f);break}r[2]&&n.ops.pop(),n.trys.pop();continue}f=e.call(t,n)}catch(s){f=[6,s],i=0}finally{a=r=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},C=function(t,e,n,a){a===void 0&&(a=n),t[a]=e[n]},T=function(t,e){for(var n in t)n!=="default"&&!e.hasOwnProperty(n)&&(e[n]=t[n])},b=function(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],a=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&a>=t.length&&(t=void 0),{value:t&&t[a++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},m=function(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var a=n.call(t),i,r=[],o;try{for(;(e===void 0||e-- >0)&&!(i=a.next()).done;)r.push(i.value)}catch(c){o={error:c}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return r},G=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(m(arguments[e]));return t},R=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var a=Array(t),i=0,e=0;e<n;e++)for(var r=arguments[e],o=0,c=r.length;o<c;o++,i++)a[i]=r[o];return a},y=function(t){return this instanceof y?(this.v=t,this):new y(t)},D=function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=n.apply(t,e||[]),i,r=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(l){a[l]&&(i[l]=function(h){return new Promise(function(w,K){r.push([l,h,w,K])>1||c(l,h)})})}function c(l,h){try{_(a[l](h))}catch(w){v(r[0][3],w)}}function _(l){l.value instanceof y?Promise.resolve(l.value.v).then(f,s):v(r[0][2],l)}function f(l){c("next",l)}function s(l){c("throw",l)}function v(l,h){l(h),r.shift(),r.length&&c(r[0][0],r[0][1])}},A=function(t){var e,n;return e={},a("next"),a("throw",function(i){throw i}),a("return"),e[Symbol.iterator]=function(){return this},e;function a(i,r){e[i]=t[i]?function(o){return(n=!n)?{value:y(t[i](o)),done:i==="return"}:r?r(o):o}:r}},F=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof b=="function"?b(t):t[Symbol.iterator](),n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n);function a(r){n[r]=t[r]&&function(o){return new Promise(function(c,_){o=t[r](o),i(c,_,o.done,o.value)})}}function i(r,o,c,_){Promise.resolve(_).then(function(f){r({value:f,done:c})},o)}},B=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},M=function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},V=function(t){return t&&t.__esModule?t:{default:t}},q=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)},z=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},u("__extends",p),u("__assign",g),u("__rest",O),u("__decorate",S),u("__param",j),u("__metadata",P),u("__awaiter",E),u("__generator",I),u("__exportStar",T),u("__createBinding",C),u("__values",b),u("__read",m),u("__spread",G),u("__spreadArrays",R),u("__await",y),u("__asyncGenerator",D),u("__asyncDelegator",A),u("__asyncValues",F),u("__makeTemplateObject",B),u("__importStar",M),u("__importDefault",V),u("__classPrivateFieldGet",q),u("__classPrivateFieldSet",z)})})(L);export{L as t};
