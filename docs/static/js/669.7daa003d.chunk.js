/*! For license information please see 669.7daa003d.chunk.js.LICENSE.txt */
(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[669],{669:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return W}});var r,i=e(942),o=e(413),a=e(885),s=e(694),u=e.n(s),c=e(791),l=e(762),h=e(982);!function(t){var n,e;!function(t){t[t.N=0]="N",t[t.E=1]="E",t[t.S=2]="S",t[t.W=3]="W"}(n||(n={})),t.Orientation=n,function(t){t[t.L=0]="L",t[t.R=1]="R"}(e||(e={})),t.Direction=e,t.getOppositeOrientation=function(t){return(t+2)%4},t.getNextOrientation=function(t,n){switch(t){case e.L:return(n+3)%4;case e.R:return function(t){return(t+1)%4}(n);default:throw new Error("Unrecognized direction")}}}(r||(r={}));var f,d=e(671),v=e(144),m=e(136),w=e(104),g=function(t){(0,m.Z)(e,t);var n=(0,w.Z)(e);function e(t){var r;return(0,d.Z)(this,e),(r=n.call(this)).orientation=t,r.row=0,r.column=0,r}return(0,v.Z)(e,[{key:"move",value:function(t){switch(t){case r.Orientation.N:0===this.row?this.addRow(0):this.row-=1;break;case r.Orientation.S:this.row+=1,this.row===this.rows&&this.addRow(this.row);break;case r.Orientation.W:0===this.column?this.addColumn(0):this.column-=1;break;case r.Orientation.E:this.column+=1,this.column===this.columns&&this.addColumn(this.column);break;default:throw new Error("Unknown direction")}return this.orientation=t,this}}]),e}(function(){function t(){(0,d.Z)(this,t),this.matrix=[],this.rows=0,this.columns=0}return(0,v.Z)(t,[{key:"setContent",value:function(t,n,e){return this.ensureMatrixSize(n+1,e+1),this.matrix[n][e]=t,this}},{key:"getContent",value:function(t,n){if(t>=0&&t<this.rows&&n>=0&&n<this.columns)return this.matrix[t][n];throw new Error("ArrayIndexOutOfBoundException")}},{key:"ensureMatrixSize",value:function(t,n){for(var e=this.columns;e<n;e+=1)this.addColumn(e);for(var r=this.rows;r<t;r+=1)this.addRow(r)}},{key:"normalizeRowIndex",value:function(t){return Math.max(0,Math.min(t,this.rows))}},{key:"normalizeColumnIndex",value:function(t){return Math.max(0,Math.min(t,this.columns))}},{key:"addRow",value:function(t){for(var n=this.normalizeRowIndex(t),e=[],r=0;r<this.columns;r+=1)e.push(null);return this.matrix.splice(n,0,e),this.rows+=1,this}},{key:"addColumn",value:function(t){for(var n=this.normalizeColumnIndex(t),e=0;e<this.rows;e+=1)this.matrix[e].splice(n,0,null);return this.columns+=1,this}},{key:"getRows",value:function(){return this.rows}},{key:"getColumns",value:function(){return this.columns}},{key:"getSize",value:function(){return this.rows*this.columns}}]),t}());!function(t){var n;!function(t){t.EMPTY=" ",t.EW="\u2500",t.NS="\u2502",t.ES="\u250c",t.SW="\u2510",t.NE="\u2514",t.NW="\u2518",t.NES="\u251c",t.NSW="\u2524",t.ESW="\u252c",t.NEW="\u2534",t.NESW="\u253c",t.W="\u2574",t.N="\u2575",t.E="\u2576",t.S="\u2577"}(n||(n={})),t.Char=n;var e=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];(0,d.Z)(this,t),this.$_N=0,this.$_E=0,this.$_S=0,this.$_W=0,this.W=i,this.N=n,this.S=r,this.E=e}return(0,v.Z)(t,[{key:"W",get:function(){return 0!==this.$_W},set:function(t){this.$_W=t?8:0}},{key:"N",get:function(){return 0!==this.$_N},set:function(t){this.$_N=t?1:0}},{key:"S",get:function(){return 0!==this.$_S},set:function(t){this.$_S=t?4:0}},{key:"E",get:function(){return 0!==this.$_E},set:function(t){this.$_E=t?2:0}},{key:"unite",value:function(n){return new t(this.N||n.N,this.E||n.E,this.S||n.S,this.W||n.W)}},{key:"intersecate",value:function(n){return new t(this.N&&n.N,this.E&&n.E,this.S&&n.S,this.W&&n.W)}},{key:"negate",value:function(){return new t(!this.N,!this.E,!this.S,!this.W)}},{key:"toString",value:function(){switch(this.$_W|this.$_N|this.$_S|this.$_E){case 0:return n.EMPTY;case 1:return n.N;case 2:return n.E;case 3:return n.NE;case 4:return n.S;case 5:return n.NS;case 6:return n.ES;case 7:return n.NES;case 8:return n.W;case 9:return n.NW;case 10:return n.EW;case 11:return n.NEW;case 12:return n.SW;case 13:return n.NSW;case 14:return n.ESW;case 15:return n.NESW;default:throw new Error("Unrecognized symbol")}}}]),t}();t.Line=e,t.getLine=function(t){var r;switch(t){case n.EMPTY:r=0;break;case n.N:r=1;break;case n.E:r=2;break;case n.NE:r=3;break;case n.S:r=4;break;case n.NS:r=5;break;case n.ES:r=6;break;case n.NES:r=7;break;case n.W:r=8;break;case n.NW:r=9;break;case n.EW:r=10;break;case n.NEW:r=11;break;case n.SW:r=12;break;case n.NSW:r=13;break;case n.ESW:r=14;break;case n.NESW:r=15;break;default:throw new Error("Unrecognized char")}return new e(Boolean(1&r),Boolean(2&r),Boolean(4&r),Boolean(8&r))}}(f||(f={}));var p=function(t){(0,m.Z)(e,t);var n=(0,w.Z)(e);function e(){return(0,d.Z)(this,e),n.apply(this,arguments)}return(0,v.Z)(e,[{key:"step",value:function(t){var n,e=r.getOppositeOrientation(this.orientation),i=new f.Line(t===r.Orientation.N||e===r.Orientation.N,t===r.Orientation.E||e===r.Orientation.E,t===r.Orientation.S||e===r.Orientation.S,t===r.Orientation.W||e===r.Orientation.W);try{n=this.getContent(this.row,this.column).unite(i)}catch(o){n=i}return this.setContent(n,this.row,this.column).move(t)}},{key:"turn",value:function(t){var n=this.orientation,e=r.getNextOrientation(t,n);return this.step(e)}},{key:"toString",value:function(){return this.matrix.map((function(t){return t.map((function(t){return null!==t?t:" "})).join("")})).join("\n")}}]),e}(g),b=Symbol("L"),y=Symbol("R");function S(t){switch(t){case b:return y;case y:return b;default:throw new Error("Unknown direction")}}function k(t,n){var e=t.map(S).reverse();switch(n){case b:case y:return[].concat((0,h.Z)(t),[n],(0,h.Z)(e));default:throw new Error("Unknown direction")}}function E(t){switch(t){case b:return r.Direction.L;case y:return r.Direction.R;default:throw new Error("Unknown direction")}}function O(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:13,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.Orientation.E,i=[],o=1;o<=t;o+=1)i=k(i,n);var a,s=new p(e),u=(0,l.Z)(i);try{for(u.s();!(a=u.n()).done;){var c=a.value;s.turn(E(c))}}catch(h){u.e(h)}finally{u.f()}return s}var N={dragons__medium:"Dragons_dragons__medium__UteAl",dragons__small:"Dragons_dragons__small__Y3TYJ"},x=e(184),W=function(){var t,n=(0,c.useState)({iterations:3,fold:b,orientation:r.Orientation.E}),e=(0,a.Z)(n,2),s=e[0],l=e[1],h=function(t){switch(t.target.value){case"L":l((function(t){return(0,o.Z)((0,o.Z)({},t),{},{fold:b})}));break;case"R":l((function(t){return(0,o.Z)((0,o.Z)({},t),{},{fold:y})}))}},f=function(t){switch(t.target.value){case"N":l((function(t){return(0,o.Z)((0,o.Z)({},t),{},{orientation:r.Orientation.N})}));break;case"E":l((function(t){return(0,o.Z)((0,o.Z)({},t),{},{orientation:r.Orientation.E})}));break;case"S":l((function(t){return(0,o.Z)((0,o.Z)({},t),{},{orientation:r.Orientation.S})}));break;case"W":l((function(t){return(0,o.Z)((0,o.Z)({},t),{},{orientation:r.Orientation.W})}))}};return(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:"The Dragon fractal is a fractal obtained by (ideally) folding a piece of paper in half in the same direction for a number of times. The figure is obtained by unfolding every fold at 90\xb0. I was obsessed with this picture since I saw it at the beginning of the chapters in Jurassic Park. Twenty years later I searched for it in the Internet and found the explanation."}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("fieldset",{children:[(0,x.jsx)("legend",{children:"Iterations"}),(0,x.jsx)("label",{htmlFor:"newDragons",children:"This will generate a dragon fractal with the specified iterations (after 15 iterations will start to considerably slow down)."}),(0,x.jsx)("input",{id:"newDragons",type:"number",onChange:function(t){var n=parseInt(t.target.value);n>0&&l((function(t){return(0,o.Z)((0,o.Z)({},t),{},{iterations:n})}))},value:s.iterations})]}),(0,x.jsxs)("fieldset",{children:[(0,x.jsx)("legend",{children:"Fold orientation"}),(0,x.jsx)("input",{type:"radio",name:"fold",id:"foldLeft",value:"L",onChange:h,checked:s.fold===b}),(0,x.jsx)("label",{htmlFor:"foldLeft",children:"Left"})," ",(0,x.jsx)("input",{type:"radio",name:"fold",id:"foldRight",value:"R",onChange:h,checked:s.fold===y}),(0,x.jsx)("label",{htmlFor:"foldRight",children:"Right"})]}),(0,x.jsxs)("fieldset",{children:[(0,x.jsx)("legend",{children:"Start direction"}),(0,x.jsx)("input",{type:"radio",name:"orientation",id:"orientationNorth",value:"N",onChange:f,checked:s.orientation===r.Orientation.N}),(0,x.jsx)("label",{htmlFor:"orientationNorth",children:"North"})," ",(0,x.jsx)("input",{type:"radio",name:"orientation",id:"orientationEast",value:"E",onChange:f,checked:s.orientation===r.Orientation.E}),(0,x.jsx)("label",{htmlFor:"orientationEast",children:"East"})," ",(0,x.jsx)("input",{type:"radio",name:"orientation",id:"orientationSouth",value:"S",onChange:f,checked:s.orientation===r.Orientation.S}),(0,x.jsx)("label",{htmlFor:"orientationSouth",children:"South"})," ",(0,x.jsx)("input",{type:"radio",name:"orientation",id:"orientationWest",value:"W",onChange:f,checked:s.orientation===r.Orientation.W}),(0,x.jsx)("label",{htmlFor:"orientationWest",children:"West"})," "]})]}),(0,x.jsx)("pre",{className:u()((t={},(0,i.Z)(t,N.dragons,!0),(0,i.Z)(t,N.dragons__medium,s.iterations>10&&s.iterations<=13),(0,i.Z)(t,N.dragons__small,s.iterations>13),t)),children:O(s.iterations,s.fold,s.orientation).toString()})]})}},694:function(t,n){var e;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var o=typeof e;if("string"===o||"number"===o)t.push(e);else if(Array.isArray(e)){if(e.length){var a=i.apply(null,e);a&&t.push(a)}}else if("object"===o){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var s in e)r.call(e,s)&&e[s]&&t.push(s)}}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(e=function(){return i}.apply(n,[]))||(t.exports=e)}()},762:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(181);function i(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=(0,r.Z)(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==e.return||e.return()}finally{if(u)throw a}}}}},942:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,{Z:function(){return r}})},413:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(942);function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}}}]);
//# sourceMappingURL=669.7daa003d.chunk.js.map