goog.module('org.gwtproject.event.dom.client.DoubleClickEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MouseEvent = goog.require('org.gwtproject.event.dom.client.MouseEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let DoubleClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MouseEvent<DoubleClickHandler>}
  */
class DoubleClickEvent extends MouseEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DoubleClickEvent} */
 static $create__() {
  DoubleClickEvent.$clinit();
  let $instance = new DoubleClickEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_DoubleClickEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_DoubleClickEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_MouseEvent__();
 }
 /** @return {Type<DoubleClickHandler>} */
 static m_getType__() {
  DoubleClickEvent.$clinit();
  return DoubleClickEvent.f_TYPE__org_gwtproject_event_dom_client_DoubleClickEvent_;
 }
 /** @override @return {Type<DoubleClickHandler>} */
 m_getAssociatedType__() {
  return DoubleClickEvent.f_TYPE__org_gwtproject_event_dom_client_DoubleClickEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_DoubleClickHandler(/** DoubleClickHandler */ handler) {
  handler.m_onDoubleClick__org_gwtproject_event_dom_client_DoubleClickEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** DoubleClickHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_DoubleClickHandler(/**@type {DoubleClickHandler}*/ ($Casts.$to(arg0, DoubleClickHandler)));
 }
 
 static $clinit() {
  DoubleClickEvent.$clinit = () =>{};
  DoubleClickEvent.$loadModules();
  MouseEvent.$clinit();
  DoubleClickEvent.f_TYPE__org_gwtproject_event_dom_client_DoubleClickEvent_ = /**@type {!Type<DoubleClickHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_DBLCLICK__org_gwtproject_dom_client_BrowserEvents, DoubleClickEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoubleClickEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  DoubleClickHandler = goog.module.get('org.gwtproject.event.dom.client.DoubleClickHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DoubleClickEvent, 'org.gwtproject.event.dom.client.DoubleClickEvent');

/**@type {Type<DoubleClickHandler>}*/
DoubleClickEvent.f_TYPE__org_gwtproject_event_dom_client_DoubleClickEvent_;

exports = DoubleClickEvent; 
//# sourceMappingURL=DoubleClickEvent.js.map
