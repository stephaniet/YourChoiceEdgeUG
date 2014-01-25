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
                font: ['crafty-girls, sans-serif', 40, "rgba(255,255,255,1.00)", "normal", "none", ""]
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
            },
            {
                id: 'audio',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                autoplay: 'autoplay',
                loop: 'loop',
                source: ['media/audio.mp3']
            },
            {
                id: 'socials',
                type: 'rect',
                rect: ['899px', '34px','auto','auto','auto', 'auto'],
                autoOrient: false
            },
            {
                id: 'google',
                type: 'rect',
                rect: ['700', '371','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'box3',
                symbolName: 'box3',
                autoPlay: {

                }
            },
            {
                id: 'socials',
                symbolName: 'facebook',
                autoPlay: {

                }
            },
            {
                id: 'google',
                symbolName: 'google',
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
                id: 'box1',
                symbolName: 'box1',
                autoPlay: {

                }
            },
            {
                id: 'boxEvento',
                symbolName: 'BoxTesto',
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
                ["style", "font-family", 'crafty-girls, sans-serif'],
                ["style", "left", '-448px'],
                ["style", "font-size", '40px']
            ],
            "${_box2}": [
                ["style", "top", '591px'],
                ["style", "cursor", 'pointer']
            ],
            "${_background}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_socials}": [
                ["motion", "location", '923.93px 59px']
            ],
            "${_box1}": [
                ["style", "left", '-292px'],
                ["style", "cursor", 'pointer']
            ],
            "${_audio}": [
                ["property", "volume", '0.87217234141791']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '850px'],
                ["style", "height", '560px'],
                ["style", "overflow", 'hidden']
            ],
            "${_box3}": [
                ["style", "left", '883px'],
                ["style", "cursor", 'pointer']
            ],
            "${_google}": [
                ["style", "top", '34px'],
                ["style", "left", '866px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 39925,
            autoPlay: true,
            timeline: [
                { id: "eid82", tween: [ "motion", "${_socials}", [[923.93, 59, 0, 0],[800.08, 59, 0, 0, 0, 0],[531.73, 59, 0, 0]]], position: 4000, duration: 2000, easing: "easeOutBounce" },
                { id: "eid31", tween: [ "style", "${_box2}", "top", '371px', { fromValue: '591px'}], position: 5250, duration: 1142, easing: "easeInOutBack" },
                { id: "eid9", tween: [ "style", "${_background}", "opacity", '0.33483574380223', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid43", tween: [ "style", "${_bar}", "width", '850px', { fromValue: '850px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid25", tween: [ "style", "${_box1}", "left", '20px', { fromValue: '-292px'}], position: 5750, duration: 1142, easing: "easeInOutBack" },
                { id: "eid41", tween: [ "style", "${_bar}", "height", '12px', { fromValue: '12px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid89", tween: [ "style", "${_google}", "left", '575px', { fromValue: '866px'}], position: 5000, duration: 1875, easing: "easeOutBounce" },
                { id: "eid34", tween: [ "style", "${_box3}", "left", '575px', { fromValue: '883px'}], position: 4500, duration: 1142, easing: "easeInOutBack" },
                { id: "eid74", tween: [ "property", "${_audio}", "volume", '0.87217234141791', { fromValue: '0.87217234141791'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_logo}", "left", '54px', { fromValue: '-448px'}], position: 1500, duration: 1250, easing: "easeInOutBack" },
                { id: "eid6", tween: [ "style", "${_bar}", "left", '0px', { fromValue: '856px'}], position: 3250, duration: 750, easing: "easeOutQuad" }            ]
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
                ["style", "border-style", 'none'],
                ["style", "border-width", '1px'],
                ["style", "height", '39px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
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
                { id: "eid48", tween: [ "style", "${_header}", "height", '165px', { fromValue: '39px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid50", tween: [ "style", "${_Text2}", "top", '138px', { fromValue: '8px'}], position: 0, duration: 1000, easing: "easeInOutBack" }            ]
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
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 20, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2',
                    text: 'EVENTS',
                    align: 'left',
                    rect: ['10px', '8px', 'auto', 'auto', 'auto', 'auto']
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
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'none']
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
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 20, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2Copy',
                    text: 'TUTORIAL',
                    align: 'left',
                    rect: ['10px', '8px', 'auto', 'auto', 'auto', 'auto']
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
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'none']
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
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    id: 'RoundRect',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(0,0,0,0.6706)']
                },
                {
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 20, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'testo',
                    opacity: 1,
                    text: 'Lorem ipsum<br>asdk jasldkasjd laskdjsl kasjd laskdj asldkas jldak sjd alkdja sldkajsld kasjdl askdj asldk ajsdl kasjd laskd jasldkasj dlaskd jasldk ajsdl aksdj alskd jasld kasjd laskd jasldk asjd laskdj alskd jasld kasjdlaskjd aslkd jasld kasjdl kasjd laskd jasldk ajsld kasjdl kasj',
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
},
"facebook": {
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
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    id: 'bg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(59,80,199,1.00)']
                },
                {
                    type: 'image',
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    id: 'icons48',
                    rect: ['0px', '0px', '288px', '48px', 'auto', 'auto'],
                    clip: ['rect(0px 50px 50px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons48.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bg}": [
                ["color", "background-color", 'rgba(59,80,199,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '50px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_icons48}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "clip", [0,50,50,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px'],
                ["style", "overflow", 'hidden']
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
},
"google": {
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
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    id: 'bg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(235,36,36,1.00)']
                },
                {
                    type: 'image',
                    id: 'icons48',
                    rect: ['-236px', '0px', '576%', '96%', 'auto', 'auto'],
                    clip: ['rect(0px 285px 50px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/icons48.png', '0%', '0%', '288px', '48px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bg}": [
                ["color", "background-color", 'rgba(235,36,36,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '50px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "overflow", 'hidden'],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_icons48}": [
                ["style", "top", '0px'],
                ["style", "left", '-236px'],
                ["style", "clip", [0,285,50,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px'],
                ["style", "overflow", 'hidden']
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
})(jQuery, AdobeEdge, "EDGE-5228619");
