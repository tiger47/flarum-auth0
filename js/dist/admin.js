module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},,,,,,,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e,n){"use strict";n.r(e);n(1);var r=n(0),a=n.n(r);var o=n(9),l=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.className=function(){return"Auth0SettingsModal Modal--small"},o.title=function(){return a.a.translator.trans("helmgast-auth0.admin.settings.title")},o.form=function(){return[m("div",{className:"Form-group"},m("label",null,a.a.translator.trans("helmgast-auth0.admin.settings.account_label")),m("input",{className:"FormControl",bidi:this.setting("helmgast-auth0.account")})),m("div",{className:"Form-group"},m("label",null,a.a.translator.trans("helmgast-auth0.admin.settings.client_id_label")),m("input",{className:"FormControl",bidi:this.setting("helmgast-auth0.client_id")})),m("div",{className:"Form-group"},m("label",null,a.a.translator.trans("helmgast-auth0.admin.settings.client_secret_label")),m("input",{className:"FormControl",bidi:this.setting("helmgast-auth0.client_secret")}))]},r}(n.n(o).a);a.a.initializers.add("helmgast-auth0",function(){a.a.extensionSettings["helmgast-auth0"]=function(){return a.a.modal.show(new l)}})}]);
//# sourceMappingURL=admin.js.map