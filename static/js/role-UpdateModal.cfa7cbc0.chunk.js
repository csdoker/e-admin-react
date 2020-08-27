(this["webpackJsonpe-admin-react"]=this["webpackJsonpe-admin-react"]||[]).push([[24,23,25],{453:function(e,t,n){"use strict";n.r(t),n.d(t,"getRoles",(function(){return o})),n.d(t,"getTotalRoles",(function(){return u})),n.d(t,"saveRole",(function(){return l})),n.d(t,"deleteRole",(function(){return s}));var a=n(192),r=n.n(a),c=n(189),o=function(e){return Object(c.b)({method:"get",url:"/role",params:e})},u=function(){return Object(c.b)({method:"get",url:"/role/total"})},l=function(e,t){return Object(c.b)({method:"post",url:"/role",data:e,cancelToken:new r.a.CancelToken(t)})},s=function(e){return Object(c.b)({method:"delete",url:"/role/".concat(e.id)})}},455:function(e,t,n){"use strict";n.r(t);n(115),n(233),n(953);var a=n(954),r=n(304),c=n(157),o=n(0),u=n.n(o);t.default=u.a.memo((function(e){var t=e.resourceTree,n=e.value,l=e.onChange,s=Object(o.useState)(t.map((function(e){return e.key}))),i=Object(c.a)(s,2),d=i[0],f=i[1],m=Object(o.useState)(!0),b=Object(c.a)(m,2),p=b[0],h=b[1];return u.a.createElement(a.a,{checkable:!0,selectable:!1,onExpand:function(e){f(e),h(!1)},expandedKeys:d,autoExpandParent:p,onCheck:function(e,t){var n=t.halfCheckedKeys,a=[].concat(Object(r.a)(e),Object(r.a)(n));l({totalKeys:a,totalSubKeys:e})},checkedKeys:n.totalSubKeys,treeData:t})}))},463:function(e,t,n){"use strict";n.r(t);n(305),n(306),n(236),n(233),n(158),n(292),n(917);var a=n(919),r=(n(447),n(234)),c=n(160),o=n.n(c),u=n(118),l=(n(190),n(235)),s=(n(448),n(119)),i=n(157),d=(n(449),n(120)),f=n(0),m=n.n(f),b=n(1006),p=n(912),h=n(453),O=n(455),j=n(95),v=n(300),g=d.a.Item;t.default=m.a.memo((function(e){var t=e.resourceList,n=e.visible,c=e.close,y=e.refresh,k=e.query,C=e.detail,E=d.a.useForm(),K=Object(i.a)(E,1)[0],w=Object(f.useMemo)((function(){return function e(t){return t.map((function(t){return Object(v.a)(t.children)&&t.children.length?{key:Number(t.id),title:t.name,children:e(t.children)}:{key:Number(t.id),title:t.name}}))}(Object(j.f)(t,null,"code","parentCode"))}),[t]);Object(f.useEffect)((function(){if(n){var e=C.id,a=C.name,r=C.description,c=C.resources,o=e?void 0===c?[]:c:t,u=o.map((function(e){return e.id})),l=o.filter((function(e){return"2"===e.type})).map((function(e){return e.id}));K.setFieldsValue({name:a||"",description:r||"",resources:{totalKeys:u,totalSubKeys:l}})}}),[n,K,C,t]);var x=null,S=Object(b.a)((function(e){return Object(h.saveRole)(e,(function(e){x=e}))}),{manual:!0,onSuccess:function(){s.a.destroy(),s.a.success(C.id?"\u7f16\u8f91\u6210\u529f":"\u6dfb\u52a0\u6210\u529f"),K.resetFields(),c(),C.id?y():k()}}),F=S.loading,R=S.run,T=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.validateFields();case 3:t=K.getFieldsValue(),n=Object(u.a)(Object(u.a)({},t),{},{resources:t.resources.totalKeys}),(a=C.id)&&(n.id=a),console.log(n),R(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(a.a,{visible:n,title:C.id?"\u7f16\u8f91":"\u6dfb\u52a0",width:600,onCancel:function(){x&&x(),K.resetFields(),c()},maskClosable:!1,onOk:T,confirmLoading:F},m.a.createElement(d.a,{form:K,initialValues:{name:"",description:"",resources:{totalKeys:[],totalSubKeys:[]}}},m.a.createElement(g,Object.assign({},p.a,{name:"name",label:"\u89d2\u8272\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d!"}]}),m.a.createElement(r.a,{placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d",allowClear:!0,autoComplete:"off"})),m.a.createElement(g,Object.assign({},p.a,{name:"description",label:"\u89d2\u8272\u63cf\u8ff0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u89d2\u8272\u63cf\u8ff0!"}]}),m.a.createElement(r.a,{placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u63cf\u8ff0",allowClear:!0,autoComplete:"off"})),m.a.createElement(g,Object.assign({},p.a,{name:"resources",label:"\u53ef\u7528\u6743\u9650",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6743\u9650!"}]}),m.a.createElement(O.default,{resourceTree:w}))))}))},912:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a={xxl:6,lg:8},r={labelCol:{span:6},wrapperCol:{span:14}}}}]);