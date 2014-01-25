/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.303",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'youtubeLogo',
                type: 'image',
                rect: ['25px', '14px','86px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"youtubeLogo.png",'0px','0px']
            },
            {
                id: 'video',
                type: 'rect',
                rect: ['20px', '68px','560px','315px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.42)"],
                stroke: [1,"rgba(255,255,255,1.00)","solid"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['311px', '20px','auto','auto','auto', 'auto'],
                text: "EDGE USERGROUP ITALIA",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '600px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_video}": [
                ["color", "background-color", 'rgba(192,192,192,0.42)'],
                ["style", "top", '68px'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '315px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '20px'],
                ["style", "width", '560px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '311px'],
                ["style", "top", '20px']
            ],
            "${_youtubeLogo}": [
                ["style", "top", '14px'],
                ["style", "height", '54px'],
                ["style", "left", '25px'],
                ["style", "width", '86px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-15111063");
