import{r as i,h as s}from"./index-017de9c8.js";const e=class{constructor(s){i(this,s),this.disabled=!1,this.value=25,this.minValue=15,this.maxValue=75,this.onChange=this.onChange.bind(this),this.toggleEnabled=this.toggleEnabled.bind(this)}render(){return s("section",null,s("limel-slider",{label:"Basic slider",unit:" %",value:this.value,valuemax:this.maxValue,valuemin:this.minValue,disabled:this.disabled,onChange:this.onChange}),s("limel-flex-container",{justify:"end"},s("limel-button",{onClick:this.toggleEnabled,label:this.disabled?"Enable":"Disable"})),s("limel-example-value",{value:this.value}))}onChange(i){this.value=i.detail}toggleEnabled(){this.disabled=!this.disabled}};export{e as limel_example_slider}