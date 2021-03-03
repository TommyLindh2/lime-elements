var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function a(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(a.prototype=i.prototype,new a)}}();LimeElements.loadBundle("chunk-938da5b6.js",["exports","./chunk-b4550daf.js"],function(t,e){window;var i,a,n={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},r={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},o={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};function s(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===a||e){var i=!1;try{t.document.addEventListener("test",null,{get passive(){return i=!0}})}catch(t){}a=i}return!!a&&{passive:!0}}function d(t){for(var e=["matches","webkitMatchesSelector","msMatchesSelector"],i="matches",a=0;a<e.length;a++){var n=e[a];if(n in t){i=n;break}}return i}var c=["touchstart","pointerdown","mousedown","keydown"],u=["touchend","pointerup","mouseup","contextmenu"],_=[],p=function(t){function e(i){var a=t.call(this,Object.assign(e.defaultAdapter,i))||this;return a.layoutFrame_=0,a.frame_={width:0,height:0},a.activationState_=a.defaultActivationState_(),a.initialSize_=0,a.maxRadius_=0,a.activateHandler_=function(t){return a.activate_(t)},a.deactivateHandler_=function(){return a.deactivate_()},a.focusHandler_=function(){return a.handleFocus()},a.blurHandler_=function(){return a.handleBlur()},a.resizeHandler_=function(){return a.layout()},a.unboundedCoords_={left:0,top:0},a.fgScale_=0,a.activationTimer_=0,a.fgDeactivationRemovalTimer_=0,a.activationAnimationHasEnded_=!1,a.activationTimerCallback_=function(){a.activationAnimationHasEnded_=!0,a.runDeactivationUXLogicIfReady_()},a}return __extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return n},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return r},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}},enumerable:!0,configurable:!0}),e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}},e.prototype.init=function(){var t=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var a=e.cssClasses,n=a.ROOT,r=a.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(n),t.adapter_.isUnbounded()&&(t.adapter_.addClass(r),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,a=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(a),t.adapter_.removeClass(n),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(c.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):u.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;c.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),u.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,i=e.strings;Object.keys(i).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(i[e],null)})},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var a=this.previousActivationEvent_;a&&void 0!==t&&a.type!==t.type||(i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&_.length>0&&_.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(_.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){_=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.animateActivation_=function(){var t=this,i=e.strings,a=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,r=e.cssClasses,o=r.FG_DEACTIVATION,s=r.FG_ACTIVATION,d=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",u="";if(!this.adapter_.isUnbounded()){var _=this.getFgTranslationCoordinates_(),p=_.startPoint,l=_.endPoint;c=p.x+"px, "+p.y+"px",u=l.x+"px, "+l.y+"px"}this.adapter_.updateCssVariable(a,c),this.adapter_.updateCssVariable(n,u),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},d)},e.prototype.getFgTranslationCoordinates_=function(){var t,e,i,a,n,r,o,s,d=this.activationState_;return d.wasActivatedByPointer?(e=d.activationEvent,i=this.adapter_.getWindowPageOffset(),a=this.adapter_.computeBoundingRect(),o=i.x+a.left,s=i.y+a.top,"touchstart"===e.type?(n=(e=e).changedTouches[0].pageX-o,r=e.changedTouches[0].pageY-s):(n=(e=e).pageX-o,r=e.pageY-s),t={x:n,y:r}):t={x:this.frame_.width/2,y:this.frame_.height/2},{startPoint:t={x:t.x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,a=this.activationState_;(a.hasDeactivationUXRun||!a.isActivated)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(i)},o.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var i=Object.assign({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(i)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(i),t.resetActivationState_()}))}},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.animateDeactivation_=function(t){(t.wasActivatedByPointer||t.wasElementMadeActive)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.layoutInternal_=function(){this.frame_=this.adapter_.computeBoundingRect();var t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(t*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,i=t.VAR_LEFT,a=t.VAR_TOP,n=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(t.VAR_FG_SIZE,this.initialSize_+"px"),this.adapter_.updateCssVariable(n,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(a,this.unboundedCoords_.top+"px"))},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(i):this.adapter_.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})},e}(e.MDCFoundation),l=function(t){function e(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var a=t.apply(this,e)||this;return a.disabled=!1,a}return __extends(e,t),e.attachTo=function(t,i){var a=(void 0===i?{}:i).isUnbounded,n=void 0===a?void 0:a,r=new e(t);return void 0!==n&&(r.unbounded=n),r},e.createAdapter=function(t){var e=d(HTMLElement.prototype);return{browserSupportsCssVars:function(){return function(t,e){void 0===e&&(e=!1);var a=i;if("boolean"==typeof i&&!e)return a;if(t.CSS&&"function"==typeof t.CSS.supports){var n=t.CSS.supports("--css-vars","yes"),r=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return a=!(!n&&!r||function(t){var e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);var a=t.getComputedStyle(i),n=null!==a&&"solid"===a.borderTopStyle;return i.remove(),n}(t)),e||(i=a),a}}(window)},isUnbounded:function(){return t.unbounded},isSurfaceActive:function(){return t.root_[e](":active")},isSurfaceDisabled:function(){return t.disabled},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},containsEventTarget:function(e){return t.root_.contains(e)},registerInteractionHandler:function(e,i){return t.root_.addEventListener(e,i,s())},deregisterInteractionHandler:function(e,i){return t.root_.removeEventListener(e,i,s())},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,s())},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,s())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(e,i){return t.root_.style.setProperty(e,i)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return this.unbounded_},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(this.unbounded_)},e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new p(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset},e}(e.MDCComponent);t.MDCRipple=l,t.MDCRippleFoundation=p,t.getMatchesProperty=d});