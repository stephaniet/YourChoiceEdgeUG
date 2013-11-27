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
            id:'sky_sun',
            type:'rect',
            rect:['0','1','auto','auto','auto','auto']
         },
         {
            id:'back',
            type:'rect',
            rect:['-12px','339px','1122px','75px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'city',
            type:'rect',
            rect:['1','158','auto','auto','auto','auto']
         },
         {
            id:'Text',
            type:'text',
            rect:['10px','34px','auto','auto','auto','auto'],
            text:"Parallasse… con solo CSS e JS",
            font:['Palatino Linotype, Book Antigua, Palatino, serif',24,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[[],[],['-14','-6']]
         },
         {
            id:'linea',
            type:'rect',
            rect:['-7','49','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'linea',
            symbolName:'linea'
         },
         {
            id:'city',
            symbolName:'city'
         },
         {
            id:'sky_sun',
            symbolName:'sky_sun'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '800px']
         ],
         "${_Text}": [
            ["style", "top", '34px'],
            ["transform", "skewY", '-6deg'],
            ["transform", "skewX", '-14deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Palatino Linotype, Book Antigua, Palatino, serif'],
            ["style", "left", '10px']
         ],
         "${_back}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '339px']
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
"Palazzo": {
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
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','68px','174px','auto','auto'],
      fill: ['rgba(90,89,89,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','17px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','41px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','64px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','87px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','17px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','41px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','64px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','87px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','112px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','112px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','138px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','138px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2Copy4}": [
            ["style", "left", '39px'],
            ["style", "top", '87px']
         ],
         "${_Rectangle2Copy8}": [
            ["style", "left", '39px'],
            ["style", "top", '112px']
         ],
         "${_Rectangle2Copy3}": [
            ["style", "left", '39px'],
            ["style", "top", '64px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "left", '39px']
         ],
         "${_Rectangle2Copy2}": [
            ["style", "left", '39px'],
            ["style", "top", '41px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '174px'],
            ["color", "background-color", 'rgba(90,89,89,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '68px']
         ],
         "${symbolSelector}": [
            ["style", "height", '174px'],
            ["style", "width", '68px']
         ],
         "${_Rectangle2Copy6}": [
            ["style", "top", '64px']
         ],
         "${_Rectangle2Copy5}": [
            ["style", "top", '41px']
         ],
         "${_Rectangle2Copy7}": [
            ["style", "top", '87px']
         ],
         "${_Rectangle2Copy11}": [
            ["style", "top", '138px']
         ],
         "${_Rectangle2Copy10}": [
            ["style", "left", '39px'],
            ["style", "top", '138px']
         ],
         "${_Rectangle2Copy9}": [
            ["style", "top", '112px']
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
"PalazzoConPunta": {
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
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','49px','51px','133px','auto','auto'],
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['-186px','-34px','2px','1px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['9px','25px','32px','25px','auto','auto'],
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['25px','33px','11px','12px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle6Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['7px','58px','11px','12px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle6Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['7px','79px','11px','12px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle6Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['31px','58px','11px','12px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle6Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['7px','99px','11px','12px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle6Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['31px','99px','11px','12px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle6Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['7px','121px','11px','12px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle6Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['31px','121px','11px','12px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle4Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['20px','0px','11px','25px','auto','auto'],
      fill: ['rgba(0,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle6Copy3}": [
            ["style", "left", '7px'],
            ["style", "top", '79px']
         ],
         "${_Rectangle6Copy4}": [
            ["style", "left", '31px'],
            ["style", "top", '99px']
         ],
         "${_Rectangle6}": [
            ["style", "left", '25px']
         ],
         "${_Rectangle6Copy}": [
            ["style", "left", '7px'],
            ["style", "top", '58px']
         ],
         "${_Rectangle6Copy5}": [
            ["style", "left", '7px'],
            ["style", "top", '99px']
         ],
         "${_Rectangle6Copy2}": [
            ["style", "left", '31px'],
            ["style", "top", '58px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '49px']
         ],
         "${_Rectangle6Copy7}": [
            ["style", "left", '7px'],
            ["style", "top", '121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '182px'],
            ["style", "width", '51px']
         ],
         "${_Rectangle6Copy6}": [
            ["style", "left", '31px'],
            ["style", "top", '121px']
         ],
         "${_Rectangle5}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '25px'],
            ["style", "left", '9px'],
            ["style", "width", '32px']
         ],
         "${_Rectangle4Copy}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '20px'],
            ["style", "width", '11px']
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
"Palazzo2": {
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
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','20px','68px','174px','auto','auto'],
      fill: ['rgba(58,57,57,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','37px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','61px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','84px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','107px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','37px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','61px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','84px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','107px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['4px','13px','60px','7px','auto','auto'],
      fill: ['rgba(110,110,110,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['56px','6px','3px','7px','auto','auto'],
      fill: ['rgba(110,110,110,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle8Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['27px','6px','3px','7px','auto','auto'],
      fill: ['rgba(110,110,110,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle8Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['10px','0px','3px','13px','auto','auto'],
      fill: ['rgba(110,110,110,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2Copy4}": [
            ["style", "left", '39px'],
            ["style", "top", '107px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '37px']
         ],
         "${_Rectangle2Copy3}": [
            ["style", "left", '39px'],
            ["style", "top", '84px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "left", '39px'],
            ["style", "top", '37px']
         ],
         "${_Rectangle7}": [
            ["style", "height", '7px'],
            ["style", "top", '13px'],
            ["style", "left", '4px'],
            ["style", "width", '60px']
         ],
         "${_Rectangle2Copy5}": [
            ["style", "top", '61px']
         ],
         "${_Rectangle8Copy}": [
            ["style", "left", '27px']
         ],
         "${_Rectangle2Copy6}": [
            ["style", "top", '84px']
         ],
         "${symbolSelector}": [
            ["style", "height", '195px'],
            ["style", "width", '68px']
         ],
         "${_Rectangle2Copy7}": [
            ["style", "top", '107px']
         ],
         "${_Rectangle}": [
            ["style", "top", '20px'],
            ["style", "height", '174px'],
            ["color", "background-color", 'rgba(58,57,57,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '68px']
         ],
         "${_Rectangle8Copy2}": [
            ["style", "height", '13px'],
            ["style", "left", '10px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle2Copy2}": [
            ["style", "left", '39px'],
            ["style", "top", '61px']
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
"PalazzoLungo": {
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
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','184px','89px','auto','auto'],
      fill: ['rgba(42,41,41,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','17px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','41px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','17px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','41px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy12',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['67px','41px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy14',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['97px','41px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy17',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['124px','17px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy16',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['124px','41px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy19',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['153px','17px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2Copy}": [
            ["style", "left", '39px']
         ],
         "${_Rectangle2Copy14}": [
            ["style", "left", '97px'],
            ["style", "top", '41px']
         ],
         "${_Rectangle2Copy19}": [
            ["style", "left", '153px']
         ],
         "${_Rectangle2Copy2}": [
            ["style", "left", '39px'],
            ["style", "top", '41px']
         ],
         "${_Rectangle2Copy17}": [
            ["style", "left", '124px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '186px']
         ],
         "${_Rectangle2Copy12}": [
            ["style", "left", '67px'],
            ["style", "top", '41px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '89px'],
            ["color", "background-color", 'rgba(42,41,41,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '184px']
         ],
         "${_Rectangle2Copy5}": [
            ["style", "top", '41px']
         ],
         "${_Rectangle2Copy16}": [
            ["style", "left", '124px'],
            ["style", "top", '41px']
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
"Palazzo2Basso": {
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
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','20px','68px','85px','auto','auto'],
      fill: ['rgba(132,129,129,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','37px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['12px','61px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','37px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['39px','61px','17px','17px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['4px','13px','60px','7px','auto','auto'],
      fill: ['rgba(110,110,110,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle7}": [
            ["style", "top", '13px'],
            ["style", "height", '7px'],
            ["style", "left", '4px'],
            ["style", "width", '60px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '37px']
         ],
         "${_Rectangle2Copy2}": [
            ["style", "left", '39px'],
            ["style", "top", '61px']
         ],
         "${symbolSelector}": [
            ["style", "height", '106px'],
            ["style", "width", '68px']
         ],
         "${_Rectangle}": [
            ["style", "top", '20px'],
            ["style", "height", '85px'],
            ["color", "background-color", 'rgba(132,129,129,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '68px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "left", '39px'],
            ["style", "top", '37px']
         ],
         "${_Rectangle2Copy5}": [
            ["style", "top", '61px']
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
"front": {
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
      id: 'PalazzoLungo',
      type: 'rect',
      rect: ['159px','28px','auto','auto','auto','auto']
   },
   {
      id: 'PalazzoLungoCopy',
      type: 'rect',
      rect: ['159px','27px','auto','auto','auto','auto']
   },
   {
      id: 'PalazzoCopy3',
      type: 'rect',
      rect: ['-46px','-44px','auto','auto','auto','auto']
   },
   {
      id: 'Palazzo2Basso',
      type: 'rect',
      rect: ['725px','59px','auto','auto','auto','auto']
   },
   {
      id: 'Palazzo2BassoCopy3',
      type: 'rect',
      rect: ['725px','58px','auto','auto','auto','auto']
   },
   {
      id: 'Palazzo2BassoCopy',
      type: 'rect',
      rect: ['725px','58px','auto','auto','auto','auto']
   },
   {
      id: 'Palazzo2BassoCopy2',
      type: 'rect',
      rect: ['725px','58px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Palazzo2Basso',
      symbolName: 'Palazzo2Basso'
   },
   {
      id: 'PalazzoLungoCopy',
      symbolName: 'PalazzoLungo'
   },
   {
      id: 'PalazzoCopy3',
      symbolName: 'Palazzo'
   },
   {
      id: 'PalazzoLungo',
      symbolName: 'PalazzoLungo'
   },
   {
      id: 'Palazzo2BassoCopy2',
      symbolName: 'Palazzo2Basso'
   },
   {
      id: 'Palazzo2BassoCopy',
      symbolName: 'Palazzo2Basso'
   },
   {
      id: 'Palazzo2BassoCopy3',
      symbolName: 'Palazzo2Basso'
   }   ]
   },
   states: {
      "Base State": {
         "${_PalazzoLungoCopy}": [
            ["style", "top", '56px'],
            ["transform", "scaleY", '0.66816'],
            ["style", "left", '331px'],
            ["transform", "scaleX", '0.66816']
         ],
         "${_Palazzo2Basso}": [
            ["style", "top", '25px'],
            ["style", "left", '674px']
         ],
         "${_PalazzoCopy3}": [
            ["style", "top", '-22px'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75'],
            ["subproperty", "filter.contrast", '0.99304366438356'],
            ["style", "left", '505px'],
            ["subproperty", "filter.saturate", '1.4633989726027']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '1053px']
         ],
         "${_Palazzo2BassoCopy2}": [
            ["style", "top", '25px'],
            ["style", "left", '985px']
         ],
         "${_Palazzo2BassoCopy3}": [
            ["style", "top", '25px'],
            ["style", "left", '0px']
         ],
         "${_PalazzoLungo}": [
            ["style", "left", '140px'],
            ["style", "top", '42px']
         ],
         "${_Palazzo2BassoCopy}": [
            ["style", "top", '25px'],
            ["style", "left", '884px']
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
            { id: "eid56", tween: [ "style", "${_PalazzoCopy3}", "left", '505px', { fromValue: '505px'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "subproperty", "${_PalazzoCopy3}", "filter.saturate", '1.4633989726027', { fromValue: '1.4633989726027'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "transform", "${_PalazzoLungoCopy}", "scaleY", '0.66816', { fromValue: '0.66816'}], position: 0, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Palazzo2BassoCopy}", "left", '884px', { fromValue: '884px'}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Palazzo2BassoCopy3}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "transform", "${_PalazzoLungoCopy}", "scaleX", '0.66816', { fromValue: '0.66816'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "subproperty", "${_PalazzoCopy3}", "filter.contrast", '0.99304366438356', { fromValue: '0.99304366438356'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "style", "${_PalazzoCopy3}", "top", '-22px', { fromValue: '-22px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_PalazzoLungoCopy}", "top", '56px', { fromValue: '56px'}], position: 0, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Palazzo2BassoCopy3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "style", "${_PalazzoLungo}", "top", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Palazzo2BassoCopy2}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid49", tween: [ "transform", "${_PalazzoCopy3}", "scaleX", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_PalazzoLungo}", "left", '140px', { fromValue: '140px'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "transform", "${_PalazzoCopy3}", "scaleY", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Palazzo2BassoCopy}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Palazzo2Basso}", "left", '674px', { fromValue: '674px'}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Palazzo2BassoCopy2}", "left", '985px', { fromValue: '985px'}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_PalazzoLungoCopy}", "left", '331px', { fromValue: '331px'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "style", "${_Palazzo2Basso}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 }         ]
      }
   }
},
"medium": {
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
      id: 'Palazzo2',
      type: 'rect',
      rect: ['141px','-11px','auto','auto','auto','auto']
   },
   {
      id: 'Palazzo',
      type: 'rect',
      rect: ['0px','20px','auto','auto','auto','auto']
   },
   {
      id: 'PalazzoCopy',
      type: 'rect',
      rect: ['0px','20px','auto','auto','auto','auto']
   },
   {
      id: 'PalazzoCopy2',
      type: 'rect',
      rect: ['0px','20px','auto','auto','auto','auto']
   },
   {
      id: 'PalazzoLungoCopy2',
      type: 'rect',
      rect: ['205px','91px','auto','auto','auto','auto']
   },
   {
      id: 'PalazzoLungoCopy3',
      type: 'rect',
      rect: ['205px','91px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'PalazzoLungoCopy3',
      symbolName: 'PalazzoLungo'
   },
   {
      id: 'Palazzo2',
      symbolName: 'Palazzo2'
   },
   {
      id: 'PalazzoCopy',
      symbolName: 'Palazzo'
   },
   {
      id: 'PalazzoLungoCopy2',
      symbolName: 'PalazzoLungo'
   },
   {
      id: 'PalazzoCopy2',
      symbolName: 'Palazzo'
   },
   {
      id: 'Palazzo',
      symbolName: 'Palazzo'
   }   ]
   },
   states: {
      "Base State": {
         "${_PalazzoCopy2}": [
            ["style", "top", '42px'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75'],
            ["subproperty", "filter.contrast", '0.99304366438356'],
            ["style", "left", '455px'],
            ["subproperty", "filter.saturate", '1.4633989726027']
         ],
         "${_Palazzo2}": [
            ["style", "top", '0px'],
            ["style", "left", '128px']
         ],
         "${symbolSelector}": [
            ["style", "height", '196px'],
            ["style", "width", '983px']
         ],
         "${_PalazzoCopy}": [
            ["transform", "scaleX", '0.75'],
            ["style", "top", '42px'],
            ["style", "left", '352px'],
            ["transform", "scaleY", '0.75']
         ],
         "${_PalazzoLungoCopy2}": [
            ["style", "top", '120px'],
            ["transform", "scaleY", '0.66816'],
            ["style", "left", '579px'],
            ["transform", "scaleX", '0.66816']
         ],
         "${_PalazzoLungoCopy3}": [
            ["style", "top", '111px'],
            ["transform", "scaleX", '0.87784'],
            ["transform", "scaleY", '0.87784'],
            ["style", "left", '808px']
         ],
         "${_Palazzo}": [
            ["style", "left", '0px'],
            ["style", "top", '20px']
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
            { id: "eid44", tween: [ "style", "${_PalazzoCopy2}", "left", '455px', { fromValue: '455px'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "transform", "${_PalazzoLungoCopy2}", "scaleX", '0.66816', { fromValue: '0.66816'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "transform", "${_PalazzoCopy2}", "scaleX", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "transform", "${_PalazzoLungoCopy2}", "scaleY", '0.66816', { fromValue: '0.66816'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_Palazzo2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid93", tween: [ "style", "${_PalazzoCopy}", "left", '352px', { fromValue: '352px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "subproperty", "${_PalazzoCopy2}", "filter.contrast", '0.99304366438356', { fromValue: '0.99304366438356'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "transform", "${_PalazzoLungoCopy3}", "scaleY", '0.87784', { fromValue: '0.87784'}], position: 0, duration: 0 },
            { id: "eid92", tween: [ "style", "${_PalazzoLungoCopy3}", "top", '111px', { fromValue: '111px'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "transform", "${_PalazzoCopy2}", "scaleY", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "transform", "${_PalazzoLungoCopy3}", "scaleX", '0.87784', { fromValue: '0.87784'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_PalazzoCopy2}", "top", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "transform", "${_PalazzoCopy}", "scaleX", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 },
            { id: "eid45", tween: [ "subproperty", "${_PalazzoCopy2}", "filter.saturate", '1.4633989726027', { fromValue: '1.4633989726027'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_Palazzo2}", "left", '128px', { fromValue: '128px'}], position: 0, duration: 0 },
            { id: "eid66", tween: [ "style", "${_PalazzoLungoCopy2}", "left", '579px', { fromValue: '579px'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_PalazzoLungoCopy2}", "top", '120px', { fromValue: '120px'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "transform", "${_PalazzoCopy}", "scaleY", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_PalazzoCopy}", "top", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_PalazzoLungoCopy3}", "left", '808px', { fromValue: '808px'}], position: 0, duration: 0 }         ]
      }
   }
},
"back": {
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
      id: 'PalazzoConPunta',
      type: 'rect',
      rect: ['134px','60px','auto','auto','auto','auto']
   },
   {
      id: 'PalazzoConPuntaCopy',
      type: 'rect',
      rect: ['134px','60px','auto','auto','auto','auto']
   },
   {
      id: 'Palazzo2Copy',
      type: 'rect',
      rect: ['53px','37px','auto','auto','auto','auto']
   },
   {
      id: 'PalazzoCopy4',
      type: 'rect',
      rect: ['-88px','68px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'PalazzoConPuntaCopy',
      symbolName: 'PalazzoConPunta'
   },
   {
      id: 'PalazzoConPunta',
      symbolName: 'PalazzoConPunta'
   },
   {
      id: 'PalazzoCopy4',
      symbolName: 'Palazzo'
   },
   {
      id: 'Palazzo2Copy',
      symbolName: 'Palazzo2'
   }   ]
   },
   states: {
      "Base State": {
         "${_Palazzo2Copy}": [
            ["style", "top", '48px'],
            ["style", "left", '681px']
         ],
         "${_PalazzoConPunta}": [
            ["transform", "scaleX", '1'],
            ["style", "top", '60px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '954px']
         ],
         "${_PalazzoCopy4}": [
            ["style", "top", '90px'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75'],
            ["subproperty", "filter.contrast", '0.99304366438356'],
            ["style", "left", '894px'],
            ["subproperty", "filter.saturate", '1.4633989726027']
         ],
         "${_PalazzoConPuntaCopy}": [
            ["style", "top", '30px'],
            ["style", "left", '427px'],
            ["transform", "scaleY", '1.33333'],
            ["transform", "scaleX", '1.33333']
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
            { id: "eid97", tween: [ "style", "${_PalazzoConPuntaCopy}", "top", '30px', { fromValue: '30px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "transform", "${_PalazzoConPunta}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid94", tween: [ "transform", "${_PalazzoConPuntaCopy}", "scaleX", '1.33333', { fromValue: '1.33333'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "transform", "${_PalazzoConPuntaCopy}", "scaleY", '1.33333', { fromValue: '1.33333'}], position: 0, duration: 0 },
            { id: "eid99", tween: [ "style", "${_PalazzoConPunta}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid110", tween: [ "subproperty", "${_PalazzoCopy4}", "filter.saturate", '1.4633989726027', { fromValue: '1.4633989726027'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_PalazzoConPuntaCopy}", "left", '427px', { fromValue: '427px'}], position: 0, duration: 0 },
            { id: "eid108", tween: [ "transform", "${_PalazzoCopy4}", "scaleY", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_PalazzoCopy4}", "scaleX", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Palazzo2Copy}", "top", '48px', { fromValue: '48px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_PalazzoConPunta}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Palazzo2Copy}", "left", '681px', { fromValue: '681px'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "subproperty", "${_PalazzoCopy4}", "filter.contrast", '0.99304366438356', { fromValue: '0.99304366438356'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_PalazzoCopy4}", "top", '90px', { fromValue: '90px'}], position: 0, duration: 0 },
            { id: "eid111", tween: [ "style", "${_PalazzoCopy4}", "left", '894px', { fromValue: '894px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_PalazzoConPunta}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 }         ]
      }
   }
},
"city": {
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
      id: 'back',
      type: 'rect',
      rect: ['88px','0px','auto','auto','auto','auto']
   },
   {
      id: 'medium',
      type: 'rect',
      rect: ['0px','48px','auto','auto','auto','auto']
   },
   {
      id: 'front',
      type: 'rect',
      rect: ['46px','112px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'medium',
      symbolName: 'medium'
   },
   {
      id: 'front',
      symbolName: 'front'
   },
   {
      id: 'back',
      symbolName: 'back'
   }   ]
   },
   states: {
      "Base State": {
         "${_back}": [
            ["style", "left", '88px'],
            ["style", "top", '0px']
         ],
         "${_medium}": [
            ["style", "left", '0px'],
            ["style", "top", '48px']
         ],
         "${symbolSelector}": [
            ["style", "height", '244px'],
            ["style", "width", '1099px']
         ],
         "${_front}": [
            ["style", "left", '46px'],
            ["style", "top", '112px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid124", tween: [ "style", "${_medium}", "left", '-50px', { fromValue: '0px'}], position: 0, duration: 4000 },
            { id: "eid121", tween: [ "style", "${_front}", "left", '-50px', { fromValue: '46px'}], position: 0, duration: 4000 },
            { id: "eid127", tween: [ "style", "${_back}", "left", '58px', { fromValue: '88px'}], position: 0, duration: 4000 }         ]
      }
   }
},
"sky_sun": {
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
      id: 'sky',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','800px','420px','auto','auto'],
      fill: ['rgba(0,0,0,1)',[270,[['rgba(184,220,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      rect: ['0px','38px','83px','83px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,10.546873745853,'rgba(0,0,0,0)',0,0,0],
      id: 'sun',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(251,226,65,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sky}": [
            ["style", "top", '0px'],
            ["gradient", "background-image", [270,[['rgba(68,123,177,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px']
         ],
         "${_sun}": [
            ["style", "top", '38px'],
            ["motion", "location", '41.5px 79.5px'],
            ["subproperty", "filter.blur", '10.546873745853px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(251,226,65,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '420px'],
            ["style", "width", '800px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid129", tween: [ "motion", "${_sun}", [[13.45,129.12,0,0],[532.35,79.07,639.27,210.38,609.77,200.67],[763.32,271.33,0,0]]], position: 0, duration: 4000 },
            { id: "eid135", tween: [ "gradient", "${_sky}", "background-image", [270,[['rgba(184,220,255,1.00)',0],['rgba(255,255,255,1.00)',100]]], { fromValue: [270,[['rgba(68,123,177,1.00)',0],['rgba(255,255,255,1.00)',100]]]}], position: 0, duration: 2693 },
            { id: "eid133", tween: [ "gradient", "${_sky}", "background-image", [270,[['rgba(75,42,229,1.00)',0],['rgba(250,203,113,1.00)',100]]], { fromValue: [270,[['rgba(184,220,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]}], position: 2693, duration: 1307 }         ]
      }
   }
},
"linea": {
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
      fill: ['rgba(255,255,255,1)'],
      transform: [[0,0],[],['-9','-5']],
      borderRadius: ['11px 11px','0px','11px 11px','0px'],
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['3px','17px','372px','7px','auto','auto'],
      boxShadow: ['',14,0,7,0,'rgba(0,0,0,0.65)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '40px'],
            ["style", "width", '378px']
         ],
         "${_Rectangle}": [
            ["style", "border-top-left-radius", [11,11], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '7px'],
            ["style", "border-bottom-right-radius", [11,11], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '3px'],
            ["style", "top", '17px'],
            ["transform", "skewY", '-5deg'],
            ["transform", "skewX", '-9deg'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '14px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid147", tween: [ "subproperty", "${_Rectangle}", "boxShadow.offsetV", '-8px', { fromValue: '0px'}], position: 0, duration: 4000 },
            { id: "eid146", tween: [ "subproperty", "${_Rectangle}", "boxShadow.offsetH", '-20px', { fromValue: '14px'}], position: 0, duration: 4000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-3616601");
