"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5297],{5297:function(e){(()=>{var t={d:(e,i)=>{for(var r in i)t.o(i,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},i={};t.r(i),t.d(i,{SudokuMatrix:()=>l});class r{isValid(){for(let e=1;e<=this.tuple.length;e+=1)if(!this.tuple.some(t=>t.value===e))throw Error("Missing Value ".concat(e," in a tuple"));return!0}constructor(e){this.tuple=e}}class l{isRowValid(e){new r(this.matrix[e].map((t,i)=>({value:t,row:e,col:i}))).isValid()}isColValid(e){new r(this.matrix.map((t,i)=>({value:t[e],row:i,col:e}))).isValid()}isSquareValid(e){let t=3*Math.floor(e/3),i=e%3*3,l=[];for(let e=0;e<3;e+=1)l.concat(this.matrix[e+t].slice(i,i+3).map((r,l)=>({value:r,row:e+t,col:l+i})));new r(l).isValid()}isValid(){try{for(let e=0;e<9;e+=1)this.isRowValid(e),this.isColValid(e),this.isSquareValid(e);return!0}catch(e){return!1}}constructor(e){this.matrix=e}}e.exports=i})()}}]);