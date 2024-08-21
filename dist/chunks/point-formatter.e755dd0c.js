import{T as P,b as U}from"./lit-html.154a0938.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$=Symbol(),E=new WeakMap;class w{constructor(t,e,s){if(this._$cssResult$=!0,s!==$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(y&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=E.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&E.set(e,t))}return t}toString(){return this.cssText}}const O=i=>new w(typeof i=="string"?i:i+"",void 0,$),x=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new w(e,i,$)},k=(i,t)=>{y?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),r=window.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)})},m=y?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return O(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var d;const _=window.trustedTypes,A=_?_.emptyScript:"",S=window.reactiveElementPolyfillSupport,f={toAttribute(i,t){switch(t){case Boolean:i=i?A:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},g=(i,t)=>t!==i&&(t==t||i==i),u={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:g};class l extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const r=this._$Ep(s,e);r!==void 0&&(this._$Ev.set(r,s),t.push(r))}),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of s)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(m(r))}else t!==void 0&&e.push(m(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return k(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=u){var r,n;const o=this.constructor._$Ep(t,s);if(o!==void 0&&s.reflect===!0){const a=((n=(r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&n!==void 0?n:f.toAttribute)(e,s.type);this._$El=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(t,e){var s,r;const n=this.constructor,o=n._$Ev.get(t);if(o!==void 0&&this._$El!==o){const a=n.getPropertyOptions(o),h=a.converter,C=(r=(s=h?.fromAttribute)!==null&&s!==void 0?s:typeof h=="function"?h:null)!==null&&r!==void 0?r:f.fromAttribute;this._$El=o,this[o]=C(e,a.type),this._$El=null}}requestUpdate(t,e,s){let r=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(s)):this._$Ek()}catch(r){throw e=!1,this._$Ek(),r}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}l.finalized=!0,l.elementProperties=new Map,l.elementStyles=[],l.shadowRootOptions={mode:"open"},S?.({ReactiveElement:l}),((d=globalThis.reactiveElementVersions)!==null&&d!==void 0?d:globalThis.reactiveElementVersions=[]).push("1.3.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var p,v;class c extends l{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=P(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return U}}c.finalized=!0,c._$litElement$=!0,(p=globalThis.litElementHydrateSupport)===null||p===void 0||p.call(globalThis,{LitElement:c});const b=globalThis.litElementPolyfillSupport;b?.({LitElement:c});((v=globalThis.litElementVersions)!==null&&v!==void 0?v:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=i=>t=>typeof t=="function"?((e,s)=>(window.customElements.define(e,s),s))(i,t):((e,s)=>{const{kind:r,elements:n}=s;return{kind:r,elements:n,finisher(o){window.customElements.define(e,o)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function T(i){return(t,e)=>e!==void 0?((s,r,n)=>{r.constructor.createProperty(n,s)})(i,t,e):R(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(i){return T({...i,state:!0})}function j(i){switch(i){case 1:return"TW";case 2:return"ABW";case 3:return"MIT";case 4:return"ST";case 9999999999:default:return""}}const D=new Intl.NumberFormat("de",{maximumFractionDigits:0});export{T as e,j as g,L as n,D as p,x as r,c as s,M as t};
