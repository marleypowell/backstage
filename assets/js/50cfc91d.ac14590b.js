/*! For license information please see 50cfc91d.ac14590b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[572058],{419766:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var n=t(824246),o=t(511151);const c={id:"backend-plugin-api.coreservices.tokenmanager",title:"coreServices.tokenManager",description:"API reference for coreServices.tokenManager"},a=void 0,u={id:"reference/backend-plugin-api.coreservices.tokenmanager",title:"coreServices.tokenManager",description:"API reference for coreServices.tokenManager",source:"@site/../docs/reference/backend-plugin-api.coreservices.tokenmanager.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.coreservices.tokenmanager",permalink:"/docs/reference/backend-plugin-api.coreservices.tokenmanager",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.coreservices.tokenmanager.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.coreservices.tokenmanager",title:"coreServices.tokenManager",description:"API reference for coreServices.tokenManager"}},i={},s=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.coreservices",children:(0,n.jsx)(r.code,{children:"coreServices"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.coreservices.tokenmanager",children:(0,n.jsx)(r.code,{children:"tokenManager"})})]}),"\n",(0,n.jsxs)(r.p,{children:["The service reference for the plugin scoped ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.tokenmanagerservice",children:"TokenManagerService"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'tokenManager: import("../system").ServiceRef<import("./TokenManagerService").TokenManagerService, "plugin">\n'})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,c={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:u.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function g(){}function k(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var _=k.prototype=new g;_.constructor=k,m(_,v.prototype),_.isPureReactComponent=!0;var b=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var o,c={},a=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)S.call(r,o)&&!x.hasOwnProperty(o)&&(c[o]=r[o]);var i=arguments.length-2;if(1===i)c.children=n;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];c.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:t,type:e,key:a,ref:u,props:c,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,o,c,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return a=a(i=e),e=""===c?"."+C(i,0):c,b(a)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(a,r,o,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),r.push(a)),1;if(i=0,c=""===c?".":c+":",b(e))for(var s=0;s<e.length;s++){var f=c+C(u=e[s],s);i+=$(u,r,o,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(u=e.next()).done;)i+=$(u=u.value,r,o,f=c+C(u,s++),a);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,r,t){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},I={transition:null},T={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};r.Children={map:O,forEach:function(e,r,t){O(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return O(e,(function(){r++})),r},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=v,r.Fragment=o,r.Profiler=a,r.PureComponent=k,r.StrictMode=c,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,a=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,u=j.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)S.call(r,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==i?i[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:t,type:e.type,key:c,ref:a,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return M.current.useCallback(e,r)},r.useContext=function(e){return M.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return M.current.useDeferredValue(e)},r.useEffect=function(e,r){return M.current.useEffect(e,r)},r.useId=function(){return M.current.useId()},r.useImperativeHandle=function(e,r,t){return M.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return M.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return M.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return M.current.useMemo(e,r)},r.useReducer=function(e,r,t){return M.current.useReducer(e,r,t)},r.useRef=function(e){return M.current.useRef(e)},r.useState=function(e){return M.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return M.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return M.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>u,a:()=>a});var n=t(667294);const o={},c=n.createContext(o);function a(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);