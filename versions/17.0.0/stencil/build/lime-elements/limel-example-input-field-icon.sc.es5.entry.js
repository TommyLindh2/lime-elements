LimeElements.loadBundle("limel-example-input-field-icon",["exports"],function(e){var n=window.LimeElements.h,t=function(){function e(){}return e.prototype.render=function(){var e=this;return n("limel-input-field",{label:"Email address",type:"email",value:this.value,trailingIcon:"filled_message",onChange:function(n){e.value=n.detail},onAction:function(){console.log("sending email to "+e.value)}})},Object.defineProperty(e,"is",{get:function(){return"limel-example-input-field-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{value:{state:!0}}},enumerable:!0,configurable:!0}),e}();e.LimelExampleInputFieldIcon=t,Object.defineProperty(e,"__esModule",{value:!0})});