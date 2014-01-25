/***********************
* Azioni di composizione in Adobe Edge Animate
*
* Modifica con cautela questo file di testo, prestando attenzione a salvare 
* firme e commenti di funzione che iniziano con "Edge" per mantenere 
* possibilità di interagire con le azioni dall'interno di Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias per le classi usate più di frequente in Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //yepnope({nope:['jquery-ui-1.10.3.custom.min.js'], complete:startPlayin});
         
         startPlayin();
         var inc=0;
         function startPlayin(){
         	for(i=0; i<4; i++){
         		sym.$("foto"+(i+1)).draggable();
         		sym.$("bg").droppable({drop:checkMe});
         	}
         }
         
         function checkMe(){
         	inc++;
         	if(inc==4) alert("Good!");
         }

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-17265306");