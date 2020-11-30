goog.module('elemental2.dom.WritableStreamDefaultController.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.WritableStreamDefaultController.$LambdaAdaptor$impl');
let $Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');

class WritableStreamDefaultController_$Overlay {
 /** @return {WritableStreamDefaultController} */
 static $adapt__elemental2_dom_WritableStreamDefaultController_$JsFunction(/** ?function(*):Promise<?void> */ fn) {
  WritableStreamDefaultController_$Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  WritableStreamDefaultController_$Overlay.$clinit = () =>{};
  WritableStreamDefaultController_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.WritableStreamDefaultController.$LambdaAdaptor$impl');
 }
 
}

exports = WritableStreamDefaultController_$Overlay; 
//# sourceMappingURL=WritableStreamDefaultController$$Overlay.js.map
