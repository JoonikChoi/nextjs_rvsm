(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2448:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(614)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(i){c=!0,o=i}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(7294))&&a.__esModule?a:{default:a},c=r(1003),i=r(880),l=r(9246);var f={};function s(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),a=u.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,y=u.default.useRef(d),v=u.default.useRef(p),h=e.children,b=e.replace,m=e.shallow,g=e.scroll,j=e.locale;"string"===typeof h&&(h=u.default.createElement("a",null,h));var w=(t=u.default.Children.only(h))&&"object"===typeof t&&t.ref,_=o(l.useIntersection({rootMargin:"200px"}),3),O=_[0],E=_[1],x=_[2],C=u.default.useCallback((function(e){v.current===p&&y.current===d||(x(),v.current=p,y.current=d),O(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[p,w,d,x,O]);u.default.useEffect((function(){var e=E&&r&&c.isLocalURL(d),t="undefined"!==typeof j?j:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,E,j,r,n]);var R={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:u}))}(e,n,d,p,b,m,g,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof j?j:n&&n.locale,M=n&&n.isLocaleDomain&&c.getDomainLocale(p,k,n&&n.locales,n&&n.domainLocales);R.href=M||c.addBasePath(c.addLocale(p,k,n&&n.defaultLocale))}return u.default.cloneElement(t,R)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(i){c=!0,o=i}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],y=o(a.useState(t?t.current:null),2),v=y[0],h=y[1],b=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),l.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]),m=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!c&&!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&h(t.current)}),[t]),[b,d,m]};var a=r(7294),u=r(4686),c="undefined"!==typeof IntersectionObserver;var i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},614:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(7294),a=r(1664),u=r.n(a);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}var d=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,r,o,a=p(l);function l(){return c(this,l),a.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){return(0,n.jsx)("div",{className:"error-area",children:(0,n.jsx)("div",{className:"d-table",children:(0,n.jsx)("div",{className:"d-table-cell",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"error-content",children:[(0,n.jsx)("img",{src:"/images/404.png",alt:"error"}),(0,n.jsx)("h3",{children:"Page Not Found"}),(0,n.jsx)("p",{children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}),(0,n.jsx)(u(),{href:"/",children:(0,n.jsx)("a",{className:"btn btn-primary",children:"Go To Home"})})]})})})})})}}])&&i(t.prototype,r),o&&i(t,o),l}(o.Component);t.default=y},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=2448,e(e.s=t);var t}));var t=e.O();_N_E=t}]);