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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_box1}", "mouseover", function(sym, e) {
         
         var box1 = sym.getSymbol("box1");
         box1.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_box1}", "mouseout", function(sym, e) {
         var box1 = sym.getSymbol("box1");
         box1.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_box2}", "mouseover", function(sym, e) {
         var box2 = sym.getSymbol("box2");
         box2.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_box2}", "mouseout", function(sym, e) {
         
         var box2 = sym.getSymbol("box2");
         box2.stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_box3}", "mouseover", function(sym, e) {
         
         var box3 = sym.getSymbol("box3");
         box3.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_box3}", "mouseout", function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var box3 = sym.getSymbol("box3");
         box3.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the symbol is created here
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         
         sym.$("boxEvento").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_box2}", "click", function(sym, e) {
         // Show an Element.
         sym.$("boxEvento").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boxEvento}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("boxEvento").hide();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'box1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("box1");
   //Edge symbol end:'box1'

   //=========================================================
   
   //Edge symbol: 'box2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("box2");
   //Edge symbol end:'box2'

   //=========================================================
   
   //Edge symbol: 'box3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("box3");
   //Edge symbol end:'box3'

   //=========================================================
   
   //Edge symbol: 'BoxTesto'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("BoxTesto");
   //Edge symbol end:'BoxTesto'

   //=========================================================
   
   //Edge symbol: 'socials'
   (function(symbolName) {   
   
   })("facebook");
   //Edge symbol end:'facebook'

   //=========================================================
   
   //Edge symbol: 'facebook_1'
   (function(symbolName) {   
   
      })("google");
   //Edge symbol end:'google'

})(jQuery, AdobeEdge, "EDGE-5228619");