(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{3461:function(t){var o,i,r,e;self,t.exports=(i={},(o={d:(t,i)=>{for(var r in i)o.o(i,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}).r(i),o.d(i,{SudokuMatrix:()=>e}),r=function(){function t(t){this.tuple=t}return t.prototype.isValid=function(){for(var t=function(t){if(!o.tuple.some(function(o){return o.value===t}))throw Error("Missing Value ".concat(t," in a tuple"))},o=this,i=1;i<=this.tuple.length;i+=1)t(i);return!0},t}(),e=function(){function t(t){this.matrix=t}return t.prototype.isRowValid=function(t){var o=this.matrix[t].map(function(o,i){return{value:o,row:t,col:i}});new r(o).isValid()},t.prototype.isColValid=function(t){var o=this.matrix.map(function(o,i){return{value:o[t],row:i,col:t}});new r(o).isValid()},t.prototype.isSquareValid=function(t){for(var o=3*Math.floor(t/3),i=t%3*3,e=[],n=function(t){e.concat(a.matrix[t+o].slice(i,i+3).map(function(r,e){return{value:r,row:t+o,col:e+i}}))},a=this,u=0;u<3;u+=1)n(u);new r(e).isValid()},t.prototype.isValid=function(){try{for(var t=0;t<9;t+=1)this.isRowValid(t),this.isColValid(t),this.isSquareValid(t);return!0}catch(o){return!1}},t}(),i)}}]);