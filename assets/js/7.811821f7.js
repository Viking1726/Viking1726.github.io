(window.webpackJsonp=window.webpackJsonp||[]).push([[7,11,19],{432:function(t,n,e){"use strict";e.d(n,"d",function(){return i}),e.d(n,"a",function(){return a}),e.d(n,"j",function(){return s}),e.d(n,"i",function(){return o}),e.d(n,"f",function(){return u}),e.d(n,"g",function(){return c}),e.d(n,"h",function(){return l}),e.d(n,"b",function(){return f}),e.d(n,"e",function(){return d}),e.d(n,"l",function(){return v}),e.d(n,"m",function(){return p}),e.d(n,"c",function(){return h}),e.d(n,"k",function(){return m});e(433),e(439),e(136),e(28),e(58),e(93),e(137),e(92),e(438),e(435);var i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,s=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var n=t.match(i),e=n?n[0]:"",r=o(t);return a.test(r)?t:r+".html"+e}function d(t,n){var e=t.hash,r=function(t){var n=t.match(i);if(n)return n[0]}(n);return(!r||e===r)&&o(t.path)===o(n)}function v(t,n,e){e&&(n=function(t,n,e){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return n+t;var r=n.split("/");e&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(n,e));for(var i=o(n),r=0;r<t.length;r++)if(o(t[r].path)===i)return Object.assign({},t[r],{type:"page",path:f(n)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function p(t,n,e,i){var r=e.pages,a=e.themeConfig,s=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){var n=h(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:n.map(function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}})}]}(t);var o=s.sidebar||a.sidebar;if(o){var u=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===g(t.path).indexOf(e))return{base:e,config:n[e]};return{}}(n,o),c=u.base,l=u.config;return l?l.map(function(t){return function t(n,e,i,r){if("string"==typeof n)return v(e,n,i);if(Array.isArray(n))return Object.assign(v(e,n[0],i),{title:n[1]});r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=n.children||[];return{type:"group",title:n.title,children:a.map(function(n){return t(n,e,i,!0)}),collapsable:!1!==n.collapsable}}(t,r,c)}):[]}return[]}function h(t){var n;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function g(t){return/(\.html|\/)$/.test(t)?t:t+"/"}},433:function(t,n,e){"use strict";var i=e(6),r=e(134)(!1),a=[].indexOf,s=!!a&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(s||!e(39)(a)),"Array",{indexOf:function(t){return s?a.apply(this,arguments)||0:r(this,t,arguments[1])}})},434:function(t,n,e){"use strict";var i=e(6),r=e(59)(3);i(i.P+i.F*!e(39)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},435:function(t,n,e){e(133)("replace",2,function(t,n,e){return[function(i,r){"use strict";var a=t(this),s=void 0==i?void 0:i[n];return void 0!==s?s.call(i,a,r):e.call(String(a),i,r)},e]})},438:function(t,n,e){e(133)("match",1,function(t,n,e){return[function(e){"use strict";var i=t(this),r=void 0==e?void 0:e[n];return void 0!==r?r.call(e,i):new RegExp(e)[n](String(i))},e]})},439:function(t,n,e){var i=e(6);i(i.S,"Array",{isArray:e(135)})},441:function(t,n,e){},446:function(t,n,e){"use strict";e.r(n);e(28),e(29),e(94),e(434),e(449);var i=e(432),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(n){return n===t.link}):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},a=e(4),s=Object(a.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);s.options.__file="NavLink.vue";n.default=s.exports},449:function(t,n,e){"use strict";e(450)("link",function(t){return function(n){return t(this,"a","href",n)}})},450:function(t,n,e){var i=e(6),r=e(9),a=e(30),s=/"/g,o=function(t,n,e,i){var r=String(a(t)),o="<"+n;return""!==e&&(o+=" "+e+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(o),i(i.P+i.F*r(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},453:function(t,n,e){},461:function(t,n,e){"use strict";var i=e(441);e.n(i).a},469:function(t,n,e){"use strict";e.r(n);e(138);var i={name:"coverr",data:function(){return{vedioCanPlay:!1,fixStyle:""}},methods:{canplay:function(){this.vedioCanPlay=!0}},mounted:function(){var t=this;window.onresize=function(){var n,e,i=document.body.clientWidth,r=document.body.clientHeight;r/i<.5625?(e=.5625*(n=i),t.fixStyle={height:.5625*i+"px",width:i+"px","margin-bottom":(r-e)/2+"px","margin-left":"initial"}):(n=(e=r)/.5625,t.fixStyle={height:r+"px",width:r/.5625+"px","margin-left":(i-n)/2+"px","margin-bottom":"initial"})},window.onresize()}},r=(e(461),e(4)),a=Object(r.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"homepage-hero-module"},[e("div",{staticClass:"video-container"},[e("div",{staticClass:"filter",style:t.fixStyle}),t._v(" "),e("video",{staticClass:"fillWidth",style:t.fixStyle,attrs:{preload:"auto",autoplay:"",loop:"",muted:""},domProps:{muted:!0},on:{canplay:t.canplay}},[e("source",{attrs:{src:"https://viking1726.top/vuepress-static/Dancing-Boats.mp4",type:"video/mp4"}}),t._v(" "),e("source",{attrs:{src:"https://viking1726.top/vuepress-static/Dancing-Boats.webm",type:"video/webm"}})]),t._v(" "),t.vedioCanPlay?t._e():e("div",{staticClass:"poster hidden"},[e("img",{style:t.fixStyle,attrs:{src:"https://viking1726.top/vuepress-static/Dancing-Boats.jpg",alt:""}})])])])},[],!1,null,"7ae43fd0",null);a.options.__file="coverr.vue";n.default=a.exports},475:function(t,n,e){"use strict";var i=e(453);e.n(i).a},493:function(t,n,e){"use strict";e.r(n);var i=e(446),r={components:{Coverr:e(469).default,NavLink:i.default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},a=(e(475),e(4)),s=Object(a.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("div",{staticClass:"homea"},[e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),e("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),e("p",{staticClass:"description"},[t._v("\n                    "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n                ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,function(n,i){return e("div",{key:i,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})):t._e(),t._v(" "),e("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n                "+t._s(t.data.footer)+"\n            ")]):t._e()],1)]),t._v(" "),e("coverr",{staticClass:"coverr"})],1)},[],!1,null,null,null);s.options.__file="Home.vue";n.default=s.exports}}]);