(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{102:function(e,t,n){e.exports={container:"ScoreCounter_container__uY19P"}},119:function(e,t,n){},120:function(e,t,n){e.exports={container:"GenerationPicker_container__1XJTz",genImage:"GenerationPicker_genImage__svoNz"}},130:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n(29),o=n.n(c),i=(n(119),n(9)),s=n(83),u=n.n(s),l=(n(120),n(89)),d=n.n(l),p=n.p+"static/media/Johto.8f4f72b9.svg",f=[n.p+"static/media/Kanto.15ce24f6.svg",p,n.p+"static/media/Hoenn.58ffaee0.svg",n.p+"static/media/Sinnoh.cb1e26f4.svg",n.p+"static/media/Unova.e528992a.svg",n.p+"static/media/Kalos.a1f41dc9.svg",n.p+"static/media/Alola.3cc9cbf5.svg",n.p+"static/media/Galar.77ca1589.svg"],v=n(143),m=n(104),j=n(144),b=function(e){var t,n;return Object(r.jsxs)(v.a,{className:"".concat(d.a.margin," ").concat(d.a.card),raised:!0,children:[Object(r.jsx)(m.a,{src:f[(null===(t=e.generation)||void 0===t?void 0:t.id)-1],wrapped:!0,ui:!1,alt:null===(n=e.generation)||void 0===n?void 0:n.main_region.name}),Object(r.jsx)(v.a.Content,{textAlign:"left",children:Object(r.jsxs)("h3",{children:["Highest score: ",e.highscore]})}),Object(r.jsx)(v.a.Content,{extra:!0,children:!e.isStarted&&Object(r.jsx)(j.a,{onClick:e.startGame,positive:!0,children:"Start Game"})})]})},h=n(101),g=n.n(h),_=(n(127),function(e){var t,n=function(t){e.onGenChanged(t)};return Object(r.jsx)(g.a,{slidesPerPage:4,clickToChange:!0,centered:!0,onChange:function(e){return n(e+1)},children:null===(t=e.data)||void 0===t?void 0:t.map((function(t,a){return Object(r.jsx)(b,{generation:t,onClicked:n,isStarted:e.isStarted,startGame:e.startGame,highscore:e.getHighscore(t.id)},t.name)}))})}),O=n(102),x=n.n(O),k=n(146),C=function(e){return Object(r.jsx)("div",{className:x.a.container,children:e.isLoaded&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k.a,{label:"Score",value:e.currScore}),Object(r.jsx)(k.a,{label:"Remaining",value:e.remainingScore})]})})},y=n(22),w=n.n(y),P={bug:{sprite:n.p+"static/media/bug.204df919.svg",color:"#92BC2C"},dark:{sprite:n.p+"static/media/dark.27fdc7ed.svg",color:"#595761"},dragon:{sprite:n.p+"static/media/dragon.9d32757b.svg",color:"#0C69C8"},electric:{sprite:n.p+"static/media/electric.bc35c5a3.svg",color:"#F2D94E"},fairy:{sprite:n.p+"static/media/fairy.767c2f56.svg",color:"#EE90E6"},fighting:{sprite:n.p+"static/media/fighting.f20d1bd2.svg",color:"#D3425F"},fire:{sprite:n.p+"static/media/fire.e0bd7fca.svg",color:"#FBA54C"},flying:{sprite:n.p+"static/media/flying.d1778503.svg",color:"#A1BBEC"},ghost:{sprite:n.p+"static/media/ghost.ddf26831.svg",color:"#5F6DBC"},grass:{sprite:n.p+"static/media/grass.e09623e3.svg",color:"#5FBD58"},ground:{sprite:n.p+"static/media/ground.e567f4fc.svg",color:"#DA7C4D"},ice:{sprite:n.p+"static/media/ice.cd2f9043.svg",color:"#75D0C1"},normal:{sprite:n.p+"static/media/normal.2ba66dd5.svg",color:"#A0A29F"},poison:{sprite:n.p+"static/media/poison.43956925.svg",color:"#B763CF"},psychic:{sprite:n.p+"static/media/psychic.67439878.svg",color:"#FA8581"},rock:{sprite:n.p+"static/media/rock.61a8428d.svg",color:"#C9BB8A"},steel:{sprite:n.p+"static/media/steel.cb91a92a.svg",color:"#5695A3"},water:{sprite:n.p+"static/media/water.b6d13329.svg",color:"#539DDF"}},S=function(e){var t,n,a=e.card,c=null===(t=P[null===a||void 0===a||null===(n=a.types[0])||void 0===n?void 0:n.type.name])||void 0===t?void 0:t.color;return a?Object(r.jsxs)("div",{className:w.a.container,style:c?{backgroundColor:"".concat(c,"99")}:null,onClick:function(t){return e.onClick(t,a)},children:[Object(r.jsx)("header",{className:w.a.header,children:Object(r.jsx)("span",{className:w.a.id,children:null===a||void 0===a?void 0:a.id})}),Object(r.jsx)("img",{className:w.a.image,alt:null===a||void 0===a?void 0:a.name,src:null===a||void 0===a?void 0:a.imageSrc}),Object(r.jsxs)("footer",{className:w.a.footer,children:[Object(r.jsx)(N,{card:a}),Object(r.jsx)(E,{card:a})]})]}):null},G=function(e){var t=e.card;return Object(r.jsx)("div",{className:w.a.icons,children:null===t||void 0===t?void 0:t.types.map((function(e,n){return Object(r.jsx)("div",{className:"".concat(w.a.typeIcon," ").concat(w.a[e.type.name]),children:Object(r.jsx)("img",{className:w.a.typeImg,alt:e.type.name,src:P[e.type.name].sprite},"".concat(null===t||void 0===t?void 0:t.id,"-").concat(n))},"".concat(null===t||void 0===t?void 0:t.id,"-").concat(n))}))})},E=function(e){var t=e.card;return Object(r.jsx)("div",{children:null===t||void 0===t?void 0:t.description})},N=function(e){var t=e.card;return Object(r.jsxs)("div",{className:w.a.footerHead,children:[Object(r.jsx)("span",{className:w.a.name,children:null===t||void 0===t?void 0:t.name.toUpperCase()}),Object(r.jsx)(G,{card:t})]})},A=n(92),D=n.n(A),I=n(142),F=n(148),B=(n(128),function(e){return Object(r.jsxs)(I.a,{onClose:function(){return e.resetGame(e.score)},open:e.isGameOver,closeOnEscape:!1,closeOnDimmerClick:!1,children:[Object(r.jsx)(I.a.Header,{children:"Game Over!"}),Object(r.jsx)(I.a.Content,{children:Object(r.jsxs)(I.a.Description,{children:[Object(r.jsxs)(F.a,{children:["You got a score of: ",e.score]}),e.score>e.highscore?Object(r.jsx)("p",{children:"New Highscore!"}):Object(r.jsxs)("p",{children:["You were ",e.highscore-e.score," cards off your highscore."]})]})}),Object(r.jsx)(I.a.Actions,{children:Object(r.jsx)(j.a,{content:"Continue",labelPosition:"right",icon:"checkmark",onClick:function(){return e.resetGame(e.score)},positive:!0})})]})}),H=n(147),Y=n(141),z=function(e){var t,n=function(t,n){e.onClick(n)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:D.a.displayContainer,children:Object(r.jsx)("div",{className:D.a.cardsDisplay,children:(null===(t=e.buffer)||void 0===t?void 0:t.length)>0?e.buffer.map((function(e){return Object(r.jsx)(S,{card:e,onClick:n},e.name)})):Object(r.jsx)(H.a,{active:!0,children:Object(r.jsx)(Y.a,{})})})}),Object(r.jsx)(B,{isGameOver:e.isGameOver,resetGame:e.resetGame,score:e.score,highscore:e.highscore})]})},J=n(54),L=n(8),R=n.n(L),M=n(15),T=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}};var X=function(){var e=Object(a.useRef)([]);return[function(t){console.log("Queue",t),t.forEach((function(t){e.current.push(t)}))},function(t){return e.length<t?null:e.current.splice(0,t)},e]},q=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return[n,Object(a.useCallback)((function(e,t){if(e){var n,a=[];null===(n=e[t-1])||void 0===n||n.pokemon_species.map((function(e){return a.push(e.name)})),r(a)}}),[]),function(){var e=Object(M.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(t,"/"));case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,null===n||void 0===n?void 0:n.json();case 7:return e.abrupt("return",e.sent);case 10:throw Error("404 - Couldn't find data or connect to API");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()]},K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(a.useState)(null),r=Object(i.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(!0),u=Object(i.a)(s,2),l=u[0],d=u[1];return Object(a.useEffect)((function(){(function(){var n=Object(M.a)(R.a.mark((function n(){var r,a;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.prev=1,n.next=4,fetch("https://pokeapi.co/api/v2/".concat(e,"/").concat(t?t+"/":""));case 4:if(!(r=n.sent).ok){n.next=13;break}return n.next=8,null===r||void 0===r?void 0:r.json();case 8:a=n.sent,o(a),d(!1),n.next=14;break;case 13:throw Error("404 - Couldn't find data or connect to API");case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(1),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(){return n.apply(this,arguments)}})()()}),[]),[c,l]},Q=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),o=Object(i.a)(c,2),s=o[0],u=o[1],l=K("generation"),d=Object(i.a)(l,2),p=d[0],f=d[1];Object(a.useEffect)((function(){f||function(){var e=Object(M.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,Promise.all(null===t||void 0===t||null===(n=t.results)||void 0===n?void 0:n.map(function(){var e=Object(M.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,v(t.url);case 3:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:u(1),a.sort((function(e,t){return e.id-t.id})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(p)}),[f,p]);var v=function(){var e=Object(M.a)(R.a.mark((function e(t){var n,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,null===n||void 0===n?void 0:n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw Error("Can't get generation data");case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return[u,s,n]},U=function(){var e=function(){var e=Object(M.a)(R.a.mark((function e(r,a){var c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),e.next=3,Promise.all(r.map(function(){var e=Object(M.a)(R.a.mark((function e(r){var c,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(r.name);case 2:return c=e.sent,e.next=5,n(c.varieties[0].pokemon.name);case 5:return o=e.sent,e.next=8,t(c,o,r.selected);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),t=function(){var e=Object(M.a)(R.a.mark((function e(t,n,a){var c,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c={}).name=n.name,c.id=n.id,c.types=n.types,o=n.sprites.other["official-artwork"].front_default,c.imageSrc=o,c.species=t.name,e.next=9,r(o);case 9:return c.description=t.flavor_text_entries.find((function(e){return"en"===e.language.name})).flavor_text,c.selected=a,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),n=function(){var e=Object(M.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,null===n||void 0===n?void 0:n.json();case 7:return e.abrupt("return",e.sent);case 10:throw Error("404 - Couldn't find data or connect to API");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=Object(M.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:new Promise((function(e){var n=new Image;n.src=t,n.onload=e()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[e]},V=function(){var e=Object(a.useRef)([]),t=Object(a.useRef)([]),n=Object(a.useState)(0),r=Object(i.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(0),u=Object(i.a)(s,2),l=u[0],d=u[1],p=Object(a.useCallback)((function(t){var n=t.map((function(e){return{name:e,selected:!1}}));e.current=Object(J.a)(n),d(t.length),o(0)}),[]),f=Object(a.useCallback)((function(t){var n=Object(J.a)(e.current);T(n);var r=n.splice(0,t);return e.current=n,r}),[]);return[e,t,p,function(t){t.forEach((function(t){return e.current.push(t)}))},function(e){var n=0,r=0;e.forEach((function(e){e.selected||(n++,r++,e.selected=!0),t.current.push(e)})),o((function(e){return e+n})),d((function(e){return e-r}))},f,function(e){var n=Object(J.a)(t.current);T(n);var r=n.splice(0,e);return t.current=n,r},c,l,function(){return c/l*100},function(){t.current=[],e.current=[],o(0),d(0)}]},W=function(){return[function(e,t){t>window.localStorage.getItem(e)&&window.localStorage.setItem(e,t)},function(e){var t=window.localStorage.getItem(e);return console.log("HIGHSCORE",t),t>0?t:0},function(){window.localStorage.clear()}]},Z=function(){var e=Q(),t=Object(i.a)(e,3),n=t[0],r=t[1],c=t[2],o=q(),s=Object(i.a)(o,3),u=s[0],l=s[1],d=s[2],p=X(),f=Object(i.a)(p,3),v=f[0],m=f[1],j=f[2],b=U(),h=Object(i.a)(b,1)[0],g=W(),_=Object(i.a)(g,2),O=_[0],x=_[1],k=V(),C=Object(i.a)(k,11),y=C[0],w=C[1],P=C[2],S=C[3],G=C[4],E=C[5],N=C[6],A=C[7],D=C[8],I=(C[9],C[10]),F=Object(a.useState)(!1),B=Object(i.a)(F,2),H=B[0],Y=B[1],z=Object(a.useState)(!1),L=Object(i.a)(z,2),K=L[0],Z=L[1],$=Object(a.useState)(!1),ee=Object(i.a)($,2),te=ee[0],ne=ee[1],re=Object(a.useState)([]),ae=Object(i.a)(re,2),ce=ae[0],oe=ae[1],ie=Object(a.useState)(!1),se=Object(i.a)(ie,2),ue=se[0],le=se[1],de=Object(a.useCallback)(function(){var e=Object(M.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,h(t,d);case 3:e.t1=e.sent,(0,e.t0)(e.t1),Y(!0),ne(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[h,d,v]);Object(a.useEffect)((function(){(null===u||void 0===u?void 0:u.length)>0&&P(u)}),[u,P]),Object(a.useEffect)((function(){if(K&&!H&&!te)if(ne(!0),(null===y||void 0===y?void 0:y.current.length)>=20){var e=E(20);Object(M.a)(R.a.mark((function t(){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de(e);case 2:case"end":return t.stop()}}),t)})))()}else ne(!1)}),[y,K,H,te,de,E]),Object(a.useEffect)((function(){if(K&&H&&(null===ce||void 0===ce?void 0:ce.length)<=0&&(oe(m(4)),console.log("DISPLAY",ce),(null===ce||void 0===ce?void 0:ce.length)>=4)){var e=E(4);pe(e)}}),[K,H,m,E,v,ce,d]);console.log("Buffer",j);var pe=function(){var e=Object(M.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,d);case 2:n=e.sent,K&&v(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[A,D,n,r,c,H,function(e){var t=function(e,t){var n=[],r=[];return e.forEach((function(e,a,c){return(t(e,a,c)?n:r).push(e)})),[n,r]}(ce,(function(t){return t.species!==e.species&&!0!==t.selected})),n=Object(i.a)(t,2),r=n[0],a=n[1];if(e.selected)le(!0);else{G(a.map((function(e){return{name:e.species,selected:e.selected}}))),S(r.map((function(e){return{name:e.species,selected:!1}}))),oe(m(4));var c,o=[];if((null===w||void 0===w?void 0:w.current.length)>0)(c=o=E(3)).push.apply(c,Object(J.a)(N(1)));else o=E(4);T(o),pe(o)}},ce,function(){j.current=[],Z(!0),l(c,r)},K,ue,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;j.current=[],I(),oe([]),Y(!1),ne(!1),Z(!1),le(!1),null!=e&&O(r,e)},x]};var $=function(){var e=Z(),t=Object(i.a)(e,13),n=t[0],a=t[1],c=t[2],o=t[3],s=t[4],l=t[5],d=t[6],p=t[7],f=t[8],v=t[9],m=t[10],j=t[11],b=t[12];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("header",{className:u.a.header,children:Object(r.jsx)("div",{className:u.a.title,onClick:function(){v&&j()},children:"Pokemon Memory Game"})}),Object(r.jsxs)("div",{className:u.a.app,children:[!v&&Object(r.jsx)(_,{data:s,onGenChanged:c,selectedGen:o,isStarted:v,startGame:f,getHighscore:b}),v&&Object(r.jsxs)("div",{children:[Object(r.jsx)(C,{currScore:n,remainingScore:a,isLoaded:l}),Object(r.jsx)(z,{buffer:p,onClick:d,isGameOver:m,resetGame:j,score:n,highscore:b(o)})]})]})]})};o.a.render(Object(r.jsx)($,{}),document.getElementById("root"))},22:function(e,t,n){e.exports={container:"PokemonCard_container__3eYA4",image:"PokemonCard_image__3iPS-",id:"PokemonCard_id__2xdYq",name:"PokemonCard_name__3qqJ6",footerHead:"PokemonCard_footerHead__GWjxz",icons:"PokemonCard_icons__1CBvA",header:"PokemonCard_header__1V88F",footer:"PokemonCard_footer__1_BBA",typeIcon:"PokemonCard_typeIcon__2VJDD",typeImg:"PokemonCard_typeImg__13EEF",bug:"PokemonCard_bug__2UGT0",dark:"PokemonCard_dark__lCYTc",dragon:"PokemonCard_dragon__2Yokc",electric:"PokemonCard_electric__3pX2j",fire:"PokemonCard_fire__XaIKP",fairy:"PokemonCard_fairy__D3Qzn",fighting:"PokemonCard_fighting__pA7nF",flying:"PokemonCard_flying__3VwX5",ghost:"PokemonCard_ghost__1khRN",grass:"PokemonCard_grass__YviM3",ground:"PokemonCard_ground__2ArXG",ice:"PokemonCard_ice__2Nxcb",normal:"PokemonCard_normal__D9u5P",poison:"PokemonCard_poison__peo0m",psychic:"PokemonCard_psychic__xzuST",rock:"PokemonCard_rock__3v-uk",steel:"PokemonCard_steel__24t3d",water:"PokemonCard_water__3-vNt"}},83:function(e,t,n){e.exports={app:"App_app__1PPex",header:"App_header__3x88n",title:"App_title__3i-LQ"}},89:function(e,t,n){e.exports={card:"GenerationSelect_card__3umWE",margin:"GenerationSelect_margin__3zMLW"}},92:function(e,t,n){e.exports={hidden:"CardDisplay_hidden__1veZe",cardsDisplay:"CardDisplay_cardsDisplay__15NNI",displayContainer:"CardDisplay_displayContainer__1LZuP"}}},[[130,1,2]]]);
//# sourceMappingURL=main.89afd59b.chunk.js.map