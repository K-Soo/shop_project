(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{27777:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(85893),i=r(32465),a=r(67294),c=r(24097);function o(){var e=(0,i.Z)(["\n      display: none;\n    "]);return o=function(){return e},e}var u={Breadcrumb:c.default.nav.withConfig({displayName:"Breadcrumb",componentId:"m02x82-0"})(["max-width:1200px;margin:15px auto;display:flex;justify-content:flex-end;",";"],(function(e){return e.theme.mobile(o())})),BreadcrumbLists:c.default.ol.withConfig({displayName:"Breadcrumb__BreadcrumbLists",componentId:"m02x82-1"})(["display:flex;font-size:11px;color:#666666;li{padding:0 5px;a{display:inline-block;}&:last-child{font-weight:600;color:#000;}}"])};function l(e){var n=function(e){return(0,t.jsx)("li",{className:"breadcrumb-item",children:e.children})},r=a.Children.toArray(e.children),i=(r=r.map((function(e,r){return(0,t.jsx)(n,{children:e},"breadcrumb_item".concat(r))}))).length-1;return r=r.reduce((function(e,n,r){return r<i?e.push(n,">"):e.push(n),e}),[]),(0,t.jsx)(u.Breadcrumb,{className:e.className,children:(0,t.jsx)(u.BreadcrumbLists,{children:r})})}},46908:function(e,n,r){"use strict";r.d(n,{Z:function(){return d}});var t=r(85893),i=r(32465),a=(r(67294),r(24097)),c=r(23595),o=r(46930),u=r(11163);function l(){var e=(0,i.Z)(["\n      justify-content: center;\n      align-items: center;\n      .redirect-icon{\n        display: block;\n      }\n      ","{\n        font-size: 20px;\n      }\n    "]);return l=function(){return e},e}var s={PageTitle:a.default.article.withConfig({displayName:"PageTitle",componentId:"sc-1j8axyo-0"})(["position:relative;display:flex;justify-content:center;align-items:center;height:60px;.redirect-icon{display:none;position:absolute;font-size:0;left:10px;cursor:pointer;&:hover{svg{color:#000;}}svg{width:24px;height:24px;}}",""],(function(e){return e.theme.mobile(l(),o.Z)}))};function d(e){var n=e.TitleText,r=(0,u.useRouter)();return(0,t.jsxs)(s.PageTitle,{children:[(0,t.jsx)("i",{className:"redirect-icon",onClick:function(){return r.back()},children:(0,t.jsx)(c.Z,{name:"BigArrowLeft"})}),(0,t.jsx)(o.Z,{level:3,size:"24",textAlign:"left",children:n})]})}},68847:function(e,n,r){"use strict";var t=r(85893),i=(r(67294),r(24097)),a=function(e){var n=e.className,r=e.placeholder,i=(e.defaultValue,e.onChange),a=e.name,c=e.value,o=e.readOnly,u=e.pattern,l=e.type,s=e.maxLength,d=e.minLength,f=e.max,p=e.min,h=e.required,m=e.title,x=e.disabled,g=(e.height,e.margin,e.id),v=(e.width,e.maxWidth,e.onBlur),b=e.onFocus,j=e.onKeyPress,y=e.refValue;return(0,t.jsx)("input",{type:l,readOnly:o,placeholder:r,name:a,className:n,value:c,onChange:i,pattern:u,maxLength:s,minLength:d,onBlur:v,onFocus:b,max:f,min:p,required:h,title:m,disabled:x,id:g,onKeyPress:j,autoComplete:"off",ref:y})};a=(0,i.default)(a).withConfig({displayName:"Input",componentId:"cj5bp5-0"})(["height:",";width:",";max-width:",";margin:",";box-sizing:border-box;font-size:12px;padding-left:10px;border:1px solid #dee2e6;appearance:none;&::placeholder{color:#adb5bd;}",""],(function(e){var n=e.height;return n?"".concat(n,"px"):"40px"}),(function(e){var n=e.width;return n?"".concat(n,"px"):"100%"}),(function(e){var n=e.maxWidth;return n?"".concat(n,"px"):"100%"}),(function(e){var n=e.margin;return null!==n&&void 0!==n?n:"0px"}),(function(e){return e.readOnly&&(0,i.css)(["background-color:#f2f3f4;cursor:default;color:#999;"])})),n.Z=a},46930:function(e,n,r){"use strict";var t=r(85893),i=(r(67294),r(24097));n.Z=(0,i.default)((function(e){var n=e.className,r=e.children;switch(e.level){case 1:return(0,t.jsx)("h1",{className:n,children:r});case 2:return(0,t.jsx)("h2",{className:n,children:r});case 3:return(0,t.jsx)("h3",{className:n,children:r});case 4:return(0,t.jsx)("h4",{className:n,children:r});case 5:return(0,t.jsx)("h5",{className:n,children:r});case 6:return(0,t.jsx)("h6",{className:n,children:r});default:return(0,t.jsx)("h1",{className:n,children:r})}})).withConfig({displayName:"Title",componentId:"lkkel4-0"})(["cursor:default;font-size:",";color:",";margin:",";margin-top:",";margin-left:",";margin-right:",";margin-bottom:",";text-align:",";"],(function(e){var n=e.size;return n?"".concat(n,"px"):"30px"}),(function(e){var n=e.color;return null!==n&&void 0!==n?n:"#2e2e2e"}),(function(e){var n,r=e.margin;return null!==(n="".concat(r))&&void 0!==n?n:"0px"}),(function(e){var n,r=e.marginT;return null!==(n="".concat(r,"px"))&&void 0!==n?n:"0px"}),(function(e){var n,r=e.marginL;return null!==(n="".concat(r,"px"))&&void 0!==n?n:"0px"}),(function(e){var n,r=e.marginR;return null!==(n="".concat(r,"px"))&&void 0!==n?n:"0px"}),(function(e){var n,r=e.marginB;return null!==(n="".concat(r,"px"))&&void 0!==n?n:"0px"}),(function(e){var n=e.textAlign;return null!==n&&void 0!==n?n:"center"}))},9490:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(85893),i=r(32465);r(67294);function a(){var e=(0,i.Z)(["\n      padding: 0;\n    "]);return a=function(){return e},e}var c={MainContainer:r(24097).default.main.withConfig({displayName:"MainContainer",componentId:"ok5p0e-0"})(["width:100%;max-width:1200px;margin:0 auto;",""],(function(e){return e.theme.mobile(a())}))};function o(e){return(0,t.jsx)(c.MainContainer,{children:e.children})}},37704:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return C}});var t=r(85893),i=r(67294),a=r(9008),c=r(9490),o=r(96156),u=r(87757),l=r.n(u),s=r(92137),d=r(24097),f=r(46908),p=r(68847),h=r(8761),m=r(38740),x=r(80507),g=r(11163),v=r(90643);function b(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var y={FindId:d.default.section.withConfig({displayName:"FindId",componentId:"sc-8y83eu-0"})(["max-width:350px;margin:0 auto;button{height:40px;font-size:13px;}"]),View:d.default.div.withConfig({displayName:"FindId__View",componentId:"sc-8y83eu-1"})(["border:1px solid #999;background:#f9f9f9;height:300px;display:flex;flex-direction:column;justify-content:center;align-items:center;button{margin-top:30px;width:100px;}"])},w={userName:"",email:""};function N(){var e=(0,i.useState)(w),n=e[0],r=e[1],a=(0,i.useState)(null),c=a[0],u=a[1],d=(0,x.Ds)(),b=d.enqueueSnackbar,N=d.closeSnackbar,Z=(0,g.useRouter)(),O=function(){var e=(0,s.Z)(l().mark((function e(r){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),N(),![n.userName,n.email].includes("")){e.next=4;break}return e.abrupt("return",alert("\uc815\ubcf4\ub97c \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694."));case 4:return e.prev=4,e.next=7,m.SO.findUserId(n);case 7:(t=e.sent).success&&u(t.userId),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),b("\uc874\uc7ac\ud558\uc9c0\uc54a\ub294 \ud68c\uc6d0\uc785\ub2c8\ub2e4.",{variant:"error"});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n){return e.apply(this,arguments)}}(),C=function(e){var t=e.target,i=t.name,a=t.value;r(j(j({},n),{},(0,o.Z)({},i,a)))};return(0,t.jsxs)(y.FindId,{children:[(0,t.jsx)(f.Z,{TitleText:"\uc544\uc774\ub514 \ucc3e\uae30"}),c?(0,t.jsxs)(y.View,{children:[(0,t.jsxs)("p",{children:["\ud68c\uc6d0\ub2d8\uc758 \uc544\uc774\ub514\ub294 ",(0,t.jsx)("strong",{children:c})," \uc785\ub2c8\ub2e4"]}),(0,t.jsx)(h.Z,{login:!0,onClick:function(){return Z.push(v.Z.MAIN.path)},children:"\uba54\uc778\uc73c\ub85c"})]}):(0,t.jsxs)("form",{onSubmit:O,children:[(0,t.jsxs)("fieldset",{children:[(0,t.jsx)(p.Z,{placeholder:"\uc774\ub984",name:"userName",onChange:C,margin:"0 0 10px 0",value:n.userName}),(0,t.jsx)(p.Z,{name:"email",placeholder:"\uc774\uba54\uc77c",onChange:C,margin:"0 0 10px 0",value:n.email})]}),(0,t.jsx)(h.Z,{login:!0,type:"submit",children:"\uc774\uba54\uc77c\ub85c \ucc3e\uae30"})]})]})}var Z=r(27777),O=r(41664);function C(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{children:(0,t.jsx)("title",{children:"\uc544\uc774\ub514\ucc3e\uae30"})}),(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(Z.Z,{children:[v.Z.MAIN,v.Z.LOGIN,v.Z.FIND_ID].map((function(e){var n=e.path,r=e.tag;return(0,t.jsx)(O.default,{href:n,children:r},n)}))}),(0,t.jsx)(N,{})]})]})}},65513:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login/find-id",function(){return r(37704)}])},9008:function(e,n,r){e.exports=r(92775)}},function(e){e.O(0,[9774,2888,179],(function(){return n=65513,e(e.s=n);var n}));var n=e.O();_N_E=n}]);