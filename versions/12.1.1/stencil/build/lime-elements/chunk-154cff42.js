import{a as e,b as t}from"./chunk-6a33c04e.js";import{b as s}from"./chunk-42a692f4.js";const i={ROOT:"mdc-list",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated"},n={ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_SELECTED:"aria-selected",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',RADIO_SELECTOR:'input[type="radio"]:not(:disabled)',CHECKBOX_SELECTOR:'input[type="checkbox"]:not(:disabled)',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`.${i.LIST_ITEM_CLASS} button:not(:disabled),\n  .${i.LIST_ITEM_CLASS} a`,FOCUSABLE_CHILD_ELEMENTS:`.${i.LIST_ITEM_CLASS} button:not(:disabled), .${i.LIST_ITEM_CLASS} a,\n  .${i.LIST_ITEM_CLASS} input[type="radio"]:not(:disabled),\n  .${i.LIST_ITEM_CLASS} input[type="checkbox"]:not(:disabled)`,ENABLED_ITEMS_SELECTOR:".mdc-list-item:not(.mdc-list-item--disabled)"},o=["input","button","textarea","select"];class a extends e{static get strings(){return n}static get cssClasses(){return i}static get defaultAdapter(){return{getListItemCount:()=>{},getFocusedElementIndex:()=>{},setAttributeForElementIndex:()=>{},removeAttributeForElementIndex:()=>{},addClassForElementIndex:()=>{},removeClassForElementIndex:()=>{},focusItemAtIndex:()=>{},setTabIndexForListItemChildren:()=>{},followHref:()=>{},hasRadioAtIndex:()=>{},hasCheckboxAtIndex:()=>{},isCheckboxCheckedAtIndex:()=>{},setCheckedCheckboxOrRadioAtIndex:()=>{}}}constructor(e){super(Object.assign(a.defaultAdapter,e)),this.wrapFocus_=!1,this.isVertical_=!0,this.isSingleSelectionList_=!1,this.selectedIndex_=-1,this.useActivatedClass_=!1}setWrapFocus(e){this.wrapFocus_=e}setVerticalOrientation(e){this.isVertical_=e}setSingleSelection(e){this.isSingleSelectionList_=e}setUseActivatedClass(e){this.useActivatedClass_=e}setSelectedIndex(e){e<0||e>=this.adapter_.getListItemCount()||(this.adapter_.hasCheckboxAtIndex(e)?this.setAriaAttributesForCheckbox_(e):this.adapter_.hasRadioAtIndex(e)?this.setAriaAttributesForRadio_(e):(this.setAriaAttributesForSingleSelect_(e),this.setClassNamesForSingleSelect_(e)),this.selectedIndex_>=0&&this.selectedIndex_!==e?this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",-1):-1===this.selectedIndex_&&0!==e&&this.adapter_.setAttributeForElementIndex(0,"tabindex",-1),this.adapter_.setAttributeForElementIndex(e,"tabindex",0),this.selectedIndex_=e)}setAriaAttributesForCheckbox_(e){const t=this.adapter_.isCheckboxCheckedAtIndex(e)?"true":"false";this.adapter_.setAttributeForElementIndex(e,n.ARIA_CHECKED,t)}setAriaAttributesForRadio_(e){this.selectedIndex_>=0&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,n.ARIA_CHECKED,"false"),this.adapter_.setAttributeForElementIndex(e,n.ARIA_CHECKED,"true")}setAriaAttributesForSingleSelect_(e){this.selectedIndex_>=0&&this.selectedIndex_!==e&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,n.ARIA_SELECTED,"false"),this.adapter_.setAttributeForElementIndex(e,n.ARIA_SELECTED,"true")}setClassNamesForSingleSelect_(e){let t=i.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass_&&(t=i.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex_>=0&&this.adapter_.removeClassForElementIndex(this.selectedIndex_,t),this.adapter_.addClassForElementIndex(e,t)}handleFocusIn(e,t){t>=0&&this.adapter_.setTabIndexForListItemChildren(t,0)}handleFocusOut(e,t){t>=0&&this.adapter_.setTabIndexForListItemChildren(t,-1)}handleKeydown(e,t,s){const i="ArrowLeft"===e.key||37===e.keyCode,n="ArrowUp"===e.key||38===e.keyCode,o="ArrowRight"===e.key||39===e.keyCode,a="ArrowDown"===e.key||40===e.keyCode,d="Home"===e.key||36===e.keyCode,r="End"===e.key||35===e.keyCode,l="Enter"===e.key||13===e.keyCode,h="Space"===e.key||32===e.keyCode;let c=this.adapter_.getFocusedElementIndex();if(!(-1===c&&(c=s)<0))if(this.isVertical_&&a||!this.isVertical_&&o)this.preventDefaultEvent_(e),this.focusNextElement(c);else if(this.isVertical_&&n||!this.isVertical_&&i)this.preventDefaultEvent_(e),this.focusPrevElement(c);else if(d)this.preventDefaultEvent_(e),this.focusFirstElement();else if(r)this.preventDefaultEvent_(e),this.focusLastElement();else if((l||h)&&t){this.isSingleSelectionList_&&this.preventDefaultEvent_(e);const t=this.hasCheckboxOrRadioAtIndex_(s);t&&(this.toggleCheckboxOrRadioAtIndex_(s),this.preventDefaultEvent_(e)),(this.isSingleSelectionList_||t)&&this.setSelectedIndex(c),this.adapter_.followHref(c)}}handleClick(e,t){-1!==e&&(t&&this.toggleCheckboxOrRadioAtIndex_(e),(this.isSingleSelectionList_||this.hasCheckboxOrRadioAtIndex_(e))&&this.setSelectedIndex(e))}preventDefaultEvent_(e){const t=`${e.target.tagName}`.toLowerCase();-1===o.indexOf(t)&&e.preventDefault()}focusNextElement(e){let t=e+1;if(t>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return;t=0}this.adapter_.focusItemAtIndex(t)}focusPrevElement(e){let t=e-1;if(t<0){if(!this.wrapFocus_)return;t=this.adapter_.getListItemCount()-1}this.adapter_.focusItemAtIndex(t)}focusFirstElement(){this.adapter_.getListItemCount()>0&&this.adapter_.focusItemAtIndex(0)}focusLastElement(){const e=this.adapter_.getListItemCount()-1;e>=0&&this.adapter_.focusItemAtIndex(e)}toggleCheckboxOrRadioAtIndex_(e){if(!this.hasCheckboxOrRadioAtIndex_(e))return;let t=!0;this.adapter_.hasCheckboxAtIndex(e)&&(t=!this.adapter_.isCheckboxCheckedAtIndex(e)),this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,t)}hasCheckboxOrRadioAtIndex_(e){return this.adapter_.hasCheckboxAtIndex(e)||this.adapter_.hasRadioAtIndex(e)}}class d extends t{constructor(...e){super(...e)}static attachTo(e){return new d(e)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener("click",this.handleClick_),this.root_.removeEventListener("focusin",this.focusInEventListener_),this.root_.removeEventListener("focusout",this.focusOutEventListener_)}initialSyncWithDOM(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener("focusin",this.focusInEventListener_),this.root_.addEventListener("focusout",this.focusOutEventListener_),this.root_.addEventListener("click",this.handleClick_),this.layout(),this.initializeListType()}layout(){const e=this.root_.getAttribute(n.ARIA_ORIENTATION);this.vertical=e!==n.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(e=>{e.setAttribute("tabindex",-1)}),[].slice.call(this.root_.querySelectorAll(n.FOCUSABLE_CHILD_ELEMENTS)).forEach(e=>e.setAttribute("tabindex",-1))}getListItemIndex_(e){let t=e.target,s=-1;for(;!t.classList.contains(i.LIST_ITEM_CLASS)&&!t.classList.contains(i.ROOT);)t=t.parentElement;return t.classList.contains(i.LIST_ITEM_CLASS)&&(s=this.listElements.indexOf(t)),s}handleFocusInEvent_(e){const t=this.getListItemIndex_(e);this.foundation_.handleFocusIn(e,t)}handleFocusOutEvent_(e){const t=this.getListItemIndex_(e);this.foundation_.handleFocusOut(e,t)}handleKeydownEvent_(e){const t=this.getListItemIndex_(e);t>=0&&this.foundation_.handleKeydown(e,e.target.classList.contains(i.LIST_ITEM_CLASS),t)}handleClickEvent_(e){const t=this.getListItemIndex_(e),i=!s(e.target,n.CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(t,i)}initializeListType(){const e=this.root_.querySelector(`.${i.LIST_ITEM_ACTIVATED_CLASS},\n        .${i.LIST_ITEM_SELECTED_CLASS},\n        ${n.ARIA_CHECKED_RADIO_SELECTOR}`);e&&(e.classList.contains(i.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(e))}set vertical(e){this.foundation_.setVerticalOrientation(e)}get listElements(){return[].slice.call(this.root_.querySelectorAll(n.ENABLED_ITEMS_SELECTOR))}set wrapFocus(e){this.foundation_.setWrapFocus(e)}set singleSelection(e){this.foundation_.setSingleSelection(e)}set selectedIndex(e){this.foundation_.setSelectedIndex(e)}getDefaultFoundation(){return new a(Object.assign({getListItemCount:()=>this.listElements.length,getFocusedElementIndex:()=>this.listElements.indexOf(document.activeElement),setAttributeForElementIndex:(e,t,s)=>{const i=this.listElements[e];i&&i.setAttribute(t,s)},removeAttributeForElementIndex:(e,t)=>{const s=this.listElements[e];s&&s.removeAttribute(t)},addClassForElementIndex:(e,t)=>{const s=this.listElements[e];s&&s.classList.add(t)},removeClassForElementIndex:(e,t)=>{const s=this.listElements[e];s&&s.classList.remove(t)},focusItemAtIndex:e=>{const t=this.listElements[e];t&&t.focus()},setTabIndexForListItemChildren:(e,t)=>{[].slice.call(this.listElements[e].querySelectorAll(n.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach(e=>e.setAttribute("tabindex",t))},followHref:e=>{const t=this.listElements[e];t&&t.href&&t.click()},hasCheckboxAtIndex:e=>!!this.listElements[e].querySelector(n.CHECKBOX_SELECTOR),hasRadioAtIndex:e=>!!this.listElements[e].querySelector(n.RADIO_SELECTOR),isCheckboxCheckedAtIndex:e=>this.listElements[e].querySelector(n.CHECKBOX_SELECTOR).checked,setCheckedCheckboxOrRadioAtIndex:(e,t)=>{const s=this.listElements[e].querySelector(n.CHECKBOX_RADIO_SELECTOR);s.checked=t;const i=document.createEvent("Event");i.initEvent("change",!0,!0),s.dispatchEvent(i)}}))}}export{d as a,a as b};