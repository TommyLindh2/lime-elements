System.register(["./core-e7aed7d8.system.js"],(function(e){"use strict";var i,t;return{setters:[function(e){i=e.r;t=e.h}],execute:function(){var o=e("limel_example_dialog",function(){function e(e){i(this,e);this.isOpen=false;this.openDialog=this.openDialog.bind(this);this.closeDialog=this.closeDialog.bind(this)}e.prototype.render=function(){return[t("limel-button",{primary:true,label:"Open",onClick:this.openDialog}),t("limel-dialog",{open:this.isOpen,onClose:this.closeDialog},t("p",null,"This is a simple alert-dialog."),t("limel-flex-container",{justify:"end",slot:"button"},t("limel-button",{label:"Ok",onClick:this.closeDialog})))]};e.prototype.openDialog=function(){this.isOpen=true};e.prototype.closeDialog=function(){this.isOpen=false};return e}())}}}));