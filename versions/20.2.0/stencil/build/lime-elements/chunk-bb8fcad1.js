var n={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},t={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function i(n){return Boolean(n.document)&&"function"==typeof n.document.createElement}function a(t,a){if(i(t)&&a in n){var r=t.document.createElement("div"),e=n[a],o=e.standard;return o in r.style?o:e.prefixed}return a}function r(n,a){if(i(n)&&a in t){var r=n.document.createElement("div"),e=t[a];return e.cssProperty in r.style?e.standard:e.prefixed}return a}export{r as a,a as b};