goog.module('org.gwtproject.event.dom.client.TouchEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HumanInputEvent = goog.require('org.gwtproject.event.dom.client.HumanInputEvent$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JsArray_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JsArray.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Touch_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Touch.$Overlay$impl');
let TouchSupportDetector = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEvent.TouchSupportDetector$impl');
let EventHandler = goog.forwardDeclare('org.gwtproject.event.legacy.shared.EventHandler$impl');

/**
 * @abstract
 * @template H
 * @extends {HumanInputEvent<H>}
  */
class TouchEvent extends HumanInputEvent {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_event_dom_client_TouchEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_HumanInputEvent__();
 }
 /** @return {boolean} */
 static m_isSupported__() {
  TouchEvent.$clinit();
  if ($Equality.$same(TouchEvent.f_impl__org_gwtproject_event_dom_client_TouchEvent_, null)) {
   TouchEvent.f_impl__org_gwtproject_event_dom_client_TouchEvent_ = TouchSupportDetector.$create__();
  }
  return TouchEvent.f_impl__org_gwtproject_event_dom_client_TouchEvent_.f_isSupported__org_gwtproject_event_dom_client_TouchEvent_TouchSupportDetector_;
 }
 /** @return {Object<string, Object>} */
 m_getChangedTouches__() {
  return $Overlay.m_getChangedTouches__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /** @return {Object<string, Object>} */
 m_getTargetTouches__() {
  return $Overlay.m_getTargetTouches__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /** @return {Object<string, Object>} */
 m_getTouches__() {
  return $Overlay.m_getTouches__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 
 static $clinit() {
  TouchEvent.$clinit = () =>{};
  TouchEvent.$loadModules();
  HumanInputEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TouchEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  TouchSupportDetector = goog.module.get('org.gwtproject.event.dom.client.TouchEvent.TouchSupportDetector$impl');
 }
 
}
$Util.$setClassMetadata(TouchEvent, 'org.gwtproject.event.dom.client.TouchEvent');

/**@type {TouchSupportDetector}*/
TouchEvent.f_impl__org_gwtproject_event_dom_client_TouchEvent_;

exports = TouchEvent; 
//# sourceMappingURL=TouchEvent.js.map
