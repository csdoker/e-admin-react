(this["webpackJsonpe-admin-react"]=this["webpackJsonpe-admin-react"]||[]).push([[31],{1069:function(e,t,n){"use strict";n(60),n(1070),n(306),n(461)},1070:function(e,t,n){},1076:function(e,t,n){"use strict";var r=n(1077),i={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,a,l,s,c,u=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),l=document.createRange(),s=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=i[t.format]||i.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),s.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),c&&document.body.removeChild(c),a()}return u}},1077:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},1078:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(r=n(1079))&&r.__esModule?r:{default:r};t.default=i,e.exports=i},1079:function(e,t,n){"use strict";var r=n(44),i=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=r(n(1080)),l=r(n(54)),s=function(e,t){return o.createElement(l.default,Object.assign({},e,{ref:t,icon:a.default}))};s.displayName="EditOutlined";var c=o.forwardRef(s);t.default=c},1080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"}},1081:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(r=n(1082))&&r.__esModule?r:{default:r};t.default=i,e.exports=i},1082:function(e,t,n){"use strict";var r=n(44),i=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=r(n(1083)),l=r(n(54)),s=function(e,t){return o.createElement(l.default,Object.assign({},e,{ref:t,icon:a.default}))};s.displayName="CopyOutlined";var c=o.forwardRef(s);t.default=c},1083:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"}},1084:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(r=n(1085))&&r.__esModule?r:{default:r};t.default=i,e.exports=i},1085:function(e,t,n){"use strict";var r=n(44),i=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=r(n(1086)),l=r(n(54)),s=function(e,t){return o.createElement(l.default,Object.assign({},e,{ref:t,icon:a.default}))};s.displayName="EnterOutlined";var c=o.forwardRef(s);t.default=c},1086:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"}},1192:function(e,t,n){"use strict";var r=n(3),i=n.n(r),o=n(4),a=n.n(o),l=n(0),s=n(6),c=n.n(s),u=n(74),d=n(25),p=n(325),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},y=function(e,t){var n=e.prefixCls,r=e.component,o=void 0===r?"article":r,s=e.className,y=e["aria-label"],v=e.setContentRef,h=e.children,m=f(e,["prefixCls","component","className","aria-label","setContentRef","children"]),b=t;return v&&(Object(d.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),b=Object(p.a)(t,v)),l.createElement(u.a,null,(function(e){var t=e.getPrefixCls,r=e.direction,u=o,d=t("typography",n),p=c()(d,a()({},"".concat(d,"-rtl"),"rtl"===r),s);return l.createElement(u,i()({className:p,"aria-label":y,ref:b},m),h)}))},v=l.forwardRef(y);v.displayName="Typography";var h,m=v,b=n(52),g=n.n(b),x=n(65),E=n.n(x),C=n(26),O=n.n(C),w=n(29),j=n.n(w),k=n(30),S=n.n(k),N=n(31),P=n.n(N),T=n(94),R=n(152),M=n(1076),_=n.n(M),D=n(38),z=n(1078),I=n.n(z),A=n(945),H=n.n(A),L=n(1081),K=n.n(L),U=n(207),F=n(21),B=n(143),V=n(67),W=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},J={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},X=function(e){S()(n,e);var t=P()(n);function n(){var e;return O()(this,n),(e=t.apply(this,arguments)).onKeyDown=function(e){e.keyCode===V.a.ENTER&&e.preventDefault()},e.onKeyUp=function(t){var n=t.keyCode,r=e.props.onClick;n===V.a.ENTER&&r&&r()},e.setRef=function(t){e.div=t},e}return j()(n,[{key:"componentDidMount",value:function(){this.props.autoFocus&&this.focus()}},{key:"focus",value:function(){this.div&&this.div.focus()}},{key:"blur",value:function(){this.div&&this.div.blur()}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.noStyle,r=e.disabled,o=W(e,["style","noStyle","disabled"]),a={};return n||(a=i()({},J)),r&&(a.pointerEvents="none"),a=i()(i()({},a),t),l.createElement("div",i()({role:"button",tabIndex:0,ref:this.setRef},o,{onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,style:a}))}}]),n}(l.Component),q=n(294),G=function(e){if("undefined"!==typeof window&&window.document&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1},Q=(G(["flex","webkitFlex","Flex","msFlex"]),n(128)),Y=n(1084),Z=n.n(Y),$=n(437),ee=function(e){S()(n,e);var t=P()(n);function n(){var e;return O()(this,n),(e=t.apply(this,arguments)).inComposition=!1,e.state={current:""},e.onChange=function(t){var n=t.target.value;e.setState({current:n.replace(/[\n\r]/g,"")})},e.onCompositionStart=function(){e.inComposition=!0},e.onCompositionEnd=function(){e.inComposition=!1},e.onKeyDown=function(t){var n=t.keyCode;e.inComposition||(e.lastKeyCode=n)},e.onKeyUp=function(t){var n=t.keyCode,r=t.ctrlKey,i=t.altKey,o=t.metaKey,a=t.shiftKey,l=e.props.onCancel;e.lastKeyCode!==n||e.inComposition||r||i||o||a||(n===V.a.ENTER?e.confirmChange():n===V.a.ESC&&l())},e.onBlur=function(){e.confirmChange()},e.confirmChange=function(){var t=e.state.current;(0,e.props.onSave)(t.trim())},e.setTextarea=function(t){e.textarea=t},e}return j()(n,[{key:"componentDidMount",value:function(){if(this.textarea&&this.textarea.resizableTextArea){var e=this.textarea.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}},{key:"render",value:function(){var e=this.state.current,t=this.props,n=t.prefixCls,r=t["aria-label"],i=t.className,o=t.style,s=t.direction,u=t.maxLength,d=t.autoSize,p=c()(n,"".concat(n,"-edit-content"),a()({},"".concat(n,"-rtl"),"rtl"===s),i);return l.createElement("div",{className:p,style:o},l.createElement($.a,{ref:this.setTextarea,maxLength:u,value:e,onChange:this.onChange,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,onCompositionStart:this.onCompositionStart,onCompositionEnd:this.onCompositionEnd,onBlur:this.onBlur,"aria-label":r,autoSize:void 0===d||d}),l.createElement(Z.a,{className:"".concat(n,"-edit-content-confirm")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevValue,r=e.value,i={prevValue:r};return n!==r&&(i.current=r),i}}]),n}(l.Component),te=n(18),ne={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function re(e){if(!e)return 0;var t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}var ie=function(e,t,n,r,i){h||((h=document.createElement("div")).setAttribute("aria-hidden","true"),document.body.appendChild(h));var o,a=t.rows,s=t.suffix,c=void 0===s?"":s,u=window.getComputedStyle(e),d=(o=u,Array.prototype.slice.apply(o).map((function(e){return"".concat(e,": ").concat(o.getPropertyValue(e),";")})).join("")),p=re(u.lineHeight),f=Math.round(p*(a+1)+re(u.paddingTop)+re(u.paddingBottom));h.setAttribute("style",d),h.style.position="fixed",h.style.left="0",h.style.height="auto",h.style.minHeight="auto",h.style.maxHeight="auto",h.style.top="-999999px",h.style.zIndex="-1000",h.style.textOverflow="clip",h.style.whiteSpace="normal",h.style.webkitLineClamp="none";var y=function(e){var t=[];return e.forEach((function(e){var n=t[t.length-1];"string"===typeof e&&"string"===typeof n?t[t.length-1]+=e:t.push(e)})),t}(Object(T.a)(n));function v(){return h.offsetHeight<f}if(Object(te.render)(l.createElement("div",{style:ne},l.createElement("span",{style:ne},y,c),l.createElement("span",{style:ne},r)),h),v())return Object(te.unmountComponentAtNode)(h),{content:n,text:h.innerHTML,ellipsis:!1};var m=Array.prototype.slice.apply(h.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){return 8!==e.nodeType})),b=Array.prototype.slice.apply(h.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(te.unmountComponentAtNode)(h);var g=[];h.innerHTML="";var x=document.createElement("span");h.appendChild(x);var E=document.createTextNode(i+c);function C(e){x.insertBefore(e,E)}function O(e,t){var n=e.nodeType;if(1===n)return C(e),v()?{finished:!1,reactNode:y[t]}:(x.removeChild(e),{finished:!0,reactNode:null});if(3===n){var r=e.textContent||"",i=document.createTextNode(r);return C(i),function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=Math.floor((r+i)/2),l=n.slice(0,a);if(t.textContent=l,r>=i-1)for(var s=i;s>=r;s-=1){var c=n.slice(0,s);if(t.textContent=c,v()||!c)return s===n.length?{finished:!1,reactNode:n}:{finished:!0,reactNode:c}}return v()?e(t,n,a,i,a):e(t,n,r,a,o)}(i,r)}return{finished:!1,reactNode:null}}return x.appendChild(E),b.forEach((function(e){h.appendChild(e)})),m.some((function(e,t){var n=O(e,t),r=n.finished,i=n.reactNode;return i&&g.push(i),r})),{content:g,text:h.innerHTML,ellipsis:!0}},oe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},ae=G("webkitLineClamp"),le=G("textOverflow");var se=function(e){S()(n,e);var t=P()(n);function n(){var e;return O()(this,n),(e=t.apply(this,arguments)).contentRef=l.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls;return(0,e.context.getPrefixCls)("typography",t)},e.onExpandClick=function(t){var n=e.getEllipsis().onExpand;e.setState({expanded:!0}),n&&n(t)},e.onEditClick=function(){e.triggerEdit(!0)},e.onEditChange=function(t){var n=e.getEditable().onChange;n&&n(t),e.triggerEdit(!1)},e.onEditCancel=function(){e.triggerEdit(!1)},e.onCopyClick=function(){var t=e.props,n=t.children,r=t.copyable,o=i()({},"object"===g()(r)?r:null);void 0===o.text&&(o.text=String(n)),_()(o.text||""),e.setState({copied:!0},(function(){o.onCopy&&o.onCopy(),e.copyId=window.setTimeout((function(){e.setState({copied:!1})}),3e3)}))},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var n=e.getEditable().onStart;t&&n&&n(),e.setState({edit:t},(function(){!t&&e.editIcon&&e.editIcon.focus()}))},e.resizeOnNextFrame=function(){q.a.cancel(e.rafId),e.rafId=Object(q.a)((function(){e.syncEllipsis()}))},e}return j()(n,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(e){var t=this.props.children,n=this.getEllipsis(),r=this.getEllipsis(e);t===e.children&&n.rows===r.rows||this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),q.a.cancel(this.rafId)}},{key:"getEditable",value:function(e){var t=this.state.edit,n=(e||this.props).editable;return n?i()({editing:t},"object"===g()(n)?n:null):{editing:t}}},{key:"getEllipsis",value:function(e){var t=(e||this.props).ellipsis;return t?i()({rows:1,expandable:!1},"object"===g()(t)?t:null):{}}},{key:"canUseCSSEllipsis",value:function(){var e=this.state.clientRendered,t=this.props,n=t.editable,r=t.copyable,i=this.getEllipsis(),o=i.rows,a=i.expandable,l=i.suffix,s=i.onEllipsis;return!l&&(!(n||r||a||!e||s)&&(1===o?le:ae))}},{key:"syncEllipsis",value:function(){var e=this.state,t=e.ellipsisText,n=e.isEllipsis,r=e.expanded,i=this.getEllipsis(),o=i.rows,a=i.suffix,l=i.onEllipsis,s=this.props.children;if(o&&!(o<0)&&this.contentRef.current&&!r&&!this.canUseCSSEllipsis()){Object(d.a)(Object(T.a)(s).every((function(e){return"string"===typeof e})),"Typography","`ellipsis` should use string as children only.");var c=ie(Object(R.a)(this.contentRef.current),{rows:o,suffix:a},s,this.renderOperations(!0),"..."),u=c.content,p=c.text,f=c.ellipsis;t===p&&n===f||(this.setState({ellipsisText:p,ellipsisContent:u,isEllipsis:f}),n!==f&&l&&l(f))}}},{key:"renderExpand",value:function(e){var t,n=this.getEllipsis(),r=n.expandable,i=n.symbol,o=this.state,a=o.expanded,s=o.isEllipsis;return r&&(e||!a&&s)?(t=i||this.expandStr,l.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},t)):null}},{key:"renderEdit",value:function(){var e=this.props.editable;if(e){var t=e.icon,n=e.tooltip,r=Object(T.a)(n)[0]||this.editStr,i="string"===typeof r?r:"";return l.createElement(Q.a,{key:"edit",title:!1===n?"":r},l.createElement(X,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":i},t||l.createElement(I.a,{role:"button"})))}}},{key:"renderCopy",value:function(){var e=this.state.copied,t=this.props.copyable;if(t){var n=this.getPrefixCls(),r=t.tooltips,i=Object(T.a)(r);0===i.length&&(i=[this.copyStr,this.copiedStr]);var o=e?i[1]:i[0],a="string"===typeof o?o:"",s=Object(T.a)(t.icon);return l.createElement(Q.a,{key:"copy",title:!1===r?"":o},l.createElement(X,{className:c()("".concat(n,"-copy"),e&&"".concat(n,"-copy-success")),onClick:this.onCopyClick,"aria-label":a},e?s[1]||l.createElement(H.a,null):s[0]||l.createElement(K.a,null)))}}},{key:"renderEditInput",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,i=this.context.direction,o=this.getEditable(),a=o.maxLength,s=o.autoSize;return l.createElement(ee,{value:"string"===typeof t?t:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:this.getPrefixCls(),className:n,style:r,direction:i,maxLength:a,autoSize:s})}},{key:"renderOperations",value:function(e){return[this.renderExpand(e),this.renderEdit(),this.renderCopy()].filter((function(e){return e}))}},{key:"renderContent",value:function(){var e,t=this,n=this.state,r=n.ellipsisContent,o=n.isEllipsis,s=n.expanded,u=this.props,d=u.component,p=u.children,f=u.className,y=u.type,v=u.disabled,h=u.style,b=oe(u,["component","children","className","type","disabled","style"]),g=this.context.direction,x=this.getEllipsis(),C=x.rows,O=x.suffix,w=this.getPrefixCls(),j=Object(D.a)(b,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(E()(F.a))),k=this.canUseCSSEllipsis(),S=1===C&&k,N=C&&C>1&&k,P=p;if(C&&o&&!s&&!k){var T=b.title;e=T,T||"string"!==typeof p&&"number"!==typeof p||(e=String(p)),P=l.createElement("span",{title:e,"aria-hidden":"true"},r,"...",O)}else P=l.createElement(l.Fragment,null,p,O);return P=function(e,t){var n=e.mark,r=e.code,i=e.underline,o=e.delete,a=e.strong,s=e.keyboard,c=t;function u(e,t){e&&(c=l.createElement(t,{},c))}return u(a,"strong"),u(i,"u"),u(o,"del"),u(r,"code"),u(n,"mark"),u(s,"kbd"),c}(this.props,P),l.createElement(B.a,{componentName:"Text"},(function(n){var r,o=n.edit,s=n.copy,u=n.copied,p=n.expand;return t.editStr=o,t.copyStr=s,t.copiedStr=u,t.expandStr=p,l.createElement(U.a,{onResize:t.resizeOnNextFrame,disabled:!C},l.createElement(m,i()({className:c()((r={},a()(r,"".concat(w,"-").concat(y),y),a()(r,"".concat(w,"-disabled"),v),a()(r,"".concat(w,"-ellipsis"),C),a()(r,"".concat(w,"-ellipsis-single-line"),S),a()(r,"".concat(w,"-ellipsis-multiple-line"),N),r),f),style:i()(i()({},h),{WebkitLineClamp:N?C:null}),component:d,ref:t.contentRef,"aria-label":e,direction:g},j),P,t.renderOperations()))}))}},{key:"render",value:function(){return this.getEditable().editing?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.children,n=e.editable;return Object(d.a)(!n||"string"===typeof t,"Typography","When `editable` is enabled, the `children` should use string."),{}}}]),n}(l.Component);se.contextType=u.b,se.defaultProps={children:""};var ce=se,ue=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},de=function(e){var t=e.ellipsis,n=ue(e,["ellipsis"]);return Object(d.a)("object"!==g()(t),"Typography.Text","`ellipsis` only supports boolean value."),l.createElement(ce,i()({},n,{ellipsis:!!t,component:"span"}))},pe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},fe=function(e,t){var n=e.ellipsis,r=e.rel,o=pe(e,["ellipsis","rel"]);Object(d.a)("object"!==g()(n),"Typography.Link","`ellipsis` only supports boolean value.");var a=l.useRef(null);l.useImperativeHandle(t,(function(){var e;return null===(e=a.current)||void 0===e?void 0:e.contentRef.current}));var s=i()(i()({},o),{rel:void 0===r&&"_blank"===o.target?"noopener noreferrer":r});return delete s.navigate,l.createElement(ce,i()({},s,{ref:a,ellipsis:!!n,component:"a"}))},ye=l.forwardRef(fe),ve=n(55),he=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},me=Object(ve.b)(1,2,3,4,5),be=function(e){var t,n=e.level,r=void 0===n?1:n,o=he(e,["level"]);return-1!==me.indexOf(r)?t="h".concat(r):(Object(d.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),t="h1"),l.createElement(ce,i()({},o,{component:t}))},ge=function(e){return l.createElement(ce,i()({},e,{component:"div"}))},xe=m;xe.Text=de,xe.Link=ye,xe.Title=be,xe.Paragraph=ge;t.a=xe},945:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(r=n(983))&&r.__esModule?r:{default:r};t.default=i,e.exports=i},983:function(e,t,n){"use strict";var r=n(44),i=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=r(n(984)),l=r(n(54)),s=function(e,t){return o.createElement(l.default,Object.assign({},e,{ref:t,icon:a.default}))};s.displayName="CheckOutlined";var c=o.forwardRef(s);t.default=c},984:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}}}]);