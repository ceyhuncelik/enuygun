(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(51),o=a.n(c),i=a(18),l=a(5),s=a(6),u=a(9),m=a(7),h=a(8),p=a(116),d=a(117),g=a(112),v=a(113),b="https://api.tvmaze.com/search/shows?",f="enuygun/TV_SHOW_FETCHING",E="enuygun/TV_SHOW_FETCH_SUCCESS",y="enuygun/TV_SHOW_FETCH_FAILURE";function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"batmanShowList",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},r=a+function(e){var t="";return Object.keys(e).forEach(function(a){t+=a+"="+e[a]}),t}(t);return function(t){t({type:f}),fetch(r).then(function(e){if(e.ok)return e;throw Error(e.statusText)}).then(function(e){return e.json()}).then(function(a){return n(a),t(function(e,t){return{type:E,key:e,response:t}}(e,a))}).catch(function(e){return t(function(e){return{type:y,error:e}}(e))})}}function j(e){return e.serviceReducer.toJS()}var w=a(111),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).generateList=function(e){return e?e.map(function(e){var t=a.urlParse(e.show.url);return r.a.createElement(N,Object.assign({},e.show,{pathVariable:t}))}):null},a.urlParse=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.lastIndexOf("/");return e.slice(t+1)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log(this.props.serviceReducer,"hadi bakal\u0131m hayrl\u0131s\u0131");this.generateList(this.props.data);return r.a.createElement("div",null,this.generateList(this.props.data))}}]),t}(n.Component),N=function(e){return r.a.createElement("div",{className:"items-wrap"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"img-wrap"},r.a.createElement("img",{className:"img",alt:e.name,src:e.image.medium})),r.a.createElement("div",{className:"item-content"},r.a.createElement("span",{className:"name"},e.name),r.a.createElement("br",null),r.a.createElement("span",{className:"rate"},e.rating.average||"0.0")),r.a.createElement("div",{className:"link-box"},r.a.createElement(w.a,{to:"/enuygun/about/"+e.pathVariable},"Detay"))))},x=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(O("batmanTvShowList",{q:"batman"},b))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"tv-show-list-wrap"},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(k,{data:this.props.serviceReducer.batmanTvShowList||null})))))}}]),t}(n.Component),C=Object(i.b)(function(e){return{serviceReducer:j(e)}},function(e){return{dispatch:e}})(x),S=a(19),T=a(114),R=a(57),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={query:a.props.match.params.query||null},a.generateGenres=a.generateGenres.bind(Object(S.a)(Object(S.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.dispatch(O(this.state.query,{q:this.state.query},"https://api.tvmaze.com/singlesearch/shows?",function(t){e.setState({name:t.name,summary:t.summary,url:t.url,genres:t.genres,average:t.rating.average,countryCode:t.network.country.code,countryName:t.network.country.name,image:t.image.original})}))}},{key:"generateGenres",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t="";return e.forEach(function(a,n){t+=a,n<e.length-1&&(t+=", ")}),t}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.average,c=t.countryCode,o=t.countryName,i=t.image,l=t.summary,s=t.url,u=t.genres;return r.a.createElement("div",{className:"about-page-wraper"},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(T.a,{lg:12},r.a.createElement("label",{className:"header"}," "))),r.a.createElement(v.a,{className:"row-equal-height"},r.a.createElement(T.a,{lg:4,md:4,sm:6,xs:12},r.a.createElement("div",{className:"left-box"},r.a.createElement("img",{className:"img",alt:"",src:i}))),r.a.createElement(T.a,{lg:8,md:8,sm:6,xs:12},r.a.createElement("div",{className:"right-box"},r.a.createElement("label",{className:"header"},a),r.a.createElement("div",{className:"empty1"},"  "),r.a.createElement("div",{className:"rate-country"},r.a.createElement("span",{className:"rate"},"Rating: ",n),r.a.createElement("span",{className:"country"},"Country: ",o," ",r.a.createElement("img",{alt:a,height:"24",src:"https://www.countryflags.io/"+c+"/flat/64.png"}))),r.a.createElement("div",{className:"summary"},r.a.createElement("label",{className:"summary-header"},"Summary"),r.a.createElement(R.Markup,{content:l})),r.a.createElement("div",{className:"genres"},this.generateGenres(u)),r.a.createElement("div",{className:"link-box-goBack"},r.a.createElement("a",{target:"_blank",href:s}," Go to TVmaze.")),r.a.createElement("div",{className:"link-box"},r.a.createElement("a",{role:"button",onClick:function(){return e.props.history.goBack()}}," Return Home Page")))))))}}]),t}(n.Component),L=Object(i.b)(function(e){return{serviceReducer:j(e)}},function(e){return{dispatch:e}})(_),H=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.props.serviceReducer,"hadi bakal\u0131m hayrl\u0131s\u0131"),r.a.createElement("div",{style:{width:"100%",backgroundColor:"#0f2133",position:"fixed",height:"40px",top:0,zIndex:9999}},r.a.createElement("div",{style:{lineHeight:"40px",fontSize:"20px",marginLeft:"20px",color:"#fff",fontWeight:600}},"EnUygun Study Case"))}}]),t}(n.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.props.serviceReducer,"hadi bakal\u0131m hayrl\u0131s\u0131"),r.a.createElement("div",{style:{width:"100%",backgroundColor:"#0f213333",position:"absolute",height:"20px",bottom:0,zIndex:9999}},r.a.createElement("div",{style:{lineHeight:"20px",fontSize:"12px",marginRight:"20px",color:"#fff66",textAlign:"right"}},"Ceyhun \xc7EL\u0130K"))}}]),t}(n.Component),W=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement("div",{className:"home-page-wrap"}),r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/enuygun",component:C}),r.a.createElement(d.a,{exact:!0,path:"/enuygun/about/:query",component:L})),r.a.createElement(I,null))}}]),t}(n.Component),q=(a(108),a(115)),G=a(12),z=a(59),A=a(60),M=a(34),V=a(61),J=Object(V.a)({test:"",index:0,loading:!1}),B=Object(G.createStore)(Object(G.combineReducers)({serviceReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIMPLE_ACTION":return e.merge({result:t.payload});case"TOGGLE_TODO":var a=t.index;return e.merge({index:a});case"DENEME_ACTION":var n=t.key,r=t.value,c=e.toJS();return c[n]=r,e.merge(Object(M.a)({},c));case f:return e.merge({loading:!0});case E:var o=t.key,i=t.response,l=e.toJS();return l[o]=i,e.merge(Object(M.a)({},l,{loading:!1}));case y:var s=t.error;return e.merge({error:s,loading:!1});default:return e}}}),Object(A.composeWithDevTools)(Object(G.applyMiddleware)(z.a)));function D(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return B}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.d(t,"AppStore",function(){return F});var F=D();o.a.render(r.a.createElement(q.a,null,r.a.createElement(i.a,{store:D()},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,a){e.exports=a(110)}},[[63,2,1]]]);
//# sourceMappingURL=main.aa03a8ba.chunk.js.map