"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{1510:function(e,t,r){r.d(t,{e:function(){return i}});var n=r(1087),a=r(7689),u="MovieList_list__yjDCC",c="MovieList_item__tDivI",s=r(184),i=function(e){var t=e.movieList,r=(0,a.TH)();return(0,s.jsx)("ul",{className:u,children:Array.isArray(t)&&(null===t||void 0===t?void 0:t.map((function(e){var t=e.id,a=e.name,u=e.title;return(0,s.jsx)(n.rU,{state:{from:r},className:c,to:"/movies/".concat(t),children:(0,s.jsx)("h3",{children:a||u})},t)})))})}},4936:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(5861),a=r(9439),u=r(7757),c=r.n(u),s=r(2791),i=r(1686),o=r(8809),f=r(1510),p=r(4635),v="Home_title__L087v",d=r(184);var l=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],l=(0,s.useState)(!1),h=(0,a.Z)(l,2),m=h[0],x=h[1],w=(0,s.useState)(null),_=(0,a.Z)(w,2),k=_[0],g=_[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,p.Aj)();case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0.message);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,s.useEffect)((function(){null!==k&&i.Notify.failure("some error occured ".concat(k))}),[k]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:v,children:"Trends of the week"}),m&&(0,d.jsx)(o.a,{}),(0,d.jsx)(f.e,{movieList:r})]})}},4635:function(e,t,r){r.d(t,{Aj:function(){return s},IQ:function(){return f},Jh:function(){return p},TP:function(){return o},Wf:function(){return i}});var n=r(5861),a=r(7757),u=r.n(a),c=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"51c95ad92ecd889c51d912d0abe26ddf",language:"en-US",include_adult:!1}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.ece10d74.chunk.js.map