(this["webpackJsonpe-admin-react"]=this["webpackJsonpe-admin-react"]||[]).push([[24,23,25],{465:function(e,t,n){"use strict";n.r(t),n.d(t,"getRoles",(function(){return o})),n.d(t,"getTotalRoles",(function(){return u})),n.d(t,"saveRole",(function(){return l})),n.d(t,"deleteRole",(function(){return s}));var a=n(205),r=n.n(a),c=n(204),o=function(e){return Object(c.b)({method:"get",url:"/role",params:e})},u=function(){return Object(c.b)({method:"get",url:"/role/total"})},l=function(e,t){return Object(c.b)({method:"post",url:"/role",data:e,cancelToken:new r.a.CancelToken(t)})},s=function(e){return Object(c.b)({method:"delete",url:"/role/".concat(e.id)})}},467:function(e,t,n){"use strict";n.r(t);n(122),n(244),n(980);var a=n(981),r=n(210),c=n(171),o=n(0),u=n.n(o);t.default=u.a.memo((function(e){var t=e.resourceTree,n=e.value,l=e.onChange,s=Object(o.useState)(t.map((function(e){return e.key}))),i=Object(c.a)(s,2),d=i[0],f=i[1],b=Object(o.useState)(!0),m=Object(c.a)(b,2),p=m[0],h=m[1];return u.a.createElement(a.a,{checkable:!0,selectable:!1,onExpand:function(e){f(e),h(!1)},expandedKeys:d,autoExpandParent:p,onCheck:function(e,t){var n=t.halfCheckedKeys,a=[].concat(Object(r.a)(e),Object(r.a)(n));l({totalKeys:a,totalSubKeys:e})},checkedKeys:n.totalSubKeys,treeData:t})}))},474:function(e,t,n){"use strict";n.r(t);n(316),n(317),n(247),n(244),n(170),n(304),n(928);var a=n(931),r=(n(461),n(246)),c=n(172),o=n.n(c),u=n(124),l=(n(202),n(245)),s=(n(303),n(95)),i=n(171),d=(n(462),n(125)),f=n(0),b=n.n(f),m=n(1068),p=n(917),h=n(465),O=n(467),j=n(85),v=n(307),g=d.a.Item;t.default=b.a.memo((function(e){var t=e.resourceList,n=e.visible,c=e.close,y=e.refresh,k=e.query,C=e.detail,E=d.a.useForm(),K=Object(i.a)(E,1)[0],w=Object(f.useMemo)((function(){return function e(t){return t.map((function(t){return Object(v.a)(t.children)&&t.children.length?{key:Number(t.id),title:t.name,children:e(t.children)}:{key:Number(t.id),title:t.name}}))}(Object(j.g)(t,null,"code","parentCode"))}),[t]);Object(f.useEffect)((function(){if(n){var e=C.id,a=C.name,r=C.description,c=C.resources,o=e?void 0===c?[]:c:t,u=o.map((function(e){return e.id})),l=o.filter((function(e){return"2"===e.type})).map((function(e){return e.id}));K.setFieldsValue({name:a||"",description:r||"",resources:{totalKeys:u,totalSubKeys:l}})}}),[n,K,C,t]);var x=null,S=Object(m.a)((function(e){return Object(h.saveRole)(e,(function(e){x=e}))}),{manual:!0,onSuccess:function(){s.b.destroy(),s.b.success(C.id?"\u7f16\u8f91\u6210\u529f":"\u6dfb\u52a0\u6210\u529f"),K.resetFields(),c(),C.id?y():k()}}),F=S.loading,R=S.run,T=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.validateFields();case 3:t=K.getFieldsValue(),n=Object(u.a)(Object(u.a)({},t),{},{resources:t.resources.totalKeys}),(a=C.id)&&(n.id=a),console.log(n),R(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return b.a.createElement(a.a,{visible:n,title:C.id?"\u7f16\u8f91":"\u6dfb\u52a0",width:600,onCancel:function(){x&&x(),K.resetFields(),c()},maskClosable:!1,onOk:T,confirmLoading:F},b.a.createElement(d.a,{form:K,initialValues:{name:"",description:"",resources:{totalKeys:[],totalSubKeys:[]}}},b.a.createElement(g,Object.assign({},p.a,{name:"name",label:"\u89d2\u8272\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d!"}]}),b.a.createElement(r.a,{placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d",allowClear:!0,autoComplete:"off"})),b.a.createElement(g,Object.assign({},p.a,{name:"description",label:"\u89d2\u8272\u63cf\u8ff0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u89d2\u8272\u63cf\u8ff0!"}]}),b.a.createElement(r.a,{placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u63cf\u8ff0",allowClear:!0,autoComplete:"off"})),b.a.createElement(g,Object.assign({},p.a,{name:"resources",label:"\u53ef\u7528\u6743\u9650",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6743\u9650!"}]}),b.a.createElement(O.default,{resourceTree:w}))))}))},917:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a={xxl:6,lg:8},r={labelCol:{span:6},wrapperCol:{span:14}}}}]);