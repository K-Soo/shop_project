(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{38358:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(85893),r=n(32465),a=(n(67294),n(24097)),s=n(23595);function l(){var e=(0,r.Z)(["\n    padding: 30px 0;\n    }"]);return l=function(){return e},e}var c={EmptyItem:a.default.div.withConfig({displayName:"EmptyItem",componentId:"fwzjae-0"})(["padding:60px 0;"," .wrapper{margin:0 auto;text-align:center;color:#999;i{display:block;font-size:0;svg{color:#000;}}p{padding-top:10px;font-size:13px;}}"],(function(e){return e.theme.mobile(l())}))};function o(e){var t=e.text;return(0,i.jsx)(c.EmptyItem,{children:(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)("i",{children:(0,i.jsx)(s.Z,{name:"warning"})}),(0,i.jsx)("p",{children:t})]})})}},42642:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var i=n(85893),r=n(87329),a=n(87757),s=n.n(a),l=n(92137),c=n(67294),o=n(24097),u=n(9008),d=n(85931),p=n(39571),h=n(68847),f=n(8761),x=n(79970),m=n(38358),g=n(86155),y={List:o.default.div.withConfig({displayName:"List",componentId:"sc-1qsrihw-0"})([""," border:1px solid #eee;padding:15px;background-color:#F0F3F7;font-size:14px;overflow-y:auto;.header{display:flex;align-items:center;background-color:#f8f8f8;height:35px;color:#333;padding:10px;margin-bottom:15px;p:nth-child(1){flex-basis:100px;}p:nth-child(2){flex-basis:120px;}p:nth-child(3){flex-basis:200px;}p:nth-child(4){flex:1;}}.item{background-color:#fff;border:1px solid #eee;border-radius:5px;padding:10px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;&__status{flex-basis:100px;display:inline-block;span{display:inline-block;height:100%;color:#fff;font-size:13px;padding:3px 5px;border-radius:5px;}}&__category{flex-basis:120px;display:inline-block;}&__name{flex-basis:200px;display:inline-block;min-width:130px;}&__edit-qty{flex:1;input[type=number]::-webkit-inner-spin-button{opacity:1;position:absolute;top:0;right:0;height:110%;cursor:pointer;}button{font-size:14px;}}&__check-box{font-size:0;display:flex;align-items:center;label{font-size:14px;}}}"],(function(e){return!e.isWhite&&(0,o.css)(["*{color:#000 !important;transition:color 0.3s ease;}"])}))};function b(e){var t=e.className,n=e.items,r=e.handleCount,a=e.handleQty,s=e.handleChecked,l=e.checkedItem,c=(0,g.O)(),o=c.state;c.action;return(0,i.jsx)(y.List,{className:t,isWhite:o.isWhite,children:n.length>0?(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{className:"header",children:[(0,i.jsx)("p",{children:"\uc0c1\ud0dc"}),(0,i.jsx)("p",{children:"\uce74\ud14c\uace0\ub9ac"}),(0,i.jsx)("p",{children:"\uc0c1\ud488\uc774\ub984"}),(0,i.jsx)("p",{children:"\ud604\uc7ac\uc218\ub7c9"}),(0,i.jsx)("p",{children:"\uc120\ud0dd"})]}),n.map((function(e){return(0,i.jsxs)("li",{className:"item",children:[(0,i.jsx)("p",{className:"item__status",children:e.qty>0?(0,i.jsx)("span",{style:{backgroundColor:"green"},children:"\ud310\ub9e4\uc911"}):0===e.qty?(0,i.jsx)("span",{style:{backgroundColor:"crimson"},children:"\ud488\uc808"}):(0,i.jsx)("span",{style:{backgroundColor:"#999"},children:"\ub9c8\uac10"})}),(0,i.jsx)("p",{className:"item__category",children:e.category}),(0,i.jsx)("p",{className:"item__name",children:e.name}),(0,i.jsxs)("div",{className:"item__edit-qty",children:[(0,i.jsx)(h.Z,{type:"number",height:"30",width:"70",margin:"0 15px 0 0",value:e.qty,min:0,onChange:r,name:e._id}),(0,i.jsx)(f.Z,{white:!0,height:"30px",width:"50px",name:e._id,onClick:a,children:"\ubcc0\uacbd"})]}),(0,i.jsx)("div",{className:"item__check-box",children:(0,i.jsx)(x.Z,{id:"select-check",name:e._id,checked:l.includes(e._id),value:e._id,onChange:s})})]},e._id)}))]}):(0,i.jsx)(m.Z,{text:"\uc0c1\ud488\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"})})}var v=n(58116),j=n(29770),_={Filter:o.default.div.withConfig({displayName:"Filter",componentId:"ccj9ia-0"})([""," display:flex;justify-content:space-between;align-items:center;.all-check-box{font-size:14px;display:flex;align-items:center;margin-right:25px;}"],(function(e){return!e.isWhite&&(0,o.css)(["*{color:#000 !important;transition:color 0.3s ease;}"])}))};function k(e){var t,n=e.className,r=e.handleAllChecked,a=e.AllCheck,s=(0,g.O)(),l=s.state,c=s.action,o=l.filter.product_type;return(0,i.jsxs)(_.Filter,{className:n,isWhite:l.isWhite,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(v.Z,{name:"filter.product_type",width:"140",height:"30",onChange:c.setFormData,children:Object.entries(j.c).map((function(e){return(0,i.jsx)("option",{value:e[0],children:j.B[e[0]]},e[0])}))}),(0,i.jsxs)(v.Z,{height:"30",width:"200",name:"filter.category",onChange:c.setFormData,children:[(0,i.jsx)("option",{value:"all",children:"\uc804\uccb4"}),null===(t=j.c[o])||void 0===t?void 0:t.map((function(e){return(0,i.jsx)("option",{value:e.label,children:e.label},e.label)}))]})]}),(0,i.jsxs)("div",{className:"all-check-box",children:[(0,i.jsx)("label",{htmlFor:"product-all",style:{marginRight:"5px"},children:"\uc804\uccb4\uc120\ud0dd"}),(0,i.jsx)(x.Z,{id:"product-all",name:"checkAll",onChange:r,checked:a})]})]})}var C={CtrBox:o.default.div.withConfig({displayName:"CtrBox",componentId:"sc-8rq1n0-0"})(["margin-top:15px;display:flex;justify-content:flex-end;button{font-size:14px;border-radius:5px;width:100px;height:35px;padding:0;}"])};function w(e){var t=e.handleCloseProducts;e.handleColor;return(0,i.jsx)(C.CtrBox,{children:(0,i.jsx)(f.Z,{black:!0,onClick:t,children:"\ud310\ub9e4\ub9c8\uac10"})})}var N=n(38740),Z=n(87834),O=n(88767);n(20693);var q=n(46930),E=o.default.div.withConfig({displayName:"list__Block",componentId:"aagy34-0"})(["height:100%;display:flex;flex-direction:column;.filter{margin-bottom:15px;}.list{flex:1;}"]);function F(e){var t=(0,g.O)(),n=t.state,a=(t.action,(0,c.useState)(null)),o=a[0],h=a[1],f=(0,c.useState)([]),x=f[0],m=f[1],y=(0,c.useState)(!1),v=y[0],j=y[1],_=function(){var e=(0,O.useQueryClient)(),t=(0,g.O)().state;return(0,O.useMutation)(function(){var e=(0,l.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.qb.updateProductQty("123",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){alert("\ubcc0\uacbd\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4"),e.invalidateQueries([Z.a.PRODUCT,t.filter.product_type])}}).mutate}(),C=function(){var e=(0,O.useQueryClient)(),t=(0,g.O)().state;return(0,O.useMutation)(function(){var e=(0,l.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.qb.updateProductClose(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){alert("\uc120\ud0dd\uc0c1\ud488\uc774 \ub9c8\uac10\ub418\uc5c8\uc2b5\ub2c8\ub2e4"),e.invalidateQueries([Z.a.PRODUCT_CLOSE,t.filter.product_type])}}).mutate}(),F=(0,c.useCallback)((function(e){return e.filter((function(e){return e.category===n.filter.category}))}),[n.filter.category]),P=(0,O.useQuery)([Z.a.PRODUCT,n.filter.product_type],(0,l.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.dX.getProductsA(n.filter.product_type);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),{retry:0,staleTime:2e3,select:"all"!==n.filter.category?F:void 0}),z=P.data,I=void 0===z?[]:z,Q=P.isLoading,S=P.isSuccess;P.isError,P.isFetching;(0,c.useEffect)((function(){m([]),j(!1)}),[n.filter.product_type,n.filter.category]);var A=(0,c.useCallback)((function(e){var t=e.target,n=t.value,i=t.name,r=I.filter((function(e){return e._id===i}));r[0].qty=+n,h(r)}),[I]),T=(0,c.useCallback)((function(e){var t=e.target.name;return o?o[0]._id!==t?(h(null),alert("\ud604\uc7ac\uc218\ub7c9\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4")):void _(o):(h(null),alert("\uba3c\uc800 \uc218\ub7c9\uc744 \uc218\uc815\ud574\uc8fc\uc138\uc694"))}),[o,_]),W=(0,c.useCallback)((function(e){var t=e.target,n=t.checked,i=t.name;if(n)m((function(e){return[].concat((0,r.Z)(e),[i])}));else{var a=x.filter((function(e){return e!==i}));m(a)}}),[x]),B=(0,c.useCallback)((function(e){if(e.target.checked){var t=[];I.map((function(e){return t.push(e._id)})),m(t),j(!0)}else m([]),j(!1)}),[I]),D=function(){var e=(0,l.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.length){e.next=2;break}return e.abrupt("return",alert("\uc0c1\ud488\uc744 \uba3c\uc800 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"));case 2:return e.prev=2,e.next=5,N.qb.updateProductColor(x);case 5:e.sent.success&&alert("\uc644\ub8cc"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.default,{children:(0,i.jsx)("title",{children:"\uad00\ub9ac\uc790 | \uc0c1\ud488\ub9ac\uc2a4\ud2b8"})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(p.Z,{children:(0,i.jsxs)(E,{children:[(0,i.jsx)(q.Z,{level:1,margin:"0 0 30px 0",children:"\uc0c1\ud488 \ub9ac\uc2a4\ud2b8 / \uc218\uc815"}),(0,i.jsx)(k,{className:"filter",handleAllChecked:B,AllCheck:v}),S&&(0,i.jsx)(b,{className:"list",items:I,handleCount:A,handleQty:T,handleChecked:W,checkedItem:x}),Q&&(0,i.jsx)("div",{children:"loading"}),(0,i.jsx)(w,{handleCloseProducts:function(){if(!x.length)return alert("\uc0c1\ud488\uc744 \uba3c\uc800 \uc120\ud0dd\ud574\uc8fc\uc138\uc694");C(x)},handleColor:D})]})})})]})}},94739:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/products/list",function(){return n(42642)}])},9008:function(e,t,n){e.exports=n(92775)}},function(e){e.O(0,[3093,9774,2888,179],(function(){return t=94739,e(e.s=t);var t}));var t=e.O();_N_E=t}]);