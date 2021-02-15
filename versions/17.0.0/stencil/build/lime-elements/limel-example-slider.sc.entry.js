const a=window.LimeElements.h;class e{constructor(){this.disabled=!0,this.basicExampleValue=25,this.basicExampleMinValue=15,this.basicExampleMaxValue=75,this.factorExampleValue=.25,this.factor=100,this.factorExampleMinValue=0,this.factorExampleMaxValue=1,this.disableExampleValue=35,this.disableExampleMinValue=0,this.disableExampleMaxValue=100}render(){return[a("section",null,a("h3",null,"Basic Usage"),a("limel-slider",{label:"Basic slider",unit:" %",value:this.basicExampleValue,valuemax:this.basicExampleMaxValue,valuemin:this.basicExampleMinValue,onChange:a=>{this.basicExampleValue=a.detail}}),a("p",null,"Current value: ",this.basicExampleValue)),a("section",null,a("h3",null,"With multiplier factor"),a("limel-slider",{label:"Slider with multiplier",unit:" %",value:this.factorExampleValue,factor:this.factor,valuemax:this.factorExampleMaxValue,valuemin:this.factorExampleMinValue,onChange:a=>{this.factorExampleValue=a.detail}}),a("p",null,"Current value: ",this.factorExampleValue)),a("section",null,a("h3",null,"Disabled"),a("limel-flex-container",{justify:"end"},a("limel-button",{onClick:()=>{this.disabled=!this.disabled},label:this.disabled?"Enable":"Disable"})),a("limel-slider",{label:"Can be disabled",disabled:this.disabled,unit:" %",value:this.disableExampleValue,valuemax:this.disableExampleMaxValue,valuemin:this.disableExampleMinValue,onChange:a=>{this.disableExampleValue=a.detail}}),a("p",null,"Current value: ",this.disableExampleValue))]}static get is(){return"limel-example-slider"}static get encapsulation(){return"shadow"}static get properties(){return{basicExampleValue:{state:!0},disabled:{state:!0},disableExampleValue:{state:!0},factorExampleValue:{state:!0}}}}export{e as LimelExampleSlider};