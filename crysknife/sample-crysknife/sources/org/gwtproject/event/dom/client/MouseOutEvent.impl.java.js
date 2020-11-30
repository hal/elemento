goog.module('org.gwtproject.event.dom.client.MouseOutEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MouseEvent = goog.require('org.gwtproject.event.dom.client.MouseEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let EventTarget_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.EventTarget.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let MouseOutHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MouseEvent<MouseOutHandler>}
  */
class MouseOutEvent extends MouseEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MouseOutEvent} */
 static $create__() {
  MouseOutEvent.$clinit();
  let $instance = new MouseOutEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_MouseOutEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseOutEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_MouseEvent__();
 }
 /** @return {Type<MouseOutHandler>} */
 static m_getType__() {
  MouseOutEvent.$clinit();
  return MouseOutEvent.f_TYPE__org_gwtproject_event_dom_client_MouseOutEvent_;
 }
 /** @override @return {Type<MouseOutHandler>} */
 m_getAssociatedType__() {
  return MouseOutEvent.f_TYPE__org_gwtproject_event_dom_client_MouseOutEvent_;
 }
 /** @return {Object} */
 m_getRelatedTarget__() {
  return $Overlay.m_getRelatedEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 
 m_dispatch__org_gwtproject_event_dom_client_MouseOutHandler(/** MouseOutHandler */ handler) {
  handler.m_onMouseOut__org_gwtproject_event_dom_client_MouseOutEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** MouseOutHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_MouseOutHandler(/**@type {MouseOutHandler}*/ ($Casts.$to(arg0, MouseOutHandler)));
 }
 
 static $clinit() {
  MouseOutEvent.$clinit = () =>{};
  MouseOutEvent.$loadModules();
  MouseEvent.$clinit();
  MouseOutEvent.f_TYPE__org_gwtproject_event_dom_client_MouseOutEvent_ = /**@type {!Type<MouseOutHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_MOUSEOUT__org_gwtproject_dom_client_BrowserEvents, MouseOutEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MouseOutEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  MouseOutHandler = goog.module.get('org.gwtproject.event.dom.client.MouseOutHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MouseOutEvent, 'org.gwtproject.event.dom.client.MouseOutEvent');

/**@type {Type<MouseOutHandler>}*/
MouseOutEvent.f_TYPE__org_gwtproject_event_dom_client_MouseOutEvent_;

exports = MouseOutEvent; 
//# sourceMappingURL=MouseOutEvent.js.map
