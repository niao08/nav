import{_ as gt}from"./chunk-2RT7CIOJ.js";import{Jd as L,Kd as X,Yd as K,a as Q,b as V,d as mt,f as G,fe as R,ge as z,je as Z,le as T,oe as H}from"./chunk-ALZ7OQHM.js";var tt=mt((N,U)=>{"use strict";(function(e,l){typeof N=="object"&&typeof U=="object"?U.exports=l():typeof define=="function"&&define.amd?define([],l):typeof N=="object"?N.ClipboardJS=l():e.ClipboardJS=l()})(N,function(){return function(){var f={686:function(a,u,t){"use strict";t.d(u,{default:function(){return pt}});var s=t(279),r=t.n(s),p=t(370),n=t.n(p),b=t(817),w=t.n(b);function v(g){try{return document.execCommand(g)}catch{return!1}}var c=function(i){var o=w()(i);return v("cut"),o},x=c;function E(g){var i=document.documentElement.getAttribute("dir")==="rtl",o=document.createElement("textarea");o.style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[i?"right":"left"]="-9999px";var d=window.pageYOffset||document.documentElement.scrollTop;return o.style.top="".concat(d,"px"),o.setAttribute("readonly",""),o.value=g,o}var P=function(i,o){var d=E(i);o.container.appendChild(d);var m=w()(d);return v("copy"),d.remove(),m},q=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},d="";return typeof i=="string"?d=P(i,o):i instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(i?.type)?d=P(i.value,o):(d=w()(i),v("copy")),d},A=q;function I(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?I=function(o){return typeof o}:I=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},I(g)}var M=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.action,d=o===void 0?"copy":o,m=i.container,h=i.target,_=i.text;if(d!=="copy"&&d!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(h!==void 0)if(h&&I(h)==="object"&&h.nodeType===1){if(d==="copy"&&h.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(d==="cut"&&(h.hasAttribute("readonly")||h.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return A(_,{container:m});if(h)return d==="cut"?x(h):A(h,{container:m})},W=M;function S(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(o){return typeof o}:S=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},S(g)}function F(g,i){if(!(g instanceof i))throw new TypeError("Cannot call a class as a function")}function y(g,i){for(var o=0;o<i.length;o++){var d=i[o];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(g,d.key,d)}}function C(g,i,o){return i&&y(g.prototype,i),o&&y(g,o),g}function st(g,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(i&&i.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),i&&Y(g,i)}function Y(g,i){return Y=Object.setPrototypeOf||function(d,m){return d.__proto__=m,d},Y(g,i)}function ct(g){var i=lt();return function(){var d=D(g),m;if(i){var h=D(this).constructor;m=Reflect.construct(d,arguments,h)}else m=d.apply(this,arguments);return ut(this,m)}}function ut(g,i){return i&&(S(i)==="object"||typeof i=="function")?i:ft(g)}function ft(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function lt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function D(g){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},D(g)}function B(g,i){var o="data-clipboard-".concat(g);if(i.hasAttribute(o))return i.getAttribute(o)}var dt=function(g){st(o,g);var i=ct(o);function o(d,m){var h;return F(this,o),h=i.call(this),h.resolveOptions(m),h.listenClick(d),h}return C(o,[{key:"resolveOptions",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof m.action=="function"?m.action:this.defaultAction,this.target=typeof m.target=="function"?m.target:this.defaultTarget,this.text=typeof m.text=="function"?m.text:this.defaultText,this.container=S(m.container)==="object"?m.container:document.body}},{key:"listenClick",value:function(m){var h=this;this.listener=n()(m,"click",function(_){return h.onClick(_)})}},{key:"onClick",value:function(m){var h=m.delegateTarget||m.currentTarget,_=this.action(h)||"copy",k=W({action:_,container:this.container,target:this.target(h),text:this.text(h)});this.emit(k?"success":"error",{action:_,text:k,trigger:h,clearSelection:function(){h&&h.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(m){return B("action",m)}},{key:"defaultTarget",value:function(m){var h=B("target",m);if(h)return document.querySelector(h)}},{key:"defaultText",value:function(m){return B("text",m)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(m){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return A(m,h)}},{key:"cut",value:function(m){return x(m)}},{key:"isSupported",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],h=typeof m=="string"?[m]:m,_=!!document.queryCommandSupported;return h.forEach(function(k){_=_&&!!document.queryCommandSupported(k)}),_}}]),o}(r()),pt=dt},828:function(a){var u=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function s(r,p){for(;r&&r.nodeType!==u;){if(typeof r.matches=="function"&&r.matches(p))return r;r=r.parentNode}}a.exports=s},438:function(a,u,t){var s=t(828);function r(b,w,v,c,x){var E=n.apply(this,arguments);return b.addEventListener(v,E,x),{destroy:function(){b.removeEventListener(v,E,x)}}}function p(b,w,v,c,x){return typeof b.addEventListener=="function"?r.apply(null,arguments):typeof v=="function"?r.bind(null,document).apply(null,arguments):(typeof b=="string"&&(b=document.querySelectorAll(b)),Array.prototype.map.call(b,function(E){return r(E,w,v,c,x)}))}function n(b,w,v,c){return function(x){x.delegateTarget=s(x.target,w),x.delegateTarget&&c.call(b,x)}}a.exports=p},879:function(a,u){u.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},u.nodeList=function(t){var s=Object.prototype.toString.call(t);return t!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in t&&(t.length===0||u.node(t[0]))},u.string=function(t){return typeof t=="string"||t instanceof String},u.fn=function(t){var s=Object.prototype.toString.call(t);return s==="[object Function]"}},370:function(a,u,t){var s=t(879),r=t(438);function p(v,c,x){if(!v&&!c&&!x)throw new Error("Missing required arguments");if(!s.string(c))throw new TypeError("Second argument must be a String");if(!s.fn(x))throw new TypeError("Third argument must be a Function");if(s.node(v))return n(v,c,x);if(s.nodeList(v))return b(v,c,x);if(s.string(v))return w(v,c,x);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function n(v,c,x){return v.addEventListener(c,x),{destroy:function(){v.removeEventListener(c,x)}}}function b(v,c,x){return Array.prototype.forEach.call(v,function(E){E.addEventListener(c,x)}),{destroy:function(){Array.prototype.forEach.call(v,function(E){E.removeEventListener(c,x)})}}}function w(v,c,x){return r(document.body,v,c,x)}a.exports=p},817:function(a){function u(t){var s;if(t.nodeName==="SELECT")t.focus(),s=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var r=t.hasAttribute("readonly");r||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),r||t.removeAttribute("readonly"),s=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var p=window.getSelection(),n=document.createRange();n.selectNodeContents(t),p.removeAllRanges(),p.addRange(n),s=p.toString()}return s}a.exports=u},279:function(a){function u(){}u.prototype={on:function(t,s,r){var p=this.e||(this.e={});return(p[t]||(p[t]=[])).push({fn:s,ctx:r}),this},once:function(t,s,r){var p=this;function n(){p.off(t,n),s.apply(r,arguments)}return n._=s,this.on(t,n,r)},emit:function(t){var s=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),p=0,n=r.length;for(p;p<n;p++)r[p].fn.apply(r[p].ctx,s);return this},off:function(t,s){var r=this.e||(this.e={}),p=r[t],n=[];if(p&&s)for(var b=0,w=p.length;b<w;b++)p[b].fn!==s&&p[b].fn._!==s&&n.push(p[b]);return n.length?r[t]=n:delete r[t],this}},a.exports=u,a.exports.TinyEmitter=u}},e={};function l(a){if(e[a])return e[a].exports;var u=e[a]={exports:{}};return f[a](u,u.exports,l),u.exports}return function(){l.n=function(a){var u=a&&a.__esModule?function(){return a.default}:function(){return a};return l.d(u,{a:u}),u}}(),function(){l.d=function(a,u){for(var t in u)l.o(u,t)&&!l.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:u[t]})}}(),function(){l.o=function(a,u){return Object.prototype.hasOwnProperty.call(a,u)}}(),l(686)}().default})});var ot=G(gt(),1),it=G(tt(),1);var et=(n=>(n[n.All=1]="All",n[n.Title=2]="Title",n[n.Desc=3]="Desc",n[n.Url=4]="Url",n[n.Current=5]="Current",n[n.Quick=6]="Quick",n[n.Id=7]="Id",n[n.Tag=8]="Tag",n[n.Class=9]="Class",n))(et||{});function ht(f){return Math.floor(Math.random()*f)}function Tt(f,e){if(!e.trim())return[];e=e.toLowerCase();let{type:l,id:a}=J(),{oneIndex:u,twoIndex:t}=at(a),s=Number(l)||1,r=[],p=[{nav:r,id:-1,title:H("_searchRes")}],n=new Map;s===9&&(p=[]);function b(w){w=w||f;t:for(let v=0;v<w.length;v++){let c=w[v];if(s===9&&c.title&&c.nav[0]?.name&&c.title.toLowerCase().includes(e)){p.push(c);break}if(Array.isArray(c.nav)&&b(c.nav),c.name){c.name=rt(c.name),c.desc=rt(c.desc);let x=c.name.toLowerCase(),E=c.desc.toLowerCase(),P=c.url.toLowerCase();if(E[0]===X)continue;let A=()=>{if(x.includes(e)){let y=c,C=new RegExp(`(${e})`,"i");if(y.__name__=y.name,y.name=y.name.replace(C,"<b>$1</b>"),!n.has(y.id))return n.set(y.id,!0),r.push(y),!0}return!1},I=()=>{if(P.includes(e)&&!n.has(c.id)||c.tags.some(C=>C.url?.includes(e))&&!n.has(c.id))return n.set(c.id,!0),r.push(c),!0},M=()=>{if(E.includes(e)){let y=c,C=new RegExp(`(${e})`,"i");if(y.__desc__=y.desc,y.desc=y.desc.replace(C,"<b>$1</b>"),!n.has(y.id))return n.set(y.id,!0),r.push(y),!0}return!1},W=()=>{if(c.top&&x.includes(e)){let y=c,C=new RegExp(`(${e})`,"i");if(y.__name__=y.name,y.name=y.name.replace(C,"<b>$1</b>"),!n.has(y.id))return n.set(y.id,!0),r.push(y),!0}return!1},S=()=>c.tags.forEach(y=>{Z[y.id]?.name?.toLowerCase()===e&&(n.has(c.id)||(n.set(c.id,!0),r.push(c)))}),F=()=>c.id==e?(r.push(c),!0):!1;try{switch(s){case 4:I();break;case 2:A();break;case 3:M();break;case 6:W();break;case 8:S();break;case 7:if(F())break t;break;default:A(),M(),I()}}catch(y){console.error(y)}}}}return s===5?b(f[u].nav[t].nav):b(),s!==9&&r.length<=0?[]:p}function $(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}var O;function At(){if(nt())return;O&&clearInterval(O);let f="random-light-bg",e=document.getElementById(f)||document.createElement("div"),l=ht(360);e.id=f,e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -3;
    transition: 1s linear;
  `,e.style.backgroundImage=`linear-gradient(${l}deg, ${$()} 0%, ${$()} 100%)`,document.body.appendChild(e),O=setInterval(()=>{if(nt()){O&&(clearInterval(O),O=null);return}let u=`linear-gradient(${l}deg, ${$()} 0%, ${$()} 100%)`;e.style.opacity="0.3",setTimeout(()=>{e.style.backgroundImage=u,e.style.opacity="1"},1e3)},1e4)}function J(){let{href:f}=window.location,e=f.split("?")[1]||"",l=ot.default.parse(e),a=l.id;if(l.id==null)try{let u=window.localStorage.getItem(L.location);u&&(a=JSON.parse(u).id)}catch{}return V(Q({},l),{type:l.type,q:l.q||"",id:a})}function Lt(){let{id:f}=J();window.localStorage.setItem(L.location,JSON.stringify({id:f}))}function Ot(){let f=z[0]||{};try{let e=window.localStorage.getItem(L.engine);if(e){let l=JSON.parse(e),a=z.find(u=>u.name===l.name);a&&(f=a)}}catch{}return f}function Nt(f){window.localStorage.setItem(L.engine,JSON.stringify(f))}function nt(){let f=window.localStorage.getItem(L.isDark),e=window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;return!f&&e?e:!!Number(f)}function Pt(f,e){let l=f.target,a=`copy-${Date.now()}`;return l.id=a,l.setAttribute("data-clipboard-text",e),new Promise(u=>{let t=new it.default(`#${a}`);t.on("success",function(){t.destroy(),u(!0)}),t.on("error",function(){t.destroy(),u(!1)})})}function rt(f=""){return f?f.replace(/<b>|<\/b>/g,""):""}function Mt(){let{id:f}=J(),{oneIndex:e,twoIndex:l}=at(f),a=[];try{T[e]&&T[e]?.nav?.length>0&&(K||!T[e].nav[l].ownVisible)?a=T[e].nav[l].nav:a=[]}catch{a=[]}return a}function j(f){return String(f).padStart(2,"0")}function Dt(f){let e=document.querySelectorAll(f),l=Number.MAX_SAFE_INTEGER;if(e.length<=0)return l;let u=e[0].parentNode.clientWidth,t=0;for(let s=0;s<e.length;s++){let r=e[s];if(t+=r.clientWidth,t>u){l=s-1;break}}return l}function yt(){return"ontouchstart"in window}function kt(){let f=new Date,e=new Date(f.getFullYear(),0,0),l=f-e,a=1e3*60*60*24;return Math.floor(l/a)}function Rt(){let f=H("_weeks"),e=new Date,l=e.getFullYear(),a=j(e.getHours()),u=j(e.getMinutes()),t=j(e.getSeconds()),s=e.getMonth()+1,r=e.getDate(),p=e.getDay(),n=j(r);return{year:l,hours:a,minutes:u,seconds:t,month:s,date:r,zeroDate:n,dayText:f[p]}}function $t(){let f=yt()?R.appTheme:R.theme;return f==="Current"?R.theme:f}function at(f,e=0){f=Number(f);let l=e,a=e,u=e,t=[];t:for(let s=0;s<T.length;s++){let r=T[s];if(r.title&&r.id===f){l=s,t.push(r.title);break}if(Array.isArray(r.nav))for(let p=0;p<r.nav.length;p++){let n=r.nav[p];if(n.title&&n.id===f){l=s,a=p,t.push(r.title,n.title);break t}if(Array.isArray(n.nav))for(let b=0;b<n.nav.length;b++){let w=n.nav[b];if(w.id===f){l=s,a=p,u=b,t.push(r.title,n.title,w.title);break t}}}}return{oneIndex:l,twoIndex:a,threeIndex:u,breadcrumb:t}}export{et as a,Tt as b,$ as c,At as d,J as e,Lt as f,Ot as g,Nt as h,nt as i,Pt as j,rt as k,Mt as l,Dt as m,yt as n,kt as o,Rt as p,$t as q,at as r};
