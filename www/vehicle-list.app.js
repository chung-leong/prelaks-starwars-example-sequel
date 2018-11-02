webpackJsonp(["vehicle-list"],{"./pages/vehicle-list.jsx":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.VehicleListSync=t.VehicleList=t.default=void 0;var l=n("../node_modules/babel-runtime/regenerator/index.js"),i=s(l),r=n("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),u=s(r),a=n("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=s(a),d=n("../node_modules/babel-runtime/helpers/classCallCheck.js"),c=s(d),p=n("../node_modules/babel-runtime/helpers/createClass.js"),f=s(p),h=n("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=s(h),v=n("../node_modules/babel-runtime/helpers/inherits.js"),_=s(v),b=n("../node_modules/preact/dist/preact.esm.js"),g=n("../node_modules/relaks/preact.js"),y=n("./widgets/list.jsx"),j=s(y),L=n("./widgets/loading.jsx"),N=s(L),w=function(e){function t(){return(0,c.default)(this,t),(0,m.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,f.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,u.default)(i.default.mark(function e(t){var n,s,l,r;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,s=n.route,l=n.swapi,r={route:s},t.show((0,b.h)(x,r)),e.next=5,l.fetchList("/vehicles/");case 5:return r.vehicles=e.sent,r.vehicles.more(),e.abrupt("return",(0,b.h)(x,r));case 8:case"end":return e.stop()}},e,this)}));return e}()}]),t}(g.AsyncComponent);w.displayName="VehicleList";var x=function(e){function t(){return(0,c.default)(this,t),(0,m.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.vehicles,n=e.route;if(!t)return(0,b.h)(N.default,null);var s={items:t,pageName:"vehicle-summary",route:n};return(0,b.h)("div",null,(0,b.h)("h1",null,"Vehicles"),(0,b.h)(j.default,s))}}]),t}(b.Component);x.displayName="VehicleListSync",t.default=w,t.VehicleList=w,t.VehicleListSync=x},"./widgets/list.jsx":function(e,t,n){"use strict";function s(e){var t=e.route,n=e.urls,s=e.items,i=e.field,r=e.pageName;return n&&("string"==typeof n&&(n=[n],s=[s]),s=n.map(function(e,t){var n=s?s[t]:null;return n||(n={url:e,pending:!0}),n})),s?0===s.length?(0,l.h)("ul",{className:"empty"},(0,l.h)("li",null,(0,l.h)("span",null,"none"))):(0,l.h)("ul",null,s.map(function(e){var n=t.extractID(e.url),s=t.find(r,{id:n}),u=e.pending?"...":e[i],a={href:s,className:e.pending?"pending":void 0};return(0,l.h)("li",null,(0,l.h)("a",a,u))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var l=n("../node_modules/preact/dist/preact.esm.js");s.defaultProps={field:"name"},s.displayName="List",t.default=s,t.List=s},"./widgets/loading.jsx":function(e,t,n){"use strict";function s(){return(0,l.h)("div",{className:"loading"},(0,l.h)("div",null,(0,l.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var l=n("../node_modules/preact/dist/preact.esm.js");s.displayName="Loading",t.default=s,t.Loading=s}});