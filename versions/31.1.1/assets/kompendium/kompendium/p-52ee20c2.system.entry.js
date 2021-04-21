var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var a=Array(e),r=0,t=0;t<n;t++)for(var s=arguments[t],i=0,o=s.length;i<o;i++,r++)a[r]=s[i];return a};System.register(["./p-63e7add0.system.js","./p-b4ec10f5.system.js"],(function(e){"use strict";var t,n,a,r,s;return{setters:[function(e){t=e.r;n=e.h;a=e.c},function(e){r=e.c;s=e.a}],execute:function(){var i=r((function(e){var t=typeof window!=="undefined"?window:typeof WorkerGlobalScope!=="undefined"&&self instanceof WorkerGlobalScope?self:{};
/**
                 * Prism: Lightweight, robust, elegant syntax highlighting
                 *
                 * @license MIT <https://opensource.org/licenses/MIT>
                 * @author Lea Verou <https://lea.verou.me>
                 * @namespace
                 * @public
                 */var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i;var n=0;var a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){if(t instanceof r){return new r(t.type,e(t.content),t.alias)}else if(Array.isArray(t)){return t.map(e)}else{return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")}},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){if(!e["__id"]){Object.defineProperty(e,"__id",{value:++n})}return e["__id"]},clone:function e(t,n){n=n||{};var r,s;switch(a.util.type(t)){case"Object":s=a.util.objId(t);if(n[s]){return n[s]}r={};n[s]=r;for(var i in t){if(t.hasOwnProperty(i)){r[i]=e(t[i],n)}}return r;case"Array":s=a.util.objId(t);if(n[s]){return n[s]}r=[];n[s]=r;t.forEach((function(t,a){r[a]=e(t,n)}));return r;default:return t}},getLanguage:function(e){while(e&&!t.test(e.className)){e=e.parentElement}if(e){return(e.className.match(t)||[,"none"])[1].toLowerCase()}return"none"},currentScript:function(){if(typeof document==="undefined"){return null}if("currentScript"in document&&1<2){return document.currentScript}try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t){if(t[n].src==e){return t[n]}}}return null}},isActive:function(e,t,n){var a="no-"+t;while(e){var r=e.classList;if(r.contains(t)){return true}if(r.contains(a)){return false}e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t){n[r]=t[r]}return n},insertBefore:function(e,t,n,r){r=r||a.languages;var s=r[e];var i={};for(var o in s){if(s.hasOwnProperty(o)){if(o==t){for(var l in n){if(n.hasOwnProperty(l)){i[l]=n[l]}}}if(!n.hasOwnProperty(o)){i[o]=s[o]}}}var u=r[e];r[e]=i;a.languages.DFS(a.languages,(function(t,n){if(n===u&&t!=e){this[t]=i}}));return i},DFS:function e(t,n,r,s){s=s||{};var i=a.util.objId;for(var o in t){if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],u=a.util.type(l);if(u==="Object"&&!s[i(l)]){s[i(l)]=true;e(l,n,null,s)}else if(u==="Array"&&!s[i(l)]){s[i(l)]=true;e(l,n,o,s)}}}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector));a.hooks.run("before-all-elements-highlight",r);for(var s=0,i;i=r.elements[s++];){a.highlightElement(i,t===true,r.callback)}},highlightElement:function(n,r,s){var i=a.util.getLanguage(n);var o=a.languages[i];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var l=n.parentElement;if(l&&l.nodeName.toLowerCase()==="pre"){l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i}var u=n.textContent;var c={element:n,language:i,grammar:o,code:u};function g(e){c.highlightedCode=e;a.hooks.run("before-insert",c);c.element.innerHTML=c.highlightedCode;a.hooks.run("after-highlight",c);a.hooks.run("complete",c);s&&s.call(c.element)}a.hooks.run("before-sanity-check",c);if(!c.code){a.hooks.run("complete",c);s&&s.call(c.element);return}a.hooks.run("before-highlight",c);if(!c.grammar){g(a.util.encode(c.code));return}if(r&&e.Worker){var p=new Worker(a.filename);p.onmessage=function(e){g(e.data)};p.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:true}))}else{g(a.highlight(c.code,c.grammar,c.language))}},highlight:function(e,t,n){var s={code:e,grammar:t,language:n};a.hooks.run("before-tokenize",s);s.tokens=a.tokenize(s.code,s.grammar);a.hooks.run("after-tokenize",s);return r.stringify(a.util.encode(s.tokens),s.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n){t[a]=n[a]}delete t.rest}var r=new i;o(r,r.head,e);s(e,r,t,r.head,0);return u(r)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[];n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(!n||!n.length){return}for(var r=0,s;s=n[r++];){s(t)}}},Token:r};e.Prism=a;function r(e,t,n,a){this.type=e;this.content=t;this.alias=n;this.length=(a||"").length|0}r.stringify=function e(t,n){if(typeof t=="string"){return t}if(Array.isArray(t)){var r="";t.forEach((function(t){r+=e(t,n)}));return r}var s={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n};var i=t.alias;if(i){if(Array.isArray(i)){Array.prototype.push.apply(s.classes,i)}else{s.classes.push(i)}}a.hooks.run("wrap",s);var o="";for(var l in s.attributes){o+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"'}return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+o+">"+s.content+"</"+s.tag+">"};function s(e,t,n,i,u,c){for(var g in n){if(!n.hasOwnProperty(g)||!n[g]){continue}var p=n[g];p=Array.isArray(p)?p:[p];for(var d=0;d<p.length;++d){if(c&&c.cause==g+","+d){return}var f=p[d],h=f.inside,m=!!f.lookbehind,v=!!f.greedy,y=0,b=f.alias;if(v&&!f.pattern.global){var k=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,k+"g")}var w=f.pattern||f;for(var x=i.next,F=u;x!==t.tail;F+=x.value.length,x=x.next){if(c&&F>=c.reach){break}var A=x.value;if(t.length>e.length){return}if(A instanceof r){continue}var $=1;if(v&&x!=t.tail.prev){w.lastIndex=F;var _=w.exec(e);if(!_){break}var S=_.index+(m&&_[1]?_[1].length:0);var j=_.index+_[0].length;var P=F;P+=x.value.length;while(S>=P){x=x.next;P+=x.value.length}P-=x.value.length;F=P;if(x.value instanceof r){continue}for(var z=x;z!==t.tail&&(P<j||typeof z.value==="string");z=z.next){$++;P+=z.value.length}$--;A=e.slice(F,P);_.index-=F}else{w.lastIndex=0;var _=w.exec(A)}if(!_){continue}if(m){y=_[1]?_[1].length:0}var S=_.index+y,C=_[0].slice(y),j=S+C.length,E=A.slice(0,S),B=A.slice(j);var O=F+A.length;if(c&&O>c.reach){c.reach=O}var T=x.prev;if(E){T=o(t,T,E);F+=E.length}l(t,T,$);var N=new r(g,h?a.tokenize(C,h):C,b,C);x=o(t,T,N);if(B){o(t,x,B)}if($>1){s(e,t,n,x.prev,F,{cause:g+","+d,reach:O})}}}}}function i(){var e={value:null,prev:null,next:null};var t={value:null,prev:e,next:null};e.next=t;this.head=e;this.tail=t;this.length=0}function o(e,t,n){var a=t.next;var r={value:n,prev:t,next:a};t.next=r;a.prev=r;e.length++;return r}function l(e,t,n){var a=t.next;for(var r=0;r<n&&a!==e.tail;r++){a=a.next}t.next=a;a.prev=t;e.length-=r}function u(e){var t=[];var n=e.head.next;while(n!==e.tail){t.push(n.value);n=n.next}return t}if(!e.document){if(!e.addEventListener){return a}if(!a.disableWorkerMessageHandler){e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,s=n.code,i=n.immediateClose;e.postMessage(a.highlight(s,a.languages[r],r));if(i){e.close()}}),false)}return a}var c=a.util.currentScript();if(c){a.filename=c.src;if(c.hasAttribute("data-manual")){a.manual=true}}function g(){if(!a.manual){a.highlightAll()}}if(!a.manual){var p=document.readyState;if(p==="loading"||p==="interactive"&&c&&c.defer){document.addEventListener("DOMContentLoaded",g)}else{if(window.requestAnimationFrame){window.requestAnimationFrame(g)}else{window.setTimeout(g,16)}}}return a}(t);if(e.exports){e.exports=n}if(typeof s!=="undefined"){s.Prism=n}n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:true,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:true,greedy:true,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:true},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:true,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};n.languages.markup["tag"].inside["attr-value"].inside["entity"]=n.languages.markup["entity"];n.languages.markup["doctype"].inside["internal-subset"].inside=n.languages.markup;n.hooks.add("wrap",(function(e){if(e.type==="entity"){e.attributes["title"]=e.content.replace(/&amp;/,"&")}}));Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function e(t,a){var r={};r["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:true,inside:n.languages[a]};r["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+a]={pattern:/[\s\S]+/,inside:n.languages[a]};var i={};i[t]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return t})),"i"),lookbehind:true,greedy:true,inside:s};n.languages.insertBefore("markup","cdata",i)}});n.languages.html=n.languages.markup;n.languages.mathml=n.languages.markup;n.languages.svg=n.languages.markup;n.languages.xml=n.languages.extend("markup",{});n.languages.ssml=n.languages.xml;n.languages.atom=n.languages.xml;n.languages.rss=n.languages.xml;(function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:true,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:true}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:true,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:true},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/};e.languages.css["atrule"].inside.rest=e.languages.css;var n=e.languages.markup;if(n){n.tag.addInlined("style","css");e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag)}})(n);n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:true},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:true,greedy:true}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:true},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:true,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:true}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:true},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:true}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:true,greedy:true},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:true,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:true,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:true,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:true,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:true,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}});if(n.languages.markup){n.languages.markup.tag.addInlined("script","javascript")}n.languages.js=n.languages.javascript;(function(){if(typeof self==="undefined"||!self.Prism||!self.document){return}var e=window.Prism;var t="Loading…";var n=function(e,t){return"✖ Error "+e+" while fetching file: "+t};var a="✖ Error: File does not exist or is empty";var r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};var s="data-src-status";var i="loading";var o="loaded";var l="failed";var u="pre[data-src]:not(["+s+'="'+o+'"])'+":not(["+s+'="'+i+'"])';var c=/\blang(?:uage)?-([\w-]+)\b/i;function g(e,t){var n=e.className;n=n.replace(c," ")+" language-"+t;e.className=n.replace(/\s+/g," ").trim()}e.hooks.add("before-highlightall",(function(e){e.selector+=", "+u}));e.hooks.add("before-sanity-check",(function(c){var p=c.element;if(p.matches(u)){c.code="";p.setAttribute(s,i);var d=p.appendChild(document.createElement("CODE"));d.textContent=t;var f=p.getAttribute("data-src");var h=c.language;if(h==="none"){var m=(/\.(\w+)$/.exec(f)||[,"none"])[1];h=r[m]||m}g(d,h);g(p,h);var v=e.plugins.autoloader;if(v){v.loadLanguages(h)}var y=new XMLHttpRequest;y.open("GET",f,true);y.onreadystatechange=function(){if(y.readyState==4){if(y.status<400&&y.responseText){p.setAttribute(s,o);d.textContent=y.responseText;e.highlightElement(d)}else{p.setAttribute(s,l);if(y.status>=400){d.textContent=n(y.status,y.statusText)}else{d.textContent=a}}}};y.send(null)}}));e.plugins.fileHighlight={highlight:function t(n){var a=(n||document).querySelectorAll(u);for(var r=0,s;s=a[r++];){e.highlightElement(s)}}};var p=false;e.fileHighlight=function(){if(!p){console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");p=true}e.plugins.fileHighlight.highlight.apply(this,arguments)}})()}));(function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t);e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i;e.languages.jsx.tag.inside["tag"].pattern=/^<\/?[^\s>\/]*/i;e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;e.languages.jsx.tag.inside["tag"].inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/;e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag);e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function(e){if(!e){return""}if(typeof e==="string"){return e}if(typeof e.content==="string"){return e.content}return e.content.map(n).join("")};var a=function(t){var r=[];for(var s=0;s<t.length;s++){var i=t[s];var o=false;if(typeof i!=="string"){if(i.type==="tag"&&i.content[0]&&i.content[0].type==="tag"){if(i.content[0].content[0].content==="</"){if(r.length>0&&r[r.length-1].tagName===n(i.content[0].content[1])){r.pop()}}else{if(i.content[i.content.length-1].content==="/>");else{r.push({tagName:n(i.content[0].content[1]),openedBraces:0})}}}else if(r.length>0&&i.type==="punctuation"&&i.content==="{"){r[r.length-1].openedBraces++}else if(r.length>0&&r[r.length-1].openedBraces>0&&i.type==="punctuation"&&i.content==="}"){r[r.length-1].openedBraces--}else{o=true}}if(o||typeof i==="string"){if(r.length>0&&r[r.length-1].openedBraces===0){var l=n(i);if(s<t.length-1&&(typeof t[s+1]==="string"||t[s+1].type==="plain-text")){l+=n(t[s+1]);t.splice(s+1,1)}if(s>0&&(typeof t[s-1]==="string"||t[s-1].type==="plain-text")){l=n(t[s-1])+l;t.splice(s-1,1);s--}t[s]=new e.Token("plain-text",l,null,l)}}if(i.content&&typeof i.content!=="string"){a(i.content)}}};e.hooks.add("after-tokenize",(function(e){if(e.language!=="jsx"&&e.language!=="tsx"){return}a(e.tokens)}))})(Prism);Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:true},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}});Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:true}]});Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/});Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:true}});Prism.languages.scss["atrule"].inside.rest=Prism.languages.scss;Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:true}],atrule:{pattern:/@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,operator:/[+\-*\/]/});Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:true,alias:"function"}});var o=Prism.util.clone(Prism.languages.typescript);Prism.languages.tsx=Prism.languages.extend("jsx",o);(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:true,greedy:true,inside:null},keyword:/\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/});delete e.languages.typescript["parameter"];var t=e.languages.extend("typescript",{});delete t["class-name"];e.languages.typescript["class-name"].inside=t;e.languages.insertBefore("typescript","function",{"generic-function":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:true,inside:{function:/^#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}});e.languages.ts=e.languages.typescript})(Prism);var l=":host{display:-ms-flexbox;display:flex;font-size:1rem}slot{display:none}code,pre{font-family:var(--kompendium-font-code);font-size:0.8125rem}code[class*=language-],pre[class*=language-]{color:rgb(var(--color-code-gray-lighter));background:none;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1.5rem 1rem 2rem 1rem;position:relative;margin:0;overflow:auto;-ms-flex-positive:1;flex-grow:1;border-radius:0.5625rem}:not(pre)>code[class*=language-],pre[class*=language-]{background:rgb(var(--color-code-background))}:not(pre)>code[class*=language-]{white-space:normal}.token.comment{color:var(--color-code-gray-light)}.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:var(--color-code-gray-lighter)}.token.punctuation{color:var(--color-code-gray-dark)}.token.tag,.token.attr-name,.token.namespace,.token.deleted{color:rgb(var(--color-code-pink))}.token.function-name{color:rgb(var(--color-code-blue))}.token.boolean,.token.number,.token.function{color:rgb(var(--color-code-orange))}.token.property,.token.class-name,.token.constant,.token.symbol{color:rgb(var(--color-code-yellow))}.token.selector,.token.important,.token.atrule,.token.keyword,.token.builtin{color:rgb(var(--color-code-purple))}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable{color:rgb(var(--color-code-green-light))}.token.operator{color:rgb(var(--color-code-purple))}.token.entity,.token.url{color:rgb(var(--color-code-turquoise))}.token.important,.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:rgb(var(--color-code-green-dark))}";var u=e("kompendium_code",function(){function e(e){t(this,e)}e.prototype.componentDidLoad=function(){this.renderCode()};e.prototype.componentDidUpdate=function(){this.renderCode()};e.prototype.render=function(){var e={};e["language-"+this.language]=true;return n("pre",{class:e},n("slot",null),n("code",{class:"root"}))};e.prototype.renderCode=function(){var e=this.host.shadowRoot.querySelector(".root");e.innerHTML=i.highlight(this.findCode(),i.languages[this.language])};e.prototype.findCode=function(){var e=this.host.shadowRoot.querySelector("slot");return __spreadArrays(e.assignedNodes()).map((function(e){return e.textContent})).join("")};Object.defineProperty(e.prototype,"host",{get:function(){return a(this)},enumerable:false,configurable:true});return e}());u.style=l}}}));