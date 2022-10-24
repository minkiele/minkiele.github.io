"use strict";(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[190],{190:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});var r=n(885),i=n(791),o=n(647),u=n(982),a=n(671),s=n(144),l=function(){function t(e){(0,a.Z)(this,t),this.term=e}return(0,s.Z)(t,[{key:"getStringValue",value:function(){return this.term}},{key:"toString",value:function(){return this.getStringValue()}},{key:"asPromise",value:function(){return Promise.resolve(this.getStringValue())}}]),t}(),h=function(t){return"string"===typeof t?new l(t):t},c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if((0,a.Z)(this,t),this.term=void 0,this._weight=0,this.term=h(e),n<0)throw new Error("Term weight must be >= 0");this._weight=n}return(0,s.Z)(t,[{key:"weight",get:function(){return this._weight}},{key:"getStringValue",value:function(){return this.term.getStringValue()}},{key:"toString",value:function(){return this.getStringValue()}},{key:"asPromise",value:function(){return Promise.resolve(this.getStringValue())}}]),t}(),g=function(){function t(){(0,a.Z)(this,t),this.collection=[],this.weight=0,this.weights=[];for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(n.length<=0)throw new Error("Collection must have at least one element");this.collection=n.map((function(t){return t instanceof c?t:new c(t)})).sort((function(t,e){return t.weight-e.weight})),this.weights=this.collection.reduce((function(t,e,n){return[].concat((0,u.Z)(t),[e.weight+(n>0?t[n-1]:0)+1])}),[]),this.weight=this.collection.reduce((function(t,e){return t+e.weight}),0)+this.collection.length}return(0,s.Z)(t,[{key:"getRandomIndex",value:function(){for(var t=Math.floor(Math.random()*this.weight),e=0;e<this.weights.length&&!(t<this.weights[e]);e+=1);return e}},{key:"getStringValue",value:function(){return this.collection[this.getRandomIndex()].getStringValue()}},{key:"toString",value:function(){return this.getStringValue()}},{key:"forExpansion",value:function(){return new c(this,this.weight)}},{key:"asPromise",value:function(){return Promise.resolve(this.getStringValue())}}]),t}(),f=function(){function t(){(0,a.Z)(this,t),this.parts=void 0,this.separator="";for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this.parts=n.map((function(t){return"string"===typeof t?new l(t):t}))}return(0,s.Z)(t,[{key:"withSeparator",value:function(t){return this.separator=t,this}},{key:"getStringValue",value:function(){return this.parts.map((function(t){return t.getStringValue()})).join(this.separator)}},{key:"toString",value:function(){return this.getStringValue()}},{key:"asPromise",value:function(){return Promise.resolve(this.getStringValue())}}]),t}(),v=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,o.Z)(f,e)},w=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,o.Z)(g,e)},m=function(t,e){return new c(t,e)},S=n(184),d=v("Barbon",w("e","cino")),k=v("Volp",w("ino","one")),p=w("Carlino","Pastore","Beagle","Mastino",m(d,2),m(k,2),"Shiba","Chihuahua","Lupo","Cirneco","Rottweiler","Dobermann","Pitbull","Labrador","Golden","Schnauzer","Akita","Bull","Levriero","Dalmata","Boxer","Bulldog","Jack","Alano","Basset","Bassotto","Bouledogue"),y=w("Inu","Retriever","Terrier","Russell","Hound","Spaniel"),V=w("Napoletano","Americano","Tedesco","Cecoslovacco","Inglese","Italiano","dell'Etna","Messicano","Australiano","Giapponese","Afghano","Francese"),Z=v(p,w("",m(y,2)),w("",m(V,2))).withSeparator(" "),b=function(){for(var t=[],e=0;e<10;e+=1)t.push(Z.toString().trim());return t},P=function(){var t=(0,i.useState)(b()),e=(0,r.Z)(t,2),n=e[0],o=e[1];return(0,S.jsxs)("div",{children:[(0,S.jsx)("ul",{children:n.map((function(t){return(0,S.jsx)("li",{children:t},t)}))}),(0,S.jsx)("button",{onClick:function(){o(b())},children:"Gimme more Demodogs"})]})}}}]);
//# sourceMappingURL=190.45fa6a07.chunk.js.map