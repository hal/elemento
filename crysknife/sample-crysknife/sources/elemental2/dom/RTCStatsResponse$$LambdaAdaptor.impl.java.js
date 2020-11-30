goog.module('elemental2.dom.RTCStatsResponse.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let RTCStatsReport_$Overlay = goog.forwardDeclare('elemental2.dom.RTCStatsReport.$Overlay$impl');
let RTCStatsResponse_$Overlay = goog.forwardDeclare('elemental2.dom.RTCStatsResponse.$Overlay$impl');

/**
 * @implements {RTCStatsResponse}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Array<RTCStatsReport> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Array<RTCStatsReport>}*/
  this.f_$$fn__elemental2_dom_RTCStatsResponse_$LambdaAdaptor;
  this.$ctor__elemental2_dom_RTCStatsResponse_$LambdaAdaptor__elemental2_dom_RTCStatsResponse_$JsFunction(fn);
 }
 
 $ctor__elemental2_dom_RTCStatsResponse_$LambdaAdaptor__elemental2_dom_RTCStatsResponse_$JsFunction(/** ?function():Array<RTCStatsReport> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__elemental2_dom_RTCStatsResponse_$LambdaAdaptor = fn;
 }
 /** @return {Array<RTCStatsReport>} */
 result() {
  let /** ?function():Array<RTCStatsReport> */ $function;
  return ($function = this.f_$$fn__elemental2_dom_RTCStatsResponse_$LambdaAdaptor, $function());
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.RTCStatsResponse$$LambdaAdaptor');

exports = $LambdaAdaptor; 
//# sourceMappingURL=RTCStatsResponse$$LambdaAdaptor.js.map
