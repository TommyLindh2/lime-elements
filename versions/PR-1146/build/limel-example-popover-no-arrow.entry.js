import{r as o,h as e}from"./index-9cbaf4f2.js";const r=class{constructor(e){o(this,e),this.isOpen=!1,this.openPopover=this.openPopover.bind(this),this.onPopoverClose=this.onPopoverClose.bind(this)}render(){return[e("limel-popover",{open:this.isOpen,onClose:this.onPopoverClose,useArrow:!1},e("limel-icon-button",{slot:"trigger",icon:"info",label:"Learn more…",elevated:!0,onClick:this.openPopover}),e("div",{style:{padding:"0 1.5rem"}},e("h4",null,"No arrows!"),e("p",null,"You see no arrows pointing to my origin.")))]}openPopover(o){o.stopPropagation(),console.log("opening"),this.isOpen=!0}onPopoverClose(o){o.stopPropagation(),console.log("closing"),this.isOpen=!1}};r.style=":host(limel-example-popover){--popover-body-background-color:rgb(var(--contrast-200))}limel-icon-button{color:rgb(var(--color-blue-default))}";export{r as limel_example_popover_no_arrow}