goog.module('org.gwtproject.event.dom.client.TouchMoveEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TouchEvent = goog.require('org.gwtproject.event.dom.client.TouchEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let TouchMoveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TouchEvent<TouchMoveHandler>}
  */
class TouchMoveEvent extends TouchEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TouchMoveEvent} */
 static $create__() {
  TouchMoveEvent.$clinit();
  let $instance = new TouchMoveEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_TouchMoveEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_TouchMoveEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_TouchEvent__();
 }
 /** @return {Type<TouchMoveHandler>} */
 static m_getType__() {
  TouchMoveEvent.$clinit();
  return TouchMoveEvent.f_TYPE__org_gwtproject_event_dom_client_TouchMoveEvent_;
 }
 /** @override @return {Type<TouchMoveHandler>} */
 m_getAssociatedType__() {
  return TouchMoveEvent.f_TYPE__org_gwtproject_event_dom_client_TouchMoveEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_TouchMoveHandler(/** TouchMoveHandler */ handler) {
  handler.m_onTouchMove__org_gwtproject_event_dom_client_TouchMoveEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** TouchMoveHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_TouchMoveHandler(/**@type {TouchMoveHandler}*/ ($Casts.$to(arg0, TouchMoveHandler)));
 }
 
 static $clinit() {
  TouchMoveEvent.$clinit = () =>{};
  TouchMoveEvent.$loadModules();
  TouchEvent.$clinit();
  TouchMoveEvent.f_TYPE__org_gwtproject_event_dom_client_TouchMoveEvent_ = /**@type {!Type<TouchMoveHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_TOUCHMOVE__org_gwtproject_dom_client_BrowserEvents, TouchMoveEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TouchMoveEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  TouchMoveHandler = goog.module.get('org.gwtproject.event.dom.client.TouchMoveHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TouchMoveEvent, 'org.gwtproject.event.dom.client.TouchMoveEvent');

/**@type {Type<TouchMoveHandler>}*/
TouchMoveEvent.f_TYPE__org_gwtproject_event_dom_client_TouchMoveEvent_;

exports = TouchMoveEvent; 
//# sourceMappingURL=TouchMoveEvent.js.map
