goog.module('elemental2.dom.DocumentRange.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.DocumentRange.$LambdaAdaptor$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Range.$Overlay$impl');

class DocumentRange_$Overlay {
 /** @return {DocumentRange} */
 static $adapt__elemental2_dom_DocumentRange_$JsFunction(/** ?function():Range */ fn) {
  DocumentRange_$Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DocumentRange_$Overlay.$clinit = () =>{};
  DocumentRange_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.DocumentRange.$LambdaAdaptor$impl');
 }
 
}

exports = DocumentRange_$Overlay; 
//# sourceMappingURL=DocumentRange$$Overlay.js.map
