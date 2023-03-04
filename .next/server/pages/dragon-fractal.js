(() => {
var exports = {};
exports.id = 548;
exports.ids = [548];
exports.modules = {

/***/ 5130:
/***/ ((module) => {

// Exports
module.exports = {
	"dragons__medium": "Dragons_dragons__medium__Y2a12",
	"dragons__small": "Dragons_dragons__small__luyo2"
};


/***/ }),

/***/ 8983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Dragons_Dragons)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/lib/triangles-dragons/matrix/plane.ts
var Plane;
(function(Plane) {
    let Orientation;
    (function(Orientation) {
        Orientation[Orientation["N"] = 0] = "N";
        Orientation[Orientation["E"] = 1] = "E";
        Orientation[Orientation["S"] = 2] = "S";
        Orientation[Orientation["W"] = 3] = "W";
    })(Orientation = Plane.Orientation || (Plane.Orientation = {}));
    let Direction;
    (function(Direction) {
        Direction[Direction["L"] = 0] = "L";
        Direction[Direction["R"] = 1] = "R";
    })(Direction = Plane.Direction || (Plane.Direction = {}));
    function getOppositeOrientation(orientation) {
        return (orientation + 2) % 4;
    }
    Plane.getOppositeOrientation = getOppositeOrientation;
    function turnLeft(orientation) {
        return (orientation + 3) % 4;
    }
    function turnRight(orientation) {
        return (orientation + 1) % 4;
    }
    function getNextOrientation(direction, currentOrientation) {
        switch(direction){
            case Direction.L:
                return turnLeft(currentOrientation);
            case Direction.R:
                return turnRight(currentOrientation);
            default:
                throw new Error("Unrecognized direction");
        }
    }
    Plane.getNextOrientation = getNextOrientation;
})(Plane || (Plane = {}));

;// CONCATENATED MODULE: ./src/lib/triangles-dragons/matrix/matrix.ts
class Matrix {
    matrix = [];
    rows = 0;
    columns = 0;
    setContent(content, row, column) {
        this.ensureMatrixSize(row + 1, column + 1);
        this.matrix[row][column] = content;
        return this;
    }
    getContent(row, column) {
        if (row >= 0 && row < this.rows && column >= 0 && column < this.columns) {
            return this.matrix[row][column];
        } else {
            throw new Error("ArrayIndexOutOfBoundException");
        }
    }
    ensureMatrixSize(rows, columns) {
        for(let j = this.columns; j < columns; j += 1){
            this.addColumn(j);
        }
        for(let i = this.rows; i < rows; i += 1){
            this.addRow(i);
        }
    }
    normalizeRowIndex(row) {
        return Math.max(0, Math.min(row, this.rows));
    }
    normalizeColumnIndex(column) {
        return Math.max(0, Math.min(column, this.columns));
    }
    addRow(row) {
        const normalizedRow = this.normalizeRowIndex(row);
        const newRow = [];
        for(let i = 0; i < this.columns; i += 1){
            newRow.push(null);
        }
        this.matrix.splice(normalizedRow, 0, newRow);
        this.rows += 1;
        return this;
    }
    addColumn(column) {
        const normalizedColumn = this.normalizeColumnIndex(column);
        for(let i = 0; i < this.rows; i += 1){
            this.matrix[i].splice(normalizedColumn, 0, null);
        }
        this.columns += 1;
        return this;
    }
    getRows() {
        return this.rows;
    }
    getColumns() {
        return this.columns;
    }
    getSize() {
        return this.rows * this.columns;
    }
}

;// CONCATENATED MODULE: ./src/lib/triangles-dragons/matrix/orientation-matrix.ts


class OrientationMatrix extends Matrix {
    constructor(orientation){
        super();
        this.orientation = orientation;
        this.row = 0;
        this.column = 0;
    }
    move(orientation) {
        switch(orientation){
            case Plane.Orientation.N:
                if (this.row === 0) {
                    this.addRow(0);
                } else {
                    this.row -= 1;
                }
                break;
            case Plane.Orientation.S:
                this.row += 1;
                if (this.row === this.rows) {
                    this.addRow(this.row);
                }
                break;
            case Plane.Orientation.W:
                if (this.column === 0) {
                    this.addColumn(0);
                } else {
                    this.column -= 1;
                }
                break;
            case Plane.Orientation.E:
                this.column += 1;
                if (this.column === this.columns) {
                    this.addColumn(this.column);
                }
                break;
            default:
                throw new Error(`Unknown direction`);
        }
        this.orientation = orientation;
        return this;
    }
}

;// CONCATENATED MODULE: ./src/lib/triangles-dragons/matrix/line.ts
var Line;
(function(Line) {
    let Char;
    (function(Char) {
        Char["EMPTY"] = " ";
        Char["EW"] = "─";
        Char["NS"] = "│";
        Char["ES"] = "┌";
        Char["SW"] = "┐";
        Char["NE"] = "└";
        Char["NW"] = "┘";
        Char["NES"] = "├";
        Char["NSW"] = "┤";
        Char["ESW"] = "┬";
        Char["NEW"] = "┴";
        Char["NESW"] = "┼";
        Char["W"] = "╴";
        Char["N"] = "╵";
        Char["E"] = "╶";
        Char["S"] = "╷";
    })(Char = Line.Char || (Line.Char = {}));
    class Line1 {
        $_N = 0;
        $_E = 0;
        $_S = 0;
        $_W = 0;
        get W() {
            return this.$_W !== 0;
        }
        set W(status) {
            this.$_W = status ? 8 : 0;
        }
        get N() {
            return this.$_N !== 0;
        }
        set N(status) {
            this.$_N = status ? 1 : 0;
        }
        get S() {
            return this.$_S !== 0;
        }
        set S(status) {
            this.$_S = status ? 4 : 0;
        }
        get E() {
            return this.$_E !== 0;
        }
        set E(status) {
            this.$_E = status ? 2 : 0;
        }
        constructor(N = false, E = false, S = false, W = false){
            this.W = W;
            this.N = N;
            this.S = S;
            this.E = E;
        }
        unite(line) {
            return new Line1(this.N || line.N, this.E || line.E, this.S || line.S, this.W || line.W);
        }
        intersecate(line) {
            return new Line1(this.N && line.N, this.E && line.E, this.S && line.S, this.W && line.W);
        }
        negate() {
            return new Line1(!this.N, !this.E, !this.S, !this.W);
        }
        toString() {
            const bits = this.$_W | this.$_N | this.$_S | this.$_E;
            switch(bits){
                case 0:
                    return Char.EMPTY;
                case 1:
                    return Char.N;
                case 2:
                    return Char.E;
                case 3:
                    return Char.NE;
                case 4:
                    return Char.S;
                case 5:
                    return Char.NS;
                case 6:
                    return Char.ES;
                case 7:
                    return Char.NES;
                case 8:
                    return Char.W;
                case 9:
                    return Char.NW;
                case 10:
                    return Char.EW;
                case 11:
                    return Char.NEW;
                case 12:
                    return Char.SW;
                case 13:
                    return Char.NSW;
                case 14:
                    return Char.ESW;
                case 15:
                    return Char.NESW;
                default:
                    throw new Error("Unrecognized symbol");
            }
        }
    }
    Line.Line = Line1;
    function getLine(char) {
        let bitmask;
        switch(char){
            case Char.EMPTY:
                bitmask = 0;
                break;
            case Char.N:
                bitmask = 1;
                break;
            case Char.E:
                bitmask = 2;
                break;
            case Char.NE:
                bitmask = 3;
                break;
            case Char.S:
                bitmask = 4;
                break;
            case Char.NS:
                bitmask = 5;
                break;
            case Char.ES:
                bitmask = 6;
                break;
            case Char.NES:
                bitmask = 7;
                break;
            case Char.W:
                bitmask = 8;
                break;
            case Char.NW:
                bitmask = 9;
                break;
            case Char.EW:
                bitmask = 10;
                break;
            case Char.NEW:
                bitmask = 11;
                break;
            case Char.SW:
                bitmask = 12;
                break;
            case Char.NSW:
                bitmask = 13;
                break;
            case Char.ESW:
                bitmask = 14;
                break;
            case Char.NESW:
                bitmask = 15;
                break;
            default:
                throw new Error("Unrecognized char");
        }
        return new Line1(Boolean(bitmask & 1), Boolean(bitmask & 2), Boolean(bitmask & 4), Boolean(bitmask & 8));
    }
    Line.getLine = getLine;
})(Line || (Line = {}));

;// CONCATENATED MODULE: ./src/lib/triangles-dragons/matrix/printable-direction-matrix.ts



class PrintableDirectionMatrix extends OrientationMatrix {
    step(newOrientation) {
        const comingOrientation = Plane.getOppositeOrientation(this.orientation);
        const newLine = new Line.Line(newOrientation === Plane.Orientation.N || comingOrientation === Plane.Orientation.N, newOrientation === Plane.Orientation.E || comingOrientation === Plane.Orientation.E, newOrientation === Plane.Orientation.S || comingOrientation === Plane.Orientation.S, newOrientation === Plane.Orientation.W || comingOrientation === Plane.Orientation.W);
        let newContent;
        try {
            const currentContent = this.getContent(this.row, this.column);
            newContent = currentContent.unite(newLine);
        } catch (exc) {
            newContent = newLine;
        }
        return this.setContent(newContent, this.row, this.column).move(newOrientation);
    }
    turn(direction) {
        const currentOrientation = this.orientation;
        const newOrientation = Plane.getNextOrientation(direction, currentOrientation);
        return this.step(newOrientation);
    }
    toString() {
        return this.matrix.map((row)=>row.map((col)=>col !== null ? col : " ").join("")).join("\n");
    }
}

;// CONCATENATED MODULE: ./src/lib/triangles-dragons/dragons.ts


const L_REP = "L";
const R_REP = "R";
const L = Symbol(L_REP);
const R = Symbol(R_REP);
function MirrorDirections(direction) {
    switch(direction){
        case L:
            return R;
        case R:
            return L;
        default:
            throw new Error("Unknown direction");
    }
}
function Bend(directions, direction) {
    const mirroredDirections = directions.map(MirrorDirections).reverse();
    switch(direction){
        case L:
        case R:
            return [
                ...directions,
                direction,
                ...mirroredDirections
            ];
        default:
            throw new Error("Unknown direction");
    }
}
function directionsToString(directions) {
    return directions.map((direction)=>direction === L ? L_REP : R_REP).join("");
}
function bendToDirection(bend) {
    switch(bend){
        case L:
            return Plane.Direction.L;
        case R:
            return Plane.Direction.R;
        default:
            throw new Error("Unknown direction");
    }
}
function getDragonFractal(iterations = 13, bendDirection = L, orientation = Plane.Orientation.E) {
    let dragon = [];
    for(let i = 1; i <= iterations; i += 1){
        dragon = Bend(dragon, bendDirection);
    }
    const matrix = new PrintableDirectionMatrix(orientation);
    for (let bend of dragon){
        matrix.turn(bendToDirection(bend));
    }
    return matrix;
}

// EXTERNAL MODULE: ./src/apps/Dragons/Dragons.module.scss
var Dragons_module = __webpack_require__(5130);
var Dragons_module_default = /*#__PURE__*/__webpack_require__.n(Dragons_module);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
;// CONCATENATED MODULE: ./src/apps/Dragons/README.md
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        a: "a"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime_.jsxs)(_components.p, {
        children: [
            "The ",
            jsx_runtime_.jsx(_components.a, {
                href: "https://en.wikipedia.org/wiki/Dragon_curve",
                children: "Dragon fractal"
            }),
            "\nis a fractal obtained by (ideally) folding a piece of\npaper in half in the same direction for a number of times. The figure is\nobtained by unfolding every fold at 90\xb0. I was obsessed with this\npicture since I saw it at the beginning of the chapters in Jurassic\nPark. Twenty years later I searched for it in the Internet and found the\nexplanation."
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
    return MDXLayout ? jsx_runtime_.jsx(MDXLayout, Object.assign({}, props, {
        children: jsx_runtime_.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const README = (MDXContent);

;// CONCATENATED MODULE: ./src/apps/Dragons/Dragons.tsx







const Dragons = ()=>{
    const [dragons, setDragons] = (0,external_react_.useState)({
        iterations: 3,
        fold: L,
        orientation: Plane.Orientation.E
    });
    const handleDragons = (evt)=>{
        const newDragons = parseInt(evt.target.value);
        if (newDragons > 0) {
            setDragons((current)=>({
                    ...current,
                    iterations: newDragons
                }));
        }
    };
    const handleFold = (evt)=>{
        switch(evt.target.value){
            case "L":
                {
                    setDragons((current)=>({
                            ...current,
                            fold: L
                        }));
                    break;
                }
            case "R":
                {
                    setDragons((current)=>({
                            ...current,
                            fold: R
                        }));
                    break;
                }
        }
    };
    const handleOrientation = (evt)=>{
        switch(evt.target.value){
            case "N":
                {
                    setDragons((current)=>({
                            ...current,
                            orientation: Plane.Orientation.N
                        }));
                    break;
                }
            case "E":
                {
                    setDragons((current)=>({
                            ...current,
                            orientation: Plane.Orientation.E
                        }));
                    break;
                }
            case "S":
                {
                    setDragons((current)=>({
                            ...current,
                            orientation: Plane.Orientation.S
                        }));
                    break;
                }
            case "W":
                {
                    setDragons((current)=>({
                            ...current,
                            orientation: Plane.Orientation.W
                        }));
                    break;
                }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(README, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                children: "Iterations"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "newDragons",
                                children: "This will generate a dragon fractal with the specified iterations (after 15 iterations will start to considerably slow down)."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "newDragons",
                                type: "number",
                                onChange: handleDragons,
                                value: dragons.iterations
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                children: "Fold orientation"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                name: "fold",
                                id: "foldLeft",
                                value: "L",
                                onChange: handleFold,
                                checked: dragons.fold === L
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "foldLeft",
                                children: "Left"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                name: "fold",
                                id: "foldRight",
                                value: "R",
                                onChange: handleFold,
                                checked: dragons.fold === R
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "foldRight",
                                children: "Right"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("legend", {
                                children: "Start direction"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                name: "orientation",
                                id: "orientationNorth",
                                value: "N",
                                onChange: handleOrientation,
                                checked: dragons.orientation === Plane.Orientation.N
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "orientationNorth",
                                children: "North"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                name: "orientation",
                                id: "orientationEast",
                                value: "E",
                                onChange: handleOrientation,
                                checked: dragons.orientation === Plane.Orientation.E
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "orientationEast",
                                children: "East"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                name: "orientation",
                                id: "orientationSouth",
                                value: "S",
                                onChange: handleOrientation,
                                checked: dragons.orientation === Plane.Orientation.S
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "orientationSouth",
                                children: "South"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                name: "orientation",
                                id: "orientationWest",
                                value: "W",
                                onChange: handleOrientation,
                                checked: dragons.orientation === Plane.Orientation.W
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "orientationWest",
                                children: "West"
                            }),
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                className: external_classnames_default()({
                    [(Dragons_module_default()).dragons]: true,
                    [(Dragons_module_default()).dragons__medium]: dragons.iterations > 10 && dragons.iterations <= 13,
                    [(Dragons_module_default()).dragons__small]: dragons.iterations > 13
                }),
                children: getDragonFractal(dragons.iterations, dragons.fold, dragons.orientation).toString()
            })
        ]
    });
};
/* harmony default export */ const Dragons_Dragons = (Dragons);


/***/ }),

/***/ 8390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_Dragons_Dragons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8983);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_Dragons_Dragons__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/dragon-fractal");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

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
var __webpack_exports__ = __webpack_require__.X(0, [151,930], () => (__webpack_exec__(8390)));
module.exports = __webpack_exports__;

})();