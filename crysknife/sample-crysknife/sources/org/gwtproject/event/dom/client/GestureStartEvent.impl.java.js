goog.module('org.gwtproject.event.dom.client.GestureStartEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let GestureStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<GestureStartHandler>}
  */
class GestureStartEvent extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!GestureStartEvent} */
 static $create__() {
  GestureStartEvent.$clinit();
  let $instance = new GestureStartEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_GestureStartEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_GestureStartEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {Type<GestureStartHandler>} */
 static m_getType__() {
  GestureStartEvent.$clinit();
  return GestureStartEvent.f_TYPE__org_gwtproject_event_dom_client_GestureStartEvent_;
 }
 /** @override @return {Type<GestureStartHandler>} */
 m_getAssociatedType__() {
  return GestureStartEvent.f_TYPE__org_gwtproject_event_dom_client_GestureStartEvent_;
 }
 /** @return {number} */
 m_getRotation__() {
  return $Overlay.m_getRotation__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /** @return {number} */
 m_getScale__() {
  return $Overlay.m_getScale__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 
 m_dispatch__org_gwtproject_event_dom_client_GestureStartHandler(/** GestureStartHandler */ handler) {
  handler.m_onGestureStart__org_gwtproject_event_dom_client_GestureStartEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** GestureStartHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_GestureStartHandler(/**@type {GestureStartHandler}*/ ($Casts.$to(arg0, GestureStartHandler)));
 }
 
 static $clinit() {
  GestureStartEvent.$clinit = () =>{};
  GestureStartEvent.$loadModules();
  DomEvent.$clinit();
  GestureStartEvent.f_TYPE__org_gwtproject_event_dom_client_GestureStartEvent_ = /**@type {!Type<GestureStartHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_GESTURESTART__org_gwtproject_dom_client_BrowserEvents, GestureStartEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GestureStartEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  GestureStartHandler = goog.module.get('org.gwtproject.event.dom.client.GestureStartHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(GestureStartEvent, 'org.gwtproject.event.dom.client.GestureStartEvent');

/**@type {Type<GestureStartHandler>}*/
GestureStartEvent.f_TYPE__org_gwtproject_event_dom_client_GestureStartEvent_;

exports = GestureStartEvent; 
//# sourceMappingURL=GestureStartEvent.js.map
