System.register(["./core-e7aed7d8.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.r;n=e.h}],execute:function(){var i=e("limel_example_select_change_options",function(){function e(e){t(this,e);this.disabled=false;this.currentOptionGroup=0;this.optionGroups=[[{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han"},{text:"Leia Organo",value:"leia"}],[{text:"",value:""},{text:"Homer Simpson",value:"homer"},{text:"Moe Szyslak",value:"moe"},{text:"Ned Flanders",value:"ned"}],[{text:"",value:"",disabled:true},{text:"Bart Simpson",value:"bart"},{text:"Ned Flanders",value:"ned"}],[{text:"David Tennant",value:"10"},{text:"Matt Smith",value:"11"},{text:"Peter Capaldi",value:"12"},{text:"Jodie Witthaker",value:"13"}],[]];this.onChange=this.onChange.bind(this);this.toggleEnabled=this.toggleEnabled.bind(this);this.changeOptionsGroup=this.changeOptionsGroup.bind(this)}e.prototype.render=function(){return n("section",null,n("limel-select",{label:"Favorite hero",value:this.value,options:this.optionGroups[this.currentOptionGroup],disabled:this.disabled,onChange:this.onChange}),n("p",null,n("limel-flex-container",{justify:"end"},n("limel-button",{label:this.disabled?"Enable":"Disable",onClick:this.toggleEnabled}),n("limel-button",{label:"Change Options",onClick:this.changeOptionsGroup}))),n("p",null,"Value: ",JSON.stringify(this.value)),n("p",null,"Currently showing option group:"," ",this.currentOptionGroup+1," / ",this.optionGroups.length))};e.prototype.onChange=function(e){this.value=e.detail};e.prototype.toggleEnabled=function(){this.disabled=!this.disabled};e.prototype.changeOptionsGroup=function(){this.currentOptionGroup=(this.currentOptionGroup+1)%this.optionGroups.length};Object.defineProperty(e,"style",{get:function(){return"p{font-size:small}"},enumerable:true,configurable:true});return e}())}}}));