(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{6773:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demodogs",function(){return r(1891)}])},1891:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return c},default:function(){return demodogs}});var n=r(2322),i=r(2784);let StringTerm=class StringTerm{getStringValue(){return this.term}toString(){return this.getStringValue()}asPromise(){return Promise.resolve(this.getStringValue())}constructor(e){this.term=e}};let normalizeTerm=e=>"string"==typeof e?new StringTerm(e):e;let WeightedTerm=class WeightedTerm{get weight(){return this._weight}getStringValue(){return this.term.getStringValue()}toString(){return this.getStringValue()}asPromise(){return Promise.resolve(this.getStringValue())}constructor(e,t=0){if(this._weight=0,this.term=normalizeTerm(e),t<0)throw Error("Term weight must be >= 0");this._weight=t}};let WeightedCollection=class WeightedCollection{getRandomIndex(){let e=Math.floor(Math.random()*this.weight),t=0;for(;t<this.weights.length&&!(e<this.weights[t]);t+=1);return t}getStringValue(){return this.collection[this.getRandomIndex()].getStringValue()}toString(){return this.getStringValue()}forExpansion(){return new WeightedTerm(this,this.weight)}asPromise(){return Promise.resolve(this.getStringValue())}constructor(...e){if(this.collection=[],this.weight=0,this.weights=[],e.length<=0)throw Error("Collection must have at least one element");this.collection=e.map(e=>e instanceof WeightedTerm?e:new WeightedTerm(e)).sort((e,t)=>e.weight-t.weight),this.weights=this.collection.reduce((e,t,r)=>[...e,t.weight+(r>0?e[r-1]:0)+1],[]),this.weight=this.collection.reduce((e,t)=>e+t.weight,0)+this.collection.length}};let TermsJoiner=class TermsJoiner{withSeparator(e){return this.separator=e,this}getStringValue(){return this.parts.map(e=>e.getStringValue()).join(this.separator)}toString(){return this.getStringValue()}asPromise(){return Promise.resolve(this.getStringValue())}constructor(...e){this.separator="",this.parts=e.map(e=>"string"==typeof e?new StringTerm(e):e)}};let join=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return new TermsJoiner(...t)},pickOne=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return new WeightedCollection(...t)},weight=(e,t)=>new WeightedTerm(e,t);var o=r(5392);function _createMdxContent(e){let t=Object.assign({p:"p",a:"a"},(0,o.ah)(),e.components);return(0,n.jsxs)(t.p,{children:["This was inspired by ",(0,n.jsx)(t.a,{href:"http://polygen.org/",children:"Polygen"}),", I wanted to create\na suite of functions that could help you write a Polygen-like generative grammar.\nThe verbs are very limited but they do most of the work you need. The challenge\nfor me here was to pick out an element from a weighted collection. The\npseudo-random generator does not work very well here, too many terms are\nrepeated but it seems ok."]})}var README=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(_createMdxContent,e)})):_createMdxContent(e)};let s=join("Barbon",pickOne("e","cino")),a=join("Volp",pickOne("ino","e")),l=pickOne("Carlino","Pastore","Beagle","Mastino",weight(s,2),weight(a,2),"Shiba","Chihuahua","Lupo","Cirneco","Rottweiler","Dobermann","Pitbull","Labrador","Golden","Schnauzer","Akita","Bull","Levriero","Dalmata","Boxer","Bulldog","Jack","Alano","Basset","Bassotto","Bouledogue"),h=pickOne("Inu","Retriever","Terrier","Russell","Hound","Spaniel"),g=pickOne("Napoletano","Americano","Tedesco","Cecoslovacco","Inglese","Italiano","dell'Etna","Messicano","Australiano","Giapponese","Afghano","Francese"),u=join(l,pickOne("",weight(h,2)),pickOne("",weight(g,2))).withSeparator(" "),getDemoDogs=()=>{let e=[];for(let t=0;t<10;t+=1)e.push(u.toString().trim());return e};var c=!0,demodogs=()=>{let[e,t]=(0,i.useState)(),handleDemoDogs=()=>{t(getDemoDogs())};return(0,i.useEffect)(()=>{handleDemoDogs()},[]),(0,n.jsxs)("div",{children:[(0,n.jsx)(README,{}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Dog breeds"}),null!=e&&(0,n.jsx)("ul",{children:e.map(e=>(0,n.jsx)("li",{children:e},e))}),(0,n.jsx)("p",{children:(0,n.jsx)("button",{onClick:handleDemoDogs,children:"Gimme more dog breeds"})})]})]})}},5392:function(e,t,r){"use strict";r.d(t,{ah:function(){return useMDXComponents}});var n=r(2784);let i=n.createContext({});function useMDXComponents(e){let t=n.useContext(i);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6773)}),_N_E=e.O()}]);