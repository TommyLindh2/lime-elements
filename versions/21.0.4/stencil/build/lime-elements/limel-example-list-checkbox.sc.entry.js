const e=window.LimeElements.h;class t{constructor(){this.items=[{text:"Pikachu",value:1,selected:!0},{text:"Charmander",value:2,selected:!1,disabled:!0},{text:"Super Mario",value:3,selected:!1},{separator:!0},{text:"Yoshi",value:4,selected:!1,disabled:!0},{text:"Minion",value:6,selected:!0},{text:"Pokéball",value:5,selected:!1}],this.selectedItems=[],this.selectedItems=this.items.filter(e=>!!e.selected),this.handleChange=this.handleChange.bind(this)}render(){return[e("limel-list",{onChange:this.handleChange,items:this.items,type:"checkbox"}),e("p",null,"Value: ",e("code",null,JSON.stringify(this.selectedItems)))]}handleChange(e){this.selectedItems=e.detail,this.items=this.items.map(t=>{const s=!!e.detail.find(e=>e.value===t.value);return Object.assign({},t,{selected:s})})}static get is(){return"limel-example-list-checkbox"}static get encapsulation(){return"shadow"}static get properties(){return{items:{state:!0},selectedItems:{state:!0}}}static get style(){return"p.sc-limel-example-list-checkbox{font-size:small}"}}export{t as LimelExampleListCheckbox};