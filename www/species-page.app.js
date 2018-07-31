webpackJsonp(["species-page"],{"./pages/species-page.jsx":function(e,n,t){"use strict";function r(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(i,s){try{var a=n[i](s),o=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(o).then(function(e){r("next",e)},function(e){r("throw",e)});e(o)}return r("next")})}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),n.SpeciesPageSync=n.SpeciesPage=n.default=void 0;var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),l=t("../node_modules/preact/dist/preact.esm.js"),u=t("../node_modules/prelaks/index.js"),c=t("./widgets/list.jsx"),p=t("./widgets/loading.jsx"),f=function(e){return e&&e.__esModule?e:{default:e}}(p),d=function(e){function n(){return i(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),o(n,[{key:"renderAsync",value:function(){function e(e){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(n){var t,r,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,r=t.route,i=t.swapi,s={species:null,films:null,people:null,homeworld:null,route:r},n.show((0,l.h)(h,s)),e.next=5,i.fetchOne("/species/"+r.params.id+"/");case 5:return s.species=e.sent,n.show((0,l.h)(h,s)),e.next=9,i.fetchMultiple(s.species.films,{partial:.4});case 9:return s.films=e.sent,n.show((0,l.h)(h,s)),e.next=13,i.fetchMultiple(s.species.people,{partial:.4});case 13:return s.people=e.sent,n.show((0,l.h)(h,s)),e.next=17,i.fetchOne(s.species.homeworld);case 17:return s.homeworld=e.sent,e.abrupt("return",(0,l.h)(h,s));case 19:case"end":return e.stop()}},e,this)}));return e}()}]),n}(u.AsyncComponent);d.displayName="SpeciesPage";var h=function(e){function n(){return i(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),o(n,[{key:"render",value:function(){var e=this.props,n=e.route,t=e.species,r=e.homeworld,i=e.people,s=e.films;return t?(0,l.h)("div",{className:"character-page"},(0,l.h)("h1",null,t.name),(0,l.h)("div",null,"Classification: ",t.classification),(0,l.h)("div",null,"Designation: ",t.designation),(0,l.h)("div",null,"Average height: ",t.average_height),(0,l.h)("div",null,"Skin colors: ",t.skin_colors),(0,l.h)("div",null,"Hair colors: ",t.hair_colors),(0,l.h)("div",null,"Eye colors: ",t.eye_colors),(0,l.h)("div",null,"Average lifespan: ",t.average_lifespan),(0,l.h)("div",null,"Language: ",t.language),(0,l.h)("h2",null,"Homeworld"),(0,l.h)(c.List,{urls:t.homeworld,items:r,pageName:"planet-summary",route:n}),(0,l.h)("h2",null,"Members"),(0,l.h)(c.List,{urls:t.people,items:i,pageName:"character-summary",route:n}),(0,l.h)("h2",null,"Films"),(0,l.h)(c.List,{urls:t.films,items:s,field:"title",pageName:"film-summary",route:n})):(0,l.h)(f.default,null)}}]),n}(l.Component);h.displayName="SpeciesPageSync",n.default=d,n.SpeciesPage=d,n.SpeciesPageSync=h},"./widgets/list.jsx":function(e,n,t){"use strict";function r(e){var n=e.route,t=e.urls,r=e.items,s=e.field,a=e.pageName;return t&&("string"==typeof t?r=r?[r]:[{url:t,pending:!0}]:t instanceof Array&&(r=t.map(function(e){var n=r?r[e]:null;return n||(n={url:e,pending:!0}),n}))),r?0===r.length?(0,i.h)("ul",{className:"empty"},(0,i.h)("li",null,(0,i.h)("span",null,"none"))):(0,i.h)("ul",null,r.map(function(e){var t=n.extractID(e.url),r=n.find(a,{id:t}),o=e.pending?"...":e[s],l={href:r,className:e.pending?"pending":void 0};return(0,i.h)("li",null,(0,i.h)("a",l,o))})):null}Object.defineProperty(n,"__esModule",{value:!0}),n.List=n.default=void 0;var i=t("../node_modules/preact/dist/preact.esm.js");r.defaultProps={field:"name"},r.displayName="List",n.default=r,n.List=r},"./widgets/loading.jsx":function(e,n,t){"use strict";function r(){return(0,i.h)("div",{className:"loading"},(0,i.h)("div",null,(0,i.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(n,"__esModule",{value:!0}),n.Loading=n.default=void 0;var i=t("../node_modules/preact/dist/preact.esm.js");r.displayName="Loading",n.default=r,n.Loading=r}});