import{r as e,h as t}from"./index-9cbaf4f2.js";const a=class{constructor(t){e(this,t),this.value=new Date,this.handleChange=this.handleChange.bind(this)}render(){return t("p",null,t("limel-date-picker",{type:"datetime",label:"datetime",value:this.value,onChange:this.handleChange}),t("limel-example-value",{value:this.value}))}handleChange(e){this.value=e.detail}};export{a as limel_example_date_picker_datetime}