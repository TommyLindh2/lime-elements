import{r as e,h as t}from"./core-5f6fd4ec.js";const i=class{constructor(t){e(this,t),this.value=[],this.disabled=!1,this.required=!1,this.options=[{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han"},{text:"Leia Organo",value:"leia"}],this.onChange=this.onChange.bind(this),this.toggleEnabled=this.toggleEnabled.bind(this),this.toggleRequired=this.toggleRequired.bind(this)}render(){return t("section",null,t("limel-select",{label:"Favorite heroes",value:this.value,options:this.options,disabled:this.disabled,required:this.required,onChange:this.onChange,multiple:!0}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-checkbox",{label:"Disabled",onChange:this.toggleEnabled,checked:this.disabled}),t("limel-checkbox",{label:"Required",onChange:this.toggleRequired,checked:this.required}))),t("p",null,"Value: ",JSON.stringify(this.value)))}onChange(e){this.value=e.detail}toggleEnabled(){this.disabled=!this.disabled}toggleRequired(){this.required=!this.required}static get style(){return"p{font-size:small}"}};export{i as limel_example_select_multiple};