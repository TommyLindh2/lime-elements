const e=window.LimeElements.h;class i{constructor(){this.defaultConfig={isMenu:!1,isOpen:!0,selectable:!1,badgeIcons:!1}}render(i,s={}){i=i||[],s=Object.assign({},this.defaultConfig,s);const t=i.some(e=>"secondaryText"in e&&!!e.secondaryText),n=s.badgeIcons&&i.some(e=>"icon"in e&&!!e.icon),a=s.isMenu?"menu":"listbox";return e("ul",{class:`\n                    mdc-list\n                    ${t?"mdc-list--two-line":""}\n                    ${s.isMenu?"mdc-menu__items":""}\n                    ${s.selectable?"selectable":""}\n                    ${n?"mdc-list--avatar-list":""}\n                `,"aria-hidden":(!s.isOpen).toString(),role:a,"aria-orientation":"vertical"},i.map(this.renderListItem.bind(this,s)))}renderListItem(i,s,t){return"separator"in s?e("li",{class:"mdc-list-divider",role:"separator"}):e("li",{class:`\n                    mdc-list-item\n                    ${s.disabled?"mdc-list-item--disabled":""}\n                    ${s.secondaryText?"":"mdc-list-item__text"}\n                `,role:i.isMenu?"menuitem":"",tabindex:s.disabled?"-1":"0","aria-disabled":s.disabled?"true":"false","data-index":t},s.icon?this.renderIcon(i,s):null,this.renderText(s.text,s.secondaryText))}renderText(i,s){return s?e("span",{class:"mdc-list-item__text"},e("span",{class:"mdc-list-item__primary-text"},i),e("span",{class:"mdc-list-item__secondary-text"},s)):i}renderIcon(i,s){const t={};return s.iconColor&&(t["--icon-background-color"]=s.iconColor),e("limel-icon",{class:"mdc-list-item__graphic",name:s.icon,style:t,size:i.isMenu?"small":"medium"})}}export{i as a};