import{r as t,h as s,g as i}from"./core-5f6fd4ec.js";import{c as r}from"./config-9a1dfec5.js";const e=new class{constructor(){this.cache={},this.resolveFunctions={}}async get(t,s=""){return this.cache[t]||(this.cache[t]=await this.getIcon(t,s)),this.cache[t]}getIcon(t,s){return new Promise(i=>{this.resolveFunctions[t]||(this.resolveFunctions[t]=[],this.fetchData(t,s)),this.resolveFunctions[t].push(i)})}async fetchData(t,s){let i=s||"";s&&!s.endsWith("/")&&(i=`${s}/`);const r=await fetch(`${i}assets/icons/${t}.svg`);let e=await r.text();if(e=e.replace(/#000000/g,"currentColor"),!this.validSvg(e))throw new Error("Invalid SVG");this.resolvePromises(t,e)}validSvg(t){return"svg"===(new DOMParser).parseFromString(t,"image/svg+xml").documentElement.tagName.toLowerCase()}resolvePromises(t,s){this.resolveFunctions[t].forEach(t=>{t(s)}),this.resolveFunctions[t]=null}},n=(()=>e)(),o=class{constructor(s){t(this,s)}componentDidLoad(){this.loadIcon(this.name)}render(){return s("div",{class:"container"})}async loadIcon(t){if(void 0===t||""===t)return;const s=await this.loadSvg(t);this.renderSvg(s)}loadSvg(t){return n.get(t,r.iconPath)}renderSvg(t){this.host.shadowRoot.querySelector("div.container").innerHTML=t}get host(){return i(this)}static get watchers(){return{name:["loadIcon"]}}static get style(){return":host{--mdc-theme-primary:var(--lime-primary-color,#26a69a);--mdc-theme-secondary:var(--lime-secondary-color,#575756);--mdc-theme-on-primary:var(--lime-on-primary-color,#fff);--mdc-theme-on-secondary:var(--lime-on-secondary-color,#fff)}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-background:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-background:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-background:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-background:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-light:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,0.5)}.mdc-theme--primary{color:#26a69a!important;color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary{color:#575756!important;color:var(--mdc-theme-secondary,#575756)!important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background,#fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-theme--error{color:#b00020!important;color:var(--mdc-theme-error,#b00020)!important}.mdc-theme--on-primary{color:#fff!important;color:var(--mdc-theme-on-primary,#fff)!important}.mdc-theme--on-secondary{color:#fff!important;color:var(--mdc-theme-on-secondary,#fff)!important}.mdc-theme--on-surface{color:#000!important;color:var(--mdc-theme-on-surface,#000)!important}.mdc-theme--on-error{color:#fff!important;color:var(--mdc-theme-on-error,#fff)!important}.mdc-theme--text-primary-on-background{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-background{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-light{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-light{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-dark{color:#fff!important;color:var(--mdc-theme-text-primary-on-dark,#fff)!important}.mdc-theme--text-secondary-on-dark{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--primary-bg{background-color:#26a69a!important;background-color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary-bg{background-color:#575756!important;background-color:var(--mdc-theme-secondary,#575756)!important}.mdc-typography{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{letter-spacing:-.015625em}.mdc-typography--headline1,.mdc-typography--headline2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:300;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{letter-spacing:-.0083333333em}.mdc-typography--headline3{letter-spacing:normal}.mdc-typography--headline3,.mdc-typography--headline4{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{letter-spacing:.0073529412em}.mdc-typography--headline5{font-weight:400;letter-spacing:normal}.mdc-typography--headline5,.mdc-typography--headline6{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:.875rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-weight:500;letter-spacing:.0125em}.mdc-typography--subtitle1{font-size:.875rem;font-weight:400;letter-spacing:.009375em}.mdc-typography--subtitle1,.mdc-typography--subtitle2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:1.125rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.8125rem;font-weight:500;letter-spacing:.0071428571em}.mdc-typography--body1{line-height:1.5rem;letter-spacing:.03125em}.mdc-typography--body1,.mdc-typography--body2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.8125rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{line-height:1.625rem;letter-spacing:.0178571429em}.mdc-typography--caption{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.6875rem;line-height:.875rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-size:.875rem;line-height:2.25rem;letter-spacing:.0892857143em;text-transform:none}.mdc-typography--button,.mdc-typography--overline{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:none}.mdc-typography--overline{font-size:.6875rem;line-height:.875rem;letter-spacing:.1666666667em;text-transform:uppercase}:host{background-color:transparent;border-radius:50%;display:inline-block;line-height:0;-webkit-box-sizing:border-box;box-sizing:border-box}:host svg{fill:currentColor;height:100%;pointer-events:none;width:100%}:host([hidden]){display:none}:host([size=x-small]){height:.9375rem!important;width:.9375rem!important}:host([size=small]){height:1.25rem!important;width:1.25rem!important}:host([size=medium]){height:1.5625rem!important;width:1.5625rem!important}:host([size=large]){height:1.875rem!important;width:1.875rem!important}:host([badge][size=x-small]){height:1.4375rem!important;width:1.4375rem!important}:host([badge][size=x-small])>div{margin:.25rem}:host([badge][size=small]){height:1.875rem!important;width:1.875rem!important}:host([badge][size=small])>div{margin:.3125rem}:host([badge][size=medium]){height:2.5rem!important;width:2.5rem!important}:host([badge][size=medium])>div{margin:.5rem}:host([badge][size=large]){height:2.875rem!important;width:2.875rem!important}:host([badge][size=large])>div{margin:.5rem}"}};export{o as limel_icon};