import{R as se,S as le,X as ue,Z as pe,ba as de,eb as me}from"./chunk-6E5CVVJ2.js";import{$b as J,Ba as C,Cb as m,Eb as E,Gc as re,Ia as y,Ib as f,Ic as ce,Oa as S,Ob as g,Pa as O,Pb as b,Qb as z,Sa as u,Sb as L,Tc as _,Wc as R,Xb as D,Yc as I,Zb as Y,_b as G,ab as H,ac as F,bc as j,cc as K,fc as X,ga as h,ka as w,lc as l,ma as N,mc as A,n as V,nc as P,pa as v,pc as ee,q as x,qb as p,r as U,rc as te,s as k,sa as s,sb as Q,sc as ne,td as ae,vb as d,w as W,x as M,xc as ie,yc as oe,za as T}from"./chunk-B2N7RURW.js";function he(e){e||(T(he),e=s(y));let r=new V(t=>e.onDestroy(t.next.bind(t)));return t=>t.pipe(h(r))}function $(e,r){let t=!r?.manualCleanup;t&&!r?.injector&&T($);let n=t?r?.injector?.get(y)??s(y):null,i=ve(r?.equal),o;r?.requireSync?o=u({kind:0},{equal:i}):o=u({kind:1,value:r?.initialValue},{equal:i});let c=e.subscribe({next:a=>o.set({kind:1,value:a}),error:a=>{if(r?.rejectErrors)throw a;o.set({kind:2,error:a})}});if(r?.requireSync&&o().kind===0)throw new w(601,!1);return n?.onDestroy(c.unsubscribe.bind(c)),I(()=>{let a=o();switch(a.kind){case 1:return a.value;case 2:throw a.error;case 0:throw new w(601,!1)}},{equal:r?.equal})}function ve(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var ge=["*"],be=e=>({$implicit:e});function De(e,r){if(e&1&&ie(0),e&2){let t=l(3);oe(t.nzSplit)}}function _e(e,r){if(e&1&&(F(0,"span",3),f(1,De,1,1,"ng-template",4),j()),e&2){let t=l(),n=t.$index,i=t.$count,o=l();b("margin-bottom",o.nzDirection==="vertical"?n===i-1?null:o.spaceSize:null,"px")("margin-right",o.nzDirection==="horizontal"?n===i-1?null:o.spaceSize:null,"px"),p(),g("nzStringTemplateOutlet",o.nzSplit)("nzStringTemplateOutletContext",ce(6,be,n))}}function Ie(e,r){if(e&1&&(F(0,"div",0),X(1,1),j(),f(2,_e,2,8,"span",2)),e&2){let t=r.$implicit,n=r.$index,i=r.$count,o=l();b("margin-bottom",o.nzDirection==="vertical"?n===i-1?null:o.spaceSize:null,"px")("margin-right",o.nzDirection==="horizontal"?n===i-1?null:o.spaceSize:null,"px"),p(),g("ngTemplateOutlet",t),p(),D(o.nzSplit&&n!==i-1?2:-1)}}var xe=new v("NZ_SPACE_COMPACT_SIZE"),ze=new v("NZ_SPACE_COMPACT_ITEMS"),ke=new v("NZ_SPACE_COMPACT_ITEM_TYPE"),Me=(()=>{class e{nzBlock=S(!1,{transform:R});nzDirection=S("horizontal");nzSize=S("default");elementRef=s(O);static \u0275fac=function(n){return new(n||e)};static \u0275cmp=m({type:e,selectors:[["nz-space-compact"]],hostAttrs:[1,"ant-space-compact"],hostVars:4,hostBindings:function(n,i){n&2&&z("ant-space-compact-block",i.nzBlock())("ant-space-compact-vertical",i.nzDirection()==="vertical")},inputs:{nzBlock:[1,"nzBlock"],nzDirection:[1,"nzDirection"],nzSize:[1,"nzSize"]},exportAs:["nzSpaceCompact"],features:[re([{provide:xe,useFactory:()=>s(e).nzSize},{provide:ze,useFactory:()=>u([])}])],ngContentSelectors:ge,decls:1,vars:0,template:function(n,i){n&1&&(A(),P(0))},encapsulation:2,changeDetection:0})}return e})(),ft=(()=>{class e{spaceCompactCmp=s(Me,{host:!0,optional:!0});items=s(ze,{host:!0,optional:!0});type=s(ke);elementRef=s(O);directionality=s(de);dir=$(this.directionality.change,{initialValue:this.directionality.value});get parentElement(){return this.elementRef.nativeElement?.parentElement}class=I(()=>{if(!this.spaceCompactCmp||!this.items||this.parentElement!==this.spaceCompactCmp.elementRef.nativeElement)return null;let t=this.items(),n=this.spaceCompactCmp.nzDirection(),i=[we(this.type,n,this.dir()==="rtl")],o=t.indexOf(this),c=t.findIndex(a=>a);return o===c?i.push(Ne(this.type,n)):o===t.length-1&&i.push(Te(this.type,n)),i});constructor(){!this.spaceCompactCmp||!this.items||H(()=>{if(this.parentElement===this.spaceCompactCmp.elementRef.nativeElement){let t=Array.from(this.parentElement.children).indexOf(this.elementRef.nativeElement);this.items.update(n=>{let i=n.slice();return i.splice(t,0,this),i})}})}ngOnDestroy(){this.items?.update(t=>t.filter(n=>n!==this))}static \u0275fac=function(n){return new(n||e)};static \u0275dir=E({type:e,hostVars:2,hostBindings:function(n,i){n&2&&L(i.class())},exportAs:["nzSpaceCompactItem"]})}return e})();function q(e,r,t){return`ant-${e}-compact-${r==="vertical"?"vertical-":""}${t}`}function we(e,r,t){let n=t?"-rtl":"";return`${q(e,r,"item")}${n}`}function Ne(e,r){return q(e,r,"first-item")}function Te(e,r){return q(e,r,"last-item")}var Oe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=E({type:e,selectors:[["","nzSpaceItem",""]]})}return e})(),Ee="space",fe={small:8,middle:16,large:24},gt=(()=>{let e,r=[],t=[];return class B{static{let i=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;e=[le()],W(null,null,e,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:o=>"nzSize"in o,get:o=>o.nzSize,set:(o,c)=>{o.nzSize=c}},metadata:i},r,t),i&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i})}nzConfigService;cdr;_nzModuleName=Ee;nzDirection="horizontal";nzAlign;nzSplit=null;nzWrap=!1;nzSize=M(this,r,"small");items=M(this,t);mergedAlign;spaceSize=fe.small;destroy$=new x;constructor(i,o){this.nzConfigService=i,this.cdr=o}updateSpaceItems(){let i=typeof this.nzSize=="string"?fe[this.nzSize]:this.nzSize;this.spaceSize=i/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=this.nzAlign===void 0&&this.nzDirection==="horizontal"?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe(h(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}static \u0275fac=function(o){return new(o||B)(d(se),d(_))};static \u0275cmp=m({type:B,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(o,c,a){if(o&1&&ee(a,Oe,4,Q),o&2){let Z;te(Z=ne())&&(c.items=Z)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(o,c){o&2&&(b("flex-wrap",c.nzWrap?"wrap":null),z("ant-space-horizontal",c.nzDirection==="horizontal")("ant-space-vertical",c.nzDirection==="vertical")("ant-space-align-start",c.mergedAlign==="start")("ant-space-align-end",c.mergedAlign==="end")("ant-space-align-center",c.mergedAlign==="center")("ant-space-align-baseline",c.mergedAlign==="baseline"))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:[2,"nzWrap","nzWrap",R],nzSize:"nzSize"},exportAs:["nzSpace"],features:[C],ngContentSelectors:ge,decls:3,vars:0,consts:[[1,"ant-space-item"],[3,"ngTemplateOutlet"],[1,"ant-space-split",3,"margin-bottom","margin-right"],[1,"ant-space-split"],[3,"nzStringTemplateOutlet","nzStringTemplateOutletContext"]],template:function(o,c){o&1&&(A(),P(0),G(1,Ie,3,6,null,null,Y)),o&2&&(p(),J(c.items))},dependencies:[ae,me],encapsulation:2,changeDetection:0})}})();function Fe(e,r){if(e&1&&K(0,"nz-icon",0),e&2){let t=l();g("nzType",t.iconType)}}var yt=(()=>{class e{formStatusChanges=new k(1);static \u0275fac=function(n){return new(n||e)};static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})(),St=(()=>{class e{noFormStatus=new U(!1);static \u0275fac=function(n){return new(n||e)};static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})(),je={error:"close-circle-fill",validating:"loading",success:"check-circle-fill",warning:"exclamation-circle-fill"},bt=(()=>{class e{cdr;status="";constructor(t){this.cdr=t}iconType=null;ngOnChanges(t){this.updateIcon()}updateIcon(){this.iconType=this.status?je[this.status]:null,this.cdr.markForCheck()}static \u0275fac=function(n){return new(n||e)(d(_))};static \u0275cmp=m({type:e,selectors:[["nz-form-item-feedback-icon"]],hostAttrs:[1,"ant-form-item-feedback-icon"],hostVars:8,hostBindings:function(n,i){n&2&&z("ant-form-item-feedback-icon-error",i.status==="error")("ant-form-item-feedback-icon-warning",i.status==="warning")("ant-form-item-feedback-icon-success",i.status==="success")("ant-form-item-feedback-icon-validating",i.status==="validating")},inputs:{status:"status"},exportAs:["nzFormFeedbackIcon"],features:[C],decls:1,vars:1,consts:[[3,"nzType"]],template:function(n,i){n&1&&f(0,Fe,1,1,"nz-icon",0),n&2&&D(i.iconType?0:-1)},dependencies:[pe,ue],encapsulation:2,changeDetection:0})}return e})();export{he as a,$ as b,xe as c,ke as d,ft as e,yt as f,St as g,bt as h};
