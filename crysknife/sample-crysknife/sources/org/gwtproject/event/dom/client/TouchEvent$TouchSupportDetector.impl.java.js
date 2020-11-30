goog.module('org.gwtproject.event.dom.client.TouchEvent.TouchSupportDetector$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TouchSupportDetector extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_isSupported__org_gwtproject_event_dom_client_TouchEvent_TouchSupportDetector_ = false;
 }
 /** @return {!TouchSupportDetector} */
 static $create__() {
  TouchSupportDetector.$clinit();
  let $instance = new TouchSupportDetector();
  $instance.$ctor__org_gwtproject_event_dom_client_TouchEvent_TouchSupportDetector__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_TouchEvent_TouchSupportDetector__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_event_dom_client_TouchEvent_TouchSupportDetector();
 }
 /** @return {boolean} */
 m_detectTouchSupport___$p_org_gwtproject_event_dom_client_TouchEvent_TouchSupportDetector() {
  let divElement = /**@type {HTMLDivElement}*/ ($Casts.$to($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), HTMLDivElement_$Overlay));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(divElement, "ontouchstart", "return;");
  return $Equality.$same("function", typeof(divElement.ontouchstart));
 }
 /** @private */
 $init___$p_org_gwtproject_event_dom_client_TouchEvent_TouchSupportDetector() {
  this.f_isSupported__org_gwtproject_event_dom_client_TouchEvent_TouchSupportDetector_ = this.m_detectTouchSupport___$p_org_gwtproject_event_dom_client_TouchEvent_TouchSupportDetector();
 }
 
 static $clinit() {
  TouchSupportDetector.$clinit = () =>{};
  TouchSupportDetector.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TouchSupportDetector;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TouchSupportDetector, 'org.gwtproject.event.dom.client.TouchEvent$TouchSupportDetector');

exports = TouchSupportDetector; 
//# sourceMappingURL=TouchEvent$TouchSupportDetector.js.map
