System.register(["./core-e7aed7d8.system.js"],(function(e){"use strict";var t,a;return{setters:[function(e){t=e.r;a=e.h}],execute:function(){var i=e("limel_example_date_picker_formatted",function(){function e(e){t(this,e);this.valueNo=new Date("2018-11-04");this.valueFi=new Date("2018-11-04");this.handleChangeNo=this.handleChangeNo.bind(this);this.handleChangeFi=this.handleChangeFi.bind(this)}e.prototype.render=function(){return[a("limel-date-picker",{language:"no",type:"datetime",label:"Localized date",value:this.valueNo,onChange:this.handleChangeNo}),a("p",{style:{"font-size":"small"}},"Value:"," ",a("code",null,this.valueNo?this.valueNo.toString():"invalid")),a("limel-date-picker",{language:"fi",format:"YYYY-MM-DD",type:"datetime",label:"Date with custom format",value:this.valueFi,onChange:this.handleChangeFi}),a("p",{style:{"font-size":"small"}},"Value:"," ",a("code",null,this.valueFi?this.valueFi.toString():"invalid"))]};e.prototype.handleChangeNo=function(e){this.valueNo=e.detail};e.prototype.handleChangeFi=function(e){this.valueFi=e.detail};return e}())}}}));