"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5853],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"\u5982\u4f55\u7f16\u8bd1",sidebar_position:1},c=void 0,u={unversionedId:"quick_start/how_to_build",id:"quick_start/how_to_build",title:"\u5982\u4f55\u7f16\u8bd1",description:"\u4e0b\u8f7d\u6e90\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/quick_start/how_to_build.md",sourceDirName:"quick_start",slug:"/quick_start/how_to_build",permalink:"/zh-CN/docs/next/quick_start/how_to_build",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/quick_start/how_to_build.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5982\u4f55\u7f16\u8bd1",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Dashboard \u63d2\u4ef6",permalink:"/zh-CN/docs/next/design_and_concept/how_to_write_plugin_dashboard"},next:{title:"\u5165\u5e93 Hive \u793a\u4f8b",permalink:"/zh-CN/docs/next/quick_start/hive_example"}},p={},s=[{value:"\u4e0b\u8f7d\u6e90\u7801",id:"\u4e0b\u8f7d\u6e90\u7801",level:2},{value:"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6",id:"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6",level:2},{value:"\u7f16\u8bd1Docker\u955c\u50cf",id:"\u7f16\u8bd1docker\u955c\u50cf",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u6e90\u7801"},"\u4e0b\u8f7d\u6e90\u7801"),(0,a.kt)("p",null,"\u4ece",(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download/main/"},"InLong Download Page"),"\u4e0b\u8f7d\u6e90\u7801."),(0,a.kt)("h2",{id:"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6"},"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Java ",(0,a.kt)("a",{parentName:"li",href:"https://adoptopenjdk.net/?variant=openjdk8"},"JDK 8")),(0,a.kt)("li",{parentName:"ul"},"Maven 3.6.1+")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mvn clean install -DskipTests\n")),(0,a.kt)("p",null,"(\u53ef\u9009) \u4f7f\u7528docker\u7f16\u8bd1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker pull maven:3.6-openjdk-8\n$ docker run -v `pwd`:/inlong  -w /inlong maven:3.6-openjdk-8 mvn clean install -DskipTests\n")),(0,a.kt)("p",null,"\u82e5\u7f16\u8bd1\u6210\u529f\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-distribution/target"),"\u4e0b\u4f1a\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"tar.gz"),"\u683c\u5f0f\u7684\u5b89\u88c5\u5305\uff0c\u89e3\u538b\u5b89\u88c5\u76ee\u5f55\uff0c\u5305\u62ec\u5404\u4e2a\u6a21\u5757\u5b89\u88c5\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker\ninlong-agent\ninlong-audit\ninlong-dataproxy\ninlong-manager\ninlong-sort\ninlong-tubemq-manager\ninlong-tubemq-server\ninlong-dashboard\n")),(0,a.kt)("h2",{id:"\u7f16\u8bd1docker\u955c\u50cf"},"\u7f16\u8bd1Docker\u955c\u50cf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn clean package -DskipTests -Pdocker\n")))}m.isMDXComponent=!0}}]);