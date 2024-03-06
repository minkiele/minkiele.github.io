(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{1844:function(e,t,s){Promise.resolve().then(s.bind(s,4044))},537:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(7653),a=s(1301);let r=s.n(a)().className;var i=s(288),l=s.n(i);function o(e){let{children:t}=e;return(0,n.createElement)("span",{className:"".concat(r," ").concat(l().emoji)},t)}},4044:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var n=s(7573),a=s(7129),r=s.n(a),i=s(3437),l=s(7653),o=s(1803),c=s.n(o),h=s(4569),d=s.n(h);class u{static getSnakeGameEnum(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.reduce((e,t)=>({...e,[t]:Symbol(t)}),{})}get refreshSpeed(){return 1e3/this.speed}get tailIndex(){return this.snake.length-1}getStatus(){return this.status}getNewSnake(){let e=Math.floor(u.HEIGHT/2);return d()(u.INITIAL_LENGTH,t=>({x:u.INITIAL_LENGTH+3-t,y:e,eating:!1}))}getNewAppleCoords(){if(this.snake.length!==u.AREA){let e;for(;null==e;)e={x:Math.floor(Math.random()*u.WIDTH),y:Math.floor(Math.random()*u.HEIGHT)},this.isAppleOverSnake(e)&&(e=void 0);return e}}isAppleOverSnake(e){return this.snake.reduce((t,s)=>t||s.x===e.x&&s.y===e.y,!1)}advance(){var e;this.snake.length===u.AREA&&this.stopAdvancing(u.STATUS.COMPLETE);let t=this.getSnakeHead(),s=null!==(e=this.nextDirection)&&void 0!==e?e:this.currentDirection,n=this.getNextHeadPosition(s);if(this.isHittingWall(n))this.stopAdvancing(u.STATUS.OVER);else if(this.isHittingItself(n))this.stopAdvancing(u.STATUS.OVER);else{for(let e=this.snake.length-1;e>0;e-=1){let t=this.snake[e];e===this.tailIndex&&t.eating&&this.snake.push({...t,eating:!1});let s=this.snake[e-1];t.x=s.x,t.y=s.y,t.eating=s.eating}t.x=n.x,t.y=n.y,t.eating=null!=this.apple&&this.apple.x===n.x&&this.apple.y===n.y,t.eating&&(this.apple=this.getNewAppleCoords()),this.nextDirection=void 0,this.currentDirection=s,this.emit(u.EVENT.ADVANCE)}}getSnakeHead(){return this.snake[this.headIndex]}isHittingWall(e){return this.hasWalls&&(e.x<0||e.x>=u.WIDTH||e.y<0||e.y>=u.HEIGHT)}isHittingItself(e){return this.snake.reduce((t,s,n)=>t||(this.tailIndex!==n||s.eating)&&s.x===e.x&&s.y===e.y,!1)}getNextHeadPosition(e){let t=this.getSnakeHead();switch(e){case u.DIRECTION.U:return{x:t.x,y:this.hasWalls?t.y-1:(t.y+u.HEIGHT-1)%u.HEIGHT};case u.DIRECTION.D:return{x:t.x,y:this.hasWalls?t.y+1:(t.y+1)%u.HEIGHT};case u.DIRECTION.L:return{x:this.hasWalls?t.x-1:(t.x+u.WIDTH-1)%u.WIDTH,y:t.y};case u.DIRECTION.R:return{x:this.hasWalls?t.x+1:(t.x+1)%u.WIDTH,y:t.y};default:throw Error("Unrecognized direction")}}setStatus(e){this.status=e,this.emit(u.EVENT.STATUS,this.status)}start(){if(null!=this.timerId)throw Error("Game has already started");this.setStatus(u.STATUS.RUNNING),this.timerId=setInterval(()=>{this.advance()},this.refreshSpeed)}stopAdvancing(e){null!=this.timerId&&(clearInterval(this.timerId),this.timerId=void 0),null!=e&&(this.setStatus(e),this.emit(u.EVENT.STOP))}stop(){this.stopAdvancing(u.STATUS.PAUSE)}setDirection(e){this.isNewDirectionValid(e,this.currentDirection)&&(this.nextDirection=e)}isNewDirectionValid(e,t){return t===u.DIRECTION.U&&e!==u.DIRECTION.D||t===u.DIRECTION.D&&e!==u.DIRECTION.U||t===u.DIRECTION.L&&e!==u.DIRECTION.R||t===u.DIRECTION.R&&e!==u.DIRECTION.L}goUp(){this.setDirection(u.DIRECTION.U)}goDown(){this.setDirection(u.DIRECTION.D)}goLeft(){this.setDirection(u.DIRECTION.L)}goRight(){this.setDirection(u.DIRECTION.R)}setSpeed(e){this.speed=e,null!=this.timerId&&(this.stopAdvancing(),this.start())}getSnake(){return this.snake.map(e=>({x:e.x,y:e.y}))}getApple(){return null==this.apple?this.apple:{...this.apple}}reset(){this.stopAdvancing(u.STATUS.IDLE),this.snake=this.getNewSnake(),this.apple=this.getNewAppleCoords(),this.nextDirection=u.DIRECTION.R,this.emit(u.EVENT.RESET)}setWalls(e){this.hasWalls=e}constructor(e,t){this.eventEmitter=new(c()),this.speed=1,this.status=u.STATUS.IDLE,this.headIndex=0,this.hasWalls=!0,this.snake=this.getNewSnake(),this.apple=this.getNewAppleCoords(),this.currentDirection=u.DIRECTION.R,this.on=this.eventEmitter.on.bind(this.eventEmitter),this.off=this.eventEmitter.off.bind(this.eventEmitter),this.emit=this.eventEmitter.emit.bind(this.eventEmitter),null!=e&&this.setSpeed(e),null!=t&&this.setWalls(t)}}u.WIDTH=24,u.HEIGHT=17,u.INITIAL_LENGTH=5,u.DIRECTION=u.getSnakeGameEnum("U","D","L","R"),u.STATUS=u.getSnakeGameEnum("IDLE","RUNNING","PAUSE","OVER","COMPLETE"),u.EVENT=u.getSnakeGameEnum("ADVANCE","STOP","RESET","STATUS"),u.AREA=u.WIDTH*u.HEIGHT;var p=s(3252),g=s.n(p),m=s(5001),S=s(58);function T(e){let t=Object.assign({p:"p",strong:"strong",a:"a",h2:"h2",em:"em"},(0,S.ah)(),e.components);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(t.p,{children:["One of my forgotten dreams was to build a clone of Snake that could run on a browser,\nthe one that was included in the Nokia 3210 cellphone.\nYes, ",(0,m.jsx)(t.strong,{children:"the"})," ",(0,m.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Nokia_3210",children:"Nokia 3210"}),",\nthe dad of all cool phones. In 1999 it had interchangeable covers,\nbackground logos and custom ringtones you sent yourself via SMS, and games.\nThe game I liked the most was Snake, at the time we passed hours in buses\nasking to borrow our friend's phones just to try and fill the screen with that Snake,\nmostly because we didn't have cellphones."]}),"\n",(0,m.jsx)(t.h2,{children:"The process"}),"\n",(0,m.jsx)(t.p,{children:"So I started by stating facts: I found some pictures of Snake being played on the 3210,\nand I wrote them down. Measuring the picture I found out that the board is 24x17. Then\nI remembered that the snake got longer only when the eaten fruit reached its tail.\nI cannot recall how it started so I put the snake on the most probable location."}),"\n",(0,m.jsx)(t.p,{children:"Through some iterations I then simplified the calculations. For this iteration I devised\na way in which we have to draw only the snake and apple squares. By sorting the snake\ntracts before printing them we can minimize the renderings."}),"\n",(0,m.jsx)(t.p,{children:"Also tried to improve performance by advancing immediately the snake upon direction\nchange with different techniques but didn't notice any improvement without a drawback."}),"\n",(0,m.jsx)(t.h2,{children:"Instructions"}),"\n",(0,m.jsxs)(t.p,{children:["To play on desktop press the ",(0,m.jsx)(t.em,{children:"arrows"}),", ",(0,m.jsx)(t.em,{children:"WSAD"}),", spacebar or\nenter. To pause the game press spacebar or enter, to resume it press\nthe ",(0,m.jsx)(t.em,{children:"arrows"}),", ",(0,m.jsx)(t.em,{children:"WSAD"}),", spacebar or enter. When game is over you can reset\nit by pressing the Reset button or spacebar or enter."]}),"\n",(0,m.jsx)(t.p,{children:"To play on mobile just press the buttons (swipe would be too slow to capture)."})]})}var E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,S.ah)(),e.components);return t?(0,m.jsx)(t,Object.assign({},e,{children:(0,m.jsx)(T,e)})):T(e)};let I=(0,s(8532).Z)((e,t)=>e.y<t.y||e.x<t.x),x=e=>e.sort(I),N=e=>{let{x:t,y:s}=e;return{top:"calc((var(--snake-game-cell-height) + var(--snake-game-gutter)) * ".concat(s," + var(--snake-game-spacing))"),left:"calc((var(--snake-game-cell-width) + var(--snake-game-gutter)) * ".concat(t," + var(--snake-game-spacing))")}};var k=s(537);let v=(0,l.memo)(e=>{let{tile:t,className:s}=e;return(0,n.jsx)("div",{className:r()({[g().cell]:!0,[s]:s}),style:N(t),children:"\xa0"})});v.displayName="SnakeTile";var _=()=>{let[e,t]=(0,l.useState)(10),[s,a]=(0,l.useState)(!0),[o,c]=(0,l.useState)(u.STATUS.IDLE),h=(0,l.useRef)(new u(e,s)),[d,p]=(0,l.useState)(),[m,S]=(0,l.useState)();(0,l.useEffect)(()=>{let e=()=>{p(x(h.current.getSnake())),S(h.current.getApple())};e(),h.current.on(u.EVENT.ADVANCE,e),h.current.on(u.EVENT.RESET,e);let t=e=>{c(e)};h.current.on(u.EVENT.STATUS,t);let s=e=>{e.preventDefault();let t=h.current.getStatus(),s=t===u.STATUS.IDLE||t===u.STATUS.PAUSE,n=s||t===u.STATUS.RUNNING;switch(e.key){case"ArrowUp":case"w":n&&h.current.goUp(),s&&h.current.start();break;case"ArrowDown":case"s":n&&h.current.goDown(),s&&h.current.start();break;case"ArrowLeft":case"a":n&&h.current.goLeft(),s&&h.current.start();break;case"ArrowRight":case"d":n&&h.current.goRight(),s&&h.current.start();break;case" ":case"Space":case"Enter":s?h.current.start():n?h.current.stop():(h.current.reset(),h.current.start())}};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s),h.current.off(u.EVENT.STATUS,t),h.current.off(u.EVENT.RESET,e),h.current.off(u.EVENT.ADVANCE,e)}},[]),(0,l.useEffect)(()=>{h.current.setSpeed(e)},[e]),(0,l.useEffect)(()=>{h.current.setWalls(s)},[s]),(0,l.useEffect)(()=>{var e,t;o===u.STATUS.RUNNING?(document.body.classList.add(g().stopScrolling),null===(e=document.querySelector("html"))||void 0===e||e.classList.add(g().stopScrolling)):(document.body.classList.remove(g().stopScrolling),null===(t=document.querySelector("html"))||void 0===t||t.classList.remove(g().stopScrolling))},[o]);let T=(0,l.useCallback)((0,i.Z)(e=>{let t=h.current.getStatus(),s=t===u.STATUS.IDLE||t===u.STATUS.PAUSE;(s||t===u.STATUS.RUNNING)&&h.current.setDirection(e),s&&h.current.start()}),[]);return(0,n.jsxs)("div",{children:[(0,n.jsx)(E,{}),(0,n.jsxs)("div",{className:r()({[g().board]:!0,[g().board__noWalls]:!s}),children:[null==d?void 0:d.map(e=>(0,n.jsx)(v,{tile:e,className:g().cell__snake},"tile-x-".concat(e.x,"-y-").concat(e.y))),null!=m&&(0,n.jsx)(v,{tile:m,className:g().cell__apple})]}),(0,n.jsxs)("div",{children:[o===u.STATUS.IDLE&&(0,n.jsx)("p",{children:"Insert coin to play..."}),o===u.STATUS.OVER&&(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"GAME OVER."})}),o===u.STATUS.COMPLETE&&(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"And that's how it's done."})}),o===u.STATUS.PAUSE&&(0,n.jsx)("p",{children:"Do your thing, I'll wait here..."}),o===u.STATUS.RUNNING&&(0,n.jsx)("p",{children:"Run Forrest, Run!"})]}),(0,n.jsxs)("div",{className:g().gamepad,children:[(0,n.jsxs)("div",{className:g().gamepad_row,children:[(0,n.jsx)("div",{className:g().gamepad_col,children:(0,n.jsx)("button",{className:g().gamepad_button,onMouseDown:T(u.DIRECTION.U),"aria-label":"Up",children:(0,n.jsx)(k.Z,{children:"⬆️"})})}),(0,n.jsx)("div",{className:g().gamepad_col,children:(0,n.jsx)("button",{className:g().gamepad_button,onMouseDown:T(u.DIRECTION.R),"aria-label":"Right",children:(0,n.jsx)(k.Z,{children:"➡️"})})})]}),(0,n.jsxs)("div",{className:g().gamepad_row,children:[(0,n.jsx)("div",{className:g().gamepad_col,children:(0,n.jsx)("button",{className:g().gamepad_button,onMouseDown:T(u.DIRECTION.L),"aria-label":"Left",children:(0,n.jsx)(k.Z,{children:"⬅️"})})}),(0,n.jsx)("div",{className:g().gamepad_col,children:(0,n.jsx)("button",{className:g().gamepad_button,onMouseDown:T(u.DIRECTION.D),"aria-label":"Down",children:(0,n.jsx)(k.Z,{children:"⬇️"})})})]})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{children:"Settings"}),(0,n.jsx)("label",{htmlFor:"speed",children:"Speed:"})," ",(0,n.jsx)("input",{id:"speed",type:"number",onChange:e=>{let s=parseInt(e.target.value);t(Math.max(1,isNaN(s)?1:s))},value:e})," ",(0,n.jsx)("input",{id:"hasWalls",name:"hasWalls",checked:s,onChange:e=>{a(e.target.checked)},type:"checkbox",value:"hasWalls"})," ",(0,n.jsx)("label",{htmlFor:"hasWalls",children:"Has walls"})," ",(0,n.jsx)("button",{type:"button",onClick:()=>{h.current.reset()},children:"Reset"})]})})]})}},288:function(e){e.exports={emoji:"Emoji_emoji__KdCI2"}},3252:function(e){e.exports={stopScrolling:"Snake_stopScrolling__qL42K",board:"Snake_board__2_OWz",board__noWalls:"Snake_board__noWalls__kUB9v",cell:"Snake_cell__yVOrl",cell__snake:"Snake_cell__snake__B0uJP",cell__apple:"Snake_cell__apple__31Evh",gamepad:"Snake_gamepad__AGHd4",gamepad_row:"Snake_gamepad_row__QO4He",gamepad_col:"Snake_gamepad_col__bUZv5",gamepad_button:"Snake_gamepad_button__5LmNL"}},8532:function(e,t,s){"use strict";var n=(0,s(9456).Z)(function(e){return function(t,s){return e(t,s)?-1:e(s,t)?1:0}});t.Z=n}},function(e){e.O(0,[273,293,997,744],function(){return e(e.s=1844)}),_N_E=e.O()}]);