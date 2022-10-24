"use strict";(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[661],{661:function(t,n,e){e.r(n),e.d(n,{default:function(){return R}});var r=e(885),i=e(791),o=e(181);function a(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=(0,o.Z)(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==e.return||e.return()}finally{if(u)throw a}}}}var s,u=e(982);!function(t){var n,e;!function(t){t[t.N=0]="N",t[t.E=1]="E",t[t.S=2]="S",t[t.W=3]="W"}(n||(n={})),t.Orientation=n,function(t){t[t.L=0]="L",t[t.R=1]="R"}(e||(e={})),t.Direction=e,t.getOppositeOrientation=function(t){return(t+2)%4},t.getNextOrientation=function(t,n){switch(t){case e.L:return(n+3)%4;case e.R:return function(t){return(t+1)%4}(n);default:throw new Error("Unrecognized direction")}}}(s||(s={}));var c,h=e(671),l=e(144),f=e(136),v=e(104),d=function(){function t(){(0,h.Z)(this,t),this.matrix=[],this.rows=0,this.columns=0}return(0,l.Z)(t,[{key:"setContent",value:function(t,n,e){return this.ensureMatrixSize(n+1,e+1),this.matrix[n][e]=t,this}},{key:"getContent",value:function(t,n){if(t>=0&&t<this.rows&&n>=0&&n<this.columns)return this.matrix[t][n];throw new Error("ArrayIndexOutOfBoundException")}},{key:"ensureMatrixSize",value:function(t,n){for(var e=this.columns;e<n;e+=1)this.addColumn(e);for(var r=this.rows;r<t;r+=1)this.addRow(r)}},{key:"normalizeRowIndex",value:function(t){return Math.max(0,Math.min(t,this.rows))}},{key:"normalizeColumnIndex",value:function(t){return Math.max(0,Math.min(t,this.columns))}},{key:"addRow",value:function(t){for(var n=this.normalizeRowIndex(t),e=[],r=0;r<this.columns;r+=1)e.push(null);return this.matrix.splice(n,0,e),this.rows+=1,this}},{key:"addColumn",value:function(t){for(var n=this.normalizeColumnIndex(t),e=0;e<this.rows;e+=1)this.matrix[e].splice(n,0,null);return this.columns+=1,this}},{key:"getRows",value:function(){return this.rows}},{key:"getColumns",value:function(){return this.columns}},{key:"getSize",value:function(){return this.rows*this.columns}}]),t}(),w=function(t){(0,f.Z)(e,t);var n=(0,v.Z)(e);function e(t){var r;return(0,h.Z)(this,e),(r=n.call(this)).orientation=t,r.row=0,r.column=0,r}return(0,l.Z)(e,[{key:"move",value:function(t){switch(t){case s.Orientation.N:0===this.row?this.addRow(0):this.row-=1;break;case s.Orientation.S:this.row+=1,this.row===this.rows&&this.addRow(this.row);break;case s.Orientation.W:0===this.column?this.addColumn(0):this.column-=1;break;case s.Orientation.E:this.column+=1,this.column===this.columns&&this.addColumn(this.column);break;default:throw new Error("Unknown direction")}return this.orientation=t,this}}]),e}(d);!function(t){var n;!function(t){t.EMPTY=" ",t.EW="\u2500",t.NS="\u2502",t.ES="\u250c",t.SW="\u2510",t.NE="\u2514",t.NW="\u2518",t.NES="\u251c",t.NSW="\u2524",t.ESW="\u252c",t.NEW="\u2534",t.NESW="\u253c",t.W="\u2574",t.N="\u2575",t.E="\u2576",t.S="\u2577"}(n||(n={})),t.Char=n;var e=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];(0,h.Z)(this,t),this.$_N=0,this.$_E=0,this.$_S=0,this.$_W=0,this.W=i,this.N=n,this.S=r,this.E=e}return(0,l.Z)(t,[{key:"W",get:function(){return 0!==this.$_W},set:function(t){this.$_W=t?8:0}},{key:"N",get:function(){return 0!==this.$_N},set:function(t){this.$_N=t?1:0}},{key:"S",get:function(){return 0!==this.$_S},set:function(t){this.$_S=t?4:0}},{key:"E",get:function(){return 0!==this.$_E},set:function(t){this.$_E=t?2:0}},{key:"unite",value:function(n){return new t(this.N||n.N,this.E||n.E,this.S||n.S,this.W||n.W)}},{key:"intersecate",value:function(n){return new t(this.N&&n.N,this.E&&n.E,this.S&&n.S,this.W&&n.W)}},{key:"negate",value:function(){return new t(!this.N,!this.E,!this.S,!this.W)}},{key:"toString",value:function(){switch(this.$_W|this.$_N|this.$_S|this.$_E){case 0:return n.EMPTY;case 1:return n.N;case 2:return n.E;case 3:return n.NE;case 4:return n.S;case 5:return n.NS;case 6:return n.ES;case 7:return n.NES;case 8:return n.W;case 9:return n.NW;case 10:return n.EW;case 11:return n.NEW;case 12:return n.SW;case 13:return n.NSW;case 14:return n.ESW;case 15:return n.NESW;default:throw new Error("Unrecognized symbol")}}}]),t}();t.Line=e,t.getLine=function(t){var r;switch(t){case n.EMPTY:r=0;break;case n.N:r=1;break;case n.E:r=2;break;case n.NE:r=3;break;case n.S:r=4;break;case n.NS:r=5;break;case n.ES:r=6;break;case n.NES:r=7;break;case n.W:r=8;break;case n.NW:r=9;break;case n.EW:r=10;break;case n.NEW:r=11;break;case n.SW:r=12;break;case n.NSW:r=13;break;case n.ESW:r=14;break;case n.NESW:r=15;break;default:throw new Error("Unrecognized char")}return new e(Boolean(1&r),Boolean(2&r),Boolean(4&r),Boolean(8&r))}}(c||(c={}));var m=function(t){(0,f.Z)(e,t);var n=(0,v.Z)(e);function e(){return(0,h.Z)(this,e),n.apply(this,arguments)}return(0,l.Z)(e,[{key:"step",value:function(t){var n,e=s.getOppositeOrientation(this.orientation),r=new c.Line(t===s.Orientation.N||e===s.Orientation.N,t===s.Orientation.E||e===s.Orientation.E,t===s.Orientation.S||e===s.Orientation.S,t===s.Orientation.W||e===s.Orientation.W);try{n=this.getContent(this.row,this.column).unite(r)}catch(i){n=r}return this.setContent(n,this.row,this.column).move(t)}},{key:"turn",value:function(t){var n=this.orientation,e=s.getNextOrientation(t,n);return this.step(e)}},{key:"toString",value:function(){return this.matrix.map((function(t){return t.map((function(t){return null!==t?t:" "})).join("")})).join("\n")}}]),e}(w),S=Symbol("L"),E=Symbol("R");function k(t){switch(t){case S:return E;case E:return S;default:throw new Error("Unknown direction")}}function g(t,n){var e=t.map(k).reverse();switch(n){case S:case E:return[].concat((0,u.Z)(t),[n],(0,u.Z)(e));default:throw new Error("Unknown direction")}}function y(t){switch(t){case S:return s.Direction.L;case E:return s.Direction.R;default:throw new Error("Unknown direction")}}function N(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:13,n=[],e=1;e<=t;e+=1)n=g(n,S);var r,i=new m(s.Orientation.E),o=a(n);try{for(o.s();!(r=o.n()).done;){var u=r.value;i.turn(y(u))}}catch(c){o.e(c)}finally{o.f()}return i}var b=Symbol("P"),p=Symbol("D");var W=[];function x(t){var n,e,r=[p];if(t.length){for(var i=t[t.length-1],o=0;o<i.length-1;o+=1)r.push((n=i[o],e=i[o+1],n===e?b:p));r.push(p)}t.push(r)}for(var O=0;O<Math.pow(2,8);O+=1)x(W);var _=" ",j="*";function Z(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j;return t.map((function(t){return t===p?e:n})).join("")}function C(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.pow(2,8),n=[],e=0;e<t;e+=1)x(n);return n}function $(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j;return t.map((function(t){return Z(t,n,e)})).join("\n")}var M=e(184),R=function(){var t=(0,i.useState)(8),n=(0,r.Z)(t,2),e=n[0],o=n[1],a=(0,i.useState)(13),s=(0,r.Z)(a,2),u=s[0],c=s[1];return(0,M.jsxs)("div",{children:[(0,M.jsx)("h2",{children:"Triangles"}),(0,M.jsxs)("div",{children:[(0,M.jsxs)("label",{htmlFor:"newTriangles",children:["This will generate 2",(0,M.jsx)("sup",{children:e})," variants"]}),(0,M.jsx)("input",{id:"newTriangles",type:"number",onChange:function(t){var n=parseInt(t.target.value);n>0&&o(n)},value:e})]}),(0,M.jsx)("pre",{children:$(C(Math.pow(2,e)))}),(0,M.jsx)("h2",{children:"Dragons"}),(0,M.jsxs)("div",{children:[(0,M.jsx)("label",{htmlFor:"newDragons",children:"This will generate a dragon fractal with the specified iteractions"}),(0,M.jsx)("input",{id:"newDragons",type:"number",onChange:function(t){var n=parseInt(t.target.value);n>0&&c(n)},value:u})]}),(0,M.jsx)("pre",{children:N(u).toString()})]})}}}]);
//# sourceMappingURL=661.bf84a417.chunk.js.map