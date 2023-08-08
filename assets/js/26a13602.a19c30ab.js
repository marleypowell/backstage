/*! For license information please see 26a13602.a19c30ab.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[547771],{165305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var n=r(824246),o=r(511151);const c={id:"plugin-entity-feedback.feedbackresponsetable",title:"FeedbackResponseTable",description:"API reference for FeedbackResponseTable"},a=void 0,u={unversionedId:"reference/plugin-entity-feedback.feedbackresponsetable",id:"reference/plugin-entity-feedback.feedbackresponsetable",title:"FeedbackResponseTable",description:"API reference for FeedbackResponseTable",source:"@site/../docs/reference/plugin-entity-feedback.feedbackresponsetable.md",sourceDirName:"reference",slug:"/reference/plugin-entity-feedback.feedbackresponsetable",permalink:"/docs/reference/plugin-entity-feedback.feedbackresponsetable",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-entity-feedback.feedbackresponsetable.md",tags:[],version:"current",frontMatter:{id:"plugin-entity-feedback.feedbackresponsetable",title:"FeedbackResponseTable",description:"API reference for FeedbackResponseTable"}},i={},s=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-entity-feedback",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-entity-feedback"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-entity-feedback.feedbackresponsetable",children:(0,n.jsx)(t.code,{children:"FeedbackResponseTable"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'FeedbackResponseTable: (props: import("./components/FeedbackResponseTable").FeedbackResponseTableProps) => JSX.Element\n'})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var s in c=Object(arguments[i]))r.call(c,s)&&(u[s]=c[s]);if(t){a=t(c);for(var f=0;f<a.length;f++)n.call(c,a[f])&&(u[a[f]]=c[a[f]])}}return u}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,c={},s=null,f=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:a.current}}t.jsx=s,t.jsxs=s},541535:(e,t,r)=>{var n=r(862525),o=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,u=60110,i=60112;t.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),a=l("react.provider"),u=l("react.context"),i=l("react.forward_ref"),t.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function m(){}function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var k=v.prototype=new m;k.constructor=v,n(k,h.prototype),k.isPureReactComponent=!0;var _={current:null},g=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,c={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)g.call(t,n)&&!j.hasOwnProperty(n)&&(c[n]=t[n]);var i=arguments.length-2;if(1===i)c.children=r;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];c.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===c[n]&&(c[n]=i[n]);return{$$typeof:o,type:e,key:a,ref:u,props:c,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return a=a(i=e),e=""===n?"."+S(i,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),E(a,t,r,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=n+S(u=e[s],s);i+=E(u,t,r,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(u=e.next()).done;)i+=E(u=u.value,t,r,f=n+S(u,s++),a);else if("object"===u)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function x(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var F={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:x,forEach:function(e,t,r){x(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var c=n({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in t)g.call(t,f)&&!j.hasOwnProperty(f)&&(c[f]=void 0===t[f]&&void 0!==s?s[f]:t[f])}var f=arguments.length-2;if(1===f)c.children=r;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];c.children=s}return{$$typeof:o,type:e.type,key:a,ref:u,props:c,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>u,ah:()=>c});var n=r(667294);const o=n.createContext({});function c(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function u({components:e,children:t,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||a:c(e),n.createElement(o.Provider,{value:u},t)}}}]);