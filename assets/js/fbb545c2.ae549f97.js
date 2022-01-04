"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3581],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84748:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Deployment"},s=void 0,u={unversionedId:"modules/manager/quick_start",id:"version-0.12.0/modules/manager/quick_start",isDocsHomePage:!1,title:"Deployment",description:"Environment Requirements",source:"@site/versioned_docs/version-0.12.0/modules/manager/quick_start.md",sourceDirName:"modules/manager",slug:"/modules/manager/quick_start",permalink:"/docs/modules/manager/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/manager/quick_start.md",tags:[],version:"0.12.0",frontMatter:{title:"Deployment"},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/manager/overview"},next:{title:"Overview",permalink:"/docs/modules/website/overview"}},c=[{value:"Environment Requirements",id:"environment-requirements",children:[]},{value:"Deploy manager",id:"deploy-manager",children:[{value:"Modify configuration",id:"modify-configuration",children:[]},{value:"Start the service",id:"start-the-service",children:[]}]}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install and start MySQL 5.7+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"initialize database\nthere is ",(0,i.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_manager.sql")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-manager-web")," directory, load this file through the\nfollowing command to complete the initialization of the table structure and basic data"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize database\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql\n")))),(0,i.kt)("h2",{id:"deploy-manager"},"Deploy manager"),(0,i.kt)("p",null,"manager-web is a background service that interacts with the front-end page."),(0,i.kt)("h3",{id:"modify-configuration"},"Modify configuration"),(0,i.kt)("p",null,"Go to the decompressed ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-manager-web")," directory and modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# manager-web service port number\nserver.port=8083\n\n# The configuration file used is dev\nspring.profiles.active=dev\n")),(0,i.kt)("p",null,"The dev configuration is specified above, then modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," file:"),(0,i.kt)("p",null,"1) Modify the database URL, username and password:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.jdbc-url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.username=DB_USER\nspring.datasource.password=DB_PASSWD\n")),(0,i.kt)("p",null,"2) Configure the Message Queue Service, you could choose InLong TubeMQ or Apache Pulsar:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configuration TubeMQ cluster information if using TubeMQ"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Manager address of TubeMQ cluster, used to create Topic\ncluster.tube.manager=http://127.0.0.1:8081\n# Broker used to manage TubeMQ\ncluster.tube.master=127.0.0.1:8000,127.0.0.1:8010\n# TubeMQ cluster ID\ncluster.tube.clusterId=1\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configuration Pulsar cluster information if using Pulsar"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Pulsar admin URL\npulsar.adminUrl=http://127.0.0.1:8080,127.0.0.2:8080,127.0.0.3:8080\n# Pulsar broker address\npulsar.serviceUrl=pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650\n# Default tenant of Pulsar\npulsar.defaultTenant=public\n")))),(0,i.kt)("p",null,"3) Configure ZooKeeper clusters information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# ZK cluster, used to push the configuration of Sort\ncluster.zk.url=127.0.0.1:2181\ncluster.zk.root=inlong_hive\n# application name, that is the cluster-id parameter of InLong Sort\nsort.appName=inlong_app\n")),(0,i.kt)("h3",{id:"start-the-service"},"Start the service"),(0,i.kt)("p",null,"Enter the decompressed directory, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"sh bin/startup.sh")," to start the service, and check the\nlog ",(0,i.kt)("inlineCode",{parentName:"p"},"tailf log/manager-web.log"),". If a log similar to the following appears, the service has started successfully:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)\n")))}m.isMDXComponent=!0}}]);