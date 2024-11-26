import React from "react";
import { useState, useEffect } from "react";
import Image from 'next/image';

import base_active from "../../utils/images/base_active.png"
import base_inactive from "../../utils/images/base_inactive.png"
import zero from "../../utils/images/zero.png"

import one_active from "../../utils/images/one_active.png";
import one_inactive from "../../utils/images/one_inactive.png";

import two_active from "../../utils/images/two_active.png";
import two_inactive from "../../utils/images/two_inactive.png";

import three_active from "../../utils/images/three_active.png";
import three_inactive from "../../utils/images/three_inactive.png";

import four_active from "../../utils/images/four_active.png";
import four_inactive from "../../utils/images/four_inactive.png";

import five_active from "../../utils/images/five_active.png";
import five_inactive from "../../utils/images/five_inactive.png";

import six_active from "../../utils/images/six_active.png";
import six_inactive from "../../utils/images/six_inactive.png";




interface GridElementProps {
    element: number;
    active: boolean;
    isSelected: boolean;
    i: number;
    j: number;
    handleSelect: (arg0: number, arg1: number) => void
}

const GridElement = ({element, active, isSelected,i, j, handleSelect}: GridElementProps) => {
    const [src, setSrc] = useState(zero);

    useEffect(() => {
        switch(element) {
            case 0:
                setSrc(zero);
                break;
            case 1:
                if(active) {
                    setSrc(one_active);
                } else {
                    setSrc(one_inactive);
                }
                break;
            case 2:
                if(active) {
                    setSrc(two_active);
                } else {
                    setSrc(two_inactive);
                }
                break;
            case 3:
                if(active) {
                    setSrc(three_active);
                } else {
                    setSrc(three_inactive);
                }
                break;
            case 4:
                if(active) {
                    setSrc(four_active);
                } else {
                    setSrc(four_inactive);
                }
                break;
            case 5:
                if(active) {
                    setSrc(five_active);
                } else {
                    setSrc(five_inactive);
                }
                break;
            case 6:
                if(active) {
                    setSrc(six_active);
                } else {
                    setSrc(six_inactive);
                }
                break;
            case 7:
                if(active) {
                    setSrc(base_active);
                } else {
                    setSrc(base_inactive);
                }
                break;
        }
    }, [element, active]);

    return(
        <div onClick={() => handleSelect(i, j)} className={isSelected ? "border-2 border-white cursor-pointer": "cursor-pointer"}>
            <Image src={src} alt="Description of Image" />
        </div>
    );
}
export default GridElement;