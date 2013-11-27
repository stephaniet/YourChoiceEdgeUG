/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'parete',
            type:'image',
            rect:['0','0','1200px','798px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"parete.jpg",'0px','0px']
         },
         {
            id:'televisione',
            type:'rect',
            rect:['30','30','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'televisione',
            symbolName:'televisione'
         }
         ]
      },
   states: {
      "Base State": {
         "${_televisione}": [
            ["style", "top", '54px'],
            ["transform", "scaleY", '0.76'],
            ["transform", "skewX", '0deg'],
            ["transform", "scaleX", '0.76'],
            ["style", "left", '136px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '598px'],
            ["gradient", "background-image", [270,[['rgba(102,102,102,1.00)',0],['rgba(27,27,27,1.00)',100]]]],
            ["style", "width", '1000px']
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
            { id: "eid8", tween: [ "style", "${_televisione}", "top", '54px', { fromValue: '54px'}], position: 0, duration: 0 }         ]
      }
   }
},
"televisione": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'tv',
      type: 'image',
      rect: ['0px','0px','850px','570px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Television%201.png','0px','0px']
   },
   {
      rect: ['25px','25px','802px','449px','auto','auto'],
      id: 'myVideo',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_myVideo}": [
            ["style", "height", '449px'],
            ["style", "top", '25px'],
            ["style", "left", '25px'],
            ["style", "width", '802px']
         ],
         "${_tv}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '570px'],
            ["style", "width", '850px']
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


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4425041");
