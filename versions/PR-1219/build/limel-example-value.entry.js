import{r,h as o}from"./index-954e57b6.js";import{b as e}from"./_baseGetTag-accbac5b.js";import{i as a}from"./isObjectLike-38996507.js";import{i as n}from"./isArray-80298bc7.js";import{i as s}from"./isObject-7039fcda.js";import{b as t,n as c}from"./_nodeUtil-8b499bf9.js";var i=c&&c.isDate,l=i?t(i):function(r){return a(r)&&"[object Date]"==e(r)};const d=class{constructor(o){r(this,o),this.label="Value"}render(){return o("p",null,this.label,": ",this.format(this.value))}format(r){return void 0===r?o("code",null,"undefined"):l(r)?o("code",null,r.toString()):s(r)||n(r)?o("pre",null,o("code",null,JSON.stringify(r,null,2))):o("code",null,JSON.stringify(r,null,2))}};d.style='code{font-family:"Source Code Pro", monospace;font-size:0.75rem;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;display:inline-block;border-radius:0.1875rem;padding:0.0625rem 0.3125rem;color:rgb(var(--contrast-1300));background-color:rgb(var(--contrast-600))}pre>code{display:block;border-radius:0.5rem;margin:0.5rem 0;padding:1rem;overflow:auto;white-space:pre-wrap;color:rgb(var(--contrast-800));background-color:rgb(var(--contrast-1600))}@media (prefers-color-scheme: dark){pre>code{color:rgb(var(--contrast-1000));background-color:rgb(var(--contrast-200))}}';export{d as limel_example_value}