(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{2779:function(t,e){var i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function classNames(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var s=typeof i;if("string"===s||"number"===s)t.push(i);else if(Array.isArray(i)){if(i.length){var r=classNames.apply(null,i);r&&t.push(r)}}else if("object"===s){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var a in i)n.call(i,a)&&i[a]&&t.push(a)}}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):void 0!==(i=(function(){return classNames}).apply(e,[]))&&(t.exports=i)}()},1966:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jump-matrix",function(){return i(6882)}])},6882:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return c},default:function(){return jump_matrix}});var n=i(2322),s=i(2779),r=i.n(s),a=i(2784);let JumpMatrix=class JumpMatrix{isSolved(){return this.move===this.size**2}getRandomUpTo(t){return Math.floor(Math.random()*t)}setStartPosition(){do this.row=this.getRandomUpTo(this.size),this.col=this.getRandomUpTo(this.size);while(null!=this.getValueAtCurrentPosition())}advandceOneMove(){this.move+=1}isPositionCandidate(t,e){return t>=0&&t<this.size&&e>=0&&e<this.size&&null==this.matrix[t][e]}getCandidateCoordinates(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return[this.row+t,this.col+e]}advancePosition(t,e){return this.setCurrentPosition(t,e),this.advandceOneMove(),this.setValueAtCurrentPosition(),this}advance(){for(;this.move<this.size**2;){let t=Array(8).fill(!1),e=!1,i=-1,n=-1;do{let s=this.getRandomUpTo(8);switch(s){case 0:[i,n]=this.getCandidateCoordinates(-3);break;case 1:[i,n]=this.getCandidateCoordinates(-2,2);break;case 2:[i,n]=this.getCandidateCoordinates(0,3);break;case 3:[i,n]=this.getCandidateCoordinates(2,2);break;case 4:[i,n]=this.getCandidateCoordinates(3);break;case 5:[i,n]=this.getCandidateCoordinates(2,-2);break;case 6:[i,n]=this.getCandidateCoordinates(0,-3);break;case 7:[i,n]=this.getCandidateCoordinates(-2,-2)}!t[s]&&this.isPositionCandidate(i,n)&&(this.advancePosition(i,n),e=!0),t[s]=!0}while(!e&&t.includes(!1));if(!t.includes(!1)&&!e)throw Error("Cannot move anymore")}}getValueAtCurrentPosition(){return this.matrix[this.row][this.col]}setCurrentPosition(t,e){return this.row=t,this.col=e,this}setValueAtCurrentPosition(){return this.matrix[this.row][this.col]=this.move,this}playFrom(t,e){this.advandceOneMove(),this.setCurrentPosition(t,e),this.setValueAtCurrentPosition(),this.advance()}play(){this.advandceOneMove(),this.setStartPosition(),this.setValueAtCurrentPosition(),this.advance()}toString(){return this.matrix.map(t=>{let e=t.map(t=>"".concat(null==t||t<10?" ":"").concat(null==t?" ":t)).join(" ");return"[ ".concat(e," ]")}).join("\n")}getMatrix(){return this.matrix.map(t=>t.slice())}getValueAt(t,e){return this.matrix[t][e]}getMove(){return this.move}constructor(t=5){this.size=t,this.row=-1,this.col=-1,this.move=0,this.matrix=Array(this.size).fill(void 0).map(()=>Array(this.size).fill(void 0))}};var o=i(9036),l=i.n(o),u=i(5392);function _createMdxContent(t){let e=Object.assign({h2:"h2",p:"p"},(0,u.ah)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{children:"The game"}),"\n",(0,n.jsx)(e.p,{children:"This is a game I did learn in middle school, you have a 5x5 square, and you must fill the\nsquare with the numbers from 1 to 25. You can start wherever you want but you can move from cell\nto cell following these rules: moving horizontally or vertically you must jump 2 cells,\nmoving diagonally you must jump 1 cell. It seems hard but you average 19 moves before\nending."})]})}var README=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,u.ah)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(_createMdxContent,t)})):_createMdxContent(t)};let runJumpMatrix=()=>{let t,e=0,i=!1,n=0;do{t=new JumpMatrix,e+=1;try{t.play(),i=!0}catch(t){}n+=t.getMove()}while(!i);return{matrix:t,tries:e,moves:n}};var c=!0,jump_matrix=()=>{let[t,e]=(0,a.useState)(),i=null==t?void 0:t.matrix,s=null==t?void 0:t.moves,o=null==t?void 0:t.tries;(0,a.useEffect)(()=>{e(runJumpMatrix())},[]);let[u,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{setTimeout(()=>{c(!0)},250)},[i]),(0,n.jsxs)("div",{children:[(0,n.jsx)(README,{}),(0,n.jsx)("h3",{children:"Facts"}),null!=s&&null!=o&&null!=i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Total tries:"}),(0,n.jsx)("dd",{children:o}),(0,n.jsx)("dt",{children:"Average moves:"}),(0,n.jsx)("dd",{children:s/o})]}),(0,n.jsx)("table",{children:(0,n.jsx)("tbody",{children:i.getMatrix().map((t,e)=>(0,n.jsx)("tr",{children:t.map((t,e)=>(0,n.jsx)("td",{className:r()({[l().cell]:!0,[l().cell__visible]:u}),"data-c":t,children:t},"".concat(t,"-").concat(e)))},"".concat(t.toString(),"-").concat(e)))})})]}),(0,n.jsx)("p",{children:(0,n.jsx)("button",{onClick:()=>{c(!1),e(runJumpMatrix())},children:"More magic please"})})]})}},9036:function(t){t.exports={cell:"JumpMatrix_cell__ozNF8",cell__visible:"JumpMatrix_cell__visible__D8ZwP"}},5392:function(t,e,i){"use strict";i.d(e,{ah:function(){return useMDXComponents}});var n=i(2784);let s=n.createContext({});function useMDXComponents(t){let e=n.useContext(s);return n.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=1966)}),_N_E=t.O()}]);