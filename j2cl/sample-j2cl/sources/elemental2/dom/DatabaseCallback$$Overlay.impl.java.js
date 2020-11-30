goog.module('elemental2.dom.DatabaseCallback.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Database.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.DatabaseCallback.$LambdaAdaptor$impl');

class DatabaseCallback_$Overlay {
 /** @return {DatabaseCallback} */
 static $adapt__elemental2_dom_DatabaseCallback_$JsFunction(/** ?function(Database):void */ fn) {
  DatabaseCallback_$Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DatabaseCallback_$Overlay.$clinit = () =>{};
  DatabaseCallback_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.DatabaseCallback.$LambdaAdaptor$impl');
 }
 
}

exports = DatabaseCallback_$Overlay; 
//# sourceMappingURL=DatabaseCallback$$Overlay.js.map
