var e=require("react"),t=require("react-icons/io5");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),o={tree:"_tree-module__tree__3gFj6",treeGroup:"_tree-module__treeGroup__2vJFp",treeGroupItems:"_tree-module__treeGroupItems__1yLzZ",treeGroupIsOpen:"_tree-module__treeGroupIsOpen__1sLtc",treeItem:"_tree-module__treeItem__3xJaG",treeItemIcon:"_tree-module__treeItemIcon__27PnI",treeItemLabel:"_tree-module__treeItemLabel__PrF0t",treeItemActions:"_tree-module__treeItemActions__v25RM"};function l(e){var t=e.label,r=void 0===t?"Item":t,l=e.icon,a=e.onClick,u=e.actions,c=void 0===u?function(){}:u;return n.default.createElement("div",{className:o.treeItem,onClick:void 0===a?function(){}:a},n.default.createElement("span",{className:o.treeItemIcon},(void 0===l?function(){}:l)()),n.default.createElement("span",{className:o.treeItemLabel},r),n.default.createElement("span",{className:o.treeItemActions},c()))}function a(e){var t=e.children;return n.default.createElement("div",{className:o.treeGroupItems},void 0===t?null:t)}exports.Tree=function(e){var t=e.children;return n.default.createElement("div",{className:o.tree},void 0===t?null:t)},exports.TreeGroup=function(r){var u=r.label,c=void 0===u?"Group":u,m=r.children,_=void 0===m?null:m,i=e.useState(!1),d=i[0],s=i[1];return n.default.createElement("div",{className:[o.treeGroup,d?o.treeGroupIsOpen:""].join(" ")},n.default.createElement(l,{onClick:function(){return s(!d)},icon:d?t.IoChevronDownSharp:t.IoChevronForwardSharp,label:c}),n.default.createElement(a,null,_))},exports.TreeGroupItems=a,exports.TreeItem=l;
//# sourceMappingURL=tree.js.map
