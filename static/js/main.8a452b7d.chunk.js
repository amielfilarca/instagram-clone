(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],[,function(e,t,a){e.exports={"main-container":"PostItem_main-container__3zLUK",media:"PostItem_media__Hz1Wj","post-details":"PostItem_post-details__3Sm5i","header-border":"PostItem_header-border__gQjA2",header:"PostItem_header__2BUo_",caption:"PostItem_caption__31_GV",comments:"PostItem_comments__ih549","post-details-footer":"PostItem_post-details-footer__UdKG8","action-bar":"PostItem_action-bar__29lFT","post-details-footer-date":"PostItem_post-details-footer-date__fQDEy",comment:"PostItem_comment__Rxfqu",body:"PostItem_body__2tu8R","user-image":"PostItem_user-image__dNkqL","user-name":"PostItem_user-name__iBz2T",text:"PostItem_text__JetTB",footer:"PostItem_footer__gK2t0",date:"PostItem_date__3VJek","comment-button":"PostItem_comment-button__YBrnI",icon:"PostItem_icon__Cqb2F"}},,,,,function(e,t,a){e.exports={header:"Header_header__1VCKf",wrapper:"Header_wrapper__4Axjt","logo-button":"Header_logo-button__2v2NV",logo:"Header_logo__3_SJs",right:"Header_right__XlGVu",center:"Header_center__2-LpE",search:"Header_search__ckDys",input:"Header_input__1s5iR",button:"Header_button__3kSo_",icon:"Header_icon__2vvCF","avatar-button":"Header_avatar-button__3ecjQ",avatar:"Header_avatar__2DnQ9",dropdown:"Header_dropdown__1L4vp","dropdown-item":"Header_dropdown-item__pzPF4"}},,,,,function(e,t,a){e.exports={post:"Post_post__3eRi_",media:"Post_media__1MKAJ","post-details":"Post_post-details__sRYCO","user-image":"Post_user-image__1j0ao",details:"Post_details__3dKFz","uploader-name":"Post_uploader-name__1chH1","time-posted":"Post_time-posted__3lvXY",actions:"Post_actions__3oRHE","comment-button":"Post_comment-button__1J3B4",icon:"Post_icon__28Dh6"}},,,function(e,t,a){e.exports={container:"NewPost_container__2xhWH",form:"NewPost_form__v0txG",header:"NewPost_header__mor6s",title:"NewPost_title__3SwKb",inputs:"NewPost_inputs__1vZk5",caption:"NewPost_caption__3HDPv",file:"NewPost_file__mggh4",share:"NewPost_share__3TEzw"}},,,,,,,,,function(e,t,a){e.exports={footer:"Footer_footer__1w0lV",links:"Footer_links__2pI3S",link:"Footer_link__Xabb2",copyright:"Footer_copyright__2OWH4"}},function(e,t,a){e.exports={container:"AuthenticationPage_container__2lzXg",wrapper:"AuthenticationPage_wrapper__3U2IL",form:"AuthenticationPage_form__1VSEV",logo:"AuthenticationPage_logo__2_Oix",button:"AuthenticationPage_button__1Gudi"}},,,function(e,t,a){e.exports={"like-button":"LikeButton_like-button__1YtNj",icon:"LikeButton_icon__3-Hmh"}},function(e,t,a){e.exports={container:"HomePage_container__13Sqf",posts:"HomePage_posts__LW7Ow","add-button":"HomePage_add-button__V1liL",icon:"HomePage_icon__28mA-"}},function(e,t,a){e.exports={container:"PostPage_container__1rp6X",post:"PostPage_post__dPWE5"}},,,,function(e,t,a){e.exports=a.p+"static/media/instagram-text.8b2206ad.png"},function(e,t,a){e.exports=a.p+"static/media/comment.2bf9666a.svg"},,function(e,t,a){e.exports={container:"NewComment_container__17Brb",input:"NewComment_input__pzyUy",button:"NewComment_button__3VMog"}},,,,,,function(e,t,a){e.exports={container:"NewPostPage_container__1p9Ve","new-post":"NewPostPage_new-post__180F8"}},,,,function(e,t,a){e.exports=a.p+"static/media/home.53342693.svg"},function(e,t,a){e.exports=a.p+"static/media/search-filled.264ed428.svg"},,function(e,t,a){e.exports=a.p+"static/media/like-filled.e39a07e6.svg"},function(e,t,a){e.exports=a.p+"static/media/like.2da23ddc.svg"},,,function(e,t,a){e.exports={posts:"Posts_posts__HBDHm"}},function(e,t,a){e.exports=a.p+"static/media/add.6b59e31f.svg"},,function(e,t,a){e.exports=a(74)},,,,,function(e,t,a){},,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(45),o=a.n(c),s=(a(61),a(7)),l=a(19);a(62),a(64),a(75);l.initializeApp({apiKey:"AIzaSyAvq_2YPs7aREMZURZ18PHRc5-4xClROLw",authDomain:"instagram-clone-3143a.firebaseapp.com",databaseURL:"https://instagram-clone-3143a.firebaseio.com",projectId:"instagram-clone-3143a",storageBucket:"instagram-clone-3143a.appspot.com",messagingSenderId:"140604303161",appId:"1:140604303161:web:0cb6464b75f0380b096ae8"});var i=l,m=l.auth(),u=l.firestore(),d=l.storage(),p=(l.firestore.FieldValue.serverTimestamp,a(6)),_=a.n(p),f=a(33),v=a.n(f),E=a(46),g=a.n(E),b=a(47),h=a.n(b),N=a(4);function w(){var e={};m.currentUser&&(e=m.currentUser);var t=e.photoURL,a=Object(N.f)(),c=Object(n.useState)(!1),o=Object(s.a)(c,2),l=o[0],i=o[1];Object(n.useEffect)((function(){function e(e){e.target.matches("#logout")?d():e.target.matches("#avatar")||i(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]);var u=function(){a.push("/")},d=function(){m.signOut().catch((function(e){return console.log(e)}))};return r.a.createElement("div",{className:_.a.header},r.a.createElement("div",{className:_.a.wrapper},r.a.createElement("div",{className:_.a.left},r.a.createElement("button",{onClick:u,className:_.a["logo-button"]},r.a.createElement("img",{className:_.a.logo,alt:"logo",src:v.a}))),r.a.createElement("div",{className:_.a.center},r.a.createElement("img",{className:_.a.search,alt:"search",src:h.a}),r.a.createElement("input",{className:_.a.input,type:"text",placeholder:"Search"})),r.a.createElement("div",{className:_.a.right},r.a.createElement("button",{onClick:u,className:_.a.button},r.a.createElement("img",{className:_.a.icon,alt:"home",src:g.a})),r.a.createElement("button",{onClick:function(){i(!0)},className:_.a["avatar-button"]},r.a.createElement("img",{id:"avatar",className:_.a.avatar,alt:"user",src:t})),l&&r.a.createElement("div",{className:_.a.dropdown},r.a.createElement("button",{disabled:!0,className:_.a["dropdown-item"]},"Profile"),r.a.createElement("button",{disabled:!0,className:_.a["dropdown-item"]},"Settings"),r.a.createElement("button",{onClick:d,className:_.a["dropdown-item"],id:"logout"},"Log Out")))))}var P=a(22),j=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=u.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(P.a)(Object(P.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{posts:r}},y=a(10),O=a.n(y),k=a(35),x=a(16),I=a(27),H=a.n(I),S=a(49),C=a.n(S),A=a(50),B=a.n(A);var L=function(e){var t=e.id,a=e.likedBy,c={};m.currentUser&&(c=m.currentUser);var o=c,l=o.uid,i=o.displayName,d=o.photoURL,p=u.collection("posts").doc(t),_=Object(n.useState)(!1),f=Object(s.a)(_,2),v=f[0],E=f[1];Object(n.useEffect)((function(){a.filter((function(e){return e.uid===l})).length>0?E(!0):E(!1)}),[a,l]);var g=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(k.a)(a),[{uid:l,user:i,userImage:d,createdAt:new Date}]),e.next=3,p.update({likedBy:t});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.filter((function(e){return e.uid!==l})),e.next=3,p.update({likedBy:t});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,v&&r.a.createElement("button",{className:H.a["like-button"],onClick:b},r.a.createElement("img",{className:H.a.icon,alt:"Like",src:C.a})),!v&&r.a.createElement("button",{className:H.a["like-button"],onClick:g},r.a.createElement("img",{className:H.a.icon,alt:"Like",src:B.a})))},U=a(11),R=a.n(U),D=a(78),F=a(80),V=a(34),z=a.n(V),W=a(51),G=a.n(W);var K=function(){var e=Object(N.h)(),t=Object(N.g)(),a=Object(N.f)(),r=Object(N.i)();return Object(n.useMemo)((function(){return{push:a.push,replace:a.replace,pathname:t.pathname,query:Object(P.a)(Object(P.a)({},G.a.parse(t.search)),e),match:r,location:t,history:a}}),[e,r,t,a])};function J(e){var t=e.caption,a=e.url;return r.a.createElement("img",{className:R.a.media,alt:t,src:a})}function q(e){var t=e.url,a=e.type;return r.a.createElement("video",{className:R.a.media,autoPlay:!0,loop:!0},r.a.createElement("source",{src:t,type:a}))}function T(e){var t,a=e.post,n=a.caption,c=a.createdAt,o=a.id,s=a.url,l=a.user,i=a.userImage,m=a.type,u=a.likedBy,d=K();return r.a.createElement("div",{className:R.a.post},/image/g.test(m)&&r.a.createElement(J,{caption:n,url:s}),/video/g.test(m)&&r.a.createElement(q,{url:s,type:m}),r.a.createElement("div",{className:R.a["post-details"]},r.a.createElement("img",{className:R.a["user-image"],alt:l,src:i}),r.a.createElement("div",{className:R.a.details},r.a.createElement("p",{className:R.a["uploader-name"]},l),r.a.createElement("p",{className:R.a["time-posted"]},"".concat((t=c.seconds,Object(D.a)(Object(F.a)(t),new Date))," ago"))),r.a.createElement("div",{className:R.a.actions},r.a.createElement(L,{className:R.a["like-button"],id:o,likedBy:u}),r.a.createElement("div",null,r.a.createElement("button",{className:R.a["comment-button"],onClick:function(e){return d.push("/post/".concat(o))}},r.a.createElement("img",{className:R.a.icon,alt:"Comment",src:z.a}))))))}var M=a(53),X=a.n(M);var Y=function(){var e=j("posts").posts;return r.a.createElement("div",{className:X.a.posts},e&&e.map((function(e){return r.a.createElement(T,{key:e.id,post:e})})))},Q=a(28),Z=a.n(Q),$=a(54),ee=a.n($),te=a(23),ae=a.n(te);function ne(){return r.a.createElement("div",{className:ae.a.footer},r.a.createElement("div",{className:ae.a.links},r.a.createElement("a",{className:ae.a.link,href:"#"},"About"),r.a.createElement("a",{className:ae.a.link,href:"https://github.com/amielfilarca/instagram-clone",target:"_blank",rel:"noopener noreferrer"},"Github")),r.a.createElement("div",{className:ae.a.copyright},"\xa9 2020 Instagram Clone by Amiel Filarca"))}var re=ne;var ce=function(){var e=Object(N.f)();return r.a.createElement("div",{className:Z.a.container},r.a.createElement(w,null),r.a.createElement("div",{className:Z.a.posts},r.a.createElement(Y,null)),r.a.createElement("button",{onClick:function(){e.push("/new-post")},className:Z.a["add-button"]},r.a.createElement("img",{className:Z.a.icon,alt:"add",src:ee.a})),r.a.createElement(re,null))},oe=a(24),se=a.n(oe);function le(){return r.a.createElement("div",{className:se.a.container},r.a.createElement("div",{className:se.a.wrapper},r.a.createElement("div",{className:se.a.form},r.a.createElement("img",{className:se.a.logo,alt:"logo",src:v.a}),r.a.createElement("button",{className:se.a.button,onClick:function(){var e=new i.auth.GoogleAuthProvider;m.signInWithPopup(e).catch((function(e){return window.alert(e)}))}},"Sign in with Google"))),r.a.createElement(ne,null))}var ie=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(null),l=Object(s.a)(o,2),i=l[0],m=l[1];return Object(n.useEffect)((function(){var t=u.collection("posts").doc(e).onSnapshot((function(e){var t=e.data();t&&c(t)}),(function(e){m(e)}));return function(){return t()}}),[e]),{post:r,error:i}},me=a(36),ue=a.n(me);var de=function(e){var t=e.id,a=Object(n.useState)(null),c=Object(s.a)(a,2),o=c[0],l=c[1],i=u.collection("posts").doc(t);if(m.currentUser){var d=m.currentUser,p=d.uid,_=d.displayName,f=d.photoURL,v=function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get().then(function(){var e=Object(x.a)(O.a.mark((function e(t){var a,n,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date,n=t.data().comments,r={comment:o,uid:p,user:_,userImage:f,createdAt:a},c={},c=n?[].concat(Object(k.a)(n),[r]):[r],e.next=7,i.update({comments:c});case 7:l(null),document.getElementById("comment-input").value=null;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:ue.a.container},r.a.createElement("input",{id:"comment-input",className:ue.a.input,onChange:function(e){l(e.target.value)},type:"text",placeholder:"Add a comment..."}),r.a.createElement("button",{disabled:null===o||""===o.trim(),className:ue.a.button,onClick:v},"Post"))}return r.a.createElement("div",null)},pe=a(1),_e=a.n(pe),fe=a(79),ve=a(76),Ee=a(77),ge=a(52);function be(e){var t=e.caption,a=e.url;return r.a.createElement("img",{className:_e.a.media,alt:t,src:a})}function he(e){var t=e.url,a=e.type;return r.a.createElement("video",{className:_e.a.media,autoPlay:!0,loop:!0},r.a.createElement("source",{src:t,type:a}))}function Ne(){var e=Object(N.h)().id,t=ie(e).post,a=function(e){var t=Object(F.a)(e),a=new Date,n=Object(fe.a)(a,t);if(n<1){var r=Object(ve.a)(a,t);if(r<1){var c=Object(Ee.a)(a,t);if(c<1){var o=Object(ge.a)(a,t);return o<1?"just now":"".concat(o,"s")}return"".concat(c,"m")}return"".concat(r,"h")}return"".concat(n,"d")};if(t&&0!==t.length){var n=t.caption,c=t.createdAt,o=t.url,s=t.user,l=t.userImage,i=t.type,m=t.comments,u=t.likedBy;return r.a.createElement("div",{className:_e.a["main-container"]},r.a.createElement("div",{className:_e.a["post-media"]},/image/g.test(i)&&r.a.createElement(be,{caption:n,url:o}),/video/g.test(i)&&r.a.createElement(he,{url:o,type:i})),r.a.createElement("div",{className:_e.a["post-details"]},r.a.createElement("div",{className:_e.a["header-border"]},r.a.createElement("div",{className:_e.a.header},r.a.createElement("img",{className:_e.a["user-image"],alt:s,src:l}),r.a.createElement("div",{className:_e.a.body},r.a.createElement("p",{className:_e.a["user-name"]},s)))),r.a.createElement("div",{className:_e.a.comments},n&&r.a.createElement("div",{className:_e.a.caption},r.a.createElement("img",{className:_e.a["user-image"],alt:s,src:l}),r.a.createElement("div",{className:_e.a.body},r.a.createElement("div",null,r.a.createElement("p",{className:_e.a["user-name"]},s),r.a.createElement("span",{className:_e.a.text},n)),r.a.createElement("div",{className:_e.a.footer},r.a.createElement("p",{className:_e.a.date},a(c.seconds))))),m&&m.map((function(e){return r.a.createElement("div",{className:_e.a.comment,key:m.indexOf(e)},r.a.createElement("img",{className:_e.a["user-image"],alt:e.user,src:e.userImage}),r.a.createElement("div",{className:_e.a.body},r.a.createElement("div",null,r.a.createElement("p",{className:_e.a["user-name"]},e.user),r.a.createElement("span",{className:_e.a.text},e.comment)),r.a.createElement("div",{className:_e.a.footer},r.a.createElement("p",{className:_e.a.date},a(e.createdAt.seconds)))))}))),r.a.createElement("div",{className:_e.a["post-details-footer"]},r.a.createElement("div",{className:_e.a["action-bar"]},r.a.createElement(L,{id:e,likedBy:u}),r.a.createElement("button",{onClick:function(){document.getElementById("comment-input").focus()},className:_e.a["comment-button"]},r.a.createElement("img",{className:_e.a.icon,alt:"Comment",src:z.a}))),c&&r.a.createElement("p",{className:_e.a["post-details-footer-date"]},function(e){var t=Object(F.a)(e),a=new Date;return"".concat(Object(D.a)(t,a)," ago")}(c.seconds)),r.a.createElement(de,{id:e}))))}return r.a.createElement("div",null,r.a.createElement("h1",null,"Post not found."))}var we=a(29),Pe=a.n(we);function je(){return r.a.createElement("div",{className:Pe.a.container},r.a.createElement("div",{className:Pe.a.header},r.a.createElement(w,null)),r.a.createElement("div",{className:Pe.a.post},r.a.createElement(Ne,null)),r.a.createElement("div",{className:Pe.a.footer},r.a.createElement(ne,null)))}var ye=w,Oe=a(14),ke=a.n(Oe);var xe=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),l=Object(s.a)(o,2),i=l[0],p=l[1],_=Object(n.useState)(null),f=Object(s.a)(_,2),v=f[0],E=f[1],g=Object(N.f)(),b=["image/jpeg","image/png","video/mp4","video/webm","video/ogg"];return r.a.createElement("div",{className:ke.a.container},r.a.createElement("form",{className:ke.a.form,onSubmit:function(e){if(e.preventDefault(),a&&b.includes(a.type)){var t=function(e){switch(e){case"image/jpeg":case"image/png":return"images";case"video/mp4":case"video/webm":case"video/ogg":return"videos"}}(a.type),n=d.ref(t+"/"+a.name),r=u.collection("posts"),c=n.put(a);c.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log("Upload is "+t+"% done")}),(function(e){console.log(e)}),Object(x.a)(O.a.mark((function e(){var t,n,o,s,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=m.currentUser,o=n.uid,s=n.displayName,l=n.photoURL,e.next=4,c.snapshot.ref.getDownloadURL().then((function(e){r.add({url:e,caption:i,createdAt:t,uid:o,user:s,userImage:l,type:a.type,comments:[],likedBy:[]})}));case 4:g.push("/");case 5:case"end":return e.stop()}}),e)}))))}},autoComplete:"off"},r.a.createElement("div",{className:ke.a.header},r.a.createElement("h1",{className:ke.a.title},"New Post")),r.a.createElement("div",{className:ke.a.inputs},r.a.createElement("input",{className:ke.a.caption,onChange:function(e){var t=e.target.value;t&&""!==t.trim?p(e.target.value):p(null)},type:"text",id:"caption",placeholder:"Write a caption..."}),r.a.createElement("input",{className:ke.a.file,onChange:function(e){b.includes(e.target.files[0].type)?(E(null),c(e.target.files[0])):E("Invalid file: Please select an image (jpeg/png) or a video (mp4/webm/ogg).")},type:"file",id:"file"})),r.a.createElement("input",{className:ke.a.share,type:"submit",value:"Share",disabled:v})),v&&r.a.createElement("h3",null,v))},Ie=a(42),He=a.n(Ie);var Se=function(){return r.a.createElement("div",{className:He.a.container},r.a.createElement("div",null,r.a.createElement(ye,null)),r.a.createElement("div",{className:He.a["new-post"]},r.a.createElement(xe,null)),r.a.createElement("div",null,r.a.createElement(re,null)))};var Ce=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],o=m.onAuthStateChanged((function(e){return c(!!e),function(){return o()}}),(function(e){console.log(e)}));return r.a.createElement("div",null,r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/"},!a&&r.a.createElement(le,null),a&&r.a.createElement(ce,null)),r.a.createElement(N.a,{path:"/post/:id",children:r.a.createElement(je,null)}),r.a.createElement(N.a,{path:"/new-post",children:r.a.createElement(Se,null)}),r.a.createElement(N.a,{path:"*"},r.a.createElement("h1",null,"404: Page not found"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=a(15);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae.a,null,r.a.createElement(Ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[56,1,2]]]);
//# sourceMappingURL=main.8a452b7d.chunk.js.map