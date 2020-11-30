goog.module('elemental2.dom.BarProp.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.BarProp.$LambdaAdaptor$impl');

class $Overlay {
 /** @return {BarProp} */
 static $adapt__elemental2_dom_BarProp_$JsFunction(/** ?function():boolean */ fn) {
  $Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.BarProp.$LambdaAdaptor$impl');
 }
 
}

exports = $Overlay; 
//# sourceMappingURL=BarProp$$Overlay.js.map
