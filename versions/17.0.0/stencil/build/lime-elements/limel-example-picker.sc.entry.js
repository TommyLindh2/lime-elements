const e=window.LimeElements.h,t=500;class l{constructor(){this.allItems=[{text:"Admiral Swiggins",value:1},{text:"Ayla",value:2},{text:"Clunk",value:3},{text:"Coco",value:4},{text:"Derpl",value:5},{text:"Froggy G",value:6},{text:"Gnaw",value:7},{text:"Lonestar",value:8},{text:"Leon",value:9},{text:"Raelynn",value:10},{text:"Skølldir",value:11},{text:"Voltar",value:12},{text:"Yuri",value:13}]}render(){return[e("limel-picker",{onChange:e=>{this.selectedItem=e.detail},label:"Favorite awesomenaut",searcher:this.search.bind(this),value:this.selectedItem,onInteract:e=>{console.log(e.detail)}}),e("br",null),e("br",null),e("div",null,"Value: ",e("code",null,JSON.stringify(this.selectedItem)))]}search(e){return new Promise(l=>{""===e&&l(this.allItems),setTimeout(()=>{const t=this.allItems.filter(t=>t.text.toLowerCase().includes(e.toLowerCase()));l(t)},t)})}static get is(){return"limel-example-picker"}static get encapsulation(){return"shadow"}static get properties(){return{selectedItem:{state:!0}}}}export{l as LimelExamplePicker};