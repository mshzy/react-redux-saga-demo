(this["webpackJsonpreact-redux-demo"]=this["webpackJsonpreact-redux-demo"]||[]).push([[0],{25:function(e,t,r){e.exports=r(36)},36:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(10),o=r.n(c),u=r(17),s=r(18),i=r(19),p=r(23),O=r(20),b=r(24),d=r(12);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("span",null,"\u4f60\u70b9\u51fb\u4e86 ",this.props.times," \u6b21"),a.a.createElement("br",null),a.a.createElement("button",{onClick:this.props.addOne1sLater.bind(this)},"\u70b9\u51fb\u8fd9\u91cc\uff01"))}}]),t}(n.Component),j=Object(d.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}),{addOne1sLater:function(){return{type:"preAddOne",payload:3}}})(l),y=r(5),m=r(22),h=r(7),w=r.n(h),v=r(9),x=w.a.mark(E),P=w.a.mark(S),g=w.a.mark(D),k=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function E(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.b)(k,1e3);case 2:return t.next=4,Object(v.c)({type:"addOne",payload:e.payload});case 4:case"end":return t.stop()}}),x)}function S(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)("preAddOne",E);case 2:case"end":return e.stop()}}),P)}function D(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([S()]);case 2:case"end":return e.stop()}}),g)}var J=function(e,t){var r=JSON.parse(JSON.stringify(e));switch(t.type){case"addOne":return r.times+=t.payload,r;default:return r}},A=Object(m.a)(),C=Object(y.d)(J,{times:5},Object(y.a)(A));A.run(D),o.a.render(a.a.createElement(d.a,{store:C},a.a.createElement(j,null)),document.querySelector("#root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.a3968d3a.chunk.js.map