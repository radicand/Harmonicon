var e=require("react-icons/io5"),l={panels:"_panels-module__panels__jNFcn",panelsAreVertical:"_panels-module__panelsAreVertical__26vYe",panelsAreHorizontal:"_panels-module__panelsAreHorizontal__13HBC",panel:"_panels-module__panel__1jdP2",panelHeader:"_panels-module__panelHeader__Vq_g-",panelContent:"_panels-module__panelContent__390lq",libraryPanel:"_panels-module__libraryPanel__17i2R",treeGroup:"_panels-module__treeGroup__3nCIS",treeResource:"_panels-module__treeResource__32g79"};function a(a){var n=a.label,r=void 0===n?"Panel":n,t=a.onClose;return React.createElement("div",{className:l.panelHeader},React.createElement("span",null,React.createElement("a",{onClick:void 0===t?function(){}:t},React.createElement(e.IoCloseSharp,null))),r)}function n(e){return React.createElement("div",{className:l.panelContent},e.children)}exports.Panel=function(e){var r=e.label,t=e.children,o=void 0===t?null:t,_=e.id,i=e.onClose;return React.createElement("div",{"data-id":void 0===_?null:_,className:l.panel},React.createElement(a,{label:void 0===r?"Panel":r,onClose:void 0===i?null:i}),React.createElement(n,{children:o}))},exports.Panels=function(e){var a=e.children,n=void 0===a?null:a,r=e.horizontal,t=e.vertical,o=e.id;return React.createElement("div",{"data-id":void 0===o?null:o,className:[l.panels,void 0!==r&&r?l.panelsAreHorizontal:"",void 0!==t&&t?l.panelsAreVertical:""].join(" ")},n)};
//# sourceMappingURL=index.cjs.map
