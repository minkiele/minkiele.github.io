(() => {
var exports = {};
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 6404:
/***/ ((module) => {

// Exports
module.exports = {
	"stopScrolling": "Snake_stopScrolling__4uMy_",
	"board": "Snake_board__LhStu",
	"board__noWalls": "Snake_board__noWalls__MWjtV",
	"cell": "Snake_cell__SHi9C",
	"cell__snake": "Snake_cell__snake__sggE_",
	"cell__apple": "Snake_cell__apple__wXLiP",
	"gamepad": "Snake_gamepad___mBaD",
	"gamepad_row": "Snake_gamepad_row__2P_fs",
	"gamepad_col": "Snake_gamepad_col__3ehSd",
	"gamepad_button": "Snake_gamepad_button__bRU7t"
};


/***/ }),

/***/ 2651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ SnakeGame)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1239);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5674);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @link https://galeri12.uludagsozluk.com/596/nokia-3210_707680.jpg For the board size
 * To improve reactivity and performance I tried a few tricks:
 * First attempt was to throttle the advance and flush the calls every direction change
 * but it got skipped too many times during the update cycle, completely unreliable.
 * Second attempt was to call advance() every direction change without attempting any
 * throttle, with calls too close to the next update cycle you'd have this sensation of
 * doing 2 interactions instead of one. Also, a 180 turn became impossible.
 * Third attempt was to call advance() every direction change but adding a flag to signal
 * the next update cycle to skip the advance() call. It gave a very fast response on
 * direction change but then a "freezing" because of the skipped update.
 * So far the first implementation with a pooling update cycle is the best.
 */ class SnakeGame {
    static WIDTH = 24;
    static HEIGHT = 17;
    static INITIAL_LENGTH = 5;
    static getSnakeGameEnum(...values) {
        return values.reduce((acc, sym)=>({
                ...acc,
                [sym]: Symbol(sym)
            }), {});
    }
    static DIRECTION = SnakeGame.getSnakeGameEnum("U", "D", "L", "R");
    static STATUS = SnakeGame.getSnakeGameEnum("IDLE", "RUNNING", "PAUSE", "OVER", "COMPLETE");
    static EVENT = SnakeGame.getSnakeGameEnum("ADVANCE", "STOP", "RESET", "STATUS");
    static AREA = SnakeGame.WIDTH * SnakeGame.HEIGHT;
    eventEmitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
    // Speed in Hz (refreshes per second)
    speed = 1;
    get refreshSpeed() {
        return 1000 / this.speed;
    }
    status = SnakeGame.STATUS.IDLE;
    headIndex = 0;
    get tailIndex() {
        return this.snake.length - 1;
    }
    hasWalls = true;
    constructor(speed, hasWalls){
        if (speed != null) {
            this.setSpeed(speed);
        }
        if (hasWalls != null) {
            this.setWalls(hasWalls);
        }
    }
    getStatus() {
        return this.status;
    }
    getNewSnake() {
        const y = Math.floor(SnakeGame.HEIGHT / 2);
        return lodash_times__WEBPACK_IMPORTED_MODULE_1___default()(SnakeGame.INITIAL_LENGTH, (x)=>({
                // Index 0 is the head,
                // it's like rendering from right to left
                x: SnakeGame.INITIAL_LENGTH + 3 - x,
                y,
                eating: false
            }));
    }
    snake = this.getNewSnake();
    getNewAppleCoords() {
        if (this.snake.length === SnakeGame.AREA) {
            // Game is complete, no apple can be placed
            return undefined;
        } else {
            // Try to place a new apple in a random position inside the screen
            // If the new position overlaps the snake delete the coordinates and
            // try again until success.
            let apple;
            while(apple == null){
                apple = {
                    x: Math.floor(Math.random() * SnakeGame.WIDTH),
                    y: Math.floor(Math.random() * SnakeGame.HEIGHT)
                };
                // New apple is overlapping the snake, we cannot allow that
                if (this.isAppleOverSnake(apple)) {
                    apple = undefined;
                }
            }
            return apple;
        }
    }
    isAppleOverSnake(apple) {
        return this.snake.reduce((overlap, tract)=>overlap || tract.x === apple.x && tract.y === apple.y, false);
    }
    apple = this.getNewAppleCoords();
    currentDirection = SnakeGame.DIRECTION.R;
    advance() {
        // We filled the screen, we won!
        if (this.snake.length === SnakeGame.AREA) {
            this.stopAdvancing(SnakeGame.STATUS.COMPLETE);
        // GAME OVER
        }
        // Next direction is dictated if there's an interrupt (arrows were pressed)
        // otherwise we'll replicate head's direction
        const snakeHead = this.getSnakeHead();
        const nextDirection = this.nextDirection ?? this.currentDirection;
        const nextHeadPosition = this.getNextHeadPosition(nextDirection);
        // If next head position is a wall stop
        if (this.isHittingWall(nextHeadPosition)) {
            this.stopAdvancing(SnakeGame.STATUS.OVER);
        // GAME OVER
        } else if (this.isHittingItself(nextHeadPosition)) {
            this.stopAdvancing(SnakeGame.STATUS.OVER);
        // GAME OVER
        } else {
            // Move the rest of the snake and digest the apple
            // If an apple reached the tail of the snake clone
            // the tail into a new tail.
            for(let i = this.snake.length - 1; i > 0; i -= 1){
                const tract = this.snake[i];
                // An apple has reached the snake tail, make it grow
                if (i === this.tailIndex && tract.eating) {
                    // Copy the last element
                    this.snake.push({
                        ...tract,
                        eating: false
                    });
                }
                const nextTract = this.snake[i - 1];
                tract.x = nextTract.x;
                tract.y = nextTract.y;
                tract.eating = nextTract.eating;
            }
            snakeHead.x = nextHeadPosition.x;
            snakeHead.y = nextHeadPosition.y;
            // If next head position is an apple eat it
            snakeHead.eating = this.apple != null && this.apple.x === nextHeadPosition.x && this.apple.y === nextHeadPosition.y;
            // If the snake ate then
            if (snakeHead.eating) {
                this.apple = this.getNewAppleCoords();
            }
            this.nextDirection = undefined;
            this.currentDirection = nextDirection;
            this.emit(SnakeGame.EVENT.ADVANCE);
        }
    }
    getSnakeHead() {
        // Can cast because we can assume there is always a head
        return this.snake[this.headIndex];
    }
    isHittingWall(nextHeadPosition) {
        return this.hasWalls && (nextHeadPosition.x < 0 || nextHeadPosition.x >= SnakeGame.WIDTH || nextHeadPosition.y < 0 || nextHeadPosition.y >= SnakeGame.HEIGHT);
    }
    isHittingItself(nextHeadPosition) {
        // There is one exception: when the head is hitting the tail
        // but the tail is not eating an apple then it will move away
        // the next refresh so it does not count as a hit.
        return this.snake.reduce((isColliding, tract, index)=>isColliding || (this.tailIndex !== index || tract.eating) && tract.x === nextHeadPosition.x && tract.y === nextHeadPosition.y, false);
    }
    getNextHeadPosition(nextDirection) {
        const head = this.getSnakeHead();
        switch(nextDirection){
            case SnakeGame.DIRECTION.U:
                {
                    return {
                        x: head.x,
                        y: this.hasWalls ? head.y - 1 : (head.y + SnakeGame.HEIGHT - 1) % SnakeGame.HEIGHT
                    };
                }
            case SnakeGame.DIRECTION.D:
                {
                    return {
                        x: head.x,
                        y: this.hasWalls ? head.y + 1 : (head.y + 1) % SnakeGame.HEIGHT
                    };
                }
            case SnakeGame.DIRECTION.L:
                {
                    return {
                        x: this.hasWalls ? head.x - 1 : (head.x + SnakeGame.WIDTH - 1) % SnakeGame.WIDTH,
                        y: head.y
                    };
                }
            case SnakeGame.DIRECTION.R:
                {
                    return {
                        x: this.hasWalls ? head.x + 1 : (head.x + 1) % SnakeGame.WIDTH,
                        y: head.y
                    };
                }
            default:
                {
                    throw new Error("Unrecognized direction");
                }
        }
    }
    setStatus(status) {
        this.status = status;
        this.emit(SnakeGame.EVENT.STATUS, this.status);
    }
    start() {
        if (this.timerId != null) {
            throw new Error("Game has already started");
        }
        this.setStatus(SnakeGame.STATUS.RUNNING);
        this.timerId = setInterval(()=>{
            this.advance();
        }, this.refreshSpeed);
    }
    stopAdvancing(reason) {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = undefined;
        }
        if (reason != null) {
            this.setStatus(reason);
            this.emit(SnakeGame.EVENT.STOP);
        }
    }
    stop() {
        this.stopAdvancing(SnakeGame.STATUS.PAUSE);
    }
    setDirection(nextDirection) {
        // Direction must not be opposite
        if (this.isNewDirectionValid(nextDirection, this.currentDirection)) {
            this.nextDirection = nextDirection;
        }
    }
    isNewDirectionValid(newDirection, currentDirection) {
        return currentDirection === SnakeGame.DIRECTION.U && newDirection !== SnakeGame.DIRECTION.D || currentDirection === SnakeGame.DIRECTION.D && newDirection !== SnakeGame.DIRECTION.U || currentDirection === SnakeGame.DIRECTION.L && newDirection !== SnakeGame.DIRECTION.R || currentDirection === SnakeGame.DIRECTION.R && newDirection !== SnakeGame.DIRECTION.L;
    }
    goUp() {
        this.setDirection(SnakeGame.DIRECTION.U);
    }
    goDown() {
        this.setDirection(SnakeGame.DIRECTION.D);
    }
    goLeft() {
        this.setDirection(SnakeGame.DIRECTION.L);
    }
    goRight() {
        this.setDirection(SnakeGame.DIRECTION.R);
    }
    setSpeed(speed) {
        this.speed = speed;
        if (this.timerId != null) {
            // Do not change the status, we just need to replace the timer
            this.stopAdvancing();
            this.start();
        }
    }
    getSnake() {
        return this.snake.map((tract)=>({
                x: tract.x,
                y: tract.y
            }));
    }
    getApple() {
        return this.apple == null ? this.apple : {
            ...this.apple
        };
    }
    reset() {
        this.stopAdvancing(SnakeGame.STATUS.IDLE);
        this.snake = this.getNewSnake();
        this.apple = this.getNewAppleCoords();
        this.nextDirection = SnakeGame.DIRECTION.R;
        this.emit(SnakeGame.EVENT.RESET);
    }
    setWalls(hasWalls) {
        this.hasWalls = hasWalls;
    }
    // Expose Event Emitter API
    on = this.eventEmitter.on.bind(this.eventEmitter);
    off = this.eventEmitter.off.bind(this.eventEmitter);
    emit = this.eventEmitter.emit.bind(this.eventEmitter);
}


/***/ }),

/***/ 840:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3991);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Snake_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2651);
/* harmony import */ var _Snake_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6404);
/* harmony import */ var _Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8538);
/* harmony import */ var _Snake_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8151);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ramda__WEBPACK_IMPORTED_MODULE_2__, _Snake_utils__WEBPACK_IMPORTED_MODULE_6__]);
([ramda__WEBPACK_IMPORTED_MODULE_2__, _Snake_utils__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SnakeTile = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ tile , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
            [(_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().cell)]: true,
            [className]: className
        }),
        style: (0,_Snake_utils__WEBPACK_IMPORTED_MODULE_6__/* .getCellStyle */ .p)(tile),
        children: "\xa0"
    }));
SnakeTile.displayName = "SnakeTile";
const Snake = ()=>{
    const [speed, setSpeed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);
    const [hasWalls, setWalls] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.IDLE */ .U.STATUS.IDLE);
    const snakeGame = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(new _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame */ .U(speed, hasWalls));
    const [snake, setSnake] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [apple, setApple] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const updateData = ()=>{
            setSnake((0,_Snake_utils__WEBPACK_IMPORTED_MODULE_6__/* .getSortedSnake */ .P)(snakeGame.current.getSnake()));
            setApple(snakeGame.current.getApple());
        };
        updateData();
        snakeGame.current.on(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.EVENT.ADVANCE */ .U.EVENT.ADVANCE, updateData);
        snakeGame.current.on(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.EVENT.RESET */ .U.EVENT.RESET, updateData);
        const updateStatus = (statusVariation)=>{
            setStatus(statusVariation);
        };
        snakeGame.current.on(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.EVENT.STATUS */ .U.EVENT.STATUS, updateStatus);
        const handleKeyDown = (evt)=>{
            evt.preventDefault();
            const gameStatus = snakeGame.current.getStatus();
            const isWaiting = gameStatus === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.IDLE */ .U.STATUS.IDLE || gameStatus === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.PAUSE */ .U.STATUS.PAUSE;
            const isGameNotEnded = isWaiting || gameStatus === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.RUNNING */ .U.STATUS.RUNNING;
            switch(evt.key){
                case "ArrowUp":
                case "w":
                    {
                        if (isGameNotEnded) {
                            snakeGame.current.goUp();
                        }
                        if (isWaiting) {
                            snakeGame.current.start();
                        }
                        break;
                    }
                case "ArrowDown":
                case "s":
                    {
                        if (isGameNotEnded) {
                            snakeGame.current.goDown();
                        }
                        if (isWaiting) {
                            snakeGame.current.start();
                        }
                        break;
                    }
                case "ArrowLeft":
                case "a":
                    {
                        if (isGameNotEnded) {
                            snakeGame.current.goLeft();
                        }
                        if (isWaiting) {
                            snakeGame.current.start();
                        }
                        break;
                    }
                case "ArrowRight":
                case "d":
                    {
                        if (isGameNotEnded) {
                            snakeGame.current.goRight();
                        }
                        if (isWaiting) {
                            snakeGame.current.start();
                        }
                        break;
                    }
                case " ":
                case "Space":
                case "Enter":
                    {
                        if (isWaiting) {
                            snakeGame.current.start();
                        } else if (isGameNotEnded) {
                            snakeGame.current.stop();
                        } else {
                            snakeGame.current.reset();
                            snakeGame.current.start();
                        }
                    }
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
            snakeGame.current.off(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.EVENT.STATUS */ .U.EVENT.STATUS, updateStatus);
            snakeGame.current.off(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.EVENT.RESET */ .U.EVENT.RESET, updateData);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            snakeGame.current.off(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.EVENT.ADVANCE */ .U.EVENT.ADVANCE, updateData);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        snakeGame.current.setSpeed(speed);
    }, [
        speed
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        snakeGame.current.setWalls(hasWalls);
    }, [
        hasWalls
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (status === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.RUNNING */ .U.STATUS.RUNNING) {
            document.body.classList.add((_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().stopScrolling));
            document.querySelector("html")?.classList.add((_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().stopScrolling));
        } else {
            document.body.classList.remove((_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().stopScrolling));
            document.querySelector("html")?.classList.remove((_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().stopScrolling));
        }
    }, [
        status
    ]);
    const handleSetSpeed = (evt)=>{
        const intSize = parseInt(evt.target.value);
        setSpeed(Math.max(1, isNaN(intSize) ? 1 : intSize));
    };
    const handleSetWalls = (evt)=>{
        setWalls(evt.target.checked);
    };
    const handleReset = ()=>{
        snakeGame.current.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleGamepadThunk = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((0,ramda__WEBPACK_IMPORTED_MODULE_2__.thunkify)((direction)=>{
        const gameStatus = snakeGame.current.getStatus();
        const isWaiting = gameStatus === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.IDLE */ .U.STATUS.IDLE || gameStatus === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.PAUSE */ .U.STATUS.PAUSE;
        const isGameNotEnded = isWaiting || gameStatus === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.RUNNING */ .U.STATUS.RUNNING;
        if (isGameNotEnded) {
            snakeGame.current.setDirection(direction);
        }
        if (isWaiting) {
            snakeGame.current.start();
        }
    }), []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_README_md__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                    [(_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().board)]: true,
                    [(_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().board__noWalls)]: !hasWalls
                }),
                children: [
                    snake?.map((tile)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnakeTile, {
                            tile: tile,
                            className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().cell__snake)
                        }, `tile-x-${tile.x}-y-${tile.y}`)),
                    apple != null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnakeTile, {
                        tile: apple,
                        className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().cell__apple)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    status === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.IDLE */ .U.STATUS.IDLE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Insert coin to play..."
                    }),
                    status === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.OVER */ .U.STATUS.OVER && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "GAME OVER."
                        })
                    }),
                    status === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.COMPLETE */ .U.STATUS.COMPLETE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "And that's how it's done."
                        })
                    }),
                    status === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.PAUSE */ .U.STATUS.PAUSE && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Do your thing, I'll wait here..."
                    }),
                    status === _Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.STATUS.RUNNING */ .U.STATUS.RUNNING && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Run Forrest, Run!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad_row),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad_col),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad_button),
                                    onMouseDown: handleGamepadThunk(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.DIRECTION.U */ .U.DIRECTION.U),
                                    "aria-label": "Up",
                                    children: "⬆️"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad_col),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad_button),
                                    onMouseDown: handleGamepadThunk(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.DIRECTION.R */ .U.DIRECTION.R),
                                    "aria-label": "Right",
                                    children: "➡️"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad_row),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad_col),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad_button),
                                    onMouseDown: handleGamepadThunk(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.DIRECTION.L */ .U.DIRECTION.L),
                                    "aria-label": "Left",
                                    children: "⬅️"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad_col),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_Snake_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gamepad_button),
                                    onMouseDown: handleGamepadThunk(_Snake_lib__WEBPACK_IMPORTED_MODULE_4__/* .SnakeGame.DIRECTION.D */ .U.DIRECTION.D),
                                    "aria-label": "Down",
                                    children: "⬇️"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                            children: "Settings"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "speed",
                            children: "Speed:"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            id: "speed",
                            type: "number",
                            onChange: handleSetSpeed,
                            value: speed
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            id: "hasWalls",
                            name: "hasWalls",
                            checked: hasWalls,
                            onChange: handleSetWalls,
                            type: "checkbox",
                            value: "hasWalls"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "hasWalls",
                            children: "Has walls"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: handleReset,
                            children: "Reset"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ getSortedSnake),
/* harmony export */   "p": () => (/* binding */ getCellStyle)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3991);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ramda__WEBPACK_IMPORTED_MODULE_0__]);
ramda__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const sorter = (0,ramda__WEBPACK_IMPORTED_MODULE_0__.comparator)((a, b)=>a.y < b.y || a.x < b.x);
const getSortedSnake = (snake)=>snake.sort(sorter);
const getCellStyle = ({ x , y  })=>({
        top: `calc((var(--snake-game-cell-height) + var(--snake-game-gutter)) * ${y} + var(--snake-game-spacing))`,
        left: `calc((var(--snake-game-cell-width) + var(--snake-game-gutter)) * ${x} + var(--snake-game-spacing))`
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_Snake_Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(840);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_Snake_Snake__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
([_apps_Snake_Snake__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_Snake_Snake__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/snake");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1151);
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        strong: "strong",
        a: "a",
        h2: "h2",
        em: "em"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "One of my forgotten dreams was to build a clone of Snake that could run on a browser,\nthe one that was included in the Nokia 3210 cellphone.\nYes, ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "the"
                    }),
                    " ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://en.wikipedia.org/wiki/Nokia_3210",
                        children: "Nokia 3210"
                    }),
                    ",\nthe dad of all cool phones. In 1999 it had interchangeable covers,\nbackground logos and custom ringtones you sent yourself via SMS, and games.\nThe game I liked the most was Snake, at the time we passed hours in buses\nasking to borrow our friend's phones just to try and fill the screen with that Snake,\nmostly because we didn't have cellphones."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "The process"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "So I started by stating facts: I found some pictures of Snake being played on the 3210,\nand I wrote them down. Measuring the picture I found out that the board is 24x17. Then\nI remembered that the snake got longer only when the eaten fruit reached its tail.\nI cannot recall how it started so I put the snake on the most probable location."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Through some iterations I then simplified the calculations. For this iteration I devised\na way in which we have to draw only the snake and apple squares. By sorting the snake\ntracts before printing them we can minimize the renderings."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Also tried to improve performance by advancing immediately the snake upon direction\nchange with different techniques but didn't notice any improvement without a drawback."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Instructions"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "To play on desktop press the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "arrows"
                    }),
                    ", ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "WSAD"
                    }),
                    ", spacebar or\nenter. To pause the game press spacebar or enter, to resume it press\nthe ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "arrows"
                    }),
                    ", ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "WSAD"
                    }),
                    ", spacebar or enter. When game is over you can reset\nit by pressing the Reset button or spacebar or enter."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To play on mobile just press the buttons (swipe would be too slow to capture)."
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 1239:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 5674:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.times");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3991:
/***/ ((module) => {

"use strict";
module.exports = import("ramda");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [151,930], () => (__webpack_exec__(3291)));
module.exports = __webpack_exports__;

})();