(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{38:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),r=t.n(n),c=t(3);function l(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-block header-block-collapse d-lg-none d-xl-none"},r.a.createElement("button",{className:"collapse-btn",id:"sidebar-collapse-btn"},r.a.createElement("i",{className:"fa fa-bars"}))),r.a.createElement("div",{className:"header-block header-block-search"}),r.a.createElement("div",{className:"header-block header-block-nav"},r.a.createElement("ul",{className:"nav-profile"},r.a.createElement("li",{className:"notifications new"}),r.a.createElement("li",{className:"profile dropdown"},r.a.createElement("a",{"data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",{className:"name"},r.a.createElement("button",{onClick:function(){c.b.remove(),e.history.push("/login")},type:"button",class:"btn btn-default btn-sm"},r.a.createElement("i",{class:"fa fa-sign-out"}," ",r.a.createElement("span",null," Log out")))))))))}},39:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n);function c(){return r.a.createElement("aside",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("div",{className:"brand"},r.a.createElement("div",{className:"logo"},r.a.createElement("span",{className:"l l1"}),r.a.createElement("span",{className:"l l2"}),r.a.createElement("span",{className:"l l3"}),r.a.createElement("span",{className:"l l4"}),r.a.createElement("span",{className:"l l5"}))," A1abilities Admin")),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",{className:"sidebar-menu metismenu",id:"sidebar-menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"}," ",r.a.createElement("i",{className:"fa fa-home"})," Dashboard ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Services"}," ",r.a.createElement("i",{className:"fa fa-th-large"})," Services ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/OurTechnology"},r.a.createElement("i",{className:"fa fa-area-chart"})," Technology")),r.a.createElement("li",null,r.a.createElement("a",{href:"/About"},r.a.createElement("i",{className:"fa fa-table"})," About")),r.a.createElement("li",null,r.a.createElement("a",{href:"/OurGoals"},r.a.createElement("i",{className:"fa fa-pencil-square-o"})," Goals ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Portfolio"},r.a.createElement("i",{className:"fa fa-desktop"})," Portfolio")),r.a.createElement("li",null,r.a.createElement("a",{href:"/WhyUs"},r.a.createElement("i",{className:"fa fa-bell"})," Why Us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/OurPartners"},r.a.createElement("i",{className:"fa fa-flask"}),"  Our Partners")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Contact"},r.a.createElement("i",{className:"fa fa-file-text-o"})," Contact"))))))}},40:function(e,a,t){"use strict";var n=t(36),r=t.n(n),c=t(37),l=t(42),s=t.n(l),o=t(3);function i(e){(e||401===e.response.status)&&(o.b.remove(),document.location.reload())}var m=function(e){var a=e.methodType;return{method:void 0===a?"GET":a,headers:{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}};console.log("API_CONSUMER: ",o.a);a.a={login:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(o.a,"/api/login"),e.prev=2,e.next=5,s()(n,Object.assign({},m({methodType:"POST"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),i(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),addUpdateFormContent:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(o.a,"/api/addUpdateFormContent"),e.prev=2,e.next=5,s()(n,Object.assign({},m({methodType:"POST"}),{data:t.formData}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),i(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),getTabRelatedList:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(o.a,"/api/getTabRelatedList"),e.prev=2,e.next=5,s()(n,Object.assign({},m({methodType:"POST"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),i(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),getContactList:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(o.a,"/api/getContactList"),e.prev=2,e.next=5,s()(n,Object.assign({},m({methodType:"GET"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),i(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),changeState:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(o.a,"/api/changeState"),e.prev=2,e.next=5,s()(n,Object.assign({},m({methodType:"POST"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),i(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}()}},75:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(36),r=t.n(n),c=t(37),l=t(43),s=t(0),o=t.n(s),i=t(38),m=t(39),u=t(12),d=t(40);function p(e){var a=Object(s.useState)([]),t=Object(l.a)(a,2),n=t[0],p=t[1],E=function(){var e=Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.getTabRelatedList({type:"goals"});case 3:a=e.sent,p(a.resultList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){E()}),[]);var f=function(){var e=Object(c.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleActiveDeactive",a),e.prev=1,e.next=4,d.a.changeState({type:"goals",id:a.id,is_active:a.is_active});case 4:t=e.sent,p(t.resultList),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error...",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(i.a,e),o.a.createElement(m.a,null),o.a.createElement("div",{className:"sidebar-overlay",id:"sidebar-overlay"}),o.a.createElement("div",{className:"sidebar-mobile-menu-handle",id:"sidebar-mobile-menu-handle"}),o.a.createElement("div",{className:"mobile-menu-handle"}),o.a.createElement("article",{className:"content responsive-tables-page"},o.a.createElement("div",{className:"title-block"},o.a.createElement("h1",{className:"title"},"Our Goals",o.a.createElement(u.b,{to:{pathname:"/editor",state:{type:"goals",operation:"add"}}},o.a.createElement("button",{type:"button",style:{float:"right"},className:"btn btn-success-outline"},"Add"))),o.a.createElement("p",{className:"title-description"})),o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-block"},o.a.createElement("div",{className:"card-title-block"},o.a.createElement("h3",{className:"title"})),o.a.createElement("section",{className:"example"},o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-striped table-bordered table-hover"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"S No."),o.a.createElement("th",null,"Our Goals Name "),o.a.createElement("th",null,"Services Update"),o.a.createElement("th",null,"Services  Delete"))),o.a.createElement("tbody",null,n.map((function(e,a){return o.a.createElement("tr",null,o.a.createElement("td",null,a+1),o.a.createElement("td",null,e.title),o.a.createElement("td",null,o.a.createElement(u.b,{to:{pathname:"/editor",state:{type:"portfolio",operation:"update",data:e}}},o.a.createElement("button",{type:"button",className:"btn btn-success-outline"},"Update"))),o.a.createElement("td",null,o.a.createElement("button",{type:"button",className:"btn btn-danger-outline",onClick:function(){f(e)}},1===e.is_active?"Deactive":"Active")))}))))))))))),o.a.createElement("div",{className:"ref",id:"ref"},o.a.createElement("div",{className:"color-primary"}),o.a.createElement("div",{className:"chart"},o.a.createElement("div",{className:"color-primary"}),o.a.createElement("div",{className:"color-secondary"})))))}}}]);
//# sourceMappingURL=8.f580172b.chunk.js.map