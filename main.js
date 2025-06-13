/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={361:()=>{!function(){"use strict";var t="undefined"!=typeof window?window:Function("return this;")(),e=function(e,i){return function(e,i){for(var s=null!=i?i:t,o=0;o<e.length&&null!=s;++o)s=s[e[o]];return s}(e.split("."),i)},i=Object.hasOwnProperty,s=function(t,e){return i.call(t,e)},o=0;const n=()=>{return{listeners:[],scriptId:("tiny-script",t=(new Date).getTime(),"tiny-script_"+Math.floor(1e9*Math.random())+ ++o+String(t)),scriptLoaded:!1};var t},r=(()=>{let t=n();return{load:(e,i,s)=>{t.scriptLoaded?s():(t.listeners.push(s),e.getElementById(t.scriptId)||((e,i,s,o)=>{const n=i.createElement("script");n.referrerPolicy="origin",n.type="application/javascript",n.id=e,n.src=s;const r=()=>{n.removeEventListener("load",r),t.listeners.forEach((t=>t())),t.scriptLoaded=!0};n.addEventListener("load",r),i.head&&i.head.appendChild(n)})(t.scriptId,e,i))},reinitialize:()=>{t=n()}}})();var a;!function(t){t[t.Raw=0]="Raw",t[t.Initializing=1]="Initializing",t[t.Ready=2]="Ready"}(a||(a={}));const l=t=>e=>s(t,e)?t[e]:e,d=e,h=function(t){return t},c=l({false:!1}),p=l({true:!0,false:!1}),u=t=>/^\d+$/.test(t)?Number.parseInt(t,10):t,m={setup:d,toolbar:c,menubar:c,plugins:h,content_css:h,content_style:h,width:u,height:u,toolbar_mode:h,contextmenu:c,quickbars_insert_toolbar:c,quickbars_selection_toolbar:c,powerpaste_word_import:h,powerpaste_html_import:h,powerpaste_allow_local_images:p,resize:p,skin:h,skin_url:h,images_upload_url:h,images_upload_handler:d,images_upload_base_path:h,images_upload_credentials:p,images_reuse_filename:p,icons:h,icons_url:h},v={};class f extends HTMLElement{constructor(){super(),this._eventAttrHandler=t=>{t.forEach((t=>{var e;"attributes"===t.type&&t.target===this&&(null===(e=t.attributeName)||void 0===e?void 0:e.toLowerCase().startsWith("on-"))&&this._updateEventAttr(t.attributeName,this.getAttribute(t.attributeName))}))},this._formDataHandler=t=>{const e=this.name;null!==e&&t.formData.append(e,this.value)},this._status=a.Raw,this._shadowDom=this.attachShadow({mode:"open"}),this._form=null,this._eventHandlers={},this._mutationObserver=new MutationObserver(this._eventAttrHandler)}static get formAssociated(){return!0}static get observedAttributes(){return["form","readonly","autofocus","placeholder"].concat(["on-BeforePaste","on-Blur","on-Click","on-ContextMenu","on-Copy","on-Cut","on-Dblclick","on-Drag","on-DragDrop","on-DragEnd","on-DragGesture","on-DragOver","on-Drop","on-Focus","on-FocusIn","on-FocusOut","on-KeyDown","on-KeyPress","on-KeyUp","on-MouseDown","on-MouseEnter","on-MouseLeave","on-MouseMove","on-MouseOut","on-MouseOver","on-MouseUp","on-Paste","on-SelectionChange"]).concat(["on-Activate","on-AddUndo","on-BeforeAddUndo","on-BeforeExecCommand","on-BeforeGetContent","on-BeforeRenderUI","on-BeforeSetContent","on-Change","on-ClearUndos","on-Deactivate","on-Dirty","on-ExecCommand","on-GetContent","on-Hide","on-Init","on-LoadContent","on-NodeChange","on-PostProcess","on-PostRender","on-PreProcess","on-ProgressState","on-Redo","on-Remove","on-Reset","on-SaveContent","on-SetAttrib","on-ObjectResizeStart","on-ObjectResized","on-ObjectSelected","on-SetContent","on-Show","on-Submit","on-Undo","on-VisualAid"])}_updateEventAttr(t,i){const s=t.substring("on-".length).toLowerCase(),o=null!==i?e(i):void 0;this._eventHandlers[s]!==o&&(this._editor&&this._eventHandlers[s]&&this._editor.off(s,this._eventHandlers[s]),o?(this._editor&&this._editor.on(s,o),this._eventHandlers[s]=o):delete this._eventHandlers[s])}_updateForm(){if(this.isConnected){const t=this.getAttribute("form"),e=null!==t?this.ownerDocument.querySelector("form#"+t):this.closest("form");this._form!==e&&(null!==this._form&&this._form.removeEventListener("formdata",this._formDataHandler),this._form=e,null!==this._form&&this._form.addEventListener("formdata",this._formDataHandler))}else null!==this._form&&(this._form.removeEventListener("formdata",this._formDataHandler),this._form=null)}_getTinymce(){return t.tinymce}_getConfig(){var t,e;const i=null!==(e=d(null!==(t=this.getAttribute("config"))&&void 0!==t?t:""))&&void 0!==e?e:{};for(let t=0;t<this.attributes.length;t++){const e=this.attributes.item(t);null!==e&&s(m,e.name)&&(i[s(v,e.name)?v[e.name]:e.name]=m[e.name](e.value))}return this.readonly&&(i.readonly=!0),this.autofocus&&(i.auto_focus=!0),delete i.target,delete i.selector,i}_getEventHandlers(){const t={};for(let i=0;i<this.attributes.length;i++){const s=this.attributes.item(i);if(null!==s&&s.name.toLowerCase().startsWith("on-")){const i=s.name.toLowerCase().substr("on-".length),o=e(s.value);t[i]=o}}return t}_doInit(){var t;this._status=a.Initializing;const e=document.createElement("textarea");e.value=null!==(t=this.textContent)&&void 0!==t?t:"",null!==this.placeholder&&(e.placeholder=this.placeholder),this._shadowDom.appendChild(e);const i=this._getConfig(),s=Object.assign(Object.assign({},i),{target:e,setup:t=>{this._editor=t,t.on("init",(t=>{this._status=a.Ready})),t.on("SwitchMode",(t=>{this.readonly=this.readonly})),Object.keys(this._eventHandlers).forEach((e=>{t.on(e,this._eventHandlers[e])})),"function"==typeof i.setup&&i.setup(t)}});this._getTinymce().init(s)}_getTinymceSrc(){var t;const e=this.getAttribute("src");if(e)return e;const i=null!==(t=this.getAttribute("channel"))&&void 0!==t?t:"5-stable";return`https://cdn.tiny.cloud/1/${this.hasAttribute("api-key")?this.getAttribute("api-key"):"no-api-key"}/tinymce/${i}/tinymce.min.js`}_loadTinyDoInit(){this._getTinymce()?this._doInit():r.load(this.ownerDocument,this._getTinymceSrc(),(()=>this._doInit()))}attributeChangedCallback(t,e,i){e!==i&&("form"===t?this._updateForm():"readonly"===t?this.readonly=null!==i:"autofocus"===t?this.autofocus=null!==i:"placeholder"===t?this.placeholder=i:t.toLowerCase().startsWith("on")&&this._updateEventAttr(t,i))}connectedCallback(){this._eventHandlers=this._getEventHandlers(),this._mutationObserver.observe(this,{attributes:!0,childList:!1,subtree:!1}),this._updateForm(),this._status===a.Raw&&this._loadTinyDoInit()}disconnectedCallback(){this._mutationObserver.disconnect(),this._updateForm()}get value(){return this._status===a.Ready?this._editor.getContent():void 0}set value(t){this._status===a.Ready&&this._editor.setContent(t)}get readonly(){return this._editor?"readonly"===this._editor.mode.get():this.hasAttribute("readonly")}set readonly(t){t?(this._editor&&"readonly"!==this._editor.mode.get()&&this._editor.mode.set("readonly"),this.hasAttribute("readonly")||this.setAttribute("readonly","")):(this._editor&&"readonly"===this._editor.mode.get()&&this._editor.mode.set("design"),this.hasAttribute("readonly")&&this.removeAttribute("readonly"))}get placeholder(){return this.getAttribute("placeholder")}set placeholder(t){if(this._editor){const e=this._editor.getElement();null!==e&&(null!==t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder"))}null!==t?this.getAttribute("placeholder")!==t&&this.setAttribute("placeholder",t):this.hasAttribute("placeholder")&&this.removeAttribute("placeholder")}get autofocus(){return this.hasAttribute("autofocus")}set autofocus(t){t?this.hasAttribute("autofocus")||this.setAttribute("autofocus",""):this.hasAttribute("autofocus")&&this.removeAttribute("autofocus")}get form(){return this._form}get name(){return this.getAttribute("name")}get type(){return this.localName}}window.customElements.define("tinymce-editor",f)}()}},e={};function i(s){var o=e[s];if(void 0!==o)return o.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var l;const d=window,h=d.trustedTypes,c=h?h.emptyScript:"",p=d.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m},f="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var _;g[f]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(l=d.reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,$=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,E="?"+x,w=`<${E}>`,S=document,C=()=>S.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,U=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),P=/'/g,L=/"/g,M=/^(?:script|style|textarea|title)$/i,I=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),N=I(1),D=(I(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),j=new WeakMap,B=S.createTreeWalker(S,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const q=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=k;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===k?"!--"===l[1]?r=H:void 0!==l[1]?r=U:void 0!==l[2]?(M.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=o?o:k,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?O:'"'===l[3]?L:P):r===L||r===P?r=O:r===H||r===U?r=k:(r=O,o=void 0);const c=r===O&&t[e+1].startsWith("/>")?" ":"";n+=r===k?i+w:d>=0?(s.push(a),i.slice(0,d)+A+i.slice(d)+x+c):i+x+(-2===d?(s.push(void 0),e):c)}return[V(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,d]=q(t,e);if(this.el=W.createElement(l,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=B.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(A)||e.startsWith(x)){const i=d[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+A).split(x),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Q:"@"===e[1]?X:G})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),B.nextNode(),a.push({type:2,index:++o});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)a.push({type:7,index:o}),t+=x.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){var o,n,r,a;if(e===D)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const d=T(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);B.currentNode=o;let n=B.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Y(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new tt(n,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=B.nextNode(),r++)}return B.currentNode=S,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{constructor(t,e,i,s){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),T(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>R(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=W.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new K(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new W(t)),e}T(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Y(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,s,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=F(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==D,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=F(this,s[i+r],e,r),a===D&&(a=this._$AH[r]),n||(n=!T(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const Z=y?y.emptyScript:"";class Q extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class X extends G{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:z)===D)return;const s=this._$AH,o=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==z&&(s===z||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const et=b.litHtmlPolyfillSupport;var it,st;null==et||et(W,Y),(null!==(_=b.litHtmlVersions)&&void 0!==_?_:b.litHtmlVersions=[]).push("2.8.0");class ot extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Y(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}ot.finalized=!0,ot._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:ot});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:ot}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3"),i(361);class rt extends ot{static properties={templates:{type:Array},isEditorReady:{type:Boolean}};static styles=r`
    :host {
      display: block;
      flex:3;
    }

    .editor-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      padding: 16px;
      height: calc(100vh - 48px);
      box-sizing: border-box;
      overflow: hidden;
    }

    .toolbar {
      display: flex;
      gap: 12px;
      padding: 12px;
      background: #f8f9fa;
      border-radius: 8px;
      border: 1px solid #e9ecef;
      flex-shrink: 0;
    }

    .insert-button {
      padding: 10px 32px;
      background: #4361ee;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
    }

    .insert-button:hover {
      background: #3a56d4;
      transform: translateY(-1px);
    }

    .insert-button:active {
      transform: translateY(0);
    }

    .insert-button:disabled {
      background: #adb5bd;
      cursor: not-allowed;
      transform: none;
    }

    :host ::slotted(.tox-tinymce) {
      border-radius: 8px !important;
      border: 1px solid #e9ecef !important;
      flex: 1 !important;
      height: auto !important;
    }

    :host ::slotted(.tox .tox-edit-area__iframe) {
      height: 100% !important;
    }

    :host ::slotted(.tox .tox-toolbar) {
      background: #f8f9fa !important;
      border-bottom: 1px solid #e9ecef !important;
    }

    :host ::slotted(.tox .tox-tbtn) {
      color: #495057 !important;
    }

    :host ::slotted(.tox .tox-tbtn:hover) {
      background: #e9ecef !important;
    }

    .error-option {
      color: #e03131;
    }

    @media (max-width: 1024px) {
      .editor-container {
        height: calc(100vh - 32px);
      }

      .insert-button {
        padding: 8px 24px;
      }
    }

    @media (max-width: 768px) {
      .editor-container {
        height: auto;
        min-height: 50vh;
      }

      .insert-button {
        width: 100%;
        justify-content: center;
      }

      :host ::slotted(.tox .tox-toolbar__group) {
        flex-wrap: wrap;
      }

      :host ::slotted(.tox .tox-tbtn) {
        padding: 4px !important;
      }
    }

    @media (max-width: 480px) {
      .editor-container {
        padding: 12px;
      }

      .toolbar {
        padding: 8px;
      }
    }
  `;constructor(){super(),this.templates=[],this.tinymceEditorInstance=null,this.isEditorReady=!1}firstUpdated(){this.initializeEditor()}initializeEditor(){try{const t=this.shadowRoot.querySelector("tinymce-editor");if(!t)throw new Error("Editor element not found");window.tinymce.init({target:t,height:500,menubar:!1,plugins:"lists link image table code help wordcount",toolbar:"undo redo | blocks | bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist | link image | removeformat help",setup:t=>{this.tinymceEditorInstance=t,t.on("init",(()=>{console.log("Editor initialized"),this.isEditorReady=!0,this.attachSelectListeners()})),t.on("click",(()=>{this.attachSelectListeners()}))}})}catch(t){console.error("Failed to initialize editor:",t),alert("Ошибка инициализации редактора")}}insertTemplate(){if(this.isEditorReady)try{const t=`<select class="template-select">${this.templates.map((t=>`<option value="${t}">${t}</option>`)).join("")}</select>`;this.tinymceEditorInstance.insertContent(t),this.attachSelectListeners()}catch(t){console.error("Error inserting template:",t),alert("Ошибка при вставке шаблона: "+t.message)}else alert("Редактор еще не готов!")}attachSelectListeners(){this.tinymceEditorInstance&&this.tinymceEditorInstance.getBody().querySelectorAll("select.template-select").forEach((t=>{t._listenerAttached||(t.addEventListener("change",(()=>{const e=t.value;this.templates.includes(e)?t.classList.remove("error-option"):t.classList.add("error-option")})),t._listenerAttached=!0)}))}updateAllSelectsAfterRename(t,e){this.tinymceEditorInstance&&(this.tinymceEditorInstance.getBody().querySelectorAll("select.template-select").forEach((i=>{const s=i.value,o=document.createElement("select");o.className="template-select";let n=s;s===t&&(n=e);let r=this.templates.map((t=>`<option value="${t}" ${t===n?"selected":""}>${t}</option>`)).join("");this.templates.includes(n)||(r+='<option value="ERROR" selected class="error-option">ERROR</option>'),o.innerHTML=r,i.replaceWith(o)})),this.attachSelectListeners())}updateAllSelects(){if(this.tinymceEditorInstance)try{this.tinymceEditorInstance.getBody().querySelectorAll("select.template-select").forEach((t=>{const e=t.value,i=document.createElement("select");i.className="template-select";let s=this.templates.map((t=>`<option value="${t}" ${t===e?"selected":""}>${t}</option>`)).join("");this.templates.includes(e)||(s+='<option value="ERROR" selected class="error-option">ERROR</option>'),i.innerHTML=s,t.replaceWith(i)})),this.attachSelectListeners()}catch(t){console.error("Error updating selects:",t)}}render(){return N`
      <div class="editor-container">
        <div class="toolbar">
          <button 
            class="insert-button" 
            @click=${this.insertTemplate}
            ?disabled=${!this.isEditorReady}
          >
            ${this.isEditorReady?"Insert Template":"Loading..."}
          </button>
        </div>
        <tinymce-editor
          api-key="${process.env.TINYMCE_API_KEY}"
        ></tinymce-editor>
      </div>
    `}}customElements.define("editor-panel",rt);class at extends ot{static properties={templates:{type:Array},selectedTemplate:{type:String},editTemplate:{type:String}};static styles=r`
    :host {
      display: block;
    }

    .templates-panel {
      flex: 1;
      padding: 24px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: calc(100vh - 48px);
      box-sizing: border-box;
      overflow: hidden;
      min-width: 300px;
    }

    .templates-panel h3 {
      margin: 0;
      color: #212529;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .template-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .template-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px;
      background: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .template-item:hover {
      background: #e9ecef;
      transform: translateY(2px);
    }

    .template-item.selected {
      background: #e7f5ff;
      border-color: #74c0fc;
    }

    .template-controls {
      display: flex;
      gap: 8px;
    }

    .template-controls button {
      padding: 6px 12px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;
      background: #e9ecef;
      color: #495057;
    }

    .template-controls button:hover {
      background: #dee2e6;
    }

    .edit-template {
      margin-top: auto;
      padding-top: 16px;
      border-top: 1px solid #e9ecef;
      width: 100%;
      box-sizing: border-box;
    }

    .edit-template label {
      display: block;
      margin-bottom: 8px;
      color: #495057;
      font-weight: 500;
    }

    .edit-template input {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #ced4da;
      border-radius: 6px;
      font-size: 0.9rem;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    .edit-template input:focus {
      outline: none;
      border-color: #74c0fc;
      box-shadow: 0 0 0 3px rgba(116, 192, 252, 0.2);
    }

    .add-template-button {
      width: 100%;
      height: 100%;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      color: #495057;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-template-button:hover {
      color: #4361ee;
      transform: translateY(2px);
    }

    @media (max-width: 768px) {
      .templates-panel {
        height: auto;
        min-height: 50vh;
        min-width: auto;
      }

      .template-item {
        padding: 8px;
      }

      .template-controls button {
        padding: 4px 8px;
      }
    }

    @media (max-width: 480px) {
      .templates-panel {
        padding: 12px;
      }

      .template-item {
        font-size: 0.9rem;
      }

      .edit-template input {
        font-size: 0.85rem;
        padding: 8px 10px;
      }
    }
  `;constructor(){super(),this.templates=[],this.selectedTemplate="",this.editTemplate=""}addTemplate(){let t=this.templates.length+1,e=`template ${t}`;for(;this.templates.includes(e);)t++,e=`template ${t}`;this.templates=[...this.templates,e],this.selectTemplate(e),this.dispatchEvent(new CustomEvent("templates-updated",{detail:{templates:this.templates}}))}removeTemplate(t){this.templates.length<=1?alert("Нельзя удалить последний шаблон"):confirm(`Вы уверены, что хотите удалить шаблон "${t}"?`)&&(this.templates=this.templates.filter((e=>e!==t)),this.selectedTemplate===t&&(this.selectedTemplate="",this.editTemplate=""),this.dispatchEvent(new CustomEvent("templates-updated",{detail:{templates:this.templates}})))}selectTemplate(t){this.selectedTemplate=t,this.editTemplate=t}updateTemplate(t){if("Enter"===t.key||"blur"===t.type){const t=this.selectedTemplate.trim(),e=this.editTemplate.trim();if(!e||t===e)return;if(this.templates.includes(e)&&e!==t)return void alert("Шаблон с таким именем уже существует");const i=this.templates.indexOf(t);-1!==i&&(this.templates[i]=e,this.templates=[...this.templates],this.selectedTemplate=e,this.editTemplate=e,this.dispatchEvent(new CustomEvent("template-renamed",{detail:{oldValue:t,newValue:e}})))}}render(){return N`
      <div class="templates-panel">
        <h3>Templates</h3>
        <ul class="template-list">
          ${this.templates.map((t=>N`
            <li class="template-item ${this.selectedTemplate===t?"selected":""}"
                @click=${()=>this.selectTemplate(t)}>
              <span>${t}</span>
              <div class="template-controls">
                <button @click=${e=>{e.stopPropagation(),this.removeTemplate(t)}}>-</button>
              </div>
            </li>
          `))}
          <li class="template-item">
            <button class="add-template-button" @click=${this.addTemplate}>+</button>
          </li>
        </ul>
        <div class="edit-template">
          <label>Edit template:</label>
          <input 
            type="text" 
            .value=${this.editTemplate}
            @input=${t=>this.editTemplate=t.target.value}
            @keyup=${this.updateTemplate}
            @blur=${this.updateTemplate}
            placeholder="Enter template name"
          >
        </div>
      </div>
    `}}customElements.define("templates-panel",at);class lt extends ot{static properties={templates:{type:Array}};static styles=r`
    :host {
      display: flex;
      height: 100vh;
      padding: 24px;
      gap: 24px;
      background: #f8f9fa;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      box-sizing: border-box;
      overflow: hidden;
    }

    @media (max-width: 1024px) {
      :host {
        padding: 16px;
        gap: 16px;
      }
    }

    @media (max-width: 768px) {
      :host {
        flex-direction: column;
        height: auto;
        min-height: 100vh;
        padding: 12px;
        gap: 12px;
      }
    }

    @media (max-width: 480px) {
      :host {
        padding: 8px;
        gap: 8px;
      }
    }
  `;constructor(){super(),this.templates=["template 1","template 2","template 3"]}handleTemplatesUpdated(t){this.templates=t.detail.templates;const e=this.shadowRoot.querySelector("editor-panel");e&&(e.templates=this.templates,e.updateAllSelects())}handleTemplateRenamed(t){const{oldValue:e,newValue:i}=t.detail,s=this.shadowRoot.querySelector("editor-panel");s&&s.updateAllSelectsAfterRename(e,i)}render(){return N`
      <editor-panel
        .templates=${this.templates}
      ></editor-panel>
      <templates-panel
        .templates=${this.templates}
        @templates-updated=${this.handleTemplatesUpdated}
        @template-renamed=${this.handleTemplateRenamed}
      ></templates-panel>
    `}}customElements.define("editor-component",lt),document.body.innerHTML="<editor-component></editor-component>";class dt extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}static get observedAttributes(){return["title"]}attributeChangedCallback(t,e,i){console.log(`Changing "${t}" from "${e}" to "${i}"`),"title"===t&&this.render()}get title(){return this.getAttribute("title")}set title(t){this.setAttribute("title",t)}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`\n            <style>\n                h1 {\n                    color: red;\n                }\n            </style>\n            <h1>\n                ${this.title}\n            </h1>\n        `}}customElements.define("hello-world",dt)})()})();