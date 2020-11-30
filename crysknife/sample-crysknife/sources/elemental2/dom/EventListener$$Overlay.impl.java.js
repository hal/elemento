goog.module('elemental2.dom.EventListener.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.EventListener.$LambdaAdaptor$impl');

class EventListener_$Overlay {
 /** @return {EventListener} */
 static $adapt__elemental2_dom_EventListener_$JsFunction(/** ?function(Event):void */ fn) {
  EventListener_$Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  EventListener_$Overlay.$clinit = () =>{};
  EventListener_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.EventListener.$LambdaAdaptor$impl');
 }
 
}

exports = EventListener_$Overlay; 
//# sourceMappingURL=EventListener$$Overlay.js.map
