/*! For license information please see 923af3ea.ccffc9a8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[203468],{996577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(824246),o=r(511151);const i={id:"backend-tasks.taskscheduledefinition.initialdelay",title:"TaskScheduleDefinition.initialDelay",description:"API reference for TaskScheduleDefinition.initialDelay"},a=void 0,s={unversionedId:"reference/backend-tasks.taskscheduledefinition.initialdelay",id:"reference/backend-tasks.taskscheduledefinition.initialdelay",title:"TaskScheduleDefinition.initialDelay",description:"API reference for TaskScheduleDefinition.initialDelay",source:"@site/../docs/reference/backend-tasks.taskscheduledefinition.initialdelay.md",sourceDirName:"reference",slug:"/reference/backend-tasks.taskscheduledefinition.initialdelay",permalink:"/docs/reference/backend-tasks.taskscheduledefinition.initialdelay",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-tasks.taskscheduledefinition.initialdelay.md",tags:[],version:"current",frontMatter:{id:"backend-tasks.taskscheduledefinition.initialdelay",title:"TaskScheduleDefinition.initialDelay",description:"API reference for TaskScheduleDefinition.initialDelay"}},c={},u=[{value:"Remarks",id:"remarks",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-tasks",children:(0,n.jsx)(t.code,{children:"@backstage/backend-tasks"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskscheduledefinition",children:(0,n.jsx)(t.code,{children:"TaskScheduleDefinition"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskscheduledefinition.initialdelay",children:(0,n.jsx)(t.code,{children:"initialDelay"})})]}),"\n",(0,n.jsx)(t.p,{children:"The amount of time that should pass before the first invocation happens."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"initialDelay?: Duration | HumanDuration;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(t.p,{children:"This can be useful in cold start scenarios to stagger or delay some heavy compute jobs. If no value is given for this field then the first invocation will happen as soon as possible according to the cadence."}),"\n",(0,n.jsxs)(t.p,{children:["NOTE: This is a per-worker delay. If you have a cluster of workers all collaborating on a task that has its ",(0,n.jsx)(t.code,{children:"scope"})," field set to ",(0,n.jsx)(t.code,{children:"'global'"}),', then you may still see the task being processed by other long-lived workers, while any given single worker is in its initial sleep delay time e.g. after a deployment. Therefore, this parameter is not useful for "globally" pausing work; its main intended use is for individual machines to get a chance to reach some equilibrium at startup before triggering heavy batch workloads.']})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))r.call(i,u)&&(s[u]=i[u]);if(t){a=t(i);for(var l=0;l<a.length;l++)n.call(i,a[l])&&(s[a[l]]=i[a[l]])}}return s}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:a.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),s=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function k(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function m(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=k.prototype;var v=b.prototype=new m;v.constructor=b,n(v,k.prototype),v.isPureReactComponent=!0;var g={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,i={},a=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,n)&&!j.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:g.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===n?"."+x(c,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),E(a,t,r,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+x(s=e[u],u);c+=E(s,t,r,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=E(s=s.value,t,r,l=n+x(s,u++),a);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(p(321));return e}var D={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(p(143));return e}},t.Component=k,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var i=n({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=g.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)_.call(t,l)&&!j.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||a:i(e),n.createElement(o.Provider,{value:s},t)}}}]);