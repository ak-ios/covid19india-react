(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[24],{135:function(e,t,a){"use strict";var r=a(0),i=a(86),n=function(){};t.a=function(e,t,a){if(!i.a)return[t,n,n];if(!e)throw new Error("useLocalStorage key may not be falsy");var c=a?a.raw?function(e){return e}:a.deserializer:JSON.parse,l=Object(r.useState)((function(){try{var r=a?a.raw?String:a.serializer:JSON.stringify,i=localStorage.getItem(e);return null!==i?c(i):(t&&localStorage.setItem(e,r(t)),t)}catch(l){return t}})),o=l[0],s=l[1],d=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(o):t;if("undefined"===typeof r)return;var i=void 0;i=a?a.raw?"string"===typeof r?r:JSON.stringify(r):a.serializer?a.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,i),s(c(i))}catch(l){}}),[e,s]),u=Object(r.useCallback)((function(){try{localStorage.removeItem(e),s(void 0)}catch(l){}}),[e,s]);return[o,d,u]}},202:function(e,t,a){"use strict";a.r(t);var r=a(108),i=a(78),n=a(0),c=a.n(n),l=a(90),o=function(){var e=window.innerWidth,t=e>769?480:e;return c.a.createElement(l.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},c.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},s=a(23),d=a(97),u=a(31),m=a(88),f=a(79),b=a.n(f),O=a(58),h=a(201),g=a(82),p=a.n(g),y=a(256),v=a(135),j=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(18),a.e(30)]).then(a.bind(null,226))}));t.default=c.a.memo((function(e){var t=this,a=e.stateCode,l=e.timeseries,f=e.date,g=e.regionHighlighted,p=e.setRegionHighlighted,E=e.anchor,N=e.setAnchor,C=Object(y.a)().t,k=Object(n.useState)(s.s.MONTH),w=Object(i.a)(k,2),x=w[0],S=w[1],T=Object(v.a)("chartType","total"),J=Object(i.a)(T,2),H=J[0],M=J[1],P=Object(v.a)("isUniform",!0),U=Object(i.a)(P,2),z=U[0],I=U[1],R=Object(v.a)("isLog",!1),L=Object(i.a)(R,2),K=L[0],W=L[1],q=Object(n.useRef)(),B=Object(d.a)(q,{once:!0}),F=Object(n.useMemo)((function(){var e;return(null===l||void 0===l||null===(e=l[g.stateCode])||void 0===e?void 0:e.districts)?{stateCode:g.stateCode,districtName:g.districtName}:{stateCode:g.stateCode,districtName:null}}),[l,g.stateCode,g.districtName]),A=Object(n.useMemo)((function(){var e,t,a,r;return F.districtName?null===l||void 0===l||null===(e=l[F.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(a=t[F.districtName])||void 0===a?void 0:a.dates:null===l||void 0===l||null===(r=l[F.stateCode])||void 0===r?void 0:r.dates}),[l,F.stateCode,F.districtName]),G=Object(n.useMemo)((function(){var e=Object.keys(l||{}).filter((function(e){return e!==a})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(l||{}).reduce((function(e,t){var a;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===l||void 0===l||null===(a=l[t])||void 0===a?void 0:a.districts)||{}).reduce((function(e,a){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:a}])}),[])))}),[]);return[{stateCode:a,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[l,a]),X=Object(n.useMemo)((function(){var e=f||Object(u.i)(),t=Object.keys(A||{}).filter((function(t){return t<=e}));if(x===s.s.TWO_WEEKS){var a=Object(O.a)(Object(h.a)(Object(u.l)(e),{weeks:2}),{representation:"date"});return t.filter((function(e){return e>=a}))}if(x===s.s.MONTH){var r=Object(O.a)(Object(h.a)(Object(u.l)(e),{months:1}),{representation:"date"});return t.filter((function(e){return e>=r}))}return t}),[A,f,x]),_=Object(n.useCallback)((function(e){var t=e.target;p(JSON.parse(t.value))}),[p]),D=Object(n.useCallback)((function(){p({stateCode:a,districtName:null})}),[a,p]);return c.a.createElement("div",{className:b()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===E}),style:{display:"mapexplorer"===E?"none":""},ref:q},c.a.createElement("div",{className:"timeseries-header"},c.a.createElement("div",{className:b()("anchor",{stickied:"timeseries"===E}),onClick:N&&N.bind(this,"timeseries"===E?null:"timeseries")},c.a.createElement(m.j,null)),c.a.createElement("h1",null,C("Spread Trends")),c.a.createElement("div",{className:"tabs"},Object.entries(s.r).map((function(e,a){var r=Object(i.a)(e,2),n=r[0],l=r[1];return c.a.createElement("div",{className:"tab ".concat(H===n?"focused":""),key:n,onClick:M.bind(t,n)},c.a.createElement("h4",null,C(l)))}))),c.a.createElement("div",{className:"scale-modes"},c.a.createElement("label",{className:"main"},C("Scale Modes")),c.a.createElement("div",{className:"timeseries-mode"},c.a.createElement("label",{htmlFor:"timeseries-mode"},C("Uniform")),c.a.createElement("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:z,"aria-label":C("Checked by default to scale uniformly."),onChange:I.bind(this,!z)})),c.a.createElement("div",{className:"timeseries-logmode ".concat("total"!==H?"disabled":"")},c.a.createElement("label",{htmlFor:"timeseries-logmode"},C("Logarithmic")),c.a.createElement("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===H&&K,className:"switch",disabled:"total"!==H,onChange:W.bind(this,!K)})))),G&&c.a.createElement("div",{className:"state-selection"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("select",{value:JSON.stringify(F),onChange:_},G.filter((function(e){return s.p[e.stateCode]!==e.districtName})).map((function(e){return c.a.createElement("option",{value:JSON.stringify(e),key:"".concat(e.stateCode,"-").concat(e.districtName)},e.districtName?C(e.districtName):C(s.p[e.stateCode]))})))),c.a.createElement("div",{className:"reset-icon",onClick:D},c.a.createElement(m.l,null))),B&&c.a.createElement(n.Suspense,{fallback:c.a.createElement(o,null)},c.a.createElement(j,Object.assign({timeseries:A,regionHighlighted:F},{dates:X,chartType:H,isUniform:z,isLog:K}))),!B&&c.a.createElement("div",{style:{height:"50rem"}}),c.a.createElement("div",{className:"pills"},Object.values(s.s).map((function(e){return c.a.createElement("button",{key:e,type:"button",className:b()({selected:x===e}),onClick:function(){return S(e)}},C(e))}))),c.a.createElement("div",{className:"alert"},c.a.createElement(m.h,{size:24}),c.a.createElement("div",{className:"alert-right"},C("Tested chart is independent of uniform scaling"))))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!p()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!p()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!p()(t.date,e.date)&&!!p()(t.anchor,e.anchor)))))}))},90:function(e,t,a){"use strict";var r=a(0),i=function(){return(i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,a=e.backgroundColor,n=e.backgroundOpacity,c=e.baseUrl,l=e.children,o=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,m=e.interval,f=e.rtl,b=e.speed,O=e.style,h=e.title,g=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),p=u||Math.random().toString(36).substring(6),y=p+"-diff",v=p+"-animated-diff",j=p+"-aria",E=f?{transform:"scaleX(-1)"}:null,N="0; "+m+"; 1",C=b+"s";return Object(r.createElement)("svg",i({"aria-labelledby":j,role:"img",style:i(i({},O),E)},g),h?Object(r.createElement)("title",{id:j},h):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+y+")",style:{fill:"url("+c+"#"+v+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:y},l),Object(r.createElement)("linearGradient",{id:v},Object(r.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:N,dur:C,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(r.createElement)(n,i({},e)):Object(r.createElement)(l,i({},e))},l=function(e){return Object(r.createElement)(c,i({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=24.17ac8f65.chunk.js.map