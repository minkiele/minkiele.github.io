(() => {
var exports = {};
exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 3335:
/***/ ((module) => {

// Exports
module.exports = {
	"scrollable": "Minesweeper_scrollable__8UBoh",
	"table": "Minesweeper_table__RTOD0",
	"tile": "Minesweeper_tile__M7sfh",
	"tile__steppedOnMine": "Minesweeper_tile__steppedOnMine__D4s6W",
	"tile__flag": "Minesweeper_tile__flag__dvKHe",
	"tile__falseFlag": "Minesweeper_tile__falseFlag__uiPl9",
	"tile__flagMode": "Minesweeper_tile__flagMode__60QBa",
	"tile__mine": "Minesweeper_tile__mine__fxPNB",
	"tile__stepped": "Minesweeper_tile__stepped__tvv7R",
	"tile__number1": "Minesweeper_tile__number1__Zp_V2",
	"tile__number2": "Minesweeper_tile__number2__Kbv28",
	"tile__number3": "Minesweeper_tile__number3__v8EIN",
	"tile__number4": "Minesweeper_tile__number4__t9TIE",
	"tile__number5": "Minesweeper_tile__number5__I9Wb0",
	"tile__number6": "Minesweeper_tile__number6__cNWcw",
	"tile__number7": "Minesweeper_tile__number7__nZrZp",
	"tile__number8": "Minesweeper_tile__number8__r2w5V"
};


/***/ }),

/***/ 7459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ Minesweeper)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1239);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5674);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_1__);


class Minesweeper {
    static DIFFICULTY = {
        EASY: {
            width: 9,
            height: 9,
            mines: 10
        },
        MEDIUM: {
            width: 16,
            height: 16,
            mines: 40
        },
        HARD: {
            width: 30,
            height: 16,
            mines: 99
        }
    };
    static DEFAULT_DIFFICULTY = "EASY";
    static getMinesweeperEnum(...values) {
        return values.reduce((acc, sym)=>({
                ...acc,
                [sym]: Symbol(sym)
            }), {});
    }
    static STATUS = Minesweeper.getMinesweeperEnum("UNINITIALIZED", "IN_GAME", "GAME_OVER", "COMPLETE");
    static EVENT = Minesweeper.getMinesweeperEnum("START", "STEP", "STATUS");
    options = {
        ...Minesweeper.DIFFICULTY[Minesweeper.DEFAULT_DIFFICULTY]
    };
    tiles = [];
    status = Minesweeper.STATUS.UNINITIALIZED;
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
        this.emit(Minesweeper.EVENT.STATUS, this.status);
    }
    eventEmitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
    constructor(options){
        this.reset(options);
    }
    reset(options) {
        if (options != null) {
            this.options = {
                ...this.options,
                ...options
            };
        }
        this.initializeEmptyMinefield();
        this.setStatus(Minesweeper.STATUS.UNINITIALIZED);
    }
    initializeEmptyMinefield() {
        this.tiles = lodash_times__WEBPACK_IMPORTED_MODULE_1___default()(this.options.height, (row)=>lodash_times__WEBPACK_IMPORTED_MODULE_1___default()(this.options.width, (col)=>({
                    isFlag: false,
                    isMine: false,
                    isSteppedOn: false,
                    surroundingMines: 0,
                    x: col,
                    y: row
                })));
    }
    stepOn(x, y) {
        // If this is flagged don't trigger a step
        const { isFlag , isSteppedOn , isMine  } = this.tiles[y][x];
        if (!isFlag) {
            if (!isSteppedOn) {
                if (this.status === Minesweeper.STATUS.UNINITIALIZED) {
                    this.initializeMinefield(x, y);
                    this.setStatus(Minesweeper.STATUS.IN_GAME);
                }
                this.tiles[y][x].isSteppedOn = true;
                if (isMine) {
                    this.setStatus(Minesweeper.STATUS.GAME_OVER);
                } else if (this.isTileEmpty(x, y)) {
                    this.startChainReaction(x, y);
                    this.setStatus(Minesweeper.STATUS.IN_GAME);
                }
            } else if (this.isTileSurroundingFlaggedMines(x, y)) {
                this.setStatus(Minesweeper.STATUS.IN_GAME);
                this.stepOnSurroundingTiles(x, y);
            }
        }
        this.emit(Minesweeper.EVENT.STEP);
        if (this.isMinefieldComplete()) {
            this.setStatus(Minesweeper.STATUS.COMPLETE);
        }
    }
    stepOnSurroundingTiles(x, y) {
        this.callSurroundingTiles(x, y, (tX, tY)=>{
            const { isMine , isFlag  } = this.tiles[tY][tX];
            if (!this.tiles[tY][tX].isSteppedOn) {
                if (this.isTileEmpty(tX, tY)) {
                    this.tiles[tY][tX].isSteppedOn = true;
                    this.startChainReaction(tX, tY);
                } else if (Minesweeper.xor(isMine, isFlag)) {
                    this.setStatus(Minesweeper.STATUS.GAME_OVER);
                } else if (!isFlag) {
                    this.tiles[tY][tX].isSteppedOn = true;
                }
            }
        });
    }
    isTileSurroundingFlaggedMines(x, y) {
        const { isFlag , isMine , isSteppedOn , surroundingMines  } = this.tiles[y][x];
        if (!isFlag && !isMine && isSteppedOn && surroundingMines > 0) {
            let flaggedMines = 0;
            this.callSurroundingTiles(x, y, (tX, tY)=>{
                if (this.tiles[tY][tX].isFlag) {
                    flaggedMines += 1;
                }
            });
            if (flaggedMines === surroundingMines) {
                return true;
            }
        }
        return false;
    }
    isTileEmpty(x, y) {
        const { isFlag , isMine , surroundingMines  } = this.tiles[y][x];
        return !(isFlag || isMine || surroundingMines > 0);
    }
    startChainReaction(x, y) {
        this.callSurroundingTiles(x, y, (tX, tY)=>{
            if (!this.tiles[tY][tX].isSteppedOn && !this.tiles[tY][tX].isFlag) {
                if (this.isTileEmpty(tX, tY)) {
                    this.tiles[tY][tX].isSteppedOn = true;
                    this.startChainReaction(tX, tY);
                } else if (this.tiles[tY][tX].surroundingMines > 0) {
                    this.tiles[tY][tX].isSteppedOn = true;
                }
            }
        });
    }
    initializeMinefield(x, y) {
        const useSafeArea = this.options.mines > this.options.width * this.options.height - this.getSurroundingTileArea(x, y);
        let mines = 0;
        while(mines < this.options.mines){
            const mineX = Math.floor(Math.random() * this.options.width);
            const mineY = Math.floor(Math.random() * this.options.height);
            const isInSafeArea = useSafeArea && (mineX === x || mineY === y) || !useSafeArea && this.isTileInArea(x, y, mineX, mineY);
            if (!isInSafeArea && !this.tiles[mineY][mineX].isMine) {
                this.tiles[mineY][mineX].isMine = true;
                mines += 1;
            }
        }
        for(let y1 = 0; y1 < this.options.height; y1 += 1){
            for(let x1 = 0; x1 < this.options.width; x1 += 1){
                if (!this.tiles[y1][x1].isMine) {
                    this.callSurroundingTiles(x1, y1, (cX, cY)=>{
                        if (this.tiles[cY][cX].isMine) {
                            this.tiles[y1][x1].surroundingMines += 1;
                        }
                    });
                }
            }
        }
    }
    getSurroundingTileArea(x, y) {
        const { minX , maxX , minY , maxY  } = this.getSurroundingTileLimits(x, y);
        return (maxX + 1 - minX) * (maxY + 1 - minY);
    }
    isTileInArea(aX, aY, tX, tY) {
        const { minX , maxX , minY , maxY  } = this.getSurroundingTileLimits(aX, aY);
        return tX >= minX && tX <= maxX && tY >= minY && tY <= maxY;
    }
    getSurroundingTileLimits(x, y) {
        const minY = Math.max(0, y - 1);
        const maxY = Math.min(this.options.height - 1, y + 1);
        const minX = Math.max(0, x - 1);
        const maxX = Math.min(this.options.width - 1, x + 1);
        return {
            minX,
            maxX,
            minY,
            maxY
        };
    }
    callSurroundingTiles(x, y, cb) {
        const { minX , maxX , minY , maxY  } = this.getSurroundingTileLimits(x, y);
        for(let tY = minY; tY <= maxY; tY += 1){
            for(let tX = minX; tX <= maxX; tX += 1){
                if (tX !== x || tY !== y) {
                    cb(tX, tY);
                }
            }
        }
    }
    toggleFlag(x, y) {
        if (!this.tiles[y][x].isSteppedOn) {
            this.tiles[y][x].isFlag = !this.tiles[y][x].isFlag;
            this.emit(Minesweeper.EVENT.STEP);
        }
    }
    // Expose Event Emitter API
    on = this.eventEmitter.on.bind(this.eventEmitter);
    off = this.eventEmitter.off.bind(this.eventEmitter);
    emit = this.eventEmitter.emit.bind(this.eventEmitter);
    /**
   * To be solved all mines must not be stepped on and all free tiles must be stepped on.
   * @returns boolean
   */ isMinefieldComplete() {
        return this.tiles.reduce((solved, row)=>solved && row.reduce((solvedCol, { isSteppedOn , isMine  })=>solvedCol && Minesweeper.xor(isSteppedOn, isMine), true), true);
    }
    static xor(a, b) {
        return a && !b || !a && b;
    }
    getMinefield() {
        // Get a cloned copy of the minefield
        return this.tiles.map((tile)=>({
                ...tile
            }));
    }
    getFlaggedMines() {
        return this.tiles.reduce((total, row)=>total + row.reduce((subtotal, col)=>subtotal + (col.isFlag ? 1 : 0), 0), 0);
    }
}


/***/ }),

/***/ 4574:
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
/* harmony import */ var _hooks_useClock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5135);
/* harmony import */ var _App_App_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4930);
/* harmony import */ var _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7459);
/* harmony import */ var _Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3335);
/* harmony import */ var _Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Minesweeper_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9171);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9923);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ramda__WEBPACK_IMPORTED_MODULE_2__, _App_App_utils__WEBPACK_IMPORTED_MODULE_5__]);
([ramda__WEBPACK_IMPORTED_MODULE_2__, _App_App_utils__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Minesweeper = ()=>{
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.DIFFICULTY */ .d.DIFFICULTY[_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.DEFAULT_DIFFICULTY */ .d.DEFAULT_DIFFICULTY]);
    const minesweeperRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(new _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper */ .d(options));
    const [tiles, setTiles] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(minesweeperRef.current.getMinefield());
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(minesweeperRef.current.getStatus());
    const [mines, setMines] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(options.mines - minesweeperRef.current.getFlaggedMines());
    const [stepMode, setStepMode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const { reset: resetClock , start: startClock , stop: stopClock , elapsed: timeElapsed  } = (0,_hooks_useClock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        minesweeperRef.current.reset(options);
        setTiles(minesweeperRef.current.getMinefield());
        setMines(options.mines - minesweeperRef.current.getFlaggedMines());
        setStatus(minesweeperRef.current.getStatus());
        setStepMode(true);
        resetClock();
    }, [
        options,
        resetClock
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handleUpdate = ()=>{
            setTiles(minesweeperRef.current.getMinefield());
            setMines(options.mines - minesweeperRef.current.getFlaggedMines());
        };
        minesweeperRef.current.on(_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.EVENT.STEP */ .d.EVENT.STEP, handleUpdate);
        const handleStatus = (status)=>{
            setStatus(status);
            switch(status){
                case _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.UNINITIALIZED */ .d.STATUS.UNINITIALIZED:
                    {
                        handleUpdate();
                        resetClock();
                        break;
                    }
                case _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.IN_GAME */ .d.STATUS.IN_GAME:
                    {
                        startClock();
                        break;
                    }
                case _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.COMPLETE */ .d.STATUS.COMPLETE:
                case _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.GAME_OVER */ .d.STATUS.GAME_OVER:
                    {
                        stopClock();
                        break;
                    }
            }
        };
        minesweeperRef.current.on(_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.EVENT.STATUS */ .d.EVENT.STATUS, handleStatus);
        return ()=>{
            minesweeperRef.current.off(_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.EVENT.STEP */ .d.EVENT.STEP, handleUpdate);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            minesweeperRef.current.off(_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.EVENT.STATUS */ .d.EVENT.STATUS, handleStatus);
        };
    }, [
        options,
        resetClock,
        startClock,
        stopClock
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handleComplete = (status)=>{
            if (status === _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.COMPLETE */ .d.STATUS.COMPLETE) {
                (0,_App_App_utils__WEBPACK_IMPORTED_MODULE_5__/* .event */ .B)({
                    action: "minesweeper"
                });
            }
        };
        minesweeperRef.current.on(_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.EVENT.STATUS */ .d.EVENT.STATUS, handleComplete);
        return ()=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            minesweeperRef.current.off(_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.EVENT.STATUS */ .d.EVENT.STATUS, handleComplete);
        };
    }, [
        options,
        resetClock,
        startClock,
        stopClock
    ]);
    const handleMouseUp = (x, y, tile)=>(evt)=>{
            evt.preventDefault();
            const toggleStepMode = (0,_Minesweeper_utils__WEBPACK_IMPORTED_MODULE_8__/* .isEmptyTile */ .LL)(tile);
            if (toggleStepMode) {
                setStepMode((currentMode)=>!currentMode);
            } else if (!(stepMode || (0,_Minesweeper_utils__WEBPACK_IMPORTED_MODULE_8__/* .isCoastingTile */ .Af)(tile)) || evt.metaKey || evt.button === 2) {
                minesweeperRef.current.toggleFlag(x, y);
            } else {
                minesweeperRef.current.stepOn(x, y);
            }
        };
    const getTile = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((element, tile)=>{
        if (tile != null) {
            const baseClassNames = {
                [(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tile)]: true,
                [(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tile__stepped)]: tile.isSteppedOn,
                [(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tile__flag)]: tile.isFlag,
                [(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default())[`tile__number${tile.surroundingMines}`]]: !tile.isFlag && tile.isSteppedOn && tile.surroundingMines > 0
            };
            let content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: "\xa0"
            });
            if (tile.isFlag || !(stepMode || tile.isSteppedOn) && !(status === _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.COMPLETE */ .d.STATUS.COMPLETE || status === _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.GAME_OVER */ .d.STATUS.GAME_OVER)) {
                content = "\uD83C\uDFF4";
            } else if (tile.isSteppedOn && tile.surroundingMines > 0) {
                content = `${tile.surroundingMines}`;
            }
            switch(status){
                case _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.UNINITIALIZED */ .d.STATUS.UNINITIALIZED:
                case _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.IN_GAME */ .d.STATUS.IN_GAME:
                    {
                        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(element, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                                ...baseClassNames,
                                [(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tile__flagMode)]: !stepMode && !tile.isSteppedOn && !tile.isFlag
                            })
                        }, content);
                    }
                case _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.COMPLETE */ .d.STATUS.COMPLETE:
                    {
                        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(element, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(baseClassNames),
                            onMouseUp: undefined
                        }, content);
                    }
                case _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.GAME_OVER */ .d.STATUS.GAME_OVER:
                    {
                        if (!tile.isFlag && tile.isMine) {
                            content = "\uD83D\uDCA3";
                        } else if (!tile.isSteppedOn && tile.isFlag && tile.isMine) {
                            content = "\uD83C\uDFF4";
                        } else if (tile.isFlag && !tile.isMine) {
                            content = "❌";
                        }
                        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(element, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                                ...baseClassNames,
                                [(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tile__mine)]: !tile.isSteppedOn && !tile.isFlag && tile.isMine,
                                [(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tile__steppedOnMine)]: tile.isSteppedOn && !tile.isFlag && tile.isMine,
                                [(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tile__flag)]: !tile.isSteppedOn && tile.isFlag && tile.isMine,
                                [(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tile__falseFlag)]: tile.isFlag && !tile.isMine
                            }),
                            onMouseUp: undefined
                        }, content);
                    }
            }
        }
        return element;
    }, [
        stepMode,
        status
    ]);
    const handleSetDifficulty = (0,ramda__WEBPACK_IMPORTED_MODULE_2__.thunkify)((difficulty)=>{
        setOptions({
            ...difficulty
        });
    });
    const handleReset = ()=>{
        minesweeperRef.current.reset();
        setStepMode(true);
        resetClock();
    };
    const handleSetStepMode = (0,ramda__WEBPACK_IMPORTED_MODULE_2__.thunkify)(setStepMode);
    const { width , height  } = options;
    const handleCustomOptions = (evt)=>{
        evt.preventDefault();
        const formWidth = evt.target.width.value;
        const formHeight = evt.target.height.value;
        const formMines = evt.target.mines.value;
        let width = parseInt(formWidth);
        let height = parseInt(formHeight);
        let mines = parseInt(formMines);
        if (isNaN(width) || width < 3) {
            width = 3;
        }
        if (isNaN(height) || height < 3) {
            height = 3;
        }
        if (isNaN(mines)) {
            mines = Math.floor(0.15 * width * height);
        } else if (mines < 1) {
            mines = 1;
        } else if (mines >= width * height) {
            mines = width * height - 1;
        }
        setOptions({
            width,
            height,
            mines
        });
    };
    // Prevent opening of the context menu when right clicking a tile
    const preventDefault = (evt)=>evt.preventDefault();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_README_md__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().scrollable),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                    className: (_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().table),
                    style: (0,_Minesweeper_utils__WEBPACK_IMPORTED_MODULE_8__/* .getMinefieldStyle */ .Ll)(width, height),
                    onContextMenu: preventDefault,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: (0,ramda__WEBPACK_IMPORTED_MODULE_2__.times)((y)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                children: (0,ramda__WEBPACK_IMPORTED_MODULE_2__.times)((x)=>tiles?.[y]?.[x] != null && getTile(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                                            [(_Minesweeper_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tile)]: true
                                        }),
                                        onMouseUp: handleMouseUp(x, y, tiles[y][x]),
                                        children: "\xa0"
                                    }, `tile-x-${x}-y-${y}`), tiles[y][x]), width)
                            }, `row-${y}`), height)
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    status === _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.UNINITIALIZED */ .d.STATUS.UNINITIALIZED && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Ready..."
                    }),
                    status === _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.IN_GAME */ .d.STATUS.IN_GAME && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "After ",
                            timeElapsed,
                            "s you still have to flag ",
                            mines,
                            " mines to finish.",
                            mines < 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: " Wait, what!?"
                            })
                        ]
                    }),
                    status === _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.GAME_OVER */ .d.STATUS.GAME_OVER && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Oops!"
                    }),
                    status === _Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.STATUS.COMPLETE */ .d.STATUS.COMPLETE && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Bravo! Hooray! You sweeped all mines in ",
                            timeElapsed,
                            "s!"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                            children: "Mode"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "radio",
                            name: "stepMode",
                            id: "setStepModeStep",
                            value: "step",
                            onChange: handleSetStepMode(true),
                            checked: stepMode
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "setStepModeStep",
                            children: "Click"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "radio",
                            name: "stepMode",
                            id: "setStepModeFlag",
                            value: "flag",
                            onChange: handleSetStepMode(false),
                            checked: !stepMode
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "setStepModeFlag",
                            children: "Flag"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                            children: "Choose your density (ehm... destiny)"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: handleReset,
                            children: "New game"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: handleSetDifficulty(_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.DIFFICULTY.EASY */ .d.DIFFICULTY.EASY),
                            children: "Easy"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: handleSetDifficulty(_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.DIFFICULTY.MEDIUM */ .d.DIFFICULTY.MEDIUM),
                            children: "Medium"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: handleSetDifficulty(_Minesweeper_lib__WEBPACK_IMPORTED_MODULE_6__/* .Minesweeper.DIFFICULTY.HARD */ .d.DIFFICULTY.HARD),
                            children: "Hard"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleCustomOptions,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "width",
                                    children: "Width"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "width",
                                    name: "width",
                                    type: "number",
                                    defaultValue: width,
                                    min: 3
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "height",
                                    children: "Height"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "height",
                                    name: "height",
                                    type: "number",
                                    defaultValue: height,
                                    min: 3
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "mines",
                                    children: "Mines"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "mines",
                                    name: "mines",
                                    type: "number",
                                    defaultValue: mines,
                                    min: 1
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    children: "Custom"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Minesweeper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Af": () => (/* binding */ isCoastingTile),
/* harmony export */   "LL": () => (/* binding */ isEmptyTile),
/* harmony export */   "Ll": () => (/* binding */ getMinefieldStyle)
/* harmony export */ });
const getMinefieldStyle = (width, height)=>({
        width: `calc(var(--minesweeper-tile-width) * ${width})`,
        height: `calc(var(--minesweeper-tile-height) * ${height})`
    });
const isCoastingTile = (tile)=>tile.isSteppedOn === true && tile.isMine === false && tile.isFlag === false && tile.surroundingMines > 0;
const isEmptyTile = (tile)=>tile.isSteppedOn === true && tile.isMine === false && tile.isFlag === false && tile.surroundingMines === 0;


/***/ }),

/***/ 8967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4574);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
([_apps_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_0__, _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_Minesweeper_Minesweeper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/minesweeper");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9923:
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
        h2: "h2",
        h3: "h3",
        em: "em"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "That's it. I don't have anything else to do. Well, I know there's a lot to\nfix and optimize but now I'm too tired."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "How it works"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "I tried to replicate the original game but there are some things I had to change\nto make it work in mobile and with dark theme. There are two modes, Click mode and Flag mode."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Click mode"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "When in click mode you can click on every tile. By clicking an empty uncoverd tile you will go to\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "Flag mode"
                    }),
                    ". By clicking a number you will expose all the tiles around (only if there are the number's\namount of tiles flagged). By pressing ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "command"
                    }),
                    " on ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "macOS"
                    }),
                    " and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "alt"
                    }),
                    " on other O.S. and clicking on an\nuncovered tile you will toggle the flag over the selected cell. By right-clicking a covered tile\nyou will toggle the flag over the selected cell."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Flag mode"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "When in flag mode you can only flag uncovered tiles. No more, no less (well you can still click\nempty uncovered tiles and go back to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "Click mode"
                    }),
                    ")."
                ]
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

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

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
var __webpack_exports__ = __webpack_require__.X(0, [151,930,135], () => (__webpack_exec__(8967)));
module.exports = __webpack_exports__;

})();