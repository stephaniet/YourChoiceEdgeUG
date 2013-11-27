/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['advent-pro, sans-serif']='<script src=\"http://use.edgefonts.net/advent-pro:n2,n5,n7,n4,n1,n6,n3:all.js\"></script>';


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
            id:'parete2',
            type:'image',
            rect:['-118px','-151px','1200px','900px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"parete2.jpg",'0px','0px']
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['158px','194px','auto','auto','auto','auto'],
            text:"All Stars TV",
            font:['advent-pro, sans-serif',31,"rgba(165,104,104,1.00)","800","none",""],
            textShadow:["rgba(0,0,0,0.65)",1,1,5],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'Text2',
            type:'text',
            rect:['846px','142px','auto','auto','auto','auto'],
            text:"no libraries<br>just js",
            align:"left",
            font:['advent-pro, sans-serif',20,"rgba(165,104,104,1)","800","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",0,2,1],
            transform:[[],[],['0','-26']]
         },
         {
            id:'Text3',
            type:'text',
            rect:['667px','324px','auto','auto','auto','auto'],
            text:"An Edge Program",
            align:"left",
            font:['advent-pro, sans-serif',20,"rgba(165,104,104,1)","800","none","normal"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['16px','330px','auto','auto','auto','auto'],
            text:"director<br>Fabio Bernardi",
            align:"right",
            font:['advent-pro, sans-serif',18,"rgba(165,104,104,1)","800","none","normal"],
            textShadow:["rgba(0,0,0,0.25)",0,3,3],
            transform:[[],[],['0','-12']]
         },
         {
            id:'televisione',
            type:'rect',
            rect:['30','30','auto','auto','auto','auto'],
            boxShadow:["",3,3,3,0,"rgb(77,77,77)"]
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
         "${_TextCopy}": [
            ["subproperty", "textShadow.blur", '5px'],
            ["subproperty", "textShadow.offsetH", '1px'],
            ["subproperty", "filter.contrast", '1'],
            ["color", "color", 'rgba(165,104,104,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '158px'],
            ["style", "font-size", '31px'],
            ["style", "top", '194px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "font-family", 'advent-pro, sans-serif'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["subproperty", "filter.blur", '0px']
         ],
         "${_Text3}": [
            ["style", "left", '667px'],
            ["style", "top", '324px']
         ],
         "${_Text2}": [
            ["subproperty", "textShadow.blur", '1px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "left", '846px'],
            ["style", "font-size", '20px'],
            ["style", "top", '142px'],
            ["transform", "skewY", '-26deg'],
            ["transform", "skewX", '0deg'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '598px'],
            ["gradient", "background-image", [270,[['rgba(102,102,102,1.00)',0],['rgba(27,27,27,1.00)',100]]]],
            ["style", "width", '1000px']
         ],
         "${_televisione}": [
            ["subproperty", "boxShadow.blur", '26px'],
            ["transform", "scaleX", '0.4175'],
            ["style", "left", '82px'],
            ["style", "top", '35px'],
            ["transform", "scaleY", '0.4175'],
            ["transform", "skewX", '0deg'],
            ["subproperty", "boxShadow.spread", '4px'],
            ["subproperty", "boxShadow.offsetV", '10px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(29,29,29,1.00)']
         ],
         "${_parete2}": [
            ["style", "left", '-118px'],
            ["style", "top", '-151px']
         ],
         "${_Text4}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '16px'],
            ["style", "font-size", '18px'],
            ["style", "top", '330px'],
            ["style", "text-align", 'right'],
            ["transform", "skewX", '0deg'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.25)'],
            ["transform", "skewY", '-12deg']
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
      rect: ['-10px','-10px','800px','450px','auto','auto'],
      id: 'bordo',
      stroke: [10,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(235,17,17,0.00)']
   },
   {
      rect: ['0px','0px','800px','450px','auto','auto'],
      id: 'myVideo',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(142,235,16,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_myVideo}": [
            ["style", "top", '0px'],
            ["style", "height", '450px'],
            ["color", "background-color", 'rgba(142,235,16,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '800px']
         ],
         "${_bordo}": [
            ["style", "top", '-10px'],
            ["color", "background-color", 'rgba(235,17,17,0.00)'],
            ["style", "border-width", '10px'],
            ["style", "height", '450px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-10px'],
            ["style", "width", '800px']
         ],
         "${symbolSelector}": [
            ["style", "height", '450px'],
            ["style", "width", '800px']
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
