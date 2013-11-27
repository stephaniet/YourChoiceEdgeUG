/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['amatic-sc, sans-serif']='<script src=\"http://use.edgefonts.net/amatic-sc:n4,n7:all.js\"></script>';


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
            id:'foto3',
            type:'image',
            rect:['0px','0px','800px','536px','auto','auto'],
            fill:["rgba(0,0,0,0)",'foto3.jpg','0px','0px']
         },
         {
            id:'foto2',
            type:'image',
            rect:['0','0','800px','536px','auto','auto'],
            fill:["rgba(0,0,0,0)",'foto2.jpg','0px','0px']
         },
         {
            id:'foto1',
            type:'image',
            rect:['0','0','800px','536px','auto','auto'],
            fill:["rgba(0,0,0,0)",'foto1.jpg','0px','0px']
         },
         {
            id:'Bordo',
            type:'rect',
            rect:['0px','0px','780px','516px','auto','auto'],
            opacity:0.71633911132812,
            fill:["rgba(192,192,192,0.00)"],
            stroke:[10,"rgba(0,0,0,1.00)","solid"]
         },
         {
            id:'Runner',
            type:'rect',
            rect:['347px','505px','128px','21px','auto','auto'],
            borderRadius:["10px 10px","10px 10px","0px","0px"],
            opacity:0.71633911132812,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[10,"rgb(255, 255, 255)","none"]
         },
         {
            id:'Ball1',
            type:'rect',
            rect:['386px','510px','10px','10px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            fill:["rgba(255,216,33,1.00)"],
            stroke:[10,"rgb(255, 255, 255)","none"]
         },
         {
            id:'Ball2',
            type:'rect',
            rect:['406px','510px','10px','10px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[10,"rgb(255, 255, 255)","none"]
         },
         {
            id:'Ball3',
            type:'rect',
            rect:['426px','510px','10px','10px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[10,"rgb(255, 255, 255)","none"]
         },
         {
            id:'panel',
            type:'rect',
            rect:['870','33','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'panel',
            symbolName:'panel'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Ball2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '10px'],
            ["style", "top", '510px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["style", "left", '406px']
         ],
         "${_foto3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_panel}": [
            ["style", "left", '775px'],
            ["style", "top", '32px']
         ],
         "${_foto1}": [
            ["style", "opacity", '1']
         ],
         "${_foto2}": [
            ["style", "opacity", '1']
         ],
         "${_Bordo}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '10px'],
            ["style", "width", '780px'],
            ["style", "top", '0px'],
            ["style", "height", '516px'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "opacity", '0.71633911132812']
         ],
         "${_Ball3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '10px'],
            ["style", "top", '510px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["style", "left", '426px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '536px'],
            ["style", "width", '800px']
         ],
         "${_Runner}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '505px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '21px'],
            ["style", "opacity", '0.71633911132812'],
            ["style", "left", '347px'],
            ["style", "width", '128px']
         ],
         "${_Ball1}": [
            ["color", "background-color", 'rgba(255,216,33,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '10px'],
            ["style", "top", '510px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["style", "left", '386px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 14000,
         autoPlay: true,
         labels: {
            "foto1": 0,
            "foto2": 4000,
            "foto3": 9108
         },
         timeline: [
            { id: "eid15", tween: [ "color", "${_Ball3}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "color", "${_Ball3}", "background-color", 'rgba(255,216,33,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 9108, duration: 0 },
            { id: "eid14", tween: [ "color", "${_Ball2}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "color", "${_Ball2}", "background-color", 'rgba(255,216,33,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 4000, duration: 0 },
            { id: "eid16", tween: [ "color", "${_Ball2}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,216,33,1.00)'}], position: 9108, duration: 0 },
            { id: "eid3", tween: [ "style", "${_foto1}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 2000 },
            { id: "eid9", tween: [ "style", "${_foto1}", "opacity", '1', { fromValue: '0.000000'}], position: 12000, duration: 2000 },
            { id: "eid25", tween: [ "style", "${_panel}", "top", '32px', { fromValue: '32px'}], position: 24, duration: 0, easing: "swing" },
            { id: "eid6", tween: [ "style", "${_foto2}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 2108 },
            { id: "eid18", tween: [ "style", "${_panel}", "left", '775px', { fromValue: '775px'}], position: 10064, duration: 0 },
            { id: "eid11", tween: [ "color", "${_Ball1}", "background-color", 'rgba(255,216,33,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,216,33,1.00)'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "color", "${_Ball1}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,216,33,1.00)'}], position: 4000, duration: 0 }         ]
      }
   }
},
"panel": {
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
      id: 'panel_interno',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'panel_interno',
      symbolName: 'panel_interno'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '503px'],
            ["style", "width", '264px']
         ],
         "${_panel_interno}": [
            ["style", "left", '0px']
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
            { id: "eid22", tween: [ "style", "${_panel_interno}", "left", '-239px', { fromValue: '0px'}], position: 0, duration: 500, easing: "swing" },
            { id: "eid24", tween: [ "style", "${_panel_interno}", "left", '0px', { fromValue: '-239px'}], position: 500, duration: 500, easing: "swing" }         ]
      }
   }
},
"panel_interno": {
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
      type: 'rect',
      id: 'box',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['25px','0px','239px','503px','auto','auto'],
      fill: ['rgba(0,0,0,0.72)']
   },
   {
      rect: ['0px','16px','25px','41px','auto','auto'],
      borderRadius: ['10px','0px','0px','10px'],
      id: 'label',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.7188)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'arrow',
      text: '&lt;',
      type: 'text',
      rect: ['7px','22px','auto','auto','auto','auto']
   },
   {
      font: ['amatic-sc, sans-serif',30,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'titolo',
      text: 'Images &amp; Words',
      align: 'center',
      rect: ['24px','22px','238px','36px','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy',
      text: 'photos by',
      align: 'center',
      rect: ['25px','97px','236px','auto','auto','auto']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text',
      text: 'Michela Tamburrini',
      rect: ['24px','113px','240px','auto','auto','auto'],
      font: ['amatic-sc, sans-serif',32,'rgba(236,199,199,1.00)','normal','none','normal']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'sito',
      text: 'www.michelatamburrini.it',
      align: 'center',
      rect: ['23px','155px','237px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_label}": [
            ["style", "top", '16px'],
            ["style", "height", '41px'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_sito}": [
            ["style", "top", '155px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "left", '23px'],
            ["style", "width", '237px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(236,199,199,1)'],
            ["style", "left", '24px'],
            ["style", "font-size", '32px'],
            ["style", "top", '113px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "text-align", 'center'],
            ["style", "width", '240px']
         ],
         "${symbolSelector}": [
            ["style", "height", '503px'],
            ["style", "width", '264px']
         ],
         "${_arrow}": [
            ["style", "top", '22px'],
            ["style", "left", '7px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_titolo}": [
            ["style", "top", '22px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '30px'],
            ["style", "height", '36px'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "left", '24px'],
            ["style", "width", '238px']
         ],
         "${_TextCopy}": [
            ["style", "top", '97px'],
            ["style", "text-align", 'center'],
            ["style", "width", '236px'],
            ["style", "left", '25px'],
            ["style", "font-size", '14px']
         ],
         "${_box}": [
            ["style", "top", '0px'],
            ["style", "height", '503px'],
            ["style", "left", '25px'],
            ["color", "background-color", 'rgba(0,0,0,0.72)']
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
})(jQuery, AdobeEdge, "EDGE-10210191");
