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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ball1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("foto1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ball2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("foto2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ball3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("foto3");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Panel'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_panel_interno}", "click", function(sym, e) {
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("panel");
   //Edge symbol end:'panel'

   //=========================================================
   
   //Edge symbol: 'panel_interno'
   (function(symbolName) {   
   
   })("panel_interno");
   //Edge symbol end:'panel_interno'

})(jQuery, AdobeEdge, "EDGE-10210191");