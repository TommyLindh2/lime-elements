(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/grid/grid.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"grid"}},"Grid"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limel-grid")," component creates a grid which can be used to control the layout of other components. It uses CSS ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas"}},"grid-template-areas")," to enable easy configuration of its child-elements."),o.a.createElement("limel-props",{name:"limel-grid"}),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),o.a.createElement("limel-example",{name:"limel-example-grid"}),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"example-explanation"}},"Example explanation"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We use the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"grid-area"),' property to give each component a unique name, and then use this name to "draw" our grid layout.'),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can name each component anything you want, like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"salespipe"),", or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"infotile-active-support-tickets"),', but keeping the names to a fixed number of characters makes the "drawing" of the grid look more like the actual grid. One to three characters is probably a good number for most cases.'),o.a.createElement(r.MDXTag,{name:"p",components:n},'Any "name" that doesn\'t match a named element will create empty cells. In our case, we use a dot (',o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"."),") to mark empty cells. Empty cells can be put anywhere in the grid, not just at the end."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note that we can add some extra spaces after the dot marking an empty cell, in order to align the next cell in our config-string. This can also be used if your elements have named of differing lengths. The extra whitespace is ignored when the CSS is parsed."),o.a.createElement(r.MDXTag,{name:"p",components:n},"If the name of an element does not appear in the grid-configuration, it will not be displayed at all. This might be useful if you wish to show a specific component only under certain circumstances, like if the viewport is large enough to accomodate it."))}}}]);