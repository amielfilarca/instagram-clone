(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{1:function(e,t,a){e.exports={"main-container":"PostItem_main-container__3zLUK",media:"PostItem_media__Hz1Wj","post-details":"PostItem_post-details__3Sm5i","header-border":"PostItem_header-border__gQjA2",header:"PostItem_header__2BUo_",caption:"PostItem_caption__31_GV",comments:"PostItem_comments__ih549","post-details-footer":"PostItem_post-details-footer__UdKG8","action-bar":"PostItem_action-bar__29lFT","post-details-footer-date":"PostItem_post-details-footer-date__fQDEy",comment:"PostItem_comment__Rxfqu",body:"PostItem_body__2tu8R","user-image":"PostItem_user-image__dNkqL","user-name":"PostItem_user-name__iBz2T",text:"PostItem_text__JetTB",footer:"PostItem_footer__gK2t0",date:"PostItem_date__3VJek","comment-button":"PostItem_comment-button__YBrnI",icon:"PostItem_icon__Cqb2F"}},10:function(e,t,a){e.exports={post:"Post_post__3eRi_",media:"Post_media__1MKAJ","post-details":"Post_post-details__sRYCO","user-image":"Post_user-image__1j0ao",details:"Post_details__3dKFz","uploader-name":"Post_uploader-name__1chH1","time-posted":"Post_time-posted__3lvXY",actions:"Post_actions__3oRHE","comment-button":"Post_comment-button__1J3B4",icon:"Post_icon__28Dh6"}},23:function(e,t,a){e.exports={"like-button":"LikeButton_like-button__1YtNj",icon:"LikeButton_icon__3-Hmh"}},27:function(e,t,a){e.exports=a.p+"static/media/comment.2bf9666a.svg"},29:function(e,t,a){e.exports={container:"NewComment_container__17Brb",input:"NewComment_input__pzyUy",button:"NewComment_button__3VMog"}},39:function(e,t,a){e.exports=a.p+"static/media/like-filled.e39a07e6.svg"},40:function(e,t,a){e.exports=a.p+"static/media/like.2da23ddc.svg"},44:function(e,t,a){e.exports={posts:"Posts_posts__HBDHm"}},45:function(e,t,a){e.exports=a(63)},50:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),o=a.n(r),s=(a(50),a(6)),i=a(4),l=a(16);a(51),a(53),a(64);l.initializeApp({apiKey:"AIzaSyAvq_2YPs7aREMZURZ18PHRc5-4xClROLw",authDomain:"instagram-clone-3143a.firebaseapp.com",databaseURL:"https://instagram-clone-3143a.firebaseio.com",projectId:"instagram-clone-3143a",storageBucket:"instagram-clone-3143a.appspot.com",messagingSenderId:"140604303161",appId:"1:140604303161:web:0cb6464b75f0380b096ae8"});var m=l,u=l.auth(),d=l.firestore(),p=l.storage();l.firestore.FieldValue.serverTimestamp;var f=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1];return u.onAuthStateChanged((function(e){r(e||null)}),(function(e){console.log(e)})),c.a.createElement("div",null,c.a.createElement("h2",null,"Authentication"),a&&c.a.createElement("img",{alt:"User",src:a.photoURL}),a&&c.a.createElement("h3",null,a.displayName," is signed in."),!a&&c.a.createElement("button",{onClick:function(){var e=new m.auth.GoogleAuthProvider;u.signInWithPopup(e).catch((function(e){return console.log(e)}))}},"Sign in with Google"),a&&c.a.createElement("button",{onClick:function(){u.signOut().catch((function(e){return console.log(e)}))}},"Sign out"))},v=a(7),_=a.n(v),E=a(13);var g=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),i=Object(s.a)(o,2),l=i[0],m=i[1],f=Object(n.useState)(null),v=Object(s.a)(f,2),g=v[0],b=v[1],h=["image/jpeg","image/png","video/mp4","video/webm","video/ogg"];return c.a.createElement("div",null,c.a.createElement("h2",null,"New Post"),c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a&&h.includes(a.type)){var t=function(e){switch(e){case"image/jpeg":case"image/png":return"images";case"video/mp4":case"video/webm":case"video/ogg":return"videos"}}(a.type),n=p.ref(t+"/"+a.name),c=d.collection("posts"),r=n.put(a);r.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log("Upload is "+t+"% done")}),(function(e){console.log(e)}),Object(E.a)(_.a.mark((function e(){var t,n,o,s,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=u.currentUser,o=n.uid,s=n.displayName,i=n.photoURL,e.next=4,r.snapshot.ref.getDownloadURL().then((function(e){c.add({url:e,caption:l,createdAt:t,uid:o,user:s,userImage:i,type:a.type,comments:[],likedBy:[]})}));case 4:case"end":return e.stop()}}),e)}))))}},autoComplete:"off"},c.a.createElement("label",{htmlFor:"file"},"Choose an image"),c.a.createElement("input",{onChange:function(e){h.includes(e.target.files[0].type)?(b(null),r(e.target.files[0])):b("Invalid file: Please select an image (jpeg/png) or a video (mp4/webm/ogg).")},type:"file",id:"file"}),c.a.createElement("label",{htmlFor:"caption"},"Write a caption"),c.a.createElement("input",{onChange:function(e){m(e.target.value)},type:"text",id:"caption"}),c.a.createElement("input",{type:"submit",value:"Share",disabled:g})),g&&c.a.createElement("h3",null,g))},b=a(19),h=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var t=d.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{posts:c}},N=a(28),j=a(23),y=a.n(j),O=a(39),P=a.n(O),k=a(40),w=a.n(k);var I=function(e){var t=e.id,a=e.likedBy,r={};u.currentUser&&(r=u.currentUser);var o=r,i=o.uid,l=o.displayName,m=o.photoURL,p=d.collection("posts").doc(t),f=Object(n.useState)(!1),v=Object(s.a)(f,2),g=v[0],b=v[1];Object(n.useEffect)((function(){a.filter((function(e){return e.uid===i})).length>0?b(!0):b(!1)}));var h=function(){var e=Object(E.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(N.a)(a),[{uid:i,user:l,userImage:m,createdAt:new Date}]),e.next=3,p.update({likedBy:t});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(E.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.filter((function(e){return e.uid!==i})),e.next=3,p.update({likedBy:t});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,g&&c.a.createElement("button",{className:y.a["like-button"],onClick:j},c.a.createElement("img",{className:y.a.icon,alt:"Like",src:P.a})),!g&&c.a.createElement("button",{className:y.a["like-button"],onClick:h},c.a.createElement("img",{className:y.a.icon,alt:"Like",src:w.a})))},x=a(10),B=a.n(x),C=a(67),S=a(69),U=a(27),A=a.n(U),R=a(41),L=a.n(R);var D=function(){var e=Object(i.h)(),t=Object(i.g)(),a=Object(i.f)(),c=Object(i.i)();return Object(n.useMemo)((function(){return{push:a.push,replace:a.replace,pathname:t.pathname,query:Object(b.a)(Object(b.a)({},L.a.parse(t.search)),e),match:c,location:t,history:a}}),[e,c,t,a])};function z(e){var t=e.caption,a=e.url;return c.a.createElement("img",{className:B.a.media,alt:t,src:a})}function H(e){var t=e.url,a=e.type;return c.a.createElement("video",{className:B.a.media,autoPlay:!0,loop:!0},c.a.createElement("source",{src:t,type:a}))}function F(e){var t,a=e.post,n=a.caption,r=a.createdAt,o=a.id,s=a.url,i=a.user,l=a.userImage,m=a.type,u=a.likedBy,d=D();return c.a.createElement("div",{className:B.a.post},/image/g.test(m)&&c.a.createElement(z,{caption:n,url:s}),/video/g.test(m)&&c.a.createElement(H,{url:s,type:m}),c.a.createElement("div",{className:B.a["post-details"]},c.a.createElement("img",{className:B.a["user-image"],alt:i,src:l}),c.a.createElement("div",{className:B.a.details},c.a.createElement("p",{className:B.a["uploader-name"]},i),c.a.createElement("p",{className:B.a["time-posted"]},"".concat((t=r.seconds,Object(C.a)(Object(S.a)(t),new Date))," ago"))),c.a.createElement("div",{className:B.a.actions},c.a.createElement(I,{className:B.a["like-button"],id:o,likedBy:u}),c.a.createElement("div",null,c.a.createElement("button",{className:B.a["comment-button"],onClick:function(e){return d.push("/post/".concat(o))}},c.a.createElement("img",{className:B.a.icon,alt:"Comment",src:A.a}))))))}var J=a(44),K=a.n(J);var q=function(){var e=h("posts").posts;return c.a.createElement("div",{className:K.a.posts},e&&e.map((function(e){return c.a.createElement(F,{key:e.id,post:e})})))};var M=function(){return c.a.createElement("div",null,c.a.createElement(g,null),c.a.createElement(q,null))},T=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(null),i=Object(s.a)(o,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){var t=d.collection("posts").doc(e).onSnapshot((function(e){var t=e.data();t&&r(t)}),(function(e){m(e)}));return function(){return t()}}),[e]),{post:c,error:l}},W=a(29),Y=a.n(W);var G=function(e){var t=e.id,a=Object(n.useState)(null),r=Object(s.a)(a,2),o=r[0],i=r[1],l=d.collection("posts").doc(t);if(u.currentUser){var m=u.currentUser,p=m.uid,f=m.displayName,v=m.photoURL,g=function(){var e=Object(E.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get().then(function(){var e=Object(E.a)(_.a.mark((function e(t){var a,n,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date,n=t.data().comments,c={comment:o,uid:p,user:f,userImage:v,createdAt:a},r={},r=n?[].concat(Object(N.a)(n),[c]):[c],e.next=7,l.update({comments:r});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:Y.a.container},c.a.createElement("input",{id:"comment-input",className:Y.a.input,onChange:function(e){i(e.target.value)},type:"text",placeholder:"Add a comment..."}),c.a.createElement("button",{className:Y.a.button,onClick:g},"Post"))}return c.a.createElement("div",null)},V=a(1),Q=a.n(V),Z=a(68),X=a(65),$=a(66),ee=a(43);function te(e){var t=e.caption,a=e.url;return c.a.createElement("img",{className:Q.a.media,alt:t,src:a})}function ae(e){var t=e.url,a=e.type;return c.a.createElement("video",{className:Q.a.media,autoPlay:!0,loop:!0},c.a.createElement("source",{src:t,type:a}))}var ne=function(){var e=Object(i.h)().id,t=T(e).post,a=function(e){var t=Object(S.a)(e),a=new Date,n=Object(Z.a)(a,t);if(n<1){var c=Object(X.a)(a,t);if(c<1){var r=Object($.a)(a,t);if(r<1){var o=Object(ee.a)(a,t);return o<1?"just now":"".concat(o,"s")}return"".concat(r,"m")}return"".concat(c,"h")}return"".concat(n,"d")};if(t&&0!==t.length){var n=t.caption,r=t.createdAt,o=t.url,s=t.user,l=t.userImage,m=t.type,u=t.comments,d=t.likedBy;return c.a.createElement("div",{className:Q.a["main-container"]},c.a.createElement("div",{className:Q.a["post-media"]},/image/g.test(m)&&c.a.createElement(te,{caption:n,url:o}),/video/g.test(m)&&c.a.createElement(ae,{url:o,type:m})),c.a.createElement("div",{className:Q.a["post-details"]},c.a.createElement("div",{className:Q.a["header-border"]},c.a.createElement("div",{className:Q.a.header},c.a.createElement("img",{className:Q.a["user-image"],alt:s,src:l}),c.a.createElement("div",{className:Q.a.body},c.a.createElement("p",{className:Q.a["user-name"]},s)))),c.a.createElement("div",{className:Q.a.caption},c.a.createElement("img",{className:Q.a["user-image"],alt:s,src:l}),c.a.createElement("div",{className:Q.a.body},c.a.createElement("div",null,c.a.createElement("p",{className:Q.a["user-name"]},s),c.a.createElement("span",{className:Q.a.text},n)),c.a.createElement("div",{className:Q.a.footer},c.a.createElement("p",{className:Q.a.date},a(r.seconds))))),c.a.createElement("div",{className:Q.a.comments},u&&u.map((function(e){return c.a.createElement("div",{className:Q.a.comment,key:u.indexOf(e)},c.a.createElement("img",{className:Q.a["user-image"],alt:e.user,src:e.userImage}),c.a.createElement("div",{className:Q.a.body},c.a.createElement("div",null,c.a.createElement("p",{className:Q.a["user-name"]},e.user),c.a.createElement("span",{className:Q.a.text},e.comment)),c.a.createElement("div",{className:Q.a.footer},c.a.createElement("p",{className:Q.a.date},a(e.createdAt.seconds)))))}))),c.a.createElement("div",{className:Q.a["post-details-footer"]},c.a.createElement("div",{className:Q.a["action-bar"]},c.a.createElement(I,{id:e,likedBy:d}),c.a.createElement("button",{onClick:function(){document.getElementById("comment-input").focus()},className:Q.a["comment-button"]},c.a.createElement("img",{className:Q.a.icon,alt:"Comment",src:A.a}))),r&&c.a.createElement("p",{className:Q.a["post-details-footer-date"]},function(e){var t=Object(S.a)(e),a=new Date;return"".concat(Object(C.a)(t,a)," ago")}(r.seconds)),c.a.createElement(G,{id:e}))))}return c.a.createElement("div",null,c.a.createElement("h1",null,"Post not found."))};var ce=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1];return u.onAuthStateChanged((function(e){r(!!e)}),(function(e){console.log(e)})),c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},a&&c.a.createElement(M,null)),c.a.createElement(i.a,{path:"/post/:id",children:c.a.createElement(ne,null)}),c.a.createElement(i.a,{path:"*"},c.a.createElement("h1",null,"404: Page not found"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(20);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(re.a,null,c.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.7a978cbd.chunk.js.map