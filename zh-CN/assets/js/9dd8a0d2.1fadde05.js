"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7054],{4432:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),i=a(2389),r=a(4996),l=a(5697),s=a.n(l),c=a(9960),m={type:s().oneOf(["primary","normal"]),link:s().string,target:s().string},o=function(e){return n.createElement(c.Z,{className:"button button-"+e.type,target:e.target||"_self",style:{marginRight:"50px"},to:e.link},e.children)};o.propTypes=m,o.defaultProps={type:"primary",link:"",target:"_self"};var d=o,u=JSON.parse('{"zh-CN":{"brand":{"brandName":"Apache","projectName":"InLong","briefIntroduction":"Apache InLong\uff08\u5e94\u9f99\uff09\u662f\u4e00\u7ad9\u5f0f\u7684\u6570\u636e\u6d41\u63a5\u5165\u670d\u52a1\u5e73\u53f0\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u9ad8\u6027\u80fd\u3001\u5206\u5e03\u5f0f\u7684\u6570\u636e\u53d1\u5e03\u8ba2\u9605\u80fd\u529b\uff0c\u57fa\u4e8e\u8be5\u7cfb\u7edf\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5e94\u7528\u3002","features":["\u81ea\u52a8","\u5b89\u5168","\u9ad8\u6027\u80fd","\u5206\u5e03\u5f0f"],"buttons":[{"text":"\u7acb\u5373\u5f00\u59cb","link":"/zh-CN/docs/user_guide/quick_start","type":"primary"},{"text":"\u8054\u7cfb\u6211\u4eec","link":"/zh-CN/docs/contact","type":"normal"}]},"features":{"title":"\u4ea7\u54c1\u4f18\u52bf","list":[{"img":"/img/advantage-01.png","title":"\u7b80\u5355\u6613\u7528","content":"\u57fa\u4e8eSaaS\u6a21\u5f0f\u5bf9\u5916\u670d\u52a1\uff0c\u7528\u6237\u53ea\u9700\u8981\u6309\u4e3b\u9898\u53d1\u5e03\u548c\u8ba2\u9605\u6570\u636e\u5373\u53ef\u5b8c\u6210\u6570\u636e\u7684\u4e0a\u62a5\uff0c\u4f20\u8f93\u548c\u5206\u53d1\u5de5\u4f5c"},{"img":"/img/advantage-02.png","title":"\u7a33\u5b9a\u53ef\u9760","content":"\u7cfb\u7edf\u6e90\u4e8e\u5b9e\u9645\u7684\u7ebf\u4e0a\u7cfb\u7edf\uff0c\u670d\u52a1\u4e0a\u5341\u4e07\u4ebf\u7ea7\u7684\u9ad8\u6027\u80fd\u53ca\u4e0a\u5343\u4ebf\u7ea7\u7684\u9ad8\u53ef\u9760\u6570\u636e\u6570\u636e\u6d41\u91cf\uff0c\u7cfb\u7edf\u7a33\u5b9a\u53ef\u9760"},{"img":"/img/advantage-03.png","title":"\u529f\u80fd\u5b8c\u5584","content":"\u652f\u6301\u5404\u79cd\u7c7b\u578b\u7684\u6570\u636e\u63a5\u5165\u65b9\u5f0f\uff0c\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u7684MQ\u96c6\u6210\uff0c\u4ee5\u53ca\u57fa\u4e8e\u914d\u7f6e\u89c4\u5219\u7684\u5b9e\u65f6\u6570\u636eETL\u548c\u6570\u636e\u5206\u62e3\u843d\u5730\uff0c\u5e76\u652f\u6301\u4ee5\u53ef\u63d2\u62d4\u65b9\u5f0f\u6269\u5c55\u7cfb\u7edf\u80fd\u529b"},{"img":"/img/advantage-04.png","title":"\u670d\u52a1\u96c6\u6210","content":"\u652f\u6301\u7edf\u4e00\u7684\u7cfb\u7edf\u76d1\u63a7\u3001\u544a\u8b66\uff0c\u4ee5\u53ca\u7ec6\u7c92\u5ea6\u7684\u6570\u636e\u6307\u6807\u5448\u73b0\uff0c\u5bf9\u4e8e\u7ba1\u9053\u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u4ee5\u6570\u636e\u4e3b\u9898\u4e3a\u6838\u5fc3\u7684\u6570\u636e\u8fd0\u8425\u60c5\u51b5\uff0c\u6c47\u603b\u5728\u7edf\u4e00\u7684\u6570\u636e\u6307\u6807\u5e73\u53f0\uff0c\u5e76\u652f\u6301\u901a\u8fc7\u4e1a\u52a1\u8bbe\u7f6e\u7684\u544a\u8b66\u4fe1\u606f\u8fdb\u884c\u5f02\u5e38\u544a\u8b66\u63d0\u9192"},{"img":"/img/advantage-04.png","title":"\u7075\u6d3b\u6269\u5c55","content":"\u5168\u94fe\u6761\u4e0a\u7684\u5404\u4e2a\u6a21\u5757\u57fa\u4e8e\u534f\u8bae\u4ee5\u53ef\u63d2\u62d4\u65b9\u5f0f\u7ec4\u6210\u670d\u52a1\uff0c\u4e1a\u52a1\u53ef\u6839\u636e\u81ea\u8eab\u9700\u8981\u8fdb\u884c\u7ec4\u4ef6\u66ff\u6362\u548c\u529f\u80fd\u6269\u5c55"}]},"architecture":{"title":"\u4ea7\u54c1\u67b6\u6784"}},"en":{"brand":{"brandName":"Apache","projectName":"InLong","features":["Automatic","Safety","High performance","Distributed"],"briefIntroduction":"Apache InLong is a one-stop data streaming platform that provides automatic, secure, distributed, and efficient data publishing and subscription capabilities. This platform helps you easily build stream-based data applications.","buttons":[{"text":"Quick Start","link":"/docs/user_guide/quick_start","type":"primary"},{"text":"Contact","link":"/docs/contact","type":"normal"}]},"architecture":{"title":"Product Architecture"},"features":{"title":"Advantages","list":[{"img":"/img/advantage-01.png","title":"Ease of Use","content":"Apache InLong is a SaaS-based service platform. You can easily and quickly report, transfer, and distribute data by publishing and subscribing to data based on topics"},{"img":"/img/advantage-02.png","title":"Stability & Reliability","content":"Apache InLong is derived from the actual online production environment, it delivers high-performance processing capabilities for 10 trillion-level data streams and highly reliable services for 100 billion-level data streams"},{"img":"/img/advantage-03.png","title":"Comprehensive Features","content":"Apache InLong supports various types of data access methods and can be integrated with different types of Message Queue (MQ) services. It also provides real-time data extract, transform, and load (ETL) and sorting capabilities based on rules. Apache InLong also allows you to plug features to extend system capabilities"},{"img":"/img/advantage-04.png","title":"Service Integration","content":"Apache InLong provides unified system monitoring and alert services. It provides fine-grained metrics to facilitate data visualization. You can view the running status of queues and topic-based data statistics in a unified data metric platform. You can also configure the alert service based on your business requirements so that users can be alerted when errors occur"},{"img":"/img/advantage-05.png","title":"Scalability","content":"Apache InLong adopts a pluggable architecture that allows you to plug modules into the system based on specific protocols. You can replace components and add features based on your business requirements"}]}}}');function g(){var e=(0,i.Z)(),t=(0,n.useState)(!1),a=t[0],l=(t[1],(0,n.useState)(!1)),s=l[0],c=(l[1],e&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en"),m=null==u?void 0:u[c];return n.createElement("div",{className:"home-page"},n.createElement("section",{className:"top-section",style:{backgroundImage:'url("'+(0,r.Z)("/img/first-page-bg.png")+'"'}},n.createElement("div",{className:"vertical-middle animate__animated animate__fadeInLeft animate__delay-0.5s"},n.createElement("div",{className:"product-name"},n.createElement("div",{className:"brandname"},m.brand.brandName),n.createElement("div",{className:"projectname",style:{backgroundImage:'url("'+(0,r.Z)("/img/inlong-en.svg")+'"'}})),n.createElement("div",{className:"product-desc2"},n.createElement("div",null,m.brand.features[0]),n.createElement("div",{className:"split"}),n.createElement("div",null,m.brand.features[1]),n.createElement("div",{className:"split"}),n.createElement("div",null,m.brand.features[2]),n.createElement("div",{className:"split"}),n.createElement("div",null,m.brand.features[3])),n.createElement("p",{className:"product-desc"},m.brand.briefIntroduction),n.createElement("div",{className:"button-area"},m.brand.buttons.map((function(e,t){return n.createElement(d,{type:e.type,key:t,link:e.link,target:e.target},e.text)}))))),n.createElement("section",{id:"page1",className:"feature-section",style:{backgroundImage:'url("'+(0,r.Z)("/img/sec-page-bg.png")+'")'}},n.createElement("div",{className:"title-index"},"01"),"zh-CN"===c&&n.createElement("div",{className:"page-title-wrap"},n.createElement("div",{className:"page1-title-l1"},m.features.title),n.createElement("div",{className:"page1-title-l2"},"PRODUCT ADVANTAGES")),"en"===c&&n.createElement("div",{className:"page-title-wrap"},n.createElement("div",{className:"page1-title-l2"},"PRODUCT"),n.createElement("div",{className:"page1-title-l1"},"ADVANTAGES")),n.createElement("ul",{className:" "+(a?"animate__animated animate__fadeInUp":"")},m.features.list.map((function(e,t){return n.createElement("li",{key:t,index:t},n.createElement("div",{className:"feature-icon",style:{backgroundImage:'url("'+(0,r.Z)(e.img)+'")'}}),n.createElement("div",null,n.createElement("h4",null,e.title),n.createElement("p",null,e.content)))})))),n.createElement("section",{className:"feature-section",style:{backgroundColor:"#000"}},n.createElement("div",{className:"title-index"},"02"),"zh-CN"===c&&n.createElement("div",{className:"page-title-wrap"},n.createElement("div",{className:"page1-title-l1"},m.architecture.title),n.createElement("div",{className:"page1-title-l2"},"PRODUCT STRUCTURE")),"en"===c&&n.createElement("div",{className:"page-title-wrap"},n.createElement("div",{className:"page1-title-l2"},"PRODUCT"),n.createElement("div",{className:"page1-title-l1"},"STRUCTURE")),n.createElement("div",{className:"architecture-img-wrap "+(s?"animate__animated animate__fadeInUp":"")},n.createElement("img",{className:"architecture-img",src:(0,r.Z)("/img/arch-img.png")}))))}},7275:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),i=a(9067),r=a(2263),l=a(4432),s=a(2389);function c(){var e=(0,s.Z)(),t=(0,r.Z)().siteConfig,a=e&&location.pathname;return(0,n.useEffect)((function(){if(e){var t=document.getElementsByTagName("nav")[0],n=t&&t.classList;if(!n)return;"/"===a||"/zh-CN/"===a?n.add("index-nav"):n.remove("index-nav")}}),[e,a]),n.createElement(i.Z,{title:t.title,description:"Description will go into a meta tag in <head />"},n.createElement("main",null,n.createElement(l.default,null)))}},6196:function(e,t,a){var n=a(7462),i=a(3366),r=a(7294),l=["width","height"];t.Z=function(e){e.width,e.height;var t=(0,i.Z)(e,l);return r.createElement("svg",(0,n.Z)({t:"1631348384596",className:"icon",viewBox:"0 0 1024 1024",version:"1.1"},t,{"p-id":"557",width:"20",height:"20"}),r.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);