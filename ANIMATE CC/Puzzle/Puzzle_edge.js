/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['aladin, sans-serif']='<script src=\"http://use.edgefonts.net/aladin:n4:all.js\"></script>';

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
                id: 'bg',
                type: 'rect',
                rect: ['43px', '95px','400px','266px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'foto1',
                type: 'image',
                rect: ['527px', '61px','200px','133px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Puzzle_01.jpg",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['49px', '23px','auto','auto','auto', 'auto'],
                text: "PUZZLE EDGE",
                font: ['aladin, sans-serif', 50, "rgba(0,0,0,1)", "normal", "none", "normal"],
                transform: [[],[],['-7','-8']]
            },
            {
                id: 'foto2',
                type: 'image',
                rect: ['569px', '218px','200px','133px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Puzzle_02.jpg",'0px','0px']
            },
            {
                id: 'foto3',
                type: 'image',
                rect: ['522px', '377px','200px','132px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Puzzle_04.jpg",'0px','0px']
            },
            {
                id: 'foto4',
                type: 'image',
                rect: ['256px', '391px','200px','132px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Puzzle_03.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_foto1}": [
                ["style", "left", '527px'],
                ["style", "top", '61px']
            ],
            "${_foto2}": [
                ["style", "left", '569px'],
                ["style", "top", '218px']
            ],
            "${_Text}": [
                ["style", "top", '23px'],
                ["transform", "skewY", '-8deg'],
                ["transform", "skewX", '-7deg'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'aladin, sans-serif'],
                ["style", "left", '49px'],
                ["style", "font-size", '50px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_foto4}": [
                ["style", "left", '256px'],
                ["style", "top", '391px']
            ],
            "${_bg}": [
                ["style", "top", '95px'],
                ["style", "height", '266px'],
                ["style", "left", '43px'],
                ["style", "width", '400px']
            ],
            "${_foto3}": [
                ["style", "left", '522px'],
                ["style", "top", '377px']
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
})(jQuery, AdobeEdge, "EDGE-17265306");
