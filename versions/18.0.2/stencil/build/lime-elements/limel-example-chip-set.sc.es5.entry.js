LimeElements.loadBundle("limel-example-chip-set",["exports"],function(e){var t=window.LimeElements.h,n=function(){function e(){this.disabled=!1,this.disabledOnChange=this.disabledOnChange.bind(this),this.onInteract=this.onInteract.bind(this)}return e.prototype.render=function(){return[t("limel-switch",{label:"Disabled",onChange:this.disabledOnChange}),t("br",null),t("br",null),t("limel-chip-set",{disabled:this.disabled,onInteract:this.onInteract,value:[{id:1,text:"Lime"},{id:2,text:"Apple"},{id:3,text:"Banana"}]})]},e.prototype.disabledOnChange=function(e){this.disabled=e.detail},e.prototype.onInteract=function(e){console.log(e.detail)},Object.defineProperty(e,"is",{get:function(){return"limel-example-chip-set"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{state:!0}}},enumerable:!0,configurable:!0}),e}();e.LimelExampleChipSet=n,Object.defineProperty(e,"__esModule",{value:!0})});