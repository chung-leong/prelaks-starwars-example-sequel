(window.webpackJsonp=window.webpackJsonp||[]).push([["starship-list"],{125:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StarshipList=t.default=void 0;var l,n=p(a(26)),u=p(a(47)),r=p(a(27)),i=(l=(0,r.default)(n.default.mark(function e(t){var a,l,r,i,f,p,m;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return m=function(){f(p?d.default.createElement("div",null,d.default.createElement("h1",null,"Starships"),d.default.createElement(c.default,{items:p,field:"name",pageName:"starship-summary",route:a})):d.default.createElement(o.default,null))},a=t.route,l=t.swapi,r=(0,s.useProgress)(),i=(0,u.default)(r,1),f=i[0],m(),e.next=6,l.fetchList("/starships/");case 6:p=e.sent,m(),p.more();case 9:case"end":return e.stop()}},e,this)})),function(e){return l.apply(this,arguments)}),d=p(a(8)),s=a(48),f=p(s),c=p(a(127)),o=p(a(128));function p(e){return e&&e.__esModule?e:{default:e}}var m=(0,f.default)(i);t.default=m,t.StarshipList=m},127:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var l,n=a(8),u=(l=n)&&l.__esModule?l:{default:l};function r(e){var t=e.route,a=e.urls,l=e.items,n=e.field,r=e.pageName;return a&&("string"==typeof a&&(a=[a],l=[l]),l=a.map(function(e,t){var a=l?l[t]:null;return a||(a={url:e,pending:!0}),a})),l?0===l.length?u.default.createElement("ul",{className:"empty"},u.default.createElement("li",null,u.default.createElement("span",null,"none"))):u.default.createElement("ul",null,l.map(function(e,a){var l=t.extractID(e.url),i=t.find(r,{id:l}),d=e.pending?"...":e[n],s={href:i,className:e.pending?"pending":void 0};return u.default.createElement("li",{key:a},u.default.createElement("a",s,d))})):null}r.defaultProps={field:"name"},t.default=r,t.List=r},128:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var l,n=a(8),u=(l=n)&&l.__esModule?l:{default:l};function r(){return u.default.createElement("div",{className:"loading"},u.default.createElement("div",null,u.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}t.default=r,t.Loading=r}}]);
//# sourceMappingURL=starship-list.js.map