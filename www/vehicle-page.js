(window.webpackJsonp=window.webpackJsonp||[]).push([["vehicle-page"],{42:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var a=t(1),l=t.n(a),r=t(6),c=t.n(r),i=t(2),u=t.n(i),s=t(0),m=t.n(s),o=t(7),p=t(45),d=t(46);function f(){return(f=u()(l.a.mark((function e(n){var t,a,r,i,u,s,f,v,E;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E=function(){u(s?m.a.createElement("div",null,m.a.createElement("h1",null,s.name),m.a.createElement("div",null,"Model: ",s.model),m.a.createElement("div",null,"Manufacturer: ",s.manufacturer),m.a.createElement("div",null,"Cost in credits: ",s.cost_in_credits),m.a.createElement("div",null,"Length: ",s.length," m"),m.a.createElement("div",null,"Max atmosphering speed: ",s.max_atmosphering_speed," km/h"),m.a.createElement("div",null,"Crew: ",s.crew),m.a.createElement("div",null,"Passengers: ",s.passenger),m.a.createElement("div",null,"Cargo capacity: ",s.cargo_capacity," kg"),m.a.createElement("div",null,"Consumables: ",s.consumables),m.a.createElement("div",null,"Vehicle class: ",s.vehicle_class),m.a.createElement("h2",null,"Pilots"),m.a.createElement(p.a,{urls:s.pilots,items:v,pageName:"character-summary",route:t}),m.a.createElement("h2",null,"Films"),m.a.createElement(p.a,{urls:s.films,items:f,field:"title",pageName:"film-summary",route:t})):m.a.createElement(d.a,null))},t=n.route,a=n.swapi,r=Object(o.c)(),i=c()(r,1),u=i[0],E(),e.next=6,a.fetchOne("/vehicles/".concat(t.params.id,"/"));case 6:return s=e.sent,E(),e.next=10,a.fetchMultiple(s.films,{minimum:"60%"});case 10:return f=e.sent,E(),e.next=14,a.fetchMultiple(s.pilots,{minimum:"60%"});case 14:v=e.sent,E();case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=o.a.memo((function(e){return f.apply(this,arguments)}))},45:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),l=t.n(a);function r(e){var n=e.route,t=e.urls,a=e.items,r=e.field,c=e.pageName;return t&&("string"==typeof t&&(t=[t],a=[a]),a=t.map((function(e,n){var t=a?a[n]:null;return t||(t={url:e,pending:!0}),t}))),a?0===a.length?l.a.createElement("ul",{className:"empty"},l.a.createElement("li",null,l.a.createElement("span",null,"none"))):l.a.createElement("ul",null,a.map((function(e,t){var a=n.extractID(e.url),i=n.find(c,{id:a}),u=e.pending?"...":e[r],s={href:i,className:e.pending?"pending":void 0};return l.a.createElement("li",{key:t},l.a.createElement("a",s,u))}))):null}r.defaultProps={field:"name"}},46:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),l=t.n(a);function r(){return l.a.createElement("div",{className:"loading"},l.a.createElement("div",null,l.a.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}}}]);
//# sourceMappingURL=vehicle-page.js.map