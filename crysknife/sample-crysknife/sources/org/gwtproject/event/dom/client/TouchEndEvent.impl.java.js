goog.module('org.gwtproject.event.dom.client.TouchEndEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TouchEvent = goog.require('org.gwtproject.event.dom.client.TouchEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let TouchEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TouchEvent<TouchEndHandler>}
  */
class TouchEndEvent extends TouchEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TouchEndEvent} */
 static $create__() {
  TouchEndEvent.$clinit();
  let $instance = new TouchEndEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_TouchEndEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_TouchEndEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_TouchEvent__();
 }
 /** @return {Type<TouchEndHandler>} */
 static m_getType__() {
  TouchEndEvent.$clinit();
  return TouchEndEvent.f_TYPE__org_gwtproject_event_dom_client_TouchEndEvent_;
 }
 /** @override @return {Type<TouchEndHandler>} */
 m_getAssociatedType__() {
  return TouchEndEvent.f_TYPE__org_gwtproject_event_dom_client_TouchEndEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_TouchEndHandler(/** TouchEndHandler */ handler) {
  handler.m_onTouchEnd__org_gwtproject_event_dom_client_TouchEndEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** TouchEndHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_TouchEndHandler(/**@type {TouchEndHandler}*/ ($Casts.$to(arg0, TouchEndHandler)));
 }
 
 static $clinit() {
  TouchEndEvent.$clinit = () =>{};
  TouchEndEvent.$loadModules();
  TouchEvent.$clinit();
  TouchEndEvent.f_TYPE__org_gwtproject_event_dom_client_TouchEndEvent_ = /**@type {!Type<TouchEndHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_TOUCHEND__org_gwtproject_dom_client_BrowserEvents, TouchEndEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TouchEndEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  TouchEndHandler = goog.module.get('org.gwtproject.event.dom.client.TouchEndHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TouchEndEvent, 'org.gwtproject.event.dom.client.TouchEndEvent');

/**@type {Type<TouchEndHandler>}*/
TouchEndEvent.f_TYPE__org_gwtproject_event_dom_client_TouchEndEvent_;

exports = TouchEndEvent; 
//# sourceMappingURL=TouchEndEvent.js.map
