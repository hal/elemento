goog.module('elemental2.dom.RTCStatsResponse.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let RTCStatsReport_$Overlay = goog.forwardDeclare('elemental2.dom.RTCStatsReport.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.RTCStatsResponse.$LambdaAdaptor$impl');

class RTCStatsResponse_$Overlay {
 /** @return {RTCStatsResponse} */
 static $adapt__elemental2_dom_RTCStatsResponse_$JsFunction(/** ?function():Array<RTCStatsReport> */ fn) {
  RTCStatsResponse_$Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  RTCStatsResponse_$Overlay.$clinit = () =>{};
  RTCStatsResponse_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.RTCStatsResponse.$LambdaAdaptor$impl');
 }
 
}

exports = RTCStatsResponse_$Overlay; 
//# sourceMappingURL=RTCStatsResponse$$Overlay.js.map
