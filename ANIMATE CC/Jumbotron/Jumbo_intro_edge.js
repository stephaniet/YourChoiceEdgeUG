/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['crafty-girls, sans-serif']='<script src=\"http://use.edgefonts.net/crafty-girls:n4:all.js\"></script>';

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
                id: 'background',
                type: 'image',
                rect: ['0px', '0px','850px','560px','auto', 'auto'],
                opacity: 0.33483574380223,
                fill: ["rgba(0,0,0,0)",im+"iStock_000022216024Small.jpg",'0px','0px']
            },
            {
                id: 'logo',
                type: 'text',
                rect: ['-448px', '26px','auto','auto','auto', 'auto'],
                text: "Edge Usergroup Italia",
                font: ['Verdana, Geneva, sans-serif', 40, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'bar',
                type: 'rect',
                rect: ['856px', '92px','790px','8px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'box3',
                type: 'rect',
                rect: ['883', '371','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'box2',
                type: 'rect',
                rect: ['294', '591','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'box1',
                type: 'rect',
                rect: ['-292', '371','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'boxEvento',
                type: 'rect',
                rect: ['20', '129','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'boxEvento',
                symbolName: 'BoxTesto',
                autoPlay: {

                }
            },
            {
                id: 'box2',
                symbolName: 'box2',
                autoPlay: {

                }
            },
            {
                id: 'box3',
                symbolName: 'box3',
                autoPlay: {

                }
            },
            {
                id: 'box1',
                symbolName: 'box1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bar}": [
                ["style", "top", '92px'],
                ["style", "height", '12px'],
                ["style", "left", '856px'],
                ["style", "width", '850px']
            ],
            "${_logo}": [
                ["style", "top", '26px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '-448px'],
                ["style", "font-size", '40px']
            ],
            "${_box2}": [
                ["style", "top", '591px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '850px'],
                ["style", "height", '560px'],
                ["style", "overflow", 'hidden']
            ],
            "${_background}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_box3}": [
                ["style", "left", '883px'],
                ["style", "cursor", 'pointer']
            ],
            "${_box1}": [
                ["style", "left", '-292px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"box1": {
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
                    id: 'foto',
                    type: 'image',
                    rect: ['310px', '0px', '250px', '165px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/iStock_000027889790Small.jpg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '250px', '39px', 'auto', 'auto'],
                    id: 'header',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,0.67)']
                },
                {
                    rect: ['10px', '8px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 20, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: 'DEMO',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_header}": [
                ["style", "top", '0px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "height", '39px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,0.67)']
            ],
            "${_foto}": [
                ["style", "top", '0px'],
                ["style", "height", '165px'],
                ["style", "left", '0px'],
                ["style", "width", '250px']
            ],
            "${_Text2}": [
                ["style", "top", '8px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '165px'],
                ["style", "width", '250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid48", tween: [ "style", "${_header}", "height", '165px', { fromValue: '39px'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_Text2}", "top", '138px', { fromValue: '8px'}], position: 0, duration: 1000, easing: "easeOutQuad" }            ]
        }
    }
},
"box2": {
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
                    id: 'box2',
                    type: 'image',
                    rect: ['0px', '0px', '250px', '165px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/iStock_000024012680Small.jpg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '250px', '39px', 'auto', 'auto'],
                    id: 'header',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,0.67)']
                },
                {
                    type: 'text',
                    rect: ['10px', '8px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2',
                    text: 'EVENTS',
                    align: 'left',
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 20, 'rgba(255,255,255,1)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_box2}": [
                ["style", "top", '0px'],
                ["style", "height", '165px'],
                ["style", "left", '0px'],
                ["style", "width", '250px']
            ],
            "${_header}": [
                ["color", "background-color", 'rgba(0,0,0,0.67)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '39px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Text2}": [
                ["style", "top", '8px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '165px'],
                ["style", "width", '250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid59", tween: [ "style", "${_header}", "height", '165px', { fromValue: '39px'}], position: 0, duration: 1000, easing: "swing" },
                { id: "eid62", tween: [ "style", "${_Text2}", "top", '138px', { fromValue: '8px'}], position: 0, duration: 1000, easing: "swing" }            ]
        }
    }
},
"box3": {
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
                    id: 'box3',
                    type: 'image',
                    rect: ['-310px', '0px', '250px', '165px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/iStock_000020764071Small.jpg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '250px', '39px', 'auto', 'auto'],
                    id: 'headerCopy',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,0.67)']
                },
                {
                    type: 'text',
                    rect: ['10px', '8px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2Copy',
                    text: 'TUTORIAL',
                    align: 'left',
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 20, 'rgba(255,255,255,1)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy}": [
                ["style", "top", '8px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '20px']
            ],
            "${_headerCopy}": [
                ["color", "background-color", 'rgba(0,0,0,0.67)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '39px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)']
            ],
            "${_box3}": [
                ["style", "top", '0px'],
                ["style", "height", '165px'],
                ["style", "left", '0px'],
                ["style", "width", '250px']
            ],
            "${symbolSelector}": [
                ["style", "height", '165px'],
                ["style", "width", '250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid65", tween: [ "style", "${_headerCopy}", "height", '165px', { fromValue: '39px'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${_Text2Copy}", "top", '138px', { fromValue: '8px'}], position: 0, duration: 1000, easing: "easeOutQuad" }            ]
        }
    }
},
"BoxTesto": {
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
                    rect: ['0px', '0px', '805px', '215px', 'auto', 'auto'],
                    borderRadius: ['30px 30px', '30px 30px', '30px 30px', '30px 30px'],
                    opacity: 1,
                    id: 'RoundRect',
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,0.6706)']
                },
                {
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 20, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    text: 'Lorem ipsum<br>asdk jasldkasjd laskdjsl kasjd laskdj asldkas jldak sjd alkdja sldkajsld kasjdl askdj asldk ajsdl kasjd laskd jasldkasj dlaskd jasldk ajsdl aksdj alskd jasld kasjd laskd jasldk asjd laskdj alskd jasld kasjdlaskjd aslkd jasld kasjdl kasjd laskd jasldk ajsld kasjdl kasj',
                    id: 'testo',
                    opacity: 1,
                    align: 'left',
                    rect: ['26px', '25px', '752px', '172px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "border-top-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '805px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '217px'],
                ["style", "width", '807px']
            ],
            "${_testo}": [
                ["style", "opacity", '1'],
                ["style", "width", '752px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
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
})(jQuery, AdobeEdge, "EDGE-5228619");
