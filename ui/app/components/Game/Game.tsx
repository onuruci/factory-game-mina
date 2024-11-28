import React from "react";
import { Field, Struct } from 'o1js';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ZkappWorkerClient from "../../zkappWorkerClient";
import GridElement from "../GridElement";

import one_inactive from "../../utils/images/one_inactive.png";
import five_inactive from "../../utils/images/five_inactive.png";
import left_image from "../../utils/images/left-image.png";
import right_image from "../../utils/images/turn-right.png";
import cancel_image from "../../utils/images/cancel.png";
import { read } from "fs";

class Line extends Struct({
    values: [Field, Field, Field, Field, Field, Field, Field],
}) {}

class Gamemap extends Struct({
    gamemap: [Line, Line, Line, Line, Line, Line, Line],
}) {}

interface GameProps {
    zkappWorkerClient: null | ZkappWorkerClient,
    gameMap: Array<number>,
    setGameMap: any,
    setCurrentHash: any,
    setCurrentCoins: any,
    ready: boolean,
    setReady: any,
    displayStep: any
}


const Game = ({zkappWorkerClient, gameMap, setGameMap, setCurrentHash, setCurrentCoins, ready, setReady, displayStep} : GameProps) => {
    const [selectedI, setI] = useState(0);
    const [selectedJ, setJ] = useState(0);
    const [active, setActive] = useState(false);

    const handleSelect = (i: number, j: number) => {
        setI(i);
        setJ(j);
    }

    const handleChange = (i: number) => {
        if(selectedI === 0 && selectedJ === 0) return;
        if(!ready) return;

        let arr = gameMap;
        arr[selectedI*7+selectedJ] = i;

        setGameMap([...arr]);
    }

    const handleTurnLeft = () => {
        if(selectedI === 0 && selectedJ === 0) return;
        if(!ready) return;

        let arr = gameMap;

        let s = arr[selectedI*7+selectedJ];
        if(s === 1) {
            s = 4
        } else if(s > 1 && s<=4) {
            s--;
        } else if(s === 5) {
            s = 6;
        } else if(s === 6) {
            s = 5;
        }
        arr[selectedI*7+selectedJ] = s;
        setGameMap([...arr]);
    }

    const handleCancel = () => {
        if(selectedI === 0 && selectedJ === 0) return;
        if(!ready) return;

        let arr = gameMap;
        let s = arr[selectedI*7+selectedJ];

        s = 0;

        arr[selectedI*7+selectedJ] = s;
        setGameMap([...arr]);
    }

    const handleTurnRight = () => {
        if(selectedI === 0 && selectedJ === 0) return;
        if(!ready) return;
        let arr = gameMap;

        let s = arr[selectedI*7+selectedJ];
        if(s === 4) {
            s = 1;
        } else if(s >= 1 && s < 4){
            s++;
        } else if(s === 5) {
            s = 6;
        } else if(s === 6) {
            s = 5;
        }

        arr[selectedI*7+selectedJ] = s;
        setGameMap([...arr]);
    }

    useEffect(() => {
        const work = async () => {
            if(active && zkappWorkerClient != null) {
                try {
                    displayStep("There is an active path working the factory");
                    let c = await zkappWorkerClient?.work(gameMap)

                    let a = await zkappWorkerClient?.getCoins();

                    displayStep("Gained coins");
                    console.log("Coins: ", a);
                    setCurrentCoins(a);

                    if(active) {
                        setTimeout(() => {
                            work();
                        }, 1000)
                    }

                    console.log("Coins: ",c);
                } catch (e) {
                    console.log(e);
                    displayStep("Active path is broken");
                }
            }
        }

        if(active) {
            work();
        }
        
    }, [active]);

    useEffect(() => {
        const changeMap = async () => {
            setReady(false)
            displayStep("Game map is being updated on chain");

            let i = selectedI*7 + selectedJ;

            console.log("Changed index: ", i);
            if(i > 0) {
                await zkappWorkerClient?.changeMap(parseInt((i/7).toString()), i%7, gameMap[i], gameMap);
            
                let a = await zkappWorkerClient?.getHash();
                setCurrentHash(a);
            }

            displayStep("Map hash has changed you can continue playing");
            setReady(true);
        }

        if(ready) {
            changeMap();
        }

    }, [gameMap]);

    useEffect(() => {
        let i = 0;
        let j = 1;
        const left = 10;
        const right = 20;
        const top = 30;
        const bottom = 40;
        let comingFrom = left;
        let shut = false;
        for(let k = 0; k < 49; k++) {
            let curr = gameMap[i*7+j];
            if(i < 0 || i > 7 || j < 0 || j > 7 ) break;
            if(shut) {
                setActive(false);
                break;
            }

            switch(curr) {
                case 1:
                    if(comingFrom === left) {
                        comingFrom = top;
                        i++;
                    } else if(comingFrom === bottom) {
                        comingFrom = right;
                        j--;
                    } else {
                        shut = true;
                    }
                    break;
                case 2:
                    if(comingFrom === left) {
                        comingFrom = bottom;
                        i--;
                    } else if(comingFrom === top) {
                        comingFrom = right;
                        j--;
                    } else {
                        shut = true;
                    }
                    break;
                case 3:
                    if(comingFrom === right) {
                        comingFrom = bottom;
                        i--;
                    } else if(comingFrom === top) {
                        comingFrom = left;
                        j++;
                    } else {
                        shut = true;
                    }
                    break;
                case 4:
                    if(comingFrom === right) {
                        comingFrom = top;
                        i++;
                    } else if(comingFrom === bottom) {
                        comingFrom = left;
                        j++;
                    } else {
                        shut = true;
                    }
                    break;
                case 5:
                    if(comingFrom === left) {
                        comingFrom = left;
                        j++;
                    } else if(comingFrom === right) {
                        comingFrom = right;
                        j--;
                    } else {
                        shut = true;
                    }
                    break;
                case 6:
                    if(comingFrom === top) {
                        comingFrom = top;
                        i++;
                    } else if(comingFrom === bottom) {
                        comingFrom = bottom;
                        i--;
                    } else {
                        shut = true;
                    }
                    break;
            }
        }
        console.log("I: ", i);
        console.log("J: ", j);


        if(i === 0 && j === 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [gameMap]);

    return(
        <div>
            <div className="bg-red-800 p-4 mx-auto">
            <div className="grid grid-cols-7 grid-rows-7 w-fit mx-auto">
                {gameMap.map((el, index) => (
                <div
                    key={index}
                    className="p-0 w-16 h-16 border border-gray-300 bg-blue-500 text-white flex justify-center items-center"
                >
                    <GridElement element={el} active={active} handleSelect={handleSelect} isSelected={index === (selectedI * 7 + selectedJ)} i={parseInt((index/7).toString())} j={(index % 7)}/>
                </div>
                ))}
            </div>
            <div className="mx-auto w-3/5 mt-10">
                <div className="text-lg text-center">Change the selected item</div>
                <div className="flex">
                    <div className="w-16 h-16 mx-auto cursor-pointer" onClick={() => handleChange(1)}>
                        <Image src={one_inactive} alt="Description of Image"/>
                    </div>
                    <div className="w-16 h-16 mx-auto cursor-pointer" onClick={() => handleChange(5)}>
                        <Image src={five_inactive} alt="Description of Image"/>
                    </div>
                    <div className="w-16 h-16 mx-auto cursor-pointer" onClick={() => handleTurnLeft()}>
                        <Image src={left_image} alt="Description of Image"/>
                    </div>
                    <div className="w-16 h-16 mx-auto cursor-pointer" onClick={() => {handleTurnRight()}}>
                        <Image src={right_image} alt="Description of Image"/>
                    </div>
                    <div className="w-16 h-16 mx-auto cursor-pointer" onClick={() => {handleCancel()}}>
                        <Image src={cancel_image} alt="Description of Image"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Game;
