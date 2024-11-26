(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[931],{

/***/ 3784:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9380));


/***/ }),

/***/ 9380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(6063);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./app/reactCOIServiceWorker.tsx
function loadCOIServiceWorker() {
    if ( true && window.location.hostname != "localhost") {
        const coi = window.document.createElement("script");
        coi.setAttribute("src", "/factory-game-mina/coi-serviceworker.min.js"); // update if your repo name changes for 'npm run deploy' to work correctly
        window.document.head.appendChild(coi);
    }
}
loadCOIServiceWorker();


// EXTERNAL MODULE: ./node_modules/comlink/dist/esm/comlink.mjs
var comlink = __webpack_require__(3302);
;// CONCATENATED MODULE: ./app/zkappWorkerClient.ts

class ZkappWorkerClient {
    async setActiveInstanceToLocal() {
        return this.remoteApi.setActiveInstanceToLocal();
    }
    async loadContract() {
        return this.remoteApi.loadContract();
    }
    async compileContract() {
        return this.remoteApi.compileContract();
    }
    async getHash() {
        const result = await this.remoteApi.getHash();
        return result;
    }
    constructor(){
        // Initialize the worker from the zkappWorker module
        const worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(14), __webpack_require__.b)), {
            type: undefined
        });
        // Wrap the worker with Comlink to enable direct method invocation
        this.remoteApi = comlink/* wrap */.Ud(worker);
    }
}


;// CONCATENATED MODULE: ./app/components/CheckWallet/CheckWallet.tsx


const CheckWallet = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            "Could not find a wallet.",
            " ",
            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                href: "https://www.aurowallet.com/",
                target: "_blank",
                rel: "noreferrer",
                children: "Install Auro wallet here"
            })
        ]
    });
};
/* harmony default export */ var CheckWallet_CheckWallet = (CheckWallet);

;// CONCATENATED MODULE: ./app/components/CheckWallet/index.ts

/* harmony default export */ var components_CheckWallet = (CheckWallet_CheckWallet);

;// CONCATENATED MODULE: ./app/components/Setup/Setup.tsx




const Setup = (param)=>{
    let { hasWallet, transactionlink, displayText } = param;
    const stepDisplay = transactionlink ? /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
        href: transactionlink,
        target: "_blank",
        rel: "noreferrer",
        style: {
            textDecoration: "underline"
        },
        children: "View transaction"
    }) : displayText;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Home_module_default()).start,
        style: {
            fontWeight: "bold",
            fontSize: "1.5rem",
            paddingBottom: "5rem"
        },
        children: [
            stepDisplay,
            !hasWallet && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_CheckWallet, {})
        ]
    });
};
/* harmony default export */ var Setup_Setup = (Setup);

;// CONCATENATED MODULE: ./app/components/Setup/index.ts

/* harmony default export */ var components_Setup = (Setup_Setup);

// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 26 modules
var Tabs = __webpack_require__(4273);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(7183);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 3 modules
var Box = __webpack_require__(3159);
;// CONCATENATED MODULE: ./app/components/TabPanel/TabPanel.tsx





function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: "simple-tabpanel-".concat(index),
        "aria-labelledby": "simple-tab-".concat(index),
        ...other,
        children: value === index && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            sx: {
                p: 3
            },
            children: children
        })
    });
}
function a11yProps(index) {
    return {
        id: "simple-tab-".concat(index),
        "aria-controls": "simple-tabpanel-".concat(index)
    };
}
function TabPanel(param) {
    let { child1 } = param;
    const [value, setValue] = react.useState(0);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                    justifyContent: "center",
                    width: "70%",
                    marginX: "auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
                    value: value,
                    onChange: handleChange,
                    "aria-label": "basic tabs example",
                    sx: {
                        flexGrow: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: "Game",
                            ...a11yProps(0),
                            sx: {
                                marginX: "auto"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: "How to Play",
                            ...a11yProps(1),
                            sx: {
                                marginX: "auto"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: "About",
                            ...a11yProps(2),
                            sx: {
                                marginX: "auto"
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomTabPanel, {
                value: value,
                index: 0,
                children: child1
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomTabPanel, {
                value: value,
                index: 1,
                children: "Item Two"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomTabPanel, {
                value: value,
                index: 2,
                children: "Item Three"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/TabPanel/index.ts

/* harmony default export */ var components_TabPanel = (TabPanel);

// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6648);
;// CONCATENATED MODULE: ./app/utils/images/base_active.png
/* harmony default export */ var base_active = ({"src":"/factory-game-mina//_next/static/media/base_active.99569cf3.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEWrpKmso6qqpKmopaeppKinpaelpqWopKekpqWkpqSZqp2Xqpx8sot6sop5solltn9ft3xYuHhTuXZNunRMunNCu29Bu28YvmUSvmQQvmQPvmQNvmQHvmMGvmMAwVgAwF0Av2IAwVcAv2AAwVUAv18Av14AvmPenRvMAAAAS0lEQVR42hXJxxGAIBAAwCMJiqiYBQOcof8Shd/OLBRCMiaFAt4M1o6GAO3u5419BbS9Fu8CZmzBf5gqru5Mxc107HNNQIFG1LT8AZSBBGnKJJTnAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/base_inactive.png
/* harmony default export */ var base_inactive = ({"src":"/factory-game-mina//_next/static/media/base_inactive.e07d8c5d.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAASklEQVR42mNYtnghECxezrDgxoc3bz5em8kw98V/IHi3g2He0/9///37/x/E+PcfyAJKAUVAUguuf/n37+vVWQzL5+76/3/X3JUAa3o1vQPIrZ4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/zero.png
/* harmony default export */ var zero = ({"src":"/factory-game-mina//_next/static/media/zero.b65e4ef1.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAGElEQVR42mNYBgUMWBlLlwIRnIFTzbJlANV2KXdp23DnAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/one_active.png
/* harmony default export */ var one_active = ({"src":"/factory-game-mina//_next/static/media/one_active.67109e3a.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAMFBMVEWso6qopaeppKilpqWmpaakpqSip6OXqpyTrJqUq5qTq5qFsJAMvmMAwF0Av2EAv2Dx9MRiAAAALklEQVR42mMwNjZ2ZlBSUjFhmDlzmjPD//83lRn+v/mpzNC+D0gI1AOJwPU/lQEXFA+tSw2+dgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/one_inactive.png
/* harmony default export */ var one_inactive = ({"src":"/factory-game-mina//_next/static/media/one_inactive.4e9232b1.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAOUlEQVR42iXGwQkAIAgAQPcfoVdBatAGgo7QSJnavQ44ERL0NAlBg+1J4Mk6Z65rxOR4ZTT5WcMqD5ZyMDFgFAPFAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/two_active.png
/* harmony default export */ var two_active = ({"src":"/factory-game-mina//_next/static/media/two_active.8b9f59b2.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAMFBMVEWso6qopaeppKilpqWmpaakpqSip6OXqpyTrJqUq5qTq5qFsJAMvmMAwF0Av2EAv2Dx9MRiAAAALElEQVR42mMI7P+pzCBQDySW7wMS/9+AiP83lRlmzpzmzKCkpGLCYGxs7AwAYXYPrUbBZlgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/two_inactive.png
/* harmony default export */ var two_inactive = ({"src":"/factory-game-mina//_next/static/media/two_inactive.7848eb2c.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAOUlEQVR42iXGwQkAIAgFUPcfoVNBadAGgo7QSP0U3+nRHg5YFxpNK663AuBVkkcs+JlMPU1eJIkXfwSdMDHmaHUIAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/three_active.png
/* harmony default export */ var three_active = ({"src":"/factory-game-mina//_next/static/media/three_active.eeefd772.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAMFBMVEWso6qopaeppKilpqWmpaakpqSip6OXqpyTrJqUq5qTq5qFsJAMvmMAwF0Av2EAv2Dx9MRiAAAALklEQVR42mMwmv9LlMFo/ndGIPG6Akic+89gNPf/fwaTzJkzGZydlJQYTIyNjQFD+A6u/UDGzgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/three_inactive.png
/* harmony default export */ var three_inactive = ({"src":"/factory-game-mina//_next/static/media/three_inactive.1d8c6e59.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAPElEQVR42iXGyQkAIBADwPRfgi8F3Qh2ILglWJLxmteAcUieKl56SD+z+8uSdOK6YLn5OFAsxwtWjCS5AfhSMDF4r18BAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/four_active.png
/* harmony default export */ var four_active = ({"src":"/factory-game-mina//_next/static/media/four_active.4bf9d0ef.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAMFBMVEWso6qopaeppKilpqWmpaakpqSip6OXqpyTrJqUq5qTq5qFsJAMvmMAwF0Av2EAv2Dx9MRiAAAALElEQVR42mMwMTY2ZnB2UlJiMMmcOZPBaO7//wxG88+BiNdVQOI7I5D4IQoAAHEOrvqsMMgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/four_inactive.png
/* harmony default export */ var four_inactive = ({"src":"/factory-game-mina//_next/static/media/four_inactive.79f4fe4c.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAOUlEQVR42jXGwQkAIAgAQPcfoVdBatAGgo7QSJki3euAkDgB0uwJaG7TANzNU0T9/vgRq0gbFRvrAYo2MDFPf7HDAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/five_active.png
/* harmony default export */ var five_active = ({"src":"/factory-game-mina//_next/static/media/five_active.1403bcf2.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAD1BMVEWppKilpqWUq5oAv2EAv2BDevTpAAAAHklEQVR42mMQBAIGMFACAgYXFxdnMAHhgoGgoKAgAEpjA7c1dxUtAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/five_inactive.png
/* harmony default export */ var five_inactive = ({"src":"/factory-game-mina//_next/static/media/five_inactive.dc57bb5c.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAIUlEQVR42mNYDgUMC6CAYS8UMPyHAgRjLxQwLIACBph2AMdiMDF726vwAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/six_active.png
/* harmony default export */ var six_active = ({"src":"/factory-game-mina//_next/static/media/six_active.efff336a.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAD1BMVEWppKilpqWUq5oAv2EAv2BDevTpAAAAE0lEQVR42mMQUHFiZCBAKBsxAgBKoQOoNWN4vQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/six_inactive.png
/* harmony default export */ var six_inactive = ({"src":"/factory-game-mina//_next/static/media/six_inactive.ffd67018.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAFUlEQVR42mNYvmDv//97FyxnoIwBAMdiMDGElUpuAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/components/GridElement/GridElement.tsx



















const GridElement = (param)=>{
    let { element, active, isSelected, i, j, handleSelect } = param;
    const [src, setSrc] = (0,react.useState)(zero);
    (0,react.useEffect)(()=>{
        switch(element){
            case 0:
                setSrc(zero);
                break;
            case 1:
                if (active) {
                    setSrc(one_active);
                } else {
                    setSrc(one_inactive);
                }
                break;
            case 2:
                if (active) {
                    setSrc(two_active);
                } else {
                    setSrc(two_inactive);
                }
                break;
            case 3:
                if (active) {
                    setSrc(three_active);
                } else {
                    setSrc(three_inactive);
                }
                break;
            case 4:
                if (active) {
                    setSrc(four_active);
                } else {
                    setSrc(four_inactive);
                }
                break;
            case 5:
                if (active) {
                    setSrc(five_active);
                } else {
                    setSrc(five_inactive);
                }
                break;
            case 6:
                if (active) {
                    setSrc(six_active);
                } else {
                    setSrc(six_inactive);
                }
                break;
            case 7:
                if (active) {
                    setSrc(base_active);
                } else {
                    setSrc(base_inactive);
                }
                break;
        }
    }, [
        element,
        active
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        onClick: ()=>handleSelect(i, j),
        className: isSelected ? "border-2 border-white cursor-pointer" : "cursor-pointer",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
            src: src,
            alt: "Description of Image"
        })
    });
};
/* harmony default export */ var GridElement_GridElement = (GridElement);

;// CONCATENATED MODULE: ./app/components/GridElement/index.ts

/* harmony default export */ var components_GridElement = (GridElement_GridElement);

;// CONCATENATED MODULE: ./app/utils/images/left-image.png
/* harmony default export */ var left_image = ({"src":"/factory-game-mina//_next/static/media/left-image.0015e554.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAATklEQVR42hXBUQpAQBSG0W8dNmErnmxCbMKTIkryoszD/HdmbsoW5RyUkj8uI4Ww9lMW3lXA7Fw140Hr6F7iO7BhyWM+mx39rBTMTCbpA667InwIbYZjAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/turn-right.png
/* harmony default export */ var turn_right = ({"src":"/factory-game-mina//_next/static/media/turn-right.e7d6b387.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAATUlEQVR42g3FoQ2AMBRF0TseE5AwA4oEUVgAgahAVkH6fvsLghHhmIPJH5eEapyPZqJFYFid0rFPkFgI7zWGxNaflv0utGoyZSH9y/QBpMQiKwNqYPYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/utils/images/cancel.png
/* harmony default export */ var cancel = ({"src":"/factory-game-mina//_next/static/media/cancel.fc43ae17.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAQ0lEQVR42mNYumLVUiBexrCqsWHNqhk5yxhWzJBsmS9Vv5Jh6ap5TpIda5YCGXOdpNuBjBXTJVrnS9WtRCheuhKiHQAAMCOGS52f6QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/components/Game/Game.tsx










const Game = ()=>{
    const [gameMap, setGameMap] = (0,react.useState)([
        7,
        1,
        0,
        0,
        0,
        0,
        0,
        3,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]);
    const [selectedI, setI] = (0,react.useState)(0);
    const [selectedJ, setJ] = (0,react.useState)(0);
    const [active, setActive] = (0,react.useState)(false);
    const handleSelect = (i, j)=>{
        setI(i);
        setJ(j);
    };
    const handleChange = (i)=>{
        if (selectedI === 0 && selectedJ === 0) return;
        let arr = gameMap;
        arr[selectedI * 7 + selectedJ] = i;
        setGameMap([
            ...arr
        ]);
    };
    const handleTurnLeft = ()=>{
        if (selectedI === 0 && selectedJ === 0) return;
        let arr = gameMap;
        let s = arr[selectedI * 7 + selectedJ];
        if (s === 1) {
            s = 4;
        } else if (s > 1 && s <= 4) {
            s--;
        } else if (s === 5) {
            s = 6;
        } else if (s === 6) {
            s = 5;
        }
        arr[selectedI * 7 + selectedJ] = s;
        setGameMap([
            ...arr
        ]);
    };
    const handleCancel = ()=>{
        if (selectedI === 0 && selectedJ === 0) return;
        let arr = gameMap;
        let s = arr[selectedI * 7 + selectedJ];
        s = 0;
        arr[selectedI * 7 + selectedJ] = s;
        setGameMap([
            ...arr
        ]);
    };
    const handleTurnRight = ()=>{
        if (selectedI === 0 && selectedJ === 0) return;
        let arr = gameMap;
        let s = arr[selectedI * 7 + selectedJ];
        if (s === 4) {
            s = 1;
        } else if (s >= 1 && s < 4) {
            s++;
        } else if (s === 5) {
            s = 6;
        } else if (s === 6) {
            s = 5;
        }
        arr[selectedI * 7 + selectedJ] = s;
        setGameMap([
            ...arr
        ]);
    };
    (0,react.useEffect)(()=>{
        let i = 0;
        let j = 1;
        const left = 10;
        const right = 20;
        const top = 30;
        const bottom = 40;
        let comingFrom = left;
        let shut = false;
        for(let k = 0; k < 49; k++){
            let curr = gameMap[i * 7 + j];
            if (i < 0 || i > 7 || j < 0 || j > 7) break;
            if (shut) {
                setActive(false);
                break;
            }
            switch(curr){
                case 1:
                    if (comingFrom === left) {
                        comingFrom = top;
                        i++;
                    } else if (comingFrom === bottom) {
                        comingFrom = right;
                        j--;
                    } else {
                        shut = true;
                    }
                    break;
                case 2:
                    if (comingFrom === left) {
                        comingFrom = bottom;
                        i--;
                    } else if (comingFrom === top) {
                        comingFrom = right;
                        j--;
                    } else {
                        shut = true;
                    }
                    break;
                case 3:
                    if (comingFrom === right) {
                        comingFrom = bottom;
                        i--;
                    } else if (comingFrom === top) {
                        comingFrom = left;
                        j++;
                    } else {
                        shut = true;
                    }
                    break;
                case 4:
                    if (comingFrom === right) {
                        comingFrom = top;
                        i++;
                    } else if (comingFrom === bottom) {
                        comingFrom = left;
                        j++;
                    } else {
                        shut = true;
                    }
                    break;
                case 5:
                    if (comingFrom === left) {
                        comingFrom = left;
                        j++;
                    } else if (comingFrom === right) {
                        comingFrom = right;
                        j--;
                    } else {
                        shut = true;
                    }
                    break;
                case 6:
                    if (comingFrom === top) {
                        comingFrom = top;
                        i++;
                    } else if (comingFrom === bottom) {
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
        if (i === 0 && j === 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [
        gameMap
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "bg-red-800 p-4 mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "grid grid-cols-7 grid-rows-7 w-fit mx-auto",
                    children: gameMap.map((el, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "p-0 w-16 h-16 border border-gray-300 bg-blue-500 text-white flex justify-center items-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_GridElement, {
                                element: el,
                                active: active,
                                handleSelect: handleSelect,
                                isSelected: index === selectedI * 7 + selectedJ,
                                i: parseInt((index / 7).toString()),
                                j: index % 7
                            })
                        }, index))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mx-auto w-3/5 mt-10",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-lg text-center",
                            children: "Change the selected item"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-16 h-16 mx-auto cursor-pointer",
                                    onClick: ()=>handleChange(1),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                        src: one_inactive,
                                        alt: "Description of Image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-16 h-16 mx-auto cursor-pointer",
                                    onClick: ()=>handleChange(5),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                        src: five_inactive,
                                        alt: "Description of Image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-16 h-16 mx-auto cursor-pointer",
                                    onClick: ()=>handleTurnLeft(),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                        src: left_image,
                                        alt: "Description of Image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-16 h-16 mx-auto cursor-pointer",
                                    onClick: ()=>{
                                        handleTurnRight();
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                        src: turn_right,
                                        alt: "Description of Image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-16 h-16 mx-auto cursor-pointer",
                                    onClick: ()=>{
                                        handleCancel();
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                        src: cancel,
                                        alt: "Description of Image"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ var Game_Game = (Game);

;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







let transactionFee = 0.1;
const ZKAPP_ADDRESS = "B62qpXPvmKDf4SaFJynPsT6DyvuxMS9H1pT4TGonDT26m599m7dS9gP";
function Home() {
    const [zkappWorkerClient, setZkappWorkerClient] = (0,react.useState)(null);
    const [hasWallet, setHasWallet] = (0,react.useState)(null);
    const [hasBeenSetup, setHasBeenSetup] = (0,react.useState)(false);
    const [accountExists, setAccountExists] = (0,react.useState)(false);
    const [currentNum, setCurrentNum] = (0,react.useState)(null);
    const [publicKeyBase58, setPublicKeyBase58] = (0,react.useState)("");
    const [creatingTransaction, setCreatingTransaction] = (0,react.useState)(false);
    const [displayText, setDisplayText] = (0,react.useState)("");
    const [transactionlink, setTransactionLink] = (0,react.useState)("");
    const displayStep = (step)=>{
        setDisplayText(step);
        console.log(step);
    };
    // -------------------------------------------------------
    // Do Setup
    (0,react.useEffect)(()=>{
        const setup = async ()=>{
            try {
                if (!hasBeenSetup) {
                    displayStep("Loading web worker...");
                    const zkappWorkerClient = new ZkappWorkerClient();
                    setZkappWorkerClient(zkappWorkerClient);
                    await new Promise((resolve)=>setTimeout(resolve, 5000));
                    displayStep("Done loading web worker");
                    await zkappWorkerClient.loadContract();
                    await zkappWorkerClient.setActiveInstanceToLocal();
                    const currentNum = await zkappWorkerClient.getHash();
                    console.log("Current state in zkApp: ".concat(currentNum));
                    setHasBeenSetup(true);
                    setHasWallet(true);
                    setDisplayText(currentNum.toString());
                }
            } catch (error) {
                displayStep("Error during setup: ".concat(error.message));
            }
        };
        setup();
    }, []);
    // -------------------------------------------------------
    // Send a transaction
    //   const onSendTransaction = async () => {
    //     setCreatingTransaction(true);
    //     displayStep('Creating a transaction...');
    //     console.log('publicKeyBase58 sending to worker', publicKeyBase58);
    //     await zkappWorkerClient!.fetchAccount(publicKeyBase58);
    //     await zkappWorkerClient!.createUpdateTransaction();
    //     displayStep('Creating proof...');
    //     await zkappWorkerClient!.proveUpdateTransaction();
    //     displayStep('Requesting send transaction...');
    //     const transactionJSON = await zkappWorkerClient!.getTransactionJSON();
    //     displayStep('Getting transaction JSON...');
    //     const { hash } = await (window as any).mina.sendTransaction({
    //       transaction: transactionJSON,
    //       feePayer: {
    //         fee: transactionFee,
    //         memo: '',
    //       },
    //     });
    //     const transactionLink = `https://minascan.io/devnet/tx/${hash}`;
    //     setTransactionLink(transactionLink);
    //     setDisplayText(transactionLink);
    //     setCreatingTransaction(true);
    //   };
    // -------------------------------------------------------
    // Refresh the current state
    //   const onRefreshCurrentNum = async () => {
    //     try {
    //       displayStep('Getting zkApp state...');
    //       await zkappWorkerClient!.fetchAccount(ZKAPP_ADDRESS);
    //       const currentNum = await zkappWorkerClient!.getNum();
    //       setCurrentNum(currentNum);
    //       console.log(`Current state in zkApp: ${currentNum}`);
    //       setDisplayText('');
    //     } catch (error: any) {
    //       displayStep(`Error refreshing state: ${error.message}`);
    //     }
    //   };
    let mainContent;
    if (hasBeenSetup && accountExists) {
        mainContent = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                justifyContent: "center",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Home_module_default()).center,
                    style: {
                        padding: 0
                    },
                    children: [
                        "Current state in zkApp: ",
                        currentNum === null || currentNum === void 0 ? void 0 : currentNum.toString(),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: (Home_module_default()).card,
                    onClick: ()=>{},
                    disabled: creatingTransaction,
                    children: "Send Transaction"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: (Home_module_default()).card,
                    onClick: ()=>{},
                    children: "Get Latest State"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "min-h-screen",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "lg:flex",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "lg:w-1/3 w-full bg-white p-6 h-screen",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Setup, {
                            hasWallet: hasWallet,
                            transactionlink: transactionlink,
                            displayText: displayText
                        }),
                        mainContent
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "lg:w-2/3 w-full min-h-screen bg-white p-6 border-l-2 border-black mt-8 lg:mt-0",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_TabPanel, {
                        child1: /*#__PURE__*/ (0,jsx_runtime.jsx)(Game_Game, {})
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 6063:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"Home_main__VkIEL","background":"Home_background__nqUIs","backgroundGradients":"Home_backgroundGradients__6K9ld","container":"Home_container__d256j","tagline":"Home_tagline__q1jNE","start":"Home_start__3ARHr","code":"Home_code__VVrIr","grid":"Home_grid__AVljO","card":"Home_card__E5spL","center":"Home_center__O_TIN","logo":"Home_logo__IOQAX","content":"Home_content__tkQPU"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [357,852,971,23,744], function() { return __webpack_exec__(3784); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);