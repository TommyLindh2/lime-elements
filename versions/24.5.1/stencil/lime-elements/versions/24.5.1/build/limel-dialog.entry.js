import{r as t,c as n,h as i,g as e}from"./core-5f6fd4ec.js";import{_ as o,a as s,c as r}from"./tslib.es6-1f0f644b.js";import{M as c,a as u}from"./component-d4db6478.js";import{m as a,c as h}from"./index-8af7e892.js";import{M as l}from"./component-235681bd.js";import{c as f}from"./random-string-60cd3186.js";import{d}from"./dispatch-resize-event-6327130c.js";var m=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],g=m.join(","),v="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function p(t,n){n=n||{};var i,e,o,s=[],r=[],c=new y(t.ownerDocument||t),u=t.querySelectorAll(g);for(n.includeContainer&&v.call(t,g)&&(u=Array.prototype.slice.apply(u)).unshift(t),i=0;i<u.length;i++)E(e=u[i],c)&&(0===(o=C(e))?s.push(e):r.push({documentOrder:i,tabIndex:o,node:e}));return r.sort(T).map((function(t){return t.node})).concat(s)}function E(t,n){return!(!_(t,n)||function(t){return function(t){return O(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var n=function(t){for(var n=0;n<t.length;n++)if(t[n].checked)return t[n]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!n||n===t}(t)}(t)||C(t)<0)}function _(t,n){return n=n||new y(t.ownerDocument||t),!(t.disabled||function(t){return O(t)&&"hidden"===t.type}(t)||n.isUntouchable(t))}p.isTabbable=function(t,n){if(!t)throw new Error("No node provided");return!1!==v.call(t,g)&&E(t,n)},p.isFocusable=function(t,n){if(!t)throw new Error("No node provided");return!1!==v.call(t,b)&&_(t,n)};var b=m.concat("iframe").join(",");function C(t){var n=parseInt(t.getAttribute("tabindex"),10);return isNaN(n)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:n}function T(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex}function O(t){return"INPUT"===t.tagName}function y(t){this.doc=t,this.cache=[]}y.prototype.hasDisplayNone=function(t,n){if(t.nodeType!==Node.ELEMENT_NODE)return!1;var i=function(n){for(var i=0,e=n.length;i<e;i++)if(n[i]===t)return n[i]}(this.cache);if(i)return i[1];var e=!1;return"none"===(n=n||this.doc.defaultView.getComputedStyle(t)).display?e=!0:t.parentNode&&(e=this.hasDisplayNone(t.parentNode)),this.cache.push([t,e]),e},y.prototype.isUntouchable=function(t){if(t===this.doc.documentElement)return!1;var n=this.doc.defaultView.getComputedStyle(t);return!!this.hasDisplayNone(t,n)||"hidden"===n.visibility};var D,w=p,N=Object.prototype.hasOwnProperty,S=(D=[],{activateTrap:function(t){if(D.length>0){var n=D[D.length-1];n!==t&&n.pause()}var i=D.indexOf(t);-1===i?D.push(t):(D.splice(i,1),D.push(t))},deactivateTrap:function(t){var n=D.indexOf(t);-1!==n&&D.splice(n,1),D.length>0&&D[D.length-1].unpause()}});function A(t){return setTimeout(t,0)}var L=function(t,n){var i=document,e="string"==typeof t?i.querySelector(t):t,o=function(){for(var t={},n=0;n<arguments.length;n++){var i=arguments[n];for(var e in i)N.call(i,e)&&(t[e]=i[e])}return t}({returnFocusOnDeactivate:!0,escapeDeactivates:!0},n),s={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},r={activate:function(t){if(!s.active){v(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=i.activeElement;var n=t&&t.onActivate?t.onActivate:o.onActivate;return n&&n(),u(),r}},deactivate:c,pause:function(){!s.paused&&s.active&&(s.paused=!0,a())},unpause:function(){s.paused&&s.active&&(s.paused=!1,u())}};return r;function c(t){if(s.active){a(),s.active=!1,s.paused=!1,S.deactivateTrap(r);var n=t&&void 0!==t.onDeactivate?t.onDeactivate:o.onDeactivate;return n&&n(),(t&&void 0!==t.returnFocus?t.returnFocus:o.returnFocusOnDeactivate)&&A((function(){p(s.nodeFocusedBeforeActivation)})),r}}function u(){if(s.active)return S.activateTrap(r),v(),A((function(){p(l())})),i.addEventListener("focusin",d,!0),i.addEventListener("mousedown",f,!0),i.addEventListener("touchstart",f,!0),i.addEventListener("click",g,!0),i.addEventListener("keydown",m,!0),r}function a(){if(s.active)return i.removeEventListener("focusin",d,!0),i.removeEventListener("mousedown",f,!0),i.removeEventListener("touchstart",f,!0),i.removeEventListener("click",g,!0),i.removeEventListener("keydown",m,!0),r}function h(t){var n=o[t],e=n;if(!n)return null;if("string"==typeof n&&!(e=i.querySelector(n)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof n&&!(e=n()))throw new Error("`"+t+"` did not return a node");return e}function l(){var t;if(!(t=null!==h("initialFocus")?h("initialFocus"):e.contains(i.activeElement)?i.activeElement:s.firstTabbableNode||h("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}function f(t){e.contains(t.target)||(o.clickOutsideDeactivates?c({returnFocus:!w.isFocusable(t.target)}):t.preventDefault())}function d(t){e.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),p(s.mostRecentlyFocusedNode||l()))}function m(t){if(!1!==o.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void c();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){if(v(),t.shiftKey&&t.target===s.firstTabbableNode)return t.preventDefault(),void p(s.lastTabbableNode);t.shiftKey||t.target!==s.lastTabbableNode||(t.preventDefault(),p(s.firstTabbableNode))}(t)}function g(t){o.clickOutsideDeactivates||e.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function v(){var t=w(e);s.firstTabbableNode=t[0]||l(),s.lastTabbableNode=t[t.length-1]||l()}function p(t){t!==i.activeElement&&(t&&t.focus?(t.focus(),s.mostRecentlyFocusedNode=t,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(t)&&t.select()):p(l()))}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function F(t,n,i){return void 0===n&&(n=L),n(t,{clickOutsideDeactivates:!0,escapeDeactivates:!1,initialFocus:i})}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var M={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},k={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DEFAULT_BUTTON_SELECTOR:".mdc-dialog__button--default",DESTROY_ACTION:"destroy",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},I={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},R=function(t){function n(i){var e=t.call(this,s({},n.defaultAdapter,i))||this;return e.isOpen_=!1,e.animationFrame_=0,e.animationTimer_=0,e.layoutFrame_=0,e.escapeKeyAction_=k.CLOSE_ACTION,e.scrimClickAction_=k.CLOSE_ACTION,e.autoStackButtons_=!0,e.areButtonsStacked_=!1,e}return o(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return M},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return k},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){this.adapter_.hasClass(M.STACKED)&&this.setAutoStackButtons(!1)},n.prototype.destroy=function(){this.isOpen_&&this.close(k.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},n.prototype.open=function(){var t=this;this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.addClass(M.OPENING),this.runNextAnimationFrame_((function(){t.adapter_.addClass(M.OPEN),t.adapter_.addBodyClass(M.SCROLL_LOCK),t.layout(),t.animationTimer_=setTimeout((function(){t.handleAnimationTimerEnd_(),t.adapter_.trapFocus(),t.adapter_.notifyOpened()}),I.DIALOG_ANIMATION_OPEN_TIME_MS)}))},n.prototype.close=function(t){var n=this;void 0===t&&(t=""),this.isOpen_&&(this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(M.CLOSING),this.adapter_.removeClass(M.OPEN),this.adapter_.removeBodyClass(M.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){n.adapter_.releaseFocus(),n.handleAnimationTimerEnd_(),n.adapter_.notifyClosed(t)}),I.DIALOG_ANIMATION_CLOSE_TIME_MS))},n.prototype.isOpen=function(){return this.isOpen_},n.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},n.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction_=t},n.prototype.getScrimClickAction=function(){return this.scrimClickAction_},n.prototype.setScrimClickAction=function(t){this.scrimClickAction_=t},n.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},n.prototype.setAutoStackButtons=function(t){this.autoStackButtons_=t},n.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},n.prototype.handleInteraction=function(t){var n="click"===t.type,i="Enter"===t.key||13===t.keyCode,e="Space"===t.key||32===t.keyCode,o=this.adapter_.eventTargetMatches(t.target,k.SCRIM_SELECTOR),s=!this.adapter_.eventTargetMatches(t.target,k.SUPPRESS_DEFAULT_PRESS_SELECTOR);if(n&&o&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else if(n||e||i){var r=this.adapter_.getActionFromEvent(t);r?this.close(r):i&&s&&this.adapter_.clickDefaultButton()}},n.prototype.handleDocumentKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},n.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},n.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(M.OPENING),this.adapter_.removeClass(M.CLOSING)},n.prototype.runNextAnimationFrame_=function(t){var n=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){n.animationFrame_=0,clearTimeout(n.animationTimer_),n.animationTimer_=setTimeout(t,0)}))},n.prototype.detectStackedButtons_=function(){this.adapter_.removeClass(M.STACKED);var t=this.adapter_.areButtonsStacked();t&&this.adapter_.addClass(M.STACKED),t!==this.areButtonsStacked_&&(this.adapter_.reverseButtons(),this.areButtonsStacked_=t)},n.prototype.detectScrollableContent_=function(){this.adapter_.removeClass(M.SCROLLABLE),this.adapter_.isContentScrollable()&&this.adapter_.addClass(M.SCROLLABLE)},n}(c),j=R.strings,B=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),Object.defineProperty(n.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"escapeKeyAction",{get:function(){return this.foundation_.getEscapeKeyAction()},set:function(t){this.foundation_.setEscapeKeyAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scrimClickAction",{get:function(){return this.foundation_.getScrimClickAction()},set:function(t){this.foundation_.setScrimClickAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"autoStackButtons",{get:function(){return this.foundation_.getAutoStackButtons()},set:function(t){this.foundation_.setAutoStackButtons(t)},enumerable:!0,configurable:!0}),n.attachTo=function(t){return new n(t)},n.prototype.initialize=function(t,n){var i,e,o=this.root_.querySelector(j.CONTAINER_SELECTOR);if(!o)throw new Error("Dialog component requires a "+j.CONTAINER_SELECTOR+" container element");this.container_=o,this.content_=this.root_.querySelector(j.CONTENT_SELECTOR),this.buttons_=[].slice.call(this.root_.querySelectorAll(j.BUTTON_SELECTOR)),this.defaultButton_=this.root_.querySelector(j.DEFAULT_BUTTON_SELECTOR),this.focusTrapFactory_=t,this.initialFocusEl_=n,this.buttonRipples_=[];try{for(var s=r(this.buttons_),c=s.next();!c.done;c=s.next())this.buttonRipples_.push(new l(c.value))}catch(u){i={error:u}}finally{try{c&&!c.done&&(e=s.return)&&e.call(s)}finally{if(i)throw i.error}}},n.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap_=F(this.container_,this.focusTrapFactory_,this.initialFocusEl_),this.handleInteraction_=this.foundation_.handleInteraction.bind(this.foundation_),this.handleDocumentKeydown_=this.foundation_.handleDocumentKeydown.bind(this.foundation_),this.handleLayout_=this.layout.bind(this);var n=["resize","orientationchange"];this.handleOpening_=function(){n.forEach((function(n){return window.addEventListener(n,t.handleLayout_)})),document.addEventListener("keydown",t.handleDocumentKeydown_)},this.handleClosing_=function(){n.forEach((function(n){return window.removeEventListener(n,t.handleLayout_)})),document.removeEventListener("keydown",t.handleDocumentKeydown_)},this.listen("click",this.handleInteraction_),this.listen("keydown",this.handleInteraction_),this.listen(j.OPENING_EVENT,this.handleOpening_),this.listen(j.CLOSING_EVENT,this.handleClosing_)},n.prototype.destroy=function(){this.unlisten("click",this.handleInteraction_),this.unlisten("keydown",this.handleInteraction_),this.unlisten(j.OPENING_EVENT,this.handleOpening_),this.unlisten(j.CLOSING_EVENT,this.handleClosing_),this.handleClosing_(),this.buttonRipples_.forEach((function(t){return t.destroy()})),t.prototype.destroy.call(this)},n.prototype.layout=function(){this.foundation_.layout()},n.prototype.open=function(){this.foundation_.open()},n.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},n.prototype.getDefaultFoundation=function(){var t=this;return new R({addBodyClass:function(t){return document.body.classList.add(t)},addClass:function(n){return t.root_.classList.add(n)},areButtonsStacked:function(){return n=t.buttons_,i=new Set,[].forEach.call(n,(function(t){return i.add(t.offsetTop)})),i.size>1;var n,i},clickDefaultButton:function(){return t.defaultButton_&&t.defaultButton_.click()},eventTargetMatches:function(t,n){return!!t&&a(t,n)},getActionFromEvent:function(t){if(!t.target)return"";var n=h(t.target,"["+j.ACTION_ATTRIBUTE+"]");return n&&n.getAttribute(j.ACTION_ATTRIBUTE)},hasClass:function(n){return t.root_.classList.contains(n)},isContentScrollable:function(){return!!(n=t.content_)&&n.scrollHeight>n.offsetHeight;var n},notifyClosed:function(n){return t.emit(j.CLOSED_EVENT,n?{action:n}:{})},notifyClosing:function(n){return t.emit(j.CLOSING_EVENT,n?{action:n}:{})},notifyOpened:function(){return t.emit(j.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(j.OPENING_EVENT,{})},releaseFocus:function(){return t.focusTrap_.deactivate()},removeBodyClass:function(t){return document.body.classList.remove(t)},removeClass:function(n){return t.root_.classList.remove(n)},reverseButtons:function(){t.buttons_.reverse(),t.buttons_.forEach((function(t){t.parentElement.appendChild(t)}))},trapFocus:function(){return t.focusTrap_.activate()}})},n}(u);const P=class{constructor(i){t(this,i),this.fullscreen=!1,this.open=!1,this.closingActions={escapeKey:!0,scrimClick:!0},this.handleMdcOpened=this.handleMdcOpened.bind(this),this.handleMdcClosed=this.handleMdcClosed.bind(this),this.handleMdcClosing=this.handleMdcClosing.bind(this),this.close=n(this,"close",7),this.closing=n(this,"closing",7)}componentWillLoad(){this.id=f()}componentDidLoad(){this.mdcDialog=new B(this.host.shadowRoot.querySelector(".mdc-dialog")),this.open&&this.mdcDialog.open();const{activate:t,deactivate:n}=F(this.host.shadowRoot.querySelector(".mdc-dialog__surface"),L,this.host.shadowRoot.querySelector("#initialFocusEl"));this.mdcDialog.foundation_.adapter_.trapFocus=()=>{t()},this.mdcDialog.foundation_.adapter_.releaseFocus=()=>{n()},this.mdcDialog.listen("MDCDialog:opened",this.handleMdcOpened),this.mdcDialog.listen("MDCDialog:closed",this.handleMdcClosed),this.mdcDialog.listen("MDCDialog:closing",this.handleMdcClosing),this.mdcDialog.scrimClickAction=this.closingActions.scrimClick?"close":"",this.mdcDialog.escapeKeyAction=this.closingActions.escapeKey?"close":""}componentDidUnload(){this.mdcDialog.unlisten("MDCDialog:opened",this.handleMdcOpened),this.mdcDialog.unlisten("MDCDialog:closed",this.handleMdcClosed),this.mdcDialog.unlisten("MDCDialog:closing",this.handleMdcClosing),this.mdcDialog.destroy()}render(){return i("div",{class:"mdc-dialog",role:"alertdialog","aria-modal":"true","aria-labelledby":"limel-dialog-title-"+this.id,"aria-describedby":"limel-dialog-content-"+this.id},i("input",{hidden:!0,id:"initialFocusEl"}),i("div",{class:`mdc-dialog__container ${this.fullscreen?"full-screen":""}`},i("div",{class:"mdc-dialog__surface"},this.renderHeading(),i("div",{class:"mdc-dialog__content",id:"limel-dialog-content-"+this.id},i("slot",null)),i("footer",{class:"mdc-dialog__actions"},i("slot",{name:"button"})))),i("div",{class:"mdc-dialog__scrim"}))}watchHandler(t,n){n!==t&&this.mdcDialog&&(t?this.mdcDialog.open():this.mdcDialog.close())}handleMdcOpened(){setTimeout(d,100)}handleMdcClosed(){this.open&&this.close.emit(),this.open=!1}handleMdcClosing(){this.closing.emit()}isBadgeHeading(t){return"object"==typeof t&&!!t.title&&!!t.icon}renderHeading(){if(this.isBadgeHeading(this.heading)){const{title:t,subtitle:n,supportingText:e,icon:o,badgeIcon:s}=this.heading;return i("div",{class:"dialog__heading"},i("limel-icon",{size:"large",name:o,badge:!1!==s}),i("div",null,i("h2",{class:"mdc-typography--headline2 dialog__title"},t),n?i("h3",{class:"mdc-typography--subtitle1 dialog__subtitle"},n):null,e?i("h3",{class:"mdc-typography--subtitle1 dialog__supporting-text"},e):null))}return"string"==typeof this.heading?i("h2",{class:"mdc-dialog__title"},this.heading.trim()):null}get host(){return e(this)}static get watchers(){return{open:["watchHandler"]}}static get style(){return":host{--mdc-theme-primary:var(--lime-primary-color,#26a69a);--mdc-theme-secondary:var(--lime-secondary-color,#575756);--mdc-theme-on-primary:var(--lime-on-primary-color,#fff);--mdc-theme-on-secondary:var(--lime-on-secondary-color,#fff)}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-background:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-background:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-background:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-background:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-light:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,0.5)}.mdc-theme--primary{color:#26a69a!important;color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary{color:#575756!important;color:var(--mdc-theme-secondary,#575756)!important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background,#fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-theme--error{color:#b00020!important;color:var(--mdc-theme-error,#b00020)!important}.mdc-theme--on-primary{color:#fff!important;color:var(--mdc-theme-on-primary,#fff)!important}.mdc-theme--on-secondary{color:#fff!important;color:var(--mdc-theme-on-secondary,#fff)!important}.mdc-theme--on-surface{color:#000!important;color:var(--mdc-theme-on-surface,#000)!important}.mdc-theme--on-error{color:#fff!important;color:var(--mdc-theme-on-error,#fff)!important}.mdc-theme--text-primary-on-background{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-background{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-light{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-light{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-dark{color:#fff!important;color:var(--mdc-theme-text-primary-on-dark,#fff)!important}.mdc-theme--text-secondary-on-dark{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--primary-bg{background-color:#26a69a!important;background-color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary-bg{background-color:#575756!important;background-color:var(--mdc-theme-secondary,#575756)!important}.mdc-typography{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{letter-spacing:-.015625em}.mdc-typography--headline1,.mdc-typography--headline2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:300;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{letter-spacing:-.0083333333em}.mdc-typography--headline3{letter-spacing:normal}.mdc-typography--headline3,.mdc-typography--headline4{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{letter-spacing:.0073529412em}.mdc-typography--headline5{font-weight:400;letter-spacing:normal}.mdc-typography--headline5,.mdc-typography--headline6{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:.875rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-weight:500;letter-spacing:.0125em}.mdc-typography--subtitle1{font-size:.875rem;font-weight:400;letter-spacing:.009375em}.mdc-typography--subtitle1,.mdc-typography--subtitle2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:1.125rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.8125rem;font-weight:500;letter-spacing:.0071428571em}.mdc-typography--body1{line-height:1.5rem;letter-spacing:.03125em}.mdc-typography--body1,.mdc-typography--body2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.8125rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{line-height:1.625rem;letter-spacing:.0178571429em}.mdc-typography--caption{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.6875rem;line-height:.875rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-size:.875rem;line-height:2.25rem;letter-spacing:.0892857143em;text-transform:none}.mdc-typography--button,.mdc-typography--overline{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:none}.mdc-typography--overline{font-size:.6875rem;line-height:.875rem;letter-spacing:.1666666667em;text-transform:uppercase}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{min-width:17.5rem;max-width:calc(100vw - 2rem);max-height:calc(100vh - 2rem);border-radius:.25rem}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;-webkit-transform:scale(.8);transform:scale(.8);opacity:0}.mdc-dialog__container,.mdc-dialog__surface{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.mdc-dialog__surface{-webkit-box-shadow:0 .6875rem .9375rem -.4375rem rgba(0,0,0,.2),0 1.5rem 2.375rem .1875rem rgba(0,0,0,.14),0 .5625rem 2.875rem .5rem rgba(0,0,0,.12);box-shadow:0 .6875rem .9375rem -.4375rem rgba(0,0,0,.2),0 1.5rem 2.375rem .1875rem rgba(0,0,0,.14),0 .5625rem 2.875rem .5rem rgba(0,0,0,.12);-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;max-width:100%;max-height:100%}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{margin-top:0;line-height:normal;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:.875rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;position:relative;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0 1.5rem .5625rem;border-bottom:.0625rem solid transparent}.mdc-dialog__title:before{display:inline-block;width:0;height:2.5rem;content:\"\";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:.9375rem}.mdc-dialog__content{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.8125rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit;-ms-flex-positive:1;flex-grow:1;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:1.25rem 1.5rem;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__content{padding-top:.5rem;padding-bottom:.5rem}.mdc-dialog__content .mdc-list:first-child:last-child{padding:.375rem 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:3.25rem;margin:0;padding:.5rem;border-top:.0625rem solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}.mdc-dialog__button{margin-left:.5rem;margin-right:0;max-width:100%;text-align:right}.mdc-dialog__button[dir=rtl],[dir=rtl] .mdc-dialog__button{margin-left:0;margin-right:.5rem}.mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl],[dir=rtl] .mdc-dialog__button:first-child{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:.75rem}.mdc-dialog--closing,.mdc-dialog--open,.mdc-dialog--opening{display:-ms-flexbox;display:flex}.mdc-dialog--opening .mdc-dialog__scrim{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-dialog--opening .mdc-dialog__container{-webkit-transition:opacity 75ms linear,-webkit-transform .15s cubic-bezier(0,0,.2,1) 0ms;transition:opacity 75ms linear,-webkit-transform .15s cubic-bezier(0,0,.2,1) 0ms;transition:opacity 75ms linear,transform .15s cubic-bezier(0,0,.2,1) 0ms;transition:opacity 75ms linear,transform .15s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .15s cubic-bezier(0,0,.2,1) 0ms}.mdc-dialog--closing .mdc-dialog__container,.mdc-dialog--closing .mdc-dialog__scrim{-webkit-transition:opacity 75ms linear;transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{-webkit-transform:scale(1);transform:scale(1)}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{-webkit-transform:scale(1);transform:scale(1);opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}slot[name=header]{display:none}.mdc-dialog .mdc-dialog__container{width:var(--dialog-width,auto);height:var(--dialog-height,auto)}.mdc-dialog .mdc-dialog__container.full-screen{width:100%;height:100%}.mdc-dialog .mdc-dialog__surface{width:100%}.mdc-dialog .mdc-dialog__surface .mdc-dialog__body--scrollable{max-height:inherit;border:0;overflow:auto}.mdc-dialog .mdc-dialog__title{font-size:1rem;line-height:1.4;margin:0;font-weight:500;font-style:normal;color:var(--dialog-heading-title-color,rgba(0,0,0,.87))}.mdc-dialog .dialog__heading{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:1.875rem 1.5rem .3125rem}.mdc-dialog .dialog__heading limel-icon{margin-right:.9375rem;color:var(--dialog-heading-icon-color,#575756)}.mdc-dialog .dialog__heading limel-icon[badge]{background-color:var(--dialog-heading-icon-background-color,#575756);color:var(--dialog-heading-icon-color,#fff)}.mdc-dialog .dialog__heading .dialog__title{font-weight:500;margin:0;color:var(--dialog-heading-title-color,rgba(0,0,0,.87))}.mdc-dialog .dialog__heading .dialog__subtitle{margin:0;color:var(--dialog-heading-subtitle-color,rgba(0,0,0,.54))}.mdc-dialog .dialog__heading .dialog__supporting-text{margin:0;color:var(--dialog-heading-supporting-text-color,rgba(0,0,0,.54))}"}};export{P as limel_dialog};