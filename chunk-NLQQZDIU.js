import{c as q,d as Y,e as J}from"./chunk-BYZNRZDW.js";import{c as K}from"./chunk-TGAJ5BMV.js";import{Na as v,Q as H,R as Q,S as Z,X as f,Z as W,ba as U}from"./chunk-6E5CVVJ2.js";import{Ba as p,Cb as _,Db as m,Eb as M,Gc as L,Hb as A,Ib as B,N as D,Nb as T,Pa as d,Qb as j,Sa as E,Tc as G,Wc as l,Xb as R,Yc as V,cc as O,ea as I,ga as u,mc as P,na as z,nc as k,pc as F,q as C,rc as $,sa as y,sc as w,ub as h,vb as r,w as N,x as b}from"./chunk-B2N7RURW.js";var re=(()=>{class i{elementRef;renderer;hidden=null;setHiddenAttribute(){this.hidden?typeof this.hidden=="string"?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",this.hidden):this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",""):this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden")}constructor(s,a){this.elementRef=s,this.renderer=a,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}ngOnChanges(){this.setHiddenAttribute()}ngAfterViewInit(){this.setHiddenAttribute()}static \u0275fac=function(a){return new(a||i)(r(d),r(h))};static \u0275dir=M({type:i,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["nz-icon"],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"],["nz-input-group"]],inputs:{hidden:"hidden"},features:[p]})}return i})(),X=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=m({type:i});static \u0275inj=z({})}return i})();var te=["nz-button",""],ne=["*"];function ie(i,g){i&1&&O(0,"nz-icon",0)}var x="button",oe=(()=>{let i,g=[],s=[];return class S{static{let n=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;i=[Z()],N(null,null,i,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:t=>"nzSize"in t,get:t=>t.nzSize,set:(t,e)=>{t.nzSize=e}},metadata:n},g,s),n&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}elementRef;cdr;renderer;nzConfigService;directionality;_nzModuleName=x;nzIconDirectiveElement;nzBlock=!1;nzGhost=!1;nzSearch=!1;nzLoading=!1;nzDanger=!1;disabled=!1;tabIndex=null;nzType=null;nzShape=null;nzSize=b(this,g,"default");dir=(b(this,s),"ltr");finalSize=V(()=>this.compactSize?this.compactSize():this.size());size=E(this.nzSize);compactSize=y(q,{optional:!0});destroy$=y(v);loading$=new C;insertSpan(n,t){n.forEach(e=>{if(e.nodeName==="#text"){let o=t.createElement("span"),c=t.parentNode(e);t.insertBefore(c,o,e),t.appendChild(o,e)}})}get iconOnly(){let n=Array.from(this.elementRef?.nativeElement?.childNodes||[]),t=n.every(o=>o.nodeName!=="#text"),e=n.filter(o=>!(o.nodeName==="#comment"||o?.classList?.contains("anticon"))).length==0;return!!this.nzIconDirectiveElement&&e&&t}constructor(n,t,e,o,c){this.elementRef=n,this.cdr=t,this.renderer=e,this.nzConfigService=o,this.directionality=c}ngOnInit(){this.size.set(this.nzSize),this.nzConfigService.getConfigChangeEventForComponent(x).pipe(u(this.destroy$)).subscribe(()=>{this.size.set(this.nzSize),this.cdr.markForCheck()}),this.directionality.change?.pipe(u(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value,H(this.elementRef.nativeElement,"click",{capture:!0}).pipe(u(this.destroy$)).subscribe(n=>{(this.disabled&&n.target?.tagName==="A"||this.nzLoading)&&(n.preventDefault(),n.stopImmediatePropagation())})}ngOnChanges({nzLoading:n,nzSize:t}){n&&this.loading$.next(this.nzLoading),t&&this.size.set(t.currentValue)}ngAfterViewInit(){this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}ngAfterContentInit(){this.loading$.pipe(I(this.nzLoading),D(()=>!!this.nzIconDirectiveElement),u(this.destroy$)).subscribe(n=>{let t=this.nzIconDirectiveElement.nativeElement;n?this.renderer.setStyle(t,"display","none"):this.renderer.removeStyle(t,"display")})}static \u0275fac=function(t){return new(t||S)(r(d),r(G),r(h),r(Q),r(U))};static \u0275cmp=_({type:S,selectors:[["button","nz-button",""],["a","nz-button",""]],contentQueries:function(t,e,o){if(t&1&&F(o,f,5,d),t&2){let c;$(c=w())&&(e.nzIconDirectiveElement=c.first)}},hostAttrs:[1,"ant-btn"],hostVars:34,hostBindings:function(t,e){t&2&&(T("tabindex",e.disabled?-1:e.tabIndex===null?null:e.tabIndex)("disabled",e.disabled||null),j("ant-btn-default",e.nzType==="default")("ant-btn-primary",e.nzType==="primary")("ant-btn-dashed",e.nzType==="dashed")("ant-btn-link",e.nzType==="link")("ant-btn-text",e.nzType==="text")("ant-btn-circle",e.nzShape==="circle")("ant-btn-round",e.nzShape==="round")("ant-btn-lg",e.finalSize()==="large")("ant-btn-sm",e.finalSize()==="small")("ant-btn-dangerous",e.nzDanger)("ant-btn-loading",e.nzLoading)("ant-btn-background-ghost",e.nzGhost)("ant-btn-block",e.nzBlock)("ant-input-search-button",e.nzSearch)("ant-btn-rtl",e.dir==="rtl")("ant-btn-icon-only",e.iconOnly))},inputs:{nzBlock:[2,"nzBlock","nzBlock",l],nzGhost:[2,"nzGhost","nzGhost",l],nzSearch:[2,"nzSearch","nzSearch",l],nzLoading:[2,"nzLoading","nzLoading",l],nzDanger:[2,"nzDanger","nzDanger",l],disabled:[2,"disabled","disabled",l],tabIndex:"tabIndex",nzType:"nzType",nzShape:"nzShape",nzSize:"nzSize"},exportAs:["nzButton"],features:[L([v,{provide:Y,useValue:"btn"}]),A([J]),p],attrs:te,ngContentSelectors:ne,decls:2,vars:1,consts:[["nzType","loading"]],template:function(t,e){t&1&&(P(),B(0,ie,1,0,"nz-icon",0),k(1)),t&2&&R(e.nzLoading?0:-1)},dependencies:[W,f],encapsulation:2,changeDetection:0})}})();var Ae=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=m({type:i});static \u0275inj=z({imports:[oe,X,K]})}return i})();export{re as a,oe as b,Ae as c};
