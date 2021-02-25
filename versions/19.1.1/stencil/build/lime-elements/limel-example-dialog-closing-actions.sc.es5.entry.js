LimeElements.loadBundle("limel-example-dialog-closing-actions",["exports"],function(e){var i=window.LimeElements.h,n=function(){function e(){this.isOpen=!1,this.triggerOnClick=this.triggerOnClick.bind(this),this.onClose=this.onClose.bind(this),this.okOnClick=this.okOnClick.bind(this)}return e.prototype.render=function(){return[i("limel-button",{primary:!0,label:"Open",onClick:this.triggerOnClick}),i("limel-dialog",{open:this.isOpen,closingActions:{escapeKey:!1,scrimClick:!1},onClose:this.onClose},i("p",null,"This dialog doesn't close by clicking the scrim or pressing the escape key. Only the Ok-button triggers a close event."),i("limel-flex-container",{justify:"end",slot:"button"},i("limel-button",{label:"Ok",onClick:this.okOnClick})))]},e.prototype.triggerOnClick=function(){this.isOpen=!0},e.prototype.okOnClick=function(){this.isOpen=!1},e.prototype.onClose=function(){this.isOpen=!1},Object.defineProperty(e,"is",{get:function(){return"limel-example-dialog-closing-actions"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{isOpen:{state:!0}}},enumerable:!0,configurable:!0}),e}();e.LimelExampleDialogClosingActions=n,Object.defineProperty(e,"__esModule",{value:!0})});