/*! For license information please see 7cd19135.7b96ff7d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[473067],{445318:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(824246),c=n(511151);const i={id:"backend-app-api",title:"@backstage/backend-app-api",description:"API Reference for @backstage/backend-app-api"},s=void 0,a={unversionedId:"reference/backend-app-api",id:"reference/backend-app-api",title:"@backstage/backend-app-api",description:"API Reference for @backstage/backend-app-api",source:"@site/../docs/reference/backend-app-api.md",sourceDirName:"reference",slug:"/reference/backend-app-api",permalink:"/docs/reference/backend-app-api",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-app-api.md",tags:[],version:"current",frontMatter:{id:"backend-app-api",title:"@backstage/backend-app-api",description:"API Reference for @backstage/backend-app-api"}},o={},d=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-app-api"})})]}),"\n",(0,t.jsx)(r.p,{children:"Core API used by Backstage backend apps."}),"\n",(0,t.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Class"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.defaultroothttprouter",children:"DefaultRootHttpRouter"})}),(0,t.jsxs)(r.td,{children:["The default implementation of the ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.roothttprouterservice",children:"RootHttpRouterService"})," interface for ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.coreservices.roothttprouter",children:"coreServices.rootHttpRouter"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.middlewarefactory",children:"MiddlewareFactory"})}),(0,t.jsx)(r.td,{children:"A utility to configure common middleware."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.winstonlogger",children:"WinstonLogger"})}),(0,t.jsxs)(r.td,{children:["A ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"})," implementation based on winston."]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Function"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.createconfigsecretenumerator",children:"createConfigSecretEnumerator(options)"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.createhttpserver",children:"createHttpServer(listener, options, deps)"})}),(0,t.jsx)(r.td,{children:"Creates a Node.js HTTP or HTTPS server instance."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.createlifecyclemiddleware",children:"createLifecycleMiddleware(options)"})}),(0,t.jsx)(r.td,{children:"Creates a middleware that pauses requests until the service has started."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.createspecializedbackend",children:"createSpecializedBackend(options)"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.loadbackendconfig",children:"loadBackendConfig(options)"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"Load configuration for a Backend."}),(0,t.jsx)(r.p,{children:"This function should only be called once, during the initialization of the backend."})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.readcorsoptions",children:"readCorsOptions(config)"})}),(0,t.jsx)(r.td,{children:"Attempts to read a CORS options object from the backend configuration object."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.readhelmetoptions",children:"readHelmetOptions(config)"})}),(0,t.jsx)(r.td,{children:"Attempts to read Helmet options from the backend configuration object."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.readhttpserveroptions",children:"readHttpServerOptions(config)"})}),(0,t.jsxs)(r.td,{children:["Reads ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.httpserveroptions",children:"HttpServerOptions"})," from a ",(0,t.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"})," object."]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Interface"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.backend",children:"Backend"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.createspecializedbackendoptions",children:"CreateSpecializedBackendOptions"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.defaultroothttprouteroptions",children:"DefaultRootHttpRouterOptions"})}),(0,t.jsxs)(r.td,{children:["Options for the ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.defaultroothttprouter",children:"DefaultRootHttpRouter"})," class."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.extendedhttpserver",children:"ExtendedHttpServer"})}),(0,t.jsx)(r.td,{children:"An HTTP server extended with utility methods."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.httprouterfactoryoptions",children:"HttpRouterFactoryOptions"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.lifecyclemiddlewareoptions",children:"LifecycleMiddlewareOptions"})}),(0,t.jsxs)(r.td,{children:["Options for ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.createlifecyclemiddleware",children:"createLifecycleMiddleware()"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.middlewarefactoryerroroptions",children:"MiddlewareFactoryErrorOptions"})}),(0,t.jsxs)(r.td,{children:["Options passed to the ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.middlewarefactory.error",children:"MiddlewareFactory.error()"})," middleware."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.middlewarefactoryoptions",children:"MiddlewareFactoryOptions"})}),(0,t.jsxs)(r.td,{children:["Options used to create a ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.middlewarefactory",children:"MiddlewareFactory"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.rootconfigfactoryoptions",children:"RootConfigFactoryOptions"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.roothttprouterconfigurecontext",children:"RootHttpRouterConfigureContext"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.winstonloggeroptions",children:"WinstonLoggerOptions"})}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Variable"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.cacheservicefactory",children:"cacheServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.databaseservicefactory",children:"databaseServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.discoveryservicefactory",children:"discoveryServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.httprouterservicefactory",children:"httpRouterServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.identityservicefactory",children:"identityServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.lifecycleservicefactory",children:"lifecycleServiceFactory"})}),(0,t.jsx)(r.td,{children:"Allows plugins to register shutdown hooks that are run when the process is about to exit."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.loggerservicefactory",children:"loggerServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.permissionsservicefactory",children:"permissionsServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.rootconfigservicefactory",children:"rootConfigServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.roothttprouterservicefactory",children:"rootHttpRouterServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.rootlifecycleservicefactory",children:"rootLifecycleServiceFactory"})}),(0,t.jsx)(r.td,{children:"Allows plugins to register shutdown hooks that are run when the process is about to exit."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.rootloggerservicefactory",children:"rootLoggerServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.schedulerservicefactory",children:"schedulerServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.tokenmanagerservicefactory",children:"tokenManagerServiceFactory"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.urlreaderservicefactory",children:"urlReaderServiceFactory"})}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type Alias"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.httpservercertificateoptions",children:"HttpServerCertificateOptions"})}),(0,t.jsx)(r.td,{children:"Options for configuring HTTPS for an HTTP server."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.httpserveroptions",children:"HttpServerOptions"})}),(0,t.jsx)(r.td,{children:"Options for starting up an HTTP server."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.identityfactoryoptions",children:"IdentityFactoryOptions"})}),(0,t.jsx)(r.td,{children:"An identity client options object which allows extra configurations"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-app-api.roothttprouterfactoryoptions",children:"RootHttpRouterFactoryOptions"})}),(0,t.jsx)(r.td,{})]})]})]})]})}const p=function(e={}){const{wrapper:r}=Object.assign({},(0,c.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(c){return!1}}()?Object.assign:function(e,c){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),o=1;o<arguments.length;o++){for(var d in i=Object(arguments[o]))n.call(i,d)&&(a[d]=i[d]);if(r){s=r(i);for(var l=0;l<s.length;l++)t.call(i,s[l])&&(a[s[l]]=i[s[l]])}}return a}},371426:(e,r,n)=>{n(862525);var t=n(827378),c=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;c=i("react.element"),r.Fragment=i("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,i={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,t)&&!o.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:c,type:e,key:d,ref:l,props:i,_owner:s.current}}r.jsx=d,r.jsxs=d},541535:(e,r,n)=>{var t=n(862525),c=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,a=60110,o=60112;r.Suspense=60113;var d=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;c=p("react.element"),i=p("react.portal"),r.Fragment=p("react.fragment"),r.StrictMode=p("react.strict_mode"),r.Profiler=p("react.profiler"),s=p("react.provider"),a=p("react.context"),o=p("react.forward_ref"),r.Suspense=p("react.suspense"),d=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function x(e,r,n){this.props=e,this.context=r,this.refs=j,this.updater=n||u}function y(){}function b(e,r,n){this.props=e,this.context=r,this.refs=j,this.updater=n||u}x.prototype.isReactComponent={},x.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=x.prototype;var v=b.prototype=new y;v.constructor=b,t(v,x.prototype),v.isPureReactComponent=!0;var k={current:null},g=Object.prototype.hasOwnProperty,m={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,n){var t,i={},s=null,a=null;if(null!=r)for(t in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(s=""+r.key),r)g.call(r,t)&&!m.hasOwnProperty(t)&&(i[t]=r[t]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var d=Array(o),l=0;l<o;l++)d[l]=arguments[l+2];i.children=d}if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===i[t]&&(i[t]=o[t]);return{$$typeof:c,type:e,key:s,ref:a,props:i,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var S=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,n,t,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var o=!1;if(null===e)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case c:case i:o=!0}}if(o)return s=s(o=e),e=""===t?"."+O(o,0):t,Array.isArray(s)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),R(s,r,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,r){return{$$typeof:c,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),r.push(s)),1;if(o=0,t=""===t?".":t+":",Array.isArray(e))for(var d=0;d<e.length;d++){var l=t+O(a=e[d],d);o+=R(a,r,n,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),d=0;!(a=e.next()).done;)o+=R(a=a.value,r,n,l=t+O(a,d++),s);else if("object"===a)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return o}function C(e,r,n){if(null==e)return e;var t=[],c=0;return R(e,t,"","",(function(e){return r.call(n,e,c++)})),t}function F(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function E(){var e=P.current;if(null===e)throw Error(h(321));return e}var H={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:C,forEach:function(e,r,n){C(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},r.Component=x,r.PureComponent=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,r.cloneElement=function(e,r,n){if(null==e)throw Error(h(267,e));var i=t({},e.props),s=e.key,a=e.ref,o=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,o=k.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(l in r)g.call(r,l)&&!m.hasOwnProperty(l)&&(i[l]=void 0===r[l]&&void 0!==d?d[l]:r[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){d=Array(l);for(var p=0;p<l;p++)d[p]=arguments[p+2];i.children=d}return{$$typeof:c,type:e.type,key:s,ref:a,props:i,_owner:o}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:o,render:e}},r.isValidElement=_,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:F}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return E().useCallback(e,r)},r.useContext=function(e,r){return E().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return E().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return E().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return E().useLayoutEffect(e,r)},r.useMemo=function(e,r){return E().useMemo(e,r)},r.useReducer=function(e,r,n){return E().useReducer(e,r,n)},r.useRef=function(e){return E().useRef(e)},r.useState=function(e){return E().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>a,ah:()=>i});var t=n(667294);const c=t.createContext({});function i(e){const r=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function a({components:e,children:r,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),t.createElement(c.Provider,{value:a},r)}}}]);