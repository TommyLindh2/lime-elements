import{r as e,h as i}from"./core-5f6fd4ec.js";const t=class{constructor(i){e(this,i),this.items=[{text:"Pikachu",value:1,selected:!1,icon:"pokemon",iconColor:"var(--lime-yellow)"},{text:"Charmander",value:2,selected:!1,disabled:!0,icon:"fire_element",iconColor:"var(--lime-red)"},{text:"Super Mario",value:3,selected:!1,icon:"super_mario",iconColor:"var(--lime-deep-red)"},{text:"Yoshi",value:4,selected:!1,disabled:!0,icon:"easter_egg",iconColor:"var(--lime-green)"},{text:"Minion",value:6,selected:!0,icon:"minion_1",iconColor:"var(--lime-blue)"},{text:"Pokéball",value:5,selected:!1,icon:"pokeball",iconColor:"var(--lime-magenta)"}],this.selectedItem=this.items.filter(e=>!!e.selected)[0],this.handleChange=this.handleChange.bind(this)}render(){return[i("limel-list",{onChange:this.handleChange,items:this.items,type:"radio"}),i("p",null,"Value: ",i("code",null,JSON.stringify(this.selectedItem)))]}handleChange(e){this.selectedItem=e.detail,this.items=this.items.map(i=>i.value===e.detail.value?e.detail:i)}static get style(){return"p{font-size:small}"}};export{t as limel_example_list_radio_button_icons};