(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/button/button.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),m=t("./node_modules/@mdx-js/tag/dist/index.js");function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},m=Object.keys(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components;l(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"button"}},"Button"),o.a.createElement("limel-props",{name:"limel-button"}),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),o.a.createElement("limel-example",{name:"limel-example-button"}),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"with-click-handler"}},"With click handler"),o.a.createElement(m.MDXTag,{name:"p",components:n},"The click handler in this example sets the attributes ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"loading")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"disabled")," to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"true"),". After 1 second, the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"loading"),"\nattribute is set to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"false")," again. After another 4 seconds, the button is once again enabled."),o.a.createElement(m.MDXTag,{name:"p",components:n},"When the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"loading")," attribute changes from ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"true")," to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"false"),", the button automatically displays a checkmark icon for 2\nseconds. Note that our click handler isn't actually involved in this."),o.a.createElement("limel-example",{name:"limel-example-button-click",path:"button"}))}}}]);