goog.module('org.gwtproject.event.dom.client.CanPlayThroughEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let CanPlayThroughHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.CanPlayThroughHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<CanPlayThroughHandler>}
  */
class CanPlayThroughEvent extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CanPlayThroughEvent} */
 static $create__() {
  CanPlayThroughEvent.$clinit();
  let $instance = new CanPlayThroughEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_CanPlayThroughEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_CanPlayThroughEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {Type<CanPlayThroughHandler>} */
 static m_getType__() {
  CanPlayThroughEvent.$clinit();
  return CanPlayThroughEvent.f_TYPE__org_gwtproject_event_dom_client_CanPlayThroughEvent_;
 }
 /** @override @return {Type<CanPlayThroughHandler>} */
 m_getAssociatedType__() {
  return CanPlayThroughEvent.f_TYPE__org_gwtproject_event_dom_client_CanPlayThroughEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_CanPlayThroughHandler(/** CanPlayThroughHandler */ handler) {
  handler.m_onCanPlayThrough__org_gwtproject_event_dom_client_CanPlayThroughEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** CanPlayThroughHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_CanPlayThroughHandler(/**@type {CanPlayThroughHandler}*/ ($Casts.$to(arg0, CanPlayThroughHandler)));
 }
 
 static $clinit() {
  CanPlayThroughEvent.$clinit = () =>{};
  CanPlayThroughEvent.$loadModules();
  DomEvent.$clinit();
  CanPlayThroughEvent.f_TYPE__org_gwtproject_event_dom_client_CanPlayThroughEvent_ = /**@type {!Type<CanPlayThroughHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_CANPLAYTHROUGH__org_gwtproject_dom_client_BrowserEvents, CanPlayThroughEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CanPlayThroughEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  CanPlayThroughHandler = goog.module.get('org.gwtproject.event.dom.client.CanPlayThroughHandler$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CanPlayThroughEvent, 'org.gwtproject.event.dom.client.CanPlayThroughEvent');

/**@type {Type<CanPlayThroughHandler>}*/
CanPlayThroughEvent.f_TYPE__org_gwtproject_event_dom_client_CanPlayThroughEvent_;

exports = CanPlayThroughEvent; 
//# sourceMappingURL=CanPlayThroughEvent.js.map
