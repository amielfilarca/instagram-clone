(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{1:function(e,t,a){e.exports={"main-container":"PostItem_main-container__3zLUK",media:"PostItem_media__Hz1Wj","post-details":"PostItem_post-details__3Sm5i","header-border":"PostItem_header-border__gQjA2",header:"PostItem_header__2BUo_",caption:"PostItem_caption__31_GV",comments:"PostItem_comments__ih549","post-details-footer":"PostItem_post-details-footer__UdKG8","action-bar":"PostItem_action-bar__29lFT","post-details-footer-date":"PostItem_post-details-footer-date__fQDEy",comment:"PostItem_comment__Rxfqu",body:"PostItem_body__2tu8R","user-image":"PostItem_user-image__dNkqL","user-name":"PostItem_user-name__iBz2T",text:"PostItem_text__JetTB",footer:"PostItem_footer__gK2t0",date:"PostItem_date__3VJek","comment-button":"PostItem_comment-button__YBrnI",icon:"PostItem_icon__Cqb2F"}},10:function(e,t,a){e.exports={header:"Header_header__1VCKf",wrapper:"Header_wrapper__4Axjt",logo:"Header_logo__3_SJs",right:"Header_right__XlGVu",center:"Header_center__2-LpE",search:"Header_search__ckDys",input:"Header_input__1s5iR",button:"Header_button__3kSo_",icon:"Header_icon__2vvCF","avatar-button":"Header_avatar-button__3ecjQ",avatar:"Header_avatar__2DnQ9"}},11:function(e,t,a){e.exports={post:"Post_post__3eRi_",media:"Post_media__1MKAJ","post-details":"Post_post-details__sRYCO","user-image":"Post_user-image__1j0ao",details:"Post_details__3dKFz","uploader-name":"Post_uploader-name__1chH1","time-posted":"Post_time-posted__3lvXY",actions:"Post_actions__3oRHE","comment-button":"Post_comment-button__1J3B4",icon:"Post_icon__28Dh6"}},14:function(e,t,a){e.exports={container:"AuthenticationPage_container__2lzXg",wrapper:"AuthenticationPage_wrapper__3U2IL",form:"AuthenticationPage_form__1VSEV",logo:"AuthenticationPage_logo__2_Oix",button:"AuthenticationPage_button__1Gudi",footer:"AuthenticationPage_footer__OJNK_",links:"AuthenticationPage_links__1grxi",link:"AuthenticationPage_link__2rDDz",copyright:"AuthenticationPage_copyright__2elyB"}},25:function(e,t,a){e.exports={"like-button":"LikeButton_like-button__1YtNj",icon:"LikeButton_icon__3-Hmh"}},29:function(e,t,a){e.exports=a.p+"static/media/instagram-text.8b2206ad.png"},30:function(e,t,a){e.exports=a.p+"static/media/comment.2bf9666a.svg"},32:function(e,t,a){e.exports={container:"NewComment_container__17Brb",input:"NewComment_input__pzyUy",button:"NewComment_button__3VMog"}},41:function(e,t,a){e.exports=a.p+"static/media/home.53342693.svg"},42:function(e,t,a){e.exports=a.p+"static/media/search-filled.264ed428.svg"},43:function(e,t,a){e.exports=a.p+"static/media/like-filled.e39a07e6.svg"},44:function(e,t,a){e.exports=a.p+"static/media/like.2da23ddc.svg"},48:function(e,t,a){e.exports={posts:"Posts_posts__HBDHm"}},49:function(e,t,a){e.exports={container:"HomePage_container__13Sqf"}},50:function(e,t,a){e.exports={container:"PostPage_container__1rp6X"}},52:function(e,t,a){e.exports=a(70)},57:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),o=a.n(c),s=(a(57),a(6)),i=a(18);a(58),a(60),a(71);i.initializeApp({apiKey:"AIzaSyAvq_2YPs7aREMZURZ18PHRc5-4xClROLw",authDomain:"instagram-clone-3143a.firebaseapp.com",databaseURL:"https://instagram-clone-3143a.firebaseio.com",projectId:"instagram-clone-3143a",storageBucket:"instagram-clone-3143a.appspot.com",messagingSenderId:"140604303161",appId:"1:140604303161:web:0cb6464b75f0380b096ae8"});var l=i,m=i.auth(),u=i.firestore(),d=i.storage(),p=(i.firestore.FieldValue.serverTimestamp,a(10)),_=a.n(p),f=a(29),g=a.n(f),v=a(41),E=a.n(v),h=a(42),b=a.n(h);function N(){var e=m.currentUser.photoURL;return r.a.createElement("div",{className:_.a.header},r.a.createElement("div",{className:_.a.wrapper},r.a.createElement("div",{className:_.a.left},r.a.createElement("img",{className:_.a.logo,alt:"logo",src:g.a})),r.a.createElement("div",{className:_.a.center},r.a.createElement("img",{className:_.a.search,alt:"search",src:b.a}),r.a.createElement("input",{className:_.a.input,type:"text",placeholder:"Search"})),r.a.createElement("div",{className:_.a.right},r.a.createElement("button",{className:_.a.button},r.a.createElement("img",{className:_.a.icon,alt:"home",src:E.a})),r.a.createElement("button",{className:_.a["avatar-button"]},r.a.createElement("img",{className:_.a.avatar,alt:"user",src:e})))))}var y=a(7),j=a.n(y),O=a(15);var P=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),i=Object(s.a)(o,2),l=i[0],p=i[1],_=Object(n.useState)(null),f=Object(s.a)(_,2),g=f[0],v=f[1],E=["image/jpeg","image/png","video/mp4","video/webm","video/ogg"];return r.a.createElement("div",null,r.a.createElement("h2",null,"New Post"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a&&E.includes(a.type)){var t=function(e){switch(e){case"image/jpeg":case"image/png":return"images";case"video/mp4":case"video/webm":case"video/ogg":return"videos"}}(a.type),n=d.ref(t+"/"+a.name),r=u.collection("posts"),c=n.put(a);c.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log("Upload is "+t+"% done")}),(function(e){console.log(e)}),Object(O.a)(j.a.mark((function e(){var t,n,o,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=m.currentUser,o=n.uid,s=n.displayName,i=n.photoURL,e.next=4,c.snapshot.ref.getDownloadURL().then((function(e){r.add({url:e,caption:l,createdAt:t,uid:o,user:s,userImage:i,type:a.type,comments:[],likedBy:[]})}));case 4:case"end":return e.stop()}}),e)}))))}},autoComplete:"off"},r.a.createElement("label",{htmlFor:"file"},"Choose an image"),r.a.createElement("input",{onChange:function(e){E.includes(e.target.files[0].type)?(v(null),c(e.target.files[0])):v("Invalid file: Please select an image (jpeg/png) or a video (mp4/webm/ogg).")},type:"file",id:"file"}),r.a.createElement("label",{htmlFor:"caption"},"Write a caption"),r.a.createElement("input",{onChange:function(e){p(e.target.value)},type:"text",id:"caption"}),r.a.createElement("input",{type:"submit",value:"Share",disabled:g})),g&&r.a.createElement("h3",null,g))},k=a(21),w=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=u.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(k.a)(Object(k.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{posts:r}},x=a(31),I=a(25),A=a.n(I),S=a(43),C=a.n(S),B=a(44),U=a.n(B);var H=function(e){var t=e.id,a=e.likedBy,c={};m.currentUser&&(c=m.currentUser);var o=c,i=o.uid,l=o.displayName,d=o.photoURL,p=u.collection("posts").doc(t),_=Object(n.useState)(!1),f=Object(s.a)(_,2),g=f[0],v=f[1];Object(n.useEffect)((function(){a.filter((function(e){return e.uid===i})).length>0?v(!0):v(!1)}),[a,i]);var E=function(){var e=Object(O.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(x.a)(a),[{uid:i,user:l,userImage:d,createdAt:new Date}]),e.next=3,p.update({likedBy:t});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(O.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.filter((function(e){return e.uid!==i})),e.next=3,p.update({likedBy:t});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,g&&r.a.createElement("button",{className:A.a["like-button"],onClick:h},r.a.createElement("img",{className:A.a.icon,alt:"Like",src:C.a})),!g&&r.a.createElement("button",{className:A.a["like-button"],onClick:E},r.a.createElement("img",{className:A.a.icon,alt:"Like",src:U.a})))},D=a(11),R=a.n(D),L=a(74),z=a(76),F=a(30),J=a.n(F),K=a(4),V=a(45),G=a.n(V);var q=function(){var e=Object(K.h)(),t=Object(K.g)(),a=Object(K.f)(),r=Object(K.i)();return Object(n.useMemo)((function(){return{push:a.push,replace:a.replace,pathname:t.pathname,query:Object(k.a)(Object(k.a)({},G.a.parse(t.search)),e),match:r,location:t,history:a}}),[e,r,t,a])};function M(e){var t=e.caption,a=e.url;return r.a.createElement("img",{className:R.a.media,alt:t,src:a})}function T(e){var t=e.url,a=e.type;return r.a.createElement("video",{className:R.a.media,autoPlay:!0,loop:!0},r.a.createElement("source",{src:t,type:a}))}function W(e){var t,a=e.post,n=a.caption,c=a.createdAt,o=a.id,s=a.url,i=a.user,l=a.userImage,m=a.type,u=a.likedBy,d=q();return r.a.createElement("div",{className:R.a.post},/image/g.test(m)&&r.a.createElement(M,{caption:n,url:s}),/video/g.test(m)&&r.a.createElement(T,{url:s,type:m}),r.a.createElement("div",{className:R.a["post-details"]},r.a.createElement("img",{className:R.a["user-image"],alt:i,src:l}),r.a.createElement("div",{className:R.a.details},r.a.createElement("p",{className:R.a["uploader-name"]},i),r.a.createElement("p",{className:R.a["time-posted"]},"".concat((t=c.seconds,Object(L.a)(Object(z.a)(t),new Date))," ago"))),r.a.createElement("div",{className:R.a.actions},r.a.createElement(H,{className:R.a["like-button"],id:o,likedBy:u}),r.a.createElement("div",null,r.a.createElement("button",{className:R.a["comment-button"],onClick:function(e){return d.push("/post/".concat(o))}},r.a.createElement("img",{className:R.a.icon,alt:"Comment",src:J.a}))))))}var Y=a(48),Q=a.n(Y);var X=function(){var e=w("posts").posts;return r.a.createElement("div",{className:Q.a.posts},e&&e.map((function(e){return r.a.createElement(W,{key:e.id,post:e})})))},Z=a(49),$=a.n(Z);var ee=function(){return r.a.createElement("div",{className:$.a.container},r.a.createElement(N,null),r.a.createElement(P,null),r.a.createElement(X,null))},te=a(14),ae=a.n(te);function ne(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1];m.onAuthStateChanged((function(e){c(e||null)}),(function(e){console.log(e)}))();return a?r.a.createElement("div",null,r.a.createElement("h2",null,"Authentication"),r.a.createElement("button",{onClick:function(){m.signOut().then((function(){return c(null)})).catch((function(e){return console.log(e)}))}},"Sign out")):r.a.createElement("div",{className:ae.a.container},r.a.createElement("div",{className:ae.a.wrapper},r.a.createElement("div",{className:ae.a.form},r.a.createElement("img",{className:ae.a.logo,alt:"logo",src:g.a}),r.a.createElement("button",{className:ae.a.button,onClick:function(){var e=new l.auth.GoogleAuthProvider;m.signInWithPopup(e).then((function(){return c(m.currentUser)})).catch((function(e){return console.log(e)}))}},"Sign in with Google"))),r.a.createElement("div",{className:ae.a.footer},r.a.createElement("div",{className:ae.a.links},r.a.createElement("a",{className:ae.a.link,href:"#"},"About"),r.a.createElement("a",{className:ae.a.link,href:"https://github.com/amielfilarca/instagram-clone",target:"_blank"},"Github")),r.a.createElement("div",{className:ae.a.copyright},"\xa9 2020 Instagram Clone by Amiel Filarca")))}var re=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(null),i=Object(s.a)(o,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){var t=u.collection("posts").doc(e).onSnapshot((function(e){var t=e.data();t&&c(t)}),(function(e){m(e)}));return function(){return t()}}),[e]),{post:r,error:l}},ce=a(32),oe=a.n(ce);var se=function(e){var t=e.id,a=Object(n.useState)(null),c=Object(s.a)(a,2),o=c[0],i=c[1],l=u.collection("posts").doc(t);if(m.currentUser){var d=m.currentUser,p=d.uid,_=d.displayName,f=d.photoURL,g=function(){var e=Object(O.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get().then(function(){var e=Object(O.a)(j.a.mark((function e(t){var a,n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date,n=t.data().comments,r={comment:o,uid:p,user:_,userImage:f,createdAt:a},c={},c=n?[].concat(Object(x.a)(n),[r]):[r],e.next=7,l.update({comments:c});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:oe.a.container},r.a.createElement("input",{id:"comment-input",className:oe.a.input,onChange:function(e){i(e.target.value)},type:"text",placeholder:"Add a comment..."}),r.a.createElement("button",{className:oe.a.button,onClick:g},"Post"))}return r.a.createElement("div",null)},ie=a(1),le=a.n(ie),me=a(75),ue=a(72),de=a(73),pe=a(47);function _e(e){var t=e.caption,a=e.url;return r.a.createElement("img",{className:le.a.media,alt:t,src:a})}function fe(e){var t=e.url,a=e.type;return r.a.createElement("video",{className:le.a.media,autoPlay:!0,loop:!0},r.a.createElement("source",{src:t,type:a}))}function ge(){var e=Object(K.h)().id,t=re(e).post,a=function(e){var t=Object(z.a)(e),a=new Date,n=Object(me.a)(a,t);if(n<1){var r=Object(ue.a)(a,t);if(r<1){var c=Object(de.a)(a,t);if(c<1){var o=Object(pe.a)(a,t);return o<1?"just now":"".concat(o,"s")}return"".concat(c,"m")}return"".concat(r,"h")}return"".concat(n,"d")};if(t&&0!==t.length){var n=t.caption,c=t.createdAt,o=t.url,s=t.user,i=t.userImage,l=t.type,m=t.comments,u=t.likedBy;return r.a.createElement("div",{className:le.a["main-container"]},r.a.createElement("div",{className:le.a["post-media"]},/image/g.test(l)&&r.a.createElement(_e,{caption:n,url:o}),/video/g.test(l)&&r.a.createElement(fe,{url:o,type:l})),r.a.createElement("div",{className:le.a["post-details"]},r.a.createElement("div",{className:le.a["header-border"]},r.a.createElement("div",{className:le.a.header},r.a.createElement("img",{className:le.a["user-image"],alt:s,src:i}),r.a.createElement("div",{className:le.a.body},r.a.createElement("p",{className:le.a["user-name"]},s)))),r.a.createElement("div",{className:le.a.comments},n&&r.a.createElement("div",{className:le.a.caption},r.a.createElement("img",{className:le.a["user-image"],alt:s,src:i}),r.a.createElement("div",{className:le.a.body},r.a.createElement("div",null,r.a.createElement("p",{className:le.a["user-name"]},s),r.a.createElement("span",{className:le.a.text},n)),r.a.createElement("div",{className:le.a.footer},r.a.createElement("p",{className:le.a.date},a(c.seconds))))),m&&m.map((function(e){return r.a.createElement("div",{className:le.a.comment,key:m.indexOf(e)},r.a.createElement("img",{className:le.a["user-image"],alt:e.user,src:e.userImage}),r.a.createElement("div",{className:le.a.body},r.a.createElement("div",null,r.a.createElement("p",{className:le.a["user-name"]},e.user),r.a.createElement("span",{className:le.a.text},e.comment)),r.a.createElement("div",{className:le.a.footer},r.a.createElement("p",{className:le.a.date},a(e.createdAt.seconds)))))}))),r.a.createElement("div",{className:le.a["post-details-footer"]},r.a.createElement("div",{className:le.a["action-bar"]},r.a.createElement(H,{id:e,likedBy:u}),r.a.createElement("button",{onClick:function(){document.getElementById("comment-input").focus()},className:le.a["comment-button"]},r.a.createElement("img",{className:le.a.icon,alt:"Comment",src:J.a}))),c&&r.a.createElement("p",{className:le.a["post-details-footer-date"]},function(e){var t=Object(z.a)(e),a=new Date;return"".concat(Object(L.a)(t,a)," ago")}(c.seconds)),r.a.createElement(se,{id:e}))))}return r.a.createElement("div",null,r.a.createElement("h1",null,"Post not found."))}var ve=a(50),Ee=a.n(ve);function he(){return r.a.createElement("div",{className:Ee.a.container},r.a.createElement(N,null),r.a.createElement(ge,null))}var be=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return m.onAuthStateChanged((function(e){c(!!e)}),(function(e){console.log(e)})),r.a.createElement("div",null,r.a.createElement(K.c,null,r.a.createElement(K.a,{exact:!0,path:"/"},!a&&r.a.createElement(ne,null),a&&r.a.createElement(ee,null)),r.a.createElement(K.a,{path:"/post/:id",children:r.a.createElement(he,null)}),r.a.createElement(K.a,{path:"*"},r.a.createElement("h1",null,"404: Page not found"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ne=a(22);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne.a,null,r.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.dff950be.chunk.js.map