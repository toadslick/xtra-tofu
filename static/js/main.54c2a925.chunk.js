(this["webpackJsonpxtra-tofu"]=this["webpackJsonpxtra-tofu"]||[]).push([[0],[,,function(e,t,n){e.exports=n.p+"static/media/knux.1d8677b8.png"},,,,,,,function(e,t,n){e.exports=n.p+"static/media/snare.6f324831.mp3"},function(e,t,n){e.exports=n.p+"static/media/kick.922fe955.mp3"},function(e,t,n){e.exports=n.p+"static/media/reed.56085286.mp3"},function(e,t,n){e.exports=n.p+"static/media/hi-hat.3bd267b1.mp3"},function(e,t,n){e.exports=n.p+"static/media/chord-am.ae5a5a0f.mp3"},function(e,t,n){e.exports=n.p+"static/media/chord-c.b7651c73.mp3"},function(e,t,n){e.exports=n.p+"static/media/chord-d.27f1546d.mp3"},function(e,t,n){e.exports=n.p+"static/media/chord-g.06fecf1a.mp3"},function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(6),c=n.n(i),r=(n(22),n(3)),d=n(1),u=n(7),s=n.n(u),p=n(2),f=n.n(p),l=function(e){var t=e.offset,n=e.width,o=e.active;return a.a.createElement("div",{style:{width:n,height:239,backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"".concat(-t,"px bottom"),position:"relative",overflow:"hidden"}},a.a.createElement("div",{style:{height:239,backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"".concat(-t,"px top"),position:"absolute",left:0,top:0,right:0,bottom:0,opacity:o?0:1,transition:o?"":"opacity 1s"}}))},m=n(8),h=n.n(m),w=n(9),v=n.n(w),k=n(10),b=n.n(k),y=n(11),E=n.n(y),x=n(12),g=n.n(x),C=n(13),j=n.n(C),O=n(14),L=n.n(O),A=n(15),I=n.n(A),S=n(16),z=n.n(S),J=[{width:78,keyCode:37,url:b.a},{width:54,keyCode:38,url:v.a},{width:71,keyCode:40,url:E.a},{width:73,keyCode:39,url:g.a},{width:77,keyCode:32,url:j.a},{width:68,keyCode:71,url:L.a},{width:51,keyCode:83,url:I.a},{width:80,keyCode:87,url:z.a}],N={},P=0;J.forEach((function(e){e.offset=P,P+=e.width,h()(e.url).then((function(t){N[e.keyCode]=t}))}));var B=.9;var R=function(){var e=Object(o.useState)({}),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)(1),u=Object(d.a)(c,2),p=u[0],f=u[1],m=Object(o.useState)(!1),h=Object(d.a)(m,2),w=h[0],v=h[1],k=Object(o.useRef)(null);return Object(o.useEffect)((function(){var e=function(e){var t=e.keyCode;N[t]&&(n[t]=!0,i(Object(r.a)({},n)),N[t]&&s()(N[t],{start:0,autoplay:!0}),v(!0))},t=function(e){var t=e.keyCode;delete n[t],i(Object(r.a)({},n)),v(!1)};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)}}),[]),Object(o.useEffect)((function(){var e=function(){return f(B*(k.current.offsetWidth/P))};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a.a.createElement("div",{className:"App ".concat(w?"App-active":"App-inactive"),ref:k},a.a.createElement("div",{className:"App-knuckles",style:{transform:"scale(".concat(p,")")}},J.map((function(e,t){var o=e.offset,i=e.width,c=e.keyCode,r=e.url;return a.a.createElement(l,{active:n[c],key:t,offset:o,url:r,width:i})}))))};c.a.render(a.a.createElement(R,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.54c2a925.chunk.js.map