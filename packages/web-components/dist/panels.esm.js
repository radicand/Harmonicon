import e from"react";import{IoCloseSharp as l}from"react-icons/io5";var n={panels:"_panels-module__panels__jNFcn",panelsAreVertical:"_panels-module__panelsAreVertical__26vYe",panelsAreHorizontal:"_panels-module__panelsAreHorizontal__13HBC",panel:"_panels-module__panel__1jdP2",panelHeader:"_panels-module__panelHeader__Vq_g-",panelContent:"_panels-module__panelContent__390lq",panelIsTransparent:"_panels-module__panelIsTransparent__3lNJL"};function a(a){var o=a.label,t=void 0===o?"Panel":o,r=a.onClose,i=a.sticky;return e.createElement("div",{className:n.panelHeader},void 0!==i&&i?"":e.createElement("span",null,e.createElement("a",{onClick:void 0===r?function(){}:r},e.createElement(l,null))),t)}function o(l){return e.createElement("div",{className:n.panelContent,style:{overflowY:l.noscroll?"hidden":"auto"}},l.children)}function t(l){var t=l.label,r=void 0===t?"Panel":t,i=l.children,s=void 0===i?null:i,d=l.onClose,c=void 0===d?null:d,p=l.flex,_=l.width,v=l.height,u=l.transparent,m=l.sticky,h=void 0!==m&&m,f=l.noscroll,E=void 0!==f&&f;return e.createElement("div",{style:{flex:void 0===p?"none":p,width:void 0===_?"auto":_,height:void 0===v?"auto":v},className:[n.panel,void 0!==u&&u?n.panelIsTransparent:""].join(" ")},e.createElement(a,{label:r,onClose:c,sticky:h}),e.createElement(o,{children:s,noscroll:E}))}function r(l){var a=l.children,o=void 0===a?null:a,t=l.horizontal,r=l.vertical,i=l.flex,s=l.width,d=l.height;return e.createElement("div",{style:{flex:void 0===i?"none":i,width:void 0===s?"auto":s,height:void 0===d?"auto":d},className:[n.panels,void 0!==t&&t?n.panelsAreHorizontal:"",void 0!==r&&r?n.panelsAreVertical:""].join(" ")},o)}export{t as Panel,r as Panels};
//# sourceMappingURL=panels.esm.js.map
