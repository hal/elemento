goog.module('org.gwtproject.event.dom.client.MouseWheelEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MouseEvent = goog.require('org.gwtproject.event.dom.client.MouseEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let MouseWheelHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MouseEvent<MouseWheelHandler>}
  */
class MouseWheelEvent extends MouseEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MouseWheelEvent} */
 static $create__() {
  MouseWheelEvent.$clinit();
  let $instance = new MouseWheelEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_MouseWheelEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseWheelEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_MouseEvent__();
 }
 /** @return {Type<MouseWheelHandler>} */
 static m_getType__() {
  MouseWheelEvent.$clinit();
  return MouseWheelEvent.f_TYPE__org_gwtproject_event_dom_client_MouseWheelEvent_;
 }
 /** @override @return {Type<MouseWheelHandler>} */
 m_getAssociatedType__() {
  return MouseWheelEvent.f_TYPE__org_gwtproject_event_dom_client_MouseWheelEvent_;
 }
 /** @return {boolean} */
 m_isNorth__() {
  return this.m_getDeltaY__() < 0;
 }
 /** @return {number} */
 m_getDeltaY__() {
  return $Overlay.m_getMouseWheelVelocityY__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /** @return {boolean} */
 m_isSouth__() {
  return this.m_getDeltaY__() > 0;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_MouseWheelHandler(/** MouseWheelHandler */ handler) {
  handler.m_onMouseWheel__org_gwtproject_event_dom_client_MouseWheelEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** MouseWheelHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_MouseWheelHandler(/**@type {MouseWheelHandler}*/ ($Casts.$to(arg0, MouseWheelHandler)));
 }
 
 static $clinit() {
  MouseWheelEvent.$clinit = () =>{};
  MouseWheelEvent.$loadModules();
  MouseEvent.$clinit();
  MouseWheelEvent.f_TYPE__org_gwtproject_event_dom_client_MouseWheelEvent_ = /**@type {!Type<MouseWheelHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_MOUSEWHEEL__org_gwtproject_dom_client_BrowserEvents, MouseWheelEvent.$create__()));
  Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent("DOMMouseScroll", MouseWheelEvent.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MouseWheelEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  MouseWheelHandler = goog.module.get('org.gwtproject.event.dom.client.MouseWheelHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MouseWheelEvent, 'org.gwtproject.event.dom.client.MouseWheelEvent');

/**@type {Type<MouseWheelHandler>}*/
MouseWheelEvent.f_TYPE__org_gwtproject_event_dom_client_MouseWheelEvent_;

exports = MouseWheelEvent; 
//# sourceMappingURL=MouseWheelEvent.js.map
