import * as o1js from 'o1js';

import {
    Field,
    SmartContract,
    state,
    State,
    method,
    Struct,
    Poseidon,
    Bool,
    Provable
} from 'o1js';


class Line extends Struct({
    values: [Field, Field, Field, Field, Field, Field, Field],
}) {}

class Gamemap extends Struct({
    gamemap: [Line, Line, Line, Line, Line, Line, Line],
}) {}

export class Factory extends SmartContract {
    @state(Field) hash_of_array = State<Field>();
    @state(Field) coins = State<Field>();

    init() {
        super.init();
        this.hash_of_array.set(Field(24343112362602261193952131669501893563596382350815697481837179470487654344826n));
        this.coins.set(Field(500));
    }

    /*
    TODO:
        *   add a mechanism to control the time, proove that user waited for a whiles
    */

    @method async work(secretmap: Gamemap) {
        let h = Poseidon.hash([]);
        const currentCoins = this.coins.getAndRequireEquals();

        for(let i= 0; i < 7 ; i++) {
            for(let j = 0; j < 7; j++) {
                h = Poseidon.hash([h, secretmap.gamemap[i].values[j]]);
            }
        }

        console.log(h);

        let a = this.hash_of_array.requireEquals(h);

        const left = Field(10);
        const right = Field(20);
        const top = Field(30);
        const bottom = Field(40);

        function getNewDirection(curr: Field, comingFrom: Field) {
            let newDirection = Field(1);

            newDirection = Provable.if(Bool.and(curr.equals(1), comingFrom.equals(left)), bottom, newDirection);
            newDirection = Provable.if(Bool.and(curr.equals(1), comingFrom.equals(bottom)), left, newDirection);
            
            newDirection = Provable.if(Bool.and(curr.equals(2), comingFrom.equals(left)), top, newDirection);
            newDirection = Provable.if(Bool.and(curr.equals(2), comingFrom.equals(top)), left, newDirection);

            newDirection = Provable.if(Bool.and(curr.equals(3), comingFrom.equals(top)), right, newDirection);
            newDirection = Provable.if(Bool.and(curr.equals(3), comingFrom.equals(right)), top, newDirection);

            newDirection = Provable.if(Bool.and(curr.equals(4), comingFrom.equals(right)), bottom, newDirection);
            newDirection = Provable.if(Bool.and(curr.equals(4), comingFrom.equals(bottom)), right, newDirection);

            newDirection = Provable.if(Bool.and(curr.equals(5), comingFrom.equals(left)), right, newDirection);
            newDirection = Provable.if(Bool.and(curr.equals(5), comingFrom.equals(right)), left, newDirection);

            newDirection = Provable.if(Bool.and(curr.equals(6), comingFrom.equals(top)), bottom, newDirection);
            newDirection = Provable.if(Bool.and(curr.equals(6), comingFrom.equals(bottom)), top, newDirection);
            
            return newDirection;
        }

        function getNewCoordinates(x: Field, y: Field, newDirection: Field) {
            let xReturn = Provable.if(newDirection.equals(left), x.sub(Field(1)), x);
            xReturn = Provable.if(newDirection.equals(right), x.add(Field(1)), xReturn);

            let yReturn = Provable.if(newDirection.equals(top), y.sub(1), y);
            yReturn = Provable.if(newDirection.equals(bottom), y.add(1), yReturn);

            return [xReturn,yReturn];
        }

        let currI = Field(0);
        let currJ = Field(1);
        let comingFrom = left; 

        let toAddCoins = Field(0);

        for(let k = 0; k < 12; k++) {
            for(let i = 0; i < 7; i++) {
                for(let j = 0; j < 7; j++) {
                    let isNode = Bool.and(currI.equals(Field(i)), currJ.equals(Field(j)));
    
                    toAddCoins = Provable.if(Bool.and(isNode, Bool.and(currI.greaterThan(0), currJ.greaterThan(0))), toAddCoins.add(50), toAddCoins);
    
                    let newDirection = Provable.if(isNode, getNewDirection(secretmap.gamemap[i].values[j], comingFrom), Field(1));
                    
                    let s = getNewCoordinates(currJ, currI, newDirection);
    
                    currJ = Provable.if(Bool.and(isNode, newDirection.greaterThan(1)), s[0], currJ);
                    currI = Provable.if(Bool.and(isNode, newDirection.greaterThan(1)), s[1], currI);
    
                    comingFrom = Provable.if(Bool.and(isNode, newDirection.equals(left)), right, comingFrom);
                    comingFrom = Provable.if(Bool.and(isNode, newDirection.equals(right)), left, comingFrom);
                    comingFrom = Provable.if(Bool.and(isNode, newDirection.equals(bottom)), top, comingFrom);
                    comingFrom = Provable.if(Bool.and(isNode, newDirection.equals(top)), bottom, comingFrom);
                }
            }
        }

        currI.assertEquals(0);
        currJ.assertEquals(0);
        this.coins.set(currentCoins.add(toAddCoins));
    }


    @method async changeMap(x: Field, y: Field, value: Field, secretmap: Gamemap) {
        let h = Poseidon.hash([]);

        for(let i= 0; i < 7 ; i++) {
            for(let j = 0; j < 7; j++) {
                h = Poseidon.hash([h, secretmap.gamemap[i].values[j]]);
            }
        }

        this.hash_of_array.requireEquals(h);

        h = Poseidon.hash([]);

        for(let i= 0; i < 7 ; i++) {
            for(let j = 0; j < 7; j++) {
                let f = Provable.if(Bool.and(x.equals(i), y.equals(j)), value, secretmap.gamemap[i].values[j]);
                h = Poseidon.hash([h, f]);
            }
        }

        this.hash_of_array.set(h);
    }

    @method async proveMap(secretmap: Gamemap) {
        let h = Poseidon.hash([]);

        for(let i= 0; i < 7 ; i++) {
            for(let j = 0; j < 7; j++) {
                h = Poseidon.hash([h, secretmap.gamemap[i].values[j]]);
            }
        }

        this.hash_of_array.requireEquals(h);

        let c = this.coins.getAndRequireEquals();

        this.coins.set(c.add(20));
    }
}
