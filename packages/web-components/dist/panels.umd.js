!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react"),require("react-icons/io5")):"function"==typeof define&&define.amd?define(["exports","react","react-icons/io5"],n):n((e||self).webComponents={},e.react,e.io5)}(this,function(e,n,l){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(n),o={panels:"_panels-module__panels__jNFcn",panelsAreVertical:"_panels-module__panelsAreVertical__26vYe",panelsAreHorizontal:"_panels-module__panelsAreHorizontal__13HBC",panel:"_panels-module__panel__1jdP2",panelHeader:"_panels-module__panelHeader__Vq_g-",panelContent:"_panels-module__panelContent__390lq",panelIsTransparent:"_panels-module__panelIsTransparent__3lNJL"};function i(e){var n=e.label,a=void 0===n?"Panel":n,i=e.onClose,r=e.sticky;return t.default.createElement("div",{className:o.panelHeader},void 0!==r&&r?"":t.default.createElement("span",null,t.default.createElement("a",{onClick:void 0===i?function(){}:i},t.default.createElement(l.IoCloseSharp,null))),a)}function r(e){return t.default.createElement("div",{className:o.panelContent,style:{overflowY:e.noscroll?"hidden":"auto"}},e.children)}e.Panel=function(e){var n=e.label,l=void 0===n?"Panel":n,a=e.children,d=void 0===a?null:a,s=e.onClose,c=void 0===s?null:s,u=e.flex,p=e.width,f=e.height,_=e.transparent,v=e.sticky,m=void 0!==v&&v,h=e.noscroll,y=void 0!==h&&h;return t.default.createElement("div",{style:{flex:void 0===u?"none":u,width:void 0===p?"auto":p,height:void 0===f?"auto":f},className:[o.panel,void 0!==_&&_?o.panelIsTransparent:""].join(" ")},t.default.createElement(i,{label:l,onClose:c,sticky:m}),t.default.createElement(r,{children:d,noscroll:y}))},e.Panels=function(e){var n=e.children,l=void 0===n?null:n,a=e.horizontal,i=e.vertical,r=e.flex,d=e.width,s=e.height;return t.default.createElement("div",{style:{flex:void 0===r?"none":r,width:void 0===d?"auto":d,height:void 0===s?"auto":s},className:[o.panels,void 0!==a&&a?o.panelsAreHorizontal:"",void 0!==i&&i?o.panelsAreVertical:""].join(" ")},l)}});
//# sourceMappingURL=panels.umd.js.map
