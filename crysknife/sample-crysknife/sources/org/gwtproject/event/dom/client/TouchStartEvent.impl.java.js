goog.module('org.gwtproject.event.dom.client.TouchStartEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TouchEvent = goog.require('org.gwtproject.event.dom.client.TouchEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let TouchStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TouchEvent<TouchStartHandler>}
  */
class TouchStartEvent extends TouchEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TouchStartEvent} */
 static $create__() {
  TouchStartEvent.$clinit();
  let $instance = new TouchStartEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_TouchStartEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_TouchStartEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_TouchEvent__();
 }
 /** @return {Type<TouchStartHandler>} */
 static m_getType__() {
  TouchStartEvent.$clinit();
  return TouchStartEvent.f_TYPE__org_gwtproject_event_dom_client_TouchStartEvent_;
 }
 /** @override @return {Type<TouchStartHandler>} */
 m_getAssociatedType__() {
  return TouchStartEvent.f_TYPE__org_gwtproject_event_dom_client_TouchStartEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_TouchStartHandler(/** TouchStartHandler */ handler) {
  handler.m_onTouchStart__org_gwtproject_event_dom_client_TouchStartEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** TouchStartHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_TouchStartHandler(/**@type {TouchStartHandler}*/ ($Casts.$to(arg0, TouchStartHandler)));
 }
 
 static $clinit() {
  TouchStartEvent.$clinit = () =>{};
  TouchStartEvent.$loadModules();
  TouchEvent.$clinit();
  TouchStartEvent.f_TYPE__org_gwtproject_event_dom_client_TouchStartEvent_ = /**@type {!Type<TouchStartHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_TOUCHSTART__org_gwtproject_dom_client_BrowserEvents, TouchStartEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TouchStartEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  TouchStartHandler = goog.module.get('org.gwtproject.event.dom.client.TouchStartHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TouchStartEvent, 'org.gwtproject.event.dom.client.TouchStartEvent');

/**@type {Type<TouchStartHandler>}*/
TouchStartEvent.f_TYPE__org_gwtproject_event_dom_client_TouchStartEvent_;

exports = TouchStartEvent; 
//# sourceMappingURL=TouchStartEvent.js.map
