(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),o=t.n(l),c=(t(12),function(e){return e.id<=9?r.a.createElement("div",{className:"bg-light-yellow dib br4 pa3 ma2 grow fl w-20 bw2 shadow-5 "},r.a.createElement("img",{alt:"POKEMON",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/00".concat(e.id,".png")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,r.a.createElement("i",null,"Type : "),e.type))):r.a.createElement("div",{className:"bg-light-yellow dib br4 pa3 ma2 grow fl w-20 bw2 shadow-5"},r.a.createElement("img",{alt:"POKEMON",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/0".concat(e.id,".png")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,r.a.createElement("i",null,"Type : "),e.type)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(13);var i=t(3),s=t(4),m=t(6),d=t(5),u=function(e){var a=e.pokemon,t=a.map((function(e,t){return r.a.createElement("div",{className:"tc"},r.a.createElement(c,{key:t,id:a[t].id,name:a[t].name,type:a[t].type}))}));return r.a.createElement("div",{className:"tc"},t)},p=[{id:1,name:"Bulbasaur",type:"Grass/Poison"},{id:2,name:"Ivysaur",type:"Grass/Poison"},{id:3,name:"Venusaur",type:"Grass/Poison"},{id:4,name:"Charmander ",type:"Fire"},{id:5,name:"Charmeleon ",type:" Fire"},{id:6,name:"Charizard",type:"Fire/Flying"},{id:7,name:"Squirtle",type:"Water"},{id:8,name:"Wartortle",type:"Water"},{id:9,name:"Blastoise",type:"Water"},{id:10,name:"Caterpie ",type:"Bug"},{id:11,name:"Metapod",type:"Bug"},{id:12,name:"Butterpod",type:"Bug/Flying"}],h=function(e){e.seachfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba br4 b--light-yellow bg-washed-yellow",type:"search",placeholder:"search pokemons",onChange:a}))},g=(t(14),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"550px"}},e.children)}),y=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={pokemon:p,searchfield:""},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.state.pokemon.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Pokedex"),r.a.createElement(h,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(u,{pokemon:a})))}}]),t}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.1c958c26.chunk.js.map