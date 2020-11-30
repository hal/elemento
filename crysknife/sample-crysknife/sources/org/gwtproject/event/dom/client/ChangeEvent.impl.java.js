goog.module('org.gwtproject.event.dom.client.ChangeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let ChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<ChangeHandler>}
  */
class ChangeEvent extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChangeEvent} */
 static $create__() {
  ChangeEvent.$clinit();
  let $instance = new ChangeEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_ChangeEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_ChangeEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {Type<ChangeHandler>} */
 static m_getType__() {
  ChangeEvent.$clinit();
  return ChangeEvent.f_TYPE__org_gwtproject_event_dom_client_ChangeEvent_;
 }
 /** @override @return {Type<ChangeHandler>} */
 m_getAssociatedType__() {
  return ChangeEvent.f_TYPE__org_gwtproject_event_dom_client_ChangeEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_ChangeHandler(/** ChangeHandler */ handler) {
  handler.m_onChange__org_gwtproject_event_dom_client_ChangeEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** ChangeHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_ChangeHandler(/**@type {ChangeHandler}*/ ($Casts.$to(arg0, ChangeHandler)));
 }
 
 static $clinit() {
  ChangeEvent.$clinit = () =>{};
  ChangeEvent.$loadModules();
  DomEvent.$clinit();
  ChangeEvent.f_TYPE__org_gwtproject_event_dom_client_ChangeEvent_ = /**@type {!Type<ChangeHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_CHANGE__org_gwtproject_dom_client_BrowserEvents, ChangeEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChangeEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  ChangeHandler = goog.module.get('org.gwtproject.event.dom.client.ChangeHandler$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ChangeEvent, 'org.gwtproject.event.dom.client.ChangeEvent');

/**@type {Type<ChangeHandler>}*/
ChangeEvent.f_TYPE__org_gwtproject_event_dom_client_ChangeEvent_;

exports = ChangeEvent; 
//# sourceMappingURL=ChangeEvent.js.map
