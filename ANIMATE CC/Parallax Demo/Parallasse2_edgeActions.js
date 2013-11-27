/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         this.onMove = function( posX, posY ){
         	sym.getSymbol("sky_sun").stop(Number(posX)*5);
         	sym.getSymbol("city").stop(Number(posX)*5);
         	sym.getSymbol("linea").stop(Number(posX)*5);
         }  

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousemove", function(sym, e) {
         this.onMove( e.pageX, e.pageY );
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Palazzo'
   (function(symbolName) {   
   
   })("Palazzo");
   //Edge symbol end:'Palazzo'

   //=========================================================
   
   //Edge symbol: 'PalazzoConPunta'
   (function(symbolName) {   
   
   })("PalazzoConPunta");
   //Edge symbol end:'PalazzoConPunta'

   //=========================================================
   
   //Edge symbol: 'Palazzo_1'
   (function(symbolName) {   
   
   })("Palazzo2");
   //Edge symbol end:'Palazzo2'

   //=========================================================
   
   //Edge symbol: 'Palazzo_1'
   (function(symbolName) {   
   
   })("PalazzoLungo");
   //Edge symbol end:'PalazzoLungo'

   //=========================================================
   
   //Edge symbol: 'Palazzo2_1'
   (function(symbolName) {   
   
   })("Palazzo2Basso");
   //Edge symbol end:'Palazzo2Basso'

   //=========================================================
   
   //Edge symbol: 'front'
   (function(symbolName) {   
   
   })("front");
   //Edge symbol end:'front'

   //=========================================================
   
   //Edge symbol: 'medium'
   (function(symbolName) {   
   
   })("medium");
   //Edge symbol end:'medium'

   //=========================================================
   
   //Edge symbol: 'back'
   (function(symbolName) {   
   
   })("back");
   //Edge symbol end:'back'

   //=========================================================
   
   //Edge symbol: 'city'
   (function(symbolName) {   
   
   })("city");
   //Edge symbol end:'city'

   //=========================================================
   
   //Edge symbol: 'sky_sun'
   (function(symbolName) {   
   
   })("sky_sun");
   //Edge symbol end:'sky_sun'

   //=========================================================
   
   //Edge symbol: 'linea'
   (function(symbolName) {   
   
   })("linea");
   //Edge symbol end:'linea'

})(jQuery, AdobeEdge, "EDGE-3616601");