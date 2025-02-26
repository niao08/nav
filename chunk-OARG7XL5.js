import{d as X,f as Y,h as Z,i as ee,j as te,k as ne,l as ie}from"./chunk-KUCCXFL4.js";import"./chunk-VZFCQHHE.js";import{l as Q,m as U}from"./chunk-QMLLNFGL.js";import"./chunk-BLVQMYZ3.js";import{F as C}from"./chunk-SU2FT5CB.js";import{f as J,i as q}from"./chunk-RU7RHMVX.js";import{a as $,b as A,c as B}from"./chunk-CWWXKSVJ.js";import"./chunk-A2IMWTM3.js";import"./chunk-2J22STXQ.js";import{b as F}from"./chunk-OCFTQHKM.js";import{Hb as K,Wb as x,jb as W,mb as j,pb as R,xb as G,zb as H}from"./chunk-LFEYAB5M.js";import{Ac as u,Da as g,Ea as f,Ec as z,Ed as O,Fc as S,Gc as b,Hc as V,Nb as y,Pb as p,Ud as k,_d as I,a as N,b as w,bc as r,cc as o,fe as _,hc as h,kc as v,mc as c,od as D,pb as t,pd as P,qb as T,xb as E,xd as L,yc as l,zc as d}from"./chunk-CN3R7YQY.js";function re(a,i){if(a&1&&(r(0,"div",6),l(1),o()),a&2){let e=c();t(),u(" ",e.$t("_buildTip"),`
`)}}function ae(a,i){if(a&1&&(r(0,"div"),l(1),o()),a&2){let e=c().$implicit;t(),d(e.desc)}}function me(a,i){if(a&1){let e=h();r(0,"input",16),b("ngModelChange",function(m){g(e);let s=c().$implicit;return S(s.desc,m)||(s.desc=m),f(m)}),o()}if(a&2){let e=c().$implicit;z("ngModel",e.desc)}}function le(a,i){if(a&1){let e=h();r(0,"a",17),v("nzOnConfirm",function(){g(e);let m=c().index,s=c();return f(s.handleDelete(m))}),l(1),o()}if(a&2){let e=c(2);p("nzPopconfirmTitle",e.$t("_confirmDel")),t(),u(" ",e.$t("_del")," ")}}function se(a,i){if(a&1){let e=h();r(0,"tr")(1,"td",7)(2,"input",8),b("ngModelChange",function(m){let s=g(e).$implicit;return S(s.name,m)||(s.name=m),f(m)}),o()(),r(3,"td",9)(4,"input",10),v("change",function(m){let s=g(e).index,oe=c();return f(oe.onColorChange(m,s))}),o(),l(5),o(),r(6,"td",11),l(7),o(),r(8,"td",12),y(9,ae,2,1,"div",13)(10,me,1,1,"input",14),o(),r(11,"td"),y(12,le,2,2,"a",15),o()()}if(a&2){let e=i.$implicit;t(2),z("ngModel",e.name),t(2),p("value",e.color),t(),u(" - ",e.color," "),t(2),d(e.createdAt),t(2),p("ngIf",e.isInner),t(),p("ngIf",!e.isInner),t(2),p("ngIf",!e.isInner)}}var M=class a{constructor(i,e){this.message=i;this.modal=e}$t=_;isSelfDevelop=k;tagList=I;submitting=!1;incrementId=Math.max(...I.map(i=>Number(i.id)))+1;ngOnInit(){}onColorChange(i,e){let n=i.target.value;this.tagList[e].color=n}handleAdd(){this.tagList.some(e=>!e.name.trim())||(this.incrementId+=1,this.tagList.unshift({id:this.incrementId,name:"",createdAt:"",color:"#f50000",desc:"",isInner:!1}))}handleDelete(i){this.tagList.splice(i,1)}handleSubmit(){if(this.submitting)return;let i={};if(this.tagList.forEach(e=>{e.name?.trim?.()&&(i[e.name]=w(N({},e),{name:void 0}))}),Object.keys(i).length!==this.tagList.length){this.message.error(_("_repeatAdd"));return}this.modal.info({nzTitle:_("_syncDataOut"),nzOkText:_("_confirmSync"),nzContent:_("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,K({message:"update tag",content:JSON.stringify(this.tagList),path:O}).then(()=>{this.message.success(_("_saveSuccess"))}).finally(()=>{this.submitting=!1})}})}trackByItem(i,e){return e.id}static \u0275fac=function(e){return new(e||a)(T(x),T(C))};static \u0275cmp=E({type:a,selectors:[["system-tag"]],features:[V([C,x])],decls:21,vars:13,consts:[["basicTable",""],["nz-button","",1,"add-btn",3,"click","nzLoading"],["nz-button","","nzType","primary",3,"click","nzLoading"],["class","mb-4 color-red font-bold",4,"ngIf"],[3,"nzData"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-4","color-red","font-bold"],["width","150px"],["nz-input","","maxlength","10",3,"ngModelChange","ngModel"],["width","160px"],["type","color",3,"change","value"],["width","220px"],["width","200px"],[4,"ngIf"],["nz-input","","maxlength","20",3,"ngModel","ngModelChange",4,"ngIf"],["nz-popconfirm","","nzOkType","danger","nzPopconfirmPlacement","bottom","class","color-red",3,"nzPopconfirmTitle","nzOnConfirm",4,"ngIf"],["nz-input","","maxlength","20",3,"ngModelChange","ngModel"],["nz-popconfirm","","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"color-red",3,"nzOnConfirm","nzPopconfirmTitle"]],template:function(e,n){if(e&1){let m=h();r(0,"button",1),v("click",function(){return g(m),f(n.handleAdd())}),l(1),o(),r(2,"button",2),v("click",function(){return g(m),f(n.handleSubmit())}),l(3),o(),y(4,re,2,1,"div",3),r(5,"nz-table",4,0)(7,"thead")(8,"tr")(9,"th"),l(10),o(),r(11,"th"),l(12),o(),r(13,"th"),l(14),o(),r(15,"th"),l(16),o(),r(17,"th"),l(18),o()()(),r(19,"tbody"),y(20,se,13,7,"tr",5),o()()}e&2&&(p("nzLoading",n.submitting),t(),u(" ",n.$t("_addRow"),`
`),t(),p("nzLoading",n.submitting),t(),u(" ",n.$t("_save"),`
`),t(),p("ngIf",!n.isSelfDevelop),t(),p("nzData",n.tagList),t(5),d(n.$t("_tagName")),t(2),d(n.$t("_color")),t(2),d(n.$t("_createAt")),t(2),d(n.$t("_remark")),t(2),d(n.$t("_action")),t(2),p("ngForOf",n.tagList)("ngForTrackBy",n.trackByItem))},dependencies:[H,W,j,G,R,L,D,P,B,A,$,F,q,J,ie,ee,X,Y,ne,Z,te,U,Q],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}"]})};export{M as default};
