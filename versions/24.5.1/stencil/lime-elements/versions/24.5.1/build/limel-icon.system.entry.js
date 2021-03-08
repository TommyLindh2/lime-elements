var __awaiter=this&&this.__awaiter||function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function c(e){try{a(r.next(e))}catch(t){i(t)}}function u(e){try{a(r["throw"](e))}catch(t){i(t)}}function a(e){e.done?n(e.value):o(e.value).then(c,u)}a((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,c;return c={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(c[Symbol.iterator]=function(){return this}),c;function u(e){return function(t){return a([e,t])}}function a(c){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=c[0]&2?o["return"]:c[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;if(o=0,i)c=[c[0]&2,i.value];switch(c[0]){case 0:case 1:i=c;break;case 4:n.label++;return{value:c[1],done:false};case 5:n.label++;o=c[1];c=[0];continue;case 7:c=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1];i=c;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(c);break}if(i[2])n.ops.pop();n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u];o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./core-e7aed7d8.system.js","./config-77911159.system.js"],(function(e){"use strict";var t,n,r,o;return{setters:[function(e){t=e.r;n=e.h;r=e.g},function(e){o=e.c}],execute:function(){var i=function(){function e(){this.cache={};this.resolveFunctions={}}e.prototype.get=function(e,t){if(t===void 0){t=""}return __awaiter(this,void 0,void 0,(function(){var n,r;return __generator(this,(function(o){switch(o.label){case 0:if(!!this.cache[e])return[3,2];n=this.cache;r=e;return[4,this.getIcon(e,t)];case 1:n[r]=o.sent();o.label=2;case 2:return[2,this.cache[e]]}}))}))};e.prototype.getIcon=function(e,t){var n=this;return new Promise((function(r){if(!n.resolveFunctions[e]){n.resolveFunctions[e]=[];n.fetchData(e,t)}n.resolveFunctions[e].push(r)}))};e.prototype.fetchData=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n,r,o;return __generator(this,(function(i){switch(i.label){case 0:n=t||"";if(t&&!t.endsWith("/")){n=t+"/"}return[4,fetch(n+"assets/icons/"+e+".svg")];case 1:r=i.sent();return[4,r.text()];case 2:o=i.sent();o=o.replace(/#000000/g,"currentColor");if(!this.validSvg(o)){throw new Error("Invalid SVG")}this.resolvePromises(e,o);return[2]}}))}))};e.prototype.validSvg=function(e){var t=new DOMParser;var n=t.parseFromString(e,"image/svg+xml");return n.documentElement.tagName.toLowerCase()==="svg"};e.prototype.resolvePromises=function(e,t){var n=this.resolveFunctions[e];n.forEach((function(e){e(t)}));this.resolveFunctions[e]=null};return e}();var c=new i;var u=function(){return c}();var a=e("limel_icon",function(){function e(e){t(this,e)}e.prototype.componentDidLoad=function(){this.loadIcon(this.name)};e.prototype.render=function(){return n("div",{class:"container"})};e.prototype.loadIcon=function(e){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:if(e===undefined||e===""){return[2]}return[4,this.loadSvg(e)];case 1:t=n.sent();this.renderSvg(t);return[2]}}))}))};e.prototype.loadSvg=function(e){return u.get(e,o.iconPath)};e.prototype.renderSvg=function(e){this.host.shadowRoot.querySelector("div.container").innerHTML=e};Object.defineProperty(e.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{name:["loadIcon"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{--mdc-theme-primary:var(--lime-primary-color,#26a69a);--mdc-theme-secondary:var(--lime-secondary-color,#575756);--mdc-theme-on-primary:var(--lime-on-primary-color,#fff);--mdc-theme-on-secondary:var(--lime-on-secondary-color,#fff)}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-background:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-background:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-background:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-background:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-light:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,0.5)}.mdc-theme--primary{color:#26a69a!important;color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary{color:#575756!important;color:var(--mdc-theme-secondary,#575756)!important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background,#fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-theme--error{color:#b00020!important;color:var(--mdc-theme-error,#b00020)!important}.mdc-theme--on-primary{color:#fff!important;color:var(--mdc-theme-on-primary,#fff)!important}.mdc-theme--on-secondary{color:#fff!important;color:var(--mdc-theme-on-secondary,#fff)!important}.mdc-theme--on-surface{color:#000!important;color:var(--mdc-theme-on-surface,#000)!important}.mdc-theme--on-error{color:#fff!important;color:var(--mdc-theme-on-error,#fff)!important}.mdc-theme--text-primary-on-background{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-background{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-light{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-light{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-dark{color:#fff!important;color:var(--mdc-theme-text-primary-on-dark,#fff)!important}.mdc-theme--text-secondary-on-dark{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--primary-bg{background-color:#26a69a!important;background-color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary-bg{background-color:#575756!important;background-color:var(--mdc-theme-secondary,#575756)!important}.mdc-typography{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{letter-spacing:-.015625em}.mdc-typography--headline1,.mdc-typography--headline2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:300;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{letter-spacing:-.0083333333em}.mdc-typography--headline3{letter-spacing:normal}.mdc-typography--headline3,.mdc-typography--headline4{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{letter-spacing:.0073529412em}.mdc-typography--headline5{font-weight:400;letter-spacing:normal}.mdc-typography--headline5,.mdc-typography--headline6{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:.875rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-weight:500;letter-spacing:.0125em}.mdc-typography--subtitle1{font-size:.875rem;font-weight:400;letter-spacing:.009375em}.mdc-typography--subtitle1,.mdc-typography--subtitle2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:1.125rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.8125rem;font-weight:500;letter-spacing:.0071428571em}.mdc-typography--body1{line-height:1.5rem;letter-spacing:.03125em}.mdc-typography--body1,.mdc-typography--body2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.8125rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{line-height:1.625rem;letter-spacing:.0178571429em}.mdc-typography--caption{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.6875rem;line-height:.875rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-size:.875rem;line-height:2.25rem;letter-spacing:.0892857143em;text-transform:none}.mdc-typography--button,.mdc-typography--overline{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:none}.mdc-typography--overline{font-size:.6875rem;line-height:.875rem;letter-spacing:.1666666667em;text-transform:uppercase}:host{background-color:transparent;border-radius:50%;display:inline-block;line-height:0;-webkit-box-sizing:border-box;box-sizing:border-box}:host svg{fill:currentColor;height:100%;pointer-events:none;width:100%}:host([hidden]){display:none}:host([size=x-small]){height:.9375rem!important;width:.9375rem!important}:host([size=small]){height:1.25rem!important;width:1.25rem!important}:host([size=medium]){height:1.5625rem!important;width:1.5625rem!important}:host([size=large]){height:1.875rem!important;width:1.875rem!important}:host([badge][size=x-small]){height:1.4375rem!important;width:1.4375rem!important}:host([badge][size=x-small])>div{margin:.25rem}:host([badge][size=small]){height:1.875rem!important;width:1.875rem!important}:host([badge][size=small])>div{margin:.3125rem}:host([badge][size=medium]){height:2.5rem!important;width:2.5rem!important}:host([badge][size=medium])>div{margin:.5rem}:host([badge][size=large]){height:2.875rem!important;width:2.875rem!important}:host([badge][size=large])>div{margin:.5rem}"},enumerable:true,configurable:true});return e}())}}}));