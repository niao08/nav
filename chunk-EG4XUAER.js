import{d as I,q as A}from"./chunk-GBUGQPIK.js";import{$ as d,Hb as P}from"./chunk-RR2QILMH.js";import{Bd as m,Cd as b,Id as f,Jd as _,Ud as p,Wd as c,f as w,g as u,ge as a,je as h}from"./chunk-VWBW2XF3.js";var y=w(_());function S(e){function r(i){return!(i.ownVisible&&!p)}e=e.filter(r);for(let i=0;i<e.length;i++){let t=e[i];Array.isArray(t.nav)&&(t.nav=t.nav.filter(r),S(t.nav))}return e}function F(){return u(this,null,function*(){if(c)return;function e(t){t.forEach(o=>{a.push(o)}),d.emit("WEB_FINISH"),window.__FINISHED__=!0}let r=S(a);if(a.splice(0,a.length),!p)return e(r);if(window.localStorage.getItem(f.s_url)!==m.datetime){let t=[f.token,f.isDark,f.authCode,f.location],o=window.localStorage.length;for(let n=0;n<o;n++){let l=window.localStorage.key(n);t.includes(l)||window.localStorage.removeItem(l)}window.localStorage.setItem(f.s_url,m.datetime),y.default.removeItem(f.website),e(r),p&&setTimeout(()=>{d.emit("NOTIFICATION",{type:"success",title:h("_buildSuccess"),content:m.datetime,config:{nzDuration:0}})},1e3);return}try{let t=(yield y.default.getItem(f.website))||r;e(t)}catch{e(r)}})}function g(e){return e=e||a,c?P({content:JSON.stringify(e),path:b}):y.default.setItem(f.website,e)}function T(e){e||=a;let{id:r}=I(),{oneIndex:i,twoIndex:t}=A(r),o=!e[i].nav[t].collapsed;return e[i].nav[t].collapsed=o,e[i].nav[t].nav.map(n=>(n.collapsed=o,n)),c||g(e),o}function H(e){return u(this,null,function*(){let r=!1;function i(t){for(let o=0;o<t.length;o++){let n=t[o];Array.isArray(n.nav)&&(n.nav=n.nav.filter(l=>l.name&&e.includes(l.id)?(r=!0,!1):!0),i(n.nav))}}if(i(a),r){yield g(a);let{q:t}=I();t&&!c&&d.emit("WEB_REFRESH")}return r})}function R(e,r){let i=Object.keys(r),t=!1;function o(n){for(let l=0;l<n.length;l++){let s=n[l];if(s.name){if(s.id===e){t=!0;for(let v of i)s[v]=r[v];break}continue}Array.isArray(s.nav)&&o(s.nav)}}return o(a),g(a),t}function q(e){return u(this,null,function*(){let r=!1;function i(t){for(let o=0;o<t.length;o++){let n=t[o];if(Array.isArray(n.nav)){if(i(n.nav),n.nav[0]?.name)break;n.nav=n.nav.filter(l=>l.title&&e.includes(l.id)?(r=!0,!1):!0)}}}return e.forEach(t=>{a.forEach((o,n)=>{o.id===t&&(r=!0,a.splice(n,1))})}),i(a),r&&(yield g(a)),r})}export{F as a,g as b,T as c,H as d,R as e,q as f};
