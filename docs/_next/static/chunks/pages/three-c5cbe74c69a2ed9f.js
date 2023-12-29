(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[822],{594:function(e,t,n){var i=0/0,s=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,h=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,m="object"==typeof self&&self&&self.Object===Object&&self,l=u||m||Function("return this")(),d=Object.prototype.toString,c=Math.max,p=Math.min,now=function(){return l.Date.now()};function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function toNumber(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(isObject(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=isObject(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var u=r.test(e);return u||a.test(e)?h(e.slice(2),u?2:8):o.test(e)?i:+e}e.exports=function(e,t,n){var i,s,o,r,a,h,u=0,m=!1,l=!1,d=!0;if("function"!=typeof e)throw TypeError("Expected a function");function invokeFunc(t){var n=i,o=s;return i=s=void 0,u=t,r=e.apply(o,n)}function shouldInvoke(e){var n=e-h,i=e-u;return void 0===h||n>=t||n<0||l&&i>=o}function timerExpired(){var e,n,i,s=now();if(shouldInvoke(s))return trailingEdge(s);a=setTimeout(timerExpired,(e=s-h,n=s-u,i=t-e,l?p(i,o-n):i))}function trailingEdge(e){return(a=void 0,d&&i)?invokeFunc(e):(i=s=void 0,r)}function debounced(){var e,n=now(),o=shouldInvoke(n);if(i=arguments,s=this,h=n,o){if(void 0===a)return u=e=h,a=setTimeout(timerExpired,t),m?invokeFunc(e):r;if(l)return a=setTimeout(timerExpired,t),invokeFunc(h)}return void 0===a&&(a=setTimeout(timerExpired,t)),r}return t=toNumber(t)||0,isObject(n)&&(m=!!n.leading,o=(l="maxWait"in n)?c(toNumber(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),debounced.cancel=function(){void 0!==a&&clearTimeout(a),u=0,i=h=s=a=void 0},debounced.flush=function(){return void 0===a?r:trailingEdge(now())},debounced}},841:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/three",function(){return n(2822)}])},2822:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return three}});var i=n(2322),s=n(2784),o=n(5392);function _createMdxContent(e){let t=Object.assign({p:"p",a:"a",strong:"strong"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This is a WebGL scene I made by combining some examples I found in\n",(0,i.jsx)(t.a,{href:"https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene",children:"ThreeJS docs"}),"\nand in ",(0,i.jsx)(t.a,{href:"https://github.com/mrdoob/three.js/tree/r148",children:"ThreeJS sources"}),".\nThen I tried to apply ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Spherical_coordinate_system",children:"Spherical Coordinate System"}),"\nto move the camera applied to the scene. I added some solids to not lose the orientation.\n",(0,i.jsx)(t.strong,{children:"Red"})," represents ",(0,i.jsx)(t.strong,{children:"X"})," axis, ",(0,i.jsx)(t.strong,{children:"Green"})," the ",(0,i.jsx)(t.strong,{children:"Y"})," axis and ",(0,i.jsx)(t.strong,{children:"Blue"})," the ",(0,i.jsx)(t.strong,{children:"Z"})," axis. Keeping up with\nthe old OpenGL tradition sometimes I had to flip signs to make things go my way."]}),"\n",(0,i.jsx)(t.p,{children:"To navigate the example you can click and drag the scene to rotate it\nand scroll the mousewheel to zoom in and out."}),"\n",(0,i.jsxs)(t.p,{children:["To navigate the example with keyboard you can use ",(0,i.jsx)(t.strong,{children:"WSAD"})," to move around the scene\nand ",(0,i.jsx)(t.strong,{children:"+ and -"})," to zoom in and out (keep the key pressed for a smoother experience)."]}),"\n",(0,i.jsx)(t.p,{children:"After expanding the example I phased out the initial examples I built."})]})}var README=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(_createMdxContent,e)})):_createMdxContent(e)},r=n(6995);let ThreeAnimation=class ThreeAnimation{static degToRad(e){return e*Math.PI/180}static radToDeg(e){return 180*e/Math.PI}static getNormalizedSphericAngle(e){return(e%ThreeAnimation.P2+ThreeAnimation.P2)%ThreeAnimation.P2}static limitNumericValue(e,t,n){return Math.min(t,Math.max(e,n))}setupCanvas(e){}teardownCanvas(e){}mount(){this.setupScene(this.scene,this.camera),this.setupCanvas(this.renderer.domElement),this.container.appendChild(this.renderer.domElement)}unmount(){this.stop(),this.teardownCanvas(this.renderer.domElement),this.container.removeChild(this.renderer.domElement)}start(){this.isRunningAnimation||(this.update(),this.isRunningAnimation=!0,this.runAnimation(0))}stop(){this.isRunningAnimation=!1}update(){this.updateRenderer(),this.updateCamera(this.camera)}getContainerSize(){let{width:e,height:t}=this.container.getBoundingClientRect();return{width:e,height:t}}updateRenderer(){let{width:e,height:t}=this.getContainerSize();this.renderer.setSize(e,t)}applyAnimationAndRenderFrame(e){this.animate(e,{scene:this.scene,camera:this.camera,canvas:this.renderer.domElement}),this.renderer.render(this.scene,this.camera)}runAnimation(e){this.isRunningAnimation&&(window.requestAnimationFrame(this.runAnimation.bind(this)),this.applyAnimationAndRenderFrame(e))}renderFrame(){this.update(),this.applyAnimationAndRenderFrame(0)}addContainerListener(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.container.addEventListener(...t)}removeContainerListener(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.container.removeEventListener(...t)}constructor(e){this.container=e,this.scene=new r.xsS,this.renderer=new r.CP7,this.isRunningAnimation=!1,this.camera=this.createCamera(),this.update()}};ThreeAnimation.P2=2*Math.PI;let ThreeAnimationWithPerspectiveCamera=class ThreeAnimationWithPerspectiveCamera extends ThreeAnimation{updateCamera(e){let{width:t,height:n}=this.getContainerSize();e.aspect=t/n,e.updateProjectionMatrix()}};let MouseDragger=class MouseDragger{onMouseDownImpl(e){e.preventDefault(),this.previousMovement=void 0,this.isMouseDown=!0}onMouseUpImpl(e){e.preventDefault(),this.isMouseDown=!1,this.previousMovement=void 0}onMouseMoveImpl(e){e.preventDefault(),this.isMouseDown&&(null!=this.previousMovement&&this.dragCallback({x:e.clientX-this.previousMovement.x,y:this.previousMovement.y-e.clientY,z:0}),this.previousMovement={x:e.clientX,y:e.clientY,z:0})}onMouseWheelImpl(e){var t,n,i,s;e.preventDefault(),null!=this.previousMovement&&this.dragCallback({x:this.previousMovement.x,y:this.previousMovement.y,z:e.deltaY}),this.previousMovement={x:null!==(i=null===(t=this.previousMovement)||void 0===t?void 0:t.x)&&void 0!==i?i:0,y:null!==(s=null===(n=this.previousMovement)||void 0===n?void 0:n.y)&&void 0!==s?s:0,z:e.deltaY}}teardown(){this.element.removeEventListener("mousedown",this.onMouseDown),this.element.removeEventListener("mouseup",this.onMouseUp),this.element.removeEventListener("mousemove",this.onMouseMove),this.element.removeEventListener("mouseleave",this.onMouseUp),this.element.removeEventListener("wheel",this.onMouseWheel)}constructor(e,t){this.element=e,this.dragCallback=t,this.isMouseDown=!1,this.onMouseDown=this.onMouseDownImpl.bind(this),this.onMouseUp=this.onMouseUpImpl.bind(this),this.onMouseMove=this.onMouseMoveImpl.bind(this),this.onMouseWheel=this.onMouseWheelImpl.bind(this),this.element.addEventListener("mousedown",this.onMouseDown),this.element.addEventListener("mouseup",this.onMouseUp),this.element.addEventListener("mousemove",this.onMouseMove),this.element.addEventListener("mouseleave",this.onMouseUp),this.element.addEventListener("wheel",this.onMouseWheel)}};let KeyboardPresser=class KeyboardPresser{onKeyDownImpl(e){this.key!==e.key&&(this.timeStamp=void 0),this.callback(e.key,null==this.timeStamp?0:e.timeStamp-this.timeStamp,()=>e.preventDefault()),e.defaultPrevented&&(this.key=e.key,this.timeStamp=e.timeStamp)}onKeyUpImpl(){this.key=void 0,this.timeStamp=void 0}teardown(){this.element.removeEventListener("keydown",this.onKeyDown),this.element.removeEventListener("keyup",this.onKeyUp)}constructor(e,t){this.element=e,this.callback=t,this.onKeyDown=this.onKeyDownImpl.bind(this),this.onKeyUp=this.onKeyUpImpl.bind(this),this.element.addEventListener("keydown",this.onKeyDown),this.element.addEventListener("keyup",this.onKeyUp)}};let LightingThreeAnimation=class LightingThreeAnimation extends ThreeAnimationWithPerspectiveCamera{createCamera(){return new r.cPb(75,1,.1,1e3)}setupScene(e,t){t.position.setFromSphericalCoords(this.cameraRho,this.cameraPhi,this.cameraTheta),t.lookAt(0,0,0);let n=new r.DvJ(1,1,1),i=new r.xoR({color:16038656});this.cube=new r.Kj0(n,i),e.add(this.cube);let s=new r.Kj0(new r.b_z(.1,.2),new r.xoR({color:16711680})),o=new r.Kj0(new r.b_z(.1,.2),new r.xoR({color:65280})),a=new r.Kj0(new r.b_z(.1,.2),new r.xoR({color:255})),h=new r.Kj0(new r.xo$(.1),new r.xoR({color:16777215}));s.position.set(1,0,0),s.rotation.z=-Math.PI/2,o.position.set(0,1,0),a.position.set(0,0,1),a.rotation.x=Math.PI/2,e.add(s),e.add(o),e.add(a),e.add(h);let u=new r.vmT(16777147,526368,1);e.add(u)}animate(e,t){let{camera:n}=t;null!=this.cube&&(this.cube.rotation.set(e/2e3%ThreeAnimation.P2,e/1e3%ThreeAnimation.P2,e/3e3%ThreeAnimation.P2),this.cube.position.set(4*this.getAxisRocker(4e3,e)-2,2*this.getAxisRocker(2e3,e)-1,3*this.getAxisRocker(6e3,e)-1.5)),n.position.setFromSphericalCoords(this.cameraRho,this.cameraPhi,this.cameraTheta),n.lookAt(0,0,0)}getAxisRocker(e,t){let n=t%e/e;return this.easeInOutSine(Math.sign(t%(2*e)/e-1)>=0?n:1-n)}easeInOutSine(e){return-(Math.cos(Math.PI*e)-1)/2}setupCanvas(e){this.mouseDragger=new MouseDragger(e,this.dragCameraAround.bind(this)),this.keyboardPresser=new KeyboardPresser(document.documentElement,this.moveCameraAround.bind(this))}teardownCanvas(){var e,t;null===(e=this.mouseDragger)||void 0===e||e.teardown(),this.mouseDragger=void 0,null===(t=this.keyboardPresser)||void 0===t||t.teardown(),this.keyboardPresser=void 0}setCameraThetaDelta(e){this.cameraTheta=ThreeAnimation.getNormalizedSphericAngle(this.cameraTheta+e)}setCameraPhiDelta(e){this.cameraPhi=ThreeAnimation.limitNumericValue(0,Math.PI,this.cameraPhi+e)}setCameraRhoDelta(e){this.cameraRho=ThreeAnimation.limitNumericValue(2,7,this.cameraRho+e)}dragCameraAround(e){let{x:t,y:n,z:i}=e;this.setCameraThetaDelta(-t/100),this.setCameraPhiDelta(n/100),this.setCameraRhoDelta(i/100)}getKeyDefaultDelta(e,t){return e>0?e:t}moveCameraAround(e,t,n){let i=!0;switch(e){case"w":this.setCameraPhiDelta(this.getKeyDefaultDelta(t,50)/1e3);break;case"a":this.setCameraThetaDelta(this.getKeyDefaultDelta(t,50)/1e3);break;case"s":this.setCameraPhiDelta(-this.getKeyDefaultDelta(t,50)/1e3);break;case"d":this.setCameraThetaDelta(-this.getKeyDefaultDelta(t,50)/1e3);break;case"+":this.setCameraRhoDelta(-this.getKeyDefaultDelta(t,50)/1e3);break;case"-":this.setCameraRhoDelta(this.getKeyDefaultDelta(t,50)/1e3);break;default:i=!1}i&&n()}constructor(...e){super(...e),this.cameraRho=4,this.cameraPhi=Math.PI/4,this.cameraTheta=this.cameraPhi+0}};var a=n(594),h=n.n(a),u=n(6969),m=n.n(u),Container_Container=e=>{let{onInit:t}=e,n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=n.current;if(null!=e){let n=t(e),i=h()(n.update.bind(n),50);return window.addEventListener("resize",i),n.mount(),n.start(),()=>{window.removeEventListener("resize",i),i.cancel(),n.stop(),n.unmount()}}},[t]),(0,i.jsx)("div",{className:m().container,ref:n})},l=!0,three=()=>{let e=(0,s.useCallback)(e=>new LightingThreeAnimation(e),[]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(README,{}),(0,i.jsx)(Container_Container,{onInit:e})]})}},6969:function(e){e.exports={f4bb00:"#f4bb00",skyColor:"#7999c6",groundColor:"#472506",container:"Three_container__0tDgE"}},5392:function(e,t,n){"use strict";n.d(t,{ah:function(){return useMDXComponents}});var i=n(2784);let s=i.createContext({});function useMDXComponents(e){let t=i.useContext(s);return i.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}}},function(e){e.O(0,[546,774,888,179],function(){return e(e.s=841)}),_N_E=e.O()}]);