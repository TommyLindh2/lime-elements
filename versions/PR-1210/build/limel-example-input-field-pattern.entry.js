import{r as e,h as t}from"./index-017de9c8.js";const i=class{constructor(t){e(this,t),this.changeHandler=this.changeHandler.bind(this)}render(){return t("limel-input-field",{label:"Personal identity number (YYYYMMDD-XXXX)",value:this.value,pattern:"[0-9]{8}[-][0-9]{4}",onChange:this.changeHandler})}changeHandler(e){this.value=e.detail}};export{i as limel_example_input_field_pattern}