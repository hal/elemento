goog.module('elemental2.dom.Event.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_AT_TARGET__elemental2_dom_Event_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_AT_TARGET__elemental2_dom_Event_$Overlay);
 }
 /** @return {number} */
 static get f_BUBBLING_PHASE__elemental2_dom_Event_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_BUBBLING_PHASE__elemental2_dom_Event_$Overlay);
 }
 /** @return {number} */
 static get f_CAPTURING_PHASE__elemental2_dom_Event_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_CAPTURING_PHASE__elemental2_dom_Event_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_AT_TARGET__elemental2_dom_Event_$Overlay = Event.AT_TARGET;
  $Overlay.$f_BUBBLING_PHASE__elemental2_dom_Event_$Overlay = Event.BUBBLING_PHASE;
  $Overlay.$f_CAPTURING_PHASE__elemental2_dom_Event_$Overlay = Event.CAPTURING_PHASE;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Event;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'Event');

/**@private {number}*/
$Overlay.$f_AT_TARGET__elemental2_dom_Event_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_BUBBLING_PHASE__elemental2_dom_Event_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_CAPTURING_PHASE__elemental2_dom_Event_$Overlay = 0;

exports = $Overlay; 
//# sourceMappingURL=Event$$Overlay.js.map
