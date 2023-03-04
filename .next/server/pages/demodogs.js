"use strict";
(() => {
var exports = {};
exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 9402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DemoDogs_DemoDogs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/lib/polygram/Collection.ts
class StringTerm {
    constructor(term){
        this.term = term;
    }
    getStringValue() {
        return this.term;
    }
    toString() {
        return this.getStringValue();
    }
    asPromise() {
        return Promise.resolve(this.getStringValue());
    }
}
const normalizeTerm = (term)=>typeof term === "string" ? new StringTerm(term) : term;
class WeightedTerm {
    _weight = 0;
    get weight() {
        return this._weight;
    }
    constructor(term, weight = 0){
        this.term = normalizeTerm(term);
        if (weight < 0) {
            throw new Error("Term weight must be >= 0");
        }
        this._weight = weight;
    }
    getStringValue() {
        return this.term.getStringValue();
    }
    toString() {
        return this.getStringValue();
    }
    asPromise() {
        return Promise.resolve(this.getStringValue());
    }
}
class WeightedCollection {
    collection = [];
    weight = 0;
    weights = [];
    constructor(...collection){
        if (collection.length <= 0) {
            throw new Error("Collection must have at least one element");
        }
        this.collection = collection.map((term)=>term instanceof WeightedTerm ? term : new WeightedTerm(term)).sort((a, b)=>a.weight - b.weight);
        this.weights = this.collection.reduce((weights, term, index)=>[
                ...weights,
                term.weight + (index > 0 ? weights[index - 1] : 0) + 1
            ], []);
        this.weight = this.collection.reduce((sum, term)=>sum + term.weight, 0) + this.collection.length;
    }
    getRandomIndex() {
        const randomWeight = Math.floor(Math.random() * this.weight);
        let i = 0;
        for(; i < this.weights.length; i += 1){
            if (randomWeight < this.weights[i]) {
                break;
            }
        }
        return i;
    }
    getStringValue() {
        return this.collection[this.getRandomIndex()].getStringValue();
    }
    toString() {
        return this.getStringValue();
    }
    forExpansion() {
        return new WeightedTerm(this, this.weight);
    }
    asPromise() {
        return Promise.resolve(this.getStringValue());
    }
}
class TermsJoiner {
    separator = "";
    constructor(...parts){
        this.parts = parts.map((term)=>typeof term === "string" ? new StringTerm(term) : term);
    }
    withSeparator(separator) {
        this.separator = separator;
        return this;
    }
    getStringValue() {
        return this.parts.map((part)=>part.getStringValue()).join(this.separator);
    }
    toString() {
        return this.getStringValue();
    }
    asPromise() {
        return Promise.resolve(this.getStringValue());
    }
}
class SpaceJoiner extends (/* unused pure expression or super */ null && (TermsJoiner)) {
    constructor(...parts){
        super(...parts);
        this.withSeparator(" ");
    }
}
const join = (...terms)=>new TermsJoiner(...terms);
const pickOne = (...terms)=>new WeightedCollection(...terms);
const maybePickOne = (...terms)=>pickOne("", pickOne(...terms).forExpansion());
const weight = (term, weight)=>new WeightedTerm(term, weight); // DEMODOGS :D
 // const barbon = join("Barbon", pickOne("e", "cino"));
 // const volp = join("Volp", pickOne("ino", "one"));
 // const races = pickOne(
 //   "Carlino",
 //   "Pastore",
 //   "Beagle",
 //   "Mastino",
 //   weight(barbon, 2),
 //   weight(volp, 2),
 //   "Shiba",
 //   "Chihuahua",
 //   "Lupo",
 //   "Cirneco",
 //   "Rottweiler",
 //   "Dobermann",
 //   "Pitbull",
 //   "Labrador",
 //   "Golden",
 //   "Schnauzer",
 //   "Akita",
 //   "Bull",
 //   "Levriero",
 //   "Dalmata",
 //   "Boxer",
 //   "Bulldog",
 //   "Jack",
 //   "Alano",
 //   "Basset",
 //   "Bassotto",
 //   "Bouledogue"
 // );
 // const variants = pickOne("Inu", "Retriever", "Terrier", "Russell", "Hound", "Spaniel");
 // const nationalities = pickOne(
 //   "Napoletano",
 //   "Americano",
 //   "Tedesco",
 //   "Cecoslovacco",
 //   "Inglese",
 //   "Italiano",
 //   "dell'Etna",
 //   "Messicano",
 //   "Australiano",
 //   "Giapponese",
 //   "Afghano",
 //   "Francese"
 // );
 // const dogRaces = join(
 //   races,
 //   pickOne("", weight(variants, 2)),
 //   pickOne("", weight(nationalities, 2))
 // ).withSeparator(" ");
 // // for (var i = 0; i < 10; i += 1) {
 // //  console.log(dogRaces.toString().trim());
 // // }
 // const seniority = pickOne("Junior", "Senior");
 // const preAdj = pickOne("Inclusion", "Human", "Pragmatic");
 // const adjectives = pickOne("UX", "UI", "CX", "Web", "Testing", "Quality", "Quality Assurance", "Project");
 // const assistant = join("Assistant", pickOne("", "Extraordinaire")).withSeparator(' ');
 // const jobTitle = pickOne("Developer", "Designer", "Consultant", "VP", "Vice President", "President", "Advocate", "Evangelist", "Manager", "Intern", assistant, "Master");
 // const jobTitles = join(maybePickOne(seniority), pickOne("", preAdj), maybePickOne(adjectives), jobTitle).withSeparator(' ');
 // for (var i = 0; i < 10; i += 1) {
 //   console.log(jobTitles.toString().trim());
 // }

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
;// CONCATENATED MODULE: ./src/apps/DemoDogs/README.md
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        a: "a"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime_.jsxs)(_components.p, {
        children: [
            "This was inspired by ",
            jsx_runtime_.jsx(_components.a, {
                href: "http://polygen.org/",
                children: "Polygen"
            }),
            ", I wanted to create\na suite of functions that could help you write a Polygen-like generative grammar.\nThe verbs are very limited but they do most of the work you need. The challenge\nfor me here was to pick out an element from a weighted collection. The\npseudo-random generator does not work very well here, too many terms are\nrepeated but it seems ok."
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

;// CONCATENATED MODULE: ./src/apps/DemoDogs/DemoDogs.tsx




// DEMODOGS :D
const barbon = join("Barbon", pickOne("e", "cino"));
const volp = join("Volp", pickOne("ino", "e"));
const races = pickOne("Carlino", "Pastore", "Beagle", "Mastino", weight(barbon, 2), weight(volp, 2), "Shiba", "Chihuahua", "Lupo", "Cirneco", "Rottweiler", "Dobermann", "Pitbull", "Labrador", "Golden", "Schnauzer", "Akita", "Bull", "Levriero", "Dalmata", "Boxer", "Bulldog", "Jack", "Alano", "Basset", "Bassotto", "Bouledogue");
const variants = pickOne("Inu", "Retriever", "Terrier", "Russell", "Hound", "Spaniel");
const nationalities = pickOne("Napoletano", "Americano", "Tedesco", "Cecoslovacco", "Inglese", "Italiano", "dell'Etna", "Messicano", "Australiano", "Giapponese", "Afghano", "Francese");
const dogRaces = join(races, pickOne("", weight(variants, 2)), pickOne("", weight(nationalities, 2))).withSeparator(" ");
const getDemoDogs = ()=>{
    const demoDogs = [];
    for(let i = 0; i < 10; i += 1){
        demoDogs.push(dogRaces.toString().trim());
    }
    return demoDogs;
};
const DemoDogs = ()=>{
    const [demoDogs, setDemoDogs] = (0,external_react_.useState)();
    const handleDemoDogs = ()=>{
        setDemoDogs(getDemoDogs());
    };
    (0,external_react_.useEffect)(()=>{
        handleDemoDogs();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(README, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Dog breeds"
                    }),
                    demoDogs != null && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: demoDogs.map((demoDog)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: demoDog
                            }, demoDog))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleDemoDogs,
                            children: "Gimme more dog breeds"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const DemoDogs_DemoDogs = (DemoDogs);


/***/ }),

/***/ 240:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _apps_DemoDogs_DemoDogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9402);
/* harmony import */ var _apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__]);
_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_apps_DemoDogs_DemoDogs__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
const getStaticProps = (0,_apps_App_App_utils__WEBPACK_IMPORTED_MODULE_1__/* .getGetStaticProps */ .bM)("/demodogs");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3991:
/***/ ((module) => {

module.exports = import("ramda");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [151,930], () => (__webpack_exec__(240)));
module.exports = __webpack_exports__;

})();