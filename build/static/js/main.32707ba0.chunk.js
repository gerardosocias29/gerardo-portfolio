(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(72)},36:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){},47:function(e,a,t){},49:function(e,a,t){},51:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){},57:function(e,a,t){},59:function(e,a,t){},61:function(e,a,t){},63:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){},69:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(10),i=t(2),r=t(8),o=t(27),s=t(15),m=t(16),u=Object(n.createContext)(),d=function(){function e(){Object(s.a)(this,e)}return Object(m.a)(e,null,[{key:"setTheme",value:function(e){localStorage.setItem("themeName",e)}},{key:"isThemeSet",value:function(){return null!==localStorage.getItem("themeName")}},{key:"removeTheme",value:function(){localStorage.removeItem("themeName")}},{key:"getTheme",value:function(){return localStorage.getItem("themeName")}}]),e}(),p=function(e){var a=e.children,t=d.isThemeSet()?d.getTheme():"light",c=Object(n.useState)(t),r=Object(i.a)(c,2),o=r[0],s=r[1];Object(n.useEffect)(function(){var e=window.matchMedia("(prefers-color-scheme: dark)");s(t),e.addEventListener("change",function(e){s(e.matches?"dark":"light")})},[]);return l.a.createElement(u.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";d.setTheme(e),s(e)}}]},a)},h="https://gerardosocias29.github.io/gerardo-portfolio",f="GS.",g="Gerardo Socias Jr.",E="Web Developer",v="Passionate on Web Development, has strong analytical and thinking skills and loves coding \u2764. Currently exploring and willing to learn new things and currently learning on React Native Development. ",b="https://drive.google.com/file/d/17r7_q1RW4NOujFCoBQPDY3zxuEDQzFFr/view?usp=sharing",k={linkedin:"https://linkedin.com/in/gerardosociasjr",github:"https://github.com/gerardosocias29/",facebook:"https://www.facebook.com/gerardo.gwapo.socias"},N=[{name:"My Portfolio",description:"My portfolio build with React.",stack:[{name:"React",icon:"react"},{name:"Fortawesome",icon:"fortawesome"}],sourceCode:"https://github.com/gerardosocias29/gerardo-portfolio",livePreview:"/"},{name:"Gnonymous Chat",description:"An experimental anonymous chat.",stack:[{name:"Laravel",icon:"laravel"},{name:"PHP",icon:"php"},{name:"JavaScript",icon:"javascript"}],sourceCode:"https://github.com/gerardosocias29/gnonymous-chat",livePreview:"/"}],_=[{name:"Seditio Asia Inc.",position:"Junior Web Developer",year:"Jan 2022 - Present",description:"Responsible for maintaining and developing additional features on the web systems, database management, and cooperating with web designer to match visual design intent.",stack:[{name:"HTML",icon:"html5"},{name:"CSS",icon:"css3-alt"},{name:"Sass",icon:"sass"},{name:"JavaScript",icon:"js"},{name:"PHP",icon:"php"},{name:"Github",icon:"github"},{name:"Linux",icon:"linux"},{name:"Laravel",icon:"laravel"},{name:"Gulp",icon:"gulp"}],color:"#1e3161",color2:"#5183ff",image:"test.png"},{name:"Incramind Development Inc.",position:"Software Developer",year:"August 2020 - November 2021",description:"Build website extensions, facebook api, develop website themes and maintain website stability using their own environment.",stack:[{name:"HTML",icon:"html5"},{name:"CSS",icon:"css3-alt"},{name:"JavaScript",icon:"js"},{name:"PHP",icon:"php"},{name:"AngularJS",icon:"angular"},{name:"Docker",icon:"docker"},{name:"Git",icon:"git"},{name:"Linux",icon:"linux"}],color:"#ff7f00",color2:"#ff7f00",image:"test.png"},{name:"Gwion Solutions",position:"Web Developer",year:"April 2019 - May 2020",description:"Develop and maintain the web system, build websites, database management, version control, added new features to the system and integration to third-party software using REST api.",stack:[{name:"HTML",icon:"html5"},{name:"CSS",icon:"css3-alt"},{name:"JavaScript",icon:"js"},{name:"PHP",icon:"php"},{name:"AngularJS",icon:"angular"},{name:"WordPress",icon:"wordpress"},{name:"Git",icon:"git"},{name:"Laravel",icon:"laravel"}],color:"#ff8d00",color2:"#ff8d00",image:"test.png"}],y=[{name:"Bohol Island State University - Clarin Campus",address:"Poblacion Norte, Clarin, Bohol",year:"June 2015 - March 2019",description:"Studied Object Oriented Programming, Computer and Network Troubleshooting, System Analysis and Design, Artificial Intelligence, Logic Design and Circuits and Thesis on Arduino Paper Writer Through Voice Recognition",logo:""}],w=[{name:"HTML",icon:"html5"},{name:"CSS",icon:"css3-alt"},{name:"JavaScript",icon:"js"},{name:"PHP",icon:"php"},{name:"MySQL",icon:"mysql"},{name:"AngularJS",icon:"angular"},{name:"Laravel",icon:"laravel"},{name:"jQuery",icon:"jquery"},{name:"Java",icon:"java"},{name:"React",icon:"react"},{name:"Sass",icon:"sass"},{name:"Gulp",icon:"gulp"}],j=[{type:"PHP",level:70},{type:"Java",level:60},{type:"Javascript",level:65},{type:"MySQL",level:50},{type:"jQuery",level:65},{type:"AngularJS",level:50},{type:"React",level:30}],S="g.socias29@gmail.com",x=t(19),C=t.n(x),P=t(17),O=t.n(P),T=t(21),J=t.n(T),L=t(20),D=t.n(L),A=(t(36),function(){var e=Object(n.useContext)(u),a=Object(i.a)(e,1)[0],t=a.themeName,c=a.toggleTheme,r=Object(n.useState)(!1),o=Object(i.a)(r,2),s=o[0],m=o[1],d=function(){return m(!s)};return l.a.createElement("nav",{className:"center nav"},l.a.createElement("ul",{style:{display:s?"flex":null},className:"nav__list"},_.length?l.a.createElement("li",{className:"nav__list-item"},l.a.createElement("a",{href:"#experiences",onClick:d,className:"link link--nav"},"Experience",_.length>1?"s":"")):null,y.length?l.a.createElement("li",{className:"nav__list-item"},l.a.createElement("a",{href:"#educations",onClick:d,className:"link link--nav"},"Education",y.length>1?"s":"")):null,N.length?l.a.createElement("li",{className:"nav__list-item"},l.a.createElement("a",{href:"#projects",onClick:d,className:"link link--nav"},"Project",N.length>1?"s":"")):null,w.length?l.a.createElement("li",{className:"nav__list-item"},l.a.createElement("a",{href:"#skills",onClick:d,className:"link link--nav"},"Skill",w.length>1?"s":"")):null,S?l.a.createElement("li",{className:"nav__list-item"},l.a.createElement("a",{href:"#contact",onClick:d,className:"link link--nav"},"Contact")):null),l.a.createElement("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme"},"dark"===t?l.a.createElement(O.a,null):l.a.createElement(C.a,null)),l.a.createElement("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation"},s?l.a.createElement(D.a,null):l.a.createElement(J.a,null)))}),H=(t(41),function(){var e=h,a=f;return l.a.createElement("header",{className:"header center"},l.a.createElement("h3",null,e?l.a.createElement("a",{href:e,className:"link"},a):a),l.a.createElement(A,null))}),I=t(11),M=t.n(I),R=t(22),G=t.n(R),W=t(23),B=t.n(W),F=(t(43),l.a.useRef),Q=function(e){var a=e.name,t=e.defaultText,l=(e.onFinish,e.delay),c=void 0===l?100:l,r=t+a,o=F(),s=Object(n.useState)(1),m=Object(i.a)(s,2),u=m[0],d=m[1];return Object(n.useEffect)(function(){return u<r.length&&(o.current=setTimeout(function(){return d(u+1)},c)),function(){return clearTimeout(o.current)}},[u]),r.substr(0,u)},q=function(){var e=g,a=E,t=v,n=b,c=k;return l.a.createElement("div",{className:"about center"},e&&l.a.createElement("div",{className:"about__wrapper"},l.a.createElement("p",null,l.a.createElement("span",{className:"about__name anim"},l.a.createElement(Q,{defaultText:"Hi, I am ",name:e})))),a&&l.a.createElement("h2",{className:"about__role"},"A ",a,"."),l.a.createElement("p",{className:"about__desc"},t&&t),l.a.createElement("div",{className:"about__contact center"},n&&l.a.createElement("a",{href:n},l.a.createElement("span",{type:"button",className:"btn btn--outline"},"Resume")),c&&l.a.createElement(l.a.Fragment,null,c.github&&l.a.createElement("a",{href:c.github,"aria-label":"github",className:"link link--icon"},l.a.createElement(M.a,null)),c.linkedin&&l.a.createElement("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon"},l.a.createElement(G.a,null)),c.facebook&&l.a.createElement("a",{href:c.facebook,"aria-label":"facebook",className:"link link--icon"},l.a.createElement(B.a,null)))))},z=t(3),Y=t.n(z),U=t(9),V=(t(47),function(e){var a=e.experience,t=Object(n.useContext)(u),c=Object(i.a)(t,1)[0].themeName;return l.a.createElement("div",{className:"experience"},l.a.createElement("h3",{className:"experience__name",style:{color:"".concat("dark"==c?a.color2:a.color)}},a.name),l.a.createElement("p",{className:"experience__position"},a.position),l.a.createElement("p",{className:"experience__year"},a.year),l.a.createElement("p",{className:"experience__description"},a.description),a.stack&&l.a.createElement("ul",{className:"experience__stack"},a.stack.map(function(e){return l.a.createElement("li",{key:Y()(),className:"experience__stack-item"},l.a.createElement(U.a,{title:e.name,icon:["fab",e.icon]}))})))}),K=(t(49),function(){return _.length?l.a.createElement("section",{id:"experiences",className:"section experiences"},l.a.createElement("h2",{className:"section__title"},"Experience",_.length>1?"s":""),l.a.createElement("div",{className:"experiences__grid"},_.map(function(e){return l.a.createElement(V,{key:Y()(),experience:e})}))):null}),X=(t(51),function(e){var a=e.education;return l.a.createElement("div",{className:"education"},l.a.createElement("h3",null,a.name),l.a.createElement("p",{className:"education__address"},a.address),l.a.createElement("p",{className:"education__year"},a.year),a.description&&l.a.createElement("p",{className:"education__description"},a.description))}),Z=(t(53),function(){return y.length?l.a.createElement("section",{id:"educations",className:"section educations"},l.a.createElement("h2",{className:"section__title"},"Education",y.length>1?"s":""),l.a.createElement("div",{className:"educations__grid"},y.map(function(e){return l.a.createElement(X,{key:Y()(),education:e})}))):null}),$=t(24),ee=t.n($),ae=(t(55),function(e){var a=e.project;return l.a.createElement("div",{className:"project"},l.a.createElement("h3",null,a.name),l.a.createElement("p",{className:"project__description"},a.description),a.stack&&l.a.createElement("ul",{className:"project__stack"},a.stack.map(function(e){return l.a.createElement("li",{key:Y()(),className:"project__stack-item"},l.a.createElement(U.a,{icon:["fab",e.icon]})," ",e.name)})),a.sourceCode&&l.a.createElement("a",{href:a.sourceCode,"aria-label":"source code",className:"link link--icon"},l.a.createElement(M.a,null)),a.livePreview&&l.a.createElement("a",{href:a.livePreview,"aria-label":"live preview",className:"link link--icon"},l.a.createElement(ee.a,null)))}),te=(t(57),function(){return N.length?l.a.createElement("section",{id:"projects",className:"section projects"},l.a.createElement("h2",{className:"section__title"},"Project",N.length>1?"s":""),l.a.createElement("div",{className:"projects__grid"},N.map(function(e){return l.a.createElement(ae,{key:Y()(),project:e})}))):null}),ne=t(25),le=t.n(ne),ce=(t(59),{bar:"#3498db",title:{text:"#fff",background:"#2980b9"}}),ie=function(){return w.length?l.a.createElement("section",{className:"section skills",id:"skills"},l.a.createElement("h2",{className:"section__title"},"Skill",w.length>1?"s":""),l.a.createElement("ul",{className:"skills__list"},w.map(function(e){return l.a.createElement("li",{key:Y()(),className:"skills__list-item btn btn--plain"},l.a.createElement(U.a,{icon:["fab",e.icon]})," ",e.name)})),l.a.createElement(le.a,{skills:j,colors:ce})):null},re=t(26),oe=t.n(re),se=(t(61),function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)(function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]),t?l.a.createElement("div",{className:"scroll-top"},l.a.createElement("a",{href:"#top"},l.a.createElement(oe.a,{fontSize:"large"}))):null}),me=(t(63),function(){return S?l.a.createElement("section",{className:"section contact center",id:"contact"},l.a.createElement("h2",{className:"section__title"},"Contact"),l.a.createElement("a",{href:"mailto:".concat(S)},l.a.createElement("span",{type:"button",className:"btn btn--outline"},"Email me"))):null}),ue=(t(65),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("a",{href:"https://github.com/gerardosocias29",className:"link footer__link"},"Created By Gerardo Socias Jr"))});t(67);r.a.watch(),r.c.add(o.a);var de=function(){var e=Object(n.useContext)(u),a=Object(i.a)(e,1)[0].themeName;return l.a.createElement("div",{id:"top",className:"".concat(a," app")},l.a.createElement(H,null),l.a.createElement("main",null,l.a.createElement(q,null),l.a.createElement(K,null),l.a.createElement(Z,null),l.a.createElement(te,null),l.a.createElement(ie,null),l.a.createElement(me,null)),l.a.createElement(se,null),l.a.createElement(ue,null))};t(69);Object(c.render)(l.a.createElement(p,null,l.a.createElement(de,null)),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.32707ba0.chunk.js.map