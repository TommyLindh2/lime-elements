LimeElements.loadBundle("limel-example-list-selectable",["exports"],function(e){var t=window.LimeElements.h,n=function(){function e(){this.items=[{text:"King of Tokyo",value:1},{text:"Smash Up!",value:2},{text:"Pandemic",value:3,selected:!0},{separator:!0},{text:"Catan",value:4},{text:"Ticket to Ride",value:5}],this.handleChange=this.handleChange.bind(this)}return e.prototype.render=function(){return t("limel-list",{onChange:this.handleChange,selectable:!0,items:this.items})},e.prototype.handleChange=function(e){this.items=this.items.map(function(t){return t.value===e.detail.value?e.detail:t})},Object.defineProperty(e,"is",{get:function(){return"limel-example-list-selectable"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{items:{state:!0}}},enumerable:!0,configurable:!0}),e}();e.LimelExampleListSelectable=n,Object.defineProperty(e,"__esModule",{value:!0})});