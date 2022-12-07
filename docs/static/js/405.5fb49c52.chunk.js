/*! For license information please see 405.5fb49c52.chunk.js.LICENSE.txt */
(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[405],{7405:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return O}});var i,r=e(4942),o=e(1413),a=e(9439),s=e(6123),u=e.n(s),c=e(7363),h=e(7762),l=e(3433);!function(t){var n,e;!function(t){t[t.N=0]="N",t[t.E=1]="E",t[t.S=2]="S",t[t.W=3]="W"}(n||(n={})),t.Orientation=n,function(t){t[t.L=0]="L",t[t.R=1]="R"}(e||(e={})),t.Direction=e,t.getOppositeOrientation=function(t){return(t+2)%4},t.getNextOrientation=function(t,n){switch(t){case e.L:return(n+3)%4;case e.R:return function(t){return(t+1)%4}(n);default:throw new Error("Unrecognized direction")}}}(i||(i={}));var f,d=e(5671),v=e(3144),m=e(136),w=e(3668),g=function(t){(0,m.Z)(e,t);var n=(0,w.Z)(e);function e(t){var i;return(0,d.Z)(this,e),(i=n.call(this)).orientation=t,i.row=0,i.column=0,i}return(0,v.Z)(e,[{key:"move",value:function(t){switch(t){case i.Orientation.N:0===this.row?this.addRow(0):this.row-=1;break;case i.Orientation.S:this.row+=1,this.row===this.rows&&this.addRow(this.row);break;case i.Orientation.W:0===this.column?this.addColumn(0):this.column-=1;break;case i.Orientation.E:this.column+=1,this.column===this.columns&&this.addColumn(this.column);break;default:throw new Error("Unknown direction")}return this.orientation=t,this}}]),e}(function(){function t(){(0,d.Z)(this,t),this.matrix=[],this.rows=0,this.columns=0}return(0,v.Z)(t,[{key:"setContent",value:function(t,n,e){return this.ensureMatrixSize(n+1,e+1),this.matrix[n][e]=t,this}},{key:"getContent",value:function(t,n){if(t>=0&&t<this.rows&&n>=0&&n<this.columns)return this.matrix[t][n];throw new Error("ArrayIndexOutOfBoundException")}},{key:"ensureMatrixSize",value:function(t,n){for(var e=this.columns;e<n;e+=1)this.addColumn(e);for(var i=this.rows;i<t;i+=1)this.addRow(i)}},{key:"normalizeRowIndex",value:function(t){return Math.max(0,Math.min(t,this.rows))}},{key:"normalizeColumnIndex",value:function(t){return Math.max(0,Math.min(t,this.columns))}},{key:"addRow",value:function(t){for(var n=this.normalizeRowIndex(t),e=[],i=0;i<this.columns;i+=1)e.push(null);return this.matrix.splice(n,0,e),this.rows+=1,this}},{key:"addColumn",value:function(t){for(var n=this.normalizeColumnIndex(t),e=0;e<this.rows;e+=1)this.matrix[e].splice(n,0,null);return this.columns+=1,this}},{key:"getRows",value:function(){return this.rows}},{key:"getColumns",value:function(){return this.columns}},{key:"getSize",value:function(){return this.rows*this.columns}}]),t}());!function(t){var n;!function(t){t.EMPTY=" ",t.EW="\u2500",t.NS="\u2502",t.ES="\u250c",t.SW="\u2510",t.NE="\u2514",t.NW="\u2518",t.NES="\u251c",t.NSW="\u2524",t.ESW="\u252c",t.NEW="\u2534",t.NESW="\u253c",t.W="\u2574",t.N="\u2575",t.E="\u2576",t.S="\u2577"}(n||(n={})),t.Char=n;var e=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];(0,d.Z)(this,t),this.$_N=0,this.$_E=0,this.$_S=0,this.$_W=0,this.W=r,this.N=n,this.S=i,this.E=e}return(0,v.Z)(t,[{key:"W",get:function(){return 0!==this.$_W},set:function(t){this.$_W=t?8:0}},{key:"N",get:function(){return 0!==this.$_N},set:function(t){this.$_N=t?1:0}},{key:"S",get:function(){return 0!==this.$_S},set:function(t){this.$_S=t?4:0}},{key:"E",get:function(){return 0!==this.$_E},set:function(t){this.$_E=t?2:0}},{key:"unite",value:function(n){return new t(this.N||n.N,this.E||n.E,this.S||n.S,this.W||n.W)}},{key:"intersecate",value:function(n){return new t(this.N&&n.N,this.E&&n.E,this.S&&n.S,this.W&&n.W)}},{key:"negate",value:function(){return new t(!this.N,!this.E,!this.S,!this.W)}},{key:"toString",value:function(){switch(this.$_W|this.$_N|this.$_S|this.$_E){case 0:return n.EMPTY;case 1:return n.N;case 2:return n.E;case 3:return n.NE;case 4:return n.S;case 5:return n.NS;case 6:return n.ES;case 7:return n.NES;case 8:return n.W;case 9:return n.NW;case 10:return n.EW;case 11:return n.NEW;case 12:return n.SW;case 13:return n.NSW;case 14:return n.ESW;case 15:return n.NESW;default:throw new Error("Unrecognized symbol")}}}]),t}();t.Line=e,t.getLine=function(t){var i;switch(t){case n.EMPTY:i=0;break;case n.N:i=1;break;case n.E:i=2;break;case n.NE:i=3;break;case n.S:i=4;break;case n.NS:i=5;break;case n.ES:i=6;break;case n.NES:i=7;break;case n.W:i=8;break;case n.NW:i=9;break;case n.EW:i=10;break;case n.NEW:i=11;break;case n.SW:i=12;break;case n.NSW:i=13;break;case n.ESW:i=14;break;case n.NESW:i=15;break;default:throw new Error("Unrecognized char")}return new e(Boolean(1&i),Boolean(2&i),Boolean(4&i),Boolean(8&i))}}(f||(f={}));var k=function(t){(0,m.Z)(e,t);var n=(0,w.Z)(e);function e(){return(0,d.Z)(this,e),n.apply(this,arguments)}return(0,v.Z)(e,[{key:"step",value:function(t){var n,e=i.getOppositeOrientation(this.orientation),r=new f.Line(t===i.Orientation.N||e===i.Orientation.N,t===i.Orientation.E||e===i.Orientation.E,t===i.Orientation.S||e===i.Orientation.S,t===i.Orientation.W||e===i.Orientation.W);try{n=this.getContent(this.row,this.column).unite(r)}catch(o){n=r}return this.setContent(n,this.row,this.column).move(t)}},{key:"turn",value:function(t){var n=this.orientation,e=i.getNextOrientation(t,n);return this.step(e)}},{key:"toString",value:function(){return this.matrix.map((function(t){return t.map((function(t){return null!==t?t:" "})).join("")})).join("\n")}}]),e}(g),S=Symbol("L"),p=Symbol("R");function E(t){switch(t){case S:return p;case p:return S;default:throw new Error("Unknown direction")}}function y(t,n){var e=t.map(E).reverse();switch(n){case S:case p:return[].concat((0,l.Z)(t),[n],(0,l.Z)(e));default:throw new Error("Unknown direction")}}function b(t){switch(t){case S:return i.Direction.L;case p:return i.Direction.R;default:throw new Error("Unknown direction")}}function N(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:13,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.Orientation.E,r=[],o=1;o<=t;o+=1)r=y(r,n);var a,s=new k(e),u=(0,h.Z)(r);try{for(u.s();!(a=u.n()).done;){var c=a.value;s.turn(b(c))}}catch(l){u.e(l)}finally{u.f()}return s}var x={dragons__medium:"UteAl",dragons__small:"Y3TYJ"},W=e(1611),Z=e(6417),O=function(){var t,n=(0,c.useState)({iterations:3,fold:S,orientation:i.Orientation.E}),e=(0,a.Z)(n,2),s=e[0],h=e[1],l=function(t){switch(t.target.value){case"L":h((function(t){return(0,o.Z)((0,o.Z)({},t),{},{fold:S})}));break;case"R":h((function(t){return(0,o.Z)((0,o.Z)({},t),{},{fold:p})}))}},f=function(t){switch(t.target.value){case"N":h((function(t){return(0,o.Z)((0,o.Z)({},t),{},{orientation:i.Orientation.N})}));break;case"E":h((function(t){return(0,o.Z)((0,o.Z)({},t),{},{orientation:i.Orientation.E})}));break;case"S":h((function(t){return(0,o.Z)((0,o.Z)({},t),{},{orientation:i.Orientation.S})}));break;case"W":h((function(t){return(0,o.Z)((0,o.Z)({},t),{},{orientation:i.Orientation.W})}))}};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(W.Z,{children:"# The Dragon Fractal\n\nThe [Dragon fractal](https://en.wikipedia.org/wiki/Dragon_curve)\nis a fractal obtained by (ideally) folding a piece of\npaper in half in the same direction for a number of times. The figure is\nobtained by unfolding every fold at 90\xb0. I was obsessed with this\npicture since I saw it at the beginning of the chapters in Jurassic\nPark. Twenty years later I searched for it in the Internet and found the\nexplanation."}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("fieldset",{children:[(0,Z.jsx)("legend",{children:"Iterations"}),(0,Z.jsx)("label",{htmlFor:"newDragons",children:"This will generate a dragon fractal with the specified iterations (after 15 iterations will start to considerably slow down)."}),(0,Z.jsx)("input",{id:"newDragons",type:"number",onChange:function(t){var n=parseInt(t.target.value);n>0&&h((function(t){return(0,o.Z)((0,o.Z)({},t),{},{iterations:n})}))},value:s.iterations})]}),(0,Z.jsxs)("fieldset",{children:[(0,Z.jsx)("legend",{children:"Fold orientation"}),(0,Z.jsx)("input",{type:"radio",name:"fold",id:"foldLeft",value:"L",onChange:l,checked:s.fold===S}),(0,Z.jsx)("label",{htmlFor:"foldLeft",children:"Left"})," ",(0,Z.jsx)("input",{type:"radio",name:"fold",id:"foldRight",value:"R",onChange:l,checked:s.fold===p}),(0,Z.jsx)("label",{htmlFor:"foldRight",children:"Right"})]}),(0,Z.jsxs)("fieldset",{children:[(0,Z.jsx)("legend",{children:"Start direction"}),(0,Z.jsx)("input",{type:"radio",name:"orientation",id:"orientationNorth",value:"N",onChange:f,checked:s.orientation===i.Orientation.N}),(0,Z.jsx)("label",{htmlFor:"orientationNorth",children:"North"})," ",(0,Z.jsx)("input",{type:"radio",name:"orientation",id:"orientationEast",value:"E",onChange:f,checked:s.orientation===i.Orientation.E}),(0,Z.jsx)("label",{htmlFor:"orientationEast",children:"East"})," ",(0,Z.jsx)("input",{type:"radio",name:"orientation",id:"orientationSouth",value:"S",onChange:f,checked:s.orientation===i.Orientation.S}),(0,Z.jsx)("label",{htmlFor:"orientationSouth",children:"South"})," ",(0,Z.jsx)("input",{type:"radio",name:"orientation",id:"orientationWest",value:"W",onChange:f,checked:s.orientation===i.Orientation.W}),(0,Z.jsx)("label",{htmlFor:"orientationWest",children:"West"})," "]})]}),(0,Z.jsx)("pre",{className:u()((t={},(0,r.Z)(t,x.dragons,!0),(0,r.Z)(t,x.dragons__medium,s.iterations>10&&s.iterations<=13),(0,r.Z)(t,x.dragons__small,s.iterations>13),t)),children:N(s.iterations,s.fold,s.orientation).toString()})]})}},1611:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var i=e(7363),r=e(7973),o=e(6417),a=(0,i.memo)((function(t){var n=t.children;return(0,o.jsx)(r.D,{components:{h1:function(){return(0,i.createElement)(i.Fragment)}},children:n})}))},6123:function(t,n){var e;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var o=typeof e;if("string"===o||"number"===o)t.push(e);else if(Array.isArray(e)){if(e.length){var a=r.apply(null,e);a&&t.push(a)}}else if("object"===o){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var s in e)i.call(e,s)&&e[s]&&t.push(s)}}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(e=function(){return r}.apply(n,[]))||(t.exports=e)}()},7762:function(t,n,e){"use strict";e.d(n,{Z:function(){return r}});var i=e(181);function r(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=(0,i.Z)(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==e.return||e.return()}finally{if(u)throw a}}}}}}]);