import{_ as pt}from"./chunk-DDVKMMUE.js";import{$d as Y,Id as C,Ud as V,_d as M,a as q,b as B,d as dt,ee as T,f as Q,he as G}from"./chunk-VMWN5SSU.js";var X=dt((N,z)=>{"use strict";(function(e,f){typeof N=="object"&&typeof z=="object"?z.exports=f():typeof define=="function"&&define.amd?define([],f):typeof N=="object"?N.ClipboardJS=f():e.ClipboardJS=f()})(N,function(){return function(){var u={686:function(a,n,t){"use strict";t.d(n,{default:function(){return lt}});var c=t(279),i=t.n(c),d=t(370),b=t.n(d),v=t(817),x=t.n(v);function s(g){try{return document.execCommand(g)}catch{return!1}}var E=function(o){var r=x()(o);return s("cut"),r},y=E;function _(g){var o=document.documentElement.getAttribute("dir")==="rtl",r=document.createElement("textarea");r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[o?"right":"left"]="-9999px";var l=window.pageYOffset||document.documentElement.scrollTop;return r.style.top="".concat(l,"px"),r.setAttribute("readonly",""),r.value=g,r}var P=function(o,r){var l=_(o);r.container.appendChild(l);var p=x()(l);return s("copy"),l.remove(),p},O=function(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},l="";return typeof o=="string"?l=P(o,r):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o?.type)?l=P(o.value,r):(l=x()(o),s("copy")),l},I=O;function A(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(r){return typeof r}:A=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},A(g)}var j=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=o.action,l=r===void 0?"copy":r,p=o.container,m=o.target,S=o.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(m!==void 0)if(m&&A(m)==="object"&&m.nodeType===1){if(l==="copy"&&m.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(m.hasAttribute("readonly")||m.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(S)return I(S,{container:p});if(m)return l==="cut"?y(m):I(m,{container:p})},h=j;function w(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(r){return typeof r}:w=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},w(g)}function rt(g,o){if(!(g instanceof o))throw new TypeError("Cannot call a class as a function")}function J(g,o){for(var r=0;r<o.length;r++){var l=o[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(g,l.key,l)}}function ot(g,o,r){return o&&J(g.prototype,o),r&&J(g,r),g}function it(g,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(o&&o.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),o&&F(g,o)}function F(g,o){return F=Object.setPrototypeOf||function(l,p){return l.__proto__=p,l},F(g,o)}function at(g){var o=ut();return function(){var l=L(g),p;if(o){var m=L(this).constructor;p=Reflect.construct(l,arguments,m)}else p=l.apply(this,arguments);return ct(this,p)}}function ct(g,o){return o&&(w(o)==="object"||typeof o=="function")?o:st(g)}function st(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function ut(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(g){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},L(g)}function W(g,o){var r="data-clipboard-".concat(g);if(o.hasAttribute(r))return o.getAttribute(r)}var ft=function(g){it(r,g);var o=at(r);function r(l,p){var m;return rt(this,r),m=o.call(this),m.resolveOptions(p),m.listenClick(l),m}return ot(r,[{key:"resolveOptions",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof p.action=="function"?p.action:this.defaultAction,this.target=typeof p.target=="function"?p.target:this.defaultTarget,this.text=typeof p.text=="function"?p.text:this.defaultText,this.container=w(p.container)==="object"?p.container:document.body}},{key:"listenClick",value:function(p){var m=this;this.listener=b()(p,"click",function(S){return m.onClick(S)})}},{key:"onClick",value:function(p){var m=p.delegateTarget||p.currentTarget,S=this.action(m)||"copy",D=h({action:S,container:this.container,target:this.target(m),text:this.text(m)});this.emit(D?"success":"error",{action:S,text:D,trigger:m,clearSelection:function(){m&&m.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(p){return W("action",p)}},{key:"defaultTarget",value:function(p){var m=W("target",p);if(m)return document.querySelector(m)}},{key:"defaultText",value:function(p){return W("text",p)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(p){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return I(p,m)}},{key:"cut",value:function(p){return y(p)}},{key:"isSupported",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],m=typeof p=="string"?[p]:p,S=!!document.queryCommandSupported;return m.forEach(function(D){S=S&&!!document.queryCommandSupported(D)}),S}}]),r}(i()),lt=ft},828:function(a){var n=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(i,d){for(;i&&i.nodeType!==n;){if(typeof i.matches=="function"&&i.matches(d))return i;i=i.parentNode}}a.exports=c},438:function(a,n,t){var c=t(828);function i(v,x,s,E,y){var _=b.apply(this,arguments);return v.addEventListener(s,_,y),{destroy:function(){v.removeEventListener(s,_,y)}}}function d(v,x,s,E,y){return typeof v.addEventListener=="function"?i.apply(null,arguments):typeof s=="function"?i.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(_){return i(_,x,s,E,y)}))}function b(v,x,s,E){return function(y){y.delegateTarget=c(y.target,x),y.delegateTarget&&E.call(v,y)}}a.exports=d},879:function(a,n){n.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},n.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||n.node(t[0]))},n.string=function(t){return typeof t=="string"||t instanceof String},n.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(a,n,t){var c=t(879),i=t(438);function d(s,E,y){if(!s&&!E&&!y)throw new Error("Missing required arguments");if(!c.string(E))throw new TypeError("Second argument must be a String");if(!c.fn(y))throw new TypeError("Third argument must be a Function");if(c.node(s))return b(s,E,y);if(c.nodeList(s))return v(s,E,y);if(c.string(s))return x(s,E,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function b(s,E,y){return s.addEventListener(E,y),{destroy:function(){s.removeEventListener(E,y)}}}function v(s,E,y){return Array.prototype.forEach.call(s,function(_){_.addEventListener(E,y)}),{destroy:function(){Array.prototype.forEach.call(s,function(_){_.removeEventListener(E,y)})}}}function x(s,E,y){return i(document.body,s,E,y)}a.exports=d},817:function(a){function n(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var d=window.getSelection(),b=document.createRange();b.selectNodeContents(t),d.removeAllRanges(),d.addRange(b),c=d.toString()}return c}a.exports=n},279:function(a){function n(){}n.prototype={on:function(t,c,i){var d=this.e||(this.e={});return(d[t]||(d[t]=[])).push({fn:c,ctx:i}),this},once:function(t,c,i){var d=this;function b(){d.off(t,b),c.apply(i,arguments)}return b._=c,this.on(t,b,i)},emit:function(t){var c=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),d=0,b=i.length;for(d;d<b;d++)i[d].fn.apply(i[d].ctx,c);return this},off:function(t,c){var i=this.e||(this.e={}),d=i[t],b=[];if(d&&c)for(var v=0,x=d.length;v<x;v++)d[v].fn!==c&&d[v].fn._!==c&&b.push(d[v]);return b.length?i[t]=b:delete i[t],this}},a.exports=n,a.exports.TinyEmitter=n}},e={};function f(a){if(e[a])return e[a].exports;var n=e[a]={exports:{}};return u[a](n,n.exports,f),n.exports}return function(){f.n=function(a){var n=a&&a.__esModule?function(){return a.default}:function(){return a};return f.d(n,{a:n}),n}}(),function(){f.d=function(a,n){for(var t in n)f.o(n,t)&&!f.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:n[t]})}}(),function(){f.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)}}(),f(686)}().default})});var et=Q(pt()),nt=Q(X());var K=(i=>(i[i.All=1]="All",i[i.Title=2]="Title",i[i.Desc=3]="Desc",i[i.Url=4]="Url",i[i.Current=5]="Current",i[i.Quick=6]="Quick",i[i.Id=7]="Id",i))(K||{});function $(u){return Math.floor(Math.random()*u)}function _t(u,e){if(!e.trim())return[];e=e.toLowerCase();let{type:f,page:a,id:n}=U(),t=Number(f)||1,c=[],i=[{nav:c}],d=new Map;function b(v){v=v||u;t:for(let x=0;x<v.length;x++){let s=v[x];if(Array.isArray(s.nav)&&b(s.nav),s.name){s.name=tt(s.name),s.desc=tt(s.desc);let E=s.name.toLowerCase(),y=s.desc.toLowerCase(),_=s.url.toLowerCase(),P=()=>{if(E.includes(e)){let h=s,w=new RegExp(`(${e})`,"i");if(h.__name__=h.name,h.name=h.name.replace(w,"<b>$1</b>"),!d.has(h.id))return d.set(h.id,!0),c.push(h),!0}return!1},O=()=>{if(_.includes(e)&&!d.has(s.id)||s.tags.some(w=>w.url?.includes(e))&&!d.has(s.id))return d.set(s.id,!0),c.push(s),!0},I=()=>{if(y[0]==="!")return!1;if(y.includes(e)){let h=s,w=new RegExp(`(${e})`,"i");if(h.__desc__=h.desc,h.desc=h.desc.replace(w,"<b>$1</b>"),!d.has(h.id))return d.set(h.id,!0),c.push(h),!0}return!1},A=()=>{if(s.top&&E.includes(e)){let h=s,w=new RegExp(`(${e})`,"i");if(h.__name__=h.name,h.name=h.name.replace(w,"<b>$1</b>"),!d.has(h.id))return d.set(h.id,!0),c.push(h),!0}return!1},j=()=>s.id==e?(c.push(s),!0):!1;try{switch(t){case 4:O();break;case 2:P();break;case 3:I();break;case 6:A();break;case 7:if(j())break t;break;default:P(),I(),O()}}catch(h){console.error(h)}}}}return t===5?b(u[a].nav[n].nav):b(),c.length<=0?[]:i}function k(){let u=$(255),e=$(255),f=$(255);return`#${u.toString(16)}${e.toString(16)}${f.toString(16)}000`.slice(0,7)}var H;function St(){if(Z())return;clearInterval(H);let u="random-light-bg",e=document.getElementById(u)||document.createElement("div"),f=$(360);e.id=u,e.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:-3;transition: 1s linear;",e.style.backgroundImage=`linear-gradient(${f}deg, ${k()} 0%, ${k()} 100%)`,document.body.appendChild(e);function a(){if(Z()){clearInterval(H);return}let n=`linear-gradient(${f}deg, ${k()} 0%, ${k()} 100%)`;e.style.opacity=".3",setTimeout(()=>{e.style.backgroundImage=n,e.style.opacity="1"},1e3)}H=setInterval(a,1e4)}function U(){let{href:u}=window.location,e=u.split("?")[1]||"",f=et.default.parse(e),a=parseInt(f.id)||0,n=parseInt(f.page)||0;if(f.id===void 0&&f.page===void 0)try{let t=window.localStorage.getItem(C.location);if(t){let c=JSON.parse(t);n=c.page||0,a=c.id||0}}catch{}return n>T.length-1?(n=0,a=0):T[n]&&!(a<=T[n].nav.length-1)&&(a=T[n].nav.length-1),n=n<0?0:n,a=a<0?0:a,B(q({},f),{q:f.q||"",id:a,page:n})}function Tt(){let{page:u,id:e}=U();window.localStorage.setItem(C.location,JSON.stringify({page:u,id:e}))}function It(){let u=Y[0]||{};try{let e=window.localStorage.getItem(C.engine);if(e){let f=JSON.parse(e),a=Y.find(n=>n.name===f.name);a&&(u=a)}}catch{}return u}function At(u){window.localStorage.setItem(C.engine,JSON.stringify(u))}function Z(){let u=window.localStorage.getItem(C.isDark),e=window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;return!u&&e?e:!!Number(u)}function Ct(u,e){let f=u.target,a=`copy-${Date.now()}`;return f.id=a,f.setAttribute("data-clipboard-text",e),new Promise(n=>{let t=new nt.default(`#${a}`);t.on("success",function(){t.destroy(),n(!0)}),t.on("error",function(){t.destroy(),n(!1)})})}function tt(u){return u?u.replace(/<b>|<\/b>/g,""):""}function Pt(){let{id:u,page:e}=U(),f=[];try{T[e]&&T[e]?.nav?.length>0&&(V||!T[e].nav[u].ownVisible)?f=T[e].nav[u].nav:f=[]}catch{f=[]}return f}function R(u){return u<10?`0${u}`:String(u)}function Nt(u){let e=document.querySelectorAll(u),f=Number.MAX_SAFE_INTEGER;if(e.length<=0)return f;let n=e[0].parentNode.clientWidth,t=0;for(let c=0;c<e.length;c++){let i=e[c];if(t+=i.clientWidth,t>n){f=c-1;break}}return f}function gt(){return"ontouchstart"in window}function Ot(){let u=new Date,e=new Date(u.getFullYear(),0,0),f=u-e,a=1e3*60*60*24;return Math.floor(f/a)}function Lt(){let u=G("_weeks"),e=new Date,f=e.getFullYear(),a=R(e.getHours()),n=R(e.getMinutes()),t=R(e.getSeconds()),c=e.getMonth()+1,i=e.getDate(),d=e.getDay(),b=R(i);return{year:f,hours:a,minutes:n,seconds:t,month:c,date:i,zeroDate:b,dayText:u[d]}}function Dt(){let u=gt()?M.appTheme:M.theme;return u==="Current"?M.theme:u}export{K as a,_t as b,St as c,U as d,Tt as e,It as f,At as g,Z as h,Ct as i,tt as j,Pt as k,Nt as l,gt as m,Ot as n,Lt as o,Dt as p};
