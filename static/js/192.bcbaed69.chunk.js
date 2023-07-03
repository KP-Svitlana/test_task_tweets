"use strict";(self.webpackChunktest_task_tweets=self.webpackChunktest_task_tweets||[]).push([[192],{903:function(n,e,t){t.d(e,{$:function(){return s}});var r,o=t(168),a=t(706).Z.section(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  min-height: 100%;\n"]))),i=t(184),s=function(n){var e=n.children;return(0,i.jsx)(a,{children:e})}},185:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var r,o,a,i,s,c,x,l,u,p=t(165),A=t(433),f=t(861),d=t(439),h=t(791),g=t(168),m=t(706),w=m.Z.ul(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 50px;\n  padding: 0px 100px 100px 100px;\n"]))),Z=m.Z.button(o||(o=(0,g.Z)(["\n  background-color: ",";\n  width: 196px;\n  height: 50px;\n  padding: 14px, 28px, 14px, 28px;\n  align-items: center;\n  margin: 0 auto;\n\n  border-radius: 10px;\n  border-color: ",";\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.15);\n  }\n"])),(function(n){return n.active?"#5CD3A8":"#ebd8ff"}),(function(n){return n.active?"#5CD3A8":"#ebd8ff"})),b=t(184),y=function(n){var e=n.isActive,t=n.onClick;return(0,b.jsx)(b.Fragment,{children:e?(0,b.jsx)(Z,{active:!0,onClick:t,children:"Following"}):(0,b.jsx)(Z,{onClick:t,children:"Follow"})})},C=function(n){var e=n.onClick,t=n.text,r=n.isActive;return(0,b.jsx)(b.Fragment,{children:r?(0,b.jsx)(Z,{style:{marginBottom:"30px"},active:!0,onClick:e,children:t}):(0,b.jsx)(Z,{style:{marginBottom:"30px"},onClick:e,children:t})})},v=m.Z.li(a||(a=(0,g.Z)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 36px;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n\n  position: relative;\n"]))),M=m.Z.picture(i||(i=(0,g.Z)(["\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),k=m.Z.picture(s||(s=(0,g.Z)(["\n  position: relative;\n  top: -14px;\n  left: 0;\n  margin: 0 auto;\n  margin-bottom: 4px;\n"]))),B=m.Z.img(c||(c=(0,g.Z)(["\n  width: 64px;\n  height: 64px;\n  background: #ebd8ff;\n  border: 8px solid #ebd8ff;\n  border-radius: 50%;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n\n  position: absolute;\n  top: 178px;\n  left: 150px;\n"]))),j=m.Z.div(x||(x=(0,g.Z)(["\n  height: 8px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),Q=m.Z.div(l||(l=(0,g.Z)(["\n  padding: 26px 0;\n  margin: 0 auto;\n  margin-top: 36px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n"]))),S=m.Z.p(u||(u=(0,g.Z)(['\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n\n  color: #ebd8ff;\n']))),I=t(243);I.Z.defaults.baseURL="https://6415d400351c4aed4910b049.mockapi.io/api/v1";var R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;try{var e=new URLSearchParams({limit:6});return I.Z.get("/users?".concat(e,"&page=").concat(n))}catch(t){return t.message}},Y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;try{var t=new URLSearchParams({isFollowing:e,limit:6});return I.Z.get("/users?".concat(t,"&page=").concat(n))}catch(r){return r.message}},E=function(n,e){try{return I.Z.put("/users/".concat(n),e)}catch(t){return t.message}};function F(){return(F=(0,f.Z)((0,p.Z)().mark((function n(e,t){var r,o;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e+1,n.next=3,E(t,{followers:r,isFollowing:!0}).then((function(n){return n.data}));case 3:return o=n.sent,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function L(){return(L=(0,f.Z)((0,p.Z)().mark((function n(e,t){var r,o;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e-1,n.next=3,E(t,{followers:r,isFollowing:!1}).then((function(n){return n.data}));case 3:return o=n.sent,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var U,V,D,T,H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgB1VgxTxtRDPZVzZBIZYBKzdAMdGBIh2bokqVDu/Yvw8DCwhAGGDLAEAaQyMKQDDkp+LvzQ87TO54TIDGfZOXdxWfe+87+7FAsl8v/tHvM2E6LoiibHHifA/74TjvGJ/KBDtuAPgC8EAZ0OYuOyDk8EQYcMWnfyDG8EQYMmLQ2OYVHwlpsQybtMzmEdVPoXtdsU7Y5GzIAQo2udZDwf2S7Ff+F+PfI3uVCEzinzXDHdiXrQzHgjOr9NwH7HL7wvYkw/IEzbvkzdQ9rkDERodZiPWbfcRSj8mffsWzIUnJVE0jEsqAM++UYC3V/Hp1jBexLOeRKcoUslAnbXqQxe2p9qw8o/p1wLXHwlkuyAU2gR28H7P1A7DlZwj1e7ucC5DJsqsgCSX+o1hhco0Rx8K7y12T94I++rCuiOFb1huVZ6wjRZ/8Hehv8VusTtlJe6NAaIJdhE7WGpoAskDKiWqdmsgZxjxG5ffVsPJhOyY6qCZBdb98VuU1ogQxliKxbObDomNaKTiJWuyGuBQVJZu8auQxLHbKNNE60fa1lyL5Yp1LkW4A4ue62NeQI0yPDBdWbRmn9Zfsa+bZEOCHuyLZL9d1cng9Y50f05UudbdvIleQhkzAJYs3XxyKSCyElBkoT2QDSMHJgHmrpA4u+dckGjCgTcoRchoWp+7mEcHhNluhX0Cy051+hXOGXIGtINj2633AGe1dYOg/I+IdMo3qCLuU5lB9mpPjwuAfibqjWMsr4p4ASHtHm2Jf/nwFfGnwwrpS0ZjNZp1X3xCwAyT9pM1Qi31DyVnQo3ak1rLKwAo8/vkeeRD6GN8Ig8nfkGJ4IcynyMbwQ9lqR3xqeAP79BzwxZzuPAAAAAElFTkSuQmCC",J=t.p+"static/media/userImg_1x.b186e544641a66e17d83.png",z=t.p+"static/media/userImg_2x.2bdca439e1ee32db9691.png",G=t.p+"static/media/userImg_3x.71a4254f726016bfe17e.png",W=function(n){var e=n.id,t=n.tweets,r=n.followers,o=n.isFollowing,a=n.avatar,i=(0,h.useState)(r),s=(0,d.Z)(i,2),c=s[0],x=s[1],l=(0,h.useState)(o),u=(0,d.Z)(l,2),p=u[0],A=u[1];return(0,b.jsxs)(v,{children:[(0,b.jsxs)(M,{children:[(0,b.jsx)("source",{srcSet:"".concat(H," 1x,").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAsCAYAAACZmXFCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASASURBVHgB7Zw/TxtBEMXHEY4ERSyFAgpTQOFIUJACCpo0afOVU6WgoQhSQIoLU2ApuHCBCywFS2QenksOe2dv73bXRDA/aWVx7A335zH7bnbPrYeHhy9kFFy0Wq0rioCvZ5c/PpLxyBsyyhywQN6RkQwT2DJHLLJ1MpJgAltmg9sRGUkwgbnpcBbbJyMaE5jOHotsl4woTGB+YPo3yWiMCayaQzP9zTGBVfNo+llka2TUxgQWRodbj4zamMDCMdPfABNYPcz01ySXr5hxu+Y25fZbPmGU33LDVMym/Nw09i23kcSeyfYNifsuInYIMP2nPGc5pdVzSfNzL9Mmd2HY1bcuuJYHFEFqgY259fnij6s6SiaArwnNCBDSgNsVx79X+gwk9o7EziG0wvRDZDNaLbeL15aPYyO0b104NsWSUmC1ViLIyZ/ySezRXAy+Y0E2vPQIazE2+l9z7B7lMeeF6b8kw0sqD3bedJkL74es88PTBRnxPFRcC7H72J/yYKY/gBQC60vGaIQUMbUsMxKRNCazyMz0VxA7RN76BCBrq9BgRO+4jcu+RYqXJzT3NYvARF94YmNfDFX4nPn8Bo5RhJBDDM9p+n3sKOIfLHpH7of748rG0R42VmBODyI3H6s6tx2/65dEiT6aSb3mfndK/C3Zt13ahr5Dj+Cx/YTS85ym30dX2T6kf0/eBbiOWQrJMQKberKGU1xCT5YVjzx9wNC1UcR17PjVhsRe4+NaEj6OVUSoCToGM/0KMQL75doo4ikLB0OHKxNh6CwLtBjuwFjLXlRdl4H5Hinih6hzGXP8XZxr7YeRl0xUBlO2L2aln3yzh1QB3xxkva4vNvdB7JAMhDqYS2CxhccqIP7Kc31NxDxFagJLMQRp2Sv0hYz3yvZVeCTLYCX+1yUo2nGFCkTrl/vm40Hijoy/xGQwTQQTiked/qAwtJucc45yEFuze4nECEwbrhaLruuox5RayDDnrFeJcQ+pN42U7R3Kw9T15GrECWzHtVFEUJ42+kDz+lPRQmbn254K+XfyM/DMLGxReiD4UzKcxAhMFQHfYFTgMVwsZht4oxsKo6vEhoC/KbH7WiaR8kmOGtiZp6Ty6ok1+SguOv97iznAkggxnVOnTICpDizNmThiI85XiY0qNMz7pGJCPEelul/znF4dsZPdm7IkRgUZR1qTG3Hoe9lC4t7IpyouOcbU2ctMfQApVlP0qkRWhUz/uPwRTPlxzBs9mdaEmakPJNV6MIhsv64Q0J8bTD/mFttKNwyDn+q+m1iKnVxcZKY+mJSFVqxM3cZqCZrPJarlBPFOyFh4Em0HxMbw9pn3w9NhvyL2mhzLbmDsujynqV93LJGuW9tbdyyFzlYfbGX8Ajp4LgihMOm4MLj5hTGPjV3UxO4lHi5Sh/Ks+SroV/ku+wK6p+ScKupI26b0FLFXiZn6Bth7kWGYqW+ICawaM/URmMCqsUp9BCYwPxdWqY/DBKYziP1Kc8MEpjExU58GE9gyMPVnZCTBBLaMmfqEmMCeYqY+MX8Au/W380rAxe0AAAAASUVORK5CYII="," 2x,").concat("data:image/png;base64,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"," 3x")}),(0,b.jsx)("img",{src:H,alt:"Logo GoIT"})]}),(0,b.jsxs)(k,{children:[(0,b.jsx)("source",{srcSet:"".concat(J," 1x,").concat(z," 2x,").concat(G," 3x")}),(0,b.jsx)("img",{src:J,alt:"Logo GoIT"})]}),(0,b.jsx)(j,{}),(0,b.jsx)(B,{src:"".concat(a),alt:"User`s avatar"}),(0,b.jsxs)(Q,{children:[(0,b.jsxs)(S,{children:[new Intl.NumberFormat("en-US").format(t)," tweets"]}),(0,b.jsxs)(S,{children:[new Intl.NumberFormat("en-US").format(c)," Followers"]})]}),(0,b.jsx)(y,{isActive:p,onClick:function(){p?(!function(n,e){L.apply(this,arguments)}(c,e),x(c-1),A(!1)):(!function(n,e){F.apply(this,arguments)}(c,e),x(c+1),A(!0))}})]})},P=function(n){var e=n.data;return(0,b.jsx)(w,{children:e.map((function(n){var e=n.id,t=n.avatar,r=n.followers,o=n.tweets,a=n.isFollowing;return(0,b.jsx)(W,{id:e,avatar:t,followers:r,tweets:o,isFollowing:a},e)}))})},K=t(903),O=t(87),X=m.Z.div(U||(U=(0,g.Z)(["\n  width: calc(100% - 200px);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  margin: 50px auto;\n"]))),N=m.Z.label(V||(V=(0,g.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-direction: row;\n  align-items: center;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n\n  color: #4b2a99;\n"]))),q=m.Z.select(D||(D=(0,g.Z)(["\n  height: 50px;\n  padding: 10px;\n\n  background-color: #ebd8ff;\n  border-radius: 10px;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #4b2a99;\n"]))),_=(0,m.Z)(O.rU)(T||(T=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: row;\n  align-items: center;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n\n  color: #4b2a99;\n\n  &.active {\n    color: #5cd3a8;\n  }\n\n  :hover {\n    transform: scale(1.15);\n  }\n"]))),$=t(506),nn=function(n){var e=n.onChange;return(0,b.jsxs)(X,{children:[(0,b.jsxs)(_,{to:"/",children:[(0,b.jsx)($.RVs,{}),"Back home"]}),(0,b.jsx)("div",{children:(0,b.jsxs)(N,{children:["Filter",(0,b.jsxs)(q,{onChange:function(n){e(n.target.value)},children:[(0,b.jsx)("option",{value:"showAll",children:"Show All"}),(0,b.jsx)("option",{value:"follow",children:"Follow"}),(0,b.jsx)("option",{value:"following",children:"Following"})]})]})})]})},en=function(){var n=(0,h.useState)([]),e=(0,d.Z)(n,2),t=e[0],r=e[1],o=(0,h.useState)(1),a=(0,d.Z)(o,2),i=a[0],s=a[1],c=(0,h.useState)(""),x=(0,d.Z)(c,2),l=x[0],u=x[1];return(0,h.useEffect)((function(){if("follow"===l){var n=function(){var n=(0,f.Z)((0,p.Z)().mark((function n(){var e;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y(i,!1).then((function(n){return n.data}));case 2:e=n.sent,r([].concat((0,A.Z)(t),(0,A.Z)(e)));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}else if("following"===l){var e=function(){var n=(0,f.Z)((0,p.Z)().mark((function n(){var e;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y(i,!0).then((function(n){return n.data}));case 2:e=n.sent,r([].concat((0,A.Z)(t),(0,A.Z)(e)));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();e()}else{var o=function(){var n=(0,f.Z)((0,p.Z)().mark((function n(){var e;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R(i).then((function(n){return n.data}));case 2:e=n.sent,r([].concat((0,A.Z)(t),(0,A.Z)(e)));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();o()}}),[l,i]),(0,b.jsxs)(K.$,{children:[(0,b.jsx)(nn,{onChange:function(n){r([]),s(1),u(n)}}),(0,b.jsx)(P,{data:t}),(0,b.jsx)(C,{text:"Load More",isActive:!0,onClick:function(){s(i+1)}})]})}}}]);
//# sourceMappingURL=192.bcbaed69.chunk.js.map