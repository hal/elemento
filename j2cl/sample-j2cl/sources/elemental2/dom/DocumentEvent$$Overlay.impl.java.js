goog.module('elemental2.dom.DocumentEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.DocumentEvent.$LambdaAdaptor$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');

class DocumentEvent_$Overlay {
 /** @return {DocumentEvent} */
 static $adapt__elemental2_dom_DocumentEvent_$JsFunction(/** ?function(?string):Event */ fn) {
  DocumentEvent_$Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DocumentEvent_$Overlay.$clinit = () =>{};
  DocumentEvent_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.DocumentEvent.$LambdaAdaptor$impl');
 }
 
}

exports = DocumentEvent_$Overlay; 
//# sourceMappingURL=DocumentEvent$$Overlay.js.map
