import{r as e,h as t}from"./core-5f6fd4ec.js";const i=class{constructor(t){e(this,t),this.items=[{text:"Pikachu",value:1,selected:!0,icon:"pokemon",iconColor:"var(--lime-yellow)"},{text:"Charmander",value:2,selected:!1,disabled:!0,icon:"fire_element",iconColor:"var(--lime-red)"},{text:"Super Mario",value:3,selected:!1,icon:"super_mario",iconColor:"var(--lime-deep-red)"},{text:"Yoshi",value:4,selected:!1,disabled:!0,icon:"easter_egg",iconColor:"var(--lime-green)"},{text:"Minion",value:6,selected:!0,icon:"minion_1",iconColor:"var(--lime-blue)"},{text:"Pokéball",value:5,selected:!1,icon:"pokeball",iconColor:"var(--lime-magenta)"}],this.selectedItems=[],this.selectedItems=this.items.filter(e=>!!e.selected),this.handleChange=this.handleChange.bind(this)}render(){return[t("limel-list",{onChange:this.handleChange,items:this.items,type:"checkbox"}),t("p",null,"Value: ",t("code",null,JSON.stringify(this.selectedItems)))]}handleChange(e){this.selectedItems=e.detail,this.items=this.items.map(t=>{const i=!!e.detail.find(e=>e.value===t.value);return Object.assign(Object.assign({},t),{selected:i})})}static get style(){return"p{font-size:small}"}};export{i as limel_example_list_checkbox_icons};