var e=require("react"),n=require("react-icons/io5");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=l(e),o={panels:"_panels-module__panels__jNFcn",panelsAreVertical:"_panels-module__panelsAreVertical__26vYe",panelsAreHorizontal:"_panels-module__panelsAreHorizontal__13HBC",panel:"_panels-module__panel__1jdP2",panelHeader:"_panels-module__panelHeader__Vq_g-",panelContent:"_panels-module__panelContent__390lq",panelIsTransparent:"_panels-module__panelIsTransparent__3lNJL"};function r(e){var l=e.label,r=void 0===l?"Panel":l,a=e.onClose,d=e.sticky;return t.default.createElement("div",{className:o.panelHeader},void 0!==d&&d?"":t.default.createElement("span",null,t.default.createElement("a",{onClick:void 0===a?function(){}:a},t.default.createElement(n.IoCloseSharp,null))),r)}function a(e){return t.default.createElement("div",{className:o.panelContent,style:{overflowY:e.noscroll?"hidden":"auto"}},e.children)}var d={menu:"_menu-module__menu__332E-",item:"_menu-module__item__2Bvg1",dropdown:"_menu-module__dropdown__1NZ_L",dropdownIsActive:"_menu-module__dropdownIsActive__1UGSx",dropdownItem:"_menu-module__dropdownItem__5MA2i",dropdownItemIsDisabled:"_menu-module__dropdownItemIsDisabled__24PhY",dropdownDivider:"_menu-module__dropdownDivider__3ZhCZ",dropdownHeader:"_menu-module__dropdownHeader__vSB7u",dropdownMask:"_menu-module__dropdownMask__DIH_T",dropdownMaskIsActive:"_menu-module__dropdownMaskIsActive__1MXDw"};function i(e){var n=e.children,l=void 0===n?null:n,o=e.active;return t.default.createElement("div",{className:[d.dropdown,void 0!==o&&o?d.dropdownIsActive:""].join(" ")},l)}function u(e){var n=e.active,l=e.onClick,o=void 0===l?function(){}:l;return t.default.createElement("div",{className:[d.dropdownMask,void 0!==n&&n?d.dropdownMaskIsActive:""].join(" "),onClick:o})}function c(e){var l=e.label,o=void 0===l?null:l,r=e.tooltip,a=void 0===r?null:r,u=e.children,c=void 0===u?null:u,_=e.dropdown,m=void 0===_?null:_,s=e.active,v=void 0!==s&&s,p=e.onClick;return t.default.createElement("div",{onClick:void 0===p?function(){return!0}:p,className:[d.item].join(" ")},c||t.default.createElement("a",{title:a},o,t.default.createElement(n.IoChevronDownSharp,null)),m?t.default.createElement(i,{active:v},m()):"")}var _={tree:"_tree-module__tree__3gFj6",treeGroup:"_tree-module__treeGroup__2vJFp",treeGroupItems:"_tree-module__treeGroupItems__1yLzZ",treeGroupIsOpen:"_tree-module__treeGroupIsOpen__1sLtc",treeItem:"_tree-module__treeItem__3xJaG",treeItemIcon:"_tree-module__treeItemIcon__27PnI",treeItemLabel:"_tree-module__treeItemLabel__PrF0t",treeItemActions:"_tree-module__treeItemActions__v25RM"};function m(e){var n=e.label,l=void 0===n?"Item":n,o=e.icon,r=e.onClick,a=e.actions,d=void 0===a?function(){}:a;return t.default.createElement("div",{className:_.treeItem,onClick:void 0===r?function(){}:r},t.default.createElement("span",{className:_.treeItemIcon},(void 0===o?function(){}:o)()),t.default.createElement("span",{className:_.treeItemLabel},l),t.default.createElement("span",{className:_.treeItemActions},d()))}function s(e){var n=e.children;return t.default.createElement("div",{className:_.treeGroupItems},void 0===n?null:n)}module.exports={Panels:function(e){var n=e.children,l=void 0===n?null:n,r=e.horizontal,a=e.vertical,d=e.flex,i=e.width,u=e.height;return t.default.createElement("div",{style:{flex:void 0===d?"none":d,width:void 0===i?"auto":i,height:void 0===u?"auto":u},className:[o.panels,void 0!==r&&r?o.panelsAreHorizontal:"",void 0!==a&&a?o.panelsAreVertical:""].join(" ")},l)},Panel:function(e){var n=e.label,l=void 0===n?"Panel":n,d=e.children,i=void 0===d?null:d,u=e.onClose,c=void 0===u?null:u,_=e.flex,m=e.width,s=e.height,v=e.transparent,p=e.sticky,f=void 0!==p&&p,I=e.noscroll,w=void 0!==I&&I;return t.default.createElement("div",{style:{flex:void 0===_?"none":_,width:void 0===m?"auto":m,height:void 0===s?"auto":s},className:[o.panel,void 0!==v&&v?o.panelIsTransparent:""].join(" ")},t.default.createElement(r,{label:l,onClose:c,sticky:f}),t.default.createElement(a,{children:i,noscroll:w}))},Menu:function(n){var l=n.children,o=void 0===l?null:l,r=n.items,a=void 0===r?[]:r,i=e.useState(null),_=i[0],m=i[1];return t.default.createElement("div",{className:[d.menu].join(" ")},a.map(function(e){return t.default.createElement(c,{key:e.label,label:e.label,dropdown:function(){return e.dropdown({controller:controller})},active:_===e.label,onClick:function(){m(_===e.label?null:e.label)}})}),t.default.createElement("div",{onClick:function(){return m(null)},style:{flex:1}}),o,t.default.createElement(u,{onClick:function(){return m(null)},active:!!_}))},MenuItem:c,MenuDropdownHeader:function(e){var n=e.label;return t.default.createElement("div",{className:d.dropdownHeader},void 0===n?null:n)},MenuDropdownDivider:function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),t.default.createElement("div",{className:d.dropdownDivider})},MenuDropdownItem:function(e){var n=e.label,l=void 0===n?null:n,o=e.href,r=void 0===o?null:o,a=e.tooltip,i=void 0===a?null:a,u=e.icon,c=void 0===u?null:u,_=e.disabled,m=e.onClick,s=void 0===m?function(){return!0}:m;return t.default.createElement("div",{className:[d.dropdownItem,void 0!==_&&_?d.dropdownItemIsDisabled:""].join(" ")},t.default.createElement("a",{href:r,onClick:s,title:i,target:r?"_blank":""},t.default.createElement("span",null,c?c():""),t.default.createElement("span",null,l)))},MenuDropdownMask:u,Tree:function(e){var n=e.children;return t.default.createElement("div",{className:_.tree},void 0===n?null:n)},TreeGroup:function(l){var o=l.label,r=void 0===o?"Group":o,a=l.children,d=void 0===a?null:a,i=e.useState(!1),u=i[0],c=i[1];return t.default.createElement("div",{className:[_.treeGroup,u?_.treeGroupIsOpen:""].join(" ")},t.default.createElement(m,{onClick:function(){return c(!u)},icon:u?n.IoChevronDownSharp:n.IoChevronForwardSharp,label:r}),t.default.createElement(s,null,d))},TreeGroupItems:s,TreeItem:m};
//# sourceMappingURL=index.js.map
