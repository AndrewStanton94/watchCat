(this["webpackJsonpwatch-cat"]=this["webpackJsonpwatch-cat"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('["","&","a","and","at","for","i","in","is","it","my","of","on","the","to","with","you","your"]')},26:function(e,t,n){},27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(9),a=n.n(i),o=(n(26),n(5)),s=n(10),d=n(11),l=n(13),u=n(12),h=(n(27),n(18)),j=n(19),b=n(2),v=n(3),O=n(21),f=n(6),m=Object(f.b)({name:"videos",initialState:{videos:[]},reducers:{setVideoList:function(e,t){e.videos=t.payload},addVideos:function(e,t){e.videos=[].concat(Object(o.a)(e.videos),Object(o.a)(t.payload))}}}),x=m.actions,p=x.setVideoList,w=(x.addVideos,function(e){return e.videos.videos}),y=function(e){return e.videos.videos.filter((function(e){var t=e.video;return!isNaN(t.durationInSeconds)})).sort((function(e,t){var n=e.video,c=t.video;return n.durationInSeconds-c.durationInSeconds}))},g=m.reducer,N=n(0);function k(e){if(e){var t,n,c,r,i=e.split(":");switch(i.length){case 2:var a=Object(b.a)(i,2);c=a[0],r=a[1],t="".concat(c,"M").concat(r,"S");break;case 3:var o=Object(b.a)(i,3);n=o[0],c=o[1],r=o[2],t="".concat(n,"H").concat(c,"M").concat(r,"S")}return"PT".concat(t)}console.debug("No duration on this video")}function S(e){var t=e.video,n=t.duration,c=t.watched;return Object(N.jsxs)(N.Fragment,{children:[c&&Object(N.jsx)("span",{"aria-label":"Watched video",children:"\ud83d\udc41 "}),Object(N.jsx)("time",{dateTime:k(n),children:n})," "]})}function C(e){return"https://www.youtube.com/watch?v=".concat(e)}function T(e){var t=Object(v.c)((function(t){return function(e,t){return e.videos.videos.find((function(e){return e.video.title===t}))}(t,e.videoTitle)})).video;return Object(N.jsx)(V,{children:e.children,video:t,showDuration:e.showDuration})}function I(e){return Object(v.c)((function(t){return function(e,t){return e.videos.videos.filter((function(e){return e.video.title.toLowerCase().includes(t)}))}(t,e.searchTerm)})).map((function(t,n){var c=t.video;return Object(N.jsx)(V,{children:e.children,video:c,showDuration:e.showDuration},n)}))}function V(e){var t=e.video,n=t.title,c=t.id,r=e.showDuration;return Object(N.jsxs)("div",{className:e.classes,children:[Object(N.jsx)("span",{children:r&&Object(N.jsx)(S,{video:e.video})}),Object(N.jsx)("a",{href:C(c),children:n}),e.children]})}function L(e){var t,n,r=function(e,t,n){return Object.entries(e).filter((function(e){var c=Object(b.a)(e,2),r=c[0],i=c[1];return!t.includes(r)&&i>=n})).sort((function(e,t){var n=Object(b.a)(e,2)[1];return Object(b.a)(t,2)[1]-n}))}(e.words,O,10),i=Object(c.useState)(null!==(t=null===r||void 0===r||null===(n=r[0])||void 0===n?void 0:n[0])&&void 0!==t?t:""),a=Object(b.a)(i,2),o=a[0],s=a[1];return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{id:"commonWords",children:"Common words from video titles"}),Object(N.jsx)("div",{className:"grid gap-2r mb1",onClick:function(e){var t=e.target;"STRONG"===t.nodeName&&(t=t.parentElement);var n=t.dataset.word;s(n)},children:r.map((function(e,t){var n=Object(b.a)(e,2),c=n[0],r=n[1];return Object(N.jsxs)("button",{className:"button m0","data-word":c,type:"button",children:[Object(N.jsx)("strong",{children:c})," - ",r]},t)}))}),Object(N.jsx)(I,{searchTerm:o,showDuration:!0})]})}function W(e){var t=Object(v.c)(y);return Object(N.jsxs)("section",{id:"duration",children:[Object(N.jsx)("h2",{children:"Videos by duration"}),t.map((function(e,t){var n=e.video;return Object(N.jsx)(V,{classes:"flex gap-2r first-child-9ch",video:n,showDuration:!0},t)}))]})}var q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"attributeNames",value:function(){return Object.keys(this.props.data[0])}},{key:"renderRow",value:function(e,t,n){return Object(N.jsx)("tr",{children:t.map((function(t,n){return Object(N.jsx)("td",{children:e[t]},n)}))},n)}},{key:"renderHeaderRow",value:function(){return this.props.headers.map((function(e,t){return Object(N.jsx)("th",{children:e},t)}))}},{key:"renderTHeadAndTFoot",value:function(){var e=this.renderHeaderRow();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("thead",{children:Object(N.jsx)("tr",{children:e})}),Object(N.jsx)("tfoot",{children:Object(N.jsx)("tr",{children:e})})]})}},{key:"renderTBody",value:function(e){var t=this;return Object(N.jsx)("tbody",{children:this.props.data.map((function(n,c){return t.renderRow(n,e,c)}))})}},{key:"render",value:function(){var e=this.attributeNames();return Object(N.jsxs)("table",{children:[this.renderTHeadAndTFoot(e),this.renderTBody(e)]})}}]),n}(r.a.Component);function D(e,t){return"https://www.youtube.com/".concat(e,"/").concat(t)}function F(e){var t=e.channel,n=t.name,c=t.type,r=t.id;return Object(N.jsx)("div",{children:Object(N.jsx)("a",{href:D(c,r),children:n})})}var A=function(e){return e.map((function(e){var t=e.video,n=e.channel;return[Object(N.jsx)(V,{video:t}),Object(N.jsx)(S,{video:t}),Object(N.jsx)(F,{channel:n})]}))};function J(){var e=Object(v.c)(w);return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{id:"videos",children:"Your Videos"}),Object(N.jsx)(q,{headers:["Video","Duration","Channel"],data:A(e)})]})}var Y=Object(f.b)({name:"channels",initialState:{channels:[]},reducers:{setChannelList:function(e,t){var n=t.payload,c=Object.entries(n).sort((function(e,t){var n=Object(b.a)(e,2)[1],c=Object(b.a)(t,2)[1];return n.length-c.length}));e.channels=c},addChannels:function(e,t){e.videos=[].concat(Object(o.a)(e.videos),Object(o.a)(t.payload))}}}),R=Y.actions,B=R.setChannelList,H=(R.addChannels,function(e){return e.channels.channels.filter((function(e){return 1===Object(b.a)(e,2)[1].length}))}),M=function(e){return e.channels.channels.filter((function(e){return Object(b.a)(e,2)[1].length>1}))},E=Y.reducer;function P(){var e=Object(N.jsx)("ul",{children:Object(v.c)(H).map((function(e,t){var n=Object(b.a)(e,2),c=n[0],r=n[1];return Object(N.jsx)("li",{children:Object(N.jsx)(T,{videoTitle:r[0],children:Object(N.jsxs)("span",{children:[" by ",c]})})},t)}))}),t=Object(v.c)(M).map((function(e,t){var n=Object(b.a)(e,2),c=n[0],r=n[1];return Object(N.jsxs)("details",{open:!0,className:"mv2 multiVideoChannel",children:[Object(N.jsx)("summary",{className:"mb1",children:Object(N.jsxs)("h4",{className:"inline",children:["[x",r.length,"] ",c]})}),Object(N.jsx)("ul",{children:r.map((function(e,t){return Object(N.jsx)("li",{children:Object(N.jsx)(T,{videoTitle:e,showDuration:!0})},t)}))})]},t)})),n=function(e,t,n){document.querySelectorAll(e).forEach((function(e){return e[t]=n}))};return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{id:"channels",children:"Your Channels"}),Object(N.jsxs)("div",{className:"flex flex-equal gap-5r",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"mt0",children:"Channels with only one video"}),e]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"mt0",children:"Channels with multiple videos"}),Object(N.jsxs)("div",{className:"flex justify-evenly",children:[Object(N.jsx)("button",{type:"button",className:"button m0",onClick:function(){n(".multiVideoChannel","open",!0)},children:"Open all channel lists"}),Object(N.jsx)("button",{type:"button",className:"button m0",onClick:function(){n(".multiVideoChannel","open",!1)},children:"Close all channel lists"})]}),t]})]})]})}var G=function(e){if(e){return e.reduce((function(e,t){var n=e.channels,c=e.wordFreq,r=Object.keys(n),i=t.video,a=t.channel,o=i.title,s=function(e){var t=e.duration;if(!t)return NaN;var n=t.split(":").reverse(),c=Object(b.a)(n,3),r=c[0],i=c[1],a=c[2],o=parseInt(r);return o+=60*parseInt(i),o+(a?3600*parseInt(a):0)}(i),d=a.name;r.includes(d)?n[d].push(o):n[d]=[o];var l,u=o.toLowerCase().replaceAll(/[+?|~/()!,[\]\u2014:]|\s-\s|\.+/g," ").split(" "),v=Object(j.a)(u);try{for(v.s();!(l=v.n()).done;){var O=l.value,f=c[O]||0;c[O]=f+1}}catch(m){v.e(m)}finally{v.f()}return e.channels=n,e.videos.push({video:Object(h.a)(Object(h.a)({},i),{},{durationInSeconds:s}),channel:a}),e.wordFreq=c,e}),{channels:{},videos:[],wordFreq:{}})}};function U(e){var t,n,c,r=Object(v.b)(),i=G(e.videos),a=localStorage.getItem("videos"),o=localStorage.getItem("channels"),s=localStorage.getItem("wordFreq");if(!i&&!(a&&o&&s))return null;var d=null!==(t=null===i||void 0===i?void 0:i.videos)&&void 0!==t?t:JSON.parse(a),l=null!==(n=null===i||void 0===i?void 0:i.channels)&&void 0!==n?n:JSON.parse(o),u=null!==(c=null===i||void 0===i?void 0:i.wordFreq)&&void 0!==c?c:JSON.parse(s);return i&&(localStorage.setItem("videos",JSON.stringify(d)),localStorage.setItem("channels",JSON.stringify(l)),localStorage.setItem("wordFreq",JSON.stringify(u))),r(p(d)),r(B(l)),document.querySelector("body").classList.add("has-data"),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(L,{words:u}),Object(N.jsx)(W,{}),Object(N.jsx)(P,{}),Object(N.jsx)(J,{})]})}var $="\njavascript:( function(){\n\t".concat("\nconst sc = document.createElement('script');\nsc.src = 'https://andrewstanton94.github.io/watchCat/bookmarklet.js';\ndocument.querySelector('head').append(sc);\n","\n})();\n").replace(/\\n|\\t/,""),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={hash:void 0,addNewVideosLabel:"Add new videos"},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=document.location.hash;if(e.length){var t=decodeURIComponent(e.slice(1)),n=JSON.parse(t);this.setState({hash:n})}}},{key:"appendNewWatchListItems",value:function(e){e.preventDefault();var t=document.querySelector("#additionalWatchList");try{var n=JSON.parse(t.value);this.setState({hash:[].concat(Object(o.a)(this.state.hash),Object(o.a)(n))}),t.value="",this.setState({addNewVideosLabel:"Videos added"})}catch(c){console.warn(c)}}},{key:"loadDataFromClipboard",value:function(){var e=document.querySelector("#additionalWatchList");navigator.clipboard.readText().then((function(t){return e.value=t}))}},{key:"jumpToId",value:function(e){var t=e.target.dataset.href;document.querySelector(t).scrollIntoView()}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsxs)("header",{className:"App-header flex justify-evenly",children:[Object(N.jsxs)("div",{className:"flex flex-column",children:[Object(N.jsx)("h1",{children:"watchCat"}),Object(N.jsx)("p",{children:"Make sense of your YouTube Watch later list"})]}),Object(N.jsx)("img",{src:"/watchCat/logo.svg",alt:"logo"})]}),Object(N.jsxs)("div",{id:"first-run",className:"flex flex-equal gap-5r ",children:[Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"Set up"}),Object(N.jsx)("p",{children:"You need to add a bookmarklet (a bookmark that runs some code) to your browser. Drag the button to your bookmark bar to save it."}),Object(N.jsx)("div",{className:"flex flex-center",children:Object(N.jsx)("a",{className:"button",href:$,children:"YouTube Watch later bookmarklet"})}),Object(N.jsxs)("p",{children:["I know this isn't an elegant solution but the"," ",Object(N.jsx)("a",{href:"https://developers.google.com/youtube/v3/revision_history#january-28,-2021",rel:"no-opener no-referrer",children:"YouTube API has been broken for a while and will not be fixed."})]})]}),Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"How this works"}),Object(N.jsxs)("ol",{children:[Object(N.jsxs)("li",{children:["Go to your"," ",Object(N.jsx)("a",{href:"https://www.youtube.com/playlist?list=WL",children:"YouTube Watch later list"})]}),Object(N.jsx)("li",{children:"Scroll down to the bottom of the page. This ensures all the videos are loaded."}),Object(N.jsxs)("li",{children:["Then click the bookmarklet link. The code looks at all the URLs in the list to find the:",Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:"Video link"}),Object(N.jsx)("li",{children:"Video Name"}),Object(N.jsx)("li",{children:"Video duration"}),Object(N.jsx)("li",{children:"Channel"})]})]}),Object(N.jsx)("li",{children:"The script opens this app with the video information"})]})]})]}),Object(N.jsxs)("div",{id:"data",children:[Object(N.jsx)("nav",{className:"p2",onClick:this.jumpToId,children:Object(N.jsxs)("ul",{className:"flex list-none justify-evenly p0",children:[Object(N.jsx)("p",{"data-href":"#add",children:"Add more videos"}),Object(N.jsx)("p",{"data-href":"#commonWords",children:"Common words"}),Object(N.jsx)("p",{"data-href":"#duration",children:"Videos by duration"}),Object(N.jsx)("p",{"data-href":"#channels",children:"Your Channels"}),Object(N.jsx)("p",{"data-href":"#videos",children:"Your Videos"})]})}),Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{id:"add",children:"Add more videos"}),Object(N.jsx)("form",{onSubmit:this.appendNewWatchListItems.bind(this),children:Object(N.jsxs)("fieldset",{className:"flex flex-column",children:[Object(N.jsx)("legend",{children:"Paste the rest of your Watch list in here"}),Object(N.jsx)("button",{type:"button",onClick:this.loadDataFromClipboard,className:"button m2",children:"Load data from the clipboard"}),Object(N.jsx)("textarea",{id:"additionalWatchList",rows:"10",className:"m2"}),Object(N.jsx)("button",{className:"button m2",children:this.state.addNewVideosLabel})]})})]}),Object(N.jsx)(U,{videos:this.state.hash})]})]})}}]),n}(r.a.Component),z=Object(f.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),K=z.actions,Q=(K.increment,K.decrement,K.incrementByAmount,z.reducer),X=Object(f.a)({reducer:{counter:Q,videos:g,channels:E}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(v.a,{store:X,children:Object(N.jsx)(_,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.a972fbe3.chunk.js.map