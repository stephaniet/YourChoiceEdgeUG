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
         
         var myVideo = sym.getSymbol("televisione").$("myVideo");
         var videoString="<video width='"+$(myVideo).width()+"' height='"+$(myVideo).height()+"' controls><source src='intro.mp4' type='video/mp4'><source src='intro.ogg' type='video/ogg'></video>";
         $(myVideo).html(videoString);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'televisione'
   (function(symbolName) {   
   
   })("televisione");
   //Edge symbol end:'televisione'

})(jQuery, AdobeEdge, "EDGE-4425041");