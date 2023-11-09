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

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$7=window,e$b=t$7.ShadowRoot&&(void 0===t$7.ShadyCSS||t$7.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$9=Symbol(),n$9=new WeakMap;class o$c{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$9)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$b&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$9.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$9.set(s,t));}return t}toString(){return this.cssText}}const r$6=t=>new o$c("string"==typeof t?t:t+"",void 0,s$9),i$c=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$c(n,t,s$9)},S$1=(s,n)=>{e$b?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$7.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$9=e$b?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$6(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$8;const e$a=window,r$5=e$a.trustedTypes,h$4=r$5?r$5.emptyScript:"",o$b=e$a.reactiveElementPolyfillSupport,n$8={toAttribute(t,i){switch(i){case Boolean:t=t?h$4:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$6=(t,i)=>i!==t&&(i==i||t==t),l$8={attribute:!0,type:String,converter:n$8,reflect:!1,hasChanged:a$6},d$9="finalized";class u$8 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$8){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$8}static finalize(){if(this.hasOwnProperty(d$9))return !1;this[d$9]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$9(i));}else void 0!==i&&s.push(c$9(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$8){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$8).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$8;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$6)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$8[d$9]=!0,u$8.elementProperties=new Map,u$8.elementStyles=[],u$8.shadowRootOptions={mode:"open"},null==o$b||o$b({ReactiveElement:u$8}),(null!==(s$8=e$a.reactiveElementVersions)&&void 0!==s$8?s$8:e$a.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$6;const i$b=window,s$7=i$b.trustedTypes,e$9=s$7?s$7.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$a="$lit$",n$7=`lit$${(Math.random()+"").slice(9)}$`,l$7="?"+n$7,h$3=`<${l$7}>`,r$4=document,u$7=()=>r$4.createComment(""),d$8=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$8=Array.isArray,v$1=t=>c$8(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$5="[ \t\n\f\r]",f$3=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m$8=/>/g,p$8=RegExp(`>|${a$5}(?:([^\\s"'>=/]+)(${a$5}*=${a$5}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g$3=/'/g,$$1=/"/g,y=/^(?:script|style|textarea|title)$/i,w$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w$1(1),T=Symbol.for("lit-noChange"),A$1=Symbol.for("lit-nothing"),E=new WeakMap,C=r$4.createTreeWalker(r$4,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$9?e$9.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f$3;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$3?"!--"===c[1]?u=_:void 0!==c[1]?u=m$8:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p$8):void 0!==c[3]&&(u=p$8):u===p$8?">"===c[0]?(u=null!=l?l:f$3,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p$8:'"'===c[3]?$$1:g$3):u===$$1||u===g$3?u=p$8:u===_||u===m$8?u=f$3:(u=p$8,l=void 0);const w=u===p$8&&t[i+1].startsWith("/>")?" ":"";r+=u===f$3?s+h$3:v>=0?(e.push(d),s.slice(0,v)+o$a+s.slice(v)+n$7+w):s+n$7+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$a)||i.startsWith(n$7)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$a).split(n$7),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$7),i=t.length-1;if(i>0){h.textContent=s$7?s$7.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$7()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$7());}}}else if(8===h.nodeType)if(h.data===l$7)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$7,t+1));)v.push({type:7,index:r}),t+=n$7.length-1;}r++;}}static createElement(t,i){const s=r$4.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d$8(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$4).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r$4,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d$8(t)?t===A$1||null==t||""===t?(this._$AH!==A$1&&this._$AR(),this._$AH=A$1):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v$1(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A$1&&d$8(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$4.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c$8(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$7()),this.k(u$7()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A$1;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d$8(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d$8(h)||h!==this._$AH[l]),h===A$1?t=A$1:t!==A$1&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A$1?void 0:t;}}const I=s$7?s$7.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A$1?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A$1)===T)return;const e=this._$AH,o=t===A$1&&e!==A$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A$1&&(e===A$1||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j={O:o$a,P:n$7,A:l$7,C:1,M:V,L:M,R:v$1,D:S,I:R,V:k,H:L,N:z,U:H,F:Z},B=i$b.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$6=i$b.litHtmlVersions)&&void 0!==t$6?t$6:i$b.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u$7(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$6,o$9;class s$6 extends u$8{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$6.finalized=!0,s$6._$litElement$=!0,null===(l$6=globalThis.litElementHydrateSupport)||void 0===l$6||l$6.call(globalThis,{LitElement:s$6});const n$6=globalThis.litElementPolyfillSupport;null==n$6||n$6({LitElement:s$6});(null!==(o$9=globalThis.litElementVersions)&&void 0!==o$9?o$9:globalThis.litElementVersions=[]).push("3.3.3");

// Generated by genversion.
const version = '0.39.2';

const c$7=new Set,w=()=>{const s=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";c$7.forEach(o=>{o.setAttribute("dir",s);});},p$7=new MutationObserver(w);p$7.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const h$2=s=>typeof s.startManagingContentDirection!="undefined"||s.tagName==="SP-THEME";function SpectrumMixin(s){class o extends s{get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const n=((r=document)=>{var l;let t=r.activeElement;for(;t!=null&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;const a=t?[t]:[];for(;t;){const i=t.assignedSlot||t.parentElement||((l=t.getRootNode())==null?void 0:l.host);i&&a.push(i),t=i;}return a})(this.getRootNode())[0];if(!n)return !1;try{return n.matches(":focus-visible")||n.matches(".focus-visible")}catch(r){return n.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let e=this.assignedSlot||this.parentNode;for(;e!==document.documentElement&&!h$2(e);)e=e.assignedSlot||e.parentNode||e.host;if(this.dir=e.dir==="rtl"?e.dir:this.dir||"ltr",e===document.documentElement)c$7.add(this);else {const{localName:n}=e;n.search("-")>-1&&!customElements.get(n)?customElements.whenDefined(n).then(()=>{e.startManagingContentDirection(this);}):e.startManagingContentDirection(this);}this._dirParent=e;}super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?c$7.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"));}}return o}class SpectrumElement extends SpectrumMixin(s$6){}SpectrumElement.VERSION=version;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$a=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$8=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$5(n){return (t,o)=>void 0!==o?e$8(n,t,o):i$a(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$5(t){return n$5({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$8=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$9(i,n){return o$8({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$4;const e$7=null!=(null===(n$4=window.HTMLSlotElement)||void 0===n$4?void 0:n$4.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$5(n){const{slot:l,selector:t}=null!=n?n:{};return o$8({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$7(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o$7(o,n,r){let l,s=o;return "object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?l$5({slot:s,flatten:n,selector:r}):o$8({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}

var a$4=Object.defineProperty;var u$6=Object.getOwnPropertyDescriptor;var m$7=(n,i,s,t)=>{for(var e=t>1?void 0:t?u$6(i,s):i,l=n.length-1,o;l>=0;l--)(o=n[l])&&(e=(t?o(i,s,e):o(e))||e);return t&&e&&a$4(i,s,e),e};function SizedMixin(n,{validSizes:i=["s","m","l","xl"],noDefaultSize:s,defaultSize:t="m"}={}){class e extends n{constructor(){super(...arguments);this._size=t;}get size(){return this._size||t}set size(r){const c=s?null:t,z=r&&r.toLocaleLowerCase(),x=i.includes(z)?z:c;if(x&&this.setAttribute("size",x),this._size===x)return;const p=this._size;this._size=x,this.requestUpdate("size",p);}update(r){!this.hasAttribute("size")&&!s&&this.setAttribute("size",this.size),super.update(r);}}return m$7([n$5({type:String,reflect:!0})],e.prototype,"size",1),e}

const d$7=["spectrum","express"],m$6=["medium","large","medium-express","large-express"],c$6=["light","lightest","dark","darkest","light-express","lightest-express","dark-express","darkest-express"],a$3=class a extends HTMLElement{constructor(){super();this._dir="";this._theme="spectrum";this._color="";this._scale="";this.trackedChildren=new Set;this._updateRequested=!1;this._contextConsumers=new Map;this.attachShadow({mode:"open"});const e=document.importNode(a.template.content,!0);this.shadowRoot.appendChild(e),this.shouldAdoptStyles(),this.addEventListener("sp-query-theme",this.onQueryTheme),this.addEventListener("sp-language-context",this._handleContextPresence),this.updateComplete=this.__createDeferredPromise();}static get observedAttributes(){return ["color","scale","theme","lang","dir"]}set dir(e){if(e===this.dir)return;this.setAttribute("dir",e),this._dir=e;const t=e==="rtl"?e:"ltr";this.trackedChildren.forEach(s=>{s.setAttribute("dir",t);});}get dir(){return this._dir}attributeChangedCallback(e,t,s){t!==s&&(e==="color"?this.color=s:e==="scale"?this.scale=s:e==="lang"&&s?(this.lang=s,this._provideContext()):e==="theme"?this.theme=s:e==="dir"&&(this.dir=s));}requestUpdate(){window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.styleElement(this):this.shouldAdoptStyles();}get theme(){const e=a.themeFragmentsByKind.get("theme"),{name:t}=e&&e.get("default")||{};return this._theme||t||""}set theme(e){if(e===this._theme)return;const t=e&&d$7.includes(e)?e:this.theme;t!==this._theme&&(this._theme=t,this.requestUpdate()),t?this.setAttribute("theme",t):this.removeAttribute("theme");}get color(){const e=a.themeFragmentsByKind.get("color"),{name:t}=e&&e.get("default")||{};return this._color||t||""}set color(e){if(e===this._color)return;const t=e&&c$6.includes(e)?e:this.color;t!==this._color&&(this._color=t,this.requestUpdate()),t?this.setAttribute("color",t):this.removeAttribute("color");}get scale(){const e=a.themeFragmentsByKind.get("scale"),{name:t}=e&&e.get("default")||{};return this._scale||t||""}set scale(e){if(e===this._scale)return;const t=e&&m$6.includes(e)?e:this.scale;t!==this._scale&&(this._scale=t,this.requestUpdate()),t?this.setAttribute("scale",t):this.removeAttribute("scale");}get styles(){const e=[...a.themeFragmentsByKind.keys()],t=(r,i,n)=>{const o=n&&n!=="theme"&&this.theme==="express"?r.get(`${i}-express`):r.get(i),l=i==="spectrum"||!n||this.hasAttribute(n);if(o&&l)return o.styles};return [...e.reduce((r,i)=>{const n=a.themeFragmentsByKind.get(i);let o;if(i==="app"||i==="core")o=t(n,i);else {const{[i]:l}=this;o=t(n,l,i);}return o&&r.push(o),r},[])]}static get template(){return this.templateElement||(this.templateElement=document.createElement("template"),this.templateElement.innerHTML="<slot></slot>"),this.templateElement}__createDeferredPromise(){return new Promise(e=>{this.__resolve=e;})}onQueryTheme(e){if(e.defaultPrevented)return;e.preventDefault();const{detail:t}=e;t.color=this.color||void 0,t.scale=this.scale||void 0,t.lang=this.lang||document.documentElement.lang||navigator.language,t.theme=this.theme||void 0;}connectedCallback(){if(this.shouldAdoptStyles(),window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this),a.instances.add(this),!this.hasAttribute("dir")){let e=this.assignedSlot||this.parentNode;for(;e!==document.documentElement&&!(e instanceof a);)e=e.assignedSlot||e.parentNode||e.host;this.dir=e.dir==="rtl"?e.dir:"ltr";}}disconnectedCallback(){a.instances.delete(this);}startManagingContentDirection(e){this.trackedChildren.add(e);}stopManagingContentDirection(e){this.trackedChildren.delete(e);}async shouldAdoptStyles(){this._updateRequested||(this.updateComplete=this.__createDeferredPromise(),this._updateRequested=!0,this._updateRequested=await!1,this.adoptStyles(),this.__resolve(!0));}adoptStyles(){const e=this.styles;if(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow&&window.ShadyCSS.ScopingShim){const t=[];for(const[s,r]of a.themeFragmentsByKind)for(const[i,{styles:n}]of r){if(i==="default")continue;let o=n.cssText;a.defaultFragments.has(i)||(o=o.replace(":host",`:host([${s}='${i}'])`)),t.push(o);}window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t,this.localName),window.ShadyCSS.prepareTemplate(a.template,this.localName);}else if(e$b){const t=[];for(const s of e)t.push(s.styleSheet);this.shadowRoot.adoptedStyleSheets=t;}else this.shadowRoot.querySelectorAll("style").forEach(s=>s.remove()),e.forEach(s=>{const r=document.createElement("style");r.textContent=s.cssText,this.shadowRoot.appendChild(r);});}static registerThemeFragment(e,t,s){const r=a.themeFragmentsByKind.get(t)||new Map;r.size===0&&(a.themeFragmentsByKind.set(t,r),r.set("default",{name:e,styles:s}),a.defaultFragments.add(e)),r.set(e,{name:e,styles:s}),a.instances.forEach(i=>i.shouldAdoptStyles());}_provideContext(){this._contextConsumers.forEach(([e,t])=>e(this.lang,t));}_handleContextPresence(e){e.stopPropagation();const t=e.composedPath()[0];if(this._contextConsumers.has(t))return;this._contextConsumers.set(t,[e.detail.callback,()=>this._contextConsumers.delete(t)]);const[s,r]=this._contextConsumers.get(t)||[];s&&r&&s(this.lang||document.documentElement.lang||navigator.language,r);}};a$3.themeFragmentsByKind=new Map,a$3.defaultFragments=new Set(["spectrum"]),a$3.instances=new Set;let Theme=a$3;

customElements.define("sp-theme",Theme);

const e$6=i$c`
:host,:root{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:0.9;--spectrum-global-color-opacity-80:0.8;--spectrum-global-color-opacity-70:0.7;--spectrum-global-color-opacity-60:0.6;--spectrum-global-color-opacity-55:0.55;--spectrum-global-color-opacity-50:0.5;--spectrum-global-color-opacity-42:0.42;--spectrum-global-color-opacity-40:0.4;--spectrum-global-color-opacity-30:0.3;--spectrum-global-color-opacity-25:0.25;--spectrum-global-color-opacity-20:0.2;--spectrum-global-color-opacity-15:0.15;--spectrum-global-color-opacity-10:0.1;--spectrum-global-color-opacity-8:0.08;--spectrum-global-color-opacity-7:0.07;--spectrum-global-color-opacity-6:0.06;--spectrum-global-color-opacity-5:0.05;--spectrum-global-color-opacity-4:0.04;--spectrum-global-color-opacity-0:0;--spectrum-global-color-celery-400-rgb:39,187,54;--spectrum-global-color-celery-400:rgb(var(--spectrum-global-color-celery-400-rgb));--spectrum-global-color-celery-500-rgb:7,167,33;--spectrum-global-color-celery-500:rgb(var(--spectrum-global-color-celery-500-rgb));--spectrum-global-color-celery-600-rgb:0,145,18;--spectrum-global-color-celery-600:rgb(var(--spectrum-global-color-celery-600-rgb));--spectrum-global-color-celery-700-rgb:0,124,15;--spectrum-global-color-celery-700:rgb(var(--spectrum-global-color-celery-700-rgb));--spectrum-global-color-chartreuse-400-rgb:152,197,10;--spectrum-global-color-chartreuse-400:rgb(var(--spectrum-global-color-chartreuse-400-rgb));--spectrum-global-color-chartreuse-500-rgb:135,177,3;--spectrum-global-color-chartreuse-500:rgb(var(--spectrum-global-color-chartreuse-500-rgb));--spectrum-global-color-chartreuse-600-rgb:118,156,0;--spectrum-global-color-chartreuse-600:rgb(var(--spectrum-global-color-chartreuse-600-rgb));--spectrum-global-color-chartreuse-700-rgb:103,136,0;--spectrum-global-color-chartreuse-700:rgb(var(--spectrum-global-color-chartreuse-700-rgb));--spectrum-global-color-yellow-400-rgb:232,198,0;--spectrum-global-color-yellow-400:rgb(var(--spectrum-global-color-yellow-400-rgb));--spectrum-global-color-yellow-500-rgb:215,179,0;--spectrum-global-color-yellow-500:rgb(var(--spectrum-global-color-yellow-500-rgb));--spectrum-global-color-yellow-600-rgb:196,159,0;--spectrum-global-color-yellow-600:rgb(var(--spectrum-global-color-yellow-600-rgb));--spectrum-global-color-yellow-700-rgb:176,140,0;--spectrum-global-color-yellow-700:rgb(var(--spectrum-global-color-yellow-700-rgb));--spectrum-global-color-magenta-400-rgb:222,61,130;--spectrum-global-color-magenta-400:rgb(var(--spectrum-global-color-magenta-400-rgb));--spectrum-global-color-magenta-500-rgb:200,34,105;--spectrum-global-color-magenta-500:rgb(var(--spectrum-global-color-magenta-500-rgb));--spectrum-global-color-magenta-600-rgb:173,9,85;--spectrum-global-color-magenta-600:rgb(var(--spectrum-global-color-magenta-600-rgb));--spectrum-global-color-magenta-700-rgb:142,0,69;--spectrum-global-color-magenta-700:rgb(var(--spectrum-global-color-magenta-700-rgb));--spectrum-global-color-fuchsia-400-rgb:205,58,206;--spectrum-global-color-fuchsia-400:rgb(var(--spectrum-global-color-fuchsia-400-rgb));--spectrum-global-color-fuchsia-500-rgb:182,34,183;--spectrum-global-color-fuchsia-500:rgb(var(--spectrum-global-color-fuchsia-500-rgb));--spectrum-global-color-fuchsia-600-rgb:157,3,158;--spectrum-global-color-fuchsia-600:rgb(var(--spectrum-global-color-fuchsia-600-rgb));--spectrum-global-color-fuchsia-700-rgb:128,0,129;--spectrum-global-color-fuchsia-700:rgb(var(--spectrum-global-color-fuchsia-700-rgb));--spectrum-global-color-purple-400-rgb:157,87,244;--spectrum-global-color-purple-400:rgb(var(--spectrum-global-color-purple-400-rgb));--spectrum-global-color-purple-500-rgb:137,61,231;--spectrum-global-color-purple-500:rgb(var(--spectrum-global-color-purple-500-rgb));--spectrum-global-color-purple-600-rgb:115,38,211;--spectrum-global-color-purple-600:rgb(var(--spectrum-global-color-purple-600-rgb));--spectrum-global-color-purple-700-rgb:93,19,183;--spectrum-global-color-purple-700:rgb(var(--spectrum-global-color-purple-700-rgb));--spectrum-global-color-indigo-400-rgb:104,109,244;--spectrum-global-color-indigo-400:rgb(var(--spectrum-global-color-indigo-400-rgb));--spectrum-global-color-indigo-500-rgb:82,88,228;--spectrum-global-color-indigo-500:rgb(var(--spectrum-global-color-indigo-500-rgb));--spectrum-global-color-indigo-600-rgb:64,70,202;--spectrum-global-color-indigo-600:rgb(var(--spectrum-global-color-indigo-600-rgb));--spectrum-global-color-indigo-700-rgb:50,54,168;--spectrum-global-color-indigo-700:rgb(var(--spectrum-global-color-indigo-700-rgb));--spectrum-global-color-seafoam-400-rgb:0,161,154;--spectrum-global-color-seafoam-400:rgb(var(--spectrum-global-color-seafoam-400-rgb));--spectrum-global-color-seafoam-500-rgb:0,140,135;--spectrum-global-color-seafoam-500:rgb(var(--spectrum-global-color-seafoam-500-rgb));--spectrum-global-color-seafoam-600-rgb:0,119,114;--spectrum-global-color-seafoam-600:rgb(var(--spectrum-global-color-seafoam-600-rgb));--spectrum-global-color-seafoam-700-rgb:0,99,95;--spectrum-global-color-seafoam-700:rgb(var(--spectrum-global-color-seafoam-700-rgb));--spectrum-global-color-red-400-rgb:234,56,41;--spectrum-global-color-red-400:rgb(var(--spectrum-global-color-red-400-rgb));--spectrum-global-color-red-500-rgb:211,21,16;--spectrum-global-color-red-500:rgb(var(--spectrum-global-color-red-500-rgb));--spectrum-global-color-red-600-rgb:180,0,0;--spectrum-global-color-red-600:rgb(var(--spectrum-global-color-red-600-rgb));--spectrum-global-color-red-700-rgb:147,0,0;--spectrum-global-color-red-700:rgb(var(--spectrum-global-color-red-700-rgb));--spectrum-global-color-orange-400-rgb:246,133,17;--spectrum-global-color-orange-400:rgb(var(--spectrum-global-color-orange-400-rgb));--spectrum-global-color-orange-500-rgb:228,111,0;--spectrum-global-color-orange-500:rgb(var(--spectrum-global-color-orange-500-rgb));--spectrum-global-color-orange-600-rgb:203,93,0;--spectrum-global-color-orange-600:rgb(var(--spectrum-global-color-orange-600-rgb));--spectrum-global-color-orange-700-rgb:177,76,0;--spectrum-global-color-orange-700:rgb(var(--spectrum-global-color-orange-700-rgb));--spectrum-global-color-green-400-rgb:0,143,93;--spectrum-global-color-green-400:rgb(var(--spectrum-global-color-green-400-rgb));--spectrum-global-color-green-500-rgb:0,122,77;--spectrum-global-color-green-500:rgb(var(--spectrum-global-color-green-500-rgb));--spectrum-global-color-green-600-rgb:0,101,62;--spectrum-global-color-green-600:rgb(var(--spectrum-global-color-green-600-rgb));--spectrum-global-color-green-700-rgb:0,81,50;--spectrum-global-color-green-700:rgb(var(--spectrum-global-color-green-700-rgb));--spectrum-global-color-blue-400-rgb:20,122,243;--spectrum-global-color-blue-400:rgb(var(--spectrum-global-color-blue-400-rgb));--spectrum-global-color-blue-500-rgb:2,101,220;--spectrum-global-color-blue-500:rgb(var(--spectrum-global-color-blue-500-rgb));--spectrum-global-color-blue-600-rgb:0,84,182;--spectrum-global-color-blue-600:rgb(var(--spectrum-global-color-blue-600-rgb));--spectrum-global-color-blue-700-rgb:0,68,145;--spectrum-global-color-blue-700:rgb(var(--spectrum-global-color-blue-700-rgb));--spectrum-global-color-gray-50-rgb:255,255,255;--spectrum-global-color-gray-50:rgb(var(--spectrum-global-color-gray-50-rgb));--spectrum-global-color-gray-75-rgb:253,253,253;--spectrum-global-color-gray-75:rgb(var(--spectrum-global-color-gray-75-rgb));--spectrum-global-color-gray-100-rgb:248,248,248;--spectrum-global-color-gray-100:rgb(var(--spectrum-global-color-gray-100-rgb));--spectrum-global-color-gray-200-rgb:230,230,230;--spectrum-global-color-gray-200:rgb(var(--spectrum-global-color-gray-200-rgb));--spectrum-global-color-gray-300-rgb:213,213,213;--spectrum-global-color-gray-300:rgb(var(--spectrum-global-color-gray-300-rgb));--spectrum-global-color-gray-400-rgb:177,177,177;--spectrum-global-color-gray-400:rgb(var(--spectrum-global-color-gray-400-rgb));--spectrum-global-color-gray-500-rgb:144,144,144;--spectrum-global-color-gray-500:rgb(var(--spectrum-global-color-gray-500-rgb));--spectrum-global-color-gray-600-rgb:109,109,109;--spectrum-global-color-gray-600:rgb(var(--spectrum-global-color-gray-600-rgb));--spectrum-global-color-gray-700-rgb:70,70,70;--spectrum-global-color-gray-700:rgb(var(--spectrum-global-color-gray-700-rgb));--spectrum-global-color-gray-800-rgb:34,34,34;--spectrum-global-color-gray-800:rgb(var(--spectrum-global-color-gray-800-rgb));--spectrum-global-color-gray-900-rgb:0,0,0;--spectrum-global-color-gray-900:rgb(var(--spectrum-global-color-gray-900-rgb));--spectrum-alias-background-color-primary:var(
--spectrum-global-color-gray-50
);--spectrum-alias-background-color-secondary:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-tertiary:var(
--spectrum-global-color-gray-300
);--spectrum-alias-background-color-modal-overlay:rgba(0,0,0,.4);--spectrum-alias-dropshadow-color:rgba(0,0,0,.15);--spectrum-alias-background-color-hover-overlay:rgba(0,0,0,.04);--spectrum-alias-highlight-hover:rgba(0,0,0,.06);--spectrum-alias-highlight-down:rgba(0,0,0,.1);--spectrum-alias-highlight-selected:rgba(2,101,220,.1);--spectrum-alias-highlight-selected-hover:rgba(2,101,220,.2);--spectrum-alias-text-highlight-color:rgba(2,101,220,.2);--spectrum-alias-background-color-quickactions:hsla(0,0%,97%,.9);--spectrum-alias-border-color-selected:var(
--spectrum-global-color-blue-500
);--spectrum-alias-border-color-translucent:rgba(0,0,0,.1);--spectrum-alias-radial-reaction-color-default:rgba(34,34,34,.6);--spectrum-alias-pasteboard-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-alias-appframe-border-color:var(
--spectrum-global-color-gray-300
);--spectrum-alias-appframe-separator-color:var(
--spectrum-global-color-gray-300
);--spectrum-scrollbar-mac-s-track-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-scrollbar-mac-m-track-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-scrollbar-mac-l-track-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-well-background-color:rgba(34,34,34,.02)}:host,:root{color-scheme:light}:host,:root{--spectrum-overlay-opacity:0.4;--spectrum-drop-shadow-color-rgb:0,0,0;--spectrum-drop-shadow-color-opacity:0.15;--spectrum-drop-shadow-color:rgba(var(--spectrum-drop-shadow-color-rgb),var(--spectrum-drop-shadow-color-opacity));--spectrum-background-base-color:var(--spectrum-gray-200);--spectrum-background-layer-1-color:var(--spectrum-gray-100);--spectrum-background-layer-2-color:var(--spectrum-gray-50);--spectrum-neutral-background-color-default:var(--spectrum-gray-800);--spectrum-neutral-background-color-hover:var(--spectrum-gray-900);--spectrum-neutral-background-color-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-background-color-default:var(
--spectrum-gray-600
);--spectrum-neutral-subdued-background-color-hover:var(--spectrum-gray-700);--spectrum-neutral-subdued-background-color-down:var(--spectrum-gray-800);--spectrum-neutral-subdued-background-color-key-focus:var(
--spectrum-gray-700
);--spectrum-accent-background-color-default:var(
--spectrum-accent-color-900
);--spectrum-accent-background-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-background-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-background-color-key-focus:var(
--spectrum-accent-color-1000
);--spectrum-informative-background-color-default:var(
--spectrum-informative-color-900
);--spectrum-informative-background-color-hover:var(
--spectrum-informative-color-1000
);--spectrum-informative-background-color-down:var(
--spectrum-informative-color-1100
);--spectrum-informative-background-color-key-focus:var(
--spectrum-informative-color-1000
);--spectrum-negative-background-color-default:var(
--spectrum-negative-color-900
);--spectrum-negative-background-color-hover:var(
--spectrum-negative-color-1000
);--spectrum-negative-background-color-down:var(
--spectrum-negative-color-1100
);--spectrum-negative-background-color-key-focus:var(
--spectrum-negative-color-1000
);--spectrum-positive-background-color-default:var(
--spectrum-positive-color-900
);--spectrum-positive-background-color-hover:var(
--spectrum-positive-color-1000
);--spectrum-positive-background-color-down:var(
--spectrum-positive-color-1100
);--spectrum-positive-background-color-key-focus:var(
--spectrum-positive-color-1000
);--spectrum-notice-background-color-default:var(
--spectrum-notice-color-600
);--spectrum-gray-background-color-default:var(--spectrum-gray-700);--spectrum-red-background-color-default:var(--spectrum-red-900);--spectrum-orange-background-color-default:var(--spectrum-orange-600);--spectrum-yellow-background-color-default:var(--spectrum-yellow-400);--spectrum-chartreuse-background-color-default:var(
--spectrum-chartreuse-500
);--spectrum-celery-background-color-default:var(--spectrum-celery-600);--spectrum-green-background-color-default:var(--spectrum-green-900);--spectrum-seafoam-background-color-default:var(--spectrum-seafoam-900);--spectrum-cyan-background-color-default:var(--spectrum-cyan-900);--spectrum-blue-background-color-default:var(--spectrum-blue-900);--spectrum-indigo-background-color-default:var(--spectrum-indigo-900);--spectrum-purple-background-color-default:var(--spectrum-purple-900);--spectrum-fuchsia-background-color-default:var(--spectrum-fuchsia-900);--spectrum-magenta-background-color-default:var(--spectrum-magenta-900);--spectrum-neutral-visual-color:var(--spectrum-gray-500);--spectrum-accent-visual-color:var(--spectrum-accent-color-800);--spectrum-informative-visual-color:var(--spectrum-informative-color-800);--spectrum-negative-visual-color:var(--spectrum-negative-color-800);--spectrum-notice-visual-color:var(--spectrum-notice-color-700);--spectrum-positive-visual-color:var(--spectrum-positive-color-700);--spectrum-gray-visual-color:var(--spectrum-gray-500);--spectrum-red-visual-color:var(--spectrum-red-800);--spectrum-orange-visual-color:var(--spectrum-orange-700);--spectrum-yellow-visual-color:var(--spectrum-yellow-600);--spectrum-chartreuse-visual-color:var(--spectrum-chartreuse-600);--spectrum-celery-visual-color:var(--spectrum-celery-700);--spectrum-green-visual-color:var(--spectrum-green-700);--spectrum-seafoam-visual-color:var(--spectrum-seafoam-700);--spectrum-cyan-visual-color:var(--spectrum-cyan-600);--spectrum-blue-visual-color:var(--spectrum-blue-800);--spectrum-indigo-visual-color:var(--spectrum-indigo-800);--spectrum-purple-visual-color:var(--spectrum-purple-800);--spectrum-fuchsia-visual-color:var(--spectrum-fuchsia-800);--spectrum-magenta-visual-color:var(--spectrum-magenta-800);--spectrum-opacity-checkerboard-square-dark:var(--spectrum-gray-200);--spectrum-gray-50-rgb:255,255,255;--spectrum-gray-50:rgba(var(--spectrum-gray-50-rgb));--spectrum-gray-75-rgb:253,253,253;--spectrum-gray-75:rgba(var(--spectrum-gray-75-rgb));--spectrum-gray-100-rgb:248,248,248;--spectrum-gray-100:rgba(var(--spectrum-gray-100-rgb));--spectrum-gray-200-rgb:230,230,230;--spectrum-gray-200:rgba(var(--spectrum-gray-200-rgb));--spectrum-gray-300-rgb:213,213,213;--spectrum-gray-300:rgba(var(--spectrum-gray-300-rgb));--spectrum-gray-400-rgb:177,177,177;--spectrum-gray-400:rgba(var(--spectrum-gray-400-rgb));--spectrum-gray-500-rgb:144,144,144;--spectrum-gray-500:rgba(var(--spectrum-gray-500-rgb));--spectrum-gray-600-rgb:109,109,109;--spectrum-gray-600:rgba(var(--spectrum-gray-600-rgb));--spectrum-gray-700-rgb:70,70,70;--spectrum-gray-700:rgba(var(--spectrum-gray-700-rgb));--spectrum-gray-800-rgb:34,34,34;--spectrum-gray-800:rgba(var(--spectrum-gray-800-rgb));--spectrum-gray-900-rgb:0,0,0;--spectrum-gray-900:rgba(var(--spectrum-gray-900-rgb));--spectrum-blue-100-rgb:224,242,255;--spectrum-blue-100:rgba(var(--spectrum-blue-100-rgb));--spectrum-blue-200-rgb:202,232,255;--spectrum-blue-200:rgba(var(--spectrum-blue-200-rgb));--spectrum-blue-300-rgb:181,222,255;--spectrum-blue-300:rgba(var(--spectrum-blue-300-rgb));--spectrum-blue-400-rgb:150,206,253;--spectrum-blue-400:rgba(var(--spectrum-blue-400-rgb));--spectrum-blue-500-rgb:120,187,250;--spectrum-blue-500:rgba(var(--spectrum-blue-500-rgb));--spectrum-blue-600-rgb:89,167,246;--spectrum-blue-600:rgba(var(--spectrum-blue-600-rgb));--spectrum-blue-700-rgb:56,146,243;--spectrum-blue-700:rgba(var(--spectrum-blue-700-rgb));--spectrum-blue-800-rgb:20,122,243;--spectrum-blue-800:rgba(var(--spectrum-blue-800-rgb));--spectrum-blue-900-rgb:2,101,220;--spectrum-blue-900:rgba(var(--spectrum-blue-900-rgb));--spectrum-blue-1000-rgb:0,84,182;--spectrum-blue-1000:rgba(var(--spectrum-blue-1000-rgb));--spectrum-blue-1100-rgb:0,68,145;--spectrum-blue-1100:rgba(var(--spectrum-blue-1100-rgb));--spectrum-blue-1200-rgb:0,53,113;--spectrum-blue-1200:rgba(var(--spectrum-blue-1200-rgb));--spectrum-blue-1300-rgb:0,39,84;--spectrum-blue-1300:rgba(var(--spectrum-blue-1300-rgb));--spectrum-blue-1400-rgb:0,28,60;--spectrum-blue-1400:rgba(var(--spectrum-blue-1400-rgb));--spectrum-red-100-rgb:255,235,231;--spectrum-red-100:rgba(var(--spectrum-red-100-rgb));--spectrum-red-200-rgb:255,221,214;--spectrum-red-200:rgba(var(--spectrum-red-200-rgb));--spectrum-red-300-rgb:255,205,195;--spectrum-red-300:rgba(var(--spectrum-red-300-rgb));--spectrum-red-400-rgb:255,183,169;--spectrum-red-400:rgba(var(--spectrum-red-400-rgb));--spectrum-red-500-rgb:255,155,136;--spectrum-red-500:rgba(var(--spectrum-red-500-rgb));--spectrum-red-600-rgb:255,124,101;--spectrum-red-600:rgba(var(--spectrum-red-600-rgb));--spectrum-red-700-rgb:247,92,70;--spectrum-red-700:rgba(var(--spectrum-red-700-rgb));--spectrum-red-800-rgb:234,56,41;--spectrum-red-800:rgba(var(--spectrum-red-800-rgb));--spectrum-red-900-rgb:211,21,16;--spectrum-red-900:rgba(var(--spectrum-red-900-rgb));--spectrum-red-1000-rgb:180,0,0;--spectrum-red-1000:rgba(var(--spectrum-red-1000-rgb));--spectrum-red-1100-rgb:147,0,0;--spectrum-red-1100:rgba(var(--spectrum-red-1100-rgb));--spectrum-red-1200-rgb:116,0,0;--spectrum-red-1200:rgba(var(--spectrum-red-1200-rgb));--spectrum-red-1300-rgb:89,0,0;--spectrum-red-1300:rgba(var(--spectrum-red-1300-rgb));--spectrum-red-1400-rgb:67,0,0;--spectrum-red-1400:rgba(var(--spectrum-red-1400-rgb));--spectrum-orange-100-rgb:255,236,204;--spectrum-orange-100:rgba(var(--spectrum-orange-100-rgb));--spectrum-orange-200-rgb:255,223,173;--spectrum-orange-200:rgba(var(--spectrum-orange-200-rgb));--spectrum-orange-300-rgb:253,210,145;--spectrum-orange-300:rgba(var(--spectrum-orange-300-rgb));--spectrum-orange-400-rgb:255,187,99;--spectrum-orange-400:rgba(var(--spectrum-orange-400-rgb));--spectrum-orange-500-rgb:255,160,55;--spectrum-orange-500:rgba(var(--spectrum-orange-500-rgb));--spectrum-orange-600-rgb:246,133,17;--spectrum-orange-600:rgba(var(--spectrum-orange-600-rgb));--spectrum-orange-700-rgb:228,111,0;--spectrum-orange-700:rgba(var(--spectrum-orange-700-rgb));--spectrum-orange-800-rgb:203,93,0;--spectrum-orange-800:rgba(var(--spectrum-orange-800-rgb));--spectrum-orange-900-rgb:177,76,0;--spectrum-orange-900:rgba(var(--spectrum-orange-900-rgb));--spectrum-orange-1000-rgb:149,61,0;--spectrum-orange-1000:rgba(var(--spectrum-orange-1000-rgb));--spectrum-orange-1100-rgb:122,47,0;--spectrum-orange-1100:rgba(var(--spectrum-orange-1100-rgb));--spectrum-orange-1200-rgb:97,35,0;--spectrum-orange-1200:rgba(var(--spectrum-orange-1200-rgb));--spectrum-orange-1300-rgb:73,25,1;--spectrum-orange-1300:rgba(var(--spectrum-orange-1300-rgb));--spectrum-orange-1400-rgb:53,18,1;--spectrum-orange-1400:rgba(var(--spectrum-orange-1400-rgb));--spectrum-yellow-100-rgb:251,241,152;--spectrum-yellow-100:rgba(var(--spectrum-yellow-100-rgb));--spectrum-yellow-200-rgb:248,231,80;--spectrum-yellow-200:rgba(var(--spectrum-yellow-200-rgb));--spectrum-yellow-300-rgb:248,217,4;--spectrum-yellow-300:rgba(var(--spectrum-yellow-300-rgb));--spectrum-yellow-400-rgb:232,198,0;--spectrum-yellow-400:rgba(var(--spectrum-yellow-400-rgb));--spectrum-yellow-500-rgb:215,179,0;--spectrum-yellow-500:rgba(var(--spectrum-yellow-500-rgb));--spectrum-yellow-600-rgb:196,159,0;--spectrum-yellow-600:rgba(var(--spectrum-yellow-600-rgb));--spectrum-yellow-700-rgb:176,140,0;--spectrum-yellow-700:rgba(var(--spectrum-yellow-700-rgb));--spectrum-yellow-800-rgb:155,120,0;--spectrum-yellow-800:rgba(var(--spectrum-yellow-800-rgb));--spectrum-yellow-900-rgb:133,102,0;--spectrum-yellow-900:rgba(var(--spectrum-yellow-900-rgb));--spectrum-yellow-1000-rgb:112,83,0;--spectrum-yellow-1000:rgba(var(--spectrum-yellow-1000-rgb));--spectrum-yellow-1100-rgb:91,67,0;--spectrum-yellow-1100:rgba(var(--spectrum-yellow-1100-rgb));--spectrum-yellow-1200-rgb:72,51,0;--spectrum-yellow-1200:rgba(var(--spectrum-yellow-1200-rgb));--spectrum-yellow-1300-rgb:54,37,0;--spectrum-yellow-1300:rgba(var(--spectrum-yellow-1300-rgb));--spectrum-yellow-1400-rgb:40,26,0;--spectrum-yellow-1400:rgba(var(--spectrum-yellow-1400-rgb));--spectrum-chartreuse-100-rgb:219,252,110;--spectrum-chartreuse-100:rgba(var(--spectrum-chartreuse-100-rgb));--spectrum-chartreuse-200-rgb:203,244,67;--spectrum-chartreuse-200:rgba(var(--spectrum-chartreuse-200-rgb));--spectrum-chartreuse-300-rgb:188,233,42;--spectrum-chartreuse-300:rgba(var(--spectrum-chartreuse-300-rgb));--spectrum-chartreuse-400-rgb:170,216,22;--spectrum-chartreuse-400:rgba(var(--spectrum-chartreuse-400-rgb));--spectrum-chartreuse-500-rgb:152,197,10;--spectrum-chartreuse-500:rgba(var(--spectrum-chartreuse-500-rgb));--spectrum-chartreuse-600-rgb:135,177,3;--spectrum-chartreuse-600:rgba(var(--spectrum-chartreuse-600-rgb));--spectrum-chartreuse-700-rgb:118,156,0;--spectrum-chartreuse-700:rgba(var(--spectrum-chartreuse-700-rgb));--spectrum-chartreuse-800-rgb:103,136,0;--spectrum-chartreuse-800:rgba(var(--spectrum-chartreuse-800-rgb));--spectrum-chartreuse-900-rgb:87,116,0;--spectrum-chartreuse-900:rgba(var(--spectrum-chartreuse-900-rgb));--spectrum-chartreuse-1000-rgb:72,96,0;--spectrum-chartreuse-1000:rgba(var(--spectrum-chartreuse-1000-rgb));--spectrum-chartreuse-1100-rgb:58,77,0;--spectrum-chartreuse-1100:rgba(var(--spectrum-chartreuse-1100-rgb));--spectrum-chartreuse-1200-rgb:44,59,0;--spectrum-chartreuse-1200:rgba(var(--spectrum-chartreuse-1200-rgb));--spectrum-chartreuse-1300-rgb:33,44,0;--spectrum-chartreuse-1300:rgba(var(--spectrum-chartreuse-1300-rgb));--spectrum-chartreuse-1400-rgb:24,31,0;--spectrum-chartreuse-1400:rgba(var(--spectrum-chartreuse-1400-rgb));--spectrum-celery-100-rgb:205,252,191;--spectrum-celery-100:rgba(var(--spectrum-celery-100-rgb));--spectrum-celery-200-rgb:174,246,157;--spectrum-celery-200:rgba(var(--spectrum-celery-200-rgb));--spectrum-celery-300-rgb:150,238,133;--spectrum-celery-300:rgba(var(--spectrum-celery-300-rgb));--spectrum-celery-400-rgb:114,224,106;--spectrum-celery-400:rgba(var(--spectrum-celery-400-rgb));--spectrum-celery-500-rgb:78,207,80;--spectrum-celery-500:rgba(var(--spectrum-celery-500-rgb));--spectrum-celery-600-rgb:39,187,54;--spectrum-celery-600:rgba(var(--spectrum-celery-600-rgb));--spectrum-celery-700-rgb:7,167,33;--spectrum-celery-700:rgba(var(--spectrum-celery-700-rgb));--spectrum-celery-800-rgb:0,145,18;--spectrum-celery-800:rgba(var(--spectrum-celery-800-rgb));--spectrum-celery-900-rgb:0,124,15;--spectrum-celery-900:rgba(var(--spectrum-celery-900-rgb));--spectrum-celery-1000-rgb:0,103,15;--spectrum-celery-1000:rgba(var(--spectrum-celery-1000-rgb));--spectrum-celery-1100-rgb:0,83,13;--spectrum-celery-1100:rgba(var(--spectrum-celery-1100-rgb));--spectrum-celery-1200-rgb:0,64,10;--spectrum-celery-1200:rgba(var(--spectrum-celery-1200-rgb));--spectrum-celery-1300-rgb:0,48,7;--spectrum-celery-1300:rgba(var(--spectrum-celery-1300-rgb));--spectrum-celery-1400-rgb:0,34,5;--spectrum-celery-1400:rgba(var(--spectrum-celery-1400-rgb));--spectrum-green-100-rgb:206,248,224;--spectrum-green-100:rgba(var(--spectrum-green-100-rgb));--spectrum-green-200-rgb:173,244,206;--spectrum-green-200:rgba(var(--spectrum-green-200-rgb));--spectrum-green-300-rgb:137,236,188;--spectrum-green-300:rgba(var(--spectrum-green-300-rgb));--spectrum-green-400-rgb:103,222,168;--spectrum-green-400:rgba(var(--spectrum-green-400-rgb));--spectrum-green-500-rgb:73,204,147;--spectrum-green-500:rgba(var(--spectrum-green-500-rgb));--spectrum-green-600-rgb:47,184,128;--spectrum-green-600:rgba(var(--spectrum-green-600-rgb));--spectrum-green-700-rgb:21,164,110;--spectrum-green-700:rgba(var(--spectrum-green-700-rgb));--spectrum-green-800-rgb:0,143,93;--spectrum-green-800:rgba(var(--spectrum-green-800-rgb));--spectrum-green-900-rgb:0,122,77;--spectrum-green-900:rgba(var(--spectrum-green-900-rgb));--spectrum-green-1000-rgb:0,101,62;--spectrum-green-1000:rgba(var(--spectrum-green-1000-rgb));--spectrum-green-1100-rgb:0,81,50;--spectrum-green-1100:rgba(var(--spectrum-green-1100-rgb));--spectrum-green-1200-rgb:5,63,39;--spectrum-green-1200:rgba(var(--spectrum-green-1200-rgb));--spectrum-green-1300-rgb:10,46,29;--spectrum-green-1300:rgba(var(--spectrum-green-1300-rgb));--spectrum-green-1400-rgb:10,32,21;--spectrum-green-1400:rgba(var(--spectrum-green-1400-rgb));--spectrum-seafoam-100-rgb:206,247,243;--spectrum-seafoam-100:rgba(var(--spectrum-seafoam-100-rgb));--spectrum-seafoam-200-rgb:170,241,234;--spectrum-seafoam-200:rgba(var(--spectrum-seafoam-200-rgb));--spectrum-seafoam-300-rgb:140,233,226;--spectrum-seafoam-300:rgba(var(--spectrum-seafoam-300-rgb));--spectrum-seafoam-400-rgb:101,218,210;--spectrum-seafoam-400:rgba(var(--spectrum-seafoam-400-rgb));--spectrum-seafoam-500-rgb:63,201,193;--spectrum-seafoam-500:rgba(var(--spectrum-seafoam-500-rgb));--spectrum-seafoam-600-rgb:15,181,174;--spectrum-seafoam-600:rgba(var(--spectrum-seafoam-600-rgb));--spectrum-seafoam-700-rgb:0,161,154;--spectrum-seafoam-700:rgba(var(--spectrum-seafoam-700-rgb));--spectrum-seafoam-800-rgb:0,140,135;--spectrum-seafoam-800:rgba(var(--spectrum-seafoam-800-rgb));--spectrum-seafoam-900-rgb:0,119,114;--spectrum-seafoam-900:rgba(var(--spectrum-seafoam-900-rgb));--spectrum-seafoam-1000-rgb:0,99,95;--spectrum-seafoam-1000:rgba(var(--spectrum-seafoam-1000-rgb));--spectrum-seafoam-1100-rgb:12,79,76;--spectrum-seafoam-1100:rgba(var(--spectrum-seafoam-1100-rgb));--spectrum-seafoam-1200-rgb:18,60,58;--spectrum-seafoam-1200:rgba(var(--spectrum-seafoam-1200-rgb));--spectrum-seafoam-1300-rgb:18,44,43;--spectrum-seafoam-1300:rgba(var(--spectrum-seafoam-1300-rgb));--spectrum-seafoam-1400-rgb:15,31,30;--spectrum-seafoam-1400:rgba(var(--spectrum-seafoam-1400-rgb));--spectrum-cyan-100-rgb:197,248,255;--spectrum-cyan-100:rgba(var(--spectrum-cyan-100-rgb));--spectrum-cyan-200-rgb:164,240,255;--spectrum-cyan-200:rgba(var(--spectrum-cyan-200-rgb));--spectrum-cyan-300-rgb:136,231,250;--spectrum-cyan-300:rgba(var(--spectrum-cyan-300-rgb));--spectrum-cyan-400-rgb:96,216,243;--spectrum-cyan-400:rgba(var(--spectrum-cyan-400-rgb));--spectrum-cyan-500-rgb:51,197,232;--spectrum-cyan-500:rgba(var(--spectrum-cyan-500-rgb));--spectrum-cyan-600-rgb:18,176,218;--spectrum-cyan-600:rgba(var(--spectrum-cyan-600-rgb));--spectrum-cyan-700-rgb:1,156,200;--spectrum-cyan-700:rgba(var(--spectrum-cyan-700-rgb));--spectrum-cyan-800-rgb:0,134,180;--spectrum-cyan-800:rgba(var(--spectrum-cyan-800-rgb));--spectrum-cyan-900-rgb:0,113,159;--spectrum-cyan-900:rgba(var(--spectrum-cyan-900-rgb));--spectrum-cyan-1000-rgb:0,93,137;--spectrum-cyan-1000:rgba(var(--spectrum-cyan-1000-rgb));--spectrum-cyan-1100-rgb:0,74,115;--spectrum-cyan-1100:rgba(var(--spectrum-cyan-1100-rgb));--spectrum-cyan-1200-rgb:0,57,93;--spectrum-cyan-1200:rgba(var(--spectrum-cyan-1200-rgb));--spectrum-cyan-1300-rgb:0,42,70;--spectrum-cyan-1300:rgba(var(--spectrum-cyan-1300-rgb));--spectrum-cyan-1400-rgb:0,30,51;--spectrum-cyan-1400:rgba(var(--spectrum-cyan-1400-rgb));--spectrum-indigo-100-rgb:237,238,255;--spectrum-indigo-100:rgba(var(--spectrum-indigo-100-rgb));--spectrum-indigo-200-rgb:224,226,255;--spectrum-indigo-200:rgba(var(--spectrum-indigo-200-rgb));--spectrum-indigo-300-rgb:211,213,255;--spectrum-indigo-300:rgba(var(--spectrum-indigo-300-rgb));--spectrum-indigo-400-rgb:193,196,255;--spectrum-indigo-400:rgba(var(--spectrum-indigo-400-rgb));--spectrum-indigo-500-rgb:172,175,255;--spectrum-indigo-500:rgba(var(--spectrum-indigo-500-rgb));--spectrum-indigo-600-rgb:149,153,255;--spectrum-indigo-600:rgba(var(--spectrum-indigo-600-rgb));--spectrum-indigo-700-rgb:126,132,252;--spectrum-indigo-700:rgba(var(--spectrum-indigo-700-rgb));--spectrum-indigo-800-rgb:104,109,244;--spectrum-indigo-800:rgba(var(--spectrum-indigo-800-rgb));--spectrum-indigo-900-rgb:82,88,228;--spectrum-indigo-900:rgba(var(--spectrum-indigo-900-rgb));--spectrum-indigo-1000-rgb:64,70,202;--spectrum-indigo-1000:rgba(var(--spectrum-indigo-1000-rgb));--spectrum-indigo-1100-rgb:50,54,168;--spectrum-indigo-1100:rgba(var(--spectrum-indigo-1100-rgb));--spectrum-indigo-1200-rgb:38,41,134;--spectrum-indigo-1200:rgba(var(--spectrum-indigo-1200-rgb));--spectrum-indigo-1300-rgb:27,30,100;--spectrum-indigo-1300:rgba(var(--spectrum-indigo-1300-rgb));--spectrum-indigo-1400-rgb:20,22,72;--spectrum-indigo-1400:rgba(var(--spectrum-indigo-1400-rgb));--spectrum-purple-100-rgb:246,235,255;--spectrum-purple-100:rgba(var(--spectrum-purple-100-rgb));--spectrum-purple-200-rgb:238,221,255;--spectrum-purple-200:rgba(var(--spectrum-purple-200-rgb));--spectrum-purple-300-rgb:230,208,255;--spectrum-purple-300:rgba(var(--spectrum-purple-300-rgb));--spectrum-purple-400-rgb:219,187,254;--spectrum-purple-400:rgba(var(--spectrum-purple-400-rgb));--spectrum-purple-500-rgb:204,164,253;--spectrum-purple-500:rgba(var(--spectrum-purple-500-rgb));--spectrum-purple-600-rgb:189,139,252;--spectrum-purple-600:rgba(var(--spectrum-purple-600-rgb));--spectrum-purple-700-rgb:174,114,249;--spectrum-purple-700:rgba(var(--spectrum-purple-700-rgb));--spectrum-purple-800-rgb:157,87,244;--spectrum-purple-800:rgba(var(--spectrum-purple-800-rgb));--spectrum-purple-900-rgb:137,61,231;--spectrum-purple-900:rgba(var(--spectrum-purple-900-rgb));--spectrum-purple-1000-rgb:115,38,211;--spectrum-purple-1000:rgba(var(--spectrum-purple-1000-rgb));--spectrum-purple-1100-rgb:93,19,183;--spectrum-purple-1100:rgba(var(--spectrum-purple-1100-rgb));--spectrum-purple-1200-rgb:71,12,148;--spectrum-purple-1200:rgba(var(--spectrum-purple-1200-rgb));--spectrum-purple-1300-rgb:51,16,106;--spectrum-purple-1300:rgba(var(--spectrum-purple-1300-rgb));--spectrum-purple-1400-rgb:35,15,73;--spectrum-purple-1400:rgba(var(--spectrum-purple-1400-rgb));--spectrum-fuchsia-100-rgb:255,233,252;--spectrum-fuchsia-100:rgba(var(--spectrum-fuchsia-100-rgb));--spectrum-fuchsia-200-rgb:255,218,250;--spectrum-fuchsia-200:rgba(var(--spectrum-fuchsia-200-rgb));--spectrum-fuchsia-300-rgb:254,199,248;--spectrum-fuchsia-300:rgba(var(--spectrum-fuchsia-300-rgb));--spectrum-fuchsia-400-rgb:251,174,246;--spectrum-fuchsia-400:rgba(var(--spectrum-fuchsia-400-rgb));--spectrum-fuchsia-500-rgb:245,146,243;--spectrum-fuchsia-500:rgba(var(--spectrum-fuchsia-500-rgb));--spectrum-fuchsia-600-rgb:237,116,237;--spectrum-fuchsia-600:rgba(var(--spectrum-fuchsia-600-rgb));--spectrum-fuchsia-700-rgb:224,85,226;--spectrum-fuchsia-700:rgba(var(--spectrum-fuchsia-700-rgb));--spectrum-fuchsia-800-rgb:205,58,206;--spectrum-fuchsia-800:rgba(var(--spectrum-fuchsia-800-rgb));--spectrum-fuchsia-900-rgb:182,34,183;--spectrum-fuchsia-900:rgba(var(--spectrum-fuchsia-900-rgb));--spectrum-fuchsia-1000-rgb:157,3,158;--spectrum-fuchsia-1000:rgba(var(--spectrum-fuchsia-1000-rgb));--spectrum-fuchsia-1100-rgb:128,0,129;--spectrum-fuchsia-1100:rgba(var(--spectrum-fuchsia-1100-rgb));--spectrum-fuchsia-1200-rgb:100,6,100;--spectrum-fuchsia-1200:rgba(var(--spectrum-fuchsia-1200-rgb));--spectrum-fuchsia-1300-rgb:71,14,70;--spectrum-fuchsia-1300:rgba(var(--spectrum-fuchsia-1300-rgb));--spectrum-fuchsia-1400-rgb:50,13,49;--spectrum-fuchsia-1400:rgba(var(--spectrum-fuchsia-1400-rgb));--spectrum-magenta-100-rgb:255,234,241;--spectrum-magenta-100:rgba(var(--spectrum-magenta-100-rgb));--spectrum-magenta-200-rgb:255,220,232;--spectrum-magenta-200:rgba(var(--spectrum-magenta-200-rgb));--spectrum-magenta-300-rgb:255,202,221;--spectrum-magenta-300:rgba(var(--spectrum-magenta-300-rgb));--spectrum-magenta-400-rgb:255,178,206;--spectrum-magenta-400:rgba(var(--spectrum-magenta-400-rgb));--spectrum-magenta-500-rgb:255,149,189;--spectrum-magenta-500:rgba(var(--spectrum-magenta-500-rgb));--spectrum-magenta-600-rgb:250,119,170;--spectrum-magenta-600:rgba(var(--spectrum-magenta-600-rgb));--spectrum-magenta-700-rgb:239,90,152;--spectrum-magenta-700:rgba(var(--spectrum-magenta-700-rgb));--spectrum-magenta-800-rgb:222,61,130;--spectrum-magenta-800:rgba(var(--spectrum-magenta-800-rgb));--spectrum-magenta-900-rgb:200,34,105;--spectrum-magenta-900:rgba(var(--spectrum-magenta-900-rgb));--spectrum-magenta-1000-rgb:173,9,85;--spectrum-magenta-1000:rgba(var(--spectrum-magenta-1000-rgb));--spectrum-magenta-1100-rgb:142,0,69;--spectrum-magenta-1100:rgba(var(--spectrum-magenta-1100-rgb));--spectrum-magenta-1200-rgb:112,0,55;--spectrum-magenta-1200:rgba(var(--spectrum-magenta-1200-rgb));--spectrum-magenta-1300-rgb:84,3,42;--spectrum-magenta-1300:rgba(var(--spectrum-magenta-1300-rgb));--spectrum-magenta-1400-rgb:60,6,29;--spectrum-magenta-1400:rgba(var(--spectrum-magenta-1400-rgb))}:host,:root{--spectrum-menu-item-background-color-default-rgb:0,0,0;--spectrum-menu-item-background-color-default-opacity:0;--spectrum-menu-item-background-color-default:rgba(var(--spectrum-menu-item-background-color-default-rgb),var(--spectrum-menu-item-background-color-default-opacity));--spectrum-menu-item-background-color-hover:var(
--spectrum-transparent-black-200
);--spectrum-menu-item-background-color-down:var(
--spectrum-transparent-black-200
);--spectrum-menu-item-background-color-key-focus:var(
--spectrum-transparent-black-200
);--spectrum-drop-zone-background-color-rgb:var(
--spectrum-blue-800-rgb
);--spectrum-calendar-day-background-color-selected:rgba(var(--spectrum-blue-900-rgb),0.1);--spectrum-calendar-day-background-color-hover:rgba(var(--spectrum-black-rgb),0.06);--spectrum-calendar-day-today-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),0.2);--spectrum-calendar-day-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),0.2);--spectrum-calendar-day-background-color-down:var(
--spectrum-transparent-black-200
);--spectrum-calendar-day-background-color-cap-selected:rgba(var(--spectrum-blue-900-rgb),0.2);--spectrum-calendar-day-background-color-key-focus:rgba(var(--spectrum-black-rgb),0.06);--spectrum-calendar-day-border-color-key-focus:var(--spectrum-blue-800);--spectrum-badge-label-icon-color-primary:var(--spectrum-white);--spectrum-coach-indicator-ring-default-color:var(--spectrum-blue-800);--spectrum-coach-indicator-ring-dark-color:var(--spectrum-gray-900);--spectrum-coach-indicator-ring-light-color:var(--spectrum-gray-50);--spectrum-well-border-color:var(--spectrum-black-rgb);--spectrum-steplist-current-marker-color-key-focus:var(
--spectrum-blue-800
);--spectrum-treeview-item-background-color-quiet-selected:rgba(var(--spectrum-gray-900-rgb),0.06);--spectrum-treeview-item-background-color-selected:rgba(var(--spectrum-blue-900-rgb),0.1)}
`;var r$3 = e$6;

const e$5=i$c`
:host,:root{--spectrum-global-animation-linear:cubic-bezier(0,0,1,1);--spectrum-global-animation-duration-0:0ms;--spectrum-global-animation-duration-100:130ms;--spectrum-global-animation-duration-200:160ms;--spectrum-global-animation-duration-300:190ms;--spectrum-global-animation-duration-400:220ms;--spectrum-global-animation-duration-500:250ms;--spectrum-global-animation-duration-600:300ms;--spectrum-global-animation-duration-700:350ms;--spectrum-global-animation-duration-800:400ms;--spectrum-global-animation-duration-900:450ms;--spectrum-global-animation-duration-1000:500ms;--spectrum-global-animation-duration-2000:1000ms;--spectrum-global-animation-duration-4000:2000ms;--spectrum-global-animation-ease-in-out:cubic-bezier(0.45,0,0.4,1);--spectrum-global-animation-ease-in:cubic-bezier(0.5,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,0.4,1);--spectrum-global-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-black:rgb(var(--spectrum-global-color-static-black-rgb));--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-global-color-static-white:rgb(var(--spectrum-global-color-static-white-rgb));--spectrum-global-color-static-blue-rgb:0,87,191;--spectrum-global-color-static-blue:rgb(var(--spectrum-global-color-static-blue-rgb));--spectrum-global-color-static-gray-50-rgb:255,255,255;--spectrum-global-color-static-gray-50:rgb(var(--spectrum-global-color-static-gray-50-rgb));--spectrum-global-color-static-gray-75-rgb:255,255,255;--spectrum-global-color-static-gray-75:rgb(var(--spectrum-global-color-static-gray-75-rgb));--spectrum-global-color-static-gray-100-rgb:255,255,255;--spectrum-global-color-static-gray-100:rgb(var(--spectrum-global-color-static-gray-100-rgb));--spectrum-global-color-static-gray-200-rgb:235,235,235;--spectrum-global-color-static-gray-200:rgb(var(--spectrum-global-color-static-gray-200-rgb));--spectrum-global-color-static-gray-300-rgb:217,217,217;--spectrum-global-color-static-gray-300:rgb(var(--spectrum-global-color-static-gray-300-rgb));--spectrum-global-color-static-gray-400-rgb:179,179,179;--spectrum-global-color-static-gray-400:rgb(var(--spectrum-global-color-static-gray-400-rgb));--spectrum-global-color-static-gray-500-rgb:146,146,146;--spectrum-global-color-static-gray-500:rgb(var(--spectrum-global-color-static-gray-500-rgb));--spectrum-global-color-static-gray-600-rgb:110,110,110;--spectrum-global-color-static-gray-600:rgb(var(--spectrum-global-color-static-gray-600-rgb));--spectrum-global-color-static-gray-700-rgb:71,71,71;--spectrum-global-color-static-gray-700:rgb(var(--spectrum-global-color-static-gray-700-rgb));--spectrum-global-color-static-gray-800-rgb:34,34,34;--spectrum-global-color-static-gray-800:rgb(var(--spectrum-global-color-static-gray-800-rgb));--spectrum-global-color-static-gray-900-rgb:0,0,0;--spectrum-global-color-static-gray-900:rgb(var(--spectrum-global-color-static-gray-900-rgb));--spectrum-global-color-static-red-400-rgb:237,64,48;--spectrum-global-color-static-red-400:rgb(var(--spectrum-global-color-static-red-400-rgb));--spectrum-global-color-static-red-500-rgb:217,28,21;--spectrum-global-color-static-red-500:rgb(var(--spectrum-global-color-static-red-500-rgb));--spectrum-global-color-static-red-600-rgb:187,2,2;--spectrum-global-color-static-red-600:rgb(var(--spectrum-global-color-static-red-600-rgb));--spectrum-global-color-static-red-700-rgb:154,0,0;--spectrum-global-color-static-red-700:rgb(var(--spectrum-global-color-static-red-700-rgb));--spectrum-global-color-static-red-800-rgb:124,0,0;--spectrum-global-color-static-red-800:rgb(var(--spectrum-global-color-static-red-800-rgb));--spectrum-global-color-static-orange-400-rgb:250,139,26;--spectrum-global-color-static-orange-400:rgb(var(--spectrum-global-color-static-orange-400-rgb));--spectrum-global-color-static-orange-500-rgb:233,117,0;--spectrum-global-color-static-orange-500:rgb(var(--spectrum-global-color-static-orange-500-rgb));--spectrum-global-color-static-orange-600-rgb:209,97,0;--spectrum-global-color-static-orange-600:rgb(var(--spectrum-global-color-static-orange-600-rgb));--spectrum-global-color-static-orange-700-rgb:182,80,0;--spectrum-global-color-static-orange-700:rgb(var(--spectrum-global-color-static-orange-700-rgb));--spectrum-global-color-static-orange-800-rgb:155,64,0;--spectrum-global-color-static-orange-800:rgb(var(--spectrum-global-color-static-orange-800-rgb));--spectrum-global-color-static-yellow-200-rgb:250,237,123;--spectrum-global-color-static-yellow-200:rgb(var(--spectrum-global-color-static-yellow-200-rgb));--spectrum-global-color-static-yellow-300-rgb:250,224,23;--spectrum-global-color-static-yellow-300:rgb(var(--spectrum-global-color-static-yellow-300-rgb));--spectrum-global-color-static-yellow-400-rgb:238,205,0;--spectrum-global-color-static-yellow-400:rgb(var(--spectrum-global-color-static-yellow-400-rgb));--spectrum-global-color-static-yellow-500-rgb:221,185,0;--spectrum-global-color-static-yellow-500:rgb(var(--spectrum-global-color-static-yellow-500-rgb));--spectrum-global-color-static-yellow-600-rgb:201,164,0;--spectrum-global-color-static-yellow-600:rgb(var(--spectrum-global-color-static-yellow-600-rgb));--spectrum-global-color-static-yellow-700-rgb:181,144,0;--spectrum-global-color-static-yellow-700:rgb(var(--spectrum-global-color-static-yellow-700-rgb));--spectrum-global-color-static-yellow-800-rgb:160,125,0;--spectrum-global-color-static-yellow-800:rgb(var(--spectrum-global-color-static-yellow-800-rgb));--spectrum-global-color-static-chartreuse-300-rgb:176,222,27;--spectrum-global-color-static-chartreuse-300:rgb(var(--spectrum-global-color-static-chartreuse-300-rgb));--spectrum-global-color-static-chartreuse-400-rgb:157,203,13;--spectrum-global-color-static-chartreuse-400:rgb(var(--spectrum-global-color-static-chartreuse-400-rgb));--spectrum-global-color-static-chartreuse-500-rgb:139,182,4;--spectrum-global-color-static-chartreuse-500:rgb(var(--spectrum-global-color-static-chartreuse-500-rgb));--spectrum-global-color-static-chartreuse-600-rgb:122,162,0;--spectrum-global-color-static-chartreuse-600:rgb(var(--spectrum-global-color-static-chartreuse-600-rgb));--spectrum-global-color-static-chartreuse-700-rgb:106,141,0;--spectrum-global-color-static-chartreuse-700:rgb(var(--spectrum-global-color-static-chartreuse-700-rgb));--spectrum-global-color-static-chartreuse-800-rgb:90,120,0;--spectrum-global-color-static-chartreuse-800:rgb(var(--spectrum-global-color-static-chartreuse-800-rgb));--spectrum-global-color-static-celery-200-rgb:126,229,114;--spectrum-global-color-static-celery-200:rgb(var(--spectrum-global-color-static-celery-200-rgb));--spectrum-global-color-static-celery-300-rgb:87,212,86;--spectrum-global-color-static-celery-300:rgb(var(--spectrum-global-color-static-celery-300-rgb));--spectrum-global-color-static-celery-400-rgb:48,193,61;--spectrum-global-color-static-celery-400:rgb(var(--spectrum-global-color-static-celery-400-rgb));--spectrum-global-color-static-celery-500-rgb:15,172,38;--spectrum-global-color-static-celery-500:rgb(var(--spectrum-global-color-static-celery-500-rgb));--spectrum-global-color-static-celery-600-rgb:0,150,20;--spectrum-global-color-static-celery-600:rgb(var(--spectrum-global-color-static-celery-600-rgb));--spectrum-global-color-static-celery-700-rgb:0,128,15;--spectrum-global-color-static-celery-700:rgb(var(--spectrum-global-color-static-celery-700-rgb));--spectrum-global-color-static-celery-800-rgb:0,107,15;--spectrum-global-color-static-celery-800:rgb(var(--spectrum-global-color-static-celery-800-rgb));--spectrum-global-color-static-green-400-rgb:29,169,115;--spectrum-global-color-static-green-400:rgb(var(--spectrum-global-color-static-green-400-rgb));--spectrum-global-color-static-green-500-rgb:0,148,97;--spectrum-global-color-static-green-500:rgb(var(--spectrum-global-color-static-green-500-rgb));--spectrum-global-color-static-green-600-rgb:0,126,80;--spectrum-global-color-static-green-600:rgb(var(--spectrum-global-color-static-green-600-rgb));--spectrum-global-color-static-green-700-rgb:0,105,65;--spectrum-global-color-static-green-700:rgb(var(--spectrum-global-color-static-green-700-rgb));--spectrum-global-color-static-green-800-rgb:0,86,53;--spectrum-global-color-static-green-800:rgb(var(--spectrum-global-color-static-green-800-rgb));--spectrum-global-color-static-seafoam-200-rgb:75,206,199;--spectrum-global-color-static-seafoam-200:rgb(var(--spectrum-global-color-static-seafoam-200-rgb));--spectrum-global-color-static-seafoam-300-rgb:32,187,180;--spectrum-global-color-static-seafoam-300:rgb(var(--spectrum-global-color-static-seafoam-300-rgb));--spectrum-global-color-static-seafoam-400-rgb:0,166,160;--spectrum-global-color-static-seafoam-400:rgb(var(--spectrum-global-color-static-seafoam-400-rgb));--spectrum-global-color-static-seafoam-500-rgb:0,145,139;--spectrum-global-color-static-seafoam-500:rgb(var(--spectrum-global-color-static-seafoam-500-rgb));--spectrum-global-color-static-seafoam-600-rgb:0,124,118;--spectrum-global-color-static-seafoam-600:rgb(var(--spectrum-global-color-static-seafoam-600-rgb));--spectrum-global-color-static-seafoam-700-rgb:0,103,99;--spectrum-global-color-static-seafoam-700:rgb(var(--spectrum-global-color-static-seafoam-700-rgb));--spectrum-global-color-static-seafoam-800-rgb:10,83,80;--spectrum-global-color-static-seafoam-800:rgb(var(--spectrum-global-color-static-seafoam-800-rgb));--spectrum-global-color-static-blue-200-rgb:130,193,251;--spectrum-global-color-static-blue-200:rgb(var(--spectrum-global-color-static-blue-200-rgb));--spectrum-global-color-static-blue-300-rgb:98,173,247;--spectrum-global-color-static-blue-300:rgb(var(--spectrum-global-color-static-blue-300-rgb));--spectrum-global-color-static-blue-400-rgb:66,151,244;--spectrum-global-color-static-blue-400:rgb(var(--spectrum-global-color-static-blue-400-rgb));--spectrum-global-color-static-blue-500-rgb:27,127,245;--spectrum-global-color-static-blue-500:rgb(var(--spectrum-global-color-static-blue-500-rgb));--spectrum-global-color-static-blue-600-rgb:4,105,227;--spectrum-global-color-static-blue-600:rgb(var(--spectrum-global-color-static-blue-600-rgb));--spectrum-global-color-static-blue-700-rgb:0,87,190;--spectrum-global-color-static-blue-700:rgb(var(--spectrum-global-color-static-blue-700-rgb));--spectrum-global-color-static-blue-800-rgb:0,72,153;--spectrum-global-color-static-blue-800:rgb(var(--spectrum-global-color-static-blue-800-rgb));--spectrum-global-color-static-indigo-200-rgb:178,181,255;--spectrum-global-color-static-indigo-200:rgb(var(--spectrum-global-color-static-indigo-200-rgb));--spectrum-global-color-static-indigo-300-rgb:155,159,255;--spectrum-global-color-static-indigo-300:rgb(var(--spectrum-global-color-static-indigo-300-rgb));--spectrum-global-color-static-indigo-400-rgb:132,137,253;--spectrum-global-color-static-indigo-400:rgb(var(--spectrum-global-color-static-indigo-400-rgb));--spectrum-global-color-static-indigo-500-rgb:109,115,246;--spectrum-global-color-static-indigo-500:rgb(var(--spectrum-global-color-static-indigo-500-rgb));--spectrum-global-color-static-indigo-600-rgb:87,93,232;--spectrum-global-color-static-indigo-600:rgb(var(--spectrum-global-color-static-indigo-600-rgb));--spectrum-global-color-static-indigo-700-rgb:68,74,208;--spectrum-global-color-static-indigo-700:rgb(var(--spectrum-global-color-static-indigo-700-rgb));--spectrum-global-color-static-indigo-800-rgb:68,74,208;--spectrum-global-color-static-indigo-800:rgb(var(--spectrum-global-color-static-indigo-800-rgb));--spectrum-global-color-static-purple-400-rgb:178,121,250;--spectrum-global-color-static-purple-400:rgb(var(--spectrum-global-color-static-purple-400-rgb));--spectrum-global-color-static-purple-500-rgb:161,93,246;--spectrum-global-color-static-purple-500:rgb(var(--spectrum-global-color-static-purple-500-rgb));--spectrum-global-color-static-purple-600-rgb:142,67,234;--spectrum-global-color-static-purple-600:rgb(var(--spectrum-global-color-static-purple-600-rgb));--spectrum-global-color-static-purple-700-rgb:120,43,216;--spectrum-global-color-static-purple-700:rgb(var(--spectrum-global-color-static-purple-700-rgb));--spectrum-global-color-static-purple-800-rgb:98,23,190;--spectrum-global-color-static-purple-800:rgb(var(--spectrum-global-color-static-purple-800-rgb));--spectrum-global-color-static-fuchsia-400-rgb:228,93,230;--spectrum-global-color-static-fuchsia-400:rgb(var(--spectrum-global-color-static-fuchsia-400-rgb));--spectrum-global-color-static-fuchsia-500-rgb:211,63,212;--spectrum-global-color-static-fuchsia-500:rgb(var(--spectrum-global-color-static-fuchsia-500-rgb));--spectrum-global-color-static-fuchsia-600-rgb:188,39,187;--spectrum-global-color-static-fuchsia-600:rgb(var(--spectrum-global-color-static-fuchsia-600-rgb));--spectrum-global-color-static-fuchsia-700-rgb:163,10,163;--spectrum-global-color-static-fuchsia-700:rgb(var(--spectrum-global-color-static-fuchsia-700-rgb));--spectrum-global-color-static-fuchsia-800-rgb:135,0,136;--spectrum-global-color-static-fuchsia-800:rgb(var(--spectrum-global-color-static-fuchsia-800-rgb));--spectrum-global-color-static-magenta-200-rgb:253,127,175;--spectrum-global-color-static-magenta-200:rgb(var(--spectrum-global-color-static-magenta-200-rgb));--spectrum-global-color-static-magenta-300-rgb:242,98,157;--spectrum-global-color-static-magenta-300:rgb(var(--spectrum-global-color-static-magenta-300-rgb));--spectrum-global-color-static-magenta-400-rgb:226,68,135;--spectrum-global-color-static-magenta-400:rgb(var(--spectrum-global-color-static-magenta-400-rgb));--spectrum-global-color-static-magenta-500-rgb:205,40,111;--spectrum-global-color-static-magenta-500:rgb(var(--spectrum-global-color-static-magenta-500-rgb));--spectrum-global-color-static-magenta-600-rgb:179,15,89;--spectrum-global-color-static-magenta-600:rgb(var(--spectrum-global-color-static-magenta-600-rgb));--spectrum-global-color-static-magenta-700-rgb:149,0,72;--spectrum-global-color-static-magenta-700:rgb(var(--spectrum-global-color-static-magenta-700-rgb));--spectrum-global-color-static-magenta-800-rgb:119,0,58;--spectrum-global-color-static-magenta-800:rgb(var(--spectrum-global-color-static-magenta-800-rgb));--spectrum-global-color-static-transparent-white-200:hsla(0,0%,100%,.1);--spectrum-global-color-static-transparent-white-300:hsla(0,0%,100%,.25);--spectrum-global-color-static-transparent-white-400:hsla(0,0%,100%,.4);--spectrum-global-color-static-transparent-white-500:hsla(0,0%,100%,.55);--spectrum-global-color-static-transparent-white-600:hsla(0,0%,100%,.7);--spectrum-global-color-static-transparent-white-700:hsla(0,0%,100%,.8);--spectrum-global-color-static-transparent-white-800:hsla(0,0%,100%,.9);--spectrum-global-color-static-transparent-white-900-rgb:255,255,255;--spectrum-global-color-static-transparent-white-900:rgb(var(--spectrum-global-color-static-transparent-white-900-rgb));--spectrum-global-color-static-transparent-black-200:rgba(0,0,0,.1);--spectrum-global-color-static-transparent-black-300:rgba(0,0,0,.25);--spectrum-global-color-static-transparent-black-400:rgba(0,0,0,.4);--spectrum-global-color-static-transparent-black-500:rgba(0,0,0,.55);--spectrum-global-color-static-transparent-black-600:rgba(0,0,0,.7);--spectrum-global-color-static-transparent-black-700:rgba(0,0,0,.8);--spectrum-global-color-static-transparent-black-800:rgba(0,0,0,.9);--spectrum-global-color-static-transparent-black-900-rgb:0,0,0;--spectrum-global-color-static-transparent-black-900:rgb(var(--spectrum-global-color-static-transparent-black-900-rgb));--spectrum-global-color-sequential-cerulean:#e9fff1,#c8f1e4,#a5e3d7,#82d5ca,#68c5c1,#54b4ba,#3fa2b2,#2991ac,#2280a2,#1f6d98,#1d5c8d,#1a4b83,#1a3979,#1a266f,#191264,#180057;--spectrum-global-color-sequential-forest:#ffffdf,#e2f6ba,#c4eb95,#a4e16d,#8dd366,#77c460,#5fb65a,#48a754,#36984f,#2c894d,#237a4a,#196b47,#105c45,#094d41,#033f3e,#00313a;--spectrum-global-color-sequential-rose:#fff4dd,#ffddd7,#ffc5d2,#feaecb,#fa96c4,#f57ebd,#ef64b5,#e846ad,#d238a1,#bb2e96,#a3248c,#8a1b83,#71167c,#560f74,#370b6e,#000968;--spectrum-global-color-diverging-orange-yellow-seafoam:#580000,#79260b,#9c4511,#bd651a,#dd8629,#f5ad52,#fed693,#ffffe0,#bbe4d1,#76c7be,#3ea8a6,#208288,#076769,#00494b,#002c2d;--spectrum-global-color-diverging-red-yellow-blue:#4a001e,#751232,#a52747,#c65154,#e47961,#f0a882,#fad4ac,#ffffe0,#bce2cf,#89c0c4,#579eb9,#397aa8,#1c5796,#163771,#10194d;--spectrum-global-color-diverging-red-blue:#4a001e,#731331,#9f2945,#cc415a,#e06e85,#ed9ab0,#f8c3d9,#faf0ff,#c6d0f2,#92b2de,#5d94cb,#2f74b3,#265191,#163670,#0b194c;--spectrum-semantic-negative-background-color:var(
--spectrum-global-color-static-red-600
);--spectrum-semantic-negative-color-default:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-color-hover:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-dark:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-border-color:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-icon-color:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-status-color:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-text-color-large:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-text-color-small:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-text-color-small-hover:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-text-color-small-down:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-text-color-small-key-focus:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-down:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-color-key-focus:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-background-color-default:var(
--spectrum-global-color-static-red-600
);--spectrum-semantic-negative-background-color-hover:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-negative-background-color-down:var(
--spectrum-global-color-static-red-800
);--spectrum-semantic-negative-background-color-key-focus:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-notice-background-color:var(
--spectrum-global-color-static-orange-600
);--spectrum-semantic-notice-color-default:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-color-dark:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-border-color:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-icon-color:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-status-color:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-text-color-large:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-text-color-small:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-color-down:var(
--spectrum-global-color-orange-700
);--spectrum-semantic-notice-color-key-focus:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-background-color-default:var(
--spectrum-global-color-static-orange-600
);--spectrum-semantic-notice-background-color-hover:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-notice-background-color-down:var(
--spectrum-global-color-static-orange-800
);--spectrum-semantic-notice-background-color-key-focus:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-positive-background-color:var(
--spectrum-global-color-static-green-600
);--spectrum-semantic-positive-color-default:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-color-dark:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-border-color:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-icon-color:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-status-color:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-text-color-large:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-text-color-small:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-color-down:var(
--spectrum-global-color-green-700
);--spectrum-semantic-positive-color-key-focus:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-background-color-default:var(
--spectrum-global-color-static-green-600
);--spectrum-semantic-positive-background-color-hover:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-positive-background-color-down:var(
--spectrum-global-color-static-green-800
);--spectrum-semantic-positive-background-color-key-focus:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-informative-background-color:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-informative-color-default:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-color-dark:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-border-color:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-icon-color:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-status-color:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-text-color-large:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-text-color-small:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-color-down:var(
--spectrum-global-color-blue-700
);--spectrum-semantic-informative-color-key-focus:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-background-color-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-informative-background-color-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-informative-background-color-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-informative-background-color-key-focus:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-background-color-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-cta-background-color-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-background-color-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-cta-background-color-key-focus:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-emphasized-border-color-default:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-emphasized-border-color-hover:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-emphasized-border-color-down:var(
--spectrum-global-color-blue-700
);--spectrum-semantic-emphasized-border-color-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-neutral-background-color-default:var(
--spectrum-global-color-static-gray-700
);--spectrum-semantic-neutral-background-color-hover:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-neutral-background-color-down:var(
--spectrum-global-color-static-gray-900
);--spectrum-semantic-neutral-background-color-key-focus:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-presence-color-1:var(
--spectrum-global-color-static-red-500
);--spectrum-semantic-presence-color-2:var(
--spectrum-global-color-static-orange-400
);--spectrum-semantic-presence-color-3:var(
--spectrum-global-color-static-yellow-400
);--spectrum-semantic-presence-color-4-rgb:75,204,162;--spectrum-semantic-presence-color-4:rgb(var(--spectrum-semantic-presence-color-4-rgb));--spectrum-semantic-presence-color-5-rgb:0,199,255;--spectrum-semantic-presence-color-5:rgb(var(--spectrum-semantic-presence-color-5-rgb));--spectrum-semantic-presence-color-6-rgb:0,140,184;--spectrum-semantic-presence-color-6:rgb(var(--spectrum-semantic-presence-color-6-rgb));--spectrum-semantic-presence-color-7-rgb:126,75,243;--spectrum-semantic-presence-color-7:rgb(var(--spectrum-semantic-presence-color-7-rgb));--spectrum-semantic-presence-color-8:var(
--spectrum-global-color-static-fuchsia-600
);--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-70:70%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px;--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-185:15px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-350:28px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:0.0125em;--spectrum-global-font-letter-spacing-han:0.05em;--spectrum-global-font-letter-spacing-medium:0.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-0:0em;--spectrum-global-font-multiplier-25:0.25em;--spectrum-global-font-multiplier-75:0.75em;--spectrum-global-font-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-global-font-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-global-font-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-global-font-font-family-ja:adobe-clean-han-japanese,"Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","Osaka",YuGothic,"Yu Gothic","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic","sans-serif";--spectrum-global-font-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-loupe-entry-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-alias-loupe-exit-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-alias-heading-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-light:var(
--spectrum-global-font-weight-light
);--spectrum-alias-heading-text-font-weight-light-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-heavy:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-heavy-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-light
);--spectrum-alias-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-strong-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-margin-bottom:var(
--spectrum-global-font-multiplier-25
);--spectrum-alias-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-body-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-body-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-body-margin-bottom:var(
--spectrum-global-font-multiplier-75
);--spectrum-alias-detail-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-detail-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-detail-text-font-weight-light:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-font-family:var(
--spectrum-global-font-family-code
);--spectrum-alias-code-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-code-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-code-margin-bottom:var(
--spectrum-global-font-multiplier-0
);--spectrum-alias-font-family-ar:var(--spectrum-global-font-font-family-ar);--spectrum-alias-font-family-he:var(--spectrum-global-font-font-family-he);--spectrum-alias-font-family-zh:var(--spectrum-global-font-font-family-zh);--spectrum-alias-font-family-zhhans:var(
--spectrum-global-font-font-family-zhhans
);--spectrum-alias-font-family-ko:var(--spectrum-global-font-font-family-ko);--spectrum-alias-font-family-ja:var(--spectrum-global-font-font-family-ja);--spectrum-alias-font-family-condensed:var(
--spectrum-global-font-font-family-condensed
);--spectrum-alias-component-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-han-component-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-serif-text-font-family:var(
--spectrum-global-font-family-serif
);--spectrum-alias-han-heading-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-han-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-light:var(
--spectrum-global-font-weight-light
);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-heading-text-font-weight-light-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-heavy:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-body-text-line-height:var(
--spectrum-global-font-line-height-large
);--spectrum-alias-han-body-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-body-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-subheading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-detail-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
)}:host,:root{--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-border-radius-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-border-radius-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-border-radius-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-text-size-s:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-item-text-size-m:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-item-text-size-l:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-item-text-size-xl:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-item-text-padding-top-s:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-item-text-padding-top-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-text-padding-top-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-text-padding-bottom-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-text-padding-bottom-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-text-padding-bottom-xl:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-icon-padding-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-top-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-top-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-top-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-icon-padding-bottom-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-bottom-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-bottom-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-bottom-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-padding-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-padding-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-padding-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-icononly-padding-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icononly-padding-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icononly-padding-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icononly-padding-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-control-gap-s:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-gap-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-gap-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-control-gap-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-icon-gap-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-workflow-icon-gap-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-workflow-icon-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-ui-icon-gap-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-ui-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-ui-icon-gap-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-ui-icon-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-clearbutton-gap-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-clearbutton-gap-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-workflow-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-rounded-workflow-padding-left-s:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-rounded-workflow-padding-left-l:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-padding-top-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-top-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-mark-padding-bottom-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-bottom-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-bottom-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-mark-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-mark-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-mark-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-control-1-size-s:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-item-control-1-size-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-2-size-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-2-size-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-2-size-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-control-2-size-xxl:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-control-2-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-2-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-control-2-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-2-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-2-border-radius-xxl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-2-padding-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-2-padding-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-2-padding-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-2-padding-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-control-3-height-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-3-height-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-3-height-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-control-3-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-3-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-control-3-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-3-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-3-padding-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-3-padding-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-3-padding-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-padding-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-mark-size-s:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-size-l:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-item-mark-size-xl:var(
--spectrum-global-dimension-size-325
);--spectrum-alias-heading-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-xxl-text-size:var(
--spectrum-global-dimension-font-size-1100
);--spectrum-alias-heading-xl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-l-text-size:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-m-text-size:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-s-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-xs-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xxs-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-xxl-margin-top:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-xl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-l-margin-top:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-m-margin-top:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-s-margin-top:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xs-margin-top:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxs-margin-top:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-heading-han-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-han-xxl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-han-xl-text-size:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-l-text-size:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-han-m-text-size:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-han-s-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-han-xs-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-han-xxs-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-han-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-han-xxl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-xl-margin-top:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-han-l-margin-top:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-han-m-margin-top:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-han-s-margin-top:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-han-xs-margin-top:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-han-xxs-margin-top:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-component-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-component-border-radius-quiet:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-component-focusring-gap:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-component-focusring-gap-emphasized:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-component-focusring-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-component-focusring-size-emphasized:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-input-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-input-focusring-gap:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-input-quiet-focusline-gap:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-control-two-size-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-two-size-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-control-two-size-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-control-two-size-xxl:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-control-two-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-control-two-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-control-two-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-control-two-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-control-two-border-radius-xxl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-control-two-focus-ring-border-radius-s:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-control-two-focus-ring-border-radius-m:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-control-two-focus-ring-border-radius-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-two-focus-ring-border-radius-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-control-two-focus-ring-border-radius-xxl:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-three-height-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-three-height-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-control-three-height-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-infieldbutton-icon-margin-y-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-icon-margin-y-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-infieldbutton-icon-margin-y-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-infieldbutton-icon-margin-y-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-infieldbutton-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-border-radius-sided:0;--spectrum-alias-infieldbutton-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-infieldbutton-fill-padding-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-fill-padding-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-infieldbutton-fill-padding-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-infieldbutton-fill-padding-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-infieldbutton-padding-s:0;--spectrum-alias-infieldbutton-padding-m:0;--spectrum-alias-infieldbutton-padding-l:0;--spectrum-alias-infieldbutton-padding-xl:0;--spectrum-alias-infieldbutton-full-height-s:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-infieldbutton-full-height-m:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-infieldbutton-full-height-l:var(
--spectrum-global-dimension-size-500
);--spectrum-alias-infieldbutton-full-height-xl:var(
--spectrum-global-dimension-size-600
);--spectrum-alias-infieldbutton-half-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-infieldbutton-half-height-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-infieldbutton-half-height-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-infieldbutton-half-height-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-clearbutton-icon-margin-s:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-clearbutton-icon-margin-m:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-clearbutton-icon-margin-l:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-clearbutton-icon-margin-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-clearbutton-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-combobox-quiet-button-offset-x:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-percent-50:50%;--spectrum-alias-percent-70:70%;--spectrum-alias-percent-100:100%;--spectrum-alias-breakpoint-xsmall:304px;--spectrum-alias-breakpoint-small:768px;--spectrum-alias-breakpoint-medium:1280px;--spectrum-alias-breakpoint-large:1768px;--spectrum-alias-breakpoint-xlarge:2160px;--spectrum-alias-grid-columns:12;--spectrum-alias-grid-fluid-width:100%;--spectrum-alias-grid-fixed-max-width:1280px;--spectrum-alias-border-size-thin:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-border-size-thick:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-size-thicker:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-size-thickest:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thin:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-offset-thick:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-offset-thicker:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thickest:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-baseline:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-grid-gutter-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-gutter-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-gutter-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-gutter-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-gutter-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-margin-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-margin-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-margin-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-margin-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-margin-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-layout-region-margin-bottom-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-layout-region-margin-bottom-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-radial-reaction-size-default:var(
--spectrum-global-dimension-static-size-550
);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-ring-gap-small:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-focus-ring-size-small:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-font-size-default:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-layout-label-gap-size:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-pill-button-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-pill-button-text-baseline:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-border-radius-xsmall:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-border-radius-regular:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-border-radius-medium:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-border-radius-large:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-border-radius-xlarge:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-focus-ring-border-radius-xsmall:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-focus-ring-border-radius-small:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-focus-ring-border-radius-medium:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-focus-ring-border-radius-large:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-focus-ring-border-radius-xlarge:var(
--spectrum-global-dimension-size-350
);--spectrum-alias-single-line-height:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-single-line-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-alias-workflow-icon-size-s:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-workflow-icon-size-m:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-workflow-icon-size-xl:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-alert-size-75:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-alert-size-100:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-ui-icon-alert-size-200:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-ui-icon-alert-size-300:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
)}:host,:root{--spectrum-alias-transparent-blue-background-color-hover:rgba(0,87,190,.15);--spectrum-alias-transparent-blue-background-color-down:rgba(0,72,153,.3);--spectrum-alias-transparent-blue-background-color-key-focus:var(
--spectrum-alias-transparent-blue-background-color-hover
);--spectrum-alias-transparent-blue-background-color-mouse-focus:var(
--spectrum-alias-transparent-blue-background-color-hover
);--spectrum-alias-transparent-blue-background-color:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-transparent-red-background-color-hover:rgba(154,0,0,.15);--spectrum-alias-transparent-red-background-color-down:rgba(124,0,0,.3);--spectrum-alias-transparent-red-background-color-key-focus:var(
--spectrum-alias-transparent-red-background-color-hover
);--spectrum-alias-transparent-red-background-color-mouse-focus:var(
--spectrum-alias-transparent-red-background-color-hover
);--spectrum-alias-transparent-red-background-color:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-disabled:var(
--spectrum-global-color-gray-500
);--spectrum-alias-component-text-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-component-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-component-text-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-component-text-color-key-focus:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color-mouse-focus:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-selected-default:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-selected-hover:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color-selected-down:var(
--spectrum-alias-component-text-color-down
);--spectrum-alias-component-text-color-selected-key-focus:var(
--spectrum-alias-component-text-color-key-focus
);--spectrum-alias-component-text-color-selected-mouse-focus:var(
--spectrum-alias-component-text-color-mouse-focus
);--spectrum-alias-component-text-color-selected:var(
--spectrum-alias-component-text-color-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-default:var(
--spectrum-global-color-static-white
);--spectrum-alias-component-text-color-emphasized-selected-hover:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-down:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-key-focus:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-mouse-focus:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-error-default:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-component-text-color-error-hover:var(
--spectrum-semantic-negative-text-color-small-hover
);--spectrum-alias-component-text-color-error-down:var(
--spectrum-semantic-negative-text-color-small-down
);--spectrum-alias-component-text-color-error-key-focus:var(
--spectrum-semantic-negative-text-color-small-key-focus
);--spectrum-alias-component-text-color-error-mouse-focus:var(
--spectrum-semantic-negative-text-color-small-key-focus
);--spectrum-alias-component-text-color-error:var(
--spectrum-alias-component-text-color-error-default
);--spectrum-alias-component-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-alias-component-icon-color-default:var(
--spectrum-alias-icon-color
);--spectrum-alias-component-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-component-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-component-icon-color-key-focus:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-component-icon-color-mouse-focus:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-component-icon-color:var(
--spectrum-alias-component-icon-color-default
);--spectrum-alias-component-icon-color-selected:var(
--spectrum-alias-icon-color-selected-neutral-subdued
);--spectrum-alias-component-icon-color-emphasized-selected-default:var(
--spectrum-global-color-static-white
);--spectrum-alias-component-icon-color-emphasized-selected-hover:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected-down:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected-key-focus:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-quiet-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-selected-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-component-background-color-default:var(
--spectrum-global-color-gray-75
);--spectrum-alias-component-background-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-component-background-color-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-component-background-color:var(
--spectrum-alias-component-background-color-default
);--spectrum-alias-component-background-color-selected-default:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-hover:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-key-focus:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-quiet-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-down:var(
--spectrum-global-color-gray-300
);--spectrum-alias-component-background-color-quiet-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet:var(
--spectrum-alias-component-background-color-quiet-default
);--spectrum-alias-component-background-color-quiet-selected-default:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-quiet-selected-hover:var(
--spectrum-alias-component-background-color-selected-hover
);--spectrum-alias-component-background-color-quiet-selected-down:var(
--spectrum-alias-component-background-color-selected-down
);--spectrum-alias-component-background-color-quiet-selected-key-focus:var(
--spectrum-alias-component-background-color-selected-key-focus
);--spectrum-alias-component-background-color-quiet-selected:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-emphasized-selected-default:var(
--spectrum-semantic-cta-background-color-default
);--spectrum-alias-component-background-color-emphasized-selected-hover:var(
--spectrum-semantic-cta-background-color-hover
);--spectrum-alias-component-background-color-emphasized-selected-down:var(
--spectrum-semantic-cta-background-color-down
);--spectrum-alias-component-background-color-emphasized-selected-key-focus:var(
--spectrum-semantic-cta-background-color-key-focus
);--spectrum-alias-component-background-color-emphasized-selected:var(
--spectrum-alias-component-background-color-emphasized-selected-default
);--spectrum-alias-component-border-color-disabled:var(
--spectrum-alias-border-color-disabled
);--spectrum-alias-component-border-color-quiet-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-default:var(
--spectrum-alias-border-color
);--spectrum-alias-component-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-component-border-color-down:var(
--spectrum-alias-border-color-down
);--spectrum-alias-component-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color:var(
--spectrum-alias-component-border-color-default
);--spectrum-alias-component-border-color-selected-default:var(
--spectrum-alias-border-color
);--spectrum-alias-component-border-color-selected-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-component-border-color-selected-down:var(
--spectrum-alias-border-color-down
);--spectrum-alias-component-border-color-selected-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-selected:var(
--spectrum-alias-component-border-color-selected-default
);--spectrum-alias-component-border-color-quiet-default:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-hover:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-down:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-quiet:var(
--spectrum-alias-component-border-color-quiet-default
);--spectrum-alias-component-border-color-quiet-selected-default:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-hover:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-quiet-selected:var(
--spectrum-alias-component-border-color-quiet-selected-default
);--spectrum-alias-component-border-color-emphasized-selected-default:var(
--spectrum-semantic-cta-background-color-default
);--spectrum-alias-component-border-color-emphasized-selected-hover:var(
--spectrum-semantic-cta-background-color-hover
);--spectrum-alias-component-border-color-emphasized-selected-down:var(
--spectrum-semantic-cta-background-color-down
);--spectrum-alias-component-border-color-emphasized-selected-key-focus:var(
--spectrum-semantic-cta-background-color-key-focus
);--spectrum-alias-component-border-color-emphasized-selected:var(
--spectrum-alias-component-border-color-emphasized-selected-default
);--spectrum-alias-toggle-background-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-toggle-background-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-background-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-toggle-background-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-background-color:var(
--spectrum-alias-toggle-background-color-default
);--spectrum-alias-toggle-background-color-emphasized-selected-default:var(
--spectrum-global-color-blue-500
);--spectrum-alias-toggle-background-color-emphasized-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-alias-toggle-background-color-emphasized-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-alias-toggle-background-color-emphasized-selected-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-toggle-background-color-emphasized-selected:var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
);--spectrum-alias-toggle-border-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-toggle-border-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-border-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-toggle-border-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-border-color:var(
--spectrum-alias-toggle-border-color-default
);--spectrum-alias-toggle-icon-color-selected:var(
--spectrum-global-color-gray-75
);--spectrum-alias-toggle-icon-color-emphasized-selected:var(
--spectrum-global-color-gray-75
);--spectrum-alias-input-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-input-border-color-quiet-disabled:var(
--spectrum-alias-border-color-mid
);--spectrum-alias-input-border-color-default:var(
--spectrum-alias-border-color
);--spectrum-alias-input-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-input-border-color-down:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-alias-input-border-color-mouse-focus:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-alias-input-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-input-border-color:var(
--spectrum-alias-input-border-color-default
);--spectrum-alias-input-border-color-invalid-default:var(
--spectrum-semantic-negative-color-default
);--spectrum-alias-input-border-color-invalid-hover:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-input-border-color-invalid-down:var(
--spectrum-semantic-negative-color-down
);--spectrum-alias-input-border-color-invalid-mouse-focus:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-input-border-color-invalid-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-input-border-color-invalid:var(
--spectrum-alias-input-border-color-invalid-default
);--spectrum-alias-background-color-yellow-default:var(
--spectrum-global-color-static-yellow-300
);--spectrum-alias-background-color-yellow-hover:var(
--spectrum-global-color-static-yellow-400
);--spectrum-alias-background-color-yellow-key-focus:var(
--spectrum-global-color-static-yellow-400
);--spectrum-alias-background-color-yellow-down:var(
--spectrum-global-color-static-yellow-500
);--spectrum-alias-background-color-yellow:var(
--spectrum-alias-background-color-yellow-default
);--spectrum-alias-infieldbutton-background-color:var(
--spectrum-global-color-gray-200
);--spectrum-alias-infieldbutton-fill-loudnessLow-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-border-color-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-infieldbutton-fill-border-color-default:var(
--spectrum-alias-input-border-color-default
);--spectrum-alias-infieldbutton-fill-border-color-hover:var(
--spectrum-alias-input-border-color-hover
);--spectrum-alias-infieldbutton-fill-border-color-down:var(
--spectrum-alias-input-border-color-down
);--spectrum-alias-infieldbutton-fill-border-color-mouse-focus:var(
--spectrum-alias-input-border-color-mouse-focus
);--spectrum-alias-infieldbutton-fill-border-color-key-focus:var(
--spectrum-alias-input-border-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-default:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-hover:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-down:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-key-focus:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-default:var(
--spectrum-alias-component-background-color-default
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-hover:var(
--spectrum-alias-component-background-color-hover
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-down:var(
--spectrum-alias-component-background-color-down
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-key-focus:var(
--spectrum-alias-component-background-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-tabitem-text-color-default:var(
--spectrum-alias-label-text-color
);--spectrum-alias-tabitem-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tabitem-text-color-down:var(
--spectrum-alias-text-color-down
);--spectrum-alias-tabitem-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tabitem-text-color-mouse-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tabitem-text-color:var(
--spectrum-alias-tabitem-text-color-default
);--spectrum-alias-tabitem-text-color-selected-default:var(
--spectrum-global-color-gray-900
);--spectrum-alias-tabitem-text-color-selected-hover:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected-down:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected-key-focus:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected-mouse-focus:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-emphasized:var(
--spectrum-alias-tabitem-text-color-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-default:var(
--spectrum-global-color-static-blue-500
);--spectrum-alias-tabitem-text-color-emphasized-selected-hover:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-down:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-key-focus:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-mouse-focus:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-selection-indicator-color-default:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-selection-indicator-color-emphasized:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-icon-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-alias-tabitem-icon-color-default:var(
--spectrum-alias-icon-color
);--spectrum-alias-tabitem-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-tabitem-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-tabitem-icon-color-key-focus:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-tabitem-icon-color-mouse-focus:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-tabitem-icon-color:var(
--spectrum-alias-tabitem-icon-color-default
);--spectrum-alias-tabitem-icon-color-selected:var(
--spectrum-alias-icon-color-selected-neutral
);--spectrum-alias-tabitem-icon-color-emphasized:var(
--spectrum-alias-tabitem-text-color-default
);--spectrum-alias-tabitem-icon-color-emphasized-selected:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-assetcard-selectionindicator-background-color-ordered:var(
--spectrum-global-color-blue-500
);--spectrum-alias-assetcard-overlay-background-color:rgba(27,127,245,.1);--spectrum-alias-assetcard-border-color-selected:var(
--spectrum-global-color-blue-500
);--spectrum-alias-assetcard-border-color-selected-hover:var(
--spectrum-global-color-blue-500
);--spectrum-alias-assetcard-border-color-selected-down:var(
--spectrum-global-color-blue-600
);--spectrum-alias-background-color-default:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-quiet-overbackground-hover:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quiet-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-overbackground-disabled:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quickactions-overlay:rgba(0,0,0,.2);--spectrum-alias-placeholder-text-color:var(
--spectrum-global-color-gray-800
);--spectrum-alias-placeholder-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-selected:var(
--spectrum-global-color-gray-800
);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-text-color-mouse-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-text-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-text-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-text-color-quiet-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-key-focus:var(
--spectrum-global-color-blue-400
);--spectrum-alias-border-color-mouse-focus:var(
--spectrum-global-color-blue-500
);--spectrum-alias-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-border-color-extralight:var(
--spectrum-global-color-gray-100
);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(
--spectrum-global-color-gray-600
);--spectrum-alias-border-color-darker-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-darker-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:rgba(0,0,0,.05);--spectrum-alias-border-color-translucent-darker:rgba(0,0,0,.1);--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-track-fill-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-track-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-alias-track-color-overbackground:hsla(0,0%,100%,.2);--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-key-focus:var(
--spectrum-global-color-gray-900
);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-icon-color-quiet-overbackground-disabled:hsla(0,0%,100%,.15);--spectrum-alias-icon-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-icon-color-selected-neutral-subdued:var(
--spectrum-global-color-gray-800
);--spectrum-alias-icon-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-icon-color-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-alias-icon-color-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-alias-icon-color-selected-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-image-opacity-disabled:var(
--spectrum-global-color-opacity-30
);--spectrum-alias-toolbar-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-alias-code-highlight-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-code-highlight-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-alias-code-highlight-color-keyword:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-section:var(
--spectrum-global-color-red-600
);--spectrum-alias-code-highlight-color-literal:var(
--spectrum-global-color-blue-600
);--spectrum-alias-code-highlight-color-attribute:var(
--spectrum-global-color-seafoam-600
);--spectrum-alias-code-highlight-color-class:var(
--spectrum-global-color-magenta-600
);--spectrum-alias-code-highlight-color-variable:var(
--spectrum-global-color-purple-600
);--spectrum-alias-code-highlight-color-title:var(
--spectrum-global-color-indigo-600
);--spectrum-alias-code-highlight-color-string:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-function:var(
--spectrum-global-color-blue-600
);--spectrum-alias-code-highlight-color-comment:var(
--spectrum-global-color-gray-700
);--spectrum-alias-categorical-color-1:var(
--spectrum-global-color-static-seafoam-200
);--spectrum-alias-categorical-color-2:var(
--spectrum-global-color-static-indigo-700
);--spectrum-alias-categorical-color-3:var(
--spectrum-global-color-static-orange-500
);--spectrum-alias-categorical-color-4:var(
--spectrum-global-color-static-magenta-500
);--spectrum-alias-categorical-color-5:var(
--spectrum-global-color-static-indigo-200
);--spectrum-alias-categorical-color-6:var(
--spectrum-global-color-static-celery-200
);--spectrum-alias-categorical-color-7:var(
--spectrum-global-color-static-blue-500
);--spectrum-alias-categorical-color-8:var(
--spectrum-global-color-static-purple-800
);--spectrum-alias-categorical-color-9:var(
--spectrum-global-color-static-yellow-500
);--spectrum-alias-categorical-color-10:var(
--spectrum-global-color-static-orange-700
);--spectrum-alias-categorical-color-11:var(
--spectrum-global-color-static-green-600
);--spectrum-alias-categorical-color-12:var(
--spectrum-global-color-static-chartreuse-300
);--spectrum-alias-categorical-color-13:var(
--spectrum-global-color-static-blue-200
);--spectrum-alias-categorical-color-14:var(
--spectrum-global-color-static-fuchsia-500
);--spectrum-alias-categorical-color-15:var(
--spectrum-global-color-static-magenta-200
);--spectrum-alias-categorical-color-16:var(
--spectrum-global-color-static-yellow-200
)}:host,:root{--spectrum-colorcontrol-checkerboard-light-color:var(
--spectrum-global-color-static-white
);--spectrum-colorcontrol-checkerboard-dark-color:var(
--spectrum-global-color-static-gray-300
)}:host,:root{-webkit-tap-highlight-color:rgb(0 0 0/0)}:host,:root{--spectrum-focus-indicator-color:var(--spectrum-blue-800);--spectrum-static-white-focus-indicator-color:var(--spectrum-white);--spectrum-static-black-focus-indicator-color:var(--spectrum-black);--spectrum-overlay-color:var(--spectrum-black);--spectrum-opacity-disabled:0.3;--spectrum-neutral-subdued-content-color-selected:var(
--spectrum-neutral-subdued-content-color-down
);--spectrum-accent-content-color-selected:var(
--spectrum-accent-content-color-down
);--spectrum-disabled-background-color:var(--spectrum-gray-200);--spectrum-disabled-static-white-background-color:var(
--spectrum-transparent-white-200
);--spectrum-disabled-static-black-background-color:var(
--spectrum-transparent-black-200
);--spectrum-background-opacity-default:0;--spectrum-background-opacity-hover:0.1;--spectrum-background-opacity-down:0.1;--spectrum-background-opacity-key-focus:0.1;--spectrum-neutral-content-color-default:var(--spectrum-gray-800);--spectrum-neutral-content-color-hover:var(--spectrum-gray-900);--spectrum-neutral-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-content-color-focus-hover:var(
--spectrum-neutral-content-color-down
);--spectrum-neutral-content-color-focus:var(
--spectrum-neutral-content-color-down
);--spectrum-neutral-content-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-default:var(--spectrum-gray-700);--spectrum-neutral-subdued-content-color-hover:var(--spectrum-gray-800);--spectrum-neutral-subdued-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-key-focus:var(
--spectrum-gray-800
);--spectrum-accent-content-color-default:var(--spectrum-accent-color-900);--spectrum-accent-content-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-content-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-content-color-key-focus:var(
--spectrum-accent-color-1000
);--spectrum-negative-content-color-default:var(
--spectrum-negative-color-900
);--spectrum-negative-content-color-hover:var(
--spectrum-negative-color-1000
);--spectrum-negative-content-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-content-color-key-focus:var(
--spectrum-negative-color-1000
);--spectrum-disabled-content-color:var(--spectrum-gray-400);--spectrum-disabled-static-white-content-color:var(
--spectrum-transparent-white-500
);--spectrum-disabled-static-black-content-color:var(
--spectrum-transparent-black-500
);--spectrum-disabled-border-color:var(--spectrum-gray-300);--spectrum-disabled-static-white-border-color:var(
--spectrum-transparent-white-300
);--spectrum-disabled-static-black-border-color:var(
--spectrum-transparent-black-300
);--spectrum-negative-border-color-default:var(
--spectrum-negative-color-900
);--spectrum-negative-border-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-border-color-focus-hover:var(
--spectrum-negative-border-color-down
);--spectrum-negative-border-color-focus:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-key-focus:var(
--spectrum-negative-color-1000
);--spectrum-swatch-border-color:var(--spectrum-gray-900);--spectrum-swatch-border-opacity:0.51;--spectrum-swatch-disabled-icon-border-color:var(--spectrum-black);--spectrum-swatch-disabled-icon-border-opacity:0.51;--spectrum-thumbnail-border-color:var(--spectrum-gray-800);--spectrum-thumbnail-border-opacity:0.1;--spectrum-thumbnail-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-opacity-checkerboard-square-light:var(--spectrum-white);--spectrum-avatar-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-color-area-border-color:var(--spectrum-gray-900);--spectrum-color-area-border-opacity:0.1;--spectrum-color-slider-border-color:var(--spectrum-gray-900);--spectrum-color-slider-border-opacity:0.1;--spectrum-color-loupe-drop-shadow-color:var(
--spectrum-transparent-black-300
);--spectrum-color-loupe-drop-shadow-y:2px;--spectrum-color-loupe-drop-shadow-blur:8px;--spectrum-color-loupe-inner-border:var(--spectrum-transparent-black-200);--spectrum-color-loupe-outer-border:var(--spectrum-white);--spectrum-card-selection-background-color:var(--spectrum-gray-100);--spectrum-card-selection-background-color-opacity:0.95;--spectrum-drop-zone-background-color:var(--spectrum-accent-visual-color);--spectrum-drop-zone-background-color-opacity:0.1;--spectrum-drop-zone-background-color-opacity-filled:0.3;--spectrum-coach-mark-pagination-color:var(--spectrum-gray-600);--spectrum-color-handle-inner-border-color:var(--spectrum-black);--spectrum-color-handle-inner-border-opacity:0.42;--spectrum-color-handle-outer-border-opacity:var(
--spectrum-color-handle-inner-border-opacity
);--spectrum-floating-action-button-drop-shadow-color:var(
--spectrum-transparent-black-300
);--spectrum-floating-action-button-shadow-color:var(
--spectrum-floating-action-button-drop-shadow-color
);--spectrum-table-row-hover-color:var(--spectrum-gray-900);--spectrum-table-row-hover-opacity:0.07;--spectrum-table-selected-row-background-color:var(
--spectrum-informative-background-color-default
);--spectrum-table-selected-row-background-opacity:0.1;--spectrum-table-selected-row-background-color-non-emphasized:var(
--spectrum-neutral-background-color-selected-default
);--spectrum-table-selected-row-background-opacity-non-emphasized:0.1;--spectrum-table-row-down-opacity:0.1;--spectrum-table-selected-row-background-opacity-hover:0.15;--spectrum-table-selected-row-background-opacity-non-emphasized-hover:0.15;--spectrum-white-rgb:255,255,255;--spectrum-white:rgba(var(--spectrum-white-rgb));--spectrum-transparent-white-100-rgb:255,255,255;--spectrum-transparent-white-100-opacity:0;--spectrum-transparent-white-100:rgba(var(--spectrum-transparent-white-100-rgb),var(--spectrum-transparent-white-100-opacity));--spectrum-transparent-white-200-rgb:255,255,255;--spectrum-transparent-white-200-opacity:0.1;--spectrum-transparent-white-200:rgba(var(--spectrum-transparent-white-200-rgb),var(--spectrum-transparent-white-200-opacity));--spectrum-transparent-white-300-rgb:255,255,255;--spectrum-transparent-white-300-opacity:0.25;--spectrum-transparent-white-300:rgba(var(--spectrum-transparent-white-300-rgb),var(--spectrum-transparent-white-300-opacity));--spectrum-transparent-white-400-rgb:255,255,255;--spectrum-transparent-white-400-opacity:0.4;--spectrum-transparent-white-400:rgba(var(--spectrum-transparent-white-400-rgb),var(--spectrum-transparent-white-400-opacity));--spectrum-transparent-white-500-rgb:255,255,255;--spectrum-transparent-white-500-opacity:0.55;--spectrum-transparent-white-500:rgba(var(--spectrum-transparent-white-500-rgb),var(--spectrum-transparent-white-500-opacity));--spectrum-transparent-white-600-rgb:255,255,255;--spectrum-transparent-white-600-opacity:0.7;--spectrum-transparent-white-600:rgba(var(--spectrum-transparent-white-600-rgb),var(--spectrum-transparent-white-600-opacity));--spectrum-transparent-white-700-rgb:255,255,255;--spectrum-transparent-white-700-opacity:0.8;--spectrum-transparent-white-700:rgba(var(--spectrum-transparent-white-700-rgb),var(--spectrum-transparent-white-700-opacity));--spectrum-transparent-white-800-rgb:255,255,255;--spectrum-transparent-white-800-opacity:0.9;--spectrum-transparent-white-800:rgba(var(--spectrum-transparent-white-800-rgb),var(--spectrum-transparent-white-800-opacity));--spectrum-transparent-white-900-rgb:255,255,255;--spectrum-transparent-white-900:rgba(var(--spectrum-transparent-white-900-rgb));--spectrum-black-rgb:0,0,0;--spectrum-black:rgba(var(--spectrum-black-rgb));--spectrum-transparent-black-100-rgb:0,0,0;--spectrum-transparent-black-100-opacity:0;--spectrum-transparent-black-100:rgba(var(--spectrum-transparent-black-100-rgb),var(--spectrum-transparent-black-100-opacity));--spectrum-transparent-black-200-rgb:0,0,0;--spectrum-transparent-black-200-opacity:0.1;--spectrum-transparent-black-200:rgba(var(--spectrum-transparent-black-200-rgb),var(--spectrum-transparent-black-200-opacity));--spectrum-transparent-black-300-rgb:0,0,0;--spectrum-transparent-black-300-opacity:0.25;--spectrum-transparent-black-300:rgba(var(--spectrum-transparent-black-300-rgb),var(--spectrum-transparent-black-300-opacity));--spectrum-transparent-black-400-rgb:0,0,0;--spectrum-transparent-black-400-opacity:0.4;--spectrum-transparent-black-400:rgba(var(--spectrum-transparent-black-400-rgb),var(--spectrum-transparent-black-400-opacity));--spectrum-transparent-black-500-rgb:0,0,0;--spectrum-transparent-black-500-opacity:0.55;--spectrum-transparent-black-500:rgba(var(--spectrum-transparent-black-500-rgb),var(--spectrum-transparent-black-500-opacity));--spectrum-transparent-black-600-rgb:0,0,0;--spectrum-transparent-black-600-opacity:0.7;--spectrum-transparent-black-600:rgba(var(--spectrum-transparent-black-600-rgb),var(--spectrum-transparent-black-600-opacity));--spectrum-transparent-black-700-rgb:0,0,0;--spectrum-transparent-black-700-opacity:0.8;--spectrum-transparent-black-700:rgba(var(--spectrum-transparent-black-700-rgb),var(--spectrum-transparent-black-700-opacity));--spectrum-transparent-black-800-rgb:0,0,0;--spectrum-transparent-black-800-opacity:0.9;--spectrum-transparent-black-800:rgba(var(--spectrum-transparent-black-800-rgb),var(--spectrum-transparent-black-800-opacity));--spectrum-transparent-black-900-rgb:0,0,0;--spectrum-transparent-black-900:rgba(var(--spectrum-transparent-black-900-rgb));--spectrum-radio-button-selection-indicator:4px;--spectrum-field-label-to-component:0px;--spectrum-help-text-to-component:0px;--spectrum-button-minimum-width-multiplier:2.25;--spectrum-divider-thickness-small:1px;--spectrum-divider-thickness-medium:2px;--spectrum-divider-thickness-large:4px;--spectrum-swatch-rectangle-width-multiplier:2;--spectrum-swatch-slash-thickness-extra-small:2px;--spectrum-swatch-slash-thickness-small:3px;--spectrum-swatch-slash-thickness-medium:4px;--spectrum-swatch-slash-thickness-large:5px;--spectrum-progress-bar-minimum-width:48px;--spectrum-progress-bar-maximum-width:768px;--spectrum-meter-minimum-width:48px;--spectrum-meter-maximum-width:768px;--spectrum-meter-default-width:var(--spectrum-meter-width);--spectrum-in-line-alert-minimum-width:240px;--spectrum-popover-tip-width:16px;--spectrum-popover-tip-height:8px;--spectrum-menu-item-label-to-description:1px;--spectrum-menu-item-section-divider-height:8px;--spectrum-picker-minimum-width-multiplier:2;--spectrum-picker-end-edge-to-disclousure-icon-quiet:var(
--spectrum-picker-end-edge-to-disclosure-icon-quiet
);--spectrum-picker-end-edge-to-disclosure-icon-quiet:0px;--spectrum-text-field-minimum-width-multiplier:1.5;--spectrum-combo-box-minimum-width-multiplier:2.5;--spectrum-combo-box-quiet-minimum-width-multiplier:2;--spectrum-combo-box-visual-to-field-button-quiet:0px;--spectrum-alert-dialog-minimum-width:288px;--spectrum-alert-dialog-maximum-width:480px;--spectrum-contextual-help-minimum-width:268px;--spectrum-breadcrumbs-height:var(--spectrum-component-height-300);--spectrum-breadcrumbs-height-compact:var(--spectrum-component-height-200);--spectrum-breadcrumbs-end-edge-to-text:0px;--spectrum-breadcrumbs-truncated-menu-to-separator-icon:0px;--spectrum-breadcrumbs-start-edge-to-truncated-menu:0px;--spectrum-breadcrumbs-truncated-menu-to-bottom-text:0px;--spectrum-alert-banner-to-top-workflow-icon:var(
--spectrum-alert-banner-top-to-workflow-icon
);--spectrum-alert-banner-to-top-text:var(
--spectrum-alert-banner-top-to-text
);--spectrum-alert-banner-to-bottom-text:var(
--spectrum-alert-banner-bottom-to-text
);--spectrum-color-area-border-width:var(--spectrum-border-width-100);--spectrum-color-area-border-rounding:var(--spectrum-corner-radius-100);--spectrum-color-wheel-color-area-margin:12px;--spectrum-color-slider-border-width:1px;--spectrum-color-slider-border-rounding:4px;--spectrum-floating-action-button-drop-shadow-blur:12px;--spectrum-floating-action-button-drop-shadow-y:4px;--spectrum-illustrated-message-maximum-width:380px;--spectrum-search-field-minimum-width-multiplier:3;--spectrum-color-loupe-height:64px;--spectrum-color-loupe-width:48px;--spectrum-color-loupe-bottom-to-color-handle:12px;--spectrum-color-loupe-outer-border-width:var(--spectrum-border-width-200);--spectrum-color-loupe-inner-border-width:1px;--spectrum-card-minimum-width:100px;--spectrum-card-preview-minimum-height:130px;--spectrum-card-selection-background-size:40px;--spectrum-drop-zone-width:428px;--spectrum-drop-zone-content-maximum-width:var(
--spectrum-illustrated-message-maximum-width
);--spectrum-drop-zone-border-dash-length:8px;--spectrum-drop-zone-border-dash-gap:4px;--spectrum-drop-zone-title-size:var(
--spectrum-illustrated-message-title-size
);--spectrum-drop-zone-cjk-title-size:var(
--spectrum-illustrated-message-cjk-title-size
);--spectrum-drop-zone-body-size:var(
--spectrum-illustrated-message-body-size
);--spectrum-color-handle-border-width:var(--spectrum-border-width-200);--spectrum-color-handle-inner-border-width:1px;--spectrum-color-handle-outer-border-width:1px;--spectrum-color-handle-drop-shadow-x:0;--spectrum-color-handle-drop-shadow-y:0;--spectrum-color-handle-drop-shadow-blur:0;--spectrum-table-row-height-small-compact:var(
--spectrum-component-height-75
);--spectrum-table-row-height-medium-compact:var(
--spectrum-component-height-100
);--spectrum-table-row-height-large-compact:var(
--spectrum-component-height-200
);--spectrum-table-row-height-extra-large-compact:var(
--spectrum-component-height-300
);--spectrum-table-row-top-to-text-small-compact:var(
--spectrum-component-top-to-text-75
);--spectrum-table-row-top-to-text-medium-compact:var(
--spectrum-component-top-to-text-100
);--spectrum-table-row-top-to-text-large-compact:var(
--spectrum-component-top-to-text-200
);--spectrum-table-row-top-to-text-extra-large-compact:var(
--spectrum-component-top-to-text-300
);--spectrum-table-row-bottom-to-text-small-compact:var(
--spectrum-component-bottom-to-text-75
);--spectrum-table-row-bottom-to-text-medium-compact:var(
--spectrum-component-bottom-to-text-100
);--spectrum-table-row-bottom-to-text-large-compact:var(
--spectrum-component-bottom-to-text-200
);--spectrum-table-row-bottom-to-text-extra-large-compact:var(
--spectrum-component-bottom-to-text-300
);--spectrum-table-border-divider-width:1px;--spectrum-tab-item-height-small:var(--spectrum-component-height-200);--spectrum-tab-item-height-medium:var(--spectrum-component-height-300);--spectrum-tab-item-height-large:var(--spectrum-component-height-400);--spectrum-tab-item-height-extra-large:var(
--spectrum-component-height-500
);--spectrum-tab-item-compact-height-small:var(
--spectrum-component-height-75
);--spectrum-tab-item-compact-height-medium:var(
--spectrum-component-height-100
);--spectrum-tab-item-compact-height-large:var(
--spectrum-component-height-200
);--spectrum-tab-item-compact-height-extra-large:var(
--spectrum-component-height-300
);--spectrum-tab-item-start-to-edge-quiet:0px;--spectrum-in-field-button-width-stacked-small:20px;--spectrum-in-field-button-width-stacked-medium:28px;--spectrum-in-field-button-width-stacked-large:36px;--spectrum-in-field-button-width-stacked-extra-large:44px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-small:7px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-medium:9px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-large:13px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-extra-large:16px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small:3px;--spectrum-android-elevation:2dp;--spectrum-spacing-50:2px;--spectrum-spacing-75:4px;--spectrum-spacing-100:8px;--spectrum-spacing-200:12px;--spectrum-spacing-300:16px;--spectrum-spacing-400:24px;--spectrum-spacing-500:32px;--spectrum-spacing-600:40px;--spectrum-spacing-700:48px;--spectrum-spacing-800:64px;--spectrum-spacing-900:80px;--spectrum-spacing-1000:96px;--spectrum-focus-indicator-thickness:2px;--spectrum-focus-indicator-gap:2px;--spectrum-border-width-200:2px;--spectrum-border-width-400:4px;--spectrum-field-edge-to-text-quiet:0px;--spectrum-field-edge-to-visual-quiet:0px;--spectrum-field-edge-to-border-quiet:0px;--spectrum-field-edge-to-alert-icon-quiet:0px;--spectrum-field-edge-to-validation-icon-quiet:0px;--spectrum-text-underline-thickness:1px;--spectrum-text-underline-gap:1px;--spectrum-informative-color-100:var(--spectrum-blue-100);--spectrum-informative-color-200:var(--spectrum-blue-200);--spectrum-informative-color-300:var(--spectrum-blue-300);--spectrum-informative-color-400:var(--spectrum-blue-400);--spectrum-informative-color-500:var(--spectrum-blue-500);--spectrum-informative-color-600:var(--spectrum-blue-600);--spectrum-informative-color-700:var(--spectrum-blue-700);--spectrum-informative-color-800:var(--spectrum-blue-800);--spectrum-informative-color-900:var(--spectrum-blue-900);--spectrum-informative-color-1000:var(--spectrum-blue-1000);--spectrum-informative-color-1100:var(--spectrum-blue-1100);--spectrum-informative-color-1200:var(--spectrum-blue-1200);--spectrum-informative-color-1300:var(--spectrum-blue-1300);--spectrum-informative-color-1400:var(--spectrum-blue-1400);--spectrum-negative-color-100:var(--spectrum-red-100);--spectrum-negative-color-200:var(--spectrum-red-200);--spectrum-negative-color-300:var(--spectrum-red-300);--spectrum-negative-color-400:var(--spectrum-red-400);--spectrum-negative-color-500:var(--spectrum-red-500);--spectrum-negative-color-600:var(--spectrum-red-600);--spectrum-negative-color-700:var(--spectrum-red-700);--spectrum-negative-color-800:var(--spectrum-red-800);--spectrum-negative-color-900:var(--spectrum-red-900);--spectrum-negative-color-1000:var(--spectrum-red-1000);--spectrum-negative-color-1100:var(--spectrum-red-1100);--spectrum-negative-color-1200:var(--spectrum-red-1200);--spectrum-negative-color-1300:var(--spectrum-red-1300);--spectrum-negative-color-1400:var(--spectrum-red-1400);--spectrum-notice-color-100:var(--spectrum-orange-100);--spectrum-notice-color-200:var(--spectrum-orange-200);--spectrum-notice-color-300:var(--spectrum-orange-300);--spectrum-notice-color-400:var(--spectrum-orange-400);--spectrum-notice-color-500:var(--spectrum-orange-500);--spectrum-notice-color-600:var(--spectrum-orange-600);--spectrum-notice-color-700:var(--spectrum-orange-700);--spectrum-notice-color-800:var(--spectrum-orange-800);--spectrum-notice-color-900:var(--spectrum-orange-900);--spectrum-notice-color-1000:var(--spectrum-orange-1000);--spectrum-notice-color-1100:var(--spectrum-orange-1100);--spectrum-notice-color-1200:var(--spectrum-orange-1200);--spectrum-notice-color-1300:var(--spectrum-orange-1300);--spectrum-notice-color-1400:var(--spectrum-orange-1400);--spectrum-positive-color-100:var(--spectrum-green-100);--spectrum-positive-color-200:var(--spectrum-green-200);--spectrum-positive-color-300:var(--spectrum-green-300);--spectrum-positive-color-400:var(--spectrum-green-400);--spectrum-positive-color-500:var(--spectrum-green-500);--spectrum-positive-color-600:var(--spectrum-green-600);--spectrum-positive-color-700:var(--spectrum-green-700);--spectrum-positive-color-800:var(--spectrum-green-800);--spectrum-positive-color-900:var(--spectrum-green-900);--spectrum-positive-color-1000:var(--spectrum-green-1000);--spectrum-positive-color-1100:var(--spectrum-green-1100);--spectrum-positive-color-1200:var(--spectrum-green-1200);--spectrum-positive-color-1300:var(--spectrum-green-1300);--spectrum-positive-color-1400:var(--spectrum-green-1400);--spectrum-default-font-family:var(--spectrum-sans-serif-font-family);--spectrum-sans-serif-font-family:Adobe Clean;--spectrum-serif-font-family:Adobe Clean Serif;--spectrum-cjk-font-family:Adobe Clean Han;--spectrum-light-font-weight:300;--spectrum-regular-font-weight:400;--spectrum-medium-font-weight:500;--spectrum-bold-font-weight:700;--spectrum-extra-bold-font-weight:800;--spectrum-black-font-weight:900;--spectrum-italic-font-style:italic;--spectrum-default-font-style:normal;--spectrum-line-height-100:1.3;--spectrum-line-height-200:1.5;--spectrum-cjk-line-height-100:1.5;--spectrum-cjk-line-height-200:1.7;--spectrum-cjk-letter-spacing:0.05em;--spectrum-heading-sans-serif-font-family:var(
--spectrum-sans-serif-font-family
);--spectrum-heading-serif-font-family:var(--spectrum-serif-font-family);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-heading-sans-serif-light-font-weight:var(
--spectrum-light-font-weight
);--spectrum-heading-sans-serif-light-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-light-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-heading-serif-light-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-heavy-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-heavy-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-heavy-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-cjk-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-strong-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-heading-sans-serif-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-light-strong-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-heading-serif-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-cjk-light-strong-font-weight:var(
--spectrum-extra-bold-font-weight
);--spectrum-heading-cjk-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-cjk-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-heavy-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-heavy-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-serif-heavy-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-heavy-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-cjk-heavy-strong-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-heavy-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-light-emphasized-font-weight:var(
--spectrum-light-font-weight
);--spectrum-heading-sans-serif-light-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-light-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-heading-serif-light-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-light-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-heading-cjk-light-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-heavy-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-heavy-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-heavy-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-heavy-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-heavy-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-heavy-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-light-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-heading-sans-serif-light-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-light-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-heading-serif-light-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-light-strong-emphasized-font-weight:var(
--spectrum-extra-bold-font-weight
);--spectrum-heading-cjk-light-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-serif-heavy-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-serif-heavy-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-heading-cjk-heavy-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-heading-cjk-heavy-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-heading-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-size-xxl:var(--spectrum-font-size-1100);--spectrum-heading-size-xl:var(--spectrum-font-size-900);--spectrum-heading-size-l:var(--spectrum-font-size-700);--spectrum-heading-size-m:var(--spectrum-font-size-500);--spectrum-heading-size-s:var(--spectrum-font-size-300);--spectrum-heading-size-xs:var(--spectrum-font-size-200);--spectrum-heading-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-cjk-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-cjk-size-xxl:var(--spectrum-font-size-900);--spectrum-heading-cjk-size-xl:var(--spectrum-font-size-800);--spectrum-heading-cjk-size-l:var(--spectrum-font-size-600);--spectrum-heading-cjk-size-m:var(--spectrum-font-size-400);--spectrum-heading-cjk-size-s:var(--spectrum-font-size-300);--spectrum-heading-cjk-size-xs:var(--spectrum-font-size-200);--spectrum-heading-cjk-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-line-height:var(--spectrum-line-height-100);--spectrum-heading-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-heading-margin-top-multiplier:0.88888889;--spectrum-heading-margin-bottom-multiplier:0.25;--spectrum-heading-color:var(--spectrum-gray-900);--spectrum-body-sans-serif-font-family:var(
--spectrum-sans-serif-font-family
);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-body-sans-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-cjk-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-strong-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-body-sans-serif-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-body-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-body-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-body-sans-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-body-serif-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-body-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-body-cjk-emphasized-font-weight:var(
--spectrum-extra-bold-font-weight
);--spectrum-body-cjk-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-body-sans-serif-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-body-sans-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-body-serif-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-body-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-body-cjk-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-body-cjk-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-body-size-xxxl:var(--spectrum-font-size-600);--spectrum-body-size-xxl:var(--spectrum-font-size-500);--spectrum-body-size-xl:var(--spectrum-font-size-400);--spectrum-body-size-l:var(--spectrum-font-size-300);--spectrum-body-size-m:var(--spectrum-font-size-200);--spectrum-body-size-s:var(--spectrum-font-size-100);--spectrum-body-size-xs:var(--spectrum-font-size-75);--spectrum-body-line-height:var(--spectrum-line-height-200);--spectrum-body-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-body-margin-multiplier:0.75;--spectrum-body-color:var(--spectrum-gray-800);--spectrum-detail-sans-serif-font-family:var(
--spectrum-sans-serif-font-family
);--spectrum-detail-serif-font-family:var(--spectrum-serif-font-family);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-detail-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-sans-serif-light-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-serif-light-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-serif-light-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-detail-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-strong-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-sans-serif-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-serif-strong-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-serif-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-strong-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-sans-serif-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-serif-light-strong-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-serif-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-cjk-light-strong-font-weight:var(
--spectrum-extra-bold-font-weight
);--spectrum-detail-cjk-light-strong-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-sans-serif-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-sans-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-serif-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-serif-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-cjk-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-detail-cjk-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-sans-serif-light-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-sans-serif-light-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-serif-light-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-serif-light-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-cjk-light-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-cjk-light-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-sans-serif-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-sans-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-serif-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-detail-serif-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-cjk-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-detail-cjk-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-sans-serif-light-strong-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-sans-serif-light-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-serif-light-strong-emphasized-font-weight:var(
--spectrum-regular-font-weight
);--spectrum-detail-serif-light-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-detail-cjk-light-strong-emphasized-font-weight:var(
--spectrum-extra-bold-font-weight
);--spectrum-detail-cjk-light-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-detail-size-xl:var(--spectrum-font-size-200);--spectrum-detail-size-l:var(--spectrum-font-size-100);--spectrum-detail-size-m:var(--spectrum-font-size-75);--spectrum-detail-size-s:var(--spectrum-font-size-50);--spectrum-detail-line-height:var(--spectrum-line-height-100);--spectrum-detail-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-detail-margin-top-multiplier:0.88888889;--spectrum-detail-margin-bottom-multiplier:0.25;--spectrum-detail-letter-spacing:0.06em;--spectrum-detail-sans-serif-text-transform:uppercase;--spectrum-detail-serif-text-transform:uppercase;--spectrum-detail-color:var(--spectrum-gray-900);--spectrum-code-font-family:Source Code Pro;--spectrum-code-cjk-font-family:var(--spectrum-code-font-family);--spectrum-code-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-cjk-font-style:var(--spectrum-default-font-style);--spectrum-code-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-code-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-code-cjk-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-code-cjk-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-code-strong-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-code-strong-emphasized-font-style:var(
--spectrum-italic-font-style
);--spectrum-code-cjk-strong-emphasized-font-weight:var(
--spectrum-black-font-weight
);--spectrum-code-cjk-strong-emphasized-font-style:var(
--spectrum-default-font-style
);--spectrum-code-size-xl:var(--spectrum-font-size-400);--spectrum-code-size-l:var(--spectrum-font-size-300);--spectrum-code-size-m:var(--spectrum-font-size-200);--spectrum-code-size-s:var(--spectrum-font-size-100);--spectrum-code-size-xs:var(--spectrum-font-size-75);--spectrum-code-line-height:var(--spectrum-line-height-200);--spectrum-code-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-code-color:var(--spectrum-gray-800)}:host,:root{--spectrum-neutral-background-color-selected-default:var(
--spectrum-gray-700
);--spectrum-neutral-background-color-selected-hover:var(
--spectrum-gray-800
);--spectrum-neutral-background-color-selected-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-selected-key-focus:var(
--spectrum-gray-800
);--spectrum-color-handle-outer-border-color:var(--spectrum-black);--spectrum-slider-track-thickness:2px;--spectrum-slider-handle-gap:4px;--spectrum-picker-border-width:var(--spectrum-border-width-100);--spectrum-in-field-button-fill-stacked-inner-border-rounding:0px;--spectrum-in-field-button-edge-to-fill:0px;--spectrum-in-field-button-stacked-inner-edge-to-fill:0px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium:3px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large:4px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large:5px;--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-small:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small
);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-medium:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium
);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-large:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large
);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-extra-large:var(
--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large
);--spectrum-border-width-100:1px;--spectrum-accent-color-100:var(--spectrum-blue-100);--spectrum-accent-color-200:var(--spectrum-blue-200);--spectrum-accent-color-300:var(--spectrum-blue-300);--spectrum-accent-color-400:var(--spectrum-blue-400);--spectrum-accent-color-500:var(--spectrum-blue-500);--spectrum-accent-color-600:var(--spectrum-blue-600);--spectrum-accent-color-700:var(--spectrum-blue-700);--spectrum-accent-color-800:var(--spectrum-blue-800);--spectrum-accent-color-900:var(--spectrum-blue-900);--spectrum-accent-color-1000:var(--spectrum-blue-1000);--spectrum-accent-color-1100:var(--spectrum-blue-1100);--spectrum-accent-color-1200:var(--spectrum-blue-1200);--spectrum-accent-color-1300:var(--spectrum-blue-1300);--spectrum-accent-color-1400:var(--spectrum-blue-1400);--spectrum-heading-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-sans-serif-emphasized-font-weight:var(
--spectrum-bold-font-weight
);--spectrum-heading-serif-emphasized-font-weight:var(
--spectrum-bold-font-weight
)}:host,:root{--system-spectrum-actionbutton-background-color-default:var(
--spectrum-gray-75
);--system-spectrum-actionbutton-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-actionbutton-background-color-focus:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-border-color-default:var(
--spectrum-gray-400
);--system-spectrum-actionbutton-border-color-hover:var(--spectrum-gray-500);--system-spectrum-actionbutton-border-color-down:var(--spectrum-gray-600);--system-spectrum-actionbutton-border-color-focus:var(--spectrum-gray-500);--system-spectrum-actionbutton-background-color-disabled:transparent;--system-spectrum-actionbutton-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-actionbutton-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-actionbutton-quiet-background-color-default:transparent;--system-spectrum-actionbutton-quiet-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-quiet-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-actionbutton-quiet-background-color-focus:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-quiet-border-color-default:transparent;--system-spectrum-actionbutton-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-quiet-border-color-down:transparent;--system-spectrum-actionbutton-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-quiet-background-color-disabled:transparent;--system-spectrum-actionbutton-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-selected-border-color-default:transparent;--system-spectrum-actionbutton-selected-border-color-hover:transparent;--system-spectrum-actionbutton-selected-border-color-down:transparent;--system-spectrum-actionbutton-selected-border-color-focus:transparent;--system-spectrum-actionbutton-selected-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-actionbutton-selected-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-background-color-default:transparent;--system-spectrum-actionbutton-staticblack-background-color-hover:var(
--spectrum-transparent-black-300
);--system-spectrum-actionbutton-staticblack-background-color-down:var(
--spectrum-transparent-black-400
);--system-spectrum-actionbutton-staticblack-background-color-focus:var(
--spectrum-transparent-black-300
);--system-spectrum-actionbutton-staticblack-border-color-default:var(
--spectrum-transparent-black-400
);--system-spectrum-actionbutton-staticblack-border-color-hover:var(
--spectrum-transparent-black-500
);--system-spectrum-actionbutton-staticblack-border-color-down:var(
--spectrum-transparent-black-600
);--system-spectrum-actionbutton-staticblack-border-color-focus:var(
--spectrum-transparent-black-500
);--system-spectrum-actionbutton-staticblack-content-color-default:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-content-color-hover:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-content-color-down:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-content-color-focus:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
);--system-spectrum-actionbutton-staticblack-background-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-border-color-disabled:var(
--spectrum-disabled-static-black-border-color
);--system-spectrum-actionbutton-staticblack-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-default:var(
--spectrum-transparent-black-800
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-hover:var(
--spectrum-transparent-black-900
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-down:var(
--spectrum-transparent-black-900
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-focus:var(
--spectrum-transparent-black-900
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-default:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-hover:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-down:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-focus:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-disabled:var(
--spectrum-disabled-static-black-background-color
);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-border-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-background-color-default:transparent;--system-spectrum-actionbutton-staticwhite-background-color-hover:var(
--spectrum-transparent-white-300
);--system-spectrum-actionbutton-staticwhite-background-color-down:var(
--spectrum-transparent-white-400
);--system-spectrum-actionbutton-staticwhite-background-color-focus:var(
--spectrum-transparent-white-300
);--system-spectrum-actionbutton-staticwhite-border-color-default:var(
--spectrum-transparent-white-400
);--system-spectrum-actionbutton-staticwhite-border-color-hover:var(
--spectrum-transparent-white-500
);--system-spectrum-actionbutton-staticwhite-border-color-down:var(
--spectrum-transparent-white-600
);--system-spectrum-actionbutton-staticwhite-border-color-focus:var(
--spectrum-transparent-white-500
);--system-spectrum-actionbutton-staticwhite-content-color-default:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-content-color-hover:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-content-color-down:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-content-color-focus:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
);--system-spectrum-actionbutton-staticwhite-background-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-border-color-disabled:var(
--spectrum-disabled-static-white-border-color
);--system-spectrum-actionbutton-staticwhite-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-default:var(
--spectrum-transparent-white-800
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-hover:var(
--spectrum-transparent-white-900
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-down:var(
--spectrum-transparent-white-900
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-focus:var(
--spectrum-transparent-white-900
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-default:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-hover:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-down:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-focus:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-disabled:var(
--spectrum-disabled-static-white-background-color
);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-border-color-disabled:transparent}:host,:root{--system-spectrum-actiongroup-gap-size-compact:0;--system-spectrum-actiongroup-horizontal-spacing-compact:-1px;--system-spectrum-actiongroup-vertical-spacing-compact:-1px}:host,:root{--system-spectrum-button-background-color-default:var(--spectrum-gray-75);--system-spectrum-button-background-color-hover:var(--spectrum-gray-200);--system-spectrum-button-background-color-down:var(--spectrum-gray-300);--system-spectrum-button-background-color-focus:var(--spectrum-gray-200);--system-spectrum-button-border-color-default:var(--spectrum-gray-400);--system-spectrum-button-border-color-hover:var(--spectrum-gray-500);--system-spectrum-button-border-color-down:var(--spectrum-gray-600);--system-spectrum-button-border-color-focus:var(--spectrum-gray-500);--system-spectrum-button-content-color-default:var(
--spectrum-neutral-content-color-default
);--system-spectrum-button-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--system-spectrum-button-content-color-down:var(
--spectrum-neutral-content-color-down
);--system-spectrum-button-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--system-spectrum-button-background-color-disabled:transparent;--system-spectrum-button-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-button-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-accent-background-color-default:var(
--spectrum-accent-background-color-default
);--system-spectrum-button-accent-background-color-hover:var(
--spectrum-accent-background-color-hover
);--system-spectrum-button-accent-background-color-down:var(
--spectrum-accent-background-color-down
);--system-spectrum-button-accent-background-color-focus:var(
--spectrum-accent-background-color-key-focus
);--system-spectrum-button-accent-border-color-default:transparent;--system-spectrum-button-accent-border-color-hover:transparent;--system-spectrum-button-accent-border-color-down:transparent;--system-spectrum-button-accent-border-color-focus:transparent;--system-spectrum-button-accent-content-color-default:var(
--spectrum-white
);--system-spectrum-button-accent-content-color-hover:var(--spectrum-white);--system-spectrum-button-accent-content-color-down:var(--spectrum-white);--system-spectrum-button-accent-content-color-focus:var(--spectrum-white);--system-spectrum-button-accent-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-button-accent-border-color-disabled:transparent;--system-spectrum-button-accent-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-accent-outline-background-color-default:transparent;--system-spectrum-button-accent-outline-background-color-hover:var(
--spectrum-accent-color-200
);--system-spectrum-button-accent-outline-background-color-down:var(
--spectrum-accent-color-300
);--system-spectrum-button-accent-outline-background-color-focus:var(
--spectrum-accent-color-200
);--system-spectrum-button-accent-outline-border-color-default:var(
--spectrum-accent-color-900
);--system-spectrum-button-accent-outline-border-color-hover:var(
--spectrum-accent-color-1000
);--system-spectrum-button-accent-outline-border-color-down:var(
--spectrum-accent-color-1100
);--system-spectrum-button-accent-outline-border-color-focus:var(
--spectrum-accent-color-1000
);--system-spectrum-button-accent-outline-content-color-default:var(
--spectrum-accent-content-color-default
);--system-spectrum-button-accent-outline-content-color-hover:var(
--spectrum-accent-content-color-hover
);--system-spectrum-button-accent-outline-content-color-down:var(
--spectrum-accent-content-color-down
);--system-spectrum-button-accent-outline-content-color-focus:var(
--spectrum-accent-content-color-key-focus
);--system-spectrum-button-accent-outline-background-color-disabled:transparent;--system-spectrum-button-accent-outline-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-button-accent-outline-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-negative-background-color-default:var(
--spectrum-negative-background-color-default
);--system-spectrum-button-negative-background-color-hover:var(
--spectrum-negative-background-color-hover
);--system-spectrum-button-negative-background-color-down:var(
--spectrum-negative-background-color-down
);--system-spectrum-button-negative-background-color-focus:var(
--spectrum-negative-background-color-key-focus
);--system-spectrum-button-negative-border-color-default:transparent;--system-spectrum-button-negative-border-color-hover:transparent;--system-spectrum-button-negative-border-color-down:transparent;--system-spectrum-button-negative-border-color-focus:transparent;--system-spectrum-button-negative-content-color-default:var(
--spectrum-white
);--system-spectrum-button-negative-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-negative-content-color-down:var(--spectrum-white);--system-spectrum-button-negative-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-negative-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-button-negative-border-color-disabled:transparent;--system-spectrum-button-negative-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-negative-outline-background-color-default:transparent;--system-spectrum-button-negative-outline-background-color-hover:var(
--spectrum-negative-color-200
);--system-spectrum-button-negative-outline-background-color-down:var(
--spectrum-negative-color-300
);--system-spectrum-button-negative-outline-background-color-focus:var(
--spectrum-negative-color-200
);--system-spectrum-button-negative-outline-border-color-default:var(
--spectrum-negative-color-900
);--system-spectrum-button-negative-outline-border-color-hover:var(
--spectrum-negative-color-1000
);--system-spectrum-button-negative-outline-border-color-down:var(
--spectrum-negative-color-1100
);--system-spectrum-button-negative-outline-border-color-focus:var(
--spectrum-negative-color-1000
);--system-spectrum-button-negative-outline-content-color-default:var(
--spectrum-negative-content-color-default
);--system-spectrum-button-negative-outline-content-color-hover:var(
--spectrum-negative-content-color-hover
);--system-spectrum-button-negative-outline-content-color-down:var(
--spectrum-negative-content-color-down
);--system-spectrum-button-negative-outline-content-color-focus:var(
--spectrum-negative-content-color-key-focus
);--system-spectrum-button-negative-outline-background-color-disabled:transparent;--system-spectrum-button-negative-outline-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-button-negative-outline-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-primary-background-color-default:var(
--spectrum-neutral-background-color-default
);--system-spectrum-button-primary-background-color-hover:var(
--spectrum-neutral-background-color-hover
);--system-spectrum-button-primary-background-color-down:var(
--spectrum-neutral-background-color-down
);--system-spectrum-button-primary-background-color-focus:var(
--spectrum-neutral-background-color-key-focus
);--system-spectrum-button-primary-border-color-default:transparent;--system-spectrum-button-primary-border-color-hover:transparent;--system-spectrum-button-primary-border-color-down:transparent;--system-spectrum-button-primary-border-color-focus:transparent;--system-spectrum-button-primary-content-color-default:var(
--spectrum-white
);--system-spectrum-button-primary-content-color-hover:var(--spectrum-white);--system-spectrum-button-primary-content-color-down:var(--spectrum-white);--system-spectrum-button-primary-content-color-focus:var(--spectrum-white);--system-spectrum-button-primary-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-button-primary-border-color-disabled:transparent;--system-spectrum-button-primary-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-primary-outline-background-color-default:transparent;--system-spectrum-button-primary-outline-background-color-hover:var(
--spectrum-gray-300
);--system-spectrum-button-primary-outline-background-color-down:var(
--spectrum-gray-400
);--system-spectrum-button-primary-outline-background-color-focus:var(
--spectrum-gray-300
);--system-spectrum-button-primary-outline-border-color-default:var(
--spectrum-gray-800
);--system-spectrum-button-primary-outline-border-color-hover:var(
--spectrum-gray-900
);--system-spectrum-button-primary-outline-border-color-down:var(
--spectrum-gray-900
);--system-spectrum-button-primary-outline-border-color-focus:var(
--spectrum-gray-900
);--system-spectrum-button-primary-outline-content-color-default:var(
--spectrum-neutral-content-color-default
);--system-spectrum-button-primary-outline-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--system-spectrum-button-primary-outline-content-color-down:var(
--spectrum-neutral-content-color-down
);--system-spectrum-button-primary-outline-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--system-spectrum-button-primary-outline-background-color-disabled:transparent;--system-spectrum-button-primary-outline-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-button-primary-outline-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-secondary-background-color-default:var(
--spectrum-gray-200
);--system-spectrum-button-secondary-background-color-hover:var(
--spectrum-gray-300
);--system-spectrum-button-secondary-background-color-down:var(
--spectrum-gray-400
);--system-spectrum-button-secondary-background-color-focus:var(
--spectrum-gray-300
);--system-spectrum-button-secondary-border-color-default:transparent;--system-spectrum-button-secondary-border-color-hover:transparent;--system-spectrum-button-secondary-border-color-down:transparent;--system-spectrum-button-secondary-border-color-focus:transparent;--system-spectrum-button-secondary-content-color-default:var(
--spectrum-neutral-content-color-default
);--system-spectrum-button-secondary-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--system-spectrum-button-secondary-content-color-down:var(
--spectrum-neutral-content-color-down
);--system-spectrum-button-secondary-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--system-spectrum-button-secondary-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-button-secondary-border-color-disabled:transparent;--system-spectrum-button-secondary-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-secondary-outline-background-color-default:transparent;--system-spectrum-button-secondary-outline-background-color-hover:var(
--spectrum-gray-300
);--system-spectrum-button-secondary-outline-background-color-down:var(
--spectrum-gray-400
);--system-spectrum-button-secondary-outline-background-color-focus:var(
--spectrum-gray-300
);--system-spectrum-button-secondary-outline-border-color-default:var(
--spectrum-gray-300
);--system-spectrum-button-secondary-outline-border-color-hover:var(
--spectrum-gray-400
);--system-spectrum-button-secondary-outline-border-color-down:var(
--spectrum-gray-500
);--system-spectrum-button-secondary-outline-border-color-focus:var(
--spectrum-gray-400
);--system-spectrum-button-secondary-outline-content-color-default:var(
--spectrum-neutral-content-color-default
);--system-spectrum-button-secondary-outline-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--system-spectrum-button-secondary-outline-content-color-down:var(
--spectrum-neutral-content-color-down
);--system-spectrum-button-secondary-outline-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--system-spectrum-button-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-secondary-outline-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-button-secondary-outline-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-button-quiet-background-color-default:transparent;--system-spectrum-button-quiet-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-button-quiet-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-button-quiet-background-color-focus:var(
--spectrum-gray-200
);--system-spectrum-button-quiet-border-color-default:transparent;--system-spectrum-button-quiet-border-color-hover:transparent;--system-spectrum-button-quiet-border-color-down:transparent;--system-spectrum-button-quiet-border-color-focus:transparent;--system-spectrum-button-quiet-background-color-disabled:transparent;--system-spectrum-button-quiet-border-color-disabled:transparent;--system-spectrum-button-selected-background-color-default:var(
--spectrum-neutral-subdued-background-color-default
);--system-spectrum-button-selected-background-color-hover:var(
--spectrum-neutral-subdued-background-color-hover
);--system-spectrum-button-selected-background-color-down:var(
--spectrum-neutral-subdued-background-color-down
);--system-spectrum-button-selected-background-color-focus:var(
--spectrum-neutral-subdued-background-color-key-focus
);--system-spectrum-button-selected-border-color-default:transparent;--system-spectrum-button-selected-border-color-hover:transparent;--system-spectrum-button-selected-border-color-down:transparent;--system-spectrum-button-selected-border-color-focus:transparent;--system-spectrum-button-selected-content-color-default:var(
--spectrum-white
);--system-spectrum-button-selected-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-selected-content-color-down:var(--spectrum-white);--system-spectrum-button-selected-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-selected-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-button-selected-border-color-disabled:transparent;--system-spectrum-button-selected-emphasized-background-color-default:var(
--spectrum-accent-background-color-default
);--system-spectrum-button-selected-emphasized-background-color-hover:var(
--spectrum-accent-background-color-hover
);--system-spectrum-button-selected-emphasized-background-color-down:var(
--spectrum-accent-background-color-down
);--system-spectrum-button-selected-emphasized-background-color-focus:var(
--spectrum-accent-background-color-key-focus
);--system-spectrum-button-staticblack-quiet-border-color-default:transparent;--system-spectrum-button-staticwhite-quiet-border-color-default:transparent;--system-spectrum-button-staticblack-quiet-border-color-hover:transparent;--system-spectrum-button-staticwhite-quiet-border-color-hover:transparent;--system-spectrum-button-staticblack-quiet-border-color-down:transparent;--system-spectrum-button-staticwhite-quiet-border-color-down:transparent;--system-spectrum-button-staticblack-quiet-border-color-focus:transparent;--system-spectrum-button-staticwhite-quiet-border-color-focus:transparent;--system-spectrum-button-staticblack-quiet-border-color-disabled:transparent;--system-spectrum-button-staticwhite-quiet-border-color-disabled:transparent;--system-spectrum-button-staticwhite-background-color-default:var(
--spectrum-transparent-white-800
);--system-spectrum-button-staticwhite-background-color-hover:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-background-color-down:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-background-color-focus:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-border-color-default:transparent;--system-spectrum-button-staticwhite-border-color-hover:transparent;--system-spectrum-button-staticwhite-border-color-down:transparent;--system-spectrum-button-staticwhite-border-color-focus:transparent;--system-spectrum-button-staticwhite-content-color-default:var(
--spectrum-black
);--system-spectrum-button-staticwhite-content-color-hover:var(
--spectrum-black
);--system-spectrum-button-staticwhite-content-color-down:var(
--spectrum-black
);--system-spectrum-button-staticwhite-content-color-focus:var(
--spectrum-black
);--system-spectrum-button-staticwhite-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
);--system-spectrum-button-staticwhite-background-color-disabled:var(
--spectrum-disabled-static-white-background-color
);--system-spectrum-button-staticwhite-border-color-disabled:transparent;--system-spectrum-button-staticwhite-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-button-staticwhite-outline-background-color-default:transparent;--system-spectrum-button-staticwhite-outline-background-color-hover:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-outline-background-color-down:var(
--spectrum-transparent-white-400
);--system-spectrum-button-staticwhite-outline-background-color-focus:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-outline-border-color-default:var(
--spectrum-transparent-white-800
);--system-spectrum-button-staticwhite-outline-border-color-hover:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-outline-border-color-down:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-outline-border-color-focus:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-outline-content-color-default:var(
--spectrum-white
);--system-spectrum-button-staticwhite-outline-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-staticwhite-outline-content-color-down:var(
--spectrum-white
);--system-spectrum-button-staticwhite-outline-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-staticwhite-outline-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
);--system-spectrum-button-staticwhite-outline-background-color-disabled:transparent;--system-spectrum-button-staticwhite-outline-border-color-disabled:var(
--spectrum-disabled-static-white-border-color
);--system-spectrum-button-staticwhite-outline-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-button-staticwhite-selected-background-color-default:var(
--spectrum-transparent-white-800
);--system-spectrum-button-staticwhite-selected-background-color-hover:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-selected-background-color-down:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-selected-background-color-focus:var(
--spectrum-transparent-white-900
);--system-spectrum-button-staticwhite-selected-content-color-default:var(
--spectrum-black
);--system-spectrum-button-staticwhite-selected-content-color-hover:var(
--spectrum-black
);--system-spectrum-button-staticwhite-selected-content-color-down:var(
--spectrum-black
);--system-spectrum-button-staticwhite-selected-content-color-focus:var(
--spectrum-black
);--system-spectrum-button-staticwhite-selected-background-color-disabled:var(
--spectrum-disabled-static-white-background-color
);--system-spectrum-button-staticwhite-selected-border-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-background-color-default:var(
--spectrum-transparent-white-200
);--system-spectrum-button-staticwhite-secondary-background-color-hover:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-secondary-background-color-down:var(
--spectrum-transparent-white-400
);--system-spectrum-button-staticwhite-secondary-background-color-focus:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-secondary-border-color-default:transparent;--system-spectrum-button-staticwhite-secondary-border-color-hover:transparent;--system-spectrum-button-staticwhite-secondary-border-color-down:transparent;--system-spectrum-button-staticwhite-secondary-border-color-focus:transparent;--system-spectrum-button-staticwhite-secondary-content-color-default:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-content-color-down:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
);--system-spectrum-button-staticwhite-secondary-background-color-disabled:var(
--spectrum-disabled-static-white-background-color
);--system-spectrum-button-staticwhite-secondary-border-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-button-staticwhite-secondary-outline-background-color-default:transparent;--system-spectrum-button-staticwhite-secondary-outline-background-color-hover:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-secondary-outline-background-color-down:var(
--spectrum-transparent-white-400
);--system-spectrum-button-staticwhite-secondary-outline-background-color-focus:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-secondary-outline-border-color-default:var(
--spectrum-transparent-white-300
);--system-spectrum-button-staticwhite-secondary-outline-border-color-hover:var(
--spectrum-transparent-white-400
);--system-spectrum-button-staticwhite-secondary-outline-border-color-down:var(
--spectrum-transparent-white-500
);--system-spectrum-button-staticwhite-secondary-outline-border-color-focus:var(
--spectrum-transparent-white-400
);--system-spectrum-button-staticwhite-secondary-outline-content-color-default:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-outline-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-outline-content-color-down:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-outline-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-staticwhite-secondary-outline-focus-indicator-color:var(
--spectrum-static-white-focus-indicator-color
);--system-spectrum-button-staticwhite-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-outline-border-color-disabled:var(
--spectrum-disabled-static-white-border-color
);--system-spectrum-button-staticwhite-secondary-outline-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-button-staticblack-background-color-default:var(
--spectrum-transparent-black-800
);--system-spectrum-button-staticblack-background-color-hover:var(
--spectrum-transparent-black-900
);--system-spectrum-button-staticblack-background-color-down:var(
--spectrum-transparent-black-900
);--system-spectrum-button-staticblack-background-color-focus:var(
--spectrum-transparent-black-900
);--system-spectrum-button-staticblack-border-color-default:transparent;--system-spectrum-button-staticblack-border-color-hover:transparent;--system-spectrum-button-staticblack-border-color-down:transparent;--system-spectrum-button-staticblack-border-color-focus:transparent;--system-spectrum-button-staticblack-content-color-default:var(
--spectrum-white
);--system-spectrum-button-staticblack-content-color-hover:var(
--spectrum-white
);--system-spectrum-button-staticblack-content-color-down:var(
--spectrum-white
);--system-spectrum-button-staticblack-content-color-focus:var(
--spectrum-white
);--system-spectrum-button-staticblack-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
);--system-spectrum-button-staticblack-background-color-disabled:var(
--spectrum-disabled-static-black-background-color
);--system-spectrum-button-staticblack-border-color-disabled:transparent;--system-spectrum-button-staticblack-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--system-spectrum-button-staticblack-outline-background-color-default:transparent;--system-spectrum-button-staticblack-outline-background-color-hover:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-outline-background-color-down:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-outline-background-color-focus:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-outline-border-color-default:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-outline-border-color-hover:var(
--spectrum-transparent-black-500
);--system-spectrum-button-staticblack-outline-border-color-down:var(
--spectrum-transparent-black-600
);--system-spectrum-button-staticblack-outline-border-color-focus:var(
--spectrum-transparent-black-500
);--system-spectrum-button-staticblack-outline-content-color-default:var(
--spectrum-black
);--system-spectrum-button-staticblack-outline-content-color-hover:var(
--spectrum-black
);--system-spectrum-button-staticblack-outline-content-color-down:var(
--spectrum-black
);--system-spectrum-button-staticblack-outline-content-color-focus:var(
--spectrum-black
);--system-spectrum-button-staticblack-outline-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
);--system-spectrum-button-staticblack-outline-background-color-disabled:transparent;--system-spectrum-button-staticblack-outline-border-color-disabled:var(
--spectrum-disabled-static-black-border-color
);--system-spectrum-button-staticblack-outline-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--system-spectrum-button-staticblack-secondary-background-color-default:var(
--spectrum-transparent-black-200
);--system-spectrum-button-staticblack-secondary-background-color-hover:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-secondary-background-color-down:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-secondary-background-color-focus:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-secondary-border-color-default:transparent;--system-spectrum-button-staticblack-secondary-border-color-hover:transparent;--system-spectrum-button-staticblack-secondary-border-color-down:transparent;--system-spectrum-button-staticblack-secondary-border-color-focus:transparent;--system-spectrum-button-staticblack-secondary-content-color-default:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-content-color-hover:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-content-color-down:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-content-color-focus:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
);--system-spectrum-button-staticblack-secondary-background-color-disabled:var(
--spectrum-disabled-static-black-background-color
);--system-spectrum-button-staticblack-secondary-border-color-disabled:transparent;--system-spectrum-button-staticblack-secondary-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--system-spectrum-button-staticblack-secondary-outline-background-color-default:transparent;--system-spectrum-button-staticblack-secondary-outline-background-color-hover:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-secondary-outline-background-color-down:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-secondary-outline-background-color-focus:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-secondary-outline-border-color-default:var(
--spectrum-transparent-black-300
);--system-spectrum-button-staticblack-secondary-outline-border-color-hover:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-secondary-outline-border-color-down:var(
--spectrum-transparent-black-500
);--system-spectrum-button-staticblack-secondary-outline-border-color-focus:var(
--spectrum-transparent-black-400
);--system-spectrum-button-staticblack-secondary-outline-content-color-default:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-outline-content-color-hover:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-outline-content-color-down:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-outline-content-color-focus:var(
--spectrum-black
);--system-spectrum-button-staticblack-secondary-outline-focus-indicator-color:var(
--spectrum-static-black-focus-indicator-color
);--system-spectrum-button-staticblack-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-staticblack-secondary-outline-border-color-disabled:var(
--spectrum-disabled-static-black-border-color
);--system-spectrum-button-staticblack-secondary-outline-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
)}:host,:root{--system-spectrum-checkbox-control-color-default:var(--spectrum-gray-600);--system-spectrum-checkbox-control-color-hover:var(--spectrum-gray-700);--system-spectrum-checkbox-control-color-down:var(--spectrum-gray-800);--system-spectrum-checkbox-control-color-focus:var(--spectrum-gray-700)}:host,:root{--system-spectrum-closebutton-background-color-default:transparent;--system-spectrum-closebutton-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-closebutton-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-closebutton-background-color-focus:var(
--spectrum-gray-200
)}:host,:root{--system-spectrum-radio-button-border-color-default:var(
--spectrum-gray-600
);--system-spectrum-radio-button-border-color-hover:var(--spectrum-gray-700);--system-spectrum-radio-button-border-color-down:var(--spectrum-gray-800);--system-spectrum-radio-button-border-color-focus:var(--spectrum-gray-700);--system-spectrum-radio-emphasized-button-checked-border-color-default:var(
--spectrum-accent-color-900
);--system-spectrum-radio-emphasized-button-checked-border-color-hover:var(
--spectrum-accent-color-1000
);--system-spectrum-radio-emphasized-button-checked-border-color-down:var(
--spectrum-accent-color-1100
);--system-spectrum-radio-emphasized-button-checked-border-color-focus:var(
--spectrum-accent-color-1000
)}:host,:root{--system-spectrum-switch-handle-border-color-default:var(
--spectrum-gray-600
);--system-spectrum-switch-handle-border-color-hover:var(
--spectrum-gray-700
);--system-spectrum-switch-handle-border-color-down:var(--spectrum-gray-800);--system-spectrum-switch-handle-border-color-focus:var(
--spectrum-gray-700
);--system-spectrum-switch-handle-border-color-selected-default:var(
--spectrum-gray-700
);--system-spectrum-switch-handle-border-color-selected-hover:var(
--spectrum-gray-800
);--system-spectrum-switch-handle-border-color-selected-down:var(
--spectrum-gray-900
);--system-spectrum-switch-handle-border-color-selected-focus:var(
--spectrum-gray-800
)}:host,:root{--system-spectrum-tag-border-color:var(--spectrum-gray-700);--system-spectrum-tag-border-color-hover:var(--spectrum-gray-800);--system-spectrum-tag-border-color-active:var(--spectrum-gray-900);--system-spectrum-tag-border-color-focus:var(--spectrum-gray-800);--system-spectrum-tag-size-small-corner-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-tag-size-medium-corner-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-tag-size-large-corner-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-tag-background-color:var(--spectrum-gray-75);--system-spectrum-tag-background-color-hover:var(--spectrum-gray-75);--system-spectrum-tag-background-color-active:var(--spectrum-gray-200);--system-spectrum-tag-background-color-focus:var(--spectrum-gray-75);--system-spectrum-tag-content-color:var(
--spectrum-neutral-subdued-content-color-default
);--system-spectrum-tag-content-color-hover:var(
--spectrum-neutral-subdued-content-color-hover
);--system-spectrum-tag-content-color-active:var(
--spectrum-neutral-subdued-content-color-down
);--system-spectrum-tag-content-color-focus:var(
--spectrum-neutral-subdued-content-color-key-focus
);--system-spectrum-tag-border-color-selected:var(
--spectrum-neutral-subdued-background-color-default
);--system-spectrum-tag-border-color-selected-hover:var(
--spectrum-neutral-subdued-background-color-hover
);--system-spectrum-tag-border-color-selected-active:var(
--spectrum-neutral-subdued-background-color-down
);--system-spectrum-tag-border-color-selected-focus:var(
--spectrum-neutral-subdued-background-color-key-focus
);--system-spectrum-tag-border-color-disabled:transparent;--system-spectrum-tag-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-tag-size-small-spacing-inline-start:var(
--spectrum-component-edge-to-visual-75
);--system-spectrum-tag-size-small-label-spacing-inline-end:var(
--spectrum-component-edge-to-text-75
);--system-spectrum-tag-size-small-clear-button-spacing-inline-end:var(
--spectrum-component-edge-to-visual-75
);--system-spectrum-tag-size-medium-spacing-inline-start:var(
--spectrum-component-edge-to-visual-100
);--system-spectrum-tag-size-medium-label-spacing-inline-end:var(
--spectrum-component-edge-to-text-100
);--system-spectrum-tag-size-medium-clear-button-spacing-inline-end:var(
--spectrum-component-edge-to-visual-100
);--system-spectrum-tag-size-large-spacing-inline-start:var(
--spectrum-component-edge-to-visual-200
);--system-spectrum-tag-size-large-label-spacing-inline-end:var(
--spectrum-component-edge-to-text-200
);--system-spectrum-tag-size-large-clear-button-spacing-inline-end:var(
--spectrum-component-edge-to-visual-200
)}:host,:root{--system-spectrum-toast-background-color-default:var(
--spectrum-neutral-subdued-background-color-default
)}:host,:root{--system-spectrum-tooltip-backgound-color-default-neutral:var(
--spectrum-neutral-subdued-background-color-default
)}:host,:root{--system-spectrum-picker-background-color-default:var(--spectrum-gray-75);--system-spectrum-picker-background-color-default-open:var(
--spectrum-gray-200
);--system-spectrum-picker-background-color-active:var(--spectrum-gray-300);--system-spectrum-picker-background-color-hover:var(--spectrum-gray-200);--system-spectrum-picker-background-color-hover-open:var(
--spectrum-gray-200
);--system-spectrum-picker-background-color-key-focus:var(
--spectrum-gray-200
);--system-spectrum-picker-border-color-default:var(--spectrum-gray-500);--system-spectrum-picker-border-color-default-open:var(
--spectrum-gray-500
);--system-spectrum-picker-border-color-hover:var(--spectrum-gray-600);--system-spectrum-picker-border-color-hover-open:var(--spectrum-gray-600);--system-spectrum-picker-border-color-active:var(--spectrum-gray-700);--system-spectrum-picker-border-color-key-focus:var(--spectrum-gray-600)}:host,:root{--system-spectrum-slider-track-color:var(--spectrum-gray-300);--system-spectrum-slider-track-fill-color:var(--spectrum-gray-700);--system-spectrum-slider-ramp-track-color:var(--spectrum-gray-400);--system-spectrum-slider-ramp-track-color-disabled:var(
--spectrum-gray-200
);--system-spectrum-slider-handle-background-color:transparent;--system-spectrum-slider-handle-background-color-disabled:transparent;--system-spectrum-slider-ramp-handle-background-color:var(
--spectrum-gray-100
);--system-spectrum-slider-ticks-handle-background-color:var(
--spectrum-gray-100
);--system-spectrum-slider-handle-border-color:var(--spectrum-gray-700);--system-spectrum-slider-handle-disabled-background-color:var(
--spectrum-gray-100
);--system-spectrum-slider-tick-mark-color:var(--spectrum-gray-300);--system-spectrum-slider-handle-border-color-hover:var(
--spectrum-gray-800
);--system-spectrum-slider-handle-border-color-down:var(--spectrum-gray-800);--system-spectrum-slider-handle-border-color-key-focus:var(
--spectrum-gray-800
);--system-spectrum-slider-handle-focus-ring-color-key-focus:var(
--spectrum-focus-indicator-color
)}:host,:root{--system-spectrum-popover-border-width:var(--spectrum-border-width-100)}:host,:root{--system-spectrum-stepper-border-width:var(--spectrum-border-width-100);--system-spectrum-stepper-button-border-width-reset:var(
--spectrum-border-width-100
);--system-spectrum-stepper-button-icon-nudge:calc(var(--spectrum-corner-radius-100)*-1/2);--system-spectrum-stepper-button-gap-reset:0px;--system-spectrum-stepper-button-border-radius-reset:0px;--system-spectrum-stepper-border-color:var(--spectrum-gray-500);--system-spectrum-stepper-border-color-hover:var(--spectrum-gray-600);--system-spectrum-stepper-border-color-focus:var(--spectrum-gray-800);--system-spectrum-stepper-border-color-focus-hover:var(
--spectrum-gray-900
);--system-spectrum-stepper-border-color-keyboard-focus:var(
--spectrum-gray-900
);--system-spectrum-stepper-button-background-color-default:var(
--spectrum-gray-75
);--system-spectrum-stepper-button-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-stepper-button-background-color-focus:var(
--spectrum-gray-300
);--system-spectrum-stepper-button-background-color-keyboard-focus:var(
--spectrum-gray-200
)}:host,:root{--system-spectrum-textfield-border-color:var(--spectrum-gray-500);--system-spectrum-textfield-border-color-hover:var(--spectrum-gray-600);--system-spectrum-textfield-border-color-focus:var(--spectrum-gray-800);--system-spectrum-textfield-border-color-focus-hover:var(
--spectrum-gray-900
);--system-spectrum-textfield-border-color-keyboard-focus:var(
--spectrum-gray-900
);--system-spectrum-textfield-border-width:var(--spectrum-border-width-100)}:host,:root{--system-spectrum-search-border-radius:var(--spectrum-corner-radius-100);--system-spectrum-search-edge-to-visual:var(
--spectrum-component-edge-to-visual-100
);--system-spectrum-search-border-color-default:var(--spectrum-gray-500);--system-spectrum-search-border-color-hover:var(--spectrum-gray-600);--system-spectrum-search-border-color-focus:var(--spectrum-gray-800);--system-spectrum-search-border-color-focus-hover:var(--spectrum-gray-900);--system-spectrum-search-border-color-key-focus:var(--spectrum-gray-900);--system-spectrum-search-sizes-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-search-sizes-edge-to-visual:var(
--spectrum-component-edge-to-visual-75
);--system-spectrum-search-sizem-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-search-sizem-edge-to-visual:var(
--spectrum-component-edge-to-visual-100
);--system-spectrum-search-sizel-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-search-sizel-edge-to-visual:var(
--spectrum-component-edge-to-visual-200
);--system-spectrum-search-sizexl-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-search-sizexl-edge-to-visual:var(
--spectrum-component-edge-to-visual-300
)}:host,:root{--system-spectrum-tabs-font-weight:var(--spectrum-default-font-weight)}:host,:root{--system-spectrum-pickerbutton-spectrum-picker-button-background-color:var(
--spectrum-gray-75
);--system-spectrum-pickerbutton-spectrum-picker-button-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-pickerbutton-spectrum-picker-button-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-pickerbutton-spectrum-picker-button-background-color-key-focus:var(
--spectrum-gray-200
);--system-spectrum-pickerbutton-spectrum-picker-button-border-color:inherit;--system-spectrum-pickerbutton-spectrum-picker-button-border-radius:var(
--spectrum-corner-radius-100
);--system-spectrum-pickerbutton-spectrum-picker-button-border-radius-rounded-sided:0;--system-spectrum-pickerbutton-spectrum-picker-button-border-radius-sided:0;--system-spectrum-pickerbutton-spectrum-picker-button-border-width:var(
--spectrum-border-width-100
)}:host,:root{--system:spectrum;--spectrum-animation-linear:cubic-bezier(0,0,1,1);--spectrum-animation-duration-0:0ms;--spectrum-animation-duration-100:130ms;--spectrum-animation-duration-200:160ms;--spectrum-animation-duration-300:190ms;--spectrum-animation-duration-400:220ms;--spectrum-animation-duration-500:250ms;--spectrum-animation-duration-600:300ms;--spectrum-animation-duration-700:350ms;--spectrum-animation-duration-800:400ms;--spectrum-animation-duration-900:450ms;--spectrum-animation-duration-1000:500ms;--spectrum-animation-duration-2000:1000ms;--spectrum-animation-duration-4000:2000ms;--spectrum-animation-duration-6000:3000ms;--spectrum-animation-ease-in-out:cubic-bezier(0.45,0,0.4,1);--spectrum-animation-ease-in:cubic-bezier(0.5,0,1,1);--spectrum-animation-ease-out:cubic-bezier(0,0,0.4,1);--spectrum-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-sans-font-family-stack:adobe-clean,var(--spectrum-sans-serif-font-family),"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-sans-serif-font:var(--spectrum-sans-font-family-stack);--spectrum-serif-font-family-stack:adobe-clean-serif,var(--spectrum-serif-font-family),"Source Serif Pro",Georgia,serif;--spectrum-serif-font:var(--spectrum-serif-font-family-stack);--spectrum-code-font-family-stack:"Source Code Pro",Monaco,monospace;--spectrum-cjk-font-family-stack:adobe-clean-han-japanese,var(--spectrum-cjk-font-family),sans-serif;--spectrum-cjk-font:var(--spectrum-code-font-family-stack);--spectrum-docs-static-white-background-color-rgb:15,121,125;--spectrum-docs-static-white-background-color:rgba(var(--spectrum-docs-static-white-background-color-rgb));--spectrum-docs-static-black-background-color-rgb:206,247,243;--spectrum-docs-static-black-background-color:rgba(var(--spectrum-docs-static-black-background-color-rgb))}

/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/:host,:root{--spectrum-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family:var(--spectrum-sans-font-family-stack);--spectrum-font-style:var(--spectrum-default-font-style);--spectrum-font-size:var(--spectrum-font-size-100);font-family:var(--spectrum-font-family);font-size:var(--spectrum-font-size);font-style:var(--spectrum-font-style)}.spectrum:lang(ar){font-family:var(--spectrum-font-family-ar)}.spectrum:lang(he){font-family:var(--spectrum-font-family-he)}.spectrum-Heading{--spectrum-heading-sans-serif-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-heading-serif-font-family:var(
--spectrum-serif-font-family-stack
);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-heading-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-heading-font-color:var(--spectrum-heading-color);--spectrum-heading-margin-start:calc(var(--mod-heading-font-size, var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-top-multiplier));--spectrum-heading-margin-end:calc(var(--mod-heading-font-size, var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-bottom-multiplier))}@media (forced-colors:active){.spectrum-Heading{--highcontrast-heading-font-color:Text}}.spectrum-Heading--sizeXXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xxs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxs)}.spectrum-Heading--sizeXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xs)}.spectrum-Heading--sizeS{--spectrum-heading-font-size:var(--spectrum-heading-size-s);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-s)}.spectrum-Heading--sizeM{--spectrum-heading-font-size:var(--spectrum-heading-size-m);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-m)}.spectrum-Heading--sizeL{--spectrum-heading-font-size:var(--spectrum-heading-size-l);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-l)}.spectrum-Heading--sizeXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xl)}.spectrum-Heading--sizeXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxl)}.spectrum-Heading--sizeXXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxxl)}.spectrum-Heading{color:var(
--highcontrast-heading-font-color,var(--mod-heading-font-color,var(--spectrum-heading-font-color))
);font-family:var(
--mod-heading-sans-serif-font-family,var(--spectrum-heading-sans-serif-font-family)
);font-size:var(--mod-heading-font-size,var(--spectrum-heading-font-size));font-style:var(
--mod-heading-sans-serif-font-style,var(--spectrum-heading-sans-serif-font-style)
);font-weight:var(
--mod-heading-sans-serif-font-weight,var(--spectrum-heading-sans-serif-font-weight)
);line-height:var(
--mod-heading-line-height,var(--spectrum-heading-line-height)
);margin-block-end:0;margin-block-start:0}.spectrum-Heading .spectrum-Heading-strong,.spectrum-Heading strong{font-style:var(
--mod-heading-sans-serif-strong-font-style,var(--spectrum-heading-sans-serif-strong-font-style)
);font-weight:var(
--mod-heading-sans-serif-strong-font-weight,var(--spectrum-heading-sans-serif-strong-font-weight)
)}.spectrum-Heading .spectrum-Heading-emphasized,.spectrum-Heading em{font-style:var(
--mod-heading-sans-serif-emphasized-font-style,var(--spectrum-heading-sans-serif-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-emphasized-font-weight,var(--spectrum-heading-sans-serif-emphasized-font-weight)
)}.spectrum-Heading .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading em strong,.spectrum-Heading strong em{font-style:var(
--mod-heading-sans-serif-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-strong-emphasized-font-weight)
)}.spectrum-Heading:lang(ja),.spectrum-Heading:lang(ko),.spectrum-Heading:lang(zh){font-family:var(
--mod-heading-cjk-font-family,var(--spectrum-heading-cjk-font-family)
);font-size:var(
--mod-heading-cjk-font-size,var(--spectrum-heading-cjk-font-size)
);font-style:var(
--mod-heading-cjk-font-style,var(--spectrum-heading-cjk-font-style)
);font-weight:var(
--mod-heading-cjk-font-weight,var(--spectrum-heading-cjk-font-weight)
);letter-spacing:var(
--mod-heading-cjk-letter-spacing,var(--spectrum-heading-cjk-letter-spacing)
);line-height:var(
--mod-heading-cjk-line-height,var(--spectrum-heading-cjk-line-height)
)}.spectrum-Heading:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em,.spectrum-Heading:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em,.spectrum-Heading:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em{font-style:var(
--mod-heading-cjk-emphasized-font-style,var(--spectrum-heading-cjk-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-emphasized-font-weight,var(--spectrum-heading-cjk-emphasized-font-weight)
)}.spectrum-Heading:lang(ja) .spectrum-Heading-strong,.spectrum-Heading:lang(ja) strong,.spectrum-Heading:lang(ko) .spectrum-Heading-strong,.spectrum-Heading:lang(ko) strong,.spectrum-Heading:lang(zh) .spectrum-Heading-strong,.spectrum-Heading:lang(zh) strong{font-style:var(
--mod-heading-cjk-strong-font-style,var(--spectrum-heading-cjk-strong-font-style)
);font-weight:var(
--mod-heading-cjk-strong-font-weight,var(--spectrum-heading-cjk-strong-font-weight)
)}.spectrum-Heading:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em strong,.spectrum-Heading:lang(ja) strong em,.spectrum-Heading:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em strong,.spectrum-Heading:lang(ko) strong em,.spectrum-Heading:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em strong,.spectrum-Heading:lang(zh) strong em{font-style:var(
--mod-heading-cjk-strong-emphasized-font-style,var(--spectrum-heading-cjk-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-strong-emphasized-font-weight,var(--spectrum-heading-cjk-strong-emphasized-font-weight)
)}.spectrum-Heading--heavy{font-style:var(
--mod-heading-sans-serif-heavy-font-style,var(--spectrum-heading-sans-serif-heavy-font-style)
);font-weight:var(
--mod-heading-sans-serif-heavy-font-weight,var(--spectrum-heading-sans-serif-heavy-font-weight)
)}.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--heavy strong{font-style:var(
--mod-heading-sans-serif-heavy-strong-font-style,var(--spectrum-heading-sans-serif-heavy-strong-font-style)
);font-weight:var(
--mod-heading-sans-serif-heavy-strong-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-font-weight)
)}.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--heavy em{font-style:var(
--mod-heading-sans-serif-heavy-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-heavy-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-emphasized-font-weight)
)}.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy em strong,.spectrum-Heading--heavy strong em{font-style:var(
--mod-heading-sans-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight)
)}.spectrum-Heading--heavy:lang(ja),.spectrum-Heading--heavy:lang(ko),.spectrum-Heading--heavy:lang(zh){font-style:var(
--mod-heading-cjk-heavy-font-style,var(--spectrum-heading-cjk-heavy-font-style)
);font-weight:var(
--mod-heading-cjk-heavy-font-weight,var(--spectrum-heading-cjk-heavy-font-weight)
)}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em{font-style:var(
--mod-heading-cjk-heavy-emphasized-font-style,var(--spectrum-heading-cjk-heavy-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-heavy-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-emphasized-font-weight)
)}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ja) strong,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ko) strong,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(zh) strong{font-style:var(
--mod-heading-cjk-heavy-strong-font-style,var(--spectrum-heading-cjk-heavy-strong-font-style)
);font-weight:var(
--mod-heading-cjk-heavy-strong-font-weight,var(--spectrum-heading-cjk-heavy-strong-font-weight)
)}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em strong,.spectrum-Heading--heavy:lang(ja) strong em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em strong,.spectrum-Heading--heavy:lang(ko) strong em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em strong,.spectrum-Heading--heavy:lang(zh) strong em{font-style:var(
--mod-heading-cjk-heavy-strong-emphasized-font-style,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-heavy-strong-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-weight)
)}.spectrum-Heading--light{font-style:var(
--mod-heading-sans-serif-light-font-style,var(--spectrum-heading-sans-serif-light-font-style)
);font-weight:var(
--mod-heading-sans-serif-light-font-weight,var(--spectrum-heading-sans-serif-light-font-weight)
)}.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--light em{font-style:var(
--mod-heading-sans-serif-light-emphasized-font-style,var(--spectrum-heading-sans-serif-light-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-light-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-emphasized-font-weight)
)}.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--light strong{font-style:var(
--mod-heading-sans-serif-light-strong-font-style,var(--spectrum-heading-sans-serif-light-strong-font-style)
);font-weight:var(
--mod-heading-sans-serif-light-strong-font-weight,var(--spectrum-heading-sans-serif-light-strong-font-weight)
)}.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light em strong,.spectrum-Heading--light strong em{font-style:var(
--mod-heading-sans-serif-light-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-weight)
)}.spectrum-Heading--light:lang(ja),.spectrum-Heading--light:lang(ko),.spectrum-Heading--light:lang(zh){font-style:var(
--mod-heading-cjk-light-font-style,var(--spectrum-heading-cjk-light-font-style)
);font-weight:var(
--mod-heading-cjk-light-font-weight,var(--spectrum-heading-cjk-light-font-weight)
)}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ja) strong,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ko) strong,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--light:lang(zh) strong{font-style:var(
--mod-heading-cjk-light-strong-font-style,var(--spectrum-heading-cjk-light-strong-font-style)
);font-weight:var(
--mod-heading-cjk-light-strong-font-weight,var(--spectrum-heading-cjk-light-strong-font-weight)
)}.spectrum-Heading--light:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em{font-style:var(
--mod-heading-cjk-light-emphasized-font-style,var(--spectrum-heading-cjk-light-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-light-emphasized-font-weight,var(--spectrum-heading-cjk-light-emphasized-font-weight)
)}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em strong,.spectrum-Heading--light:lang(ja) strong em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em strong,.spectrum-Heading--light:lang(ko) strong em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em strong,.spectrum-Heading--light:lang(zh) strong em{font-style:var(
--mod-heading-cjk-light-strong-emphasized-font-style,var(--spectrum-heading-cjk-light-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-cjk-light-strong-emphasized-font-weight,var(--spectrum-heading-cjk-light-strong-emphasized-font-weight)
)}.spectrum-Heading--serif{font-family:var(
--mod-heading-serif-font-family,var(--spectrum-heading-serif-font-family)
);font-style:var(
--mod-heading-serif-font-style,var(--spectrum-heading-serif-font-style)
);font-weight:var(
--mod-heading-serif-font-weight,var(--spectrum-heading-serif-font-weight)
)}.spectrum-Heading--serif .spectrum-Heading-emphasized,.spectrum-Heading--serif em{font-style:var(
--mod-heading-serif-emphasized-font-style,var(--spectrum-heading-serif-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-emphasized-font-weight,var(--spectrum-heading-serif-emphasized-font-weight)
)}.spectrum-Heading--serif .spectrum-Heading-strong,.spectrum-Heading--serif strong{font-style:var(
--mod-heading-serif-strong-font-style,var(--spectrum-heading-serif-strong-font-style)
);font-weight:var(
--mod-heading-serif-strong-font-weight,var(--spectrum-heading-serif-strong-font-weight)
)}.spectrum-Heading--serif .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif em strong,.spectrum-Heading--serif strong em{font-style:var(
--mod-heading-serif-strong-emphasized-font-style,var(--spectrum-heading-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-strong-emphasized-font-weight,var(--spectrum-heading-serif-strong-emphasized-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--heavy{font-style:var(
--mod-heading-serif-heavy-font-style,var(--spectrum-heading-serif-heavy-font-style)
);font-weight:var(
--mod-heading-serif-heavy-font-weight,var(--spectrum-heading-serif-heavy-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong{font-style:var(
--mod-heading-serif-heavy-strong-font-style,var(--spectrum-heading-serif-heavy-strong-font-style)
);font-weight:var(
--mod-heading-serif-heavy-strong-font-weight,var(--spectrum-heading-serif-heavy-strong-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em{font-style:var(
--mod-heading-serif-heavy-emphasized-font-style,var(--spectrum-heading-serif-heavy-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-heavy-emphasized-font-weight,var(--spectrum-heading-serif-heavy-emphasized-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong em{font-style:var(
--mod-heading-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-serif-heavy-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-serif-heavy-strong-emphasized-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--light{font-style:var(
--mod-heading-serif-light-font-style,var(--spectrum-heading-serif-light-font-style)
);font-weight:var(
--mod-heading-serif-light-font-weight,var(--spectrum-heading-serif-light-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em{font-style:var(
--mod-heading-serif-light-emphasized-font-style,var(--spectrum-heading-serif-light-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-light-emphasized-font-weight,var(--spectrum-heading-serif-light-emphasized-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--light strong{font-style:var(
--mod-heading-serif-light-strong-font-style,var(--spectrum-heading-serif-light-strong-font-style)
);font-weight:var(
--mod-heading-serif-light-strong-font-weight,var(--spectrum-heading-serif-light-strong-font-weight)
)}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em strong,.spectrum-Heading--serif.spectrum-Heading--light strong em{font-style:var(
--mod-heading-serif-light-strong-emphasized-font-style,var(--spectrum-heading-serif-light-strong-emphasized-font-style)
);font-weight:var(
--mod-heading-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-serif-light-strong-emphasized-font-weight)
)}.spectrum-Typography .spectrum-Heading{margin-block-end:var(
--mod-heading-margin-end,var(--spectrum-heading-margin-end)
);margin-block-start:var(
--mod-heading-margin-start,var(--spectrum-heading-margin-start)
)}.spectrum-Body{--spectrum-body-sans-serif-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-body-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-body-margin:calc(var(--mod-body-font-size, var(--spectrum-body-font-size))*var(--spectrum-body-margin-multiplier));--spectrum-body-font-color:var(--spectrum-body-color)}@media (forced-colors:active){.spectrum-Body{--highcontrast-body-font-color:Text}}.spectrum-Body--sizeXS{--spectrum-body-font-size:var(--spectrum-body-size-xs)}.spectrum-Body--sizeS{--spectrum-body-font-size:var(--spectrum-body-size-s)}.spectrum-Body--sizeM{--spectrum-body-font-size:var(--spectrum-body-size-m)}.spectrum-Body--sizeL{--spectrum-body-font-size:var(--spectrum-body-size-l)}.spectrum-Body--sizeXL{--spectrum-body-font-size:var(--spectrum-body-size-xl)}.spectrum-Body--sizeXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxl)}.spectrum-Body--sizeXXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxxl)}.spectrum-Body{color:var(
--highcontrast-body-font-color,var(--mod-body-font-color,var(--spectrum-body-font-color))
);font-family:var(
--mod-body-sans-serif-font-family,var(--spectrum-body-sans-serif-font-family)
);font-size:var(--mod-body-font-size,var(--spectrum-body-font-size));font-style:var(
--mod-body-sans-serif-font-style,var(--spectrum-body-sans-serif-font-style)
);font-weight:var(
--mod-body-sans-serif-font-weight,var(--spectrum-body-sans-serif-font-weight)
);line-height:var(--mod-body-line-height,var(--spectrum-body-line-height));margin-block-end:0;margin-block-start:0}.spectrum-Body .spectrum-Body-strong,.spectrum-Body strong{font-style:var(
--mod-body-sans-serif-strong-font-style,var(--spectrum-body-sans-serif-strong-font-style)
);font-weight:var(
--mod-body-sans-serif-strong-font-weight,var(--spectrum-body-sans-serif-strong-font-weight)
)}.spectrum-Body .spectrum-Body-emphasized,.spectrum-Body em{font-style:var(
--mod-body-sans-serif-emphasized-font-style,var(--spectrum-body-sans-serif-emphasized-font-style)
);font-weight:var(
--mod-body-sans-serif-emphasized-font-weight,var(--spectrum-body-sans-serif-emphasized-font-weight)
)}.spectrum-Body .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body em strong,.spectrum-Body strong em{font-style:var(
--mod-body-sans-serif-strong-emphasized-font-style,var(--spectrum-body-sans-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-body-sans-serif-strong-emphasized-font-weight,var(--spectrum-body-sans-serif-strong-emphasized-font-weight)
)}.spectrum-Body:lang(ja),.spectrum-Body:lang(ko),.spectrum-Body:lang(zh){font-family:var(
--mod-body-cjk-font-family,var(--spectrum-body-cjk-font-family)
);font-style:var(
--mod-body-cjk-font-style,var(--spectrum-body-cjk-font-style)
);font-weight:var(
--mod-body-cjk-font-weight,var(--spectrum-body-cjk-font-weight)
);letter-spacing:var(
--mod-body-cjk-letter-spacing,var(--spectrum-body-cjk-letter-spacing)
);line-height:var(
--mod-body-cjk-line-height,var(--spectrum-body-cjk-line-height)
)}.spectrum-Body:lang(ja) .spectrum-Body-strong,.spectrum-Body:lang(ja) strong,.spectrum-Body:lang(ko) .spectrum-Body-strong,.spectrum-Body:lang(ko) strong,.spectrum-Body:lang(zh) .spectrum-Body-strong,.spectrum-Body:lang(zh) strong{font-style:var(
--mod-body-cjk-strong-font-style,var(--spectrum-body-cjk-strong-font-style)
);font-weight:var(
--mod-body-cjk-strong-font-weight,var(--spectrum-body-cjk-strong-font-weight)
)}.spectrum-Body:lang(ja) .spectrum-Body-emphasized,.spectrum-Body:lang(ja) em,.spectrum-Body:lang(ko) .spectrum-Body-emphasized,.spectrum-Body:lang(ko) em,.spectrum-Body:lang(zh) .spectrum-Body-emphasized,.spectrum-Body:lang(zh) em{font-style:var(
--mod-body-cjk-emphasized-font-style,var(--spectrum-body-cjk-emphasized-font-style)
);font-weight:var(
--mod-body-cjk-emphasized-font-weight,var(--spectrum-body-cjk-emphasized-font-weight)
)}.spectrum-Body:lang(ja) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ja) em strong,.spectrum-Body:lang(ja) strong em,.spectrum-Body:lang(ko) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ko) em strong,.spectrum-Body:lang(ko) strong em,.spectrum-Body:lang(zh) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(zh) em strong,.spectrum-Body:lang(zh) strong em{font-style:var(
--mod-body-cjk-strong-emphasized-font-style,var(--spectrum-body-cjk-strong-emphasized-font-style)
);font-weight:var(
--mod-body-cjk-strong-emphasized-font-weight,var(--spectrum-body-cjk-strong-emphasized-font-weight)
)}.spectrum-Body--serif{font-family:var(
--mod-body-serif-font-family,var(--spectrum-body-serif-font-family)
);font-style:var(
--mod-body-serif-font-style,var(--spectrum-body-serif-font-style)
);font-weight:var(
--mod-body-serif-font-weight,var(--spectrum-body-serif-font-weight)
)}.spectrum-Body--serif .spectrum-Body-strong,.spectrum-Body--serif strong{font-style:var(
--mod-body-serif-strong-font-style,var(--spectrum-body-serif-strong-font-style)
);font-weight:var(
--mod-body-serif-strong-font-weight,var(--spectrum-body-serif-strong-font-weight)
)}.spectrum-Body--serif .spectrum-Body-emphasized,.spectrum-Body--serif em{font-style:var(
--mod-body-serif-emphasized-font-style,var(--spectrum-body-serif-emphasized-font-style)
);font-weight:var(
--mod-body-serif-emphasized-font-weight,var(--spectrum-body-serif-emphasized-font-weight)
)}.spectrum-Body--serif .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body--serif em strong,.spectrum-Body--serif strong em{font-style:var(
--mod-body-serif-strong-emphasized-font-style,var(--spectrum-body-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-body-serif-strong-emphasized-font-weight,var(--spectrum-body-serif-strong-emphasized-font-weight)
)}.spectrum-Typography .spectrum-Body{margin-block-end:var(--mod-body-margin,var(--spectrum-body-margin))}.spectrum-Detail{--spectrum-detail-sans-serif-font-family:var(
--spectrum-sans-font-family-stack
);--spectrum-detail-serif-font-family:var(
--spectrum-serif-font-family-stack
);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-detail-margin-start:calc(var(--mod-detail-font-size, var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-top-multiplier));--spectrum-detail-margin-end:calc(var(--mod-detail-font-size, var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-bottom-multiplier));--spectrum-detail-font-color:var(--spectrum-detail-color)}@media (forced-colors:active){.spectrum-Detail{--highcontrast-detail-font-color:Text}}.spectrum-Detail--sizeS{--spectrum-detail-font-size:var(--spectrum-detail-size-s)}.spectrum-Detail--sizeM{--spectrum-detail-font-size:var(--spectrum-detail-size-m)}.spectrum-Detail--sizeL{--spectrum-detail-font-size:var(--spectrum-detail-size-l)}.spectrum-Detail--sizeXL{--spectrum-detail-font-size:var(--spectrum-detail-size-xl)}.spectrum-Detail{color:var(
--highcontrast-detail-font-color,var(--mod-detail-font-color,var(--spectrum-detail-font-color))
);font-family:var(
--mod-detail-sans-serif-font-family,var(--spectrum-detail-sans-serif-font-family)
);font-size:var(--mod-detail-font-size,var(--spectrum-detail-font-size));font-style:var(
--mod-detail-sans-serif-font-style,var(--spectrum-detail-sans-serif-font-style)
);font-weight:var(
--mod-detail-sans-serif-font-weight,var(--spectrum-detail-sans-serif-font-weight)
);letter-spacing:var(
--mod-detail-letter-spacing,var(--spectrum-detail-letter-spacing)
);line-height:var(
--mod-detail-line-height,var(--spectrum-detail-line-height)
);margin-block-end:0;margin-block-start:0;text-transform:uppercase}.spectrum-Detail .spectrum-Detail-strong,.spectrum-Detail strong{font-style:var(
--mod-detail-sans-serif-strong-font-style,var(--spectrum-detail-sans-serif-strong-font-style)
);font-weight:var(
--mod-detail-sans-serif-strong-font-weight,var(--spectrum-detail-sans-serif-strong-font-weight)
)}.spectrum-Detail .spectrum-Detail-emphasized,.spectrum-Detail em{font-style:var(
--mod-detail-sans-serif-emphasized-font-style,var(--spectrum-detail-sans-serif-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-emphasized-font-weight,var(--spectrum-detail-sans-serif-emphasized-font-weight)
)}.spectrum-Detail .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail em strong,.spectrum-Detail strong em{font-style:var(
--mod-detail-sans-serif-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-strong-emphasized-font-weight)
)}.spectrum-Detail:lang(ja),.spectrum-Detail:lang(ko),.spectrum-Detail:lang(zh){font-family:var(
--mod-detail-cjk-font-family,var(--spectrum-detail-cjk-font-family)
);font-style:var(
--mod-detail-cjk-font-style,var(--spectrum-detail-cjk-font-style)
);font-weight:var(
--mod-detail-cjk-font-weight,var(--spectrum-detail-cjk-font-weight)
);line-height:var(
--mod-detail-cjk-line-height,var(--spectrum-detail-cjk-line-height)
)}.spectrum-Detail:lang(ja) .spectrum-Detail-strong,.spectrum-Detail:lang(ja) strong,.spectrum-Detail:lang(ko) .spectrum-Detail-strong,.spectrum-Detail:lang(ko) strong,.spectrum-Detail:lang(zh) .spectrum-Detail-strong,.spectrum-Detail:lang(zh) strong{font-style:var(
--mod-detail-cjk-strong-font-style,var(--spectrum-detail-cjk-strong-font-style)
);font-weight:var(
--mod-detail-cjk-strong-font-weight,var(--spectrum-detail-cjk-strong-font-weight)
)}.spectrum-Detail:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em,.spectrum-Detail:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em,.spectrum-Detail:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em{font-style:var(
--mod-detail-cjk-emphasized-font-style,var(--spectrum-detail-cjk-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-emphasized-font-weight,var(--spectrum-detail-cjk-emphasized-font-weight)
)}.spectrum-Detail:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em strong,.spectrum-Detail:lang(ja) strong em,.spectrum-Detail:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em strong,.spectrum-Detail:lang(ko) strong em,.spectrum-Detail:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em strong,.spectrum-Detail:lang(zh) strong em{font-style:var(
--mod-detail-cjk-strong-emphasized-font-style,var(--spectrum-detail-cjk-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-strong-emphasized-font-weight,var(--spectrum-detail-cjk-strong-emphasized-font-weight)
)}.spectrum-Detail--serif{font-family:var(
--mod-detail-serif-font-family,var(--spectrum-detail-serif-font-family)
);font-style:var(
--mod-detail-serif-font-style,var(--spectrum-detail-serif-font-style)
);font-weight:var(
--mod-detail-serif-font-weight,var(--spectrum-detail-serif-font-weight)
)}.spectrum-Detail--serif .spectrum-Detail-strong,.spectrum-Detail--serif strong{font-style:var(
--mod-detail-serif-strong-font-style,var(--spectrum-detail-serif-strong-font-style)
);font-weight:var(
--mod-detail-serif-strong-font-weight,var(--spectrum-detail-serif-strong-font-weight)
)}.spectrum-Detail--serif .spectrum-Detail-emphasized,.spectrum-Detail--serif em{font-style:var(
--mod-detail-serif-emphasized-font-style,var(--spectrum-detail-serif-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-emphasized-font-weight,var(--spectrum-detail-serif-emphasized-font-weight)
)}.spectrum-Detail--serif .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--serif em strong,.spectrum-Detail--serif strong em{font-style:var(
--mod-detail-serif-strong-emphasized-font-style,var(--spectrum-detail-serif-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-strong-emphasized-font-weight,var(--spectrum-detail-serif-strong-emphasized-font-weight)
)}.spectrum-Detail--light{font-style:var(
--mod-detail-sans-serif-light-font-style,var(--spectrum-detail-sans-serif-light-font-style)
);font-weight:var(
--spectrum-detail-sans-serif-light-font-weight,var(--spectrum-detail-sans-serif-light-font-weight)
)}.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--light strong{font-style:var(
--mod-detail-sans-serif-light-strong-font-style,var(--spectrum-detail-sans-serif-light-strong-font-style)
);font-weight:var(
--mod-detail-sans-serif-light-strong-font-weight,var(--spectrum-detail-sans-serif-light-strong-font-weight)
)}.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--light em{font-style:var(
--mod-detail-sans-serif-light-emphasized-font-style,var(--spectrum-detail-sans-serif-light-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-light-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-emphasized-font-weight)
)}.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--light em strong,.spectrum-Detail--light strong em{font-style:var(
--mod-detail-sans-serif-light-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-weight)
)}.spectrum-Detail--light:lang(ja),.spectrum-Detail--light:lang(ko),.spectrum-Detail--light:lang(zh){font-style:var(
--mod-detail-cjk-light-font-style,var(--spectrum-detail-cjk-light-font-style)
);font-weight:var(
--mod-detail-cjk-light-font-weight,var(--spectrum-detail-cjk-light-font-weight)
)}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ja) strong,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ko) strong,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong,.spectrum-Detail--light:lang(zh) strong{font-style:var(
--mod-detail-cjk-light-strong-font-style,var(--spectrum-detail-cjk-light-strong-font-style)
);font-weight:var(
--mod-detail-cjk-light-strong-font-weight,var(--spectrum-detail-cjk-light-strong-font-weight)
)}.spectrum-Detail--light:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ja) em,.spectrum-Detail--light:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) em,.spectrum-Detail--light:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) em{font-style:var(
--mod-detail-cjk-light-emphasized-font-style,var(--spectrum-detail-cjk-light-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-light-emphasized-font-weight,var(--spectrum-detail-cjk-light-emphasized-font-weight)
)}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized{font-style:var(
--mod-detail-cjk-light-strong-emphasized-font-style,var(--spectrum-detail-cjk-light-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-cjk-light-strong-emphasized-font-weight,var(--spectrum-detail-cjk-light-strong-emphasized-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light{font-style:var(
--mod-detail-serif-light-font-style,var(--spectrum-detail-serif-light-font-style)
);font-weight:var(
--mod-detail-serif-light-font-weight,var(--spectrum-detail-serif-light-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--serif.spectrum-Detail--light strong{font-style:var(
--mod-detail-serif-light-strong-font-style,var(--spectrum-detail-serif-light-strong-font-style)
);font-weight:var(
--mod-detail-serif-light-strong-font-weight,var(--spectrum-detail-serif-light-strong-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em{font-style:var(
--mod-detail-serif-light-emphasized-font-style,var(--spectrum-detail-serif-light-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-light-emphasized-font-weight,var(--spectrum-detail-serif-light-emphasized-font-weight)
)}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em strong,.spectrum-Detail--serif.spectrum-Detail--light strong em{font-style:var(
--mod-detail-serif-light-strong-emphasized-font-style,var(--spectrum-detail-serif-light-strong-emphasized-font-style)
);font-weight:var(
--mod-detail-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-serif-light-strong-emphasized-font-weight)
)}.spectrum-Typography .spectrum-Detail{margin-block-end:var(
--mod-detail-margin-end,var(--spectrum-detail-margin-end)
);margin-block-start:var(
--mod-detail-margin-start,var(--spectrum-detail-margin-start)
)}.spectrum-Code{--spectrum-code-font-family:var(--spectrum-code-font-family-stack);--spectrum-code-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-code-font-color:var(--spectrum-code-color)}@media (forced-colors:active){.spectrum-Code{--highcontrast-code-font-color:Text}}.spectrum-Code--sizeXS{--spectrum-code-font-size:var(--spectrum-code-size-xs)}.spectrum-Code--sizeS{--spectrum-code-font-size:var(--spectrum-code-size-s)}.spectrum-Code--sizeM{--spectrum-code-font-size:var(--spectrum-code-size-m)}.spectrum-Code--sizeL{--spectrum-code-font-size:var(--spectrum-code-size-l)}.spectrum-Code--sizeXL{--spectrum-code-font-size:var(--spectrum-code-size-xl)}.spectrum-Code{color:var(
--highcontrast-code-font-color,var(--mod-code-font-color,var(--spectrum-code-font-color))
);font-family:var(--mod-code-font-family,var(--spectrum-code-font-family));font-size:var(--mod-code-font-size,var(--spectrum-code-font-size));font-style:var(--mod-code-font-style,var(--spectrum-code-font-style));font-weight:var(--mod-code-font-weight,var(--spectrum-code-font-weight));line-height:var(--mod-code-line-height,var(--spectrum-code-line-height));margin-block-end:0;margin-block-start:0}.spectrum-Code .spectrum-Code-strong,.spectrum-Code strong{font-style:var(
--mod-code-strong-font-style,var(--spectrum-code-strong-font-style)
);font-weight:var(
--mod-code-strong-font-weight,var(--spectrum-code-strong-font-weight)
)}.spectrum-Code .spectrum-Code-emphasized,.spectrum-Code em{font-style:var(
--mod-code-emphasized-font-style,var(--spectrum-code-emphasized-font-style)
);font-weight:var(
--mod-code-emphasized-font-weight,var(--spectrum-code-emphasized-font-weight)
)}.spectrum-Code .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code em strong,.spectrum-Code strong em{font-style:var(
--mod-code-strong-emphasized-font-style,var(--spectrum-code-strong-emphasized-font-style)
);font-weight:var(
--mod-code-strong-emphasized-font-weight,var(--spectrum-code-strong-emphasized-font-weight)
)}.spectrum-Code:lang(ja),.spectrum-Code:lang(ko),.spectrum-Code:lang(zh){font-family:var(
--mod-code-cjk-font-family,var(--spectrum-code-cjk-font-family)
);font-style:var(
--mod-code-cjk-font-style,var(--spectrum-code-cjk-font-style)
);font-weight:var(
--mod-code-cjk-font-weight,var(--spectrum-code-cjk-font-weight)
);letter-spacing:var(
--mod-code-cjk-letter-spacing,var(--spectrum-code-cjk-letter-spacing)
);line-height:var(
--mod-code-cjk-line-height,var(--spectrum-code-cjk-line-height)
)}.spectrum-Code:lang(ja) .spectrum-Code-strong,.spectrum-Code:lang(ja) strong,.spectrum-Code:lang(ko) .spectrum-Code-strong,.spectrum-Code:lang(ko) strong,.spectrum-Code:lang(zh) .spectrum-Code-strong,.spectrum-Code:lang(zh) strong{font-style:var(
--mod-code-cjk-strong-font-style,var(--spectrum-code-cjk-strong-font-style)
);font-weight:var(
--mod-code-cjk-strong-font-weight,var(--spectrum-code-cjk-strong-font-weight)
)}.spectrum-Code:lang(ja) .spectrum-Code-emphasized,.spectrum-Code:lang(ja) em,.spectrum-Code:lang(ko) .spectrum-Code-emphasized,.spectrum-Code:lang(ko) em,.spectrum-Code:lang(zh) .spectrum-Code-emphasized,.spectrum-Code:lang(zh) em{font-style:var(
--mod-code-cjk-emphasized-font-style,var(--spectrum-code-cjk-emphasized-font-style)
);font-weight:var(
--mod-code-cjk-emphasized-font-weight,var(--spectrum-code-cjk-emphasized-font-weight)
)}.spectrum-Code:lang(ja) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ja) em strong,.spectrum-Code:lang(ja) strong em,.spectrum-Code:lang(ko) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ko) em strong,.spectrum-Code:lang(ko) strong em,.spectrum-Code:lang(zh) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(zh) em strong,.spectrum-Code:lang(zh) strong em{font-style:var(
--mod-code-cjk-strong-emphasized-font-style,var(--spectrum-code-cjk-strong-emphasized-font-style)
);font-weight:var(
--mod-code-cjk-strong-emphasized-font-weight,var(--spectrum-code-cjk-strong-emphasized-font-weight)
)}:host{display:block}#scale,#theme{height:100%;width:100%}
`;var m$5 = e$5;

Theme.registerThemeFragment("spectrum","theme",m$5);

Theme.registerThemeFragment("light","color",r$3);

const e$4=i$c`
:host,:root{--spectrum-global-dimension-scale-factor:1;--spectrum-global-dimension-size-0:0px;--spectrum-global-dimension-size-10:1px;--spectrum-global-dimension-size-25:2px;--spectrum-global-dimension-size-30:2px;--spectrum-global-dimension-size-40:3px;--spectrum-global-dimension-size-50:4px;--spectrum-global-dimension-size-65:5px;--spectrum-global-dimension-size-75:6px;--spectrum-global-dimension-size-85:7px;--spectrum-global-dimension-size-100:8px;--spectrum-global-dimension-size-115:9px;--spectrum-global-dimension-size-125:10px;--spectrum-global-dimension-size-130:11px;--spectrum-global-dimension-size-150:12px;--spectrum-global-dimension-size-160:13px;--spectrum-global-dimension-size-175:14px;--spectrum-global-dimension-size-185:15px;--spectrum-global-dimension-size-200:16px;--spectrum-global-dimension-size-225:18px;--spectrum-global-dimension-size-250:20px;--spectrum-global-dimension-size-275:22px;--spectrum-global-dimension-size-300:24px;--spectrum-global-dimension-size-325:26px;--spectrum-global-dimension-size-350:28px;--spectrum-global-dimension-size-400:32px;--spectrum-global-dimension-size-450:36px;--spectrum-global-dimension-size-500:40px;--spectrum-global-dimension-size-550:44px;--spectrum-global-dimension-size-600:48px;--spectrum-global-dimension-size-650:52px;--spectrum-global-dimension-size-675:54px;--spectrum-global-dimension-size-700:56px;--spectrum-global-dimension-size-750:60px;--spectrum-global-dimension-size-800:64px;--spectrum-global-dimension-size-900:72px;--spectrum-global-dimension-size-1000:80px;--spectrum-global-dimension-size-1125:90px;--spectrum-global-dimension-size-1200:96px;--spectrum-global-dimension-size-1250:100px;--spectrum-global-dimension-size-1600:128px;--spectrum-global-dimension-size-1700:136px;--spectrum-global-dimension-size-1800:144px;--spectrum-global-dimension-size-2000:160px;--spectrum-global-dimension-size-2400:192px;--spectrum-global-dimension-size-2500:200px;--spectrum-global-dimension-size-3000:240px;--spectrum-global-dimension-size-3400:272px;--spectrum-global-dimension-size-3600:288px;--spectrum-global-dimension-size-4600:368px;--spectrum-global-dimension-size-5000:400px;--spectrum-global-dimension-size-6000:480px;--spectrum-global-dimension-font-size-25:10px;--spectrum-global-dimension-font-size-50:11px;--spectrum-global-dimension-font-size-75:12px;--spectrum-global-dimension-font-size-100:14px;--spectrum-global-dimension-font-size-150:15px;--spectrum-global-dimension-font-size-200:16px;--spectrum-global-dimension-font-size-300:18px;--spectrum-global-dimension-font-size-400:20px;--spectrum-global-dimension-font-size-500:22px;--spectrum-global-dimension-font-size-600:25px;--spectrum-global-dimension-font-size-700:28px;--spectrum-global-dimension-font-size-800:32px;--spectrum-global-dimension-font-size-900:36px;--spectrum-global-dimension-font-size-1000:40px;--spectrum-global-dimension-font-size-1100:45px;--spectrum-global-dimension-font-size-1200:50px;--spectrum-global-dimension-font-size-1300:60px;--spectrum-alias-item-text-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-text-padding-bottom-s:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-item-workflow-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-rounded-workflow-padding-left-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-rounded-workflow-padding-left-xl:21px;--spectrum-alias-item-mark-padding-top-m:var(
--spectrum-global-dimension-static-size-75
);--spectrum-alias-item-mark-padding-bottom-m:var(
--spectrum-global-dimension-static-size-75
);--spectrum-alias-item-mark-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-1-size-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-1-size-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-2-size-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-width-s:23px;--spectrum-alias-item-control-3-width-m:var(
--spectrum-global-dimension-static-size-325
);--spectrum-alias-item-control-3-width-l:29px;--spectrum-alias-item-control-3-width-xl:33px;--spectrum-alias-item-mark-size-m:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-component-focusring-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-control-two-size-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-three-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-three-width-s:23px;--spectrum-alias-control-three-width-m:var(
--spectrum-global-dimension-static-size-325
);--spectrum-alias-control-three-width-l:29px;--spectrum-alias-control-three-width-xl:33px;--spectrum-alias-focus-ring-border-radius-regular:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-focus-ring-radius-default:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-workflow-icon-size-l:var(
--spectrum-global-dimension-static-size-250
);--spectrum-alias-ui-icon-chevron-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-chevron-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-chevron-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-chevron-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-chevron-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-chevron-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-50:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-checkmark-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-checkmark-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-600:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-dash-size-50:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-dash-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-dash-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-dash-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-dash-size-300:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-dash-size-400:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-dash-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-dash-size-600:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-cross-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-cross-size-100:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-cross-size-200:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-cross-size-300:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-cross-size-400:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-cross-size-500:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-cross-size-600:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-arrow-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-arrow-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-arrow-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-arrow-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-arrow-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-arrow-size-500:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-arrow-size-600:var(
--spectrum-global-dimension-static-size-250
);--spectrum-alias-ui-icon-triplegripper-size-100-width:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-doublegripper-size-100-height:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-ui-icon-singlegripper-size-100-height:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-ui-icon-cornertriangle-size-100:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-300:var(
--spectrum-global-dimension-static-size-85
);--spectrum-alias-ui-icon-asterisk-size-200:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-asterisk-size-300:var(
--spectrum-global-dimension-static-size-125
);--spectrum-dialog-confirm-title-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-dialog-confirm-description-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-dialog-confirm-padding:var(
--spectrum-global-dimension-static-size-500
)}:host,:root{--spectrum-global-alias-appframe-border-size:2px}:host,:root{--spectrum-field-label-text-to-asterisk-small:4px;--spectrum-field-label-text-to-asterisk-medium:4px;--spectrum-field-label-text-to-asterisk-large:5px;--spectrum-field-label-text-to-asterisk-extra-large:5px;--spectrum-field-label-top-to-asterisk-small:8px;--spectrum-field-label-top-to-asterisk-medium:12px;--spectrum-field-label-top-to-asterisk-large:15px;--spectrum-field-label-top-to-asterisk-extra-large:19px;--spectrum-field-label-top-margin-small:0px;--spectrum-field-label-top-margin-medium:4px;--spectrum-field-label-top-margin-large:5px;--spectrum-field-label-top-margin-extra-large:5px;--spectrum-field-label-to-component-quiet-small:-8px;--spectrum-field-label-to-component-quiet-medium:-8px;--spectrum-field-label-to-component-quiet-large:-12px;--spectrum-field-label-to-component-quiet-extra-large:-15px;--spectrum-help-text-top-to-workflow-icon-small:4px;--spectrum-help-text-top-to-workflow-icon-medium:3px;--spectrum-help-text-top-to-workflow-icon-large:6px;--spectrum-help-text-top-to-workflow-icon-extra-large:9px;--spectrum-status-light-dot-size-small:8px;--spectrum-status-light-dot-size-medium:8px;--spectrum-status-light-dot-size-large:10px;--spectrum-status-light-dot-size-extra-large:10px;--spectrum-status-light-top-to-dot-small:8px;--spectrum-status-light-top-to-dot-medium:12px;--spectrum-status-light-top-to-dot-large:15px;--spectrum-status-light-top-to-dot-extra-large:19px;--spectrum-action-button-edge-to-hold-icon-extra-small:3px;--spectrum-action-button-edge-to-hold-icon-small:3px;--spectrum-action-button-edge-to-hold-icon-medium:4px;--spectrum-action-button-edge-to-hold-icon-large:5px;--spectrum-action-button-edge-to-hold-icon-extra-large:6px;--spectrum-tooltip-tip-width:8px;--spectrum-tooltip-tip-height:4px;--spectrum-tooltip-maximum-width:160px;--spectrum-progress-circle-size-small:16px;--spectrum-progress-circle-size-medium:32px;--spectrum-progress-circle-size-large:64px;--spectrum-progress-circle-thickness-small:2px;--spectrum-progress-circle-thickness-medium:3px;--spectrum-progress-circle-thickness-large:4px;--spectrum-toast-height:48px;--spectrum-toast-maximum-width:336px;--spectrum-toast-top-to-workflow-icon:15px;--spectrum-toast-top-to-text:14px;--spectrum-toast-bottom-to-text:17px;--spectrum-action-bar-height:48px;--spectrum-action-bar-top-to-item-counter:14px;--spectrum-swatch-size-extra-small:16px;--spectrum-swatch-size-small:24px;--spectrum-swatch-size-medium:32px;--spectrum-swatch-size-large:40px;--spectrum-progress-bar-thickness-small:4px;--spectrum-progress-bar-thickness-medium:6px;--spectrum-progress-bar-thickness-large:8px;--spectrum-progress-bar-thickness-extra-large:10px;--spectrum-meter-width:192px;--spectrum-meter-thickness-small:4px;--spectrum-meter-thickness-large:6px;--spectrum-tag-top-to-avatar-small:4px;--spectrum-tag-top-to-avatar-medium:6px;--spectrum-tag-top-to-avatar-large:9px;--spectrum-tag-top-to-cross-icon-small:8px;--spectrum-tag-top-to-cross-icon-medium:12px;--spectrum-tag-top-to-cross-icon-large:15px;--spectrum-popover-top-to-content-area:4px;--spectrum-menu-item-edge-to-content-not-selected-small:28px;--spectrum-menu-item-edge-to-content-not-selected-medium:32px;--spectrum-menu-item-edge-to-content-not-selected-large:38px;--spectrum-menu-item-edge-to-content-not-selected-extra-large:45px;--spectrum-menu-item-top-to-disclosure-icon-small:7px;--spectrum-menu-item-top-to-disclosure-icon-medium:11px;--spectrum-menu-item-top-to-disclosure-icon-large:14px;--spectrum-menu-item-top-to-disclosure-icon-extra-large:17px;--spectrum-menu-item-top-to-selected-icon-small:7px;--spectrum-menu-item-top-to-selected-icon-medium:11px;--spectrum-menu-item-top-to-selected-icon-large:14px;--spectrum-menu-item-top-to-selected-icon-extra-large:17px;--spectrum-slider-control-to-field-label-small:5px;--spectrum-slider-control-to-field-label-medium:8px;--spectrum-slider-control-to-field-label-large:11px;--spectrum-slider-control-to-field-label-extra-large:14px;--spectrum-picker-visual-to-disclosure-icon-small:7px;--spectrum-picker-visual-to-disclosure-icon-medium:8px;--spectrum-picker-visual-to-disclosure-icon-large:9px;--spectrum-picker-visual-to-disclosure-icon-extra-large:10px;--spectrum-text-area-minimum-width:112px;--spectrum-text-area-minimum-height:56px;--spectrum-combo-box-visual-to-field-button-small:7px;--spectrum-combo-box-visual-to-field-button-medium:8px;--spectrum-combo-box-visual-to-field-button-large:9px;--spectrum-combo-box-visual-to-field-button-extra-large:10px;--spectrum-thumbnail-size-50:16px;--spectrum-thumbnail-size-75:18px;--spectrum-thumbnail-size-100:20px;--spectrum-thumbnail-size-200:22px;--spectrum-thumbnail-size-300:26px;--spectrum-thumbnail-size-400:28px;--spectrum-thumbnail-size-500:32px;--spectrum-thumbnail-size-600:36px;--spectrum-thumbnail-size-700:40px;--spectrum-thumbnail-size-800:44px;--spectrum-thumbnail-size-900:50px;--spectrum-thumbnail-size-1000:56px;--spectrum-alert-dialog-title-size:var(--spectrum-heading-size-s);--spectrum-alert-dialog-description-size:var(--spectrum-body-size-s);--spectrum-opacity-checkerboard-square-size:8px;--spectrum-contextual-help-title-size:var(--spectrum-heading-size-xs);--spectrum-contextual-help-body-size:var(--spectrum-heading-size-s);--spectrum-breadcrumbs-height-multiline:72px;--spectrum-breadcrumbs-top-to-text:13px;--spectrum-breadcrumbs-top-to-text-compact:11px;--spectrum-breadcrumbs-top-to-text-multiline:12px;--spectrum-breadcrumbs-bottom-to-text:15px;--spectrum-breadcrumbs-bottom-to-text-compact:12px;--spectrum-breadcrumbs-bottom-to-text-multiline:9px;--spectrum-breadcrumbs-start-edge-to-text:8px;--spectrum-breadcrumbs-top-text-to-bottom-text:9px;--spectrum-breadcrumbs-top-to-separator-icon:19px;--spectrum-breadcrumbs-top-to-separator-icon-compact:15px;--spectrum-breadcrumbs-top-to-separator-icon-multiline:15px;--spectrum-breadcrumbs-separator-icon-to-bottom-text-multiline:11px;--spectrum-breadcrumbs-top-to-truncated-menu:8px;--spectrum-breadcrumbs-top-to-truncated-menu-compact:4px;--spectrum-avatar-size-50:16px;--spectrum-avatar-size-75:18px;--spectrum-avatar-size-100:20px;--spectrum-avatar-size-200:22px;--spectrum-avatar-size-300:26px;--spectrum-avatar-size-400:28px;--spectrum-avatar-size-500:32px;--spectrum-avatar-size-600:36px;--spectrum-avatar-size-700:40px;--spectrum-alert-banner-minimum-height:48px;--spectrum-alert-banner-width:832px;--spectrum-alert-banner-top-to-workflow-icon:15px;--spectrum-alert-banner-top-to-text:14px;--spectrum-alert-banner-bottom-to-text:17px;--spectrum-rating-indicator-width:18px;--spectrum-rating-indicator-to-icon:4px;--spectrum-color-area-width:192px;--spectrum-color-area-minimum-width:64px;--spectrum-color-area-height:192px;--spectrum-color-area-minimum-height:64px;--spectrum-color-wheel-width:192px;--spectrum-color-wheel-minimum-width:175px;--spectrum-color-slider-length:192px;--spectrum-color-slider-minimum-length:80px;--spectrum-illustrated-message-title-size:var(--spectrum-heading-size-m);--spectrum-illustrated-message-cjk-title-size:var(
--spectrum-heading-cjk-size-m
);--spectrum-illustrated-message-body-size:var(--spectrum-body-size-s);--spectrum-coach-mark-width:296px;--spectrum-coach-mark-minimum-width:296px;--spectrum-coach-mark-maximum-width:380px;--spectrum-coach-mark-edge-to-content:var(--spectrum-spacing-400);--spectrum-coach-mark-pagination-text-to-bottom-edge:33px;--spectrum-coach-mark-media-height:222px;--spectrum-coach-mark-media-minimum-height:166px;--spectrum-coach-mark-title-size:var(--spectrum-heading-size-xs);--spectrum-coach-mark-body-size:var(--spectrum-body-size-s);--spectrum-coach-mark-pagination-body-size:var(--spectrum-body-size-s);--spectrum-accordion-top-to-text-compact-small:2px;--spectrum-accordion-top-to-text-regular-small:5px;--spectrum-accordion-small-top-to-text-spacious:9px;--spectrum-accordion-top-to-text-compact-medium:4px;--spectrum-accordion-top-to-text-regular-medium:8px;--spectrum-accordion-top-to-text-spacious-medium:12px;--spectrum-accordion-top-to-text-compact-large:4px;--spectrum-accordion-top-to-text-regular-large:9px;--spectrum-accordion-top-to-text-spacious-large:12px;--spectrum-accordion-top-to-text-compact-extra-large:5px;--spectrum-accordion-top-to-text-regular-extra-large:9px;--spectrum-accordion-top-to-text-spacious-extra-large:13px;--spectrum-accordion-bottom-to-text-compact-small:2px;--spectrum-accordion-bottom-to-text-regular-small:7px;--spectrum-accordion-bottom-to-text-spacious-small:11px;--spectrum-accordion-bottom-to-text-compact-medium:5px;--spectrum-accordion-bottom-to-text-regular-medium:9px;--spectrum-accordion-bottom-to-text-spacious-medium:13px;--spectrum-accordion-bottom-to-text-compact-large:8px;--spectrum-accordion-bottom-to-text-regular-large:11px;--spectrum-accordion-bottom-to-text-spacious-large:16px;--spectrum-accordion-bottom-to-text-compact-extra-large:8px;--spectrum-accordion-bottom-to-text-regular-extra-large:12px;--spectrum-accordion-bottom-to-text-spacious-extra-large:16px;--spectrum-accordion-minimum-width:200px;--spectrum-accordion-disclosure-indicator-to-text:0px;--spectrum-accordion-edge-to-disclosure-indicator:0px;--spectrum-accordion-edge-to-text:0px;--spectrum-accordion-focus-indicator-gap:0px;--spectrum-accordion-content-area-top-to-content:8px;--spectrum-accordion-content-area-bottom-to-content:16px;--spectrum-color-handle-size:16px;--spectrum-color-handle-size-key-focus:32px;--spectrum-table-column-header-row-top-to-text-small:8px;--spectrum-table-column-header-row-top-to-text-medium:7px;--spectrum-table-column-header-row-top-to-text-large:10px;--spectrum-table-column-header-row-top-to-text-extra-large:13px;--spectrum-table-column-header-row-bottom-to-text-small:9px;--spectrum-table-column-header-row-bottom-to-text-medium:8px;--spectrum-table-column-header-row-bottom-to-text-large:10px;--spectrum-table-column-header-row-bottom-to-text-extra-large:13px;--spectrum-table-row-height-small-regular:32px;--spectrum-table-row-height-medium-regular:40px;--spectrum-table-row-height-large-regular:48px;--spectrum-table-row-height-extra-large-regular:56px;--spectrum-table-row-height-small-spacious:40px;--spectrum-table-row-height-medium-spacious:48px;--spectrum-table-row-height-large-spacious:56px;--spectrum-table-row-height-extra-large-spacious:64px;--spectrum-table-row-top-to-text-small-regular:8px;--spectrum-table-row-top-to-text-medium-regular:11px;--spectrum-table-row-top-to-text-large-regular:14px;--spectrum-table-row-top-to-text-extra-large-regular:17px;--spectrum-table-row-bottom-to-text-small-regular:9px;--spectrum-table-row-bottom-to-text-medium-regular:12px;--spectrum-table-row-bottom-to-text-large-regular:14px;--spectrum-table-row-bottom-to-text-extra-large-regular:17px;--spectrum-table-row-top-to-text-small-spacious:12px;--spectrum-table-row-top-to-text-medium-spacious:15px;--spectrum-table-row-top-to-text-large-spacious:18px;--spectrum-table-row-top-to-text-extra-large-spacious:21px;--spectrum-table-row-bottom-to-text-small-spacious:13px;--spectrum-table-row-bottom-to-text-medium-spacious:16px;--spectrum-table-row-bottom-to-text-large-spacious:18px;--spectrum-table-row-bottom-to-text-extra-large-spacious:21px;--spectrum-table-edge-to-content:16px;--spectrum-table-checkbox-to-text:24px;--spectrum-table-header-row-checkbox-to-top-small:10px;--spectrum-table-header-row-checkbox-to-top-medium:9px;--spectrum-table-header-row-checkbox-to-top-large:12px;--spectrum-table-header-row-checkbox-to-top-extra-large:15px;--spectrum-table-row-checkbox-to-top-small-compact:6px;--spectrum-table-row-checkbox-to-top-small-regular:10px;--spectrum-table-row-checkbox-to-top-small-spacious:14px;--spectrum-table-row-checkbox-to-top-medium-compact:9px;--spectrum-table-row-checkbox-to-top-medium-regular:13px;--spectrum-table-row-checkbox-to-top-medium-spacious:17px;--spectrum-table-row-checkbox-to-top-large-compact:12px;--spectrum-table-row-checkbox-to-top-large-regular:16px;--spectrum-table-row-checkbox-to-top-large-spacious:20px;--spectrum-table-row-checkbox-to-top-extra-large-compact:15px;--spectrum-table-row-checkbox-to-top-extra-large-regular:19px;--spectrum-table-row-checkbox-to-top-extra-large-spacious:23px;--spectrum-table-section-header-row-height-small:24px;--spectrum-table-section-header-row-height-medium:32px;--spectrum-table-section-header-row-height-large:40px;--spectrum-table-section-header-row-height-extra-large:48px;--spectrum-table-thumbnail-to-top-minimum-small-compact:4px;--spectrum-table-thumbnail-to-top-minimum-medium-compact:5px;--spectrum-table-thumbnail-to-top-minimum-large-compact:7px;--spectrum-table-thumbnail-to-top-minimum-extra-large-compact:8px;--spectrum-table-thumbnail-to-top-minimum-small-regular:5px;--spectrum-table-thumbnail-to-top-minimum-medium-regular:7px;--spectrum-table-thumbnail-to-top-minimum-large-regular:8px;--spectrum-table-thumbnail-to-top-minimum-extra-large-regular:8px;--spectrum-table-thumbnail-to-top-minimum-small-spacious:7px;--spectrum-table-thumbnail-to-top-minimum-medium-spacious:8px;--spectrum-table-thumbnail-to-top-minimum-large-spacious:8px;--spectrum-table-thumbnail-to-top-minimum-extra-large-spacious:10px;--spectrum-tab-item-to-tab-item-horizontal-small:21px;--spectrum-tab-item-to-tab-item-horizontal-medium:24px;--spectrum-tab-item-to-tab-item-horizontal-large:27px;--spectrum-tab-item-to-tab-item-horizontal-extra-large:30px;--spectrum-tab-item-to-tab-item-vertical-small:4px;--spectrum-tab-item-to-tab-item-vertical-medium:4px;--spectrum-tab-item-to-tab-item-vertical-large:5px;--spectrum-tab-item-to-tab-item-vertical-extra-large:5px;--spectrum-tab-item-start-to-edge-small:12px;--spectrum-tab-item-start-to-edge-medium:12px;--spectrum-tab-item-start-to-edge-large:13px;--spectrum-tab-item-start-to-edge-extra-large:13px;--spectrum-tab-item-top-to-text-small:11px;--spectrum-tab-item-bottom-to-text-small:12px;--spectrum-tab-item-top-to-text-medium:14px;--spectrum-tab-item-bottom-to-text-medium:14px;--spectrum-tab-item-top-to-text-large:16px;--spectrum-tab-item-bottom-to-text-large:18px;--spectrum-tab-item-top-to-text-extra-large:19px;--spectrum-tab-item-bottom-to-text-extra-large:20px;--spectrum-tab-item-top-to-text-compact-small:4px;--spectrum-tab-item-bottom-to-text-compact-small:5px;--spectrum-tab-item-top-to-text-compact-medium:6px;--spectrum-tab-item-bottom-to-text-compact-medium:8px;--spectrum-tab-item-top-to-text-compact-large:10px;--spectrum-tab-item-bottom-to-text-compact-large:12px;--spectrum-tab-item-top-to-text-compact-extra-large:12px;--spectrum-tab-item-bottom-to-text-compact-extra-large:13px;--spectrum-tab-item-top-to-workflow-icon-small:13px;--spectrum-tab-item-top-to-workflow-icon-medium:15px;--spectrum-tab-item-top-to-workflow-icon-large:17px;--spectrum-tab-item-top-to-workflow-icon-extra-large:19px;--spectrum-tab-item-top-to-workflow-icon-compact-small:3px;--spectrum-tab-item-top-to-workflow-icon-compact-medium:7px;--spectrum-tab-item-top-to-workflow-icon-compact-large:9px;--spectrum-tab-item-top-to-workflow-icon-compact-extra-large:11px;--spectrum-tab-item-focus-indicator-gap-small:7px;--spectrum-tab-item-focus-indicator-gap-medium:8px;--spectrum-tab-item-focus-indicator-gap-large:9px;--spectrum-tab-item-focus-indicator-gap-extra-large:10px;--spectrum-side-navigation-width:192px;--spectrum-side-navigation-minimum-width:160px;--spectrum-side-navigation-maximum-width:240px;--spectrum-side-navigation-second-level-edge-to-text:24px;--spectrum-side-navigation-third-level-edge-to-text:36px;--spectrum-side-navigation-with-icon-second-level-edge-to-text:50px;--spectrum-side-navigation-with-icon-third-level-edge-to-text:62px;--spectrum-side-navigation-item-to-item:4px;--spectrum-side-navigation-item-to-header:16px;--spectrum-side-navigation-bottom-to-text:8px;--spectrum-tray-top-to-content-area:4px;--spectrum-workflow-icon-size-50:14px;--spectrum-workflow-icon-size-75:16px;--spectrum-workflow-icon-size-100:18px;--spectrum-workflow-icon-size-200:20px;--spectrum-workflow-icon-size-300:22px;--spectrum-text-to-visual-50:6px;--spectrum-text-to-visual-75:7px;--spectrum-text-to-visual-100:8px;--spectrum-text-to-visual-200:9px;--spectrum-text-to-visual-300:10px;--spectrum-text-to-control-75:9px;--spectrum-text-to-control-100:10px;--spectrum-text-to-control-200:11px;--spectrum-text-to-control-300:13px;--spectrum-component-height-50:20px;--spectrum-component-height-75:24px;--spectrum-component-height-100:32px;--spectrum-component-height-200:40px;--spectrum-component-height-300:48px;--spectrum-component-height-400:56px;--spectrum-component-height-500:64px;--spectrum-component-pill-edge-to-visual-75:10px;--spectrum-component-pill-edge-to-visual-100:14px;--spectrum-component-pill-edge-to-visual-200:18px;--spectrum-component-pill-edge-to-visual-300:21px;--spectrum-component-pill-edge-to-visual-only-75:4px;--spectrum-component-pill-edge-to-visual-only-100:7px;--spectrum-component-pill-edge-to-visual-only-200:10px;--spectrum-component-pill-edge-to-visual-only-300:13px;--spectrum-component-pill-edge-to-text-75:12px;--spectrum-component-pill-edge-to-text-100:16px;--spectrum-component-pill-edge-to-text-200:20px;--spectrum-component-pill-edge-to-text-300:24px;--spectrum-component-edge-to-visual-50:6px;--spectrum-component-edge-to-visual-75:7px;--spectrum-component-edge-to-visual-100:10px;--spectrum-component-edge-to-visual-200:13px;--spectrum-component-edge-to-visual-300:15px;--spectrum-component-edge-to-visual-only-50:3px;--spectrum-component-edge-to-visual-only-75:4px;--spectrum-component-edge-to-visual-only-100:7px;--spectrum-component-edge-to-visual-only-200:10px;--spectrum-component-edge-to-visual-only-300:13px;--spectrum-component-edge-to-text-50:8px;--spectrum-component-edge-to-text-75:9px;--spectrum-component-edge-to-text-100:12px;--spectrum-component-edge-to-text-200:15px;--spectrum-component-edge-to-text-300:18px;--spectrum-component-top-to-workflow-icon-50:3px;--spectrum-component-top-to-workflow-icon-75:4px;--spectrum-component-top-to-workflow-icon-100:7px;--spectrum-component-top-to-workflow-icon-200:10px;--spectrum-component-top-to-workflow-icon-300:13px;--spectrum-component-top-to-text-50:3px;--spectrum-component-top-to-text-75:4px;--spectrum-component-top-to-text-100:6px;--spectrum-component-top-to-text-200:9px;--spectrum-component-top-to-text-300:12px;--spectrum-component-bottom-to-text-50:3px;--spectrum-component-bottom-to-text-75:5px;--spectrum-component-bottom-to-text-100:9px;--spectrum-component-bottom-to-text-200:11px;--spectrum-component-bottom-to-text-300:14px;--spectrum-component-to-menu-small:6px;--spectrum-component-to-menu-medium:6px;--spectrum-component-to-menu-large:7px;--spectrum-component-to-menu-extra-large:8px;--spectrum-field-edge-to-disclosure-icon-75:7px;--spectrum-field-edge-to-disclosure-icon-100:11px;--spectrum-field-edge-to-disclosure-icon-200:14px;--spectrum-field-edge-to-disclosure-icon-300:17px;--spectrum-field-end-edge-to-disclosure-icon-75:7px;--spectrum-field-end-edge-to-disclosure-icon-100:11px;--spectrum-field-end-edge-to-disclosure-icon-200:14px;--spectrum-field-end-edge-to-disclosure-icon-300:17px;--spectrum-field-top-to-disclosure-icon-75:7px;--spectrum-field-top-to-disclosure-icon-100:11px;--spectrum-field-top-to-disclosure-icon-200:14px;--spectrum-field-top-to-disclosure-icon-300:17px;--spectrum-field-top-to-alert-icon-small:4px;--spectrum-field-top-to-alert-icon-medium:7px;--spectrum-field-top-to-alert-icon-large:10px;--spectrum-field-top-to-alert-icon-extra-large:13px;--spectrum-field-top-to-validation-icon-small:7px;--spectrum-field-top-to-validation-icon-medium:11px;--spectrum-field-top-to-validation-icon-large:14px;--spectrum-field-top-to-validation-icon-extra-large:17px;--spectrum-field-top-to-progress-circle-small:4px;--spectrum-field-top-to-progress-circle-medium:8px;--spectrum-field-top-to-progress-circle-large:12px;--spectrum-field-top-to-progress-circle-extra-large:16px;--spectrum-field-edge-to-alert-icon-small:9px;--spectrum-field-edge-to-alert-icon-medium:12px;--spectrum-field-edge-to-alert-icon-large:15px;--spectrum-field-edge-to-alert-icon-extra-large:18px;--spectrum-field-edge-to-validation-icon-small:9px;--spectrum-field-edge-to-validation-icon-medium:12px;--spectrum-field-edge-to-validation-icon-large:15px;--spectrum-field-edge-to-validation-icon-extra-large:18px;--spectrum-field-text-to-alert-icon-small:8px;--spectrum-field-text-to-alert-icon-medium:12px;--spectrum-field-text-to-alert-icon-large:15px;--spectrum-field-text-to-alert-icon-extra-large:18px;--spectrum-field-text-to-validation-icon-small:8px;--spectrum-field-text-to-validation-icon-medium:12px;--spectrum-field-text-to-validation-icon-large:15px;--spectrum-field-text-to-validation-icon-extra-large:18px;--spectrum-field-width:192px;--spectrum-character-count-to-field-quiet-small:-3px;--spectrum-character-count-to-field-quiet-medium:-3px;--spectrum-character-count-to-field-quiet-large:-3px;--spectrum-character-count-to-field-quiet-extra-large:-4px;--spectrum-side-label-character-count-to-field:12px;--spectrum-side-label-character-count-top-margin-small:4px;--spectrum-side-label-character-count-top-margin-medium:8px;--spectrum-side-label-character-count-top-margin-large:11px;--spectrum-side-label-character-count-top-margin-extra-large:14px;--spectrum-disclosure-indicator-top-to-disclosure-icon-small:7px;--spectrum-disclosure-indicator-top-to-disclosure-icon-medium:11px;--spectrum-disclosure-indicator-top-to-disclosure-icon-large:14px;--spectrum-disclosure-indicator-top-to-disclosure-icon-extra-large:17px;--spectrum-navigational-indicator-top-to-back-icon-small:7px;--spectrum-navigational-indicator-top-to-back-icon-medium:11px;--spectrum-navigational-indicator-top-to-back-icon-large:14px;--spectrum-navigational-indicator-top-to-back-icon-extra-large:17px;--spectrum-color-control-track-width:24px;--spectrum-font-size-50:11px;--spectrum-font-size-75:12px;--spectrum-font-size-100:14px;--spectrum-font-size-200:16px;--spectrum-font-size-300:18px;--spectrum-font-size-400:20px;--spectrum-font-size-500:22px;--spectrum-font-size-600:25px;--spectrum-font-size-700:28px;--spectrum-font-size-800:32px;--spectrum-font-size-900:36px;--spectrum-font-size-1000:40px;--spectrum-font-size-1100:45px;--spectrum-font-size-1200:50px;--spectrum-font-size-1300:60px}:host,:root{--spectrum-edge-to-visual-only-75:4px;--spectrum-edge-to-visual-only-100:7px;--spectrum-edge-to-visual-only-200:10px;--spectrum-edge-to-visual-only-300:13px;--spectrum-slider-tick-mark-height:10px;--spectrum-slider-ramp-track-height:16px;--spectrum-colorwheel-path:"M 95 95 m -95 0 a 95 95 0 1 0 190 0 a 95 95 0 1 0 -190 0.2 M 95 95 m -73 0 a 73 73 0 1 0 146 0 a 73 73 0 1 0 -146 0";--spectrum-colorwheel-path-borders:"M 96 96 m -96 0 a 96 96 0 1 0 192 0 a 96 96 0 1 0 -192 0.2 M 96 96 m -72 0 a 72 72 0 1 0 144 0 a 72 72 0 1 0 -144 0";--spectrum-colorwheel-colorarea-container-size:144px;--spectrum-colorloupe-checkerboard-fill:url(#checkerboard-primary);--spectrum-menu-item-selectable-edge-to-text-not-selected-small:28px;--spectrum-menu-item-selectable-edge-to-text-not-selected-medium:32px;--spectrum-menu-item-selectable-edge-to-text-not-selected-large:38px;--spectrum-menu-item-selectable-edge-to-text-not-selected-extra-large:45px;--spectrum-menu-item-checkmark-height-small:10px;--spectrum-menu-item-checkmark-height-medium:10px;--spectrum-menu-item-checkmark-height-large:12px;--spectrum-menu-item-checkmark-height-extra-large:14px;--spectrum-menu-item-checkmark-width-small:10px;--spectrum-menu-item-checkmark-width-medium:10px;--spectrum-menu-item-checkmark-width-large:12px;--spectrum-menu-item-checkmark-width-extra-large:14px;--spectrum-rating-icon-spacing:var(--spectrum-spacing-75);--spectrum-button-top-to-text-small:5px;--spectrum-button-bottom-to-text-small:4px;--spectrum-button-top-to-text-medium:7px;--spectrum-button-bottom-to-text-medium:8px;--spectrum-button-top-to-text-large:10px;--spectrum-button-bottom-to-text-large:10px;--spectrum-button-top-to-text-extra-large:13px;--spectrum-button-bottom-to-text-extra-large:13px;--spectrum-alert-banner-close-button-spacing:var(--spectrum-spacing-100);--spectrum-alert-banner-edge-to-divider:var(--spectrum-spacing-100);--spectrum-alert-banner-edge-to-button:var(--spectrum-spacing-100);--spectrum-alert-banner-text-to-button-vertical:var(
--spectrum-spacing-100
);--spectrum-sidenav-heading-top-margin:24px;--spectrum-sidenav-heading-bottom-margin:8px;--spectrum-sidenav-bottom-to-label:8px;--spectrum-alert-dialog-padding:var(--spectrum-spacing-500);--spectrum-alert-dialog-description-to-buttons:var(--spectrum-spacing-700);--spectrum-coach-indicator-gap:6px;--spectrum-coach-indicator-ring-diameter:var(--spectrum-spacing-300);--spectrum-coach-indicator-quiet-ring-diameter:var(--spectrum-spacing-100);--spectrum-coachmark-buttongroup-display:flex;--spectrum-coachmark-buttongroup-mobile-display:none;--spectrum-coachmark-menu-display:inline-flex;--spectrum-coachmark-menu-mobile-display:none;--spectrum-well-padding:var(--spectrum-spacing-300);--spectrum-well-margin-top:var(--spectrum-spacing-75);--spectrum-well-min-width:240px;--spectrum-well-border-radius:var(--spectrum-spacing-75);--spectrum-icon-chevron-size-50:6px;--spectrum-treeview-item-indentation-medium:var(--spectrum-spacing-300);--spectrum-treeview-item-indentation-small:var(--spectrum-spacing-200);--spectrum-treeview-item-indentation-large:20px;--spectrum-treeview-item-indentation-extra-large:var(
--spectrum-spacing-400
);--spectrum-treeview-indicator-inset-block-start:5px}:host,:root{--spectrum-checkbox-control-size-small:12px;--spectrum-checkbox-control-size-medium:14px;--spectrum-checkbox-control-size-large:16px;--spectrum-checkbox-control-size-extra-large:18px;--spectrum-checkbox-top-to-control-small:6px;--spectrum-checkbox-top-to-control-medium:9px;--spectrum-checkbox-top-to-control-large:12px;--spectrum-checkbox-top-to-control-extra-large:15px;--spectrum-switch-control-width-small:23px;--spectrum-switch-control-width-medium:26px;--spectrum-switch-control-width-large:29px;--spectrum-switch-control-width-extra-large:33px;--spectrum-switch-control-height-small:12px;--spectrum-switch-control-height-medium:14px;--spectrum-switch-control-height-large:16px;--spectrum-switch-control-height-extra-large:18px;--spectrum-switch-top-to-control-small:6px;--spectrum-switch-top-to-control-medium:9px;--spectrum-switch-top-to-control-large:12px;--spectrum-switch-top-to-control-extra-large:15px;--spectrum-radio-button-control-size-small:12px;--spectrum-radio-button-control-size-medium:14px;--spectrum-radio-button-control-size-large:16px;--spectrum-radio-button-control-size-extra-large:18px;--spectrum-radio-button-top-to-control-small:6px;--spectrum-radio-button-top-to-control-medium:9px;--spectrum-radio-button-top-to-control-large:12px;--spectrum-radio-button-top-to-control-extra-large:15px;--spectrum-slider-control-height-small:14px;--spectrum-slider-control-height-medium:16px;--spectrum-slider-control-height-large:18px;--spectrum-slider-control-height-extra-large:20px;--spectrum-slider-handle-size-small:14px;--spectrum-slider-handle-size-medium:16px;--spectrum-slider-handle-size-large:18px;--spectrum-slider-handle-size-extra-large:20px;--spectrum-slider-handle-border-width-down-small:5px;--spectrum-slider-handle-border-width-down-medium:6px;--spectrum-slider-handle-border-width-down-large:7px;--spectrum-slider-handle-border-width-down-extra-large:8px;--spectrum-slider-bottom-to-handle-small:5px;--spectrum-slider-bottom-to-handle-medium:8px;--spectrum-slider-bottom-to-handle-large:11px;--spectrum-slider-bottom-to-handle-extra-large:14px;--spectrum-corner-radius-75:2px;--spectrum-corner-radius-100:4px;--spectrum-corner-radius-200:8px;--spectrum-drop-shadow-x:0px;--spectrum-drop-shadow-y:1px;--spectrum-drop-shadow-blur:4px}
`;var m$4 = e$4;

Theme.registerThemeFragment("medium","scale",m$4);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$3=t=>(...e)=>({_$litDirective$:t,values:e});class i$8{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$7="important",n$3=" !"+i$7,o$6=e$3(class extends i$8{constructor(t){var e;if(super(t),t.type!==t$4.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ht){this.ht=new Set;for(const t in r)this.ht.add(t);return this.render(r)}this.ht.forEach((t=>{null==r[t]&&(this.ht.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];if(null!=e){this.ht.add(t);const r="string"==typeof e&&e.endsWith(n$3);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?i$7:""):s[t]=e;}}return T}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$4=l=>null!=l?l:A$1;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const {I:l$3}=j,e$2=o=>void 0===o.strings,r$2=()=>document.createComment(""),c$5=(o,i,n)=>{var t;const v=o._$AA.parentNode,d=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=v.insertBefore(r$2(),d),t=v.insertBefore(r$2(),d);n=new l$3(i,t,o,o.options);}else {const l=n._$AB.nextSibling,i=n._$AM,u=i!==o;if(u){let l;null===(t=n._$AQ)||void 0===t||t.call(n,o),n._$AM=o,void 0!==n._$AP&&(l=o._$AU)!==i._$AU&&n._$AP(l);}if(l!==d||u){let o=n._$AA;for(;o!==l;){const l=o.nextSibling;v.insertBefore(o,d),o=l;}}}return n},f$2=(o,l,i=o)=>(o._$AI(l,i),o),s$5={},a$2=(o,l=s$5)=>o._$AH=l,m$3=o=>o._$AH,p$6=o=>{var l;null===(l=o._$AP)||void 0===l||l.call(o,!1,!0);let i=o._$AA;const n=o._$AB.nextSibling;for(;i!==n;){const o=i.nextSibling;i.remove(),i=o;}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u$5=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c$4=e$3(class extends i$8{constructor(e){if(super(e),e.type!==t$4.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l}}render(e,s,t){return this.ct(e,s,t).values}update(s,[t,r,c]){var d;const a=m$3(s),{values:p,keys:v}=this.ct(t,r,c);if(!Array.isArray(a))return this.ut=v,p;const h=null!==(d=this.ut)&&void 0!==d?d:this.ut=[],m=[];let y,x,j=0,k=a.length-1,w=0,A=p.length-1;for(;j<=k&&w<=A;)if(null===a[j])j++;else if(null===a[k])k--;else if(h[j]===v[w])m[w]=f$2(a[j],p[w]),j++,w++;else if(h[k]===v[A])m[A]=f$2(a[k],p[A]),k--,A--;else if(h[j]===v[A])m[A]=f$2(a[j],p[A]),c$5(s,m[A+1],a[j]),j++,A--;else if(h[k]===v[w])m[w]=f$2(a[k],p[w]),c$5(s,a[j],a[k]),k--,w++;else if(void 0===y&&(y=u$5(v,w,A),x=u$5(h,j,k)),y.has(h[j]))if(y.has(h[k])){const e=x.get(v[w]),t=void 0!==e?a[e]:null;if(null===t){const e=c$5(s,a[j]);f$2(e,p[w]),m[w]=e;}else m[w]=f$2(t,p[w]),c$5(s,a[j],t),a[e]=null;w++;}else p$6(a[k]),k--;else p$6(a[j]),j++;for(;w<=A;){const e=c$5(s,m[A+1]);f$2(e,p[w]),m[w++]=e;}for(;j<=k;){const e=a[j++];null!==e&&p$6(e);}return this.ut=v,a$2(s,m),T}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$5=e$3(class extends i$8{constructor(t){var i;if(super(t),t.type!==t$4.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$4=(i,t)=>{var e,o;const r=i._$AN;if(void 0===r)return !1;for(const i of r)null===(o=(e=i)._$AO)||void 0===o||o.call(e,t,!1),s$4(i,t);return !0},o$4=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===(null==e?void 0:e.size))},r$1=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),l$2(t);}};function n$2(i){void 0!==this._$AN?(o$4(this),this._$AM=i,r$1(this)):this._$AM=i;}function h$1(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$4(r[i],!1),o$4(r[i]);else null!=r&&(s$4(r,!1),o$4(r));else s$4(this,i);}const l$2=i=>{var t,s,o,r;i.type==t$4.CHILD&&(null!==(t=(o=i)._$AP)&&void 0!==t||(o._$AP=h$1),null!==(s=(r=i)._$AQ)&&void 0!==s||(r._$AQ=n$2));};class c$3 extends i$8{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r$1(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var e,r;i!==this.isConnected&&(this.isConnected=i,i?null===(e=this.reconnected)||void 0===e||e.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(s$4(this,i),o$4(this));}setValue(t){if(e$2(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

var b$5=Object.defineProperty;var g$2=Object.getOwnPropertyDescriptor;var n$1=(s,e,p,l)=>{for(var t=l>1?void 0:l?g$2(e,p):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(l?i(e,p,t):i(t))||t);return l&&t&&b$5(e,p,t),t};function LikeAnchor(s){class e extends s{renderAnchor({id:t,className:a,ariaHidden:i,labelledby:c,tabindex:u,anchorContent:f=x`<slot></slot>`}){return x`<a
                    id=${t}
                    class=${l$4(a)}
                    href=${l$4(this.href)}
                    download=${l$4(this.download)}
                    target=${l$4(this.target)}
                    aria-label=${l$4(this.label)}
                    aria-labelledby=${l$4(c)}
                    aria-hidden=${l$4(i?"true":void 0)}
                    tabindex=${l$4(u)}
                    rel=${l$4(this.rel)}
                >${f}</a>`}}return n$1([n$5({reflect:!0})],e.prototype,"download",2),n$1([n$5()],e.prototype,"label",2),n$1([n$5({reflect:!0})],e.prototype,"href",2),n$1([n$5({reflect:!0})],e.prototype,"target",2),n$1([n$5({reflect:!0})],e.prototype,"rel",2),e}

let i$6=!0;try{document.body.querySelector(":focus-visible");}catch(a){i$6=!1,import('./focus-visible-57906063.js');}const FocusVisiblePolyfillMixin=a=>{var n;const s=l=>{if(l.shadowRoot==null||l.hasAttribute("data-js-focus-visible"))return ()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(l.shadowRoot),l.manageAutoFocus&&l.manageAutoFocus();else {const e=()=>{self.applyFocusVisiblePolyfill&&l.shadowRoot&&self.applyFocusVisiblePolyfill(l.shadowRoot),l.manageAutoFocus&&l.manageAutoFocus();};return self.addEventListener("focus-visible-polyfill-ready",e,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",e);}}return ()=>{}},o=Symbol("endPolyfillCoordination");class t extends a{constructor(){super(...arguments);this[n]=null;}connectedCallback(){super.connectedCallback&&super.connectedCallback(),i$6||requestAnimationFrame(()=>{this[o]==null&&(this[o]=s(this));});}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),i$6||requestAnimationFrame(()=>{this[o]!=null&&(this[o](),this[o]=null);});}}return n=o,t};

var u$4=Object.defineProperty;var b$4=Object.getOwnPropertyDescriptor;var n=(s,a,e,t)=>{for(var i=t>1?void 0:t?b$4(a,e):a,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(t?r(a,e,i):r(i))||i);return t&&i&&u$4(a,e,i),i};function d$6(){return new Promise(s=>requestAnimationFrame(()=>s()))}class Focusable extends FocusVisiblePolyfillMixin(SpectrumElement){constructor(){super(...arguments);this.disabled=!1;this.autofocus=!1;this._tabIndex=0;this.manipulatingTabindex=!1;this._recentlyConnected=!1;}get tabIndex(){if(this.focusElement===this){const t=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(t)?-1:t}const e=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||e<0?-1:this.focusElement?this.focusElement.tabIndex:e}set tabIndex(e){if(this.manipulatingTabindex){this.manipulatingTabindex=!1;return}if(this.focusElement===this){if(e!==this._tabIndex){this._tabIndex=e;const t=this.disabled?"-1":""+e;this.manipulatingTabindex=!0,this.setAttribute("tabindex",t);}return}if(e===-1?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),e===-1||this.disabled){this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),e!==-1&&this.manageFocusElementTabindex(e);return}this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(e);}onPointerdownManagementOfTabIndex(){this.tabIndex===-1&&(this.tabIndex=0,this.focus({preventScroll:!0}));}async manageFocusElementTabindex(e){this.focusElement||await this.updateComplete,e===null?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=e;}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(e){this.disabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(e):HTMLElement.prototype.focus.apply(this,[e]));}blur(){const e=this.focusElement||this;e!==this?e.blur():HTMLElement.prototype.blur.apply(this);}click(){if(this.disabled)return;const e=this.focusElement||this;e!==this?e.click():HTMLElement.prototype.click.apply(this);}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus());}firstUpdated(e){super.firstUpdated(e),(!this.hasAttribute("tabindex")||this.getAttribute("tabindex")!=="-1")&&this.setAttribute("focusable","");}update(e){e.has("disabled")&&this.handleDisabledChanged(this.disabled,e.get("disabled")),super.update(e);}updated(e){super.updated(e),e.has("disabled")&&this.disabled&&this.blur();}async handleDisabledChanged(e,t){const i=()=>this.focusElement!==this&&typeof this.focusElement.disabled!="undefined";e?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,i()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):t&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,i()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"));}async getUpdateComplete(){const e=await super.getUpdateComplete();return this._recentlyConnected&&(this._recentlyConnected=!1,await d$6(),await d$6()),e}connectedCallback(){super.connectedCallback(),this._recentlyConnected=!0,this.updateComplete.then(()=>{this.manageAutoFocus();});}}n([n$5({type:Boolean,reflect:!0})],Focusable.prototype,"disabled",2),n([n$5({type:Boolean})],Focusable.prototype,"autofocus",2),n([n$5({type:Number})],Focusable.prototype,"tabIndex",1);

class t$3{constructor(t,{target:s,config:i,callback:h,skipInitial:o}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==s&&this.t.add(null!=s?s:t),this.l=i,this.o=null!=o?o:this.o,this.callback=h,window.MutationObserver?(this.u=new MutationObserver((t=>{this.handleChanges(t),this.h.requestUpdate();})),t.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.");}handleChanges(t){var s;this.value=null===(s=this.callback)||void 0===s?void 0:s.call(this,t,this.u);}hostConnected(){for(const t of this.t)this.observe(t);}hostDisconnected(){this.disconnect();}async hostUpdated(){const t=this.u.takeRecords();(t.length||!this.o&&this.i)&&this.handleChanges(t),this.i=!1;}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate();}disconnect(){this.u.disconnect();}}

var g$1=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var u$3=(c,e,s,o)=>{for(var t=o>1?void 0:o?h(e,s):e,l=c.length-1,a;l>=0;l--)(a=c[l])&&(t=(o?a(e,s,t):a(t))||t);return o&&t&&g$1(e,s,t),t};const p$5=Symbol("assignedNodes");function ObserveSlotText(c,e,s=[]){var l;const o=a=>f=>a.matches(f);class t extends c{constructor(...n){super(n);this.slotHasContent=!1;new t$3(this,{config:{characterData:!0,subtree:!0},callback:d=>{for(const r of d)if(r.type==="characterData"){this.manageTextObservedSlot();return}}});}manageTextObservedSlot(){if(!this[p$5])return;const n=[...this[p$5]].filter(d=>{const r=d;return r.tagName?!s.some(o(r)):r.textContent?r.textContent.trim():!1});this.slotHasContent=n.length>0;}update(n){if(!this.hasUpdated){const{childNodes:d}=this,r=[...d].filter(m=>{const i=m;return i.tagName?s.some(o(i))?!1:e?i.getAttribute("slot")===e:!i.hasAttribute("slot"):i.textContent?i.textContent.trim():!1});this.slotHasContent=r.length>0;}super.update(n);}firstUpdated(n){super.firstUpdated(n),this.updateComplete.then(()=>{this.manageTextObservedSlot();});}}return l=p$5,u$3([n$5({type:Boolean,attribute:!1})],t.prototype,"slotHasContent",2),u$3([o$7({slot:e,flatten:!0})],t.prototype,l,2),t}

const s$3=i$c`
:host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){cursor:auto;pointer-events:none}#button{inset:0;position:absolute}::slotted(sp-overlay),::slotted(sp-tooltip){position:absolute}:host:after{pointer-events:none}slot[name=icon]::slotted(img),slot[name=icon]::slotted(svg){fill:currentcolor;stroke:currentcolor;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}[icon-only]+#label{display:contents}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;var b$3 = s$3;

var d$5=Object.defineProperty;var c$2=Object.getOwnPropertyDescriptor;var s$2=(o,r,e,t)=>{for(var i=t>1?void 0:t?c$2(r,e):r,a=o.length-1,h;a>=0;a--)(h=o[a])&&(i=(t?h(r,e,i):h(i))||i);return t&&i&&d$5(r,e,i),i};class ButtonBase extends ObserveSlotText(LikeAnchor(Focusable),"",["sp-overlay,sp-tooltip"]){constructor(){super();this.active=!1;this.type="button";this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0});}static get styles(){return [b$3]}get focusElement(){return this}get hasLabel(){return this.slotHasContent}get buttonContent(){return [x`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `,x`
                <span id="label">
                    <slot @slotchange=${this.manageTextObservedSlot}></slot>
                </span>
            `]}click(){this.disabled||this.shouldProxyClick()||super.click();}handleClickCapture(e){if(this.disabled)return e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),!1}proxyFocus(){this.focus();}shouldProxyClick(){let e=!1;if(this.anchorElement)this.anchorElement.click(),e=!0;else if(this.type!=="button"){const t=document.createElement("button");t.type=this.type,this.insertAdjacentElement("afterend",t),t.click(),t.remove(),e=!0;}return e}renderAnchor(){return x`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return x`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(e){const{code:t}=e;switch(t){case"Space":e.preventDefault(),typeof this.href=="undefined"&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0);break;}}handleKeypress(e){const{code:t}=e;switch(t){case"Enter":case"NumpadEnter":this.click();break;}}handleKeyup(e){const{code:t}=e;switch(t){case"Space":this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click();break;}}handleRemoveActive(){this.active=!1;}handlePointerdown(){this.active=!0;}manageAnchor(){this.href&&this.href.length>0?((!this.hasAttribute("role")||this.getAttribute("role")==="button")&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):((!this.hasAttribute("role")||this.getAttribute("role")==="link")&&this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick));}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress),this.addEventListener("pointerdown",this.handlePointerdown);}updated(e){super.updated(e),e.has("href")&&this.manageAnchor(),e.has("label")&&this.setAttribute("aria-label",this.label||""),e.has("active")&&(this.active?(this.addEventListener("focusout",this.handleRemoveActive),this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointercancel",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("focusout",this.handleRemoveActive),this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointercancel",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1);}}s$2([n$5({type:Boolean,reflect:!0})],ButtonBase.prototype,"active",2),s$2([n$5({type:String})],ButtonBase.prototype,"type",2),s$2([i$9(".anchor")],ButtonBase.prototype,"anchorElement",2);

const o$3=i$c`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)
);justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin:0;overflow:visible;-webkit-text-decoration:none;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;-webkit-user-select:none;user-select:none;vertical-align:top}:host(:focus){outline:none}:host([disabled]){cursor:default}:host:after{display:block;margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-1);transition:opacity var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,margin var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out}:host(.focus-visible):after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-2)}:host(.focus-visible):after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-2)}:host(:focus-visible):after{margin:calc(var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*-2)}#label{place-self:center;text-align:center}#label[hidden]{display:none}:host{--spectrum-button-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-button-border-radius:var(--spectrum-corner-radius-100);--spectrum-button-border-width:var(--spectrum-border-width-200);--spectrum-button-line-height:1.2;--spectrum-button-focus-ring-border-radius:calc(var(--spectrum-button-border-radius) + var(--spectrum-button-focus-ring-gap));--spectrum-button-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-button-focus-ring-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-button-focus-indicator-color:var(
--spectrum-focus-indicator-color
)}:host([size=s]){--spectrum-button-min-width:calc(var(--spectrum-component-height-75)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-75
);--spectrum-button-height:var(--spectrum-component-height-75);--spectrum-button-font-size:var(--spectrum-font-size-75);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-75) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(
--spectrum-component-pill-edge-to-visual-only-75
);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-75) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-75);--spectrum-button-top-to-text:var(--spectrum-button-top-to-text-small);--spectrum-button-bottom-to-text:var(
--spectrum-button-bottom-to-text-small
)}:host{--spectrum-button-min-width:calc(var(--spectrum-component-height-100)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-100
);--spectrum-button-height:var(--spectrum-component-height-100);--spectrum-button-font-size:var(--spectrum-font-size-100);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-100) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(
--spectrum-component-pill-edge-to-visual-only-100
);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-100) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-100);--spectrum-button-top-to-text:var(--spectrum-button-top-to-text-medium);--spectrum-button-bottom-to-text:var(
--spectrum-button-bottom-to-text-medium
)}:host([size=l]){--spectrum-button-min-width:calc(var(--spectrum-component-height-200)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-200
);--spectrum-button-height:var(--spectrum-component-height-200);--spectrum-button-font-size:var(--spectrum-font-size-200);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-200) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(
--spectrum-component-pill-edge-to-visual-only-200
);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-200) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-200);--spectrum-button-top-to-text:var(--spectrum-button-top-to-text-large);--spectrum-button-bottom-to-text:var(
--spectrum-button-bottom-to-text-large
)}:host([size=xl]){--spectrum-button-min-width:calc(var(--spectrum-component-height-300)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(
--spectrum-component-pill-edge-to-text-300
);--spectrum-button-height:var(--spectrum-component-height-300);--spectrum-button-font-size:var(--spectrum-font-size-300);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-300) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(
--spectrum-component-pill-edge-to-visual-only-300
);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-300) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-300);--spectrum-button-top-to-text:var(
--spectrum-button-top-to-text-extra-large
);--spectrum-button-bottom-to-text:var(
--spectrum-button-bottom-to-text-extra-large
)}:host{border-radius:var(
--mod-button-border-radius,var(--spectrum-button-border-radius)
);border-style:solid;border-width:var(
--mod-button-border-width,var(--spectrum-button-border-width)
);color:inherit;font-size:var(--mod-button-font-size,var(--spectrum-button-font-size));font-weight:var(--mod-bold-font-weight,var(--spectrum-bold-font-weight));gap:var(
--mod-button-padding-label-to-icon,var(--spectrum-button-padding-label-to-icon)
);margin-block:var(--mod-button-margin-block);margin-inline-end:var(--mod-button-margin-right);margin-inline-start:var(--mod-button-margin-left);min-block-size:var(--mod-button-height,var(--spectrum-button-height));min-inline-size:var(
--mod-button-min-width,var(--spectrum-button-min-width)
);padding-block:0;padding-inline:var(
--mod-button-edge-to-text,var(--spectrum-button-edge-to-text)
);position:relative}:host(:hover),:host([active]){box-shadow:none}::slotted([slot=icon]){color:inherit;margin-inline-start:calc(var(--mod-button-edge-to-visual, var(--spectrum-button-edge-to-visual)) - var(--mod-button-edge-to-text, var(--spectrum-button-edge-to-text)))}:host:after{border-radius:calc(var(--mod-button-border-radius, var(--spectrum-button-border-radius)) + var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap)))}:host .spectrum-Button--iconOnly{border-radius:50%;min-inline-size:unset;padding:calc(var(
--mod-button-edge-to-visual-only,
var(--spectrum-button-edge-to-visual-only)
) - var(--mod-button-border-width, var(--spectrum-button-border-width)))}:host .spectrum-Button--iconOnly ::slotted([slot=icon]){margin-inline-start:0}:host .spectrum-Button--iconOnly:after{border-radius:50%}#label{align-self:start;line-height:var(
--mod-button-line-height,var(--spectrum-button-line-height)
);padding-block-end:calc(var(--mod-button-bottom-to-text, var(--spectrum-button-bottom-to-text)) - var(--mod-button-border-width, var(--spectrum-button-border-width)));padding-block-start:calc(var(--mod-button-top-to-text, var(--spectrum-button-top-to-text)) - var(--mod-button-border-width, var(--spectrum-button-border-width)));white-space:nowrap}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)}:host{transition:border-color var(
--mod-button-animation-duration,var(--spectrum-button-animation-duration)
) ease-in-out}:host:after{border-radius:var(
--mod-button-focus-ring-border-radius,var(--spectrum-button-focus-ring-border-radius)
);content:"";inset:0;margin:calc((var(
--mod-button-focus-ring-gap,
var(--spectrum-button-focus-ring-gap)
) + var(
--mod-button-border-width,
var(--spectrum-button-border-width)
))*-1);pointer-events:none;position:absolute;transition:box-shadow var(
--mod-button-animation-duration,var(--spectrum-button-animation-duration)
) ease-in-out}:host(.focus-visible){box-shadow:none;outline:none}:host(.focus-visible){box-shadow:none;outline:none}:host(:focus-visible){box-shadow:none;outline:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--highcontrast-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)
)
)}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--highcontrast-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)
)
)}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) var(
--highcontrast-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(
--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color)
)
)
)}:host{background-color:var(
--highcontrast-button-background-color-default,var(
--mod-button-background-color-default,var(--spectrum-button-background-color-default)
)
);border-color:var(
--highcontrast-button-border-color-default,var(
--mod-button-border-color-default,var(--spectrum-button-border-color-default)
)
);color:var(
--highcontrast-button-content-color-default,var(
--mod-button-content-color-default,var(--spectrum-button-content-color-default)
)
)}:host(:hover){background-color:var(
--highcontrast-button-background-color-hover,var(
--mod-button-background-color-hover,var(--spectrum-button-background-color-hover)
)
);border-color:var(
--highcontrast-button-border-color-hover,var(
--mod-button-border-color-hover,var(--spectrum-button-border-color-hover)
)
);color:var(
--highcontrast-button-content-color-hover,var(
--mod-button-content-color-hover,var(--spectrum-button-content-color-hover)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-button-background-color-focus,var(
--mod-button-background-color-focus,var(--spectrum-button-background-color-focus)
)
);border-color:var(
--highcontrast-button-border-color-focus,var(
--mod-button-border-color-focus,var(--spectrum-button-border-color-focus)
)
);color:var(
--highcontrast-button-content-color-focus,var(
--mod-button-content-color-focus,var(--spectrum-button-content-color-focus)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-button-background-color-focus,var(
--mod-button-background-color-focus,var(--spectrum-button-background-color-focus)
)
);border-color:var(
--highcontrast-button-border-color-focus,var(
--mod-button-border-color-focus,var(--spectrum-button-border-color-focus)
)
);color:var(
--highcontrast-button-content-color-focus,var(
--mod-button-content-color-focus,var(--spectrum-button-content-color-focus)
)
)}:host(:focus-visible){background-color:var(
--highcontrast-button-background-color-focus,var(
--mod-button-background-color-focus,var(--spectrum-button-background-color-focus)
)
);border-color:var(
--highcontrast-button-border-color-focus,var(
--mod-button-border-color-focus,var(--spectrum-button-border-color-focus)
)
);color:var(
--highcontrast-button-content-color-focus,var(
--mod-button-content-color-focus,var(--spectrum-button-content-color-focus)
)
)}:host([active]){background-color:var(
--highcontrast-button-background-color-down,var(
--mod-button-background-color-down,var(--spectrum-button-background-color-down)
)
);border-color:var(
--highcontrast-button-border-color-down,var(
--mod-button-border-color-down,var(--spectrum-button-border-color-down)
)
);color:var(
--highcontrast-button-content-color-down,var(
--mod-button-content-color-down,var(--spectrum-button-content-color-down)
)
)}:host([disabled]){background-color:var(
--highcontrast-button-background-color-disabled,var(
--mod-button-background-color-disabled,var(--spectrum-button-background-color-disabled)
)
);border-color:var(
--highcontrast-button-border-color-disabled,var(
--mod-button-border-color-disabled,var(--spectrum-button-border-color-disabled)
)
);color:var(
--highcontrast-button-content-color-disabled,var(
--mod-button-content-color-disabled,var(--spectrum-button-content-color-disabled)
)
)}@media (forced-colors:active){:host{--highcontrast-button-content-color-disabled:GrayText;--highcontrast-button-border-color-disabled:GrayText}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) ButtonText;forced-color-adjust:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) ButtonText;forced-color-adjust:none}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness)
) ButtonText;forced-color-adjust:none}:host([variant=accent][treatment=fill]){--highcontrast-button-background-color-default:ButtonText;--highcontrast-button-content-color-default:ButtonFace;--highcontrast-button-background-color-disabled:ButtonFace;--highcontrast-button-background-color-hover:Highlight;--highcontrast-button-background-color-down:Highlight;--highcontrast-button-background-color-focus:Highlight;--highcontrast-button-content-color-hover:ButtonFace;--highcontrast-button-content-color-down:ButtonFace;--highcontrast-button-content-color-focus:ButtonFace}:host([variant=accent][treatment=fill]) #label{forced-color-adjust:none}}:host([static=white]){--spectrum-button-focus-indicator-color:var(
--mod-static-black-focus-indicator-color,var(--spectrum-static-black-focus-indicator-color)
)}:host([static=black]){--spectrum-button-focus-indicator-color:var(
--mod-static-black-focus-indicator-color,var(--spectrum-static-black-focus-indicator-color)
)}:host{--spectrum-button-background-color-default:var(
--system-spectrum-button-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-content-color-disabled
)}:host([variant=accent]){--spectrum-button-background-color-default:var(
--system-spectrum-button-accent-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-accent-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-accent-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-accent-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-accent-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-accent-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-accent-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-accent-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-accent-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-accent-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-accent-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-accent-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-accent-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-accent-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-accent-content-color-disabled
)}:host([variant=accent][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-accent-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-accent-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-accent-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-accent-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-accent-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-accent-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-accent-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-accent-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-accent-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-accent-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-accent-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-accent-outline-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-accent-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-accent-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-accent-outline-content-color-disabled
)}:host([variant=negative]){--spectrum-button-background-color-default:var(
--system-spectrum-button-negative-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-negative-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-negative-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-negative-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-negative-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-negative-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-negative-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-negative-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-negative-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-negative-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-negative-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-negative-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-negative-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-negative-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-negative-content-color-disabled
)}:host([variant=negative][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-negative-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-negative-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-negative-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-negative-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-negative-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-negative-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-negative-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-negative-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-negative-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-negative-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-negative-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-negative-outline-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-negative-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-negative-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-negative-outline-content-color-disabled
)}:host([variant=primary]){--spectrum-button-background-color-default:var(
--system-spectrum-button-primary-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-primary-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-primary-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-primary-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-primary-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-primary-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-primary-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-primary-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-primary-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-primary-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-primary-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-primary-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-primary-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-primary-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-primary-content-color-disabled
)}:host([variant=primary][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-primary-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-primary-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-primary-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-primary-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-primary-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-primary-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-primary-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-primary-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-primary-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-primary-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-primary-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-primary-outline-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-primary-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-primary-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-primary-outline-content-color-disabled
)}:host([variant=secondary]){--spectrum-button-background-color-default:var(
--system-spectrum-button-secondary-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-secondary-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-secondary-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-secondary-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-secondary-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-secondary-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-secondary-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-secondary-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-secondary-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-secondary-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-secondary-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-secondary-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-secondary-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-secondary-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-secondary-content-color-disabled
)}:host([variant=secondary][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-secondary-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-secondary-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-secondary-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-secondary-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-secondary-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-secondary-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-secondary-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-secondary-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-secondary-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-secondary-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-secondary-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-secondary-outline-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-secondary-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-secondary-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-secondary-outline-content-color-disabled
)}:host([quiet]){--spectrum-button-background-color-default:var(
--system-spectrum-button-quiet-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-quiet-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-quiet-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-quiet-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-quiet-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-quiet-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-quiet-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-quiet-border-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-quiet-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-quiet-border-color-disabled
)}:host([selected]){--spectrum-button-background-color-default:var(
--system-spectrum-button-selected-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-selected-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-selected-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-selected-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-selected-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-selected-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-selected-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-selected-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-selected-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-selected-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-selected-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-selected-content-color-focus
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-selected-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-selected-border-color-disabled
)}:host([selected][emphasized]){--spectrum-button-background-color-default:var(
--system-spectrum-button-selected-emphasized-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-selected-emphasized-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-selected-emphasized-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-selected-emphasized-background-color-focus
)}:host([static=black][quiet]){--spectrum-button-border-color-default:var(
--system-spectrum-button-staticblack-quiet-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticblack-quiet-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticblack-quiet-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticblack-quiet-border-color-focus
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticblack-quiet-border-color-disabled
)}:host([static=white][quiet]){--spectrum-button-border-color-default:var(
--system-spectrum-button-staticwhite-quiet-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticwhite-quiet-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticwhite-quiet-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticwhite-quiet-border-color-focus
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-quiet-border-color-disabled
)}:host([static=white]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticwhite-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticwhite-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticwhite-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticwhite-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticwhite-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticwhite-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticwhite-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticwhite-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticwhite-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticwhite-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticwhite-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticwhite-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticwhite-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticwhite-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticwhite-content-color-disabled
)}:host([static=white][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticwhite-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticwhite-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticwhite-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticwhite-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticwhite-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticwhite-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticwhite-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticwhite-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticwhite-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticwhite-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticwhite-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticwhite-outline-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticwhite-outline-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticwhite-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticwhite-outline-content-color-disabled
)}:host([static=white][selected]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticwhite-selected-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticwhite-selected-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticwhite-selected-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticwhite-selected-background-color-focus
);--spectrum-button-content-color-default:var(
--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-default)
);--spectrum-button-content-color-hover:var(
--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-hover)
);--spectrum-button-content-color-down:var(
--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-down)
);--spectrum-button-content-color-focus:var(
--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-focus)
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticwhite-selected-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-selected-border-color-disabled
)}:host([static=white][variant=secondary]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticwhite-secondary-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticwhite-secondary-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticwhite-secondary-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticwhite-secondary-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticwhite-secondary-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticwhite-secondary-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticwhite-secondary-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticwhite-secondary-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticwhite-secondary-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticwhite-secondary-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticwhite-secondary-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticwhite-secondary-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticwhite-secondary-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-content-color-disabled
)}:host([static=white][variant=secondary][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticwhite-secondary-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticwhite-secondary-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticwhite-secondary-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticwhite-secondary-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticwhite-secondary-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticwhite-secondary-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticwhite-secondary-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticwhite-secondary-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticwhite-secondary-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticwhite-secondary-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticwhite-secondary-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticwhite-secondary-outline-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticwhite-secondary-outline-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticwhite-secondary-outline-content-color-disabled
)}:host([static=black]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticblack-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticblack-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticblack-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticblack-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticblack-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticblack-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticblack-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticblack-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticblack-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticblack-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticblack-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticblack-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticblack-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticblack-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticblack-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticblack-content-color-disabled
)}:host([static=black][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticblack-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticblack-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticblack-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticblack-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticblack-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticblack-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticblack-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticblack-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticblack-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticblack-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticblack-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticblack-outline-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticblack-outline-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticblack-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticblack-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticblack-outline-content-color-disabled
)}:host([static=black][variant=secondary]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticblack-secondary-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticblack-secondary-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticblack-secondary-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticblack-secondary-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticblack-secondary-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticblack-secondary-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticblack-secondary-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticblack-secondary-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticblack-secondary-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticblack-secondary-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticblack-secondary-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticblack-secondary-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticblack-secondary-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticblack-secondary-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticblack-secondary-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticblack-secondary-content-color-disabled
)}:host([static=black][variant=secondary][treatment=outline]){--spectrum-button-background-color-default:var(
--system-spectrum-button-staticblack-secondary-outline-background-color-default
);--spectrum-button-background-color-hover:var(
--system-spectrum-button-staticblack-secondary-outline-background-color-hover
);--spectrum-button-background-color-down:var(
--system-spectrum-button-staticblack-secondary-outline-background-color-down
);--spectrum-button-background-color-focus:var(
--system-spectrum-button-staticblack-secondary-outline-background-color-focus
);--spectrum-button-border-color-default:var(
--system-spectrum-button-staticblack-secondary-outline-border-color-default
);--spectrum-button-border-color-hover:var(
--system-spectrum-button-staticblack-secondary-outline-border-color-hover
);--spectrum-button-border-color-down:var(
--system-spectrum-button-staticblack-secondary-outline-border-color-down
);--spectrum-button-border-color-focus:var(
--system-spectrum-button-staticblack-secondary-outline-border-color-focus
);--spectrum-button-content-color-default:var(
--system-spectrum-button-staticblack-secondary-outline-content-color-default
);--spectrum-button-content-color-hover:var(
--system-spectrum-button-staticblack-secondary-outline-content-color-hover
);--spectrum-button-content-color-down:var(
--system-spectrum-button-staticblack-secondary-outline-content-color-down
);--spectrum-button-content-color-focus:var(
--system-spectrum-button-staticblack-secondary-outline-content-color-focus
);--spectrum-button-focus-indicator-color:var(
--system-spectrum-button-staticblack-secondary-outline-focus-indicator-color
);--spectrum-button-background-color-disabled:var(
--system-spectrum-button-staticblack-secondary-outline-background-color-disabled
);--spectrum-button-border-color-disabled:var(
--system-spectrum-button-staticblack-secondary-outline-border-color-disabled
);--spectrum-button-content-color-disabled:var(
--system-spectrum-button-staticblack-secondary-outline-content-color-disabled
)}@media (forced-colors:active){:host([treatment][disabled]){border-color:graytext}:host([treatment]:not([disabled]):hover){border-color:highlight}}
`;var d$4 = o$3;

var u$2=Object.defineProperty;var l$1=Object.getOwnPropertyDescriptor;var i$5=(s,a,t,r)=>{for(var e=r>1?void 0:r?l$1(a,t):a,o=s.length-1,c;o>=0;o--)(c=s[o])&&(e=(r?c(a,t,e):c(e))||e);return r&&e&&u$2(a,t,e),e};const VALID_VARIANTS=["accent","primary","secondary","negative","white","black"];class Button extends SizedMixin(ButtonBase,{noDefaultSize:!0}){constructor(){super(...arguments);this._variant="accent";this.treatment="fill";}static get styles(){return [...super.styles,d$4]}get variant(){return this._variant}set variant(t){if(t!==this.variant){switch(this.requestUpdate("variant",this.variant),t){case"cta":this._variant="accent";break;case"overBackground":this.removeAttribute("variant"),this.static="white",this.treatment="outline";return;case"white":case"black":this.static=t,this.removeAttribute("variant");return;case null:return;default:VALID_VARIANTS.includes(t)?this._variant=t:this._variant="accent";break}this.setAttribute("variant",this.variant);}}set quiet(t){this.treatment=t?"outline":"fill";}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("variant")||this.setAttribute("variant",this.variant);}}i$5([n$5()],Button.prototype,"variant",1),i$5([n$5({type:String,reflect:!0})],Button.prototype,"static",2),i$5([n$5({reflect:!0})],Button.prototype,"treatment",2),i$5([n$5({type:Boolean})],Button.prototype,"quiet",1);

function defineElement(e,n){customElements.define(e,n);}

defineElement("sp-button",Button);

const s$1=i$c`
:host{fill:currentColor;color:var(--mod-icon-color,inherit);display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(--spectrum-icon-size-s);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(--spectrum-icon-size-m);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(--spectrum-icon-size-l);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(--spectrum-icon-size-xl);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(--spectrum-icon-size-xxl);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{color:inherit;height:100%;vertical-align:top;width:100%}@media (forced-colors:active){::slotted(*),img,svg{forced-color-adjust:auto}}
`;var c$1 = s$1;

var a$1=Object.defineProperty;var d$3=Object.getOwnPropertyDescriptor;var p$4=(i,r,t,l)=>{for(var e=l>1?void 0:l?d$3(r,t):r,s=i.length-1,o;s>=0;s--)(o=i[s])&&(e=(l?o(r,t,e):o(e))||e);return l&&e&&a$1(r,t,e),e};class IconBase extends SpectrumElement{constructor(){super(...arguments);this.label="";}static get styles(){return [c$1]}update(t){t.has("label")&&(this.label?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")),super.update(t);}render(){return x`
            <slot></slot>
        `}}p$4([n$5()],IconBase.prototype,"label",2),p$4([n$5({reflect:!0})],IconBase.prototype,"size",2);

class IconsetRegistry{constructor(){this.iconsetMap=new Map;}static getInstance(){return IconsetRegistry.instance||(IconsetRegistry.instance=new IconsetRegistry),IconsetRegistry.instance}addIconset(e,t){this.iconsetMap.set(e,t);const n=new CustomEvent("sp-iconset-added",{bubbles:!0,composed:!0,detail:{name:e,iconset:t}});setTimeout(()=>window.dispatchEvent(n),0);}removeIconset(e){this.iconsetMap.delete(e);const t=new CustomEvent("sp-iconset-removed",{bubbles:!0,composed:!0,detail:{name:e}});setTimeout(()=>window.dispatchEvent(t),0);}getIconset(e){return this.iconsetMap.get(e)}}

var p$3=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var o$2=(s,r,e,t)=>{for(var i=t>1?void 0:t?l(r,e):r,n=s.length-1,a;n>=0;n--)(a=s[n])&&(i=(t?a(r,e,i):a(i))||i);return t&&i&&p$3(r,e,i),i};class Icon extends IconBase{constructor(){super(...arguments);this.iconsetListener=e=>{if(!this.name)return;const t=this.parseIcon(this.name);e.detail.name===t.iconset&&(this.updateIconPromise=this.updateIcon());};}connectedCallback(){super.connectedCallback(),window.addEventListener("sp-iconset-added",this.iconsetListener);}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("sp-iconset-added",this.iconsetListener);}firstUpdated(){this.updateIconPromise=this.updateIcon();}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.updateIconPromise=this.updateIcon();}announceIconImageSrcError(){this.dispatchEvent(new Event("error",{cancelable:!1,bubbles:!1,composed:!1}));}render(){return this.name?x`
                <div id="container"></div>
            `:this.src?x`
                <img
                    src="${this.src}"
                    alt=${l$4(this.label)}
                    @error=${this.announceIconImageSrcError}
                />
            `:super.render()}async updateIcon(){if(this.updateIconPromise&&await this.updateIconPromise,!this.name)return Promise.resolve();const e=this.parseIcon(this.name),t=IconsetRegistry.getInstance().getIconset(e.iconset);return !t||!this.iconContainer?Promise.resolve():(this.iconContainer.innerHTML="",t.applyIconToElement(this.iconContainer,e.icon,this.size||"",this.label?this.label:""))}parseIcon(e){const t=e.split(":");let i="default",n=e;return t.length>1&&(i=t[0],n=t[1]),{iconset:i,icon:n}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.updateIconPromise,e}}o$2([n$5()],Icon.prototype,"src",2),o$2([n$5()],Icon.prototype,"name",2),o$2([i$9("#container")],Icon.prototype,"iconContainer",2);

let t$2;const tag$1=function(e,...a){return t$2?t$2(e,...a):a.reduce((r,p,l)=>r+p+e[l+1],e[0])},setCustomTemplateLiteralTag$1=e=>{t$2=e;};

const o$1=i$c`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)
);justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin:0;overflow:visible;-webkit-text-decoration:none;text-decoration:none;text-transform:none;transition:background var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,border-color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,color var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out;-webkit-user-select:none;user-select:none;vertical-align:top}:host(:focus){outline:none}:host([disabled]){cursor:default}::slotted([slot=icon]){max-block-size:100%}#label{place-self:center;text-align:center}#label:empty{display:none}:host{--spectrum-actionbutton-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-actionbutton-border-radius:var(--spectrum-corner-radius-100);--spectrum-actionbutton-border-width:var(--spectrum-border-width-100);--spectrum-actionbutton-content-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-actionbutton-focus-indicator-gap:var(
--spectrum-focus-indicator-gap
);--spectrum-actionbutton-focus-indicator-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-actionbutton-focus-indicator-color:var(
--spectrum-focus-indicator-color
);--spectrum-actionbutton-focus-indicator-border-radius:calc(var(--spectrum-actionbutton-border-radius) + var(--spectrum-actionbutton-focus-indicator-gap))}:host([selected]){--mod-actionbutton-background-color-default:var(
--mod-actionbutton-background-color-default-selected,var(--spectrum-neutral-background-color-selected-default)
);--mod-actionbutton-background-color-hover:var(
--mod-actionbutton-background-color-hover-selected,var(--spectrum-neutral-background-color-selected-hover)
);--mod-actionbutton-background-color-down:var(
--mod-actionbutton-background-color-down-selected,var(--spectrum-neutral-background-color-selected-down)
);--mod-actionbutton-background-color-focus:var(
--mod-actionbutton-background-color-focus-selected,var(--spectrum-neutral-background-color-selected-key-focus)
);--mod-actionbutton-content-color-default:var(
--mod-actionbutton-content-color-default-selected,var(--spectrum-gray-50)
);--mod-actionbutton-content-color-hover:var(
--mod-actionbutton-content-color-hover-selected,var(--spectrum-gray-50)
);--mod-actionbutton-content-color-down:var(
--mod-actionbutton-content-color-down-selected,var(--spectrum-gray-50)
);--mod-actionbutton-content-color-focus:var(
--mod-actionbutton-content-color-focus-selected,var(--spectrum-gray-50)
)}:host([selected][emphasized]){--mod-actionbutton-background-color-default:var(
--mod-actionbutton-background-color-default-selected-emphasized,var(--spectrum-accent-background-color-default)
);--mod-actionbutton-background-color-hover:var(
--mod-actionbutton-background-color-hover-selected-emphasized,var(--spectrum-accent-background-color-hover)
);--mod-actionbutton-background-color-down:var(
--mod-actionbutton-background-color-down-selected-emphasized,var(--spectrum-accent-background-color-down)
);--mod-actionbutton-background-color-focus:var(
--mod-actionbutton-background-color-focus-selected-emphasized,var(--spectrum-accent-background-color-key-focus)
);--mod-actionbutton-content-color-default:var(
--mod-actionbutton-content-color-default-selected-emphasized,var(--spectrum-white)
);--mod-actionbutton-content-color-hover:var(
--mod-actionbutton-content-color-hover-selected-emphasized,var(--spectrum-white)
);--mod-actionbutton-content-color-down:var(
--mod-actionbutton-content-color-down-selected-emphasized,var(--spectrum-white)
);--mod-actionbutton-content-color-focus:var(
--mod-actionbutton-content-color-focus-selected-emphasized,var(--spectrum-white)
)}:host([size=xs]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-75)*2 + var(--spectrum-workflow-icon-size-75));--spectrum-actionbutton-height:var(--spectrum-component-height-50);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-50);--spectrum-actionbutton-font-size:var(--spectrum-font-size-50);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-50);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-extra-small
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-50) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-50) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-50) - var(--spectrum-actionbutton-border-width))}:host([size=s]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-75)*2 + var(--spectrum-workflow-icon-size-75));--spectrum-actionbutton-height:var(--spectrum-component-height-75);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-actionbutton-font-size:var(--spectrum-font-size-75);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-small
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-75) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-75) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-75) - var(--spectrum-actionbutton-border-width))}:host{--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-100)*2 + var(--spectrum-workflow-icon-size-100));--spectrum-actionbutton-height:var(--spectrum-component-height-100);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-actionbutton-font-size:var(--spectrum-font-size-100);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-medium
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-100) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-100) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-100) - var(--spectrum-actionbutton-border-width))}:host([size=l]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-200)*2 + var(--spectrum-workflow-icon-size-200));--spectrum-actionbutton-height:var(--spectrum-component-height-200);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-actionbutton-font-size:var(--spectrum-font-size-200);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-large
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-200) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-200) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-200) - var(--spectrum-actionbutton-border-width))}:host([size=xl]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-300)*2 + var(--spectrum-workflow-icon-size-300));--spectrum-actionbutton-height:var(--spectrum-component-height-300);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-actionbutton-font-size:var(--spectrum-font-size-300);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-300);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-extra-large
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-300) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-300) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-300) - var(--spectrum-actionbutton-border-width))}@media (forced-colors:active){:host{--highcontrast-actionbutton-focus-indicator-color:ButtonText}:host:after{forced-color-adjust:none}:host([selected]){--highcontrast-actionbutton-background-color-default:Highlight;--highcontrast-actionbutton-background-color-hover:Highlight;--highcontrast-actionbutton-background-color-focus:Highlight;--highcontrast-actionbutton-background-color-down:Highlight;--highcontrast-actionbutton-background-color-disabled:ButtonFace;--highcontrast-actionbutton-border-color-default:HighlightText;--highcontrast-actionbutton-border-color-hover:HighlightText;--highcontrast-actionbutton-border-color-focus:HighlightText;--highcontrast-actionbutton-border-color-down:HighlightText;--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-default:HighlightText;--highcontrast-actionbutton-content-color-hover:HighlightText;--highcontrast-actionbutton-content-color-focus:HighlightText;--highcontrast-actionbutton-content-color-down:HighlightText;--highcontrast-actionbutton-content-color-disabled:GrayText}:host([selected]) #label,:host([selected]) .hold-affordance,:host([selected]) ::slotted([slot=icon]){forced-color-adjust:none}}:host{background-color:var(
--highcontrast-actionbutton-background-color-default,var(
--mod-actionbutton-background-color-default,var(--spectrum-actionbutton-background-color-default)
)
);border-color:var(
--highcontrast-actionbutton-border-color-default,var(
--mod-actionbutton-border-color-default,var(--spectrum-actionbutton-border-color-default)
)
);border-radius:var(
--mod-actionbutton-border-radius,var(--spectrum-actionbutton-border-radius)
);border-width:var(
--mod-actionbutton-border-width,var(--spectrum-actionbutton-border-width)
);color:var(
--highcontrast-actionbutton-content-color-default,var(
--mod-actionbutton-content-color-default,var(--spectrum-actionbutton-content-color-default)
)
);gap:calc(var(
--mod-actionbutton-text-to-visual,
var(--spectrum-actionbutton-text-to-visual)
) + var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
));height:var(--mod-actionbutton-height,var(--spectrum-actionbutton-height));min-inline-size:var(
--mod-actionbutton-min-width,var(--spectrum-actionbutton-min-width)
);padding-inline:var(
--mod-actionbutton-edge-to-text,var(--spectrum-actionbutton-edge-to-text)
);position:relative}:host(:hover){background-color:var(
--highcontrast-actionbutton-background-color-hover,var(
--mod-actionbutton-background-color-hover,var(--spectrum-actionbutton-background-color-hover)
)
);border-color:var(
--highcontrast-actionbutton-border-color-hover,var(
--mod-actionbutton-border-color-hover,var(--spectrum-actionbutton-border-color-hover)
)
);color:var(
--highcontrast-actionbutton-content-color-hover,var(
--mod-actionbutton-content-color-hover,var(--spectrum-actionbutton-content-color-hover)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host(:focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host([active]){background-color:var(
--highcontrast-actionbutton-background-color-down,var(
--mod-actionbutton-background-color-down,var(--spectrum-actionbutton-background-color-down)
)
);border-color:var(
--highcontrast-actionbutton-border-color-down,var(
--mod-actionbutton-border-color-down,var(--spectrum-actionbutton-border-color-down)
)
);color:var(
--highcontrast-actionbutton-content-color-down,var(
--mod-actionbutton-content-color-down,var(--spectrum-actionbutton-content-color-down)
)
)}:host([disabled]){background-color:var(
--highcontrast-actionbutton-background-color-disabled,var(
--mod-actionbutton-background-color-disabled,var(--spectrum-actionbutton-background-color-disabled)
)
);border-color:var(
--highcontrast-actionbutton-border-color-disabled,var(
--mod-actionbutton-border-color-disabled,var(--spectrum-actionbutton-border-color-disabled)
)
);color:var(
--highcontrast-actionbutton-content-color-disabled,var(
--mod-actionbutton-content-color-disabled,var(--spectrum-actionbutton-content-color-disabled)
)
)}::slotted([slot=icon]){color:inherit;height:var(
--mod-actionbutton-icon-size,var(--spectrum-actionbutton-icon-size)
);margin-inline-end:calc(var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
) - var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
));margin-inline-start:calc(var(
--mod-actionbutton-edge-to-visual,
var(--spectrum-actionbutton-edge-to-visual)
) - var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
));width:var(
--mod-actionbutton-icon-size,var(--spectrum-actionbutton-icon-size)
)}.hold-affordance+::slotted([slot=icon]),[icon-only]::slotted([slot=icon]){margin-inline-start:calc(var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
) - var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
))}#label{color:var(--mod-actionbutton-label-color,inherit);font-size:var(
--mod-actionbutton-font-size,var(--spectrum-actionbutton-font-size)
);overflow:hidden;pointer-events:none;text-overflow:ellipsis;white-space:nowrap}:host([dir=rtl]) .hold-affordance{transform:matrix(-1,0,0,1,0,0)}.hold-affordance{color:inherit;inset-block-end:calc(var(
--mod-actionbutton-edge-to-hold-icon,
var(--spectrum-actionbutton-edge-to-hold-icon)
) - var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
));inset-inline-end:calc(var(
--mod-actionbutton-edge-to-hold-icon,
var(--spectrum-actionbutton-edge-to-hold-icon)
) - var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
));position:absolute}:host{transition:border-color var(
--mod-actionbutton-animation-duration,var(--spectrum-actionbutton-animation-duration)
) ease-in-out}:host:after{border-radius:var(
--mod-actionbutton-focus-indicator-border-radius,var(--spectrum-actionbutton-focus-indicator-border-radius)
);content:"";inset:0;margin:calc((var(
--mod-actionbutton-focus-indicator-gap,
var(--spectrum-actionbutton-focus-indicator-gap)
) + var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
))*-1);pointer-events:none;position:absolute;transition:box-shadow var(
--mod-actionbutton-animation-duration,var(--spectrum-actionbutton-animation-duration)
) ease-in-out}:host(.focus-visible){box-shadow:none;outline:none}:host(.focus-visible){box-shadow:none;outline:none}:host(:focus-visible){box-shadow:none;outline:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-indicator-thickness,var(--spectrum-actionbutton-focus-indicator-thickness)
) var(
--highcontrast-actionbutton-focus-indicator-color,var(
--mod-actionbutton-focus-indicator-color,var(--spectrum-actionbutton-focus-indicator-color)
)
)}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-indicator-thickness,var(--spectrum-actionbutton-focus-indicator-thickness)
) var(
--highcontrast-actionbutton-focus-indicator-color,var(
--mod-actionbutton-focus-indicator-color,var(--spectrum-actionbutton-focus-indicator-color)
)
)}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-indicator-thickness,var(--spectrum-actionbutton-focus-indicator-thickness)
) var(
--highcontrast-actionbutton-focus-indicator-color,var(
--mod-actionbutton-focus-indicator-color,var(--spectrum-actionbutton-focus-indicator-color)
)
)}:host{--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-border-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-content-color-disabled
)}:host([quiet]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-quiet-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-quiet-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-quiet-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-quiet-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-quiet-border-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-quiet-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-quiet-border-color-disabled
)}:host([selected]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-selected-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-selected-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-selected-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-selected-border-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-selected-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-selected-border-color-disabled
)}:host([static=black][quiet]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled
)}:host([static=white][quiet]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled
)}:host([static=black]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticblack-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticblack-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticblack-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticblack-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticblack-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticblack-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticblack-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticblack-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-staticblack-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-staticblack-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-staticblack-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-staticblack-content-color-focus
);--spectrum-actionbutton-focus-indicator-color:var(
--system-spectrum-actionbutton-staticblack-focus-indicator-color
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticblack-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-staticblack-content-color-disabled
)}:host([static=black][selected]){--mod-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-default
);--mod-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-hover
);--mod-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-down
);--mod-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-focus
);--mod-actionbutton-content-color-default:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-default
)
);--mod-actionbutton-content-color-hover:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-hover
)
);--mod-actionbutton-content-color-down:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-down
)
);--mod-actionbutton-content-color-focus:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-focus
)
);--mod-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-disabled
);--mod-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-border-color-disabled
)}:host([static=white]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticwhite-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticwhite-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticwhite-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticwhite-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticwhite-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticwhite-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticwhite-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticwhite-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-staticwhite-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-staticwhite-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-staticwhite-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-staticwhite-content-color-focus
);--spectrum-actionbutton-focus-indicator-color:var(
--system-spectrum-actionbutton-staticwhite-focus-indicator-color
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-content-color-disabled
)}:host([static=white][selected]){--mod-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-default
);--mod-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-hover
);--mod-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-down
);--mod-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-focus
);--mod-actionbutton-content-color-default:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-default
)
);--mod-actionbutton-content-color-hover:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-hover
)
);--mod-actionbutton-content-color-down:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-down
)
);--mod-actionbutton-content-color-focus:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-focus
)
);--mod-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-disabled
);--mod-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-border-color-disabled
)}::slotted([slot=icon]){flex-shrink:0}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);pointer-events:none!important;text-align:var(--spectrum-actionbutton-label-text-align)}:host([size=xs]){min-width:var(--spectrum-actionbutton-height,0)}@media (forced-colors:active){:host{--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-disabled:GrayText}}
`;var v = o$1;

const i$4=i$c`
.spectrum-UIIcon-CornerTriangle75{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
)}.spectrum-UIIcon-CornerTriangle100{height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);width:var(--spectrum-alias-ui-icon-cornertriangle-size-100)}.spectrum-UIIcon-CornerTriangle200{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
)}.spectrum-UIIcon-CornerTriangle300{height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);width:var(--spectrum-alias-ui-icon-cornertriangle-size-300)}
`;var b$2 = i$4;

const CornerTriangle300Icon=({width:e=24,height:r=24,title:t="Corner Triangle300"}={})=>tag$1`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${t}
    width=${e}
    height=${r}
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`;

class IconCornerTriangle300 extends IconBase{render(){return setCustomTemplateLiteralTag$1(x),CornerTriangle300Icon()}}

defineElement("sp-icon-corner-triangle300",IconCornerTriangle300);

var p$2=Object.defineProperty;var u$1=Object.getOwnPropertyDescriptor;var i$3=(a,o,e,t)=>{for(var r=t>1?void 0:t?u$1(o,e):o,n=a.length-1,l;n>=0;n--)(l=a[n])&&(r=(t?l(o,e,r):l(r))||r);return t&&r&&p$2(o,e,r),r};const m$2={xs:"spectrum-UIIcon-CornerTriangle75",s:"spectrum-UIIcon-CornerTriangle75",m:"spectrum-UIIcon-CornerTriangle100",l:"spectrum-UIIcon-CornerTriangle200",xl:"spectrum-UIIcon-CornerTriangle300"};const LONGPRESS_DURATION=300;let d$2;class ActionButton extends SizedMixin(ButtonBase,{validSizes:["xs","s","m","l","xl"],noDefaultSize:!0}){constructor(){super();this.emphasized=!1;this.holdAffordance=!1;this.quiet=!1;this.role="button";this.selected=!1;this.toggles=!1;this._value="";this.onClick=()=>{if(!this.toggles)return;this.selected=!this.selected,this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0}))||(this.selected=!this.selected);};this.addEventListener("click",this.onClick);}static get styles(){return [...super.styles,v,b$2]}get value(){return this._value||this.itemText}set value(e){e!==this._value&&(this._value=e||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"));}get itemText(){return (this.textContent||"").trim()}handlePointerdownHoldAffordance(e){e.button===0&&(this.addEventListener("pointerup",this.handlePointerupHoldAffordance),this.addEventListener("pointercancel",this.handlePointerupHoldAffordance),d$2=setTimeout(()=>{this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}));},LONGPRESS_DURATION));}handlePointerupHoldAffordance(){clearTimeout(d$2),this.removeEventListener("pointerup",this.handlePointerupHoldAffordance),this.removeEventListener("pointercancel",this.handlePointerupHoldAffordance);}handleKeydown(e){if(!this.holdAffordance)return super.handleKeydown(e);const{code:t,altKey:r}=e;(t==="Space"||r&&t==="ArrowDown")&&(e.preventDefault(),t==="ArrowDown"&&(e.stopPropagation(),e.stopImmediatePropagation()),this.addEventListener("keyup",this.handleKeyup),this.active=!0);}handleKeyup(e){if(!this.holdAffordance)return super.handleKeyup(e);const{code:t,altKey:r}=e;(t==="Space"||r&&t==="ArrowDown")&&(e.stopPropagation(),this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),this.active=!1);}get buttonContent(){const e=super.buttonContent;return this.holdAffordance&&e.unshift(x`
                <sp-icon-corner-triangle300
                    class="hold-affordance ${m$2[this.size]}"
                ></sp-icon-corner-triangle300>
            `),e}updated(e){super.updated(e);const t=this.role==="button",r=t&&(this.selected||this.toggles)&&!(this.hasAttribute("aria-haspopup")&&this.hasAttribute("aria-expanded"));(e.has("selected")||e.has("role"))&&(r?this.setAttribute("aria-pressed",this.selected?"true":"false"):(this.removeAttribute("aria-pressed"),t&&this.toggles&&this.hasAttribute("aria-expanded")&&this.setAttribute("aria-expanded",this.selected?"true":"false"))),e.has("variant")&&(this.variant||typeof e.get("variant"))&&(this.static=this.variant),e.has("holdAffordance")&&(this.holdAffordance?this.addEventListener("pointerdown",this.handlePointerdownHoldAffordance):(this.removeEventListener("pointerdown",this.handlePointerdownHoldAffordance),this.handlePointerupHoldAffordance()));}}i$3([n$5({type:Boolean,reflect:!0})],ActionButton.prototype,"emphasized",2),i$3([n$5({type:Boolean,reflect:!0,attribute:"hold-affordance"})],ActionButton.prototype,"holdAffordance",2),i$3([n$5({type:Boolean,reflect:!0})],ActionButton.prototype,"quiet",2),i$3([n$5({reflect:!0})],ActionButton.prototype,"role",2),i$3([n$5({type:Boolean,reflect:!0})],ActionButton.prototype,"selected",2),i$3([n$5({type:Boolean,reflect:!0})],ActionButton.prototype,"toggles",2),i$3([n$5({reflect:!0})],ActionButton.prototype,"static",2),i$3([n$5({reflect:!0})],ActionButton.prototype,"variant",2),i$3([n$5({type:String})],ActionButton.prototype,"value",1);

defineElement("sp-action-button",ActionButton);

defineElement("sp-icon",Icon);

let t$1;const tag=function(e,...a){return t$1?t$1(e,...a):a.reduce((r,p,l)=>r+p+e[l+1],e[0])},setCustomTemplateLiteralTag=e=>{t$1=e;};

const DownloadIcon=({width:a=24,height:t=24,hidden:e=!1,title:l="Download"}={})=>tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${a}
    height=${t}
    viewBox="0 0 36 36"
    aria-hidden=${e?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${l}
  >
    <path
      d="M33 24h-2a1 1 0 0 0-1 1v5H6v-5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"
    />
    <path
      d="M17.65 26.856a.5.5 0 0 0 .7 0l7.446-7.525a.785.785 0 0 0 .204-.526.8.8 0 0 0-.802-.805H20V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v15h-5.198a.8.8 0 0 0-.802.805.785.785 0 0 0 .204.526Z"
    />
  </svg>`;

class IconDownload extends IconBase{render(){return setCustomTemplateLiteralTag(x),DownloadIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-download",IconDownload);

const ImageIcon=({width:e=24,height:a=24,hidden:t=!1,title:r="Image"}={})=>tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${a}
    viewBox="0 0 36 36"
    width=${e}
    aria-hidden=${t?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="M33 6H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-1 19.373L26.728 20.1a2 2 0 0 0-2.828 0l-3.072 3.072-7.556-7.557a2 2 0 0 0-2.828 0L4 22.059V8h28Z"
    />
    <circle cx="26.7" cy="13.3" r="2.7" />
  </svg>`;

class IconImage extends IconBase{render(){return setCustomTemplateLiteralTag(x),ImageIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-image",IconImage);

const FullScreenIcon=({width:a=24,height:e=24,hidden:t=!1,title:r="Full Screen"}={})=>tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${a}
    aria-hidden=${t?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="M32 24.5V30h-5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H34v-7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4 30v-5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V32h7.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM26 4.5v1a.5.5 0 0 0 .5.5H32v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4h-7.5a.5.5 0 0 0-.5.5ZM4 6h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5Z"
    />
    <rect height="16" rx=".5" ry=".5" width="20" x="8" y="10" />
  </svg>`;

class IconFullScreen extends IconBase{render(){return setCustomTemplateLiteralTag(x),FullScreenIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-full-screen",IconFullScreen);

const FullScreenExitIcon=({width:a=24,height:e=24,hidden:t=!1,title:r="Full Screen Exit"}={})=>tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${a}
    aria-hidden=${t?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="M6 2.5V8H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H8V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM30 8V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V10h7.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM0 26.5v1a.5.5 0 0 0 .5.5H6v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V26H.5a.5.5 0 0 0-.5.5ZM30 28h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H28v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5Z"
    />
    <rect height="16" rx=".5" ry=".5" width="20" x="8" y="10" />
  </svg>`;

class IconFullScreenExit extends IconBase{render(){return setCustomTemplateLiteralTag(x),FullScreenExitIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-full-screen-exit",IconFullScreenExit);

const getLabelFromSlot=(r,l)=>{if(r)return null;const t=l.assignedNodes().reduce((e,n)=>n.textContent?e+n.textContent:e,"");return t?t.trim():null};

const e$1=i$c`
.fill-submask-2{animation:spectrum-fill-mask-2 1s linear infinite}@keyframes spectrum-fill-mask-1{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0)}11.86%{transform:rotate(0)}13.56%{transform:rotate(0)}15.25%{transform:rotate(0)}16.95%{transform:rotate(0)}18.64%{transform:rotate(0)}20.34%{transform:rotate(0)}22.03%{transform:rotate(0)}23.73%{transform:rotate(0)}25.42%{transform:rotate(0)}27.12%{transform:rotate(0)}28.81%{transform:rotate(0)}30.51%{transform:rotate(0)}32.2%{transform:rotate(0)}33.9%{transform:rotate(0)}35.59%{transform:rotate(0)}37.29%{transform:rotate(0)}38.98%{transform:rotate(0)}40.68%{transform:rotate(0)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes spectrum-fill-mask-2{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes spectrum-fills-rotate{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host{--spectrum-progress-circle-track-border-color:var(--spectrum-gray-300);--spectrum-progress-circle-fill-border-color:var(
--spectrum-accent-content-color-default
);--spectrum-progress-circle-track-border-color-over-background:var(
--spectrum-transparent-white-300
);--spectrum-progress-circle-fill-border-color-over-background:var(
--spectrum-transparent-white-900
);--spectrum-progress-circle-size:var(
--spectrum-progress-circle-size-medium
);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-medium
);--spectrum-progress-circle-track-border-style:solid}:host([size=s]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-small);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-small
)}.spectrum-ProgressCircle--medium{--spectrum-progress-circle-size:var(
--spectrum-progress-circle-size-medium
);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-medium
)}:host([size=l]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-large);--spectrum-progress-circle-thickness:var(
--spectrum-progress-circle-thickness-large
)}@media (forced-colors:active){:host{--highcontrast-progress-circle-fill-border-color:Highlight;--highcontrast-progress-circle-fill-border-color-over-background:Highlight}.track{--spectrum-progress-circle-track-border-style:double}}:host{block-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);direction:ltr;display:inline-block;inline-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);position:relative;transform:translateZ(0)}.track{block-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-color:var(
--mod-progress-circle-track-border-color,var(--spectrum-progress-circle-track-border-color)
);border-radius:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-style:var(
--highcontrast-progress-circle-track-border-style,var(
--mod-progress-circle-track-border-style,var(--spectrum-progress-circle-track-border-style)
)
);border-width:var(
--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness)
);box-sizing:border-box;inline-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
)}.fills{block-size:100%;inline-size:100%;inset-block-start:0;inset-inline-start:0;position:absolute}.fill{block-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-color:var(
--highcontrast-progress-circle-fill-border-color,var(
--mod-progress-circle-fill-border-color,var(--spectrum-progress-circle-fill-border-color)
)
);border-radius:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
);border-style:solid;border-width:var(
--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness)
);box-sizing:border-box;inline-size:var(
--mod-progress-circle-size,var(--spectrum-progress-circle-size)
)}:host([static=white]) .track{border-color:var(
--mod-progress-circle-track-border-color-over-background,var(--spectrum-progress-circle-track-border-color-over-background)
)}:host([static=white]) .fill{border-color:var(
--highcontrast-progress-circle-fill-border-color-over-background,var(
--mod-progress-circle-fill-border-color-over-background,var(--spectrum-progress-circle-fill-border-color-over-background)
)
)}.fillMask1,.fillMask2{block-size:100%;inline-size:50%;overflow:hidden;position:absolute;transform:rotate(180deg);transform-origin:100%}.fillSubMask1,.fillSubMask2{block-size:100%;inline-size:100%;overflow:hidden;transform:rotate(-180deg);transform-origin:100%}.fillMask2{transform:rotate(0)}:host([indeterminate]) .fills{animation:spectrum-fills-rotate 1s cubic-bezier(.25,.78,.48,.89) infinite;transform:translateZ(0);transform-origin:center;will-change:transform}:host([indeterminate]) .fillSubMask1{animation:spectrum-fill-mask-1 1s linear infinite;transform:translateZ(0);will-change:transform}:host([indeterminate]) .fillSubMask2{animation:spectrum-fill-mask-2 1s linear infinite;transform:translateZ(0);will-change:transform}:host{--spectrum-progresscircle-m-over-background-track-fill-color:var(
--spectrum-alias-track-fill-color-overbackground
)}slot{display:none}
`;var f$1 = e$1;

var p$1=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var i$2=(o,s,e,r)=>{for(var t=r>1?void 0:r?c(s,e):s,l=o.length-1,n;l>=0;l--)(n=o[l])&&(t=(r?n(s,e,t):n(t))||t);return r&&t&&p$1(s,e,t),t};class ProgressCircle extends SizedMixin(SpectrumElement,{validSizes:["s","m","l"]}){constructor(){super(...arguments);this.indeterminate=!1;this.label="";this.overBackground=!1;this.progress=0;}static get styles(){return [f$1]}makeRotation(e){return this.indeterminate?void 0:`transform: rotate(${e}deg);`}willUpdate(e){e.has("overBackground")&&(this.static=this.overBackground?"white":this.static||void 0);}render(){const e=[this.makeRotation(-180+3.6*Math.min(this.progress,50)),this.makeRotation(-180+3.6*Math.max(this.progress-50,0))],r=["Mask1","Mask2"];return x`
            <slot @slotchange=${this.handleSlotchange}></slot>
            <div class="track"></div>
            <div class="fills">
                ${r.map((t,l)=>x`
                        <div class="fill${t}">
                            <div
                                class="fillSub${t}"
                                style=${l$4(e[l])}
                            >
                                <div class="fill"></div>
                            </div>
                        </div>
                    `)}
            </div>
        `}handleSlotchange(){const e=getLabelFromSlot(this.label,this.slotEl);e&&(this.label=e);}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("role")||this.setAttribute("role","progressbar");}updated(e){super.updated(e),!this.indeterminate&&e.has("progress")?this.setAttribute("aria-valuenow",""+this.progress):this.hasAttribute("aria-valuenow")&&this.removeAttribute("aria-valuenow"),e.has("label")&&(this.label.length?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"));}}i$2([n$5({type:Boolean,reflect:!0})],ProgressCircle.prototype,"indeterminate",2),i$2([n$5({type:String})],ProgressCircle.prototype,"label",2),i$2([n$5({type:Boolean,reflect:!0,attribute:"over-background"})],ProgressCircle.prototype,"overBackground",2),i$2([n$5({reflect:!0})],ProgressCircle.prototype,"static",2),i$2([n$5({type:Number})],ProgressCircle.prototype,"progress",2),i$2([i$9("slot")],ProgressCircle.prototype,"slotEl",2);

defineElement("sp-progress-circle",ProgressCircle);

const languageResolverUpdatedSymbol=Symbol("language resolver updated");class LanguageResolutionController{constructor(e){this.language=document.documentElement.lang||navigator.language;this.host=e,this.host.addController(this);}hostConnected(){this.resolveLanguage();}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this);}resolveLanguage(){const e=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:(t,o)=>{const a=this.language;this.language=t,this.unsubscribe=o,this.host.requestUpdate(languageResolverUpdatedSymbol,a);}},cancelable:!0});this.host.dispatchEvent(e);}}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $488c6ddbf4ef74c2$var$formatterCache = new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
    // @ts-ignore
    $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat("de-DE", {
        signDisplay: "exceptZero"
    }).resolvedOptions().signDisplay === "exceptZero";
// eslint-disable-next-line no-empty
} catch (e) {}
let $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
    // @ts-ignore
    $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat("de-DE", {
        style: "unit",
        unit: "degree"
    }).resolvedOptions().style === "unit";
// eslint-disable-next-line no-empty
} catch (e) {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $488c6ddbf4ef74c2$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            "ja-JP": " 度",
            "zh-TW": "度",
            "sl-SI": " \xb0"
        }
    }
};
class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
    /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
        let res = "";
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === "unit" && !$488c6ddbf4ef74c2$var$supportsUnit) {
            var _UNITS_unit;
            let { unit: unit , unitDisplay: unitDisplay = "short" , locale: locale  } = this.resolvedOptions();
            let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        // @ts-ignore
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        // @ts-ignore
        if (typeof this.numberFormatter.formatRange === "function") // @ts-ignore
        return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError("End date must be >= start date");
        // Very basic fallback for old browsers.
        return `${this.format(start)} – ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        // @ts-ignore
        if (typeof this.numberFormatter.formatRangeToParts === "function") // @ts-ignore
        return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError("End date must be >= start date");
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: "startRange"
                })),
            {
                type: "literal",
                value: " – ",
                source: "shared"
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: "endRange"
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === "unit") options = {
            ...options,
            style: "unit",
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
    constructor(locale, options = {}){
        this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
}
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem  } = options;
    if (numberingSystem && locale.indexOf("-u-nu-") === -1) locale = `${locale}-u-nu-${numberingSystem}`;
    if (options.style === "unit" && !$488c6ddbf4ef74c2$var$supportsUnit) {
        var _UNITS_unit;
        let { unit: unit , unitDisplay: unitDisplay = "short"  } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: "decimal"
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : "");
    if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === "auto") return numberFormat.format(num);
    else if (signDisplay === "never") return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === "always") needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === "exceptZero") {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, "").replace(/\u200e|\u061C/, "");
            if ([
                ...minus
            ].length !== 1) console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case");
            let positive = negative.replace(noSign, "!!!").replace(minus, "+").replace("!!!", noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX = new RegExp("^.*\\(.*\\).*$");
const $6c7bd7858deea686$var$NUMBERING_SYSTEMS = [
    "latn",
    "arab",
    "hanidec"
];
class $6c7bd7858deea686$export$cd11ab140839f11d {
    /**
   * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
   */ parse(value) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
    }
    /**
   * Returns whether the given string could potentially be a valid number. This should be used to
   * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
   * of the minus/plus sign characters can be checked.
   */ isValidPartialNumber(value, minValue, maxValue) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
    }
    /**
   * Returns a numbering system for which the given string is valid in the current locale.
   * If no numbering system could be detected, the default numbering system for the current
   * locale is returned.
   */ getNumberingSystem(value) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
    }
    constructor(locale, options = {}){
        this.locale = locale;
        this.options = options;
    }
}
const $6c7bd7858deea686$var$numberParserCache = new Map();
function $6c7bd7858deea686$var$getNumberParserImpl(locale, options, value) {
    // First try the default numbering system for the provided locale
    let defaultParser = $6c7bd7858deea686$var$getCachedNumberParser(locale, options);
    // If that doesn't match, and the locale doesn't include a hard coded numbering system,
    // try each of the other supported numbering systems until we find one that matches.
    if (!locale.includes("-nu-") && !defaultParser.isValidPartialNumber(value)) {
        for (let numberingSystem of $6c7bd7858deea686$var$NUMBERING_SYSTEMS)if (numberingSystem !== defaultParser.options.numberingSystem) {
            let parser = $6c7bd7858deea686$var$getCachedNumberParser(locale + (locale.includes("-u-") ? "-nu-" : "-u-nu-") + numberingSystem, options);
            if (parser.isValidPartialNumber(value)) return parser;
        }
    }
    return defaultParser;
}
function $6c7bd7858deea686$var$getCachedNumberParser(locale, options) {
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : "");
    let parser = $6c7bd7858deea686$var$numberParserCache.get(cacheKey);
    if (!parser) {
        parser = new $6c7bd7858deea686$var$NumberParserImpl(locale, options);
        $6c7bd7858deea686$var$numberParserCache.set(cacheKey, parser);
    }
    return parser;
}
// The actual number parser implementation. Instances of this class are cached
// based on the locale, options, and detected numbering system.
class $6c7bd7858deea686$var$NumberParserImpl {
    parse(value) {
        // to parse the number, we need to remove anything that isn't actually part of the number, for example we want '-10.40' not '-10.40 USD'
        let fullySanitizedValue = this.sanitize(value);
        // Remove group characters, and replace decimal points and numerals with ASCII values.
        fullySanitizedValue = $6c7bd7858deea686$var$replaceAll(fullySanitizedValue, this.symbols.group, "").replace(this.symbols.decimal, ".").replace(this.symbols.minusSign, "-").replace(this.symbols.numeral, this.symbols.index);
        let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
        if (isNaN(newValue)) return NaN;
        // accounting will always be stripped to a positive number, so if it's accounting and has a () around everything, then we need to make it negative again
        if (this.options.currencySign === "accounting" && $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
        // when reading the number, if it's a percent, then it should be interpreted as being divided by 100
        if (this.options.style === "percent") {
            newValue /= 100;
            var _this_options_maximumFractionDigits;
            // after dividing to get the percent value, javascript may get .0210999999 instead of .0211, so fix the number of fraction digits
            newValue = +newValue.toFixed(((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) + 2);
        }
        return newValue;
    }
    sanitize(value) {
        // Remove literals and whitespace, which are allowed anywhere in the string
        value = value.replace(this.symbols.literals, "");
        // Replace the ASCII minus sign with the minus sign used in the current locale
        // so that both are allowed in case the user's keyboard doesn't have the locale's minus sign.
        value = value.replace("-", this.symbols.minusSign);
        // In arab numeral system, their decimal character is 1643, but most keyboards don't type that
        // instead they use the , (44) character or apparently the (1548) character.
        if (this.options.numberingSystem === "arab") {
            value = value.replace(",", this.symbols.decimal);
            value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
            value = $6c7bd7858deea686$var$replaceAll(value, ".", this.symbols.group);
        }
        // fr-FR group character is char code 8239, but that's not a key on the french keyboard,
        // so allow 'period' as a group char and replace it with a space
        if (this.options.locale === "fr-FR") value = $6c7bd7858deea686$var$replaceAll(value, ".", String.fromCharCode(8239));
        return value;
    }
    isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
        value = this.sanitize(value);
        // Remove minus or plus sign, which must be at the start of the string.
        if (value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
        else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
        // Numbers cannot start with a group separator
        if (value.startsWith(this.symbols.group)) return false;
        // Remove numerals, groups, and decimals
        value = $6c7bd7858deea686$var$replaceAll(value, this.symbols.group, "").replace(this.symbols.numeral, "").replace(this.symbols.decimal, "");
        // The number is valid if there are no remaining characters
        return value.length === 0;
    }
    constructor(locale, options = {}){
        this.formatter = new Intl.NumberFormat(locale, options);
        this.options = this.formatter.resolvedOptions();
        this.symbols = $6c7bd7858deea686$var$getSymbols(this.formatter, this.options, options);
    }
}
const $6c7bd7858deea686$var$nonLiteralParts = new Set([
    "decimal",
    "fraction",
    "integer",
    "minusSign",
    "plusSign",
    "group"
]);
function $6c7bd7858deea686$var$getSymbols(formatter, intlOptions, originalOptions) {
    var _allParts_find, _posAllParts_find, _allParts_find1, _allParts_find2;
    // Note: some locale's don't add a group symbol until there is a ten thousands place
    let allParts = formatter.formatToParts(-10000.111);
    let posAllParts = formatter.formatToParts(10000.111);
    let singularParts = formatter.formatToParts(1);
    var _allParts_find_value;
    let minusSign = (_allParts_find_value = (_allParts_find = allParts.find((p)=>p.type === "minusSign")) === null || _allParts_find === void 0 ? void 0 : _allParts_find.value) !== null && _allParts_find_value !== void 0 ? _allParts_find_value : "-";
    let plusSign = (_posAllParts_find = posAllParts.find((p)=>p.type === "plusSign")) === null || _posAllParts_find === void 0 ? void 0 : _posAllParts_find.value;
    // Safari does not support the signDisplay option, but our number parser polyfills it.
    // If no plus sign was returned, but the original options contained signDisplay, default to the '+' character.
    // @ts-ignore
    if (!plusSign && ((originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === "exceptZero" || (originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === "always")) plusSign = "+";
    let decimal = (_allParts_find1 = allParts.find((p)=>p.type === "decimal")) === null || _allParts_find1 === void 0 ? void 0 : _allParts_find1.value;
    let group = (_allParts_find2 = allParts.find((p)=>p.type === "group")) === null || _allParts_find2 === void 0 ? void 0 : _allParts_find2.value;
    // this set is also for a regex, it's all literals that might be in the string we want to eventually parse that
    // don't contribute to the numerical value
    let pluralLiterals = allParts.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value));
    let singularLiterals = singularParts.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value));
    let sortedLiterals = [
        ...new Set([
            ...singularLiterals,
            ...pluralLiterals
        ])
    ].sort((a, b)=>b.length - a.length);
    let literals = sortedLiterals.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${sortedLiterals.join("|")}|[\\p{White_Space}]`, "gu");
    // These are for replacing non-latn characters with the latn equivalent
    let numerals = [
        ...new Intl.NumberFormat(intlOptions.locale, {
            useGrouping: false
        }).format(9876543210)
    ].reverse();
    let indexes = new Map(numerals.map((d, i)=>[
            d,
            i
        ]));
    let numeral = new RegExp(`[${numerals.join("")}]`, "g");
    let index = (d)=>String(indexes.get(d));
    return {
        minusSign: minusSign,
        plusSign: plusSign,
        decimal: decimal,
        group: group,
        literals: literals,
        numeral: numeral,
        index: index
    };
}
function $6c7bd7858deea686$var$replaceAll(str, find, replace) {
    // @ts-ignore
    if (str.replaceAll) // @ts-ignore
    return str.replaceAll(find, replace);
    return str.split(find).join(replace);
}
function $6c7bd7858deea686$var$escapeRegex(string) {
    return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}

var p=Object.defineProperty;var b$1=Object.getOwnPropertyDescriptor;var o=(t,a,e,r)=>{for(var u=r>1?void 0:r?b$1(a,e):a,m=t.length-1,n;m>=0;m--)(n=t[m])&&(u=(r?n(a,e,u):n(u))||u);return r&&u&&p(a,e,u),u};const defaultNormalization={toNormalized(t,a,e){return (t-a)/(e-a)},fromNormalized(t,a,e){return t*(e-a)+a}};const f={fromAttribute:t=>t==="previous"?t:parseFloat(t),toAttribute:t=>t.toString()},d$1={fromAttribute:t=>t==="next"?t:parseFloat(t),toAttribute:t=>t.toString()};class SliderHandle extends Focusable{constructor(){super(...arguments);this._forcedUnit="";this.dragging=!1;this.highlight=!1;this.name="";this.label="";this.getAriaHandleText=(e,r)=>r.format(e);this.languageResolver=new LanguageResolutionController(this);this.normalization=defaultNormalization;}get handleName(){return this.name}get focusElement(){var e,r;return (r=(e=this.handleController)==null?void 0:e.inputForHandle(this))!=null?r:this}update(e){var r,u;if(!this.hasUpdated){const{max:m,min:n}=this;this.value==null&&!isNaN(m)&&!isNaN(n)&&(this.value=m<n?n:n+(m-n)/2,(r=this.handleController)==null||r.hostUpdate());}(e.has("formatOptions")||e.has(languageResolverUpdatedSymbol))&&delete this._numberFormatCache,e.has("value")&&e.get("value")!=null&&this.updateComplete.then(()=>{var n;(n=this.handleController)==null||n.setValueFromHandle(this);}),(u=this.handleController)==null||u.handleHasChanged(this),super.update(e);}firstUpdated(e){super.firstUpdated(e),this.dispatchEvent(new CustomEvent("sp-slider-handle-ready"));}dispatchInputEvent(){const e=new Event("input",{bubbles:!0,composed:!0});this.dispatchEvent(e);}getNumberFormat(){var e;if(!this._numberFormatCache||this.languageResolver.language!==this._numberFormatCache.language){let r;try{r=new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(this.languageResolver.language,this.formatOptions),this._forcedUnit="";}catch(u){const{style:m,unit:n,unitDisplay:v,...l}=this.formatOptions||{};m==="unit"&&(this._forcedUnit=n),r=new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(this.languageResolver.language,l);}this._numberFormatCache={language:this.languageResolver.language,numberFormat:r};}return (e=this._numberFormatCache)==null?void 0:e.numberFormat}get numberFormat(){if(this.formatOptions)return this.getNumberFormat()}}o([n$5({type:Number})],SliderHandle.prototype,"value",2),o([n$5({type:Boolean,reflect:!0})],SliderHandle.prototype,"dragging",2),o([n$5({type:Boolean})],SliderHandle.prototype,"highlight",2),o([n$5({type:String})],SliderHandle.prototype,"name",2),o([n$5({reflect:!0,converter:f})],SliderHandle.prototype,"min",2),o([n$5({reflect:!0,converter:d$1})],SliderHandle.prototype,"max",2),o([n$5({type:Number,reflect:!0})],SliderHandle.prototype,"step",2),o([n$5({type:Object,attribute:"format-options"})],SliderHandle.prototype,"formatOptions",2),o([n$5({type:String})],SliderHandle.prototype,"label",2),o([n$5({attribute:!1})],SliderHandle.prototype,"getAriaHandleText",2),o([n$5({attribute:!1})],SliderHandle.prototype,"normalization",2);

defineElement("sp-slider-handle",SliderHandle);

const e=i$c`
:host{--spectrum-slider-font-size:var(--spectrum-font-size-75);--spectrum-slider-handle-size:var(--spectrum-slider-handle-size-medium);--spectrum-slider-control-height:var(--spectrum-component-height-100);--spectrum-slider-handle-border-radius:var(--spectrum-corner-radius-200);--spectrum-slider-handle-border-width-down:var(
--spectrum-slider-handle-border-width-down-medium
);--spectrum-slider-label-top-to-text:var(
--spectrum-component-top-to-text-75
);--spectrum-slider-control-to-field-label:var(
--spectrum-slider-control-to-field-label-medium
);--spectrum-slider-value-side-padding-inline:var(--spectrum-spacing-200);--spectrum-slider-value-inline-size:18px}:host([size=s]){--spectrum-slider-font-size:var(--spectrum-font-size-75);--spectrum-slider-handle-size:var(--spectrum-slider-handle-size-small);--spectrum-slider-control-height:var(--spectrum-component-height-75);--spectrum-slider-handle-border-radius:var(--spectrum-corner-radius-200);--spectrum-slider-handle-border-width-down:var(
--spectrum-slider-handle-border-width-down-small
);--spectrum-slider-label-top-to-text:var(
--spectrum-component-top-to-text-75
);--spectrum-slider-control-to-field-label:var(
--spectrum-slider-control-to-field-label-small
);--spectrum-slider-value-side-padding-inline:var(--spectrum-spacing-100)}:host([size=l]){--spectrum-slider-font-size:var(--spectrum-font-size-100);--spectrum-slider-handle-size:var(--spectrum-slider-handle-size-large);--spectrum-slider-control-height:var(--spectrum-component-height-200);--spectrum-slider-handle-border-radius:calc(var(--spectrum-corner-radius-200)*4);--spectrum-slider-handle-border-width-down:var(
--spectrum-slider-handle-border-width-down-large
);--spectrum-slider-label-top-to-text:var(
--spectrum-component-top-to-text-100
);--spectrum-slider-control-to-field-label:var(
--spectrum-slider-control-to-field-label-large
);--spectrum-slider-value-side-padding-inline:var(--spectrum-spacing-200);--spectrum-slider-value-inline-size:18px}:host([size=xl]){--spectrum-slider-font-size:var(--spectrum-font-size-200);--spectrum-slider-handle-size:var(
--spectrum-slider-handle-size-extra-large
);--spectrum-slider-control-height:var(--spectrum-component-height-300);--spectrum-slider-handle-border-radius:calc(var(--spectrum-corner-radius-200)*4);--spectrum-slider-handle-border-width-down:var(
--spectrum-slider-handle-border-width-down-extra-large
);--spectrum-slider-label-top-to-text:var(
--spectrum-component-top-to-text-200
);--spectrum-slider-control-to-field-label:var(
--spectrum-slider-control-to-field-label-extra-large
);--spectrum-slider-value-side-padding-inline:var(--spectrum-spacing-200);--spectrum-slider-value-inline-size:22px}:host{--spectrum-slider-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-slider-min-size:var(--spectrum-spacing-900);--spectrum-slider-track-corner-radius:var(--spectrum-corner-radius-75);--spectrum-slider-label-margin-start:var(--spectrum-spacing-300);--spectrum-slider-handle-border-width:var(--spectrum-border-width-200);--spectrum-slider-handle-margin-left:calc(var(--spectrum-slider-handle-size)/-2);--spectrum-slider-controls-margin:calc(var(--spectrum-slider-handle-size)/2);--spectrum-slider-track-margin-offset:calc(var(--spectrum-slider-controls-margin)*-1);--spectrum-slider-track-middle-handleoffset:calc(var(--spectrum-slider-handle-gap) + var(--spectrum-slider-handle-size)/2);--spectrum-slider-input-top-size:calc(var(--spectrum-slider-handle-size)/-2/4);--spectrum-slider-track-fill-thickness:var(
--spectrum-slider-track-thickness
);--spectrum-slider-tick-mark-width:var(--spectrum-border-width-200);--spectrum-slider-tick-mark-border-radius:2px;--spectrum-slider-tick-handle-background-color:var(--spectrum-gray-100);--spectrum-slider-track-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-slider-track-fill-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-slider-handle-border-color-disabled:var(
--spectrum-disabled-border-color
);--spectrum-slider-label-text-color:var(
--spectrum-neutral-content-color-default
);--spectrum-slider-label-text-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-slider-tick-mark-color-disabled:var(
--spectrum-disabled-background-color
);--spectrum-slider-ramp-handle-border-color-active:var(--spectrum-gray-100);--spectrum-slider-input-left:calc(var(--spectrum-slider-handle-margin-left)/4);--spectrum-slider-track-handleoffset:var(--spectrum-slider-handle-gap);--spectrum-slider-range-track-reset:0}:host{display:block;min-inline-size:var(
--mod-slider-min-size,var(--spectrum-slider-min-size)
);position:relative;-webkit-user-select:none;user-select:none;z-index:1}.spectrum-Slider--sideLabel{align-items:center;display:flex}.spectrum-Slider--sideLabel #label-container,.spectrum-Slider--sideLabel #label-container+#track{margin-block-start:0}.spectrum-Slider--sideLabel #controls{margin-inline-end:var(
--mod-slider-controls-margin,var(--spectrum-slider-controls-margin)
)}.spectrum-Slider--sideLabel #value{inline-size:var(
--mod-slider-value-inline-size,var(--spectrum-slider-value-inline-size)
);margin-inline-start:var(
--mod-slider-value-side-padding-inline,var(--spectrum-slider-value-side-padding-inline)
);text-align:start}#controls{block-size:var(
--mod-slider-control-height,var(--spectrum-slider-control-height)
);box-sizing:border-box;cursor:pointer;display:inline-block;inline-size:calc(100% - var(
--mod-slider-controls-margin,
var(--spectrum-slider-controls-margin)
)*2);margin-inline-start:var(
--mod-slider-controls-margin,var(--spectrum-slider-controls-margin)
);position:relative;vertical-align:top;z-index:auto}#label-container+#track{margin-block-start:calc(var(--spectrum-slider-control-to-field-label)*-1)}:host([tick-labels]){margin-block-end:var(
--mod-slider-control-height,var(--spectrum-slider-control-height)
)}#fill,.track{block-size:var(
--mod-slider-track-fill-thickness,var(--spectrum-slider-track-fill-thickness)
);box-sizing:border-box;inset-block-start:calc(var(--mod-slider-control-height, var(--spectrum-slider-control-height))/2 - var(
--mod-slider-track-fill-thickness,
var(--spectrum-slider-track-fill-thickness)
)/2);inset-inline:0 auto;margin-inline-start:var(
--mod-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);padding-block:0;padding-inline-end:var(
--mod-slider-handle-gap,var(--spectrum-slider-handle-gap)
);padding-inline-start:0;pointer-events:none;position:absolute;z-index:1}#fill:before,.track:before{block-size:100%;border-end-end-radius:0;border-end-start-radius:0;border-start-end-radius:0;border-start-start-radius:0;content:"";display:block}.track:first-of-type:before{border-end-start-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
);border-start-start-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
)}.track:last-of-type:before{border-end-end-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
);border-start-end-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
)}.track~.track{inset-inline-end:var(
--mod-slider-range-track-reset,var(--spectrum-slider-range-track-reset)
);inset-inline-start:auto;margin-inline-end:var(
--mod-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);margin-inline-start:var(
--mod-slider-range-track-reset,var(--spectrum-slider-range-track-reset)
);padding-block:0;padding-inline-end:0;padding-inline-start:var(
--mod-slider-track-handleoffset,var(--spectrum-slider-track-handleoffset)
)}:host([variant=range]) .track~.track{inset-inline:auto;margin-inline:var(
--mod-slider-range-track-reset,var(--spectrum-slider-range-track-reset)
);padding-inline:var(
--mod-slider-track-middle-handleoffset,var(--spectrum-slider-track-middle-handleoffset)
) var(
--mod-slider-track-middle-handleoffset,var(--spectrum-slider-track-middle-handleoffset)
)}#fill{margin-inline-start:0;padding-block:0;padding-inline-end:0;padding-inline-start:calc(var(
--mod-slider-controls-margin,
var(--spectrum-slider-controls-margin)
) + var(--spectrum-slider-handle-gap, var(--spectrum-slider-handle-gap)))}.spectrum-Slider-fill--right{padding-block:0;padding-inline-end:calc(var(
--mod-slider-controls-margin,
var(--spectrum-slider-controls-margin)
) + var(--spectrum-slider-handle-gap, var(--spectrum-slider-handle-gap)));padding-inline-start:0}:host([variant=range]) #value{-webkit-user-select:text;user-select:text}:host([variant=range]) .track:first-of-type{inset-inline-end:auto;inset-inline-start:var(
--mod-slider-range-track-reset,var(--spectrum-slider-range-track-reset)
);margin-inline-start:var(
--mod-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);padding-inline-end:var(
--mod-slider-track-handleoffset,var(--spectrum-slider-track-handleoffset)
);padding-inline-start:0}:host([variant=range]) .track:first-of-type:before{border-end-start-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
);border-start-start-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
)}:host([variant=range]) .track:last-of-type{inset-inline-end:var(
--mod-slider-range-track-reset,var(--spectrum-slider-range-track-reset)
);inset-inline-start:auto;margin-inline-end:var(
--mod-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);padding-inline-end:0;padding-inline-start:var(--spectrum-slider-track-handleoffset)}:host([variant=range]) .track:last-of-type:before{border-end-end-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
);border-start-end-radius:var(
--mod-slider-track-corner-radius,var(--spectrum-slider-track-corner-radius)
)}#ramp{block-size:var(
--mod-slider-ramp-track-height,var(--spectrum-slider-ramp-track-height)
);inset-inline-end:var(
--spectrum-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);inset-inline-start:var(
--spectrum-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);margin-block-start:calc(var(
--mod-slider-ramp-track-height,
var(--spectrum-slider-ramp-track-height)
)/2);position:absolute}:host([dir=rtl]) #ramp svg{transform:matrix(-1,0,0,1,0,0)}#ramp svg{block-size:100%;inline-size:100%}.handle{block-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);border-radius:var(
--mod-slider-handle-border-radius,var(--spectrum-slider-handle-border-radius)
);border-style:solid;border-width:var(
--mod-slider-handle-border-width,var(--spectrum-slider-handle-border-width)
);box-sizing:border-box;display:inline-block;inline-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);inset-block-start:calc(var(--mod-slider-control-height, var(--spectrum-slider-control-height))/2 - var(--mod-slider-handle-size, var(--spectrum-slider-handle-size))/2);inset-inline-start:0;margin-block:0;margin-inline:calc(var(--mod-slider-handle-size, var(--spectrum-slider-handle-size))/-2) 0;outline:none;position:absolute;transition:border-width var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-in-out;z-index:2}.handle.dragging,.handle.handle-highlight,.handle:active{border-width:var(
--mod-slider-handle-border-width-down,var(--spectrum-slider-handle-border-width-down)
)}.handle.dragging,.handle.handle-highlight,.handle.is-tophandle,.handle:active{z-index:3}.handle:before{block-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);border-radius:100%;content:" ";display:block;inline-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:box-shadow var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,inline-size var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out,block-size var(
--mod-animation-duration-100,var(--spectrum-animation-duration-100)
) ease-out}.handle.handle-highlight:before{block-size:calc(var(--mod-slider-handle-size, var(--spectrum-slider-handle-size)) + var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*2);inline-size:calc(var(--mod-slider-handle-size, var(--spectrum-slider-handle-size)) + var(--mod-focus-indicator-gap, var(--spectrum-focus-indicator-gap))*2)}.input{-webkit-appearance:none;block-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);border:0;cursor:default;inline-size:var(
--mod-slider-handle-size,var(--spectrum-slider-handle-size)
);inset-block-start:var(
--mod-slider-input-top-size,var(--spectrum-slider-input-top-size)
);inset-inline-start:var(
--mod-slider-input-left,var(--spectrum-slider-input-left)
);margin:0;opacity:.000001;overflow:hidden;padding:0;pointer-events:none;position:absolute}.input:focus{outline:none}#label-container{align-items:center;display:flex;font-size:var(--mod-slider-font-size,var(--spectrum-slider-font-size));inline-size:auto;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100));margin-block-start:var(
--mod-slider-label-top-to-text,var(--spectrum-slider-label-top-to-text)
);position:relative}#label-container:lang(ja),#label-container:lang(ko),#label-container:lang(zh){line-height:var(
--mod-slider-cjk-line-height,var(--spectrum-slider-cjk-line-height)
)}#label{flex-grow:1;font-size:var(--mod-slider-font-size,var(--spectrum-slider-font-size));padding-inline-start:0}#value{font-feature-settings:"tnum";cursor:default;flex-grow:0;margin-inline-start:var(
--mod-slider-label-margin-start,var(--spectrum-slider-label-margin-start)
);padding-inline-end:0;text-align:end}:host([variant=tick]) .handle{background-color:var(
--highcontrast-slider-tick-handle-background-color,var(
--mod-slider-tick-handle-background-color,var(--spectrum-slider-tick-handle-background-color)
)
)}:host([variant=tick]) #controls{margin-block-start:calc(var(--spectrum-text-to-visual-75) - var(
--mod-slider-tick-mark-height,
var(--spectrum-slider-tick-mark-height)
)/2 - var(
--mod-slider-track-thickness,
var(--spectrum-slider-track-thickness)
)/2)}:host([variant=tick]) .tickLabel{margin-block-start:calc(var(
--mod-slider-tick-mark-height,
var(--spectrum-slider-tick-mark-height)
) + var(--spectrum-text-to-visual-75))}.ticks{display:flex;justify-content:space-between;margin-inline:var(
--mod-slider-track-margin-offset,var(--spectrum-slider-track-margin-offset)
);z-index:0}.ticks~.spectrum-Slider-handleContainer .handle{background:var(
--mod-slider-ticks-handle-background-color,var(--spectrum-slider-ticks-handle-background-color)
)}.tick{inline-size:var(
--mod-slider-tick-mark-width,var(--spectrum-slider-tick-mark-width)
);inset-block-start:calc(var(--mod-slider-track-thickness, var(--spectrum-slider-control-height))/2 - var(
--mod-slider-tick-mark-height,
var(--spectrum-slider-tick-mark-height)
)/2);position:relative}.tick:after{block-size:var(
--mod-slider-tick-mark-height,var(--spectrum-slider-tick-mark-height)
);border-radius:var(
--mod-slider-tick-mark-border-radius,var(--spectrum-slider-tick-mark-border-radius)
);content:"";display:block;inline-size:var(
--mod-slider-tick-mark-width,var(--spectrum-slider-tick-mark-width)
);inset-block-start:0;inset-inline-start:calc(50% - var(
--mod-slider-tick-mark-width,
var(--spectrum-slider-tick-mark-width)
)/2);position:absolute}.tick .tickLabel{align-items:center;display:flex;font-size:var(--mod-font-size-75,var(--spectrum-font-size-75));justify-content:center;line-height:var(--mod-line-height-100,var(--spectrum-line-height-100))}.tick:first-of-type .tickLabel,.tick:last-of-type .tickLabel{display:block;margin-inline:0;position:absolute}.tick:first-of-type{inset-inline-start:calc(var(
--mod-slider-tick-mark-width,
var(--spectrum-slider-tick-mark-width)
)/-2)}.tick:first-of-type .tickLabel{inset-inline-start:0}.tick:last-of-type{inset-inline-end:calc(var(
--mod-slider-tick-mark-width,
var(--spectrum-slider-tick-mark-width)
)/-2)}.tick:last-of-type .tickLabel{inset-inline-end:0}:host([disabled]){cursor:default}:host([disabled]) .handle{cursor:default;pointer-events:none}:host([disabled]) .tickLabel{color:var(
--highcontrast-slider-label-text-color-disabled,var(
--mod-slider-label-text-color-disabled,var(--spectrum-slider-label-text-color-disabled)
)
)}.spectrum-Slider-handleContainer,.spectrum-Slider-trackContainer{inline-size:calc(100% + var(--spectrum-slider-handle-size));inset-block-start:0;margin-inline-start:calc(var(--spectrum-slider-handle-size)/2*-1);position:absolute}.spectrum-Slider-trackContainer{block-size:var(
--mod-slider-control-height,var(--spectrum-slider-control-height)
);overflow:hidden}.track:before{background:var(
--highcontrast-slider-track-color,var(--mod-slider-track-color,var(--spectrum-slider-track-color))
)}#label-container{color:var(
--highcontrast-slider-label-text-color,var(
--mod-slider-label-text-color,var(--spectrum-slider-label-text-color)
)
)}:host([variant=filled]) .track:first-child:before{background:var(
--highcontrast-slider-track-fill-color,var(
--mod-slider-track-fill-color,var(--spectrum-slider-track-fill-color)
)
)}#fill:before{background:var(
--highcontrast-slider-track-fill-color,var(
--mod-slider-track-fill-color,var(--spectrum-slider-track-fill-color)
)
)}#ramp path{fill:var(
--highcontrast-slider-ramp-track-color,var(
--mod-slider-ramp-track-color,var(--spectrum-slider-ramp-track-color)
)
)}.handle{background:var(
--highcontrast-slider-handle-background-color,var(
--mod-slider-handle-background-color,var(--spectrum-slider-handle-background-color)
)
);border-color:var(
--highcontrast-slider-handle-border-color,var(
--mod-slider-handle-border-color,var(--spectrum-slider-handle-border-color)
)
)}.handle:hover{border-color:var(
--highcontrast-slider-handle-border-color-hover,var(
--mod-slider-handle-border-color-hover,var(--spectrum-slider-handle-border-color-hover)
)
)}.handle.handle-highlight{border-color:var(
--highcontrast-slider-handle-border-color-key-focus,var(
--mod-slider-handle-border-color-key-focus,var(--spectrum-slider-handle-border-color-key-focus)
)
)}.handle.handle-highlight:before{box-shadow:0 0 0 var(--spectrum-focus-indicator-thickness) var(
--highcontrast-slider-handle-focus-ring-color-key-focus,var(
--mod-slider-handle-focus-ring-color-key-focus,var(--spectrum-slider-handle-focus-ring-color-key-focus)
)
)}.handle.dragging,.handle:active{border-color:var(
--highcontrast-slider-handle-border-color-down,var(
--mod-slider-handle-border-color-down,var(--spectrum-slider-handle-border-color-down)
)
)}:host([variant=ramp]) .handle{background:var(
--mod-slider-ramp-handle-background-color,var(--spectrum-slider-ramp-handle-background-color)
);box-shadow:0 0 0 var(--spectrum-slider-handle-gap) var(
--highcontrast-slider-ramp-handle-border-color-active,var(
--mod-sectrum-slider-ramp-handle-border-color-active,var(--spectrum-slider-ramp-handle-border-color-active)
)
)}@media (forced-colors:active){:host([variant=ramp]) .handle{background-color:ButtonFace;border-color:ButtonText;box-shadow:0 0 0 var(--spectrum-slider-handle-gap) ButtonFace;forced-color-adjust:none}}.input{background:none}.tick:after{background-color:var(
--highcontrast-slider-tick-mark-color,var(
--mod-slider-tick-mark-color,var(--spectrum-slider-tick-mark-color)
)
)}.handle.dragging{background:var(
--highcontrast-slider-handle-background-color,var(
--mod-slider-handle-background-color,var(--spectrum-slider-handle-background-color)
)
);border-color:var(
--highcontrast-slider-handle-border-color-down,var(
--mod-slider-handle-border-color-down,var(--spectrum-slider-handle-border-color-down)
)
)}:host([variant=range]) .track:not(:first-of-type):not(:last-of-type):before{background:var(
--highcontrast-slider-track-fill-color,var(
--mod-slider-track-fill-color,var(--spectrum-slider-track-fill-color)
)
)}:host([disabled]) #label-container{color:var(
--highcontrast-slider-label-text-color-disabled,var(
--mod-slider-label-text-color-disabled,var(--spectrum-slider-label-text-color-disabled)
)
)}:host([disabled]) .handle{background:var(
--highcontrast-slider-handle-disabled-background-color,var(
--mod-slider-handle-disabled-background-color,var(--spectrum-slider-handle-disabled-background-color)
)
);border-color:var(
--highcontrast-slider-handle-border-color-disabled,var(
--mod-slider-handle-border-color-disabled,var(--spectrum-slider-handle-border-color-disabled)
)
)}:host([disabled]) .handle:active,:host([disabled]) .handle:hover{background:var(
--highcontrast-slider-handle-background-color-disabled,var(
--mod-slider-handle-background-color-disabled,var(--spectrum-slider-handle-background-color-disabled)
)
);border-color:var(
--highcontrast-disabled-border-color,var(--mod-disabled-border-color,var(--spectrum-disabled-border-color))
)}:host([disabled]) .track:before{background:var(
--highcontrast-slider-track-color-disabled,var(
--mod-slider-track-color-disabled,var(--spectrum-slider-track-color-disabled)
)
)}:host([disabled][variant=filled]) .track:first-child:before{background:var(
--highcontrast-slider-track-fill-color-disabled,var(
--mod-slider-track-fill-color-disabled,var(--spectrum-slider-track-fill-color-disabled)
)
)}:host([disabled]) #fill:before{background:var(
--highcontrast-slider-track-fill-color-disabled,var(
--mod-slider-track-fill-color-disabled,var(--spectrum-slider-track-fill-color-disabled)
)
)}@media (forced-colors:active){:host([disabled]) #ramp+.handle{fill:ButtonFace;background-color:ButtonFace}}:host([disabled]) #ramp path{fill:var(
--highcontrast-slider-ramp-track-color-disabled,var(
--mod-slider-ramp-track-color-disabled,var(--spectrum-slider-ramp-track-color-disabled)
)
)}:host([disabled]) .tick:after{background-color:var(
--highcontrast-slider-tick-mark-color-disabled,var(
--mod-slider-tick-mark-color-disabled,var(--spectrum-slider-tick-mark-color-disabled)
)
)}:host([disabled][variant=range]) .track:not(:first-of-type):not(:last-of-type):before{background:var(
--highcontrast-slider-track-color-disabled,var(
--mod-slider-track-color-disabled,var(--spectrum-slider-track-color-disabled)
)
)}@media (forced-colors:active){:host{--highcontrast-slider-track-color:ButtonText;--highcontrast-slider-track-fill-color:ButtonText;--highcontrast-slider-ramp-track-color:ButtonText;--highcontrast-slider-ramp-track-color-disabled:GrayText;--highcontrast-slider-tick-mark-color:ButtonText;--spectrum-slider-track-color:ButtonText;--spectrum-slider-track-fill-color:ButtonText;--spectrum-slider-ramp-track-color:ButtonText;--spectrum-slider-ramp-track-color-disabled:GrayText;--spectrum-slider-handle-background-color:ButtonFace;--spectrum-slider-handle-background-color-disabled:GrayText;--spectrum-slider-handle-border-color:ButtonText;--spectrum-slider-handle-disabled-background-color:GrayText;--spectrum-slider-tick-mark-color:ButtonText;--spectrum-slider-tick-mark-color-disabled:GrayText;--spectrum-slider-handle-border-color-hover:Highlight;--spectrum-slider-handle-border-color-down:Highlight;--spectrum-slider-handle-border-color-key-focus:Highlight;--spectrum-slider-handle-focus-ring-color-key-focus:Highlight;--spectrum-slider-track-color-disabled:GrayText;--spectrum-slider-track-fill-color-disabled:GrayText;--spectrum-slider-handle-border-color-disabled:GrayText;--spectrum-slider-label-text-color:CanvasText;--spectrum-slider-label-text-color-disabled:GrayText;--spectrum-slider-ramp-handle-border-color-active:ButtonText}}:host{--spectrum-slider-track-color:var(--system-spectrum-slider-track-color);--spectrum-slider-track-fill-color:var(
--system-spectrum-slider-track-fill-color
);--spectrum-slider-ramp-track-color:var(
--system-spectrum-slider-ramp-track-color
);--spectrum-slider-ramp-track-color-disabled:var(
--system-spectrum-slider-ramp-track-color-disabled
);--spectrum-slider-handle-background-color:var(
--system-spectrum-slider-handle-background-color
);--spectrum-slider-handle-background-color-disabled:var(
--system-spectrum-slider-handle-background-color-disabled
);--spectrum-slider-ramp-handle-background-color:var(
--system-spectrum-slider-ramp-handle-background-color
);--spectrum-slider-ticks-handle-background-color:var(
--system-spectrum-slider-ticks-handle-background-color
);--spectrum-slider-handle-border-color:var(
--system-spectrum-slider-handle-border-color
);--spectrum-slider-handle-disabled-background-color:var(
--system-spectrum-slider-handle-disabled-background-color
);--spectrum-slider-tick-mark-color:var(
--system-spectrum-slider-tick-mark-color
);--spectrum-slider-handle-border-color-hover:var(
--system-spectrum-slider-handle-border-color-hover
);--spectrum-slider-handle-border-color-down:var(
--system-spectrum-slider-handle-border-color-down
);--spectrum-slider-handle-border-color-key-focus:var(
--system-spectrum-slider-handle-border-color-key-focus
);--spectrum-slider-handle-focus-ring-color-key-focus:var(
--system-spectrum-slider-handle-focus-ring-color-key-focus
)}:host(:focus){outline:0}:host([editable]){display:grid;grid-template-areas:"label number" "slider number";grid-template-columns:1fr auto}:host([editable]) #label-container{grid-area:label}:host([editable]) #label-container+div{grid-area:slider}:host([editable]) sp-number-field{align-self:flex-end;grid-area:number;margin-inline-start:var(--spectrum-global-dimension-size-200)}:host([editable]) output{clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host([disabled]){pointer-events:none}#track,:host([dragging]){touch-action:none;-webkit-user-select:none;user-select:none}.not-exact.ticks{justify-content:start}:host([dir=ltr]) .not-exact .tick{padding-right:var(--sp-slider-tick-offset)}:host([dir=rtl]) .not-exact .tick{padding-left:var(--sp-slider-tick-offset)}:host([dir=ltr]) .not-exact .tick:after{left:auto;transform:translate(-50%)}:host([dir=rtl]) .not-exact .tick:after{right:auto;transform:translate(50%)}.track:before{background-size:var(--spectrum-slider-track-background-size)!important}:host([dir=ltr]) .track:last-of-type:before{background-position:100%}:host([dir=rtl]) .track:first-of-type:before{background-position:100%}:host([dir=ltr]) .track:not(:first-of-type,:last-of-type){left:var(--spectrum-slider-track-segment-position)}:host([dir=rtl]) .track:not(:first-of-type,:last-of-type){right:var(--spectrum-slider-track-segment-position)}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host([label-visibility=value][dir=ltr]) #value{margin-left:auto}:host([label-visibility=value][dir=rtl]) #value{margin-right:auto}:host([label-visibility=none]) #label-container{margin:0;padding:0}
`;var $ = e;

const Asterisk100Icon=({width:t=24,height:l=24,title:e="Asterisk100"}={})=>tag$1`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${e}
    width=${t}
    height=${l}
  >
    <path
      d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"
    />
  </svg>`;

class IconAsterisk100 extends IconBase{render(){return setCustomTemplateLiteralTag$1(x),Asterisk100Icon()}}

defineElement("sp-icon-asterisk100",IconAsterisk100);

const i$1=i$c`
.spectrum-UIIcon-Asterisk75{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-75,var(--spectrum-global-dimension-static-size-100)
)}.spectrum-UIIcon-Asterisk100{height:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
);width:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
)}.spectrum-UIIcon-Asterisk200{height:var(--spectrum-alias-ui-icon-asterisk-size-200);width:var(--spectrum-alias-ui-icon-asterisk-size-200)}.spectrum-UIIcon-Asterisk300{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(--spectrum-alias-ui-icon-asterisk-size-300)}
`;var g = i$1;

function conditionAttributeWithoutId(t,i,n){const e=t.getAttribute(i);let r=e?e.split(/\s+/):[];r=r.filter(s=>!n.find(o=>s===o)),r.length?t.setAttribute(i,r.join(" ")):t.removeAttribute(i);}function conditionAttributeWithId(t,i,n){const e=Array.isArray(n)?n:[n],r=t.getAttribute(i),s=r?r.split(/\s+/):[];return e.every(d=>s.indexOf(d)>-1)?()=>{}:(s.push(...e),t.setAttribute(i,s.join(" ")),()=>conditionAttributeWithoutId(t,i,e))}

const elementResolverUpdatedSymbol=Symbol("element resolver updated");class ElementResolutionController{constructor(e,{selector:t}={selector:""}){this._element=null;this._selector="";this.mutationCallback=e=>{let t=!1;e.forEach(s=>{if(!t){if(s.type==="childList"){const l=this.element&&[...s.removedNodes].includes(this.element),n=!!this.selector&&[...s.addedNodes].some(r=>{var o;return (o=r==null?void 0:r.matches)==null?void 0:o.call(r,this.selector)});t=t||l||n;}if(s.type==="attributes"){const l=s.target===this.element,n=!!this.selector&&s.target.matches(this.selector);t=t||l||n;}}}),t&&this.resolveElement();};this.host=e,this.selector=t,this.observer=new MutationObserver(this.mutationCallback),this.host.addController(this);}get element(){return this._element}set element(e){if(e===this.element)return;const t=this.element;this._element=e,this.host.requestUpdate(elementResolverUpdatedSymbol,t);}get selector(){return this._selector}set selector(e){e!==this.selector&&(this.releaseElement(),this._selector=e,this.resolveElement());}hostConnected(){this.resolveElement(),this.observer.observe(this.host.getRootNode(),{subtree:!0,childList:!0,attributes:!0});}hostDisconnected(){this.releaseElement(),this.observer.disconnect();}resolveElement(){if(!this.selector){this.releaseElement();return}const e=this.host.getRootNode();this.element=e.querySelector(this.selector);}releaseElement(){this.element=null;}}

const t=i$c`
:host{--spectrum-fieldlabel-color:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-fieldlabel-font-weight:var(--spectrum-regular-font-weight);--spectrum-fieldlabel-line-height:var(--spectrum-line-height-100);--spectrum-fieldlabel-line-height-cjk:var(--spectrum-cjk-line-height-100)}:host([size=s]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-75
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-100);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-small
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-small
)}:host{--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-75
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-medium
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-medium
)}:host([size=l]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-100);--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-100
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-100
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-100);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-100
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-large
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-large
)}:host([size=xl]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-200);--spectrum-fieldlabel-top-to-text:var(
--spectrum-component-top-to-text-200
);--spectrum-fieldlabel-bottom-to-text:var(
--spectrum-component-bottom-to-text-200
);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-200);--spectrum-fieldlabel-side-padding-top:var(
--spectrum-component-top-to-text-200
);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-top-to-asterisk:var(
--spectrum-field-label-top-to-asterisk-extra-large
);--spectrum-field-label-text-to-asterisk:var(
--spectrum-field-label-text-to-asterisk-extra-large
)}:host{-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;box-sizing:border-box;color:var(--spectrum-fieldlabel-color);display:block;font-size:var(
--mod-fieldlabel-font-size,var(--spectrum-fieldlabel-font-size)
);font-weight:var(
--mod-fieldlabel-font-weight,var(--spectrum-fieldlabel-font-weight)
);line-height:var(
--mod-fieldlabel-line-height,var(--spectrum-fieldlabel-line-height)
);min-block-size:var(
--mod-fieldlabel-min-height,var(--spectrum-fieldlabel-min-height)
);padding-block:var(--spectrum-fieldlabel-top-to-text) var(--spectrum-fieldlabel-bottom-to-text);padding-inline:0;vertical-align:top}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){line-height:var(
--mod-fieldlabel-line-height-cjk,var(--spectrum-fieldlabel-line-height-cjk)
)}.required-icon{margin-block:0;margin-inline:var(
--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk)
) 0}:host([side-aligned=start]){display:inline-block;padding-block:var(
--mod-fieldlabel-side-padding-top,var(--spectrum-fieldlabel-side-padding-top)
) 0;padding-inline:0 var(
--mod-fieldlabel-side-padding-right,var(--spectrum-fieldlabel-side-padding-right)
)}:host([side-aligned=start]) .required-icon{margin-block:var(
--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk)
) 0;margin-inline:var(
--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk)
) 0}:host([side-aligned=end]){display:inline-block;padding-block:var(
--mod-fieldlabel-side-padding-top,var(--spectrum-fieldlabel-side-padding-top)
) 0;padding-inline:0 var(
--mod-fieldlabel-side-padding-right,var(--spectrum-fieldlabel-side-padding-right)
);text-align:end}:host([disabled]){color:var(
--highcontrast-disabled-content-color,var(
--mod-disabled-content-color,var(--spectrum-disabled-content-color)
)
)}:host([disabled]) .required-icon{color:var(
--highcontrast-disabled-content-color,var(
--mod-disabled-content-color,var(--spectrum-disabled-content-color)
)
)}@media (forced-colors:active){:host{--highcontrast-disabled-content-color:GrayText}}label{display:inline-block}
`;var A = t;

var u=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var a=(c,l,e,i)=>{for(var t=i>1?void 0:i?d(l,e):l,r=c.length-1,o;r>=0;r--)(o=c[r])&&(t=(i?o(l,e,t):o(t))||t);return i&&t&&u(l,e,t),t};const s=class s extends SizedMixin(SpectrumElement,{noDefaultSize:!0}){constructor(){super(...arguments);this.disabled=!1;this.id="";this.for="";this.required=!1;this.resolvedElement=new ElementResolutionController(this);}static get styles(){return [A,g]}handleClick(e){if(!this.target||this.disabled||e.defaultPrevented)return;this.target.focus();const i=this.getRootNode(),t=this.target,r=t.getRootNode(),o=r.host;r===i&&t.forceFocusVisible?t.forceFocusVisible():o&&o.forceFocusVisible&&o.forceFocusVisible();}applyTargetLabel(e){if(this.target=e||this.target,this.target){const i=this.target.applyFocusElementLabel,t=this.target.focusElement||this.target,r=t.getRootNode();typeof i!="undefined"?i(this.labelText):r===this.getRootNode()?(e?conditionAttributeWithId:conditionAttributeWithoutId)(t,"aria-labelledby",[this.id]):e?t.setAttribute("aria-label",this.labelText):t.removeAttribute("aria-label");}}async manageTarget(){this.applyTargetLabel();const e=this.resolvedElement.element;if(!e){this.target=e;return}e.localName.search("-")>0&&await customElements.whenDefined(e.localName),typeof e.updateComplete!="undefined"&&await e.updateComplete,this.applyTargetLabel(e);}get labelText(){const e=this.slotEl.assignedNodes({flatten:!0});return e.length?e.map(t=>(t.textContent||"").trim()).join(" "):""}render(){return x`
            <label>
                <slot></slot>
                ${this.required?x`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      `:A$1}
            </label>
        `}firstUpdated(e){super.firstUpdated(e),this.addEventListener("click",this.handleClick);}willUpdate(e){this.hasAttribute("id")||this.setAttribute("id",`${this.tagName.toLowerCase()}-${s.instanceCount++}`),e.has("for")&&(this.resolvedElement.selector=this.for?`#${this.for}`:""),(e.has("id")||e.has(elementResolverUpdatedSymbol))&&this.manageTarget();}};s.instanceCount=0,a([n$5({type:Boolean,reflect:!0})],s.prototype,"disabled",2),a([n$5({type:String})],s.prototype,"id",2),a([n$5({type:String})],s.prototype,"for",2),a([n$5({type:Boolean,reflect:!0})],s.prototype,"required",2),a([i$9("slot")],s.prototype,"slotEl",2),a([n$5({type:String,reflect:!0,attribute:"side-aligned"})],s.prototype,"sideAligned",2);let FieldLabel=s;

defineElement("sp-field-label",FieldLabel);

class HandleController{constructor(e){this.handles=new Map;this.model=[];this.handleOrder=[];this.handleOrientation=()=>{this.updateBoundingRect();};this.extractModelFromLightDom=()=>{let e=[...this.host.querySelectorAll('[slot="handle"]')];e.length===0&&(e=[this.host]),!e.some(t=>this.waitForUpgrade(t))&&(this.handles=new Map,this.handleOrder=[],e.forEach((t,n)=>{var i;(i=t.handleName)!=null&&i.length||(t.name=`handle${n+1}`),this.handles.set(t.handleName,t),this.handleOrder.push(t.handleName),t.handleController=this;}),this.requestUpdate());};this.onInputChange=e=>{const t=e.target;t.model.handle.value=t.valueAsNumber,this.requestUpdate(),this.dispatchChangeEvent(t,t.model.handle);};this.onInputFocus=e=>{const t=e.target;let n;try{n=t.matches(":focus-visible")||this.host.matches(".focus-visible");}catch(i){n=this.host.matches(".focus-visible");}t.model.handle.highlight=n,this.requestUpdate();};this.onInputBlur=e=>{const t=e.target;t.model.handle.highlight=!1,this.requestUpdate();};this.onInputKeydown=e=>{const t=e.target;t.model.handle.highlight=!0,this.requestUpdate();};this.host=e,new t$3(this.host,{config:{subtree:!0,childList:!0},callback:()=>{this.extractModelFromLightDom();}}),this.extractModelFromLightDom();}get values(){const e={};for(const t of this.handles.values())e[t.handleName]=t.value;return e}get size(){return this.handles.size}inputForHandle(e){if(this.handles.has(e.handleName)){const{input:t}=this.getHandleElements(e);return t}throw new Error(`No input for handle "${e.name}"`)}requestUpdate(){this.host.hasUpdated&&this.host.requestUpdate();}setValueFromHandle(e){const t=this.getHandleElements(e);if(!t)return;const{input:n}=t;n.valueAsNumber===e.value?e.dragging&&e.dispatchInputEvent():(n.valueAsNumber=e.value,this.requestUpdate()),e.value=n.valueAsNumber;}handleHasChanged(e){e!==this.host&&this.requestUpdate();}formattedValueForHandle(e){var a;const{handle:t}=e,n=(a=t.numberFormat)!=null?a:this.host.numberFormat,i=t._forcedUnit===""?this.host._forcedUnit:t._forcedUnit;return t.getAriaHandleText(e.value,n)+i}get formattedValues(){const e=new Map;for(const t of this.model)e.set(t.name,this.formattedValueForHandle(t));return e}get focusElement(){const{input:e}=this.getActiveHandleElements();return this.host.editable&&!e.model.handle.dragging?this.host.numberField:e}hostConnected(){"orientation"in screen?screen.orientation.addEventListener("change",this.handleOrientation):window.addEventListener("orientationchange",this.handleOrientation);}hostDisconnected(){"orientation"in screen?screen.orientation.removeEventListener("change",this.handleOrientation):window.removeEventListener("orientationchange",this.handleOrientation);}hostUpdate(){this.updateModel();}waitForUpgrade(e){return e instanceof SliderHandle?!1:(e.addEventListener("sp-slider-handle-ready",()=>this.extractModelFromLightDom(),{once:!0,passive:!0}),!0)}get activeHandle(){return this.handleOrder[this.handleOrder.length-1]}get activeHandleInputId(){const e=this.activeHandle;return `input-${this.model.findIndex(n=>n.name===e)}`}activateHandle(e){const t=this.handleOrder.findIndex(n=>n===e);t>=0&&this.handleOrder.splice(t,1),this.handleOrder.push(e);}getActiveHandleElements(){const e=this.activeHandle,t=this.handles.get(e),n=this.getHandleElements(t);return {model:t,...n}}getHandleElements(e){if(!this.handleRefMap){this.handleRefMap=new WeakMap;const n=this.host.shadowRoot.querySelectorAll(".handle > input");for(const i of n){const a=i,r=a.parentElement,s=this.handles.get(r.getAttribute("name"));s&&this.handleRefMap.set(s,{input:a,handle:r});}}return this.handleRefMap.get(e)}clearHandleComponentCache(){delete this.handleRefMap;}get boundingClientRect(){return this._boundingClientRect||(this._boundingClientRect=this.host.track.getBoundingClientRect()),this._boundingClientRect}updateBoundingRect(){delete this._boundingClientRect;}extractDataFromEvent(e){if(!this._activePointerEventData){let t=e.target.querySelector(":scope > .input");const n=!t,i=t?t.model:this.model.find(a=>a.name===this.activeHandle);!t&&i&&(t=i.handle.focusElement),this._activePointerEventData={input:t,model:i,resolvedInput:n};}return this._activePointerEventData}handlePointerdown(e){const{resolvedInput:t,model:n}=this.extractDataFromEvent(e);if(!n||this.host.disabled||e.button!==0){e.preventDefault();return}this.host.track.setPointerCapture(e.pointerId),this.updateBoundingRect(),e.pointerType==="mouse"&&this.host.labelEl.click(),this.draggingHandle=n.handle,n.handle.dragging=!0,this.activateHandle(n.name),t&&this.handlePointermove(e),this.requestUpdate();}handlePointerup(e){const{input:t,model:n}=this.extractDataFromEvent(e);delete this._activePointerEventData,n&&(e.pointerType==="mouse"&&this.host.labelEl.click(),this.cancelDrag(n),this.requestUpdate(),this.host.track.releasePointerCapture(e.pointerId),this.dispatchChangeEvent(t,n.handle));}handlePointermove(e){const{input:t,model:n}=this.extractDataFromEvent(e);n&&this.draggingHandle&&(e.stopPropagation(),t.value=this.calculateHandlePosition(e,n).toString(),n.handle.value=parseFloat(t.value),this.host.indeterminate=!1,this.requestUpdate());}cancelDrag(e){e=e||this.model.find(t=>t.name===this.activeHandle),e&&(e.handle.highlight=!1,delete this.draggingHandle,e.handle.dragging=!1);}dispatchChangeEvent(e,t){e.valueAsNumber=t.value;const n=new Event("change",{bubbles:!0,composed:!0});t.dispatchEvent(n);}calculateHandlePosition(e,t){const n=this.boundingClientRect,i=n.left,a=e.clientX,r=n.width,l=(this.host.isLTR?a-i:r-(a-i))/r;return t.normalization.fromNormalized(l,t.range.min,t.range.max)}renderHandle(e,t,n,i){var l;const a={handle:!0,dragging:((l=this.draggingHandle)==null?void 0:l.handleName)===e.name,"handle-highlight":e.highlight},r={[this.host.isLTR?"left":"right"]:`${e.normalizedValue*100}%`,"z-index":n.toString(),"background-color":`var(--spectrum-slider-handle-background-color-${t}, var(--spectrum-slider-handle-background-color))`,"border-color":`var(--spectrum-slider-handle-border-color-${t}, var(--spectrum-slider-handle-border-color))`},s=i?`label input-${t}`:"label";return x`
            <div
                class=${o$5(a)}
                name=${e.name}
                style=${o$6(r)}
                role="presentation"
            >
                <input
                    type="range"
                    class="input"
                    id="input-${t}"
                    min=${e.clamp.min}
                    max=${e.clamp.max}
                    step=${e.step}
                    value=${e.value}
                    aria-disabled=${l$4(this.host.disabled?"true":void 0)}
                    tabindex=${l$4(this.host.editable?-1:void 0)}
                    aria-label=${l$4(e.ariaLabel)}
                    aria-labelledby=${s}
                    aria-valuetext=${this.formattedValueForHandle(e)}
                    @change=${this.onInputChange}
                    @focus=${this.onInputFocus}
                    @blur=${this.onInputBlur}
                    @keydown=${this.onInputKeydown}
                    .model=${e}
                />
            </div>
        `}render(){return this.clearHandleComponentCache(),this.model.map((e,t)=>{const n=this.handleOrder.indexOf(e.name)+2;return this.renderHandle(e,t,n,this.model.length>1)})}trackSegments(){const e=this.model.map(t=>t.normalizedValue);return e.sort((t,n)=>t-n),e.unshift(0),e.map((t,n,i)=>{var a;return [t,(a=i[n+1])!=null?a:1]})}updateModel(){const e=[...this.handles.values()],t=i=>{const a=e[i],r=e[i-1],s=e[i+1],l=typeof a.min=="number"?a.min:this.host.min,u=typeof a.max=="number"?a.max:this.host.max,d={range:{min:l,max:u},clamp:{min:l,max:u}};if(a.min==="previous"&&r){for(let o=i-1;o>=0;o--){const h=e[o];if(typeof h.min=="number"){d.range.min=h.min;break}}d.clamp.min=Math.max(r.value,d.range.min);}if(a.max==="next"&&s){for(let o=i+1;o<e.length;o++){const h=e[o];if(typeof h.max=="number"){d.range.max=h.max;break}}d.clamp.max=Math.min(s.value,d.range.max);}return d},n=e.map((i,a)=>{var o;const r=t(a),{toNormalized:s}=i.normalization,l=Math.max(Math.min(i.value,r.clamp.max),r.clamp.min),u=s(l,r.range.min,r.range.max);return {name:i.handleName,value:l,normalizedValue:u,highlight:i.highlight,step:(o=i.step)!=null?o:this.host.step,normalization:i.normalization,handle:i,ariaLabel:i!==this.host&&(i==null?void 0:i.label.length)>0?i.label:void 0,...r}});this.model=n;}async handleUpdatesComplete(){const e=[...this.handles.values()].filter(t=>t!==this.host).map(t=>t.updateComplete);await Promise.all(e);}}

const i=["",()=>{}];class m$1 extends c$3{constructor(){super(...arguments);this.start=i;this.streamInside=i;this.end=i;this.streamOutside=i;this.state="off";this.handleStart=e=>{this.clearStream(),this.callHandler(this.start[1],e),!e.defaultPrevented&&(this.removeListeners(),this.addListeners("on"));};this.handleInside=e=>{this.handleStream(this.streamInside[1],e);};this.handleEnd=e=>{this.clearStream(),this.callHandler(this.end[1],e),this.removeListeners(),this.addListeners("off");};this.handleOutside=e=>{this.handleStream(this.streamOutside[1],e);};}render(e){return A$1}update(e,[{start:t,end:s,streamInside:r=i,streamOutside:d=i}]){var n;this.element!==e.element&&(this.element=e.element,this.removeListeners()),this.host=((n=e.options)==null?void 0:n.host)||this.element,this.start=t,this.end=s,this.streamInside=r,this.streamOutside=d,this.addListeners();}addListeners(e){this.state=e||this.state,this.state==="off"?(this.addListener(this.streamOutside[0],this.handleOutside),this.addListener(this.start[0],this.handleStart)):this.state==="on"&&(this.addListener(this.streamInside[0],this.handleInside),this.addListener(this.end[0],this.handleEnd));}callHandler(e,t){typeof e=="function"?e.call(this.host,t):e.handleEvent(t);}handleStream(e,t){this.stream||(this.callHandler(e,t),this.stream=requestAnimationFrame(()=>{this.stream=void 0;}));}clearStream(){this.stream!=null&&(cancelAnimationFrame(this.stream),this.stream=void 0);}addListener(e,t){Array.isArray(e)?e.map(s=>{this.element.addEventListener(s,t);}):this.element.addEventListener(e,t);}removeListener(e,t){Array.isArray(e)?e.map(s=>{this.element.removeEventListener(s,t);}):this.element.removeEventListener(e,t);}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleInside),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleOutside);}disconnected(){this.removeListeners();}reconnected(){this.addListeners();}}const streamingListener=e$3(m$1);

var b=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var r=(d,o,e,t)=>{for(var i=t>1?void 0:t?m(o,e):o,n=d.length-1,s;n>=0;n--)(s=d[n])&&(i=(t?s(o,e,i):s(i))||i);return t&&i&&b(o,e,i),i};const variants=["filled","ramp","range","tick"];class Slider extends SizedMixin(ObserveSlotText(SliderHandle,""),{noDefaultSize:!0,validSizes:["s","m","l","xl"]}){constructor(){super(...arguments);this.handleController=new HandleController(this);this._editable=!1;this.hideStepper=!1;this.type="";this._variant="";this.getAriaValueText=e=>{const t=[...e.values()];return t.length===2?`${t[0]} - ${t[1]}`:t.join(", ")};this.min=0;this.max=100;this.step=1;this.tickStep=0;this.tickLabels=!1;this.disabled=!1;this.quiet=!1;this.indeterminate=!1;this._numberFieldInput=Promise.resolve();}static get styles(){return [$]}get editable(){return this._editable}set editable(e){if(e===this.editable)return;const t=this.editable;this._editable=this.handleController.size<2?e:!1,this.editable&&(this._numberFieldInput=import('./sp-number-field-e2de877c.js')),t!==this.editable&&this.requestUpdate("editable",t);}set variant(e){const t=this.variant;e!==this.variant&&(variants.includes(e)?(this.setAttribute("variant",e),this._variant=e):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",t));}get variant(){return this._variant}get values(){return this.handleController.values}get handleName(){return "value"}get ariaValueText(){return this.getAriaValueText?this.getAriaValueText(this.handleController.formattedValues):`${this.value}${this._forcedUnit}`}get numberFormat(){return this.getNumberFormat()}get focusElement(){return this.handleController.focusElement}handleLabelClick(e){this.editable&&(e.preventDefault(),this.focus());}render(){return x`
            ${this.renderLabel()} ${this.renderTrack()}
            ${this.editable?x`
                      <sp-number-field
                          .formatOptions=${this.formatOptions||{}}
                          id="number-field"
                          min=${this.min}
                          max=${this.max}
                          step=${this.step}
                          size=${this.size}
                          value=${this.value}
                          ?hide-stepper=${this.hideStepper}
                          ?disabled=${this.disabled}
                          ?quiet=${this.quiet}
                          ?indeterminate=${this.indeterminate}
                          @input=${this.handleNumberInput}
                          @change=${this.handleNumberChange}
                      ></sp-number-field>
                  `:A$1}
        `}connectedCallback(){super.connectedCallback(),this.handleController.hostConnected();}disconnectedCallback(){super.disconnectedCallback(),this.handleController.hostDisconnected();}update(e){this.handleController.hostUpdate(),e.has("disabled")&&this.disabled&&this.handleController.cancelDrag(),super.update(e);}renderLabel(){const e=this.labelVisibility==="none"||this.labelVisibility==="value",t=this.labelVisibility==="none"||this.labelVisibility==="text";return x`
            <div id="label-container">
                <sp-field-label
                    class=${o$5({"visually-hidden":e})}
                    ?disabled=${this.disabled}
                    id="label"
                    for=${this.editable?"number-field":this.handleController.activeHandleInputId}
                    @click=${this.handleLabelClick}
                    size=${this.size}
                >
                    ${this.slotHasContent?A$1:this.label}
                    <slot>${this.label}</slot>
                </sp-field-label>
                <sp-field-label
                    class=${o$5({"visually-hidden":t})}
                    ?disabled=${this.disabled}
                    for=${this.editable?"number-field":this.handleController.activeHandleInputId}
                    size=${this.size}
                >
                    <output id="value" aria-live="off" for="input">
                        ${this.ariaValueText}
                    </output>
                </sp-field-label>
            </div>
        `}renderRamp(){return this.variant!=="ramp"?x``:x`
            <div id="ramp">
                <svg
                    viewBox="0 0 240 16"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                >
                    <path
                        d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"
                    ></path>
                </svg>
            </div>
        `}renderTicks(){if(this.variant!=="tick")return x``;const e=this.tickStep||this.step,t=(this.max-this.min)/e,i=t%1!==0,n=new Array(Math.floor(t+1));return n.fill(0,0,t+1),x`
            <div
                class="${i?"not-exact ":""}ticks"
                style=${l$4(i?`--sp-slider-tick-offset: calc(100% / ${this.max} * ${this.tickStep}`:void 0)}
            >
                ${n.map((s,c)=>x`
                        <div class="tick">
                            ${this.tickLabels?x`
                                      <div class="tickLabel">
                                          ${c*e+this.min}
                                      </div>
                                  `:A$1}
                        </div>
                    `)}
            </div>
        `}renderTrackSegment(e,t){return this.variant==="ramp"?x``:x`
            <div
                class="track"
                style=${o$6(this.trackSegmentStyles(e,t))}
                role="presentation"
            ></div>
        `}renderTrack(){const e=this.handleController.trackSegments(),t=[{id:"track0",html:this.renderTrackSegment(...e[0])},{id:"ramp",html:this.renderRamp()},{id:"ticks",html:this.renderTicks()},{id:"handles",html:this.handleController.render()},...e.slice(1).map(([i,n],s)=>({id:`track${s+1}`,html:this.renderTrackSegment(i,n)}))];return x`
            <div
                id="track"
                ${streamingListener({start:["pointerdown",this.handlePointerdown],streamInside:["pointermove",this.handlePointermove],end:[["pointerup","pointercancel","pointerleave"],this.handlePointerup]})}
            >
                <div id="controls">
                    ${c$4(t,i=>i.id,i=>i.html)}
                </div>
            </div>
        `}handlePointerdown(e){this.handleController.handlePointerdown(e);}handlePointermove(e){this.handleController.handlePointermove(e);}handlePointerup(e){this.handleController.handlePointerup(e);}handleNumberInput(e){var i;const{value:t}=e.target;if((i=e.target)!=null&&i.managedInput&&!isNaN(t)){this.value=t;return}e.stopPropagation();}handleNumberChange(e){var i;const{value:t}=e.target;isNaN(t)?(e.target.value=this.value,e.stopPropagation()):(this.value=t,(i=e.target)!=null&&i.managedInput||this.dispatchInputEvent()),this.indeterminate=!1;}trackSegmentStyles(e,t){const i=t-e;return {width:`${i*100}%`,"--spectrum-slider-track-background-size":`${1/i*100}%`,"--spectrum-slider-track-segment-position":`${e*100}%`}}async getUpdateComplete(){const e=await super.getUpdateComplete();return this.editable&&(await this._numberFieldInput,await this.numberField.updateComplete),await this.handleController.handleUpdatesComplete(),e}}r([n$5({type:Boolean,reflect:!0})],Slider.prototype,"editable",1),r([n$5({type:Boolean,reflect:!0,attribute:"hide-stepper"})],Slider.prototype,"hideStepper",2),r([n$5()],Slider.prototype,"type",2),r([n$5({type:String})],Slider.prototype,"variant",1),r([n$5({attribute:!1})],Slider.prototype,"getAriaValueText",2),r([n$5({type:String,reflect:!0,attribute:"label-visibility"})],Slider.prototype,"labelVisibility",2),r([n$5({type:Number,reflect:!0})],Slider.prototype,"min",2),r([n$5({type:Number,reflect:!0})],Slider.prototype,"max",2),r([n$5({type:Number})],Slider.prototype,"step",2),r([n$5({type:Number,attribute:"tick-step"})],Slider.prototype,"tickStep",2),r([n$5({type:Boolean,attribute:"tick-labels"})],Slider.prototype,"tickLabels",2),r([n$5({type:Boolean,reflect:!0})],Slider.prototype,"disabled",2),r([n$5({type:Boolean})],Slider.prototype,"quiet",2),r([n$5({type:Boolean})],Slider.prototype,"indeterminate",2),r([i$9("#label")],Slider.prototype,"labelEl",2),r([i$9("#number-field")],Slider.prototype,"numberField",2),r([i$9("#track")],Slider.prototype,"track",2);

defineElement("sp-slider",Slider);

class FTPlaygroundEditorHueSat extends s$6 {
    constructor() {
        super(...arguments);
        this.hue = 0;
        this.sat = 0;
        this.objectFit = 'contain';
        this.loading = false;
    }
    get cssHue() {
        return `hue-rotate(${this.hue}deg)`;
    }
    get cssSaturate() {
        return `saturate(${100 + this.sat}%)`;
    }
    get values() {
        return { hue: this.hue, sat: this.sat };
    }
    getImageBlob(type = 'jpeg', quality = 0.75, applyFilters = false) {
        return new Promise((resolve, reject) => {
            if (!this.imgSrcUrl) {
                reject();
            }
            const { imgSrcUrl } = this;
            const fullSizeImage = document.createElement('img');
            fullSizeImage.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = fullSizeImage.width;
                canvas.height = fullSizeImage.height;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    if (applyFilters) {
                        ctx.filter = `${this.cssHue} ${this.cssSaturate}`;
                    }
                    ctx.drawImage(fullSizeImage, 0, 0);
                    const output = document.createElement('img');
                    output.onload = () => {
                        const mimeType = `image/${type}`;
                        canvas.toBlob(blob => {
                            if (!blob) {
                                reject();
                            }
                            else {
                                resolve(blob);
                            }
                        }, mimeType, quality);
                    };
                    output.onerror = () => {
                        reject(new Error('failure loading image from canvas'));
                    };
                    output.src = canvas.toDataURL();
                }
            };
            fullSizeImage.crossOrigin = 'anonymous';
            fullSizeImage.src = imgSrcUrl;
        });
    }
    async export(imageType, imageQuality, bakePixels) {
        return this.getImageBlob(imageType, imageQuality, bakePixels);
    }
    renderCanvas() {
        const imgStyles = {
            filter: `${this.cssHue} ${this.cssSaturate}`,
            'object-fit': this.objectFit,
        };
        const image = this.imgSrcUrl
            ? x `<img
          style=${o$6(imgStyles)}
          src=${this.imgSrcUrl}
          @load=${() => { var _a, _b; return (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#image-loader')) === null || _b === void 0 ? void 0 : _b.remove(); }}
          alt=""
        />`
            : A$1;
        return x `
      <div class="canvas ps-checkerboard rounded">
        ${image}
        <sp-progress-circle
          id="image-loader"
          indeterminate
          size="l"
        ></sp-progress-circle>

      </div>
    `;
    }
    render() {
        return x `
      <div class="container">
        ${this.renderCanvas()}
      </div>
    `;
    }
}
FTPlaygroundEditorHueSat.styles = [
    i$c `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      .rounded {
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      }

      .canvas {
        position: relative;
        overflow: hidden;
        display: grid;
        aspect-ratio: 1;
      }

      .canvas img {
        place-self: center;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        object-position: 50%;
        position: absolute;
      }

      sp-progress-circle {
        place-self: center;
      }

      .ps-checkerboard {
        background-color: var(
          --spectrum-colorcontrol-checkerboard-light-color,
          var(--spectrum-global-color-static-white)
        );
        background-image: linear-gradient(
            -45deg,
            transparent 75.5%,
            var(
                --spectrum-colorcontrol-checkerboard-dark-color,
                var(--spectrum-global-color-static-gray-300)
              )
              75.5%
          ),
          linear-gradient(
            45deg,
            transparent 75.5%,
            var(
                --spectrum-colorcontrol-checkerboard-dark-color,
                var(--spectrum-global-color-static-gray-300)
              )
              75.5%
          ),
          linear-gradient(
            -45deg,
            var(
                --spectrum-colorcontrol-checkerboard-dark-color,
                var(--spectrum-global-color-static-gray-300)
              )
              25.5%,
            transparent 25.5%
          ),
          linear-gradient(
            45deg,
            var(
                --spectrum-colorcontrol-checkerboard-dark-color,
                var(--spectrum-global-color-static-gray-300)
              )
              25.5%,
            transparent 25.5%
          );
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
      }
    `,
];
__decorate([
    n$5({ attribute: false })
], FTPlaygroundEditorHueSat.prototype, "config", void 0);
__decorate([
    n$5({ attribute: false })
], FTPlaygroundEditorHueSat.prototype, "imgSrcUrl", void 0);
__decorate([
    n$5({ attribute: false })
], FTPlaygroundEditorHueSat.prototype, "hue", void 0);
__decorate([
    n$5({ attribute: false })
], FTPlaygroundEditorHueSat.prototype, "sat", void 0);
__decorate([
    n$5({ attribute: false })
], FTPlaygroundEditorHueSat.prototype, "objectFit", void 0);
__decorate([
    n$5({ attribute: false })
], FTPlaygroundEditorHueSat.prototype, "loading", void 0);

window.customElements.define('ft-playground-huesat-editor', FTPlaygroundEditorHueSat);

const svgStarIcon = x `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="18"
    height="18.003"
    viewBox="0 0 18 18.003"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="0.088"
        y1="0.214"
        x2="0.652"
        y2="0.684"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#0265dc" />
        <stop offset="1" stop-color="#883de6" />
      </linearGradient>
    </defs>
    <g id="S_PremiumFeature_18_N" transform="translate(-0.005 -0.002)">
      <path
        id="Path_1022839"
        data-name="Path 1022839"
        d="M9,18A9,9,0,0,1,2.634,2.637a9,9,0,1,1,12.73,12.73A8.94,8.94,0,0,1,9,18Z"
        transform="translate(0.004 0.002)"
        fill="#fff"
        opacity="0.65"
      />
      <circle
        id="Ellipse_27492"
        data-name="Ellipse 27492"
        cx="8"
        cy="8"
        r="8"
        transform="translate(1 1)"
        fill="url(#linear-gradient)"
      />
      <path
        id="Path_61266"
        data-name="Path 61266"
        d="M14.192,7.569l-2.86,2.3.968,3.54a.154.154,0,0,1-.107.188.15.15,0,0,1-.124-.02L9,11.56,5.932,13.575a.153.153,0,0,1-.231-.168l.967-3.54-2.86-2.3A.153.153,0,0,1,3.9,7.3l3.663-.173,1.3-3.432a.153.153,0,0,1,.282,0l1.3,3.432L14.1,7.3a.152.152,0,0,1,.088.272Z"
        fill="#fff"
      />
    </g>
  </svg>
`;
// TODO duplicated from Discover PLayground
function readFile(files) {
    return new Promise((resolve, reject) => {
        if (files.length !== 1) {
            reject(new Error('unexpected multiple files'));
        }
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            const dataUrl = reader.result;
            if (typeof dataUrl === 'string') {
                resolve(dataUrl);
            }
        });
        reader.readAsDataURL(files[0]);
    });
}
class FTPlaygroundHueSat extends s$6 {
    constructor() {
        super();
        this.download = false;
        this.openInPs = false;
        this.imgSrcUrl = '';
        this.userChoseSample = true;
        this.filename = '';
        this.hue = 0;
        this.sat = 0;
        this.objectFit = 'cover';
        this.loading = false;
        this.isAndroid = false;
        this.addEventListener('input', async (ev) => {
            var _a;
            const path = ev.composedPath();
            const input = path[0] instanceof HTMLInputElement && path[0];
            if (input && input.files) {
                const file = input.files[0];
                this.filename = (_a = file === null || file === void 0 ? void 0 : file.name) !== null && _a !== void 0 ? _a : '<unknown>';
                try {
                    this.loading = true;
                    const imgSrcUrl = await readFile(input.files);
                    this.imgSrcUrl = imgSrcUrl;
                    // const blob = await blobFromImageUrl(imgSrcUrl);
                    // const image = await blobToImage(blob);
                    // const { width, height } = image;
                    // const mimeType: string = blob.type;
                    // const imageType = mimeType.split('/').pop() || 'unknown';
                    this.userChoseSample = false;
                    // this.emitAnalyticsEvent({
                    //   type: 'success',
                    //   subtype: 'import-image',
                    //   value: eventDetail.detail.selectionMethod,
                    //   dg_params: {
                    //     'image-dimension': [width, height],
                    //     'image-type': imageType,
                    //   },
                    // });
                }
                catch (_error) {
                    this.toastMessage = 'import failure'; // this.config?.picker.importFailure;
                    // this.emitAnalyticsEvent({
                    //   type: 'failure',
                    //   subtype: 'import-image',
                    //   value: pickerEventDetail.detail.selectionMethod,
                    //   dg_params: {
                    //     filename: this.filename,
                    //   },
                    // });
                    this.imgSrcUrl = '';
                    this.filename = '';
                }
                finally {
                    this.loading = false;
                }
            }
        });
    }
    async export(source, imageType, imageQuality, bakePixels) {
        try {
            const hueSat = { hue: this.hue, sat: this.sat };
            const eventDetail = {
                subtype: source,
                detail: {
                    userImage: !this.userChoseSample,
                    adjustments: {
                        hueSat,
                    },
                },
            };
            this.emitInternalEvent(eventDetail);
            this.loading = true;
            const imageData = await this.editor.export(imageType, imageQuality, bakePixels);
            this.emitInternalEvent({
                subtype: 'export-success',
                detail: {
                    imageData,
                    adjustments: {
                        hueSat,
                    },
                    source,
                },
            });
        }
        catch (_a) {
            this.emitInternalEvent({
                subtype: 'export-failure',
                detail: {
                    source,
                    message: this.config.editor.errorDownloading,
                },
            });
        }
        finally {
            this.loading = false;
        }
    }
    async doDownload() {
        this.export('download', 'jpeg', 0.75, true);
    }
    async doContinueInPs() {
        this.export('continue-in-photoshop', 'png', 1, false);
    }
    changeImage() {
        this.fileInput.click();
    }
    // TODO deduplicate function
    emitInternalEvent(detail) {
        this.dispatchEvent(new CustomEvent('ft-internal', {
            composed: true,
            bubbles: true,
            detail,
        }));
    }
    renderControls() {
        if (!this.config) {
            return A$1;
        }
        const acceptedFileTypes = (this.isAndroid ? [] : ['image/jpeg', 'image/png', 'image/webp']).join(',');
        const sliders = x `
      <div class='sliders'>
        <sp-slider
          id="slider-hue"
          label=${this.config.editor.hueLabel}
          label-visibility="text"
          min="-180"
          max="180"
          value=${this.hue}
          @input=${(event) => {
            // @ts-ignore
            const hueStr = event.currentTarget.value;
            this.hue = Number.parseFloat(hueStr);
        }}
          @change=${() => {
            this.emitInternalEvent({
                subtype: 'adjustment',
                detail: { hue: this.hue },
            });
        }}
        >
        </sp-slider>
        <sp-slider
          id="slider-sat"
          label=${this.config.editor.saturationLabel}
          label-visibility="text"
          min="-100"
          max="100"
          value=${this.sat || 0}
          @input=${(event) => {
            // @ts-ignore
            const satStr = event.currentTarget.value;
            this.sat = Number.parseInt(satStr, 10);
        }}
          @change=${() => {
            this.emitInternalEvent({
                subtype: 'adjustment',
                detail: { sat: this.sat },
            });
        }}
        ></sp-slider>
      </div>
    `;
        const continueInPsButton = this.openInPs ? x `
      <sp-action-button
        id="continue-in-photoshop"
        slot="actions"
        ?disabled=${this.loading}
        @click=${this.doContinueInPs}
      >
        <sp-icon slot="icon">${svgStarIcon}</sp-icon>
        ${this.config.editor.tryInPsButtonText}
      </sp-action-button>
    ` : A$1;
        const changeImageButton = x `
      <sp-action-button
        id="button-change-image"
        variant="black"
        selected
        @click=${this.changeImage}
      >
        <sp-icon-image slot="icon"></sp-icon-image>
        ${this.config.editor.changeImageButtonText}
      </sp-action-button>
      <input
        type="file"
        id="file-input"
        accept=${acceptedFileTypes}
        style="display: none"
      />`;
        const actionButton = this.userChoseSample ? changeImageButton : continueInPsButton;
        return x `
        ${sliders} ${actionButton}
        <slot slot="toast" name="toast"></slot>
    `;
    }
    render() {
        if (!this.config) {
            return A$1;
        }
        const toast = !this.toastMessage
            ? A$1
            : x `
          <sp-toast
            slot="toast"
            open
            variant="negative"
            @close=${() => {
                this.toastMessage = undefined;
            }}
          >
            ${this.toastMessage}
          </sp-toast>
        `;
        const content = x `
      <ft-playground-huesat-editor
        id='editor'
        .hue=${this.hue}
        .sat=${this.sat}
        .objectFit=${this.objectFit}
        .loading=${this.loading}
        .config=${this.config.editor}
        .imgSrcUrl=${this.imgSrcUrl}
      >
        ${toast}
      </ft-playground-huesat-editor>
      <div id='controls'>
        <div class="canvas-controls">
          ${this.renderControls()}
        </div>
      </div>
    `;
        return x ` <div id="container">${content}</div> `;
    }
}
FTPlaygroundHueSat.styles = [
    i$c `
      #container {
        position: relative;
      }

      sp-toast {
        position: absolute;
        bottom: 20px;
        left: 50%;
        translate: -50% 0;
        width: calc(100% - 40px);
      }

      sp-slider {
        align-self: center;
        width: 100%;
      }

      #slider-hue {
        --spectrum-slider-track-color: linear-gradient(
          to right,
          red,
          yellow,
          lime,
          cyan,
          blue,
          fuchsia,
          red 100%
        );
        --spectrum-slider-track-color-rtl: linear-gradient(
          to left,
          red,
          fuchsia,
          blue,
          cyan,
          lime,
          yellow,
          red 100%
        );
      }

      #slider-sat {
        --spectrum-slider-track-color: linear-gradient(
          to right,
          grey,
          red 100%
        );
        --spectrum-slider-track-color-rtl: linear-gradient(
          to left,
          grey,
          red 100%
        );
      }

      .sliders {
        display: flex;
        flex-flow: row nowrap;
        gap: 10px;
      }

      #controls {
        position: absolute;
        bottom: 0;
        width: 100%;

        display: flex;
        flex-flow: column-reverse nowrap;
        align-items: stretch;
      }

      .canvas-controls {
        padding: 10px;
        margin: 10px;

        border-radius: 8px;
        background: rgba(255, 255, 255, 0.90);
        backdrop-filter: blur(5px);

        display: flex;
        flex-flow: column nowrap;
      }

      .canvas-controls sp-action-button {
        margin-top: 5px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); // TODO check with @lemay
      }

      @media screen and (min-width: 400px) {

        #controls {
          bottom: unset;
          top: 0;
          flex-direction: column;
          align-items: flex-start;
        }

        .canvas-controls {
          width: 210px;
        }

        .sliders {
          flex-direction: column;
          gap: unset;
        }
      }
    `,
];
__decorate([
    n$5({ type: Boolean })
], FTPlaygroundHueSat.prototype, "download", void 0);
__decorate([
    n$5({ type: Boolean, attribute: 'open-in-ps' })
], FTPlaygroundHueSat.prototype, "openInPs", void 0);
__decorate([
    n$5({ attribute: false })
], FTPlaygroundHueSat.prototype, "config", void 0);
__decorate([
    n$5({ attribute: false })
], FTPlaygroundHueSat.prototype, "imgSrcUrl", void 0);
__decorate([
    t$5()
], FTPlaygroundHueSat.prototype, "userChoseSample", void 0);
__decorate([
    t$5()
], FTPlaygroundHueSat.prototype, "filename", void 0);
__decorate([
    t$5()
], FTPlaygroundHueSat.prototype, "toastMessage", void 0);
__decorate([
    i$9('#editor')
], FTPlaygroundHueSat.prototype, "editor", void 0);
__decorate([
    t$5()
], FTPlaygroundHueSat.prototype, "hue", void 0);
__decorate([
    t$5()
], FTPlaygroundHueSat.prototype, "sat", void 0);
__decorate([
    t$5()
], FTPlaygroundHueSat.prototype, "objectFit", void 0);
__decorate([
    t$5()
], FTPlaygroundHueSat.prototype, "loading", void 0);
__decorate([
    i$9('input#file-input')
], FTPlaygroundHueSat.prototype, "fileInput", void 0);

window.customElements.define('ft-playground-huesat', FTPlaygroundHueSat);

class FTMiloPlaygroundHuesat extends s$6 {
    constructor() {
        super(...arguments);
        this.imgSrcUrl = '';
    }
    render() {
        return x `
      <sp-theme scale="medium" color="light">
        <ft-playground-huesat
          .config=${this.config}
          .imgSrcUrl=${this.imgSrcUrl}
        ></ft-playground-huesat>
      </sp-theme>
    `;
    }
}
__decorate([
    n$5({ attribute: false })
], FTMiloPlaygroundHuesat.prototype, "config", void 0);
__decorate([
    n$5({ attribute: false })
], FTMiloPlaygroundHuesat.prototype, "imgSrcUrl", void 0);

window.customElements.define('ft-milo-playground-huesat', FTMiloPlaygroundHuesat);

export { $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 as $, A$1 as A, Focusable as F, IconBase as I, LanguageResolutionController as L, SizedMixin as S, T, e$2 as a, a$2 as b, tag$1 as c, defineElement as d, e$3 as e, conditionAttributeWithId as f, tag as g, setCustomTemplateLiteralTag as h, i$8 as i, i$c as j, t$5 as k, l$4 as l, i$9 as m, n$5 as n, $6c7bd7858deea686$export$cd11ab140839f11d as o, streamingListener as p, languageResolverUpdatedSymbol as q, setCustomTemplateLiteralTag$1 as s, t$4 as t, x };
