"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[153],{

/***/ 2153:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factory: function() { return /* binding */ Factory; }
/* harmony export */ });
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(337);
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

class Line extends (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Struct */ .AU)({
    values: [
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN
    ]
}) {
}
class Gamemap extends (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Struct */ .AU)({
    gamemap: [
        Line,
        Line,
        Line,
        Line,
        Line,
        Line,
        Line
    ]
}) {
}
class Factory extends o1js__WEBPACK_IMPORTED_MODULE_0__/* .SmartContract */ .C3 {
    init() {
        super.init();
        this.hash_of_array.set((0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(24343112362602261193952131669501893563596382350815697481837179470487654344826n));
        this.coins.set((0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(500));
    }
    /*
    TODO:
        *   add a mechanism to control the time, proove that user waited for a whiles
    */ async work(secretmap) {
        let h = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash([]);
        const currentCoins = this.coins.getAndRequireEquals();
        for(let i = 0; i < 7; i++){
            for(let j = 0; j < 7; j++){
                h = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash([
                    h,
                    secretmap.gamemap[i].values[j]
                ]);
            }
        }
        console.log(h);
        let a = this.hash_of_array.requireEquals(h);
        const left = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(10);
        const right = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(20);
        const top = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(30);
        const bottom = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(40);
        function getNewDirection(curr, comingFrom) {
            let newDirection = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(1);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(1), comingFrom.equals(left)), bottom, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(1), comingFrom.equals(bottom)), left, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(2), comingFrom.equals(left)), top, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(2), comingFrom.equals(top)), left, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(3), comingFrom.equals(top)), right, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(3), comingFrom.equals(right)), top, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(4), comingFrom.equals(right)), bottom, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(4), comingFrom.equals(bottom)), right, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(5), comingFrom.equals(left)), right, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(5), comingFrom.equals(right)), left, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(6), comingFrom.equals(top)), bottom, newDirection);
            newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(curr.equals(6), comingFrom.equals(bottom)), top, newDirection);
            return newDirection;
        }
        function getNewCoordinates(x, y, newDirection) {
            let xReturn = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(newDirection.equals(left), x.sub((0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(1)), x);
            xReturn = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(newDirection.equals(right), x.add((0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(1)), xReturn);
            let yReturn = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(newDirection.equals(top), y.sub(1), y);
            yReturn = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(newDirection.equals(bottom), y.add(1), yReturn);
            return [
                xReturn,
                yReturn
            ];
        }
        let currI = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0);
        let currJ = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(1);
        let comingFrom = left;
        let toAddCoins = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0);
        for(let k = 0; k < 12; k++){
            for(let i = 0; i < 7; i++){
                for(let j = 0; j < 7; j++){
                    let isNode = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(currI.equals((0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(i)), currJ.equals((0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(j)));
                    toAddCoins = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(isNode, o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(currI.greaterThan(0), currJ.greaterThan(0))), toAddCoins.add(50), toAddCoins);
                    let newDirection = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(isNode, getNewDirection(secretmap.gamemap[i].values[j], comingFrom), (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(1));
                    let s = getNewCoordinates(currJ, currI, newDirection);
                    currJ = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(isNode, newDirection.greaterThan(1)), s[0], currJ);
                    currI = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(isNode, newDirection.greaterThan(1)), s[1], currI);
                    comingFrom = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(isNode, newDirection.equals(left)), right, comingFrom);
                    comingFrom = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(isNode, newDirection.equals(right)), left, comingFrom);
                    comingFrom = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(isNode, newDirection.equals(bottom)), top, comingFrom);
                    comingFrom = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(isNode, newDirection.equals(top)), bottom, comingFrom);
                }
            }
        }
        currI.assertEquals(0);
        currJ.assertEquals(0);
        this.coins.set(currentCoins.add(toAddCoins));
    }
    async changeMap(x, y, value, secretmap) {
        let h = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash([]);
        for(let i = 0; i < 7; i++){
            for(let j = 0; j < 7; j++){
                h = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash([
                    h,
                    secretmap.gamemap[i].values[j]
                ]);
            }
        }
        this.hash_of_array.requireEquals(h);
        h = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash([]);
        for(let i = 0; i < 7; i++){
            for(let j = 0; j < 7; j++){
                let f = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Provable */ .PC.if(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Bool */ .tW.and(x.equals(i), y.equals(j)), value, secretmap.gamemap[i].values[j]);
                h = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash([
                    h,
                    f
                ]);
            }
        }
        this.hash_of_array.set(h);
    }
    async proveMap(secretmap) {
        let h = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash([]);
        for(let i = 0; i < 7; i++){
            for(let j = 0; j < 7; j++){
                h = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash([
                    h,
                    secretmap.gamemap[i].values[j]
                ]);
            }
        }
        this.hash_of_array.requireEquals(h);
        let c = this.coins.getAndRequireEquals();
        this.coins.set(c.add(20));
    }
    constructor(){
        super(...arguments);
        this.hash_of_array = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.coins = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
    }
}
__decorate([
    (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], Factory.prototype, "hash_of_array", void 0);
__decorate([
    (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], Factory.prototype, "coins", void 0);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        Gamemap
    ]),
    __metadata("design:returntype", Promise)
], Factory.prototype, "work", null);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        Gamemap
    ]),
    __metadata("design:returntype", Promise)
], Factory.prototype, "changeMap", null);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        Gamemap
    ]),
    __metadata("design:returntype", Promise)
], Factory.prototype, "proveMap", null); //# sourceMappingURL=Factory.js.map


/***/ })

}]);