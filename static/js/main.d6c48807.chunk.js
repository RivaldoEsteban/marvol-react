(this["webpackJsonpmarvol-react"]=this["webpackJsonpmarvol-react"]||[]).push([[0],[,,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},,function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),r=t(4),i=t.n(r),a=(t(11),t(12),t(0));var j=function(){return Object(a.jsx)("div",{className:"header-navigation",children:Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#video-page",children:"videos"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#characters-page",children:"caracteres"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#comicBooks-page",children:"historietas"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#movie-page",children:"pel\xedculas"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#tv-page",children:"programas de televi\xf3n"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#games-page",children:"juegos"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#news-page",children:"noticias"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#more",children:"m\xe1s"})})]})})})};var l=function(){return Object(a.jsxs)("div",{className:"header-logo",children:[Object(a.jsxs)("button",{className:"header-register-btn",children:[Object(a.jsx)("a",{href:"#check-in",children:"Registrarse"}),"|",Object(a.jsx)("a",{href:"#join",children:"Unirse"})]}),Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("img",{className:"logo",src:"images/marvol-logo.png",alt:"logo"})})]})};var o=function(){return Object(a.jsx)("header",{className:"header-container",children:Object(a.jsxs)("div",{className:"header-content",children:[Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsx)(l,{})})}),Object(a.jsx)(j,{})]})})};t(14);var h=function(){return Object(a.jsx)("section",{className:"hero-container","aria-label":"hero-component",children:Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:"hero-txt",children:[Object(a.jsx)("p",{children:"MARVEL ILIMITADO"}),Object(a.jsx)("h1",{children:"QUE VIENE ESTE A\xd1O"}),Object(a.jsx)("button",{children:"pr\xf3ximamente"})]})})})},b=t(6),d=(t(15),t(3)),m=t.n(d),u=t(5);function O(){return(O=Object(u.a)(m.a.mark((function e(){var c,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gateway.marvel.com:443/v1/public/comics?apikey=f78b4321211fd5238c89b08eb3a86995");case 2:return c=e.sent,t=c.json(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){return O.apply(this,arguments)};var f=function(e){return e.comics.map((function(e){return console.log(e.title),Object(a.jsxs)("div",{className:"comic",children:[Object(a.jsx)("h2",{className:"comic-title",children:e.title}),Object(a.jsx)("img",{src:e.thumbnail.path+"/portrait_uncanny."+e.thumbnail.extension,alt:"comic image",className:"comic-image"})]})}))};var p=function(){var e=Object(n.useState)([]),c=Object(b.a)(e,2),t=c[0],s=c[1];return Object(n.useEffect)((function(){x().then((function(e){var c=e.data.results.filter((function(e){return!e.thumbnail.path.includes("image")}));s(c)})).catch((function(e){return console.log(e)}))}),[x]),Object(a.jsx)("main",{className:"main-container",children:Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:"main-content",children:[Object(a.jsxs)("section",{className:"section-comics","aria-label":"section comics",children:[Object(a.jsx)("h2",{className:"section-title",children:"Nuevos Lanzamientos"}),Object(a.jsx)("div",{className:"comics",children:Object(a.jsx)(f,{comics:t})})]}),Object(a.jsx)("section",{})]})})})};var v=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(o,{}),Object(a.jsx)(h,{}),Object(a.jsx)(p,{})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,r=c.getLCP,i=c.getTTFB;t(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),g()}],[[17,1,2]]]);
//# sourceMappingURL=main.d6c48807.chunk.js.map